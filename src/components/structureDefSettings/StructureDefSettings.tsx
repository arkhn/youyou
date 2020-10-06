import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
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

import useStyles from "components/structureDefSettings/style";
import {
  InputTooltip,
  InputDateTooltip,
  SelectTooltip
} from "components/smallComponents";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import {
  createComplexeType,
  editAttribute,
  tooltipValues
} from "components/structureDefSettings/utils";
import RenderComplexType from "components/structureDefSettings/complexTypesEditor/RenderComplexType";
import { RenderAttributesTree } from "types";
import { RootState } from "state/store";

type StructureDefSettingsProps = {
  structureDefinition: IStructureDefinition;
  structureDefinitionType?: "resource" | "extension";
};

const StructureDefSettings: React.FC<StructureDefSettingsProps> = ({
  structureDefinition,
  structureDefinitionType = "resource"
}) => {
  const { complexTypes, primitiveTypes, structureDefinitionTree } = useSelector(
    (state: RootState) => state.fhirDataTypes
  );
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
      dispatch(setSnackbarOpen("success", "Done !"));
    } else {
      dispatch(setSnackbarOpen("error", "Please fill all the required fields"));
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

      if (structureDefinitionType === "resource") {
        dispatch(updateStructureDefProfile(structureDefinitonToEdit));
      } else if (structureDefinitionType === "extension") {
        dispatch(updateStructureDefExtension(structureDefinitonToEdit));
      }
    }
  };

  const newStructureDef: RenderAttributesTree[] = [];

  createComplexeType(
    structureDefinitionTree,
    newStructureDef,
    primitiveTypes,
    complexTypes
  );

  return (
    <Container className={classes.formContainer}>
      <form className={classes.form}>
        <div>
          <RenderComplexType
            contactPoint={structureDefinitionTree}
            complexTypes={complexTypes}
            contactToEdit={newStructureDef[0]}
            primitiveTypes={primitiveTypes}
            complexeTypePattern={newStructureDef[0]}
          />
        </div>
        <InputTooltip
          label="Id"
          value={id || ""}
          tool={tooltipValues.id}
          onBlur={(event) => setId(event.target.value)}
        />
        <InputTooltip
          label="Url *"
          value={url || ""}
          tool={tooltipValues.url}
          onBlur={(event) => setUrl(event.target.value)}
          error={url ? false : true}
        />
        <InputTooltip
          label="Name of profile *"
          value={name || ""}
          tool={tooltipValues.name}
          onBlur={(event) => setName(event.target.value)}
          error={name ? false : true}
        />
        <InputTooltip
          label="Title"
          value={title || ""}
          tool={tooltipValues.title}
          onBlur={(event) => setTitle(event.target.value)}
        />
        <SelectTooltip
          label="Status"
          value={status}
          tool={tooltipValues.status}
          onChange={(e) =>
            setStatus(e.target.value as StructureDefinitionStatusKind)
          }
          choices={[
            { value: "active", label: "Active" },
            { value: "draft", label: "Draft" },
            { value: "retired", label: "Retired" },
            { value: "unknown", label: "Unknown" }
          ]}
        />
        <FormControlLabel
          value="experimental"
          control={
            <Checkbox onChange={(e) => setExperimental(e.target.checked)} />
          }
          label="experimental"
        />
        <InputDateTooltip
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
        <InputTooltip
          label="Publisher"
          value={publisher || ""}
          tool={tooltipValues.publisher}
          onBlur={(event) => setPublisher(event.target.value)}
        />
        <InputTooltip
          classname={classes.bigInput}
          label={"Description"}
          value={description || ""}
          tool={tooltipValues.description}
          onBlur={(event) => setDescription(event.target.value)}
        />
        <InputTooltip
          label="Purpose"
          value={purpose || ""}
          tool={tooltipValues.purpose}
          onBlur={(event) => setPurpose(event.target.value)}
        />
        <InputTooltip
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
