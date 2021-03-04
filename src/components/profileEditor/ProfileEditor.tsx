import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { IStructureDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { Paper, Typography } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';

import { SimplifiedAttributes } from 'types';
import { RootState, useAppDispatch } from 'state/store';
import { getBackboneElements } from 'state/reducers/fhirDataTypes';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import {
  addSlice,
  deleteSlice,
  createCurrentElementDefinition
} from 'state/reducers/resource';
import { ButtonDownload, SnackBarWithClose } from 'components/smallComponents';
import Editor from 'components/profileEditor/editor/Editor';
import Navbar from 'components/navbar/Navbar';
import StructureDefinitionTree from 'components/structureDefinitionTree/StructureDefinitionTree';
import {
  createComplexSnapshot,
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
    error,
    structureDefinition,
    structureDefMeta,
    primitiveTypes,
    complexTypes
  } = useSelector((state: RootState) => {
    const {
      loading,
      structureDefinition,
      structureDefMeta,
      error
    } = state.resourceSlice;
    const { primitiveTypes, complexTypes } = state.fhirDataTypes;
    return {
      loading,
      structureDefinition,
      structureDefMeta,
      primitiveTypes,
      complexTypes,
      error
    };
  });

  const [newStructureDef, setNewStructureDef] = useState<
    IStructureDefinition | undefined
  >(structureDefinition);

  const [open, setOpen] = useState<OpenDialogState>({ open: false });
  const [sliceName, setSliceName] = useState('');
  const [sliceNameError, setSliceNameError] = useState({
    error: false,
    message: ''
  });
  const [nodeToSlice, setNodeToSlice] = useState<
    SimplifiedAttributes | undefined
  >(undefined);

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
   * @param node simplified attribute selected on click
   * @param openDialog state for dialog box
   */
  const handleClickForSlice = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: SimplifiedAttributes,
    openDialog: OpenDialogState
  ) => {
    setNodeToSlice(node);
    setOpen(openDialog);
  };

  /**
   * If the slice name is not empty and unique, add it to the structure definition in the store
   * @param event onClick event
   */
  const handleSubmitSliceAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const existingPath =
      newStructureDef &&
      nodeToSlice &&
      newStructureDef?.snapshot?.element.find(
        (element) => element.id === `${nodeToSlice.newPath}:${sliceName}`
      );
    if (nodeToSlice && newStructureDef && open) {
      if (sliceName && !existingPath && nodeToSlice.newPath) {
        const index = findIndex(newStructureDef, nodeToSlice.newPath);
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
  const handleSubmitSliceDelete = (event: React.FormEvent<HTMLFormElement>) => {
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

  const selectAttributeToEdit = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: SimplifiedAttributes
  ) => {
    e.preventDefault();
    if (node.type === 'BackboneElement')
      dispatch(getBackboneElements(node.children));
    else dispatch(getBackboneElements(undefined));
    dispatch(createCurrentElementDefinition(node));
  };

  if (error) {
    return <div>Error</div>;
  } else if (
    newStructureDef &&
    !loading &&
    !error &&
    newStructureDef.snapshot &&
    newStructureDef.snapshot.element[0].id
  ) {
    return (
      <div>
        <Navbar />
        <div className={classes.profileEditorContainer}>
          <Paper className={classes.structureDefTreeContainer}>
            <Typography variant="h1">{newStructureDef.name}</Typography>
            <StructureDefinitionTree
              onLabelClick={selectAttributeToEdit}
              uiAttributes={attributesForUI}
              structureDefinitionId={newStructureDef.snapshot.element[0].id}
              handleClickSlices={handleClickForSlice}
              className={classes.containerTreeAndEditor}
            />
            <ButtonDownload
              text="Download profile"
              toDownload={newStructureDef}
            />
          </Paper>
          {newStructureDef && (
            <Editor
              classNameForm={classes.containerTreeAndEditor}
              structureDefinition={newStructureDef}
              structureDefinitionType={
                structureDefMeta ? 'resource' : 'element'
              }
            />
          )}
        </div>
        <SnackBarWithClose />
        <SliceDialogBox
          attributeSelected={open}
          sliceNameError={sliceNameError}
          onChangeName={(e) => {
            setSliceName(e.target.value);
          }}
          onCloseClick={() => {
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
  } else {
    return <>Loading</>;
  }
};

export default ProfileEditor;
