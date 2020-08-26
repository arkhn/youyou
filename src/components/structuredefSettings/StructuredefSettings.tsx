import React, { useState } from "react";
import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import { useDispatch } from "react-redux";
import {
  String,
  DateTime,
  Markdown,
  Uri,
  Id,
} from "../../resources/ts/proto/r4/core/datatypes_pb";
import { getStructureDefSuccess } from "../../state/actions/resourceActions";

type StructuredefSettingsProps = {
  structureDefinition: StructureDefinition.AsObject | null;
};

const StructuredefSettings: React.FC<StructuredefSettingsProps> = ({
  structureDefinition,
}) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString()
  );
  const [url, setUrl] = useState(
    structureDefinition ? structureDefinition.url : null
  );
  const [name, setName] = useState(
    structureDefinition ? structureDefinition.name : null
  );
  const [description, setDescription] = useState(
    structureDefinition ? structureDefinition.description : null
  );
  const [id, setId] = useState(
    structureDefinition ? structureDefinition.id : null
  );

  const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((e.target.value as unknown) as String.AsObject);
  };

  const editDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription((e.target.value as unknown) as Markdown.AsObject);
  };

  const editUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl((e.target.value as unknown) as Uri.AsObject);
  };

  const editId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId((e.target.value as unknown) as Id.AsObject);
  };

  const editTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setDate(
      new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()
    );
  };

  console.log(structureDefinition);

  const handleEditSettings = () => {
    if (structureDefinition) {
      const structureToEdit = structureDefinition;
      structureToEdit.name = name as String.AsObject;
      structureToEdit.description = description as String.AsObject;
      structureToEdit.date = (date as unknown) as DateTime.AsObject;
      structureToEdit.url = url as Uri.AsObject;
      structureToEdit.id = id as Id.AsObject;
      dispatch(getStructureDefSuccess(structureToEdit));
    }
  };

  return (
    <>
      <h2>Structure definition Settings</h2>
      <label htmlFor="name">Name of profile</label>
      <input type="text" name="name" onChange={(e) => editName(e)} />
      <br />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        onChange={(e) => editDescription(e)}
      />
      <br />
      <label htmlFor="url">url</label>
      <input type="text" name="url" onChange={(e) => editUrl(e)} />
      <br />
      <label htmlFor="id">id</label>
      <input type="text" name="id" onChange={(e) => editId(e)} />
      <br />
      <input type="datetime-local" onChange={(e) => editTime(e)} />
      <input
        type="button"
        value="submit"
        onClick={() => handleEditSettings()}
      />
      <hr />
    </>
  );
};

export default StructuredefSettings;
