import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import merge from 'lodash.merge';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

import { SimplifiedAttributes } from 'types';

import { isPrimitive } from 'state/utils';
import { createElementDefTree } from 'components/profileEditor/editor/utils';
import {
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import contextFixedValue from 'components/contexts/context';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import AccordionEditor from 'components/profileEditor/editor/complexTypesEditor/accordionEditor/AccordionEditor';
import AddComplexType from 'components/profileEditor/editor/complexTypesEditor/addComplexType/AddComplexType';
import useStyles from 'components/profileEditor/editor/complexTypesEditor/renderFixedValues/styles';
import { SelectTooltip } from 'components/smallComponents';
import { Typography } from '@material-ui/core';

type RenderFixedValuesProps = {
  primitiveTypes: string[];
  complexTypes: SimplifiedAttributes[];
};

const RenderFixedValues: React.FC<RenderFixedValuesProps> = ({
  primitiveTypes,
  complexTypes
}) => {
  const classes = useStyles();
  const {
    currentElementDefinition,
    originalStructureDef,
    backboneElements
  } = useSelector((state: RootState) => {
    const { backboneElements } = state.fhirDataTypes;
    const {
      currentElementDefinition,
      originalStructureDef
    } = state.resourceSlice;
    return { backboneElements, currentElementDefinition, originalStructureDef };
  });

  const baseElement = originalStructureDef?.snapshot?.element.find(
    (elem) => elem.path === currentElementDefinition?.path
  );

  /**
   * context to fix the fixed type in the element definition in the Editor component
   */
  const [fixedValueContext, setFixedValueContext] = useContext(
    contextFixedValue
  );

  /**
   * Find if there is a fixed[x] for this element definition
   */
  const findFixedAttribute = useCallback(
    (elemDef) => {
      const newElementDefTree = createElementDefTree(
        elemDef,
        complexTypes,
        backboneElements,
        primitiveTypes
      );
      if (newElementDefTree) {
        const toFind = newElementDefTree.find((type) =>
          type.name.includes('fixed')
        );
        return toFind;
      }
    },
    [complexTypes, primitiveTypes, backboneElements]
  );

  const [elementDefFixed, setElementDefFixed] = useState(
    currentElementDefinition
  );
  const [attributeFixed, setAttributeFixed] = useState(
    findFixedAttribute(currentElementDefinition)
  );
  const [selectedFixedType, setSelectedFixedType] = useState('');
  const [fixedType, setFixedType] = useState(
    currentElementDefinition &&
      currentElementDefinition.type &&
      currentElementDefinition.type.length === 1
      ? currentElementDefinition.type[0].code
      : ''
  );

  useEffect(() => {
    setElementDefFixed(currentElementDefinition);
    setAttributeFixed(findFixedAttribute(currentElementDefinition));
    setSelectedFixedType('');
    setFixedType(
      currentElementDefinition &&
        currentElementDefinition.type &&
        currentElementDefinition.type.length === 1
        ? currentElementDefinition.type[0].code
        : ''
    );
  }, [currentElementDefinition, findFixedAttribute]);

  let renderFixedValuesSelector = undefined;

  if (fixedValueContext && fixedValueContext.value === undefined) {
    /**
     * If the fixed element doesn't exists in the element definition, renders an
     * AddComplexType component to add the fixed type to the element definition
     */
    if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length > 1 &&
      attributeFixed
    ) {
      /**
       * If it's a multiple choices fixed type, renders a select and change the
       * element definition type on click, to create and edit the type.
       */
      const newPath =
        selectedFixedType === 'http://hl7.org/fhirpath/System.String'
          ? 'fixedString'
          : 'fixed' +
            selectedFixedType.charAt(0).toUpperCase() +
            selectedFixedType.slice(1);
      const selectorValues: {
        label?: string;
        value?: string;
      }[] = elementDefFixed.type.map((type) => {
        return {
          label: type.code,
          value: type.code
        };
      });
      selectorValues.unshift({ label: 'select a type', value: '' });
      const newSelectorValues = selectorValues.filter(
        (value) => value.value !== 'BackboneElement'
      );
      renderFixedValuesSelector = (
        <AddComplexType
          className={classes.selectMultipleType}
          path={selectedFixedType}
          complexFhirAttribute={{ ...attributeFixed, name: newPath }}
          handleAdd={() => {
            const newTypeCode = elementDefFixed.type?.find(
              (type) => type.code === selectedFixedType
            );
            if (newTypeCode) {
              setFixedType(selectedFixedType);
              if (isPrimitive(selectedFixedType, primitiveTypes)) {
                const newValue = selectedFixedType === 'boolean' ? false : '';
                const newElement = {
                  ...elementDefFixed,
                  [newPath]: newValue,
                  type: [newTypeCode]
                };
                setElementDefFixed(newElement);
                setAttributeFixed(findFixedAttribute(newElement));
                const newFixedValueContext = {
                  path: newPath,
                  value: newValue,
                  type: newElement.type
                };
                setFixedValueContext &&
                  setFixedValueContext(newFixedValueContext);
              } else {
                const toFind = complexTypes.find(
                  (type) => type.name === selectedFixedType
                )?.children;
                if (toFind && attributeFixed) {
                  const newValue = merge(
                    createElementDefinitionTree(toFind),
                    createElementDefinitionTree(attributeFixed.children)
                  );
                  const newElement = {
                    ...elementDefFixed,
                    [newPath]: newValue,
                    type: [newTypeCode]
                  };
                  setElementDefFixed(newElement);
                  setAttributeFixed(findFixedAttribute(newElement));
                  const newFixedValueContext = {
                    path: newPath,
                    value: newValue,
                    type: newElement.type
                  };
                  setFixedValueContext &&
                    setFixedValueContext(newFixedValueContext);
                }
              }
            }
          }}
        >
          <SelectTooltip
            choices={newSelectorValues}
            value={selectedFixedType}
            onChange={(e) => setSelectedFixedType(e.target.value as string)}
            label={'select fixed value type'}
          />
        </AddComplexType>
      );
    } else if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length === 1 &&
      attributeFixed &&
      fixedType
    ) {
      /**
       * If it's not a multiple choices fixed type, renders an AddComplexType
       * component to add the fixed type to the structure definition
       */
      if (elementDefFixed.type[0].code !== 'BackboneElement') {
        const newPath =
          fixedType === 'http://hl7.org/fhirpath/System.String'
            ? 'fixedString'
            : 'fixed' + fixedType.charAt(0).toUpperCase() + fixedType.slice(1);

        renderFixedValuesSelector = (
          <AddComplexType
            path={fixedType}
            complexFhirAttribute={{ ...attributeFixed, name: newPath }}
            handleAdd={() => {
              if (isPrimitive(fixedType, primitiveTypes)) {
                const newValue = fixedType === 'boolean' ? false : '';
                const newElement: IElementDefinition = {
                  ...elementDefFixed,
                  [newPath]: newValue
                };
                setElementDefFixed(newElement);
                setAttributeFixed(findFixedAttribute(newElement));
                setFixedValueContext &&
                  setFixedValueContext({
                    path: newPath,
                    value: newValue,
                    type: newElement.type
                  });
              } else {
                const toFind = complexTypes.find(
                  (type) => type.name === fixedType
                )?.children;
                if (toFind && attributeFixed) {
                  const newValue = merge(
                    createElementDefinitionTree(toFind),
                    createElementDefinitionTree(attributeFixed.children)
                  );
                  const newElement = {
                    ...elementDefFixed,
                    [newPath]: newValue
                  };
                  setElementDefFixed(newElement);
                  setAttributeFixed(findFixedAttribute(newElement));
                  setFixedValueContext &&
                    setFixedValueContext({
                      path: newPath,
                      value: newValue,
                      type: newElement.type
                    });
                }
              }
            }}
          />
        );
      } else {
        renderFixedValuesSelector = (
          <div className={classes.fixedBackbone}>
            <Typography
              className={classes.fixedBackboneTitle}
              variant="h2"
            >{`Fixed[x]`}</Typography>
            <Typography>
              {`This element is a backbone element. You can't fix it, but you can
          fix its child elements.`}
            </Typography>
          </div>
        );
      }
    }
    return <>{renderFixedValuesSelector}</>;
  } else {
    /**
     * If the fixed element exists in the element definition, render an accordion
     * with the input to modify
     */
    if (
      isPrimitive(fixedType, primitiveTypes) &&
      attributeFixed &&
      currentElementDefinition &&
      currentElementDefinition.definition &&
      fixedValueContext &&
      fixedValueContext.path &&
      setFixedValueContext
    ) {
      /**
       * if the fixed type is a primitive type, renders an RenderPrimitiveTypes component
       */
      return (
        <AccordionEditor
          accordionTitle={fixedValueContext.path}
          path={fixedValueContext.path}
          tool={attributeFixed.definition}
          accordionDetails={
            <RenderPrimitiveTypes
              attribute={{
                ...attributeFixed,
                definition: currentElementDefinition?.definition
              }}
              onChangeValue={(path, value) => {
                setFixedValueContext({ ...fixedValueContext, value });
              }}
              currentNodeJSON={fixedValueContext}
              newPath={'value'}
            />
          }
          handleDelete={() => {
            setSelectedFixedType('');
            if (baseElement) {
              setElementDefFixed({
                ...elementDefFixed,
                type: baseElement.type
              });
              setFixedValueContext({
                type: baseElement.type,
                value: undefined
              });
            } else {
              setElementDefFixed({
                ...elementDefFixed,
                type: fixedValueContext.type
              });
              setFixedValueContext({
                ...fixedValueContext,
                value: undefined
              });
            }
          }}
        />
      );
    } else {
      /**
       * if the fixed type is a complex type, renders an RenderComplexTypes component
       */
      if (
        attributeFixed &&
        attributeFixed.children &&
        elementDefFixed &&
        fixedValueContext &&
        fixedValueContext.path &&
        setFixedValueContext
      ) {
        return (
          <AccordionEditor
            accordionTitle={fixedValueContext.path}
            path={fixedValueContext.path}
            tool={attributeFixed.definition}
            accordionDetails={
              <RenderComplexType
                complexFhirAttributes={attributeFixed.children}
                complexTypes={complexTypes}
                handleAdd={(path, value) => {
                  fixedValueContext.path &&
                    setFixedValueContext({
                      ...fixedValueContext,
                      value: onAddComplexType(path, value, elementDefFixed)[
                        fixedValueContext.path
                      ]
                    });
                }}
                handleDelete={(path, i) => {
                  fixedValueContext.path &&
                    setFixedValueContext({
                      ...fixedValueContext,
                      value: onDeleteComplexType(path, i, elementDefFixed)[
                        fixedValueContext.path
                      ]
                    });
                }}
                onChangeValue={(path, value) => {
                  fixedValueContext.path &&
                    setFixedValueContext({
                      ...fixedValueContext,
                      value: onChangeElementJSON(path, value, elementDefFixed)[
                        fixedValueContext.path
                      ]
                    });
                }}
                currentNodeJSON={fixedValueContext.value}
                primitiveTypes={primitiveTypes}
                name={fixedValueContext.path}
              />
            }
            handleDelete={() => {
              if (baseElement) {
                setSelectedFixedType('');
                setElementDefFixed({
                  ...elementDefFixed,
                  type: baseElement.type
                });
                setFixedValueContext({
                  ...fixedValueContext,
                  type: baseElement.type,
                  value: undefined
                });
              }
            }}
          />
        );
      } else {
        return (
          <div>{`You can't add a fixed[x] for this element definition`}</div>
        );
      }
    }
  }
};

export default RenderFixedValues;
