import { InputTooltip, SelectTooltip } from 'components/smallComponents';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
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
    let label =
      element.min && element.min > 0 ? `${element.name}*` : element.name;
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

  switch (item.type) {
    case 'string':
    case 'uri':
    case 'id':
    case 'http://hl7.org/fhirpath/System.String': {
      if (item.name !== 'sliceName') {
        const label = getName(item);
        attributeElement = (
          <InputTooltip
            label={label}
            value={structureDefJSON[item.name] ?? ''}
            tool={item.definition}
            onBlur={(event) =>
              onChange(onChangeValue)(item.name, event.target.value)
            }
          />
        );
      }
      break;
    }
    case 'integer':
    case 'positiveInt': {
      const label = getName(item);
      attributeElement = (
        <InputTooltip
          label={label}
          value={structureDefJSON[item.name] ? structureDefJSON[item.name] : ''}
          tool={item.definition}
        />
      );
      break;
    }
    case 'code': {
      const label = getName(item);
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
            label={label}
            tool={item.definition}
            choices={mapValues}
            value={structureDefJSON[item.name] ?? mapValues[0].value}
            onChange={(event) =>
              onChange(onChangeValue)(item.name, event.target.value)
            }
          />
        );
      } else {
        attributeElement = (
          <InputTooltip
            label={label}
            value={
              structureDefJSON[item.name] ? structureDefJSON[item.name] : ''
            }
            tool={item.definition}
          />
        );
      }
      break;
    }
    case 'boolean': {
      const label = getName(item);
      attributeElement = (
        <CheckboxTooltip
          label={label}
          tool={item.definition}
          value={structureDefJSON[item.name] ?? false}
          onChange={(event) =>
            onChange(onChangeValue)(item.name, event.target.checked)
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
