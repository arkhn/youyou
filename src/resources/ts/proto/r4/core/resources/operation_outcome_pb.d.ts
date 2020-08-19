// package: google.fhir.r4.core
// file: proto/r4/core/resources/operation_outcome.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class OperationOutcome extends jspb.Message {
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

  clearIssue(): void;
  getIssue(): Array<OperationOutcome.Issue>;
  setIssue(value: Array<OperationOutcome.Issue>): void;
  addIssue(value?: OperationOutcome.Issue, index?: number): OperationOutcome.Issue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcome.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcome): OperationOutcome.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcome;
  static deserializeBinaryFromReader(message: OperationOutcome, reader: jspb.BinaryReader): OperationOutcome;
}

export namespace OperationOutcome {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    issue: Array<OperationOutcome.Issue.AsObject>,
  }

  export class Issue extends jspb.Message {
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

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): OperationOutcome.Issue.SeverityCode | undefined;
    setSeverity(value?: OperationOutcome.Issue.SeverityCode): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): OperationOutcome.Issue.CodeType | undefined;
    setCode(value?: OperationOutcome.Issue.CodeType): void;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDetails(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDiagnostics(): boolean;
    clearDiagnostics(): void;
    getDiagnostics(): proto_r4_core_datatypes_pb.String | undefined;
    setDiagnostics(value?: proto_r4_core_datatypes_pb.String): void;

    clearLocation(): void;
    getLocation(): Array<proto_r4_core_datatypes_pb.String>;
    setLocation(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addLocation(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    clearExpression(): void;
    getExpression(): Array<proto_r4_core_datatypes_pb.String>;
    setExpression(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addExpression(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Issue.AsObject;
    static toObject(includeInstance: boolean, msg: Issue): Issue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Issue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Issue;
    static deserializeBinaryFromReader(message: Issue, reader: jspb.BinaryReader): Issue;
  }

  export namespace Issue {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      severity?: OperationOutcome.Issue.SeverityCode.AsObject,
      code?: OperationOutcome.Issue.CodeType.AsObject,
      details?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      diagnostics?: proto_r4_core_datatypes_pb.String.AsObject,
      location: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      expression: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    }

    export class SeverityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.IssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.IssueSeverityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.IssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.IssueSeverityCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.IssueSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.IssueSeverityCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.IssueTypeCode.ValueMap[keyof proto_r4_core_codes_pb.IssueTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.IssueTypeCode.ValueMap[keyof proto_r4_core_codes_pb.IssueTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CodeType.AsObject;
      static toObject(includeInstance: boolean, msg: CodeType): CodeType.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CodeType, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CodeType;
      static deserializeBinaryFromReader(message: CodeType, reader: jspb.BinaryReader): CodeType;
    }

    export namespace CodeType {
      export type AsObject = {
        value: proto_r4_core_codes_pb.IssueTypeCode.ValueMap[keyof proto_r4_core_codes_pb.IssueTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

