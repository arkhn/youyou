import {
  IElementDefinition,
  IElementDefinition_Type
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { AxiosResponse } from 'axios';
import cloneDeep from 'lodash.clonedeep';
import {
  FetchedDataCodeSystem,
  fhirDataState,
  SimplifiedAttributes,
  RenderAttributesTree
} from 'types';

/**
 * Transform fetched attributes to simplified attributes with new paths
 * @param responseToRequest
 * response needed to be transformed
 * @param valueSetRequest
 * value sets for FHIR code type
 * @returns
 * an array of all the fetched attributes, transformed in SimplifiedAttributes
 * types
 */
export const transformAttributes = (
  responseToRequest: AxiosResponse<any>,
  valueSetRequest: AxiosResponse<any>
): SimplifiedAttributes[] => {
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
              if (type.code === 'code') {
                element.binding?.extension?.forEach((extension) => {
                  if (extension.valueString) {
                    const findValueSet = valueSetRequest.data.entry.find(
                      (value: FetchedDataCodeSystem) =>
                        value.resource.name === extension.valueString
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

/**
 * Check if it's a FHIR primitive type
 * @param type FHIR type you have to check
 * @param primitiveTypes all primitive FHIR types
 * @returns if type is a primitive FHIR type, return true, else, return false.
 */
export const isPrimitive = (
  type: string | IElementDefinition_Type[],
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference';

/**
 * Create renderTree of FHIR structure definition, with children determined only
 * by its path, without looking for FHIR complex types.
 * @param attribute
 * An object with a simplified attribute of structure definition's snapshot.
 * @param parentAttribute
 * A parent of attribute determined by its path.
 * @param node
 * A node to assign to a parent node in a renderTree tree, determined by its path.
 * @returns a render tree filled with backbones elements.
 */
export const renderTreeAttributes = (
  attribute: SimplifiedAttributes,
  parentAttribute: SimplifiedAttributes,
  node: RenderAttributesTree
): RenderAttributesTree => {
  if (node.id === parentAttribute.path) {
    return cloneDeep(node);
  } else {
    const splitPath = attribute.path.split('.');
    const childNode = node.children.find((c) => c.name === splitPath[0]);
    const newPath = splitPath.slice(1, splitPath.length).join('.');
    const newAttribute = {
      path: newPath,
      type: attribute.type,
      definition: attribute.definition,
      min: attribute.min,
      max: attribute.max
    };
    if (childNode) {
      return renderTreeAttributes(newAttribute, parentAttribute, childNode);
    } else {
      const newNode = {
        name: splitPath[0],
        id: parentAttribute.path,
        type: parentAttribute.type,
        children: [],
        definition: parentAttribute.definition,
        valueSet: parentAttribute.valueSet,
        min: parentAttribute.min,
        max: parentAttribute.max
      };
      node.children.push(newNode);
      return renderTreeAttributes(newAttribute, parentAttribute, newNode);
    }
  }
};

/**
 * Create a Render Tree with filled childrens when the current item is a complex FHIR type
 * (except for Backbone element which is inheriting its children from the original
 * structure definition snapshot's paths)
 * @param complexTypes
 * An array FHIR simplified complex types
 * @param currentItemsChildren
 * An array of all the children of the attribute selected
 * @param primitiveTypes
 * An array of FHIR primitive types
 */
export const createComplexTypes = (
  complexTypes: RenderAttributesTree[],
  currentItemsChildren: RenderAttributesTree[],
  primitiveTypes: string[]
): RenderAttributesTree[] => {
  const enhancedComplexType: RenderAttributesTree[] = [];
  for (const child of currentItemsChildren) {
    if (
      !isPrimitive(child.type, primitiveTypes) &&
      child.type !== 'BackboneElement'
    ) {
      const toFind = complexTypes.find((type) => type.name === child.type);
      if (toFind) {
        const childrenComplexType = createComplexTypes(
          complexTypes,
          toFind.children,
          primitiveTypes
        );
        enhancedComplexType.push({ ...child, children: childrenComplexType });
      } else {
        enhancedComplexType.push(child);
      }
    } else {
      enhancedComplexType.push(child);
    }
  }
  return enhancedComplexType;
};
