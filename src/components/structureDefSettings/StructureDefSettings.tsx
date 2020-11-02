import React, { useEffect, useState } from "react";

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

import useStyles from "components/structureDefSettings/style";
import { createJSONTree } from "./utils";

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

  const [emptyTree, setEmptyTree] = useState(
    createJSONTree(structureDefinitionTree, structureDefinition)
  );
  const structureDefJSON = merge(cloneDeep(emptyTree), structureDefinition);
  const [structureDefMeta, setStructureDefMeta] = useState(structureDefJSON);

  const onDeleteComplexType = (path: string, i: number) => {
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
    console.log(path, i);
    /*     structureDefMetaAttr[attributeKeys[attributeKeys.length - 1]].splice(i, 1);
    emptyTree[attributeKeys[attributeKeys.length - 1]].splice(i, 1);
    setStructureDefMeta(merge(cloneDeep(emptyTree), str));
    setStructureDefJSON(merge(cloneDeep(emptyTree), str)); */
  };

  const onAddComplexType = (path: string) => {
    const attributeKeys = path.split(".");
    const str = { ...structureDefMeta };
    const empty = { ...emptyTree };
    let structureDefMetaAttr: any = str;
    let emptyTreeAttr: any = empty;
    if (attributeKeys.length === 1) {
      empty[attributeKeys[0]].push(emptyTree[attributeKeys[0]][0]);
      str[attributeKeys[0]].push(emptyTree[attributeKeys[0]][0]);
      setEmptyTree(empty);
      setStructureDefMeta(str);
    } else {
      for (const key of attributeKeys.slice(0, attributeKeys.length)) {
        if (key[0] === "?") {
          const index = parseInt(key.substr(1));
          structureDefMetaAttr = structureDefMetaAttr[index];
          emptyTreeAttr = emptyTreeAttr[index];
        } else {
          structureDefMetaAttr = structureDefMetaAttr[key];
          emptyTreeAttr = emptyTreeAttr[key];
        }
      }
      emptyTreeAttr.push(emptyTreeAttr[0]);
      structureDefMetaAttr.push(emptyTreeAttr[0]);
      setEmptyTree(empty);
      setStructureDefMeta(str);
    }
  };

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
      if (value !== "--select_a_value--")
        structureDefMetaAttr[attributeKeys[attributeKeys.length - 1]] = value;
      else
        structureDefMetaAttr[
          attributeKeys[attributeKeys.length - 1]
        ] = undefined;
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
            handleTextFields={onChangeStructureDefMeta}
            handleDelete={onDeleteComplexType}
            handleAdd={onAddComplexType}
            name={""}
            emptyTree={emptyTree}
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
