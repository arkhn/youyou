// package: google.fhir.stu3.uscore
// file: proto/stu3/uscore_codes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class UsCoreBirthSexCode extends jspb.Message {
  getValue(): UsCoreBirthSexCode.ValueMap[keyof UsCoreBirthSexCode.ValueMap];
  setValue(value: UsCoreBirthSexCode.ValueMap[keyof UsCoreBirthSexCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreBirthSexCode.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreBirthSexCode): UsCoreBirthSexCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreBirthSexCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreBirthSexCode;
  static deserializeBinaryFromReader(message: UsCoreBirthSexCode, reader: jspb.BinaryReader): UsCoreBirthSexCode;
}

export namespace UsCoreBirthSexCode {
  export type AsObject = {
    value: UsCoreBirthSexCode.ValueMap[keyof UsCoreBirthSexCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FEMALE: 1;
    MALE: 2;
    UNKNOWN: 3;
  }

  export const Value: ValueMap;
}

