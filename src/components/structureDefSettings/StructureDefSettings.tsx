import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button, Checkbox, FormControlLabel } from "@material-ui/core";

import {
  InputWithHelpYouyou,
  InputDateYouyou,
  SnackBarYouyou,
  SelectYouyou
} from "components/smallComponents";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import { editAttribute } from "components/structureDefSettings/utils";

import useStyles from "components/structureDefSettings/style";

type StructureDefSettingsProps = {
  structureDefinition: IStructureDefinition;
  type?: "resource" | "extension";
};

const StructureDefSettings: React.FC<StructureDefSettingsProps> = ({
  structureDefinition,
  type = "resource"
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
  const [snackbarErrorMessage, setSnackbarErrorMessage] = useState("");
  const [snackbarSuccessMessage, setSnackbarSuccessMessage] = useState("");

  const checkErrorForm = () => {
    if (!url || !name) {
      return true;
    } else {
      return false;
    }
  };

  const checkForm = () => {
    if (!checkErrorForm()) {
      handleEditSettings();
      setSnackbarSuccessMessage("success !");
      setTimeout(() => {
        setSnackbarSuccessMessage("");
      }, 3000);
    } else {
      setSnackbarErrorMessage("error !");
      setTimeout(() => {
        setSnackbarErrorMessage("");
      }, 3000);
    }
  };

  // CHANGE STATE
  const handleEditSettings = () => {
    if (structureDefinition) {
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

      if (type === "resource") {
        dispatch(updateStructureDefProfile(structureDefinitonToEdit));
      } else if (type === "extension") {
        dispatch(updateStructureDefExtension(structureDefinitonToEdit));
      }
    }
  };

  return (
    <form className={classes.form}>
      <InputWithHelpYouyou
        label="Id"
        value={id || ""}
        tool="The version can be globally unique, or scoped by the Logical Id of the resource."
        setter={setId}
      />
      <InputWithHelpYouyou
        label="Url"
        value={url || ""}
        tool="The identifier that is used to identify this structure when it is referenced in a specification, model, design or an instance. This URL is where the structure can be accessed."
        setter={setUrl}
        error={url ? false : true}
      />
      <InputWithHelpYouyou
        label="Name of profile"
        value={name || ""}
        tool="A Computer-ready name (e.g. a token) that identifies the structure - suitable for code generation. Note that this name (and other names relevant for code generation, including element & slice names, codes etc) may collide with reserved words in the relevant target language, and code generators will need to handle this"
        setter={setName}
        error={name ? false : true}
      />
      <InputWithHelpYouyou
        label="Title"
        value={title || ""}
        tool="A free text natural language name identifying the structure"
        setter={setTitle}
      />
      <SelectYouyou
        label="Status"
        value={status}
        setter={setStatus}
        choices={["active", "draft", "retired", "unknown"]}
      />
      <FormControlLabel
        value="experimental"
        control={
          <Checkbox onChange={(e) => setExperimental(e.target.checked)} />
        }
        label="experimental"
      />
      <InputDateYouyou
        label="Date"
        value={new Date(Date.now()).toISOString().slice(0, -5)}
        tool="The date this version of the structure was published"
        setter={setDate}
      />
      <InputWithHelpYouyou
        label="Publisher"
        value={publisher || ""}
        tool='Details of the individual or organization who accepts responsibility for publishing the structure. This helps establish the "authority/credibility" of the structure.'
        setter={setPublisher}
      />
      <InputWithHelpYouyou
        classname={classes.bigInput}
        label={"Description"}
        value={description || ""}
        tool={
          "A free text natural language description of the structure and its use."
        }
        setter={setDescription}
      />
      <InputWithHelpYouyou
        label="Purpose"
        value={purpose || ""}
        tool="Why this structure was created - what the intent of it is"
        setter={setPurpose}
      />
      <InputWithHelpYouyou
        label="Copyright"
        value={copyright || ""}
        tool="Use and/or publishing restrictions"
        setter={setCopyright}
      />
      <br />
      <FormControlLabel
        value="abstract"
        control={<Checkbox onChange={(e) => setAbstract(e.target.checked)} />}
        label="abstract"
      />
      <br />
      <Button
        className={classes.submitButton}
        variant="contained"
        color="secondary"
        onClick={(e) => {
          e.preventDefault();
          checkForm();
        }}
      >
        Submit
      </Button>
      <SnackBarYouyou message={snackbarErrorMessage} severity="error" />
      <SnackBarYouyou message={snackbarSuccessMessage} severity="success" />
    </form>
  );
};

export default StructureDefSettings;
