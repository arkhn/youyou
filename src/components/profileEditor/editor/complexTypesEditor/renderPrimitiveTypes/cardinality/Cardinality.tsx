import React, { useEffect, useState } from 'react';

import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { ToggleButton } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

import {
  allCardinalities,
  isDisabledInput
} from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/cardinality/utils';
import {
  CssTextField,
  CssToggleButtonGroup,
  TooltipHelp
} from 'components/smallComponents';

import useStyles from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/cardinality/styles';

type CardinalityProps = {
  currentNodeJSON: IElementDefinition;
  onChangeValue: (path: string, value: any) => void;
  onChangeCardinality?: (
    firstPath: string,
    secondPath: string,
    firstValue: number,
    secondValue: string
  ) => void;
};

const Cardinality: React.FC<CardinalityProps> = ({
  currentNodeJSON,
  onChangeValue,
  onChangeCardinality
}) => {
  const classes = useStyles();
  const [defaultValueMin, setDefaultValueMin] = useState(
    currentNodeJSON.min?.toString()
  );
  const [defaultValueMax, setDefaultValueMax] = useState(currentNodeJSON.max);

  const baseMin = Number(currentNodeJSON?.base?.min);
  const baseMax = currentNodeJSON?.base?.max?.toString();

  const number = /^[0-9]+$/;

  const handleChangeMin = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.target.value.match(number) || event.target.value === '') {
      setDefaultValueMin(event.target.value);
    }
  };

  const handleBlurMin = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      baseMin !== undefined &&
      Number(defaultValueMin) >= baseMin &&
      (Number(defaultValueMin) <= Number(defaultValueMax) ||
        defaultValueMax === '*')
    ) {
      if (event.target.value !== '') {
        setDefaultValueMin(event.target.value);
        onChangeValue('min', Number(event.target.value));
      }
    } else {
      setDefaultValueMin(currentNodeJSON.min?.toString());
    }
  };

  const handleChangeMax = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDefaultValueMax(event.target.value);
  };

  const handleBlurMax = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      event.target.value.match(number) ||
      event.target.value === '*' ||
      event.target.value === ''
    ) {
      if (
        (Number(event.target.value) >= Number(currentNodeJSON.min) &&
          Number(event.target.value) <= Number(baseMax)) ||
        (baseMax === '*' &&
          Number(event.target.value) >= Number(currentNodeJSON.min)) ||
        (baseMax === '*' && event.target.value === '*')
      ) {
        if (event.target.value !== '') {
          setDefaultValueMax(event.target.value);
          onChangeValue('max', event.target.value);
        }
      } else setDefaultValueMax(currentNodeJSON.max);
    }
  };

  useEffect(() => {
    setDefaultValueMin(currentNodeJSON.min?.toString());
    setDefaultValueMax(currentNodeJSON.max);
  }, [currentNodeJSON]);

  return (
    <div className={classes.cardinalityContainer}>
      <div className={classes.cardinalityInformations}>
        <Typography variant="h2" className={classes.cardinalityTitle}>
          Cardinality
        </Typography>
        <TooltipHelp
          tool={
            'The minimum number of times this element SHALL appear in the instance, and the maximum number of times this element is permitted to appear in the instance.'
          }
        />
      </div>
      <div className={classes.cardinalityForm}>
        <CssTextField
          className={classes.inputCardinality}
          label="min"
          variant="outlined"
          value={defaultValueMin}
          onChange={handleChangeMin}
          onBlur={handleBlurMin}
        />
        <CssTextField
          className={classes.inputCardinality}
          label="max"
          variant="outlined"
          value={defaultValueMax}
          onChange={handleChangeMax}
          onBlur={handleBlurMax}
        />
        <CssToggleButtonGroup
          value={`${currentNodeJSON.min?.toString()}|${currentNodeJSON.max}`}
          exclusive
          onChange={(
            event: React.MouseEvent<HTMLElement, MouseEvent>,
            value: any
          ) => {
            if (value) {
              const newValue = value.split('|');
              onChangeCardinality &&
                onChangeCardinality(
                  'min',
                  'max',
                  Number(newValue[0]),
                  newValue[1]
                );
            }
          }}
        >
          {allCardinalities.map((cardi) => (
            <ToggleButton
              className={classes.cardinalityToggle}
              size="medium"
              key={`${cardi.min}|${cardi.max}`}
              value={`${cardi.min}|${cardi.max}`}
              disabled={isDisabledInput(cardi.min, cardi.max, baseMin, baseMax)}
            >
              {cardi.min}...{cardi.max}
            </ToggleButton>
          ))}
        </CssToggleButtonGroup>
      </div>
    </div>
  );
};

export default Cardinality;
