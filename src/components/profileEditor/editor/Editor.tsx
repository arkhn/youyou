import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Paper, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';
import clsx from 'clsx';

import { updateStructureDefProfile } from 'state/reducers/resource';
import { RootState, useAppDispatch } from 'state/store';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import { RenderAttributesTree } from 'types';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import {
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';

import useStyles from 'components/profileEditor/editor/style';
import { createComplexTypes } from 'state/utils';

type EditorProps = {
  structureDefinition: IStructureDefinition;
  structureDefinitionType: 'resource' | 'extension' | 'element';
  classNameForm?: string;
};

const Editor: React.FC<EditorProps> = ({
  structureDefinition,
  structureDefinitionType,
  classNameForm
}) => {
  const {
    complexTypes,
    primitiveTypes,
    structureDefinitionTree,
    newElementDefinition
  } = useSelector((state: RootState) => {
    const {
      complexTypes,
      primitiveTypes,
      structureDefinitionTree
    } = state.fhirDataTypes;
    const { newElementDefinition } = state.resourceSlice;
    return {
      complexTypes,
      primitiveTypes,
      newElementDefinition,
      structureDefinitionTree
    };
  });

  const dispatch = useAppDispatch();
  const classes = useStyles();

  const createElementDefTree = useCallback(() => {
    const cloneComplexType = cloneDeep(
      complexTypes?.find(
        (element: RenderAttributesTree) => element.id === 'ElementDefinition'
      )?.children
    );
    if (newElementDefinition && newElementDefinition.type) {
      const toModify = cloneComplexType?.find((elem) =>
        elem.name.includes('fixed')
      );
      if (toModify) {
        if (newElementDefinition.type.length === 1) {
          toModify.type = newElementDefinition.type[0].code;
          const children = createComplexTypes(
            complexTypes,
            [toModify],
            primitiveTypes
          );
          toModify.children = children[0].children;
        } else {
          toModify.type = newElementDefinition.type;
        }
      }
    }
    return cloneComplexType;
  }, [complexTypes, newElementDefinition, primitiveTypes]);

  const [elementDefinitionTree, setElementDefinitionTree] = useState(
    createElementDefTree
  );

  const createElementJSON = useCallback((): IElementDefinition => {
    const elementDefTreeJSON =
      elementDefinitionTree &&
      createElementDefinitionTree(elementDefinitionTree);
    return merge(cloneDeep(elementDefTreeJSON), newElementDefinition);
  }, [elementDefinitionTree, newElementDefinition]);

  const createStructureDefJSON = useCallback((): IStructureDefinition => {
    const structureDefTreeJSON: IStructureDefinition = createJSONTree(
      structureDefinitionTree,
      structureDefinition
    );
    return merge(cloneDeep(structureDefTreeJSON), structureDefinition);
  }, [structureDefinitionTree, structureDefinition]);

  const [elementDefJSON, setElementDefJSON] = useState<
    IElementDefinition | undefined
  >(structureDefinitionType === 'element' ? createElementJSON() : undefined);

  const [structureDefJSON, setStructureDefJSON] = useState<
    IStructureDefinition | undefined
  >(
    structureDefinitionType === 'resource'
      ? createStructureDefJSON()
      : undefined
  );

  console.log(elementDefJSON);

  useEffect(() => {
    setElementDefinitionTree(createElementDefTree);
  }, [createElementDefTree]);

  useEffect(() => {
    if (newElementDefinition && structureDefinitionType === 'element') {
      setElementDefJSON(createElementJSON());
      setStructureDefJSON(undefined);
    } else if (structureDefinitionType === 'resource') {
      setStructureDefJSON(createStructureDefJSON());
      setElementDefJSON(undefined);
    } else if (structureDefinitionType === 'element' && !newElementDefinition) {
      setStructureDefJSON(undefined);
    }
  }, [
    newElementDefinition,
    structureDefinitionType,
    createElementJSON,
    createStructureDefJSON
  ]);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (structureDefinitionType === 'element' && structureDefinition) {
      dispatch(
        setSnackbarOpen({
          severity: 'success',
          message: 'Attribute edited !'
        })
      );
      dispatch(
        updateStructureDefProfile({
          structureDefinition: structureDefinition,
          elementDefinition: elementDefJSON
        })
      );
    } else if (structureDefinitionType === 'resource' && structureDefJSON) {
      dispatch(
        setSnackbarOpen({
          severity: 'success',
          message: 'Structure Definition edited !'
        })
      );
      dispatch(
        updateStructureDefProfile({ structureDefinition: structureDefJSON })
      );
    }
  };

  const renderBreadcrumbs = (): React.ReactNode => {
    if (newElementDefinition && elementDefJSON) {
      return (
        <Breadcrumbs className={classes.breadcrumbs}>
          {elementDefJSON.id?.split('.').map((split: string) => (
            <Typography key={split}>{split}</Typography>
          ))}
        </Breadcrumbs>
      );
    } else if (structureDefJSON) {
      return (
        <Breadcrumbs className={classes.breadcrumbs}>
          <Typography>Metadata</Typography>
        </Breadcrumbs>
      );
    } else {
      return undefined;
    }
  };

  const renderAttributes = (): React.ReactNode => {
    if (elementDefJSON && elementDefinitionTree && newElementDefinition) {
      return (
        <RenderComplexType
          attributes={elementDefinitionTree}
          complexTypes={complexTypes}
          structureDefJSON={elementDefJSON}
          primitiveTypes={primitiveTypes}
          name={''}
          onChangeValue={(path, value) =>
            setElementDefJSON(onChangeElementJSON(path, value, elementDefJSON))
          }
          handleDelete={(path, i) =>
            setElementDefJSON(onDeleteComplexType(path, i, elementDefJSON))
          }
          handleAdd={(path, value) =>
            setElementDefJSON(onAddComplexType(path, value, elementDefJSON))
          }
        />
      );
    } else if (structureDefJSON) {
      return (
        <RenderComplexType
          attributes={structureDefinitionTree}
          complexTypes={complexTypes}
          structureDefJSON={structureDefJSON}
          primitiveTypes={primitiveTypes}
          name={''}
          onChangeValue={(path, value) =>
            setStructureDefJSON(
              onChangeElementJSON(path, value, structureDefJSON)
            )
          }
          handleDelete={(path, i) =>
            setStructureDefJSON(onDeleteComplexType(path, i, structureDefJSON))
          }
          handleAdd={(path, value) =>
            setStructureDefJSON(onAddComplexType(path, value, structureDefJSON))
          }
        />
      );
    } else {
      return (
        <Typography variant="h2">Please select a valid attribute.</Typography>
      );
    }
  };

  return (
    <div className={classes.editorContainer}>
      {renderBreadcrumbs()}
      <Paper className={classes.paperRight}>
        <form className={clsx(classNameForm, classes.formContainer)}>
          {renderAttributes()}
        </form>
        <div className={classes.formFooter}>
          {(newElementDefinition || structureDefJSON) && (
            <>
              <Button variant="contained" color="secondary" onClick={submit}>
                Submit
              </Button>
              <Typography color="textSecondary">* Required Fields</Typography>
            </>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Editor;
