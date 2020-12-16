import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Container } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';

import {
  updateStructureDefExtension,
  updateStructureDefProfile
} from 'state/reducers/resource';
import { RootState, useAppDispatch } from 'state/store';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import { RenderAttributesTree } from 'types';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import {
  findIndex,
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType
} from 'components/profileEditor/utils';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';

import useStyles from './style';

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
  const classes = useStyles();

  const elementDefinitionTree =
    structureDefinitionType === 'element' &&
    complexTypes?.find(
      (element: RenderAttributesTree) => element.id === 'ElementDefinition'
    )?.children;

  const emptyTree: IElementDefinition = elementDefinitionTree
    ? createJSONTree(elementDefinitionTree, cloneDeep(newElementDefinition))
    : createJSONTree(structureDefinitionTree, cloneDeep(structureDefinition));

  const [elementJSON, setElementJSON] = useState<
    IElementDefinition | undefined
  >(
    structureDefinitionType === 'element'
      ? merge(cloneDeep(emptyTree), newElementDefinition)
      : undefined
  );

  const [structureDefJSON, setStructureDefJSON] = useState(
    structureDefinitionType === 'resource' ||
      structureDefinitionType === 'extension'
      ? merge(cloneDeep(emptyTree), structureDefinition)
      : undefined
  );

  useEffect(() => {
    setElementJSON(merge(cloneDeep(emptyTree), newElementDefinition));
  }, [newElementDefinition]);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    if (structureDefinitionType === 'element') {
      if (structureDefinition && elementJSON && elementJSON.path) {
        const toFind = structureDefinition?.snapshot?.element.find(
          (elem) => elem.path === elementJSON.path
        );
        const indexToPush = findIndex(structureDefinition, elementJSON.path);
        const newSDef = cloneDeep(structureDefinition);
        if (newSDef && newSDef.snapshot) {
          toFind
            ? newSDef.snapshot.element.splice(indexToPush - 1, 1, elementJSON)
            : newSDef.snapshot.element.splice(indexToPush, 0, elementJSON);
          dispatch(
            setSnackbarOpen({
              severity: 'success',
              message: 'Attribute edited !'
            })
          );
          dispatch(updateStructureDefProfile(newSDef));
        }
      }
    } else if (
      structureDefinitionType === 'resource' &&
      structureDefJSON &&
      structureDefinition.snapshot
    ) {
      const newSDef = {
        ...structureDefJSON,
        snapshot: { ...structureDefinition.snapshot }
      };
      dispatch(
        setSnackbarOpen({
          severity: 'success',
          message: 'Structure Definition edited !'
        })
      );
      dispatch(updateStructureDefProfile(newSDef));
    } else if (
      structureDefinitionType === 'extension' &&
      structureDefJSON &&
      structureDefinition.snapshot
    ) {
      const newSDef = {
        ...structureDefJSON,
        snapshot: { ...structureDefinition.snapshot }
      };
      dispatch(
        setSnackbarOpen({ severity: 'success', message: 'Extension edited !' })
      );
      dispatch(updateStructureDefExtension(newSDef));
    }
  };

  return (
    <Container className={classes.formContainer}>
      <form className={classes.form}>
        {structureDefinitionType === 'element' && elementDefinitionTree && (
          <RenderComplexType
            attributes={elementDefinitionTree}
            complexTypes={complexTypes}
            structureDefJSON={elementJSON}
            primitiveTypes={primitiveTypes}
            name={''}
            onChangeValue={(path, value): void =>
              setElementJSON(onChangeElementJSON(path, value, elementJSON))
            }
            handleDelete={(path, i): void =>
              setElementJSON(onDeleteComplexType(path, i, elementJSON))
            }
            handleAdd={(path, value): void =>
              setElementJSON(onAddComplexType(path, value, elementJSON))
            }
          />
        )}
        {(structureDefinitionType === 'resource' ||
          structureDefinitionType === 'extension') &&
          structureDefinitionTree && (
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
      </form>
      <div className={classes.endForm}>
        <Button
          variant="contained"
          color="secondary"
          onClick={submit}
          className={classes.submitButton}
        >
          Submit
        </Button>
        <Typography color="textSecondary">* Required Fields</Typography>
      </div>
    </Container>
  );
};

export default Editor;
