import React from "react";
import AttributeEditor from "src/components/editor/attributeEditor/AttributeEditor";
import ResourceProfileMapping from "src/components/editor/resourceProfileMapping/ResourceProfileMapping";
import StructureDefSettings from "src/components/structureDefSettings/StructureDefSettings";
import { useSelector } from "react-redux";
import { RootState } from "src/state/store";
import clsx from "clsx";
import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import useStyles from "src/components/editor/style";
import { Paper } from "@material-ui/core";
import Navbar from "src/components/navbar/Navbar";

const Editor: React.FC<{}> = () => {
  const { loading, structureDefinition, selectedAttributeId } = useSelector(
    (state: RootState) => state.resource
  );
  const classes = useStyles();
  let attribute: IElementDefinition | undefined = undefined;

  if (selectedAttributeId && selectedAttributeId !== "structureDefSettings") {
    attribute = structureDefinition?.snapshot?.element.find(
      (attribute: IElementDefinition) => attribute.id === selectedAttributeId
    );
  }
  const renderAttributeEditor = (structureDef: IStructureDefinition) => {
    if (selectedAttributeId === "structureDefSettings") {
      return (
        structureDefinition && (
          <StructureDefSettings
            structureDefinition={structureDefinition}
            type="resource"
          />
        )
      );
    } else {
      return (
        <AttributeEditor
          attribute={attribute}
          structureDefinition={structureDef}
        />
      );
    }
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (structureDefinition) {
    return (
      <div>
        <Navbar />
        {/* <h1>Profile Editor for {structureDefinition.type}</h1>
        <a
          href={
            "data:json/plain;charset=utf-8," +
            encodeURIComponent(JSON.stringify(structureDefinition, null, 2))
          }
          download={structureDefinition.name + ".json"}
        >
          <button>Download</button>
        </a>*/}
        <div className={classes.mapping}>
          <Paper className={clsx(classes.paperLeft, classes.paper)}>
            <ResourceProfileMapping profile={structureDefinition} />
          </Paper>
          <Paper className={clsx(classes.paperRight, classes.paper)}>
            {renderAttributeEditor(structureDefinition)}
          </Paper>
        </div>
      </div>
    );
  }

  return <div>Error</div>;
};

export default Editor;
