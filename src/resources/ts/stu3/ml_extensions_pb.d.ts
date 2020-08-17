// package: google.fhir.stu3.ml
// file: proto/stu3/ml_extensions.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class EventLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_stu3_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_stu3_datatypes_pb.Reference): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.Coding | undefined;
  setType(value?: proto_stu3_datatypes_pb.Coding): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setEventTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_stu3_datatypes_pb.Reference | undefined;
  setSource(value?: proto_stu3_datatypes_pb.Reference): void;

  clearLabelList(): void;
  getLabelList(): Array<EventLabel.Label>;
  setLabelList(value: Array<EventLabel.Label>): void;
  addLabel(value?: EventLabel.Label, index?: number): EventLabel.Label;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventLabel.AsObject;
  static toObject(includeInstance: boolean, msg: EventLabel): EventLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventLabel;
  static deserializeBinaryFromReader(message: EventLabel, reader: jspb.BinaryReader): EventLabel;
}

export namespace EventLabel {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    patient?: proto_stu3_datatypes_pb.Reference.AsObject,
    type?: proto_stu3_datatypes_pb.Coding.AsObject,
    eventTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
    source?: proto_stu3_datatypes_pb.Reference.AsObject,
    labelList: Array<EventLabel.Label.AsObject>,
  }

  export class Label extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    hasClassName(): boolean;
    clearClassName(): void;
    getClassName(): proto_stu3_datatypes_pb.Coding | undefined;
    setClassName(value?: proto_stu3_datatypes_pb.Coding): void;

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): EventLabel.Label.ClassValue | undefined;
    setClassValue(value?: EventLabel.Label.ClassValue): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Label.AsObject;
    static toObject(includeInstance: boolean, msg: Label): Label.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Label, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Label;
    static deserializeBinaryFromReader(message: Label, reader: jspb.BinaryReader): Label;
  }

  export namespace Label {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      className?: proto_stu3_datatypes_pb.Coding.AsObject,
      classValue?: EventLabel.Label.ClassValue.AsObject,
    }

    export class ClassValue extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      getClassValueCase(): ClassValue.ClassValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ClassValue.AsObject;
      static toObject(includeInstance: boolean, msg: ClassValue): ClassValue.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ClassValue, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ClassValue;
      static deserializeBinaryFromReader(message: ClassValue, reader: jspb.BinaryReader): ClassValue;
    }

    export namespace ClassValue {
      export type AsObject = {
        pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
        decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
        integer?: proto_stu3_datatypes_pb.Integer.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      }

      export enum ClassValueCase {
        CLASS_VALUE_NOT_SET = 0,
        BOOLEAN = 1,
        DECIMAL = 2,
        INTEGER = 3,
        STRING_VALUE = 4,
        DATE_TIME = 5,
      }
    }
  }
}

export class EventTrigger extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.Coding | undefined;
  setType(value?: proto_stu3_datatypes_pb.Coding): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setEventTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_stu3_datatypes_pb.Reference | undefined;
  setSource(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventTrigger.AsObject;
  static toObject(includeInstance: boolean, msg: EventTrigger): EventTrigger.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventTrigger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventTrigger;
  static deserializeBinaryFromReader(message: EventTrigger, reader: jspb.BinaryReader): EventTrigger;
}

export namespace EventTrigger {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    type?: proto_stu3_datatypes_pb.Coding.AsObject,
    eventTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
    source?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

