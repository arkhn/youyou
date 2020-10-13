import { InputTooltip, SelectTooltip } from "components/smallComponents";
import React from "react";

import { RenderAttributesTree } from "types";
import { PrimitiveTypesType } from "state/actions/fhirDataTypesActions";
import {
  Accordion,
  AccordionDetails,
  Button,
  Typography
} from "@material-ui/core";
import { Add, ExpandMore } from "@material-ui/icons";
import {
  useStyles,
  MuiAccordionSummary
} from "components/structureDefSettings/complexTypesEditor/styles";

type DetailProps = {
  attributes: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  structureDefJSON: any;
  primitiveTypes: PrimitiveTypesType[];
  setStructureDefJson?: (path: string, value: any) => void;
  name: string;
  index?: number;
};

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  structureDefJSON,
  primitiveTypes,
  setStructureDefJson,
  name,
  index
}) => {
  const classes = useStyles();

  const onChangeChild = (path: string, value: any) => {
    if (name === "") {
      setStructureDefJson && setStructureDefJson(path, value);
    } else {
      if (undefined !== index) {
        setStructureDefJson &&
          setStructureDefJson(`${name}.?${index}.${path}`, value);
      } else {
        setStructureDefJson && setStructureDefJson(`${name}.${path}`, value);
      }
    }
  };

  const renderAttribute = attributes.map((item, index) => {
    let ToReturn: any = null;
    if (item.children.length > 0 && item.name !== "extension") {
      if (Array.isArray(structureDefJSON[item.name])) {
        ToReturn = structureDefJSON[item.name].map(
          (element: any, i: number) => {
            return (
              <div key={i} className={classes.accordionAndButton}>
                <Accordion className={classes.accordion}>
                  <MuiAccordionSummary expandIcon={<ExpandMore />}>
                    <div className={classes.accordionSummary}>
                      <Typography>{item.name}</Typography>
                      <Button
                        className={classes.accordionButton}
                        variant="outlined"
                        color="primary"
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <Add />
                      </Button>
                    </div>
                  </MuiAccordionSummary>
                  <AccordionDetails>
                    <RenderComplexType
                      structureDefJSON={element}
                      complexTypes={complexTypes}
                      attributes={item.children}
                      primitiveTypes={primitiveTypes}
                      setStructureDefJson={onChangeChild}
                      name={item.name}
                      index={i}
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          }
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
                  setStructureDefJson={onChangeChild}
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
              value={""}
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
              value={""}
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
            }[] = [
              { value: "--select a value--", label: "--select a value--" }
            ];
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
                value={mapValues[0].value}
              />
            );
          }
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
