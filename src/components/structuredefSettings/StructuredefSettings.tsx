import React, { useState, MouseEvent } from "react";
import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import { useDispatch } from "react-redux";
import {
  String,
  Markdown,
  Uri,
  DateTime,
  Id,
  Boolean,
} from "../../resources/ts/proto/r4/core/datatypes_pb";
import { getStructureDefSuccess } from "../../state/actions/resourceActions";
import {
  createExperimental,
  createTitle,
  createCopyright,
  createPurpose,
  createPublisher,
  createId,
  createDescription,
} from "./utils";

type StructuredefSettingsProps = {
  structureDefinition: StructureDefinition.AsObject | null;
};

const StructuredefSettings: React.FC<StructuredefSettingsProps> = ({
  structureDefinition,
}) => {
  const dispatch = useDispatch();
  // LOCAL STATES
  const [id, setId] = useState(
    structureDefinition ? structureDefinition.id : ""
  );
  const [url, setUrl] = useState(
    structureDefinition ? structureDefinition.url : ""
  );
  const [name, setName] = useState(
    structureDefinition ? structureDefinition.name : ""
  );
  const [publisher, setPublisher] = useState(
    structureDefinition ? structureDefinition.publisher : ""
  );
  const [title, setTitle] = useState(
    structureDefinition && structureDefinition.title
      ? structureDefinition.title
      : ""
  );
  const [status, setStatus] = useState(
    structureDefinition ? structureDefinition.status : ""
  );
  const [experimental, setExperimental] = useState(
    structureDefinition && structureDefinition.experimental
      ? structureDefinition.experimental
      : ""
  );
  const [date, setDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString()
  );
  const [description, setDescription] = useState(
    structureDefinition ? structureDefinition.description : ""
  );
  const [purpose, setPurpose] = useState(
    structureDefinition ? structureDefinition.purpose : ""
  );
  const [copyright, setCopyright] = useState(
    structureDefinition && structureDefinition.copyright
      ? structureDefinition.copyright
      : ""
  );
  const [kind, setKind] = useState(
    structureDefinition ? structureDefinition.kind : ""
  );
  const [abstract, setAbstract] = useState(
    structureDefinition ? structureDefinition.abstract : ""
  );

  // LOCAL ACTIONS
  const editId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId((e.target.value as unknown) as Id.AsObject);
  };
  // required
  const editUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl((e.target.value as unknown) as Uri.AsObject);
  };
  const editTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle((e.target.value as unknown) as String.AsObject);
  };
  // required
  const editName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((e.target.value as unknown) as String.AsObject);
  };
  // required
  const editStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(
      (e.target.value as unknown) as StructureDefinition.StatusCode.AsObject
    );
  };
  const editExperimental = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setExperimental((true as unknown) as Boolean.AsObject);
    } else {
      setExperimental((false as unknown) as Boolean.AsObject);
    }
  };
  const editDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    setDate(
      new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()
    );
  };
  const editPublisher = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublisher((e.target.value as unknown) as String.AsObject);
  };
  const editDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription((e.target.value as unknown) as Markdown.AsObject);
  };
  const editPurpose = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurpose((e.target.value as unknown) as Markdown.AsObject);
  };
  const editCopyright = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCopyright((e.target.value as unknown) as Markdown.AsObject);
  };
  // required
  const editKind = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setKind(
      (e.target.value as unknown) as StructureDefinition.KindCode.AsObject
    );
  };
  // required
  const editAbstract = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbstract((e.target.checked as unknown) as Boolean.AsObject);
  };

  // CHANGE STATE
  const handleEditSettings = (
    e: React.MouseEvent<HTMLInputElement, globalThis.MouseEvent>
  ) => {
    if (structureDefinition) {
      e.preventDefault();
      const structureToEdit = structureDefinition;
      // content required
      structureToEdit.url = url as Uri.AsObject;
      structureToEdit.name = name as String.AsObject;
      structureToEdit.kind = kind as StructureDefinition.KindCode.AsObject;
      structureToEdit.abstract = abstract as Boolean.AsObject;
      structureToEdit.status = status as StructureDefinition.StatusCode.AsObject;
      // content not required
      structureToEdit.date = (date as unknown) as DateTime.AsObject;
      createId(structureToEdit, id as Id.AsObject);
      createPublisher(structureToEdit, publisher as String.AsObject);
      createDescription(structureToEdit, description as String.AsObject);
      createPurpose(structureToEdit, purpose);
      createExperimental(structureToEdit, experimental);
      createTitle(structureToEdit, title);
      createCopyright(structureToEdit, copyright);
      dispatch(getStructureDefSuccess(structureToEdit));
    }
  };

  return (
    <>
      <h2>Structure definition Settings</h2>
      <form action="">
        <label htmlFor="name">Name of profile</label>
        <input
          type="text"
          name="name"
          value={(name as unknown) as string}
          onChange={(e) => editName(e)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={(description as unknown) as string}
          onChange={(e) => editDescription(e)}
        />
        <br />
        <label htmlFor="url">url</label>
        <input
          type="url"
          name="url"
          value={(url as unknown) as string}
          onChange={(e) => editUrl(e)}
        />
        <br />
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          value={(id as unknown) as string}
          onChange={(e) => editId(e)}
        />
        <br />
        <label htmlFor="publisher">publisher</label>
        <input
          type="text"
          name="publisher"
          value={(publisher as unknown) as string}
          onChange={(e) => editPublisher(e)}
        />
        <br />
        <label htmlFor="copyright">copyright</label>
        <input
          type="text"
          name="copyright"
          value={(copyright as unknown) as string}
          onChange={(e) => editCopyright(e)}
        />
        <br />
        <label htmlFor="title">title</label>
        <input type="text" name="title" onChange={(e) => editTitle(e)} />
        <br />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          onChange={(e) => editStatus(e)}
          defaultValue={(status as unknown) as string}
        >
          <option value="active">active</option>
          <option value="draft">draft</option>
          <option value="retired">retired</option>
          <option value="unknown">unknown</option>
        </select>
        <br />
        <label htmlFor="kind">Kind</label>
        <select
          name="kind"
          onChange={(e) => editKind(e)}
          defaultValue={(kind as unknown) as string}
        >
          <option value="resource">resource</option>
          <option value="primitive-type">primitive type</option>
          <option value="complex-type">complex type</option>
          <option value="logical">logical</option>
        </select>
        <br />
        <input type="datetime-local" onChange={(e) => editDate(e)} />
        <br />
        <label htmlFor="purpose">purpose</label>
        <input type="text" name="purpose" onChange={(e) => editPurpose(e)} />
        <br />
        <input
          type="checkbox"
          name="abstract"
          onChange={(e) => editAbstract(e)}
        />
        <label htmlFor="abstract">abstract</label>
        <br />
        <input
          type="checkbox"
          name="experimental"
          onChange={(e) => editExperimental(e)}
        />
        <label htmlFor="experimental">experimental</label>
        <br />
        <input
          type="submit"
          value="submit"
          onClick={(e) => handleEditSettings(e)}
        />
      </form>
      <hr />
    </>
  );
};

export default StructuredefSettings;
