import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import {
  createComplexTypes,
  renderTreeAttributes,
  transformAttributes
} from 'state/utils';
import { RenderAttributesTree, SimplifiedAttributes } from 'types';

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
      att.newPath = newPath;
      if (att.children.length > 0) {
        att.children = changePath(cloneDeep(att.children), att.id);
      }
    }
    return atts;
  };
  return changePath(cloneDeep(attributeTree.children), attributeTree.name)[0];
};
