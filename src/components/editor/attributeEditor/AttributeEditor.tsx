import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateStructureDefProfile } from "state/actions/resourceActions";
import { Typography, Button } from "@material-ui/core";
import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";

type AttributeEditorProps = {
  attribute: IElementDefinition | undefined;
  structureDefinition: IStructureDefinition | null;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  attribute,
  structureDefinition
}) => {
  const [minState, setMinState] = useState(Number(attribute?.base?.min));
  const [maxState, setMaxState] = useState(attribute?.base?.max?.toString());
  const dispatch = useDispatch();

  const isDisabledInput = (
    cardiMin: number | undefined,
    cardiMax: string | undefined,
    min: number,
    max: string
  ) => {
    if (
      cardiMin !== undefined &&
      cardiMax !== undefined &&
      min >= cardiMin &&
      (cardiMax === "*" || (cardiMax === "1" && (max === "1" || max === "0")))
    ) {
      return false;
    }
    return true;
  };

  const changeCardinality = (cardinality: string): void => {
    const cardinalityValues = cardinality.split("|");
    setMinState(Number(cardinalityValues[0]));
    setMaxState(cardinalityValues[1]);
  };

  const changeProfileState = () => {
    if (attribute && structureDefinition) {
      const cardinalityEditor = attribute;
      cardinalityEditor.min = minState;
      cardinalityEditor.max = maxState;
      dispatch(updateStructureDefProfile(structureDefinition));
    }
  };

  const handleCardinality = () => {
    const cardiMax: string | undefined = attribute?.base?.max?.toString();
    const cardiMin: number | undefined = Number(attribute?.base?.min);

    return (
      <form>
        <input
          type="radio"
          name="cardinality"
          onChange={(e) => changeCardinality(e.target.value)}
          value="0|0"
          disabled={isDisabledInput(cardiMin, cardiMax, 0, "0")}
        />
        <label>0...0</label>
        <br />
        <input
          type="radio"
          name="cardinality"
          onChange={(e) => changeCardinality(e.target.value)}
          value="0|1"
          disabled={isDisabledInput(cardiMin, cardiMax, 0, "1")}
        />
        <label>0...1</label>
        <br />
        <input
          type="radio"
          name="cardinality"
          onChange={(e) => changeCardinality(e.target.value)}
          value="0|*"
          disabled={isDisabledInput(cardiMin, cardiMax, 0, "*")}
        />
        <label>0...*</label>
        <br />
        <input
          type="radio"
          name="cardinality"
          onChange={(e) => changeCardinality(e.target.value)}
          value="1|1"
          disabled={isDisabledInput(cardiMin, cardiMax, 1, "1")}
        />
        <label>1...1</label>
        <br />
        <input
          type="radio"
          name="cardinality"
          onChange={(e) => changeCardinality(e.target.value)}
          value="1|*"
          disabled={isDisabledInput(cardiMin, cardiMax, 1, "*")}
        />
        <label>1...*</label>
        <br />
        <Button
          color="secondary"
          variant="contained"
          onClick={() => changeProfileState()}
        >
          Submit
        </Button>
      </form>
    );
  };

  return (
    <>
      <Typography variant="h1">Cardinality</Typography>
      <p>{attribute?.id}</p>
      <p>Cardinality min: {attribute?.min}</p>
      <p>Cardinality max: {attribute?.max}</p>
      {handleCardinality()}
    </>
  );
};

export default AttributeEditor;
