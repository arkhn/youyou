import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Button, Container, Typography } from "@material-ui/core";
import _ from "lodash";

import {
  updateStructureDefProfile,
  updateStructureDefExtension
} from "state/actions/resourceActions";
import { setSnackbarOpen } from "state/actions/snackbarActions";
import { RootState } from "state/store";
import RenderComplexType from "components/structureDefSettings/complexTypesEditor/RenderComplexType";
import { createJSONTree } from "components/structureDefSettings/utils";
import { SnackBarWithClose } from "components/smallComponents";

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
        dispatch(setSnackbarOpen("success", "Saved !"));
        dispatch(updateStructureDefProfile(structureDefinitonToEdit));
      } else if (structureDefinitionType === "extension") {
        dispatch(setSnackbarOpen("success", "Saved !"));
        dispatch(updateStructureDefExtension(structureDefinitonToEdit));
      }
    }
  };

  const emptyTree = createJSONTree(
    structureDefinitionTree,
    _.cloneDeep(structureDefinition)
  );
  const [structureDefJSON, setStructureDefJSON] = useState(
    _.merge(_.cloneDeep(emptyTree), structureDefinition)
  );

  const onDeleteComplexType = (path: string, i: number) => {
    const str: IStructureDefinition = _.cloneDeep(structureDefJSON);
    let structureDefJSONAttr: any = _.get(str, path);
    structureDefJSONAttr.splice(i, 1);
    setStructureDefJSON(str);
  };

  const onAddComplexType = (path: string, value: any) => {
    const str: IStructureDefinition = _.cloneDeep(structureDefJSON);
    const structureDefJSONAttr = _.get(str, path);
    structureDefJSONAttr.push(value);
    setStructureDefJSON(str);
  };

  const onChangeStructureDefJSON = (path: string, value: any) => {
    if (value !== "") {
      const str: IStructureDefinition = _.cloneDeep(structureDefJSON);
      _.set(str, path, undefined);
      setStructureDefJSON(str);
    }
  };

  return (
    <Container className={classes.formContainer}>
      <SnackBarWithClose />
      <form className={classes.form}>
        <div>
          <RenderComplexType
            attributes={structureDefinitionTree}
            complexTypes={complexTypes}
            structureDefJSON={structureDefJSON}
            primitiveTypes={primitiveTypes}
            onChangeValue={onChangeStructureDefJSON}
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
