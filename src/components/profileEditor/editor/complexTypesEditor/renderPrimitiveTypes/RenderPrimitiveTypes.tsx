import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';

import { SimplifiedAttributes } from 'types';
import { getLabel } from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/utils';
import {
  InputDateTooltip,
  InputTooltip,
  SelectTooltip,
  TooltipHelp,
  SwitchTooltip
} from 'components/smallComponents';
import Cardinality from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/cardinality/Cardinality';
import useStyles from 'components/profileEditor/editor/complexTypesEditor/renderPrimitiveTypes/style';
import { Typography } from '@material-ui/core';

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
  const classes = useStyles();
  const { currentElementDefinition } = useSelector(
    (state: RootState) => state.resourceSlice
  );
  let attributeElement: any = undefined;
  /**
   * decimal : Rational numbers that have a decimal representation
   *
   */

  const isRequired =
    (attribute.min && attribute.min > 0) ||
    attribute.name === 'id' ||
    attribute.name === 'path' ||
    attribute.name === 'short' ||
    attribute.name === 'definition';

  const label = `${getLabel(attribute, currentElementDefinition)}${
    isRequired ? '*' : ''
  }`;

  switch (attribute.type) {
    case 'string':
    case 'uri':
    case 'url':
    case 'id':
    case 'canonical':
    case 'base64Binary':
    case 'oid':
    case 'uuid':
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
    case 'xhtml':
    case 'markdown': {
      attributeElement = (
        <InputTooltip
          label={label}
          multiline
          value={currentNodeJSON[newPath] ?? ''}
          tool={attribute.definition}
          onBlur={(event) => onChangeValue(newPath, event.target.value)}
        />
      );
      break;
    }
    case 'integer':
    case 'unsignedInt':
    case 'decimal':
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
            value={currentNodeJSON[newPath] ?? ''}
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
            value={currentNodeJSON[newPath] ?? ''}
            tool={attribute.definition}
            onBlur={(event) => onChangeValue(newPath, event.target.value)}
          />
        );
      }
      break;
    }
    case 'boolean': {
      if (attribute.name !== 'sliceIsConstraining') {
        attributeElement = (
          <SwitchTooltip
            label={label}
            tool={attribute.definition}
            value={currentNodeJSON[newPath] ?? false}
            onChange={(event) => onChangeValue(newPath, event.target.checked)}
          />
        );
      } else if (
        currentNodeJSON.sliceName &&
        attribute.name === 'sliceIsConstraining'
      ) {
        attributeElement = (
          <SwitchTooltip
            label={label}
            tool={attribute.definition}
            value={currentNodeJSON[newPath] ?? false}
            onChange={(event) => onChangeValue(newPath, event.target.checked)}
          />
        );
      }
      break;
    }
    case 'date': {
      // YYYY-MM-DD
      attributeElement = (
        <InputDateTooltip
          type="date"
          label={label}
          value={currentNodeJSON[newPath] ?? ''}
          tool={attribute.definition}
          onChange={(event) => onChangeValue(newPath, event.target.value)}
        />
      );
      break;
    }
    case 'time': {
      // hh:mm:ss
      attributeElement = (
        <InputDateTooltip
          type="time"
          label={label}
          value={currentNodeJSON[newPath] ?? ''}
          tool={attribute.definition}
          onChange={(event) => onChangeValue(newPath, event.target.value)}
        />
      );
      break;
    }
    case 'instant':
    case 'dateTime': {
      // YYYY-MM-DDThh:mm:ss.sss+zz:zz
      let timeZone: any;
      let date: any;
      if (currentNodeJSON[newPath]) {
        const newDate = new Date(currentNodeJSON[newPath])
          .toISOString()
          .split('+');
        timeZone = newDate[1];
        date = new Date(currentNodeJSON[newPath]).toISOString().split('Z')[0];
      }
      attributeElement = (
        <div className={classes.dateTimeContainer}>
          <div className={classes.titles}>
            <Typography className={classes.title} variant="h2">
              {attribute.name}
            </Typography>
            <TooltipHelp tool={attribute.definition} />
          </div>
          <div className={classes.inputs}>
            <InputDateTooltip
              type="dateTime-local"
              label={'date and time'}
              value={date ?? ''}
              onChange={(event) => {
                date = event.target.value;
                onChangeValue(
                  newPath,
                  timeZone ? `${date}+${timeZone}` : `${date}`
                );
              }}
            />
            <InputDateTooltip
              className={classes.timeInput}
              type="time"
              label={'time zone'}
              value={timeZone ?? ''}
              onChange={(event) => {
                onChangeValue(
                  newPath,
                  event.target.value !== ''
                    ? `${date}+${event.target.value}`
                    : date
                );
              }}
            />
          </div>
        </div>
      );
      break;
    }
    default:
      break;
  }

  return <>{attributeElement}</>;
};

export default RenderPrimitiveTypes;
