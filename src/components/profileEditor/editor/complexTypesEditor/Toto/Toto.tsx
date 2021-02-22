import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { SimplifiedAttributes } from 'types';
import { createElementDefTree } from '../../utils';
import SelectWithHelp from 'components/smallComponents/SelectTooltip';
import { Button } from '@material-ui/core';
import { isPrimitive } from 'state/utils';
import { createElementDefinitionTree } from 'components/profileEditor/utils';
import merge from 'lodash.merge';
import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

type TotoProps = {
  primitiveTypes: string[];
  complexTypes: SimplifiedAttributes[];
};

const Toto: React.FC<TotoProps> = ({ primitiveTypes, complexTypes }) => {
  const { currentElementDefinition, backboneElements } = useSelector(
    (state: RootState) => {
      const { backboneElements } = state.fhirDataTypes;
      const { currentElementDefinition } = state.resourceSlice;
      return { backboneElements, currentElementDefinition };
    }
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
  const [attribute, setAttribute] = useState(
    findFixedAttribute(currentElementDefinition)
  );
  const [selectedType, setSelectedType] = useState('');
  const [fixedType, setFixedType] = useState(
    currentElementDefinition &&
      currentElementDefinition.type &&
      currentElementDefinition.type.length === 1
      ? currentElementDefinition.type[0].code
      : ''
  );
  const [isFixed, setIsFixed] = useState(() => {
    for (const att in elementDefFixed) {
      if (att.includes('fixed') && att !== 'fixed[x]') {
        return true;
      } else {
        return false;
      }
    }
  });

  useEffect(() => {
    for (const att in elementDefFixed) {
      if (att.includes('fixed') && att !== 'fixed[x]') {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
  }, [elementDefFixed]);

  useEffect(() => {
    setElementDefFixed(currentElementDefinition);
    setAttribute(findFixedAttribute(currentElementDefinition));
    setSelectedType('');
    setFixedType(
      currentElementDefinition &&
        currentElementDefinition.type &&
        currentElementDefinition.type.length === 1
        ? currentElementDefinition.type[0].code
        : ''
    );
  }, [currentElementDefinition, findFixedAttribute]);

  let renderFixedValuesSelector = undefined;

  if (!isFixed) {
    if (
      elementDefFixed &&
      elementDefFixed.type &&
      elementDefFixed.type.length > 1
    ) {
      const allTypes = elementDefFixed.type.map((type) => {
        return {
          label: type.code,
          value: type.code
        };
      });
      allTypes.unshift({ label: 'select a type', value: '' });

      renderFixedValuesSelector = (
        <>
          <SelectWithHelp
            choices={allTypes}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as string)}
            label={'select fixed value'}
            tool={'select a type for the fixed value'}
          />
          <Button
            onClick={() => {
              if (elementDefFixed) {
                const newType = elementDefFixed.type?.find(
                  (type) => type.code === selectedType
                );
                if (newType && selectedType) {
                  const newPath =
                    'fixed' +
                    selectedType.charAt(0).toUpperCase() +
                    selectedType.slice(1);
                  if (isPrimitive(selectedType, primitiveTypes)) {
                    const newValue = selectedType === 'boolean' ? false : '';
                    const newElement = {
                      ...elementDefFixed,
                      [newPath]: newValue,
                      type: [newType]
                    };

                    setElementDefFixed(newElement);
                    setAttribute(findFixedAttribute(newElement));
                  } else {
                    const toFind = complexTypes.find(
                      (type) => type.name === selectedType
                    )?.children;
                    if (toFind && attribute) {
                      const newValue = merge(
                        createElementDefinitionTree(toFind),
                        createElementDefinitionTree(attribute.children)
                      );
                      const newElement = {
                        ...elementDefFixed,
                        [newPath]: newValue,
                        type: [newType]
                      };
                      setElementDefFixed(newElement);
                      setAttribute(findFixedAttribute(newElement));
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
                  'fixed' +
                  fixedType.charAt(0).toUpperCase() +
                  fixedType.slice(1);
                if (isPrimitive(fixedType, primitiveTypes)) {
                  const newValue = fixedType === 'boolean' ? false : '';
                  const newElement: IElementDefinition = {
                    ...elementDefFixed,
                    [newPath]: newValue
                  };
                  setElementDefFixed(newElement);
                  setAttribute(findFixedAttribute(newElement));
                } else {
                  const toFind = complexTypes.find(
                    (type) => type.name === fixedType
                  )?.children;
                  if (toFind && attribute) {
                    const newValue = merge(
                      createElementDefinitionTree(toFind),
                      createElementDefinitionTree(attribute.children)
                    );
                    const newElement = {
                      ...elementDefFixed,
                      [newPath]: newValue
                    };
                    setElementDefFixed(newElement);
                    setAttribute(findFixedAttribute(newElement));
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
    return <div>coucou</div>;
  }
};

export default Toto;
