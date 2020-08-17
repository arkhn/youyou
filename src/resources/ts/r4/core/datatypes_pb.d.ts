// package: google.fhir.r4.core
// file: proto/r4/core/datatypes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../proto/r4/core/codes_pb";
import * as proto_r4_core_valuesets_pb from "../../../proto/r4/core/valuesets_pb";

export class Base64Binary extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Base64Binary.AsObject;
  static toObject(includeInstance: boolean, msg: Base64Binary): Base64Binary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Base64Binary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Base64Binary;
  static deserializeBinaryFromReader(message: Base64Binary, reader: jspb.BinaryReader): Base64Binary;
}

export namespace Base64Binary {
  export type AsObject = {
    value: Uint8Array | string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Boolean extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Boolean.AsObject;
  static toObject(includeInstance: boolean, msg: Boolean): Boolean.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Boolean, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Boolean;
  static deserializeBinaryFromReader(message: Boolean, reader: jspb.BinaryReader): Boolean;
}

export namespace Boolean {
  export type AsObject = {
    value: boolean,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Canonical extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Canonical.AsObject;
  static toObject(includeInstance: boolean, msg: Canonical): Canonical.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Canonical, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Canonical;
  static deserializeBinaryFromReader(message: Canonical, reader: jspb.BinaryReader): Canonical;
}

export namespace Canonical {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Code extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Code.AsObject;
  static toObject(includeInstance: boolean, msg: Code): Code.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Code;
  static deserializeBinaryFromReader(message: Code, reader: jspb.BinaryReader): Code;
}

export namespace Code {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Date extends jspb.Message {
  getValueUs(): number;
  setValueUs(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getPrecision(): Date.PrecisionMap[keyof Date.PrecisionMap];
  setPrecision(value: Date.PrecisionMap[keyof Date.PrecisionMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Date.AsObject;
  static toObject(includeInstance: boolean, msg: Date): Date.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Date, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Date;
  static deserializeBinaryFromReader(message: Date, reader: jspb.BinaryReader): Date;
}

export namespace Date {
  export type AsObject = {
    valueUs: number,
    timezone: string,
    precision: Date.PrecisionMap[keyof Date.PrecisionMap],
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }

  export interface PrecisionMap {
    PRECISION_UNSPECIFIED: 0;
    YEAR: 1;
    MONTH: 2;
    DAY: 3;
  }

  export const Precision: PrecisionMap;
}

export class DateTime extends jspb.Message {
  getValueUs(): number;
  setValueUs(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getPrecision(): DateTime.PrecisionMap[keyof DateTime.PrecisionMap];
  setPrecision(value: DateTime.PrecisionMap[keyof DateTime.PrecisionMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateTime.AsObject;
  static toObject(includeInstance: boolean, msg: DateTime): DateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateTime;
  static deserializeBinaryFromReader(message: DateTime, reader: jspb.BinaryReader): DateTime;
}

export namespace DateTime {
  export type AsObject = {
    valueUs: number,
    timezone: string,
    precision: DateTime.PrecisionMap[keyof DateTime.PrecisionMap],
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }

  export interface PrecisionMap {
    PRECISION_UNSPECIFIED: 0;
    YEAR: 1;
    MONTH: 2;
    DAY: 3;
    SECOND: 4;
    MILLISECOND: 5;
    MICROSECOND: 6;
  }

  export const Precision: PrecisionMap;
}

export class Decimal extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decimal.AsObject;
  static toObject(includeInstance: boolean, msg: Decimal): Decimal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Decimal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decimal;
  static deserializeBinaryFromReader(message: Decimal, reader: jspb.BinaryReader): Decimal;
}

export namespace Decimal {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Id extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Instant extends jspb.Message {
  getValueUs(): number;
  setValueUs(value: number): void;

  getTimezone(): string;
  setTimezone(value: string): void;

  getPrecision(): Instant.PrecisionMap[keyof Instant.PrecisionMap];
  setPrecision(value: Instant.PrecisionMap[keyof Instant.PrecisionMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instant.AsObject;
  static toObject(includeInstance: boolean, msg: Instant): Instant.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Instant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instant;
  static deserializeBinaryFromReader(message: Instant, reader: jspb.BinaryReader): Instant;
}

export namespace Instant {
  export type AsObject = {
    valueUs: number,
    timezone: string,
    precision: Instant.PrecisionMap[keyof Instant.PrecisionMap],
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }

  export interface PrecisionMap {
    PRECISION_UNSPECIFIED: 0;
    SECOND: 1;
    MILLISECOND: 2;
    MICROSECOND: 3;
  }

  export const Precision: PrecisionMap;
}

export class Integer extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Integer.AsObject;
  static toObject(includeInstance: boolean, msg: Integer): Integer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Integer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Integer;
  static deserializeBinaryFromReader(message: Integer, reader: jspb.BinaryReader): Integer;
}

export namespace Integer {
  export type AsObject = {
    value: number,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Markdown extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Markdown.AsObject;
  static toObject(includeInstance: boolean, msg: Markdown): Markdown.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Markdown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Markdown;
  static deserializeBinaryFromReader(message: Markdown, reader: jspb.BinaryReader): Markdown;
}

export namespace Markdown {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Oid extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Oid.AsObject;
  static toObject(includeInstance: boolean, msg: Oid): Oid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Oid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Oid;
  static deserializeBinaryFromReader(message: Oid, reader: jspb.BinaryReader): Oid;
}

export namespace Oid {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class PositiveInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositiveInt.AsObject;
  static toObject(includeInstance: boolean, msg: PositiveInt): PositiveInt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositiveInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositiveInt;
  static deserializeBinaryFromReader(message: PositiveInt, reader: jspb.BinaryReader): PositiveInt;
}

export namespace PositiveInt {
  export type AsObject = {
    value: number,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class String extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): String.AsObject;
  static toObject(includeInstance: boolean, msg: String): String.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: String, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): String;
  static deserializeBinaryFromReader(message: String, reader: jspb.BinaryReader): String;
}

export namespace String {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Time extends jspb.Message {
  getValueUs(): number;
  setValueUs(value: number): void;

  getPrecision(): Time.PrecisionMap[keyof Time.PrecisionMap];
  setPrecision(value: Time.PrecisionMap[keyof Time.PrecisionMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Time.AsObject;
  static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Time;
  static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
}

export namespace Time {
  export type AsObject = {
    valueUs: number,
    precision: Time.PrecisionMap[keyof Time.PrecisionMap],
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }

  export interface PrecisionMap {
    PRECISION_UNSPECIFIED: 0;
    SECOND: 1;
    MILLISECOND: 2;
    MICROSECOND: 3;
  }

  export const Precision: PrecisionMap;
}

export class UnsignedInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsignedInt.AsObject;
  static toObject(includeInstance: boolean, msg: UnsignedInt): UnsignedInt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsignedInt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsignedInt;
  static deserializeBinaryFromReader(message: UnsignedInt, reader: jspb.BinaryReader): UnsignedInt;
}

export namespace UnsignedInt {
  export type AsObject = {
    value: number,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Uri extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uri.AsObject;
  static toObject(includeInstance: boolean, msg: Uri): Uri.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uri;
  static deserializeBinaryFromReader(message: Uri, reader: jspb.BinaryReader): Uri;
}

export namespace Uri {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Url extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Url.AsObject;
  static toObject(includeInstance: boolean, msg: Url): Url.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Url, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Url;
  static deserializeBinaryFromReader(message: Url, reader: jspb.BinaryReader): Url;
}

export namespace Url {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Uuid extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uuid.AsObject;
  static toObject(includeInstance: boolean, msg: Uuid): Uuid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uuid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uuid;
  static deserializeBinaryFromReader(message: Uuid, reader: jspb.BinaryReader): Uuid;
}

export namespace Uuid {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Xhtml extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Xhtml.AsObject;
  static toObject(includeInstance: boolean, msg: Xhtml): Xhtml.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Xhtml, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Xhtml;
  static deserializeBinaryFromReader(message: Xhtml, reader: jspb.BinaryReader): Xhtml;
}

export namespace Xhtml {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
  }
}

export class Address extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): Address.UseCode | undefined;
  setUse(value?: Address.UseCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Address.TypeCode | undefined;
  setType(value?: Address.TypeCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  clearLineList(): void;
  getLineList(): Array<String>;
  setLineList(value: Array<String>): void;
  addLine(value?: String, index?: number): String;

  hasCity(): boolean;
  clearCity(): void;
  getCity(): String | undefined;
  setCity(value?: String): void;

  hasDistrict(): boolean;
  clearDistrict(): void;
  getDistrict(): String | undefined;
  setDistrict(value?: String): void;

  hasState(): boolean;
  clearState(): void;
  getState(): String | undefined;
  setState(value?: String): void;

  hasPostalCode(): boolean;
  clearPostalCode(): void;
  getPostalCode(): String | undefined;
  setPostalCode(value?: String): void;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): String | undefined;
  setCountry(value?: String): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Period | undefined;
  setPeriod(value?: Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    use?: Address.UseCode.AsObject,
    type?: Address.TypeCode.AsObject,
    text?: String.AsObject,
    lineList: Array<String.AsObject>,
    city?: String.AsObject,
    district?: String.AsObject,
    state?: String.AsObject,
    postalCode?: String.AsObject,
    country?: String.AsObject,
    period?: Period.AsObject,
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AddressUseCode.ValueMap[keyof proto_r4_core_codes_pb.AddressUseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AddressUseCode.ValueMap[keyof proto_r4_core_codes_pb.AddressUseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseCode.AsObject;
    static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseCode;
    static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
  }

  export namespace UseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AddressUseCode.ValueMap[keyof proto_r4_core_codes_pb.AddressUseCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AddressTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AddressTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AddressTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AddressTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AddressTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AddressTypeCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Age extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): Age.ComparatorCode | undefined;
  setComparator(value?: Age.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Age.AsObject;
  static toObject(includeInstance: boolean, msg: Age): Age.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Age, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Age;
  static deserializeBinaryFromReader(message: Age, reader: jspb.BinaryReader): Age;
}

export namespace Age {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: Age.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Annotation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): Annotation.AuthorX | undefined;
  setAuthor(value?: Annotation.AuthorX): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): DateTime | undefined;
  setTime(value?: DateTime): void;

  hasText(): boolean;
  clearText(): void;
  getText(): Markdown | undefined;
  setText(value?: Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Annotation.AsObject;
  static toObject(includeInstance: boolean, msg: Annotation): Annotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Annotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Annotation;
  static deserializeBinaryFromReader(message: Annotation, reader: jspb.BinaryReader): Annotation;
}

export namespace Annotation {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    author?: Annotation.AuthorX.AsObject,
    time?: DateTime.AsObject,
    text?: Markdown.AsObject,
  }

  export class AuthorX extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    getChoiceCase(): AuthorX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthorX.AsObject;
    static toObject(includeInstance: boolean, msg: AuthorX): AuthorX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthorX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthorX;
    static deserializeBinaryFromReader(message: AuthorX, reader: jspb.BinaryReader): AuthorX;
  }

  export namespace AuthorX {
    export type AsObject = {
      reference?: Reference.AsObject,
      stringValue?: String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      REFERENCE = 1,
      STRING_VALUE = 2,
    }
  }
}

export class Attachment extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasContentType(): boolean;
  clearContentType(): void;
  getContentType(): Attachment.ContentTypeCode | undefined;
  setContentType(value?: Attachment.ContentTypeCode): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): Code | undefined;
  setLanguage(value?: Code): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Base64Binary | undefined;
  setData(value?: Base64Binary): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): Url | undefined;
  setUrl(value?: Url): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): UnsignedInt | undefined;
  setSize(value?: UnsignedInt): void;

  hasHash(): boolean;
  clearHash(): void;
  getHash(): Base64Binary | undefined;
  setHash(value?: Base64Binary): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): String | undefined;
  setTitle(value?: String): void;

  hasCreation(): boolean;
  clearCreation(): void;
  getCreation(): DateTime | undefined;
  setCreation(value?: DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attachment.AsObject;
  static toObject(includeInstance: boolean, msg: Attachment): Attachment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attachment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attachment;
  static deserializeBinaryFromReader(message: Attachment, reader: jspb.BinaryReader): Attachment;
}

export namespace Attachment {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    contentType?: Attachment.ContentTypeCode.AsObject,
    language?: Code.AsObject,
    data?: Base64Binary.AsObject,
    url?: Url.AsObject,
    size?: UnsignedInt.AsObject,
    hash?: Base64Binary.AsObject,
    title?: String.AsObject,
    creation?: DateTime.AsObject,
  }

  export class ContentTypeCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

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
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      value: string,
    }
  }
}

export class BackboneElement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackboneElement.AsObject;
  static toObject(includeInstance: boolean, msg: BackboneElement): BackboneElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackboneElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackboneElement;
  static deserializeBinaryFromReader(message: BackboneElement, reader: jspb.BinaryReader): BackboneElement;
}

export namespace BackboneElement {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
  }
}

export class CodeableConcept extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearCodingList(): void;
  getCodingList(): Array<Coding>;
  setCodingList(value: Array<Coding>): void;
  addCoding(value?: Coding, index?: number): Coding;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeableConcept.AsObject;
  static toObject(includeInstance: boolean, msg: CodeableConcept): CodeableConcept.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeableConcept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeableConcept;
  static deserializeBinaryFromReader(message: CodeableConcept, reader: jspb.BinaryReader): CodeableConcept;
}

export namespace CodeableConcept {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    codingList: Array<Coding.AsObject>,
    text?: String.AsObject,
  }
}

export class Coding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): String | undefined;
  setVersion(value?: String): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): String | undefined;
  setDisplay(value?: String): void;

  hasUserSelected(): boolean;
  clearUserSelected(): void;
  getUserSelected(): Boolean | undefined;
  setUserSelected(value?: Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Coding.AsObject;
  static toObject(includeInstance: boolean, msg: Coding): Coding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Coding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Coding;
  static deserializeBinaryFromReader(message: Coding, reader: jspb.BinaryReader): Coding;
}

export namespace Coding {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    system?: Uri.AsObject,
    version?: String.AsObject,
    code?: Code.AsObject,
    display?: String.AsObject,
    userSelected?: Boolean.AsObject,
  }
}

export class ContactDetail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): String | undefined;
  setName(value?: String): void;

  clearTelecomList(): void;
  getTelecomList(): Array<ContactPoint>;
  setTelecomList(value: Array<ContactPoint>): void;
  addTelecom(value?: ContactPoint, index?: number): ContactPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ContactDetail): ContactDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactDetail;
  static deserializeBinaryFromReader(message: ContactDetail, reader: jspb.BinaryReader): ContactDetail;
}

export namespace ContactDetail {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    name?: String.AsObject,
    telecomList: Array<ContactPoint.AsObject>,
  }
}

export class ContactPoint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): ContactPoint.SystemCode | undefined;
  setSystem(value?: ContactPoint.SystemCode): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): String | undefined;
  setValue(value?: String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): ContactPoint.UseCode | undefined;
  setUse(value?: ContactPoint.UseCode): void;

  hasRank(): boolean;
  clearRank(): void;
  getRank(): PositiveInt | undefined;
  setRank(value?: PositiveInt): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Period | undefined;
  setPeriod(value?: Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPoint.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPoint): ContactPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPoint;
  static deserializeBinaryFromReader(message: ContactPoint, reader: jspb.BinaryReader): ContactPoint;
}

export namespace ContactPoint {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    system?: ContactPoint.SystemCode.AsObject,
    value?: String.AsObject,
    use?: ContactPoint.UseCode.AsObject,
    rank?: PositiveInt.AsObject,
    period?: Period.AsObject,
  }

  export class SystemCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemCode.AsObject;
    static toObject(includeInstance: boolean, msg: SystemCode): SystemCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemCode;
    static deserializeBinaryFromReader(message: SystemCode, reader: jspb.BinaryReader): SystemCode;
  }

  export namespace SystemCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointSystemCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ContactPointUseCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointUseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ContactPointUseCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointUseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseCode.AsObject;
    static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseCode;
    static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
  }

  export namespace UseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ContactPointUseCode.ValueMap[keyof proto_r4_core_codes_pb.ContactPointUseCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Contributor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): Contributor.TypeCode | undefined;
  setType(value?: Contributor.TypeCode): void;

  hasName(): boolean;
  clearName(): void;
  getName(): String | undefined;
  setName(value?: String): void;

  clearContactList(): void;
  getContactList(): Array<ContactDetail>;
  setContactList(value: Array<ContactDetail>): void;
  addContact(value?: ContactDetail, index?: number): ContactDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contributor.AsObject;
  static toObject(includeInstance: boolean, msg: Contributor): Contributor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contributor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contributor;
  static deserializeBinaryFromReader(message: Contributor, reader: jspb.BinaryReader): Contributor;
}

export namespace Contributor {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    type?: Contributor.TypeCode.AsObject,
    name?: String.AsObject,
    contactList: Array<ContactDetail.AsObject>,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ContributorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ContributorTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ContributorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ContributorTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ContributorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ContributorTypeCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Count extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): Count.ComparatorCode | undefined;
  setComparator(value?: Count.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Count.AsObject;
  static toObject(includeInstance: boolean, msg: Count): Count.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Count, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Count;
  static deserializeBinaryFromReader(message: Count, reader: jspb.BinaryReader): Count;
}

export namespace Count {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: Count.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class DataRequirement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): DataRequirement.TypeCode | undefined;
  setType(value?: DataRequirement.TypeCode): void;

  clearProfileList(): void;
  getProfileList(): Array<Canonical>;
  setProfileList(value: Array<Canonical>): void;
  addProfile(value?: Canonical, index?: number): Canonical;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): DataRequirement.SubjectX | undefined;
  setSubject(value?: DataRequirement.SubjectX): void;

  clearMustSupportList(): void;
  getMustSupportList(): Array<String>;
  setMustSupportList(value: Array<String>): void;
  addMustSupport(value?: String, index?: number): String;

  clearCodeFilterList(): void;
  getCodeFilterList(): Array<DataRequirement.CodeFilter>;
  setCodeFilterList(value: Array<DataRequirement.CodeFilter>): void;
  addCodeFilter(value?: DataRequirement.CodeFilter, index?: number): DataRequirement.CodeFilter;

  clearDateFilterList(): void;
  getDateFilterList(): Array<DataRequirement.DateFilter>;
  setDateFilterList(value: Array<DataRequirement.DateFilter>): void;
  addDateFilter(value?: DataRequirement.DateFilter, index?: number): DataRequirement.DateFilter;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): PositiveInt | undefined;
  setLimit(value?: PositiveInt): void;

  clearSortList(): void;
  getSortList(): Array<DataRequirement.Sort>;
  setSortList(value: Array<DataRequirement.Sort>): void;
  addSort(value?: DataRequirement.Sort, index?: number): DataRequirement.Sort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: DataRequirement): DataRequirement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRequirement;
  static deserializeBinaryFromReader(message: DataRequirement, reader: jspb.BinaryReader): DataRequirement;
}

export namespace DataRequirement {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    type?: DataRequirement.TypeCode.AsObject,
    profileList: Array<Canonical.AsObject>,
    subject?: DataRequirement.SubjectX.AsObject,
    mustSupportList: Array<String.AsObject>,
    codeFilterList: Array<DataRequirement.CodeFilter.AsObject>,
    dateFilterList: Array<DataRequirement.DateFilter.AsObject>,
    limit?: PositiveInt.AsObject,
    sortList: Array<DataRequirement.Sort.AsObject>,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class SubjectX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    getChoiceCase(): SubjectX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubjectX.AsObject;
    static toObject(includeInstance: boolean, msg: SubjectX): SubjectX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubjectX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubjectX;
    static deserializeBinaryFromReader(message: SubjectX, reader: jspb.BinaryReader): SubjectX;
  }

  export namespace SubjectX {
    export type AsObject = {
      codeableConcept?: CodeableConcept.AsObject,
      reference?: Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class CodeFilter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): String | undefined;
    setPath(value?: String): void;

    hasSearchParam(): boolean;
    clearSearchParam(): void;
    getSearchParam(): String | undefined;
    setSearchParam(value?: String): void;

    hasValueSet(): boolean;
    clearValueSet(): void;
    getValueSet(): Canonical | undefined;
    setValueSet(value?: Canonical): void;

    clearCodeList(): void;
    getCodeList(): Array<Coding>;
    setCodeList(value: Array<Coding>): void;
    addCode(value?: Coding, index?: number): Coding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CodeFilter): CodeFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeFilter;
    static deserializeBinaryFromReader(message: CodeFilter, reader: jspb.BinaryReader): CodeFilter;
  }

  export namespace CodeFilter {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      path?: String.AsObject,
      searchParam?: String.AsObject,
      valueSet?: Canonical.AsObject,
      codeList: Array<Coding.AsObject>,
    }
  }

  export class DateFilter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): String | undefined;
    setPath(value?: String): void;

    hasSearchParam(): boolean;
    clearSearchParam(): void;
    getSearchParam(): String | undefined;
    setSearchParam(value?: String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): DataRequirement.DateFilter.ValueX | undefined;
    setValue(value?: DataRequirement.DateFilter.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateFilter.AsObject;
    static toObject(includeInstance: boolean, msg: DateFilter): DateFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateFilter;
    static deserializeBinaryFromReader(message: DateFilter, reader: jspb.BinaryReader): DateFilter;
  }

  export namespace DateFilter {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      path?: String.AsObject,
      searchParam?: String.AsObject,
      value?: DataRequirement.DateFilter.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): DateTime | undefined;
      setDateTime(value?: DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): Period | undefined;
      setPeriod(value?: Period): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): Duration | undefined;
      setDuration(value?: Duration): void;

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
        dateTime?: DateTime.AsObject,
        period?: Period.AsObject,
        duration?: Duration.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
        DURATION = 3,
      }
    }
  }

  export class Sort extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): String | undefined;
    setPath(value?: String): void;

    hasDirection(): boolean;
    clearDirection(): void;
    getDirection(): DataRequirement.Sort.DirectionCode | undefined;
    setDirection(value?: DataRequirement.Sort.DirectionCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Sort.AsObject;
    static toObject(includeInstance: boolean, msg: Sort): Sort.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Sort, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Sort;
    static deserializeBinaryFromReader(message: Sort, reader: jspb.BinaryReader): Sort;
  }

  export namespace Sort {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      path?: String.AsObject,
      direction?: DataRequirement.Sort.DirectionCode.AsObject,
    }

    export class DirectionCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.SortDirectionCode.ValueMap[keyof proto_r4_core_codes_pb.SortDirectionCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.SortDirectionCode.ValueMap[keyof proto_r4_core_codes_pb.SortDirectionCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DirectionCode.AsObject;
      static toObject(includeInstance: boolean, msg: DirectionCode): DirectionCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DirectionCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DirectionCode;
      static deserializeBinaryFromReader(message: DirectionCode, reader: jspb.BinaryReader): DirectionCode;
    }

    export namespace DirectionCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.SortDirectionCode.ValueMap[keyof proto_r4_core_codes_pb.SortDirectionCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }
}

export class Distance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): Distance.ComparatorCode | undefined;
  setComparator(value?: Distance.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distance.AsObject;
  static toObject(includeInstance: boolean, msg: Distance): Distance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Distance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distance;
  static deserializeBinaryFromReader(message: Distance, reader: jspb.BinaryReader): Distance;
}

export namespace Distance {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: Distance.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Dosage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasSequence(): boolean;
  clearSequence(): void;
  getSequence(): Integer | undefined;
  setSequence(value?: Integer): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  clearAdditionalInstructionList(): void;
  getAdditionalInstructionList(): Array<CodeableConcept>;
  setAdditionalInstructionList(value: Array<CodeableConcept>): void;
  addAdditionalInstruction(value?: CodeableConcept, index?: number): CodeableConcept;

  hasPatientInstruction(): boolean;
  clearPatientInstruction(): void;
  getPatientInstruction(): String | undefined;
  setPatientInstruction(value?: String): void;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): Timing | undefined;
  setTiming(value?: Timing): void;

  hasAsNeeded(): boolean;
  clearAsNeeded(): void;
  getAsNeeded(): Dosage.AsNeededX | undefined;
  setAsNeeded(value?: Dosage.AsNeededX): void;

  hasSite(): boolean;
  clearSite(): void;
  getSite(): CodeableConcept | undefined;
  setSite(value?: CodeableConcept): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): CodeableConcept | undefined;
  setRoute(value?: CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): CodeableConcept | undefined;
  setMethod(value?: CodeableConcept): void;

  clearDoseAndRateList(): void;
  getDoseAndRateList(): Array<Dosage.DoseAndRate>;
  setDoseAndRateList(value: Array<Dosage.DoseAndRate>): void;
  addDoseAndRate(value?: Dosage.DoseAndRate, index?: number): Dosage.DoseAndRate;

  hasMaxDosePerPeriod(): boolean;
  clearMaxDosePerPeriod(): void;
  getMaxDosePerPeriod(): Ratio | undefined;
  setMaxDosePerPeriod(value?: Ratio): void;

  hasMaxDosePerAdministration(): boolean;
  clearMaxDosePerAdministration(): void;
  getMaxDosePerAdministration(): SimpleQuantity | undefined;
  setMaxDosePerAdministration(value?: SimpleQuantity): void;

  hasMaxDosePerLifetime(): boolean;
  clearMaxDosePerLifetime(): void;
  getMaxDosePerLifetime(): SimpleQuantity | undefined;
  setMaxDosePerLifetime(value?: SimpleQuantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dosage.AsObject;
  static toObject(includeInstance: boolean, msg: Dosage): Dosage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Dosage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dosage;
  static deserializeBinaryFromReader(message: Dosage, reader: jspb.BinaryReader): Dosage;
}

export namespace Dosage {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    sequence?: Integer.AsObject,
    text?: String.AsObject,
    additionalInstructionList: Array<CodeableConcept.AsObject>,
    patientInstruction?: String.AsObject,
    timing?: Timing.AsObject,
    asNeeded?: Dosage.AsNeededX.AsObject,
    site?: CodeableConcept.AsObject,
    route?: CodeableConcept.AsObject,
    method?: CodeableConcept.AsObject,
    doseAndRateList: Array<Dosage.DoseAndRate.AsObject>,
    maxDosePerPeriod?: Ratio.AsObject,
    maxDosePerAdministration?: SimpleQuantity.AsObject,
    maxDosePerLifetime?: SimpleQuantity.AsObject,
  }

  export class AsNeededX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    getChoiceCase(): AsNeededX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsNeededX.AsObject;
    static toObject(includeInstance: boolean, msg: AsNeededX): AsNeededX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsNeededX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsNeededX;
    static deserializeBinaryFromReader(message: AsNeededX, reader: jspb.BinaryReader): AsNeededX;
  }

  export namespace AsNeededX {
    export type AsObject = {
      pb_boolean?: Boolean.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class DoseAndRate extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): CodeableConcept | undefined;
    setType(value?: CodeableConcept): void;

    hasDose(): boolean;
    clearDose(): void;
    getDose(): Dosage.DoseAndRate.DoseX | undefined;
    setDose(value?: Dosage.DoseAndRate.DoseX): void;

    hasRate(): boolean;
    clearRate(): void;
    getRate(): Dosage.DoseAndRate.RateX | undefined;
    setRate(value?: Dosage.DoseAndRate.RateX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoseAndRate.AsObject;
    static toObject(includeInstance: boolean, msg: DoseAndRate): DoseAndRate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoseAndRate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoseAndRate;
    static deserializeBinaryFromReader(message: DoseAndRate, reader: jspb.BinaryReader): DoseAndRate;
  }

  export namespace DoseAndRate {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      type?: CodeableConcept.AsObject,
      dose?: Dosage.DoseAndRate.DoseX.AsObject,
      rate?: Dosage.DoseAndRate.RateX.AsObject,
    }

    export class DoseX extends jspb.Message {
      hasRange(): boolean;
      clearRange(): void;
      getRange(): Range | undefined;
      setRange(value?: Range): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): SimpleQuantity | undefined;
      setQuantity(value?: SimpleQuantity): void;

      getChoiceCase(): DoseX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DoseX.AsObject;
      static toObject(includeInstance: boolean, msg: DoseX): DoseX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DoseX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DoseX;
      static deserializeBinaryFromReader(message: DoseX, reader: jspb.BinaryReader): DoseX;
    }

    export namespace DoseX {
      export type AsObject = {
        range?: Range.AsObject,
        quantity?: SimpleQuantity.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        RANGE = 1,
        QUANTITY = 2,
      }
    }

    export class RateX extends jspb.Message {
      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): Ratio | undefined;
      setRatio(value?: Ratio): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): Range | undefined;
      setRange(value?: Range): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): SimpleQuantity | undefined;
      setQuantity(value?: SimpleQuantity): void;

      getChoiceCase(): RateX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RateX.AsObject;
      static toObject(includeInstance: boolean, msg: RateX): RateX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RateX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RateX;
      static deserializeBinaryFromReader(message: RateX, reader: jspb.BinaryReader): RateX;
    }

    export namespace RateX {
      export type AsObject = {
        ratio?: Ratio.AsObject,
        range?: Range.AsObject,
        quantity?: SimpleQuantity.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        RATIO = 1,
        RANGE = 2,
        QUANTITY = 3,
      }
    }
  }
}

export class Duration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): Duration.ComparatorCode | undefined;
  setComparator(value?: Duration.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Duration.AsObject;
  static toObject(includeInstance: boolean, msg: Duration): Duration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Duration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Duration;
  static deserializeBinaryFromReader(message: Duration, reader: jspb.BinaryReader): Duration;
}

export namespace Duration {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: Duration.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class ElementDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): String | undefined;
  setPath(value?: String): void;

  clearRepresentationList(): void;
  getRepresentationList(): Array<ElementDefinition.RepresentationCode>;
  setRepresentationList(value: Array<ElementDefinition.RepresentationCode>): void;
  addRepresentation(value?: ElementDefinition.RepresentationCode, index?: number): ElementDefinition.RepresentationCode;

  hasSliceName(): boolean;
  clearSliceName(): void;
  getSliceName(): String | undefined;
  setSliceName(value?: String): void;

  hasSliceIsConstraining(): boolean;
  clearSliceIsConstraining(): void;
  getSliceIsConstraining(): Boolean | undefined;
  setSliceIsConstraining(value?: Boolean): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): String | undefined;
  setLabel(value?: String): void;

  clearCodeList(): void;
  getCodeList(): Array<Coding>;
  setCodeList(value: Array<Coding>): void;
  addCode(value?: Coding, index?: number): Coding;

  hasSlicing(): boolean;
  clearSlicing(): void;
  getSlicing(): ElementDefinition.Slicing | undefined;
  setSlicing(value?: ElementDefinition.Slicing): void;

  hasShort(): boolean;
  clearShort(): void;
  getShort(): String | undefined;
  setShort(value?: String): void;

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): Markdown | undefined;
  setDefinition(value?: Markdown): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): Markdown | undefined;
  setComment(value?: Markdown): void;

  hasRequirements(): boolean;
  clearRequirements(): void;
  getRequirements(): Markdown | undefined;
  setRequirements(value?: Markdown): void;

  clearAliasList(): void;
  getAliasList(): Array<String>;
  setAliasList(value: Array<String>): void;
  addAlias(value?: String, index?: number): String;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): UnsignedInt | undefined;
  setMin(value?: UnsignedInt): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): String | undefined;
  setMax(value?: String): void;

  hasBase(): boolean;
  clearBase(): void;
  getBase(): ElementDefinition.Base | undefined;
  setBase(value?: ElementDefinition.Base): void;

  hasContentReference(): boolean;
  clearContentReference(): void;
  getContentReference(): Uri | undefined;
  setContentReference(value?: Uri): void;

  clearTypeList(): void;
  getTypeList(): Array<ElementDefinition.TypeRef>;
  setTypeList(value: Array<ElementDefinition.TypeRef>): void;
  addType(value?: ElementDefinition.TypeRef, index?: number): ElementDefinition.TypeRef;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): ElementDefinition.DefaultValueX | undefined;
  setDefaultValue(value?: ElementDefinition.DefaultValueX): void;

  hasMeaningWhenMissing(): boolean;
  clearMeaningWhenMissing(): void;
  getMeaningWhenMissing(): Markdown | undefined;
  setMeaningWhenMissing(value?: Markdown): void;

  hasOrderMeaning(): boolean;
  clearOrderMeaning(): void;
  getOrderMeaning(): String | undefined;
  setOrderMeaning(value?: String): void;

  hasFixed(): boolean;
  clearFixed(): void;
  getFixed(): ElementDefinition.FixedX | undefined;
  setFixed(value?: ElementDefinition.FixedX): void;

  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): ElementDefinition.PatternX | undefined;
  setPattern(value?: ElementDefinition.PatternX): void;

  clearExampleList(): void;
  getExampleList(): Array<ElementDefinition.Example>;
  setExampleList(value: Array<ElementDefinition.Example>): void;
  addExample(value?: ElementDefinition.Example, index?: number): ElementDefinition.Example;

  hasMinValue(): boolean;
  clearMinValue(): void;
  getMinValue(): ElementDefinition.MinValueX | undefined;
  setMinValue(value?: ElementDefinition.MinValueX): void;

  hasMaxValue(): boolean;
  clearMaxValue(): void;
  getMaxValue(): ElementDefinition.MaxValueX | undefined;
  setMaxValue(value?: ElementDefinition.MaxValueX): void;

  hasMaxLength(): boolean;
  clearMaxLength(): void;
  getMaxLength(): Integer | undefined;
  setMaxLength(value?: Integer): void;

  clearConditionList(): void;
  getConditionList(): Array<Id>;
  setConditionList(value: Array<Id>): void;
  addCondition(value?: Id, index?: number): Id;

  clearConstraintList(): void;
  getConstraintList(): Array<ElementDefinition.Constraint>;
  setConstraintList(value: Array<ElementDefinition.Constraint>): void;
  addConstraint(value?: ElementDefinition.Constraint, index?: number): ElementDefinition.Constraint;

  hasMustSupport(): boolean;
  clearMustSupport(): void;
  getMustSupport(): Boolean | undefined;
  setMustSupport(value?: Boolean): void;

  hasIsModifier(): boolean;
  clearIsModifier(): void;
  getIsModifier(): Boolean | undefined;
  setIsModifier(value?: Boolean): void;

  hasIsModifierReason(): boolean;
  clearIsModifierReason(): void;
  getIsModifierReason(): String | undefined;
  setIsModifierReason(value?: String): void;

  hasIsSummary(): boolean;
  clearIsSummary(): void;
  getIsSummary(): Boolean | undefined;
  setIsSummary(value?: Boolean): void;

  hasBinding(): boolean;
  clearBinding(): void;
  getBinding(): ElementDefinition.ElementDefinitionBinding | undefined;
  setBinding(value?: ElementDefinition.ElementDefinitionBinding): void;

  clearMappingList(): void;
  getMappingList(): Array<ElementDefinition.Mapping>;
  setMappingList(value: Array<ElementDefinition.Mapping>): void;
  addMapping(value?: ElementDefinition.Mapping, index?: number): ElementDefinition.Mapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinition): ElementDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinition;
  static deserializeBinaryFromReader(message: ElementDefinition, reader: jspb.BinaryReader): ElementDefinition;
}

export namespace ElementDefinition {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    path?: String.AsObject,
    representationList: Array<ElementDefinition.RepresentationCode.AsObject>,
    sliceName?: String.AsObject,
    sliceIsConstraining?: Boolean.AsObject,
    label?: String.AsObject,
    codeList: Array<Coding.AsObject>,
    slicing?: ElementDefinition.Slicing.AsObject,
    pb_short?: String.AsObject,
    definition?: Markdown.AsObject,
    comment?: Markdown.AsObject,
    requirements?: Markdown.AsObject,
    aliasList: Array<String.AsObject>,
    min?: UnsignedInt.AsObject,
    max?: String.AsObject,
    base?: ElementDefinition.Base.AsObject,
    contentReference?: Uri.AsObject,
    typeList: Array<ElementDefinition.TypeRef.AsObject>,
    defaultValue?: ElementDefinition.DefaultValueX.AsObject,
    meaningWhenMissing?: Markdown.AsObject,
    orderMeaning?: String.AsObject,
    fixed?: ElementDefinition.FixedX.AsObject,
    pattern?: ElementDefinition.PatternX.AsObject,
    exampleList: Array<ElementDefinition.Example.AsObject>,
    minValue?: ElementDefinition.MinValueX.AsObject,
    maxValue?: ElementDefinition.MaxValueX.AsObject,
    maxLength?: Integer.AsObject,
    conditionList: Array<Id.AsObject>,
    constraintList: Array<ElementDefinition.Constraint.AsObject>,
    mustSupport?: Boolean.AsObject,
    isModifier?: Boolean.AsObject,
    isModifierReason?: String.AsObject,
    isSummary?: Boolean.AsObject,
    binding?: ElementDefinition.ElementDefinitionBinding.AsObject,
    mappingList: Array<ElementDefinition.Mapping.AsObject>,
  }

  export class RepresentationCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepresentationCode.AsObject;
    static toObject(includeInstance: boolean, msg: RepresentationCode): RepresentationCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepresentationCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepresentationCode;
    static deserializeBinaryFromReader(message: RepresentationCode, reader: jspb.BinaryReader): RepresentationCode;
  }

  export namespace RepresentationCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyRepresentationCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class Slicing extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    clearDiscriminatorList(): void;
    getDiscriminatorList(): Array<ElementDefinition.Slicing.Discriminator>;
    setDiscriminatorList(value: Array<ElementDefinition.Slicing.Discriminator>): void;
    addDiscriminator(value?: ElementDefinition.Slicing.Discriminator, index?: number): ElementDefinition.Slicing.Discriminator;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): String | undefined;
    setDescription(value?: String): void;

    hasOrdered(): boolean;
    clearOrdered(): void;
    getOrdered(): Boolean | undefined;
    setOrdered(value?: Boolean): void;

    hasRules(): boolean;
    clearRules(): void;
    getRules(): ElementDefinition.Slicing.RulesCode | undefined;
    setRules(value?: ElementDefinition.Slicing.RulesCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Slicing.AsObject;
    static toObject(includeInstance: boolean, msg: Slicing): Slicing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Slicing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Slicing;
    static deserializeBinaryFromReader(message: Slicing, reader: jspb.BinaryReader): Slicing;
  }

  export namespace Slicing {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      discriminatorList: Array<ElementDefinition.Slicing.Discriminator.AsObject>,
      description?: String.AsObject,
      ordered?: Boolean.AsObject,
      rules?: ElementDefinition.Slicing.RulesCode.AsObject,
    }

    export class Discriminator extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      hasType(): boolean;
      clearType(): void;
      getType(): ElementDefinition.Slicing.Discriminator.TypeCode | undefined;
      setType(value?: ElementDefinition.Slicing.Discriminator.TypeCode): void;

      hasPath(): boolean;
      clearPath(): void;
      getPath(): String | undefined;
      setPath(value?: String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Discriminator.AsObject;
      static toObject(includeInstance: boolean, msg: Discriminator): Discriminator.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Discriminator, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Discriminator;
      static deserializeBinaryFromReader(message: Discriminator, reader: jspb.BinaryReader): Discriminator;
    }

    export namespace Discriminator {
      export type AsObject = {
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
        type?: ElementDefinition.Slicing.Discriminator.TypeCode.AsObject,
        path?: String.AsObject,
      }

      export class TypeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): String | undefined;
        setId(value?: String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<Extension>;
        setExtensionList(value: Array<Extension>): void;
        addExtension(value?: Extension, index?: number): Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TypeCode.AsObject;
        static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TypeCode;
        static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
      }

      export namespace TypeCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DiscriminatorTypeCode.ValueMap],
          id?: String.AsObject,
          extensionList: Array<Extension.AsObject>,
        }
      }
    }

    export class RulesCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RulesCode.AsObject;
      static toObject(includeInstance: boolean, msg: RulesCode): RulesCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RulesCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RulesCode;
      static deserializeBinaryFromReader(message: RulesCode, reader: jspb.BinaryReader): RulesCode;
    }

    export namespace RulesCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }

  export class Base extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): String | undefined;
    setPath(value?: String): void;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): UnsignedInt | undefined;
    setMin(value?: UnsignedInt): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): String | undefined;
    setMax(value?: String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Base.AsObject;
    static toObject(includeInstance: boolean, msg: Base): Base.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Base, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Base;
    static deserializeBinaryFromReader(message: Base, reader: jspb.BinaryReader): Base;
  }

  export namespace Base {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      path?: String.AsObject,
      min?: UnsignedInt.AsObject,
      max?: String.AsObject,
    }
  }

  export class TypeRef extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): Uri | undefined;
    setCode(value?: Uri): void;

    clearProfileList(): void;
    getProfileList(): Array<Canonical>;
    setProfileList(value: Array<Canonical>): void;
    addProfile(value?: Canonical, index?: number): Canonical;

    clearTargetProfileList(): void;
    getTargetProfileList(): Array<Canonical>;
    setTargetProfileList(value: Array<Canonical>): void;
    addTargetProfile(value?: Canonical, index?: number): Canonical;

    clearAggregationList(): void;
    getAggregationList(): Array<ElementDefinition.TypeRef.AggregationCode>;
    setAggregationList(value: Array<ElementDefinition.TypeRef.AggregationCode>): void;
    addAggregation(value?: ElementDefinition.TypeRef.AggregationCode, index?: number): ElementDefinition.TypeRef.AggregationCode;

    hasVersioning(): boolean;
    clearVersioning(): void;
    getVersioning(): ElementDefinition.TypeRef.VersioningCode | undefined;
    setVersioning(value?: ElementDefinition.TypeRef.VersioningCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeRef.AsObject;
    static toObject(includeInstance: boolean, msg: TypeRef): TypeRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeRef;
    static deserializeBinaryFromReader(message: TypeRef, reader: jspb.BinaryReader): TypeRef;
  }

  export namespace TypeRef {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      code?: Uri.AsObject,
      profileList: Array<Canonical.AsObject>,
      targetProfileList: Array<Canonical.AsObject>,
      aggregationList: Array<ElementDefinition.TypeRef.AggregationCode.AsObject>,
      versioning?: ElementDefinition.TypeRef.VersioningCode.AsObject,
    }

    export class AggregationCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AggregationModeCode.ValueMap[keyof proto_r4_core_codes_pb.AggregationModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AggregationModeCode.ValueMap[keyof proto_r4_core_codes_pb.AggregationModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AggregationCode.AsObject;
      static toObject(includeInstance: boolean, msg: AggregationCode): AggregationCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AggregationCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AggregationCode;
      static deserializeBinaryFromReader(message: AggregationCode, reader: jspb.BinaryReader): AggregationCode;
    }

    export namespace AggregationCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.AggregationModeCode.ValueMap[keyof proto_r4_core_codes_pb.AggregationModeCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }

    export class VersioningCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): VersioningCode.AsObject;
      static toObject(includeInstance: boolean, msg: VersioningCode): VersioningCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: VersioningCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): VersioningCode;
      static deserializeBinaryFromReader(message: VersioningCode, reader: jspb.BinaryReader): VersioningCode;
    }

    export namespace VersioningCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceVersionRulesCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }

  export class DefaultValueX extends jspb.Message {
    hasBase64Binary(): boolean;
    clearBase64Binary(): void;
    getBase64Binary(): Base64Binary | undefined;
    setBase64Binary(value?: Base64Binary): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): Canonical | undefined;
    setCanonical(value?: Canonical): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): Code | undefined;
    setCode(value?: Code): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasId(): boolean;
    clearId(): void;
    getId(): Id | undefined;
    setId(value?: Id): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): Markdown | undefined;
    setMarkdown(value?: Markdown): void;

    hasOid(): boolean;
    clearOid(): void;
    getOid(): Oid | undefined;
    setOid(value?: Oid): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): Url | undefined;
    setUrl(value?: Url): void;

    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): Uuid | undefined;
    setUuid(value?: Uuid): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): Age | undefined;
    setAge(value?: Age): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): Attachment | undefined;
    setAttachment(value?: Attachment): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): Coding | undefined;
    setCoding(value?: Coding): void;

    hasContactPoint(): boolean;
    clearContactPoint(): void;
    getContactPoint(): ContactPoint | undefined;
    setContactPoint(value?: ContactPoint): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): Count | undefined;
    setCount(value?: Count): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): Distance | undefined;
    setDistance(value?: Distance): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Duration | undefined;
    setDuration(value?: Duration): void;

    hasHumanName(): boolean;
    clearHumanName(): void;
    getHumanName(): HumanName | undefined;
    setHumanName(value?: HumanName): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): Identifier | undefined;
    setIdentifier(value?: Identifier): void;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): Money | undefined;
    setMoney(value?: Money): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): Period | undefined;
    setPeriod(value?: Period): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): Ratio | undefined;
    setRatio(value?: Ratio): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): SampledData | undefined;
    setSampledData(value?: SampledData): void;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): Timing | undefined;
    setTiming(value?: Timing): void;

    hasContactDetail(): boolean;
    clearContactDetail(): void;
    getContactDetail(): ContactDetail | undefined;
    setContactDetail(value?: ContactDetail): void;

    hasContributor(): boolean;
    clearContributor(): void;
    getContributor(): Contributor | undefined;
    setContributor(value?: Contributor): void;

    hasDataRequirement(): boolean;
    clearDataRequirement(): void;
    getDataRequirement(): DataRequirement | undefined;
    setDataRequirement(value?: DataRequirement): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): Expression | undefined;
    setExpression(value?: Expression): void;

    hasParameterDefinition(): boolean;
    clearParameterDefinition(): void;
    getParameterDefinition(): ParameterDefinition | undefined;
    setParameterDefinition(value?: ParameterDefinition): void;

    hasRelatedArtifact(): boolean;
    clearRelatedArtifact(): void;
    getRelatedArtifact(): RelatedArtifact | undefined;
    setRelatedArtifact(value?: RelatedArtifact): void;

    hasTriggerDefinition(): boolean;
    clearTriggerDefinition(): void;
    getTriggerDefinition(): TriggerDefinition | undefined;
    setTriggerDefinition(value?: TriggerDefinition): void;

    hasUsageContext(): boolean;
    clearUsageContext(): void;
    getUsageContext(): UsageContext | undefined;
    setUsageContext(value?: UsageContext): void;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): Dosage | undefined;
    setDosage(value?: Dosage): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): Meta | undefined;
    setMeta(value?: Meta): void;

    getChoiceCase(): DefaultValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultValueX.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultValueX): DefaultValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultValueX;
    static deserializeBinaryFromReader(message: DefaultValueX, reader: jspb.BinaryReader): DefaultValueX;
  }

  export namespace DefaultValueX {
    export type AsObject = {
      base64Binary?: Base64Binary.AsObject,
      pb_boolean?: Boolean.AsObject,
      canonical?: Canonical.AsObject,
      code?: Code.AsObject,
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      decimal?: Decimal.AsObject,
      id?: Id.AsObject,
      instant?: Instant.AsObject,
      integer?: Integer.AsObject,
      markdown?: Markdown.AsObject,
      oid?: Oid.AsObject,
      positiveInt?: PositiveInt.AsObject,
      stringValue?: String.AsObject,
      time?: Time.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      uri?: Uri.AsObject,
      url?: Url.AsObject,
      uuid?: Uuid.AsObject,
      address?: Address.AsObject,
      age?: Age.AsObject,
      annotation?: Annotation.AsObject,
      attachment?: Attachment.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
      coding?: Coding.AsObject,
      contactPoint?: ContactPoint.AsObject,
      count?: Count.AsObject,
      distance?: Distance.AsObject,
      duration?: Duration.AsObject,
      humanName?: HumanName.AsObject,
      identifier?: Identifier.AsObject,
      money?: Money.AsObject,
      period?: Period.AsObject,
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      ratio?: Ratio.AsObject,
      reference?: Reference.AsObject,
      sampledData?: SampledData.AsObject,
      signature?: Signature.AsObject,
      timing?: Timing.AsObject,
      contactDetail?: ContactDetail.AsObject,
      contributor?: Contributor.AsObject,
      dataRequirement?: DataRequirement.AsObject,
      expression?: Expression.AsObject,
      parameterDefinition?: ParameterDefinition.AsObject,
      relatedArtifact?: RelatedArtifact.AsObject,
      triggerDefinition?: TriggerDefinition.AsObject,
      usageContext?: UsageContext.AsObject,
      dosage?: Dosage.AsObject,
      meta?: Meta.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CANONICAL = 3,
      CODE = 4,
      DATE = 5,
      DATE_TIME = 6,
      DECIMAL = 7,
      ID = 8,
      INSTANT = 9,
      INTEGER = 10,
      MARKDOWN = 11,
      OID = 12,
      POSITIVE_INT = 13,
      STRING_VALUE = 14,
      TIME = 15,
      UNSIGNED_INT = 16,
      URI = 17,
      URL = 18,
      UUID = 19,
      ADDRESS = 20,
      AGE = 21,
      ANNOTATION = 22,
      ATTACHMENT = 23,
      CODEABLE_CONCEPT = 24,
      CODING = 25,
      CONTACT_POINT = 26,
      COUNT = 27,
      DISTANCE = 28,
      DURATION = 29,
      HUMAN_NAME = 30,
      IDENTIFIER = 31,
      MONEY = 32,
      PERIOD = 33,
      QUANTITY = 34,
      RANGE = 35,
      RATIO = 36,
      REFERENCE = 37,
      SAMPLED_DATA = 38,
      SIGNATURE = 39,
      TIMING = 40,
      CONTACT_DETAIL = 41,
      CONTRIBUTOR = 42,
      DATA_REQUIREMENT = 43,
      EXPRESSION = 44,
      PARAMETER_DEFINITION = 45,
      RELATED_ARTIFACT = 46,
      TRIGGER_DEFINITION = 47,
      USAGE_CONTEXT = 48,
      DOSAGE = 49,
      META = 50,
    }
  }

  export class FixedX extends jspb.Message {
    hasBase64Binary(): boolean;
    clearBase64Binary(): void;
    getBase64Binary(): Base64Binary | undefined;
    setBase64Binary(value?: Base64Binary): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): Canonical | undefined;
    setCanonical(value?: Canonical): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): Code | undefined;
    setCode(value?: Code): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasId(): boolean;
    clearId(): void;
    getId(): Id | undefined;
    setId(value?: Id): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): Markdown | undefined;
    setMarkdown(value?: Markdown): void;

    hasOid(): boolean;
    clearOid(): void;
    getOid(): Oid | undefined;
    setOid(value?: Oid): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): Url | undefined;
    setUrl(value?: Url): void;

    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): Uuid | undefined;
    setUuid(value?: Uuid): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): Age | undefined;
    setAge(value?: Age): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): Attachment | undefined;
    setAttachment(value?: Attachment): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): Coding | undefined;
    setCoding(value?: Coding): void;

    hasContactPoint(): boolean;
    clearContactPoint(): void;
    getContactPoint(): ContactPoint | undefined;
    setContactPoint(value?: ContactPoint): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): Count | undefined;
    setCount(value?: Count): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): Distance | undefined;
    setDistance(value?: Distance): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Duration | undefined;
    setDuration(value?: Duration): void;

    hasHumanName(): boolean;
    clearHumanName(): void;
    getHumanName(): HumanName | undefined;
    setHumanName(value?: HumanName): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): Identifier | undefined;
    setIdentifier(value?: Identifier): void;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): Money | undefined;
    setMoney(value?: Money): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): Period | undefined;
    setPeriod(value?: Period): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): Ratio | undefined;
    setRatio(value?: Ratio): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): SampledData | undefined;
    setSampledData(value?: SampledData): void;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): Timing | undefined;
    setTiming(value?: Timing): void;

    hasContactDetail(): boolean;
    clearContactDetail(): void;
    getContactDetail(): ContactDetail | undefined;
    setContactDetail(value?: ContactDetail): void;

    hasContributor(): boolean;
    clearContributor(): void;
    getContributor(): Contributor | undefined;
    setContributor(value?: Contributor): void;

    hasDataRequirement(): boolean;
    clearDataRequirement(): void;
    getDataRequirement(): DataRequirement | undefined;
    setDataRequirement(value?: DataRequirement): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): Expression | undefined;
    setExpression(value?: Expression): void;

    hasParameterDefinition(): boolean;
    clearParameterDefinition(): void;
    getParameterDefinition(): ParameterDefinition | undefined;
    setParameterDefinition(value?: ParameterDefinition): void;

    hasRelatedArtifact(): boolean;
    clearRelatedArtifact(): void;
    getRelatedArtifact(): RelatedArtifact | undefined;
    setRelatedArtifact(value?: RelatedArtifact): void;

    hasTriggerDefinition(): boolean;
    clearTriggerDefinition(): void;
    getTriggerDefinition(): TriggerDefinition | undefined;
    setTriggerDefinition(value?: TriggerDefinition): void;

    hasUsageContext(): boolean;
    clearUsageContext(): void;
    getUsageContext(): UsageContext | undefined;
    setUsageContext(value?: UsageContext): void;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): Dosage | undefined;
    setDosage(value?: Dosage): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): Meta | undefined;
    setMeta(value?: Meta): void;

    getChoiceCase(): FixedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FixedX.AsObject;
    static toObject(includeInstance: boolean, msg: FixedX): FixedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FixedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FixedX;
    static deserializeBinaryFromReader(message: FixedX, reader: jspb.BinaryReader): FixedX;
  }

  export namespace FixedX {
    export type AsObject = {
      base64Binary?: Base64Binary.AsObject,
      pb_boolean?: Boolean.AsObject,
      canonical?: Canonical.AsObject,
      code?: Code.AsObject,
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      decimal?: Decimal.AsObject,
      id?: Id.AsObject,
      instant?: Instant.AsObject,
      integer?: Integer.AsObject,
      markdown?: Markdown.AsObject,
      oid?: Oid.AsObject,
      positiveInt?: PositiveInt.AsObject,
      stringValue?: String.AsObject,
      time?: Time.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      uri?: Uri.AsObject,
      url?: Url.AsObject,
      uuid?: Uuid.AsObject,
      address?: Address.AsObject,
      age?: Age.AsObject,
      annotation?: Annotation.AsObject,
      attachment?: Attachment.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
      coding?: Coding.AsObject,
      contactPoint?: ContactPoint.AsObject,
      count?: Count.AsObject,
      distance?: Distance.AsObject,
      duration?: Duration.AsObject,
      humanName?: HumanName.AsObject,
      identifier?: Identifier.AsObject,
      money?: Money.AsObject,
      period?: Period.AsObject,
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      ratio?: Ratio.AsObject,
      reference?: Reference.AsObject,
      sampledData?: SampledData.AsObject,
      signature?: Signature.AsObject,
      timing?: Timing.AsObject,
      contactDetail?: ContactDetail.AsObject,
      contributor?: Contributor.AsObject,
      dataRequirement?: DataRequirement.AsObject,
      expression?: Expression.AsObject,
      parameterDefinition?: ParameterDefinition.AsObject,
      relatedArtifact?: RelatedArtifact.AsObject,
      triggerDefinition?: TriggerDefinition.AsObject,
      usageContext?: UsageContext.AsObject,
      dosage?: Dosage.AsObject,
      meta?: Meta.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CANONICAL = 3,
      CODE = 4,
      DATE = 5,
      DATE_TIME = 6,
      DECIMAL = 7,
      ID = 8,
      INSTANT = 9,
      INTEGER = 10,
      MARKDOWN = 11,
      OID = 12,
      POSITIVE_INT = 13,
      STRING_VALUE = 14,
      TIME = 15,
      UNSIGNED_INT = 16,
      URI = 17,
      URL = 18,
      UUID = 19,
      ADDRESS = 20,
      AGE = 21,
      ANNOTATION = 22,
      ATTACHMENT = 23,
      CODEABLE_CONCEPT = 24,
      CODING = 25,
      CONTACT_POINT = 26,
      COUNT = 27,
      DISTANCE = 28,
      DURATION = 29,
      HUMAN_NAME = 30,
      IDENTIFIER = 31,
      MONEY = 32,
      PERIOD = 33,
      QUANTITY = 34,
      RANGE = 35,
      RATIO = 36,
      REFERENCE = 37,
      SAMPLED_DATA = 38,
      SIGNATURE = 39,
      TIMING = 40,
      CONTACT_DETAIL = 41,
      CONTRIBUTOR = 42,
      DATA_REQUIREMENT = 43,
      EXPRESSION = 44,
      PARAMETER_DEFINITION = 45,
      RELATED_ARTIFACT = 46,
      TRIGGER_DEFINITION = 47,
      USAGE_CONTEXT = 48,
      DOSAGE = 49,
      META = 50,
    }
  }

  export class PatternX extends jspb.Message {
    hasBase64Binary(): boolean;
    clearBase64Binary(): void;
    getBase64Binary(): Base64Binary | undefined;
    setBase64Binary(value?: Base64Binary): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): Canonical | undefined;
    setCanonical(value?: Canonical): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): Code | undefined;
    setCode(value?: Code): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasId(): boolean;
    clearId(): void;
    getId(): Id | undefined;
    setId(value?: Id): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): Markdown | undefined;
    setMarkdown(value?: Markdown): void;

    hasOid(): boolean;
    clearOid(): void;
    getOid(): Oid | undefined;
    setOid(value?: Oid): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): Url | undefined;
    setUrl(value?: Url): void;

    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): Uuid | undefined;
    setUuid(value?: Uuid): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): Age | undefined;
    setAge(value?: Age): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): Attachment | undefined;
    setAttachment(value?: Attachment): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): Coding | undefined;
    setCoding(value?: Coding): void;

    hasContactPoint(): boolean;
    clearContactPoint(): void;
    getContactPoint(): ContactPoint | undefined;
    setContactPoint(value?: ContactPoint): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): Count | undefined;
    setCount(value?: Count): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): Distance | undefined;
    setDistance(value?: Distance): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Duration | undefined;
    setDuration(value?: Duration): void;

    hasHumanName(): boolean;
    clearHumanName(): void;
    getHumanName(): HumanName | undefined;
    setHumanName(value?: HumanName): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): Identifier | undefined;
    setIdentifier(value?: Identifier): void;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): Money | undefined;
    setMoney(value?: Money): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): Period | undefined;
    setPeriod(value?: Period): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): Ratio | undefined;
    setRatio(value?: Ratio): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): SampledData | undefined;
    setSampledData(value?: SampledData): void;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): Timing | undefined;
    setTiming(value?: Timing): void;

    hasContactDetail(): boolean;
    clearContactDetail(): void;
    getContactDetail(): ContactDetail | undefined;
    setContactDetail(value?: ContactDetail): void;

    hasContributor(): boolean;
    clearContributor(): void;
    getContributor(): Contributor | undefined;
    setContributor(value?: Contributor): void;

    hasDataRequirement(): boolean;
    clearDataRequirement(): void;
    getDataRequirement(): DataRequirement | undefined;
    setDataRequirement(value?: DataRequirement): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): Expression | undefined;
    setExpression(value?: Expression): void;

    hasParameterDefinition(): boolean;
    clearParameterDefinition(): void;
    getParameterDefinition(): ParameterDefinition | undefined;
    setParameterDefinition(value?: ParameterDefinition): void;

    hasRelatedArtifact(): boolean;
    clearRelatedArtifact(): void;
    getRelatedArtifact(): RelatedArtifact | undefined;
    setRelatedArtifact(value?: RelatedArtifact): void;

    hasTriggerDefinition(): boolean;
    clearTriggerDefinition(): void;
    getTriggerDefinition(): TriggerDefinition | undefined;
    setTriggerDefinition(value?: TriggerDefinition): void;

    hasUsageContext(): boolean;
    clearUsageContext(): void;
    getUsageContext(): UsageContext | undefined;
    setUsageContext(value?: UsageContext): void;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): Dosage | undefined;
    setDosage(value?: Dosage): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): Meta | undefined;
    setMeta(value?: Meta): void;

    getChoiceCase(): PatternX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatternX.AsObject;
    static toObject(includeInstance: boolean, msg: PatternX): PatternX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatternX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatternX;
    static deserializeBinaryFromReader(message: PatternX, reader: jspb.BinaryReader): PatternX;
  }

  export namespace PatternX {
    export type AsObject = {
      base64Binary?: Base64Binary.AsObject,
      pb_boolean?: Boolean.AsObject,
      canonical?: Canonical.AsObject,
      code?: Code.AsObject,
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      decimal?: Decimal.AsObject,
      id?: Id.AsObject,
      instant?: Instant.AsObject,
      integer?: Integer.AsObject,
      markdown?: Markdown.AsObject,
      oid?: Oid.AsObject,
      positiveInt?: PositiveInt.AsObject,
      stringValue?: String.AsObject,
      time?: Time.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      uri?: Uri.AsObject,
      url?: Url.AsObject,
      uuid?: Uuid.AsObject,
      address?: Address.AsObject,
      age?: Age.AsObject,
      annotation?: Annotation.AsObject,
      attachment?: Attachment.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
      coding?: Coding.AsObject,
      contactPoint?: ContactPoint.AsObject,
      count?: Count.AsObject,
      distance?: Distance.AsObject,
      duration?: Duration.AsObject,
      humanName?: HumanName.AsObject,
      identifier?: Identifier.AsObject,
      money?: Money.AsObject,
      period?: Period.AsObject,
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      ratio?: Ratio.AsObject,
      reference?: Reference.AsObject,
      sampledData?: SampledData.AsObject,
      signature?: Signature.AsObject,
      timing?: Timing.AsObject,
      contactDetail?: ContactDetail.AsObject,
      contributor?: Contributor.AsObject,
      dataRequirement?: DataRequirement.AsObject,
      expression?: Expression.AsObject,
      parameterDefinition?: ParameterDefinition.AsObject,
      relatedArtifact?: RelatedArtifact.AsObject,
      triggerDefinition?: TriggerDefinition.AsObject,
      usageContext?: UsageContext.AsObject,
      dosage?: Dosage.AsObject,
      meta?: Meta.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CANONICAL = 3,
      CODE = 4,
      DATE = 5,
      DATE_TIME = 6,
      DECIMAL = 7,
      ID = 8,
      INSTANT = 9,
      INTEGER = 10,
      MARKDOWN = 11,
      OID = 12,
      POSITIVE_INT = 13,
      STRING_VALUE = 14,
      TIME = 15,
      UNSIGNED_INT = 16,
      URI = 17,
      URL = 18,
      UUID = 19,
      ADDRESS = 20,
      AGE = 21,
      ANNOTATION = 22,
      ATTACHMENT = 23,
      CODEABLE_CONCEPT = 24,
      CODING = 25,
      CONTACT_POINT = 26,
      COUNT = 27,
      DISTANCE = 28,
      DURATION = 29,
      HUMAN_NAME = 30,
      IDENTIFIER = 31,
      MONEY = 32,
      PERIOD = 33,
      QUANTITY = 34,
      RANGE = 35,
      RATIO = 36,
      REFERENCE = 37,
      SAMPLED_DATA = 38,
      SIGNATURE = 39,
      TIMING = 40,
      CONTACT_DETAIL = 41,
      CONTRIBUTOR = 42,
      DATA_REQUIREMENT = 43,
      EXPRESSION = 44,
      PARAMETER_DEFINITION = 45,
      RELATED_ARTIFACT = 46,
      TRIGGER_DEFINITION = 47,
      USAGE_CONTEXT = 48,
      DOSAGE = 49,
      META = 50,
    }
  }

  export class Example extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasLabel(): boolean;
    clearLabel(): void;
    getLabel(): String | undefined;
    setLabel(value?: String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ElementDefinition.Example.ValueX | undefined;
    setValue(value?: ElementDefinition.Example.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Example.AsObject;
    static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Example;
    static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
  }

  export namespace Example {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      label?: String.AsObject,
      value?: ElementDefinition.Example.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): Base64Binary | undefined;
      setBase64Binary(value?: Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): Boolean | undefined;
      setBoolean(value?: Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): Canonical | undefined;
      setCanonical(value?: Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): Code | undefined;
      setCode(value?: Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): Date | undefined;
      setDate(value?: Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): DateTime | undefined;
      setDateTime(value?: DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): Decimal | undefined;
      setDecimal(value?: Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): Id | undefined;
      setId(value?: Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): Instant | undefined;
      setInstant(value?: Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): Integer | undefined;
      setInteger(value?: Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): Markdown | undefined;
      setMarkdown(value?: Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): Oid | undefined;
      setOid(value?: Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): PositiveInt | undefined;
      setPositiveInt(value?: PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): String | undefined;
      setStringValue(value?: String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): Time | undefined;
      setTime(value?: Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): UnsignedInt | undefined;
      setUnsignedInt(value?: UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): Uri | undefined;
      setUri(value?: Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): Url | undefined;
      setUrl(value?: Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): Uuid | undefined;
      setUuid(value?: Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): Address | undefined;
      setAddress(value?: Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): Age | undefined;
      setAge(value?: Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): Annotation | undefined;
      setAnnotation(value?: Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): Attachment | undefined;
      setAttachment(value?: Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): CodeableConcept | undefined;
      setCodeableConcept(value?: CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): Coding | undefined;
      setCoding(value?: Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): ContactPoint | undefined;
      setContactPoint(value?: ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): Count | undefined;
      setCount(value?: Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): Distance | undefined;
      setDistance(value?: Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): Duration | undefined;
      setDuration(value?: Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): HumanName | undefined;
      setHumanName(value?: HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): Identifier | undefined;
      setIdentifier(value?: Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): Money | undefined;
      setMoney(value?: Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): Period | undefined;
      setPeriod(value?: Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): Quantity | undefined;
      setQuantity(value?: Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): Range | undefined;
      setRange(value?: Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): Ratio | undefined;
      setRatio(value?: Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): Reference | undefined;
      setReference(value?: Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): SampledData | undefined;
      setSampledData(value?: SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): Signature | undefined;
      setSignature(value?: Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): Timing | undefined;
      setTiming(value?: Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): ContactDetail | undefined;
      setContactDetail(value?: ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): Contributor | undefined;
      setContributor(value?: Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): DataRequirement | undefined;
      setDataRequirement(value?: DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): Expression | undefined;
      setExpression(value?: Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): ParameterDefinition | undefined;
      setParameterDefinition(value?: ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): RelatedArtifact | undefined;
      setRelatedArtifact(value?: RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): TriggerDefinition | undefined;
      setTriggerDefinition(value?: TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): UsageContext | undefined;
      setUsageContext(value?: UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): Dosage | undefined;
      setDosage(value?: Dosage): void;

      hasMeta(): boolean;
      clearMeta(): void;
      getMeta(): Meta | undefined;
      setMeta(value?: Meta): void;

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
        base64Binary?: Base64Binary.AsObject,
        pb_boolean?: Boolean.AsObject,
        canonical?: Canonical.AsObject,
        code?: Code.AsObject,
        date?: Date.AsObject,
        dateTime?: DateTime.AsObject,
        decimal?: Decimal.AsObject,
        id?: Id.AsObject,
        instant?: Instant.AsObject,
        integer?: Integer.AsObject,
        markdown?: Markdown.AsObject,
        oid?: Oid.AsObject,
        positiveInt?: PositiveInt.AsObject,
        stringValue?: String.AsObject,
        time?: Time.AsObject,
        unsignedInt?: UnsignedInt.AsObject,
        uri?: Uri.AsObject,
        url?: Url.AsObject,
        uuid?: Uuid.AsObject,
        address?: Address.AsObject,
        age?: Age.AsObject,
        annotation?: Annotation.AsObject,
        attachment?: Attachment.AsObject,
        codeableConcept?: CodeableConcept.AsObject,
        coding?: Coding.AsObject,
        contactPoint?: ContactPoint.AsObject,
        count?: Count.AsObject,
        distance?: Distance.AsObject,
        duration?: Duration.AsObject,
        humanName?: HumanName.AsObject,
        identifier?: Identifier.AsObject,
        money?: Money.AsObject,
        period?: Period.AsObject,
        quantity?: Quantity.AsObject,
        range?: Range.AsObject,
        ratio?: Ratio.AsObject,
        reference?: Reference.AsObject,
        sampledData?: SampledData.AsObject,
        signature?: Signature.AsObject,
        timing?: Timing.AsObject,
        contactDetail?: ContactDetail.AsObject,
        contributor?: Contributor.AsObject,
        dataRequirement?: DataRequirement.AsObject,
        expression?: Expression.AsObject,
        parameterDefinition?: ParameterDefinition.AsObject,
        relatedArtifact?: RelatedArtifact.AsObject,
        triggerDefinition?: TriggerDefinition.AsObject,
        usageContext?: UsageContext.AsObject,
        dosage?: Dosage.AsObject,
        meta?: Meta.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BASE64_BINARY = 1,
        BOOLEAN = 2,
        CANONICAL = 3,
        CODE = 4,
        DATE = 5,
        DATE_TIME = 6,
        DECIMAL = 7,
        ID = 8,
        INSTANT = 9,
        INTEGER = 10,
        MARKDOWN = 11,
        OID = 12,
        POSITIVE_INT = 13,
        STRING_VALUE = 14,
        TIME = 15,
        UNSIGNED_INT = 16,
        URI = 17,
        URL = 18,
        UUID = 19,
        ADDRESS = 20,
        AGE = 21,
        ANNOTATION = 22,
        ATTACHMENT = 23,
        CODEABLE_CONCEPT = 24,
        CODING = 25,
        CONTACT_POINT = 26,
        COUNT = 27,
        DISTANCE = 28,
        DURATION = 29,
        HUMAN_NAME = 30,
        IDENTIFIER = 31,
        MONEY = 32,
        PERIOD = 33,
        QUANTITY = 34,
        RANGE = 35,
        RATIO = 36,
        REFERENCE = 37,
        SAMPLED_DATA = 38,
        SIGNATURE = 39,
        TIMING = 40,
        CONTACT_DETAIL = 41,
        CONTRIBUTOR = 42,
        DATA_REQUIREMENT = 43,
        EXPRESSION = 44,
        PARAMETER_DEFINITION = 45,
        RELATED_ARTIFACT = 46,
        TRIGGER_DEFINITION = 47,
        USAGE_CONTEXT = 48,
        DOSAGE = 49,
        META = 50,
      }
    }
  }

  export class MinValueX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    getChoiceCase(): MinValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MinValueX.AsObject;
    static toObject(includeInstance: boolean, msg: MinValueX): MinValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MinValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MinValueX;
    static deserializeBinaryFromReader(message: MinValueX, reader: jspb.BinaryReader): MinValueX;
  }

  export namespace MinValueX {
    export type AsObject = {
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      instant?: Instant.AsObject,
      time?: Time.AsObject,
      decimal?: Decimal.AsObject,
      integer?: Integer.AsObject,
      positiveInt?: PositiveInt.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      quantity?: Quantity.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      INSTANT = 3,
      TIME = 4,
      DECIMAL = 5,
      INTEGER = 6,
      POSITIVE_INT = 7,
      UNSIGNED_INT = 8,
      QUANTITY = 9,
    }
  }

  export class MaxValueX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    getChoiceCase(): MaxValueX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxValueX.AsObject;
    static toObject(includeInstance: boolean, msg: MaxValueX): MaxValueX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxValueX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxValueX;
    static deserializeBinaryFromReader(message: MaxValueX, reader: jspb.BinaryReader): MaxValueX;
  }

  export namespace MaxValueX {
    export type AsObject = {
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      instant?: Instant.AsObject,
      time?: Time.AsObject,
      decimal?: Decimal.AsObject,
      integer?: Integer.AsObject,
      positiveInt?: PositiveInt.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      quantity?: Quantity.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      INSTANT = 3,
      TIME = 4,
      DECIMAL = 5,
      INTEGER = 6,
      POSITIVE_INT = 7,
      UNSIGNED_INT = 8,
      QUANTITY = 9,
    }
  }

  export class Constraint extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): Id | undefined;
    setKey(value?: Id): void;

    hasRequirements(): boolean;
    clearRequirements(): void;
    getRequirements(): String | undefined;
    setRequirements(value?: String): void;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): ElementDefinition.Constraint.SeverityCode | undefined;
    setSeverity(value?: ElementDefinition.Constraint.SeverityCode): void;

    hasHuman(): boolean;
    clearHuman(): void;
    getHuman(): String | undefined;
    setHuman(value?: String): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): String | undefined;
    setExpression(value?: String): void;

    hasXpath(): boolean;
    clearXpath(): void;
    getXpath(): String | undefined;
    setXpath(value?: String): void;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): Canonical | undefined;
    setSource(value?: Canonical): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Constraint.AsObject;
    static toObject(includeInstance: boolean, msg: Constraint): Constraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Constraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Constraint;
    static deserializeBinaryFromReader(message: Constraint, reader: jspb.BinaryReader): Constraint;
  }

  export namespace Constraint {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      key?: Id.AsObject,
      requirements?: String.AsObject,
      severity?: ElementDefinition.Constraint.SeverityCode.AsObject,
      human?: String.AsObject,
      expression?: String.AsObject,
      xpath?: String.AsObject,
      source?: Canonical.AsObject,
    }

    export class SeverityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.ConstraintSeverityCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

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
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }

  export class ElementDefinitionBinding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasStrength(): boolean;
    clearStrength(): void;
    getStrength(): ElementDefinition.ElementDefinitionBinding.StrengthCode | undefined;
    setStrength(value?: ElementDefinition.ElementDefinitionBinding.StrengthCode): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): String | undefined;
    setDescription(value?: String): void;

    hasValueSet(): boolean;
    clearValueSet(): void;
    getValueSet(): Canonical | undefined;
    setValueSet(value?: Canonical): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementDefinitionBinding.AsObject;
    static toObject(includeInstance: boolean, msg: ElementDefinitionBinding): ElementDefinitionBinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementDefinitionBinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementDefinitionBinding;
    static deserializeBinaryFromReader(message: ElementDefinitionBinding, reader: jspb.BinaryReader): ElementDefinitionBinding;
  }

  export namespace ElementDefinitionBinding {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      strength?: ElementDefinition.ElementDefinitionBinding.StrengthCode.AsObject,
      description?: String.AsObject,
      valueSet?: Canonical.AsObject,
    }

    export class StrengthCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StrengthCode.AsObject;
      static toObject(includeInstance: boolean, msg: StrengthCode): StrengthCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StrengthCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StrengthCode;
      static deserializeBinaryFromReader(message: StrengthCode, reader: jspb.BinaryReader): StrengthCode;
    }

    export namespace StrengthCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }

  export class Mapping extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasIdentity(): boolean;
    clearIdentity(): void;
    getIdentity(): Id | undefined;
    setIdentity(value?: Id): void;

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): ElementDefinition.Mapping.LanguageCode | undefined;
    setLanguage(value?: ElementDefinition.Mapping.LanguageCode): void;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): String | undefined;
    setMap(value?: String): void;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): String | undefined;
    setComment(value?: String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      identity?: Id.AsObject,
      language?: ElementDefinition.Mapping.LanguageCode.AsObject,
      map?: String.AsObject,
      comment?: String.AsObject,
    }

    export class LanguageCode extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      getValue(): string;
      setValue(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LanguageCode.AsObject;
      static toObject(includeInstance: boolean, msg: LanguageCode): LanguageCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LanguageCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LanguageCode;
      static deserializeBinaryFromReader(message: LanguageCode, reader: jspb.BinaryReader): LanguageCode;
    }

    export namespace LanguageCode {
      export type AsObject = {
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
        value: string,
      }
    }
  }
}

export class Expression extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): String | undefined;
  setDescription(value?: String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): Id | undefined;
  setName(value?: Id): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): Code | undefined;
  setLanguage(value?: Code): void;

  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): String | undefined;
  setExpression(value?: String): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): Uri | undefined;
  setReference(value?: Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expression.AsObject;
  static toObject(includeInstance: boolean, msg: Expression): Expression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Expression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expression;
  static deserializeBinaryFromReader(message: Expression, reader: jspb.BinaryReader): Expression;
}

export namespace Expression {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    description?: String.AsObject,
    name?: Id.AsObject,
    language?: Code.AsObject,
    expression?: String.AsObject,
    reference?: Uri.AsObject,
  }
}

export class HumanName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): HumanName.UseCode | undefined;
  setUse(value?: HumanName.UseCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  hasFamily(): boolean;
  clearFamily(): void;
  getFamily(): String | undefined;
  setFamily(value?: String): void;

  clearGivenList(): void;
  getGivenList(): Array<String>;
  setGivenList(value: Array<String>): void;
  addGiven(value?: String, index?: number): String;

  clearPrefixList(): void;
  getPrefixList(): Array<String>;
  setPrefixList(value: Array<String>): void;
  addPrefix(value?: String, index?: number): String;

  clearSuffixList(): void;
  getSuffixList(): Array<String>;
  setSuffixList(value: Array<String>): void;
  addSuffix(value?: String, index?: number): String;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Period | undefined;
  setPeriod(value?: Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanName.AsObject;
  static toObject(includeInstance: boolean, msg: HumanName): HumanName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanName;
  static deserializeBinaryFromReader(message: HumanName, reader: jspb.BinaryReader): HumanName;
}

export namespace HumanName {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    use?: HumanName.UseCode.AsObject,
    text?: String.AsObject,
    family?: String.AsObject,
    givenList: Array<String.AsObject>,
    prefixList: Array<String.AsObject>,
    suffixList: Array<String.AsObject>,
    period?: Period.AsObject,
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.NameUseCode.ValueMap[keyof proto_r4_core_codes_pb.NameUseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.NameUseCode.ValueMap[keyof proto_r4_core_codes_pb.NameUseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseCode.AsObject;
    static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseCode;
    static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
  }

  export namespace UseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.NameUseCode.ValueMap[keyof proto_r4_core_codes_pb.NameUseCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Identifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): Identifier.UseCode | undefined;
  setUse(value?: Identifier.UseCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): CodeableConcept | undefined;
  setType(value?: CodeableConcept): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): String | undefined;
  setValue(value?: String): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Period | undefined;
  setPeriod(value?: Period): void;

  hasAssigner(): boolean;
  clearAssigner(): void;
  getAssigner(): Reference | undefined;
  setAssigner(value?: Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identifier.AsObject;
  static toObject(includeInstance: boolean, msg: Identifier): Identifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Identifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identifier;
  static deserializeBinaryFromReader(message: Identifier, reader: jspb.BinaryReader): Identifier;
}

export namespace Identifier {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    use?: Identifier.UseCode.AsObject,
    type?: CodeableConcept.AsObject,
    system?: Uri.AsObject,
    value?: String.AsObject,
    period?: Period.AsObject,
    assigner?: Reference.AsObject,
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.IdentifierUseCode.ValueMap[keyof proto_r4_core_codes_pb.IdentifierUseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.IdentifierUseCode.ValueMap[keyof proto_r4_core_codes_pb.IdentifierUseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseCode.AsObject;
    static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseCode;
    static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
  }

  export namespace UseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.IdentifierUseCode.ValueMap[keyof proto_r4_core_codes_pb.IdentifierUseCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class MarketingStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasCountry(): boolean;
  clearCountry(): void;
  getCountry(): CodeableConcept | undefined;
  setCountry(value?: CodeableConcept): void;

  hasJurisdiction(): boolean;
  clearJurisdiction(): void;
  getJurisdiction(): CodeableConcept | undefined;
  setJurisdiction(value?: CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CodeableConcept | undefined;
  setStatus(value?: CodeableConcept): void;

  hasDateRange(): boolean;
  clearDateRange(): void;
  getDateRange(): Period | undefined;
  setDateRange(value?: Period): void;

  hasRestoreDate(): boolean;
  clearRestoreDate(): void;
  getRestoreDate(): DateTime | undefined;
  setRestoreDate(value?: DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketingStatus.AsObject;
  static toObject(includeInstance: boolean, msg: MarketingStatus): MarketingStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketingStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketingStatus;
  static deserializeBinaryFromReader(message: MarketingStatus, reader: jspb.BinaryReader): MarketingStatus;
}

export namespace MarketingStatus {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    country?: CodeableConcept.AsObject,
    jurisdiction?: CodeableConcept.AsObject,
    status?: CodeableConcept.AsObject,
    dateRange?: Period.AsObject,
    restoreDate?: DateTime.AsObject,
  }
}

export class Meta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasVersionId(): boolean;
  clearVersionId(): void;
  getVersionId(): Id | undefined;
  setVersionId(value?: Id): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): Instant | undefined;
  setLastUpdated(value?: Instant): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Uri | undefined;
  setSource(value?: Uri): void;

  clearProfileList(): void;
  getProfileList(): Array<Canonical>;
  setProfileList(value: Array<Canonical>): void;
  addProfile(value?: Canonical, index?: number): Canonical;

  clearSecurityList(): void;
  getSecurityList(): Array<Coding>;
  setSecurityList(value: Array<Coding>): void;
  addSecurity(value?: Coding, index?: number): Coding;

  clearTagList(): void;
  getTagList(): Array<Coding>;
  setTagList(value: Array<Coding>): void;
  addTag(value?: Coding, index?: number): Coding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Meta.AsObject;
  static toObject(includeInstance: boolean, msg: Meta): Meta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Meta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Meta;
  static deserializeBinaryFromReader(message: Meta, reader: jspb.BinaryReader): Meta;
}

export namespace Meta {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    versionId?: Id.AsObject,
    lastUpdated?: Instant.AsObject,
    source?: Uri.AsObject,
    profileList: Array<Canonical.AsObject>,
    securityList: Array<Coding.AsObject>,
    tagList: Array<Coding.AsObject>,
  }
}

export class Money extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): Money.CurrencyCode | undefined;
  setCurrency(value?: Money.CurrencyCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Money.AsObject;
  static toObject(includeInstance: boolean, msg: Money): Money.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Money, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Money;
  static deserializeBinaryFromReader(message: Money, reader: jspb.BinaryReader): Money;
}

export namespace Money {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    currency?: Money.CurrencyCode.AsObject,
  }

  export class CurrencyCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CurrencyCode.AsObject;
    static toObject(includeInstance: boolean, msg: CurrencyCode): CurrencyCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CurrencyCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CurrencyCode;
    static deserializeBinaryFromReader(message: CurrencyCode, reader: jspb.BinaryReader): CurrencyCode;
  }

  export namespace CurrencyCode {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      value: string,
    }
  }
}

export class MoneyQuantity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): MoneyQuantity.ComparatorCode | undefined;
  setComparator(value?: MoneyQuantity.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoneyQuantity.AsObject;
  static toObject(includeInstance: boolean, msg: MoneyQuantity): MoneyQuantity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoneyQuantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoneyQuantity;
  static deserializeBinaryFromReader(message: MoneyQuantity, reader: jspb.BinaryReader): MoneyQuantity;
}

export namespace MoneyQuantity {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: MoneyQuantity.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Narrative extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Narrative.StatusCode | undefined;
  setStatus(value?: Narrative.StatusCode): void;

  hasDiv(): boolean;
  clearDiv(): void;
  getDiv(): Xhtml | undefined;
  setDiv(value?: Xhtml): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Narrative.AsObject;
  static toObject(includeInstance: boolean, msg: Narrative): Narrative.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Narrative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Narrative;
  static deserializeBinaryFromReader(message: Narrative, reader: jspb.BinaryReader): Narrative;
}

export namespace Narrative {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    status?: Narrative.StatusCode.AsObject,
    div?: Xhtml.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

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
      value: proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.NarrativeStatusCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class ParameterDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): Code | undefined;
  setName(value?: Code): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): ParameterDefinition.UseCode | undefined;
  setUse(value?: ParameterDefinition.UseCode): void;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): Integer | undefined;
  setMin(value?: Integer): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): String | undefined;
  setMax(value?: String): void;

  hasDocumentation(): boolean;
  clearDocumentation(): void;
  getDocumentation(): String | undefined;
  setDocumentation(value?: String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ParameterDefinition.TypeCode | undefined;
  setType(value?: ParameterDefinition.TypeCode): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): Canonical | undefined;
  setProfile(value?: Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterDefinition): ParameterDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParameterDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterDefinition;
  static deserializeBinaryFromReader(message: ParameterDefinition, reader: jspb.BinaryReader): ParameterDefinition;
}

export namespace ParameterDefinition {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    name?: Code.AsObject,
    use?: ParameterDefinition.UseCode.AsObject,
    min?: Integer.AsObject,
    max?: String.AsObject,
    documentation?: String.AsObject,
    type?: ParameterDefinition.TypeCode.AsObject,
    profile?: Canonical.AsObject,
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UseCode.AsObject;
    static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UseCode;
    static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
  }

  export namespace UseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Period extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): DateTime | undefined;
  setStart(value?: DateTime): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): DateTime | undefined;
  setEnd(value?: DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Period.AsObject;
  static toObject(includeInstance: boolean, msg: Period): Period.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Period, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Period;
  static deserializeBinaryFromReader(message: Period, reader: jspb.BinaryReader): Period;
}

export namespace Period {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    start?: DateTime.AsObject,
    end?: DateTime.AsObject,
  }
}

export class Population extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): Population.AgeX | undefined;
  setAge(value?: Population.AgeX): void;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): CodeableConcept | undefined;
  setGender(value?: CodeableConcept): void;

  hasRace(): boolean;
  clearRace(): void;
  getRace(): CodeableConcept | undefined;
  setRace(value?: CodeableConcept): void;

  hasPhysiologicalCondition(): boolean;
  clearPhysiologicalCondition(): void;
  getPhysiologicalCondition(): CodeableConcept | undefined;
  setPhysiologicalCondition(value?: CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Population.AsObject;
  static toObject(includeInstance: boolean, msg: Population): Population.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Population, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Population;
  static deserializeBinaryFromReader(message: Population, reader: jspb.BinaryReader): Population;
}

export namespace Population {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    age?: Population.AgeX.AsObject,
    gender?: CodeableConcept.AsObject,
    race?: CodeableConcept.AsObject,
    physiologicalCondition?: CodeableConcept.AsObject,
  }

  export class AgeX extends jspb.Message {
    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    getChoiceCase(): AgeX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgeX.AsObject;
    static toObject(includeInstance: boolean, msg: AgeX): AgeX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgeX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgeX;
    static deserializeBinaryFromReader(message: AgeX, reader: jspb.BinaryReader): AgeX;
  }

  export namespace AgeX {
    export type AsObject = {
      range?: Range.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      RANGE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }
}

export class ProdCharacteristic extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): Quantity | undefined;
  setHeight(value?: Quantity): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): Quantity | undefined;
  setWidth(value?: Quantity): void;

  hasDepth(): boolean;
  clearDepth(): void;
  getDepth(): Quantity | undefined;
  setDepth(value?: Quantity): void;

  hasWeight(): boolean;
  clearWeight(): void;
  getWeight(): Quantity | undefined;
  setWeight(value?: Quantity): void;

  hasNominalVolume(): boolean;
  clearNominalVolume(): void;
  getNominalVolume(): Quantity | undefined;
  setNominalVolume(value?: Quantity): void;

  hasExternalDiameter(): boolean;
  clearExternalDiameter(): void;
  getExternalDiameter(): Quantity | undefined;
  setExternalDiameter(value?: Quantity): void;

  hasShape(): boolean;
  clearShape(): void;
  getShape(): String | undefined;
  setShape(value?: String): void;

  clearColorList(): void;
  getColorList(): Array<String>;
  setColorList(value: Array<String>): void;
  addColor(value?: String, index?: number): String;

  clearImprintList(): void;
  getImprintList(): Array<String>;
  setImprintList(value: Array<String>): void;
  addImprint(value?: String, index?: number): String;

  clearImageList(): void;
  getImageList(): Array<Attachment>;
  setImageList(value: Array<Attachment>): void;
  addImage(value?: Attachment, index?: number): Attachment;

  hasScoring(): boolean;
  clearScoring(): void;
  getScoring(): CodeableConcept | undefined;
  setScoring(value?: CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProdCharacteristic.AsObject;
  static toObject(includeInstance: boolean, msg: ProdCharacteristic): ProdCharacteristic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProdCharacteristic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProdCharacteristic;
  static deserializeBinaryFromReader(message: ProdCharacteristic, reader: jspb.BinaryReader): ProdCharacteristic;
}

export namespace ProdCharacteristic {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    height?: Quantity.AsObject,
    width?: Quantity.AsObject,
    depth?: Quantity.AsObject,
    weight?: Quantity.AsObject,
    nominalVolume?: Quantity.AsObject,
    externalDiameter?: Quantity.AsObject,
    shape?: String.AsObject,
    colorList: Array<String.AsObject>,
    imprintList: Array<String.AsObject>,
    imageList: Array<Attachment.AsObject>,
    scoring?: CodeableConcept.AsObject,
  }
}

export class ProductShelfLife extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): Identifier | undefined;
  setIdentifier(value?: Identifier): void;

  hasType(): boolean;
  clearType(): void;
  getType(): CodeableConcept | undefined;
  setType(value?: CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Quantity | undefined;
  setPeriod(value?: Quantity): void;

  clearSpecialPrecautionsForStorageList(): void;
  getSpecialPrecautionsForStorageList(): Array<CodeableConcept>;
  setSpecialPrecautionsForStorageList(value: Array<CodeableConcept>): void;
  addSpecialPrecautionsForStorage(value?: CodeableConcept, index?: number): CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductShelfLife.AsObject;
  static toObject(includeInstance: boolean, msg: ProductShelfLife): ProductShelfLife.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProductShelfLife, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductShelfLife;
  static deserializeBinaryFromReader(message: ProductShelfLife, reader: jspb.BinaryReader): ProductShelfLife;
}

export namespace ProductShelfLife {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    identifier?: Identifier.AsObject,
    type?: CodeableConcept.AsObject,
    period?: Quantity.AsObject,
    specialPrecautionsForStorageList: Array<CodeableConcept.AsObject>,
  }
}

export class Quantity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): Quantity.ComparatorCode | undefined;
  setComparator(value?: Quantity.ComparatorCode): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quantity.AsObject;
  static toObject(includeInstance: boolean, msg: Quantity): Quantity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quantity;
  static deserializeBinaryFromReader(message: Quantity, reader: jspb.BinaryReader): Quantity;
}

export namespace Quantity {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: Quantity.ComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuantityComparatorCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class Range extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): SimpleQuantity | undefined;
  setLow(value?: SimpleQuantity): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): SimpleQuantity | undefined;
  setHigh(value?: SimpleQuantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Range.AsObject;
  static toObject(includeInstance: boolean, msg: Range): Range.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Range, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Range;
  static deserializeBinaryFromReader(message: Range, reader: jspb.BinaryReader): Range;
}

export namespace Range {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    low?: SimpleQuantity.AsObject,
    high?: SimpleQuantity.AsObject,
  }
}

export class Ratio extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasNumerator(): boolean;
  clearNumerator(): void;
  getNumerator(): Quantity | undefined;
  setNumerator(value?: Quantity): void;

  hasDenominator(): boolean;
  clearDenominator(): void;
  getDenominator(): Quantity | undefined;
  setDenominator(value?: Quantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ratio.AsObject;
  static toObject(includeInstance: boolean, msg: Ratio): Ratio.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Ratio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ratio;
  static deserializeBinaryFromReader(message: Ratio, reader: jspb.BinaryReader): Ratio;
}

export namespace Ratio {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    numerator?: Quantity.AsObject,
    denominator?: Quantity.AsObject,
  }
}

export class RelatedArtifact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): RelatedArtifact.TypeCode | undefined;
  setType(value?: RelatedArtifact.TypeCode): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): String | undefined;
  setLabel(value?: String): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): String | undefined;
  setDisplay(value?: String): void;

  hasCitation(): boolean;
  clearCitation(): void;
  getCitation(): Markdown | undefined;
  setCitation(value?: Markdown): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): Url | undefined;
  setUrl(value?: Url): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): Attachment | undefined;
  setDocument(value?: Attachment): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Canonical | undefined;
  setResource(value?: Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedArtifact.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedArtifact): RelatedArtifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedArtifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedArtifact;
  static deserializeBinaryFromReader(message: RelatedArtifact, reader: jspb.BinaryReader): RelatedArtifact;
}

export namespace RelatedArtifact {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    type?: RelatedArtifact.TypeCode.AsObject,
    label?: String.AsObject,
    display?: String.AsObject,
    citation?: Markdown.AsObject,
    url?: Url.AsObject,
    document?: Attachment.AsObject,
    resource?: Canonical.AsObject,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RelatedArtifactTypeCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }
}

export class SampledData extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasOrigin(): boolean;
  clearOrigin(): void;
  getOrigin(): SimpleQuantity | undefined;
  setOrigin(value?: SimpleQuantity): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): Decimal | undefined;
  setPeriod(value?: Decimal): void;

  hasFactor(): boolean;
  clearFactor(): void;
  getFactor(): Decimal | undefined;
  setFactor(value?: Decimal): void;

  hasLowerLimit(): boolean;
  clearLowerLimit(): void;
  getLowerLimit(): Decimal | undefined;
  setLowerLimit(value?: Decimal): void;

  hasUpperLimit(): boolean;
  clearUpperLimit(): void;
  getUpperLimit(): Decimal | undefined;
  setUpperLimit(value?: Decimal): void;

  hasDimensions(): boolean;
  clearDimensions(): void;
  getDimensions(): PositiveInt | undefined;
  setDimensions(value?: PositiveInt): void;

  hasData(): boolean;
  clearData(): void;
  getData(): String | undefined;
  setData(value?: String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SampledData.AsObject;
  static toObject(includeInstance: boolean, msg: SampledData): SampledData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SampledData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SampledData;
  static deserializeBinaryFromReader(message: SampledData, reader: jspb.BinaryReader): SampledData;
}

export namespace SampledData {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    origin?: SimpleQuantity.AsObject,
    period?: Decimal.AsObject,
    factor?: Decimal.AsObject,
    lowerLimit?: Decimal.AsObject,
    upperLimit?: Decimal.AsObject,
    dimensions?: PositiveInt.AsObject,
    data?: String.AsObject,
  }
}

export class Signature extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearTypeList(): void;
  getTypeList(): Array<Coding>;
  setTypeList(value: Array<Coding>): void;
  addType(value?: Coding, index?: number): Coding;

  hasWhen(): boolean;
  clearWhen(): void;
  getWhen(): Instant | undefined;
  setWhen(value?: Instant): void;

  hasWho(): boolean;
  clearWho(): void;
  getWho(): Reference | undefined;
  setWho(value?: Reference): void;

  hasOnBehalfOf(): boolean;
  clearOnBehalfOf(): void;
  getOnBehalfOf(): Reference | undefined;
  setOnBehalfOf(value?: Reference): void;

  hasTargetFormat(): boolean;
  clearTargetFormat(): void;
  getTargetFormat(): Signature.TargetFormatCode | undefined;
  setTargetFormat(value?: Signature.TargetFormatCode): void;

  hasSigFormat(): boolean;
  clearSigFormat(): void;
  getSigFormat(): Signature.SigFormatCode | undefined;
  setSigFormat(value?: Signature.SigFormatCode): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Base64Binary | undefined;
  setData(value?: Base64Binary): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signature.AsObject;
  static toObject(includeInstance: boolean, msg: Signature): Signature.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Signature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signature;
  static deserializeBinaryFromReader(message: Signature, reader: jspb.BinaryReader): Signature;
}

export namespace Signature {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    typeList: Array<Coding.AsObject>,
    when?: Instant.AsObject,
    who?: Reference.AsObject,
    onBehalfOf?: Reference.AsObject,
    targetFormat?: Signature.TargetFormatCode.AsObject,
    sigFormat?: Signature.SigFormatCode.AsObject,
    data?: Base64Binary.AsObject,
  }

  export class TargetFormatCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetFormatCode.AsObject;
    static toObject(includeInstance: boolean, msg: TargetFormatCode): TargetFormatCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetFormatCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetFormatCode;
    static deserializeBinaryFromReader(message: TargetFormatCode, reader: jspb.BinaryReader): TargetFormatCode;
  }

  export namespace TargetFormatCode {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      value: string,
    }
  }

  export class SigFormatCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SigFormatCode.AsObject;
    static toObject(includeInstance: boolean, msg: SigFormatCode): SigFormatCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SigFormatCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SigFormatCode;
    static deserializeBinaryFromReader(message: SigFormatCode, reader: jspb.BinaryReader): SigFormatCode;
  }

  export namespace SigFormatCode {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      value: string,
    }
  }
}

export class SimpleQuantity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): String | undefined;
  setUnit(value?: String): void;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): Uri | undefined;
  setSystem(value?: Uri): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Code | undefined;
  setCode(value?: Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleQuantity.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleQuantity): SimpleQuantity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleQuantity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleQuantity;
  static deserializeBinaryFromReader(message: SimpleQuantity, reader: jspb.BinaryReader): SimpleQuantity;
}

export namespace SimpleQuantity {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class SubstanceAmount extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): SubstanceAmount.AmountX | undefined;
  setAmount(value?: SubstanceAmount.AmountX): void;

  hasAmountType(): boolean;
  clearAmountType(): void;
  getAmountType(): CodeableConcept | undefined;
  setAmountType(value?: CodeableConcept): void;

  hasAmountText(): boolean;
  clearAmountText(): void;
  getAmountText(): String | undefined;
  setAmountText(value?: String): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): SubstanceAmount.ReferenceRange | undefined;
  setReferenceRange(value?: SubstanceAmount.ReferenceRange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceAmount.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceAmount): SubstanceAmount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceAmount;
  static deserializeBinaryFromReader(message: SubstanceAmount, reader: jspb.BinaryReader): SubstanceAmount;
}

export namespace SubstanceAmount {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    amount?: SubstanceAmount.AmountX.AsObject,
    amountType?: CodeableConcept.AsObject,
    amountText?: String.AsObject,
    referenceRange?: SubstanceAmount.ReferenceRange.AsObject,
  }

  export class AmountX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    getChoiceCase(): AmountX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AmountX.AsObject;
    static toObject(includeInstance: boolean, msg: AmountX): AmountX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AmountX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AmountX;
    static deserializeBinaryFromReader(message: AmountX, reader: jspb.BinaryReader): AmountX;
  }

  export namespace AmountX {
    export type AsObject = {
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      stringValue?: String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      RANGE = 2,
      STRING_VALUE = 3,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasLowLimit(): boolean;
    clearLowLimit(): void;
    getLowLimit(): Quantity | undefined;
    setLowLimit(value?: Quantity): void;

    hasHighLimit(): boolean;
    clearHighLimit(): void;
    getHighLimit(): Quantity | undefined;
    setHighLimit(value?: Quantity): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      lowLimit?: Quantity.AsObject,
      highLimit?: Quantity.AsObject,
    }
  }
}

export class Timing extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<Extension>;
  setModifierExtensionList(value: Array<Extension>): void;
  addModifierExtension(value?: Extension, index?: number): Extension;

  clearEventList(): void;
  getEventList(): Array<DateTime>;
  setEventList(value: Array<DateTime>): void;
  addEvent(value?: DateTime, index?: number): DateTime;

  hasRepeat(): boolean;
  clearRepeat(): void;
  getRepeat(): Timing.Repeat | undefined;
  setRepeat(value?: Timing.Repeat): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): CodeableConcept | undefined;
  setCode(value?: CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Timing.AsObject;
  static toObject(includeInstance: boolean, msg: Timing): Timing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Timing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Timing;
  static deserializeBinaryFromReader(message: Timing, reader: jspb.BinaryReader): Timing;
}

export namespace Timing {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    modifierExtensionList: Array<Extension.AsObject>,
    eventList: Array<DateTime.AsObject>,
    repeat?: Timing.Repeat.AsObject,
    code?: CodeableConcept.AsObject,
  }

  export class Repeat extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasBounds(): boolean;
    clearBounds(): void;
    getBounds(): Timing.Repeat.BoundsX | undefined;
    setBounds(value?: Timing.Repeat.BoundsX): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): PositiveInt | undefined;
    setCount(value?: PositiveInt): void;

    hasCountMax(): boolean;
    clearCountMax(): void;
    getCountMax(): PositiveInt | undefined;
    setCountMax(value?: PositiveInt): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Decimal | undefined;
    setDuration(value?: Decimal): void;

    hasDurationMax(): boolean;
    clearDurationMax(): void;
    getDurationMax(): Decimal | undefined;
    setDurationMax(value?: Decimal): void;

    hasDurationUnit(): boolean;
    clearDurationUnit(): void;
    getDurationUnit(): Timing.Repeat.DurationUnitCode | undefined;
    setDurationUnit(value?: Timing.Repeat.DurationUnitCode): void;

    hasFrequency(): boolean;
    clearFrequency(): void;
    getFrequency(): PositiveInt | undefined;
    setFrequency(value?: PositiveInt): void;

    hasFrequencyMax(): boolean;
    clearFrequencyMax(): void;
    getFrequencyMax(): PositiveInt | undefined;
    setFrequencyMax(value?: PositiveInt): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): Decimal | undefined;
    setPeriod(value?: Decimal): void;

    hasPeriodMax(): boolean;
    clearPeriodMax(): void;
    getPeriodMax(): Decimal | undefined;
    setPeriodMax(value?: Decimal): void;

    hasPeriodUnit(): boolean;
    clearPeriodUnit(): void;
    getPeriodUnit(): Timing.Repeat.PeriodUnitCode | undefined;
    setPeriodUnit(value?: Timing.Repeat.PeriodUnitCode): void;

    clearDayOfWeekList(): void;
    getDayOfWeekList(): Array<Timing.Repeat.DayOfWeekCode>;
    setDayOfWeekList(value: Array<Timing.Repeat.DayOfWeekCode>): void;
    addDayOfWeek(value?: Timing.Repeat.DayOfWeekCode, index?: number): Timing.Repeat.DayOfWeekCode;

    clearTimeOfDayList(): void;
    getTimeOfDayList(): Array<Time>;
    setTimeOfDayList(value: Array<Time>): void;
    addTimeOfDay(value?: Time, index?: number): Time;

    clearWhenList(): void;
    getWhenList(): Array<Timing.Repeat.WhenCode>;
    setWhenList(value: Array<Timing.Repeat.WhenCode>): void;
    addWhen(value?: Timing.Repeat.WhenCode, index?: number): Timing.Repeat.WhenCode;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): UnsignedInt | undefined;
    setOffset(value?: UnsignedInt): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repeat.AsObject;
    static toObject(includeInstance: boolean, msg: Repeat): Repeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repeat;
    static deserializeBinaryFromReader(message: Repeat, reader: jspb.BinaryReader): Repeat;
  }

  export namespace Repeat {
    export type AsObject = {
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
      bounds?: Timing.Repeat.BoundsX.AsObject,
      count?: PositiveInt.AsObject,
      countMax?: PositiveInt.AsObject,
      duration?: Decimal.AsObject,
      durationMax?: Decimal.AsObject,
      durationUnit?: Timing.Repeat.DurationUnitCode.AsObject,
      frequency?: PositiveInt.AsObject,
      frequencyMax?: PositiveInt.AsObject,
      period?: Decimal.AsObject,
      periodMax?: Decimal.AsObject,
      periodUnit?: Timing.Repeat.PeriodUnitCode.AsObject,
      dayOfWeekList: Array<Timing.Repeat.DayOfWeekCode.AsObject>,
      timeOfDayList: Array<Time.AsObject>,
      whenList: Array<Timing.Repeat.WhenCode.AsObject>,
      offset?: UnsignedInt.AsObject,
    }

    export class BoundsX extends jspb.Message {
      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): Duration | undefined;
      setDuration(value?: Duration): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): Range | undefined;
      setRange(value?: Range): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): Period | undefined;
      setPeriod(value?: Period): void;

      getChoiceCase(): BoundsX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BoundsX.AsObject;
      static toObject(includeInstance: boolean, msg: BoundsX): BoundsX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BoundsX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BoundsX;
      static deserializeBinaryFromReader(message: BoundsX, reader: jspb.BinaryReader): BoundsX;
    }

    export namespace BoundsX {
      export type AsObject = {
        duration?: Duration.AsObject,
        range?: Range.AsObject,
        period?: Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DURATION = 1,
        RANGE = 2,
        PERIOD = 3,
      }
    }

    export class DurationUnitCode extends jspb.Message {
      getValue(): proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap];
      setValue(value: proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DurationUnitCode.AsObject;
      static toObject(includeInstance: boolean, msg: DurationUnitCode): DurationUnitCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DurationUnitCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DurationUnitCode;
      static deserializeBinaryFromReader(message: DurationUnitCode, reader: jspb.BinaryReader): DurationUnitCode;
    }

    export namespace DurationUnitCode {
      export type AsObject = {
        value: proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }

    export class PeriodUnitCode extends jspb.Message {
      getValue(): proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap];
      setValue(value: proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PeriodUnitCode.AsObject;
      static toObject(includeInstance: boolean, msg: PeriodUnitCode): PeriodUnitCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PeriodUnitCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PeriodUnitCode;
      static deserializeBinaryFromReader(message: PeriodUnitCode, reader: jspb.BinaryReader): PeriodUnitCode;
    }

    export namespace PeriodUnitCode {
      export type AsObject = {
        value: proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.UnitsOfTimeValueSet.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }

    export class DayOfWeekCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DayOfWeekCode.AsObject;
      static toObject(includeInstance: boolean, msg: DayOfWeekCode): DayOfWeekCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DayOfWeekCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DayOfWeekCode;
      static deserializeBinaryFromReader(message: DayOfWeekCode, reader: jspb.BinaryReader): DayOfWeekCode;
    }

    export namespace DayOfWeekCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }

    export class WhenCode extends jspb.Message {
      getValue(): proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap];
      setValue(value: proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): String | undefined;
      setId(value?: String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<Extension>;
      setExtensionList(value: Array<Extension>): void;
      addExtension(value?: Extension, index?: number): Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WhenCode.AsObject;
      static toObject(includeInstance: boolean, msg: WhenCode): WhenCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: WhenCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WhenCode;
      static deserializeBinaryFromReader(message: WhenCode, reader: jspb.BinaryReader): WhenCode;
    }

    export namespace WhenCode {
      export type AsObject = {
        value: proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.EventTimingValueSet.ValueMap],
        id?: String.AsObject,
        extensionList: Array<Extension.AsObject>,
      }
    }
  }
}

export class TriggerDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): TriggerDefinition.TypeCode | undefined;
  setType(value?: TriggerDefinition.TypeCode): void;

  hasName(): boolean;
  clearName(): void;
  getName(): String | undefined;
  setName(value?: String): void;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): TriggerDefinition.TimingX | undefined;
  setTiming(value?: TriggerDefinition.TimingX): void;

  clearDataList(): void;
  getDataList(): Array<DataRequirement>;
  setDataList(value: Array<DataRequirement>): void;
  addData(value?: DataRequirement, index?: number): DataRequirement;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): Expression | undefined;
  setCondition(value?: Expression): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerDefinition): TriggerDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerDefinition;
  static deserializeBinaryFromReader(message: TriggerDefinition, reader: jspb.BinaryReader): TriggerDefinition;
}

export namespace TriggerDefinition {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    type?: TriggerDefinition.TypeCode.AsObject,
    name?: String.AsObject,
    timing?: TriggerDefinition.TimingX.AsObject,
    dataList: Array<DataRequirement.AsObject>,
    condition?: Expression.AsObject,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.TriggerTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TriggerTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.TriggerTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TriggerTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<Extension>;
    setExtensionList(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.TriggerTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TriggerTypeCode.ValueMap],
      id?: String.AsObject,
      extensionList: Array<Extension.AsObject>,
    }
  }

  export class TimingX extends jspb.Message {
    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): Timing | undefined;
    setTiming(value?: Timing): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    getChoiceCase(): TimingX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimingX.AsObject;
    static toObject(includeInstance: boolean, msg: TimingX): TimingX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimingX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimingX;
    static deserializeBinaryFromReader(message: TimingX, reader: jspb.BinaryReader): TimingX;
  }

  export namespace TimingX {
    export type AsObject = {
      timing?: Timing.AsObject,
      reference?: Reference.AsObject,
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      TIMING = 1,
      REFERENCE = 2,
      DATE = 3,
      DATE_TIME = 4,
    }
  }
}

export class UsageContext extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Coding | undefined;
  setCode(value?: Coding): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): UsageContext.ValueX | undefined;
  setValue(value?: UsageContext.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageContext.AsObject;
  static toObject(includeInstance: boolean, msg: UsageContext): UsageContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageContext;
  static deserializeBinaryFromReader(message: UsageContext, reader: jspb.BinaryReader): UsageContext;
}

export namespace UsageContext {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    code?: Coding.AsObject,
    value?: UsageContext.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

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
      codeableConcept?: CodeableConcept.AsObject,
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      reference?: Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      QUANTITY = 2,
      RANGE = 3,
      REFERENCE = 4,
    }
  }
}

export class Element extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Element.AsObject;
  static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Element;
  static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
}

export namespace Element {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

export class Extension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): Uri | undefined;
  setUrl(value?: Uri): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Extension.ValueX | undefined;
  setValue(value?: Extension.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extension.AsObject;
  static toObject(includeInstance: boolean, msg: Extension): Extension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Extension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Extension;
  static deserializeBinaryFromReader(message: Extension, reader: jspb.BinaryReader): Extension;
}

export namespace Extension {
  export type AsObject = {
    id?: String.AsObject,
    url?: Uri.AsObject,
    extensionList: Array<Extension.AsObject>,
    value?: Extension.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasBase64Binary(): boolean;
    clearBase64Binary(): void;
    getBase64Binary(): Base64Binary | undefined;
    setBase64Binary(value?: Base64Binary): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): Canonical | undefined;
    setCanonical(value?: Canonical): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): Code | undefined;
    setCode(value?: Code): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): Date | undefined;
    setDate(value?: Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): DateTime | undefined;
    setDateTime(value?: DateTime): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): Decimal | undefined;
    setDecimal(value?: Decimal): void;

    hasId(): boolean;
    clearId(): void;
    getId(): Id | undefined;
    setId(value?: Id): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): Instant | undefined;
    setInstant(value?: Instant): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): Integer | undefined;
    setInteger(value?: Integer): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): Markdown | undefined;
    setMarkdown(value?: Markdown): void;

    hasOid(): boolean;
    clearOid(): void;
    getOid(): Oid | undefined;
    setOid(value?: Oid): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): PositiveInt | undefined;
    setPositiveInt(value?: PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Time | undefined;
    setTime(value?: Time): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): UnsignedInt | undefined;
    setUnsignedInt(value?: UnsignedInt): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): Url | undefined;
    setUrl(value?: Url): void;

    hasUuid(): boolean;
    clearUuid(): void;
    getUuid(): Uuid | undefined;
    setUuid(value?: Uuid): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): Address | undefined;
    setAddress(value?: Address): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): Age | undefined;
    setAge(value?: Age): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): Annotation | undefined;
    setAnnotation(value?: Annotation): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): Attachment | undefined;
    setAttachment(value?: Attachment): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): Coding | undefined;
    setCoding(value?: Coding): void;

    hasContactPoint(): boolean;
    clearContactPoint(): void;
    getContactPoint(): ContactPoint | undefined;
    setContactPoint(value?: ContactPoint): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): Count | undefined;
    setCount(value?: Count): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): Distance | undefined;
    setDistance(value?: Distance): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): Duration | undefined;
    setDuration(value?: Duration): void;

    hasHumanName(): boolean;
    clearHumanName(): void;
    getHumanName(): HumanName | undefined;
    setHumanName(value?: HumanName): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): Identifier | undefined;
    setIdentifier(value?: Identifier): void;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): Money | undefined;
    setMoney(value?: Money): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): Period | undefined;
    setPeriod(value?: Period): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): Quantity | undefined;
    setQuantity(value?: Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): Ratio | undefined;
    setRatio(value?: Ratio): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): SampledData | undefined;
    setSampledData(value?: SampledData): void;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): Signature | undefined;
    setSignature(value?: Signature): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): Timing | undefined;
    setTiming(value?: Timing): void;

    hasContactDetail(): boolean;
    clearContactDetail(): void;
    getContactDetail(): ContactDetail | undefined;
    setContactDetail(value?: ContactDetail): void;

    hasContributor(): boolean;
    clearContributor(): void;
    getContributor(): Contributor | undefined;
    setContributor(value?: Contributor): void;

    hasDataRequirement(): boolean;
    clearDataRequirement(): void;
    getDataRequirement(): DataRequirement | undefined;
    setDataRequirement(value?: DataRequirement): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): Expression | undefined;
    setExpression(value?: Expression): void;

    hasParameterDefinition(): boolean;
    clearParameterDefinition(): void;
    getParameterDefinition(): ParameterDefinition | undefined;
    setParameterDefinition(value?: ParameterDefinition): void;

    hasRelatedArtifact(): boolean;
    clearRelatedArtifact(): void;
    getRelatedArtifact(): RelatedArtifact | undefined;
    setRelatedArtifact(value?: RelatedArtifact): void;

    hasTriggerDefinition(): boolean;
    clearTriggerDefinition(): void;
    getTriggerDefinition(): TriggerDefinition | undefined;
    setTriggerDefinition(value?: TriggerDefinition): void;

    hasUsageContext(): boolean;
    clearUsageContext(): void;
    getUsageContext(): UsageContext | undefined;
    setUsageContext(value?: UsageContext): void;

    hasDosage(): boolean;
    clearDosage(): void;
    getDosage(): Dosage | undefined;
    setDosage(value?: Dosage): void;

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
      base64Binary?: Base64Binary.AsObject,
      pb_boolean?: Boolean.AsObject,
      canonical?: Canonical.AsObject,
      code?: Code.AsObject,
      date?: Date.AsObject,
      dateTime?: DateTime.AsObject,
      decimal?: Decimal.AsObject,
      id?: Id.AsObject,
      instant?: Instant.AsObject,
      integer?: Integer.AsObject,
      markdown?: Markdown.AsObject,
      oid?: Oid.AsObject,
      positiveInt?: PositiveInt.AsObject,
      stringValue?: String.AsObject,
      time?: Time.AsObject,
      unsignedInt?: UnsignedInt.AsObject,
      uri?: Uri.AsObject,
      url?: Url.AsObject,
      uuid?: Uuid.AsObject,
      address?: Address.AsObject,
      age?: Age.AsObject,
      annotation?: Annotation.AsObject,
      attachment?: Attachment.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
      coding?: Coding.AsObject,
      contactPoint?: ContactPoint.AsObject,
      count?: Count.AsObject,
      distance?: Distance.AsObject,
      duration?: Duration.AsObject,
      humanName?: HumanName.AsObject,
      identifier?: Identifier.AsObject,
      money?: Money.AsObject,
      period?: Period.AsObject,
      quantity?: Quantity.AsObject,
      range?: Range.AsObject,
      ratio?: Ratio.AsObject,
      reference?: Reference.AsObject,
      sampledData?: SampledData.AsObject,
      signature?: Signature.AsObject,
      timing?: Timing.AsObject,
      contactDetail?: ContactDetail.AsObject,
      contributor?: Contributor.AsObject,
      dataRequirement?: DataRequirement.AsObject,
      expression?: Expression.AsObject,
      parameterDefinition?: ParameterDefinition.AsObject,
      relatedArtifact?: RelatedArtifact.AsObject,
      triggerDefinition?: TriggerDefinition.AsObject,
      usageContext?: UsageContext.AsObject,
      dosage?: Dosage.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CANONICAL = 3,
      CODE = 4,
      DATE = 5,
      DATE_TIME = 6,
      DECIMAL = 7,
      ID = 8,
      INSTANT = 9,
      INTEGER = 10,
      MARKDOWN = 11,
      OID = 12,
      POSITIVE_INT = 13,
      STRING_VALUE = 14,
      TIME = 15,
      UNSIGNED_INT = 16,
      URI = 17,
      URL = 18,
      UUID = 19,
      ADDRESS = 20,
      AGE = 21,
      ANNOTATION = 22,
      ATTACHMENT = 23,
      CODEABLE_CONCEPT = 24,
      CODING = 25,
      CONTACT_POINT = 26,
      COUNT = 27,
      DISTANCE = 28,
      DURATION = 29,
      HUMAN_NAME = 30,
      IDENTIFIER = 31,
      MONEY = 32,
      PERIOD = 33,
      QUANTITY = 34,
      RANGE = 35,
      RATIO = 36,
      REFERENCE = 37,
      SAMPLED_DATA = 38,
      SIGNATURE = 39,
      TIMING = 40,
      CONTACT_DETAIL = 41,
      CONTRIBUTOR = 42,
      DATA_REQUIREMENT = 43,
      EXPRESSION = 44,
      PARAMETER_DEFINITION = 45,
      RELATED_ARTIFACT = 46,
      TRIGGER_DEFINITION = 47,
      USAGE_CONTEXT = 48,
      DOSAGE = 49,
    }
  }
}

export class CodingWithFixedCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): String | undefined;
  setVersion(value?: String): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): String | undefined;
  setDisplay(value?: String): void;

  hasUserSelected(): boolean;
  clearUserSelected(): void;
  getUserSelected(): Boolean | undefined;
  setUserSelected(value?: Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodingWithFixedCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodingWithFixedCode): CodingWithFixedCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingWithFixedCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingWithFixedCode;
  static deserializeBinaryFromReader(message: CodingWithFixedCode, reader: jspb.BinaryReader): CodingWithFixedCode;
}

export namespace CodingWithFixedCode {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    version?: String.AsObject,
    display?: String.AsObject,
    userSelected?: Boolean.AsObject,
  }
}

export class Reference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): Uri | undefined;
  setType(value?: Uri): void;

  hasUri(): boolean;
  clearUri(): void;
  getUri(): String | undefined;
  setUri(value?: String): void;

  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): String | undefined;
  setFragment(value?: String): void;

  hasResourceId(): boolean;
  clearResourceId(): void;
  getResourceId(): ReferenceId | undefined;
  setResourceId(value?: ReferenceId): void;

  hasAccountId(): boolean;
  clearAccountId(): void;
  getAccountId(): ReferenceId | undefined;
  setAccountId(value?: ReferenceId): void;

  hasActivityDefinitionId(): boolean;
  clearActivityDefinitionId(): void;
  getActivityDefinitionId(): ReferenceId | undefined;
  setActivityDefinitionId(value?: ReferenceId): void;

  hasAdverseEventId(): boolean;
  clearAdverseEventId(): void;
  getAdverseEventId(): ReferenceId | undefined;
  setAdverseEventId(value?: ReferenceId): void;

  hasAllergyIntoleranceId(): boolean;
  clearAllergyIntoleranceId(): void;
  getAllergyIntoleranceId(): ReferenceId | undefined;
  setAllergyIntoleranceId(value?: ReferenceId): void;

  hasAppointmentId(): boolean;
  clearAppointmentId(): void;
  getAppointmentId(): ReferenceId | undefined;
  setAppointmentId(value?: ReferenceId): void;

  hasAppointmentResponseId(): boolean;
  clearAppointmentResponseId(): void;
  getAppointmentResponseId(): ReferenceId | undefined;
  setAppointmentResponseId(value?: ReferenceId): void;

  hasAuditEventId(): boolean;
  clearAuditEventId(): void;
  getAuditEventId(): ReferenceId | undefined;
  setAuditEventId(value?: ReferenceId): void;

  hasBasicId(): boolean;
  clearBasicId(): void;
  getBasicId(): ReferenceId | undefined;
  setBasicId(value?: ReferenceId): void;

  hasBinaryId(): boolean;
  clearBinaryId(): void;
  getBinaryId(): ReferenceId | undefined;
  setBinaryId(value?: ReferenceId): void;

  hasBiologicallyDerivedProductId(): boolean;
  clearBiologicallyDerivedProductId(): void;
  getBiologicallyDerivedProductId(): ReferenceId | undefined;
  setBiologicallyDerivedProductId(value?: ReferenceId): void;

  hasBodyStructureId(): boolean;
  clearBodyStructureId(): void;
  getBodyStructureId(): ReferenceId | undefined;
  setBodyStructureId(value?: ReferenceId): void;

  hasBundleId(): boolean;
  clearBundleId(): void;
  getBundleId(): ReferenceId | undefined;
  setBundleId(value?: ReferenceId): void;

  hasCapabilityStatementId(): boolean;
  clearCapabilityStatementId(): void;
  getCapabilityStatementId(): ReferenceId | undefined;
  setCapabilityStatementId(value?: ReferenceId): void;

  hasCarePlanId(): boolean;
  clearCarePlanId(): void;
  getCarePlanId(): ReferenceId | undefined;
  setCarePlanId(value?: ReferenceId): void;

  hasCareTeamId(): boolean;
  clearCareTeamId(): void;
  getCareTeamId(): ReferenceId | undefined;
  setCareTeamId(value?: ReferenceId): void;

  hasCatalogEntryId(): boolean;
  clearCatalogEntryId(): void;
  getCatalogEntryId(): ReferenceId | undefined;
  setCatalogEntryId(value?: ReferenceId): void;

  hasChargeItemId(): boolean;
  clearChargeItemId(): void;
  getChargeItemId(): ReferenceId | undefined;
  setChargeItemId(value?: ReferenceId): void;

  hasChargeItemDefinitionId(): boolean;
  clearChargeItemDefinitionId(): void;
  getChargeItemDefinitionId(): ReferenceId | undefined;
  setChargeItemDefinitionId(value?: ReferenceId): void;

  hasClaimId(): boolean;
  clearClaimId(): void;
  getClaimId(): ReferenceId | undefined;
  setClaimId(value?: ReferenceId): void;

  hasClaimResponseId(): boolean;
  clearClaimResponseId(): void;
  getClaimResponseId(): ReferenceId | undefined;
  setClaimResponseId(value?: ReferenceId): void;

  hasClinicalImpressionId(): boolean;
  clearClinicalImpressionId(): void;
  getClinicalImpressionId(): ReferenceId | undefined;
  setClinicalImpressionId(value?: ReferenceId): void;

  hasCodeSystemId(): boolean;
  clearCodeSystemId(): void;
  getCodeSystemId(): ReferenceId | undefined;
  setCodeSystemId(value?: ReferenceId): void;

  hasCommunicationId(): boolean;
  clearCommunicationId(): void;
  getCommunicationId(): ReferenceId | undefined;
  setCommunicationId(value?: ReferenceId): void;

  hasCommunicationRequestId(): boolean;
  clearCommunicationRequestId(): void;
  getCommunicationRequestId(): ReferenceId | undefined;
  setCommunicationRequestId(value?: ReferenceId): void;

  hasCompartmentDefinitionId(): boolean;
  clearCompartmentDefinitionId(): void;
  getCompartmentDefinitionId(): ReferenceId | undefined;
  setCompartmentDefinitionId(value?: ReferenceId): void;

  hasCompositionId(): boolean;
  clearCompositionId(): void;
  getCompositionId(): ReferenceId | undefined;
  setCompositionId(value?: ReferenceId): void;

  hasConceptMapId(): boolean;
  clearConceptMapId(): void;
  getConceptMapId(): ReferenceId | undefined;
  setConceptMapId(value?: ReferenceId): void;

  hasConditionId(): boolean;
  clearConditionId(): void;
  getConditionId(): ReferenceId | undefined;
  setConditionId(value?: ReferenceId): void;

  hasConsentId(): boolean;
  clearConsentId(): void;
  getConsentId(): ReferenceId | undefined;
  setConsentId(value?: ReferenceId): void;

  hasContractId(): boolean;
  clearContractId(): void;
  getContractId(): ReferenceId | undefined;
  setContractId(value?: ReferenceId): void;

  hasCoverageId(): boolean;
  clearCoverageId(): void;
  getCoverageId(): ReferenceId | undefined;
  setCoverageId(value?: ReferenceId): void;

  hasCoverageEligibilityRequestId(): boolean;
  clearCoverageEligibilityRequestId(): void;
  getCoverageEligibilityRequestId(): ReferenceId | undefined;
  setCoverageEligibilityRequestId(value?: ReferenceId): void;

  hasCoverageEligibilityResponseId(): boolean;
  clearCoverageEligibilityResponseId(): void;
  getCoverageEligibilityResponseId(): ReferenceId | undefined;
  setCoverageEligibilityResponseId(value?: ReferenceId): void;

  hasDetectedIssueId(): boolean;
  clearDetectedIssueId(): void;
  getDetectedIssueId(): ReferenceId | undefined;
  setDetectedIssueId(value?: ReferenceId): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): ReferenceId | undefined;
  setDeviceId(value?: ReferenceId): void;

  hasDeviceDefinitionId(): boolean;
  clearDeviceDefinitionId(): void;
  getDeviceDefinitionId(): ReferenceId | undefined;
  setDeviceDefinitionId(value?: ReferenceId): void;

  hasDeviceMetricId(): boolean;
  clearDeviceMetricId(): void;
  getDeviceMetricId(): ReferenceId | undefined;
  setDeviceMetricId(value?: ReferenceId): void;

  hasDeviceRequestId(): boolean;
  clearDeviceRequestId(): void;
  getDeviceRequestId(): ReferenceId | undefined;
  setDeviceRequestId(value?: ReferenceId): void;

  hasDeviceUseStatementId(): boolean;
  clearDeviceUseStatementId(): void;
  getDeviceUseStatementId(): ReferenceId | undefined;
  setDeviceUseStatementId(value?: ReferenceId): void;

  hasDiagnosticReportId(): boolean;
  clearDiagnosticReportId(): void;
  getDiagnosticReportId(): ReferenceId | undefined;
  setDiagnosticReportId(value?: ReferenceId): void;

  hasDocumentManifestId(): boolean;
  clearDocumentManifestId(): void;
  getDocumentManifestId(): ReferenceId | undefined;
  setDocumentManifestId(value?: ReferenceId): void;

  hasDocumentReferenceId(): boolean;
  clearDocumentReferenceId(): void;
  getDocumentReferenceId(): ReferenceId | undefined;
  setDocumentReferenceId(value?: ReferenceId): void;

  hasDomainResourceId(): boolean;
  clearDomainResourceId(): void;
  getDomainResourceId(): ReferenceId | undefined;
  setDomainResourceId(value?: ReferenceId): void;

  hasEffectEvidenceSynthesisId(): boolean;
  clearEffectEvidenceSynthesisId(): void;
  getEffectEvidenceSynthesisId(): ReferenceId | undefined;
  setEffectEvidenceSynthesisId(value?: ReferenceId): void;

  hasEncounterId(): boolean;
  clearEncounterId(): void;
  getEncounterId(): ReferenceId | undefined;
  setEncounterId(value?: ReferenceId): void;

  hasEndpointId(): boolean;
  clearEndpointId(): void;
  getEndpointId(): ReferenceId | undefined;
  setEndpointId(value?: ReferenceId): void;

  hasEnrollmentRequestId(): boolean;
  clearEnrollmentRequestId(): void;
  getEnrollmentRequestId(): ReferenceId | undefined;
  setEnrollmentRequestId(value?: ReferenceId): void;

  hasEnrollmentResponseId(): boolean;
  clearEnrollmentResponseId(): void;
  getEnrollmentResponseId(): ReferenceId | undefined;
  setEnrollmentResponseId(value?: ReferenceId): void;

  hasEpisodeOfCareId(): boolean;
  clearEpisodeOfCareId(): void;
  getEpisodeOfCareId(): ReferenceId | undefined;
  setEpisodeOfCareId(value?: ReferenceId): void;

  hasEventDefinitionId(): boolean;
  clearEventDefinitionId(): void;
  getEventDefinitionId(): ReferenceId | undefined;
  setEventDefinitionId(value?: ReferenceId): void;

  hasEvidenceId(): boolean;
  clearEvidenceId(): void;
  getEvidenceId(): ReferenceId | undefined;
  setEvidenceId(value?: ReferenceId): void;

  hasEvidenceVariableId(): boolean;
  clearEvidenceVariableId(): void;
  getEvidenceVariableId(): ReferenceId | undefined;
  setEvidenceVariableId(value?: ReferenceId): void;

  hasExampleScenarioId(): boolean;
  clearExampleScenarioId(): void;
  getExampleScenarioId(): ReferenceId | undefined;
  setExampleScenarioId(value?: ReferenceId): void;

  hasExplanationOfBenefitId(): boolean;
  clearExplanationOfBenefitId(): void;
  getExplanationOfBenefitId(): ReferenceId | undefined;
  setExplanationOfBenefitId(value?: ReferenceId): void;

  hasFamilyMemberHistoryId(): boolean;
  clearFamilyMemberHistoryId(): void;
  getFamilyMemberHistoryId(): ReferenceId | undefined;
  setFamilyMemberHistoryId(value?: ReferenceId): void;

  hasFlagId(): boolean;
  clearFlagId(): void;
  getFlagId(): ReferenceId | undefined;
  setFlagId(value?: ReferenceId): void;

  hasGoalId(): boolean;
  clearGoalId(): void;
  getGoalId(): ReferenceId | undefined;
  setGoalId(value?: ReferenceId): void;

  hasGraphDefinitionId(): boolean;
  clearGraphDefinitionId(): void;
  getGraphDefinitionId(): ReferenceId | undefined;
  setGraphDefinitionId(value?: ReferenceId): void;

  hasGroupId(): boolean;
  clearGroupId(): void;
  getGroupId(): ReferenceId | undefined;
  setGroupId(value?: ReferenceId): void;

  hasGuidanceResponseId(): boolean;
  clearGuidanceResponseId(): void;
  getGuidanceResponseId(): ReferenceId | undefined;
  setGuidanceResponseId(value?: ReferenceId): void;

  hasHealthcareServiceId(): boolean;
  clearHealthcareServiceId(): void;
  getHealthcareServiceId(): ReferenceId | undefined;
  setHealthcareServiceId(value?: ReferenceId): void;

  hasImagingStudyId(): boolean;
  clearImagingStudyId(): void;
  getImagingStudyId(): ReferenceId | undefined;
  setImagingStudyId(value?: ReferenceId): void;

  hasImmunizationId(): boolean;
  clearImmunizationId(): void;
  getImmunizationId(): ReferenceId | undefined;
  setImmunizationId(value?: ReferenceId): void;

  hasImmunizationEvaluationId(): boolean;
  clearImmunizationEvaluationId(): void;
  getImmunizationEvaluationId(): ReferenceId | undefined;
  setImmunizationEvaluationId(value?: ReferenceId): void;

  hasImmunizationRecommendationId(): boolean;
  clearImmunizationRecommendationId(): void;
  getImmunizationRecommendationId(): ReferenceId | undefined;
  setImmunizationRecommendationId(value?: ReferenceId): void;

  hasImplementationGuideId(): boolean;
  clearImplementationGuideId(): void;
  getImplementationGuideId(): ReferenceId | undefined;
  setImplementationGuideId(value?: ReferenceId): void;

  hasInsurancePlanId(): boolean;
  clearInsurancePlanId(): void;
  getInsurancePlanId(): ReferenceId | undefined;
  setInsurancePlanId(value?: ReferenceId): void;

  hasInvoiceId(): boolean;
  clearInvoiceId(): void;
  getInvoiceId(): ReferenceId | undefined;
  setInvoiceId(value?: ReferenceId): void;

  hasLibraryId(): boolean;
  clearLibraryId(): void;
  getLibraryId(): ReferenceId | undefined;
  setLibraryId(value?: ReferenceId): void;

  hasLinkageId(): boolean;
  clearLinkageId(): void;
  getLinkageId(): ReferenceId | undefined;
  setLinkageId(value?: ReferenceId): void;

  hasListId(): boolean;
  clearListId(): void;
  getListId(): ReferenceId | undefined;
  setListId(value?: ReferenceId): void;

  hasLocationId(): boolean;
  clearLocationId(): void;
  getLocationId(): ReferenceId | undefined;
  setLocationId(value?: ReferenceId): void;

  hasMeasureId(): boolean;
  clearMeasureId(): void;
  getMeasureId(): ReferenceId | undefined;
  setMeasureId(value?: ReferenceId): void;

  hasMeasureReportId(): boolean;
  clearMeasureReportId(): void;
  getMeasureReportId(): ReferenceId | undefined;
  setMeasureReportId(value?: ReferenceId): void;

  hasMediaId(): boolean;
  clearMediaId(): void;
  getMediaId(): ReferenceId | undefined;
  setMediaId(value?: ReferenceId): void;

  hasMedicationId(): boolean;
  clearMedicationId(): void;
  getMedicationId(): ReferenceId | undefined;
  setMedicationId(value?: ReferenceId): void;

  hasMedicationAdministrationId(): boolean;
  clearMedicationAdministrationId(): void;
  getMedicationAdministrationId(): ReferenceId | undefined;
  setMedicationAdministrationId(value?: ReferenceId): void;

  hasMedicationDispenseId(): boolean;
  clearMedicationDispenseId(): void;
  getMedicationDispenseId(): ReferenceId | undefined;
  setMedicationDispenseId(value?: ReferenceId): void;

  hasMedicationKnowledgeId(): boolean;
  clearMedicationKnowledgeId(): void;
  getMedicationKnowledgeId(): ReferenceId | undefined;
  setMedicationKnowledgeId(value?: ReferenceId): void;

  hasMedicationRequestId(): boolean;
  clearMedicationRequestId(): void;
  getMedicationRequestId(): ReferenceId | undefined;
  setMedicationRequestId(value?: ReferenceId): void;

  hasMedicationStatementId(): boolean;
  clearMedicationStatementId(): void;
  getMedicationStatementId(): ReferenceId | undefined;
  setMedicationStatementId(value?: ReferenceId): void;

  hasMedicinalProductId(): boolean;
  clearMedicinalProductId(): void;
  getMedicinalProductId(): ReferenceId | undefined;
  setMedicinalProductId(value?: ReferenceId): void;

  hasMedicinalProductAuthorizationId(): boolean;
  clearMedicinalProductAuthorizationId(): void;
  getMedicinalProductAuthorizationId(): ReferenceId | undefined;
  setMedicinalProductAuthorizationId(value?: ReferenceId): void;

  hasMedicinalProductContraindicationId(): boolean;
  clearMedicinalProductContraindicationId(): void;
  getMedicinalProductContraindicationId(): ReferenceId | undefined;
  setMedicinalProductContraindicationId(value?: ReferenceId): void;

  hasMedicinalProductIndicationId(): boolean;
  clearMedicinalProductIndicationId(): void;
  getMedicinalProductIndicationId(): ReferenceId | undefined;
  setMedicinalProductIndicationId(value?: ReferenceId): void;

  hasMedicinalProductIngredientId(): boolean;
  clearMedicinalProductIngredientId(): void;
  getMedicinalProductIngredientId(): ReferenceId | undefined;
  setMedicinalProductIngredientId(value?: ReferenceId): void;

  hasMedicinalProductInteractionId(): boolean;
  clearMedicinalProductInteractionId(): void;
  getMedicinalProductInteractionId(): ReferenceId | undefined;
  setMedicinalProductInteractionId(value?: ReferenceId): void;

  hasMedicinalProductManufacturedId(): boolean;
  clearMedicinalProductManufacturedId(): void;
  getMedicinalProductManufacturedId(): ReferenceId | undefined;
  setMedicinalProductManufacturedId(value?: ReferenceId): void;

  hasMedicinalProductPackagedId(): boolean;
  clearMedicinalProductPackagedId(): void;
  getMedicinalProductPackagedId(): ReferenceId | undefined;
  setMedicinalProductPackagedId(value?: ReferenceId): void;

  hasMedicinalProductPharmaceuticalId(): boolean;
  clearMedicinalProductPharmaceuticalId(): void;
  getMedicinalProductPharmaceuticalId(): ReferenceId | undefined;
  setMedicinalProductPharmaceuticalId(value?: ReferenceId): void;

  hasMedicinalProductUndesirableEffectId(): boolean;
  clearMedicinalProductUndesirableEffectId(): void;
  getMedicinalProductUndesirableEffectId(): ReferenceId | undefined;
  setMedicinalProductUndesirableEffectId(value?: ReferenceId): void;

  hasMessageDefinitionId(): boolean;
  clearMessageDefinitionId(): void;
  getMessageDefinitionId(): ReferenceId | undefined;
  setMessageDefinitionId(value?: ReferenceId): void;

  hasMessageHeaderId(): boolean;
  clearMessageHeaderId(): void;
  getMessageHeaderId(): ReferenceId | undefined;
  setMessageHeaderId(value?: ReferenceId): void;

  hasMolecularSequenceId(): boolean;
  clearMolecularSequenceId(): void;
  getMolecularSequenceId(): ReferenceId | undefined;
  setMolecularSequenceId(value?: ReferenceId): void;

  hasNamingSystemId(): boolean;
  clearNamingSystemId(): void;
  getNamingSystemId(): ReferenceId | undefined;
  setNamingSystemId(value?: ReferenceId): void;

  hasNutritionOrderId(): boolean;
  clearNutritionOrderId(): void;
  getNutritionOrderId(): ReferenceId | undefined;
  setNutritionOrderId(value?: ReferenceId): void;

  hasObservationId(): boolean;
  clearObservationId(): void;
  getObservationId(): ReferenceId | undefined;
  setObservationId(value?: ReferenceId): void;

  hasObservationDefinitionId(): boolean;
  clearObservationDefinitionId(): void;
  getObservationDefinitionId(): ReferenceId | undefined;
  setObservationDefinitionId(value?: ReferenceId): void;

  hasOperationDefinitionId(): boolean;
  clearOperationDefinitionId(): void;
  getOperationDefinitionId(): ReferenceId | undefined;
  setOperationDefinitionId(value?: ReferenceId): void;

  hasOperationOutcomeId(): boolean;
  clearOperationOutcomeId(): void;
  getOperationOutcomeId(): ReferenceId | undefined;
  setOperationOutcomeId(value?: ReferenceId): void;

  hasOrganizationId(): boolean;
  clearOrganizationId(): void;
  getOrganizationId(): ReferenceId | undefined;
  setOrganizationId(value?: ReferenceId): void;

  hasOrganizationAffiliationId(): boolean;
  clearOrganizationAffiliationId(): void;
  getOrganizationAffiliationId(): ReferenceId | undefined;
  setOrganizationAffiliationId(value?: ReferenceId): void;

  hasParametersId(): boolean;
  clearParametersId(): void;
  getParametersId(): ReferenceId | undefined;
  setParametersId(value?: ReferenceId): void;

  hasPatientId(): boolean;
  clearPatientId(): void;
  getPatientId(): ReferenceId | undefined;
  setPatientId(value?: ReferenceId): void;

  hasPaymentNoticeId(): boolean;
  clearPaymentNoticeId(): void;
  getPaymentNoticeId(): ReferenceId | undefined;
  setPaymentNoticeId(value?: ReferenceId): void;

  hasPaymentReconciliationId(): boolean;
  clearPaymentReconciliationId(): void;
  getPaymentReconciliationId(): ReferenceId | undefined;
  setPaymentReconciliationId(value?: ReferenceId): void;

  hasPersonId(): boolean;
  clearPersonId(): void;
  getPersonId(): ReferenceId | undefined;
  setPersonId(value?: ReferenceId): void;

  hasPlanDefinitionId(): boolean;
  clearPlanDefinitionId(): void;
  getPlanDefinitionId(): ReferenceId | undefined;
  setPlanDefinitionId(value?: ReferenceId): void;

  hasPractitionerId(): boolean;
  clearPractitionerId(): void;
  getPractitionerId(): ReferenceId | undefined;
  setPractitionerId(value?: ReferenceId): void;

  hasPractitionerRoleId(): boolean;
  clearPractitionerRoleId(): void;
  getPractitionerRoleId(): ReferenceId | undefined;
  setPractitionerRoleId(value?: ReferenceId): void;

  hasProcedureId(): boolean;
  clearProcedureId(): void;
  getProcedureId(): ReferenceId | undefined;
  setProcedureId(value?: ReferenceId): void;

  hasProvenanceId(): boolean;
  clearProvenanceId(): void;
  getProvenanceId(): ReferenceId | undefined;
  setProvenanceId(value?: ReferenceId): void;

  hasQuestionnaireId(): boolean;
  clearQuestionnaireId(): void;
  getQuestionnaireId(): ReferenceId | undefined;
  setQuestionnaireId(value?: ReferenceId): void;

  hasQuestionnaireResponseId(): boolean;
  clearQuestionnaireResponseId(): void;
  getQuestionnaireResponseId(): ReferenceId | undefined;
  setQuestionnaireResponseId(value?: ReferenceId): void;

  hasRelatedPersonId(): boolean;
  clearRelatedPersonId(): void;
  getRelatedPersonId(): ReferenceId | undefined;
  setRelatedPersonId(value?: ReferenceId): void;

  hasRequestGroupId(): boolean;
  clearRequestGroupId(): void;
  getRequestGroupId(): ReferenceId | undefined;
  setRequestGroupId(value?: ReferenceId): void;

  hasResearchDefinitionId(): boolean;
  clearResearchDefinitionId(): void;
  getResearchDefinitionId(): ReferenceId | undefined;
  setResearchDefinitionId(value?: ReferenceId): void;

  hasResearchElementDefinitionId(): boolean;
  clearResearchElementDefinitionId(): void;
  getResearchElementDefinitionId(): ReferenceId | undefined;
  setResearchElementDefinitionId(value?: ReferenceId): void;

  hasResearchStudyId(): boolean;
  clearResearchStudyId(): void;
  getResearchStudyId(): ReferenceId | undefined;
  setResearchStudyId(value?: ReferenceId): void;

  hasResearchSubjectId(): boolean;
  clearResearchSubjectId(): void;
  getResearchSubjectId(): ReferenceId | undefined;
  setResearchSubjectId(value?: ReferenceId): void;

  hasRiskAssessmentId(): boolean;
  clearRiskAssessmentId(): void;
  getRiskAssessmentId(): ReferenceId | undefined;
  setRiskAssessmentId(value?: ReferenceId): void;

  hasRiskEvidenceSynthesisId(): boolean;
  clearRiskEvidenceSynthesisId(): void;
  getRiskEvidenceSynthesisId(): ReferenceId | undefined;
  setRiskEvidenceSynthesisId(value?: ReferenceId): void;

  hasScheduleId(): boolean;
  clearScheduleId(): void;
  getScheduleId(): ReferenceId | undefined;
  setScheduleId(value?: ReferenceId): void;

  hasSearchParameterId(): boolean;
  clearSearchParameterId(): void;
  getSearchParameterId(): ReferenceId | undefined;
  setSearchParameterId(value?: ReferenceId): void;

  hasServiceRequestId(): boolean;
  clearServiceRequestId(): void;
  getServiceRequestId(): ReferenceId | undefined;
  setServiceRequestId(value?: ReferenceId): void;

  hasSlotId(): boolean;
  clearSlotId(): void;
  getSlotId(): ReferenceId | undefined;
  setSlotId(value?: ReferenceId): void;

  hasSpecimenId(): boolean;
  clearSpecimenId(): void;
  getSpecimenId(): ReferenceId | undefined;
  setSpecimenId(value?: ReferenceId): void;

  hasSpecimenDefinitionId(): boolean;
  clearSpecimenDefinitionId(): void;
  getSpecimenDefinitionId(): ReferenceId | undefined;
  setSpecimenDefinitionId(value?: ReferenceId): void;

  hasStructureDefinitionId(): boolean;
  clearStructureDefinitionId(): void;
  getStructureDefinitionId(): ReferenceId | undefined;
  setStructureDefinitionId(value?: ReferenceId): void;

  hasStructureMapId(): boolean;
  clearStructureMapId(): void;
  getStructureMapId(): ReferenceId | undefined;
  setStructureMapId(value?: ReferenceId): void;

  hasSubscriptionId(): boolean;
  clearSubscriptionId(): void;
  getSubscriptionId(): ReferenceId | undefined;
  setSubscriptionId(value?: ReferenceId): void;

  hasSubstanceId(): boolean;
  clearSubstanceId(): void;
  getSubstanceId(): ReferenceId | undefined;
  setSubstanceId(value?: ReferenceId): void;

  hasSubstanceNucleicAcidId(): boolean;
  clearSubstanceNucleicAcidId(): void;
  getSubstanceNucleicAcidId(): ReferenceId | undefined;
  setSubstanceNucleicAcidId(value?: ReferenceId): void;

  hasSubstancePolymerId(): boolean;
  clearSubstancePolymerId(): void;
  getSubstancePolymerId(): ReferenceId | undefined;
  setSubstancePolymerId(value?: ReferenceId): void;

  hasSubstanceProteinId(): boolean;
  clearSubstanceProteinId(): void;
  getSubstanceProteinId(): ReferenceId | undefined;
  setSubstanceProteinId(value?: ReferenceId): void;

  hasSubstanceReferenceInformationId(): boolean;
  clearSubstanceReferenceInformationId(): void;
  getSubstanceReferenceInformationId(): ReferenceId | undefined;
  setSubstanceReferenceInformationId(value?: ReferenceId): void;

  hasSubstanceSourceMaterialId(): boolean;
  clearSubstanceSourceMaterialId(): void;
  getSubstanceSourceMaterialId(): ReferenceId | undefined;
  setSubstanceSourceMaterialId(value?: ReferenceId): void;

  hasSubstanceSpecificationId(): boolean;
  clearSubstanceSpecificationId(): void;
  getSubstanceSpecificationId(): ReferenceId | undefined;
  setSubstanceSpecificationId(value?: ReferenceId): void;

  hasSupplyDeliveryId(): boolean;
  clearSupplyDeliveryId(): void;
  getSupplyDeliveryId(): ReferenceId | undefined;
  setSupplyDeliveryId(value?: ReferenceId): void;

  hasSupplyRequestId(): boolean;
  clearSupplyRequestId(): void;
  getSupplyRequestId(): ReferenceId | undefined;
  setSupplyRequestId(value?: ReferenceId): void;

  hasTaskId(): boolean;
  clearTaskId(): void;
  getTaskId(): ReferenceId | undefined;
  setTaskId(value?: ReferenceId): void;

  hasTerminologyCapabilitiesId(): boolean;
  clearTerminologyCapabilitiesId(): void;
  getTerminologyCapabilitiesId(): ReferenceId | undefined;
  setTerminologyCapabilitiesId(value?: ReferenceId): void;

  hasTestReportId(): boolean;
  clearTestReportId(): void;
  getTestReportId(): ReferenceId | undefined;
  setTestReportId(value?: ReferenceId): void;

  hasTestScriptId(): boolean;
  clearTestScriptId(): void;
  getTestScriptId(): ReferenceId | undefined;
  setTestScriptId(value?: ReferenceId): void;

  hasValueSetId(): boolean;
  clearValueSetId(): void;
  getValueSetId(): ReferenceId | undefined;
  setValueSetId(value?: ReferenceId): void;

  hasVerificationResultId(): boolean;
  clearVerificationResultId(): void;
  getVerificationResultId(): ReferenceId | undefined;
  setVerificationResultId(value?: ReferenceId): void;

  hasVisionPrescriptionId(): boolean;
  clearVisionPrescriptionId(): void;
  getVisionPrescriptionId(): ReferenceId | undefined;
  setVisionPrescriptionId(value?: ReferenceId): void;

  hasMetadataResourceId(): boolean;
  clearMetadataResourceId(): void;
  getMetadataResourceId(): ReferenceId | undefined;
  setMetadataResourceId(value?: ReferenceId): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): Identifier | undefined;
  setIdentifier(value?: Identifier): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): String | undefined;
  setDisplay(value?: String): void;

  getReferenceCase(): Reference.ReferenceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
    type?: Uri.AsObject,
    uri?: String.AsObject,
    fragment?: String.AsObject,
    resourceId?: ReferenceId.AsObject,
    accountId?: ReferenceId.AsObject,
    activityDefinitionId?: ReferenceId.AsObject,
    adverseEventId?: ReferenceId.AsObject,
    allergyIntoleranceId?: ReferenceId.AsObject,
    appointmentId?: ReferenceId.AsObject,
    appointmentResponseId?: ReferenceId.AsObject,
    auditEventId?: ReferenceId.AsObject,
    basicId?: ReferenceId.AsObject,
    binaryId?: ReferenceId.AsObject,
    biologicallyDerivedProductId?: ReferenceId.AsObject,
    bodyStructureId?: ReferenceId.AsObject,
    bundleId?: ReferenceId.AsObject,
    capabilityStatementId?: ReferenceId.AsObject,
    carePlanId?: ReferenceId.AsObject,
    careTeamId?: ReferenceId.AsObject,
    catalogEntryId?: ReferenceId.AsObject,
    chargeItemId?: ReferenceId.AsObject,
    chargeItemDefinitionId?: ReferenceId.AsObject,
    claimId?: ReferenceId.AsObject,
    claimResponseId?: ReferenceId.AsObject,
    clinicalImpressionId?: ReferenceId.AsObject,
    codeSystemId?: ReferenceId.AsObject,
    communicationId?: ReferenceId.AsObject,
    communicationRequestId?: ReferenceId.AsObject,
    compartmentDefinitionId?: ReferenceId.AsObject,
    compositionId?: ReferenceId.AsObject,
    conceptMapId?: ReferenceId.AsObject,
    conditionId?: ReferenceId.AsObject,
    consentId?: ReferenceId.AsObject,
    contractId?: ReferenceId.AsObject,
    coverageId?: ReferenceId.AsObject,
    coverageEligibilityRequestId?: ReferenceId.AsObject,
    coverageEligibilityResponseId?: ReferenceId.AsObject,
    detectedIssueId?: ReferenceId.AsObject,
    deviceId?: ReferenceId.AsObject,
    deviceDefinitionId?: ReferenceId.AsObject,
    deviceMetricId?: ReferenceId.AsObject,
    deviceRequestId?: ReferenceId.AsObject,
    deviceUseStatementId?: ReferenceId.AsObject,
    diagnosticReportId?: ReferenceId.AsObject,
    documentManifestId?: ReferenceId.AsObject,
    documentReferenceId?: ReferenceId.AsObject,
    domainResourceId?: ReferenceId.AsObject,
    effectEvidenceSynthesisId?: ReferenceId.AsObject,
    encounterId?: ReferenceId.AsObject,
    endpointId?: ReferenceId.AsObject,
    enrollmentRequestId?: ReferenceId.AsObject,
    enrollmentResponseId?: ReferenceId.AsObject,
    episodeOfCareId?: ReferenceId.AsObject,
    eventDefinitionId?: ReferenceId.AsObject,
    evidenceId?: ReferenceId.AsObject,
    evidenceVariableId?: ReferenceId.AsObject,
    exampleScenarioId?: ReferenceId.AsObject,
    explanationOfBenefitId?: ReferenceId.AsObject,
    familyMemberHistoryId?: ReferenceId.AsObject,
    flagId?: ReferenceId.AsObject,
    goalId?: ReferenceId.AsObject,
    graphDefinitionId?: ReferenceId.AsObject,
    groupId?: ReferenceId.AsObject,
    guidanceResponseId?: ReferenceId.AsObject,
    healthcareServiceId?: ReferenceId.AsObject,
    imagingStudyId?: ReferenceId.AsObject,
    immunizationId?: ReferenceId.AsObject,
    immunizationEvaluationId?: ReferenceId.AsObject,
    immunizationRecommendationId?: ReferenceId.AsObject,
    implementationGuideId?: ReferenceId.AsObject,
    insurancePlanId?: ReferenceId.AsObject,
    invoiceId?: ReferenceId.AsObject,
    libraryId?: ReferenceId.AsObject,
    linkageId?: ReferenceId.AsObject,
    listId?: ReferenceId.AsObject,
    locationId?: ReferenceId.AsObject,
    measureId?: ReferenceId.AsObject,
    measureReportId?: ReferenceId.AsObject,
    mediaId?: ReferenceId.AsObject,
    medicationId?: ReferenceId.AsObject,
    medicationAdministrationId?: ReferenceId.AsObject,
    medicationDispenseId?: ReferenceId.AsObject,
    medicationKnowledgeId?: ReferenceId.AsObject,
    medicationRequestId?: ReferenceId.AsObject,
    medicationStatementId?: ReferenceId.AsObject,
    medicinalProductId?: ReferenceId.AsObject,
    medicinalProductAuthorizationId?: ReferenceId.AsObject,
    medicinalProductContraindicationId?: ReferenceId.AsObject,
    medicinalProductIndicationId?: ReferenceId.AsObject,
    medicinalProductIngredientId?: ReferenceId.AsObject,
    medicinalProductInteractionId?: ReferenceId.AsObject,
    medicinalProductManufacturedId?: ReferenceId.AsObject,
    medicinalProductPackagedId?: ReferenceId.AsObject,
    medicinalProductPharmaceuticalId?: ReferenceId.AsObject,
    medicinalProductUndesirableEffectId?: ReferenceId.AsObject,
    messageDefinitionId?: ReferenceId.AsObject,
    messageHeaderId?: ReferenceId.AsObject,
    molecularSequenceId?: ReferenceId.AsObject,
    namingSystemId?: ReferenceId.AsObject,
    nutritionOrderId?: ReferenceId.AsObject,
    observationId?: ReferenceId.AsObject,
    observationDefinitionId?: ReferenceId.AsObject,
    operationDefinitionId?: ReferenceId.AsObject,
    operationOutcomeId?: ReferenceId.AsObject,
    organizationId?: ReferenceId.AsObject,
    organizationAffiliationId?: ReferenceId.AsObject,
    parametersId?: ReferenceId.AsObject,
    patientId?: ReferenceId.AsObject,
    paymentNoticeId?: ReferenceId.AsObject,
    paymentReconciliationId?: ReferenceId.AsObject,
    personId?: ReferenceId.AsObject,
    planDefinitionId?: ReferenceId.AsObject,
    practitionerId?: ReferenceId.AsObject,
    practitionerRoleId?: ReferenceId.AsObject,
    procedureId?: ReferenceId.AsObject,
    provenanceId?: ReferenceId.AsObject,
    questionnaireId?: ReferenceId.AsObject,
    questionnaireResponseId?: ReferenceId.AsObject,
    relatedPersonId?: ReferenceId.AsObject,
    requestGroupId?: ReferenceId.AsObject,
    researchDefinitionId?: ReferenceId.AsObject,
    researchElementDefinitionId?: ReferenceId.AsObject,
    researchStudyId?: ReferenceId.AsObject,
    researchSubjectId?: ReferenceId.AsObject,
    riskAssessmentId?: ReferenceId.AsObject,
    riskEvidenceSynthesisId?: ReferenceId.AsObject,
    scheduleId?: ReferenceId.AsObject,
    searchParameterId?: ReferenceId.AsObject,
    serviceRequestId?: ReferenceId.AsObject,
    slotId?: ReferenceId.AsObject,
    specimenId?: ReferenceId.AsObject,
    specimenDefinitionId?: ReferenceId.AsObject,
    structureDefinitionId?: ReferenceId.AsObject,
    structureMapId?: ReferenceId.AsObject,
    subscriptionId?: ReferenceId.AsObject,
    substanceId?: ReferenceId.AsObject,
    substanceNucleicAcidId?: ReferenceId.AsObject,
    substancePolymerId?: ReferenceId.AsObject,
    substanceProteinId?: ReferenceId.AsObject,
    substanceReferenceInformationId?: ReferenceId.AsObject,
    substanceSourceMaterialId?: ReferenceId.AsObject,
    substanceSpecificationId?: ReferenceId.AsObject,
    supplyDeliveryId?: ReferenceId.AsObject,
    supplyRequestId?: ReferenceId.AsObject,
    taskId?: ReferenceId.AsObject,
    terminologyCapabilitiesId?: ReferenceId.AsObject,
    testReportId?: ReferenceId.AsObject,
    testScriptId?: ReferenceId.AsObject,
    valueSetId?: ReferenceId.AsObject,
    verificationResultId?: ReferenceId.AsObject,
    visionPrescriptionId?: ReferenceId.AsObject,
    metadataResourceId?: ReferenceId.AsObject,
    identifier?: Identifier.AsObject,
    display?: String.AsObject,
  }

  export enum ReferenceCase {
    REFERENCE_NOT_SET = 0,
    URI = 4,
    FRAGMENT = 5,
    RESOURCE_ID = 6,
    ACCOUNT_ID = 7,
    ACTIVITY_DEFINITION_ID = 8,
    ADVERSE_EVENT_ID = 9,
    ALLERGY_INTOLERANCE_ID = 10,
    APPOINTMENT_ID = 11,
    APPOINTMENT_RESPONSE_ID = 12,
    AUDIT_EVENT_ID = 13,
    BASIC_ID = 14,
    BINARY_ID = 15,
    BIOLOGICALLY_DERIVED_PRODUCT_ID = 16,
    BODY_STRUCTURE_ID = 17,
    BUNDLE_ID = 18,
    CAPABILITY_STATEMENT_ID = 19,
    CARE_PLAN_ID = 20,
    CARE_TEAM_ID = 21,
    CATALOG_ENTRY_ID = 22,
    CHARGE_ITEM_ID = 23,
    CHARGE_ITEM_DEFINITION_ID = 24,
    CLAIM_ID = 25,
    CLAIM_RESPONSE_ID = 26,
    CLINICAL_IMPRESSION_ID = 27,
    CODE_SYSTEM_ID = 28,
    COMMUNICATION_ID = 29,
    COMMUNICATION_REQUEST_ID = 30,
    COMPARTMENT_DEFINITION_ID = 31,
    COMPOSITION_ID = 32,
    CONCEPT_MAP_ID = 33,
    CONDITION_ID = 34,
    CONSENT_ID = 35,
    CONTRACT_ID = 36,
    COVERAGE_ID = 37,
    COVERAGE_ELIGIBILITY_REQUEST_ID = 38,
    COVERAGE_ELIGIBILITY_RESPONSE_ID = 39,
    DETECTED_ISSUE_ID = 40,
    DEVICE_ID = 41,
    DEVICE_DEFINITION_ID = 42,
    DEVICE_METRIC_ID = 43,
    DEVICE_REQUEST_ID = 44,
    DEVICE_USE_STATEMENT_ID = 45,
    DIAGNOSTIC_REPORT_ID = 46,
    DOCUMENT_MANIFEST_ID = 47,
    DOCUMENT_REFERENCE_ID = 48,
    DOMAIN_RESOURCE_ID = 49,
    EFFECT_EVIDENCE_SYNTHESIS_ID = 50,
    ENCOUNTER_ID = 51,
    ENDPOINT_ID = 52,
    ENROLLMENT_REQUEST_ID = 53,
    ENROLLMENT_RESPONSE_ID = 54,
    EPISODE_OF_CARE_ID = 55,
    EVENT_DEFINITION_ID = 56,
    EVIDENCE_ID = 57,
    EVIDENCE_VARIABLE_ID = 58,
    EXAMPLE_SCENARIO_ID = 59,
    EXPLANATION_OF_BENEFIT_ID = 60,
    FAMILY_MEMBER_HISTORY_ID = 61,
    FLAG_ID = 62,
    GOAL_ID = 63,
    GRAPH_DEFINITION_ID = 64,
    GROUP_ID = 65,
    GUIDANCE_RESPONSE_ID = 66,
    HEALTHCARE_SERVICE_ID = 67,
    IMAGING_STUDY_ID = 68,
    IMMUNIZATION_ID = 69,
    IMMUNIZATION_EVALUATION_ID = 70,
    IMMUNIZATION_RECOMMENDATION_ID = 71,
    IMPLEMENTATION_GUIDE_ID = 72,
    INSURANCE_PLAN_ID = 73,
    INVOICE_ID = 74,
    LIBRARY_ID = 75,
    LINKAGE_ID = 76,
    LIST_ID = 77,
    LOCATION_ID = 78,
    MEASURE_ID = 79,
    MEASURE_REPORT_ID = 80,
    MEDIA_ID = 81,
    MEDICATION_ID = 82,
    MEDICATION_ADMINISTRATION_ID = 83,
    MEDICATION_DISPENSE_ID = 84,
    MEDICATION_KNOWLEDGE_ID = 85,
    MEDICATION_REQUEST_ID = 86,
    MEDICATION_STATEMENT_ID = 87,
    MEDICINAL_PRODUCT_ID = 88,
    MEDICINAL_PRODUCT_AUTHORIZATION_ID = 89,
    MEDICINAL_PRODUCT_CONTRAINDICATION_ID = 90,
    MEDICINAL_PRODUCT_INDICATION_ID = 91,
    MEDICINAL_PRODUCT_INGREDIENT_ID = 92,
    MEDICINAL_PRODUCT_INTERACTION_ID = 93,
    MEDICINAL_PRODUCT_MANUFACTURED_ID = 94,
    MEDICINAL_PRODUCT_PACKAGED_ID = 95,
    MEDICINAL_PRODUCT_PHARMACEUTICAL_ID = 96,
    MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT_ID = 97,
    MESSAGE_DEFINITION_ID = 98,
    MESSAGE_HEADER_ID = 99,
    MOLECULAR_SEQUENCE_ID = 100,
    NAMING_SYSTEM_ID = 101,
    NUTRITION_ORDER_ID = 102,
    OBSERVATION_ID = 103,
    OBSERVATION_DEFINITION_ID = 104,
    OPERATION_DEFINITION_ID = 105,
    OPERATION_OUTCOME_ID = 106,
    ORGANIZATION_ID = 107,
    ORGANIZATION_AFFILIATION_ID = 108,
    PARAMETERS_ID = 109,
    PATIENT_ID = 110,
    PAYMENT_NOTICE_ID = 111,
    PAYMENT_RECONCILIATION_ID = 112,
    PERSON_ID = 113,
    PLAN_DEFINITION_ID = 114,
    PRACTITIONER_ID = 115,
    PRACTITIONER_ROLE_ID = 116,
    PROCEDURE_ID = 117,
    PROVENANCE_ID = 118,
    QUESTIONNAIRE_ID = 119,
    QUESTIONNAIRE_RESPONSE_ID = 120,
    RELATED_PERSON_ID = 121,
    REQUEST_GROUP_ID = 122,
    RESEARCH_DEFINITION_ID = 123,
    RESEARCH_ELEMENT_DEFINITION_ID = 124,
    RESEARCH_STUDY_ID = 125,
    RESEARCH_SUBJECT_ID = 126,
    RISK_ASSESSMENT_ID = 127,
    RISK_EVIDENCE_SYNTHESIS_ID = 128,
    SCHEDULE_ID = 129,
    SEARCH_PARAMETER_ID = 130,
    SERVICE_REQUEST_ID = 131,
    SLOT_ID = 132,
    SPECIMEN_ID = 133,
    SPECIMEN_DEFINITION_ID = 134,
    STRUCTURE_DEFINITION_ID = 135,
    STRUCTURE_MAP_ID = 136,
    SUBSCRIPTION_ID = 137,
    SUBSTANCE_ID = 138,
    SUBSTANCE_NUCLEIC_ACID_ID = 139,
    SUBSTANCE_POLYMER_ID = 140,
    SUBSTANCE_PROTEIN_ID = 141,
    SUBSTANCE_REFERENCE_INFORMATION_ID = 142,
    SUBSTANCE_SOURCE_MATERIAL_ID = 143,
    SUBSTANCE_SPECIFICATION_ID = 144,
    SUPPLY_DELIVERY_ID = 145,
    SUPPLY_REQUEST_ID = 146,
    TASK_ID = 147,
    TERMINOLOGY_CAPABILITIES_ID = 148,
    TEST_REPORT_ID = 149,
    TEST_SCRIPT_ID = 150,
    VALUE_SET_ID = 151,
    VERIFICATION_RESULT_ID = 152,
    VISION_PRESCRIPTION_ID = 153,
    METADATA_RESOURCE_ID = 154,
  }
}

export class ReferenceId extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasHistory(): boolean;
  clearHistory(): void;
  getHistory(): Id | undefined;
  setHistory(value?: Id): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<Extension>;
  setExtensionList(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceId.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceId): ReferenceId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceId;
  static deserializeBinaryFromReader(message: ReferenceId, reader: jspb.BinaryReader): ReferenceId;
}

export namespace ReferenceId {
  export type AsObject = {
    value: string,
    history?: Id.AsObject,
    id?: String.AsObject,
    extensionList: Array<Extension.AsObject>,
  }
}

