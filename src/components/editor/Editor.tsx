import React from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";
import { IElementDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Paper, Container, Typography, Breadcrumbs } from "@material-ui/core";

import AttributeEditor from "components/editor/attributeEditor/AttributeEditor";
import {
  ButtonDownloadYouyou,
  SnackBarYouyou
} from "components/smallComponents";
import Navbar from "components/navbar/Navbar";
import StructureDefinitionTree from "components/structureDefinitionTree/StructureDefinitionTree";
import StructureDefSettings from "components/structureDefSettings/StructureDefSettings";
import { RootState } from "state/store";

import useStyles from "components/editor/style";

const Editor: React.FC<{}> = () => {
  const {
    loading,
    structureDefinition,
    selectedAttributeId,
    structureDefMeta
  } = useSelector((state: RootState) => state.resource);
  const classes = useStyles();
  const splitedAttributeSelected = selectedAttributeId?.split(".");

  const attribute = structureDefinition?.snapshot?.element.find(
    (attribute: IElementDefinition) => attribute.id === selectedAttributeId
  );

  if (loading) {
    return <div>Loading</div>;
  }

  if (!structureDefinition) {
    return <>Error</>;
  }

  const renderBreadcrumbs = () => {
    if (structureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  const renderTitle = () => {
    if (structureDefMeta) return "Metadatas";
    return splitedAttributeSelected?.map((split: string, index) => {
      if (index === splitedAttributeSelected.length - 1) return split;
    });
  };

  return (
    <div>
      <Navbar />
      <SnackBarYouyou />
      <div className={classes.mapping}>
        <Paper className={clsx(classes.paperLeft, classes.paper)}>
          <Typography variant="h1">{structureDefinition.name}</Typography>
          <Container className={classes.treeView}>
            <StructureDefinitionTree structureDefintion={structureDefinition} />
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
            {structureDefMeta && (
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
