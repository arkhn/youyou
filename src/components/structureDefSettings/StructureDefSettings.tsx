import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button, Container, Typography } from "@material-ui/core";
import { cloneDeep, merge } from "lodash";

import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import { RootState } from "state/store";
import RenderComplexType from "components/structureDefSettings/complexTypesEditor/RenderComplexType";
import { createJSONTree } from "components/structureDefSettings/utils";

import useStyles from "components/structureDefSettings/style";

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

  const submit = () => {
    if (structureDefinition) {
      const structureDefinitonToEdit = {
        ...structureDefJSON,
        snapshot: { ...structureDefinition.snapshot }
      };
      if (structureDefinitionType === "resource") {
        dispatch(updateStructureDefProfile(structureDefinitonToEdit));
      } else if (structureDefinitionType === "extension") {
        dispatch(updateStructureDefExtension(structureDefinitonToEdit));
      }
    }
  };

  const emptyTree = createJSONTree(
    structureDefinitionTree,
    cloneDeep(structureDefinition)
  );
  const [structureDefJSON, setStructureDefJSON] = useState(
    merge(cloneDeep(emptyTree), structureDefinition)
  );

  const onDeleteComplexType = (path: string, i: number) => {
    const attributeKeys = path.split(".");
    const str = cloneDeep(structureDefJSON);
    let structureDefJSONAttr: any = str;
    for (const key of attributeKeys.slice(0, attributeKeys.length - 1)) {
      if (key[0] === "?") {
        const index = parseInt(key.substr(1));
        structureDefJSONAttr = structureDefJSONAttr[index];
      } else {
        structureDefJSONAttr = structureDefJSONAttr[key];
      }
    }
    structureDefJSONAttr[attributeKeys[attributeKeys.length - 1]].splice(i, 1);
    setStructureDefJSON(str);
  };

  const onAddComplexType = (path: string, value: any) => {
    const attributeKeys = path.split(".");
    const str = cloneDeep(structureDefJSON);
    let structureDefJSONAttr: any = str;
    for (const key of attributeKeys) {
      if (key[0] === "?") {
        const index = parseInt(key.substr(1));
        structureDefJSONAttr = structureDefJSONAttr[index];
      } else {
        structureDefJSONAttr = structureDefJSONAttr[key];
      }
    }
    structureDefJSONAttr.push(value);
    setStructureDefJSON(str);
  };

  const onChangeStructureDefJSON = (path: string, value: any) => {
    if (value !== "") {
      const attributeKeys = path.split(".");
      const str = { ...structureDefJSON };
      let structureDefJSONAttr: any = str;
      for (const key of attributeKeys.slice(0, attributeKeys.length - 1)) {
        if (key[0] === "?") {
          const index = parseInt(key.substr(1));
          structureDefJSONAttr = structureDefJSONAttr[index];
        } else {
          structureDefJSONAttr = structureDefJSONAttr[key];
        }
      }
      if (value !== "--select_a_value--")
        structureDefJSONAttr[attributeKeys[attributeKeys.length - 1]] = value;
      else
        structureDefJSONAttr[
          attributeKeys[attributeKeys.length - 1]
        ] = undefined;
      structureDefJSONAttr[attributeKeys[attributeKeys.length - 1]] = value;
      setStructureDefJSON(str);
    }
  };

  return (
    <Container className={classes.formContainer}>
      <form className={classes.form}>
        <div>
          <RenderComplexType
            attributes={structureDefinitionTree}
            complexTypes={complexTypes}
            structureDefJSON={structureDefJSON}
            primitiveTypes={primitiveTypes}
            handleTextFields={onChangeStructureDefJSON}
            handleDelete={onDeleteComplexType}
            handleAdd={onAddComplexType}
            name={""}
          />
        </div>
      </form>
      <div className={classes.endForm}>
        <Button
          className={classes.submitButton}
          variant="contained"
          color="secondary"
          onClick={(e) => {
            e.preventDefault();
            submit();
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
