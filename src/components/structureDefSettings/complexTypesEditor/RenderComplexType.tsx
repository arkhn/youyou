import { InputTooltip, SelectTooltip } from "components/smallComponents";
import React from "react";

import { RenderAttributesTree } from "types";
import {
  Accordion,
  AccordionDetails,
  Button,
  Typography
} from "@material-ui/core";
import { Add, DeleteOutline, ExpandMore } from "@material-ui/icons";
import {
  useStyles,
  MuiAccordionSummary
} from "components/structureDefSettings/complexTypesEditor/styles";
import CheckboxTooltip from "components/smallComponents/CheckboxTooltip";

type DetailProps = {
  attributes: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  structureDefJSON: any;
  primitiveTypes: string[];
  handleTextFields?: (path: string, value: any) => void;
  handleDelete?: (path: string, i: number) => void;
  handleAdd?: (path: string) => void;
  name: string;
  index?: number;
};

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  structureDefJSON,
  primitiveTypes,
  handleTextFields,
  handleDelete,
  handleAdd,
  name,
  index
}) => {
  const classes = useStyles();
  const onChangeChild = (path: string, value: any) => {
    if (name === "") {
      handleTextFields && handleTextFields(path, value);
    } else {
      if (undefined !== index) {
        handleTextFields &&
          handleTextFields(`${name}.?${index}.${path}`, value);
      } else {
        handleTextFields && handleTextFields(`${name}.${path}`, value);
      }
    }
  };

  const onDeleteChild = (path: string, i: number) => {
    if (name === "") {
      handleDelete && handleDelete(path, i);
    } else {
      if (undefined !== index) {
        handleDelete && handleDelete(`${name}.?${index}.${path}`, i);
      } else {
        handleDelete && handleDelete(`${name}.${path}`, i);
      }
    }
  };

  const onAddChild = (path: string) => {
    if (name === "") {
      handleAdd && handleAdd(path);
    } else {
      if (undefined !== index) {
        handleAdd && handleAdd(`${name}.?${index}.${path}`);
      } else {
        handleAdd && handleAdd(`${name}.${path}`);
      }
    }
  };

  const renderAttribute = attributes.map((item, index) => {
    let ToReturn: any = null;
    if (
      item.children.length > 0 &&
      item.name !== "extension" &&
      item.name !== "snapshot" &&
      item.name !== "differential"
    ) {
      if (Array.isArray(structureDefJSON[item.name])) {
        ToReturn = (
          <div className={classes.completeDiv}>
            <div className={classes.header}>
              <Typography>{item.name}</Typography>
              <Button
                className={classes.accordionButton}
                variant="outlined"
                color="primary"
                onClick={(event) => {
                  onAddChild(item.name);
                }}
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
                          onClick={(event) => {
                            event.stopPropagation();
                            onDeleteChild(item.name, i);
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
                        handleTextFields={onChangeChild}
                        handleDelete={onDeleteChild}
                        handleAdd={onAddChild}
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
      } else if (typeof structureDefJSON[item.name] === "object") {
        ToReturn = (
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
                  handleTextFields={onChangeChild}
                  handleDelete={onDeleteChild}
                  handleAdd={onAddChild}
                  name={item.name}
                />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }
    } else if (item.name !== "extension" && item.children.length === 0) {
      switch (item.type) {
        case "string":
        case "uri":
        case "id":
        case "http://hl7.org/fhirpath/System.String": {
          ToReturn = (
            <InputTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              value={
                structureDefJSON[item.name] ? structureDefJSON[item.name] : ""
              }
              tool={item.definition}
              onBlur={(event) => {
                const { value } = event.target;
                onChangeChild(item.name, value);
              }}
            />
          );
          break;
        }
        case "integer":
        case "positiveInt": {
          ToReturn = (
            <InputTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              value={
                structureDefJSON[item.name] ? structureDefJSON[item.name] : ""
              }
              tool={item.definition}
            />
          );
          break;
        }
        case "code": {
          if (item.valueSet) {
            const mapValues: {
              value: string | undefined;
              label: string | undefined;
            }[] = [];
            if (item?.min === 0)
              mapValues.push({
                value: "--select_a_value--",
                label: "--select a value--"
              });
            item.valueSet?.forEach((values) =>
              mapValues.push({
                value: values.code,
                label: values.display
              })
            );
            ToReturn = (
              <SelectTooltip
                key={index}
                label={item.min && item.min > 0 ? `${item.name}*` : item.name}
                tool={item.definition}
                choices={mapValues}
                value={
                  structureDefJSON[item.name]
                    ? structureDefJSON[item.name]
                    : mapValues[0].value
                }
                onChange={(event) => {
                  const { value } = event.target;
                  if (value !== "undefined") onChangeChild(item.name, value);
                }}
              />
            );
          }
          break;
        }
        case "boolean": {
          ToReturn = (
            <CheckboxTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              tool={item.definition}
              value={structureDefJSON[item.name] ?? false}
              onChange={(event) => {
                const { checked } = event.target;
                onChangeChild(item.name, checked);
              }}
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
        {ToReturn}
      </div>
    );
  });

  return (
    <div>
      <div>{renderAttribute}</div>
    </div>
  );
};

export default RenderComplexType;
