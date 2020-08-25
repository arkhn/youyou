// package: google.fhir.stu3.proto
// file: proto/stu3/datatypes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";

export class Base64Binary extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Boolean extends jspb.Message {
  getValue(): boolean;
  setValue(value: boolean): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Code extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Id extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Markdown extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Oid extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class PositiveInt extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class String extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Uri extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class Uuid extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): AddressUseCode | undefined;
  setUse(value?: AddressUseCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): AddressTypeCode | undefined;
  setType(value?: AddressTypeCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  clearLine(): void;
  getLine(): Array<String>;
  setLine(value: Array<String>): void;
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
    extension: Array<Extension.AsObject>,
    use?: AddressUseCode.AsObject,
    type?: AddressTypeCode.AsObject,
    text?: String.AsObject,
    line: Array<String.AsObject>,
    city?: String.AsObject,
    district?: String.AsObject,
    state?: String.AsObject,
    postalCode?: String.AsObject,
    country?: String.AsObject,
    period?: Period.AsObject,
  }
}

export class Age extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Annotation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): Annotation.Author | undefined;
  setAuthor(value?: Annotation.Author): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): DateTime | undefined;
  setTime(value?: DateTime): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

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
    extension: Array<Extension.AsObject>,
    author?: Annotation.Author.AsObject,
    time?: DateTime.AsObject,
    text?: String.AsObject,
  }

  export class Author extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): String | undefined;
    setStringValue(value?: String): void;

    getAuthorCase(): Author.AuthorCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Author.AsObject;
    static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Author;
    static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
  }

  export namespace Author {
    export type AsObject = {
      reference?: Reference.AsObject,
      stringValue?: String.AsObject,
    }

    export enum AuthorCase {
      AUTHOR_NOT_SET = 0,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasContentType(): boolean;
  clearContentType(): void;
  getContentType(): MimeTypeCode | undefined;
  setContentType(value?: MimeTypeCode): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): LanguageCode | undefined;
  setLanguage(value?: LanguageCode): void;

  hasData(): boolean;
  clearData(): void;
  getData(): Base64Binary | undefined;
  setData(value?: Base64Binary): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): Uri | undefined;
  setUrl(value?: Uri): void;

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
    extension: Array<Extension.AsObject>,
    contentType?: MimeTypeCode.AsObject,
    language?: LanguageCode.AsObject,
    data?: Base64Binary.AsObject,
    url?: Uri.AsObject,
    size?: UnsignedInt.AsObject,
    hash?: Base64Binary.AsObject,
    title?: String.AsObject,
    creation?: DateTime.AsObject,
  }
}

export class CodeableConcept extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearCoding(): void;
  getCoding(): Array<Coding>;
  setCoding(value: Array<Coding>): void;
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
    extension: Array<Extension.AsObject>,
    coding: Array<Coding.AsObject>,
    text?: String.AsObject,
  }
}

export class Coding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
    system?: Uri.AsObject,
    version?: String.AsObject,
    code?: Code.AsObject,
    display?: String.AsObject,
    userSelected?: Boolean.AsObject,
  }
}

export class ContactPoint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): ContactPointSystemCode | undefined;
  setSystem(value?: ContactPointSystemCode): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): String | undefined;
  setValue(value?: String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): ContactPointUseCode | undefined;
  setUse(value?: ContactPointUseCode): void;

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
    extension: Array<Extension.AsObject>,
    system?: ContactPointSystemCode.AsObject,
    value?: String.AsObject,
    use?: ContactPointUseCode.AsObject,
    rank?: PositiveInt.AsObject,
    period?: Period.AsObject,
  }
}

export class Count extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Distance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Dosage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasSequence(): boolean;
  clearSequence(): void;
  getSequence(): Integer | undefined;
  setSequence(value?: Integer): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  clearAdditionalInstruction(): void;
  getAdditionalInstruction(): Array<CodeableConcept>;
  setAdditionalInstruction(value: Array<CodeableConcept>): void;
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
  getAsNeeded(): Dosage.AsNeeded | undefined;
  setAsNeeded(value?: Dosage.AsNeeded): void;

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

  hasDose(): boolean;
  clearDose(): void;
  getDose(): Dosage.Dose | undefined;
  setDose(value?: Dosage.Dose): void;

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

  hasRate(): boolean;
  clearRate(): void;
  getRate(): Dosage.Rate | undefined;
  setRate(value?: Dosage.Rate): void;

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
    extension: Array<Extension.AsObject>,
    sequence?: Integer.AsObject,
    text?: String.AsObject,
    additionalInstruction: Array<CodeableConcept.AsObject>,
    patientInstruction?: String.AsObject,
    timing?: Timing.AsObject,
    asNeeded?: Dosage.AsNeeded.AsObject,
    site?: CodeableConcept.AsObject,
    route?: CodeableConcept.AsObject,
    method?: CodeableConcept.AsObject,
    dose?: Dosage.Dose.AsObject,
    maxDosePerPeriod?: Ratio.AsObject,
    maxDosePerAdministration?: SimpleQuantity.AsObject,
    maxDosePerLifetime?: SimpleQuantity.AsObject,
    rate?: Dosage.Rate.AsObject,
  }

  export class AsNeeded extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): Boolean | undefined;
    setBoolean(value?: Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): CodeableConcept | undefined;
    setCodeableConcept(value?: CodeableConcept): void;

    getAsNeededCase(): AsNeeded.AsNeededCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsNeeded.AsObject;
    static toObject(includeInstance: boolean, msg: AsNeeded): AsNeeded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsNeeded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsNeeded;
    static deserializeBinaryFromReader(message: AsNeeded, reader: jspb.BinaryReader): AsNeeded;
  }

  export namespace AsNeeded {
    export type AsObject = {
      pb_boolean?: Boolean.AsObject,
      codeableConcept?: CodeableConcept.AsObject,
    }

    export enum AsNeededCase {
      AS_NEEDED_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class Dose extends jspb.Message {
    hasRange(): boolean;
    clearRange(): void;
    getRange(): Range | undefined;
    setRange(value?: Range): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): SimpleQuantity | undefined;
    setQuantity(value?: SimpleQuantity): void;

    getDoseCase(): Dose.DoseCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Dose.AsObject;
    static toObject(includeInstance: boolean, msg: Dose): Dose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Dose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Dose;
    static deserializeBinaryFromReader(message: Dose, reader: jspb.BinaryReader): Dose;
  }

  export namespace Dose {
    export type AsObject = {
      range?: Range.AsObject,
      quantity?: SimpleQuantity.AsObject,
    }

    export enum DoseCase {
      DOSE_NOT_SET = 0,
      RANGE = 1,
      QUANTITY = 2,
    }
  }

  export class Rate extends jspb.Message {
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

    getRateCase(): Rate.RateCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
  }

  export namespace Rate {
    export type AsObject = {
      ratio?: Ratio.AsObject,
      range?: Range.AsObject,
      quantity?: SimpleQuantity.AsObject,
    }

    export enum RateCase {
      RATE_NOT_SET = 0,
      RATIO = 1,
      RANGE = 2,
      QUANTITY = 3,
    }
  }
}

export class Duration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class HumanName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): NameUseCode | undefined;
  setUse(value?: NameUseCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): String | undefined;
  setText(value?: String): void;

  hasFamily(): boolean;
  clearFamily(): void;
  getFamily(): String | undefined;
  setFamily(value?: String): void;

  clearGiven(): void;
  getGiven(): Array<String>;
  setGiven(value: Array<String>): void;
  addGiven(value?: String, index?: number): String;

  clearPrefix(): void;
  getPrefix(): Array<String>;
  setPrefix(value: Array<String>): void;
  addPrefix(value?: String, index?: number): String;

  clearSuffix(): void;
  getSuffix(): Array<String>;
  setSuffix(value: Array<String>): void;
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
    extension: Array<Extension.AsObject>,
    use?: NameUseCode.AsObject,
    text?: String.AsObject,
    family?: String.AsObject,
    given: Array<String.AsObject>,
    prefix: Array<String.AsObject>,
    suffix: Array<String.AsObject>,
    period?: Period.AsObject,
  }
}

export class Identifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): IdentifierUseCode | undefined;
  setUse(value?: IdentifierUseCode): void;

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
    extension: Array<Extension.AsObject>,
    use?: IdentifierUseCode.AsObject,
    type?: CodeableConcept.AsObject,
    system?: Uri.AsObject,
    value?: String.AsObject,
    period?: Period.AsObject,
    assigner?: Reference.AsObject,
  }
}

export class Meta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasVersionId(): boolean;
  clearVersionId(): void;
  getVersionId(): Id | undefined;
  setVersionId(value?: Id): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): Instant | undefined;
  setLastUpdated(value?: Instant): void;

  clearProfile(): void;
  getProfile(): Array<Uri>;
  setProfile(value: Array<Uri>): void;
  addProfile(value?: Uri, index?: number): Uri;

  clearSecurity(): void;
  getSecurity(): Array<Coding>;
  setSecurity(value: Array<Coding>): void;
  addSecurity(value?: Coding, index?: number): Coding;

  clearTag(): void;
  getTag(): Array<Coding>;
  setTag(value: Array<Coding>): void;
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
    extension: Array<Extension.AsObject>,
    versionId?: Id.AsObject,
    lastUpdated?: Instant.AsObject,
    profile: Array<Uri.AsObject>,
    security: Array<Coding.AsObject>,
    tag: Array<Coding.AsObject>,
  }
}

export class Money extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Period extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
    start?: DateTime.AsObject,
    end?: DateTime.AsObject,
  }
}

export class Quantity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Decimal | undefined;
  setValue(value?: Decimal): void;

  hasComparator(): boolean;
  clearComparator(): void;
  getComparator(): QuantityComparatorCode | undefined;
  setComparator(value?: QuantityComparatorCode): void;

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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    comparator?: QuantityComparatorCode.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Range extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
    low?: SimpleQuantity.AsObject,
    high?: SimpleQuantity.AsObject,
  }
}

export class Ratio extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
    numerator?: Quantity.AsObject,
    denominator?: Quantity.AsObject,
  }
}

export class SampledData extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearType(): void;
  getType(): Array<Coding>;
  setType(value: Array<Coding>): void;
  addType(value?: Coding, index?: number): Coding;

  hasWhen(): boolean;
  clearWhen(): void;
  getWhen(): Instant | undefined;
  setWhen(value?: Instant): void;

  hasWho(): boolean;
  clearWho(): void;
  getWho(): Signature.Who | undefined;
  setWho(value?: Signature.Who): void;

  hasOnBehalfOf(): boolean;
  clearOnBehalfOf(): void;
  getOnBehalfOf(): Signature.OnBehalfOf | undefined;
  setOnBehalfOf(value?: Signature.OnBehalfOf): void;

  hasContentType(): boolean;
  clearContentType(): void;
  getContentType(): MimeTypeCode | undefined;
  setContentType(value?: MimeTypeCode): void;

  hasBlob(): boolean;
  clearBlob(): void;
  getBlob(): Base64Binary | undefined;
  setBlob(value?: Base64Binary): void;

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
    extension: Array<Extension.AsObject>,
    type: Array<Coding.AsObject>,
    when?: Instant.AsObject,
    who?: Signature.Who.AsObject,
    onBehalfOf?: Signature.OnBehalfOf.AsObject,
    contentType?: MimeTypeCode.AsObject,
    blob?: Base64Binary.AsObject,
  }

  export class Who extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    getWhoCase(): Who.WhoCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Who.AsObject;
    static toObject(includeInstance: boolean, msg: Who): Who.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Who, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Who;
    static deserializeBinaryFromReader(message: Who, reader: jspb.BinaryReader): Who;
  }

  export namespace Who {
    export type AsObject = {
      uri?: Uri.AsObject,
      reference?: Reference.AsObject,
    }

    export enum WhoCase {
      WHO_NOT_SET = 0,
      URI = 1,
      REFERENCE = 2,
    }
  }

  export class OnBehalfOf extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): Uri | undefined;
    setUri(value?: Uri): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): Reference | undefined;
    setReference(value?: Reference): void;

    getOnBehalfOfCase(): OnBehalfOf.OnBehalfOfCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnBehalfOf.AsObject;
    static toObject(includeInstance: boolean, msg: OnBehalfOf): OnBehalfOf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnBehalfOf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnBehalfOf;
    static deserializeBinaryFromReader(message: OnBehalfOf, reader: jspb.BinaryReader): OnBehalfOf;
  }

  export namespace OnBehalfOf {
    export type AsObject = {
      uri?: Uri.AsObject,
      reference?: Reference.AsObject,
    }

    export enum OnBehalfOfCase {
      ON_BEHALF_OF_NOT_SET = 0,
      URI = 1,
      REFERENCE = 2,
    }
  }
}

export class SimpleQuantity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
    value?: Decimal.AsObject,
    unit?: String.AsObject,
    system?: Uri.AsObject,
    code?: Code.AsObject,
  }
}

export class Timing extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  clearEvent(): void;
  getEvent(): Array<DateTime>;
  setEvent(value: Array<DateTime>): void;
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
    extension: Array<Extension.AsObject>,
    event: Array<DateTime.AsObject>,
    repeat?: Timing.Repeat.AsObject,
    code?: CodeableConcept.AsObject,
  }

  export class Repeat extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): String | undefined;
    setId(value?: String): void;

    clearExtension(): void;
    getExtension(): Array<Extension>;
    setExtension(value: Array<Extension>): void;
    addExtension(value?: Extension, index?: number): Extension;

    hasBounds(): boolean;
    clearBounds(): void;
    getBounds(): Timing.Repeat.Bounds | undefined;
    setBounds(value?: Timing.Repeat.Bounds): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): Integer | undefined;
    setCount(value?: Integer): void;

    hasCountMax(): boolean;
    clearCountMax(): void;
    getCountMax(): Integer | undefined;
    setCountMax(value?: Integer): void;

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
    getDurationUnit(): UnitsOfTimeCode | undefined;
    setDurationUnit(value?: UnitsOfTimeCode): void;

    hasFrequency(): boolean;
    clearFrequency(): void;
    getFrequency(): Integer | undefined;
    setFrequency(value?: Integer): void;

    hasFrequencyMax(): boolean;
    clearFrequencyMax(): void;
    getFrequencyMax(): Integer | undefined;
    setFrequencyMax(value?: Integer): void;

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
    getPeriodUnit(): UnitsOfTimeCode | undefined;
    setPeriodUnit(value?: UnitsOfTimeCode): void;

    clearDayOfWeek(): void;
    getDayOfWeek(): Array<DaysOfWeekCode>;
    setDayOfWeek(value: Array<DaysOfWeekCode>): void;
    addDayOfWeek(value?: DaysOfWeekCode, index?: number): DaysOfWeekCode;

    clearTimeOfDay(): void;
    getTimeOfDay(): Array<Time>;
    setTimeOfDay(value: Array<Time>): void;
    addTimeOfDay(value?: Time, index?: number): Time;

    clearWhen(): void;
    getWhen(): Array<EventTimingCode>;
    setWhen(value: Array<EventTimingCode>): void;
    addWhen(value?: EventTimingCode, index?: number): EventTimingCode;

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
      extension: Array<Extension.AsObject>,
      bounds?: Timing.Repeat.Bounds.AsObject,
      count?: Integer.AsObject,
      countMax?: Integer.AsObject,
      duration?: Decimal.AsObject,
      durationMax?: Decimal.AsObject,
      durationUnit?: UnitsOfTimeCode.AsObject,
      frequency?: Integer.AsObject,
      frequencyMax?: Integer.AsObject,
      period?: Decimal.AsObject,
      periodMax?: Decimal.AsObject,
      periodUnit?: UnitsOfTimeCode.AsObject,
      dayOfWeek: Array<DaysOfWeekCode.AsObject>,
      timeOfDay: Array<Time.AsObject>,
      when: Array<EventTimingCode.AsObject>,
      offset?: UnsignedInt.AsObject,
    }

    export class Bounds extends jspb.Message {
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

      getBoundsCase(): Bounds.BoundsCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Bounds.AsObject;
      static toObject(includeInstance: boolean, msg: Bounds): Bounds.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Bounds, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Bounds;
      static deserializeBinaryFromReader(message: Bounds, reader: jspb.BinaryReader): Bounds;
    }

    export namespace Bounds {
      export type AsObject = {
        duration?: Duration.AsObject,
        range?: Range.AsObject,
        period?: Period.AsObject,
      }

      export enum BoundsCase {
        BOUNDS_NOT_SET = 0,
        DURATION = 1,
        RANGE = 2,
        PERIOD = 3,
      }
    }
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

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Extension.ValueX | undefined;
  setValue(value?: Extension.ValueX): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

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
    value?: Extension.ValueX.AsObject,
    extension: Array<Extension.AsObject>,
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
      meta?: Meta.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CODE = 3,
      DATE = 4,
      DATE_TIME = 5,
      DECIMAL = 6,
      ID = 7,
      INSTANT = 8,
      INTEGER = 9,
      MARKDOWN = 10,
      OID = 11,
      POSITIVE_INT = 12,
      STRING_VALUE = 13,
      TIME = 14,
      UNSIGNED_INT = 15,
      URI = 16,
      ADDRESS = 17,
      AGE = 18,
      ANNOTATION = 19,
      ATTACHMENT = 20,
      CODEABLE_CONCEPT = 21,
      CODING = 22,
      CONTACT_POINT = 23,
      COUNT = 24,
      DISTANCE = 25,
      DURATION = 26,
      HUMAN_NAME = 27,
      IDENTIFIER = 28,
      MONEY = 29,
      PERIOD = 30,
      QUANTITY = 31,
      RANGE = 32,
      RATIO = 33,
      REFERENCE = 34,
      SAMPLED_DATA = 35,
      SIGNATURE = 36,
      TIMING = 37,
      META = 38,
    }
  }
}

export class CodingWithFixedSystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

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
  toObject(includeInstance?: boolean): CodingWithFixedSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CodingWithFixedSystem): CodingWithFixedSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingWithFixedSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingWithFixedSystem;
  static deserializeBinaryFromReader(message: CodingWithFixedSystem, reader: jspb.BinaryReader): CodingWithFixedSystem;
}

export namespace CodingWithFixedSystem {
  export type AsObject = {
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
    version?: String.AsObject,
    code?: Code.AsObject,
    display?: String.AsObject,
    userSelected?: Boolean.AsObject,
  }
}

export class CodingWithFixedCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  hasUri(): boolean;
  clearUri(): void;
  getUri(): String | undefined;
  setUri(value?: String): void;

  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): String | undefined;
  setFragment(value?: String): void;

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

  hasBodySiteId(): boolean;
  clearBodySiteId(): void;
  getBodySiteId(): ReferenceId | undefined;
  setBodySiteId(value?: ReferenceId): void;

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

  hasChargeItemId(): boolean;
  clearChargeItemId(): void;
  getChargeItemId(): ReferenceId | undefined;
  setChargeItemId(value?: ReferenceId): void;

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

  hasDataElementId(): boolean;
  clearDataElementId(): void;
  getDataElementId(): ReferenceId | undefined;
  setDataElementId(value?: ReferenceId): void;

  hasDetectedIssueId(): boolean;
  clearDetectedIssueId(): void;
  getDetectedIssueId(): ReferenceId | undefined;
  setDetectedIssueId(value?: ReferenceId): void;

  hasDeviceId(): boolean;
  clearDeviceId(): void;
  getDeviceId(): ReferenceId | undefined;
  setDeviceId(value?: ReferenceId): void;

  hasDeviceComponentId(): boolean;
  clearDeviceComponentId(): void;
  getDeviceComponentId(): ReferenceId | undefined;
  setDeviceComponentId(value?: ReferenceId): void;

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

  hasEligibilityRequestId(): boolean;
  clearEligibilityRequestId(): void;
  getEligibilityRequestId(): ReferenceId | undefined;
  setEligibilityRequestId(value?: ReferenceId): void;

  hasEligibilityResponseId(): boolean;
  clearEligibilityResponseId(): void;
  getEligibilityResponseId(): ReferenceId | undefined;
  setEligibilityResponseId(value?: ReferenceId): void;

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

  hasExpansionProfileId(): boolean;
  clearExpansionProfileId(): void;
  getExpansionProfileId(): ReferenceId | undefined;
  setExpansionProfileId(value?: ReferenceId): void;

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

  hasImagingManifestId(): boolean;
  clearImagingManifestId(): void;
  getImagingManifestId(): ReferenceId | undefined;
  setImagingManifestId(value?: ReferenceId): void;

  hasImagingStudyId(): boolean;
  clearImagingStudyId(): void;
  getImagingStudyId(): ReferenceId | undefined;
  setImagingStudyId(value?: ReferenceId): void;

  hasImmunizationId(): boolean;
  clearImmunizationId(): void;
  getImmunizationId(): ReferenceId | undefined;
  setImmunizationId(value?: ReferenceId): void;

  hasImmunizationRecommendationId(): boolean;
  clearImmunizationRecommendationId(): void;
  getImmunizationRecommendationId(): ReferenceId | undefined;
  setImmunizationRecommendationId(value?: ReferenceId): void;

  hasImplementationGuideId(): boolean;
  clearImplementationGuideId(): void;
  getImplementationGuideId(): ReferenceId | undefined;
  setImplementationGuideId(value?: ReferenceId): void;

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

  hasMedicationRequestId(): boolean;
  clearMedicationRequestId(): void;
  getMedicationRequestId(): ReferenceId | undefined;
  setMedicationRequestId(value?: ReferenceId): void;

  hasMedicationStatementId(): boolean;
  clearMedicationStatementId(): void;
  getMedicationStatementId(): ReferenceId | undefined;
  setMedicationStatementId(value?: ReferenceId): void;

  hasMessageDefinitionId(): boolean;
  clearMessageDefinitionId(): void;
  getMessageDefinitionId(): ReferenceId | undefined;
  setMessageDefinitionId(value?: ReferenceId): void;

  hasMessageHeaderId(): boolean;
  clearMessageHeaderId(): void;
  getMessageHeaderId(): ReferenceId | undefined;
  setMessageHeaderId(value?: ReferenceId): void;

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

  hasProcedureRequestId(): boolean;
  clearProcedureRequestId(): void;
  getProcedureRequestId(): ReferenceId | undefined;
  setProcedureRequestId(value?: ReferenceId): void;

  hasProcessRequestId(): boolean;
  clearProcessRequestId(): void;
  getProcessRequestId(): ReferenceId | undefined;
  setProcessRequestId(value?: ReferenceId): void;

  hasProcessResponseId(): boolean;
  clearProcessResponseId(): void;
  getProcessResponseId(): ReferenceId | undefined;
  setProcessResponseId(value?: ReferenceId): void;

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

  hasReferralRequestId(): boolean;
  clearReferralRequestId(): void;
  getReferralRequestId(): ReferenceId | undefined;
  setReferralRequestId(value?: ReferenceId): void;

  hasRelatedPersonId(): boolean;
  clearRelatedPersonId(): void;
  getRelatedPersonId(): ReferenceId | undefined;
  setRelatedPersonId(value?: ReferenceId): void;

  hasRequestGroupId(): boolean;
  clearRequestGroupId(): void;
  getRequestGroupId(): ReferenceId | undefined;
  setRequestGroupId(value?: ReferenceId): void;

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

  hasScheduleId(): boolean;
  clearScheduleId(): void;
  getScheduleId(): ReferenceId | undefined;
  setScheduleId(value?: ReferenceId): void;

  hasSearchParameterId(): boolean;
  clearSearchParameterId(): void;
  getSearchParameterId(): ReferenceId | undefined;
  setSearchParameterId(value?: ReferenceId): void;

  hasSequenceId(): boolean;
  clearSequenceId(): void;
  getSequenceId(): ReferenceId | undefined;
  setSequenceId(value?: ReferenceId): void;

  hasServiceDefinitionId(): boolean;
  clearServiceDefinitionId(): void;
  getServiceDefinitionId(): ReferenceId | undefined;
  setServiceDefinitionId(value?: ReferenceId): void;

  hasSlotId(): boolean;
  clearSlotId(): void;
  getSlotId(): ReferenceId | undefined;
  setSlotId(value?: ReferenceId): void;

  hasSpecimenId(): boolean;
  clearSpecimenId(): void;
  getSpecimenId(): ReferenceId | undefined;
  setSpecimenId(value?: ReferenceId): void;

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

  hasVisionPrescriptionId(): boolean;
  clearVisionPrescriptionId(): void;
  getVisionPrescriptionId(): ReferenceId | undefined;
  setVisionPrescriptionId(value?: ReferenceId): void;

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
    extension: Array<Extension.AsObject>,
    uri?: String.AsObject,
    fragment?: String.AsObject,
    accountId?: ReferenceId.AsObject,
    activityDefinitionId?: ReferenceId.AsObject,
    adverseEventId?: ReferenceId.AsObject,
    allergyIntoleranceId?: ReferenceId.AsObject,
    appointmentId?: ReferenceId.AsObject,
    appointmentResponseId?: ReferenceId.AsObject,
    auditEventId?: ReferenceId.AsObject,
    basicId?: ReferenceId.AsObject,
    binaryId?: ReferenceId.AsObject,
    bodySiteId?: ReferenceId.AsObject,
    bundleId?: ReferenceId.AsObject,
    capabilityStatementId?: ReferenceId.AsObject,
    carePlanId?: ReferenceId.AsObject,
    careTeamId?: ReferenceId.AsObject,
    chargeItemId?: ReferenceId.AsObject,
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
    dataElementId?: ReferenceId.AsObject,
    detectedIssueId?: ReferenceId.AsObject,
    deviceId?: ReferenceId.AsObject,
    deviceComponentId?: ReferenceId.AsObject,
    deviceMetricId?: ReferenceId.AsObject,
    deviceRequestId?: ReferenceId.AsObject,
    deviceUseStatementId?: ReferenceId.AsObject,
    diagnosticReportId?: ReferenceId.AsObject,
    documentManifestId?: ReferenceId.AsObject,
    documentReferenceId?: ReferenceId.AsObject,
    eligibilityRequestId?: ReferenceId.AsObject,
    eligibilityResponseId?: ReferenceId.AsObject,
    encounterId?: ReferenceId.AsObject,
    endpointId?: ReferenceId.AsObject,
    enrollmentRequestId?: ReferenceId.AsObject,
    enrollmentResponseId?: ReferenceId.AsObject,
    episodeOfCareId?: ReferenceId.AsObject,
    expansionProfileId?: ReferenceId.AsObject,
    explanationOfBenefitId?: ReferenceId.AsObject,
    familyMemberHistoryId?: ReferenceId.AsObject,
    flagId?: ReferenceId.AsObject,
    goalId?: ReferenceId.AsObject,
    graphDefinitionId?: ReferenceId.AsObject,
    groupId?: ReferenceId.AsObject,
    guidanceResponseId?: ReferenceId.AsObject,
    healthcareServiceId?: ReferenceId.AsObject,
    imagingManifestId?: ReferenceId.AsObject,
    imagingStudyId?: ReferenceId.AsObject,
    immunizationId?: ReferenceId.AsObject,
    immunizationRecommendationId?: ReferenceId.AsObject,
    implementationGuideId?: ReferenceId.AsObject,
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
    medicationRequestId?: ReferenceId.AsObject,
    medicationStatementId?: ReferenceId.AsObject,
    messageDefinitionId?: ReferenceId.AsObject,
    messageHeaderId?: ReferenceId.AsObject,
    namingSystemId?: ReferenceId.AsObject,
    nutritionOrderId?: ReferenceId.AsObject,
    observationId?: ReferenceId.AsObject,
    operationDefinitionId?: ReferenceId.AsObject,
    operationOutcomeId?: ReferenceId.AsObject,
    organizationId?: ReferenceId.AsObject,
    parametersId?: ReferenceId.AsObject,
    patientId?: ReferenceId.AsObject,
    paymentNoticeId?: ReferenceId.AsObject,
    paymentReconciliationId?: ReferenceId.AsObject,
    personId?: ReferenceId.AsObject,
    planDefinitionId?: ReferenceId.AsObject,
    practitionerId?: ReferenceId.AsObject,
    practitionerRoleId?: ReferenceId.AsObject,
    procedureId?: ReferenceId.AsObject,
    procedureRequestId?: ReferenceId.AsObject,
    processRequestId?: ReferenceId.AsObject,
    processResponseId?: ReferenceId.AsObject,
    provenanceId?: ReferenceId.AsObject,
    questionnaireId?: ReferenceId.AsObject,
    questionnaireResponseId?: ReferenceId.AsObject,
    referralRequestId?: ReferenceId.AsObject,
    relatedPersonId?: ReferenceId.AsObject,
    requestGroupId?: ReferenceId.AsObject,
    researchStudyId?: ReferenceId.AsObject,
    researchSubjectId?: ReferenceId.AsObject,
    riskAssessmentId?: ReferenceId.AsObject,
    scheduleId?: ReferenceId.AsObject,
    searchParameterId?: ReferenceId.AsObject,
    sequenceId?: ReferenceId.AsObject,
    serviceDefinitionId?: ReferenceId.AsObject,
    slotId?: ReferenceId.AsObject,
    specimenId?: ReferenceId.AsObject,
    structureDefinitionId?: ReferenceId.AsObject,
    structureMapId?: ReferenceId.AsObject,
    subscriptionId?: ReferenceId.AsObject,
    substanceId?: ReferenceId.AsObject,
    supplyDeliveryId?: ReferenceId.AsObject,
    supplyRequestId?: ReferenceId.AsObject,
    taskId?: ReferenceId.AsObject,
    testReportId?: ReferenceId.AsObject,
    testScriptId?: ReferenceId.AsObject,
    valueSetId?: ReferenceId.AsObject,
    visionPrescriptionId?: ReferenceId.AsObject,
    identifier?: Identifier.AsObject,
    display?: String.AsObject,
  }

  export enum ReferenceCase {
    REFERENCE_NOT_SET = 0,
    URI = 3,
    FRAGMENT = 4,
    ACCOUNT_ID = 5,
    ACTIVITY_DEFINITION_ID = 6,
    ADVERSE_EVENT_ID = 7,
    ALLERGY_INTOLERANCE_ID = 8,
    APPOINTMENT_ID = 9,
    APPOINTMENT_RESPONSE_ID = 10,
    AUDIT_EVENT_ID = 11,
    BASIC_ID = 12,
    BINARY_ID = 13,
    BODY_SITE_ID = 14,
    BUNDLE_ID = 15,
    CAPABILITY_STATEMENT_ID = 16,
    CARE_PLAN_ID = 17,
    CARE_TEAM_ID = 18,
    CHARGE_ITEM_ID = 19,
    CLAIM_ID = 20,
    CLAIM_RESPONSE_ID = 21,
    CLINICAL_IMPRESSION_ID = 22,
    CODE_SYSTEM_ID = 23,
    COMMUNICATION_ID = 24,
    COMMUNICATION_REQUEST_ID = 25,
    COMPARTMENT_DEFINITION_ID = 26,
    COMPOSITION_ID = 27,
    CONCEPT_MAP_ID = 28,
    CONDITION_ID = 29,
    CONSENT_ID = 30,
    CONTRACT_ID = 31,
    COVERAGE_ID = 32,
    DATA_ELEMENT_ID = 33,
    DETECTED_ISSUE_ID = 34,
    DEVICE_ID = 35,
    DEVICE_COMPONENT_ID = 36,
    DEVICE_METRIC_ID = 37,
    DEVICE_REQUEST_ID = 38,
    DEVICE_USE_STATEMENT_ID = 39,
    DIAGNOSTIC_REPORT_ID = 40,
    DOCUMENT_MANIFEST_ID = 41,
    DOCUMENT_REFERENCE_ID = 42,
    ELIGIBILITY_REQUEST_ID = 43,
    ELIGIBILITY_RESPONSE_ID = 44,
    ENCOUNTER_ID = 45,
    ENDPOINT_ID = 46,
    ENROLLMENT_REQUEST_ID = 47,
    ENROLLMENT_RESPONSE_ID = 48,
    EPISODE_OF_CARE_ID = 49,
    EXPANSION_PROFILE_ID = 50,
    EXPLANATION_OF_BENEFIT_ID = 51,
    FAMILY_MEMBER_HISTORY_ID = 52,
    FLAG_ID = 53,
    GOAL_ID = 54,
    GRAPH_DEFINITION_ID = 55,
    GROUP_ID = 56,
    GUIDANCE_RESPONSE_ID = 57,
    HEALTHCARE_SERVICE_ID = 58,
    IMAGING_MANIFEST_ID = 59,
    IMAGING_STUDY_ID = 60,
    IMMUNIZATION_ID = 61,
    IMMUNIZATION_RECOMMENDATION_ID = 62,
    IMPLEMENTATION_GUIDE_ID = 63,
    LIBRARY_ID = 64,
    LINKAGE_ID = 65,
    LIST_ID = 66,
    LOCATION_ID = 67,
    MEASURE_ID = 68,
    MEASURE_REPORT_ID = 69,
    MEDIA_ID = 70,
    MEDICATION_ID = 71,
    MEDICATION_ADMINISTRATION_ID = 72,
    MEDICATION_DISPENSE_ID = 73,
    MEDICATION_REQUEST_ID = 74,
    MEDICATION_STATEMENT_ID = 75,
    MESSAGE_DEFINITION_ID = 76,
    MESSAGE_HEADER_ID = 77,
    NAMING_SYSTEM_ID = 78,
    NUTRITION_ORDER_ID = 79,
    OBSERVATION_ID = 80,
    OPERATION_DEFINITION_ID = 81,
    OPERATION_OUTCOME_ID = 82,
    ORGANIZATION_ID = 83,
    PARAMETERS_ID = 84,
    PATIENT_ID = 85,
    PAYMENT_NOTICE_ID = 86,
    PAYMENT_RECONCILIATION_ID = 87,
    PERSON_ID = 88,
    PLAN_DEFINITION_ID = 89,
    PRACTITIONER_ID = 90,
    PRACTITIONER_ROLE_ID = 91,
    PROCEDURE_ID = 92,
    PROCEDURE_REQUEST_ID = 93,
    PROCESS_REQUEST_ID = 94,
    PROCESS_RESPONSE_ID = 95,
    PROVENANCE_ID = 96,
    QUESTIONNAIRE_ID = 97,
    QUESTIONNAIRE_RESPONSE_ID = 98,
    REFERRAL_REQUEST_ID = 99,
    RELATED_PERSON_ID = 100,
    REQUEST_GROUP_ID = 101,
    RESEARCH_STUDY_ID = 102,
    RESEARCH_SUBJECT_ID = 103,
    RISK_ASSESSMENT_ID = 104,
    SCHEDULE_ID = 105,
    SEARCH_PARAMETER_ID = 106,
    SEQUENCE_ID = 107,
    SERVICE_DEFINITION_ID = 108,
    SLOT_ID = 109,
    SPECIMEN_ID = 110,
    STRUCTURE_DEFINITION_ID = 111,
    STRUCTURE_MAP_ID = 112,
    SUBSCRIPTION_ID = 113,
    SUBSTANCE_ID = 114,
    SUPPLY_DELIVERY_ID = 115,
    SUPPLY_REQUEST_ID = 116,
    TASK_ID = 117,
    TEST_REPORT_ID = 118,
    TEST_SCRIPT_ID = 119,
    VALUE_SET_ID = 120,
    VISION_PRESCRIPTION_ID = 121,
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

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
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
    extension: Array<Extension.AsObject>,
  }
}

export class AddressTypeCode extends jspb.Message {
  getValue(): AddressTypeCode.ValueMap[keyof AddressTypeCode.ValueMap];
  setValue(value: AddressTypeCode.ValueMap[keyof AddressTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressTypeCode): AddressTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressTypeCode;
  static deserializeBinaryFromReader(message: AddressTypeCode, reader: jspb.BinaryReader): AddressTypeCode;
}

export namespace AddressTypeCode {
  export type AsObject = {
    value: AddressTypeCode.ValueMap[keyof AddressTypeCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    POSTAL: 1;
    PHYSICAL: 2;
    BOTH: 3;
  }

  export const Value: ValueMap;
}

export class AddressUseCode extends jspb.Message {
  getValue(): AddressUseCode.ValueMap[keyof AddressUseCode.ValueMap];
  setValue(value: AddressUseCode.ValueMap[keyof AddressUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressUseCode): AddressUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressUseCode;
  static deserializeBinaryFromReader(message: AddressUseCode, reader: jspb.BinaryReader): AddressUseCode;
}

export namespace AddressUseCode {
  export type AsObject = {
    value: AddressUseCode.ValueMap[keyof AddressUseCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOME: 1;
    WORK: 2;
    TEMP: 3;
    OLD: 4;
  }

  export const Value: ValueMap;
}

export class ContactPointSystemCode extends jspb.Message {
  getValue(): ContactPointSystemCode.ValueMap[keyof ContactPointSystemCode.ValueMap];
  setValue(value: ContactPointSystemCode.ValueMap[keyof ContactPointSystemCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointSystemCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointSystemCode): ContactPointSystemCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointSystemCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointSystemCode;
  static deserializeBinaryFromReader(message: ContactPointSystemCode, reader: jspb.BinaryReader): ContactPointSystemCode;
}

export namespace ContactPointSystemCode {
  export type AsObject = {
    value: ContactPointSystemCode.ValueMap[keyof ContactPointSystemCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PHONE: 1;
    FAX: 2;
    EMAIL: 3;
    PAGER: 4;
    URL: 5;
    SMS: 6;
    OTHER: 7;
  }

  export const Value: ValueMap;
}

export class ContactPointUseCode extends jspb.Message {
  getValue(): ContactPointUseCode.ValueMap[keyof ContactPointUseCode.ValueMap];
  setValue(value: ContactPointUseCode.ValueMap[keyof ContactPointUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointUseCode): ContactPointUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointUseCode;
  static deserializeBinaryFromReader(message: ContactPointUseCode, reader: jspb.BinaryReader): ContactPointUseCode;
}

export namespace ContactPointUseCode {
  export type AsObject = {
    value: ContactPointUseCode.ValueMap[keyof ContactPointUseCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOME: 1;
    WORK: 2;
    TEMP: 3;
    OLD: 4;
    MOBILE: 5;
  }

  export const Value: ValueMap;
}

export class DaysOfWeekCode extends jspb.Message {
  getValue(): DaysOfWeekCode.ValueMap[keyof DaysOfWeekCode.ValueMap];
  setValue(value: DaysOfWeekCode.ValueMap[keyof DaysOfWeekCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaysOfWeekCode.AsObject;
  static toObject(includeInstance: boolean, msg: DaysOfWeekCode): DaysOfWeekCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DaysOfWeekCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaysOfWeekCode;
  static deserializeBinaryFromReader(message: DaysOfWeekCode, reader: jspb.BinaryReader): DaysOfWeekCode;
}

export namespace DaysOfWeekCode {
  export type AsObject = {
    value: DaysOfWeekCode.ValueMap[keyof DaysOfWeekCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MON: 1;
    TUE: 2;
    WED: 3;
    THU: 4;
    FRI: 5;
    SAT: 6;
    SUN: 7;
  }

  export const Value: ValueMap;
}

export class EventTimingCode extends jspb.Message {
  getValue(): EventTimingCode.ValueMap[keyof EventTimingCode.ValueMap];
  setValue(value: EventTimingCode.ValueMap[keyof EventTimingCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTimingCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventTimingCode): EventTimingCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTimingCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTimingCode;
  static deserializeBinaryFromReader(message: EventTimingCode, reader: jspb.BinaryReader): EventTimingCode;
}

export namespace EventTimingCode {
  export type AsObject = {
    value: EventTimingCode.ValueMap[keyof EventTimingCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MORN: 1;
    AFT: 2;
    EVE: 3;
    NIGHT: 4;
    PHS: 5;
    HS: 6;
    WAKE: 7;
    C: 8;
    CM: 9;
    CD: 10;
    CV: 11;
    AC: 12;
    ACM: 13;
    ACD: 14;
    ACV: 15;
    PC: 16;
    PCM: 17;
    PCD: 18;
    PCV: 19;
  }

  export const Value: ValueMap;
}

export class IdentifierUseCode extends jspb.Message {
  getValue(): IdentifierUseCode.ValueMap[keyof IdentifierUseCode.ValueMap];
  setValue(value: IdentifierUseCode.ValueMap[keyof IdentifierUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifierUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifierUseCode): IdentifierUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifierUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifierUseCode;
  static deserializeBinaryFromReader(message: IdentifierUseCode, reader: jspb.BinaryReader): IdentifierUseCode;
}

export namespace IdentifierUseCode {
  export type AsObject = {
    value: IdentifierUseCode.ValueMap[keyof IdentifierUseCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    USUAL: 1;
    OFFICIAL: 2;
    TEMP: 3;
    SECONDARY: 4;
  }

  export const Value: ValueMap;
}

export class AllLanguageCode extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllLanguageCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllLanguageCode): AllLanguageCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllLanguageCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllLanguageCode;
  static deserializeBinaryFromReader(message: AllLanguageCode, reader: jspb.BinaryReader): AllLanguageCode;
}

export namespace AllLanguageCode {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }
}

export class LanguageCode extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

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
    value: string,
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }
}

export class MimeTypeCode extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimeTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MimeTypeCode): MimeTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimeTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimeTypeCode;
  static deserializeBinaryFromReader(message: MimeTypeCode, reader: jspb.BinaryReader): MimeTypeCode;
}

export namespace MimeTypeCode {
  export type AsObject = {
    value: string,
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }
}

export class NameUseCode extends jspb.Message {
  getValue(): NameUseCode.ValueMap[keyof NameUseCode.ValueMap];
  setValue(value: NameUseCode.ValueMap[keyof NameUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: NameUseCode): NameUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameUseCode;
  static deserializeBinaryFromReader(message: NameUseCode, reader: jspb.BinaryReader): NameUseCode;
}

export namespace NameUseCode {
  export type AsObject = {
    value: NameUseCode.ValueMap[keyof NameUseCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    USUAL: 1;
    OFFICIAL: 2;
    TEMP: 3;
    NICKNAME: 4;
    ANONYMOUS: 5;
    OLD: 6;
    MAIDEN: 7;
  }

  export const Value: ValueMap;
}

export class QuantityComparatorCode extends jspb.Message {
  getValue(): QuantityComparatorCode.ValueMap[keyof QuantityComparatorCode.ValueMap];
  setValue(value: QuantityComparatorCode.ValueMap[keyof QuantityComparatorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityComparatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityComparatorCode): QuantityComparatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityComparatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityComparatorCode;
  static deserializeBinaryFromReader(message: QuantityComparatorCode, reader: jspb.BinaryReader): QuantityComparatorCode;
}

export namespace QuantityComparatorCode {
  export type AsObject = {
    value: QuantityComparatorCode.ValueMap[keyof QuantityComparatorCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LT: 1;
    LE: 2;
    GE: 3;
    GT: 4;
  }

  export const Value: ValueMap;
}

export class UnitsOfTimeCode extends jspb.Message {
  getValue(): UnitsOfTimeCode.ValueMap[keyof UnitsOfTimeCode.ValueMap];
  setValue(value: UnitsOfTimeCode.ValueMap[keyof UnitsOfTimeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): String | undefined;
  setId(value?: String): void;

  clearExtension(): void;
  getExtension(): Array<Extension>;
  setExtension(value: Array<Extension>): void;
  addExtension(value?: Extension, index?: number): Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnitsOfTimeCode.AsObject;
  static toObject(includeInstance: boolean, msg: UnitsOfTimeCode): UnitsOfTimeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnitsOfTimeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnitsOfTimeCode;
  static deserializeBinaryFromReader(message: UnitsOfTimeCode, reader: jspb.BinaryReader): UnitsOfTimeCode;
}

export namespace UnitsOfTimeCode {
  export type AsObject = {
    value: UnitsOfTimeCode.ValueMap[keyof UnitsOfTimeCode.ValueMap],
    id?: String.AsObject,
    extension: Array<Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    S: 1;
    MIN: 2;
    H: 3;
    D: 4;
    WK: 5;
    MO: 6;
    A: 7;
  }

  export const Value: ValueMap;
}

