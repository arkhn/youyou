import React, { useState } from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";
import { IElementDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Paper, Container, Typography, Breadcrumbs } from "@material-ui/core";

import AttributeEditor from "components/editor/attributeEditor/AttributeEditor";
import { ButtonDownloadYouyou } from "components/utils/utils";
import Navbar from "components/navbar/Navbar";
import ResourceProfileMapping from "components/editor/resourceProfileMapping/ResourceProfileMapping";
import StructureDefSettings from "components/structureDefSettings/StructureDefSettings";
import { RootState } from "state/store";

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
  const [attribute] = useState(
    structureDefinition?.snapshot?.element.find(
      (attribute: IElementDefinition) => attribute.id === selectedAttributeId
    )
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!structureDefinition) {
    return <>Error</>;
  }

  const renderBreadcrumbs = () => {
    if (selectStructureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  const renderTitle = () => {
    if (selectStructureDefMeta) return "Metadatas";
    return splitedAttributeSelected?.map((split: string, index) => {
      if (index === splitedAttributeSelected.length - 1) return split;
    });
  };

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
            {renderBreadcrumbs()}
          </Breadcrumbs>
          <Typography
            variant="h1"
            className={clsx(classes.capitalize, classes.marginBottom)}
          >
            {renderTitle()}
          </Typography>
          <Paper className={clsx(classes.paperRight, classes.paper)}>
            {selectStructureDefMeta && (
              <StructureDefSettings
                structureDefinition={structureDefinition}
                type="resource"
              />
            )}
            {selectedAttributeId && (
              <AttributeEditor
                attribute={attribute}
                structureDefinition={structureDefinition}
              />
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Editor;
