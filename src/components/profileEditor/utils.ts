import {
  IElementDefinition,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import set from 'lodash.set';
import get from 'lodash.get';

import {
  createComplexTypes,
  createSimplifiedAttributes,
  transformAttributes
} from 'state/utils';
import { SimplifiedAttributes, TemporaryAttribute } from 'types';

/**
 * creates tree of simplified attributes for snapshot attribute
 * @param attributes all snapshot definition elements
 * @param primitiveTypes simplified tree of primitive types
 * @param complexTypes simplified tree of complex types
 */
export const createComplexSnapshot = (
  attributes: IElementDefinition[],
  primitiveTypes: string[],
  complexTypes: SimplifiedAttributes[]
): SimplifiedAttributes[] => {
  let attribute: TemporaryAttribute[] = [];
  const attributeTree: SimplifiedAttributes = {
    id: '',
    name: '',
    type: '',
    children: [],
    min: undefined,
    max: '',
    definition: ''
  };
  const fixedElements: string[] = [];
  attributes.forEach((attribute) => {
    for (const key in attribute) {
      if (key.includes('fixed') && attribute.id) {
        fixedElements.push(attribute.id);
      }
    }
  });

  //if (fixedElements.length > 0) state.fixedElements = fixedElements;
  if (attributes) {
    attribute = transformAttributes(attributes);
    attribute.forEach(
      (type) => type && createSimplifiedAttributes(type, type, attributeTree)
    );
    const children: any[] = [];
    attributeTree.children.forEach((kid) => {
      children.push(
        createComplexTypes(complexTypes, kid.children, primitiveTypes)
      );
    });

    children.forEach((kid, i) => {
      attributeTree.children[i].children = kid;
    });
  }
  const changePath = (
    atts: SimplifiedAttributes[],
    path: string
  ): SimplifiedAttributes[] => {
    const attribs = cloneDeep(atts);
    for (const att of attribs) {
      const newPath = `${path !== '' ? path + '.' : ''}${att.name}`;
      if (att.children.length > 0) {
        att.isComplex = true;
      }
      if (fixedElements.find((path) => path === newPath)) {
        att.children = [];
      }
      att.newPath = newPath;
      if (att.children.length > 0) {
        att.children = changePath(cloneDeep(att.children), att.newPath);
      }
    }
    return attribs;
  };

  return changePath(attributeTree.children, attributeTree.name);
};

export const createElementDefinitionTree = (
  items: SimplifiedAttributes[]
): any => {
  const elemDef: any = {};
  items.forEach((item: SimplifiedAttributes) => {
    if (!item.name.includes('fixed')) {
      if (item.children.length === 0) {
        elemDef[item.name] = undefined;
      } else if (item.max === '1') {
        elemDef[item.name] = createElementDefinitionTree(item.children);
      } else {
        elemDef[item.name] = [];
      }
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
  path: string
): number => {
  const indexes: number[] = [];
  const newPath = path.split('.');
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

/**
 * When changing a value in an object, returns a new copy of the object with the modification
 * @param path path of the element to modify
 * @param value value to add to the object
 * @param element object to modify
 */
export const onChangeElementJSON = (
  path: string,
  value: any,
  element: any
): any => {
  const elem: any = { ...element };
  if (value !== '') {
    set(elem, path, value);
  } else {
    set(elem, path, undefined);
  }
  return elem;
};

export const onChangeCardinalityJSON = (
  cardiMinPath: string,
  cardiMaxPath: string,
  cardiMin: number,
  cardiMax: string,
  element: any
): any => {
  const elem: any = { ...element };
  set(elem, cardiMinPath, cardiMin);
  set(elem, cardiMaxPath, cardiMax);
  return elem;
};

/**
 * When deleting a complex type in an object, returns a new copy of the object with the deleting
 * @param path path of the element to delete
 * @param i index of the element to delete
 * @param element object to modify
 */
export const onDeleteComplexType = (
  path: string,
  i: number | undefined,
  element: any
): any => {
  const elem: any = { ...element };
  if (i !== undefined) {
    const elementDefJSONAttr: any = get(elem, path);
    elementDefJSONAttr.splice(i, 1);
  } else {
    delete elem[path];
  }
  return elem;
};

/**
 * When adding a complex type in an object, returns a new copy of the object with the adding
 * @param path path of the element where to add
 * @param value complex type to add to the object
 * @param element object to modify
 */
export const onAddComplexType = (
  path: string,
  value: any,
  element: any
): any => {
  const elem: any = { ...element };
  const elementDefJSONAttr = get(elem, path);
  if (Array.isArray(elementDefJSONAttr)) {
    elementDefJSONAttr.push(value);
  } else {
    if (path.includes('fixed') && !elementDefJSONAttr) {
      elem[path] = value;
    }
  }
  return elem;
};
