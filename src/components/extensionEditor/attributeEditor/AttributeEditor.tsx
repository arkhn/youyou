import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { useDispatch } from "react-redux";
import { updateStructureDefExtension } from "../../../state/actions/resourceActions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

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

  const getElementById = (id: string, type: "differential" | "snapshot") => {
    if (structureDef)
      if (type === "differential")
        for (const obj of structureDef?.differential?.element || []) {
          if (obj && obj.id === (id as string)) {
            return obj;
          }
        }
      else if (type === "snapshot")
        for (const obj of structureDef?.snapshot?.element || []) {
          if (obj && obj.id === (id as string)) {
            return obj;
          }
        }
  };

  let extensionElement = getElementById("Extension", "differential");

  const [short, setShort] = useState(
    extensionElement ? (extensionElement.short as string) : ""
  );
  const [definition, setDefinition] = useState(
    extensionElement ? (extensionElement.definition as string) : ""
  );
  const [comment, setComment] = useState(
    extensionElement ? (extensionElement.comment as string) : ""
  );
  const [minCardinality, setMinCardinality] = useState(
    extensionElement ? (extensionElement.min as number) : ""
  );
  const [maxCardinality, setMaxCardinality] = useState(
    extensionElement ? (extensionElement.max as string) : ""
  );
  const [dataType, setDataType] = useState("");

  const handleEditExtension = (e: any) => {
    e.preventDefault();
    let extensionElement = getElementById("Extension", "differential");

    if (extensionElement) {
      extensionElement.short = short as string;
      extensionElement.definition = definition as string;
      extensionElement.comment = comment as string;
      extensionElement.min = minCardinality as number;
      extensionElement.max = maxCardinality as string;
    }

    extensionElement = getElementById("Extension", "snapshot");
    if (extensionElement) {
      extensionElement.short = short as string;
      extensionElement.definition = definition as string;
      extensionElement.comment = comment as string;
      extensionElement.min = minCardinality as number;
      extensionElement.max = maxCardinality as string;
    }

    /* extensionElement = getElementById("Extension.value[x]", "snapshot");
    if (extensionElement) {
      extensionElement.type[0].code = dataType as unknown) as String.AsObject;
    }

    extensionElement = getElementById("Extension.value[x]", "differential");
    if (extensionElement) {
      extensionElement.type[0].code = (dataType as unknown) as String.AsObject;
    } */
    dispatch(updateStructureDefExtension(structureDef));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleEditExtension}>
        <TextField
          id="short"
          label="Short"
          defaultValue={short}
          onBlur={(event: any): void => setShort(event.target.value)}
        />
        <br />
        <TextField
          id="definition"
          label="Definition"
          defaultValue={definition}
          onBlur={(event: any): void => setDefinition(event.target.value)}
        />
        <br />
        <TextField
          id="comment"
          label="Comment"
          defaultValue={comment}
          onBlur={(event: any): void => setComment(event.target.value)}
        />
        <br />
        <TextField
          id="minCardinality"
          label="Min"
          defaultValue={minCardinality}
          onBlur={(event: any): void => setMinCardinality(event.target.value)}
        />
        <TextField
          id="maxCardinality"
          label="Max"
          defaultValue={maxCardinality}
          onBlur={(event: any): void => setMaxCardinality(event.target.value)}
        />
        <br />
        <ul>
          <Autocomplete
            id="Data type"
            options={
              datatypes?.concept.map((c: any) => {
                return c.code;
              }) || []
            }
            style={{ width: 300 }}
            onChange={(event: any, value): void =>
              setDataType((value as unknown) as string)
            }
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
