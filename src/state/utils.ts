import {
  IElementDefinition,
  IElementDefinition_Type
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { AxiosResponse } from "axios";
import {
  FetchedDataCodeSystem,
  fhirDataState,
  SimplifiedAttributes,
  RenderAttributesTree
} from "types";

export const renderTreeAttributes = (
  attribute: SimplifiedAttributes,
  rootPath: SimplifiedAttributes,
  node: RenderAttributesTree,
  rootNode: RenderAttributesTree
): RenderAttributesTree => {
  if (node.id === rootPath.path) {
    return rootNode;
  } else {
    const splitPath = attribute.path.split(".");
    const childNode = node.children.find((c) => c.name === splitPath[0]);
    const newPath = splitPath.slice(1, splitPath.length).join(".");
    const newAttribute = {
      path: newPath,
      type: attribute.type,
      definition: attribute.definition,
      min: attribute.min,
      max: attribute.max
    };
    if (childNode) {
      return renderTreeAttributes(newAttribute, rootPath, childNode, rootNode);
    } else {
      const newNode = rootPath.valueSet
        ? {
            name: splitPath[0],
            id: rootPath.path,
            type: rootPath.type,
            children: [],
            definition: rootPath.definition,
            valueSet: rootPath.valueSet,
            min: rootPath.min,
            max: rootPath.max
          }
        : {
            name: splitPath[0],
            id: rootPath.path,
            type: rootPath.type,
            definition: rootPath.definition,
            children: [],
            min: rootPath.min,
            max: rootPath.max
          };
      node.children.push(newNode);
      return renderTreeAttributes(newAttribute, rootPath, newNode, rootNode);
    }
  }
};

export const transformAttributes = (
  responseToRequest: AxiosResponse<any>,
  valueSetRequest: AxiosResponse<any>
) => {
  const attributes: SimplifiedAttributes[] = [];
  responseToRequest.data.entry.forEach((result: fhirDataState) => {
    result.resource.snapshot.element.forEach((element: IElementDefinition) => {
      if (!element.type) {
        element.path &&
          element.definition &&
          attributes.push({
            path: element.path,
            type: element.path,
            definition: element.definition,
            min: element.min as number,
            max: element.max as string
          });
      } else {
        if (element.type.length > 1) {
          attributes.push({
            path: element.path as string,
            type: element.type,
            definition: element.definition as string,
            min: element.min as number,
            max: element.max as string
          });
        } else {
          element.type.forEach((type: IElementDefinition_Type) => {
            if (element.path && type.code && element.definition) {
              if (type.code === "code") {
                element.binding?.extension?.forEach((extension) => {
                  if (extension.valueString) {
                    const findValueSet = valueSetRequest.data.entry.find(
                      (
                        value: FetchedDataCodeSystem
                      ): FetchedDataCodeSystem | undefined => {
                        if (value.resource.name === extension.valueString) {
                          return value;
                        }
                        return undefined;
                      }
                    );
                    if (findValueSet) {
                      element.path &&
                        type.code &&
                        element.definition &&
                        attributes.push({
                          definition: element.definition,
                          path: element.path,
                          type: type.code,
                          min: element.min as number,
                          max: element.max as string,
                          valueSet: findValueSet.resource.concept
                        });
                    }
                  } else {
                    element.path &&
                      type.code &&
                      element.definition &&
                      attributes.push({
                        definition: element.definition,
                        path: element.path,
                        type: type.code,
                        min: element.min as number,
                        max: element.max as string
                      });
                  }
                });
              } else {
                attributes.push({
                  path: element.path,
                  type: type.code,
                  definition: element.definition,
                  min: element.min as number,
                  max: element.max as string
                });
              }
            }
          });
        }
      }
    });
  });
  return attributes;
};
