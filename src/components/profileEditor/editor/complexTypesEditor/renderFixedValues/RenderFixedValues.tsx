import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { SimplifiedAttributes } from 'types';
import { createElementDefTree } from '../../utils';
import SelectWithHelp from 'components/smallComponents/SelectTooltip';
import { Button } from '@material-ui/core';
import { isPrimitive } from 'state/utils';
import {
  onChangeElementJSON,
  onDeleteComplexType,
  onAddComplexType,
  createElementDefinitionTree
} from 'components/profileEditor/utils';
import merge from 'lodash.merge';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import contextFixedValue from 'components/contexts/Context';
import RenderComplexType from 'components/profileEditor/editor/complexTypesEditor/RenderComplexType';
import RenderPrimitiveTypes from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/RenderPrimitiveTypes';
import AccordionEditor from '../accordionEditor/AccordionEditor';

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

  const [contextFV, setContextFV] = useContext(contextFixedValue);

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

  if (!contextFV.path) {
    if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length > 1
    ) {
      const selectorValues = elementDefFixed.type.map((type) => {
        return {
          label: type.code,
          value: type.code
        };
      });
      selectorValues.unshift({ label: 'select a type', value: '' });

      renderFixedValuesSelector = (
        <>
          <SelectWithHelp
            choices={selectorValues}
            value={selectedFixedType}
            onChange={(e) => setSelectedFixedType(e.target.value as string)}
            label={'select fixed value'}
            tool={'select a type for the fixed value'}
          />
          <Button
            onClick={() => {
              if (elementDefFixed) {
                const newType = elementDefFixed.type?.find(
                  (type) => type.code === selectedFixedType
                );
                //const newType = { code: 'ContactPoint' };
                if (newType && selectedFixedType) {
                  setFixedType(selectedFixedType);
                  const newPath =
                    selectedFixedType ===
                    'http://hl7.org/fhirpath/System.String'
                      ? 'fixedString'
                      : 'fixed' +
                        selectedFixedType.charAt(0).toUpperCase() +
                        selectedFixedType.slice(1);
                  if (isPrimitive(selectedFixedType, primitiveTypes)) {
                    const newValue =
                      selectedFixedType === 'boolean' ? false : '';
                    const newElement = {
                      ...elementDefFixed,
                      [newPath]: newValue,
                      type: [newType]
                    };
                    setElementDefFixed(newElement);
                    setAttributeFixed(findFixedAttribute(newElement));
                    setContextFV({ path: newPath, value: newValue });
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
                      setContextFV({ path: newPath, value: newValue });
                    }
                  }
                }
              }
            }}
          >
            Add fixedValue
          </Button>
        </>
      );
    } else if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length === 1
    ) {
      renderFixedValuesSelector = (
        <div>
          {fixedType}
          <Button
            onClick={() => {
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
                  setContextFV({ path: newPath, value: newValue });
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
                    setContextFV({ path: newPath, value: newValue });
                  }
                }
              }
            }}
          >
            Add fixedValue
          </Button>
        </div>
      );
    }
    return <>{renderFixedValuesSelector}</>;
  } else {
    if (isPrimitive(fixedType, primitiveTypes) && attributeFixed) {
      return (
        <AccordionEditor
          accordionTitle={'fixed[x]'}
          path={contextFV.path}
          accordionDetails={
            <RenderPrimitiveTypes
              attribute={attributeFixed}
              onChangeValue={(path, value) => {
                setContextFV({ ...contextFV, value });
              }}
              currentNodeJSON={contextFV}
              newPath={'value'}
            />
          }
          handleDelete={() =>
            setContextFV({ path: undefined, value: undefined })
          }
        />
      );
    } else {
      if (attributeFixed && attributeFixed.children && elementDefFixed) {
        return (
          <AccordionEditor
            accordionTitle={contextFV.path}
            path={contextFV.path}
            accordionDetails={
              <RenderComplexType
                complexFhirAttributes={attributeFixed.children}
                complexTypes={complexTypes}
                handleAdd={(path, value) => {
                  setContextFV({
                    ...contextFV,
                    value: onAddComplexType(path, value, elementDefFixed)[
                      contextFV.path
                    ]
                  });
                }}
                handleDelete={(path, i) => {
                  setContextFV({
                    ...contextFV,
                    value: onDeleteComplexType(path, i, elementDefFixed)[
                      contextFV.path
                    ]
                  });
                }}
                onChangeValue={(path, value) => {
                  setContextFV({
                    ...contextFV,
                    value: onChangeElementJSON(path, value, elementDefFixed)[
                      contextFV.path
                    ]
                  });
                }}
                currentNodeJSON={contextFV.value}
                primitiveTypes={primitiveTypes}
                name={contextFV.path}
              />
            }
            handleDelete={() =>
              setContextFV({ path: undefined, value: undefined })
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
