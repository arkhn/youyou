import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Paper, Container, Typography, Breadcrumbs } from '@material-ui/core';

import { RootState } from 'state/store';

import AttributeEditor from 'components/attributeEditor/AttributeEditor';
import { ButtonDownload, SnackBarWithClose } from 'components/smallComponents';
import Navbar from 'components/navbar/Navbar';
import StructureDefinitionTree from 'components/structureDefinitionTree/StructureDefinitionTree';
import StructureDefSettings from 'components/structureDefSettings/StructureDefSettings';
import useStyles from 'components/profileEditor/style';
import { RenderAttributesTree } from 'types';
import { selectAttributeId } from 'state/actions/resourceActions';
import { createElementDefinitionTree } from 'components/structureDefinitionTree/utils';
import cloneDeep from 'lodash.clonedeep';

const ProfileEditor: React.FC<{}> = () => {
  const {
    loading,
    structureDefinition,
    structureDefMeta,
    selectedAttributeId
  } = useSelector((state: RootState) => state.resource);
  const { complexTypes } = useSelector(
    (state: RootState) => state.fhirDataTypes
  );
  const [newStructureDef, setNewStructureDef] = useState(structureDefinition);
  const dispatch = useDispatch();
  const classes = useStyles();

  const splitedAttributeSelected = selectedAttributeId?.split('.');

  const elements = newStructureDef?.snapshot?.element;
  const attribute = elements?.find(
    (att: IElementDefinition) => att.id === selectedAttributeId
  );

  if (loading) {
    return <div>Loading</div>;
  }

  if (!structureDefinition) {
    return <>Error</>;
  }

  const renderBreadcrumbs = (): JSX.Element | JSX.Element[] | undefined => {
    if (structureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  const handleClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.preventDefault();
    dispatch(selectAttributeId(node.newPath));
    const findAttribute = structureDefinition?.snapshot?.element.find(
      (att: IElementDefinition) => att.id === node.newPath
    );
    if (!findAttribute) {
      const elementDefinitionType = complexTypes.find(
        (type: RenderAttributesTree) => type.id === 'ElementDefinition'
      );
      if (elementDefinitionType) {
        const newAttribute = createElementDefinitionTree(
          elementDefinitionType.children
        );
        const newElement: IElementDefinition = {
          ...newAttribute,
          base: {
            min: node.min as number,
            max: node.max as string,
            path: node.id
          },
          min: node.min as number,
          max: node.max as string,
          id: node.newPath,
          path: node.newPath,
          definition: node.definition,
          binding: node.binding
            ? (node.binding as IElementDefinitionBinding)
            : undefined
        };
        const structureDefToEdit = cloneDeep(structureDefinition);
        structureDefToEdit?.snapshot?.element.push(newElement);
        setNewStructureDef(structureDefToEdit);
      }
    }
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
              elements={elements}
              onLabelClick={(e, nodes): void => {
                handleClick(e, nodes);
              }}
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
          <Paper className={clsx(classes.paperRight, classes.paper)}>
            {structureDefMeta && newStructureDef && (
              <StructureDefSettings
                structureDefinition={newStructureDef}
                structureDefinitionType="resource"
              />
            )}
            {selectedAttributeId && attribute && newStructureDef && (
              <AttributeEditor
                attribute={attribute}
                structureDefinition={newStructureDef}
              />
            )}
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default ProfileEditor;
