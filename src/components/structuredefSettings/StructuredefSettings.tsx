import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "../../state/actions/resourceActions";
import { editAttribute } from "./utils";
import {
  IStructureDefinition,
  StructureDefinitionStatusKind
} from "@ahryman40k/ts-fhir-types/lib/R4";

type StructuredefSettingsProps = {
  structureDefinition: IStructureDefinition;
  type?: "resource" | "extension";
};

const StructuredefSettings: React.FC<StructuredefSettingsProps> = ({
  structureDefinition,
  type = "resource"
}) => {
  const dispatch = useDispatch();

  // LOCAL STATES
  const [id, setId] = useState(structureDefinition.id);
  const [url, setUrl] = useState(structureDefinition.url);
  const [name, setName] = useState(structureDefinition.name);
  const [publisher, setPublisher] = useState(structureDefinition.publisher);
  const [title, setTitle] = useState(structureDefinition.title);
  const [status, setStatus] = useState(structureDefinition.status);
  const [experimental, setExperimental] = useState(
    structureDefinition.experimental
  );
  const [date, setDate] = useState(
    new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString()
  );
  const [description, setDescription] = useState(
    structureDefinition.description
  );
  const [purpose, setPurpose] = useState(structureDefinition.purpose);
  const [copyright, setCopyright] = useState(structureDefinition.copyright);
  const [abstract, setAbstract] = useState(structureDefinition.abstract);

  // CHANGE STATE
  const handleEditSettings = (e: React.FormEvent<HTMLFormElement>) => {
    if (structureDefinition) {
      e.preventDefault();
      const structureDefinitonToEdit = { ...structureDefinition };
      // content required
      structureDefinitonToEdit.url = url;
      structureDefinitonToEdit.name = name;
      structureDefinitonToEdit.abstract = abstract;
      structureDefinitonToEdit.status = status;
      // content not required
      structureDefinitonToEdit.date = date;
      editAttribute(structureDefinitonToEdit, "id", id);
      editAttribute(structureDefinitonToEdit, "publisher", publisher);
      editAttribute(structureDefinitonToEdit, "description", description);
      editAttribute(structureDefinitonToEdit, "purpose", purpose);
      editAttribute(structureDefinitonToEdit, "experimental", experimental);
      editAttribute(structureDefinitonToEdit, "title", title);
      editAttribute(structureDefinitonToEdit, "copyright", copyright);
    }
    if (type === "resource") {
      dispatch(updateStructureDefProfile(structureDefinition));
    } else if (type === "extension") {
      dispatch(updateStructureDefExtension(structureDefinition));
    }
  };

  const renderContact = (
    <>
      <label htmlFor="contactName">Contact Name</label>
      <input type="text" name="contactName" />
      <br />
      <select name="contactSystem">
        <option value="phone">Phone</option>
        <option value="fax">fax</option>
        <option value="email">email</option>
        <option value="pager">pager</option>
        <option value="url">url</option>
        <option value="sms">sms</option>
        <option value="other">other</option>
      </select>
      <br />
      <label htmlFor="contactValue">Value</label>
      <input type="text" name="contactValue" />
      <br />
      <select name="contactUse">
        <option value="home">home</option>
        <option value="work">work</option>
        <option value="temp">temporary</option>
        <option value="old">old</option>
        <option value="mobile">mobile</option>
      </select>
    </>
  );

  return (
    <>
      <h2>Structure definition Settings</h2>
      <form onSubmit={(e) => handleEditSettings(e)}>
        <label htmlFor="name">Name of profile</label>
        <input
          type="text"
          name="name"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="url">url</label>
        <input
          type="url"
          name="url"
          value={((url as unknown) as string) || ""}
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          value={id || ""}
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <label htmlFor="publisher">publisher</label>
        <input
          type="text"
          name="publisher"
          value={publisher || ""}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <br />
        <label htmlFor="copyright">copyright</label>
        <input
          type="text"
          name="copyright"
          value={copyright || ""}
          onChange={(e) => setCopyright(e.target.value)}
        />
        <br />
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          onChange={(e) =>
            setStatus(e.target.value as StructureDefinitionStatusKind)
          }
          defaultValue={status || ""}
        >
          <option value="active">active</option>
          <option value="draft">draft</option>
          <option value="retired">retired</option>
          <option value="unknown">unknown</option>
        </select>
        <br />
        <input
          type="datetime-local"
          onChange={(e) => {
            const date = new Date(e.target.value);
            setDate(
              new Date(
                date.getTime() - date.getTimezoneOffset() * 60000
              ).toISOString()
            );
          }}
        />
        <br />
        <label htmlFor="purpose">purpose</label>
        <input
          type="text"
          name="purpose"
          onChange={(e) => setPurpose(e.target.value)}
        />
        <br />
        <input
          type="checkbox"
          name="abstract"
          onChange={(e) => setAbstract(e.target.checked)}
        />
        <label htmlFor="abstract">abstract</label>
        <br />
        <input
          type="checkbox"
          name="experimental"
          onChange={(e) => {
            setExperimental(e.target.checked);
          }}
        />
        <label htmlFor="experimental">experimental</label>
        <br />
        {renderContact}
        <br />
        <input type="submit" value="submit" />
      </form>
      <hr />
    </>
  );
};

export default StructuredefSettings;
