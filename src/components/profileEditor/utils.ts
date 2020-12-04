import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
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
    min: undefined,
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

/**
 * Find the index in structureDefinition.snapshot.element to which we are going to add the new element.
 * Creates an array of indexes, and returns last index + 1, to add the element after the index we found.
 *
 * @param structureDefinition original structure definition without the slice, used to find the index of the node we're looking for
 * @param node element we want to slice
 * @returns a number
 *
 * It splits the selected node's path, and join at each iteration every element of the splited selected node path.
 * If an element.id is identical to the splited selected node path, its index is added to the indexes array.
 * For exemple in the resource Patient, Patient.contact.period.start is not existing in the orginal snapshot, so we're going
 * to look if there is a Patient, then a Patient.contact, then a Patient.contact.period (all of them are existing respectively
 * at indexes 0, 20 and 30)
 * As Patient.contact.period.start isn't existing, it's going to return the last index (30) + 1 to add the element at index 31.
 *
 */
export const findIndex = (
  structureDefinition: IStructureDefinition,
  node: RenderAttributesTree
): number => {
  const indexes: number[] = [];
  const newPath = node?.newPath?.split('.');
  structureDefinition.snapshot?.element.forEach((element, elementIndex) => {
    if (
      element?.id ===
      // returns a copy of newPath selected from index 0 to index element.id.split('.').length, and join it with dots to have a path
      newPath?.slice(0, element?.id?.split('.').length).join('.')
    ) {
      indexes.push(elementIndex);
    }
  });
  return indexes[indexes.length - 1] + 1;
};
