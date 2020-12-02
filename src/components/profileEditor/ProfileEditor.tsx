import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Paper, Container, Typography, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';

import { RootState, useAppDispatch } from 'state/store';

import AttributeEditor from 'components/attributeEditor/AttributeEditor';
import { ButtonDownload, SnackBarWithClose } from 'components/smallComponents';
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
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import SliceDialogBox from './sliceDialogBox/SliceDialogBox';

export type OpenDialogState = {
  open: boolean;
  add?: boolean;
  message?: { title: string; text: string };
};

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
  const [open, setOpen] = useState<OpenDialogState>({ open: false });
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

  /**
   * If click on pizza icon, open a dialog box to give a name to the slice
   * @param e event onClick
   * @param node attribute selected on click
   */
  const handleClickSliceAdd = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree,
    openDialog: OpenDialogState
  ): void => {
    e.stopPropagation();
    setOpen(openDialog);
    setNodeToSlice(node);
  };

  /**
   * If click on delete icon, open a dialog box to confirm the action
   * @param e event onClick
   * @param node attribute selected on click
   */
  const handleClickSliceDelete = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree,
    openDialog: OpenDialogState
  ): void => {
    e.stopPropagation();
    setNodeToSlice(node);
    setOpen(openDialog);
  };

  /**
   * If the slice name is not empty and unique, add it to the structure definition in the store
   * @param event onClick event
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

  /**
   * Delete the slice after user validation
   * @param event
   */
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
      <SnackBarWithClose />
      <SliceDialogBox
        attributeSelected={open}
        sliceNameError={sliceNameError}
        onChangeName={(e): void => {
          setSliceName(e.target.value);
        }}
        onCloseClick={(): void => {
          setOpen({ open: false });
          setSliceName('');
        }}
        onFormSubmit={
          open.add === false ? handleSubmitSliceDelete : handleSubmitSliceAdd
        }
      />
    </div>
  );
};

export default ProfileEditor;
