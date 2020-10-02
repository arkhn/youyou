import { InputTooltip, SelectTooltip } from "components/smallComponents";
import React from "react";
import { RenderNode } from "types";
import { makeStyles, Theme } from "@material-ui/core/styles";

type DetailProps = {
  contactPoint: RenderNode[];
  complexTypes: RenderNode[];
  contactToEdit: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderWidth: 1,
    borderColor: theme.palette.secondary.light,
    borderStyle: "solid",
    borderRadius: 4,
    padding: 10
  }
}));

const RenderComplexType: React.FC<DetailProps> = ({
  contactPoint,
  complexTypes,
  contactToEdit
}) => {
  const classes = useStyles();

  const renderContactPoint = contactPoint.map((item, index) => {
    /* const toFind = complexTypes.find((type) => type.name === item.type);
    if (complexTypes) {
      toFind?.children?.forEach((element) => {
        item.children.push(element);
      });
    } */

    if (item.children.length === 0 && item.name !== "extension") {
      if (item.name !== "extension") {
        if (
          item.type === "string" ||
          item.type === "http://hl7.org/fhirpath/System.String"
        ) {
          return (
            <div key={index}>
              <InputTooltip label={item.name} value={""} tool={item.short} />
            </div>
          );
        } else if (item.type === "positiveInt") {
          return (
            <div key={index}>
              <InputTooltip label={item.name} value={""} tool={item.short} />
            </div>
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
          return (
            <div key={index}>
              <SelectTooltip
                label={item.name}
                tool={item.short}
                choices={mapValues}
                value={mapValues[0].value}
              />
            </div>
          );
        }
      }
    } else if (item.children.length > 0 && item.name !== "extension") {
      if (Array.isArray(contactToEdit[item.name])) {
        const ToRender = contactToEdit[item.name].map(
          (element: any, name: number) => {
            return (
              <div key={name}>
                <RenderComplexType
                  contactToEdit={element}
                  complexTypes={complexTypes}
                  contactPoint={item.children}
                />
              </div>
            );
          }
        );
        return (
          <div key={index}>
            {item.name}
            {ToRender}
          </div>
        );
      } else {
        return (
          <div key={index}>
            {item.name}
            <RenderComplexType
              contactToEdit={contactToEdit[item.name]}
              complexTypes={complexTypes}
              contactPoint={item.children}
            />
          </div>
        );
      }
    }
    return null;
  });

  return (
    <div>
      <div className={classes.root}>{renderContactPoint}</div>
    </div>
  );
};

export default RenderComplexType;
