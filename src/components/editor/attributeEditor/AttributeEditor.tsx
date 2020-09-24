import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateStructureDefProfile } from "state/actions/resourceActions";

import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { Typography, Button } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";

import {
  CssTextFieldYouyou,
  CssToggleButtonGroupYouyou
} from "components/smallComponents";
import useStyles from "components/editor/attributeEditor/style";

type AttributeEditorProps = {
  attribute: IElementDefinition;
  structureDefinition: IStructureDefinition;
};

const allCardinalities: { min: number; max: string }[] = [
  {
    min: 0,
    max: "0"
  },
  {
    min: 0,
    max: "1"
  },
  {
    min: 0,
    max: "*"
  },
  {
    min: 1,
    max: "1"
  },
  {
    min: 1,
    max: "*"
  }
];

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  attribute,
  structureDefinition
}) => {
  const baseMin = Number(attribute?.base?.min);
  const baseMax = attribute?.base?.max?.toString();
  const [minState, setMinState] = useState(Number(attribute.min));
  const [maxState, setMaxState] = useState(attribute.max?.toString());
  const [cardinality, setCardinality] = useState(
    attribute.min + "|" + attribute.max
  );
  const [defaultValueMin, setDefaultValueMin] = useState(
    attribute?.min?.toString()
  );
  const [defaultValueMax, setDefaultValueMax] = useState(attribute?.max);

  const number = /^[0-9]+$/;
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    setMaxState(attribute.max);
    setMinState(Number(attribute.min));
    setDefaultValueMin(attribute.min?.toString());
    setDefaultValueMax(attribute.max);
    setCardinality(attribute.min + "|" + attribute.max);
  }, [attribute]);

  useEffect(() => {
    setCardinality(minState + "|" + maxState);
    setDefaultValueMin(minState.toString());
    setDefaultValueMax(maxState);
  }, [minState, maxState]);

  const handleCardinality = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newCardinality: string
  ) => {
    if (newCardinality) {
      setCardinality(newCardinality);
      const cardinalityValues = newCardinality.split("|");
      setMinState(Number(cardinalityValues[0]));
      setMaxState(cardinalityValues[1]);
    }
  };

  const isDisabledInput = (min: number, max: string) => {
    if (
      baseMin !== undefined &&
      baseMax !== undefined &&
      min >= baseMin &&
      (baseMax === "*" || (baseMax === "1" && (max === "1" || max === "0")))
    ) {
      return false;
    }
    return true;
  };

  const changeProfileState = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (attribute && structureDefinition) {
      attribute.min = minState;
      attribute.max = maxState;
      dispatch(updateStructureDefProfile(structureDefinition));
    }
  };

  const inputMax = (
    <CssTextFieldYouyou
      label="max"
      variant="outlined"
      className={classes.cardinalityInput}
      onChange={(event) => {
        if (
          event.target.value.match(number) ||
          event.target.value === "*" ||
          event.target.value === ""
        ) {
          setDefaultValueMax(event.target.value);
          if (
            (Number(event.target.value) >= minState &&
              Number(event.target.value) <= Number(baseMax)) ||
            (baseMax === "*" && Number(event.target.value) >= minState) ||
            (baseMax === "*" && event.target.value === "*")
          ) {
            if (event.target.value !== "") {
              setMaxState(event.target.value);
              setCardinality(minState + "|" + maxState);
            }
          }
        }
      }}
      onBlur={() => setDefaultValueMax(maxState)}
      value={defaultValueMax}
    />
  );

  const inputMin = (
    <CssTextFieldYouyou
      label="min"
      variant="outlined"
      className={classes.cardinalityInput}
      onChange={(event) => {
        if (event.target.value.match(number) || event.target.value === "") {
          setDefaultValueMin(event.target.value);
          if (
            Number(event.target.value) >= baseMin &&
            (Number(event.target.value) <= Number(maxState) || maxState === "*")
          ) {
            if (event.target.value !== "") {
              setMinState(Number(event.target.value));
              setCardinality(minState + "|" + maxState);
            }
          }
        }
      }}
      onBlur={() => setDefaultValueMin(minState.toString())}
      value={defaultValueMin}
    />
  );

  return (
    <form onSubmit={changeProfileState}>
      <Typography variant="h1">Cardinality</Typography>
      <p>
        Cardinality min: {baseMin}, current: {minState}, attribute:{" "}
        {attribute.min}
      </p>
      <p>
        Cardinality max: {baseMax}, current: {maxState}, attribute:{" "}
        {attribute.max}
      </p>
      <div>
        {inputMin}
        {inputMax}
      </div>
      <CssToggleButtonGroupYouyou
        value={cardinality}
        exclusive
        onChange={handleCardinality}
      >
        {allCardinalities.map((cardi, index) => (
          <ToggleButton
            key={`cardi${index}`}
            value={`${cardi.min}|${cardi.max}`}
            disabled={isDisabledInput(cardi.min, cardi.max)}
          >
            {cardi.min}...{cardi.max}
          </ToggleButton>
        ))}
      </CssToggleButtonGroupYouyou>
      <Button type="submit" color="secondary" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default AttributeEditor;
