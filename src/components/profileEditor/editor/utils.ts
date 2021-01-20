import {
  IElementDefinition,
  IElementDefinition_Type as IElementDefinitionType,
  IStructureDefinition
} from '@ahryman40k/ts-fhir-types/lib/R4';
import { updateStructureDefProfile } from 'state/reducers/resource';
import { setSnackbarOpen } from 'state/reducers/snackbarReducer';
import { AppDispatch } from 'state/store';
import { RenderAttributesTree } from 'types';

/**
 * Create a JSON tree from a structure definition
 * @param attributes
 * A tree of type RenderAttributesTree that will help to create a JSON tree as in FHIR resources
 * @param base
 * Original structure definition of the resource we choosed to profile
 */
export const createJSONTree = (
  attributes: RenderAttributesTree[],
  base: any
): any => {
  const JSONTree: any = {};
  attributes.forEach((attribute: RenderAttributesTree) => {
    if (attribute.children.length === 0) {
      JSONTree[attribute.name] = undefined;
    } else if (
      attribute.name !== 'snapshot' &&
      attribute.name !== 'differential'
    ) {
      if (attribute.max === '1') {
        JSONTree[attribute.name] = createJSONTree(attribute.children, base);
      } else {
        JSONTree[attribute.name] = [];
        base[attribute.name] &&
          base[attribute.name].forEach(() =>
            JSONTree[attribute.name].push(
              createJSONTree(attribute.children, base)
            )
          );
      }
    }
  });
  return JSONTree;
};

export const isPrimitive = (
  type: string | IElementDefinitionType[],
  primitiveTypes: string[]
): boolean =>
  primitiveTypes.some((primitive: string) => type === primitive) ||
  type === 'http://hl7.org/fhirpath/System.String' ||
  type === 'Extension' ||
  type === 'Reference';

export const updateStructureDefinition = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  structureDefinitionType: 'resource' | 'extension' | 'element',
  structureDefinition: IStructureDefinition,
  elementDefJSON: IElementDefinition | undefined,
  structureDefJSON: IStructureDefinition | undefined,
  dispatch: AppDispatch
) => {
  e.preventDefault();
  if (structureDefinitionType === 'element' && structureDefinition) {
    dispatch(
      setSnackbarOpen({
        severity: 'success',
        message: 'Attribute edited !'
      })
    );
    dispatch(
      updateStructureDefProfile({
        structureDefinition,
        elementDefinition: elementDefJSON
      })
    );
  } else if (structureDefinitionType === 'resource' && structureDefJSON) {
    dispatch(
      setSnackbarOpen({
        severity: 'success',
        message: 'Structure Definition edited !'
      })
    );
    dispatch(
      updateStructureDefProfile({ structureDefinition: structureDefJSON })
    );
  }
};
