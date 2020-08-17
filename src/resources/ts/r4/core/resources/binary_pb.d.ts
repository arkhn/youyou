// package: google.fhir.r4.core
// file: proto/r4/core/resources/binary.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Binary extends jspb.Message {
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

  hasContentType(): boolean;
  clearContentType(): void;
  getContentType(): Binary.ContentTypeCode | undefined;
  setContentType(value?: Binary.ContentTypeCode): void;

  hasSecurityContext(): boolean;
  clearSecurityContext(): void;
  getSecurityContext(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSecurityContext(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasData(): boolean;
  clearData(): void;
  getData(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
  setData(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binary.AsObject;
  static toObject(includeInstance: boolean, msg: Binary): Binary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Binary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binary;
  static deserializeBinaryFromReader(message: Binary, reader: jspb.BinaryReader): Binary;
}

export namespace Binary {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    contentType?: Binary.ContentTypeCode.AsObject,
    securityContext?: proto_r4_core_datatypes_pb.Reference.AsObject,
    data?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
  }

  export class ContentTypeCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentTypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: ContentTypeCode): ContentTypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentTypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentTypeCode;
    static deserializeBinaryFromReader(message: ContentTypeCode, reader: jspb.BinaryReader): ContentTypeCode;
  }

  export namespace ContentTypeCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      value: string,
    }
  }
}

