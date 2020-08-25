// package: google.fhir.r4.core
// file: proto/r4/core/valuesets.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../proto/annotations_pb";

export class BodyLengthUnitsValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyLengthUnitsValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: BodyLengthUnitsValueSet): BodyLengthUnitsValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyLengthUnitsValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyLengthUnitsValueSet;
  static deserializeBinaryFromReader(message: BodyLengthUnitsValueSet, reader: jspb.BinaryReader): BodyLengthUnitsValueSet;
}

export namespace BodyLengthUnitsValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CM: 1;
    IN_I: 2;
  }

  export const Value: ValueMap;
}

export class BodyTemperatureUnitsValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyTemperatureUnitsValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: BodyTemperatureUnitsValueSet): BodyTemperatureUnitsValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyTemperatureUnitsValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyTemperatureUnitsValueSet;
  static deserializeBinaryFromReader(message: BodyTemperatureUnitsValueSet, reader: jspb.BinaryReader): BodyTemperatureUnitsValueSet;
}

export namespace BodyTemperatureUnitsValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CEL: 1;
    DEG_F: 2;
  }

  export const Value: ValueMap;
}

export class BodyWeightUnitsValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyWeightUnitsValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: BodyWeightUnitsValueSet): BodyWeightUnitsValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyWeightUnitsValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyWeightUnitsValueSet;
  static deserializeBinaryFromReader(message: BodyWeightUnitsValueSet, reader: jspb.BinaryReader): BodyWeightUnitsValueSet;
}

export namespace BodyWeightUnitsValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    KG: 1;
    LB_AV: 2;
    G: 3;
  }

  export const Value: ValueMap;
}

export class CarePlanActivityKindValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityKindValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityKindValueSet): CarePlanActivityKindValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityKindValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityKindValueSet;
  static deserializeBinaryFromReader(message: CarePlanActivityKindValueSet, reader: jspb.BinaryReader): CarePlanActivityKindValueSet;
}

export namespace CarePlanActivityKindValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    APPOINTMENT: 1;
    COMMUNICATION_REQUEST: 2;
    DEVICE_REQUEST: 3;
    MEDICATION_REQUEST: 4;
    NUTRITION_ORDER: 5;
    TASK: 6;
    SERVICE_REQUEST: 7;
    VISION_PRESCRIPTION: 8;
  }

  export const Value: ValueMap;
}

export class CarePlanIntentValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanIntentValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanIntentValueSet): CarePlanIntentValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanIntentValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanIntentValueSet;
  static deserializeBinaryFromReader(message: CarePlanIntentValueSet, reader: jspb.BinaryReader): CarePlanIntentValueSet;
}

export namespace CarePlanIntentValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    ORDER: 3;
    OPTION: 4;
  }

  export const Value: ValueMap;
}

export class ClinicalImpressionStatusValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClinicalImpressionStatusValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ClinicalImpressionStatusValueSet): ClinicalImpressionStatusValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClinicalImpressionStatusValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClinicalImpressionStatusValueSet;
  static deserializeBinaryFromReader(message: ClinicalImpressionStatusValueSet, reader: jspb.BinaryReader): ClinicalImpressionStatusValueSet;
}

export namespace ClinicalImpressionStatusValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class EntityNamePartQualifierValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityNamePartQualifierValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: EntityNamePartQualifierValueSet): EntityNamePartQualifierValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityNamePartQualifierValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityNamePartQualifierValueSet;
  static deserializeBinaryFromReader(message: EntityNamePartQualifierValueSet, reader: jspb.BinaryReader): EntityNamePartQualifierValueSet;
}

export namespace EntityNamePartQualifierValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LS: 1;
    AC: 2;
    NB: 3;
    PR: 4;
    HON: 5;
    BR: 6;
    AD: 7;
    SP: 8;
    MID: 9;
    CL: 10;
    IN: 11;
    VV: 12;
  }

  export const Value: ValueMap;
}

export class EventTimingValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTimingValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: EventTimingValueSet): EventTimingValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTimingValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTimingValueSet;
  static deserializeBinaryFromReader(message: EventTimingValueSet, reader: jspb.BinaryReader): EventTimingValueSet;
}

export namespace EventTimingValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MORN: 1;
    MORN_EARLY: 2;
    MORN_LATE: 3;
    NOON: 4;
    AFT: 5;
    AFT_EARLY: 6;
    AFT_LATE: 7;
    EVE: 8;
    EVE_EARLY: 9;
    EVE_LATE: 10;
    NIGHT: 11;
    PHS: 12;
    HS: 13;
    WAKE: 14;
    C: 15;
    CM: 16;
    CD: 17;
    CV: 18;
    AC: 19;
    ACM: 20;
    ACD: 21;
    ACV: 22;
    PC: 23;
    PCM: 24;
    PCD: 25;
    PCV: 26;
  }

  export const Value: ValueMap;
}

export class FHIRAllTypesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRAllTypesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRAllTypesValueSet): FHIRAllTypesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRAllTypesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRAllTypesValueSet;
  static deserializeBinaryFromReader(message: FHIRAllTypesValueSet, reader: jspb.BinaryReader): FHIRAllTypesValueSet;
}

export namespace FHIRAllTypesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADDRESS: 1;
    AGE: 2;
    ANNOTATION: 3;
    ATTACHMENT: 4;
    BACKBONE_ELEMENT: 5;
    CODEABLE_CONCEPT: 6;
    CODING: 7;
    CONTACT_DETAIL: 8;
    CONTACT_POINT: 9;
    CONTRIBUTOR: 10;
    COUNT: 11;
    DATA_REQUIREMENT: 12;
    DISTANCE: 13;
    DOSAGE: 14;
    DURATION: 15;
    ELEMENT: 16;
    ELEMENT_DEFINITION: 17;
    EXPRESSION: 18;
    EXTENSION: 19;
    HUMAN_NAME: 20;
    IDENTIFIER: 21;
    MARKETING_STATUS: 22;
    META: 23;
    MONEY: 24;
    MONEY_QUANTITY: 25;
    NARRATIVE: 26;
    PARAMETER_DEFINITION: 27;
    PERIOD: 28;
    POPULATION: 29;
    PROD_CHARACTERISTIC: 30;
    PRODUCT_SHELF_LIFE: 31;
    QUANTITY: 32;
    RANGE: 33;
    RATIO: 34;
    REFERENCE: 35;
    RELATED_ARTIFACT: 36;
    SAMPLED_DATA: 37;
    SIGNATURE: 38;
    SIMPLE_QUANTITY: 39;
    SUBSTANCE_AMOUNT: 40;
    TIMING: 41;
    TRIGGER_DEFINITION: 42;
    USAGE_CONTEXT: 43;
    BASE64_BINARY: 44;
    BOOLEAN: 45;
    CANONICAL: 46;
    CODE: 47;
    DATE: 48;
    DATE_TIME: 49;
    DECIMAL: 50;
    ID: 51;
    INSTANT: 52;
    INTEGER: 53;
    MARKDOWN: 54;
    OID: 55;
    POSITIVE_INT: 56;
    STRING: 57;
    TIME: 58;
    UNSIGNED_INT: 59;
    URI: 60;
    URL: 61;
    UUID: 62;
    XHTML: 63;
    ACCOUNT: 64;
    ACTIVITY_DEFINITION: 65;
    ADVERSE_EVENT: 66;
    ALLERGY_INTOLERANCE: 67;
    APPOINTMENT: 68;
    APPOINTMENT_RESPONSE: 69;
    AUDIT_EVENT: 70;
    BASIC: 71;
    BINARY: 72;
    BIOLOGICALLY_DERIVED_PRODUCT: 73;
    BODY_STRUCTURE: 74;
    BUNDLE: 75;
    CAPABILITY_STATEMENT: 76;
    CARE_PLAN: 77;
    CARE_TEAM: 78;
    CATALOG_ENTRY: 79;
    CHARGE_ITEM: 80;
    CHARGE_ITEM_DEFINITION: 81;
    CLAIM: 82;
    CLAIM_RESPONSE: 83;
    CLINICAL_IMPRESSION: 84;
    CODE_SYSTEM: 85;
    COMMUNICATION: 86;
    COMMUNICATION_REQUEST: 87;
    COMPARTMENT_DEFINITION: 88;
    COMPOSITION: 89;
    CONCEPT_MAP: 90;
    CONDITION: 91;
    CONSENT: 92;
    CONTRACT: 93;
    COVERAGE: 94;
    COVERAGE_ELIGIBILITY_REQUEST: 95;
    COVERAGE_ELIGIBILITY_RESPONSE: 96;
    DETECTED_ISSUE: 97;
    DEVICE: 98;
    DEVICE_DEFINITION: 99;
    DEVICE_METRIC: 100;
    DEVICE_REQUEST: 101;
    DEVICE_USE_STATEMENT: 102;
    DIAGNOSTIC_REPORT: 103;
    DOCUMENT_MANIFEST: 104;
    DOCUMENT_REFERENCE: 105;
    DOMAIN_RESOURCE: 106;
    EFFECT_EVIDENCE_SYNTHESIS: 107;
    ENCOUNTER: 108;
    ENDPOINT: 109;
    ENROLLMENT_REQUEST: 110;
    ENROLLMENT_RESPONSE: 111;
    EPISODE_OF_CARE: 112;
    EVENT_DEFINITION: 113;
    EVIDENCE: 114;
    EVIDENCE_VARIABLE: 115;
    EXAMPLE_SCENARIO: 116;
    EXPLANATION_OF_BENEFIT: 117;
    FAMILY_MEMBER_HISTORY: 118;
    FLAG: 119;
    GOAL: 120;
    GRAPH_DEFINITION: 121;
    GROUP: 122;
    GUIDANCE_RESPONSE: 123;
    HEALTHCARE_SERVICE: 124;
    IMAGING_STUDY: 125;
    IMMUNIZATION: 126;
    IMMUNIZATION_EVALUATION: 127;
    IMMUNIZATION_RECOMMENDATION: 128;
    IMPLEMENTATION_GUIDE: 129;
    INSURANCE_PLAN: 130;
    INVOICE: 131;
    LIBRARY: 132;
    LINKAGE: 133;
    LIST: 134;
    LOCATION: 135;
    MEASURE: 136;
    MEASURE_REPORT: 137;
    MEDIA: 138;
    MEDICATION: 139;
    MEDICATION_ADMINISTRATION: 140;
    MEDICATION_DISPENSE: 141;
    MEDICATION_KNOWLEDGE: 142;
    MEDICATION_REQUEST: 143;
    MEDICATION_STATEMENT: 144;
    MEDICINAL_PRODUCT: 145;
    MEDICINAL_PRODUCT_AUTHORIZATION: 146;
    MEDICINAL_PRODUCT_CONTRAINDICATION: 147;
    MEDICINAL_PRODUCT_INDICATION: 148;
    MEDICINAL_PRODUCT_INGREDIENT: 149;
    MEDICINAL_PRODUCT_INTERACTION: 150;
    MEDICINAL_PRODUCT_MANUFACTURED: 151;
    MEDICINAL_PRODUCT_PACKAGED: 152;
    MEDICINAL_PRODUCT_PHARMACEUTICAL: 153;
    MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT: 154;
    MESSAGE_DEFINITION: 155;
    MESSAGE_HEADER: 156;
    MOLECULAR_SEQUENCE: 157;
    NAMING_SYSTEM: 158;
    NUTRITION_ORDER: 159;
    OBSERVATION: 160;
    OBSERVATION_DEFINITION: 161;
    OPERATION_DEFINITION: 162;
    OPERATION_OUTCOME: 163;
    ORGANIZATION: 164;
    ORGANIZATION_AFFILIATION: 165;
    PARAMETERS: 166;
    PATIENT: 167;
    PAYMENT_NOTICE: 168;
    PAYMENT_RECONCILIATION: 169;
    PERSON: 170;
    PLAN_DEFINITION: 171;
    PRACTITIONER: 172;
    PRACTITIONER_ROLE: 173;
    PROCEDURE: 174;
    PROVENANCE: 175;
    QUESTIONNAIRE: 176;
    QUESTIONNAIRE_RESPONSE: 177;
    RELATED_PERSON: 178;
    REQUEST_GROUP: 179;
    RESEARCH_DEFINITION: 180;
    RESEARCH_ELEMENT_DEFINITION: 181;
    RESEARCH_STUDY: 182;
    RESEARCH_SUBJECT: 183;
    RESOURCE: 184;
    RISK_ASSESSMENT: 185;
    RISK_EVIDENCE_SYNTHESIS: 186;
    SCHEDULE: 187;
    SEARCH_PARAMETER: 188;
    SERVICE_REQUEST: 189;
    SLOT: 190;
    SPECIMEN: 191;
    SPECIMEN_DEFINITION: 192;
    STRUCTURE_DEFINITION: 193;
    STRUCTURE_MAP: 194;
    SUBSCRIPTION: 195;
    SUBSTANCE: 196;
    SUBSTANCE_NUCLEIC_ACID: 197;
    SUBSTANCE_POLYMER: 198;
    SUBSTANCE_PROTEIN: 199;
    SUBSTANCE_REFERENCE_INFORMATION: 200;
    SUBSTANCE_SOURCE_MATERIAL: 201;
    SUBSTANCE_SPECIFICATION: 202;
    SUPPLY_DELIVERY: 203;
    SUPPLY_REQUEST: 204;
    TASK: 205;
    TERMINOLOGY_CAPABILITIES: 206;
    TEST_REPORT: 207;
    TEST_SCRIPT: 208;
    VALUE_SET: 209;
    VERIFICATION_RESULT: 210;
    VISION_PRESCRIPTION: 211;
    TYPE: 212;
    ANY: 213;
  }

  export const Value: ValueMap;
}

export class FHIRDefinedTypeValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRDefinedTypeValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRDefinedTypeValueSet): FHIRDefinedTypeValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRDefinedTypeValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRDefinedTypeValueSet;
  static deserializeBinaryFromReader(message: FHIRDefinedTypeValueSet, reader: jspb.BinaryReader): FHIRDefinedTypeValueSet;
}

export namespace FHIRDefinedTypeValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADDRESS: 1;
    AGE: 2;
    ANNOTATION: 3;
    ATTACHMENT: 4;
    BACKBONE_ELEMENT: 5;
    CODEABLE_CONCEPT: 6;
    CODING: 7;
    CONTACT_DETAIL: 8;
    CONTACT_POINT: 9;
    CONTRIBUTOR: 10;
    COUNT: 11;
    DATA_REQUIREMENT: 12;
    DISTANCE: 13;
    DOSAGE: 14;
    DURATION: 15;
    ELEMENT: 16;
    ELEMENT_DEFINITION: 17;
    EXPRESSION: 18;
    EXTENSION: 19;
    HUMAN_NAME: 20;
    IDENTIFIER: 21;
    MARKETING_STATUS: 22;
    META: 23;
    MONEY: 24;
    MONEY_QUANTITY: 25;
    NARRATIVE: 26;
    PARAMETER_DEFINITION: 27;
    PERIOD: 28;
    POPULATION: 29;
    PROD_CHARACTERISTIC: 30;
    PRODUCT_SHELF_LIFE: 31;
    QUANTITY: 32;
    RANGE: 33;
    RATIO: 34;
    REFERENCE: 35;
    RELATED_ARTIFACT: 36;
    SAMPLED_DATA: 37;
    SIGNATURE: 38;
    SIMPLE_QUANTITY: 39;
    SUBSTANCE_AMOUNT: 40;
    TIMING: 41;
    TRIGGER_DEFINITION: 42;
    USAGE_CONTEXT: 43;
    BASE64_BINARY: 44;
    BOOLEAN: 45;
    CANONICAL: 46;
    CODE: 47;
    DATE: 48;
    DATE_TIME: 49;
    DECIMAL: 50;
    ID: 51;
    INSTANT: 52;
    INTEGER: 53;
    MARKDOWN: 54;
    OID: 55;
    POSITIVE_INT: 56;
    STRING: 57;
    TIME: 58;
    UNSIGNED_INT: 59;
    URI: 60;
    URL: 61;
    UUID: 62;
    XHTML: 63;
    ACCOUNT: 64;
    ACTIVITY_DEFINITION: 65;
    ADVERSE_EVENT: 66;
    ALLERGY_INTOLERANCE: 67;
    APPOINTMENT: 68;
    APPOINTMENT_RESPONSE: 69;
    AUDIT_EVENT: 70;
    BASIC: 71;
    BINARY: 72;
    BIOLOGICALLY_DERIVED_PRODUCT: 73;
    BODY_STRUCTURE: 74;
    BUNDLE: 75;
    CAPABILITY_STATEMENT: 76;
    CARE_PLAN: 77;
    CARE_TEAM: 78;
    CATALOG_ENTRY: 79;
    CHARGE_ITEM: 80;
    CHARGE_ITEM_DEFINITION: 81;
    CLAIM: 82;
    CLAIM_RESPONSE: 83;
    CLINICAL_IMPRESSION: 84;
    CODE_SYSTEM: 85;
    COMMUNICATION: 86;
    COMMUNICATION_REQUEST: 87;
    COMPARTMENT_DEFINITION: 88;
    COMPOSITION: 89;
    CONCEPT_MAP: 90;
    CONDITION: 91;
    CONSENT: 92;
    CONTRACT: 93;
    COVERAGE: 94;
    COVERAGE_ELIGIBILITY_REQUEST: 95;
    COVERAGE_ELIGIBILITY_RESPONSE: 96;
    DETECTED_ISSUE: 97;
    DEVICE: 98;
    DEVICE_DEFINITION: 99;
    DEVICE_METRIC: 100;
    DEVICE_REQUEST: 101;
    DEVICE_USE_STATEMENT: 102;
    DIAGNOSTIC_REPORT: 103;
    DOCUMENT_MANIFEST: 104;
    DOCUMENT_REFERENCE: 105;
    DOMAIN_RESOURCE: 106;
    EFFECT_EVIDENCE_SYNTHESIS: 107;
    ENCOUNTER: 108;
    ENDPOINT: 109;
    ENROLLMENT_REQUEST: 110;
    ENROLLMENT_RESPONSE: 111;
    EPISODE_OF_CARE: 112;
    EVENT_DEFINITION: 113;
    EVIDENCE: 114;
    EVIDENCE_VARIABLE: 115;
    EXAMPLE_SCENARIO: 116;
    EXPLANATION_OF_BENEFIT: 117;
    FAMILY_MEMBER_HISTORY: 118;
    FLAG: 119;
    GOAL: 120;
    GRAPH_DEFINITION: 121;
    GROUP: 122;
    GUIDANCE_RESPONSE: 123;
    HEALTHCARE_SERVICE: 124;
    IMAGING_STUDY: 125;
    IMMUNIZATION: 126;
    IMMUNIZATION_EVALUATION: 127;
    IMMUNIZATION_RECOMMENDATION: 128;
    IMPLEMENTATION_GUIDE: 129;
    INSURANCE_PLAN: 130;
    INVOICE: 131;
    LIBRARY: 132;
    LINKAGE: 133;
    LIST: 134;
    LOCATION: 135;
    MEASURE: 136;
    MEASURE_REPORT: 137;
    MEDIA: 138;
    MEDICATION: 139;
    MEDICATION_ADMINISTRATION: 140;
    MEDICATION_DISPENSE: 141;
    MEDICATION_KNOWLEDGE: 142;
    MEDICATION_REQUEST: 143;
    MEDICATION_STATEMENT: 144;
    MEDICINAL_PRODUCT: 145;
    MEDICINAL_PRODUCT_AUTHORIZATION: 146;
    MEDICINAL_PRODUCT_CONTRAINDICATION: 147;
    MEDICINAL_PRODUCT_INDICATION: 148;
    MEDICINAL_PRODUCT_INGREDIENT: 149;
    MEDICINAL_PRODUCT_INTERACTION: 150;
    MEDICINAL_PRODUCT_MANUFACTURED: 151;
    MEDICINAL_PRODUCT_PACKAGED: 152;
    MEDICINAL_PRODUCT_PHARMACEUTICAL: 153;
    MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT: 154;
    MESSAGE_DEFINITION: 155;
    MESSAGE_HEADER: 156;
    MOLECULAR_SEQUENCE: 157;
    NAMING_SYSTEM: 158;
    NUTRITION_ORDER: 159;
    OBSERVATION: 160;
    OBSERVATION_DEFINITION: 161;
    OPERATION_DEFINITION: 162;
    OPERATION_OUTCOME: 163;
    ORGANIZATION: 164;
    ORGANIZATION_AFFILIATION: 165;
    PARAMETERS: 166;
    PATIENT: 167;
    PAYMENT_NOTICE: 168;
    PAYMENT_RECONCILIATION: 169;
    PERSON: 170;
    PLAN_DEFINITION: 171;
    PRACTITIONER: 172;
    PRACTITIONER_ROLE: 173;
    PROCEDURE: 174;
    PROVENANCE: 175;
    QUESTIONNAIRE: 176;
    QUESTIONNAIRE_RESPONSE: 177;
    RELATED_PERSON: 178;
    REQUEST_GROUP: 179;
    RESEARCH_DEFINITION: 180;
    RESEARCH_ELEMENT_DEFINITION: 181;
    RESEARCH_STUDY: 182;
    RESEARCH_SUBJECT: 183;
    RESOURCE: 184;
    RISK_ASSESSMENT: 185;
    RISK_EVIDENCE_SYNTHESIS: 186;
    SCHEDULE: 187;
    SEARCH_PARAMETER: 188;
    SERVICE_REQUEST: 189;
    SLOT: 190;
    SPECIMEN: 191;
    SPECIMEN_DEFINITION: 192;
    STRUCTURE_DEFINITION: 193;
    STRUCTURE_MAP: 194;
    SUBSCRIPTION: 195;
    SUBSTANCE: 196;
    SUBSTANCE_NUCLEIC_ACID: 197;
    SUBSTANCE_POLYMER: 198;
    SUBSTANCE_PROTEIN: 199;
    SUBSTANCE_REFERENCE_INFORMATION: 200;
    SUBSTANCE_SOURCE_MATERIAL: 201;
    SUBSTANCE_SPECIFICATION: 202;
    SUPPLY_DELIVERY: 203;
    SUPPLY_REQUEST: 204;
    TASK: 205;
    TERMINOLOGY_CAPABILITIES: 206;
    TEST_REPORT: 207;
    TEST_SCRIPT: 208;
    VALUE_SET: 209;
    VERIFICATION_RESULT: 210;
    VISION_PRESCRIPTION: 211;
  }

  export const Value: ValueMap;
}

export class HumanNameAssemblyOrderValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameAssemblyOrderValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameAssemblyOrderValueSet): HumanNameAssemblyOrderValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameAssemblyOrderValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameAssemblyOrderValueSet;
  static deserializeBinaryFromReader(message: HumanNameAssemblyOrderValueSet, reader: jspb.BinaryReader): HumanNameAssemblyOrderValueSet;
}

export namespace HumanNameAssemblyOrderValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NL1: 1;
    NL2: 2;
    NL3: 3;
    NL4: 4;
    F: 5;
    G: 6;
    UNK: 7;
  }

  export const Value: ValueMap;
}

export class ImmunizationEvaluationStatusCodesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationEvaluationStatusCodesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationEvaluationStatusCodesValueSet): ImmunizationEvaluationStatusCodesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationEvaluationStatusCodesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationEvaluationStatusCodesValueSet;
  static deserializeBinaryFromReader(message: ImmunizationEvaluationStatusCodesValueSet, reader: jspb.BinaryReader): ImmunizationEvaluationStatusCodesValueSet;
}

export namespace ImmunizationEvaluationStatusCodesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETED: 1;
    ENTERED_IN_ERROR: 2;
  }

  export const Value: ValueMap;
}

export class ImmunizationStatusCodesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationStatusCodesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationStatusCodesValueSet): ImmunizationStatusCodesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationStatusCodesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationStatusCodesValueSet;
  static deserializeBinaryFromReader(message: ImmunizationStatusCodesValueSet, reader: jspb.BinaryReader): ImmunizationStatusCodesValueSet;
}

export namespace ImmunizationStatusCodesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETED: 1;
    ENTERED_IN_ERROR: 2;
    NOT_DONE: 3;
  }

  export const Value: ValueMap;
}

export class LDLCodesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LDLCodesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: LDLCodesValueSet): LDLCodesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LDLCodesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LDLCodesValueSet;
  static deserializeBinaryFromReader(message: LDLCodesValueSet, reader: jspb.BinaryReader): LDLCodesValueSet;
}

export namespace LDLCodesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LDL_CHOLESTEROL_ASSAY: 1;
    CHOLESTEROL_IN_LDL_MASS_VOLUME_IN_SERUM_OR_PLASMA_BY_CALCULATION: 2;
  }

  export const Value: ValueMap;
}

export class NameRepresentationUseValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameRepresentationUseValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: NameRepresentationUseValueSet): NameRepresentationUseValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameRepresentationUseValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameRepresentationUseValueSet;
  static deserializeBinaryFromReader(message: NameRepresentationUseValueSet, reader: jspb.BinaryReader): NameRepresentationUseValueSet;
}

export namespace NameRepresentationUseValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ABC: 1;
    IDE: 2;
    SYL: 3;
  }

  export const Value: ValueMap;
}

export class ParentRelationshipCodesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParentRelationshipCodesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ParentRelationshipCodesValueSet): ParentRelationshipCodesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParentRelationshipCodesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParentRelationshipCodesValueSet;
  static deserializeBinaryFromReader(message: ParentRelationshipCodesValueSet, reader: jspb.BinaryReader): ParentRelationshipCodesValueSet;
}

export namespace ParentRelationshipCodesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRN: 1;
    ADOPTP: 2;
    ADOPTF: 3;
    ADOPTM: 4;
    FTH: 5;
    FTHFOST: 6;
    NFTH: 7;
    NFTHF: 8;
    STPFTH: 9;
    MTH: 10;
    GESTM: 11;
    MTHFOST: 12;
    NMTH: 13;
    NMTHF: 14;
    STPMTH: 15;
    NPRN: 16;
    PRNFOST: 17;
    STPPRN: 18;
    TWIN: 19;
    FTWIN: 20;
    ITWIN: 21;
  }

  export const Value: ValueMap;
}

export class PostalAddressUseValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostalAddressUseValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: PostalAddressUseValueSet): PostalAddressUseValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostalAddressUseValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostalAddressUseValueSet;
  static deserializeBinaryFromReader(message: PostalAddressUseValueSet, reader: jspb.BinaryReader): PostalAddressUseValueSet;
}

export namespace PostalAddressUseValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BAD: 1;
    CONF: 2;
    HP: 3;
    HV: 4;
    DIR: 5;
    PUB: 6;
    PHYS: 7;
    PST: 8;
  }

  export const Value: ValueMap;
}

export class ProbabilityDistributionTypeValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbabilityDistributionTypeValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ProbabilityDistributionTypeValueSet): ProbabilityDistributionTypeValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbabilityDistributionTypeValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbabilityDistributionTypeValueSet;
  static deserializeBinaryFromReader(message: ProbabilityDistributionTypeValueSet, reader: jspb.BinaryReader): ProbabilityDistributionTypeValueSet;
}

export namespace ProbabilityDistributionTypeValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    B: 1;
    E: 2;
    F: 3;
    G: 4;
    LN: 5;
    N: 6;
    T: 7;
    U: 8;
    X2: 9;
  }

  export const Value: ValueMap;
}

export class QuestionnaireResponseModeValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseModeValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseModeValueSet): QuestionnaireResponseModeValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseModeValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseModeValueSet;
  static deserializeBinaryFromReader(message: QuestionnaireResponseModeValueSet, reader: jspb.BinaryReader): QuestionnaireResponseModeValueSet;
}

export namespace QuestionnaireResponseModeValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ELECTRONIC: 1;
    VERBAL: 2;
    WRITTEN: 3;
  }

  export const Value: ValueMap;
}

export class SiblingRelationshipCodesValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SiblingRelationshipCodesValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: SiblingRelationshipCodesValueSet): SiblingRelationshipCodesValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SiblingRelationshipCodesValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SiblingRelationshipCodesValueSet;
  static deserializeBinaryFromReader(message: SiblingRelationshipCodesValueSet, reader: jspb.BinaryReader): SiblingRelationshipCodesValueSet;
}

export namespace SiblingRelationshipCodesValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SIB: 1;
    BRO: 2;
    HBRO: 3;
    NBRO: 4;
    TWINBRO: 5;
    FTWINBRO: 6;
    ITWINBRO: 7;
    STPBRO: 8;
    HSIB: 9;
    HSIS: 10;
    NSIB: 11;
    NSIS: 12;
    TWINSIS: 13;
    FTWINSIS: 14;
    ITWINSIS: 15;
    TWIN: 16;
    FTWIN: 17;
    ITWIN: 18;
    SIS: 19;
    STPSIS: 20;
    STPSIB: 21;
  }

  export const Value: ValueMap;
}

export class SystemRestfulInteractionValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemRestfulInteractionValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: SystemRestfulInteractionValueSet): SystemRestfulInteractionValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemRestfulInteractionValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemRestfulInteractionValueSet;
  static deserializeBinaryFromReader(message: SystemRestfulInteractionValueSet, reader: jspb.BinaryReader): SystemRestfulInteractionValueSet;
}

export namespace SystemRestfulInteractionValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TRANSACTION: 1;
    BATCH: 2;
    SEARCH_SYSTEM: 3;
    HISTORY_SYSTEM: 4;
  }

  export const Value: ValueMap;
}

export class TaskIntentValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskIntentValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: TaskIntentValueSet): TaskIntentValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskIntentValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskIntentValueSet;
  static deserializeBinaryFromReader(message: TaskIntentValueSet, reader: jspb.BinaryReader): TaskIntentValueSet;
}

export namespace TaskIntentValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNKNOWN: 1;
    PROPOSAL: 2;
    PLAN: 3;
    ORDER: 4;
    ORIGINAL_ORDER: 5;
    REFLEX_ORDER: 6;
    FILLER_ORDER: 7;
    INSTANCE_ORDER: 8;
    OPTION: 9;
  }

  export const Value: ValueMap;
}

export class TemplateStatusCodeValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateStatusCodeValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateStatusCodeValueSet): TemplateStatusCodeValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateStatusCodeValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateStatusCodeValueSet;
  static deserializeBinaryFromReader(message: TemplateStatusCodeValueSet, reader: jspb.BinaryReader): TemplateStatusCodeValueSet;
}

export namespace TemplateStatusCodeValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    PENDING: 2;
    ACTIVE: 3;
    REVIEW: 4;
    CANCELLED: 5;
    REJECTED: 6;
    RETIRED: 7;
    TERMINATED: 8;
  }

  export const Value: ValueMap;
}

export class TypeRestfulInteractionValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeRestfulInteractionValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: TypeRestfulInteractionValueSet): TypeRestfulInteractionValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeRestfulInteractionValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeRestfulInteractionValueSet;
  static deserializeBinaryFromReader(message: TypeRestfulInteractionValueSet, reader: jspb.BinaryReader): TypeRestfulInteractionValueSet;
}

export namespace TypeRestfulInteractionValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    READ: 1;
    VREAD: 2;
    UPDATE: 3;
    PATCH: 4;
    DELETE: 5;
    HISTORY_INSTANCE: 6;
    HISTORY_TYPE: 7;
    CREATE: 8;
    SEARCH_TYPE: 9;
  }

  export const Value: ValueMap;
}

export class UnitsOfTimeValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitsOfTimeValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: UnitsOfTimeValueSet): UnitsOfTimeValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnitsOfTimeValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitsOfTimeValueSet;
  static deserializeBinaryFromReader(message: UnitsOfTimeValueSet, reader: jspb.BinaryReader): UnitsOfTimeValueSet;
}

export namespace UnitsOfTimeValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    S: 1;
    MIN: 2;
    H: 3;
    D: 4;
    WK: 5;
    MO: 6;
    A: 7;
  }

  export const Value: ValueMap;
}

export class V3ConfidentialityClassificationValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3ConfidentialityClassificationValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: V3ConfidentialityClassificationValueSet): V3ConfidentialityClassificationValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3ConfidentialityClassificationValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3ConfidentialityClassificationValueSet;
  static deserializeBinaryFromReader(message: V3ConfidentialityClassificationValueSet, reader: jspb.BinaryReader): V3ConfidentialityClassificationValueSet;
}

export namespace V3ConfidentialityClassificationValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    U: 1;
    L: 2;
    M: 3;
    N: 4;
    R: 5;
    V: 6;
  }

  export const Value: ValueMap;
}

export class VitalSignsUnitsValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VitalSignsUnitsValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: VitalSignsUnitsValueSet): VitalSignsUnitsValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VitalSignsUnitsValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VitalSignsUnitsValueSet;
  static deserializeBinaryFromReader(message: VitalSignsUnitsValueSet, reader: jspb.BinaryReader): VitalSignsUnitsValueSet;
}

export namespace VitalSignsUnitsValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERCENT: 1;
    CM: 2;
    IN_I: 3;
    KG: 4;
    G: 5;
    LB_AV: 6;
    CEL: 7;
    DEG_F: 8;
    MM_HG: 9;
    PER_MIN: 10;
    KG_M2: 11;
    M2: 12;
  }

  export const Value: ValueMap;
}

