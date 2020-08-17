// package: google.fhir.proto
// file: proto/annotations.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

  export const fhirValuesetUrl: jspb.ExtensionFieldInfo<string>;

  export const fhirReferenceType: jspb.ExtensionFieldInfo<string>;

  export const structureDefinitionKind: jspb.ExtensionFieldInfo<StructureDefinitionKindValueMap>;

  export const valueRegex: jspb.ExtensionFieldInfo<string>;

  export const fhirStructureDefinitionUrl: jspb.ExtensionFieldInfo<string>;

  export const analyticProtoFor: jspb.ExtensionFieldInfo<string>;

  export const fhirProfileBase: jspb.ExtensionFieldInfo<string>;

  export const isAbstractType: jspb.ExtensionFieldInfo<boolean>;

  export const isChoiceType: jspb.ExtensionFieldInfo<boolean>;

  export const fhirFixedSystem: jspb.ExtensionFieldInfo<string>;

  export const fhirPathMessageConstraint: jspb.ExtensionFieldInfo<string>;

  export const fhirExtensionUrl: jspb.ExtensionFieldInfo<string>;

  export const fhirCodeSystemUrl: jspb.ExtensionFieldInfo<string>;

  export const enumValuesetUrl: jspb.ExtensionFieldInfo<string>;

  export const fhirOriginalCode: jspb.ExtensionFieldInfo<string>;

  export const sourceCodeSystem: jspb.ExtensionFieldInfo<string>;

  export const validationRequirement: jspb.ExtensionFieldInfo<RequirementMap>;

  export const fhirSliceBy: jspb.ExtensionFieldInfo<string>;

  export const fhirSliceOf: jspb.ExtensionFieldInfo<string>;

  export const fhirSliceValue: jspb.ExtensionFieldInfo<string>;

  export const fhirInlinedExtensionUrl: jspb.ExtensionFieldInfo<string>;

  export const fhirInlinedCodingSystem: jspb.ExtensionFieldInfo<string>;

  export const fhirInlinedCodingCode: jspb.ExtensionFieldInfo<string>;

  export const fhirPathConstraint: jspb.ExtensionFieldInfo<string>;

  export const validReferenceType: jspb.ExtensionFieldInfo<string>;

  export const referencedFhirType: jspb.ExtensionFieldInfo<string>;

  export const fhirOneofIsOptional: jspb.ExtensionFieldInfo<boolean>;

  export const fhirVersion: jspb.ExtensionFieldInfo<FhirVersionMap>;

export interface FhirVersionMap {
  FHIR_VERSION_UNKNOWN: 0;
  DSTU2: 1;
  STU3: 2;
  R4: 4;
  R5: 5;
}

export const FhirVersion: FhirVersionMap;

export interface StructureDefinitionKindValueMap {
  KIND_UNKNOWN: 0;
  KIND_PRIMITIVE_TYPE: 1;
  KIND_COMPLEX_TYPE: 2;
  KIND_RESOURCE: 3;
  KIND_LOGICAL: 4;
}

export const StructureDefinitionKindValue: StructureDefinitionKindValueMap;

export interface RequirementMap {
  NOT_REQUIRED: 0;
  REQUIRED_BY_FHIR: 1;
}

export const Requirement: RequirementMap;

