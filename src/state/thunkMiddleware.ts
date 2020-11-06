import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { FetchedData, RenderAttributesTree } from "types";

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
  getFhirTypesFetchFailure,
  getFhirTypesFetchStart,
  getFhirTypesFetchSuccess
} from "./actions/fhirDataTypesActions";
import { transformAttributes, renderTreeAttributes } from "./utils";

import {
  IStructureDefinition,
  IElementDefinition,
  IElementDefinition_Type
} from "@ahryman40k/ts-fhir-types/lib/R4";
import { AxiosResponse } from "axios";

// Fetch all resource ids
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

/**
 * Fetch selected resource
 * @param resource resource id for the structure we want to fetch
 */
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

// Fetch available data types for extensions
export const requestExtensionDataTypes = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getCodeSystemDataTypePending());
    const response: AxiosResponse<any> = await api.get(
      "/StructureDefinition?derivation=specialization&name=extension"
    );
    const resource: IStructureDefinition = response.data.entry[0].resource;
    let codes: string[] = [];
    resource.differential?.element.forEach((element: IElementDefinition) => {
      //fixme
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

// Fetch all primitive and complex types and dispatch two trees of implemented tree types
export const requestFhirDataTypes = () => {
  return async (dispatch: ThunkDispatch<RootState, void, Action>) => {
    dispatch(getFhirTypesFetchStart());
    const [
      primitiveTypes,
      complexTypes,
      valueSet,
      resourceSDef
    ] = await Promise.all([
      api.get(
        "/StructureDefinition?derivation=specialization&kind=primitive-type&_elements=name"
      ),
      api.get(
        "/StructureDefinition?derivation=specialization&kind=complex-type&_elements=name&_elements=snapshot"
      ),
      api.get("/CodeSystem?_elements=name,concept&_count=508"),
      api.get(
        "/StructureDefinition?kind=resource&derivation=specialization&id=StructureDefinition"
      )
    ]);
    if (
      primitiveTypes.status === 200 &&
      complexTypes.status === 200 &&
      valueSet.status === 200 &&
      resourceSDef.status === 200
    ) {
      const complexTypeTree: RenderAttributesTree = {
        id: "",
        name: "",
        type: "",
        children: [],
        min: null,
        max: "",
        definition: ""
      };
      const structureDefTree: RenderAttributesTree = {
        id: "",
        name: "",
        type: "",
        children: [],
        min: null,
        max: "",
        definition: ""
      };

      const newComplexTypes = transformAttributes(complexTypes, valueSet);
      const newSDef = transformAttributes(resourceSDef, valueSet);

      if (newComplexTypes && newSDef) {
        newComplexTypes.forEach(
          (type) => type && renderTreeAttributes(type, type, complexTypeTree)
        );

        newSDef.forEach(
          (type) => type && renderTreeAttributes(type, type, structureDefTree)
        );
      }

      dispatch(
        getFhirTypesFetchSuccess(
          primitiveTypes.data.entry.map(
            (result: { resource: { name: string }; search: any }) =>
              result.resource.name
          ),
          complexTypeTree.children,
          structureDefTree.children[0].children
        )
      );
    } else {
      dispatch(getFhirTypesFetchFailure(new Error(primitiveTypes.statusText)));
    }
  };
};
