import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import {
  FetchedData,
  FetchedDataCodeSystem,
  fhirDataState,
  IComplexTypes,
  RenderNode
} from "types";
import { AxiosResponse } from "axios";

import api from "services/api";
import {
  getFetchStart,
  getIdsSuccess,
  getIdsFailure,
  updateStructureDefProfile,
  updateStructureDefFailure
} from "state/actions/resourceActions";
import {
  getCodeSystemDataTypeSuccess,
  getCodeSystemDataTypeFailure,
  getCodeSystemDataTypePending
} from "state/actions/codeSystemActions";
import { RootState } from "state/store";

import {
  IStructureDefinition,
  IElementDefinition,
  IElementDefinition_Type
} from "@ahryman40k/ts-fhir-types/lib/R4";
import {
  getFhirTypesFetchFailure,
  getFhirTypesFetchStart,
  getFhirTypesFetchSuccess
} from "./actions/fhirDataTypesActions";

// FETCH ALL RESOURCE IDS
export const requestIds = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFetchStart());
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&_elements=id&_count=150`
    );
    if (response.status === 200) {
      dispatch(
        getIdsSuccess(
          response.data.entry.map((result: FetchedData) => {
            return result.resource;
          })
        )
      );
    } else {
      dispatch(getIdsFailure(new Error(response.statusText)));
    }
  };
};

// FETCH RESOURCE SELECTED
export const requestResource = (resource: string) => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFetchStart());
    const response: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&id=${resource}`
    );
    if (response.status === 200) {
      dispatch(updateStructureDefProfile(response.data.entry[0].resource));
    } else {
      dispatch(updateStructureDefFailure(new Error(response.statusText)));
    }
  };
};

// FETCH AVAILABLE DATA TYPES FOR EXTENSIONS
export const requestExtensionDataTypes = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getCodeSystemDataTypePending());
    const response: AxiosResponse<any> = await api.get(
      "/StructureDefinition?derivation=specialization&name=extension"
    );
    const resource: IStructureDefinition = response.data.entry[0].resource;
    let codes: string[] = [];
    resource.differential?.element.forEach((element: IElementDefinition) => {
      //FIXME
      if (element.id === "Extension.value[x]") {
        codes =
          element?.type
            ?.map((e: IElementDefinition_Type) => e.code!)
            .filter(Boolean) || [];
      }
      codes = codes?.filter(Boolean) || [];
    });
    if (response.status === 200) {
      dispatch(getCodeSystemDataTypeSuccess(codes));
    } else {
      dispatch(getCodeSystemDataTypeFailure(new Error(response.statusText)));
    }
  };
};

const renderAttributes = (
  complexType: IComplexTypes,
  rootPath: IComplexTypes,
  node: RenderNode,
  rootNode: RenderNode
): RenderNode => {
  if (node.id === rootPath.path) {
    return rootNode;
  } else {
    const splitPath = complexType.path.split(".");
    const childNode = node.children.find((c) => c.name === splitPath[0]);
    const newPath = splitPath.slice(1, splitPath.length).join(".");
    const newComplexType = {
      path: newPath,
      type: complexType.type
    };
    if (childNode) {
      return renderAttributes(newComplexType, rootPath, childNode, rootNode);
    } else {
      const newNode = rootPath.valueSet
        ? {
            name: splitPath[0],
            id: rootPath.path,
            type: rootPath.type,
            children: [],
            valueSet: rootPath.valueSet
          }
        : {
            name: splitPath[0],
            id: rootPath.path,
            type: rootPath.type,
            children: []
          };
      node.children.push(newNode);
      return renderAttributes(newComplexType, rootPath, newNode, rootNode);
    }
  }
};

export const requestFhirDataTypes = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFhirTypesFetchStart());
    const primitiveTypesRequest: AxiosResponse<any> = await api.get(
      "/StructureDefinition?derivation=specialization&kind=primitive-type&_elements=name"
    );
    const complexTypesRequest: AxiosResponse<any> = await api.get(
      "/StructureDefinition?derivation=specialization&kind=complex-type&_elements=name&_elements=snapshot"
    );
    const valueSetRequest: AxiosResponse<any> = await api.get(
      "https://demo.arkhn.com/api/CodeSystem?_elements=name,concept&_count=508"
    );
    if (
      primitiveTypesRequest.status === 200 &&
      complexTypesRequest.status === 200 &&
      valueSetRequest.status === 200
    ) {
      let complexTypeTree = { id: "", name: "", type: "", children: [] };
      const complexTypes: IComplexTypes[] = [];
      complexTypesRequest.data.entry.forEach((result: fhirDataState) => {
        result.resource.snapshot.element.forEach(
          (element: IElementDefinition) => {
            if (!element.type) {
              element.path &&
                element.short &&
                complexTypes.push({
                  path: element.path,
                  type: element.path
                });
            } else {
              element.type.forEach((type: IElementDefinition_Type) => {
                if (element.path && type.code && element.short) {
                  if (type.code === "code") {
                    element.binding?.extension?.forEach((extension) => {
                      if (extension.valueString) {
                        const findValueSet = valueSetRequest.data.entry.find(
                          (
                            value: FetchedDataCodeSystem
                          ): FetchedDataCodeSystem | undefined => {
                            if (value.resource.name === extension.valueString) {
                              return value;
                            }
                            return undefined;
                          }
                        );
                        if (findValueSet) {
                          element.path &&
                            type.code &&
                            element.short &&
                            complexTypes.push({
                              path: element.path,
                              type: type.code,
                              valueSet: findValueSet.resource.concept
                            });
                        }
                      } else {
                        element.path &&
                          type.code &&
                          element.short &&
                          complexTypes.push({
                            path: element.path,
                            type: type.code
                          });
                      }
                    });
                  } else {
                    complexTypes.push({
                      path: element.path,
                      type: type.code
                    });
                  }
                }
              });
            }
          }
        );
      });
      if (complexTypes) {
        complexTypes.forEach(
          (type) =>
            type &&
            renderAttributes(type, type, complexTypeTree, complexTypeTree)
        );
      }

      dispatch(
        getFhirTypesFetchSuccess(
          primitiveTypesRequest.data.entry.map((result: FetchedData) => {
            return result.resource;
          }),
          complexTypeTree.children
        )
      );
    } else {
      dispatch(
        getFhirTypesFetchFailure(new Error(primitiveTypesRequest.statusText))
      );
    }
  };
};
