import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { RenderAttributesTree } from 'types';

/**
 * Create a new element name for the attribute selected, for displaying in the input
 * label. If element is fixed, creates a label with the name of the element definition
 * currently under modification
 * @param element
 * @param newElementDefinition
 */
export const getLabel = (
  element: RenderAttributesTree,
  newElementDefinition: IElementDefinition | undefined
) => {
  let label = element.name;
  if (
    label.includes('fixed') &&
    newElementDefinition &&
    newElementDefinition.id
  ) {
    const newName = newElementDefinition.id.split('.');
    label = newName[newName.length - 1];
  }
  return label;
};

/**
 * If the element is a fixed element, change the name of the element to
 * fixed + element type's name with a capitalized first letter, and if it's not fixed,
 * keep the original name of the element
 * @param element element used to change name
 * @param label original name of the element
 */
export const changeFixedName = (
  attribute: RenderAttributesTree,
  label: string
) => {
  if (
    attribute.name.includes('fixed') &&
    attribute.type &&
    !Array.isArray(attribute.type)
  ) {
    const splitedTypeName = attribute.type.split('');
    const firstLetterCapitalize = attribute.type[0].toUpperCase();
    splitedTypeName.splice(0, 1, firstLetterCapitalize);
    const newTypeName = splitedTypeName.join('');
    return `fixed${newTypeName}`;
  } else {
    return label;
  }
};
