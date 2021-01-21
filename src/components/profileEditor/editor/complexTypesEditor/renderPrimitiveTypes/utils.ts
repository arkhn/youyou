import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';
import { SimplifiedAttributes } from 'types';

/**
 * Create a new element name for the attribute selected, for displaying in the input
 * label. If element is fixed, creates a label with the name of the element definition
 * currently under modification
 * @param element simplified attribute of selected element
 * @param elementDefinition element definition selected
 */
export const getLabel = (
  element: SimplifiedAttributes,
  elementDefinition: IElementDefinition | undefined
) => {
  let label = element.name;
  if (label.includes('fixed') && elementDefinition && elementDefinition.id) {
    const newName = elementDefinition.id.split('.');
    label = newName[newName.length - 1];
  }
  return label;
};

/**
 * If the element is a fixed element, change the name of the element to {fixed + capitalized element type's name}, and if it's not fixed,
 * keep the original name of the element
 * @param element simplified attribute of selected element
 * @param label original name of the element
 */
export const changeFixedName = (
  attribute: SimplifiedAttributes,
  label: string
) => {
  if (
    attribute.name.includes('fixed') &&
    attribute.type &&
    !Array.isArray(attribute.type)
  ) {
    const type =
      attribute.type === 'http://hl7.org/fhirpath/System.String'
        ? 'string'
        : attribute.type;

    const newTypeName = type.charAt(0).toUpperCase() + type.slice(1);
    return `fixed${newTypeName}`;
  } else {
    return label;
  }
};
