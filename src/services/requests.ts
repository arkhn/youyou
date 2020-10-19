import { AxiosResponse } from "axios";

import {
  ICodeSystem,
  IStructureDefinition
} from "@ahryman40k/ts-fhir-types/lib/R4";

import api from "./api";

// FETCH STRUCTURE DEF
export const getStructureDef = async (
  resourceName: string
): Promise<IStructureDefinition> => {
  const response: AxiosResponse<any> = await api.get(
    `/StructureDefinition?derivation=specialization&name=${resourceName}`
  );
  return response.data.entry[0].resource;
};

// FETCH CODE SYSTEM
export const requestCodeSystem = async (
  codeSystemId: string
): Promise<ICodeSystem | undefined> => {
  const response: AxiosResponse<any> = await api.get(
    `/CodeSystem?name=${codeSystemId}&_elements=concept`
  );
  if (response.status === 200) {
    return response.data.entry[0].resource;
  }
};
