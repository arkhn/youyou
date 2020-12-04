import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  IStructureDefinition,
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Paper, Container, Typography, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';

import { RenderAttributesTree } from 'types';
import { RootState, useAppDispatch } from 'state/store';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import {
  selectAttributeId,
  addSlice,
  deleteSlice
} from 'state/reducers/resource';
import AttributeEditor from 'components/attributeEditor/AttributeEditor';
import { ButtonDownload, SnackBarWithClose } from 'components/smallComponents';
import Navbar from 'components/navbar/Navbar';
import StructureDefinitionTree from 'components/structureDefinitionTree/StructureDefinitionTree';
import StructureDefSettings from 'components/structureDefSettings/StructureDefSettings';
import {
  createComplexSnapshot,
  createElementDefinitionTree,
  findIndex
} from 'components/profileEditor/utils';
import SliceDialogBox from './sliceDialogBox/SliceDialogBox';

import useStyles from 'components/profileEditor/style';

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

  const [newStructureDef, setNewStructureDef] = useState<
    IStructureDefinition | undefined
  >(cloneDeep(structureDefinition));
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

  const attributesForUI =
    newStructureDef &&
    newStructureDef.snapshot &&
    createComplexSnapshot(
      newStructureDef.snapshot.element,
      primitiveTypes,
      complexTypes
    );
  /**
   * If click on add or delete icon, open a dialog box to confirm actions
   * @param e event onClick
   * @param node attribute selected on click
   */
  const handleClickForSlice = (
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
        (element) => element.id === `${nodeToSlice.newPath}:${sliceName}`
      );
    if (nodeToSlice && newStructureDef && open) {
      if (sliceName && !existingPath) {
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
      } else if (sliceName && existingPath) {
        setSliceNameError({
          message:
            'This slice is already existing with the same name. If you want to create another slice, please choose a new name.',
          error: true
        });
      } else if (!sliceName) {
        setSliceNameError({
          message: 'Please choose a name for this slice',
          error: true
        });
      }
      setSliceName('');
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
      setNodeToSlice(undefined);
    }
  };

  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.preventDefault();
    dispatch(selectAttributeId(node.newPath));
    const findAttribute = newStructureDef?.snapshot?.element.find(
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
        const structureDefToEdit = cloneDeep(newStructureDef);
        structureDefToEdit?.snapshot?.element.push(newElement);
        setNewStructureDef(structureDefToEdit);
      }
    }
  };

  const renderBreadcrumbs = (): React.ReactNode => {
    if (structureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  if (loading) {
    return <div>Loading</div>;
  }

  if (!newStructureDef) {
    return <>Error</>;
  }

  return (
    <div>
      <Navbar />
      <div className={classes.mapping}>
        <Paper className={clsx(classes.paperLeft, classes.paper)}>
          <Typography variant="h1">{newStructureDef?.name}</Typography>
          <Container className={classes.treeView}>
            <StructureDefinitionTree
              onLabelClick={handleClick}
              uiAttributes={attributesForUI}
              structureDefinitionId={newStructureDef?.id}
              handleClickSlices={handleClickForSlice}
            />
          </Container>
          <ButtonDownload
            text="Download profile"
            toDownload={newStructureDef}
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
          setSliceNameError({ error: false, message: '' });
        }}
        onFormSubmit={
          open.add === false ? handleSubmitSliceDelete : handleSubmitSliceAdd
        }
      />
    </div>
  );
};

export default ProfileEditor;
