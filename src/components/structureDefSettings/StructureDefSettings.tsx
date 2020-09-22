import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setSnackbarOpen } from "state/actions/snackbarActions";

import {
  IStructureDefinition,
  StructureDefinitionStatusKind
} from "@ahryman40k/ts-fhir-types/lib/R4";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Typography
} from "@material-ui/core";

import {
  InputWithHelpYouyou,
  InputDateYouyou,
  SelectYouyou
} from "components/smallComponents";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import {
  editAttribute,
  tooltipValues
} from "components/structureDefSettings/utils";

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
      dispatch(setSnackbarOpen("Done !", "success"));
    } else {
      dispatch(setSnackbarOpen("Please fill all the required fields", "error"));
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
    <Container className={classes.formContainer}>
      <form className={classes.form}>
        <InputWithHelpYouyou
          label="Id"
          value={id || ""}
          tool={tooltipValues.id}
          onBlur={(event) => setId(event.target.value)}
        />
        <InputWithHelpYouyou
          label="Url *"
          value={url || ""}
          tool={tooltipValues.url}
          onBlur={(event) => setUrl(event.target.value)}
          error={url ? false : true}
        />
        <InputWithHelpYouyou
          label="Name of profile *"
          value={name || ""}
          tool={tooltipValues.name}
          onBlur={(event) => setName(event.target.value)}
          error={name ? false : true}
        />
        <InputWithHelpYouyou
          label="Title"
          value={title || ""}
          tool={tooltipValues.title}
          onBlur={(event) => setTitle(event.target.value)}
        />
        <SelectYouyou
          label="Status"
          value={status}
          tool={tooltipValues.status}
          onChange={(e) =>
            setStatus(e.target.value as StructureDefinitionStatusKind)
          }
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
          tool={tooltipValues.date}
          onChange={(event) => {
            const date = new Date(event.target.value);
            setDate(
              new Date(
                date.getTime() - date.getTimezoneOffset() * 60000
              ).toISOString()
            );
          }}
        />
        <InputWithHelpYouyou
          label="Publisher"
          value={publisher || ""}
          tool={tooltipValues.publisher}
          onBlur={(event) => setPublisher(event.target.value)}
        />
        <InputWithHelpYouyou
          classname={classes.bigInput}
          label={"Description"}
          value={description || ""}
          tool={tooltipValues.description}
          onBlur={(event) => setDescription(event.target.value)}
        />
        <InputWithHelpYouyou
          label="Purpose"
          value={purpose || ""}
          tool={tooltipValues.purpose}
          onBlur={(event) => setPurpose(event.target.value)}
        />
        <InputWithHelpYouyou
          label="Copyright"
          value={copyright || ""}
          tool={tooltipValues.copyright}
          onBlur={(event) => setCopyright(event.target.value)}
        />
        <br />
        <FormControlLabel
          value="abstract"
          control={<Checkbox onChange={(e) => setAbstract(e.target.checked)} />}
          label="abstract"
        />
        <br />
      </form>
      <div className={classes.endForm}>
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
        <Typography color="textSecondary">* Required Fields</Typography>
      </div>
    </Container>
  );
};

export default StructureDefSettings;
