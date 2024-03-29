import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import { SimplifiedAttributes } from 'types';

/**
 * Add a slice to the structure definition snapshot
 * @param nodeToSlice simplified selected attribute to slice
 * @param structureDefinition structure definition to edit
 * @param sliceName name to give to the slice (will be replaced by :${sliceName})
 * @param index where to insert the slice in the structure definition snapshot
 * @returns modified structure definition
 */
export const structureDefAddSlice = (
  nodeToSlice: SimplifiedAttributes,
  structureDefinition: IStructureDefinition,
  sliceName: string,
  index: number
): IStructureDefinition | undefined => {
  const slicedElements: IElementDefinition[] = [];
  if (nodeToSlice.newPath && structureDefinition.snapshot) {
    const splitedPath = nodeToSlice.newPath.split('.');
    structureDefinition.snapshot.element.forEach(
      (element: IElementDefinition) => {
        const startingPath = element.id
          ?.split('.')
          .slice(0, splitedPath.length)
          .join('.');
        const endingPath = element.id
          ?.split('.')
          .slice(splitedPath.length)
          .join('.');
        if (startingPath === nodeToSlice.newPath) {
          element.base &&
            element &&
            slicedElements.push({
              ...element,
              id:
                startingPath +
                `:${sliceName}` +
                (endingPath ? '.' + endingPath : ''),
              path: element.id,
              sliceName: sliceName,
              min: element.min,
              max: element.max,
              binding: element.binding
                ? (nodeToSlice.binding as IElementDefinitionBinding)
                : undefined
            });
        }
      }
    );
  }
  const sDefToEdit = cloneDeep(structureDefinition);
  if (slicedElements.length === 0) {
    slicedElements.push({
      id: nodeToSlice.newPath + `:${sliceName}`,
      path: nodeToSlice.newPath,
      sliceName: sliceName,
      base: {
        min: nodeToSlice.min,
        max: nodeToSlice.max
      },
      min: nodeToSlice.min,
      max: nodeToSlice.max,
      definition: nodeToSlice.definition,
      type:
        typeof nodeToSlice.type === 'string'
          ? [{ code: nodeToSlice.type }]
          : nodeToSlice.type
    });
  }
  slicedElements.forEach((element) => {
    sDefToEdit?.snapshot?.element.splice(index, 0, element);
    index++;
  });
  return sDefToEdit;
};

/**
 * Delete a selected slice and its child on the structure definition
 * @param sliceToDelete simplified selected slice attribute to remove
 * @param structureDefinition (actual structure definition where to remove the slice)
 * @returns modified structure definition
 */
export const structureDefDeleteSlice = (
  sliceToDelete: SimplifiedAttributes,
  structureDefinition: IStructureDefinition
): IStructureDefinition | undefined => {
  const indexes: number[] = [];
  if (structureDefinition.snapshot) {
    structureDefinition.snapshot.element.forEach((element, elementIndex) => {
      if (element.id && element.id?.split(':').length > 1) {
        let splitName = '';
        element.id?.split('.').forEach((split) => {
          splitName = splitName + split;
          if (
            splitName === sliceToDelete.newPath?.split('.').join('') &&
            structureDefinition.snapshot
          ) {
            indexes.push(elementIndex);
          }
        });
      }
    });
    structureDefinition.snapshot.element.splice(indexes[0], indexes.length);
    return structureDefinition;
  }
};
