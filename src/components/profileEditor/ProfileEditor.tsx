import React from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";
import { IElementDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";
import { Paper, Container, Typography, Breadcrumbs } from "@material-ui/core";

import AttributeEditor from "components/attributeEditor/AttributeEditor";
import { ButtonDownload, SnackBarWithClose } from "components/smallComponents";
import Navbar from "components/navbar/Navbar";
import StructureDefinitionTree from "components/structureDefinitionTree/StructureDefinitionTree";
import StructureDefSettings from "components/structureDefSettings/StructureDefSettings";
import { RootState } from "state/store";

import useStyles from "components/profileEditor/style";

const ProfileEditor: React.FC<{}> = () => {
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
    return splitedAttributeSelected?.map((split: string, index: number) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  return (
    <div>
      <Navbar />
      <SnackBarWithClose />
      <div className={classes.mapping}>
        <Paper className={clsx(classes.paperLeft, classes.paper)}>
          <Typography variant="h1">{structureDefinition.name}</Typography>
          <Container className={classes.treeView}>
            <StructureDefinitionTree
              structureDefinition={structureDefinition}
            />
          </Container>
          <ButtonDownload
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
          ></Typography>
          <Paper className={clsx(classes.paperRight, classes.paper)}>
            {structureDefMeta && (
              <StructureDefSettings
                structureDefinition={structureDefinition}
                structureDefinitionType="resource"
              />
            )}
            {selectedAttributeId && attribute && (
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

export default ProfileEditor;