// package: google.fhir.r4.core
// file: proto/r4/core/resources/guidance_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class GuidanceResponse extends jspb.Message {
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

  clearContainedList(): void;
  getContainedList(): Array<google_protobuf_any_pb.Any>;
  setContainedList(value: Array<google_protobuf_any_pb.Any>): void;
  addContained(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasRequestIdentifier(): boolean;
  clearRequestIdentifier(): void;
  getRequestIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setRequestIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasModule(): boolean;
  clearModule(): void;
  getModule(): GuidanceResponse.ModuleX | undefined;
  setModule(value?: GuidanceResponse.ModuleX): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): GuidanceResponse.StatusCode | undefined;
  setStatus(value?: GuidanceResponse.StatusCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrenceDateTime(): boolean;
  clearOccurrenceDateTime(): void;
  getOccurrenceDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setOccurrenceDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearEvaluationMessageList(): void;
  getEvaluationMessageList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEvaluationMessageList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEvaluationMessage(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasOutputParameters(): boolean;
  clearOutputParameters(): void;
  getOutputParameters(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOutputParameters(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): proto_r4_core_datatypes_pb.Reference | undefined;
  setResult(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDataRequirementList(): void;
  getDataRequirementList(): Array<proto_r4_core_datatypes_pb.DataRequirement>;
  setDataRequirementList(value: Array<proto_r4_core_datatypes_pb.DataRequirement>): void;
  addDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement, index?: number): proto_r4_core_datatypes_pb.DataRequirement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceResponse): GuidanceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceResponse;
  static deserializeBinaryFromReader(message: GuidanceResponse, reader: jspb.BinaryReader): GuidanceResponse;
}

export namespace GuidanceResponse {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    requestIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    module?: GuidanceResponse.ModuleX.AsObject,
    status?: GuidanceResponse.StatusCode.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrenceDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    evaluationMessageList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    outputParameters?: proto_r4_core_datatypes_pb.Reference.AsObject,
    result?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dataRequirementList: Array<proto_r4_core_datatypes_pb.DataRequirement.AsObject>,
  }

  export class ModuleX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): ModuleX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModuleX.AsObject;
    static toObject(includeInstance: boolean, msg: ModuleX): ModuleX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModuleX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModuleX;
    static deserializeBinaryFromReader(message: ModuleX, reader: jspb.BinaryReader): ModuleX;
  }

  export namespace ModuleX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
      CODEABLE_CONCEPT = 3,
    }
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GuidanceResponseStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

