import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  IStructureDefinition,
  IElementDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import { RootState } from "state/store";
import { updateStructureDefExtension } from "state/actions/resourceActions";

type AttributeEditorProps = {
  structureDefinition: IStructureDefinition;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({
  structureDefinition
}) => {
  const { datatypes } = useSelector((state: RootState) => {
    return state.codeSystem;
  });
  const dispatch = useDispatch();
  let structureDef = { ...structureDefinition };

  const getElementById = (
    id: string,
    type: "differential" | "snapshot"
  ): IElementDefinition | undefined => {
    if (structureDef)
      if (type === "differential")
        for (const obj of structureDef?.differential?.element || []) {
          if (obj && obj.id === id) {
            return obj;
          }
        }
      else if (type === "snapshot")
        for (const obj of structureDef?.snapshot?.element || []) {
          if (obj && obj.id === id) {
            return obj;
          }
        }
  };

  let extensionElement = getElementById("Extension", "differential");

  const [short, setShort] = useState(
    extensionElement ? extensionElement.short : ""
  );
  const [definition, setDefinition] = useState(
    extensionElement ? extensionElement.definition : ""
  );
  const [comment, setComment] = useState(
    extensionElement ? extensionElement.comment : ""
  );
  const [minCardinality, setMinCardinality] = useState(
    extensionElement ? extensionElement.min : undefined
  );
  const [maxCardinality, setMaxCardinality] = useState(
    extensionElement ? extensionElement.max : ""
  );
  const [dataType, setDataType] = useState("");

  const handleEditExtension = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let extensionElement = getElementById("Extension", "differential");
    if (extensionElement) {
      extensionElement.short = short;
      extensionElement.definition = definition;
      extensionElement.comment = comment;
      extensionElement.min = minCardinality;
      extensionElement.max = maxCardinality;
    }

    extensionElement = getElementById("Extension", "snapshot");
    if (extensionElement) {
      extensionElement.short = short;
      extensionElement.definition = definition;
      extensionElement.comment = comment;
      extensionElement.min = minCardinality;
      extensionElement.max = maxCardinality;
    }

    extensionElement = getElementById("Extension.value[x]", "snapshot");
    if (extensionElement && extensionElement.type) {
      extensionElement.type[0].code = dataType;
    }

    extensionElement = getElementById("Extension.value[x]", "differential");
    if (extensionElement && extensionElement.type) {
      extensionElement.type[0].code = dataType;
    }
    dispatch(updateStructureDefExtension(structureDef));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleEditExtension}>
        <TextField
          id="short"
          label="Short"
          defaultValue={short}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => setShort(event.target.value)}
        />
        <br />
        <TextField
          id="definition"
          label="Definition"
          defaultValue={definition}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => setDefinition(event.target.value)}
        />
        <br />
        <TextField
          id="comment"
          label="Comment"
          defaultValue={comment}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => setComment(event.target.value)}
        />
        <br />
        <TextField
          id="minCardinality"
          label="Min"
          defaultValue={minCardinality}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => setMinCardinality(parseInt(event.target.value))}
        />
        <TextField
          id="maxCardinality"
          label="Max"
          defaultValue={maxCardinality}
          onBlur={(
            event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
          ): void => setMaxCardinality(event.target.value)}
        />
        <br />
        <ul>
          <Autocomplete
            id="Data type"
            options={
              datatypes?.concept?.map((c) => {
                return c.code;
              }) || []
            }
            style={{ width: 300 }}
            onChange={(event, value): void => setDataType(value as string)}
            renderInput={(params) => (
              <TextField {...params} label="Data type" variant="outlined" />
            )}
          />
        </ul>
        <input type="submit" value="Submit" />
      </form>
    </React.Fragment>
  );
};

export default AttributeEditor;
