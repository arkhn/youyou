// package: google.fhir.r4.qicore
// file: proto/r4/qicore/codes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../proto/annotations_pb";

export class AppropriatenessScoreCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppropriatenessScoreCode.AsObject;
  static toObject(includeInstance: boolean, msg: AppropriatenessScoreCode): AppropriatenessScoreCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppropriatenessScoreCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppropriatenessScoreCode;
  static deserializeBinaryFromReader(message: AppropriatenessScoreCode, reader: jspb.BinaryReader): AppropriatenessScoreCode;
}

export namespace AppropriatenessScoreCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EXTREMELY_INAPPROPRIATE: 1;
    INAPPROPRIATE: 2;
    PROBABLY_INAPPROPRIATE: 3;
    UNCERTAIN_INAPPROPRIATE: 4;
    UNCERTAIN: 5;
    UNCERTAIN_APPROPRIATE: 6;
    PROBABLY_APPROPRIATE: 7;
    APPROPRIATE: 8;
    EXTREMELY_APPROPRIATE: 9;
  }

  export const Value: ValueMap;
}

export class CommunicationMediumCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationMediumCode.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationMediumCode): CommunicationMediumCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationMediumCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationMediumCode;
  static deserializeBinaryFromReader(message: CommunicationMediumCode, reader: jspb.BinaryReader): CommunicationMediumCode;
}

export namespace CommunicationMediumCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNSPECIFIED: 1;
    TELEPHONE: 2;
    FAX: 3;
    DEVICE: 4;
    VIDEO: 5;
    VOICEMAIL: 6;
    TEXT: 7;
    SOCIAL_MEDIA: 8;
    IN_PERSON: 9;
    MAIL: 10;
    EMAIL: 11;
    PORTAL: 12;
  }

  export const Value: ValueMap;
}

export class ConditionCriticalityCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionCriticalityCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionCriticalityCode): ConditionCriticalityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionCriticalityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionCriticalityCode;
  static deserializeBinaryFromReader(message: ConditionCriticalityCode, reader: jspb.BinaryReader): ConditionCriticalityCode;
}

export namespace ConditionCriticalityCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNSPECIFIED: 1;
    SELF_RESOLVING: 2;
    CONTROLLABLE: 3;
    FUNCTIONAL_LOSS: 4;
    LIFE_THREATENING: 5;
    REQUIRES_HOSPITALIZATION: 6;
  }

  export const Value: ValueMap;
}

export class DiagnosticOrderPreconditionCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticOrderPreconditionCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticOrderPreconditionCode): DiagnosticOrderPreconditionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticOrderPreconditionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticOrderPreconditionCode;
  static deserializeBinaryFromReader(message: DiagnosticOrderPreconditionCode, reader: jspb.BinaryReader): DiagnosticOrderPreconditionCode;
}

export namespace DiagnosticOrderPreconditionCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AFTER_ACTIVITY: 1;
    AT_REST: 2;
    POST_OP: 3;
  }

  export const Value: ValueMap;
}

export class MilitaryServiceCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MilitaryServiceCode.AsObject;
  static toObject(includeInstance: boolean, msg: MilitaryServiceCode): MilitaryServiceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MilitaryServiceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MilitaryServiceCode;
  static deserializeBinaryFromReader(message: MilitaryServiceCode, reader: jspb.BinaryReader): MilitaryServiceCode;
}

export namespace MilitaryServiceCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_INDICATED: 1;
    NO_MILITARY_SERVICE: 2;
    VETERAN: 3;
    ACTIVE_DUTY: 4;
    ACTIVE_RESERVE: 5;
    INACTIVE_RESERVE: 6;
  }

  export const Value: ValueMap;
}

export class ObservationVerificationCode extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationVerificationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationVerificationCode): ObservationVerificationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationVerificationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationVerificationCode;
  static deserializeBinaryFromReader(message: ObservationVerificationCode, reader: jspb.BinaryReader): ObservationVerificationCode;
}

export namespace ObservationVerificationCode {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HUMAN_REVIEW: 1;
    SLIDING_AVERAGE: 2;
  }

  export const Value: ValueMap;
}

export class QICoreEncounterCanceledReasonValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreEncounterCanceledReasonValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreEncounterCanceledReasonValueSet): QICoreEncounterCanceledReasonValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreEncounterCanceledReasonValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreEncounterCanceledReasonValueSet;
  static deserializeBinaryFromReader(message: QICoreEncounterCanceledReasonValueSet, reader: jspb.BinaryReader): QICoreEncounterCanceledReasonValueSet;
}

export namespace QICoreEncounterCanceledReasonValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BLK: 1;
    DEC: 2;
    FIN: 3;
    MED: 4;
    ALTD: 5;
  }

  export const Value: ValueMap;
}

export class QICoreGoalReasonRejectedValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreGoalReasonRejectedValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreGoalReasonRejectedValueSet): QICoreGoalReasonRejectedValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreGoalReasonRejectedValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreGoalReasonRejectedValueSet;
  static deserializeBinaryFromReader(message: QICoreGoalReasonRejectedValueSet, reader: jspb.BinaryReader): QICoreGoalReasonRejectedValueSet;
}

export namespace QICoreGoalReasonRejectedValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BLK: 1;
    DEC: 2;
    FIN: 3;
    MED: 4;
    ALTD: 5;
  }

  export const Value: ValueMap;
}

export class QICoreMilitaryServiceValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMilitaryServiceValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMilitaryServiceValueSet): QICoreMilitaryServiceValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMilitaryServiceValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMilitaryServiceValueSet;
  static deserializeBinaryFromReader(message: QICoreMilitaryServiceValueSet, reader: jspb.BinaryReader): QICoreMilitaryServiceValueSet;
}

export namespace QICoreMilitaryServiceValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_INDICATED: 1;
    NO_MILITARY_SERVICE: 2;
    VETERAN: 3;
    ACTIVE_DUTY: 4;
    ACTIVE_RESERVE: 5;
    INACTIVE_RESERVE: 6;
  }

  export const Value: ValueMap;
}

export class QICoreObservationDeltaValueSet extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreObservationDeltaValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreObservationDeltaValueSet): QICoreObservationDeltaValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreObservationDeltaValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreObservationDeltaValueSet;
  static deserializeBinaryFromReader(message: QICoreObservationDeltaValueSet, reader: jspb.BinaryReader): QICoreObservationDeltaValueSet;
}

export namespace QICoreObservationDeltaValueSet {
  export type AsObject = {
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    B: 1;
    D: 2;
    U: 3;
    W: 4;
  }

  export const Value: ValueMap;
}

