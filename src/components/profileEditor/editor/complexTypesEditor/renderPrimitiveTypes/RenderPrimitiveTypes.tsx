import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import { InputTooltip, SelectTooltip } from 'components/smallComponents';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';

import { RenderAttributesTree } from 'types';

type RenderPrimitiveTypesProps = {
  item: RenderAttributesTree;
  structureDefJSON: any;
  onChange: (
    callback:
      | ((path: string, value: any) => void)
      | ((path: string, i: number) => void)
      | ((path: string, value: any) => void)
      | undefined
  ) => (path: string, value: any) => void;
  index: number;
  onChangeValue?: (path: string, value: any) => void;
};

const RenderPrimitiveTypes: React.FC<RenderPrimitiveTypesProps> = ({
  item,
  structureDefJSON,
  onChange,
  index,
  onChangeValue
}) => {
  const { newElementDefinition } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  let attributeElement: any = undefined;

  const getName = (element: RenderAttributesTree) => {
    let label = element.name;
    if (
      label.includes('fixed') &&
      newElementDefinition &&
      newElementDefinition.id
    ) {
      const newName = newElementDefinition.id.split('.');
      label = newName[newName.length - 1];
    }
    return label;
  };

  const getFixedName = (element: RenderAttributesTree, label: string) => {
    if (
      element.name.includes('fixed') &&
      element.type &&
      !Array.isArray(element.type)
    ) {
      let newTypeName = element.type;
      const splitedTypeName = newTypeName.split('');
      const firstLetter = newTypeName[0].toUpperCase();
      splitedTypeName.splice(0, 1, firstLetter);
      newTypeName = splitedTypeName.join('');
      return `fixed${newTypeName}`;
    } else {
      return label;
    }
  };
  switch (item.type) {
    case 'string':
    case 'uri':
    case 'id':
    case 'http://hl7.org/fhirpath/System.String': {
      if (item.name !== 'sliceName') {
        const label = getName(item);
        const newPath = getFixedName(item, label);
        attributeElement = (
          <InputTooltip
            label={item.min && item.min > 0 ? `${label}*` : label}
            value={structureDefJSON[newPath] ?? ''}
            tool={item.definition}
            onBlur={(event) =>
              onChange(onChangeValue)(newPath, event.target.value)
            }
          />
        );
      }
      break;
    }
    case 'integer':
    case 'positiveInt': {
      const label = getName(item);
      const newPath = getFixedName(item, label);
      attributeElement = (
        <InputTooltip
          label={item.min && item.min > 0 ? `${label}*` : label}
          value={structureDefJSON[newPath] ? structureDefJSON[newPath] : ''}
          tool={item.definition}
        />
      );
      break;
    }
    case 'code': {
      const label = getName(item);
      const newPath = getFixedName(item, label);
      if (item.binding?.valueSet) {
        const mapValues: {
          value: string | undefined;
          label: string | undefined;
        }[] = [];
        if (item.min === 0)
          mapValues.push({
            value: '',
            label: '--select a value--'
          });
        item.binding.valueSet.forEach((values) =>
          mapValues.push({
            value: values.code,
            label: values.display
          })
        );
        attributeElement = (
          <SelectTooltip
            key={index}
            label={item.min && item.min > 0 ? `${label}*` : label}
            tool={item.definition}
            choices={mapValues}
            value={structureDefJSON[newPath] ?? mapValues[0].value}
            onChange={(event) =>
              onChange(onChangeValue)(newPath, event.target.value)
            }
          />
        );
      } else {
        attributeElement = (
          <InputTooltip
            label={item.min && item.min > 0 ? `${label}*` : label}
            value={structureDefJSON[newPath] ? structureDefJSON[newPath] : ''}
            tool={item.definition}
          />
        );
      }
      break;
    }
    case 'boolean': {
      const label = getName(item);
      const newPath = getFixedName(item, label);
      attributeElement = (
        <CheckboxTooltip
          label={item.min && item.min > 0 ? `${label}*` : label}
          tool={item.definition}
          value={structureDefJSON[newPath] ?? false}
          onChange={(event) =>
            onChange(onChangeValue)(newPath, event.target.checked)
          }
        />
      );
      break;
    }
    default:
      break;
  }

  return <div>{attributeElement}</div>;
};

export default RenderPrimitiveTypes;
