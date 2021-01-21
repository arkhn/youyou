import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { Typography, Button, Paper, Breadcrumbs } from '@material-ui/core';
import cloneDeep from 'lodash.clonedeep';
import merge from 'lodash.merge';
import clsx from 'clsx';

import { RootState, useAppDispatch } from 'state/store';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import { SimplifiedAttributes } from 'types';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import {
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import { createComplexTypes } from 'state/utils';

import useStyles from 'components/profileEditor/editor/style';
import { updateStructureDefProfileThunk } from 'state/reducers/resource';

type EditorProps = {
  structureDefinition: IStructureDefinition;
  structureDefinitionType: 'resource' | 'extension' | 'element';
  classNameForm?: string;
};

const Editor: React.FC<EditorProps> = ({
  structureDefinition,
  structureDefinitionType,
  classNameForm
}) => {
  const {
    complexTypes,
    primitiveTypes,
    structureDefinitionTree,
    currentElementDefinition,
    backboneElements
  } = useSelector((state: RootState) => {
    const {
      complexTypes,
      primitiveTypes,
      structureDefinitionTree,
      backboneElements
    } = state.fhirDataTypes;
    const { currentElementDefinition } = state.resourceSlice;
    return {
      complexTypes,
      primitiveTypes,
      currentElementDefinition,
      structureDefinitionTree,
      backboneElements
    };
  });

  const dispatch = useAppDispatch();
  const classes = useStyles();

  /**
   * creates a tree of simplified attributes for element definition with an implementation for fixed values
   */
  const createElementDefTree = useCallback(() => {
    const newElementDefinitionTree:
      | SimplifiedAttributes[]
      | undefined = cloneDeep(
      complexTypes?.find(
        (complexType: SimplifiedAttributes) =>
          complexType.id === 'ElementDefinition'
      )?.children
    );
    if (currentElementDefinition && currentElementDefinition.type) {
      const fixedValueTree:
        | SimplifiedAttributes
        | undefined = newElementDefinitionTree?.find(
        (attribute: SimplifiedAttributes) => attribute.name.includes('fixed')
      );
      if (fixedValueTree) {
        if (currentElementDefinition.type.length === 1) {
          fixedValueTree.type = currentElementDefinition.type[0].code;
          if (
            currentElementDefinition.type[0].code === 'BackboneElement' &&
            fixedValueTree.children.length === 0 &&
            backboneElements
          ) {
            fixedValueTree.children = backboneElements;
          } else {
            const children = createComplexTypes(
              complexTypes,
              [fixedValueTree],
              primitiveTypes
            );
            fixedValueTree.children = children[0].children;
          }
        } else {
          fixedValueTree.type = currentElementDefinition.type;
        }
      }
    }
    return newElementDefinitionTree;
  }, [
    complexTypes,
    currentElementDefinition,
    primitiveTypes,
    backboneElements
  ]);

  const [elementDefinitionTree, setElementDefinitionTree] = useState(
    createElementDefTree
  );

  useEffect(() => {
    setElementDefinitionTree(createElementDefTree);
  }, [createElementDefTree]);

  /**
   * creates a FHIR JSON structure for Element Definition
   */
  const createElementDefJSON = useCallback((): IElementDefinition => {
    const elementDefTreeJSON =
      elementDefinitionTree &&
      createElementDefinitionTree(elementDefinitionTree);
    return merge(cloneDeep(elementDefTreeJSON), currentElementDefinition);
  }, [elementDefinitionTree, currentElementDefinition]);

  /**
   * creates a FHIR JSON structure for Structure Definition
   */
  const createStructureDefJSON = useCallback((): IStructureDefinition => {
    const structureDefTreeJSON: IStructureDefinition = createJSONTree(
      structureDefinitionTree,
      structureDefinition
    );
    return merge(cloneDeep(structureDefTreeJSON), structureDefinition);
  }, [structureDefinitionTree, structureDefinition]);

  const [elementDefJSON, setElementDefJSON] = useState<
    IElementDefinition | undefined
  >(structureDefinitionType === 'element' ? createElementDefJSON() : undefined);

  const [structureDefJSON, setStructureDefJSON] = useState<
    IStructureDefinition | undefined
  >(
    structureDefinitionType === 'resource'
      ? createStructureDefJSON()
      : undefined
  );

  useEffect(() => {
    if (currentElementDefinition && structureDefinitionType === 'element') {
      setElementDefJSON(createElementDefJSON());
      setStructureDefJSON(undefined);
    } else if (structureDefinitionType === 'resource') {
      setStructureDefJSON(createStructureDefJSON());
      setElementDefJSON(undefined);
    } else if (
      structureDefinitionType === 'element' &&
      !currentElementDefinition
    ) {
      setStructureDefJSON(undefined);
    }
  }, [
    currentElementDefinition,
    structureDefinitionType,
    createElementDefJSON,
    createStructureDefJSON
  ]);

  const renderBreadcrumbs = (): React.ReactNode => {
    if (currentElementDefinition && elementDefJSON) {
      return (
        <Breadcrumbs className={classes.breadcrumbs}>
          {elementDefJSON.id?.split('.').map((split: string) => (
            <Typography key={split}>{split}</Typography>
          ))}
        </Breadcrumbs>
      );
    } else if (structureDefJSON) {
      return (
        <Breadcrumbs className={classes.breadcrumbs}>
          <Typography>Metadata</Typography>
        </Breadcrumbs>
      );
    } else {
      return undefined;
    }
  };

  const renderFormForAttributes = (): React.ReactNode => {
    if (elementDefJSON && elementDefinitionTree && currentElementDefinition) {
      return (
        <RenderComplexType
          complexFhirAttributes={elementDefinitionTree}
          complexTypes={complexTypes}
          currentNodeJSON={elementDefJSON}
          primitiveTypes={primitiveTypes}
          name={''}
          onChangeValue={(path, value) =>
            setElementDefJSON(onChangeElementJSON(path, value, elementDefJSON))
          }
          handleDelete={(path, i) =>
            setElementDefJSON(onDeleteComplexType(path, i, elementDefJSON))
          }
          handleAdd={(path, value) =>
            setElementDefJSON(onAddComplexType(path, value, elementDefJSON))
          }
        />
      );
    } else if (structureDefJSON) {
      return (
        <RenderComplexType
          complexFhirAttributes={structureDefinitionTree}
          complexTypes={complexTypes}
          currentNodeJSON={structureDefJSON}
          primitiveTypes={primitiveTypes}
          name={''}
          onChangeValue={(path, value) =>
            setStructureDefJSON(
              onChangeElementJSON(path, value, structureDefJSON)
            )
          }
          handleDelete={(path, i) =>
            setStructureDefJSON(onDeleteComplexType(path, i, structureDefJSON))
          }
          handleAdd={(path, value) =>
            setStructureDefJSON(onAddComplexType(path, value, structureDefJSON))
          }
        />
      );
    } else {
      return (
        <Typography variant="h2">Please select a valid attribute.</Typography>
      );
    }
  };

  return (
    <div className={classes.editorContainer}>
      {renderBreadcrumbs()}
      <Paper className={classes.paperRight}>
        <form className={clsx(classNameForm, classes.formContainer)}>
          {renderFormForAttributes()}
        </form>
        <div className={classes.formFooter}>
          {(currentElementDefinition || structureDefJSON) && (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={(
                  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  event.preventDefault();
                  if (
                    structureDefinitionType === 'element' &&
                    structureDefinition
                  ) {
                    dispatch(
                      updateStructureDefProfileThunk({
                        structureDefinition,
                        elementDefinition: elementDefJSON
                      })
                    );
                  } else if (
                    structureDefinitionType === 'resource' &&
                    structureDefJSON
                  ) {
                    dispatch(
                      updateStructureDefProfileThunk({
                        structureDefinition: structureDefJSON
                      })
                    );
                  }
                }}
              >
                Submit
              </Button>
              <Typography color="textSecondary">* Required Fields</Typography>
            </>
          )}
        </div>
      </Paper>
    </div>
  );
};

export default Editor;
