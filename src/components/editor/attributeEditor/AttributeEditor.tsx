import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { updateStructureDefProfile } from "state/actions/resourceActions";

import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { Typography, Button } from "@material-ui/core";
import { ToggleButton } from "@material-ui/lab";

import { CssToggleButtonGroupYouyou } from "components/smallComponents";

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
  const [minState, setMinState] = useState(baseMin);
  const [maxState, setMaxState] = useState(baseMax);
  const [cardinality, setCardinality] = useState(
    attribute.min + "|" + attribute.max
  );

  const dispatch = useDispatch();

  useEffect(() => {
    setCardinality(attribute.min + "|" + attribute.max);
  }, [attribute]);

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

  const changeProfileState = () => {
    if (attribute && structureDefinition) {
      attribute.min = minState;
      attribute.max = maxState;
      dispatch(updateStructureDefProfile(structureDefinition));
    }
  };

  return (
    <>
      <Typography variant="h1">Cardinality</Typography>
      <p>Cardinality min: {baseMin}</p>
      <p>Cardinality max: {baseMax}</p>
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
      <Button
        color="secondary"
        variant="contained"
        onClick={() => changeProfileState()}
      >
        Submit
      </Button>
    </>
  );
};

export default AttributeEditor;
