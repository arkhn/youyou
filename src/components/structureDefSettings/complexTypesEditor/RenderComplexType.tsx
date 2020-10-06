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
import { ExpandMore } from "@material-ui/icons";
import { withStyles } from "@material-ui/styles";

type DetailProps = {
  contactPoint: RenderAttributesTree[];
  complexTypes: RenderAttributesTree[];
  contactToEdit: any;
  primitiveTypes: PrimitiveTypesType[];
  complexeTypePattern?: any;
};

const MuiAccordionSummary = withStyles({
  root: {
    backgroundColor: "#90DFBF"
  }
})(AccordionSummary);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "95%",
    margin: 4
  },
  accordion: {
    border: "1px solid " + theme.palette.secondary.main
  }
}));

const RenderComplexType: React.FC<DetailProps> = ({
  contactPoint,
  complexTypes,
  contactToEdit,
  primitiveTypes,
  complexeTypePattern
}) => {
  const classes = useStyles();
  let toFind: any = [];

  const createTree = (
    element: any[],
    primitive: PrimitiveTypesType[],
    complexe: RenderAttributesTree[]
  ) => {
    element.forEach((item) => {
      if (!isPrimitive(item.type, primitive)) {
        toFind = complexe.find((type) => type.name === item.type);
        if (toFind) item.children = toFind.children;
        createTree(item.children, primitive, complexe);
      }
    });
  };

  const addElement = (element: any, index: number) => {
    if (complexeTypePattern) console.log(complexeTypePattern[element.name]);
  };

  createTree(contactPoint, primitiveTypes, complexTypes);

  const renderContactPoint = contactPoint.map((item, index) => {
    let ToReturn: any = null;
    if (item.children.length > 0 && item.name !== "extension") {
      if (Array.isArray(contactToEdit[item.name])) {
        ToReturn = contactToEdit[item.name].map(
          (element: any, name: number) => {
            return (
              <div key={name}>
                <Accordion className={classes.accordion}>
                  <MuiAccordionSummary expandIcon={<ExpandMore />}>
                    <Typography>{item.name}</Typography>
                    <Button
                      variant="outlined"
                      onClick={() => addElement(item, index)}
                      color="primary"
                    >
                      add
                    </Button>
                  </MuiAccordionSummary>
                  <AccordionDetails>
                    {complexeTypePattern ? (
                      <RenderComplexType
                        contactToEdit={element}
                        complexTypes={complexTypes}
                        contactPoint={item.children}
                        primitiveTypes={primitiveTypes}
                        complexeTypePattern={
                          complexeTypePattern[item.name].children
                            ? complexeTypePattern[item.name].children
                            : null
                        }
                      />
                    ) : (
                      <RenderComplexType
                        contactToEdit={element}
                        complexTypes={complexTypes}
                        contactPoint={item.children}
                        primitiveTypes={primitiveTypes}
                      />
                    )}
                  </AccordionDetails>
                </Accordion>
              </div>
            );
          }
        );
      } else if (typeof contactToEdit[item.name] === "object") {
        ToReturn = (
          <Accordion className={classes.accordion}>
            <MuiAccordionSummary expandIcon={<ExpandMore />}>
              <Typography>{item.name}</Typography>
            </MuiAccordionSummary>
            <AccordionDetails>
              {complexeTypePattern ? (
                <RenderComplexType
                  contactToEdit={contactToEdit[item.name]}
                  complexTypes={complexTypes}
                  contactPoint={item.children}
                  primitiveTypes={primitiveTypes}
                  complexeTypePattern={
                    complexeTypePattern[item.name].children
                      ? complexeTypePattern[item.name].children
                      : null
                  }
                />
              ) : (
                <RenderComplexType
                  contactToEdit={contactToEdit[item.name]}
                  complexTypes={complexTypes}
                  contactPoint={item.children}
                  primitiveTypes={primitiveTypes}
                />
              )}
            </AccordionDetails>
          </Accordion>
        );
      }
    } else if (item.name !== "extension" && item.children.length === 0) {
      if (
        item.type === "string" ||
        item.type === "http://hl7.org/fhirpath/System.String"
      ) {
        ToReturn = (
          <InputTooltip label={item.name} value={""} tool={item.short} />
        );
      } else if (item.type === "positiveInt") {
        ToReturn = (
          <InputTooltip label={item.name} value={""} tool={item.short} />
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
            label={item.name}
            tool={item.short}
            choices={mapValues}
            value={mapValues[0].value}
          />
        );
      }
    }
    return <div key={index}>{ToReturn}</div>;
  });

  return (
    <div className={classes.root}>
      <div className={classes.root}>{renderContactPoint}</div>
    </div>
  );
};

export default RenderComplexType;
