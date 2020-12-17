import {
  CssTextField,
  InputTooltip,
  SelectTooltip
} from 'components/smallComponents';
import React, { useState } from 'react';

import {
  Accordion,
  AccordionDetails,
  Button,
  Dialog,
  Paper,
  Typography
} from '@material-ui/core';
import { Add, DeleteOutline, ExpandMore } from '@material-ui/icons';

import { RenderAttributesTree } from 'types';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';
import {
  useStyles,
  MuiAccordionSummary
} from 'components/profileEditor/editor/complexTypesEditor/styles';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import SliceDialogBox from 'components/profileEditor/sliceDialogBox/SliceDialogBox';
import DialogChangeSliceName from './dialogSliceName/DialogChangeSliceName';

type DetailProps = {
  attributes: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  structureDefJSON: any;
  primitiveTypes: string[];
  onChangeValue?: (path: string, value: any) => void;
  handleDelete?: (path: string, i: number) => void;
  handleAdd?: (path: string, value: any) => void;
  name: string;
  index?: number;
  onChangeSliceName?: (value: string) => void;
};

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  structureDefJSON,
  primitiveTypes,
  onChangeValue,
  handleDelete,
  handleAdd,
  name,
  index
}) => {
  const classes = useStyles();
  let renderSliceName: JSX.Element | null = null;
  const [open, setOpen] = useState(false);

  const onChange = (
    callback: typeof onChangeValue | typeof handleDelete | typeof handleAdd
  ) => (path: string, value: any): void => {
    if (index !== undefined && callback) {
      callback(`${name && name + '.'}${index}.${path}`, value);
    } else if (callback) {
      callback(`${name && name + '.'}${path}`, value);
    }
  };

  const renderAttribute = attributes.map((item, index) => {
    let attributeElement: JSX.Element | null = null;
    if (
      item.children.length > 0 &&
      item.name !== 'extension' &&
      item.name !== 'snapshot' &&
      item.name !== 'differential'
    ) {
      if (Array.isArray(structureDefJSON[item.name])) {
        attributeElement = (
          <div className={classes.completeDiv}>
            <div className={classes.header}>
              <Typography>{item.name}</Typography>
              <Button
                className={classes.accordionButton}
                variant="outlined"
                color="primary"
                onClick={(): void =>
                  onChange(handleAdd)(
                    item.name,
                    createJSONTree(item.children, structureDefJSON[item.name])
                  )
                }
              >
                <Add />
              </Button>
            </div>
            {structureDefJSON[item.name].map((element: any, i: number) => {
              return (
                <div key={i} className={classes.accordionAndButton}>
                  <Accordion className={classes.accordion}>
                    <MuiAccordionSummary expandIcon={<ExpandMore />}>
                      <div className={classes.accordionSummary}>
                        <Typography>
                          {item.name} {i + 1}
                        </Typography>
                        <Button
                          className={classes.accordionButton}
                          variant="outlined"
                          color="primary"
                          onClick={(event): void => {
                            event.stopPropagation();
                            onChange(handleDelete)(item.name, i);
                          }}
                        >
                          <DeleteOutline />
                        </Button>
                      </div>
                    </MuiAccordionSummary>
                    <AccordionDetails>
                      <RenderComplexType
                        structureDefJSON={element}
                        complexTypes={complexTypes}
                        attributes={item.children}
                        primitiveTypes={primitiveTypes}
                        onChangeValue={onChange(onChangeValue)}
                        handleDelete={onChange(handleDelete)}
                        handleAdd={onChange(handleAdd)}
                        name={item.name}
                        index={i}
                      />
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        );
      } else if (typeof structureDefJSON[item.name] === 'object') {
        attributeElement = (
          <div key={item.name} className={classes.accordionAndButton}>
            <Accordion className={classes.accordion}>
              <MuiAccordionSummary expandIcon={<ExpandMore />}>
                <Typography>
                  {item.min && item.min > 0 ? `${item.name}*` : item.name}
                </Typography>
              </MuiAccordionSummary>
              <AccordionDetails>
                <RenderComplexType
                  structureDefJSON={structureDefJSON[item.name]}
                  complexTypes={complexTypes}
                  attributes={item.children}
                  primitiveTypes={primitiveTypes}
                  onChangeValue={onChange(onChangeValue)}
                  handleDelete={onChange(handleDelete)}
                  handleAdd={onChange(handleAdd)}
                  name={item.name}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }
    } else if (item.name !== 'extension' && item.children.length === 0) {
      switch (item.type) {
        case 'string':
        case 'uri':
        case 'id':
        case 'http://hl7.org/fhirpath/System.String': {
          if (item.name !== 'sliceName') {
            attributeElement = (
              <InputTooltip
                label={item.min && item.min > 0 ? `${item.name}*` : item.name}
                value={
                  structureDefJSON[item.name] ? structureDefJSON[item.name] : ''
                }
                tool={item.definition}
                onBlur={(event): void =>
                  onChange(onChangeValue)(item.name, event.target.value)
                }
              />
            );
          } else if (item.name === 'sliceName' && structureDefJSON.sliceName) {
            renderSliceName = (
              <DialogChangeSliceName
                item={item}
                sliceName={structureDefJSON.sliceName}
                id={structureDefJSON.id}
                open={open}
                onCloseClick={() => setOpen(false)}
                onOpenClick={() => setOpen(true)}
              />
            );
          }
          break;
        }
        case 'integer':
        case 'positiveInt': {
          attributeElement = (
            <InputTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              value={
                structureDefJSON[item.name] ? structureDefJSON[item.name] : ''
              }
              tool={item.definition}
            />
          );
          break;
        }
        case 'code': {
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
                label={item.min && item.min > 0 ? `${item.name}*` : item.name}
                tool={item.definition}
                choices={mapValues}
                value={structureDefJSON[item.name] ?? mapValues[0].value}
                onChange={(event): void =>
                  onChange(onChangeValue)(item.name, event.target.value)
                }
              />
            );
          }
          break;
        }
        case 'boolean': {
          attributeElement = (
            <CheckboxTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              tool={item.definition}
              value={structureDefJSON[item.name] ?? false}
              onChange={(event): void =>
                onChange(onChangeValue)(item.name, event.target.checked)
              }
            />
          );
          break;
        }
        default:
          break;
      }
    }
    return (
      <div className={classes.root} key={index}>
        {attributeElement}
      </div>
    );
  });

  return (
    <>
      {renderSliceName}
      {renderAttribute}
    </>
  );
};

export default RenderComplexType;
