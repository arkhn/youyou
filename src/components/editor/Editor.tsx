// REACT
import React from "react";
import { useSelector } from "react-redux";

// EXTERNAL DEPENDENCIES & MATERIAL UI
import clsx from "clsx";
import {
  IElementDefinition,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { Paper, Container, Typography, Breadcrumbs } from "@material-ui/core";

// COMPONENTS & STATES
import AttributeEditor from "components/editor/attributeEditor/AttributeEditor";
import { ButtonDownloadYouyou } from "components/utils/utils";
import Navbar from "components/navbar/Navbar";
import ResourceProfileMapping from "components/editor/resourceProfileMapping/ResourceProfileMapping";
import StructureDefSettings from "components/structureDefSettings/StructureDefSettings";
import { RootState } from "state/store";

// STYLE
import useStyles from "components/editor/style";

const Editor: React.FC<{}> = () => {
  const {
    loading,
    structureDefinition,
    selectedAttributeId,
    selectStructureDefMeta
  } = useSelector((state: RootState) => state.resource);
  const classes = useStyles();

  const splitedAttributeSelected = selectedAttributeId?.split(".");
  let attribute: IElementDefinition | undefined = undefined;

  if (selectedAttributeId) {
    attribute = structureDefinition?.snapshot?.element.find(
      (attribute: IElementDefinition) => attribute.id === selectedAttributeId
    );
  }
  const renderAttributeEditor = (structureDef: IStructureDefinition) => {
    if (selectStructureDefMeta) {
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
        <div className={classes.mapping}>
          <Paper className={clsx(classes.paperLeft, classes.paper)}>
            <Typography variant="h1">{structureDefinition.id}</Typography>
            <Container className={classes.treeView}>
              <ResourceProfileMapping profile={structureDefinition} />
            </Container>
            <ButtonDownloadYouyou
              text="Download profile"
              toDownload={structureDefinition}
            />
          </Paper>
          <Container className={classes.containerRight}>
            <Breadcrumbs className={classes.marginBottom}>
              {selectStructureDefMeta ? (
                <Typography className={classes.capitalize}>Metadata</Typography>
              ) : (
                splitedAttributeSelected?.map((split: string) => (
                  <Typography key={split} className={classes.capitalize}>
                    {split}
                  </Typography>
                ))
              )}
            </Breadcrumbs>
            <Typography
              variant="h1"
              className={clsx(classes.capitalize, classes.marginBottom)}
            >
              {selectStructureDefMeta
                ? "Metadatas"
                : splitedAttributeSelected?.map((split: string, index) => {
                    if (index === splitedAttributeSelected.length - 1)
                      return split;
                  })}
            </Typography>
            <Paper className={clsx(classes.paperRight, classes.paper)}>
              {renderAttributeEditor(structureDefinition)}
            </Paper>
          </Container>
        </div>
      </div>
    );
  }

  return <div>Error</div>;
};

export default Editor;
