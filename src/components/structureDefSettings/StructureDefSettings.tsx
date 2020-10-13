import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button, Container, Divider, Typography } from "@material-ui/core";

import { RenderAttributesTree } from "types";
import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import { RootState } from "state/store";
import RenderComplexType from "components/structureDefSettings/complexTypesEditor/RenderComplexType";

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
        ...structureDefMeta,
        snapshot: { ...structureDefinition.snapshot }
      };
      if (structureDefinitionType === "resource") {
        dispatch(updateStructureDefProfile(structureDefinitonToEdit));
      } else if (structureDefinitionType === "extension") {
        dispatch(updateStructureDefExtension(structureDefinitonToEdit));
      }
    }
  };

  const createJSONTree = (items: RenderAttributesTree[]) => {
    const sDef: any = {};
    for (const item of items) {
      if (item.children.length === 0) {
        sDef[item.name] = undefined;
      } else {
        if (item.name !== "snapshot" && item.name !== "differential") {
          if (item.max === "1") sDef[item.name] = createJSONTree(item.children);
          else sDef[item.name] = [createJSONTree(item.children)];
        }
      }
    }
    return sDef;
  };
  const structureDefJSON = Object.assign(
    createJSONTree(structureDefinitionTree),
    structureDefinition
  );
  const [structureDefMeta, setStructureDefMeta] = useState(structureDefJSON);

  const onChangeStructureDefMeta = (path: string, value: any) => {
    if (value !== "") {
      const attributeKeys = path.split(".");
      const str = { ...structureDefMeta };
      let structureDefMetaAttr: any = str;
      for (const key of attributeKeys.slice(0, attributeKeys.length - 1)) {
        if (key[0] === "?") {
          const index = parseInt(key.substr(1));
          structureDefMetaAttr = structureDefMetaAttr[index];
        } else {
          structureDefMetaAttr = structureDefMetaAttr[key];
        }
      }
      structureDefMetaAttr[attributeKeys[attributeKeys.length - 1]] = value;
      setStructureDefMeta(str);
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
            setStructureDefJson={onChangeStructureDefMeta}
            name={""}
          />
        </div>
        <Divider />
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
