import { InputTooltip, SelectTooltip } from 'components/smallComponents';
import React from 'react';

import {
  Accordion,
  AccordionDetails,
  IconButton,
  Tooltip,
  Typography
} from '@material-ui/core';
import { Add, ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';

import { RenderAttributesTree } from 'types';
import CheckboxTooltip from 'components/smallComponents/CheckboxTooltip';
import { createJSONTree } from 'components/profileEditor/editor/utils';
import DialogChangeSliceName from './dialogSliceName/DialogChangeSliceName';

import {
  useStyles,
  MuiAccordionSummary,
  MuiButton
} from 'components/profileEditor/editor/complexTypesEditor/styles';
import RenderPrimitiveTypes from './renderPrimitiveTypes/RenderPrimitiveTypes';

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

  const onChange = (
    callback: typeof onChangeValue | typeof handleDelete | typeof handleAdd
  ) => (path: string, value: any) => {
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
          <div className={classes.accordion}>
            <div
              className={clsx(classes.accordionTitle, classes.accordionAddItem)}
            >
              <IconButton
                onClick={() =>
                  onChange(handleAdd)(
                    item.name,
                    createJSONTree(item.children, structureDefJSON[item.name])
                  )
                }
              >
                <Tooltip title={`add a new ${item.name}`}>
                  <Add />
                </Tooltip>
              </IconButton>
              <Typography className={classes.titleAdd} variant="h2">
                {item.name}
              </Typography>
            </div>
            {structureDefJSON[item.name].map((element: any, i: number) => {
              return (
                <Accordion key={i}>
                  <MuiAccordionSummary expandIcon={<ExpandMore />}>
                    <div
                      className={clsx(
                        classes.accordionTitle,
                        classes.accordionTitleDelete
                      )}
                    >
                      <Typography>
                        {item.name} {i + 1}
                      </Typography>
                      <MuiButton
                        onClick={(event) => {
                          event.stopPropagation();
                          onChange(handleDelete)(item.name, i);
                        }}
                      >
                        Delete
                      </MuiButton>
                    </div>
                  </MuiAccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
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
              );
            })}
          </div>
        );
      } else if (typeof structureDefJSON[item.name] === 'object') {
        attributeElement = (
          <div key={item.name}>
            <Accordion className={classes.accordion}>
              <MuiAccordionSummary expandIcon={<ExpandMore />}>
                <Typography>
                  {item.min && item.min > 0 ? `${item.name}*` : item.name}
                </Typography>
              </MuiAccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
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
    } else if (item.name === 'sliceName' && structureDefJSON.sliceName) {
      renderSliceName = (
        <DialogChangeSliceName
          sliceName={structureDefJSON.sliceName}
          id={structureDefJSON.id}
        />
      );
    } else if (item.name.includes('fixed')) {
      console.log(item);
      return <div key={index}>fixed</div>;
    } else if (
      item.name !== 'extension' &&
      item.children.length === 0 &&
      !Array.isArray(item.type)
    ) {
      attributeElement = (
        <RenderPrimitiveTypes
          item={item}
          onChangeValue={onChangeValue}
          structureDefJSON={structureDefJSON}
          onChange={onChange}
          index={index}
        />
      );
    }
    return <div key={index}>{attributeElement}</div>;
  });

  return (
    <>
      {renderSliceName}
      {renderAttribute}
    </>
  );
};

export default RenderComplexType;
