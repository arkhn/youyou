// package: google.fhir.stu3.fhirproto
// file: proto/stu3/fhirproto_extensions.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class PrimitiveHasNoValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrimitiveHasNoValue.AsObject;
  static toObject(includeInstance: boolean, msg: PrimitiveHasNoValue): PrimitiveHasNoValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrimitiveHasNoValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrimitiveHasNoValue;
  static deserializeBinaryFromReader(message: PrimitiveHasNoValue, reader: jspb.BinaryReader): PrimitiveHasNoValue;
}

export namespace PrimitiveHasNoValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class Base64BinarySeparatorStride extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasSeparator(): boolean;
  clearSeparator(): void;
  getSeparator(): proto_stu3_datatypes_pb.String | undefined;
  setSeparator(value?: proto_stu3_datatypes_pb.String): void;

  hasStride(): boolean;
  clearStride(): void;
  getStride(): proto_stu3_datatypes_pb.PositiveInt | undefined;
  setStride(value?: proto_stu3_datatypes_pb.PositiveInt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Base64BinarySeparatorStride.AsObject;
  static toObject(includeInstance: boolean, msg: Base64BinarySeparatorStride): Base64BinarySeparatorStride.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Base64BinarySeparatorStride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Base64BinarySeparatorStride;
  static deserializeBinaryFromReader(message: Base64BinarySeparatorStride, reader: jspb.BinaryReader): Base64BinarySeparatorStride;
}

export namespace Base64BinarySeparatorStride {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    separator?: proto_stu3_datatypes_pb.String.AsObject,
    stride?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
  }
}

