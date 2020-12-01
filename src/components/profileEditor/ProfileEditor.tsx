import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding
} from '@ahryman40k/ts-fhir-types/lib/R4';
import {
  Paper,
  Container,
  Typography,
  Breadcrumbs,
  Button,
  IconButton,
  Dialog
} from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';

import { RootState, useAppDispatch } from 'state/store';

import AttributeEditor from 'components/attributeEditor/AttributeEditor';
import {
  ButtonDownload,
  CssTextField,
  SnackBarWithClose
} from 'components/smallComponents';
import Navbar from 'components/navbar/Navbar';
import StructureDefinitionTree from 'components/structureDefinitionTree/StructureDefinitionTree';
import StructureDefSettings from 'components/structureDefSettings/StructureDefSettings';
import useStyles from 'components/profileEditor/style';
import { RenderAttributesTree } from 'types';
import {
  selectAttributeId,
  addSlice,
  deleteSlice
} from 'state/reducers/resource';
import {
  createComplexSnapshot,
  createElementDefinitionTree,
  findIndex
} from 'components/profileEditor/utils';
import { Clear } from '@material-ui/icons';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import { Alert, AlertTitle } from '@material-ui/lab';

const ProfileEditor: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const {
    loading,
    structureDefinition,
    structureDefMeta,
    selectedAttributeId,
    primitiveTypes,
    complexTypes
  } = useSelector((state: RootState) => {
    const {
      loading,
      structureDefinition,
      structureDefMeta,
      selectedAttributeId
    } = state.resourceSlice;
    const { primitiveTypes, complexTypes } = state.fhirDataTypes;
    return {
      loading,
      structureDefinition,
      structureDefMeta,
      selectedAttributeId,
      primitiveTypes,
      complexTypes
    };
  });

  const [newStructureDef, setNewStructureDef] = useState(structureDefinition);
  const [open, setOpen] = useState<{
    open: boolean;
    add?: boolean;
    message?: { title: string; text: string };
  }>({ open: false });
  const [sliceName, setSliceName] = useState('');
  const [sliceNameError, setSliceNameError] = useState({
    error: false,
    message: ''
  });
  const [nodeToSlice, setNodeToSlice] = useState<
    RenderAttributesTree | undefined
  >(undefined);
  const splitedAttributeSelected = selectedAttributeId?.split('.');
  const attribute = newStructureDef?.snapshot?.element?.find(
    (att: IElementDefinition) => att.id === selectedAttributeId
  );

  useEffect(() => {
    setNewStructureDef(structureDefinition);
  }, [structureDefinition]);

  const renderBreadcrumbs = (): JSX.Element | JSX.Element[] | undefined => {
    if (structureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };
  const attributesForUI =
    newStructureDef &&
    newStructureDef.snapshot &&
    createComplexSnapshot(
      newStructureDef.snapshot.element,
      primitiveTypes,
      complexTypes
    );

  const handleClickSliceAdd = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.stopPropagation();
    setOpen({
      open: true,
      message: { title: 'Add a slice', text: `to ${node.newPath}` },
      add: true
    });
    setNodeToSlice(node);
  };

  /**
   * If the slice name is not empty and unique, add it to the structure definition in the store
   * @param event (on click event)
   */
  const handleSubmitSliceAdd = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    const existingPath =
      newStructureDef &&
      nodeToSlice &&
      newStructureDef?.snapshot?.element.find(
        (element) => element.id === nodeToSlice.newPath + ':' + sliceName
      );
    if (nodeToSlice && newStructureDef && open) {
      if (sliceName !== '' && !existingPath) {
        const index = findIndex(newStructureDef, nodeToSlice);
        dispatch(
          addSlice({
            nodeToSlice,
            structureDefinition: newStructureDef,
            sliceName,
            index
          })
        );
        dispatch(
          setSnackbarOpen({
            message: 'Slice successfully added !',
            severity: 'success'
          })
        );
        setSliceNameError({ error: false, message: '' });
        setOpen({ open: false });
        setNodeToSlice(undefined);
      } else if (sliceName !== '' && existingPath) {
        setSliceNameError({
          message:
            'This slice is already existing with the same name. If you want to create another slice, please choose a new name.',
          error: true
        });
      } else if (sliceName === '') {
        setSliceNameError({
          message: 'Please choose a name for this slice',
          error: true
        });
      }
    }
  };

  const handleClickSliceDelete = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.stopPropagation();
    setNodeToSlice(node);
    setOpen({
      open: true,
      message: {
        title: 'Delete a slice',
        text: `Are you sure you want to delete ${node.newPath}`
      },
      add: false
    });
  };

  const handleSubmitSliceDelete = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    const newElements = cloneDeep(newStructureDef);
    if (newElements && nodeToSlice) {
      dispatch(
        setSnackbarOpen({
          message: 'Slice successfully deleted !',
          severity: 'success'
        })
      );
      dispatch(
        deleteSlice({ node: nodeToSlice, structureDefinition: newElements })
      );
      setOpen({ open: false });
    }
  };

  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.preventDefault();
    dispatch(selectAttributeId(node.newPath));
    const findAttribute = structureDefinition?.snapshot?.element.find(
      (att: IElementDefinition) => att.id === node.newPath
    );
    if (!findAttribute) {
      const elementDefinitionType = complexTypes.find(
        (type: RenderAttributesTree) => type.id === 'ElementDefinition'
      );
      if (elementDefinitionType) {
        const newAttribute = createElementDefinitionTree(
          elementDefinitionType.children
        );
        const newElement: IElementDefinition = {
          ...newAttribute,
          base: {
            min: node.min,
            max: node.max,
            path: node.id
          },
          min: node.min,
          max: node.max,
          id: node.newPath,
          path: node.newPath,
          definition: node.definition,
          binding: node.binding
            ? (node.binding as IElementDefinitionBinding)
            : undefined
        };
        const structureDefToEdit = cloneDeep(structureDefinition);
        structureDefToEdit?.snapshot?.element.push(newElement);
        setNewStructureDef(structureDefToEdit);
      }
    }
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (!structureDefinition) {
    return <>Error</>;
  }

  return (
    <div>
      <Navbar />
      <SnackBarWithClose />
      <Dialog open={open.open} className={classes.modalContainer}>
        <Paper className={classes.modalPaper}>
          <IconButton
            className={classes.modalPaperClose}
            onClick={(): void => {
              setOpen({ open: false });
              setSliceName('');
            }}
          >
            <Clear color="error" />
          </IconButton>
          <Typography variant="h1">
            {open.message && open.message.title}
          </Typography>
          <Typography>{open.message && open.message.text}</Typography>
          {sliceNameError.error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {sliceNameError.message}
            </Alert>
          )}
          <form
            onSubmit={
              open.add === false
                ? handleSubmitSliceDelete
                : handleSubmitSliceAdd
            }
          >
            {open.add === true && (
              <CssTextField
                variant="outlined"
                label="slice name"
                autoFocus
                error={sliceNameError.error}
                onChange={(
                  event: React.FocusEvent<
                    HTMLInputElement | HTMLTextAreaElement
                  >
                ): void => {
                  setSliceName(`${event.target.value}`);
                }}
              />
            )}
            <Button color="secondary" variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Dialog>
      <div className={classes.mapping}>
        <Paper className={clsx(classes.paperLeft, classes.paper)}>
          <Typography variant="h1">{structureDefinition.name}</Typography>
          <Container className={classes.treeView}>
            <StructureDefinitionTree
              onLabelClick={handleClick}
              uiAttributes={attributesForUI}
              structureDefinitionId={structureDefinition.id}
              onPizzaClick={handleClickSliceAdd}
              onTrashClick={handleClickSliceDelete}
            />
          </Container>
          <ButtonDownload
            text="Download profile"
            toDownload={structureDefinition}
          />
        </Paper>
        <Container className={classes.containerRight}>
          <Breadcrumbs className={classes.marginBottom}>
            {renderBreadcrumbs()}
          </Breadcrumbs>
          <Paper className={clsx(classes.paperRight, classes.paper)}>
            {structureDefMeta && newStructureDef && (
              <StructureDefSettings
                structureDefinition={newStructureDef}
                structureDefinitionType="resource"
              />
            )}
            {selectedAttributeId && attribute && newStructureDef && (
              <AttributeEditor
                attribute={attribute}
                structureDefinition={newStructureDef}
              />
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ProfileEditor;
