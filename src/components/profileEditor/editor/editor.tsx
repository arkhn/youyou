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
  /* const number = /^[0-9]+$/;
  const baseMin = Number(attribute?.base?.min);
  const baseMax = attribute?.base?.max?.toString();

  const [minState, setMinState] = useState(Number(attribute?.min));
  const [maxState, setMaxState] = useState(attribute?.max?.toString());
  const [cardinality, setCardinality] = useState(
    `${attribute?.min}|${attribute?.max}`
  );
  const [defaultValueMin, setDefaultValueMin] = useState(
    attribute?.min?.toString()
  );
  const [defaultValueMax, setDefaultValueMax] = useState(attribute?.max);

  const dispatch = useAppDispatch();

  const classes = useStyles();

  useEffect(() => {
    setMaxState(attribute?.max);
    setMinState(Number(attribute?.min));
    setDefaultValueMin(attribute?.min?.toString());
    setDefaultValueMax(attribute?.max);
    setCardinality(`${attribute?.min}|${attribute?.max}`);
    setNewStructureDefinition(newStructureDefinition);
  }, [attribute]);

  useEffect(() => {
    setCardinality(minState + '|' + maxState);
    setDefaultValueMin(minState.toString());
    setDefaultValueMax(maxState);
  }, [minState, maxState]);

  const handleCardinality = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newCardinality: string
  ): void => {
    if (newCardinality) {
      setCardinality(newCardinality);
      const cardinalityValues = newCardinality.split('|');
      setMinState(Number(cardinalityValues[0]));
      setMaxState(cardinalityValues[1]);
    }
  };

  const changeProfileState = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    if (attribute && newStructureDefinition) {
      attribute.min = minState;
      attribute.max = maxState;
      dispatch(updateStructureDefProfile(newStructureDefinition));
    }
  };

  const handleInputMin = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (event.target.value.match(number) || event.target.value === '') {
      setDefaultValueMin(event.target.value);
    }
  };

  const handleBlurInputMin = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (
      Number(event.target.value) >= baseMin &&
      (Number(event.target.value) <= Number(maxState) || maxState === '*')
    ) {
      if (event.target.value !== '') {
        setMinState(Number(event.target.value));
        setCardinality(minState + '|' + maxState);
      }
    }
    setDefaultValueMin(minState.toString());
  };

  const handleInputMax = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (
      event.target.value.match(number) ||
      event.target.value === '*' ||
      event.target.value === ''
    ) {
      setDefaultValueMax(event.target.value);
      if (
        (Number(event.target.value) >= minState &&
          Number(event.target.value) <= Number(baseMax)) ||
        (baseMax === '*' && Number(event.target.value) >= minState) ||
        (baseMax === '*' && event.target.value === '*')
      ) {
        if (event.target.value !== '') {
          setMaxState(event.target.value);
          setCardinality(minState + '|' + maxState);
        }
      }
    }
  };

  return (
    <form onSubmit={changeProfileState}>
      <Typography variant="h1">Cardinality</Typography>
      <p>
        Cardinality base.min: {baseMin}, current state: {minState}, non base:
        {attribute?.min}
      </p>
      <p>
        Cardinality base.max: {baseMax}, current state: {maxState}, non base:
        {attribute?.max}
      </p>

      <div>
        <CssTextField
          label="min"
          variant="outlined"
          className={classes.cardinalityInput}
          onChange={handleInputMin}
          onBlur={handleBlurInputMin}
          value={defaultValueMin}
        />
        <CssTextField
          label="max"
          variant="outlined"
          className={classes.cardinalityInput}
          onChange={handleInputMax}
          onBlur={(): void => setDefaultValueMax(maxState)}
          value={defaultValueMax}
        />
        <CssToggleButtonGroup
          value={cardinality}
          exclusive
          onChange={handleCardinality}
        >
          {allCardinalities.map((cardi, index) => (
            <ToggleButton
              key={index}
              value={`${cardi.min}|${cardi.max}`}
              disabled={isDisabledInput(cardi.min, cardi.max, baseMin, baseMax)}
            >
              {cardi.min}...{cardi.max}
            </ToggleButton>
          ))}
        </CssToggleButtonGroup>
      </div>
      <br />
      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>
    </form>
  ); */
};

export default Editor;
