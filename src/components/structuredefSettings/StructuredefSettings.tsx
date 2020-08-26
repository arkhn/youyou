import React, { useState } from "react";
import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import { useDispatch } from "react-redux";
import {
  String,
  DateTime,
  Markdown,
} from "../../resources/ts/proto/r4/core/datatypes_pb";
import { getStructureDefSuccess } from "../../state/actions/resourceActions";

type StructuredefSettingsProps = {
  profile: StructureDefinition.AsObject | null;
};

const StructuredefSettings: React.FC<StructuredefSettingsProps> = ({
  profile,
}) => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString()
  );
  const [name, setName] = useState(profile ? profile.name : null);
  const [description, setDescription] = useState(
    profile ? profile.description : null
  );

  const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((e.target.value as unknown) as String.AsObject);
  };

  const editDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription((e.target.value as unknown) as Markdown.AsObject);
  };

  const editTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setDate(
      new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()
    );
  };

  const handleEditSettings = () => {
    if (profile) {
      const profileToEdit = profile;
      profileToEdit.name = name as String.AsObject;
      profileToEdit.description = description as String.AsObject;
      profileToEdit.date = (date as unknown) as DateTime.AsObject;
      dispatch(getStructureDefSuccess(profileToEdit));
    }
  };

  return (
    <>
      <h2>Structure definition Settings</h2>
      <label htmlFor="name">Name of profile</label>
      <input type="text" name="name" onChange={(e) => editName(e)} />
      <br />
      <label htmlFor="name">Description</label>
      <input type="text" name="name" onChange={(e) => editDescription(e)} />
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
