// package: google.fhir.r4.core
// file: proto/r4/core/resources/enrollment_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class EnrollmentResponse extends jspb.Message {
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
  getStatus(): EnrollmentResponse.StatusCode | undefined;
  setStatus(value?: EnrollmentResponse.StatusCode): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequest(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): EnrollmentResponse.OutcomeCode | undefined;
  setOutcome(value?: EnrollmentResponse.OutcomeCode): void;

  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): proto_r4_core_datatypes_pb.String | undefined;
  setDisposition(value?: proto_r4_core_datatypes_pb.String): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequestProvider(): boolean;
  clearRequestProvider(): void;
  getRequestProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequestProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnrollmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnrollmentResponse): EnrollmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnrollmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnrollmentResponse;
  static deserializeBinaryFromReader(message: EnrollmentResponse, reader: jspb.BinaryReader): EnrollmentResponse;
}

export namespace EnrollmentResponse {
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
    status?: EnrollmentResponse.StatusCode.AsObject,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: EnrollmentResponse.OutcomeCode.AsObject,
    disposition?: proto_r4_core_datatypes_pb.String.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    requestProvider?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OutcomeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutcomeCode.AsObject;
    static toObject(includeInstance: boolean, msg: OutcomeCode): OutcomeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutcomeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutcomeCode;
    static deserializeBinaryFromReader(message: OutcomeCode, reader: jspb.BinaryReader): OutcomeCode;
  }

  export namespace OutcomeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

