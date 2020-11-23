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
    const children = createComplexTypes(
      complexTypes,
      attributeTree.children[0].children,
      primitiveTypes
    );
    attributeTree.children[0].children.splice(
      0,
      attributeTree.children[0].children.length
    );
    attributeTree.children[0].children = children;
  }

  const changePath = (
    atts: RenderAttributesTree[],
    path: string
  ): RenderAttributesTree[] => {
    const attribs = cloneDeep(atts);
    for (const att of attribs) {
      const newPath = `${path !== '' ? path + '.' : ''}${att.name}`;
      att.newPath = newPath;
      if (att.children.length > 0) {
        att.children = changePath(cloneDeep(att.children), att.newPath);
      }
    }
    return attribs;
  };

  return changePath(attributeTree.children, attributeTree.name)[0];
};

export const createElementDefinitionTree = (
  items: RenderAttributesTree[]
): any => {
  const elemDef: any = {};
  items.forEach((item: RenderAttributesTree) => {
    if (item.children.length === 0) {
      elemDef[item.name] = undefined;
    } else if (item.max === '1') {
      elemDef[item.name] = createElementDefinitionTree(item.children);
    } else {
      elemDef[item.name] = [];
    }
  });
  return elemDef;
};
