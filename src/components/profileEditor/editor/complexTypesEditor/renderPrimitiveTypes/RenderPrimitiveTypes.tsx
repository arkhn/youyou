import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import { InputTooltip, SelectTooltip } from 'components/smallComponents';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';

import { SimplifiedAttributes } from 'types';
import { getLabel } from './utils';
import Cardinality from './cardinality/Cardinality';

type RenderPrimitiveTypesProps = {
  attribute: SimplifiedAttributes;
  currentNodeJSON: Record<string, any>;
  onChangeValue: (path: string, value: any) => void;
  newPath: string;
  onChangeCardinality?: (
    firstPath: string,
    secondPath: string,
    firstValue: number,
    secondValue: string
  ) => void;
};

/**
 * @param attribute simplified attribute of the element currently in modification
 * @param currentNodeJSON
 * @param onChangeValue function to modify the selected attribute in the JSON
 */
const RenderPrimitiveTypes: React.FC<RenderPrimitiveTypesProps> = ({
  attribute,
  currentNodeJSON,
  onChangeValue,
  newPath,
  onChangeCardinality
}) => {
  const { currentElementDefinition } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  let attributeElement: any = undefined;
  const label = `${getLabel(attribute, currentElementDefinition)}${
    attribute.min && attribute.min > 0 ? '*' : ''
  }`;

  switch (attribute.type) {
    case 'string':
    case 'uri':
    case 'id':
    case 'http://hl7.org/fhirpath/System.String': {
      if (attribute.name !== 'sliceName' && attribute.name !== 'max') {
        attributeElement = (
          <InputTooltip
            label={label}
            value={currentNodeJSON[newPath] ?? ''}
            tool={attribute.definition}
            onBlur={(event) => onChangeValue(newPath, event.target.value)}
          />
        );
      }
      break;
    }
    case 'integer':
    case 'unsignedInt':
    case 'positiveInt': {
      if (attribute.name === 'min' && !attribute.id.includes('base.min')) {
        attributeElement = (
          <Cardinality
            currentNodeJSON={currentNodeJSON}
            onChangeValue={onChangeValue}
            onChangeCardinality={onChangeCardinality}
          />
        );
      } else {
        attributeElement = (
          <InputTooltip
            label={label}
            value={currentNodeJSON[newPath] ? currentNodeJSON[newPath] : ''}
            tool={attribute.definition}
            onBlur={(event) => onChangeValue(newPath, event.target.value)}
          />
        );
      }
      break;
    }
    case 'code': {
      if (attribute.binding?.valueSet) {
        const mapValues: {
          value?: string;
          label?: string;
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
            value={currentNodeJSON[newPath] ?? mapValues[0].value}
            onChange={(event) => onChangeValue(newPath, event.target.value)}
          />
        );
      } else {
        attributeElement = (
          <InputTooltip
            label={label}
            value={currentNodeJSON[newPath] ? currentNodeJSON[newPath] : ''}
            tool={attribute.definition}
            onBlur={(event) => onChangeValue(newPath, event.target.value)}
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
          value={currentNodeJSON[newPath] ?? false}
          onChange={(event) => onChangeValue(newPath, event.target.checked)}
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
