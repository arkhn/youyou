import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Container } from '@material-ui/core';
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
    ? createJSONTree(elementDefinitionTree, newElementDefinition)
    : createJSONTree(structureDefinitionTree, structureDefinition);

  const [elementDefJSON, setElementDefJSON] = useState<
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
    setElementDefJSON(merge(cloneDeep(emptyTree), newElementDefinition));
  }, [newElementDefinition]);

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

  return (
    <Container className={classes.formContainer}>
      <form className={classes.form}>
        {structureDefinitionType === 'element' && elementDefinitionTree && (
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
