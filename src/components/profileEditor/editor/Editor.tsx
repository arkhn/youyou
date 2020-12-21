import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Paper, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

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

type EditorProps = {
  structureDefinition: IStructureDefinition;
  structureDefinitionType: 'resource' | 'extension' | 'element';
};

const Editor: React.FC<EditorProps> = ({
  structureDefinition,
  structureDefinitionType
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

  const elementDefinitionTree = complexTypes?.find(
    (element: RenderAttributesTree) => element.id === 'ElementDefinition'
  )?.children;

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

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
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
    if (elementDefJSON)
      return elementDefJSON.id
        ?.split('.')
        .map((split: string) => <Typography key={split}>{split}</Typography>);
    else return <Typography>Metadata</Typography>;
  };

  return (
    <div>
      <Breadcrumbs>{renderBreadcrumbs()}</Breadcrumbs>
      <Paper>
        <form>
          {elementDefJSON && elementDefinitionTree && newElementDefinition && (
            <RenderComplexType
              attributes={elementDefinitionTree}
              complexTypes={complexTypes}
              structureDefJSON={elementDefJSON}
              primitiveTypes={primitiveTypes}
              name={''}
              onChangeValue={(path, value): void =>
                setElementDefJSON(
                  onChangeElementJSON(path, value, elementDefJSON)
                )
              }
              handleDelete={(path, i): void =>
                setElementDefJSON(onDeleteComplexType(path, i, elementDefJSON))
              }
              handleAdd={(path, value): void =>
                setElementDefJSON(onAddComplexType(path, value, elementDefJSON))
              }
            />
          )}
          {structureDefJSON && (
            <RenderComplexType
              attributes={structureDefinitionTree}
              complexTypes={complexTypes}
              structureDefJSON={structureDefJSON}
              primitiveTypes={primitiveTypes}
              name={''}
              onChangeValue={(path, value): void =>
                setStructureDefJSON(
                  onChangeElementJSON(path, value, structureDefJSON)
                )
              }
              handleDelete={(path, i): void =>
                setStructureDefJSON(
                  onDeleteComplexType(path, i, structureDefJSON)
                )
              }
              handleAdd={(path, value): void =>
                setStructureDefJSON(
                  onAddComplexType(path, value, structureDefJSON)
                )
              }
            />
          )}
          {!newElementDefinition && <div>Select a valid attribute</div>}
        </form>
        <div>
          <Button variant="contained" color="secondary" onClick={submit}>
            Submit
          </Button>
          <Typography color="textSecondary">* Required Fields</Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Editor;
