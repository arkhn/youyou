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
      "/CodeSystem?_elements=name,concept&_count=508"
    );
    const resourceStructureDefinition: AxiosResponse<any> = await api.get(
      `/StructureDefinition?kind=resource&derivation=specialization&id=StructureDefinition`
    );
    if (
      primitiveTypesRequest.status === 200 &&
      complexTypesRequest.status === 200 &&
      valueSetRequest.status === 200 &&
      resourceStructureDefinition.status === 200
    ) {
      let complexTypeTree: RenderAttributesTree = {
        id: "",
        name: "",
        type: "",
        children: [],
        min: null,
        max: "",
        short: ""
      };
      let structureDefTree: RenderAttributesTree = {
        id: "",
        name: "",
        type: "",
        children: [],
        min: null,
        max: "",
        short: ""
      };

      // transform fetched attributes to simplified attributes with new paths
      const newComplexTypes = transformAttributes(
        complexTypesRequest,
        valueSetRequest
      );
      const newStructureDefinition = transformAttributes(
        resourceStructureDefinition,
        valueSetRequest
      );

      // create tree of transformed Attributes (newComplexType and newStructureDefinition)
      if (newComplexTypes && newStructureDefinition) {
        newComplexTypes.forEach(
          (type) =>
            type &&
            renderTreeAttributes(type, type, complexTypeTree, complexTypeTree)
        );
        newStructureDefinition.forEach(
          (type) =>
            type &&
            renderTreeAttributes(type, type, structureDefTree, structureDefTree)
        );
      }

      dispatch(
        getFhirTypesFetchSuccess(
          primitiveTypesRequest.data.entry.map((result: FetchedData) => {
            return result.resource;
          }),
          complexTypeTree.children,
          structureDefTree.children[0].children
        )
      );
    } else {
      dispatch(
        getFhirTypesFetchFailure(new Error(primitiveTypesRequest.statusText))
      );
    }
  };
};
