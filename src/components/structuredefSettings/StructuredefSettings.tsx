import React, { useState } from "react";
import { StructureDefinition } from "../../resources/ts/proto/r4/core/resources/structure_definition_pb";
import { useDispatch } from "react-redux";
import {
  String,
  Markdown,
  Uri,
  DateTime,
  Id,
  Boolean
} from "../../resources/ts/proto/r4/core/datatypes_pb";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "../../state/actions/resourceActions";
import {
  editExperimental,
  editTitle,
  editCopyright,
  editPurpose,
  editPublisher,
  editId,
  editDescription
} from "./utils";

type StructuredefSettingsProps = {
  structureDefinition: StructureDefinition.AsObject;
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
  const [kind, setKind] = useState(structureDefinition.kind);
  const [abstract, setAbstract] = useState(structureDefinition.abstract);

  // CHANGE STATE
  const handleEditSettings = (e: React.FormEvent<HTMLFormElement>) => {
    if (structureDefinition) {
      e.preventDefault();
      const structureDefinitonToEdit = { ...structureDefinition };
      // content required
      structureDefinitonToEdit.url = url as Uri.AsObject;
      structureDefinitonToEdit.name = name as String.AsObject;
      structureDefinitonToEdit.kind = kind as StructureDefinition.KindCode.AsObject;
      structureDefinitonToEdit.abstract = abstract as Boolean.AsObject;
      structureDefinitonToEdit.status = status as StructureDefinition.StatusCode.AsObject;
      // content not required
      structureDefinitonToEdit.date = (date as unknown) as DateTime.AsObject;
      editId(structureDefinitonToEdit, id as Id.AsObject);
      editPublisher(structureDefinitonToEdit, publisher as String.AsObject);
      editDescription(structureDefinitonToEdit, description as String.AsObject);
      editPurpose(structureDefinitonToEdit, purpose);
      editExperimental(structureDefinitonToEdit, experimental);
      editTitle(structureDefinitonToEdit, title);
      editCopyright(structureDefinitonToEdit, copyright);
      if (type === "resource") {
        dispatch(updateStructureDefProfile(structureDefinition));
      } else if (type === "extension") {
        dispatch(updateStructureDefExtension(structureDefinition));
      }
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
          value={((name as unknown) as string) || ""}
          onChange={(e) =>
            setName((e.target.value as unknown) as String.AsObject)
          }
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={((description as unknown) as string) || ""}
          onChange={(e) =>
            setDescription((e.target.value as unknown) as Markdown.AsObject)
          }
        />
        <br />
        <label htmlFor="url">url</label>
        <input
          type="url"
          name="url"
          value={((url as unknown) as string) || ""}
          onChange={(e) => setUrl((e.target.value as unknown) as Uri.AsObject)}
        />
        <br />
        <label htmlFor="id">id</label>
        <input
          type="text"
          name="id"
          value={((id as unknown) as string) || ""}
          onChange={(e) => setId((e.target.value as unknown) as Id.AsObject)}
        />
        <br />
        <label htmlFor="publisher">publisher</label>
        <input
          type="text"
          name="publisher"
          value={((publisher as unknown) as string) || ""}
          onChange={(e) =>
            setPublisher((e.target.value as unknown) as String.AsObject)
          }
        />
        <br />
        <label htmlFor="copyright">copyright</label>
        <input
          type="text"
          name="copyright"
          value={((copyright as unknown) as string) || ""}
          onChange={(e) =>
            setCopyright((e.target.value as unknown) as Markdown.AsObject)
          }
        />
        <br />
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setTitle((e.target.value as unknown) as String.AsObject)
          }
        />
        <br />
        <label htmlFor="status">Status</label>
        <select
          name="status"
          onChange={(e) =>
            setStatus(
              (e.target
                .value as unknown) as StructureDefinition.StatusCode.AsObject
            )
          }
          defaultValue={((status as unknown) as string) || ""}
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
          onChange={(e) =>
            setKind(
              (e.target
                .value as unknown) as StructureDefinition.KindCode.AsObject
            )
          }
          defaultValue={((kind as unknown) as string) || ""}
        >
          <option value="resource">resource</option>
          <option value="primitive-type">primitive type</option>
          <option value="complex-type">complex type</option>
          <option value="logical">logical</option>
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
          onChange={(e) =>
            setPurpose((e.target.value as unknown) as Markdown.AsObject)
          }
        />
        <br />
        <input
          type="checkbox"
          name="abstract"
          onChange={(e) =>
            setAbstract((e.target.checked as unknown) as Boolean.AsObject)
          }
        />
        <label htmlFor="abstract">abstract</label>
        <br />
        <input
          type="checkbox"
          name="experimental"
          onChange={(e) => {
            if (e.target.checked) {
              setExperimental((true as unknown) as Boolean.AsObject);
            } else {
              setExperimental((false as unknown) as Boolean.AsObject);
            }
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
