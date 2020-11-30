import {
  IElementDefinition,
  IElementDefinition_Binding as IElementDefinitionBinding,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import cloneDeep from 'lodash.clonedeep';
import { RenderAttributesTree } from 'types';

export const structureDefAddSlice = (
  node: RenderAttributesTree,
  structureDefinition: IStructureDefinition,
  sliceName: string,
  index: number
): IStructureDefinition | undefined => {
  const newElements: IElementDefinition[] = [];
  if (node.newPath && structureDefinition.snapshot) {
    const splitedPath = node.newPath.split('.');
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
        if (startingPath === node.newPath) {
          element.base &&
            newElements.push({
              id:
                startingPath +
                `:${sliceName}` +
                (endingPath ? '.' + endingPath : ''),
              path: element.id,
              sliceName: endingPath ? sliceName : undefined,
              base: {
                min: element?.base.min as number,
                max: element?.base.max as string,
                path: element?.base.path
              },
              min: element?.base.min as number,
              max: element?.base.max as string,
              definition: element.definition,
              type: element.type,
              binding: element.binding
                ? (node.binding as IElementDefinitionBinding)
                : undefined
            });
        }
      }
    );
  }
  const structureDefToEdit = cloneDeep(structureDefinition);
  if (newElements.length === 0) {
    newElements.push({
      id: node.newPath + `:${sliceName}`,
      path: node.newPath,
      sliceName: sliceName,
      base: {
        min: node.min as number,
        max: node.max as string
      },
      min: node.min as number,
      max: node.max as string,
      definition: node.definition,
      type: typeof node.type === 'string' ? [{ code: node.type }] : node.type
    });
  }
  newElements.forEach((element) => {
    //structureDefToEdit?.snapshot?.element.push(element);
    structureDefToEdit?.snapshot?.element.splice(index, 0, element);
    index++;
  });
  if (structureDefToEdit && structureDefToEdit.snapshot) {
    return structureDefToEdit;
  }
};

export const structureDefDeleteSlice = (
  node: RenderAttributesTree,
  newStructureDef: IStructureDefinition
): IStructureDefinition | undefined => {
  const newElement = cloneDeep(newStructureDef);
  const indexToDelete: number[] = [];
  if (newElement && newElement.snapshot) {
    newElement.snapshot.element.forEach((element) => {
      if (element.id && element.id?.split(':').length > 1) {
        let splitName = '';
        element.id?.split('.').forEach((split) => {
          splitName = splitName + split;
          if (splitName === node.newPath?.split('.').join('')) {
            newElement &&
              newElement.snapshot &&
              indexToDelete.push(newElement.snapshot.element.indexOf(element));
          }
        });
      }
    });
    newElement.snapshot.element.splice(indexToDelete[0], indexToDelete.length);
    return newElement;
  }
};
