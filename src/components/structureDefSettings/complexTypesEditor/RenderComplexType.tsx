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
  attributeToEdit: any;
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
    alignItems: "center"
  },
  accordionAndButton: {
    display: "flex"
  },
  accordionButton: {
    height: 50,
    width: 50
  }
}));

const RenderComplexType: React.FC<DetailProps> = ({
  attributes,
  complexTypes,
  attributeToEdit,
  primitiveTypes
}) => {
  const classes = useStyles();
  let toFind: any = [];

  const createComplexTreeForUi = (
    elements: any[],
    primitive: PrimitiveTypesType[],
    complexe: RenderAttributesTree[]
  ) => {
    elements.forEach((element) => {
      if (!isPrimitive(element.type, primitive)) {
        toFind = complexe.find((type) => type.name === element.type);
        if (toFind) element.children = toFind.children;
        createComplexTreeForUi(element.children, primitive, complexe);
      }
    });
  };

  createComplexTreeForUi(attributes, primitiveTypes, complexTypes);

  const renderAttribute = attributes.map((item, index) => {
    let ToReturn: any = null;
    if (item.children.length > 0 && item.name !== "extension") {
      if (Array.isArray(attributeToEdit[item.name])) {
        ToReturn = attributeToEdit[item.name].map(
          (element: any, name: number) => {
            return (
              <div key={name} className={classes.accordionAndButton}>
                <Accordion className={classes.accordion}>
                  <MuiAccordionSummary expandIcon={<ExpandMore />}>
                    <div className={classes.accordionSummary}>
                      <Typography>{item.name}</Typography>
                    </div>
                  </MuiAccordionSummary>
                  <AccordionDetails>
                    <RenderComplexType
                      attributeToEdit={element}
                      complexTypes={complexTypes}
                      attributes={item.children}
                      primitiveTypes={primitiveTypes}
                    />
                  </AccordionDetails>
                </Accordion>
                <Button
                  className={classes.accordionButton}
                  variant="outlined"
                  color="primary"
                >
                  <Add />
                </Button>
              </div>
            );
          }
        );
      } else if (typeof attributeToEdit[item.name] === "object") {
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
                  attributeToEdit={attributeToEdit[item.name]}
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
      if (
        item.type === "string" ||
        item.type === "http://hl7.org/fhirpath/System.String"
      ) {
        ToReturn = (
          <InputTooltip
            label={item.min && item.min > 0 ? `${item.name}*` : item.name}
            value={""}
            tool={item.definition}
          />
        );
      } else if (item.type === "positiveInt") {
        ToReturn = (
          <InputTooltip
            label={item.min && item.min > 0 ? `${item.name}*` : item.name}
            value={""}
            tool={item.definition}
          />
        );
      } else if (item.type === "code" && item.valueSet) {
        const mapValues: {
          value: string | undefined;
          label: string | undefined;
        }[] = [{ value: "--select a value--", label: "--select a value--" }];
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
