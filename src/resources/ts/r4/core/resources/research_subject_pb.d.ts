// package: google.fhir.r4.core
// file: proto/r4/core/resources/research_subject.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ResearchSubject extends jspb.Message {
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
  getStatus(): ResearchSubject.StatusCode | undefined;
  setStatus(value?: ResearchSubject.StatusCode): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasStudy(): boolean;
  clearStudy(): void;
  getStudy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setStudy(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasIndividual(): boolean;
  clearIndividual(): void;
  getIndividual(): proto_r4_core_datatypes_pb.Reference | undefined;
  setIndividual(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAssignedArm(): boolean;
  clearAssignedArm(): void;
  getAssignedArm(): proto_r4_core_datatypes_pb.String | undefined;
  setAssignedArm(value?: proto_r4_core_datatypes_pb.String): void;

  hasActualArm(): boolean;
  clearActualArm(): void;
  getActualArm(): proto_r4_core_datatypes_pb.String | undefined;
  setActualArm(value?: proto_r4_core_datatypes_pb.String): void;

  hasConsent(): boolean;
  clearConsent(): void;
  getConsent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setConsent(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchSubject.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchSubject): ResearchSubject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchSubject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchSubject;
  static deserializeBinaryFromReader(message: ResearchSubject, reader: jspb.BinaryReader): ResearchSubject;
}

export namespace ResearchSubject {
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
    status?: ResearchSubject.StatusCode.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    study?: proto_r4_core_datatypes_pb.Reference.AsObject,
    individual?: proto_r4_core_datatypes_pb.Reference.AsObject,
    assignedArm?: proto_r4_core_datatypes_pb.String.AsObject,
    actualArm?: proto_r4_core_datatypes_pb.String.AsObject,
    consent?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchSubjectStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

