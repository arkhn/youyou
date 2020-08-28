import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";

import {
  String,
  UnsignedInt
} from "../../../resources/ts/proto/r4/core/datatypes_pb";

import { StructureDefinition } from "../../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

type AttributeEditorProps = {
  structureDef: StructureDefinition.AsObject;
};

const AttributeEditor: React.FC<AttributeEditorProps> = ({ structureDef }) => {
  const { datatypes } = useSelector((state: RootState) => {
    return state.codeSystem;
  });

  const getDifferentialElementById = (id: string) => {
    if (structureDef && structureDef.differential) {
      for (const obj of structureDef?.differential?.element) {
        if (obj.id === ((id as unknown) as String.AsObject)) {
          return obj;
        }
      }
    }
  };

  const getSnapshotElementById = (id: string) => {
    if (structureDef && structureDef.snapshot) {
      for (const obj of structureDef?.snapshot?.element) {
        if (obj.id === ((id as unknown) as String.AsObject)) {
          return obj;
        }
      }
    }
  };

  let extensionElement = getDifferentialElementById("Extension");

  const [short, setShort] = useState(
    ((extensionElement.short as unknown) as string) | ""
  );
  const [definition, setDefinition] = useState(
    (extensionElement.definition as unknown) as string
  );
  const [comment, setComment] = useState(
    (extensionElement.comment as unknown) as string
  );
  const [minCardinality, setMinCardinality] = useState(
    (extensionElement.min as unknown) as string
  );
  const [maxCardinality, setMaxCardinality] = useState(
    (extensionElement.max as unknown) as string
  );
  const [dataType, setDataType] = useState("");

  const handleEditExtension = (e: any) => {
    e.preventDefault();
    let extensionElement = getDifferentialElementById("Extension");

    if (extensionElement) {
      extensionElement.short = (short as unknown) as String.AsObject;
      extensionElement.definition = (definition as unknown) as String.AsObject;
      extensionElement.comment = (comment as unknown) as String.AsObject;
      extensionElement.min = (minCardinality as unknown) as UnsignedInt.AsObject;
      extensionElement.max = (maxCardinality as unknown) as String.AsObject;
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleEditExtension}>
        <TextField
          id="short"
          label="Short"
          value={short}
          onBlur={(event: any): void => {
            setShort(event.target.value);
          }}
        />
        <br />
        <TextField
          id="definition"
          label="Definition"
          value={definition}
          onBlur={(event: any): void => {
            setDefinition(event.target.value);
          }}
        />
        <br />
        <TextField
          id="comment"
          label="Comment"
          value={comment}
          onBlur={(event: any): void => {
            setComment(event.target.value);
          }}
        />
        <br />
        <TextField
          id="minCardinality"
          label="Min"
          value={minCardinality}
          onBlur={(event: any): void => {
            setMinCardinality(event.target.value);
          }}
        />
        <TextField
          id="maxCardinality"
          label="Max"
          value={maxCardinality}
          onBlur={(event: any): void => {
            setMaxCardinality(event.target.value);
          }}
        />
        <br />
        <ul>
          <Autocomplete
            id="Data type"
            options={
              datatypes?.concept.map((c) => {
                return c.code;
              }) || []
            }
            style={{ width: 300 }}
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
