import { IElementDefinition } from '@ahryman40k/ts-fhir-types/lib/R4';

export const sortElements = (
  a: IElementDefinition,
  b: IElementDefinition
): number => {
  if (a.id && b.id && a.id < b.id) {
    return -1;
  }
  if (a.id && b.id && a.id > b.id) {
    return 1;
  }
  return 0;
};
