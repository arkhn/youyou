import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { SimplifiedAttributes } from 'types';
import { createElementDefTree } from '../../utils';
import SelectWithHelp from 'components/smallComponents/SelectTooltip';
import { isPrimitive } from 'state/utils';
import {
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import merge from 'lodash.merge';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import contextFixedValue from 'components/contexts/context';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import AccordionEditor from '../accordionEditor/AccordionEditor';
import AddComplexType from '../addComplexType/AddComplexType';

type RenderFixedValuesProps = {
  primitiveTypes: string[];
  complexTypes: SimplifiedAttributes[];
};

const RenderFixedValues: React.FC<RenderFixedValuesProps> = ({
  primitiveTypes,
  complexTypes
}) => {
  const { currentElementDefinition, backboneElements } = useSelector(
    (state: RootState) => {
      const { backboneElements } = state.fhirDataTypes;
      const { currentElementDefinition } = state.resourceSlice;
      return { backboneElements, currentElementDefinition };
    }
  );

  const [fixedValueContext, setFixedValueContext] = useContext(
    contextFixedValue
  );

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

  if (fixedValueContext.value === undefined) {
    if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length > 1 &&
      attributeFixed
    ) {
      const selectorValues = elementDefFixed.type.map((type) => {
        return {
          label: type.code,
          value: type.code
        };
      });
      selectorValues.unshift({ label: 'select a type', value: '' });
      renderFixedValuesSelector = (
        <AddComplexType
          childComponent={
            <SelectWithHelp
              choices={selectorValues}
              value={selectedFixedType}
              onChange={(e) => setSelectedFixedType(e.target.value as string)}
              label={'select fixed value'}
              tool={'select a type for the fixed value'}
            />
          }
          path={selectedFixedType}
          complexFhirAttribute={attributeFixed}
          handleAdd={() => {
            if (elementDefFixed) {
              const newType = elementDefFixed.type?.find(
                (type) => type.code === selectedFixedType
              );
              if (newType && selectedFixedType) {
                setFixedType(selectedFixedType);
                const newPath =
                  selectedFixedType === 'http://hl7.org/fhirpath/System.String'
                    ? 'fixedString'
                    : 'fixed' +
                      selectedFixedType.charAt(0).toUpperCase() +
                      selectedFixedType.slice(1);
                if (isPrimitive(selectedFixedType, primitiveTypes)) {
                  const newValue = selectedFixedType === 'boolean' ? false : '';
                  const newElement = {
                    ...elementDefFixed,
                    [newPath]: newValue,
                    type: [newType]
                  };
                  setElementDefFixed(newElement);
                  setAttributeFixed(findFixedAttribute(newElement));
                  setFixedValueContext({
                    path: newPath,
                    value: newValue,
                    type: newElement.type
                  });
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
                      type: [newType]
                    };
                    setElementDefFixed(newElement);
                    setAttributeFixed(findFixedAttribute(newElement));
                    setFixedValueContext({
                      path: newPath,
                      value: newValue,
                      type: newElement.type
                    });
                  }
                }
              }
            }
          }}
        />
      );
    } else if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length === 1 &&
      attributeFixed
    ) {
      renderFixedValuesSelector = (
        <AddComplexType
          path={selectedFixedType}
          complexFhirAttribute={attributeFixed}
          handleAdd={() => {
            if (elementDefFixed && fixedType) {
              const newPath =
                fixedType === 'http://hl7.org/fhirpath/System.String'
                  ? 'fixedString'
                  : 'fixed' +
                    fixedType.charAt(0).toUpperCase() +
                    fixedType.slice(1);
              if (isPrimitive(fixedType, primitiveTypes)) {
                const newValue = fixedType === 'boolean' ? false : '';
                const newElement: IElementDefinition = {
                  ...elementDefFixed,
                  [newPath]: newValue
                };
                setElementDefFixed(newElement);
                setAttributeFixed(findFixedAttribute(newElement));
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
                  setFixedValueContext({
                    path: newPath,
                    value: newValue,
                    type: newElement.type
                  });
                }
              }
            }
          }}
        />
      );
    }
    return <>{renderFixedValuesSelector}</>;
  } else {
    if (isPrimitive(fixedType, primitiveTypes) && attributeFixed) {
      return (
        <AccordionEditor
          accordionTitle={'fixed[x]'}
          path={fixedValueContext.path}
          accordionDetails={
            <RenderPrimitiveTypes
              attribute={attributeFixed}
              onChangeValue={(path, value) => {
                setFixedValueContext({ ...fixedValueContext, value });
              }}
              currentNodeJSON={fixedValueContext}
              newPath={'value'}
            />
          }
          handleDelete={() =>
            setFixedValueContext({
              path: fixedValueContext.path,
              value: undefined
            })
          }
        />
      );
    } else {
      if (attributeFixed && attributeFixed.children && elementDefFixed) {
        return (
          <AccordionEditor
            accordionTitle={fixedValueContext.path}
            path={fixedValueContext.path}
            accordionDetails={
              <RenderComplexType
                complexFhirAttributes={attributeFixed.children}
                complexTypes={complexTypes}
                handleAdd={(path, value) => {
                  setFixedValueContext({
                    ...fixedValueContext,
                    value: onAddComplexType(path, value, elementDefFixed)[
                      fixedValueContext.path
                    ]
                  });
                }}
                handleDelete={(path, i) => {
                  setFixedValueContext({
                    ...fixedValueContext,
                    value: onDeleteComplexType(path, i, elementDefFixed)[
                      fixedValueContext.path
                    ]
                  });
                }}
                onChangeValue={(path, value) => {
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
            handleDelete={() =>
              setFixedValueContext({
                path: fixedValueContext.path,
                value: undefined
              })
            }
          />
        );
      } else {
        return <div>error</div>;
      }
    }
    //return <RenderComplexType complexFhirAttributes={attributeFixed} />;
  }
};

export default RenderFixedValues;
