import {
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import { createComplexTypes, renderTreeAttributes } from 'state/utils';
import { RenderAttributesTree, SimplifiedAttributes } from 'types';

// need to be refactored with transformAttributes function in state/utils.ts
const transformAttributes = (
  elements: IElementDefinition[]
): SimplifiedAttributes[] => {
  const attributes: SimplifiedAttributes[] = [];
  elements.forEach((element: IElementDefinition) => {
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
    } else if (element.type.length > 1) {
      attributes.push({
        path: element.path as string,
        type: element.type,
        definition: element.definition as string,
        min: element.min as number,
        max: element.max as string
      });
    } else {
      element.type.forEach((types: IElementDefinitionType) => {
        if (element.path && types.code && element.definition) {
          attributes.push({
            path: element.path as string,
            type: types.code,
            definition: element.definition as string,
            min: element.min as number,
            max: element.max as string
          });
        }
      });
    }
  });
  return attributes;
};

export const createComplexSnapshot = (
  attributes: IElementDefinition[],
  primitiveTypes: string[],
  complexTypes: RenderAttributesTree[]
): RenderAttributesTree => {
  let attribute: SimplifiedAttributes[] = [];
  const attributeTree: RenderAttributesTree = {
    id: '',
    name: '',
    type: '',
    children: [],
    min: null,
    max: '',
    definition: ''
  };
  if (attributes) {
    attribute = transformAttributes(attributes);
    attribute.forEach(
      (type) => type && renderTreeAttributes(type, type, attributeTree)
    );
    const childrens = createComplexTypes(
      complexTypes,
      attributeTree.children[0].children,
      primitiveTypes
    );
    attributeTree.children[0].children.splice(
      0,
      attributeTree.children[0].children.length
    );
    childrens.forEach((child: RenderAttributesTree) =>
      attributeTree.children[0].children.push(child)
    );
  }
  const changePath = (
    atts: RenderAttributesTree[],
    path: string
  ): RenderAttributesTree[] => {
    for (const att of atts) {
      const newPath = `${path !== '' ? path + '.' : ''}${att.name}`;
      att.id = newPath;
      if (att.children.length > 0) {
        att.children = changePath(cloneDeep(att.children), att.id);
      }
    }
    return atts;
  };
  return changePath(cloneDeep(attributeTree.children), attributeTree.name)[0];
};
