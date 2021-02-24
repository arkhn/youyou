/* eslint-disable @typescript-eslint/ban-ts-ignore */
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
import {
  createJSONTree,
  createElementDefTree
} from 'components/profileEditor/editor/utils';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import {
  onChangeElementJSON,
  onChangeCardinalityJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import ContextFixedValue from 'components/contexts/context';

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

  const [fixedValueContext, setFixedValueContext] = useState(() => {
    let path = undefined;
    let value = undefined;
    for (const attribute in currentElementDefinition) {
      if (attribute.includes('fixed') && attribute !== 'fixed[x]') {
        path = attribute;
        //@ts-ignore
        value = currentElementDefinition[attribute];
      }
    }
    return { path, value };
  });
  /**
   * creates a tree of simplified attributes for element definition with an implementation for fixed values
   */
  const createElementDefTreeCallback = useCallback(() => {
    return createElementDefTree(
      currentElementDefinition,
      complexTypes,
      backboneElements,
      primitiveTypes
    );
  }, [
    complexTypes,
    currentElementDefinition,
    primitiveTypes,
    backboneElements
  ]);

  const [elementDefinitionTree, setElementDefinitionTree] = useState(
    createElementDefTreeCallback
  );

  useEffect(() => {
    setElementDefinitionTree(createElementDefTreeCallback);
  }, [createElementDefTreeCallback]);

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
    setFixedValueContext(() => {
      let path = undefined;
      let value = undefined;
      for (const attribute in currentElementDefinition) {
        if (attribute.includes('fixed') && attribute !== 'fixed[x]') {
          path = attribute;
          //@ts-ignore
          value = currentElementDefinition[attribute];
        }
      }
      return { path, value };
    });
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
          onChangeCardinality={(a, b, c, d) => {
            setElementDefJSON(
              onChangeCardinalityJSON(a, b, c, d, elementDefJSON)
            );
          }}
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

  console.log(fixedValueContext);
  console.log(elementDefJSON);

  return (
    <ContextFixedValue.Provider
      value={[fixedValueContext, setFixedValueContext]}
    >
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
                      let newElementDefinition = { ...elementDefJSON };
                      if (
                        fixedValueContext.path &&
                        fixedValueContext.value !== undefined
                      ) {
                        newElementDefinition = {
                          ...elementDefJSON,
                          [fixedValueContext.path]: fixedValueContext.value
                        };
                      } else if (
                        fixedValueContext.path &&
                        !fixedValueContext.value &&
                        // @ts-ignore
                        elementDefJSON[fixedValueContext.path] !== undefined
                      ) {
                        newElementDefinition = { ...elementDefJSON };
                        // @ts-ignore
                        delete newElementDefinition[fixedValueContext.path];
                        setFixedValueContext({
                          ...fixedValueContext,
                          path: undefined
                        });
                      }
                      dispatch(
                        updateStructureDefProfileThunk({
                          structureDefinition,
                          elementDefinition: newElementDefinition
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
    </ContextFixedValue.Provider>
  );
};

export default Editor;
