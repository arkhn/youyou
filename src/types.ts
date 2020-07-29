import { IStructureDefinition } from "@ahryman40k/ts-fhir-types/lib/R4";

export type FetchedData = {
  resource: IStructureDefinition,
  search: any
}