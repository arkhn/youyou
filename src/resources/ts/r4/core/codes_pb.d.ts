// package: google.fhir.r4.core
// file: proto/r4/core/codes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../proto/annotations_pb";

export class AbstractTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbstractTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AbstractTypeCode): AbstractTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AbstractTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbstractTypeCode;
  static deserializeBinaryFromReader(message: AbstractTypeCode, reader: jspb.BinaryReader): AbstractTypeCode;
}

export namespace AbstractTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TYPE: 1;
    ANY: 2;
  }

  export const Value: ValueMap;
}

export class AccountStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AccountStatusCode): AccountStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountStatusCode;
  static deserializeBinaryFromReader(message: AccountStatusCode, reader: jspb.BinaryReader): AccountStatusCode;
}

export namespace AccountStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
    ON_HOLD: 4;
    UNKNOWN: 5;
  }

  export const Value: ValueMap;
}

export class ActionCardinalityBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCardinalityBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCardinalityBehaviorCode): ActionCardinalityBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionCardinalityBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCardinalityBehaviorCode;
  static deserializeBinaryFromReader(message: ActionCardinalityBehaviorCode, reader: jspb.BinaryReader): ActionCardinalityBehaviorCode;
}

export namespace ActionCardinalityBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SINGLE: 1;
    MULTIPLE: 2;
  }

  export const Value: ValueMap;
}

export class ActionConditionKindCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConditionKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConditionKindCode): ActionConditionKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionConditionKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConditionKindCode;
  static deserializeBinaryFromReader(message: ActionConditionKindCode, reader: jspb.BinaryReader): ActionConditionKindCode;
}

export namespace ActionConditionKindCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    APPLICABILITY: 1;
    START: 2;
    STOP: 3;
  }

  export const Value: ValueMap;
}

export class ActionGroupingBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionGroupingBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionGroupingBehaviorCode): ActionGroupingBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionGroupingBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionGroupingBehaviorCode;
  static deserializeBinaryFromReader(message: ActionGroupingBehaviorCode, reader: jspb.BinaryReader): ActionGroupingBehaviorCode;
}

export namespace ActionGroupingBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    VISUAL_GROUP: 1;
    LOGICAL_GROUP: 2;
    SENTENCE_GROUP: 3;
  }

  export const Value: ValueMap;
}

export class ActionParticipantTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionParticipantTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionParticipantTypeCode): ActionParticipantTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionParticipantTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionParticipantTypeCode;
  static deserializeBinaryFromReader(message: ActionParticipantTypeCode, reader: jspb.BinaryReader): ActionParticipantTypeCode;
}

export namespace ActionParticipantTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PATIENT: 1;
    PRACTITIONER: 2;
    RELATED_PERSON: 3;
    DEVICE: 4;
  }

  export const Value: ValueMap;
}

export class ActionPrecheckBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionPrecheckBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionPrecheckBehaviorCode): ActionPrecheckBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionPrecheckBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionPrecheckBehaviorCode;
  static deserializeBinaryFromReader(message: ActionPrecheckBehaviorCode, reader: jspb.BinaryReader): ActionPrecheckBehaviorCode;
}

export namespace ActionPrecheckBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    YES: 1;
    NO: 2;
  }

  export const Value: ValueMap;
}

export class ActionRelationshipTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionRelationshipTypeCode): ActionRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionRelationshipTypeCode;
  static deserializeBinaryFromReader(message: ActionRelationshipTypeCode, reader: jspb.BinaryReader): ActionRelationshipTypeCode;
}

export namespace ActionRelationshipTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BEFORE_START: 1;
    BEFORE: 2;
    BEFORE_END: 3;
    CONCURRENT_WITH_START: 4;
    CONCURRENT: 5;
    CONCURRENT_WITH_END: 6;
    AFTER_START: 7;
    AFTER: 8;
    AFTER_END: 9;
  }

  export const Value: ValueMap;
}

export class ActionRequiredBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionRequiredBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionRequiredBehaviorCode): ActionRequiredBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionRequiredBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionRequiredBehaviorCode;
  static deserializeBinaryFromReader(message: ActionRequiredBehaviorCode, reader: jspb.BinaryReader): ActionRequiredBehaviorCode;
}

export namespace ActionRequiredBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MUST: 1;
    COULD: 2;
    MUST_UNLESS_DOCUMENTED: 3;
  }

  export const Value: ValueMap;
}

export class ActionSelectionBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionSelectionBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionSelectionBehaviorCode): ActionSelectionBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionSelectionBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionSelectionBehaviorCode;
  static deserializeBinaryFromReader(message: ActionSelectionBehaviorCode, reader: jspb.BinaryReader): ActionSelectionBehaviorCode;
}

export namespace ActionSelectionBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ANY: 1;
    ALL: 2;
    ALL_OR_NONE: 3;
    EXACTLY_ONE: 4;
    AT_MOST_ONE: 5;
    ONE_OR_MORE: 6;
  }

  export const Value: ValueMap;
}

export class AddressTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressTypeCode): AddressTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressTypeCode;
  static deserializeBinaryFromReader(message: AddressTypeCode, reader: jspb.BinaryReader): AddressTypeCode;
}

export namespace AddressTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    POSTAL: 1;
    PHYSICAL: 2;
    BOTH: 3;
  }

  export const Value: ValueMap;
}

export class AddressUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressUseCode): AddressUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressUseCode;
  static deserializeBinaryFromReader(message: AddressUseCode, reader: jspb.BinaryReader): AddressUseCode;
}

export namespace AddressUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOME: 1;
    WORK: 2;
    TEMP: 3;
    OLD: 4;
    BILLING: 5;
  }

  export const Value: ValueMap;
}

export class AdministrativeGenderCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministrativeGenderCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdministrativeGenderCode): AdministrativeGenderCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministrativeGenderCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministrativeGenderCode;
  static deserializeBinaryFromReader(message: AdministrativeGenderCode, reader: jspb.BinaryReader): AdministrativeGenderCode;
}

export namespace AdministrativeGenderCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MALE: 1;
    FEMALE: 2;
    OTHER: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class AdverseEventActualityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventActualityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventActualityCode): AdverseEventActualityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventActualityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventActualityCode;
  static deserializeBinaryFromReader(message: AdverseEventActualityCode, reader: jspb.BinaryReader): AdverseEventActualityCode;
}

export namespace AdverseEventActualityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTUAL: 1;
    POTENTIAL: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventOutcomeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventOutcomeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventOutcomeCode): AdverseEventOutcomeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventOutcomeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventOutcomeCode;
  static deserializeBinaryFromReader(message: AdverseEventOutcomeCode, reader: jspb.BinaryReader): AdverseEventOutcomeCode;
}

export namespace AdverseEventOutcomeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESOLVED: 1;
    RECOVERING: 2;
    ONGOING: 3;
    RESOLVED_WITH_SEQUELAE: 4;
    FATAL: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class AdverseEventSeverityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventSeverityCode): AdverseEventSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventSeverityCode;
  static deserializeBinaryFromReader(message: AdverseEventSeverityCode, reader: jspb.BinaryReader): AdverseEventSeverityCode;
}

export namespace AdverseEventSeverityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MILD: 1;
    MODERATE: 2;
    SEVERE: 3;
  }

  export const Value: ValueMap;
}

export class AggregationModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationModeCode): AggregationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationModeCode;
  static deserializeBinaryFromReader(message: AggregationModeCode, reader: jspb.BinaryReader): AggregationModeCode;
}

export namespace AggregationModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONTAINED: 1;
    REFERENCED: 2;
    BUNDLED: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCategoryCode): AllergyIntoleranceCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCategoryCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCategoryCode, reader: jspb.BinaryReader): AllergyIntoleranceCategoryCode;
}

export namespace AllergyIntoleranceCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FOOD: 1;
    MEDICATION: 2;
    ENVIRONMENT: 3;
    BIOLOGIC: 4;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceClinicalStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceClinicalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceClinicalStatusCode): AllergyIntoleranceClinicalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceClinicalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceClinicalStatusCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceClinicalStatusCode, reader: jspb.BinaryReader): AllergyIntoleranceClinicalStatusCode;
}

export namespace AllergyIntoleranceClinicalStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    RESOLVED: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceCriticalityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCriticalityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCriticalityCode): AllergyIntoleranceCriticalityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCriticalityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCriticalityCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCriticalityCode, reader: jspb.BinaryReader): AllergyIntoleranceCriticalityCode;
}

export namespace AllergyIntoleranceCriticalityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LOW: 1;
    HIGH: 2;
    UNABLE_TO_ASSESS: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceSeverityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSeverityCode): AllergyIntoleranceSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSeverityCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSeverityCode, reader: jspb.BinaryReader): AllergyIntoleranceSeverityCode;
}

export namespace AllergyIntoleranceSeverityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MILD: 1;
    MODERATE: 2;
    SEVERE: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceSubstanceExposureRiskCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSubstanceExposureRiskCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSubstanceExposureRiskCode): AllergyIntoleranceSubstanceExposureRiskCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSubstanceExposureRiskCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSubstanceExposureRiskCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSubstanceExposureRiskCode, reader: jspb.BinaryReader): AllergyIntoleranceSubstanceExposureRiskCode;
}

export namespace AllergyIntoleranceSubstanceExposureRiskCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    KNOWN_REACTION_RISK: 1;
    NO_KNOWN_REACTION_RISK: 2;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceTypeCode): AllergyIntoleranceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceTypeCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceTypeCode, reader: jspb.BinaryReader): AllergyIntoleranceTypeCode;
}

export namespace AllergyIntoleranceTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALLERGY: 1;
    INTOLERANCE: 2;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceVerificationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceVerificationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceVerificationStatusCode): AllergyIntoleranceVerificationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceVerificationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceVerificationStatusCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceVerificationStatusCode, reader: jspb.BinaryReader): AllergyIntoleranceVerificationStatusCode;
}

export namespace AllergyIntoleranceVerificationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNCONFIRMED: 1;
    CONFIRMED: 2;
    REFUTED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class AppointmentStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppointmentStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AppointmentStatusCode): AppointmentStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppointmentStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppointmentStatusCode;
  static deserializeBinaryFromReader(message: AppointmentStatusCode, reader: jspb.BinaryReader): AppointmentStatusCode;
}

export namespace AppointmentStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    PENDING: 2;
    BOOKED: 3;
    ARRIVED: 4;
    FULFILLED: 5;
    CANCELLED: 6;
    NOSHOW: 7;
    ENTERED_IN_ERROR: 8;
    CHECKED_IN: 9;
    WAIT: 10;
  }

  export const Value: ValueMap;
}

export class AssertionDirectionTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionDirectionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionDirectionTypeCode): AssertionDirectionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionDirectionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionDirectionTypeCode;
  static deserializeBinaryFromReader(message: AssertionDirectionTypeCode, reader: jspb.BinaryReader): AssertionDirectionTypeCode;
}

export namespace AssertionDirectionTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESPONSE: 1;
    REQUEST: 2;
  }

  export const Value: ValueMap;
}

export class AssertionOperatorTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionOperatorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionOperatorTypeCode): AssertionOperatorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionOperatorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionOperatorTypeCode;
  static deserializeBinaryFromReader(message: AssertionOperatorTypeCode, reader: jspb.BinaryReader): AssertionOperatorTypeCode;
}

export namespace AssertionOperatorTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQUALS: 1;
    NOT_EQUALS: 2;
    IN: 3;
    NOT_IN: 4;
    GREATER_THAN: 5;
    LESS_THAN: 6;
    EMPTY: 7;
    NOT_EMPTY: 8;
    CONTAINS: 9;
    NOT_CONTAINS: 10;
    EVAL: 11;
  }

  export const Value: ValueMap;
}

export class AssertionResponseTypesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionResponseTypesCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionResponseTypesCode): AssertionResponseTypesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionResponseTypesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionResponseTypesCode;
  static deserializeBinaryFromReader(message: AssertionResponseTypesCode, reader: jspb.BinaryReader): AssertionResponseTypesCode;
}

export namespace AssertionResponseTypesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OKAY: 1;
    CREATED: 2;
    NO_CONTENT: 3;
    NOT_MODIFIED: 4;
    BAD: 5;
    FORBIDDEN: 6;
    NOT_FOUND: 7;
    METHOD_NOT_ALLOWED: 8;
    CONFLICT: 9;
    GONE: 10;
    PRECONDITION_FAILED: 11;
    UNPROCESSABLE: 12;
  }

  export const Value: ValueMap;
}

export class AuditEventActionCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventActionCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventActionCode): AuditEventActionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventActionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventActionCode;
  static deserializeBinaryFromReader(message: AuditEventActionCode, reader: jspb.BinaryReader): AuditEventActionCode;
}

export namespace AuditEventActionCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    C: 1;
    R: 2;
    U: 3;
    D: 4;
    E: 5;
  }

  export const Value: ValueMap;
}

export class AuditEventAgentNetworkTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAgentNetworkTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAgentNetworkTypeCode): AuditEventAgentNetworkTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAgentNetworkTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAgentNetworkTypeCode;
  static deserializeBinaryFromReader(message: AuditEventAgentNetworkTypeCode, reader: jspb.BinaryReader): AuditEventAgentNetworkTypeCode;
}

export namespace AuditEventAgentNetworkTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MACHINE_NAME: 1;
    IP_ADDRESS: 2;
    TELEPHONE_NUMBER: 3;
    EMAIL_ADDRESS: 4;
    URI: 5;
  }

  export const Value: ValueMap;
}

export class AuditEventOutcomeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventOutcomeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventOutcomeCode): AuditEventOutcomeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventOutcomeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventOutcomeCode;
  static deserializeBinaryFromReader(message: AuditEventOutcomeCode, reader: jspb.BinaryReader): AuditEventOutcomeCode;
}

export namespace AuditEventOutcomeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUCCESS: 1;
    MINOR_FAILURE: 2;
    SERIOUS_FAILURE: 3;
    MAJOR_FAILURE: 4;
  }

  export const Value: ValueMap;
}

export class BenefitCostApplicabilityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BenefitCostApplicabilityCode.AsObject;
  static toObject(includeInstance: boolean, msg: BenefitCostApplicabilityCode): BenefitCostApplicabilityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BenefitCostApplicabilityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BenefitCostApplicabilityCode;
  static deserializeBinaryFromReader(message: BenefitCostApplicabilityCode, reader: jspb.BinaryReader): BenefitCostApplicabilityCode;
}

export namespace BenefitCostApplicabilityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_NETWORK: 1;
    OUT_OF_NETWORK: 2;
    OTHER: 3;
  }

  export const Value: ValueMap;
}

export class BindingStrengthCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingStrengthCode.AsObject;
  static toObject(includeInstance: boolean, msg: BindingStrengthCode): BindingStrengthCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindingStrengthCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingStrengthCode;
  static deserializeBinaryFromReader(message: BindingStrengthCode, reader: jspb.BinaryReader): BindingStrengthCode;
}

export namespace BindingStrengthCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUIRED: 1;
    EXTENSIBLE: 2;
    PREFERRED: 3;
    EXAMPLE: 4;
  }

  export const Value: ValueMap;
}

export class BiologicallyDerivedProductCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiologicallyDerivedProductCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: BiologicallyDerivedProductCategoryCode): BiologicallyDerivedProductCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiologicallyDerivedProductCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiologicallyDerivedProductCategoryCode;
  static deserializeBinaryFromReader(message: BiologicallyDerivedProductCategoryCode, reader: jspb.BinaryReader): BiologicallyDerivedProductCategoryCode;
}

export namespace BiologicallyDerivedProductCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ORGAN: 1;
    TISSUE: 2;
    FLUID: 3;
    CELLS: 4;
    BIOLOGICAL_AGENT: 5;
  }

  export const Value: ValueMap;
}

export class BiologicallyDerivedProductStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiologicallyDerivedProductStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: BiologicallyDerivedProductStatusCode): BiologicallyDerivedProductStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiologicallyDerivedProductStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiologicallyDerivedProductStatusCode;
  static deserializeBinaryFromReader(message: BiologicallyDerivedProductStatusCode, reader: jspb.BinaryReader): BiologicallyDerivedProductStatusCode;
}

export namespace BiologicallyDerivedProductStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AVAILABLE: 1;
    UNAVAILABLE: 2;
  }

  export const Value: ValueMap;
}

export class BiologicallyDerivedProductStorageScaleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiologicallyDerivedProductStorageScaleCode.AsObject;
  static toObject(includeInstance: boolean, msg: BiologicallyDerivedProductStorageScaleCode): BiologicallyDerivedProductStorageScaleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiologicallyDerivedProductStorageScaleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiologicallyDerivedProductStorageScaleCode;
  static deserializeBinaryFromReader(message: BiologicallyDerivedProductStorageScaleCode, reader: jspb.BinaryReader): BiologicallyDerivedProductStorageScaleCode;
}

export namespace BiologicallyDerivedProductStorageScaleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FARENHEIT: 1;
    CELSIUS: 2;
    KELVIN: 3;
  }

  export const Value: ValueMap;
}

export class BundleTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: BundleTypeCode): BundleTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleTypeCode;
  static deserializeBinaryFromReader(message: BundleTypeCode, reader: jspb.BinaryReader): BundleTypeCode;
}

export namespace BundleTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DOCUMENT: 1;
    MESSAGE: 2;
    TRANSACTION: 3;
    TRANSACTION_RESPONSE: 4;
    BATCH: 5;
    BATCH_RESPONSE: 6;
    HISTORY: 7;
    SEARCHSET: 8;
    COLLECTION: 9;
  }

  export const Value: ValueMap;
}

export class CanonicalStatusCodesForFHIRResourcesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanonicalStatusCodesForFHIRResourcesCode.AsObject;
  static toObject(includeInstance: boolean, msg: CanonicalStatusCodesForFHIRResourcesCode): CanonicalStatusCodesForFHIRResourcesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanonicalStatusCodesForFHIRResourcesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanonicalStatusCodesForFHIRResourcesCode;
  static deserializeBinaryFromReader(message: CanonicalStatusCodesForFHIRResourcesCode, reader: jspb.BinaryReader): CanonicalStatusCodesForFHIRResourcesCode;
}

export namespace CanonicalStatusCodesForFHIRResourcesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ERROR: 1;
    PROPOSED: 2;
    PLANNED: 3;
    DRAFT: 4;
    REQUESTED: 5;
    RECEIVED: 6;
    DECLINED: 7;
    ACCEPTED: 8;
    ARRIVED: 9;
    ACTIVE: 10;
    SUSPENDED: 11;
    FAILED: 12;
    REPLACED: 13;
    COMPLETE: 14;
    INACTIVE: 15;
    ABANDONED: 16;
    UNKNOWN: 17;
    UNCONFIRMED: 18;
    CONFIRMED: 19;
    RESOLVED: 20;
    REFUTED: 21;
    DIFFERENTIAL: 22;
    PARTIAL: 23;
    BUSY_UNAVAILABLE: 24;
    FREE: 25;
    ON_TARGET: 26;
    AHEAD_OF_TARGET: 27;
    BEHIND_TARGET: 28;
    NOT_READY: 29;
    TRANSDUC_DISCON: 30;
    HW_DISCON: 31;
  }

  export const Value: ValueMap;
}

export class CapabilityStatementKindCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementKindCode): CapabilityStatementKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementKindCode;
  static deserializeBinaryFromReader(message: CapabilityStatementKindCode, reader: jspb.BinaryReader): CapabilityStatementKindCode;
}

export namespace CapabilityStatementKindCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    CAPABILITY: 2;
    REQUIREMENTS: 3;
  }

  export const Value: ValueMap;
}

export class CarePlanActivityStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityStatusCode): CarePlanActivityStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityStatusCode;
  static deserializeBinaryFromReader(message: CarePlanActivityStatusCode, reader: jspb.BinaryReader): CarePlanActivityStatusCode;
}

export namespace CarePlanActivityStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_STARTED: 1;
    SCHEDULED: 2;
    IN_PROGRESS: 3;
    ON_HOLD: 4;
    COMPLETED: 5;
    CANCELLED: 6;
    STOPPED: 7;
    UNKNOWN: 8;
    ENTERED_IN_ERROR: 9;
  }

  export const Value: ValueMap;
}

export class CareTeamStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CareTeamStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CareTeamStatusCode): CareTeamStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CareTeamStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CareTeamStatusCode;
  static deserializeBinaryFromReader(message: CareTeamStatusCode, reader: jspb.BinaryReader): CareTeamStatusCode;
}

export namespace CareTeamStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    INACTIVE: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class CatalogEntryRelationTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatalogEntryRelationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CatalogEntryRelationTypeCode): CatalogEntryRelationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatalogEntryRelationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatalogEntryRelationTypeCode;
  static deserializeBinaryFromReader(message: CatalogEntryRelationTypeCode, reader: jspb.BinaryReader): CatalogEntryRelationTypeCode;
}

export namespace CatalogEntryRelationTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TRIGGERS: 1;
    IS_REPLACED_BY: 2;
  }

  export const Value: ValueMap;
}

export class ChargeItemStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeItemStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeItemStatusCode): ChargeItemStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeItemStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeItemStatusCode;
  static deserializeBinaryFromReader(message: ChargeItemStatusCode, reader: jspb.BinaryReader): ChargeItemStatusCode;
}

export namespace ChargeItemStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    BILLABLE: 2;
    NOT_BILLABLE: 3;
    ABORTED: 4;
    BILLED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class ChoiceListOrientationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChoiceListOrientationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ChoiceListOrientationCode): ChoiceListOrientationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChoiceListOrientationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChoiceListOrientationCode;
  static deserializeBinaryFromReader(message: ChoiceListOrientationCode, reader: jspb.BinaryReader): ChoiceListOrientationCode;
}

export namespace ChoiceListOrientationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HORIZONTAL: 1;
    VERTICAL: 2;
  }

  export const Value: ValueMap;
}

export class ClaimProcessingCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimProcessingCode.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimProcessingCode): ClaimProcessingCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimProcessingCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimProcessingCode;
  static deserializeBinaryFromReader(message: ClaimProcessingCode, reader: jspb.BinaryReader): ClaimProcessingCode;
}

export namespace ClaimProcessingCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    QUEUED: 1;
    COMPLETE: 2;
    ERROR: 3;
    PARTIAL: 4;
  }

  export const Value: ValueMap;
}

export class CodeSearchSupportCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSearchSupportCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSearchSupportCode): CodeSearchSupportCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSearchSupportCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSearchSupportCode;
  static deserializeBinaryFromReader(message: CodeSearchSupportCode, reader: jspb.BinaryReader): CodeSearchSupportCode;
}

export namespace CodeSearchSupportCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EXPLICIT: 1;
    ALL: 2;
  }

  export const Value: ValueMap;
}

export class CodeSystemContentModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemContentModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemContentModeCode): CodeSystemContentModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemContentModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemContentModeCode;
  static deserializeBinaryFromReader(message: CodeSystemContentModeCode, reader: jspb.BinaryReader): CodeSystemContentModeCode;
}

export namespace CodeSystemContentModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_PRESENT: 1;
    EXAMPLE: 2;
    FRAGMENT: 3;
    COMPLETE: 4;
    SUPPLEMENT: 5;
  }

  export const Value: ValueMap;
}

export class CodeSystemHierarchyMeaningCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemHierarchyMeaningCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemHierarchyMeaningCode): CodeSystemHierarchyMeaningCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemHierarchyMeaningCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemHierarchyMeaningCode;
  static deserializeBinaryFromReader(message: CodeSystemHierarchyMeaningCode, reader: jspb.BinaryReader): CodeSystemHierarchyMeaningCode;
}

export namespace CodeSystemHierarchyMeaningCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GROUPED_BY: 1;
    IS_A: 2;
    PART_OF: 3;
    CLASSIFIED_WITH: 4;
  }

  export const Value: ValueMap;
}

export class CompartmentTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompartmentTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompartmentTypeCode): CompartmentTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompartmentTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompartmentTypeCode;
  static deserializeBinaryFromReader(message: CompartmentTypeCode, reader: jspb.BinaryReader): CompartmentTypeCode;
}

export namespace CompartmentTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PATIENT: 1;
    ENCOUNTER: 2;
    RELATED_PERSON: 3;
    PRACTITIONER: 4;
    DEVICE: 5;
  }

  export const Value: ValueMap;
}

export class CompositionAttestationModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionAttestationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionAttestationModeCode): CompositionAttestationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionAttestationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionAttestationModeCode;
  static deserializeBinaryFromReader(message: CompositionAttestationModeCode, reader: jspb.BinaryReader): CompositionAttestationModeCode;
}

export namespace CompositionAttestationModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERSONAL: 1;
    PROFESSIONAL: 2;
    LEGAL: 3;
    OFFICIAL: 4;
  }

  export const Value: ValueMap;
}

export class CompositionStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionStatusCode): CompositionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionStatusCode;
  static deserializeBinaryFromReader(message: CompositionStatusCode, reader: jspb.BinaryReader): CompositionStatusCode;
}

export namespace CompositionStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRELIMINARY: 1;
    FINAL: 2;
    AMENDED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class ConceptMapEquivalenceCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapEquivalenceCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapEquivalenceCode): ConceptMapEquivalenceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapEquivalenceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapEquivalenceCode;
  static deserializeBinaryFromReader(message: ConceptMapEquivalenceCode, reader: jspb.BinaryReader): ConceptMapEquivalenceCode;
}

export namespace ConceptMapEquivalenceCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RELATEDTO: 1;
    EQUIVALENT: 2;
    EQUAL: 3;
    WIDER: 4;
    SUBSUMES: 5;
    NARROWER: 6;
    SPECIALIZES: 7;
    INEXACT: 8;
    UNMATCHED: 9;
    DISJOINT: 10;
  }

  export const Value: ValueMap;
}

export class ConceptMapGroupUnmappedModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapGroupUnmappedModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapGroupUnmappedModeCode): ConceptMapGroupUnmappedModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapGroupUnmappedModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapGroupUnmappedModeCode;
  static deserializeBinaryFromReader(message: ConceptMapGroupUnmappedModeCode, reader: jspb.BinaryReader): ConceptMapGroupUnmappedModeCode;
}

export namespace ConceptMapGroupUnmappedModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROVIDED: 1;
    FIXED: 2;
    OTHER_MAP: 3;
  }

  export const Value: ValueMap;
}

export class ConditionClinicalStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionClinicalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionClinicalStatusCode): ConditionClinicalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionClinicalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionClinicalStatusCode;
  static deserializeBinaryFromReader(message: ConditionClinicalStatusCode, reader: jspb.BinaryReader): ConditionClinicalStatusCode;
}

export namespace ConditionClinicalStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    RECURRENCE: 2;
    RELAPSE: 3;
    INACTIVE: 4;
    REMISSION: 5;
    RESOLVED: 6;
  }

  export const Value: ValueMap;
}

export class ConditionVerificationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionVerificationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionVerificationStatusCode): ConditionVerificationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionVerificationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionVerificationStatusCode;
  static deserializeBinaryFromReader(message: ConditionVerificationStatusCode, reader: jspb.BinaryReader): ConditionVerificationStatusCode;
}

export namespace ConditionVerificationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNCONFIRMED: 1;
    PROVISIONAL: 2;
    DIFFERENTIAL: 3;
    CONFIRMED: 4;
    REFUTED: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class ConditionalDeleteStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalDeleteStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalDeleteStatusCode): ConditionalDeleteStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalDeleteStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalDeleteStatusCode;
  static deserializeBinaryFromReader(message: ConditionalDeleteStatusCode, reader: jspb.BinaryReader): ConditionalDeleteStatusCode;
}

export namespace ConditionalDeleteStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_SUPPORTED: 1;
    SINGLE: 2;
    MULTIPLE: 3;
  }

  export const Value: ValueMap;
}

export class ConditionalReadStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalReadStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalReadStatusCode): ConditionalReadStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalReadStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalReadStatusCode;
  static deserializeBinaryFromReader(message: ConditionalReadStatusCode, reader: jspb.BinaryReader): ConditionalReadStatusCode;
}

export namespace ConditionalReadStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_SUPPORTED: 1;
    MODIFIED_SINCE: 2;
    NOT_MATCH: 3;
    FULL_SUPPORT: 4;
  }

  export const Value: ValueMap;
}

export class ConformanceExpectationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConformanceExpectationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConformanceExpectationCode): ConformanceExpectationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConformanceExpectationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConformanceExpectationCode;
  static deserializeBinaryFromReader(message: ConformanceExpectationCode, reader: jspb.BinaryReader): ConformanceExpectationCode;
}

export namespace ConformanceExpectationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SHALL: 1;
    SHOULD: 2;
    MAY: 3;
    SHOULD_NOT: 4;
  }

  export const Value: ValueMap;
}

export class ConsentDataMeaningCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentDataMeaningCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentDataMeaningCode): ConsentDataMeaningCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentDataMeaningCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentDataMeaningCode;
  static deserializeBinaryFromReader(message: ConsentDataMeaningCode, reader: jspb.BinaryReader): ConsentDataMeaningCode;
}

export namespace ConsentDataMeaningCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    RELATED: 2;
    DEPENDENTS: 3;
    AUTHOREDBY: 4;
  }

  export const Value: ValueMap;
}

export class ConsentProvisionTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentProvisionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentProvisionTypeCode): ConsentProvisionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentProvisionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentProvisionTypeCode;
  static deserializeBinaryFromReader(message: ConsentProvisionTypeCode, reader: jspb.BinaryReader): ConsentProvisionTypeCode;
}

export namespace ConsentProvisionTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DENY: 1;
    PERMIT: 2;
  }

  export const Value: ValueMap;
}

export class ConsentStateCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentStateCode): ConsentStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentStateCode;
  static deserializeBinaryFromReader(message: ConsentStateCode, reader: jspb.BinaryReader): ConsentStateCode;
}

export namespace ConsentStateCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    PROPOSED: 2;
    ACTIVE: 3;
    REJECTED: 4;
    INACTIVE: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class ConstraintSeverityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstraintSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConstraintSeverityCode): ConstraintSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConstraintSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstraintSeverityCode;
  static deserializeBinaryFromReader(message: ConstraintSeverityCode, reader: jspb.BinaryReader): ConstraintSeverityCode;
}

export namespace ConstraintSeverityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ERROR: 1;
    WARNING: 2;
  }

  export const Value: ValueMap;
}

export class ContactPointSystemCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointSystemCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointSystemCode): ContactPointSystemCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointSystemCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointSystemCode;
  static deserializeBinaryFromReader(message: ContactPointSystemCode, reader: jspb.BinaryReader): ContactPointSystemCode;
}

export namespace ContactPointSystemCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PHONE: 1;
    FAX: 2;
    EMAIL: 3;
    PAGER: 4;
    URL: 5;
    SMS: 6;
    OTHER: 7;
  }

  export const Value: ValueMap;
}

export class ContactPointUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointUseCode): ContactPointUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointUseCode;
  static deserializeBinaryFromReader(message: ContactPointUseCode, reader: jspb.BinaryReader): ContactPointUseCode;
}

export namespace ContactPointUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOME: 1;
    WORK: 2;
    TEMP: 3;
    OLD: 4;
    MOBILE: 5;
  }

  export const Value: ValueMap;
}

export class ContractResourcePublicationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractResourcePublicationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContractResourcePublicationStatusCode): ContractResourcePublicationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractResourcePublicationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractResourcePublicationStatusCode;
  static deserializeBinaryFromReader(message: ContractResourcePublicationStatusCode, reader: jspb.BinaryReader): ContractResourcePublicationStatusCode;
}

export namespace ContractResourcePublicationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AMENDED: 1;
    APPENDED: 2;
    CANCELLED: 3;
    DISPUTED: 4;
    ENTERED_IN_ERROR: 5;
    EXECUTABLE: 6;
    EXECUTED: 7;
    NEGOTIABLE: 8;
    OFFERED: 9;
    POLICY: 10;
    REJECTED: 11;
    RENEWED: 12;
    REVOKED: 13;
    RESOLVED: 14;
    TERMINATED: 15;
  }

  export const Value: ValueMap;
}

export class ContractResourceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractResourceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContractResourceStatusCode): ContractResourceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractResourceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractResourceStatusCode;
  static deserializeBinaryFromReader(message: ContractResourceStatusCode, reader: jspb.BinaryReader): ContractResourceStatusCode;
}

export namespace ContractResourceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AMENDED: 1;
    APPENDED: 2;
    CANCELLED: 3;
    DISPUTED: 4;
    ENTERED_IN_ERROR: 5;
    EXECUTABLE: 6;
    EXECUTED: 7;
    NEGOTIABLE: 8;
    OFFERED: 9;
    POLICY: 10;
    REJECTED: 11;
    RENEWED: 12;
    REVOKED: 13;
    RESOLVED: 14;
    TERMINATED: 15;
  }

  export const Value: ValueMap;
}

export class ContributorTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContributorTypeCode): ContributorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContributorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributorTypeCode;
  static deserializeBinaryFromReader(message: ContributorTypeCode, reader: jspb.BinaryReader): ContributorTypeCode;
}

export namespace ContributorTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AUTHOR: 1;
    EDITOR: 2;
    REVIEWER: 3;
    ENDORSER: 4;
  }

  export const Value: ValueMap;
}

export class DataAbsentReasonCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAbsentReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: DataAbsentReasonCode): DataAbsentReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAbsentReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAbsentReasonCode;
  static deserializeBinaryFromReader(message: DataAbsentReasonCode, reader: jspb.BinaryReader): DataAbsentReasonCode;
}

export namespace DataAbsentReasonCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNKNOWN: 1;
    ASKED_UNKNOWN: 2;
    TEMP_UNKNOWN: 3;
    NOT_ASKED: 4;
    ASKED_DECLINED: 5;
    MASKED: 6;
    NOT_APPLICABLE: 7;
    UNSUPPORTED: 8;
    AS_TEXT: 9;
    ERROR: 10;
    NOT_A_NUMBER: 11;
    NEGATIVE_INFINITY: 12;
    POSITIVE_INFINITY: 13;
    NOT_PERFORMED: 14;
    NOT_PERMITTED: 15;
  }

  export const Value: ValueMap;
}

export class DataTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DataTypeCode): DataTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTypeCode;
  static deserializeBinaryFromReader(message: DataTypeCode, reader: jspb.BinaryReader): DataTypeCode;
}

export namespace DataTypeCode {
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
  }

  export const Value: ValueMap;
}

export class DaysOfWeekCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaysOfWeekCode.AsObject;
  static toObject(includeInstance: boolean, msg: DaysOfWeekCode): DaysOfWeekCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DaysOfWeekCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaysOfWeekCode;
  static deserializeBinaryFromReader(message: DaysOfWeekCode, reader: jspb.BinaryReader): DaysOfWeekCode;
}

export namespace DaysOfWeekCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MON: 1;
    TUE: 2;
    WED: 3;
    THU: 4;
    FRI: 5;
    SAT: 6;
    SUN: 7;
  }

  export const Value: ValueMap;
}

export class DetectedIssueSeverityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectedIssueSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: DetectedIssueSeverityCode): DetectedIssueSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetectedIssueSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectedIssueSeverityCode;
  static deserializeBinaryFromReader(message: DetectedIssueSeverityCode, reader: jspb.BinaryReader): DetectedIssueSeverityCode;
}

export namespace DetectedIssueSeverityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HIGH: 1;
    MODERATE: 2;
    LOW: 3;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCalibrationStateCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCalibrationStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCalibrationStateCode): DeviceMetricCalibrationStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCalibrationStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCalibrationStateCode;
  static deserializeBinaryFromReader(message: DeviceMetricCalibrationStateCode, reader: jspb.BinaryReader): DeviceMetricCalibrationStateCode;
}

export namespace DeviceMetricCalibrationStateCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_CALIBRATED: 1;
    CALIBRATION_REQUIRED: 2;
    CALIBRATED: 3;
    UNSPECIFIED: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCalibrationTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCalibrationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCalibrationTypeCode): DeviceMetricCalibrationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCalibrationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCalibrationTypeCode;
  static deserializeBinaryFromReader(message: DeviceMetricCalibrationTypeCode, reader: jspb.BinaryReader): DeviceMetricCalibrationTypeCode;
}

export namespace DeviceMetricCalibrationTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNSPECIFIED: 1;
    OFFSET: 2;
    GAIN: 3;
    TWO_POINT: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCategoryCode): DeviceMetricCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCategoryCode;
  static deserializeBinaryFromReader(message: DeviceMetricCategoryCode, reader: jspb.BinaryReader): DeviceMetricCategoryCode;
}

export namespace DeviceMetricCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MEASUREMENT: 1;
    SETTING: 2;
    CALCULATION: 3;
    UNSPECIFIED: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricColorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricColorCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricColorCode): DeviceMetricColorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricColorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricColorCode;
  static deserializeBinaryFromReader(message: DeviceMetricColorCode, reader: jspb.BinaryReader): DeviceMetricColorCode;
}

export namespace DeviceMetricColorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BLACK: 1;
    RED: 2;
    GREEN: 3;
    YELLOW: 4;
    BLUE: 5;
    MAGENTA: 6;
    CYAN: 7;
    WHITE: 8;
  }

  export const Value: ValueMap;
}

export class DeviceMetricOperationalStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricOperationalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricOperationalStatusCode): DeviceMetricOperationalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricOperationalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricOperationalStatusCode;
  static deserializeBinaryFromReader(message: DeviceMetricOperationalStatusCode, reader: jspb.BinaryReader): DeviceMetricOperationalStatusCode;
}

export namespace DeviceMetricOperationalStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ON: 1;
    OFF: 2;
    STANDBY: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class DeviceNameTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceNameTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceNameTypeCode): DeviceNameTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceNameTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceNameTypeCode;
  static deserializeBinaryFromReader(message: DeviceNameTypeCode, reader: jspb.BinaryReader): DeviceNameTypeCode;
}

export namespace DeviceNameTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UDI_LABEL_NAME: 1;
    USER_FRIENDLY_NAME: 2;
    PATIENT_REPORTED_NAME: 3;
    MANUFACTURER_NAME: 4;
    MODEL_NAME: 5;
    OTHER: 6;
  }

  export const Value: ValueMap;
}

export class DeviceUseStatementStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUseStatementStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUseStatementStatusCode): DeviceUseStatementStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUseStatementStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUseStatementStatusCode;
  static deserializeBinaryFromReader(message: DeviceUseStatementStatusCode, reader: jspb.BinaryReader): DeviceUseStatementStatusCode;
}

export namespace DeviceUseStatementStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    INTENDED: 4;
    STOPPED: 5;
    ON_HOLD: 6;
  }

  export const Value: ValueMap;
}

export class DiagnosticReportStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportStatusCode): DiagnosticReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportStatusCode;
  static deserializeBinaryFromReader(message: DiagnosticReportStatusCode, reader: jspb.BinaryReader): DiagnosticReportStatusCode;
}

export namespace DiagnosticReportStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REGISTERED: 1;
    PARTIAL: 2;
    PRELIMINARY: 3;
    FINAL: 4;
    AMENDED: 5;
    CORRECTED: 6;
    APPENDED: 7;
    CANCELLED: 8;
    ENTERED_IN_ERROR: 9;
    UNKNOWN: 10;
  }

  export const Value: ValueMap;
}

export class DiscriminatorTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscriminatorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiscriminatorTypeCode): DiscriminatorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscriminatorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscriminatorTypeCode;
  static deserializeBinaryFromReader(message: DiscriminatorTypeCode, reader: jspb.BinaryReader): DiscriminatorTypeCode;
}

export namespace DiscriminatorTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    VALUE: 1;
    EXISTS: 2;
    PATTERN: 3;
    TYPE: 4;
    PROFILE: 5;
  }

  export const Value: ValueMap;
}

export class DocumentModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentModeCode): DocumentModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentModeCode;
  static deserializeBinaryFromReader(message: DocumentModeCode, reader: jspb.BinaryReader): DocumentModeCode;
}

export namespace DocumentModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRODUCER: 1;
    CONSUMER: 2;
  }

  export const Value: ValueMap;
}

export class DocumentReferenceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentReferenceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentReferenceStatusCode): DocumentReferenceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentReferenceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentReferenceStatusCode;
  static deserializeBinaryFromReader(message: DocumentReferenceStatusCode, reader: jspb.BinaryReader): DocumentReferenceStatusCode;
}

export namespace DocumentReferenceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CURRENT: 1;
    SUPERSEDED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class DocumentRelationshipTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRelationshipTypeCode): DocumentRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRelationshipTypeCode;
  static deserializeBinaryFromReader(message: DocumentRelationshipTypeCode, reader: jspb.BinaryReader): DocumentRelationshipTypeCode;
}

export namespace DocumentRelationshipTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REPLACES: 1;
    TRANSFORMS: 2;
    SIGNS: 3;
    APPENDS: 4;
  }

  export const Value: ValueMap;
}

export class EligibilityRequestPurposeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EligibilityRequestPurposeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EligibilityRequestPurposeCode): EligibilityRequestPurposeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EligibilityRequestPurposeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EligibilityRequestPurposeCode;
  static deserializeBinaryFromReader(message: EligibilityRequestPurposeCode, reader: jspb.BinaryReader): EligibilityRequestPurposeCode;
}

export namespace EligibilityRequestPurposeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AUTH_REQUIREMENTS: 1;
    BENEFITS: 2;
    DISCOVERY: 3;
    VALIDATION: 4;
  }

  export const Value: ValueMap;
}

export class EligibilityResponsePurposeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EligibilityResponsePurposeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EligibilityResponsePurposeCode): EligibilityResponsePurposeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EligibilityResponsePurposeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EligibilityResponsePurposeCode;
  static deserializeBinaryFromReader(message: EligibilityResponsePurposeCode, reader: jspb.BinaryReader): EligibilityResponsePurposeCode;
}

export namespace EligibilityResponsePurposeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AUTH_REQUIREMENTS: 1;
    BENEFITS: 2;
    DISCOVERY: 3;
    VALIDATION: 4;
  }

  export const Value: ValueMap;
}

export class EnableWhenBehaviorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableWhenBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: EnableWhenBehaviorCode): EnableWhenBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnableWhenBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableWhenBehaviorCode;
  static deserializeBinaryFromReader(message: EnableWhenBehaviorCode, reader: jspb.BinaryReader): EnableWhenBehaviorCode;
}

export namespace EnableWhenBehaviorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALL: 1;
    ANY: 2;
  }

  export const Value: ValueMap;
}

export class EncounterLocationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterLocationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterLocationStatusCode): EncounterLocationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterLocationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterLocationStatusCode;
  static deserializeBinaryFromReader(message: EncounterLocationStatusCode, reader: jspb.BinaryReader): EncounterLocationStatusCode;
}

export namespace EncounterLocationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    ACTIVE: 2;
    RESERVED: 3;
    COMPLETED: 4;
  }

  export const Value: ValueMap;
}

export class EncounterStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterStatusCode): EncounterStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterStatusCode;
  static deserializeBinaryFromReader(message: EncounterStatusCode, reader: jspb.BinaryReader): EncounterStatusCode;
}

export namespace EncounterStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    ARRIVED: 2;
    TRIAGED: 3;
    IN_PROGRESS: 4;
    ONLEAVE: 5;
    FINISHED: 6;
    CANCELLED: 7;
    ENTERED_IN_ERROR: 8;
    UNKNOWN: 9;
  }

  export const Value: ValueMap;
}

export class EndpointStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointStatusCode): EndpointStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointStatusCode;
  static deserializeBinaryFromReader(message: EndpointStatusCode, reader: jspb.BinaryReader): EndpointStatusCode;
}

export namespace EndpointStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    SUSPENDED: 2;
    ERROR: 3;
    OFF: 4;
    ENTERED_IN_ERROR: 5;
    TEST: 6;
  }

  export const Value: ValueMap;
}

export class EpisodeOfCareStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpisodeOfCareStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EpisodeOfCareStatusCode): EpisodeOfCareStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpisodeOfCareStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpisodeOfCareStatusCode;
  static deserializeBinaryFromReader(message: EpisodeOfCareStatusCode, reader: jspb.BinaryReader): EpisodeOfCareStatusCode;
}

export namespace EpisodeOfCareStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    WAIT: 2;
    ACTIVE: 3;
    ONHOLD: 4;
    FINISHED: 5;
    CANCELLED: 6;
    ENTERED_IN_ERROR: 7;
  }

  export const Value: ValueMap;
}

export class EventCapabilityModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCapabilityModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventCapabilityModeCode): EventCapabilityModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCapabilityModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCapabilityModeCode;
  static deserializeBinaryFromReader(message: EventCapabilityModeCode, reader: jspb.BinaryReader): EventCapabilityModeCode;
}

export namespace EventCapabilityModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SENDER: 1;
    RECEIVER: 2;
  }

  export const Value: ValueMap;
}

export class EventStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventStatusCode): EventStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStatusCode;
  static deserializeBinaryFromReader(message: EventStatusCode, reader: jspb.BinaryReader): EventStatusCode;
}

export namespace EventStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREPARATION: 1;
    IN_PROGRESS: 2;
    NOT_DONE: 3;
    ON_HOLD: 4;
    STOPPED: 5;
    COMPLETED: 6;
    ENTERED_IN_ERROR: 7;
    UNKNOWN: 8;
  }

  export const Value: ValueMap;
}

export class EventTimingCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTimingCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventTimingCode): EventTimingCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTimingCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTimingCode;
  static deserializeBinaryFromReader(message: EventTimingCode, reader: jspb.BinaryReader): EventTimingCode;
}

export namespace EventTimingCode {
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
  }

  export const Value: ValueMap;
}

export class EvidenceVariableTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvidenceVariableTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EvidenceVariableTypeCode): EvidenceVariableTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvidenceVariableTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvidenceVariableTypeCode;
  static deserializeBinaryFromReader(message: EvidenceVariableTypeCode, reader: jspb.BinaryReader): EvidenceVariableTypeCode;
}

export namespace EvidenceVariableTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DICHOTOMOUS: 1;
    CONTINUOUS: 2;
    DESCRIPTIVE: 3;
  }

  export const Value: ValueMap;
}

export class ExampleScenarioActorTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleScenarioActorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleScenarioActorTypeCode): ExampleScenarioActorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleScenarioActorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleScenarioActorTypeCode;
  static deserializeBinaryFromReader(message: ExampleScenarioActorTypeCode, reader: jspb.BinaryReader): ExampleScenarioActorTypeCode;
}

export namespace ExampleScenarioActorTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERSON: 1;
    ENTITY: 2;
  }

  export const Value: ValueMap;
}

export class ExpansionParameterSourceCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpansionParameterSourceCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExpansionParameterSourceCode): ExpansionParameterSourceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpansionParameterSourceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpansionParameterSourceCode;
  static deserializeBinaryFromReader(message: ExpansionParameterSourceCode, reader: jspb.BinaryReader): ExpansionParameterSourceCode;
}

export namespace ExpansionParameterSourceCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INPUT: 1;
    SERVER: 2;
    CODESYSTEM: 3;
  }

  export const Value: ValueMap;
}

export class ExpansionProcessingRuleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpansionProcessingRuleCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExpansionProcessingRuleCode): ExpansionProcessingRuleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpansionProcessingRuleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpansionProcessingRuleCode;
  static deserializeBinaryFromReader(message: ExpansionProcessingRuleCode, reader: jspb.BinaryReader): ExpansionProcessingRuleCode;
}

export namespace ExpansionProcessingRuleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALL_CODES: 1;
    UNGROUPED: 2;
    GROUPS_ONLY: 3;
  }

  export const Value: ValueMap;
}

export class ExplanationOfBenefitStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplanationOfBenefitStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExplanationOfBenefitStatusCode): ExplanationOfBenefitStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplanationOfBenefitStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplanationOfBenefitStatusCode;
  static deserializeBinaryFromReader(message: ExplanationOfBenefitStatusCode, reader: jspb.BinaryReader): ExplanationOfBenefitStatusCode;
}

export namespace ExplanationOfBenefitStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    CANCELLED: 2;
    DRAFT: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class ExposureStateCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExposureStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExposureStateCode): ExposureStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExposureStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExposureStateCode;
  static deserializeBinaryFromReader(message: ExposureStateCode, reader: jspb.BinaryReader): ExposureStateCode;
}

export namespace ExposureStateCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EXPOSURE: 1;
    EXPOSURE_ALTERNATIVE: 2;
  }

  export const Value: ValueMap;
}

export class ExtensionContextTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionContextTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionContextTypeCode): ExtensionContextTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionContextTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionContextTypeCode;
  static deserializeBinaryFromReader(message: ExtensionContextTypeCode, reader: jspb.BinaryReader): ExtensionContextTypeCode;
}

export namespace ExtensionContextTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FHIRPATH: 1;
    ELEMENT: 2;
    EXTENSION: 3;
  }

  export const Value: ValueMap;
}

export class FHIRDeviceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRDeviceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRDeviceStatusCode): FHIRDeviceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRDeviceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRDeviceStatusCode;
  static deserializeBinaryFromReader(message: FHIRDeviceStatusCode, reader: jspb.BinaryReader): FHIRDeviceStatusCode;
}

export namespace FHIRDeviceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class FHIRRestfulInteractionsCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRRestfulInteractionsCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRRestfulInteractionsCode): FHIRRestfulInteractionsCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRRestfulInteractionsCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRRestfulInteractionsCode;
  static deserializeBinaryFromReader(message: FHIRRestfulInteractionsCode, reader: jspb.BinaryReader): FHIRRestfulInteractionsCode;
}

export namespace FHIRRestfulInteractionsCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    READ: 1;
    VREAD: 2;
    UPDATE: 3;
    PATCH: 4;
    DELETE: 5;
    HISTORY: 6;
    HISTORY_INSTANCE: 7;
    HISTORY_TYPE: 8;
    HISTORY_SYSTEM: 9;
    CREATE: 10;
    SEARCH: 11;
    SEARCH_TYPE: 12;
    SEARCH_SYSTEM: 13;
    CAPABILITIES: 14;
    TRANSACTION: 15;
    BATCH: 16;
    OPERATION: 17;
  }

  export const Value: ValueMap;
}

export class FHIRSubstanceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRSubstanceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRSubstanceStatusCode): FHIRSubstanceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRSubstanceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRSubstanceStatusCode;
  static deserializeBinaryFromReader(message: FHIRSubstanceStatusCode, reader: jspb.BinaryReader): FHIRSubstanceStatusCode;
}

export namespace FHIRSubstanceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class FHIRVersionCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRVersionCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRVersionCode): FHIRVersionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRVersionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRVersionCode;
  static deserializeBinaryFromReader(message: FHIRVersionCode, reader: jspb.BinaryReader): FHIRVersionCode;
}

export namespace FHIRVersionCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    V_0_01: 1;
    V_0_05: 2;
    V_0_06: 3;
    V_0_11: 4;
    V_0_0_80: 5;
    V_0_0_81: 6;
    V_0_0_82: 7;
    V_0_4_0: 8;
    V_0_5_0: 9;
    V_1_0_0: 10;
    V_1_0_1: 11;
    V_1_0_2: 12;
    V_1_1_0: 13;
    V_1_4_0: 14;
    V_1_6_0: 15;
    V_1_8_0: 16;
    V_3_0_0: 17;
    V_3_0_1: 18;
    V_3_3_0: 19;
    V_3_5_0: 20;
    V_4_0_0: 21;
    V_4_0_1: 22;
  }

  export const Value: ValueMap;
}

export class FamilyHistoryStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyHistoryStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyHistoryStatusCode): FamilyHistoryStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyHistoryStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyHistoryStatusCode;
  static deserializeBinaryFromReader(message: FamilyHistoryStatusCode, reader: jspb.BinaryReader): FamilyHistoryStatusCode;
}

export namespace FamilyHistoryStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PARTIAL: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    HEALTH_UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class FilterOperatorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterOperatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: FilterOperatorCode): FilterOperatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterOperatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterOperatorCode;
  static deserializeBinaryFromReader(message: FilterOperatorCode, reader: jspb.BinaryReader): FilterOperatorCode;
}

export namespace FilterOperatorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQUALS: 1;
    IS_A: 2;
    DESCENDENT_OF: 3;
    IS_NOT_A: 4;
    REGEX: 5;
    IN: 6;
    NOT_IN: 7;
    GENERALIZES: 8;
    EXISTS: 9;
  }

  export const Value: ValueMap;
}

export class FinancialResourceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialResourceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialResourceStatusCode): FinancialResourceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialResourceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialResourceStatusCode;
  static deserializeBinaryFromReader(message: FinancialResourceStatusCode, reader: jspb.BinaryReader): FinancialResourceStatusCode;
}

export namespace FinancialResourceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    CANCELLED: 2;
    DRAFT: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class FlagStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FlagStatusCode): FlagStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagStatusCode;
  static deserializeBinaryFromReader(message: FlagStatusCode, reader: jspb.BinaryReader): FlagStatusCode;
}

export namespace FlagStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class GoalAcceptanceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalAcceptanceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalAcceptanceStatusCode): GoalAcceptanceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalAcceptanceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalAcceptanceStatusCode;
  static deserializeBinaryFromReader(message: GoalAcceptanceStatusCode, reader: jspb.BinaryReader): GoalAcceptanceStatusCode;
}

export namespace GoalAcceptanceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AGREE: 1;
    DISAGREE: 2;
    PENDING: 3;
  }

  export const Value: ValueMap;
}

export class GoalLifecycleStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalLifecycleStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalLifecycleStatusCode): GoalLifecycleStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalLifecycleStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalLifecycleStatusCode;
  static deserializeBinaryFromReader(message: GoalLifecycleStatusCode, reader: jspb.BinaryReader): GoalLifecycleStatusCode;
}

export namespace GoalLifecycleStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    PLANNED: 2;
    ACCEPTED: 3;
    ACTIVE: 4;
    ON_HOLD: 5;
    COMPLETED: 6;
    CANCELLED: 7;
    ENTERED_IN_ERROR: 8;
    REJECTED: 9;
  }

  export const Value: ValueMap;
}

export class GraphCompartmentRuleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphCompartmentRuleCode.AsObject;
  static toObject(includeInstance: boolean, msg: GraphCompartmentRuleCode): GraphCompartmentRuleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphCompartmentRuleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphCompartmentRuleCode;
  static deserializeBinaryFromReader(message: GraphCompartmentRuleCode, reader: jspb.BinaryReader): GraphCompartmentRuleCode;
}

export namespace GraphCompartmentRuleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IDENTICAL: 1;
    MATCHING: 2;
    DIFFERENT: 3;
    CUSTOM: 4;
  }

  export const Value: ValueMap;
}

export class GraphCompartmentUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphCompartmentUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: GraphCompartmentUseCode): GraphCompartmentUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphCompartmentUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphCompartmentUseCode;
  static deserializeBinaryFromReader(message: GraphCompartmentUseCode, reader: jspb.BinaryReader): GraphCompartmentUseCode;
}

export namespace GraphCompartmentUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONDITION: 1;
    REQUIREMENT: 2;
  }

  export const Value: ValueMap;
}

export class GroupMeasureCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupMeasureCode.AsObject;
  static toObject(includeInstance: boolean, msg: GroupMeasureCode): GroupMeasureCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupMeasureCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupMeasureCode;
  static deserializeBinaryFromReader(message: GroupMeasureCode, reader: jspb.BinaryReader): GroupMeasureCode;
}

export namespace GroupMeasureCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MEAN: 1;
    MEDIAN: 2;
    MEAN_OF_MEAN: 3;
    MEAN_OF_MEDIAN: 4;
    MEDIAN_OF_MEAN: 5;
    MEDIAN_OF_MEDIAN: 6;
  }

  export const Value: ValueMap;
}

export class GroupTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: GroupTypeCode): GroupTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupTypeCode;
  static deserializeBinaryFromReader(message: GroupTypeCode, reader: jspb.BinaryReader): GroupTypeCode;
}

export namespace GroupTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERSON: 1;
    ANIMAL: 2;
    PRACTITIONER: 3;
    DEVICE: 4;
    MEDICATION: 5;
    SUBSTANCE: 6;
  }

  export const Value: ValueMap;
}

export class GuidanceResponseStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceResponseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceResponseStatusCode): GuidanceResponseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceResponseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceResponseStatusCode;
  static deserializeBinaryFromReader(message: GuidanceResponseStatusCode, reader: jspb.BinaryReader): GuidanceResponseStatusCode;
}

export namespace GuidanceResponseStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUCCESS: 1;
    DATA_REQUESTED: 2;
    DATA_REQUIRED: 3;
    IN_PROGRESS: 4;
    FAILURE: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class GuidePageGenerationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidePageGenerationCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuidePageGenerationCode): GuidePageGenerationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidePageGenerationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidePageGenerationCode;
  static deserializeBinaryFromReader(message: GuidePageGenerationCode, reader: jspb.BinaryReader): GuidePageGenerationCode;
}

export namespace GuidePageGenerationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HTML: 1;
    MARKDOWN: 2;
    XML: 3;
    GENERATED: 4;
  }

  export const Value: ValueMap;
}

export class GuideParameterCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuideParameterCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuideParameterCode): GuideParameterCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuideParameterCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuideParameterCode;
  static deserializeBinaryFromReader(message: GuideParameterCode, reader: jspb.BinaryReader): GuideParameterCode;
}

export namespace GuideParameterCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    APPLY: 1;
    PATH_RESOURCE: 2;
    PATH_PAGES: 3;
    PATH_TX_CACHE: 4;
    EXPANSION_PARAMETER: 5;
    RULE_BROKEN_LINKS: 6;
    GENERATE_XML: 7;
    GENERATE_JSON: 8;
    GENERATE_TURTLE: 9;
    HTML_TEMPLATE: 10;
  }

  export const Value: ValueMap;
}

export class HL7WorkgroupCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HL7WorkgroupCode.AsObject;
  static toObject(includeInstance: boolean, msg: HL7WorkgroupCode): HL7WorkgroupCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HL7WorkgroupCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HL7WorkgroupCode;
  static deserializeBinaryFromReader(message: HL7WorkgroupCode, reader: jspb.BinaryReader): HL7WorkgroupCode;
}

export namespace HL7WorkgroupCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CBCC: 1;
    CDS: 2;
    CQI: 3;
    CG: 4;
    DEV: 5;
    EHR: 6;
    FHIR: 7;
    FM: 8;
    HSI: 9;
    II: 10;
    INM: 11;
    ITS: 12;
    MNM: 13;
    OO: 14;
    PA: 15;
    PC: 16;
    PHER: 17;
    PHX: 18;
    BRR: 19;
    SD: 20;
    SEC: 21;
    US: 22;
    VOCAB: 23;
    AID: 24;
  }

  export const Value: ValueMap;
}

export class HTTPVerbCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPVerbCode.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPVerbCode): HTTPVerbCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPVerbCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPVerbCode;
  static deserializeBinaryFromReader(message: HTTPVerbCode, reader: jspb.BinaryReader): HTTPVerbCode;
}

export namespace HTTPVerbCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GET: 1;
    HEAD: 2;
    POST: 3;
    PUT: 4;
    DELETE: 5;
    PATCH: 6;
  }

  export const Value: ValueMap;
}

export class HumanNameAssemblyOrderCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameAssemblyOrderCode.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameAssemblyOrderCode): HumanNameAssemblyOrderCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameAssemblyOrderCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameAssemblyOrderCode;
  static deserializeBinaryFromReader(message: HumanNameAssemblyOrderCode, reader: jspb.BinaryReader): HumanNameAssemblyOrderCode;
}

export namespace HumanNameAssemblyOrderCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NL1: 1;
    NL2: 2;
    NL3: 3;
    NL4: 4;
  }

  export const Value: ValueMap;
}

export class IdentifierUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifierUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifierUseCode): IdentifierUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifierUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifierUseCode;
  static deserializeBinaryFromReader(message: IdentifierUseCode, reader: jspb.BinaryReader): IdentifierUseCode;
}

export namespace IdentifierUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    USUAL: 1;
    OFFICIAL: 2;
    TEMP: 3;
    SECONDARY: 4;
    OLD: 5;
  }

  export const Value: ValueMap;
}

export class IdentityAssuranceLevelCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityAssuranceLevelCode.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityAssuranceLevelCode): IdentityAssuranceLevelCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityAssuranceLevelCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityAssuranceLevelCode;
  static deserializeBinaryFromReader(message: IdentityAssuranceLevelCode, reader: jspb.BinaryReader): IdentityAssuranceLevelCode;
}

export namespace IdentityAssuranceLevelCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LEVEL1: 1;
    LEVEL2: 2;
    LEVEL3: 3;
    LEVEL4: 4;
  }

  export const Value: ValueMap;
}

export class ImagingStudyStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagingStudyStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImagingStudyStatusCode): ImagingStudyStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImagingStudyStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagingStudyStatusCode;
  static deserializeBinaryFromReader(message: ImagingStudyStatusCode, reader: jspb.BinaryReader): ImagingStudyStatusCode;
}

export namespace ImagingStudyStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REGISTERED: 1;
    AVAILABLE: 2;
    CANCELLED: 3;
    ENTERED_IN_ERROR: 4;
    UNKNOWN: 5;
  }

  export const Value: ValueMap;
}

export class ImplantStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantStatusCode): ImplantStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantStatusCode;
  static deserializeBinaryFromReader(message: ImplantStatusCode, reader: jspb.BinaryReader): ImplantStatusCode;
}

export namespace ImplantStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FUNCTIONAL: 1;
    NON_FUNCTIONAL: 2;
    DISABLED: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class InvoicePriceComponentTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoicePriceComponentTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: InvoicePriceComponentTypeCode): InvoicePriceComponentTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoicePriceComponentTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoicePriceComponentTypeCode;
  static deserializeBinaryFromReader(message: InvoicePriceComponentTypeCode, reader: jspb.BinaryReader): InvoicePriceComponentTypeCode;
}

export namespace InvoicePriceComponentTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BASE: 1;
    SURCHARGE: 2;
    DEDUCTION: 3;
    DISCOUNT: 4;
    TAX: 5;
    INFORMATIONAL: 6;
  }

  export const Value: ValueMap;
}

export class InvoiceStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InvoiceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: InvoiceStatusCode): InvoiceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InvoiceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InvoiceStatusCode;
  static deserializeBinaryFromReader(message: InvoiceStatusCode, reader: jspb.BinaryReader): InvoiceStatusCode;
}

export namespace InvoiceStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ISSUED: 2;
    BALANCED: 3;
    CANCELLED: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class IssueSeverityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: IssueSeverityCode): IssueSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueSeverityCode;
  static deserializeBinaryFromReader(message: IssueSeverityCode, reader: jspb.BinaryReader): IssueSeverityCode;
}

export namespace IssueSeverityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FATAL: 1;
    ERROR: 2;
    WARNING: 3;
    INFORMATION: 4;
  }

  export const Value: ValueMap;
}

export class IssueTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: IssueTypeCode): IssueTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueTypeCode;
  static deserializeBinaryFromReader(message: IssueTypeCode, reader: jspb.BinaryReader): IssueTypeCode;
}

export namespace IssueTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INVALID: 1;
    STRUCTURE: 2;
    REQUIRED: 3;
    VALUE: 4;
    INVARIANT: 5;
    SECURITY: 6;
    LOGIN: 7;
    UNKNOWN: 8;
    EXPIRED: 9;
    FORBIDDEN: 10;
    SUPPRESSED: 11;
    PROCESSING: 12;
    NOT_SUPPORTED: 13;
    DUPLICATE: 14;
    MULTIPLE_MATCHES: 15;
    NOT_FOUND: 16;
    DELETED: 17;
    TOO_LONG: 18;
    CODE_INVALID: 19;
    EXTENSION: 20;
    TOO_COSTLY: 21;
    BUSINESS_RULE: 22;
    CONFLICT: 23;
    TRANSIENT: 24;
    LOCK_ERROR: 25;
    NO_STORE: 26;
    EXCEPTION: 27;
    TIMEOUT: 28;
    INCOMPLETE: 29;
    THROTTLED: 30;
    INFORMATIONAL: 31;
  }

  export const Value: ValueMap;
}

export class LinkTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LinkTypeCode): LinkTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkTypeCode;
  static deserializeBinaryFromReader(message: LinkTypeCode, reader: jspb.BinaryReader): LinkTypeCode;
}

export namespace LinkTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REPLACED_BY: 1;
    REPLACES: 2;
    REFER: 3;
    SEEALSO: 4;
  }

  export const Value: ValueMap;
}

export class LinkageTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkageTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LinkageTypeCode): LinkageTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkageTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkageTypeCode;
  static deserializeBinaryFromReader(message: LinkageTypeCode, reader: jspb.BinaryReader): LinkageTypeCode;
}

export namespace LinkageTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    ALTERNATE: 2;
    HISTORICAL: 3;
  }

  export const Value: ValueMap;
}

export class ListModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListModeCode): ListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModeCode;
  static deserializeBinaryFromReader(message: ListModeCode, reader: jspb.BinaryReader): ListModeCode;
}

export namespace ListModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    WORKING: 1;
    SNAPSHOT: 2;
    CHANGES: 3;
  }

  export const Value: ValueMap;
}

export class ListStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListStatusCode): ListStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStatusCode;
  static deserializeBinaryFromReader(message: ListStatusCode, reader: jspb.BinaryReader): ListStatusCode;
}

export namespace ListStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CURRENT: 1;
    RETIRED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class LocationModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationModeCode): LocationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationModeCode;
  static deserializeBinaryFromReader(message: LocationModeCode, reader: jspb.BinaryReader): LocationModeCode;
}

export namespace LocationModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    KIND: 2;
  }

  export const Value: ValueMap;
}

export class LocationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationStatusCode): LocationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationStatusCode;
  static deserializeBinaryFromReader(message: LocationStatusCode, reader: jspb.BinaryReader): LocationStatusCode;
}

export namespace LocationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    SUSPENDED: 2;
    INACTIVE: 3;
  }

  export const Value: ValueMap;
}

export class MatchGradeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchGradeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MatchGradeCode): MatchGradeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchGradeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchGradeCode;
  static deserializeBinaryFromReader(message: MatchGradeCode, reader: jspb.BinaryReader): MatchGradeCode;
}

export namespace MatchGradeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CERTAIN: 1;
    PROBABLE: 2;
    POSSIBLE: 3;
    CERTAINLY_NOT: 4;
  }

  export const Value: ValueMap;
}

export class MeasureImprovementNotationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureImprovementNotationCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureImprovementNotationCode): MeasureImprovementNotationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureImprovementNotationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureImprovementNotationCode;
  static deserializeBinaryFromReader(message: MeasureImprovementNotationCode, reader: jspb.BinaryReader): MeasureImprovementNotationCode;
}

export namespace MeasureImprovementNotationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INCREASE: 1;
    DECREASE: 2;
  }

  export const Value: ValueMap;
}

export class MeasureReportStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureReportStatusCode): MeasureReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureReportStatusCode;
  static deserializeBinaryFromReader(message: MeasureReportStatusCode, reader: jspb.BinaryReader): MeasureReportStatusCode;
}

export namespace MeasureReportStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETE: 1;
    PENDING: 2;
    ERROR: 3;
  }

  export const Value: ValueMap;
}

export class MeasureReportTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureReportTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureReportTypeCode): MeasureReportTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureReportTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureReportTypeCode;
  static deserializeBinaryFromReader(message: MeasureReportTypeCode, reader: jspb.BinaryReader): MeasureReportTypeCode;
}

export namespace MeasureReportTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INDIVIDUAL: 1;
    SUBJECT_: 2;
    SUMMARY: 3;
    DATA_COLLECTION: 4;
  }

  export const Value: ValueMap;
}

export class MedicationAdministrationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationAdministrationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationAdministrationStatusCode): MedicationAdministrationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationAdministrationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationAdministrationStatusCode;
  static deserializeBinaryFromReader(message: MedicationAdministrationStatusCode, reader: jspb.BinaryReader): MedicationAdministrationStatusCode;
}

export namespace MedicationAdministrationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    NOT_DONE: 2;
    ON_HOLD: 3;
    COMPLETED: 4;
    ENTERED_IN_ERROR: 5;
    STOPPED: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class MedicationDispenseStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationDispenseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationDispenseStatusCode): MedicationDispenseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationDispenseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationDispenseStatusCode;
  static deserializeBinaryFromReader(message: MedicationDispenseStatusCode, reader: jspb.BinaryReader): MedicationDispenseStatusCode;
}

export namespace MedicationDispenseStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREPARATION: 1;
    IN_PROGRESS: 2;
    CANCELLED: 3;
    ON_HOLD: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    STOPPED: 7;
    DECLINED: 8;
    UNKNOWN: 9;
  }

  export const Value: ValueMap;
}

export class MedicationKnowledgeStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationKnowledgeStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationKnowledgeStatusCode): MedicationKnowledgeStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationKnowledgeStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationKnowledgeStatusCode;
  static deserializeBinaryFromReader(message: MedicationKnowledgeStatusCode, reader: jspb.BinaryReader): MedicationKnowledgeStatusCode;
}

export namespace MedicationKnowledgeStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class MedicationRequestIntentCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequestIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequestIntentCode): MedicationRequestIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequestIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequestIntentCode;
  static deserializeBinaryFromReader(message: MedicationRequestIntentCode, reader: jspb.BinaryReader): MedicationRequestIntentCode;
}

export namespace MedicationRequestIntentCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    ORDER: 3;
    ORIGINAL_ORDER: 4;
    REFLEX_ORDER: 5;
    FILLER_ORDER: 6;
    INSTANCE_ORDER: 7;
    OPTION: 8;
  }

  export const Value: ValueMap;
}

export class MedicationStatementStatusCodes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatementStatusCodes.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatementStatusCodes): MedicationStatementStatusCodes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatementStatusCodes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatementStatusCodes;
  static deserializeBinaryFromReader(message: MedicationStatementStatusCodes, reader: jspb.BinaryReader): MedicationStatementStatusCodes;
}

export namespace MedicationStatementStatusCodes {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    INTENDED: 4;
    STOPPED: 5;
    ON_HOLD: 6;
    UNKNOWN: 7;
    NOT_TAKEN: 8;
  }

  export const Value: ValueMap;
}

export class MedicationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatusCode): MedicationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatusCode;
  static deserializeBinaryFromReader(message: MedicationStatusCode, reader: jspb.BinaryReader): MedicationStatusCode;
}

export namespace MedicationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class MedicationrequestStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationrequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationrequestStatusCode): MedicationrequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationrequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationrequestStatusCode;
  static deserializeBinaryFromReader(message: MedicationrequestStatusCode, reader: jspb.BinaryReader): MedicationrequestStatusCode;
}

export namespace MedicationrequestStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    ON_HOLD: 2;
    CANCELLED: 3;
    COMPLETED: 4;
    ENTERED_IN_ERROR: 5;
    STOPPED: 6;
    DRAFT: 7;
    UNKNOWN: 8;
  }

  export const Value: ValueMap;
}

export class MessageSignificanceCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageSignificanceCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageSignificanceCategoryCode): MessageSignificanceCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageSignificanceCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageSignificanceCategoryCode;
  static deserializeBinaryFromReader(message: MessageSignificanceCategoryCode, reader: jspb.BinaryReader): MessageSignificanceCategoryCode;
}

export namespace MessageSignificanceCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONSEQUENCE: 1;
    CURRENCY: 2;
    NOTIFICATION: 3;
  }

  export const Value: ValueMap;
}

export class MessageheaderResponseRequestCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageheaderResponseRequestCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageheaderResponseRequestCode): MessageheaderResponseRequestCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageheaderResponseRequestCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageheaderResponseRequestCode;
  static deserializeBinaryFromReader(message: MessageheaderResponseRequestCode, reader: jspb.BinaryReader): MessageheaderResponseRequestCode;
}

export namespace MessageheaderResponseRequestCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALWAYS: 1;
    ON_ERROR: 2;
    NEVER: 3;
    ON_SUCCESS: 4;
  }

  export const Value: ValueMap;
}

export class NameUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: NameUseCode): NameUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameUseCode;
  static deserializeBinaryFromReader(message: NameUseCode, reader: jspb.BinaryReader): NameUseCode;
}

export namespace NameUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    USUAL: 1;
    OFFICIAL: 2;
    TEMP: 3;
    NICKNAME: 4;
    ANONYMOUS: 5;
    OLD: 6;
    MAIDEN: 7;
  }

  export const Value: ValueMap;
}

export class NamingSystemIdentifierTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamingSystemIdentifierTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NamingSystemIdentifierTypeCode): NamingSystemIdentifierTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamingSystemIdentifierTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamingSystemIdentifierTypeCode;
  static deserializeBinaryFromReader(message: NamingSystemIdentifierTypeCode, reader: jspb.BinaryReader): NamingSystemIdentifierTypeCode;
}

export namespace NamingSystemIdentifierTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OID: 1;
    UUID: 2;
    URI: 3;
    OTHER: 4;
  }

  export const Value: ValueMap;
}

export class NamingSystemTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamingSystemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NamingSystemTypeCode): NamingSystemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamingSystemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamingSystemTypeCode;
  static deserializeBinaryFromReader(message: NamingSystemTypeCode, reader: jspb.BinaryReader): NamingSystemTypeCode;
}

export namespace NamingSystemTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CODESYSTEM: 1;
    IDENTIFIER: 2;
    ROOT: 3;
  }

  export const Value: ValueMap;
}

export class NarrativeStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NarrativeStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: NarrativeStatusCode): NarrativeStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NarrativeStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NarrativeStatusCode;
  static deserializeBinaryFromReader(message: NarrativeStatusCode, reader: jspb.BinaryReader): NarrativeStatusCode;
}

export namespace NarrativeStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GENERATED: 1;
    EXTENSIONS: 2;
    ADDITIONAL: 3;
    EMPTY: 4;
  }

  export const Value: ValueMap;
}

export class NoteTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NoteTypeCode): NoteTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoteTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteTypeCode;
  static deserializeBinaryFromReader(message: NoteTypeCode, reader: jspb.BinaryReader): NoteTypeCode;
}

export namespace NoteTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DISPLAY: 1;
    PRINT: 2;
    PRINTOPER: 3;
  }

  export const Value: ValueMap;
}

export class ObservationDataTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDataTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDataTypeCode): ObservationDataTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDataTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDataTypeCode;
  static deserializeBinaryFromReader(message: ObservationDataTypeCode, reader: jspb.BinaryReader): ObservationDataTypeCode;
}

export namespace ObservationDataTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    QUANTITY: 1;
    CODEABLE_CONCEPT: 2;
    STRING: 3;
    BOOLEAN: 4;
    INTEGER: 5;
    RANGE: 6;
    RATIO: 7;
    SAMPLED_DATA: 8;
    TIME: 9;
    DATE_TIME: 10;
    PERIOD: 11;
  }

  export const Value: ValueMap;
}

export class ObservationRangeCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationRangeCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationRangeCategoryCode): ObservationRangeCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationRangeCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationRangeCategoryCode;
  static deserializeBinaryFromReader(message: ObservationRangeCategoryCode, reader: jspb.BinaryReader): ObservationRangeCategoryCode;
}

export namespace ObservationRangeCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REFERENCE: 1;
    CRITICAL: 2;
    ABSOLUTE: 3;
  }

  export const Value: ValueMap;
}

export class ObservationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationStatusCode): ObservationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationStatusCode;
  static deserializeBinaryFromReader(message: ObservationStatusCode, reader: jspb.BinaryReader): ObservationStatusCode;
}

export namespace ObservationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REGISTERED: 1;
    PRELIMINARY: 2;
    FINAL: 3;
    AMENDED: 4;
    CORRECTED: 5;
    CANCELLED: 6;
    ENTERED_IN_ERROR: 7;
    UNKNOWN: 8;
  }

  export const Value: ValueMap;
}

export class OperationKindCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: OperationKindCode): OperationKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationKindCode;
  static deserializeBinaryFromReader(message: OperationKindCode, reader: jspb.BinaryReader): OperationKindCode;
}

export namespace OperationKindCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OPERATION: 1;
    QUERY: 2;
  }

  export const Value: ValueMap;
}

export class OperationParameterUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationParameterUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: OperationParameterUseCode): OperationParameterUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationParameterUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationParameterUseCode;
  static deserializeBinaryFromReader(message: OperationParameterUseCode, reader: jspb.BinaryReader): OperationParameterUseCode;
}

export namespace OperationParameterUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN: 1;
    OUT: 2;
  }

  export const Value: ValueMap;
}

export class OrientationTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrientationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: OrientationTypeCode): OrientationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrientationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrientationTypeCode;
  static deserializeBinaryFromReader(message: OrientationTypeCode, reader: jspb.BinaryReader): OrientationTypeCode;
}

export namespace OrientationTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SENSE: 1;
    ANTISENSE: 2;
  }

  export const Value: ValueMap;
}

export class ParticipantRequiredCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipantRequiredCode.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipantRequiredCode): ParticipantRequiredCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipantRequiredCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipantRequiredCode;
  static deserializeBinaryFromReader(message: ParticipantRequiredCode, reader: jspb.BinaryReader): ParticipantRequiredCode;
}

export namespace ParticipantRequiredCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUIRED: 1;
    OPTIONAL: 2;
    INFORMATION_ONLY: 3;
  }

  export const Value: ValueMap;
}

export class ParticipationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipationStatusCode): ParticipationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipationStatusCode;
  static deserializeBinaryFromReader(message: ParticipationStatusCode, reader: jspb.BinaryReader): ParticipationStatusCode;
}

export namespace ParticipationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACCEPTED: 1;
    DECLINED: 2;
    TENTATIVE: 3;
    NEEDS_ACTION: 4;
  }

  export const Value: ValueMap;
}

export class PropertyRepresentationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyRepresentationCode.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyRepresentationCode): PropertyRepresentationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyRepresentationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyRepresentationCode;
  static deserializeBinaryFromReader(message: PropertyRepresentationCode, reader: jspb.BinaryReader): PropertyRepresentationCode;
}

export namespace PropertyRepresentationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    XML_ATTR: 1;
    XML_TEXT: 2;
    TYPE_ATTR: 3;
    CDA_TEXT: 4;
    XHTML: 5;
  }

  export const Value: ValueMap;
}

export class PropertyTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyTypeCode): PropertyTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyTypeCode;
  static deserializeBinaryFromReader(message: PropertyTypeCode, reader: jspb.BinaryReader): PropertyTypeCode;
}

export namespace PropertyTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CODE: 1;
    CODING: 2;
    STRING: 3;
    INTEGER: 4;
    BOOLEAN: 5;
    DATE_TIME: 6;
    DECIMAL: 7;
  }

  export const Value: ValueMap;
}

export class ProvenanceEntityRoleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvenanceEntityRoleCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProvenanceEntityRoleCode): ProvenanceEntityRoleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProvenanceEntityRoleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvenanceEntityRoleCode;
  static deserializeBinaryFromReader(message: ProvenanceEntityRoleCode, reader: jspb.BinaryReader): ProvenanceEntityRoleCode;
}

export namespace ProvenanceEntityRoleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DERIVATION: 1;
    REVISION: 2;
    QUOTATION: 3;
    SOURCE: 4;
    REMOVAL: 5;
  }

  export const Value: ValueMap;
}

export class PublicationStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: PublicationStatusCode): PublicationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicationStatusCode;
  static deserializeBinaryFromReader(message: PublicationStatusCode, reader: jspb.BinaryReader): PublicationStatusCode;
}

export namespace PublicationStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    RETIRED: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class QualityTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QualityTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QualityTypeCode): QualityTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QualityTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QualityTypeCode;
  static deserializeBinaryFromReader(message: QualityTypeCode, reader: jspb.BinaryReader): QualityTypeCode;
}

export namespace QualityTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INDEL: 1;
    SNP: 2;
    UNKNOWN: 3;
  }

  export const Value: ValueMap;
}

export class QuantityComparatorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityComparatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityComparatorCode): QuantityComparatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityComparatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityComparatorCode;
  static deserializeBinaryFromReader(message: QuantityComparatorCode, reader: jspb.BinaryReader): QuantityComparatorCode;
}

export namespace QuantityComparatorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LESS_THAN: 1;
    LESS_THAN_OR_EQUAL_TO: 2;
    GREATER_THAN_OR_EQUAL_TO: 3;
    GREATER_THAN: 4;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemOperatorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemOperatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemOperatorCode): QuestionnaireItemOperatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemOperatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemOperatorCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemOperatorCode, reader: jspb.BinaryReader): QuestionnaireItemOperatorCode;
}

export namespace QuestionnaireItemOperatorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EXISTS: 1;
    EQUALS: 2;
    NOT_EQUAL_TO: 3;
    GREATER_THAN: 4;
    LESS_THAN: 5;
    GREATER_THAN_OR_EQUAL_TO: 6;
    LESS_THAN_OR_EQUAL_TO: 7;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemTypeCode): QuestionnaireItemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemTypeCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemTypeCode, reader: jspb.BinaryReader): QuestionnaireItemTypeCode;
}

export namespace QuestionnaireItemTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GROUP: 1;
    DISPLAY: 2;
    QUESTION: 3;
    BOOLEAN: 4;
    DECIMAL: 5;
    INTEGER: 6;
    DATE: 7;
    DATE_TIME: 8;
    TIME: 9;
    STRING: 10;
    TEXT: 11;
    URL: 12;
    CHOICE: 13;
    OPEN_CHOICE: 14;
    ATTACHMENT: 15;
    REFERENCE: 16;
    QUANTITY: 17;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemUsageModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemUsageModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemUsageModeCode): QuestionnaireItemUsageModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemUsageModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemUsageModeCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemUsageModeCode, reader: jspb.BinaryReader): QuestionnaireItemUsageModeCode;
}

export namespace QuestionnaireItemUsageModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CAPTURE_DISPLAY: 1;
    CAPTURE: 2;
    DISPLAY: 3;
    DISPLAY_NON_EMPTY: 4;
    CAPTURE_DISPLAY_NON_EMPTY: 5;
  }

  export const Value: ValueMap;
}

export class QuestionnaireResponseStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseStatusCode): QuestionnaireResponseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseStatusCode;
  static deserializeBinaryFromReader(message: QuestionnaireResponseStatusCode, reader: jspb.BinaryReader): QuestionnaireResponseStatusCode;
}

export namespace QuestionnaireResponseStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    COMPLETED: 2;
    AMENDED: 3;
    ENTERED_IN_ERROR: 4;
    STOPPED: 5;
  }

  export const Value: ValueMap;
}

export class ReferenceHandlingPolicyCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceHandlingPolicyCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceHandlingPolicyCode): ReferenceHandlingPolicyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceHandlingPolicyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceHandlingPolicyCode;
  static deserializeBinaryFromReader(message: ReferenceHandlingPolicyCode, reader: jspb.BinaryReader): ReferenceHandlingPolicyCode;
}

export namespace ReferenceHandlingPolicyCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LITERAL: 1;
    LOGICAL: 2;
    RESOLVES: 3;
    ENFORCED: 4;
    LOCAL: 5;
  }

  export const Value: ValueMap;
}

export class ReferenceVersionRulesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceVersionRulesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceVersionRulesCode): ReferenceVersionRulesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceVersionRulesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceVersionRulesCode;
  static deserializeBinaryFromReader(message: ReferenceVersionRulesCode, reader: jspb.BinaryReader): ReferenceVersionRulesCode;
}

export namespace ReferenceVersionRulesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EITHER: 1;
    INDEPENDENT: 2;
    SPECIFIC: 3;
  }

  export const Value: ValueMap;
}

export class RelatedArtifactTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedArtifactTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedArtifactTypeCode): RelatedArtifactTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedArtifactTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedArtifactTypeCode;
  static deserializeBinaryFromReader(message: RelatedArtifactTypeCode, reader: jspb.BinaryReader): RelatedArtifactTypeCode;
}

export namespace RelatedArtifactTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DOCUMENTATION: 1;
    JUSTIFICATION: 2;
    CITATION: 3;
    PREDECESSOR: 4;
    SUCCESSOR: 5;
    DERIVED_FROM: 6;
    DEPENDS_ON: 7;
    COMPOSED_OF: 8;
  }

  export const Value: ValueMap;
}

export class RepositoryTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryTypeCode): RepositoryTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepositoryTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryTypeCode;
  static deserializeBinaryFromReader(message: RepositoryTypeCode, reader: jspb.BinaryReader): RepositoryTypeCode;
}

export namespace RepositoryTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DIRECTLINK: 1;
    OPENAPI: 2;
    LOGIN: 3;
    OAUTH: 4;
    OTHER: 5;
  }

  export const Value: ValueMap;
}

export class RequestIntentCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestIntentCode): RequestIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestIntentCode;
  static deserializeBinaryFromReader(message: RequestIntentCode, reader: jspb.BinaryReader): RequestIntentCode;
}

export namespace RequestIntentCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    DIRECTIVE: 3;
    ORDER: 4;
    ORIGINAL_ORDER: 5;
    REFLEX_ORDER: 6;
    FILLER_ORDER: 7;
    INSTANCE_ORDER: 8;
    OPTION: 9;
  }

  export const Value: ValueMap;
}

export class RequestPriorityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPriorityCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPriorityCode): RequestPriorityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPriorityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPriorityCode;
  static deserializeBinaryFromReader(message: RequestPriorityCode, reader: jspb.BinaryReader): RequestPriorityCode;
}

export namespace RequestPriorityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ROUTINE: 1;
    URGENT: 2;
    ASAP: 3;
    STAT: 4;
  }

  export const Value: ValueMap;
}

export class RequestResourceTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestResourceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestResourceTypeCode): RequestResourceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestResourceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestResourceTypeCode;
  static deserializeBinaryFromReader(message: RequestResourceTypeCode, reader: jspb.BinaryReader): RequestResourceTypeCode;
}

export namespace RequestResourceTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    APPOINTMENT: 1;
    APPOINTMENT_RESPONSE: 2;
    CARE_PLAN: 3;
    CLAIM: 4;
    COMMUNICATION_REQUEST: 5;
    CONTRACT: 6;
    DEVICE_REQUEST: 7;
    ENROLLMENT_REQUEST: 8;
    IMMUNIZATION_RECOMMENDATION: 9;
    MEDICATION_REQUEST: 10;
    NUTRITION_ORDER: 11;
    SERVICE_REQUEST: 12;
    SUPPLY_REQUEST: 13;
    TASK: 14;
    VISION_PRESCRIPTION: 15;
  }

  export const Value: ValueMap;
}

export class RequestStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStatusCode): RequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatusCode;
  static deserializeBinaryFromReader(message: RequestStatusCode, reader: jspb.BinaryReader): RequestStatusCode;
}

export namespace RequestStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    ON_HOLD: 3;
    REVOKED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class ResearchElementTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchElementTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchElementTypeCode): ResearchElementTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchElementTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchElementTypeCode;
  static deserializeBinaryFromReader(message: ResearchElementTypeCode, reader: jspb.BinaryReader): ResearchElementTypeCode;
}

export namespace ResearchElementTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    POPULATION: 1;
    EXPOSURE: 2;
    OUTCOME: 3;
  }

  export const Value: ValueMap;
}

export class ResearchStudyStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchStudyStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchStudyStatusCode): ResearchStudyStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchStudyStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchStudyStatusCode;
  static deserializeBinaryFromReader(message: ResearchStudyStatusCode, reader: jspb.BinaryReader): ResearchStudyStatusCode;
}

export namespace ResearchStudyStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    ADMINISTRATIVELY_COMPLETED: 2;
    APPROVED: 3;
    CLOSED_TO_ACCRUAL: 4;
    CLOSED_TO_ACCRUAL_AND_INTERVENTION: 5;
    COMPLETED: 6;
    DISAPPROVED: 7;
    IN_REVIEW: 8;
    TEMPORARILY_CLOSED_TO_ACCRUAL: 9;
    TEMPORARILY_CLOSED_TO_ACCRUAL_AND_INTERVENTION: 10;
    WITHDRAWN: 11;
  }

  export const Value: ValueMap;
}

export class ResearchSubjectStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchSubjectStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchSubjectStatusCode): ResearchSubjectStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchSubjectStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchSubjectStatusCode;
  static deserializeBinaryFromReader(message: ResearchSubjectStatusCode, reader: jspb.BinaryReader): ResearchSubjectStatusCode;
}

export namespace ResearchSubjectStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CANDIDATE: 1;
    ELIGIBLE: 2;
    FOLLOW_UP: 3;
    INELIGIBLE: 4;
    NOT_REGISTERED: 5;
    OFF_STUDY: 6;
    ON_STUDY: 7;
    ON_STUDY_INTERVENTION: 8;
    ON_STUDY_OBSERVATION: 9;
    PENDING_ON_STUDY: 10;
    POTENTIAL_CANDIDATE: 11;
    SCREENING: 12;
    WITHDRAWN: 13;
  }

  export const Value: ValueMap;
}

export class ResourceSecurityCategoryCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceSecurityCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceSecurityCategoryCode): ResourceSecurityCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceSecurityCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceSecurityCategoryCode;
  static deserializeBinaryFromReader(message: ResourceSecurityCategoryCode, reader: jspb.BinaryReader): ResourceSecurityCategoryCode;
}

export namespace ResourceSecurityCategoryCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ANONYMOUS: 1;
    BUSINESS: 2;
    INDIVIDUAL: 3;
    PATIENT: 4;
    NOT_CLASSIFIED: 5;
  }

  export const Value: ValueMap;
}

export class ResourceTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceTypeCode): ResourceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceTypeCode;
  static deserializeBinaryFromReader(message: ResourceTypeCode, reader: jspb.BinaryReader): ResourceTypeCode;
}

export namespace ResourceTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACCOUNT: 1;
    ACTIVITY_DEFINITION: 2;
    ADVERSE_EVENT: 3;
    ALLERGY_INTOLERANCE: 4;
    APPOINTMENT: 5;
    APPOINTMENT_RESPONSE: 6;
    AUDIT_EVENT: 7;
    BASIC: 8;
    BINARY: 9;
    BIOLOGICALLY_DERIVED_PRODUCT: 10;
    BODY_STRUCTURE: 11;
    BUNDLE: 12;
    CAPABILITY_STATEMENT: 13;
    CARE_PLAN: 14;
    CARE_TEAM: 15;
    CATALOG_ENTRY: 16;
    CHARGE_ITEM: 17;
    CHARGE_ITEM_DEFINITION: 18;
    CLAIM: 19;
    CLAIM_RESPONSE: 20;
    CLINICAL_IMPRESSION: 21;
    CODE_SYSTEM: 22;
    COMMUNICATION: 23;
    COMMUNICATION_REQUEST: 24;
    COMPARTMENT_DEFINITION: 25;
    COMPOSITION: 26;
    CONCEPT_MAP: 27;
    CONDITION: 28;
    CONSENT: 29;
    CONTRACT: 30;
    COVERAGE: 31;
    COVERAGE_ELIGIBILITY_REQUEST: 32;
    COVERAGE_ELIGIBILITY_RESPONSE: 33;
    DETECTED_ISSUE: 34;
    DEVICE: 35;
    DEVICE_DEFINITION: 36;
    DEVICE_METRIC: 37;
    DEVICE_REQUEST: 38;
    DEVICE_USE_STATEMENT: 39;
    DIAGNOSTIC_REPORT: 40;
    DOCUMENT_MANIFEST: 41;
    DOCUMENT_REFERENCE: 42;
    DOMAIN_RESOURCE: 43;
    EFFECT_EVIDENCE_SYNTHESIS: 44;
    ENCOUNTER: 45;
    ENDPOINT: 46;
    ENROLLMENT_REQUEST: 47;
    ENROLLMENT_RESPONSE: 48;
    EPISODE_OF_CARE: 49;
    EVENT_DEFINITION: 50;
    EVIDENCE: 51;
    EVIDENCE_VARIABLE: 52;
    EXAMPLE_SCENARIO: 53;
    EXPLANATION_OF_BENEFIT: 54;
    FAMILY_MEMBER_HISTORY: 55;
    FLAG: 56;
    GOAL: 57;
    GRAPH_DEFINITION: 58;
    GROUP: 59;
    GUIDANCE_RESPONSE: 60;
    HEALTHCARE_SERVICE: 61;
    IMAGING_STUDY: 62;
    IMMUNIZATION: 63;
    IMMUNIZATION_EVALUATION: 64;
    IMMUNIZATION_RECOMMENDATION: 65;
    IMPLEMENTATION_GUIDE: 66;
    INSURANCE_PLAN: 67;
    INVOICE: 68;
    LIBRARY: 69;
    LINKAGE: 70;
    LIST: 71;
    LOCATION: 72;
    MEASURE: 73;
    MEASURE_REPORT: 74;
    MEDIA: 75;
    MEDICATION: 76;
    MEDICATION_ADMINISTRATION: 77;
    MEDICATION_DISPENSE: 78;
    MEDICATION_KNOWLEDGE: 79;
    MEDICATION_REQUEST: 80;
    MEDICATION_STATEMENT: 81;
    MEDICINAL_PRODUCT: 82;
    MEDICINAL_PRODUCT_AUTHORIZATION: 83;
    MEDICINAL_PRODUCT_CONTRAINDICATION: 84;
    MEDICINAL_PRODUCT_INDICATION: 85;
    MEDICINAL_PRODUCT_INGREDIENT: 86;
    MEDICINAL_PRODUCT_INTERACTION: 87;
    MEDICINAL_PRODUCT_MANUFACTURED: 88;
    MEDICINAL_PRODUCT_PACKAGED: 89;
    MEDICINAL_PRODUCT_PHARMACEUTICAL: 90;
    MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT: 91;
    MESSAGE_DEFINITION: 92;
    MESSAGE_HEADER: 93;
    MOLECULAR_SEQUENCE: 94;
    NAMING_SYSTEM: 95;
    NUTRITION_ORDER: 96;
    OBSERVATION: 97;
    OBSERVATION_DEFINITION: 98;
    OPERATION_DEFINITION: 99;
    OPERATION_OUTCOME: 100;
    ORGANIZATION: 101;
    ORGANIZATION_AFFILIATION: 102;
    PARAMETERS: 103;
    PATIENT: 104;
    PAYMENT_NOTICE: 105;
    PAYMENT_RECONCILIATION: 106;
    PERSON: 107;
    PLAN_DEFINITION: 108;
    PRACTITIONER: 109;
    PRACTITIONER_ROLE: 110;
    PROCEDURE: 111;
    PROVENANCE: 112;
    QUESTIONNAIRE: 113;
    QUESTIONNAIRE_RESPONSE: 114;
    RELATED_PERSON: 115;
    REQUEST_GROUP: 116;
    RESEARCH_DEFINITION: 117;
    RESEARCH_ELEMENT_DEFINITION: 118;
    RESEARCH_STUDY: 119;
    RESEARCH_SUBJECT: 120;
    RESOURCE: 121;
    RISK_ASSESSMENT: 122;
    RISK_EVIDENCE_SYNTHESIS: 123;
    SCHEDULE: 124;
    SEARCH_PARAMETER: 125;
    SERVICE_REQUEST: 126;
    SLOT: 127;
    SPECIMEN: 128;
    SPECIMEN_DEFINITION: 129;
    STRUCTURE_DEFINITION: 130;
    STRUCTURE_MAP: 131;
    SUBSCRIPTION: 132;
    SUBSTANCE: 133;
    SUBSTANCE_NUCLEIC_ACID: 134;
    SUBSTANCE_POLYMER: 135;
    SUBSTANCE_PROTEIN: 136;
    SUBSTANCE_REFERENCE_INFORMATION: 137;
    SUBSTANCE_SOURCE_MATERIAL: 138;
    SUBSTANCE_SPECIFICATION: 139;
    SUPPLY_DELIVERY: 140;
    SUPPLY_REQUEST: 141;
    TASK: 142;
    TERMINOLOGY_CAPABILITIES: 143;
    TEST_REPORT: 144;
    TEST_SCRIPT: 145;
    VALUE_SET: 146;
    VERIFICATION_RESULT: 147;
    VISION_PRESCRIPTION: 148;
  }

  export const Value: ValueMap;
}

export class ResourceVersionPolicyCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceVersionPolicyCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceVersionPolicyCode): ResourceVersionPolicyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceVersionPolicyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceVersionPolicyCode;
  static deserializeBinaryFromReader(message: ResourceVersionPolicyCode, reader: jspb.BinaryReader): ResourceVersionPolicyCode;
}

export namespace ResourceVersionPolicyCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NO_VERSION: 1;
    VERSIONED: 2;
    VERSIONED_UPDATE: 3;
  }

  export const Value: ValueMap;
}

export class ResponseTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTypeCode): ResponseTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTypeCode;
  static deserializeBinaryFromReader(message: ResponseTypeCode, reader: jspb.BinaryReader): ResponseTypeCode;
}

export namespace ResponseTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OK: 1;
    TRANSIENT_ERROR: 2;
    FATAL_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class RestfulCapabilityModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestfulCapabilityModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RestfulCapabilityModeCode): RestfulCapabilityModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestfulCapabilityModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestfulCapabilityModeCode;
  static deserializeBinaryFromReader(message: RestfulCapabilityModeCode, reader: jspb.BinaryReader): RestfulCapabilityModeCode;
}

export namespace RestfulCapabilityModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLIENT: 1;
    SERVER: 2;
  }

  export const Value: ValueMap;
}

export class SPDXLicenseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SPDXLicenseCode.AsObject;
  static toObject(includeInstance: boolean, msg: SPDXLicenseCode): SPDXLicenseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SPDXLicenseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SPDXLicenseCode;
  static deserializeBinaryFromReader(message: SPDXLicenseCode, reader: jspb.BinaryReader): SPDXLicenseCode;
}

export namespace SPDXLicenseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_OPEN_SOURCE: 1;
    BSD_ZERO_CLAUSE_LICENSE: 2;
    AAL: 3;
    ABSTYLES: 4;
    ADOBE_2006: 5;
    ADOBE_GLYPH: 6;
    ADSL: 7;
    AFL_1_1: 8;
    AFL_1_2: 9;
    AFL_2_0: 10;
    AFL_2_1: 11;
    AFL_3_0: 12;
    AFMPARSE: 13;
    AGPL_1_0_ONLY: 14;
    AGPL_1_0_OR_LATER: 15;
    AGPL_3_0_ONLY: 16;
    AGPL_3_0_OR_LATER: 17;
    ALADDIN: 18;
    AMDPLPA: 19;
    AML: 20;
    AMPAS: 21;
    ANTLR_PD: 22;
    APACHE_1_0: 23;
    APACHE_1_1: 24;
    APACHE_2_0: 25;
    APAFML: 26;
    APL_1_0: 27;
    APSL_1_0: 28;
    APSL_1_1: 29;
    APSL_1_2: 30;
    APSL_2_0: 31;
    ARTISTIC_1_0_CL8: 32;
    ARTISTIC_1_0_PERL: 33;
    ARTISTIC_1_0: 34;
    ARTISTIC_2_0: 35;
    BAHYPH: 36;
    BARR: 37;
    BEERWARE: 38;
    BIT_TORRENT_1_0: 39;
    BIT_TORRENT_1_1: 40;
    BORCEUX: 41;
    BSD_1_CLAUSE: 42;
    BSD_2_CLAUSE_FREE_BSD: 43;
    BSD_2_CLAUSE_NET_BSD: 44;
    BSD_2_CLAUSE_PATENT: 45;
    BSD_2_CLAUSE: 46;
    BSD_3_CLAUSE_ATTRIBUTION: 47;
    BSD_3_CLAUSE_CLEAR: 48;
    BSD_3_CLAUSE_LBNL: 49;
    BSD_3_CLAUSE_NO_NUCLEAR_LICENSE_2014: 50;
    BSD_3_CLAUSE_NO_NUCLEAR_LICENSE: 51;
    BSD_3_CLAUSE_NO_NUCLEAR_WARRANTY: 52;
    BSD_3_CLAUSE: 53;
    BSD_4_CLAUSE_UC: 54;
    BSD_4_CLAUSE: 55;
    BSD_PROTECTION: 56;
    BSD_SOURCE_CODE: 57;
    BSL_1_0: 58;
    BZIP2_1_0_5: 59;
    BZIP2_1_0_6: 60;
    CALDERA: 61;
    CATOSL_1_1: 62;
    CC_BY_1_0: 63;
    CC_BY_2_0: 64;
    CC_BY_2_5: 65;
    CC_BY_3_0: 66;
    CC_BY_4_0: 67;
    CC_BY_NC_1_0: 68;
    CC_BY_NC_2_0: 69;
    CC_BY_NC_2_5: 70;
    CC_BY_NC_3_0: 71;
    CC_BY_NC_4_0: 72;
    CC_BY_NC_ND_1_0: 73;
    CC_BY_NC_ND_2_0: 74;
    CC_BY_NC_ND_2_5: 75;
    CC_BY_NC_ND_3_0: 76;
    CC_BY_NC_ND_4_0: 77;
    CC_BY_NC_SA_1_0: 78;
    CC_BY_NC_SA_2_0: 79;
    CC_BY_NC_SA_2_5: 80;
    CC_BY_NC_SA_3_0: 81;
    CC_BY_NC_SA_4_0: 82;
    CC_BY_ND_1_0: 83;
    CC_BY_ND_2_0: 84;
    CC_BY_ND_2_5: 85;
    CC_BY_ND_3_0: 86;
    CC_BY_ND_4_0: 87;
    CC_BY_SA_1_0: 88;
    CC_BY_SA_2_0: 89;
    CC_BY_SA_2_5: 90;
    CC_BY_SA_3_0: 91;
    CC_BY_SA_4_0: 92;
    CC0_1_0: 93;
    CDDL_1_0: 94;
    CDDL_1_1: 95;
    CDLA_PERMISSIVE_1_0: 96;
    CDLA_SHARING_1_0: 97;
    CECILL_1_0: 98;
    CECILL_1_1: 99;
    CECILL_2_0: 100;
    CECILL_2_1: 101;
    CECILL_B: 102;
    CECILL_C: 103;
    CL_ARTISTIC: 104;
    CNRI_JYTHON: 105;
    CNRI_PYTHON_GPL_COMPATIBLE: 106;
    CNRI_PYTHON: 107;
    CONDOR_1_1: 108;
    CPAL_1_0: 109;
    CPL_1_0: 110;
    CPOL_1_02: 111;
    CROSSWORD: 112;
    CRYSTAL_STACKER: 113;
    CUA_OPL_1_0: 114;
    CUBE: 115;
    CURL: 116;
    D_FSL_1_0: 117;
    DIFFMARK: 118;
    DOC: 119;
    DOTSEQN: 120;
    DSDP: 121;
    DVIPDFM: 122;
    ECL_1_0: 123;
    ECL_2_0: 124;
    EFL_1_0: 125;
    EFL_2_0: 126;
    E_GENIX: 127;
    ENTESSA: 128;
    EPL_1_0: 129;
    EPL_2_0: 130;
    ERL_PL_1_1: 131;
    EU_DATAGRID: 132;
    EUPL_1_0: 133;
    EUPL_1_1: 134;
    EUPL_1_2: 135;
    EUROSYM: 136;
    FAIR: 137;
    FRAMEWORX_1_0: 138;
    FREE_IMAGE: 139;
    FSFAP: 140;
    FSFUL: 141;
    FSFULLR: 142;
    FTL: 143;
    GFDL_1_1_ONLY: 144;
    GFDL_1_1_OR_LATER: 145;
    GFDL_1_2_ONLY: 146;
    GFDL_1_2_OR_LATER: 147;
    GFDL_1_3_ONLY: 148;
    GFDL_1_3_OR_LATER: 149;
    GIFTWARE: 150;
    GL2PS: 151;
    GLIDE: 152;
    GLULXE: 153;
    GNUPLOT: 154;
    GPL_1_0_ONLY: 155;
    GPL_1_0_OR_LATER: 156;
    GPL_2_0_ONLY: 157;
    GPL_2_0_OR_LATER: 158;
    GPL_3_0_ONLY: 159;
    GPL_3_0_OR_LATER: 160;
    G_SOAP_1_3B: 161;
    HASKELL_REPORT: 162;
    HPND: 163;
    IBM_PIBS: 164;
    ICU: 165;
    IJG: 166;
    IMAGE_MAGICK: 167;
    I_MATIX: 168;
    IMLIB2: 169;
    INFO_ZIP: 170;
    INTEL_ACPI: 171;
    INTEL: 172;
    INTERBASE_1_0: 173;
    IPA: 174;
    IPL_1_0: 175;
    ISC: 176;
    JAS_PER_2_0: 177;
    JSON: 178;
    LAL_1_2: 179;
    LAL_1_3: 180;
    LATEX2E: 181;
    LEPTONICA: 182;
    LGPL_2_0_ONLY: 183;
    LGPL_2_0_OR_LATER: 184;
    LGPL_2_1_ONLY: 185;
    LGPL_2_1_OR_LATER: 186;
    LGPL_3_0_ONLY: 187;
    LGPL_3_0_OR_LATER: 188;
    LGPLLR: 189;
    LIBPNG: 190;
    LIBTIFF: 191;
    LI_LI_Q_P_1_1: 192;
    LI_LI_Q_R_1_1: 193;
    LI_LI_Q_RPLUS_1_1: 194;
    LINUX_OPEN_IB: 195;
    LPL_1_0: 196;
    LPL_1_02: 197;
    LPPL_1_0: 198;
    LPPL_1_1: 199;
    LPPL_1_2: 200;
    LPPL_1_3A: 201;
    LPPL_1_3C: 202;
    MAKE_INDEX: 203;
    MIR_OS: 204;
    MIT_0: 205;
    MIT_ADVERTISING: 206;
    MIT_CMU: 207;
    MIT_ENNA: 208;
    MIT_FEH: 209;
    MIT: 210;
    MITNFA: 211;
    MOTOSOTO: 212;
    MPICH2: 213;
    MPL_1_0: 214;
    MPL_1_1: 215;
    MPL_2_0_NO_COPYLEFT_EXCEPTION: 216;
    MPL_2_0: 217;
    MS_PL: 218;
    MS_RL: 219;
    MTLL: 220;
    MULTICS: 221;
    MUP: 222;
    NASA_1_3: 223;
    NAUMEN: 224;
    NBPL_1_0: 225;
    NCSA: 226;
    NET_SNMP: 227;
    NET_CDF: 228;
    NEWSLETR: 229;
    NGPL: 230;
    NLOD_1_0: 231;
    NLPL: 232;
    NOKIA: 233;
    NOSL: 234;
    NOWEB: 235;
    NPL_1_0: 236;
    NPL_1_1: 237;
    NPOSL_3_0: 238;
    NRL: 239;
    NTP: 240;
    OCCT_PL: 241;
    OCLC_2_0: 242;
    O_DB_L_1_0: 243;
    OFL_1_0: 244;
    OFL_1_1: 245;
    OGTSL: 246;
    OLDAP_1_1: 247;
    OLDAP_1_2: 248;
    OLDAP_1_3: 249;
    OLDAP_1_4: 250;
    OLDAP_2_0_1: 251;
    OLDAP_2_0: 252;
    OLDAP_2_1: 253;
    OLDAP_2_2_1: 254;
    OLDAP_2_2_2: 255;
    OLDAP_2_2: 256;
    OLDAP_2_3: 257;
    OLDAP_2_4: 258;
    OLDAP_2_5: 259;
    OLDAP_2_6: 260;
    OLDAP_2_7: 261;
    OLDAP_2_8: 262;
    OML: 263;
    OPEN_SSL: 264;
    OPL_1_0: 265;
    OSET_PL_2_1: 266;
    OSL_1_0: 267;
    OSL_1_1: 268;
    OSL_2_0: 269;
    OSL_2_1: 270;
    OSL_3_0: 271;
    PDDL_1_0: 272;
    PHP_3_0: 273;
    PHP_3_01: 274;
    PLEXUS: 275;
    POSTGRE_SQL: 276;
    PSFRAG: 277;
    PSUTILS: 278;
    PYTHON_2_0: 279;
    QHULL: 280;
    QPL_1_0: 281;
    RDISC: 282;
    R_HE_COS_1_1: 283;
    RPL_1_1: 284;
    RPL_1_5: 285;
    RPSL_1_0: 286;
    RSA_MD: 287;
    RSCPL: 288;
    RUBY: 289;
    SAX_PD: 290;
    SAXPATH: 291;
    SCEA: 292;
    SENDMAIL: 293;
    SGI_B_1_0: 294;
    SGI_B_1_1: 295;
    SGI_B_2_0: 296;
    SIM_PL_2_0: 297;
    SISSL_1_2: 298;
    SISSL: 299;
    SLEEPYCAT: 300;
    SMLNJ: 301;
    SMPPL: 302;
    SNIA: 303;
    SPENCER_86: 304;
    SPENCER_94: 305;
    SPENCER_99: 306;
    SPL_1_0: 307;
    SUGAR_CRM_1_1_3: 308;
    SWL: 309;
    TCL: 310;
    TCP_WRAPPERS: 311;
    T_MATE: 312;
    TORQUE_1_1: 313;
    TOSL: 314;
    UNICODE_DFS_2015: 315;
    UNICODE_DFS_2016: 316;
    UNICODE_TOU: 317;
    UNLICENSE: 318;
    UPL_1_0: 319;
    VIM: 320;
    VOSTROM: 321;
    VSL_1_0: 322;
    W3C_19980720: 323;
    W3C_20150513: 324;
    W3C: 325;
    WATCOM_1_0: 326;
    WSUIPA: 327;
    WTFPL: 328;
    X11: 329;
    XEROX: 330;
    X_FREE86_1_1: 331;
    XINETD: 332;
    XNET: 333;
    XPP: 334;
    X_SKAT: 335;
    YPL_1_0: 336;
    YPL_1_1: 337;
    ZED: 338;
    ZEND_2_0: 339;
    ZIMBRA_1_3: 340;
    ZIMBRA_1_4: 341;
    ZLIB_ACKNOWLEDGEMENT: 342;
    ZLIB: 343;
    ZPL_1_1: 344;
    ZPL_2_0: 345;
    ZPL_2_1: 346;
  }

  export const Value: ValueMap;
}

export class SearchComparatorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchComparatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchComparatorCode): SearchComparatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchComparatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchComparatorCode;
  static deserializeBinaryFromReader(message: SearchComparatorCode, reader: jspb.BinaryReader): SearchComparatorCode;
}

export namespace SearchComparatorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQ: 1;
    NE: 2;
    GT: 3;
    LT: 4;
    GE: 5;
    LE: 6;
    SA: 7;
    EB: 8;
    AP: 9;
  }

  export const Value: ValueMap;
}

export class SearchEntryModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEntryModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEntryModeCode): SearchEntryModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchEntryModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEntryModeCode;
  static deserializeBinaryFromReader(message: SearchEntryModeCode, reader: jspb.BinaryReader): SearchEntryModeCode;
}

export namespace SearchEntryModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MATCH: 1;
    INCLUDE: 2;
    OUTCOME: 3;
  }

  export const Value: ValueMap;
}

export class SearchModifierCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchModifierCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchModifierCode): SearchModifierCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchModifierCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchModifierCode;
  static deserializeBinaryFromReader(message: SearchModifierCode, reader: jspb.BinaryReader): SearchModifierCode;
}

export namespace SearchModifierCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MISSING: 1;
    EXACT: 2;
    CONTAINS: 3;
    NOT: 4;
    TEXT: 5;
    IN: 6;
    NOT_IN: 7;
    BELOW: 8;
    ABOVE: 9;
    TYPE: 10;
    IDENTIFIER: 11;
    OF_TYPE: 12;
  }

  export const Value: ValueMap;
}

export class SearchParamTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchParamTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchParamTypeCode): SearchParamTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchParamTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchParamTypeCode;
  static deserializeBinaryFromReader(message: SearchParamTypeCode, reader: jspb.BinaryReader): SearchParamTypeCode;
}

export namespace SearchParamTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NUMBER: 1;
    DATE: 2;
    STRING: 3;
    TOKEN: 4;
    REFERENCE: 5;
    COMPOSITE: 6;
    QUANTITY: 7;
    URI: 8;
    SPECIAL: 9;
  }

  export const Value: ValueMap;
}

export class SequenceTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceTypeCode): SequenceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SequenceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceTypeCode;
  static deserializeBinaryFromReader(message: SequenceTypeCode, reader: jspb.BinaryReader): SequenceTypeCode;
}

export namespace SequenceTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AA: 1;
    DNA: 2;
    RNA: 3;
  }

  export const Value: ValueMap;
}

export class SlicingRulesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlicingRulesCode.AsObject;
  static toObject(includeInstance: boolean, msg: SlicingRulesCode): SlicingRulesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlicingRulesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlicingRulesCode;
  static deserializeBinaryFromReader(message: SlicingRulesCode, reader: jspb.BinaryReader): SlicingRulesCode;
}

export namespace SlicingRulesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLOSED: 1;
    OPEN: 2;
    OPEN_AT_END: 3;
  }

  export const Value: ValueMap;
}

export class SlotStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SlotStatusCode): SlotStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotStatusCode;
  static deserializeBinaryFromReader(message: SlotStatusCode, reader: jspb.BinaryReader): SlotStatusCode;
}

export namespace SlotStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BUSY: 1;
    FREE: 2;
    BUSY_UNAVAILABLE: 3;
    BUSY_TENTATIVE: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class SmartCapabilitiesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SmartCapabilitiesCode.AsObject;
  static toObject(includeInstance: boolean, msg: SmartCapabilitiesCode): SmartCapabilitiesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SmartCapabilitiesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SmartCapabilitiesCode;
  static deserializeBinaryFromReader(message: SmartCapabilitiesCode, reader: jspb.BinaryReader): SmartCapabilitiesCode;
}

export namespace SmartCapabilitiesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LAUNCH_EHR: 1;
    LAUNCH_STANDALONE: 2;
    CLIENT_PUBLIC: 3;
    CLIENT_CONFIDENTIAL_SYMMETRIC: 4;
    SSO_OPENID_CONNECT: 5;
    CONTEXT_PASSTHROUGH_BANNER: 6;
    CONTEXT_PASSTHROUGH_STYLE: 7;
    CONTEXT_EHR_PATIENT: 8;
    CONTEXT_EHR_ENCOUNTER: 9;
    CONTEXT_STANDALONE_PATIENT: 10;
    CONTEXT_STANDALONE_ENCOUNTER: 11;
    PERMISSION_OFFLINE: 12;
    PERMISSION_PATIENT: 13;
    PERMISSION_USER: 14;
  }

  export const Value: ValueMap;
}

export class SortDirectionCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortDirectionCode.AsObject;
  static toObject(includeInstance: boolean, msg: SortDirectionCode): SortDirectionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SortDirectionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortDirectionCode;
  static deserializeBinaryFromReader(message: SortDirectionCode, reader: jspb.BinaryReader): SortDirectionCode;
}

export namespace SortDirectionCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ASCENDING: 1;
    DESCENDING: 2;
  }

  export const Value: ValueMap;
}

export class SpecimenContainedPreferenceCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenContainedPreferenceCode.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenContainedPreferenceCode): SpecimenContainedPreferenceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenContainedPreferenceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenContainedPreferenceCode;
  static deserializeBinaryFromReader(message: SpecimenContainedPreferenceCode, reader: jspb.BinaryReader): SpecimenContainedPreferenceCode;
}

export namespace SpecimenContainedPreferenceCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREFERRED: 1;
    ALTERNATE: 2;
  }

  export const Value: ValueMap;
}

export class SpecimenStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenStatusCode): SpecimenStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenStatusCode;
  static deserializeBinaryFromReader(message: SpecimenStatusCode, reader: jspb.BinaryReader): SpecimenStatusCode;
}

export namespace SpecimenStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AVAILABLE: 1;
    UNAVAILABLE: 2;
    UNSATISFACTORY: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class StandardsStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardsStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: StandardsStatusCode): StandardsStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandardsStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardsStatusCode;
  static deserializeBinaryFromReader(message: StandardsStatusCode, reader: jspb.BinaryReader): StandardsStatusCode;
}

export namespace StandardsStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    NORMATIVE: 2;
    TRIAL_USE: 3;
    INFORMATIVE: 4;
    DEPRECATED: 5;
    EXTERNAL: 6;
  }

  export const Value: ValueMap;
}

export class StatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: StatusCode): StatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusCode;
  static deserializeBinaryFromReader(message: StatusCode, reader: jspb.BinaryReader): StatusCode;
}

export namespace StatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ATTESTED: 1;
    VALIDATED: 2;
    IN_PROCESS: 3;
    REQ_REVALID: 4;
    VAL_FAIL: 5;
    REVAL_FAIL: 6;
  }

  export const Value: ValueMap;
}

export class StrandTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StrandTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StrandTypeCode): StrandTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StrandTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StrandTypeCode;
  static deserializeBinaryFromReader(message: StrandTypeCode, reader: jspb.BinaryReader): StrandTypeCode;
}

export namespace StrandTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    WATSON: 1;
    CRICK: 2;
  }

  export const Value: ValueMap;
}

export class StructureDefinitionKindCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionKindCode): StructureDefinitionKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionKindCode;
  static deserializeBinaryFromReader(message: StructureDefinitionKindCode, reader: jspb.BinaryReader): StructureDefinitionKindCode;
}

export namespace StructureDefinitionKindCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRIMITIVE_TYPE: 1;
    COMPLEX_TYPE: 2;
    RESOURCE: 3;
    LOGICAL: 4;
  }

  export const Value: ValueMap;
}

export class StructureMapContextTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapContextTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapContextTypeCode): StructureMapContextTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapContextTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapContextTypeCode;
  static deserializeBinaryFromReader(message: StructureMapContextTypeCode, reader: jspb.BinaryReader): StructureMapContextTypeCode;
}

export namespace StructureMapContextTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TYPE: 1;
    VARIABLE: 2;
  }

  export const Value: ValueMap;
}

export class StructureMapGroupTypeModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapGroupTypeModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapGroupTypeModeCode): StructureMapGroupTypeModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapGroupTypeModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapGroupTypeModeCode;
  static deserializeBinaryFromReader(message: StructureMapGroupTypeModeCode, reader: jspb.BinaryReader): StructureMapGroupTypeModeCode;
}

export namespace StructureMapGroupTypeModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NONE: 1;
    TYPES: 2;
    TYPE_AND_TYPES: 3;
  }

  export const Value: ValueMap;
}

export class StructureMapInputModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapInputModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapInputModeCode): StructureMapInputModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapInputModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapInputModeCode;
  static deserializeBinaryFromReader(message: StructureMapInputModeCode, reader: jspb.BinaryReader): StructureMapInputModeCode;
}

export namespace StructureMapInputModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    TARGET: 2;
  }

  export const Value: ValueMap;
}

export class StructureMapModelModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapModelModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapModelModeCode): StructureMapModelModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapModelModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapModelModeCode;
  static deserializeBinaryFromReader(message: StructureMapModelModeCode, reader: jspb.BinaryReader): StructureMapModelModeCode;
}

export namespace StructureMapModelModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    QUERIED: 2;
    TARGET: 3;
    PRODUCED: 4;
  }

  export const Value: ValueMap;
}

export class StructureMapSourceListModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapSourceListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapSourceListModeCode): StructureMapSourceListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapSourceListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapSourceListModeCode;
  static deserializeBinaryFromReader(message: StructureMapSourceListModeCode, reader: jspb.BinaryReader): StructureMapSourceListModeCode;
}

export namespace StructureMapSourceListModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FIRST: 1;
    NOT_FIRST: 2;
    LAST: 3;
    NOT_LAST: 4;
    ONLY_ONE: 5;
  }

  export const Value: ValueMap;
}

export class StructureMapTargetListModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapTargetListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapTargetListModeCode): StructureMapTargetListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapTargetListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapTargetListModeCode;
  static deserializeBinaryFromReader(message: StructureMapTargetListModeCode, reader: jspb.BinaryReader): StructureMapTargetListModeCode;
}

export namespace StructureMapTargetListModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FIRST: 1;
    SHARE: 2;
    LAST: 3;
    COLLATE: 4;
  }

  export const Value: ValueMap;
}

export class StructureMapTransformCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapTransformCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapTransformCode): StructureMapTransformCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapTransformCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapTransformCode;
  static deserializeBinaryFromReader(message: StructureMapTransformCode, reader: jspb.BinaryReader): StructureMapTransformCode;
}

export namespace StructureMapTransformCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CREATE: 1;
    COPY: 2;
    TRUNCATE: 3;
    ESCAPE: 4;
    CAST: 5;
    APPEND: 6;
    TRANSLATE: 7;
    REFERENCE: 8;
    DATE_OP: 9;
    UUID: 10;
    POINTER: 11;
    EVALUATE: 12;
    CC: 13;
    C: 14;
    QTY: 15;
    ID: 16;
    CP: 17;
  }

  export const Value: ValueMap;
}

export class SubscriptionChannelTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionChannelTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionChannelTypeCode): SubscriptionChannelTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionChannelTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionChannelTypeCode;
  static deserializeBinaryFromReader(message: SubscriptionChannelTypeCode, reader: jspb.BinaryReader): SubscriptionChannelTypeCode;
}

export namespace SubscriptionChannelTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REST_HOOK: 1;
    WEBSOCKET: 2;
    EMAIL: 3;
    SMS: 4;
    MESSAGE: 5;
  }

  export const Value: ValueMap;
}

export class SubscriptionStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionStatusCode): SubscriptionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionStatusCode;
  static deserializeBinaryFromReader(message: SubscriptionStatusCode, reader: jspb.BinaryReader): SubscriptionStatusCode;
}

export namespace SubscriptionStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUESTED: 1;
    ACTIVE: 2;
    ERROR: 3;
    OFF: 4;
  }

  export const Value: ValueMap;
}

export class SupplyDeliveryStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyDeliveryStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyDeliveryStatusCode): SupplyDeliveryStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyDeliveryStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyDeliveryStatusCode;
  static deserializeBinaryFromReader(message: SupplyDeliveryStatusCode, reader: jspb.BinaryReader): SupplyDeliveryStatusCode;
}

export namespace SupplyDeliveryStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    COMPLETED: 2;
    ABANDONED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class SupplyItemTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyItemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyItemTypeCode): SupplyItemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyItemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyItemTypeCode;
  static deserializeBinaryFromReader(message: SupplyItemTypeCode, reader: jspb.BinaryReader): SupplyItemTypeCode;
}

export namespace SupplyItemTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MEDICATION: 1;
    DEVICE: 2;
  }

  export const Value: ValueMap;
}

export class SupplyRequestStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyRequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyRequestStatusCode): SupplyRequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyRequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyRequestStatusCode;
  static deserializeBinaryFromReader(message: SupplyRequestStatusCode, reader: jspb.BinaryReader): SupplyRequestStatusCode;
}

export namespace SupplyRequestStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    CANCELLED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class TaskIntentCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: TaskIntentCode): TaskIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskIntentCode;
  static deserializeBinaryFromReader(message: TaskIntentCode, reader: jspb.BinaryReader): TaskIntentCode;
}

export namespace TaskIntentCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNKNOWN: 1;
  }

  export const Value: ValueMap;
}

export class TaskStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusCode): TaskStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusCode;
  static deserializeBinaryFromReader(message: TaskStatusCode, reader: jspb.BinaryReader): TaskStatusCode;
}

export namespace TaskStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    REQUESTED: 2;
    RECEIVED: 3;
    ACCEPTED: 4;
    REJECTED: 5;
    READY: 6;
    CANCELLED: 7;
    IN_PROGRESS: 8;
    ON_HOLD: 9;
    FAILED: 10;
    COMPLETED: 11;
    ENTERED_IN_ERROR: 12;
  }

  export const Value: ValueMap;
}

export class TemplateStatusCodeLifeCycleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateStatusCodeLifeCycleCode.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateStatusCodeLifeCycleCode): TemplateStatusCodeLifeCycleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateStatusCodeLifeCycleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateStatusCodeLifeCycleCode;
  static deserializeBinaryFromReader(message: TemplateStatusCodeLifeCycleCode, reader: jspb.BinaryReader): TemplateStatusCodeLifeCycleCode;
}

export namespace TemplateStatusCodeLifeCycleCode {
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

export class TestReportActionResultCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportActionResultCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportActionResultCode): TestReportActionResultCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportActionResultCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportActionResultCode;
  static deserializeBinaryFromReader(message: TestReportActionResultCode, reader: jspb.BinaryReader): TestReportActionResultCode;
}

export namespace TestReportActionResultCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PASS: 1;
    SKIP: 2;
    FAIL: 3;
    WARNING: 4;
    ERROR: 5;
  }

  export const Value: ValueMap;
}

export class TestReportParticipantTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportParticipantTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportParticipantTypeCode): TestReportParticipantTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportParticipantTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportParticipantTypeCode;
  static deserializeBinaryFromReader(message: TestReportParticipantTypeCode, reader: jspb.BinaryReader): TestReportParticipantTypeCode;
}

export namespace TestReportParticipantTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TEST_ENGINE: 1;
    CLIENT: 2;
    SERVER: 3;
  }

  export const Value: ValueMap;
}

export class TestReportResultCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportResultCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportResultCode): TestReportResultCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportResultCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportResultCode;
  static deserializeBinaryFromReader(message: TestReportResultCode, reader: jspb.BinaryReader): TestReportResultCode;
}

export namespace TestReportResultCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PASS: 1;
    FAIL: 2;
    PENDING: 3;
  }

  export const Value: ValueMap;
}

export class TestReportStatusCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportStatusCode): TestReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportStatusCode;
  static deserializeBinaryFromReader(message: TestReportStatusCode, reader: jspb.BinaryReader): TestReportStatusCode;
}

export namespace TestReportStatusCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETED: 1;
    IN_PROGRESS: 2;
    WAITING: 3;
    STOPPED: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class TestScriptRequestMethodCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScriptRequestMethodCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestScriptRequestMethodCode): TestScriptRequestMethodCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScriptRequestMethodCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScriptRequestMethodCode;
  static deserializeBinaryFromReader(message: TestScriptRequestMethodCode, reader: jspb.BinaryReader): TestScriptRequestMethodCode;
}

export namespace TestScriptRequestMethodCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DELETE: 1;
    GET: 2;
    OPTIONS: 3;
    PATCH: 4;
    POST: 5;
    PUT: 6;
    HEAD: 7;
  }

  export const Value: ValueMap;
}

export class TriggerTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerTypeCode): TriggerTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerTypeCode;
  static deserializeBinaryFromReader(message: TriggerTypeCode, reader: jspb.BinaryReader): TriggerTypeCode;
}

export namespace TriggerTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NAMED_EVENT: 1;
    PERIODIC: 2;
    DATA_CHANGED: 3;
    DATA_ADDED: 4;
    DATA_MODIFIED: 5;
    DATA_REMOVED: 6;
    DATA_ACCESSED: 7;
    DATA_ACCESS_ENDED: 8;
  }

  export const Value: ValueMap;
}

export class TypeDerivationRuleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDerivationRuleCode.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDerivationRuleCode): TypeDerivationRuleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeDerivationRuleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDerivationRuleCode;
  static deserializeBinaryFromReader(message: TypeDerivationRuleCode, reader: jspb.BinaryReader): TypeDerivationRuleCode;
}

export namespace TypeDerivationRuleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SPECIALIZATION: 1;
    CONSTRAINT: 2;
  }

  export const Value: ValueMap;
}

export class UDIEntryTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UDIEntryTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: UDIEntryTypeCode): UDIEntryTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UDIEntryTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UDIEntryTypeCode;
  static deserializeBinaryFromReader(message: UDIEntryTypeCode, reader: jspb.BinaryReader): UDIEntryTypeCode;
}

export namespace UDIEntryTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BARCODE: 1;
    RFID: 2;
    MANUAL: 3;
    CARD: 4;
    SELF_REPORTED: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class UseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseCode.AsObject;
  static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseCode;
  static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
}

export namespace UseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLAIM: 1;
    PREAUTHORIZATION: 2;
    PREDETERMINATION: 3;
  }

  export const Value: ValueMap;
}

export class V20444Code extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V20444Code.AsObject;
  static toObject(includeInstance: boolean, msg: V20444Code): V20444Code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V20444Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V20444Code;
  static deserializeBinaryFromReader(message: V20444Code, reader: jspb.BinaryReader): V20444Code;
}

export namespace V20444Code {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    F: 1;
    G: 2;
  }

  export const Value: ValueMap;
}

export class V3AddressUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3AddressUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3AddressUseCode): V3AddressUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3AddressUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3AddressUseCode;
  static deserializeBinaryFromReader(message: V3AddressUseCode, reader: jspb.BinaryReader): V3AddressUseCode;
}

export namespace V3AddressUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GENERAL_ADDRESS_USE: 1;
    BAD: 2;
    CONF: 3;
    H: 4;
    HP: 5;
    HV: 6;
    OLD: 7;
    TMP: 8;
    WP: 9;
    DIR: 10;
    PUB: 11;
    POSTAL_ADDRESS_USE: 12;
    PHYS: 13;
    PST: 14;
    TELECOMMUNICATION_ADDRESS_USE: 15;
    AS: 16;
    EC: 17;
    MC: 18;
    PG: 19;
  }

  export const Value: ValueMap;
}

export class V3ConfidentialityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3ConfidentialityCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3ConfidentialityCode): V3ConfidentialityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3ConfidentialityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3ConfidentialityCode;
  static deserializeBinaryFromReader(message: V3ConfidentialityCode, reader: jspb.BinaryReader): V3ConfidentialityCode;
}

export namespace V3ConfidentialityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONFIDENTIALITY: 1;
    L: 2;
    M: 3;
    N: 4;
    R: 5;
    U: 6;
    V: 7;
    CONFIDENTIALITY_BY_ACCESS_KIND: 8;
    B: 9;
    D: 10;
    I: 11;
    CONFIDENTIALITY_BY_INFO_TYPE: 12;
    ETH: 13;
    HIV: 14;
    PSY: 15;
    SDV: 16;
    CONFIDENTIALITY_MODIFIERS: 17;
    C: 18;
    S: 19;
    T: 20;
  }

  export const Value: ValueMap;
}

export class V3EntityNamePartQualifierCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3EntityNamePartQualifierCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3EntityNamePartQualifierCode): V3EntityNamePartQualifierCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3EntityNamePartQualifierCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3EntityNamePartQualifierCode;
  static deserializeBinaryFromReader(message: V3EntityNamePartQualifierCode, reader: jspb.BinaryReader): V3EntityNamePartQualifierCode;
}

export namespace V3EntityNamePartQualifierCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ORGANIZATION_NAME_PART_QUALIFIER: 1;
    AC: 2;
    AD: 3;
    BR: 4;
    CL: 5;
    IN: 6;
    LS: 7;
    NB: 8;
    PR: 9;
    SP: 10;
    TITLE: 11;
    VV: 12;
    PHARMACEUTICAL_ENTITY_NAME_PART_QUALIFIERS: 13;
    CON: 14;
    DEV: 15;
    FLAV: 16;
    FORMUL: 17;
    FRM: 18;
    INV: 19;
    POPUL: 20;
    SCI: 21;
    STR: 22;
    TIME: 23;
    TMK: 24;
    USE: 25;
    PERSON_NAME_PART_QUALIFIER: 26;
    PERSON_NAME_PART_AFFIX_TYPES: 27;
    PERSON_NAME_PART_CHANGE_QUALIFIER: 28;
    PERSON_NAME_PART_MISC_QUALIFIER: 29;
  }

  export const Value: ValueMap;
}

export class V3EntityNamePartQualifierR2Code extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3EntityNamePartQualifierR2Code.AsObject;
  static toObject(includeInstance: boolean, msg: V3EntityNamePartQualifierR2Code): V3EntityNamePartQualifierR2Code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3EntityNamePartQualifierR2Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3EntityNamePartQualifierR2Code;
  static deserializeBinaryFromReader(message: V3EntityNamePartQualifierR2Code, reader: jspb.BinaryReader): V3EntityNamePartQualifierR2Code;
}

export namespace V3EntityNamePartQualifierR2Code {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AD: 1;
    SP: 2;
    BR: 3;
    CL: 4;
    IN: 5;
    LS: 6;
    MID: 7;
    PFX: 8;
    PHARMACEUTICAL_ENTITY_NAME_PART_QUALIFIERS: 9;
    CON: 10;
    DEV: 11;
    FLAV: 12;
    FORMUL: 13;
    FRM: 14;
    INV: 15;
    POPUL: 16;
    SCI: 17;
    STR: 18;
    TIME: 19;
    TMK: 20;
    USE: 21;
    SFX: 22;
    TITLE_STYLES: 23;
    AC: 24;
    HON: 25;
    NB: 26;
    PR: 27;
  }

  export const Value: ValueMap;
}

export class V3EntityNameUseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3EntityNameUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3EntityNameUseCode): V3EntityNameUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3EntityNameUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3EntityNameUseCode;
  static deserializeBinaryFromReader(message: V3EntityNameUseCode, reader: jspb.BinaryReader): V3EntityNameUseCode;
}

export namespace V3EntityNameUseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NAME_REPRESENTATION_USE: 1;
    ABC: 2;
    IDE: 3;
    SYL: 4;
    ASGN: 5;
    C: 6;
    I: 7;
    L: 8;
    OR: 9;
    P: 10;
    A: 11;
    R: 12;
    SRCH: 13;
    PHON: 14;
    SNDX: 15;
  }

  export const Value: ValueMap;
}

export class V3EntityNameUseR2Code extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3EntityNameUseR2Code.AsObject;
  static toObject(includeInstance: boolean, msg: V3EntityNameUseR2Code): V3EntityNameUseR2Code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3EntityNameUseR2Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3EntityNameUseR2Code;
  static deserializeBinaryFromReader(message: V3EntityNameUseR2Code, reader: jspb.BinaryReader): V3EntityNameUseR2Code;
}

export namespace V3EntityNameUseR2Code {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ASSUMED: 1;
    A: 2;
    ANON: 3;
    I: 4;
    P: 5;
    R: 6;
    C: 7;
    M: 8;
    NAME_REPRESENTATION_USE: 9;
    ABC: 10;
    IDE: 11;
    SYL: 12;
    OLD: 13;
    DN: 14;
    OR: 15;
    PHON: 16;
    SRCH: 17;
    T: 18;
  }

  export const Value: ValueMap;
}

export class V3NullFlavorCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3NullFlavorCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3NullFlavorCode): V3NullFlavorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3NullFlavorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3NullFlavorCode;
  static deserializeBinaryFromReader(message: V3NullFlavorCode, reader: jspb.BinaryReader): V3NullFlavorCode;
}

export namespace V3NullFlavorCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NI: 1;
    INV: 2;
    DER: 3;
    OTH: 4;
    NINF: 5;
    PINF: 6;
    UNC: 7;
    MSK: 8;
    NA: 9;
    UNK: 10;
    ASKU: 11;
    NAV: 12;
    NASK: 13;
    NAVU: 14;
    QS: 15;
    TRC: 16;
    NP: 17;
  }

  export const Value: ValueMap;
}

export class V3ParticipationModeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3ParticipationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3ParticipationModeCode): V3ParticipationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3ParticipationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3ParticipationModeCode;
  static deserializeBinaryFromReader(message: V3ParticipationModeCode, reader: jspb.BinaryReader): V3ParticipationModeCode;
}

export namespace V3ParticipationModeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ELECTRONIC: 1;
    PHYSICAL: 2;
    REMOTE: 3;
    VERBAL: 4;
    DICTATE: 5;
    FACE: 6;
    PHONE: 7;
    VIDEOCONF: 8;
    WRITTEN: 9;
    FAXWRIT: 10;
    HANDWRIT: 11;
    MAILWRIT: 12;
    ONLINEWRIT: 13;
    EMAILWRIT: 14;
    TYPEWRIT: 15;
  }

  export const Value: ValueMap;
}

export class V3ProbabilityDistributionTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3ProbabilityDistributionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3ProbabilityDistributionTypeCode): V3ProbabilityDistributionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3ProbabilityDistributionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3ProbabilityDistributionTypeCode;
  static deserializeBinaryFromReader(message: V3ProbabilityDistributionTypeCode, reader: jspb.BinaryReader): V3ProbabilityDistributionTypeCode;
}

export namespace V3ProbabilityDistributionTypeCode {
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

export class V3RoleCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3RoleCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3RoleCode): V3RoleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3RoleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3RoleCode;
  static deserializeBinaryFromReader(message: V3RoleCode, reader: jspb.BinaryReader): V3RoleCode;
}

export namespace V3RoleCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AFFILIATION_ROLE_TYPE: 1;
    AGENT_ROLE_TYPE: 2;
    AMENDER: 3;
    CLASSIFIER: 4;
    CONSENTER: 5;
    CONSWIT: 6;
    COPART: 7;
    DECLASSIFIER: 8;
    DELEGATEE: 9;
    DELEGATOR: 10;
    DOWNGRDER: 11;
    DRIVCLASSIFIER: 12;
    GRANTEE: 13;
    GRANTOR: 14;
    INTPRTER: 15;
    REVIEWER: 16;
    VALIDATOR: 17;
    COVERAGE_SPONSOR_ROLE_TYPE: 18;
    FULLINS: 19;
    SELFINS: 20;
    PAYOR_ROLE_TYPE: 21;
    ENROLBKR: 22;
    TPA: 23;
    UMO: 24;
    RESPRSN: 25;
    EXCEST: 26;
    GUADLTM: 27;
    GUARD: 28;
    POWATT: 29;
    DPOWATT: 30;
    HPOWATT: 31;
    SPOWATT: 32;
    ASSIGNED_ROLE_TYPE: 33;
    ASSIGNED_NON_PERSON_LIVING_SUBJECT_ROLE_TYPE: 34;
    ASSIST: 35;
    BIOTH: 36;
    ANTIBIOT: 37;
    DEBR: 38;
    CCO: 39;
    SEE: 40;
    SNIFF: 41;
    CERTIFIED_ENTITY_TYPE: 42;
    CITIZEN_ROLE_TYPE: 43;
    CAS: 44;
    CASM: 45;
    CN: 46;
    CNRP: 47;
    CNRPM: 48;
    CPCA: 49;
    CRP: 50;
    CRPM: 51;
    CONTACT_ROLE_TYPE: 52;
    ADMINISTRATIVE_CONTACT_ROLE_TYPE: 53;
    BILL: 54;
    ORG: 55;
    PAYOR: 56;
    ECON: 57;
    NOK: 58;
    IDENTIFIED_ENTITY_TYPE: 59;
    LOCATION_IDENTIFIED_ENTITY_ROLE_CODE: 60;
    ACHFID: 61;
    JURID: 62;
    LOCHFID: 63;
    LIVING_SUBJECT_PRODUCTION_CLASS: 64;
    BF: 65;
    BL: 66;
    BR: 67;
    CO: 68;
    DA: 69;
    DR: 70;
    DU: 71;
    FI: 72;
    LY: 73;
    MT: 74;
    MU: 75;
    PL: 76;
    RC: 77;
    SH: 78;
    VL: 79;
    WL: 80;
    WO: 81;
    MEDICATION_GENERALIZATION_ROLE_TYPE: 82;
    DC: 83;
    GD: 84;
    GDF: 85;
    GDS: 86;
    GDSF: 87;
    MGDSF: 88;
    MEMBER_ROLE_TYPE: 89;
    TRB: 90;
    PERSONAL_RELATIONSHIP_ROLE_TYPE: 91;
    FAMMEMB: 92;
    CHILD: 93;
    CHLDADOPT: 94;
    DAUADOPT: 95;
    SONADOPT: 96;
    CHLDFOST: 97;
    DAUFOST: 98;
    SONFOST: 99;
    DAUC: 100;
    DAU: 101;
    STPDAU: 102;
    NCHILD: 103;
    SON: 104;
    SONC: 105;
    STPSON: 106;
    STPCHLD: 107;
    EXT: 108;
    AUNT: 109;
    MAUNT: 110;
    PAUNT: 111;
    COUSN: 112;
    MCOUSN: 113;
    PCOUSN: 114;
    GGRPRN: 115;
    GGRFTH: 116;
    MGGRFTH: 117;
    PGGRFTH: 118;
    GGRMTH: 119;
    MGGRMTH: 120;
    PGGRMTH: 121;
    MGGRPRN: 122;
    PGGRPRN: 123;
    GRNDCHILD: 124;
    GRNDDAU: 125;
    GRNDSON: 126;
    GRPRN: 127;
    GRFTH: 128;
    MGRFTH: 129;
    PGRFTH: 130;
    GRMTH: 131;
    MGRMTH: 132;
    PGRMTH: 133;
    MGRPRN: 134;
    PGRPRN: 135;
    INLAW: 136;
    CHLDINLAW: 137;
    DAUINLAW: 138;
    SONINLAW: 139;
    PRNINLAW: 140;
    FTHINLAW: 141;
    MTHINLAW: 142;
    SIBINLAW: 143;
    BROINLAW: 144;
    SISINLAW: 145;
    NIENEPH: 146;
    NEPHEW: 147;
    NIECE: 148;
    UNCLE: 149;
    MUNCLE: 150;
    PUNCLE: 151;
    PRN: 152;
    ADOPTP: 153;
    ADOPTF: 154;
    ADOPTM: 155;
    FTH: 156;
    FTHFOST: 157;
    NFTH: 158;
    NFTHF: 159;
    STPFTH: 160;
    MTH: 161;
    GESTM: 162;
    MTHFOST: 163;
    NMTH: 164;
    NMTHF: 165;
    STPMTH: 166;
    NPRN: 167;
    PRNFOST: 168;
    STPPRN: 169;
    SIB: 170;
    BRO: 171;
    HBRO: 172;
    NBRO: 173;
    TWINBRO: 174;
    FTWINBRO: 175;
    ITWINBRO: 176;
    STPBRO: 177;
    HSIB: 178;
    HSIS: 179;
    NSIB: 180;
    NSIS: 181;
    TWINSIS: 182;
    FTWINSIS: 183;
    ITWINSIS: 184;
    TWIN: 185;
    FTWIN: 186;
    ITWIN: 187;
    SIS: 188;
    STPSIS: 189;
    STPSIB: 190;
    SIGOTHR: 191;
    DOMPART: 192;
    FMRSPS: 193;
    SPS: 194;
    HUSB: 195;
    WIFE: 196;
    FRND: 197;
    NBOR: 198;
    ONESELF: 199;
    ROOM: 200;
    POLICY_OR_PROGRAM_COVERAGE_ROLE_TYPE: 201;
    COVERAGE_ROLE_TYPE: 202;
    FAMDEP: 203;
    HANDIC: 204;
    INJ: 205;
    SELF: 206;
    SPON: 207;
    STUD: 208;
    FSTUD: 209;
    PSTUD: 210;
    ADOPT: 211;
    GCHILD: 212;
    GPARNT: 213;
    NAT: 214;
    NIENE: 215;
    PARNT: 216;
    SPSE: 217;
    STEP: 218;
    COVERED_PARTY_ROLE_TYPE: 219;
    CLAIMANT_COVERED_PARTY_ROLE_TYPE: 220;
    CRIMEVIC: 221;
    INJWKR: 222;
    DEPENDENT_COVERED_PARTY_ROLE_TYPE: 223;
    COCBEN: 224;
    DIFFABL: 225;
    WARD: 226;
    INDIVIDUAL_INSURED_PARTY_ROLE_TYPE: 227;
    RETIREE: 228;
    PROGRAM_ELIGIBLE_PARTY_ROLE_TYPE: 229;
    INDIG: 230;
    MIL: 231;
    ACTMIL: 232;
    RETMIL: 233;
    VET: 234;
    SUBSCRIBER_COVERED_PARTY_ROLE_TYPE: 235;
    RESEARCH_SUBJECT_ROLE_BASIS: 236;
    ERL: 237;
    SCN: 238;
    SERVICE_DELIVERY_LOCATION_ROLE_TYPE: 239;
    DEDICATED_SERVICE_DELIVERY_LOCATION_ROLE_TYPE: 240;
    DEDICATED_CLINICAL_LOCATION_ROLE_TYPE: 241;
    DX: 242;
    CVDX: 243;
    CATH: 244;
    ECHO: 245;
    GIDX: 246;
    ENDOS: 247;
    RADDX: 248;
    RADO: 249;
    RNEU: 250;
    HOSP: 251;
    CHR: 252;
    GACH: 253;
    MHSP: 254;
    PSYCHF: 255;
    RH: 256;
    RHAT: 257;
    RHII: 258;
    RHMAD: 259;
    RHPI: 260;
    RHPIH: 261;
    RHPIMS: 262;
    RHPIVS: 263;
    RHYAD: 264;
    HU: 265;
    BMTU: 266;
    CCU: 267;
    CHEST: 268;
    EPIL: 269;
    ER: 270;
    ETU: 271;
    HD: 272;
    HLAB: 273;
    INLAB: 274;
    OUTLAB: 275;
    HRAD: 276;
    HUSCS: 277;
    ICU: 278;
    PEDICU: 279;
    PEDNICU: 280;
    INPHARM: 281;
    MBL: 282;
    NCCS: 283;
    NS: 284;
    OUTPHARM: 285;
    PEDU: 286;
    PHU: 287;
    RHU: 288;
    SLEEP: 289;
    NCCF: 290;
    SNF: 291;
    OF: 292;
    ALL: 293;
    AMPUT: 294;
    BMTC: 295;
    BREAST: 296;
    CANC: 297;
    CAPC: 298;
    CARD: 299;
    PEDCARD: 300;
    COAG: 301;
    CRS: 302;
    DERM: 303;
    ENDO: 304;
    PEDE: 305;
    ENT: 306;
    FMC: 307;
    GI: 308;
    PEDGI: 309;
    GIM: 310;
    GYN: 311;
    HEM: 312;
    PEDHEM: 313;
    HTN: 314;
    IEC: 315;
    INFD: 316;
    PEDID: 317;
    INV: 318;
    LYMPH: 319;
    MGEN: 320;
    NEPH: 321;
    PEDNEPH: 322;
    NEUR: 323;
    OB: 324;
    OMS: 325;
    ONCL: 326;
    PEDHO: 327;
    OPH: 328;
    OPTC: 329;
    ORTHO: 330;
    HAND: 331;
    PAINCL: 332;
    PC: 333;
    PEDC: 334;
    PEDRHEUM: 335;
    POD: 336;
    PREV: 337;
    PROCTO: 338;
    PROFF: 339;
    PROS: 340;
    PSI: 341;
    PSY: 342;
    RHEUM: 343;
    SPMED: 344;
    SU: 345;
    PLS: 346;
    URO: 347;
    TR: 348;
    TRAVEL: 349;
    WND: 350;
    RTF: 351;
    PRC: 352;
    SURF: 353;
    DEDICATED_NON_CLINICAL_LOCATION_ROLE_TYPE: 354;
    DADDR: 355;
    MOBL: 356;
    AMB: 357;
    PHARM: 358;
    INCIDENTAL_SERVICE_DELIVERY_LOCATION_ROLE_TYPE: 359;
    ACC: 360;
    COMM: 361;
    CSC: 362;
    PTRES: 363;
    SCHOOL: 364;
    UPC: 365;
    WORK: 366;
    SPECIMEN_ROLE_TYPE: 367;
    C: 368;
    G: 369;
    L: 370;
    P: 371;
    Q: 372;
    B: 373;
    E: 374;
    F: 375;
    O: 376;
    V: 377;
    R: 378;
    CLAIM: 379;
    COMMUNITY_LABORATORY: 380;
    GT: 381;
    HOME_HEALTH: 382;
    LABORATORY: 383;
    PATHOLOGIST: 384;
    PH: 385;
    PHLEBOTOMIST: 386;
    PROG: 387;
    PT: 388;
    SUBJECT: 389;
    THIRD_PARTY: 390;
    DEP: 391;
    DEPEN: 392;
    FM: 393;
    INDIV: 394;
    NAMED: 395;
    PSYCHCF: 396;
    SUBSCR: 397;
  }

  export const Value: ValueMap;
}

export class V3TimingEventCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): V3TimingEventCode.AsObject;
  static toObject(includeInstance: boolean, msg: V3TimingEventCode): V3TimingEventCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: V3TimingEventCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): V3TimingEventCode;
  static deserializeBinaryFromReader(message: V3TimingEventCode, reader: jspb.BinaryReader): V3TimingEventCode;
}

export namespace V3TimingEventCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AC: 1;
    ACD: 2;
    ACM: 3;
    ACV: 4;
    C: 5;
    CD: 6;
    CM: 7;
    CV: 8;
    HS: 9;
    IC: 10;
    ICD: 11;
    ICM: 12;
    ICV: 13;
    PC: 14;
    PCD: 15;
    PCM: 16;
    PCV: 17;
    WAKE: 18;
  }

  export const Value: ValueMap;
}

export class VisionBaseCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionBaseCode.AsObject;
  static toObject(includeInstance: boolean, msg: VisionBaseCode): VisionBaseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisionBaseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionBaseCode;
  static deserializeBinaryFromReader(message: VisionBaseCode, reader: jspb.BinaryReader): VisionBaseCode;
}

export namespace VisionBaseCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UP: 1;
    DOWN: 2;
    IN: 3;
    OUT: 4;
  }

  export const Value: ValueMap;
}

export class VisionEyesCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionEyesCode.AsObject;
  static toObject(includeInstance: boolean, msg: VisionEyesCode): VisionEyesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisionEyesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionEyesCode;
  static deserializeBinaryFromReader(message: VisionEyesCode, reader: jspb.BinaryReader): VisionEyesCode;
}

export namespace VisionEyesCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RIGHT: 1;
    LEFT: 2;
  }

  export const Value: ValueMap;
}

export class XPathUsageTypeCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XPathUsageTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: XPathUsageTypeCode): XPathUsageTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: XPathUsageTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XPathUsageTypeCode;
  static deserializeBinaryFromReader(message: XPathUsageTypeCode, reader: jspb.BinaryReader): XPathUsageTypeCode;
}

export namespace XPathUsageTypeCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NORMAL: 1;
    PHONETIC: 2;
    NEARBY: 3;
    DISTANCE: 4;
    OTHER: 5;
  }

  export const Value: ValueMap;
}

