import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import { InputTooltip, SelectTooltip } from 'components/smallComponents';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';

import { SimplifiedAttributes } from 'types';
import { changeFixedName, getLabel } from './utils';

type RenderPrimitiveTypesProps = {
  attribute: SimplifiedAttributes;
  currentNodeJSON: any;
  onChangeValue: (path: string, value: any) => void;
};

/**
 * @param param0.attribute simplified attribute of the element currently in modification
 * @param param0.currentNodeJSON
 * @param param0.onChangeValue function to modify the selected attribute in the JSON
 */
const RenderPrimitiveTypes: React.FC<RenderPrimitiveTypesProps> = ({
  attribute,
  currentNodeJSON,
  onChangeValue
}) => {
  const { currentElementDefinition } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  let attributeElement: any = undefined;
  const label =
    attribute.min && attribute.min > 0
      ? `${getLabel(attribute, currentElementDefinition)}*`
      : `${getLabel(attribute, currentElementDefinition)}`;
  const newFixedName = changeFixedName(attribute, label);
  switch (attribute.type) {
    case 'string':
    case 'uri':
    case 'id':
    case 'http://hl7.org/fhirpath/System.String': {
      if (attribute.name !== 'sliceName') {
        attributeElement = (
          <InputTooltip
            label={label}
            value={currentNodeJSON[newFixedName] ?? ''}
            tool={attribute.definition}
            onBlur={(event) => onChangeValue(newFixedName, event.target.value)}
          />
        );
      }
      break;
    }
    case 'integer':
    case 'positiveInt': {
      attributeElement = (
        <InputTooltip
          label={label}
          value={
            currentNodeJSON[newFixedName] ? currentNodeJSON[newFixedName] : ''
          }
          tool={attribute.definition}
        />
      );
      break;
    }
    case 'code': {
      if (attribute.binding?.valueSet) {
        const mapValues: {
          value: string | undefined;
          label: string | undefined;
        }[] = [];
        if (attribute.min === 0)
          mapValues.push({
            value: '',
            label: '--select a value--'
          });
        attribute.binding.valueSet.forEach((values) =>
          mapValues.push({
            value: values.code,
            label: values.display
          })
        );
        attributeElement = (
          <SelectTooltip
            label={label}
            tool={attribute.definition}
            choices={mapValues}
            value={currentNodeJSON[newFixedName] ?? mapValues[0].value}
            onChange={(event) =>
              onChangeValue(newFixedName, event.target.value)
            }
          />
        );
      } else {
        attributeElement = (
          <InputTooltip
            label={label}
            value={
              currentNodeJSON[newFixedName] ? currentNodeJSON[newFixedName] : ''
            }
            tool={attribute.definition}
          />
        );
      }
      break;
    }
    case 'boolean': {
      attributeElement = (
        <CheckboxTooltip
          label={label}
          tool={attribute.definition}
          value={currentNodeJSON[newFixedName] ?? false}
          onChange={(event) =>
            onChangeValue(newFixedName, event.target.checked)
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
