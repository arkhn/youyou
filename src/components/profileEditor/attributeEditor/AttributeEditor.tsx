import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Container } from '@material-ui/core';
import { ToggleButton } from '@material-ui/lab';

import { updateStructureDefProfile } from 'state/reducers/resource';
import { RootState, useAppDispatch } from 'state/store';
import { CssTextField, CssToggleButtonGroup } from 'components/smallComponents';
import { allCardinalities, isDisabledInput } from './utils';

import useStyles from 'components/profileEditor/attributeEditor/style';
import cloneDeep from 'lodash.clonedeep';
import { createJSONTree } from 'components/profileEditor/structureDefSettings/utils';
import { RenderAttributesTree } from 'types';
import merge from 'lodash.merge';
import get from 'lodash.get';

import set from 'lodash.set';
import RenderComplexType from 'components/profileEditor/structureDefSettings/complexTypesEditor/RenderComplexType';
import {
  findIndex,
  onChangeElementDefJSON,
  onDeleteComplexType,
  onAddComplexType
} from 'components/profileEditor/utils';

type AttributeEditorProps = {
  structureDefinition: IStructureDefinition;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  structureDefinition
}) => {
  const { complexTypes, primitiveTypes, newElementDefinition } = useSelector(
    (state: RootState) => {
      const { complexTypes, primitiveTypes } = state.fhirDataTypes;
      const { newElementDefinition } = state.resourceSlice;
      return { complexTypes, primitiveTypes, newElementDefinition };
    }
  );

  const dispatch = useAppDispatch();

  const elementDefinitionTree = complexTypes?.find(
    (element: RenderAttributesTree) => element.id === 'ElementDefinition'
  )?.children;

  const emptyTree: IElementDefinition =
    elementDefinitionTree &&
    createJSONTree(elementDefinitionTree, cloneDeep(newElementDefinition));

  const [elementDefJSON, setElementDefJSON] = useState<IElementDefinition>(
    merge(cloneDeep(emptyTree), newElementDefinition)
  );

  useEffect(() => {
    setElementDefJSON(merge(cloneDeep(emptyTree), newElementDefinition));
  }, [newElementDefinition]);

  const submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    if (structureDefinition && elementDefJSON.path) {
      const toFind = structureDefinition?.snapshot?.element.find(
        (elem) => elem.path === elementDefJSON.path
      );
      const indexToPush = findIndex(structureDefinition, elementDefJSON.path);
      const newSDef = cloneDeep(structureDefinition);
      if (newSDef && newSDef.snapshot) {
        toFind
          ? newSDef.snapshot.element.splice(indexToPush - 1, 1, elementDefJSON)
          : newSDef.snapshot.element.splice(indexToPush, 0, elementDefJSON);
        dispatch(updateStructureDefProfile(newSDef));
      }
    }
  };

  return (
    <Container>
      <form>
        {elementDefinitionTree && (
          <RenderComplexType
            attributes={elementDefinitionTree}
            complexTypes={complexTypes}
            structureDefJSON={elementDefJSON}
            primitiveTypes={primitiveTypes}
            name={''}
            onChangeValue={(path, value): void =>
              setElementDefJSON(
                onChangeElementDefJSON(path, value, elementDefJSON)
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
      </form>
      <div>
        <Button variant="contained" color="secondary" onClick={submit}>
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

export default AttributeEditor;
