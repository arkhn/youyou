// package: google.fhir.r4.core
// file: proto/r4/core/extensions.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../proto/r4/core/valuesets_pb";

export class AddressADUse extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): AddressADUse.ValueCode | undefined;
  setValueCode(value?: AddressADUse.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADUse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADUse): AddressADUse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADUse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADUse;
  static deserializeBinaryFromReader(message: AddressADUse, reader: jspb.BinaryReader): AddressADUse;
}

export namespace AddressADUse {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: AddressADUse.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.PostalAddressUseValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class AddressADXPAdditionalLocator extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPAdditionalLocator.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPAdditionalLocator): AddressADXPAdditionalLocator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPAdditionalLocator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPAdditionalLocator;
  static deserializeBinaryFromReader(message: AddressADXPAdditionalLocator, reader: jspb.BinaryReader): AddressADXPAdditionalLocator;
}

export namespace AddressADXPAdditionalLocator {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPBuildingNumberSuffix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPBuildingNumberSuffix.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPBuildingNumberSuffix): AddressADXPBuildingNumberSuffix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPBuildingNumberSuffix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPBuildingNumberSuffix;
  static deserializeBinaryFromReader(message: AddressADXPBuildingNumberSuffix, reader: jspb.BinaryReader): AddressADXPBuildingNumberSuffix;
}

export namespace AddressADXPBuildingNumberSuffix {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPCareOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPCareOf.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPCareOf): AddressADXPCareOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPCareOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPCareOf;
  static deserializeBinaryFromReader(message: AddressADXPCareOf, reader: jspb.BinaryReader): AddressADXPCareOf;
}

export namespace AddressADXPCareOf {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPCensusTract extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPCensusTract.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPCensusTract): AddressADXPCensusTract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPCensusTract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPCensusTract;
  static deserializeBinaryFromReader(message: AddressADXPCensusTract, reader: jspb.BinaryReader): AddressADXPCensusTract;
}

export namespace AddressADXPCensusTract {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDelimiter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDelimiter.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDelimiter): AddressADXPDelimiter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDelimiter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDelimiter;
  static deserializeBinaryFromReader(message: AddressADXPDelimiter, reader: jspb.BinaryReader): AddressADXPDelimiter;
}

export namespace AddressADXPDelimiter {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryAddressLine extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryAddressLine.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryAddressLine): AddressADXPDeliveryAddressLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryAddressLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryAddressLine;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryAddressLine, reader: jspb.BinaryReader): AddressADXPDeliveryAddressLine;
}

export namespace AddressADXPDeliveryAddressLine {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationArea extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationArea.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationArea): AddressADXPDeliveryInstallationArea.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationArea;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationArea, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationArea;
}

export namespace AddressADXPDeliveryInstallationArea {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationQualifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationQualifier.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationQualifier): AddressADXPDeliveryInstallationQualifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationQualifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationQualifier;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationQualifier, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationQualifier;
}

export namespace AddressADXPDeliveryInstallationQualifier {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationType): AddressADXPDeliveryInstallationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationType;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationType, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationType;
}

export namespace AddressADXPDeliveryInstallationType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryMode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryMode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryMode): AddressADXPDeliveryMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryMode;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryMode, reader: jspb.BinaryReader): AddressADXPDeliveryMode;
}

export namespace AddressADXPDeliveryMode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryModeIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryModeIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryModeIdentifier): AddressADXPDeliveryModeIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryModeIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryModeIdentifier;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryModeIdentifier, reader: jspb.BinaryReader): AddressADXPDeliveryModeIdentifier;
}

export namespace AddressADXPDeliveryModeIdentifier {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDirection extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDirection.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDirection): AddressADXPDirection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDirection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDirection;
  static deserializeBinaryFromReader(message: AddressADXPDirection, reader: jspb.BinaryReader): AddressADXPDirection;
}

export namespace AddressADXPDirection {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPHouseNumber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPHouseNumber.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPHouseNumber): AddressADXPHouseNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPHouseNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPHouseNumber;
  static deserializeBinaryFromReader(message: AddressADXPHouseNumber, reader: jspb.BinaryReader): AddressADXPHouseNumber;
}

export namespace AddressADXPHouseNumber {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPHouseNumberNumeric extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPHouseNumberNumeric.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPHouseNumberNumeric): AddressADXPHouseNumberNumeric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPHouseNumberNumeric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPHouseNumberNumeric;
  static deserializeBinaryFromReader(message: AddressADXPHouseNumberNumeric, reader: jspb.BinaryReader): AddressADXPHouseNumberNumeric;
}

export namespace AddressADXPHouseNumberNumeric {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPPostBox extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPPostBox.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPPostBox): AddressADXPPostBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPPostBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPPostBox;
  static deserializeBinaryFromReader(message: AddressADXPPostBox, reader: jspb.BinaryReader): AddressADXPPostBox;
}

export namespace AddressADXPPostBox {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPPrecinct extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPPrecinct.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPPrecinct): AddressADXPPrecinct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPPrecinct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPPrecinct;
  static deserializeBinaryFromReader(message: AddressADXPPrecinct, reader: jspb.BinaryReader): AddressADXPPrecinct;
}

export namespace AddressADXPPrecinct {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetAddressLine extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetAddressLine.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetAddressLine): AddressADXPStreetAddressLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetAddressLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetAddressLine;
  static deserializeBinaryFromReader(message: AddressADXPStreetAddressLine, reader: jspb.BinaryReader): AddressADXPStreetAddressLine;
}

export namespace AddressADXPStreetAddressLine {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetName.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetName): AddressADXPStreetName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetName;
  static deserializeBinaryFromReader(message: AddressADXPStreetName, reader: jspb.BinaryReader): AddressADXPStreetName;
}

export namespace AddressADXPStreetName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetNameBase extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetNameBase.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetNameBase): AddressADXPStreetNameBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetNameBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetNameBase;
  static deserializeBinaryFromReader(message: AddressADXPStreetNameBase, reader: jspb.BinaryReader): AddressADXPStreetNameBase;
}

export namespace AddressADXPStreetNameBase {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetNameType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetNameType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetNameType): AddressADXPStreetNameType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetNameType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetNameType;
  static deserializeBinaryFromReader(message: AddressADXPStreetNameType, reader: jspb.BinaryReader): AddressADXPStreetNameType;
}

export namespace AddressADXPStreetNameType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPUnitID extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPUnitID.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPUnitID): AddressADXPUnitID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPUnitID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPUnitID;
  static deserializeBinaryFromReader(message: AddressADXPUnitID, reader: jspb.BinaryReader): AddressADXPUnitID;
}

export namespace AddressADXPUnitID {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPUnitType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPUnitType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPUnitType): AddressADXPUnitType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPUnitType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPUnitType;
  static deserializeBinaryFromReader(message: AddressADXPUnitType, reader: jspb.BinaryReader): AddressADXPUnitType;
}

export namespace AddressADXPUnitType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AddressGeolocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setLatitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setLongitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressGeolocation.AsObject;
  static toObject(includeInstance: boolean, msg: AddressGeolocation): AddressGeolocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressGeolocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressGeolocation;
  static deserializeBinaryFromReader(message: AddressGeolocation, reader: jspb.BinaryReader): AddressGeolocation;
}

export namespace AddressGeolocation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    latitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    longitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
  }
}

export class AllergyIntoleranceAdministration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceAdministration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceAdministration): AllergyIntoleranceAdministration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceAdministration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceAdministration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceAdministration, reader: jspb.BinaryReader): AllergyIntoleranceAdministration;
}

export namespace AllergyIntoleranceAdministration {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class AllergyIntoleranceAssertedDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceAssertedDate.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceAssertedDate): AllergyIntoleranceAssertedDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceAssertedDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceAssertedDate;
  static deserializeBinaryFromReader(message: AllergyIntoleranceAssertedDate, reader: jspb.BinaryReader): AllergyIntoleranceAssertedDate;
}

export namespace AllergyIntoleranceAssertedDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class AllergyIntoleranceCareplan extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCareplan.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCareplan): AllergyIntoleranceCareplan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCareplan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCareplan;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCareplan, reader: jspb.BinaryReader): AllergyIntoleranceCareplan;
}

export namespace AllergyIntoleranceCareplan {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class AllergyIntoleranceCertainty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCertainty.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCertainty): AllergyIntoleranceCertainty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCertainty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCertainty;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCertainty, reader: jspb.BinaryReader): AllergyIntoleranceCertainty;
}

export namespace AllergyIntoleranceCertainty {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceDuration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceDuration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceDuration): AllergyIntoleranceDuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceDuration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceDuration, reader: jspb.BinaryReader): AllergyIntoleranceDuration;
}

export namespace AllergyIntoleranceDuration {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
  }
}

export class AllergyIntoleranceExposureDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDate.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDate): AllergyIntoleranceExposureDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDate;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDate, reader: jspb.BinaryReader): AllergyIntoleranceExposureDate;
}

export namespace AllergyIntoleranceExposureDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class AllergyIntoleranceExposureDescription extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDescription.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDescription): AllergyIntoleranceExposureDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDescription;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDescription, reader: jspb.BinaryReader): AllergyIntoleranceExposureDescription;
}

export namespace AllergyIntoleranceExposureDescription {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AllergyIntoleranceExposureDuration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDuration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDuration): AllergyIntoleranceExposureDuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDuration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDuration, reader: jspb.BinaryReader): AllergyIntoleranceExposureDuration;
}

export namespace AllergyIntoleranceExposureDuration {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
  }
}

export class AllergyIntoleranceLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceLocation): AllergyIntoleranceLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceLocation;
  static deserializeBinaryFromReader(message: AllergyIntoleranceLocation, reader: jspb.BinaryReader): AllergyIntoleranceLocation;
}

export namespace AllergyIntoleranceLocation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceManagement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceManagement.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceManagement): AllergyIntoleranceManagement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceManagement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceManagement;
  static deserializeBinaryFromReader(message: AllergyIntoleranceManagement, reader: jspb.BinaryReader): AllergyIntoleranceManagement;
}

export namespace AllergyIntoleranceManagement {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AllergyIntoleranceReasonRefuted extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceReasonRefuted.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceReasonRefuted): AllergyIntoleranceReasonRefuted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceReasonRefuted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceReasonRefuted;
  static deserializeBinaryFromReader(message: AllergyIntoleranceReasonRefuted, reader: jspb.BinaryReader): AllergyIntoleranceReasonRefuted;
}

export namespace AllergyIntoleranceReasonRefuted {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceResolutionAge extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueAge(): boolean;
  clearValueAge(): void;
  getValueAge(): proto_r4_core_datatypes_pb.Age | undefined;
  setValueAge(value?: proto_r4_core_datatypes_pb.Age): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceResolutionAge.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceResolutionAge): AllergyIntoleranceResolutionAge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceResolutionAge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceResolutionAge;
  static deserializeBinaryFromReader(message: AllergyIntoleranceResolutionAge, reader: jspb.BinaryReader): AllergyIntoleranceResolutionAge;
}

export namespace AllergyIntoleranceResolutionAge {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueAge?: proto_r4_core_datatypes_pb.Age.AsObject,
  }
}

export class AllergyIntoleranceSubstanceExposureRisk extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasSubstance(): boolean;
  clearSubstance(): void;
  getSubstance(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSubstance(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasExposureRisk(): boolean;
  clearExposureRisk(): void;
  getExposureRisk(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setExposureRisk(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSubstanceExposureRisk.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSubstanceExposureRisk): AllergyIntoleranceSubstanceExposureRisk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSubstanceExposureRisk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSubstanceExposureRisk;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSubstanceExposureRisk, reader: jspb.BinaryReader): AllergyIntoleranceSubstanceExposureRisk;
}

export namespace AllergyIntoleranceSubstanceExposureRisk {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    exposureRisk?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceTest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceTest.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceTest): AllergyIntoleranceTest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceTest;
  static deserializeBinaryFromReader(message: AllergyIntoleranceTest, reader: jspb.BinaryReader): AllergyIntoleranceTest;
}

export namespace AllergyIntoleranceTest {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class AnimalSpecies extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnimalSpecies.AsObject;
  static toObject(includeInstance: boolean, msg: AnimalSpecies): AnimalSpecies.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnimalSpecies, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnimalSpecies;
  static deserializeBinaryFromReader(message: AnimalSpecies, reader: jspb.BinaryReader): AnimalSpecies;
}

export namespace AnimalSpecies {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ApproachBodyStructure extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApproachBodyStructure.AsObject;
  static toObject(includeInstance: boolean, msg: ApproachBodyStructure): ApproachBodyStructure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApproachBodyStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApproachBodyStructure;
  static deserializeBinaryFromReader(message: ApproachBodyStructure, reader: jspb.BinaryReader): ApproachBodyStructure;
}

export namespace ApproachBodyStructure {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ApprovalDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalDate.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalDate): ApprovalDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovalDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalDate;
  static deserializeBinaryFromReader(message: ApprovalDate, reader: jspb.BinaryReader): ApprovalDate;
}

export namespace ApprovalDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class AttachmentCitation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentCitation.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentCitation): AttachmentCitation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentCitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentCitation;
  static deserializeBinaryFromReader(message: AttachmentCitation, reader: jspb.BinaryReader): AttachmentCitation;
}

export namespace AttachmentCitation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class AttachmentQualityOfEvidence extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentQualityOfEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentQualityOfEvidence): AttachmentQualityOfEvidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentQualityOfEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentQualityOfEvidence;
  static deserializeBinaryFromReader(message: AttachmentQualityOfEvidence, reader: jspb.BinaryReader): AttachmentQualityOfEvidence;
}

export namespace AttachmentQualityOfEvidence {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AttachmentStrengthOfRecommendation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentStrengthOfRecommendation.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentStrengthOfRecommendation): AttachmentStrengthOfRecommendation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentStrengthOfRecommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentStrengthOfRecommendation;
  static deserializeBinaryFromReader(message: AttachmentStrengthOfRecommendation, reader: jspb.BinaryReader): AttachmentStrengthOfRecommendation;
}

export namespace AttachmentStrengthOfRecommendation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AuditEventAccession extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAccession.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAccession): AuditEventAccession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAccession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAccession;
  static deserializeBinaryFromReader(message: AuditEventAccession, reader: jspb.BinaryReader): AuditEventAccession;
}

export namespace AuditEventAccession {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventAnonymized extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAnonymized.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAnonymized): AuditEventAnonymized.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAnonymized, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAnonymized;
  static deserializeBinaryFromReader(message: AuditEventAnonymized, reader: jspb.BinaryReader): AuditEventAnonymized;
}

export namespace AuditEventAnonymized {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class AuditEventEncrypted extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventEncrypted.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventEncrypted): AuditEventEncrypted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventEncrypted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventEncrypted;
  static deserializeBinaryFromReader(message: AuditEventEncrypted, reader: jspb.BinaryReader): AuditEventEncrypted;
}

export namespace AuditEventEncrypted {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class AuditEventInstance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventInstance.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventInstance): AuditEventInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventInstance;
  static deserializeBinaryFromReader(message: AuditEventInstance, reader: jspb.BinaryReader): AuditEventInstance;
}

export namespace AuditEventInstance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventMPPS extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventMPPS.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventMPPS): AuditEventMPPS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventMPPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventMPPS;
  static deserializeBinaryFromReader(message: AuditEventMPPS, reader: jspb.BinaryReader): AuditEventMPPS;
}

export namespace AuditEventMPPS {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventNumberOfInstances extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventNumberOfInstances.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventNumberOfInstances): AuditEventNumberOfInstances.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventNumberOfInstances, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventNumberOfInstances;
  static deserializeBinaryFromReader(message: AuditEventNumberOfInstances, reader: jspb.BinaryReader): AuditEventNumberOfInstances;
}

export namespace AuditEventNumberOfInstances {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class AuditEventParticipantObjectContainsStudy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventParticipantObjectContainsStudy.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventParticipantObjectContainsStudy): AuditEventParticipantObjectContainsStudy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventParticipantObjectContainsStudy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventParticipantObjectContainsStudy;
  static deserializeBinaryFromReader(message: AuditEventParticipantObjectContainsStudy, reader: jspb.BinaryReader): AuditEventParticipantObjectContainsStudy;
}

export namespace AuditEventParticipantObjectContainsStudy {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventSOPClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventSOPClass.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventSOPClass): AuditEventSOPClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventSOPClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventSOPClass;
  static deserializeBinaryFromReader(message: AuditEventSOPClass, reader: jspb.BinaryReader): AuditEventSOPClass;
}

export namespace AuditEventSOPClass {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BasicEncounterClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicEncounterClass.AsObject;
  static toObject(includeInstance: boolean, msg: BasicEncounterClass): BasicEncounterClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicEncounterClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicEncounterClass;
  static deserializeBinaryFromReader(message: BasicEncounterClass, reader: jspb.BinaryReader): BasicEncounterClass;
}

export namespace BasicEncounterClass {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicEncounterType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicEncounterType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicEncounterType): BasicEncounterType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicEncounterType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicEncounterType;
  static deserializeBinaryFromReader(message: BasicEncounterType, reader: jspb.BinaryReader): BasicEncounterType;
}

export namespace BasicEncounterType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicInitiatingOrganization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicInitiatingOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: BasicInitiatingOrganization): BasicInitiatingOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicInitiatingOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicInitiatingOrganization;
  static deserializeBinaryFromReader(message: BasicInitiatingOrganization, reader: jspb.BinaryReader): BasicInitiatingOrganization;
}

export namespace BasicInitiatingOrganization {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BasicInitiatingPerson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicInitiatingPerson.AsObject;
  static toObject(includeInstance: boolean, msg: BasicInitiatingPerson): BasicInitiatingPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicInitiatingPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicInitiatingPerson;
  static deserializeBinaryFromReader(message: BasicInitiatingPerson, reader: jspb.BinaryReader): BasicInitiatingPerson;
}

export namespace BasicInitiatingPerson {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BasicReceivingOrganization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicReceivingOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: BasicReceivingOrganization): BasicReceivingOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicReceivingOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicReceivingOrganization;
  static deserializeBinaryFromReader(message: BasicReceivingOrganization, reader: jspb.BinaryReader): BasicReceivingOrganization;
}

export namespace BasicReceivingOrganization {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BasicReceivingPerson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicReceivingPerson.AsObject;
  static toObject(includeInstance: boolean, msg: BasicReceivingPerson): BasicReceivingPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicReceivingPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicReceivingPerson;
  static deserializeBinaryFromReader(message: BasicReceivingPerson, reader: jspb.BinaryReader): BasicReceivingPerson;
}

export namespace BasicReceivingPerson {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BasicRecipientLanguage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicRecipientLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: BasicRecipientLanguage): BasicRecipientLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicRecipientLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicRecipientLanguage;
  static deserializeBinaryFromReader(message: BasicRecipientLanguage, reader: jspb.BinaryReader): BasicRecipientLanguage;
}

export namespace BasicRecipientLanguage {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicRecipientType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicRecipientType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicRecipientType): BasicRecipientType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicRecipientType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicRecipientType;
  static deserializeBinaryFromReader(message: BasicRecipientType, reader: jspb.BinaryReader): BasicRecipientType;
}

export namespace BasicRecipientType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserLanguage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserLanguage): BasicSystemUserLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserLanguage;
  static deserializeBinaryFromReader(message: BasicSystemUserLanguage, reader: jspb.BinaryReader): BasicSystemUserLanguage;
}

export namespace BasicSystemUserLanguage {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserTaskContext extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserTaskContext.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserTaskContext): BasicSystemUserTaskContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserTaskContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserTaskContext;
  static deserializeBinaryFromReader(message: BasicSystemUserTaskContext, reader: jspb.BinaryReader): BasicSystemUserTaskContext;
}

export namespace BasicSystemUserTaskContext {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserType): BasicSystemUserType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserType;
  static deserializeBinaryFromReader(message: BasicSystemUserType, reader: jspb.BinaryReader): BasicSystemUserType;
}

export namespace BasicSystemUserType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BodyPosition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyPosition.AsObject;
  static toObject(includeInstance: boolean, msg: BodyPosition): BodyPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyPosition;
  static deserializeBinaryFromReader(message: BodyPosition, reader: jspb.BinaryReader): BodyPosition;
}

export namespace BodyPosition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BodyStructureReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyStructureReference.AsObject;
  static toObject(includeInstance: boolean, msg: BodyStructureReference): BodyStructureReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyStructureReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyStructureReference;
  static deserializeBinaryFromReader(message: BodyStructureReference, reader: jspb.BinaryReader): BodyStructureReference;
}

export namespace BodyStructureReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class BundleHttpResponseHeader extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleHttpResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BundleHttpResponseHeader): BundleHttpResponseHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleHttpResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleHttpResponseHeader;
  static deserializeBinaryFromReader(message: BundleHttpResponseHeader, reader: jspb.BinaryReader): BundleHttpResponseHeader;
}

export namespace BundleHttpResponseHeader {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class BundleLocationDistance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDistance(): boolean;
  clearValueDistance(): void;
  getValueDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
  setValueDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleLocationDistance.AsObject;
  static toObject(includeInstance: boolean, msg: BundleLocationDistance): BundleLocationDistance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleLocationDistance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleLocationDistance;
  static deserializeBinaryFromReader(message: BundleLocationDistance, reader: jspb.BinaryReader): BundleLocationDistance;
}

export namespace BundleLocationDistance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDistance?: proto_r4_core_datatypes_pb.Distance.AsObject,
  }
}

export class BundleMatchGrade extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): BundleMatchGrade.ValueCode | undefined;
  setValueCode(value?: BundleMatchGrade.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleMatchGrade.AsObject;
  static toObject(includeInstance: boolean, msg: BundleMatchGrade): BundleMatchGrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleMatchGrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleMatchGrade;
  static deserializeBinaryFromReader(message: BundleMatchGrade, reader: jspb.BinaryReader): BundleMatchGrade;
}

export namespace BundleMatchGrade {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: BundleMatchGrade.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MatchGradeCode.ValueMap[keyof proto_r4_core_codes_pb.MatchGradeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MatchGradeCode.ValueMap[keyof proto_r4_core_codes_pb.MatchGradeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MatchGradeCode.ValueMap[keyof proto_r4_core_codes_pb.MatchGradeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class CalculatedValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculatedValue.AsObject;
  static toObject(includeInstance: boolean, msg: CalculatedValue): CalculatedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculatedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculatedValue;
  static deserializeBinaryFromReader(message: CalculatedValue, reader: jspb.BinaryReader): CalculatedValue;
}

export namespace CalculatedValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CanonicalDisplayName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CanonicalDisplayName.AsObject;
  static toObject(includeInstance: boolean, msg: CanonicalDisplayName): CanonicalDisplayName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CanonicalDisplayName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CanonicalDisplayName;
  static deserializeBinaryFromReader(message: CanonicalDisplayName, reader: jspb.BinaryReader): CanonicalDisplayName;
}

export namespace CanonicalDisplayName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CapabilityStatementCapabilities extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): CapabilityStatementCapabilities.ValueCode | undefined;
  setValueCode(value?: CapabilityStatementCapabilities.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementCapabilities): CapabilityStatementCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementCapabilities;
  static deserializeBinaryFromReader(message: CapabilityStatementCapabilities, reader: jspb.BinaryReader): CapabilityStatementCapabilities;
}

export namespace CapabilityStatementCapabilities {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: CapabilityStatementCapabilities.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap[keyof proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap[keyof proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap[keyof proto_r4_core_codes_pb.SmartCapabilitiesCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class CapabilityStatementExpectation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): CapabilityStatementExpectation.ValueCode | undefined;
  setValueCode(value?: CapabilityStatementExpectation.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementExpectation.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementExpectation): CapabilityStatementExpectation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementExpectation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementExpectation;
  static deserializeBinaryFromReader(message: CapabilityStatementExpectation, reader: jspb.BinaryReader): CapabilityStatementExpectation;
}

export namespace CapabilityStatementExpectation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: CapabilityStatementExpectation.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap[keyof proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap[keyof proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap[keyof proto_r4_core_codes_pb.ConformanceExpectationCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class CapabilityStatementOauthUris extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasAuthorize(): boolean;
  clearAuthorize(): void;
  getAuthorize(): proto_r4_core_datatypes_pb.Uri | undefined;
  setAuthorize(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): proto_r4_core_datatypes_pb.Uri | undefined;
  setToken(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasRegister(): boolean;
  clearRegister(): void;
  getRegister(): proto_r4_core_datatypes_pb.Uri | undefined;
  setRegister(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasManage(): boolean;
  clearManage(): void;
  getManage(): proto_r4_core_datatypes_pb.Uri | undefined;
  setManage(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementOauthUris.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementOauthUris): CapabilityStatementOauthUris.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementOauthUris, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementOauthUris;
  static deserializeBinaryFromReader(message: CapabilityStatementOauthUris, reader: jspb.BinaryReader): CapabilityStatementOauthUris;
}

export namespace CapabilityStatementOauthUris {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    authorize?: proto_r4_core_datatypes_pb.Uri.AsObject,
    token?: proto_r4_core_datatypes_pb.Uri.AsObject,
    register?: proto_r4_core_datatypes_pb.Uri.AsObject,
    manage?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class CapabilityStatementProhibited extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementProhibited.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementProhibited): CapabilityStatementProhibited.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementProhibited, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementProhibited;
  static deserializeBinaryFromReader(message: CapabilityStatementProhibited, reader: jspb.BinaryReader): CapabilityStatementProhibited;
}

export namespace CapabilityStatementProhibited {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class CapabilityStatementSearchParameterCombination extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearRequiredList(): void;
  getRequiredList(): Array<proto_r4_core_datatypes_pb.String>;
  setRequiredList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addRequired(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearOptionalList(): void;
  getOptionalList(): Array<proto_r4_core_datatypes_pb.String>;
  setOptionalList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addOptional(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementSearchParameterCombination.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementSearchParameterCombination): CapabilityStatementSearchParameterCombination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementSearchParameterCombination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementSearchParameterCombination;
  static deserializeBinaryFromReader(message: CapabilityStatementSearchParameterCombination, reader: jspb.BinaryReader): CapabilityStatementSearchParameterCombination;
}

export namespace CapabilityStatementSearchParameterCombination {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    requiredList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    optionalList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
  }
}

export class CapabilityStatementSupportedSystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementSupportedSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementSupportedSystem): CapabilityStatementSupportedSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementSupportedSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementSupportedSystem;
  static deserializeBinaryFromReader(message: CapabilityStatementSupportedSystem, reader: jspb.BinaryReader): CapabilityStatementSupportedSystem;
}

export namespace CapabilityStatementSupportedSystem {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class CapabilityStatementWebsocket extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementWebsocket.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementWebsocket): CapabilityStatementWebsocket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementWebsocket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementWebsocket;
  static deserializeBinaryFromReader(message: CapabilityStatementWebsocket, reader: jspb.BinaryReader): CapabilityStatementWebsocket;
}

export namespace CapabilityStatementWebsocket {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class CarePlanActivityTitle extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityTitle.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityTitle): CarePlanActivityTitle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityTitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityTitle;
  static deserializeBinaryFromReader(message: CarePlanActivityTitle, reader: jspb.BinaryReader): CarePlanActivityTitle;
}

export namespace CarePlanActivityTitle {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemAlternate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.Code | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.Code): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_r4_core_datatypes_pb.Coding | undefined;
  setUse(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemAlternate.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemAlternate): CodeSystemAlternate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemAlternate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemAlternate;
  static deserializeBinaryFromReader(message: CodeSystemAlternate, reader: jspb.BinaryReader): CodeSystemAlternate;
}

export namespace CodeSystemAlternate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.Code.AsObject,
    use?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class CodeSystemAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemAuthor): CodeSystemAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemAuthor;
  static deserializeBinaryFromReader(message: CodeSystemAuthor, reader: jspb.BinaryReader): CodeSystemAuthor;
}

export namespace CodeSystemAuthor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemConceptComments extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemConceptComments.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemConceptComments): CodeSystemConceptComments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemConceptComments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemConceptComments;
  static deserializeBinaryFromReader(message: CodeSystemConceptComments, reader: jspb.BinaryReader): CodeSystemConceptComments;
}

export namespace CodeSystemConceptComments {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemConceptOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemConceptOrder.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemConceptOrder): CodeSystemConceptOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemConceptOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemConceptOrder;
  static deserializeBinaryFromReader(message: CodeSystemConceptOrder, reader: jspb.BinaryReader): CodeSystemConceptOrder;
}

export namespace CodeSystemConceptOrder {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class CodeSystemEffectiveDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemEffectiveDate.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemEffectiveDate): CodeSystemEffectiveDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemEffectiveDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemEffectiveDate;
  static deserializeBinaryFromReader(message: CodeSystemEffectiveDate, reader: jspb.BinaryReader): CodeSystemEffectiveDate;
}

export namespace CodeSystemEffectiveDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class CodeSystemExpirationDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemExpirationDate.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemExpirationDate): CodeSystemExpirationDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemExpirationDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemExpirationDate;
  static deserializeBinaryFromReader(message: CodeSystemExpirationDate, reader: jspb.BinaryReader): CodeSystemExpirationDate;
}

export namespace CodeSystemExpirationDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class CodeSystemHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearRevisionList(): void;
  getRevisionList(): Array<CodeSystemHistory.Revision>;
  setRevisionList(value: Array<CodeSystemHistory.Revision>): void;
  addRevision(value?: CodeSystemHistory.Revision, index?: number): CodeSystemHistory.Revision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemHistory.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemHistory): CodeSystemHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemHistory;
  static deserializeBinaryFromReader(message: CodeSystemHistory, reader: jspb.BinaryReader): CodeSystemHistory;
}

export namespace CodeSystemHistory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    revisionList: Array<CodeSystemHistory.Revision.AsObject>,
  }

  export class Revision extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasIdSlice(): boolean;
    clearIdSlice(): void;
    getIdSlice(): proto_r4_core_datatypes_pb.String | undefined;
    setIdSlice(value?: proto_r4_core_datatypes_pb.String): void;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): proto_r4_core_datatypes_pb.String | undefined;
    setAuthor(value?: proto_r4_core_datatypes_pb.String): void;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): proto_r4_core_datatypes_pb.String | undefined;
    setNotes(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Revision.AsObject;
    static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Revision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Revision;
    static deserializeBinaryFromReader(message: Revision, reader: jspb.BinaryReader): Revision;
  }

  export namespace Revision {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      idSlice?: proto_r4_core_datatypes_pb.String.AsObject,
      author?: proto_r4_core_datatypes_pb.String.AsObject,
      notes?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }
}

export class CodeSystemKeyWord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemKeyWord.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemKeyWord): CodeSystemKeyWord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemKeyWord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemKeyWord;
  static deserializeBinaryFromReader(message: CodeSystemKeyWord, reader: jspb.BinaryReader): CodeSystemKeyWord;
}

export namespace CodeSystemKeyWord {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemLabel): CodeSystemLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemLabel;
  static deserializeBinaryFromReader(message: CodeSystemLabel, reader: jspb.BinaryReader): CodeSystemLabel;
}

export namespace CodeSystemLabel {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemMap.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemMap): CodeSystemMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemMap;
  static deserializeBinaryFromReader(message: CodeSystemMap, reader: jspb.BinaryReader): CodeSystemMap;
}

export namespace CodeSystemMap {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class CodeSystemOtherName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasPreferred(): boolean;
  clearPreferred(): void;
  getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemOtherName.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemOtherName): CodeSystemOtherName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemOtherName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemOtherName;
  static deserializeBinaryFromReader(message: CodeSystemOtherName, reader: jspb.BinaryReader): CodeSystemOtherName;
}

export namespace CodeSystemOtherName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class CodeSystemReplacedby extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemReplacedby.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemReplacedby): CodeSystemReplacedby.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemReplacedby, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemReplacedby;
  static deserializeBinaryFromReader(message: CodeSystemReplacedby, reader: jspb.BinaryReader): CodeSystemReplacedby;
}

export namespace CodeSystemReplacedby {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class CodeSystemSourceReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemSourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemSourceReference): CodeSystemSourceReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemSourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemSourceReference;
  static deserializeBinaryFromReader(message: CodeSystemSourceReference, reader: jspb.BinaryReader): CodeSystemSourceReference;
}

export namespace CodeSystemSourceReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class CodeSystemTrustedExpansion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemTrustedExpansion.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemTrustedExpansion): CodeSystemTrustedExpansion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemTrustedExpansion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemTrustedExpansion;
  static deserializeBinaryFromReader(message: CodeSystemTrustedExpansion, reader: jspb.BinaryReader): CodeSystemTrustedExpansion;
}

export namespace CodeSystemTrustedExpansion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class CodeSystemUsage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): proto_r4_core_datatypes_pb.String | undefined;
  setUser(value?: proto_r4_core_datatypes_pb.String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_r4_core_datatypes_pb.String | undefined;
  setUse(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemUsage.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemUsage): CodeSystemUsage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemUsage;
  static deserializeBinaryFromReader(message: CodeSystemUsage, reader: jspb.BinaryReader): CodeSystemUsage;
}

export namespace CodeSystemUsage {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    user?: proto_r4_core_datatypes_pb.String.AsObject,
    use?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemWarning extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemWarning.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemWarning): CodeSystemWarning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemWarning;
  static deserializeBinaryFromReader(message: CodeSystemWarning, reader: jspb.BinaryReader): CodeSystemWarning;
}

export namespace CodeSystemWarning {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class CodeSystemWorkflowStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemWorkflowStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemWorkflowStatus): CodeSystemWorkflowStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemWorkflowStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemWorkflowStatus;
  static deserializeBinaryFromReader(message: CodeSystemWorkflowStatus, reader: jspb.BinaryReader): CodeSystemWorkflowStatus;
}

export namespace CodeSystemWorkflowStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CodingSctdescid extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueId(): boolean;
  clearValueId(): void;
  getValueId(): proto_r4_core_datatypes_pb.Id | undefined;
  setValueId(value?: proto_r4_core_datatypes_pb.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodingSctdescid.AsObject;
  static toObject(includeInstance: boolean, msg: CodingSctdescid): CodingSctdescid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingSctdescid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingSctdescid;
  static deserializeBinaryFromReader(message: CodingSctdescid, reader: jspb.BinaryReader): CodingSctdescid;
}

export namespace CodingSctdescid {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueId?: proto_r4_core_datatypes_pb.Id.AsObject,
  }
}

export class CommunicationMedia extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueAttachment(): boolean;
  clearValueAttachment(): void;
  getValueAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setValueAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationMedia.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationMedia): CommunicationMedia.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationMedia, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationMedia;
  static deserializeBinaryFromReader(message: CommunicationMedia, reader: jspb.BinaryReader): CommunicationMedia;
}

export namespace CommunicationMedia {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueAttachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
  }
}

export class CommunicationRequestInitiatingLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestInitiatingLocation.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestInitiatingLocation): CommunicationRequestInitiatingLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestInitiatingLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestInitiatingLocation;
  static deserializeBinaryFromReader(message: CommunicationRequestInitiatingLocation, reader: jspb.BinaryReader): CommunicationRequestInitiatingLocation;
}

export namespace CommunicationRequestInitiatingLocation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class CompositionOtherConfidentiality extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionOtherConfidentiality.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionOtherConfidentiality): CompositionOtherConfidentiality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionOtherConfidentiality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionOtherConfidentiality;
  static deserializeBinaryFromReader(message: CompositionOtherConfidentiality, reader: jspb.BinaryReader): CompositionOtherConfidentiality;
}

export namespace CompositionOtherConfidentiality {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class CompositionSectionSubject extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionSectionSubject.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionSectionSubject): CompositionSectionSubject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionSectionSubject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionSectionSubject;
  static deserializeBinaryFromReader(message: CompositionSectionSubject, reader: jspb.BinaryReader): CompositionSectionSubject;
}

export namespace CompositionSectionSubject {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class CompositionValidityPeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionValidityPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionValidityPeriod): CompositionValidityPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionValidityPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionValidityPeriod;
  static deserializeBinaryFromReader(message: CompositionValidityPeriod, reader: jspb.BinaryReader): CompositionValidityPeriod;
}

export namespace CompositionValidityPeriod {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class CompositionVersionNumber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionVersionNumber.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionVersionNumber): CompositionVersionNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionVersionNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionVersionNumber;
  static deserializeBinaryFromReader(message: CompositionVersionNumber, reader: jspb.BinaryReader): CompositionVersionNumber;
}

export namespace CompositionVersionNumber {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ConceptMapBidirectional extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapBidirectional.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapBidirectional): ConceptMapBidirectional.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapBidirectional, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapBidirectional;
  static deserializeBinaryFromReader(message: ConceptMapBidirectional, reader: jspb.BinaryReader): ConceptMapBidirectional;
}

export namespace ConceptMapBidirectional {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ConditionAssertedDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionAssertedDate.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionAssertedDate): ConditionAssertedDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionAssertedDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionAssertedDate;
  static deserializeBinaryFromReader(message: ConditionAssertedDate, reader: jspb.BinaryReader): ConditionAssertedDate;
}

export namespace ConditionAssertedDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class ConditionBasedOn extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionBasedOn.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionBasedOn): ConditionBasedOn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionBasedOn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionBasedOn;
  static deserializeBinaryFromReader(message: ConditionBasedOn, reader: jspb.BinaryReader): ConditionBasedOn;
}

export namespace ConditionBasedOn {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ConditionDueTo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionDueTo.ValueX | undefined;
  setValue(value?: ConditionDueTo.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionDueTo.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionDueTo): ConditionDueTo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionDueTo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionDueTo;
  static deserializeBinaryFromReader(message: ConditionDueTo, reader: jspb.BinaryReader): ConditionDueTo;
}

export namespace ConditionDueTo {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ConditionDueTo.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class ConditionOccurredFollowing extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionOccurredFollowing.ValueX | undefined;
  setValue(value?: ConditionOccurredFollowing.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionOccurredFollowing.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionOccurredFollowing): ConditionOccurredFollowing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionOccurredFollowing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionOccurredFollowing;
  static deserializeBinaryFromReader(message: ConditionOccurredFollowing, reader: jspb.BinaryReader): ConditionOccurredFollowing;
}

export namespace ConditionOccurredFollowing {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ConditionOccurredFollowing.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class ConditionOutcome extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionOutcome.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionOutcome): ConditionOutcome.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionOutcome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionOutcome;
  static deserializeBinaryFromReader(message: ConditionOutcome, reader: jspb.BinaryReader): ConditionOutcome;
}

export namespace ConditionOutcome {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ConditionRelated extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionRelated.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionRelated): ConditionRelated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionRelated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionRelated;
  static deserializeBinaryFromReader(message: ConditionRelated, reader: jspb.BinaryReader): ConditionRelated;
}

export namespace ConditionRelated {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ConditionRuledOut extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionRuledOut.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionRuledOut): ConditionRuledOut.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionRuledOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionRuledOut;
  static deserializeBinaryFromReader(message: ConditionRuledOut, reader: jspb.BinaryReader): ConditionRuledOut;
}

export namespace ConditionRuledOut {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ConsentLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentLocation): ConsentLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentLocation;
  static deserializeBinaryFromReader(message: ConsentLocation, reader: jspb.BinaryReader): ConsentLocation;
}

export namespace ConsentLocation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ConsentNotificationEndpoint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentNotificationEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentNotificationEndpoint): ConsentNotificationEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentNotificationEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentNotificationEndpoint;
  static deserializeBinaryFromReader(message: ConsentNotificationEndpoint, reader: jspb.BinaryReader): ConsentNotificationEndpoint;
}

export namespace ConsentNotificationEndpoint {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ConsentTranscriber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentTranscriber.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentTranscriber): ConsentTranscriber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentTranscriber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentTranscriber;
  static deserializeBinaryFromReader(message: ConsentTranscriber, reader: jspb.BinaryReader): ConsentTranscriber;
}

export namespace ConsentTranscriber {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ConsentWitness extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentWitness.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentWitness): ConsentWitness.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentWitness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentWitness;
  static deserializeBinaryFromReader(message: ConsentWitness, reader: jspb.BinaryReader): ConsentWitness;
}

export namespace ConsentWitness {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ContactPointArea extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointArea.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointArea): ContactPointArea.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointArea;
  static deserializeBinaryFromReader(message: ContactPointArea, reader: jspb.BinaryReader): ContactPointArea;
}

export namespace ContactPointArea {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ContactPointCountry extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointCountry.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointCountry): ContactPointCountry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointCountry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointCountry;
  static deserializeBinaryFromReader(message: ContactPointCountry, reader: jspb.BinaryReader): ContactPointCountry;
}

export namespace ContactPointCountry {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ContactPointExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointExtension.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointExtension): ContactPointExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointExtension;
  static deserializeBinaryFromReader(message: ContactPointExtension, reader: jspb.BinaryReader): ContactPointExtension;
}

export namespace ContactPointExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ContactPointLocal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointLocal.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointLocal): ContactPointLocal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointLocal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointLocal;
  static deserializeBinaryFromReader(message: ContactPointLocal, reader: jspb.BinaryReader): ContactPointLocal;
}

export namespace ContactPointLocal {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ContactPointTELAddress extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUrl(): boolean;
  clearValueUrl(): void;
  getValueUrl(): proto_r4_core_datatypes_pb.Url | undefined;
  setValueUrl(value?: proto_r4_core_datatypes_pb.Url): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointTELAddress.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointTELAddress): ContactPointTELAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointTELAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointTELAddress;
  static deserializeBinaryFromReader(message: ContactPointTELAddress, reader: jspb.BinaryReader): ContactPointTELAddress;
}

export namespace ContactPointTELAddress {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUrl?: proto_r4_core_datatypes_pb.Url.AsObject,
  }
}

export class CqfExpression extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueExpression(): boolean;
  clearValueExpression(): void;
  getValueExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
  setValueExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CqfExpression.AsObject;
  static toObject(includeInstance: boolean, msg: CqfExpression): CqfExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CqfExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CqfExpression;
  static deserializeBinaryFromReader(message: CqfExpression, reader: jspb.BinaryReader): CqfExpression;
}

export namespace CqfExpression {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueExpression?: proto_r4_core_datatypes_pb.Expression.AsObject,
  }
}

export class CqfLibrary extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CqfLibrary.AsObject;
  static toObject(includeInstance: boolean, msg: CqfLibrary): CqfLibrary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CqfLibrary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CqfLibrary;
  static deserializeBinaryFromReader(message: CqfLibrary, reader: jspb.BinaryReader): CqfLibrary;
}

export namespace CqfLibrary {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class DataAbsentReason extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): DataAbsentReason.ValueCode | undefined;
  setValueCode(value?: DataAbsentReason.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAbsentReason.AsObject;
  static toObject(includeInstance: boolean, msg: DataAbsentReason): DataAbsentReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAbsentReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAbsentReason;
  static deserializeBinaryFromReader(message: DataAbsentReason, reader: jspb.BinaryReader): DataAbsentReason;
}

export namespace DataAbsentReason {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: DataAbsentReason.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap[keyof proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap[keyof proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap[keyof proto_r4_core_codes_pb.DataAbsentReasonCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class DateTimezoneOffset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTimezoneOffset.AsObject;
  static toObject(includeInstance: boolean, msg: DateTimezoneOffset): DateTimezoneOffset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTimezoneOffset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTimezoneOffset;
  static deserializeBinaryFromReader(message: DateTimezoneOffset, reader: jspb.BinaryReader): DateTimezoneOffset;
}

export namespace DateTimezoneOffset {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class DaysOfCycle extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearDayList(): void;
  getDayList(): Array<proto_r4_core_datatypes_pb.Integer>;
  setDayList(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
  addDay(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaysOfCycle.AsObject;
  static toObject(includeInstance: boolean, msg: DaysOfCycle): DaysOfCycle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DaysOfCycle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaysOfCycle;
  static deserializeBinaryFromReader(message: DaysOfCycle, reader: jspb.BinaryReader): DaysOfCycle;
}

export namespace DaysOfCycle {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    dayList: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
  }
}

export class DecimalPrecision extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecimalPrecision.AsObject;
  static toObject(includeInstance: boolean, msg: DecimalPrecision): DecimalPrecision.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DecimalPrecision, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecimalPrecision;
  static deserializeBinaryFromReader(message: DecimalPrecision, reader: jspb.BinaryReader): DecimalPrecision;
}

export namespace DecimalPrecision {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class DesignNote extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DesignNote.AsObject;
  static toObject(includeInstance: boolean, msg: DesignNote): DesignNote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DesignNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DesignNote;
  static deserializeBinaryFromReader(message: DesignNote, reader: jspb.BinaryReader): DesignNote;
}

export namespace DesignNote {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class DeviceImplantStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): DeviceImplantStatus.ValueCode | undefined;
  setValueCode(value?: DeviceImplantStatus.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceImplantStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceImplantStatus): DeviceImplantStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceImplantStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceImplantStatus;
  static deserializeBinaryFromReader(message: DeviceImplantStatus, reader: jspb.BinaryReader): DeviceImplantStatus;
}

export namespace DeviceImplantStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: DeviceImplantStatus.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ImplantStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImplantStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ImplantStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImplantStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ImplantStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImplantStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class DeviceRequestPatientInstruction extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasLang(): boolean;
  clearLang(): void;
  getLang(): proto_r4_core_datatypes_pb.Code | undefined;
  setLang(value?: proto_r4_core_datatypes_pb.Code): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_r4_core_datatypes_pb.String | undefined;
  setContent(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceRequestPatientInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceRequestPatientInstruction): DeviceRequestPatientInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceRequestPatientInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceRequestPatientInstruction;
  static deserializeBinaryFromReader(message: DeviceRequestPatientInstruction, reader: jspb.BinaryReader): DeviceRequestPatientInstruction;
}

export namespace DeviceRequestPatientInstruction {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    lang?: proto_r4_core_datatypes_pb.Code.AsObject,
    content?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class DiagnosticReportAddendumOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAddendumOf.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAddendumOf): DiagnosticReportAddendumOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAddendumOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAddendumOf;
  static deserializeBinaryFromReader(message: DiagnosticReportAddendumOf, reader: jspb.BinaryReader): DiagnosticReportAddendumOf;
}

export namespace DiagnosticReportAddendumOf {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportAlleleDatabase extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAlleleDatabase.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAlleleDatabase): DiagnosticReportAlleleDatabase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAlleleDatabase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAlleleDatabase;
  static deserializeBinaryFromReader(message: DiagnosticReportAlleleDatabase, reader: jspb.BinaryReader): DiagnosticReportAlleleDatabase;
}

export namespace DiagnosticReportAlleleDatabase {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportAnalysis extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAnalysis.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAnalysis): DiagnosticReportAnalysis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAnalysis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAnalysis;
  static deserializeBinaryFromReader(message: DiagnosticReportAnalysis, reader: jspb.BinaryReader): DiagnosticReportAnalysis;
}

export namespace DiagnosticReportAnalysis {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportAssessedCondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAssessedCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAssessedCondition): DiagnosticReportAssessedCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAssessedCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAssessedCondition;
  static deserializeBinaryFromReader(message: DiagnosticReportAssessedCondition, reader: jspb.BinaryReader): DiagnosticReportAssessedCondition;
}

export namespace DiagnosticReportAssessedCondition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportExtends extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportExtends.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportExtends): DiagnosticReportExtends.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportExtends, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportExtends;
  static deserializeBinaryFromReader(message: DiagnosticReportExtends, reader: jspb.BinaryReader): DiagnosticReportExtends;
}

export namespace DiagnosticReportExtends {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportFamilyMemberHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportFamilyMemberHistory.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportFamilyMemberHistory): DiagnosticReportFamilyMemberHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportFamilyMemberHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportFamilyMemberHistory;
  static deserializeBinaryFromReader(message: DiagnosticReportFamilyMemberHistory, reader: jspb.BinaryReader): DiagnosticReportFamilyMemberHistory;
}

export namespace DiagnosticReportFamilyMemberHistory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportGlstring extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_r4_core_datatypes_pb.String | undefined;
  setText(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportGlstring.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportGlstring): DiagnosticReportGlstring.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportGlstring, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportGlstring;
  static deserializeBinaryFromReader(message: DiagnosticReportGlstring, reader: jspb.BinaryReader): DiagnosticReportGlstring;
}

export namespace DiagnosticReportGlstring {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    text?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class DiagnosticReportHaploid extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasLocus(): boolean;
  clearLocus(): void;
  getLocus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLocus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportHaploid.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportHaploid): DiagnosticReportHaploid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportHaploid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportHaploid;
  static deserializeBinaryFromReader(message: DiagnosticReportHaploid, reader: jspb.BinaryReader): DiagnosticReportHaploid;
}

export namespace DiagnosticReportHaploid {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    locus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportItem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasGeneticsObservation(): boolean;
  clearGeneticsObservation(): void;
  getGeneticsObservation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setGeneticsObservation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_r4_core_datatypes_pb.Code | undefined;
  setStatus(value?: proto_r4_core_datatypes_pb.Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportItem.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportItem): DiagnosticReportItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportItem;
  static deserializeBinaryFromReader(message: DiagnosticReportItem, reader: jspb.BinaryReader): DiagnosticReportItem;
}

export namespace DiagnosticReportItem {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    geneticsObservation?: proto_r4_core_datatypes_pb.Reference.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    status?: proto_r4_core_datatypes_pb.Code.AsObject,
  }
}

export class DiagnosticReportLocationPerformed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportLocationPerformed.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportLocationPerformed): DiagnosticReportLocationPerformed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportLocationPerformed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportLocationPerformed;
  static deserializeBinaryFromReader(message: DiagnosticReportLocationPerformed, reader: jspb.BinaryReader): DiagnosticReportLocationPerformed;
}

export namespace DiagnosticReportLocationPerformed {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportMethod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportMethod.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportMethod): DiagnosticReportMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportMethod;
  static deserializeBinaryFromReader(message: DiagnosticReportMethod, reader: jspb.BinaryReader): DiagnosticReportMethod;
}

export namespace DiagnosticReportMethod {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportReferences extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearReferenceList(): void;
  getReferenceList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setReferenceList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addReference(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportReferences.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportReferences): DiagnosticReportReferences.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportReferences, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportReferences;
  static deserializeBinaryFromReader(message: DiagnosticReportReferences, reader: jspb.BinaryReader): DiagnosticReportReferences;
}

export namespace DiagnosticReportReferences {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    referenceList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportReplaces): DiagnosticReportReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportReplaces;
  static deserializeBinaryFromReader(message: DiagnosticReportReplaces, reader: jspb.BinaryReader): DiagnosticReportReplaces;
}

export namespace DiagnosticReportReplaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportSummaryOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportSummaryOf.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportSummaryOf): DiagnosticReportSummaryOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportSummaryOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportSummaryOf;
  static deserializeBinaryFromReader(message: DiagnosticReportSummaryOf, reader: jspb.BinaryReader): DiagnosticReportSummaryOf;
}

export namespace DiagnosticReportSummaryOf {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class DirectedBy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): DirectedBy.ValueX | undefined;
  setValue(value?: DirectedBy.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectedBy.AsObject;
  static toObject(includeInstance: boolean, msg: DirectedBy): DirectedBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectedBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectedBy;
  static deserializeBinaryFromReader(message: DirectedBy, reader: jspb.BinaryReader): DirectedBy;
}

export namespace DirectedBy {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: DirectedBy.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class EffectivePeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectivePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: EffectivePeriod): EffectivePeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectivePeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectivePeriod;
  static deserializeBinaryFromReader(message: EffectivePeriod, reader: jspb.BinaryReader): EffectivePeriod;
}

export namespace EffectivePeriod {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valuePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
  }
}

export class ElementDefinitionAllowedUnits extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionAllowedUnits.ValueX | undefined;
  setValue(value?: ElementDefinitionAllowedUnits.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionAllowedUnits.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionAllowedUnits): ElementDefinitionAllowedUnits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionAllowedUnits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionAllowedUnits;
  static deserializeBinaryFromReader(message: ElementDefinitionAllowedUnits, reader: jspb.BinaryReader): ElementDefinitionAllowedUnits;
}

export namespace ElementDefinitionAllowedUnits {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ElementDefinitionAllowedUnits.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      CANONICAL = 2,
    }
  }
}

export class ElementDefinitionBestpractice extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionBestpractice.ValueX | undefined;
  setValue(value?: ElementDefinitionBestpractice.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionBestpractice.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionBestpractice): ElementDefinitionBestpractice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionBestpractice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionBestpractice;
  static deserializeBinaryFromReader(message: ElementDefinitionBestpractice, reader: jspb.BinaryReader): ElementDefinitionBestpractice;
}

export namespace ElementDefinitionBestpractice {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ElementDefinitionBestpractice.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }
}

export class ElementDefinitionBestpracticeExplanation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionBestpracticeExplanation.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionBestpracticeExplanation): ElementDefinitionBestpracticeExplanation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionBestpracticeExplanation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionBestpracticeExplanation;
  static deserializeBinaryFromReader(message: ElementDefinitionBestpracticeExplanation, reader: jspb.BinaryReader): ElementDefinitionBestpracticeExplanation;
}

export namespace ElementDefinitionBestpracticeExplanation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class ElementDefinitionBindingName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionBindingName.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionBindingName): ElementDefinitionBindingName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionBindingName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionBindingName;
  static deserializeBinaryFromReader(message: ElementDefinitionBindingName, reader: jspb.BinaryReader): ElementDefinitionBindingName;
}

export namespace ElementDefinitionBindingName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionDisplayHint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionDisplayHint.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionDisplayHint): ElementDefinitionDisplayHint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionDisplayHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionDisplayHint;
  static deserializeBinaryFromReader(message: ElementDefinitionDisplayHint, reader: jspb.BinaryReader): ElementDefinitionDisplayHint;
}

export namespace ElementDefinitionDisplayHint {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionEquivalence extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): ElementDefinitionEquivalence.ValueCode | undefined;
  setValueCode(value?: ElementDefinitionEquivalence.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionEquivalence.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionEquivalence): ElementDefinitionEquivalence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionEquivalence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionEquivalence;
  static deserializeBinaryFromReader(message: ElementDefinitionEquivalence, reader: jspb.BinaryReader): ElementDefinitionEquivalence;
}

export namespace ElementDefinitionEquivalence {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: ElementDefinitionEquivalence.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class ElementDefinitionExplicitTypeName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionExplicitTypeName.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionExplicitTypeName): ElementDefinitionExplicitTypeName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionExplicitTypeName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionExplicitTypeName;
  static deserializeBinaryFromReader(message: ElementDefinitionExplicitTypeName, reader: jspb.BinaryReader): ElementDefinitionExplicitTypeName;
}

export namespace ElementDefinitionExplicitTypeName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionFhirType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUrl(): boolean;
  clearValueUrl(): void;
  getValueUrl(): proto_r4_core_datatypes_pb.Url | undefined;
  setValueUrl(value?: proto_r4_core_datatypes_pb.Url): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionFhirType.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionFhirType): ElementDefinitionFhirType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionFhirType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionFhirType;
  static deserializeBinaryFromReader(message: ElementDefinitionFhirType, reader: jspb.BinaryReader): ElementDefinitionFhirType;
}

export namespace ElementDefinitionFhirType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUrl?: proto_r4_core_datatypes_pb.Url.AsObject,
  }
}

export class ElementDefinitionHierarchy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionHierarchy.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionHierarchy): ElementDefinitionHierarchy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionHierarchy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionHierarchy;
  static deserializeBinaryFromReader(message: ElementDefinitionHierarchy, reader: jspb.BinaryReader): ElementDefinitionHierarchy;
}

export namespace ElementDefinitionHierarchy {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ElementDefinitionIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionIdentifier): ElementDefinitionIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionIdentifier;
  static deserializeBinaryFromReader(message: ElementDefinitionIdentifier, reader: jspb.BinaryReader): ElementDefinitionIdentifier;
}

export namespace ElementDefinitionIdentifier {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
  }
}

export class ElementDefinitionInheritedExtensibleValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionInheritedExtensibleValueSet.ValueX | undefined;
  setValue(value?: ElementDefinitionInheritedExtensibleValueSet.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionInheritedExtensibleValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionInheritedExtensibleValueSet): ElementDefinitionInheritedExtensibleValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionInheritedExtensibleValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionInheritedExtensibleValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionInheritedExtensibleValueSet, reader: jspb.BinaryReader): ElementDefinitionInheritedExtensibleValueSet;
}

export namespace ElementDefinitionInheritedExtensibleValueSet {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ElementDefinitionInheritedExtensibleValueSet.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
    }
  }
}

export class ElementDefinitionIsCommonBinding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionIsCommonBinding.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionIsCommonBinding): ElementDefinitionIsCommonBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionIsCommonBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionIsCommonBinding;
  static deserializeBinaryFromReader(message: ElementDefinitionIsCommonBinding, reader: jspb.BinaryReader): ElementDefinitionIsCommonBinding;
}

export namespace ElementDefinitionIsCommonBinding {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ElementDefinitionMaxValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionMaxValueSet.ValueX | undefined;
  setValue(value?: ElementDefinitionMaxValueSet.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionMaxValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionMaxValueSet): ElementDefinitionMaxValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionMaxValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionMaxValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionMaxValueSet, reader: jspb.BinaryReader): ElementDefinitionMaxValueSet;
}

export namespace ElementDefinitionMaxValueSet {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ElementDefinitionMaxValueSet.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
    }
  }
}

export class ElementDefinitionMinValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionMinValueSet.ValueX | undefined;
  setValue(value?: ElementDefinitionMinValueSet.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionMinValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionMinValueSet): ElementDefinitionMinValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionMinValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionMinValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionMinValueSet, reader: jspb.BinaryReader): ElementDefinitionMinValueSet;
}

export namespace ElementDefinitionMinValueSet {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: ElementDefinitionMinValueSet.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
    }
  }
}

export class ElementDefinitionObjectClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionObjectClass.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionObjectClass): ElementDefinitionObjectClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionObjectClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionObjectClass;
  static deserializeBinaryFromReader(message: ElementDefinitionObjectClass, reader: jspb.BinaryReader): ElementDefinitionObjectClass;
}

export namespace ElementDefinitionObjectClass {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class ElementDefinitionObjectClassProperty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionObjectClassProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionObjectClassProperty): ElementDefinitionObjectClassProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionObjectClassProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionObjectClassProperty;
  static deserializeBinaryFromReader(message: ElementDefinitionObjectClassProperty, reader: jspb.BinaryReader): ElementDefinitionObjectClassProperty;
}

export namespace ElementDefinitionObjectClassProperty {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class ElementDefinitionProfileElement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionProfileElement.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionProfileElement): ElementDefinitionProfileElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionProfileElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionProfileElement;
  static deserializeBinaryFromReader(message: ElementDefinitionProfileElement, reader: jspb.BinaryReader): ElementDefinitionProfileElement;
}

export namespace ElementDefinitionProfileElement {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionQuestion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionQuestion): ElementDefinitionQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionQuestion;
  static deserializeBinaryFromReader(message: ElementDefinitionQuestion, reader: jspb.BinaryReader): ElementDefinitionQuestion;
}

export namespace ElementDefinitionQuestion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionSelector extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionSelector): ElementDefinitionSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionSelector;
  static deserializeBinaryFromReader(message: ElementDefinitionSelector, reader: jspb.BinaryReader): ElementDefinitionSelector;
}

export namespace ElementDefinitionSelector {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionTranslatable extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionTranslatable.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionTranslatable): ElementDefinitionTranslatable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionTranslatable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionTranslatable;
  static deserializeBinaryFromReader(message: ElementDefinitionTranslatable, reader: jspb.BinaryReader): ElementDefinitionTranslatable;
}

export namespace ElementDefinitionTranslatable {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class EncounterAssociatedEncounter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterAssociatedEncounter.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterAssociatedEncounter): EncounterAssociatedEncounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterAssociatedEncounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterAssociatedEncounter;
  static deserializeBinaryFromReader(message: EncounterAssociatedEncounter, reader: jspb.BinaryReader): EncounterAssociatedEncounter;
}

export namespace EncounterAssociatedEncounter {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class EncounterModeOfArrival extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterModeOfArrival.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterModeOfArrival): EncounterModeOfArrival.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterModeOfArrival, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterModeOfArrival;
  static deserializeBinaryFromReader(message: EncounterModeOfArrival, reader: jspb.BinaryReader): EncounterModeOfArrival;
}

export namespace EncounterModeOfArrival {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class EncounterReasonCancelled extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterReasonCancelled.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterReasonCancelled): EncounterReasonCancelled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterReasonCancelled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterReasonCancelled;
  static deserializeBinaryFromReader(message: EncounterReasonCancelled, reader: jspb.BinaryReader): EncounterReasonCancelled;
}

export namespace EncounterReasonCancelled {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class EntryFormat extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntryFormat.AsObject;
  static toObject(includeInstance: boolean, msg: EntryFormat): EntryFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntryFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntryFormat;
  static deserializeBinaryFromReader(message: EntryFormat, reader: jspb.BinaryReader): EntryFormat;
}

export namespace EntryFormat {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class EpisodeOfCareExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpisodeOfCareExtension.AsObject;
  static toObject(includeInstance: boolean, msg: EpisodeOfCareExtension): EpisodeOfCareExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpisodeOfCareExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpisodeOfCareExtension;
  static deserializeBinaryFromReader(message: EpisodeOfCareExtension, reader: jspb.BinaryReader): EpisodeOfCareExtension;
}

export namespace EpisodeOfCareExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class EventHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventHistory.AsObject;
  static toObject(includeInstance: boolean, msg: EventHistory): EventHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventHistory;
  static deserializeBinaryFromReader(message: EventHistory, reader: jspb.BinaryReader): EventHistory;
}

export namespace EventHistory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryAbatement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): FamilyMemberHistoryAbatement.ValueX | undefined;
  setValue(value?: FamilyMemberHistoryAbatement.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryAbatement.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryAbatement): FamilyMemberHistoryAbatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryAbatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryAbatement;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryAbatement, reader: jspb.BinaryReader): FamilyMemberHistoryAbatement;
}

export namespace FamilyMemberHistoryAbatement {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: FamilyMemberHistoryAbatement.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      AGE = 2,
      BOOLEAN = 3,
    }
  }
}

export class FamilyMemberHistoryObservation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryObservation.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryObservation): FamilyMemberHistoryObservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryObservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryObservation;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryObservation, reader: jspb.BinaryReader): FamilyMemberHistoryObservation;
}

export namespace FamilyMemberHistoryObservation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryParent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryParent.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryParent): FamilyMemberHistoryParent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryParent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryParent;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryParent, reader: jspb.BinaryReader): FamilyMemberHistoryParent;
}

export namespace FamilyMemberHistoryParent {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryPatientRecord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryPatientRecord.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryPatientRecord): FamilyMemberHistoryPatientRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryPatientRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryPatientRecord;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryPatientRecord, reader: jspb.BinaryReader): FamilyMemberHistoryPatientRecord;
}

export namespace FamilyMemberHistoryPatientRecord {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistorySeverity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistorySeverity.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistorySeverity): FamilyMemberHistorySeverity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistorySeverity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistorySeverity;
  static deserializeBinaryFromReader(message: FamilyMemberHistorySeverity, reader: jspb.BinaryReader): FamilyMemberHistorySeverity;
}

export namespace FamilyMemberHistorySeverity {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class FamilyMemberHistorySibling extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistorySibling.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistorySibling): FamilyMemberHistorySibling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistorySibling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistorySibling;
  static deserializeBinaryFromReader(message: FamilyMemberHistorySibling, reader: jspb.BinaryReader): FamilyMemberHistorySibling;
}

export namespace FamilyMemberHistorySibling {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryType.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryType): FamilyMemberHistoryType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryType;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryType, reader: jspb.BinaryReader): FamilyMemberHistoryType;
}

export namespace FamilyMemberHistoryType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class FlagDetail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagDetail.AsObject;
  static toObject(includeInstance: boolean, msg: FlagDetail): FlagDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagDetail;
  static deserializeBinaryFromReader(message: FlagDetail, reader: jspb.BinaryReader): FlagDetail;
}

export namespace FlagDetail {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class FlagPriority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagPriority.AsObject;
  static toObject(includeInstance: boolean, msg: FlagPriority): FlagPriority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagPriority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagPriority;
  static deserializeBinaryFromReader(message: FlagPriority, reader: jspb.BinaryReader): FlagPriority;
}

export namespace FlagPriority {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class Fmm extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fmm.AsObject;
  static toObject(includeInstance: boolean, msg: Fmm): Fmm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fmm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fmm;
  static deserializeBinaryFromReader(message: Fmm, reader: jspb.BinaryReader): Fmm;
}

export namespace Fmm {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class GoalAcceptance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasIndividual(): boolean;
  clearIndividual(): void;
  getIndividual(): proto_r4_core_datatypes_pb.Reference | undefined;
  setIndividual(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): GoalAcceptance.StatusCode | undefined;
  setStatus(value?: GoalAcceptance.StatusCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalAcceptance.AsObject;
  static toObject(includeInstance: boolean, msg: GoalAcceptance): GoalAcceptance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalAcceptance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalAcceptance;
  static deserializeBinaryFromReader(message: GoalAcceptance, reader: jspb.BinaryReader): GoalAcceptance;
}

export namespace GoalAcceptance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    individual?: proto_r4_core_datatypes_pb.Reference.AsObject,
    status?: GoalAcceptance.StatusCode.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalAcceptanceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class GoalReasonRejected extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalReasonRejected.AsObject;
  static toObject(includeInstance: boolean, msg: GoalReasonRejected): GoalReasonRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalReasonRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalReasonRejected;
  static deserializeBinaryFromReader(message: GoalReasonRejected, reader: jspb.BinaryReader): GoalReasonRejected;
}

export namespace GoalReasonRejected {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class GoalRelationship extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
  setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalRelationship.AsObject;
  static toObject(includeInstance: boolean, msg: GoalRelationship): GoalRelationship.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalRelationship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalRelationship;
  static deserializeBinaryFromReader(message: GoalRelationship, reader: jspb.BinaryReader): GoalRelationship;
}

export namespace GoalRelationship {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    target?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class HumanLanguage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_r4_core_datatypes_pb.Code | undefined;
  setValueCode(value?: proto_r4_core_datatypes_pb.Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: HumanLanguage): HumanLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanLanguage;
  static deserializeBinaryFromReader(message: HumanLanguage, reader: jspb.BinaryReader): HumanLanguage;
}

export namespace HumanLanguage {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: proto_r4_core_datatypes_pb.Code.AsObject,
  }
}

export class HumanNameAssemblyOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): HumanNameAssemblyOrder.ValueCode | undefined;
  setValueCode(value?: HumanNameAssemblyOrder.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameAssemblyOrder.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameAssemblyOrder): HumanNameAssemblyOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameAssemblyOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameAssemblyOrder;
  static deserializeBinaryFromReader(message: HumanNameAssemblyOrder, reader: jspb.BinaryReader): HumanNameAssemblyOrder;
}

export namespace HumanNameAssemblyOrder {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: HumanNameAssemblyOrder.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.HumanNameAssemblyOrderValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class HumanNameENQualifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): HumanNameENQualifier.ValueCode | undefined;
  setValueCode(value?: HumanNameENQualifier.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameENQualifier.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameENQualifier): HumanNameENQualifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameENQualifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameENQualifier;
  static deserializeBinaryFromReader(message: HumanNameENQualifier, reader: jspb.BinaryReader): HumanNameENQualifier;
}

export namespace HumanNameENQualifier {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: HumanNameENQualifier.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EntityNamePartQualifierValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class HumanNameENRepresentation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): HumanNameENRepresentation.ValueCode | undefined;
  setValueCode(value?: HumanNameENRepresentation.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameENRepresentation.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameENRepresentation): HumanNameENRepresentation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameENRepresentation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameENRepresentation;
  static deserializeBinaryFromReader(message: HumanNameENRepresentation, reader: jspb.BinaryReader): HumanNameENRepresentation;
}

export namespace HumanNameENRepresentation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: HumanNameENRepresentation.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.NameRepresentationUseValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class HumanNameENUse extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): HumanNameENUse.ValueCode | undefined;
  setValueCode(value?: HumanNameENUse.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameENUse.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameENUse): HumanNameENUse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameENUse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameENUse;
  static deserializeBinaryFromReader(message: HumanNameENUse, reader: jspb.BinaryReader): HumanNameENUse;
}

export namespace HumanNameENUse {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: HumanNameENUse.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap[keyof proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap];
    setValue(value: proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap[keyof proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap[keyof proto_r4_core_codes_pb.V3EntityNameUseR2Code.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class HumanNameFathersFamily extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameFathersFamily.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameFathersFamily): HumanNameFathersFamily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameFathersFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameFathersFamily;
  static deserializeBinaryFromReader(message: HumanNameFathersFamily, reader: jspb.BinaryReader): HumanNameFathersFamily;
}

export namespace HumanNameFathersFamily {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class HumanNameMothersFamily extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameMothersFamily.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameMothersFamily): HumanNameMothersFamily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameMothersFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameMothersFamily;
  static deserializeBinaryFromReader(message: HumanNameMothersFamily, reader: jspb.BinaryReader): HumanNameMothersFamily;
}

export namespace HumanNameMothersFamily {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class HumanNameOwnName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameOwnName.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameOwnName): HumanNameOwnName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameOwnName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameOwnName;
  static deserializeBinaryFromReader(message: HumanNameOwnName, reader: jspb.BinaryReader): HumanNameOwnName;
}

export namespace HumanNameOwnName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class HumanNameOwnPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameOwnPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameOwnPrefix): HumanNameOwnPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameOwnPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameOwnPrefix;
  static deserializeBinaryFromReader(message: HumanNameOwnPrefix, reader: jspb.BinaryReader): HumanNameOwnPrefix;
}

export namespace HumanNameOwnPrefix {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class HumanNamePartnerName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNamePartnerName.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNamePartnerName): HumanNamePartnerName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNamePartnerName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNamePartnerName;
  static deserializeBinaryFromReader(message: HumanNamePartnerName, reader: jspb.BinaryReader): HumanNamePartnerName;
}

export namespace HumanNamePartnerName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class HumanNamePartnerPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNamePartnerPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNamePartnerPrefix): HumanNamePartnerPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNamePartnerPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNamePartnerPrefix;
  static deserializeBinaryFromReader(message: HumanNamePartnerPrefix, reader: jspb.BinaryReader): HumanNamePartnerPrefix;
}

export namespace HumanNamePartnerPrefix {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class IdentifierValidDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifierValidDate.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifierValidDate): IdentifierValidDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifierValidDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifierValidDate;
  static deserializeBinaryFromReader(message: IdentifierValidDate, reader: jspb.BinaryReader): IdentifierValidDate;
}

export namespace IdentifierValidDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class InitialValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitialValue.AsObject;
  static toObject(includeInstance: boolean, msg: InitialValue): InitialValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitialValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitialValue;
  static deserializeBinaryFromReader(message: InitialValue, reader: jspb.BinaryReader): InitialValue;
}

export namespace InitialValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class InstantiatesCanonical extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiatesCanonical.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiatesCanonical): InstantiatesCanonical.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantiatesCanonical, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiatesCanonical;
  static deserializeBinaryFromReader(message: InstantiatesCanonical, reader: jspb.BinaryReader): InstantiatesCanonical;
}

export namespace InstantiatesCanonical {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class InstantiatesUri extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstantiatesUri.AsObject;
  static toObject(includeInstance: boolean, msg: InstantiatesUri): InstantiatesUri.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstantiatesUri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstantiatesUri;
  static deserializeBinaryFromReader(message: InstantiatesUri, reader: jspb.BinaryReader): InstantiatesUri;
}

export namespace InstantiatesUri {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class LastReviewDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastReviewDate.AsObject;
  static toObject(includeInstance: boolean, msg: LastReviewDate): LastReviewDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastReviewDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastReviewDate;
  static deserializeBinaryFromReader(message: LastReviewDate, reader: jspb.BinaryReader): LastReviewDate;
}

export namespace LastReviewDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class ListChangeBase extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListChangeBase.AsObject;
  static toObject(includeInstance: boolean, msg: ListChangeBase): ListChangeBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListChangeBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListChangeBase;
  static deserializeBinaryFromReader(message: ListChangeBase, reader: jspb.BinaryReader): ListChangeBase;
}

export namespace ListChangeBase {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class LocationBoundaryGeojson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueAttachment(): boolean;
  clearValueAttachment(): void;
  getValueAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setValueAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationBoundaryGeojson.AsObject;
  static toObject(includeInstance: boolean, msg: LocationBoundaryGeojson): LocationBoundaryGeojson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationBoundaryGeojson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationBoundaryGeojson;
  static deserializeBinaryFromReader(message: LocationBoundaryGeojson, reader: jspb.BinaryReader): LocationBoundaryGeojson;
}

export namespace LocationBoundaryGeojson {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueAttachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
  }
}

export class LocationExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationExtension.AsObject;
  static toObject(includeInstance: boolean, msg: LocationExtension): LocationExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationExtension;
  static deserializeBinaryFromReader(message: LocationExtension, reader: jspb.BinaryReader): LocationExtension;
}

export namespace LocationExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class MaxDecimalPlaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxDecimalPlaces.AsObject;
  static toObject(includeInstance: boolean, msg: MaxDecimalPlaces): MaxDecimalPlaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxDecimalPlaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxDecimalPlaces;
  static deserializeBinaryFromReader(message: MaxDecimalPlaces, reader: jspb.BinaryReader): MaxDecimalPlaces;
}

export namespace MaxDecimalPlaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class MaxSize extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxSize.AsObject;
  static toObject(includeInstance: boolean, msg: MaxSize): MaxSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxSize;
  static deserializeBinaryFromReader(message: MaxSize, reader: jspb.BinaryReader): MaxSize;
}

export namespace MaxSize {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDecimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
  }
}

export class MeasureInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasMeasure(): boolean;
  clearMeasure(): void;
  getMeasure(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setMeasure(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): proto_r4_core_datatypes_pb.String | undefined;
  setGroupId(value?: proto_r4_core_datatypes_pb.String): void;

  hasPopulationId(): boolean;
  clearPopulationId(): void;
  getPopulationId(): proto_r4_core_datatypes_pb.String | undefined;
  setPopulationId(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureInfo): MeasureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureInfo;
  static deserializeBinaryFromReader(message: MeasureInfo, reader: jspb.BinaryReader): MeasureInfo;
}

export namespace MeasureInfo {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    measure?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    groupId?: proto_r4_core_datatypes_pb.String.AsObject,
    populationId?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class MessageHeaderMessageheaderResponseRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): MessageHeaderMessageheaderResponseRequest.ValueCode | undefined;
  setValueCode(value?: MessageHeaderMessageheaderResponseRequest.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeaderMessageheaderResponseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeaderMessageheaderResponseRequest): MessageHeaderMessageheaderResponseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageHeaderMessageheaderResponseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeaderMessageheaderResponseRequest;
  static deserializeBinaryFromReader(message: MessageHeaderMessageheaderResponseRequest, reader: jspb.BinaryReader): MessageHeaderMessageheaderResponseRequest;
}

export namespace MessageHeaderMessageheaderResponseRequest {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: MessageHeaderMessageheaderResponseRequest.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class MimeType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): MimeType.ValueCode | undefined;
  setValueCode(value?: MimeType.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimeType.AsObject;
  static toObject(includeInstance: boolean, msg: MimeType): MimeType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimeType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimeType;
  static deserializeBinaryFromReader(message: MimeType, reader: jspb.BinaryReader): MimeType;
}

export namespace MimeType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: MimeType.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
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
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      value: string,
    }
  }
}

export class MinLength extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinLength.AsObject;
  static toObject(includeInstance: boolean, msg: MinLength): MinLength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinLength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinLength;
  static deserializeBinaryFromReader(message: MinLength, reader: jspb.BinaryReader): MinLength;
}

export namespace MinLength {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class Namespace extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Namespace.AsObject;
  static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Namespace;
  static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class NarrativeLink extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUrl(): boolean;
  clearValueUrl(): void;
  getValueUrl(): proto_r4_core_datatypes_pb.Url | undefined;
  setValueUrl(value?: proto_r4_core_datatypes_pb.Url): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NarrativeLink.AsObject;
  static toObject(includeInstance: boolean, msg: NarrativeLink): NarrativeLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NarrativeLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NarrativeLink;
  static deserializeBinaryFromReader(message: NarrativeLink, reader: jspb.BinaryReader): NarrativeLink;
}

export namespace NarrativeLink {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUrl?: proto_r4_core_datatypes_pb.Url.AsObject,
  }
}

export class NullFlavor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): NullFlavor.ValueCode | undefined;
  setValueCode(value?: NullFlavor.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullFlavor.AsObject;
  static toObject(includeInstance: boolean, msg: NullFlavor): NullFlavor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullFlavor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullFlavor;
  static deserializeBinaryFromReader(message: NullFlavor, reader: jspb.BinaryReader): NullFlavor;
}

export namespace NullFlavor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: NullFlavor.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap[keyof proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap[keyof proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap[keyof proto_r4_core_codes_pb.V3NullFlavorCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class NutritionOrderAdaptiveFeedingDevice extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrderAdaptiveFeedingDevice.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrderAdaptiveFeedingDevice): NutritionOrderAdaptiveFeedingDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrderAdaptiveFeedingDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrderAdaptiveFeedingDevice;
  static deserializeBinaryFromReader(message: NutritionOrderAdaptiveFeedingDevice, reader: jspb.BinaryReader): NutritionOrderAdaptiveFeedingDevice;
}

export namespace NutritionOrderAdaptiveFeedingDevice {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class NutritionOrderDoNotPerform extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrderDoNotPerform.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrderDoNotPerform): NutritionOrderDoNotPerform.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrderDoNotPerform, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrderDoNotPerform;
  static deserializeBinaryFromReader(message: NutritionOrderDoNotPerform, reader: jspb.BinaryReader): NutritionOrderDoNotPerform;
}

export namespace NutritionOrderDoNotPerform {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class NutritionOrderInsurance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrderInsurance.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrderInsurance): NutritionOrderInsurance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrderInsurance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrderInsurance;
  static deserializeBinaryFromReader(message: NutritionOrderInsurance, reader: jspb.BinaryReader): NutritionOrderInsurance;
}

export namespace NutritionOrderInsurance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class NutritionOrderReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrderReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrderReplaces): NutritionOrderReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrderReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrderReplaces;
  static deserializeBinaryFromReader(message: NutritionOrderReplaces, reader: jspb.BinaryReader): NutritionOrderReplaces;
}

export namespace NutritionOrderReplaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationAllele extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setName(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasState(): boolean;
  clearState(): void;
  getState(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setState(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFrequency(): boolean;
  clearFrequency(): void;
  getFrequency(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setFrequency(value?: proto_r4_core_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAllele.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAllele): ObservationAllele.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAllele, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAllele;
  static deserializeBinaryFromReader(message: ObservationAllele, reader: jspb.BinaryReader): ObservationAllele;
}

export namespace ObservationAllele {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    state?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    frequency?: proto_r4_core_datatypes_pb.Decimal.AsObject,
  }
}

export class ObservationAminoAcidChange extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setName(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAminoAcidChange.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAminoAcidChange): ObservationAminoAcidChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAminoAcidChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAminoAcidChange;
  static deserializeBinaryFromReader(message: ObservationAminoAcidChange, reader: jspb.BinaryReader): ObservationAminoAcidChange;
}

export namespace ObservationAminoAcidChange {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationAncestry extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setName(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPercentage(): boolean;
  clearPercentage(): void;
  getPercentage(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setPercentage(value?: proto_r4_core_datatypes_pb.Decimal): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAncestry.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAncestry): ObservationAncestry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAncestry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAncestry;
  static deserializeBinaryFromReader(message: ObservationAncestry, reader: jspb.BinaryReader): ObservationAncestry;
}

export namespace ObservationAncestry {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    percentage?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    source?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationCopyNumberEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationCopyNumberEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationCopyNumberEvent): ObservationCopyNumberEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationCopyNumberEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationCopyNumberEvent;
  static deserializeBinaryFromReader(message: ObservationCopyNumberEvent, reader: jspb.BinaryReader): ObservationCopyNumberEvent;
}

export namespace ObservationCopyNumberEvent {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDNARegionName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDNARegionName.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDNARegionName): ObservationDNARegionName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDNARegionName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDNARegionName;
  static deserializeBinaryFromReader(message: ObservationDNARegionName, reader: jspb.BinaryReader): ObservationDNARegionName;
}

export namespace ObservationDNARegionName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ObservationDelta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDelta.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDelta): ObservationDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDelta;
  static deserializeBinaryFromReader(message: ObservationDelta, reader: jspb.BinaryReader): ObservationDelta;
}

export namespace ObservationDelta {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDeviceCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDeviceCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDeviceCode): ObservationDeviceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDeviceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDeviceCode;
  static deserializeBinaryFromReader(message: ObservationDeviceCode, reader: jspb.BinaryReader): ObservationDeviceCode;
}

export namespace ObservationDeviceCode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationFocusCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationFocusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationFocusCode): ObservationFocusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationFocusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationFocusCode;
  static deserializeBinaryFromReader(message: ObservationFocusCode, reader: jspb.BinaryReader): ObservationFocusCode;
}

export namespace ObservationFocusCode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationGatewayDevice extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGatewayDevice.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGatewayDevice): ObservationGatewayDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGatewayDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGatewayDevice;
  static deserializeBinaryFromReader(message: ObservationGatewayDevice, reader: jspb.BinaryReader): ObservationGatewayDevice;
}

export namespace ObservationGatewayDevice {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationGene extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGene.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGene): ObservationGene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGene;
  static deserializeBinaryFromReader(message: ObservationGene, reader: jspb.BinaryReader): ObservationGene;
}

export namespace ObservationGene {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationGenomicSourceClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGenomicSourceClass.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGenomicSourceClass): ObservationGenomicSourceClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGenomicSourceClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGenomicSourceClass;
  static deserializeBinaryFromReader(message: ObservationGenomicSourceClass, reader: jspb.BinaryReader): ObservationGenomicSourceClass;
}

export namespace ObservationGenomicSourceClass {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationInterpretation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationInterpretation.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationInterpretation): ObservationInterpretation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationInterpretation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationInterpretation;
  static deserializeBinaryFromReader(message: ObservationInterpretation, reader: jspb.BinaryReader): ObservationInterpretation;
}

export namespace ObservationInterpretation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationPhaseSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasIdSlice(): boolean;
  clearIdSlice(): void;
  getIdSlice(): proto_r4_core_datatypes_pb.Uri | undefined;
  setIdSlice(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearMolecularSequenceList(): void;
  getMolecularSequenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setMolecularSequenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addMolecularSequence(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationPhaseSet.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationPhaseSet): ObservationPhaseSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationPhaseSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationPhaseSet;
  static deserializeBinaryFromReader(message: ObservationPhaseSet, reader: jspb.BinaryReader): ObservationPhaseSet;
}

export namespace ObservationPhaseSet {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    idSlice?: proto_r4_core_datatypes_pb.Uri.AsObject,
    molecularSequenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }
}

export class ObservationPrecondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationPrecondition.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationPrecondition): ObservationPrecondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationPrecondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationPrecondition;
  static deserializeBinaryFromReader(message: ObservationPrecondition, reader: jspb.BinaryReader): ObservationPrecondition;
}

export namespace ObservationPrecondition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationReagent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationReagent.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationReagent): ObservationReagent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationReagent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationReagent;
  static deserializeBinaryFromReader(message: ObservationReagent, reader: jspb.BinaryReader): ObservationReagent;
}

export namespace ObservationReagent {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationReplaces): ObservationReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationReplaces;
  static deserializeBinaryFromReader(message: ObservationReplaces, reader: jspb.BinaryReader): ObservationReplaces;
}

export namespace ObservationReplaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationSecondaryFinding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationSecondaryFinding.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationSecondaryFinding): ObservationSecondaryFinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationSecondaryFinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationSecondaryFinding;
  static deserializeBinaryFromReader(message: ObservationSecondaryFinding, reader: jspb.BinaryReader): ObservationSecondaryFinding;
}

export namespace ObservationSecondaryFinding {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationSequelTo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationSequelTo.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationSequelTo): ObservationSequelTo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationSequelTo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationSequelTo;
  static deserializeBinaryFromReader(message: ObservationSequelTo, reader: jspb.BinaryReader): ObservationSequelTo;
}

export namespace ObservationSequelTo {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationSpecimenCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationSpecimenCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationSpecimenCode): ObservationSpecimenCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationSpecimenCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationSpecimenCode;
  static deserializeBinaryFromReader(message: ObservationSpecimenCode, reader: jspb.BinaryReader): ObservationSpecimenCode;
}

export namespace ObservationSpecimenCode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationTimeOffset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationTimeOffset.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationTimeOffset): ObservationTimeOffset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationTimeOffset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationTimeOffset;
  static deserializeBinaryFromReader(message: ObservationTimeOffset, reader: jspb.BinaryReader): ObservationTimeOffset;
}

export namespace ObservationTimeOffset {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class ObservationVariant extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setName(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIdSlice(): boolean;
  clearIdSlice(): void;
  getIdSlice(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setIdSlice(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationVariant.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationVariant): ObservationVariant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationVariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationVariant;
  static deserializeBinaryFromReader(message: ObservationVariant, reader: jspb.BinaryReader): ObservationVariant;
}

export namespace ObservationVariant {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    idSlice?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class OperationDefinitionAllowedType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationDefinitionAllowedType.AsObject;
  static toObject(includeInstance: boolean, msg: OperationDefinitionAllowedType): OperationDefinitionAllowedType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationDefinitionAllowedType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationDefinitionAllowedType;
  static deserializeBinaryFromReader(message: OperationDefinitionAllowedType, reader: jspb.BinaryReader): OperationDefinitionAllowedType;
}

export namespace OperationDefinitionAllowedType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class OperationDefinitionProfile extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationDefinitionProfile.AsObject;
  static toObject(includeInstance: boolean, msg: OperationDefinitionProfile): OperationDefinitionProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationDefinitionProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationDefinitionProfile;
  static deserializeBinaryFromReader(message: OperationDefinitionProfile, reader: jspb.BinaryReader): OperationDefinitionProfile;
}

export namespace OperationDefinitionProfile {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class OperationOutcomeAuthority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeAuthority.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeAuthority): OperationOutcomeAuthority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeAuthority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeAuthority;
  static deserializeBinaryFromReader(message: OperationOutcomeAuthority, reader: jspb.BinaryReader): OperationOutcomeAuthority;
}

export namespace OperationOutcomeAuthority {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class OperationOutcomeDetectedIssue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeDetectedIssue.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeDetectedIssue): OperationOutcomeDetectedIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeDetectedIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeDetectedIssue;
  static deserializeBinaryFromReader(message: OperationOutcomeDetectedIssue, reader: jspb.BinaryReader): OperationOutcomeDetectedIssue;
}

export namespace OperationOutcomeDetectedIssue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class OperationOutcomeIssueSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeIssueSource.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeIssueSource): OperationOutcomeIssueSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeIssueSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeIssueSource;
  static deserializeBinaryFromReader(message: OperationOutcomeIssueSource, reader: jspb.BinaryReader): OperationOutcomeIssueSource;
}

export namespace OperationOutcomeIssueSource {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class OrdinalValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrdinalValue.AsObject;
  static toObject(includeInstance: boolean, msg: OrdinalValue): OrdinalValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrdinalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrdinalValue;
  static deserializeBinaryFromReader(message: OrdinalValue, reader: jspb.BinaryReader): OrdinalValue;
}

export namespace OrdinalValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDecimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
  }
}

export class OrganizationAffiliationPrimaryInd extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationAffiliationPrimaryInd.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationAffiliationPrimaryInd): OrganizationAffiliationPrimaryInd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationAffiliationPrimaryInd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationAffiliationPrimaryInd;
  static deserializeBinaryFromReader(message: OrganizationAffiliationPrimaryInd, reader: jspb.BinaryReader): OrganizationAffiliationPrimaryInd;
}

export namespace OrganizationAffiliationPrimaryInd {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class OrganizationPeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPeriod): OrganizationPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPeriod;
  static deserializeBinaryFromReader(message: OrganizationPeriod, reader: jspb.BinaryReader): OrganizationPeriod;
}

export namespace OrganizationPeriod {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valuePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
  }
}

export class OrganizationPreferredContact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPreferredContact.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPreferredContact): OrganizationPreferredContact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPreferredContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPreferredContact;
  static deserializeBinaryFromReader(message: OrganizationPreferredContact, reader: jspb.BinaryReader): OrganizationPreferredContact;
}

export namespace OrganizationPreferredContact {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class OriginalText extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OriginalText.AsObject;
  static toObject(includeInstance: boolean, msg: OriginalText): OriginalText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OriginalText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OriginalText;
  static deserializeBinaryFromReader(message: OriginalText, reader: jspb.BinaryReader): OriginalText;
}

export namespace OriginalText {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ParametersFullUrl extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParametersFullUrl.AsObject;
  static toObject(includeInstance: boolean, msg: ParametersFullUrl): ParametersFullUrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParametersFullUrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParametersFullUrl;
  static deserializeBinaryFromReader(message: ParametersFullUrl, reader: jspb.BinaryReader): ParametersFullUrl;
}

export namespace ParametersFullUrl {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class PartOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartOf.AsObject;
  static toObject(includeInstance: boolean, msg: PartOf): PartOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartOf;
  static deserializeBinaryFromReader(message: PartOf, reader: jspb.BinaryReader): PartOf;
}

export namespace PartOf {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class PatientAdoptionInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientAdoptionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PatientAdoptionInfo): PatientAdoptionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientAdoptionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientAdoptionInfo;
  static deserializeBinaryFromReader(message: PatientAdoptionInfo, reader: jspb.BinaryReader): PatientAdoptionInfo;
}

export namespace PatientAdoptionInfo {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientAnimal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasSpecies(): boolean;
  clearSpecies(): void;
  getSpecies(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSpecies(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBreed(): boolean;
  clearBreed(): void;
  getBreed(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBreed(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasGenderStatus(): boolean;
  clearGenderStatus(): void;
  getGenderStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setGenderStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientAnimal.AsObject;
  static toObject(includeInstance: boolean, msg: PatientAnimal): PatientAnimal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientAnimal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientAnimal;
  static deserializeBinaryFromReader(message: PatientAnimal, reader: jspb.BinaryReader): PatientAnimal;
}

export namespace PatientAnimal {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    species?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    breed?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    genderStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientBirthPlace extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueAddress(): boolean;
  clearValueAddress(): void;
  getValueAddress(): proto_r4_core_datatypes_pb.Address | undefined;
  setValueAddress(value?: proto_r4_core_datatypes_pb.Address): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientBirthPlace.AsObject;
  static toObject(includeInstance: boolean, msg: PatientBirthPlace): PatientBirthPlace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientBirthPlace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientBirthPlace;
  static deserializeBinaryFromReader(message: PatientBirthPlace, reader: jspb.BinaryReader): PatientBirthPlace;
}

export namespace PatientBirthPlace {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueAddress?: proto_r4_core_datatypes_pb.Address.AsObject,
  }
}

export class PatientBirthTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientBirthTime.AsObject;
  static toObject(includeInstance: boolean, msg: PatientBirthTime): PatientBirthTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientBirthTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientBirthTime;
  static deserializeBinaryFromReader(message: PatientBirthTime, reader: jspb.BinaryReader): PatientBirthTime;
}

export namespace PatientBirthTime {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class PatientCadavericDonor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCadavericDonor.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCadavericDonor): PatientCadavericDonor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCadavericDonor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCadavericDonor;
  static deserializeBinaryFromReader(message: PatientCadavericDonor, reader: jspb.BinaryReader): PatientCadavericDonor;
}

export namespace PatientCadavericDonor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class PatientCitizenship extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCitizenship.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCitizenship): PatientCitizenship.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCitizenship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCitizenship;
  static deserializeBinaryFromReader(message: PatientCitizenship, reader: jspb.BinaryReader): PatientCitizenship;
}

export namespace PatientCitizenship {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
  }
}

export class PatientCongregation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCongregation.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCongregation): PatientCongregation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCongregation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCongregation;
  static deserializeBinaryFromReader(message: PatientCongregation, reader: jspb.BinaryReader): PatientCongregation;
}

export namespace PatientCongregation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class PatientDisability extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientDisability.AsObject;
  static toObject(includeInstance: boolean, msg: PatientDisability): PatientDisability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientDisability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientDisability;
  static deserializeBinaryFromReader(message: PatientDisability, reader: jspb.BinaryReader): PatientDisability;
}

export namespace PatientDisability {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientGenderIdentity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientGenderIdentity.AsObject;
  static toObject(includeInstance: boolean, msg: PatientGenderIdentity): PatientGenderIdentity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientGenderIdentity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientGenderIdentity;
  static deserializeBinaryFromReader(message: PatientGenderIdentity, reader: jspb.BinaryReader): PatientGenderIdentity;
}

export namespace PatientGenderIdentity {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientImportance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientImportance.AsObject;
  static toObject(includeInstance: boolean, msg: PatientImportance): PatientImportance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientImportance;
  static deserializeBinaryFromReader(message: PatientImportance, reader: jspb.BinaryReader): PatientImportance;
}

export namespace PatientImportance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientInterpreterRequired extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientInterpreterRequired.AsObject;
  static toObject(includeInstance: boolean, msg: PatientInterpreterRequired): PatientInterpreterRequired.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientInterpreterRequired, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientInterpreterRequired;
  static deserializeBinaryFromReader(message: PatientInterpreterRequired, reader: jspb.BinaryReader): PatientInterpreterRequired;
}

export namespace PatientInterpreterRequired {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class PatientMothersMaidenName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientMothersMaidenName.AsObject;
  static toObject(includeInstance: boolean, msg: PatientMothersMaidenName): PatientMothersMaidenName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientMothersMaidenName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientMothersMaidenName;
  static deserializeBinaryFromReader(message: PatientMothersMaidenName, reader: jspb.BinaryReader): PatientMothersMaidenName;
}

export namespace PatientMothersMaidenName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class PatientNationality extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientNationality.AsObject;
  static toObject(includeInstance: boolean, msg: PatientNationality): PatientNationality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientNationality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientNationality;
  static deserializeBinaryFromReader(message: PatientNationality, reader: jspb.BinaryReader): PatientNationality;
}

export namespace PatientNationality {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
  }
}

export class PatientPreferenceType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientPreferenceType.AsObject;
  static toObject(includeInstance: boolean, msg: PatientPreferenceType): PatientPreferenceType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientPreferenceType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientPreferenceType;
  static deserializeBinaryFromReader(message: PatientPreferenceType, reader: jspb.BinaryReader): PatientPreferenceType;
}

export namespace PatientPreferenceType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class PatientProficiency extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasLevel(): boolean;
  clearLevel(): void;
  getLevel(): proto_r4_core_datatypes_pb.Coding | undefined;
  setLevel(value?: proto_r4_core_datatypes_pb.Coding): void;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.Coding>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addType(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientProficiency.AsObject;
  static toObject(includeInstance: boolean, msg: PatientProficiency): PatientProficiency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientProficiency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientProficiency;
  static deserializeBinaryFromReader(message: PatientProficiency, reader: jspb.BinaryReader): PatientProficiency;
}

export namespace PatientProficiency {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    level?: proto_r4_core_datatypes_pb.Coding.AsObject,
    typeList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
  }
}

export class PatientRelatedPerson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientRelatedPerson.AsObject;
  static toObject(includeInstance: boolean, msg: PatientRelatedPerson): PatientRelatedPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientRelatedPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientRelatedPerson;
  static deserializeBinaryFromReader(message: PatientRelatedPerson, reader: jspb.BinaryReader): PatientRelatedPerson;
}

export namespace PatientRelatedPerson {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class PatientReligion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientReligion.AsObject;
  static toObject(includeInstance: boolean, msg: PatientReligion): PatientReligion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientReligion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientReligion;
  static deserializeBinaryFromReader(message: PatientReligion, reader: jspb.BinaryReader): PatientReligion;
}

export namespace PatientReligion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PerformerFunction extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PerformerFunction.AsObject;
  static toObject(includeInstance: boolean, msg: PerformerFunction): PerformerFunction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PerformerFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PerformerFunction;
  static deserializeBinaryFromReader(message: PerformerFunction, reader: jspb.BinaryReader): PerformerFunction;
}

export namespace PerformerFunction {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PermittedValueConceptmap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermittedValueConceptmap.AsObject;
  static toObject(includeInstance: boolean, msg: PermittedValueConceptmap): PermittedValueConceptmap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermittedValueConceptmap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermittedValueConceptmap;
  static deserializeBinaryFromReader(message: PermittedValueConceptmap, reader: jspb.BinaryReader): PermittedValueConceptmap;
}

export namespace PermittedValueConceptmap {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class PermittedValueValueset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermittedValueValueset.AsObject;
  static toObject(includeInstance: boolean, msg: PermittedValueValueset): PermittedValueValueset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermittedValueValueset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermittedValueValueset;
  static deserializeBinaryFromReader(message: PermittedValueValueset, reader: jspb.BinaryReader): PermittedValueValueset;
}

export namespace PermittedValueValueset {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class PlanDefinitionCdsHooksEndpoint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanDefinitionCdsHooksEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: PlanDefinitionCdsHooksEndpoint): PlanDefinitionCdsHooksEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanDefinitionCdsHooksEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanDefinitionCdsHooksEndpoint;
  static deserializeBinaryFromReader(message: PlanDefinitionCdsHooksEndpoint, reader: jspb.BinaryReader): PlanDefinitionCdsHooksEndpoint;
}

export namespace PlanDefinitionCdsHooksEndpoint {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class PractitionerRolePrimaryInd extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerRolePrimaryInd.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerRolePrimaryInd): PractitionerRolePrimaryInd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerRolePrimaryInd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerRolePrimaryInd;
  static deserializeBinaryFromReader(message: PractitionerRolePrimaryInd, reader: jspb.BinaryReader): PractitionerRolePrimaryInd;
}

export namespace PractitionerRolePrimaryInd {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class Preferred extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preferred.AsObject;
  static toObject(includeInstance: boolean, msg: Preferred): Preferred.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Preferred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preferred;
  static deserializeBinaryFromReader(message: Preferred, reader: jspb.BinaryReader): Preferred;
}

export namespace Preferred {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ProcedureCausedBy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureCausedBy.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureCausedBy): ProcedureCausedBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureCausedBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureCausedBy;
  static deserializeBinaryFromReader(message: ProcedureCausedBy, reader: jspb.BinaryReader): ProcedureCausedBy;
}

export namespace ProcedureCausedBy {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ProcedureIncisionDateTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureIncisionDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureIncisionDateTime): ProcedureIncisionDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureIncisionDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureIncisionDateTime;
  static deserializeBinaryFromReader(message: ProcedureIncisionDateTime, reader: jspb.BinaryReader): ProcedureIncisionDateTime;
}

export namespace ProcedureIncisionDateTime {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class ProcedureMethod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureMethod.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureMethod): ProcedureMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureMethod;
  static deserializeBinaryFromReader(message: ProcedureMethod, reader: jspb.BinaryReader): ProcedureMethod;
}

export namespace ProcedureMethod {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureProgressStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureProgressStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureProgressStatus): ProcedureProgressStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureProgressStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureProgressStatus;
  static deserializeBinaryFromReader(message: ProcedureProgressStatus, reader: jspb.BinaryReader): ProcedureProgressStatus;
}

export namespace ProcedureProgressStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureSchedule extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueTiming(): boolean;
  clearValueTiming(): void;
  getValueTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
  setValueTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureSchedule): ProcedureSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureSchedule;
  static deserializeBinaryFromReader(message: ProcedureSchedule, reader: jspb.BinaryReader): ProcedureSchedule;
}

export namespace ProcedureSchedule {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueTiming?: proto_r4_core_datatypes_pb.Timing.AsObject,
  }
}

export class QuantityPQTranslation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueQuantity(): boolean;
  clearValueQuantity(): void;
  getValueQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setValueQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityPQTranslation.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityPQTranslation): QuantityPQTranslation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityPQTranslation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityPQTranslation;
  static deserializeBinaryFromReader(message: QuantityPQTranslation, reader: jspb.BinaryReader): QuantityPQTranslation;
}

export namespace QuantityPQTranslation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueQuantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
  }
}

export class QuantityUncertainty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityUncertainty.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityUncertainty): QuantityUncertainty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityUncertainty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityUncertainty;
  static deserializeBinaryFromReader(message: QuantityUncertainty, reader: jspb.BinaryReader): QuantityUncertainty;
}

export namespace QuantityUncertainty {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDecimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
  }
}

export class QuantityUncertaintyType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): QuantityUncertaintyType.ValueCode | undefined;
  setValueCode(value?: QuantityUncertaintyType.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityUncertaintyType.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityUncertaintyType): QuantityUncertaintyType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityUncertaintyType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityUncertaintyType;
  static deserializeBinaryFromReader(message: QuantityUncertaintyType, reader: jspb.BinaryReader): QuantityUncertaintyType;
}

export namespace QuantityUncertaintyType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: QuantityUncertaintyType.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ProbabilityDistributionTypeValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireBaseType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): QuestionnaireBaseType.ValueCode | undefined;
  setValueCode(value?: QuestionnaireBaseType.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireBaseType.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireBaseType): QuestionnaireBaseType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireBaseType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireBaseType;
  static deserializeBinaryFromReader(message: QuestionnaireBaseType, reader: jspb.BinaryReader): QuestionnaireBaseType;
}

export namespace QuestionnaireBaseType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: QuestionnaireBaseType.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DataTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DataTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DataTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireChoiceOrientation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): QuestionnaireChoiceOrientation.ValueCode | undefined;
  setValueCode(value?: QuestionnaireChoiceOrientation.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireChoiceOrientation.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireChoiceOrientation): QuestionnaireChoiceOrientation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireChoiceOrientation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireChoiceOrientation;
  static deserializeBinaryFromReader(message: QuestionnaireChoiceOrientation, reader: jspb.BinaryReader): QuestionnaireChoiceOrientation;
}

export namespace QuestionnaireChoiceOrientation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: QuestionnaireChoiceOrientation.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap[keyof proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap[keyof proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap[keyof proto_r4_core_codes_pb.ChoiceListOrientationCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireConstraint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasKey(): boolean;
  clearKey(): void;
  getKey(): proto_r4_core_datatypes_pb.Id | undefined;
  setKey(value?: proto_r4_core_datatypes_pb.Id): void;

  hasRequirements(): boolean;
  clearRequirements(): void;
  getRequirements(): proto_r4_core_datatypes_pb.String | undefined;
  setRequirements(value?: proto_r4_core_datatypes_pb.String): void;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): QuestionnaireConstraint.SeverityCode | undefined;
  setSeverity(value?: QuestionnaireConstraint.SeverityCode): void;

  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): proto_r4_core_datatypes_pb.String | undefined;
  setExpression(value?: proto_r4_core_datatypes_pb.String): void;

  hasHuman(): boolean;
  clearHuman(): void;
  getHuman(): proto_r4_core_datatypes_pb.String | undefined;
  setHuman(value?: proto_r4_core_datatypes_pb.String): void;

  clearLocationList(): void;
  getLocationList(): Array<proto_r4_core_datatypes_pb.String>;
  setLocationList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireConstraint.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireConstraint): QuestionnaireConstraint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireConstraint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireConstraint;
  static deserializeBinaryFromReader(message: QuestionnaireConstraint, reader: jspb.BinaryReader): QuestionnaireConstraint;
}

export namespace QuestionnaireConstraint {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    key?: proto_r4_core_datatypes_pb.Id.AsObject,
    requirements?: proto_r4_core_datatypes_pb.String.AsObject,
    severity?: QuestionnaireConstraint.SeverityCode.AsObject,
    expression?: proto_r4_core_datatypes_pb.String.AsObject,
    human?: proto_r4_core_datatypes_pb.String.AsObject,
    locationList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
  }

  export class SeverityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireDisplayCategory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireDisplayCategory.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireDisplayCategory): QuestionnaireDisplayCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireDisplayCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireDisplayCategory;
  static deserializeBinaryFromReader(message: QuestionnaireDisplayCategory, reader: jspb.BinaryReader): QuestionnaireDisplayCategory;
}

export namespace QuestionnaireDisplayCategory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireFhirType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireFhirType.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireFhirType): QuestionnaireFhirType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireFhirType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireFhirType;
  static deserializeBinaryFromReader(message: QuestionnaireFhirType, reader: jspb.BinaryReader): QuestionnaireFhirType;
}

export namespace QuestionnaireFhirType {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireHidden extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireHidden.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireHidden): QuestionnaireHidden.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireHidden, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireHidden;
  static deserializeBinaryFromReader(message: QuestionnaireHidden, reader: jspb.BinaryReader): QuestionnaireHidden;
}

export namespace QuestionnaireHidden {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class QuestionnaireItemControl extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemControl.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemControl): QuestionnaireItemControl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemControl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemControl;
  static deserializeBinaryFromReader(message: QuestionnaireItemControl, reader: jspb.BinaryReader): QuestionnaireItemControl;
}

export namespace QuestionnaireItemControl {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireMaxOccurs extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMaxOccurs.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMaxOccurs): QuestionnaireMaxOccurs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMaxOccurs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMaxOccurs;
  static deserializeBinaryFromReader(message: QuestionnaireMaxOccurs, reader: jspb.BinaryReader): QuestionnaireMaxOccurs;
}

export namespace QuestionnaireMaxOccurs {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireMaxValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QuestionnaireMaxValue.ValueX | undefined;
  setValue(value?: QuestionnaireMaxValue.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMaxValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMaxValue): QuestionnaireMaxValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMaxValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMaxValue;
  static deserializeBinaryFromReader(message: QuestionnaireMaxValue, reader: jspb.BinaryReader): QuestionnaireMaxValue;
}

export namespace QuestionnaireMaxValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: QuestionnaireMaxValue.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      time?: proto_r4_core_datatypes_pb.Time.AsObject,
      instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
      decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      TIME = 3,
      INSTANT = 4,
      DECIMAL = 5,
      INTEGER = 6,
    }
  }
}

export class QuestionnaireMinOccurs extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMinOccurs.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMinOccurs): QuestionnaireMinOccurs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMinOccurs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMinOccurs;
  static deserializeBinaryFromReader(message: QuestionnaireMinOccurs, reader: jspb.BinaryReader): QuestionnaireMinOccurs;
}

export namespace QuestionnaireMinOccurs {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireMinValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QuestionnaireMinValue.ValueX | undefined;
  setValue(value?: QuestionnaireMinValue.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMinValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMinValue): QuestionnaireMinValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMinValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMinValue;
  static deserializeBinaryFromReader(message: QuestionnaireMinValue, reader: jspb.BinaryReader): QuestionnaireMinValue;
}

export namespace QuestionnaireMinValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: QuestionnaireMinValue.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      time?: proto_r4_core_datatypes_pb.Time.AsObject,
      decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      TIME = 3,
      DECIMAL = 4,
      INTEGER = 5,
    }
  }
}

export class QuestionnaireOptionExclusive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOptionExclusive.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOptionExclusive): QuestionnaireOptionExclusive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOptionExclusive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOptionExclusive;
  static deserializeBinaryFromReader(message: QuestionnaireOptionExclusive, reader: jspb.BinaryReader): QuestionnaireOptionExclusive;
}

export namespace QuestionnaireOptionExclusive {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class QuestionnaireOptionPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOptionPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOptionPrefix): QuestionnaireOptionPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOptionPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOptionPrefix;
  static deserializeBinaryFromReader(message: QuestionnaireOptionPrefix, reader: jspb.BinaryReader): QuestionnaireOptionPrefix;
}

export namespace QuestionnaireOptionPrefix {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireReferenceFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireReferenceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireReferenceFilter): QuestionnaireReferenceFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireReferenceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireReferenceFilter;
  static deserializeBinaryFromReader(message: QuestionnaireReferenceFilter, reader: jspb.BinaryReader): QuestionnaireReferenceFilter;
}

export namespace QuestionnaireReferenceFilter {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireReferenceProfile extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireReferenceProfile.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireReferenceProfile): QuestionnaireReferenceProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireReferenceProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireReferenceProfile;
  static deserializeBinaryFromReader(message: QuestionnaireReferenceProfile, reader: jspb.BinaryReader): QuestionnaireReferenceProfile;
}

export namespace QuestionnaireReferenceProfile {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class QuestionnaireReferenceResource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): QuestionnaireReferenceResource.ValueCode | undefined;
  setValueCode(value?: QuestionnaireReferenceResource.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireReferenceResource.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireReferenceResource): QuestionnaireReferenceResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireReferenceResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireReferenceResource;
  static deserializeBinaryFromReader(message: QuestionnaireReferenceResource, reader: jspb.BinaryReader): QuestionnaireReferenceResource;
}

export namespace QuestionnaireReferenceResource {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: QuestionnaireReferenceResource.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireResponseAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseAuthor): QuestionnaireResponseAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseAuthor;
  static deserializeBinaryFromReader(message: QuestionnaireResponseAuthor, reader: jspb.BinaryReader): QuestionnaireResponseAuthor;
}

export namespace QuestionnaireResponseAuthor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireResponseCompletionMode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseCompletionMode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseCompletionMode): QuestionnaireResponseCompletionMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseCompletionMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseCompletionMode;
  static deserializeBinaryFromReader(message: QuestionnaireResponseCompletionMode, reader: jspb.BinaryReader): QuestionnaireResponseCompletionMode;
}

export namespace QuestionnaireResponseCompletionMode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireResponseReason extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseReason.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseReason): QuestionnaireResponseReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseReason;
  static deserializeBinaryFromReader(message: QuestionnaireResponseReason, reader: jspb.BinaryReader): QuestionnaireResponseReason;
}

export namespace QuestionnaireResponseReason {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireResponseReviewer extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseReviewer.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseReviewer): QuestionnaireResponseReviewer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseReviewer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseReviewer;
  static deserializeBinaryFromReader(message: QuestionnaireResponseReviewer, reader: jspb.BinaryReader): QuestionnaireResponseReviewer;
}

export namespace QuestionnaireResponseReviewer {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireResponseSignature extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueSignature(): boolean;
  clearValueSignature(): void;
  getValueSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
  setValueSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseSignature.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseSignature): QuestionnaireResponseSignature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseSignature;
  static deserializeBinaryFromReader(message: QuestionnaireResponseSignature, reader: jspb.BinaryReader): QuestionnaireResponseSignature;
}

export namespace QuestionnaireResponseSignature {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueSignature?: proto_r4_core_datatypes_pb.Signature.AsObject,
  }
}

export class QuestionnaireSignatureRequired extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireSignatureRequired.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireSignatureRequired): QuestionnaireSignatureRequired.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireSignatureRequired, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireSignatureRequired;
  static deserializeBinaryFromReader(message: QuestionnaireSignatureRequired, reader: jspb.BinaryReader): QuestionnaireSignatureRequired;
}

export namespace QuestionnaireSignatureRequired {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireSliderStepValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireSliderStepValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireSliderStepValue): QuestionnaireSliderStepValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireSliderStepValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireSliderStepValue;
  static deserializeBinaryFromReader(message: QuestionnaireSliderStepValue, reader: jspb.BinaryReader): QuestionnaireSliderStepValue;
}

export namespace QuestionnaireSliderStepValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireSupportLink extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireSupportLink.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireSupportLink): QuestionnaireSupportLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireSupportLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireSupportLink;
  static deserializeBinaryFromReader(message: QuestionnaireSupportLink, reader: jspb.BinaryReader): QuestionnaireSupportLink;
}

export namespace QuestionnaireSupportLink {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class QuestionnaireUnit extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUnit.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUnit): QuestionnaireUnit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUnit;
  static deserializeBinaryFromReader(message: QuestionnaireUnit, reader: jspb.BinaryReader): QuestionnaireUnit;
}

export namespace QuestionnaireUnit {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class QuestionnaireUnitOption extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUnitOption.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUnitOption): QuestionnaireUnitOption.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUnitOption, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUnitOption;
  static deserializeBinaryFromReader(message: QuestionnaireUnitOption, reader: jspb.BinaryReader): QuestionnaireUnitOption;
}

export namespace QuestionnaireUnitOption {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class QuestionnaireUnitValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUnitValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUnitValueSet): QuestionnaireUnitValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUnitValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUnitValueSet;
  static deserializeBinaryFromReader(message: QuestionnaireUnitValueSet, reader: jspb.BinaryReader): QuestionnaireUnitValueSet;
}

export namespace QuestionnaireUnitValueSet {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class QuestionnaireUsageMode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): QuestionnaireUsageMode.ValueCode | undefined;
  setValueCode(value?: QuestionnaireUsageMode.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUsageMode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUsageMode): QuestionnaireUsageMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUsageMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUsageMode;
  static deserializeBinaryFromReader(message: QuestionnaireUsageMode, reader: jspb.BinaryReader): QuestionnaireUsageMode;
}

export namespace QuestionnaireUsageMode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: QuestionnaireUsageMode.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemUsageModeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QuestionnaireVariable extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueExpression(): boolean;
  clearValueExpression(): void;
  getValueExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
  setValueExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireVariable.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireVariable): QuestionnaireVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireVariable;
  static deserializeBinaryFromReader(message: QuestionnaireVariable, reader: jspb.BinaryReader): QuestionnaireVariable;
}

export namespace QuestionnaireVariable {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueExpression?: proto_r4_core_datatypes_pb.Expression.AsObject,
  }
}

export class ReasonCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReasonCode): ReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReasonCode;
  static deserializeBinaryFromReader(message: ReasonCode, reader: jspb.BinaryReader): ReasonCode;
}

export namespace ReasonCode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ReasonReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReasonReference.AsObject;
  static toObject(includeInstance: boolean, msg: ReasonReference): ReasonReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReasonReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReasonReference;
  static deserializeBinaryFromReader(message: ReasonReference, reader: jspb.BinaryReader): ReasonReference;
}

export namespace ReasonReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class Regex extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Regex.AsObject;
  static toObject(includeInstance: boolean, msg: Regex): Regex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Regex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Regex;
  static deserializeBinaryFromReader(message: Regex, reader: jspb.BinaryReader): Regex;
}

export namespace Regex {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class RelatedArtifactExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueRelatedArtifact(): boolean;
  clearValueRelatedArtifact(): void;
  getValueRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
  setValueRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedArtifactExtension.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedArtifactExtension): RelatedArtifactExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedArtifactExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedArtifactExtension;
  static deserializeBinaryFromReader(message: RelatedArtifactExtension, reader: jspb.BinaryReader): RelatedArtifactExtension;
}

export namespace RelatedArtifactExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueRelatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
  }
}

export class RelativeDateCriteria extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): RelativeDateCriteria.EventX | undefined;
  setEvent(value?: RelativeDateCriteria.EventX): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): RelativeDateCriteria.RelationshipCode | undefined;
  setRelationship(value?: RelativeDateCriteria.RelationshipCode): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): proto_r4_core_datatypes_pb.Duration | undefined;
  setOffset(value?: proto_r4_core_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelativeDateCriteria.AsObject;
  static toObject(includeInstance: boolean, msg: RelativeDateCriteria): RelativeDateCriteria.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelativeDateCriteria, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelativeDateCriteria;
  static deserializeBinaryFromReader(message: RelativeDateCriteria, reader: jspb.BinaryReader): RelativeDateCriteria;
}

export namespace RelativeDateCriteria {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    event?: RelativeDateCriteria.EventX.AsObject,
    relationship?: RelativeDateCriteria.RelationshipCode.AsObject,
    offset?: proto_r4_core_datatypes_pb.Duration.AsObject,
  }

  export class EventX extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): EventX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventX.AsObject;
    static toObject(includeInstance: boolean, msg: EventX): EventX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventX;
    static deserializeBinaryFromReader(message: EventX, reader: jspb.BinaryReader): EventX;
  }

  export namespace EventX {
    export type AsObject = {
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      REFERENCE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class RelationshipCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationshipCode.AsObject;
    static toObject(includeInstance: boolean, msg: RelationshipCode): RelationshipCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationshipCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationshipCode;
    static deserializeBinaryFromReader(message: RelationshipCode, reader: jspb.BinaryReader): RelationshipCode;
  }

  export namespace RelationshipCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class RelativeDateTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
  setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasTargetPath(): boolean;
  clearTargetPath(): void;
  getTargetPath(): proto_r4_core_datatypes_pb.String | undefined;
  setTargetPath(value?: proto_r4_core_datatypes_pb.String): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): RelativeDateTime.RelationshipCode | undefined;
  setRelationship(value?: RelativeDateTime.RelationshipCode): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): RelativeDateTime.OffsetX | undefined;
  setOffset(value?: RelativeDateTime.OffsetX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelativeDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: RelativeDateTime): RelativeDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelativeDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelativeDateTime;
  static deserializeBinaryFromReader(message: RelativeDateTime, reader: jspb.BinaryReader): RelativeDateTime;
}

export namespace RelativeDateTime {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    target?: proto_r4_core_datatypes_pb.Reference.AsObject,
    targetPath?: proto_r4_core_datatypes_pb.String.AsObject,
    relationship?: RelativeDateTime.RelationshipCode.AsObject,
    offset?: RelativeDateTime.OffsetX.AsObject,
  }

  export class RelationshipCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelationshipCode.AsObject;
    static toObject(includeInstance: boolean, msg: RelationshipCode): RelationshipCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelationshipCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelationshipCode;
    static deserializeBinaryFromReader(message: RelationshipCode, reader: jspb.BinaryReader): RelationshipCode;
  }

  export namespace RelationshipCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OffsetX extends jspb.Message {
    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): OffsetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OffsetX.AsObject;
    static toObject(includeInstance: boolean, msg: OffsetX): OffsetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OffsetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OffsetX;
    static deserializeBinaryFromReader(message: OffsetX, reader: jspb.BinaryReader): OffsetX;
  }

  export namespace OffsetX {
    export type AsObject = {
      duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DURATION = 1,
      RANGE = 2,
    }
  }
}

export class RelevantHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelevantHistory.AsObject;
  static toObject(includeInstance: boolean, msg: RelevantHistory): RelevantHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelevantHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelevantHistory;
  static deserializeBinaryFromReader(message: RelevantHistory, reader: jspb.BinaryReader): RelevantHistory;
}

export namespace RelevantHistory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class RenderedValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenderedValue.AsObject;
  static toObject(includeInstance: boolean, msg: RenderedValue): RenderedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenderedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenderedValue;
  static deserializeBinaryFromReader(message: RenderedValue, reader: jspb.BinaryReader): RenderedValue;
}

export namespace RenderedValue {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class Replaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Replaces.AsObject;
  static toObject(includeInstance: boolean, msg: Replaces): Replaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Replaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Replaces;
  static deserializeBinaryFromReader(message: Replaces, reader: jspb.BinaryReader): Replaces;
}

export namespace Replaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class ResearchStudyExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchStudyExtension.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchStudyExtension): ResearchStudyExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchStudyExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchStudyExtension;
  static deserializeBinaryFromReader(message: ResearchStudyExtension, reader: jspb.BinaryReader): ResearchStudyExtension;
}

export namespace ResearchStudyExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ResourcePertainsToGoal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcePertainsToGoal.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcePertainsToGoal): ResourcePertainsToGoal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourcePertainsToGoal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcePertainsToGoal;
  static deserializeBinaryFromReader(message: ResourcePertainsToGoal, reader: jspb.BinaryReader): ResourcePertainsToGoal;
}

export namespace ResourcePertainsToGoal {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class Risk extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Risk.AsObject;
  static toObject(includeInstance: boolean, msg: Risk): Risk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Risk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Risk;
  static deserializeBinaryFromReader(message: Risk, reader: jspb.BinaryReader): Risk;
}

export namespace Risk {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class ServiceRequestPerformerOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequestPerformerOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequestPerformerOrder): ServiceRequestPerformerOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequestPerformerOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequestPerformerOrder;
  static deserializeBinaryFromReader(message: ServiceRequestPerformerOrder, reader: jspb.BinaryReader): ServiceRequestPerformerOrder;
}

export namespace ServiceRequestPerformerOrder {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class ServiceRequestPrecondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequestPrecondition.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequestPrecondition): ServiceRequestPrecondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequestPrecondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequestPrecondition;
  static deserializeBinaryFromReader(message: ServiceRequestPrecondition, reader: jspb.BinaryReader): ServiceRequestPrecondition;
}

export namespace ServiceRequestPrecondition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ServiceRequestQuestionnaireRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequestQuestionnaireRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequestQuestionnaireRequest): ServiceRequestQuestionnaireRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequestQuestionnaireRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequestQuestionnaireRequest;
  static deserializeBinaryFromReader(message: ServiceRequestQuestionnaireRequest, reader: jspb.BinaryReader): ServiceRequestQuestionnaireRequest;
}

export namespace ServiceRequestQuestionnaireRequest {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class SpecialStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecialStatus.AsObject;
  static toObject(includeInstance: boolean, msg: SpecialStatus): SpecialStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecialStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecialStatus;
  static deserializeBinaryFromReader(message: SpecialStatus, reader: jspb.BinaryReader): SpecialStatus;
}

export namespace SpecialStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class SpecimenCollectionPriority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenCollectionPriority.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenCollectionPriority): SpecimenCollectionPriority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenCollectionPriority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenCollectionPriority;
  static deserializeBinaryFromReader(message: SpecimenCollectionPriority, reader: jspb.BinaryReader): SpecimenCollectionPriority;
}

export namespace SpecimenCollectionPriority {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class SpecimenIsDryWeight extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenIsDryWeight.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenIsDryWeight): SpecimenIsDryWeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenIsDryWeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenIsDryWeight;
  static deserializeBinaryFromReader(message: SpecimenIsDryWeight, reader: jspb.BinaryReader): SpecimenIsDryWeight;
}

export namespace SpecimenIsDryWeight {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class SpecimenProcessingTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): SpecimenProcessingTime.ValueX | undefined;
  setValue(value?: SpecimenProcessingTime.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenProcessingTime.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenProcessingTime): SpecimenProcessingTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenProcessingTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenProcessingTime;
  static deserializeBinaryFromReader(message: SpecimenProcessingTime, reader: jspb.BinaryReader): SpecimenProcessingTime;
}

export namespace SpecimenProcessingTime {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    value?: SpecimenProcessingTime.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    getChoiceCase(): ValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueX.AsObject;
    static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueX;
    static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
  }

  export namespace ValueX {
    export type AsObject = {
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      PERIOD = 1,
      DURATION = 2,
    }
  }
}

export class SpecimenSequenceNumber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenSequenceNumber.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenSequenceNumber): SpecimenSequenceNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenSequenceNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenSequenceNumber;
  static deserializeBinaryFromReader(message: SpecimenSequenceNumber, reader: jspb.BinaryReader): SpecimenSequenceNumber;
}

export namespace SpecimenSequenceNumber {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class SpecimenSpecialHandling extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenSpecialHandling.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenSpecialHandling): SpecimenSpecialHandling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenSpecialHandling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenSpecialHandling;
  static deserializeBinaryFromReader(message: SpecimenSpecialHandling, reader: jspb.BinaryReader): SpecimenSpecialHandling;
}

export namespace SpecimenSpecialHandling {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class StandardsStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): StandardsStatus.ValueCode | undefined;
  setValueCode(value?: StandardsStatus.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StandardsStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StandardsStatus): StandardsStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StandardsStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StandardsStatus;
  static deserializeBinaryFromReader(message: StandardsStatus, reader: jspb.BinaryReader): StandardsStatus;
}

export namespace StandardsStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: StandardsStatus.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.StandardsStatusCode.ValueMap[keyof proto_r4_core_codes_pb.StandardsStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.StandardsStatusCode.ValueMap[keyof proto_r4_core_codes_pb.StandardsStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.StandardsStatusCode.ValueMap[keyof proto_r4_core_codes_pb.StandardsStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class StatusReason extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusReason.AsObject;
  static toObject(includeInstance: boolean, msg: StatusReason): StatusReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusReason;
  static deserializeBinaryFromReader(message: StatusReason, reader: jspb.BinaryReader): StatusReason;
}

export namespace StatusReason {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class StatusReasonExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusReasonExtension.AsObject;
  static toObject(includeInstance: boolean, msg: StatusReasonExtension): StatusReasonExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusReasonExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusReasonExtension;
  static deserializeBinaryFromReader(message: StatusReasonExtension, reader: jspb.BinaryReader): StatusReasonExtension;
}

export namespace StatusReasonExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class StringMarkdown extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMarkdown.AsObject;
  static toObject(includeInstance: boolean, msg: StringMarkdown): StringMarkdown.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringMarkdown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringMarkdown;
  static deserializeBinaryFromReader(message: StringMarkdown, reader: jspb.BinaryReader): StringMarkdown;
}

export namespace StringMarkdown {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class StringSCCoding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringSCCoding.AsObject;
  static toObject(includeInstance: boolean, msg: StringSCCoding): StringSCCoding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringSCCoding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringSCCoding;
  static deserializeBinaryFromReader(message: StringSCCoding, reader: jspb.BinaryReader): StringSCCoding;
}

export namespace StringSCCoding {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCoding?: proto_r4_core_datatypes_pb.Coding.AsObject,
  }
}

export class StringXhtml extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringXhtml.AsObject;
  static toObject(includeInstance: boolean, msg: StringXhtml): StringXhtml.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringXhtml, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringXhtml;
  static deserializeBinaryFromReader(message: StringXhtml, reader: jspb.BinaryReader): StringXhtml;
}

export namespace StringXhtml {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionAncestor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionAncestor.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionAncestor): StructureDefinitionAncestor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionAncestor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionAncestor;
  static deserializeBinaryFromReader(message: StructureDefinitionAncestor, reader: jspb.BinaryReader): StructureDefinitionAncestor;
}

export namespace StructureDefinitionAncestor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class StructureDefinitionApplicableVersion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): StructureDefinitionApplicableVersion.ValueCode | undefined;
  setValueCode(value?: StructureDefinitionApplicableVersion.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionApplicableVersion.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionApplicableVersion): StructureDefinitionApplicableVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionApplicableVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionApplicableVersion;
  static deserializeBinaryFromReader(message: StructureDefinitionApplicableVersion, reader: jspb.BinaryReader): StructureDefinitionApplicableVersion;
}

export namespace StructureDefinitionApplicableVersion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: StructureDefinitionApplicableVersion.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class StructureDefinitionCategory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionCategory.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionCategory): StructureDefinitionCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionCategory;
  static deserializeBinaryFromReader(message: StructureDefinitionCategory, reader: jspb.BinaryReader): StructureDefinitionCategory;
}

export namespace StructureDefinitionCategory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionCodegenSuper extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionCodegenSuper.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionCodegenSuper): StructureDefinitionCodegenSuper.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionCodegenSuper, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionCodegenSuper;
  static deserializeBinaryFromReader(message: StructureDefinitionCodegenSuper, reader: jspb.BinaryReader): StructureDefinitionCodegenSuper;
}

export namespace StructureDefinitionCodegenSuper {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionDependencies extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionDependencies.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionDependencies): StructureDefinitionDependencies.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionDependencies, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionDependencies;
  static deserializeBinaryFromReader(message: StructureDefinitionDependencies, reader: jspb.BinaryReader): StructureDefinitionDependencies;
}

export namespace StructureDefinitionDependencies {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class StructureDefinitionFmmNoWarnings extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionFmmNoWarnings.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionFmmNoWarnings): StructureDefinitionFmmNoWarnings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionFmmNoWarnings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionFmmNoWarnings;
  static deserializeBinaryFromReader(message: StructureDefinitionFmmNoWarnings, reader: jspb.BinaryReader): StructureDefinitionFmmNoWarnings;
}

export namespace StructureDefinitionFmmNoWarnings {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class StructureDefinitionNormativeVersion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): StructureDefinitionNormativeVersion.ValueCode | undefined;
  setValueCode(value?: StructureDefinitionNormativeVersion.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionNormativeVersion.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionNormativeVersion): StructureDefinitionNormativeVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionNormativeVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionNormativeVersion;
  static deserializeBinaryFromReader(message: StructureDefinitionNormativeVersion, reader: jspb.BinaryReader): StructureDefinitionNormativeVersion;
}

export namespace StructureDefinitionNormativeVersion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: StructureDefinitionNormativeVersion.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class StructureDefinitionSecurityCategory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): StructureDefinitionSecurityCategory.ValueCode | undefined;
  setValueCode(value?: StructureDefinitionSecurityCategory.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionSecurityCategory.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionSecurityCategory): StructureDefinitionSecurityCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionSecurityCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionSecurityCategory;
  static deserializeBinaryFromReader(message: StructureDefinitionSecurityCategory, reader: jspb.BinaryReader): StructureDefinitionSecurityCategory;
}

export namespace StructureDefinitionSecurityCategory {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: StructureDefinitionSecurityCategory.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceSecurityCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class StructureDefinitionSummary extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionSummary): StructureDefinitionSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionSummary;
  static deserializeBinaryFromReader(message: StructureDefinitionSummary, reader: jspb.BinaryReader): StructureDefinitionSummary;
}

export namespace StructureDefinitionSummary {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class StructureDefinitionTableName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionTableName.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionTableName): StructureDefinitionTableName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionTableName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionTableName;
  static deserializeBinaryFromReader(message: StructureDefinitionTableName, reader: jspb.BinaryReader): StructureDefinitionTableName;
}

export namespace StructureDefinitionTableName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionTemplateStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): StructureDefinitionTemplateStatus.ValueCode | undefined;
  setValueCode(value?: StructureDefinitionTemplateStatus.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionTemplateStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionTemplateStatus): StructureDefinitionTemplateStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionTemplateStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionTemplateStatus;
  static deserializeBinaryFromReader(message: StructureDefinitionTemplateStatus, reader: jspb.BinaryReader): StructureDefinitionTemplateStatus;
}

export namespace StructureDefinitionTemplateStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: StructureDefinitionTemplateStatus.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TemplateStatusCodeValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class StructureDefinitionXmlNoOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionXmlNoOrder.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionXmlNoOrder): StructureDefinitionXmlNoOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionXmlNoOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionXmlNoOrder;
  static deserializeBinaryFromReader(message: StructureDefinitionXmlNoOrder, reader: jspb.BinaryReader): StructureDefinitionXmlNoOrder;
}

export namespace StructureDefinitionXmlNoOrder {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class Style extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Style.AsObject;
  static toObject(includeInstance: boolean, msg: Style): Style.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Style, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Style;
  static deserializeBinaryFromReader(message: Style, reader: jspb.BinaryReader): Style;
}

export namespace Style {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class StyleSensitive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StyleSensitive.AsObject;
  static toObject(includeInstance: boolean, msg: StyleSensitive): StyleSensitive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StyleSensitive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StyleSensitive;
  static deserializeBinaryFromReader(message: StyleSensitive, reader: jspb.BinaryReader): StyleSensitive;
}

export namespace StyleSensitive {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class SupportingInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupportingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SupportingInfo): SupportingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupportingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupportingInfo;
  static deserializeBinaryFromReader(message: SupportingInfo, reader: jspb.BinaryReader): SupportingInfo;
}

export namespace SupportingInfo {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class TargetBodyStructure extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TargetBodyStructure.AsObject;
  static toObject(includeInstance: boolean, msg: TargetBodyStructure): TargetBodyStructure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TargetBodyStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TargetBodyStructure;
  static deserializeBinaryFromReader(message: TargetBodyStructure, reader: jspb.BinaryReader): TargetBodyStructure;
}

export namespace TargetBodyStructure {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class TaskCandidateList extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCandidateList.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCandidateList): TaskCandidateList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskCandidateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCandidateList;
  static deserializeBinaryFromReader(message: TaskCandidateList, reader: jspb.BinaryReader): TaskCandidateList;
}

export namespace TaskCandidateList {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class TaskReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReplaces): TaskReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReplaces;
  static deserializeBinaryFromReader(message: TaskReplaces, reader: jspb.BinaryReader): TaskReplaces;
}

export namespace TaskReplaces {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class TimezoneCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): TimezoneCode.ValueCode | undefined;
  setValueCode(value?: TimezoneCode.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimezoneCode.AsObject;
  static toObject(includeInstance: boolean, msg: TimezoneCode): TimezoneCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimezoneCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimezoneCode;
  static deserializeBinaryFromReader(message: TimezoneCode, reader: jspb.BinaryReader): TimezoneCode;
}

export namespace TimezoneCode {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: TimezoneCode.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
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
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      value: string,
    }
  }
}

export class TimingDayOfMonth extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValuePositiveInt(): boolean;
  clearValuePositiveInt(): void;
  getValuePositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setValuePositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimingDayOfMonth.AsObject;
  static toObject(includeInstance: boolean, msg: TimingDayOfMonth): TimingDayOfMonth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimingDayOfMonth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimingDayOfMonth;
  static deserializeBinaryFromReader(message: TimingDayOfMonth, reader: jspb.BinaryReader): TimingDayOfMonth;
}

export namespace TimingDayOfMonth {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valuePositiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
  }
}

export class TimingExact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimingExact.AsObject;
  static toObject(includeInstance: boolean, msg: TimingExact): TimingExact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimingExact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimingExact;
  static deserializeBinaryFromReader(message: TimingExact, reader: jspb.BinaryReader): TimingExact;
}

export namespace TimingExact {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class Translation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasLang(): boolean;
  clearLang(): void;
  getLang(): proto_r4_core_datatypes_pb.Code | undefined;
  setLang(value?: proto_r4_core_datatypes_pb.Code): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): Translation.ContentX | undefined;
  setContent(value?: Translation.ContentX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    lang?: proto_r4_core_datatypes_pb.Code.AsObject,
    content?: Translation.ContentX.AsObject,
  }

  export class ContentX extends jspb.Message {
    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

    getChoiceCase(): ContentX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentX.AsObject;
    static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentX;
    static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
  }

  export namespace ContentX {
    export type AsObject = {
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      STRING_VALUE = 1,
      MARKDOWN = 2,
    }
  }
}

export class UsageContextGroup extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageContextGroup.AsObject;
  static toObject(includeInstance: boolean, msg: UsageContextGroup): UsageContextGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageContextGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageContextGroup;
  static deserializeBinaryFromReader(message: UsageContextGroup, reader: jspb.BinaryReader): UsageContextGroup;
}

export namespace UsageContextGroup {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetActivityStatusDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetActivityStatusDate.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetActivityStatusDate): ValueSetActivityStatusDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetActivityStatusDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetActivityStatusDate;
  static deserializeBinaryFromReader(message: ValueSetActivityStatusDate, reader: jspb.BinaryReader): ValueSetActivityStatusDate;
}

export namespace ValueSetActivityStatusDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class ValueSetAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueContactDetail(): boolean;
  clearValueContactDetail(): void;
  getValueContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
  setValueContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetAuthor): ValueSetAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetAuthor;
  static deserializeBinaryFromReader(message: ValueSetAuthor, reader: jspb.BinaryReader): ValueSetAuthor;
}

export namespace ValueSetAuthor {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueContactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
  }
}

export class ValueSetAuthoritativeSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetAuthoritativeSource.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetAuthoritativeSource): ValueSetAuthoritativeSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetAuthoritativeSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetAuthoritativeSource;
  static deserializeBinaryFromReader(message: ValueSetAuthoritativeSource, reader: jspb.BinaryReader): ValueSetAuthoritativeSource;
}

export namespace ValueSetAuthoritativeSource {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetCaseSensitive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetCaseSensitive.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetCaseSensitive): ValueSetCaseSensitive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetCaseSensitive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetCaseSensitive;
  static deserializeBinaryFromReader(message: ValueSetCaseSensitive, reader: jspb.BinaryReader): ValueSetCaseSensitive;
}

export namespace ValueSetCaseSensitive {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetConceptComments extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetConceptComments.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetConceptComments): ValueSetConceptComments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetConceptComments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetConceptComments;
  static deserializeBinaryFromReader(message: ValueSetConceptComments, reader: jspb.BinaryReader): ValueSetConceptComments;
}

export namespace ValueSetConceptComments {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetConceptDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetConceptDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetConceptDefinition): ValueSetConceptDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetConceptDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetConceptDefinition;
  static deserializeBinaryFromReader(message: ValueSetConceptDefinition, reader: jspb.BinaryReader): ValueSetConceptDefinition;
}

export namespace ValueSetConceptDefinition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetConceptOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetConceptOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetConceptOrder): ValueSetConceptOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetConceptOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetConceptOrder;
  static deserializeBinaryFromReader(message: ValueSetConceptOrder, reader: jspb.BinaryReader): ValueSetConceptOrder;
}

export namespace ValueSetConceptOrder {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueInteger?: proto_r4_core_datatypes_pb.Integer.AsObject,
  }
}

export class ValueSetDeprecated extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetDeprecated.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetDeprecated): ValueSetDeprecated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetDeprecated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetDeprecated;
  static deserializeBinaryFromReader(message: ValueSetDeprecated, reader: jspb.BinaryReader): ValueSetDeprecated;
}

export namespace ValueSetDeprecated {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetEffectiveDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetEffectiveDate.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetEffectiveDate): ValueSetEffectiveDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetEffectiveDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetEffectiveDate;
  static deserializeBinaryFromReader(message: ValueSetEffectiveDate, reader: jspb.BinaryReader): ValueSetEffectiveDate;
}

export namespace ValueSetEffectiveDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }
}

export class ValueSetExpandGroup extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.Code | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.Code): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
  setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

  clearMemberList(): void;
  getMemberList(): Array<proto_r4_core_datatypes_pb.Code>;
  setMemberList(value: Array<proto_r4_core_datatypes_pb.Code>): void;
  addMember(value?: proto_r4_core_datatypes_pb.Code, index?: number): proto_r4_core_datatypes_pb.Code;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpandGroup.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpandGroup): ValueSetExpandGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpandGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpandGroup;
  static deserializeBinaryFromReader(message: ValueSetExpandGroup, reader: jspb.BinaryReader): ValueSetExpandGroup;
}

export namespace ValueSetExpandGroup {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.Code.AsObject,
    display?: proto_r4_core_datatypes_pb.String.AsObject,
    memberList: Array<proto_r4_core_datatypes_pb.Code.AsObject>,
  }
}

export class ValueSetExpandRules extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): ValueSetExpandRules.ValueCode | undefined;
  setValueCode(value?: ValueSetExpandRules.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpandRules.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpandRules): ValueSetExpandRules.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpandRules, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpandRules;
  static deserializeBinaryFromReader(message: ValueSetExpandRules, reader: jspb.BinaryReader): ValueSetExpandRules;
}

export namespace ValueSetExpandRules {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: ValueSetExpandRules.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionProcessingRuleCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class ValueSetExpansionSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpansionSource.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpansionSource): ValueSetExpansionSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpansionSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpansionSource;
  static deserializeBinaryFromReader(message: ValueSetExpansionSource, reader: jspb.BinaryReader): ValueSetExpansionSource;
}

export namespace ValueSetExpansionSource {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetExpirationDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_r4_core_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpirationDate.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpirationDate): ValueSetExpirationDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpirationDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpirationDate;
  static deserializeBinaryFromReader(message: ValueSetExpirationDate, reader: jspb.BinaryReader): ValueSetExpirationDate;
}

export namespace ValueSetExpirationDate {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueDate?: proto_r4_core_datatypes_pb.Date.AsObject,
  }
}

export class ValueSetExpression extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueExpression(): boolean;
  clearValueExpression(): void;
  getValueExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
  setValueExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpression.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpression): ValueSetExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpression;
  static deserializeBinaryFromReader(message: ValueSetExpression, reader: jspb.BinaryReader): ValueSetExpression;
}

export namespace ValueSetExpression {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueExpression?: proto_r4_core_datatypes_pb.Expression.AsObject,
  }
}

export class ValueSetExtensible extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExtensible.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExtensible): ValueSetExtensible.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExtensible, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExtensible;
  static deserializeBinaryFromReader(message: ValueSetExtensible, reader: jspb.BinaryReader): ValueSetExtensible;
}

export namespace ValueSetExtensible {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetKeyWord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetKeyWord.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetKeyWord): ValueSetKeyWord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetKeyWord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetKeyWord;
  static deserializeBinaryFromReader(message: ValueSetKeyWord, reader: jspb.BinaryReader): ValueSetKeyWord;
}

export namespace ValueSetKeyWord {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetLabel.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetLabel): ValueSetLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetLabel;
  static deserializeBinaryFromReader(message: ValueSetLabel, reader: jspb.BinaryReader): ValueSetLabel;
}

export namespace ValueSetLabel {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetMap.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetMap): ValueSetMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetMap;
  static deserializeBinaryFromReader(message: ValueSetMap, reader: jspb.BinaryReader): ValueSetMap;
}

export namespace ValueSetMap {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class ValueSetOtherName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasPreferred(): boolean;
  clearPreferred(): void;
  getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetOtherName.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetOtherName): ValueSetOtherName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetOtherName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetOtherName;
  static deserializeBinaryFromReader(message: ValueSetOtherName, reader: jspb.BinaryReader): ValueSetOtherName;
}

export namespace ValueSetOtherName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetParameterSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): ValueSetParameterSource.ValueCode | undefined;
  setValueCode(value?: ValueSetParameterSource.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetParameterSource.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetParameterSource): ValueSetParameterSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetParameterSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetParameterSource;
  static deserializeBinaryFromReader(message: ValueSetParameterSource, reader: jspb.BinaryReader): ValueSetParameterSource;
}

export namespace ValueSetParameterSource {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: ValueSetParameterSource.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap[keyof proto_r4_core_codes_pb.ExpansionParameterSourceCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class ValueSetReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetReference.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetReference): ValueSetReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetReference;
  static deserializeBinaryFromReader(message: ValueSetReference, reader: jspb.BinaryReader): ValueSetReference;
}

export namespace ValueSetReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetRulesText extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetRulesText.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetRulesText): ValueSetRulesText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetRulesText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetRulesText;
  static deserializeBinaryFromReader(message: ValueSetRulesText, reader: jspb.BinaryReader): ValueSetRulesText;
}

export namespace ValueSetRulesText {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class ValueSetSourceReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSourceReference): ValueSetSourceReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSourceReference;
  static deserializeBinaryFromReader(message: ValueSetSourceReference, reader: jspb.BinaryReader): ValueSetSourceReference;
}

export namespace ValueSetSourceReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetSteward extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueContactDetail(): boolean;
  clearValueContactDetail(): void;
  getValueContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
  setValueContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSteward.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSteward): ValueSetSteward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSteward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSteward;
  static deserializeBinaryFromReader(message: ValueSetSteward, reader: jspb.BinaryReader): ValueSetSteward;
}

export namespace ValueSetSteward {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueContactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
  }
}

export class ValueSetSupplement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSupplement.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSupplement): ValueSetSupplement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSupplement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSupplement;
  static deserializeBinaryFromReader(message: ValueSetSupplement, reader: jspb.BinaryReader): ValueSetSupplement;
}

export namespace ValueSetSupplement {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class ValueSetSystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCanonical(): boolean;
  clearValueCanonical(): void;
  getValueCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystem.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystem): ValueSetSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystem;
  static deserializeBinaryFromReader(message: ValueSetSystem, reader: jspb.BinaryReader): ValueSetSystem;
}

export namespace ValueSetSystem {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
  }
}

export class ValueSetSystemName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystemName.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystemName): ValueSetSystemName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystemName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystemName;
  static deserializeBinaryFromReader(message: ValueSetSystemName, reader: jspb.BinaryReader): ValueSetSystemName;
}

export namespace ValueSetSystemName {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetSystemRef extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystemRef.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystemRef): ValueSetSystemRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystemRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystemRef;
  static deserializeBinaryFromReader(message: ValueSetSystemRef, reader: jspb.BinaryReader): ValueSetSystemRef;
}

export namespace ValueSetSystemRef {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetToocostly extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetToocostly.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetToocostly): ValueSetToocostly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetToocostly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetToocostly;
  static deserializeBinaryFromReader(message: ValueSetToocostly, reader: jspb.BinaryReader): ValueSetToocostly;
}

export namespace ValueSetToocostly {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetTrustedExpansion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetTrustedExpansion.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetTrustedExpansion): ValueSetTrustedExpansion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetTrustedExpansion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetTrustedExpansion;
  static deserializeBinaryFromReader(message: ValueSetTrustedExpansion, reader: jspb.BinaryReader): ValueSetTrustedExpansion;
}

export namespace ValueSetTrustedExpansion {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetUnclosed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetUnclosed.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetUnclosed): ValueSetUnclosed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetUnclosed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetUnclosed;
  static deserializeBinaryFromReader(message: ValueSetUnclosed, reader: jspb.BinaryReader): ValueSetUnclosed;
}

export namespace ValueSetUnclosed {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetUsage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): proto_r4_core_datatypes_pb.String | undefined;
  setUser(value?: proto_r4_core_datatypes_pb.String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_r4_core_datatypes_pb.String | undefined;
  setUse(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetUsage.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetUsage): ValueSetUsage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetUsage;
  static deserializeBinaryFromReader(message: ValueSetUsage, reader: jspb.BinaryReader): ValueSetUsage;
}

export namespace ValueSetUsage {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    user?: proto_r4_core_datatypes_pb.String.AsObject,
    use?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class ValueSetWarning extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetWarning.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetWarning): ValueSetWarning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetWarning;
  static deserializeBinaryFromReader(message: ValueSetWarning, reader: jspb.BinaryReader): ValueSetWarning;
}

export namespace ValueSetWarning {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
  }
}

export class ValueSetWorkflowStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_r4_core_datatypes_pb.String | undefined;
  setValueString(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetWorkflowStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetWorkflowStatus): ValueSetWorkflowStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetWorkflowStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetWorkflowStatus;
  static deserializeBinaryFromReader(message: ValueSetWorkflowStatus, reader: jspb.BinaryReader): ValueSetWorkflowStatus;
}

export namespace ValueSetWorkflowStatus {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueString?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

export class Wg extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): Wg.ValueCode | undefined;
  setValueCode(value?: Wg.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wg.AsObject;
  static toObject(includeInstance: boolean, msg: Wg): Wg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wg;
  static deserializeBinaryFromReader(message: Wg, reader: jspb.BinaryReader): Wg;
}

export namespace Wg {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCode?: Wg.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap[keyof proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap[keyof proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap[keyof proto_r4_core_codes_pb.HL7WorkgroupCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

