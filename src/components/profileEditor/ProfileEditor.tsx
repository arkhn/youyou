import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import clsx from 'clsx';
import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Paper, Container, Typography, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';

import { RootState } from 'state/store';

import AttributeEditor from 'components/attributeEditor/AttributeEditor';
import { ButtonDownload, SnackBarWithClose } from 'components/smallComponents';
import Navbar from 'components/navbar/Navbar';
import StructureDefinitionTree from 'components/structureDefinitionTree/StructureDefinitionTree';
import StructureDefSettings from 'components/structureDefSettings/StructureDefSettings';
import useStyles from 'components/profileEditor/style';
import { RenderAttributesTree } from 'types';
import {
  selectAttributeId,
  selectStructureDefMeta,
  updateStructureDefProfile
} from 'state/actions/resourceActions';
import {
  createComplexSnapshot,
  createElementDefinitionTree
} from 'components/profileEditor/utils';

const ProfileEditor: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    loading,
    structureDefinition,
    structureDefMeta,
    selectedAttributeId,
    primitiveTypes,
    complexTypes
  } = useSelector((state: RootState) => {
    const {
      loading,
      structureDefinition,
      structureDefMeta,
      selectedAttributeId
    } = state.resource;
    const { primitiveTypes, complexTypes } = state.fhirDataTypes;
    return {
      loading,
      structureDefinition,
      structureDefMeta,
      selectedAttributeId,
      primitiveTypes,
      complexTypes
    };
  });

  const [newStructureDef, setNewStructureDef] = useState(structureDefinition);
  const splitedAttributeSelected = selectedAttributeId?.split('.');
  const attribute = newStructureDef?.snapshot?.element?.find(
    (att: IElementDefinition) => att.id === selectedAttributeId
  );

  useEffect(() => {
    setNewStructureDef(structureDefinition);
  }, [structureDefinition]);

  const renderBreadcrumbs = (): JSX.Element | JSX.Element[] | undefined => {
    if (structureDefMeta)
      return <Typography className={classes.capitalize}>Metadata</Typography>;
    return splitedAttributeSelected?.map((split: string) => (
      <Typography key={split} className={classes.capitalize}>
        {split}
      </Typography>
    ));
  };

  const attributesForUI =
    newStructureDef?.snapshot?.element &&
    createComplexSnapshot(
      newStructureDef.snapshot.element.sort((a, b) => {
        if (a.id && b.id && a.id < b.id) {
          return -1;
        }
        if (a.id && b.id && a.id > b.id) {
          return 1;
        }
        return 0;
      }),
      primitiveTypes,
      complexTypes
    );

  const onPizzaClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    e.stopPropagation();
    const newElements: IElementDefinition[] = [];
    if (node.newPath && structureDefinition && structureDefinition.snapshot) {
      const splitedPath = node.newPath.split('.');
      structureDefinition.snapshot.element.forEach((element) => {
        const startingPath = element.id
          ?.split('.')
          .slice(0, splitedPath.length)
          .join('.');
        const endingPath = element.id
          ?.split('.')
          .slice(splitedPath.length)
          .join('.');
        if (startingPath === node.newPath) {
          element.base &&
            newElements.push({
              id:
                startingPath + ':slice1' + (endingPath ? '.' + endingPath : ''),
              path: element.id,
              sliceName: endingPath ? 'slice1' : undefined,
              base: {
                min: element?.base.min as number,
                max: element?.base.max as string,
                path: element?.base.path
              },
              min: element?.base.min as number,
              max: element?.base.max as string,
              definition: element.definition,
              type: element.type,
              binding: element.binding
                ? (node.binding as IElementDefinitionBinding)
                : undefined
            });
        }
      });
    }
    const structureDefToEdit = cloneDeep(structureDefinition);
    newElements.forEach((element) => {
      structureDefToEdit?.snapshot?.element.push(element);
    });
    if (structureDefToEdit && structureDefToEdit.snapshot) {
      structureDefToEdit.snapshot.element.sort((a, b) => {
        if (a.id && b.id && a.id < b.id) {
          return -1;
        }
        if (a.id && b.id && a.id > b.id) {
          return 1;
        }
        return 0;
      });
      dispatch(updateStructureDefProfile(structureDefToEdit));
    }
  };

  const onTrashClick = (
    e: React.MouseEvent<Element, MouseEvent>,
    node: RenderAttributesTree
  ): void => {
    const nouveau = cloneDeep(structureDefinition);
    const indexToDelete: number[] = [];
    if (nouveau && nouveau.snapshot) {
      nouveau.snapshot.element.forEach((element) => {
        if (element.id && element.id?.split(':').length > 1) {
          let splitName = '';
          element.id?.split('.').forEach((split) => {
            splitName = splitName + split;
            if (splitName === node.newPath?.split('.').join('')) {
              nouveau &&
                nouveau.snapshot &&
                indexToDelete.push(nouveau.snapshot.element.indexOf(element));
            }
          });
        }
      });
      nouveau.snapshot.element.sort(function compare(a, b) {
        if (a.id && b.id && a.id < b.id) {
          return -1;
        }
        if (a.id && b.id && a.id > b.id) {
          return 1;
        }
        return 0;
      });
      nouveau.snapshot.element.splice(indexToDelete[0], indexToDelete.length);
      dispatch(updateStructureDefProfile(nouveau));
    }
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

  if (loading) {
    return <div>Loading</div>;
  }

  if (!structureDefinition) {
    return <>Error</>;
  }

  return (
    <div>
      <Navbar />
      <SnackBarWithClose />
      <div className={classes.mapping}>
        <Paper className={clsx(classes.paperLeft, classes.paper)}>
          <Typography variant="h1">{structureDefinition.name}</Typography>
          <Container className={classes.treeView}>
            <StructureDefinitionTree
              onLabelClick={handleClick}
              uiAttributes={attributesForUI}
              structureDefinitionId={structureDefinition.id}
              onPizzaClick={onPizzaClick}
              onTrashClick={onTrashClick}
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
