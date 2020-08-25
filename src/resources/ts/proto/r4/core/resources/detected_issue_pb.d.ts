// package: google.fhir.r4.core
// file: proto/r4/core/resources/detected_issue.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class DetectedIssue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.Id | undefined;
  setId(value?: proto_r4_core_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_r4_core_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_r4_core_datatypes_pb.Code | undefined;
  setLanguage(value?: proto_r4_core_datatypes_pb.Code): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_r4_core_datatypes_pb.Narrative | undefined;
  setText(value?: proto_r4_core_datatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<google_protobuf_any_pb.Any>;
  setContained(value: Array<google_protobuf_any_pb.Any>): void;
  addContained(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DetectedIssue.StatusCode | undefined;
  setStatus(value?: DetectedIssue.StatusCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): DetectedIssue.SeverityCode | undefined;
  setSeverity(value?: DetectedIssue.SeverityCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasIdentified(): boolean;
  clearIdentified(): void;
  getIdentified(): DetectedIssue.IdentifiedX | undefined;
  setIdentified(value?: DetectedIssue.IdentifiedX): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearImplicated(): void;
  getImplicated(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImplicated(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImplicated(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEvidence(): void;
  getEvidence(): Array<DetectedIssue.Evidence>;
  setEvidence(value: Array<DetectedIssue.Evidence>): void;
  addEvidence(value?: DetectedIssue.Evidence, index?: number): DetectedIssue.Evidence;

  hasDetail(): boolean;
  clearDetail(): void;
  getDetail(): proto_r4_core_datatypes_pb.String | undefined;
  setDetail(value?: proto_r4_core_datatypes_pb.String): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): proto_r4_core_datatypes_pb.Uri | undefined;
  setReference(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearMitigation(): void;
  getMitigation(): Array<DetectedIssue.Mitigation>;
  setMitigation(value: Array<DetectedIssue.Mitigation>): void;
  addMitigation(value?: DetectedIssue.Mitigation, index?: number): DetectedIssue.Mitigation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectedIssue.AsObject;
  static toObject(includeInstance: boolean, msg: DetectedIssue): DetectedIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetectedIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectedIssue;
  static deserializeBinaryFromReader(message: DetectedIssue, reader: jspb.BinaryReader): DetectedIssue;
}

export namespace DetectedIssue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    status?: DetectedIssue.StatusCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    severity?: DetectedIssue.SeverityCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    identified?: DetectedIssue.IdentifiedX.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    implicated: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    evidence: Array<DetectedIssue.Evidence.AsObject>,
    detail?: proto_r4_core_datatypes_pb.String.AsObject,
    reference?: proto_r4_core_datatypes_pb.Uri.AsObject,
    mitigation: Array<DetectedIssue.Mitigation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class SeverityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeverityCode.AsObject;
    static toObject(includeInstance: boolean, msg: SeverityCode): SeverityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeverityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeverityCode;
    static deserializeBinaryFromReader(message: SeverityCode, reader: jspb.BinaryReader): SeverityCode;
  }

  export namespace SeverityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.DetectedIssueSeverityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IdentifiedX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): IdentifiedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdentifiedX.AsObject;
    static toObject(includeInstance: boolean, msg: IdentifiedX): IdentifiedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IdentifiedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdentifiedX;
    static deserializeBinaryFromReader(message: IdentifiedX, reader: jspb.BinaryReader): IdentifiedX;
  }

  export namespace IdentifiedX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Evidence extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearCode(): void;
    getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDetail(): void;
    getDetail(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDetail(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Evidence.AsObject;
    static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Evidence;
    static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
  }

  export namespace Evidence {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      detail: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Mitigation extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mitigation.AsObject;
    static toObject(includeInstance: boolean, msg: Mitigation): Mitigation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mitigation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mitigation;
    static deserializeBinaryFromReader(message: Mitigation, reader: jspb.BinaryReader): Mitigation;
  }

  export namespace Mitigation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

