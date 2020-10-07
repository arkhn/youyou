import { InputTooltip, SelectTooltip } from "components/smallComponents";
import React from "react";

import { makeStyles, Theme } from "@material-ui/core/styles";

import { RenderAttributesTree } from "types";
import { isPrimitive } from "components/structureDefSettings/utils";
import { PrimitiveTypesType } from "state/actions/fhirDataTypesActions";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography
} from "@material-ui/core";
import { Add, ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

type DetailProps = {
  attributes: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  structureDefJSON: any;
  primitiveTypes: PrimitiveTypesType[];
};

const MuiAccordionSummary = withStyles({
  root: {
    backgroundColor: "#90DFBF"
  }
})(AccordionSummary);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: 4,
    width: "100%"
  },
  accordion: {
    border: "1px solid " + theme.palette.secondary.main,
    flexGrow: 1
  },
  accordionSummary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1
  },
  accordionAndButton: {
    display: "flex"
  },
  accordionButton: {
    height: 30,
    width: 50
  }
}));

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  structureDefJSON,
  primitiveTypes
}) => {
  const classes = useStyles();

  const createComplexTreeForUi = (
    elements: RenderAttributesTree[],
    primitive: PrimitiveTypesType[],
    complex: RenderAttributesTree[]
  ) => {
    elements.forEach((element) => {
      if (!isPrimitive(element.type, primitive)) {
        const complexType = complex.find((type) => type.name === element.type);
        if (element.children.length === 0 && complexType)
          element.children = complexType.children;
        createComplexTreeForUi(element.children, primitive, complex);
      }
    });
  };

  createComplexTreeForUi(attributes, primitiveTypes, complexTypes);

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
                        onClick={(event) => event.stopPropagation()}
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
                />
              </AccordionDetails>
            </Accordion>
          </div>
        );
      }
    } else if (item.name !== "extension" && item.children.length === 0) {
      switch (item.type) {
        case "string":
        case "http://hl7.org/fhirpath/System.String": {
          ToReturn = (
            <InputTooltip
              label={item.min && item.min > 0 ? `${item.name}*` : item.name}
              value={""}
              tool={item.definition}
            />
          );
          break;
        }
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
