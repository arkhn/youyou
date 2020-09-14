import { AxiosResponse } from "axios";

import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

import api from "./api";

export const getStructureDef = async (resourceName: string) => {
  const response: AxiosResponse<any> = await api.get(
    `/StructureDefinition?derivation=specialization&name=${resourceName}`
  );
  return response.data.entry[0].resource;
};
