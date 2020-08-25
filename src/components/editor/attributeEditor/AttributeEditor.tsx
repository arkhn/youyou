import React, { useState } from "react";
import {
  ElementDefinition,
  UnsignedInt,
  String,
} from "../../../resources/ts/proto/r4/core/datatypes_pb";
import { StructureDefinition } from "../../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import { useDispatch } from "react-redux";
import { getStructureDefSuccess } from "../../../state/actions/resourceActions";
import { Typography } from "@material-ui/core";

type AttributeEditorProps = {
  attribute: ElementDefinition.AsObject | undefined;
  profile: StructureDefinition.AsObject | null;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  attribute,
  profile,
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
    if (cardiMin !== undefined && cardiMax !== undefined && min >= cardiMin) {
      if (cardiMax === "1") {
        if (max === "1" || max === "0") {
          return false;
        }
      } else if (cardiMax === "*") {
        if (max === "*" || max === "1" || max === "0") {
          return false;
        }
      }
    }
    return true;
  };

  const changeCardinality = (cardinality: string): void => {
    const cardinalityValues = cardinality.split("|");
    setMinState(Number(cardinalityValues[0]));
    setMaxState(cardinalityValues[1]);
  };

  const changeProfileState = () => {
    if (attribute && profile) {
      const cardinalityEditor = attribute;
      cardinalityEditor.min = (minState as unknown) as UnsignedInt.AsObject;
      cardinalityEditor.max = (maxState as unknown) as String.AsObject;
      dispatch(getStructureDefSuccess(profile));
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
        <input
          type="button"
          value="submit"
          onClick={() => changeProfileState()}
        />
      </form>
    );
  };

  return (
    <>
      <Typography variant="h2">AttributeEditor</Typography>
      <Typography variant="h1">Cardinality</Typography>
      <p>{attribute?.id}</p>
      <p>Cardinality min: {attribute?.min}</p>
      <p>Cardinality max: {attribute?.max}</p>
      {handleCardinality()}
    </>
  );
};

export default AttributeEditor;
