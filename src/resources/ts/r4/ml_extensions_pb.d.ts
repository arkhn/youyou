// package: google.fhir.r4.ml
// file: proto/r4/ml_extensions.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../proto/r4/core/datatypes_pb";

export class EventLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.Coding | undefined;
  setType(value?: proto_r4_core_datatypes_pb.Coding): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setEventTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearLabel(): void;
  getLabel(): Array<EventLabel.Label>;
  setLabel(value: Array<EventLabel.Label>): void;
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
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    type?: proto_r4_core_datatypes_pb.Coding.AsObject,
    eventTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    source?: proto_r4_core_datatypes_pb.Reference.AsObject,
    label: Array<EventLabel.Label.AsObject>,
  }

  export class Label extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    hasClassName(): boolean;
    clearClassName(): void;
    getClassName(): proto_r4_core_datatypes_pb.Coding | undefined;
    setClassName(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): EventLabel.Label.ClassValueX | undefined;
    setClassValue(value?: EventLabel.Label.ClassValueX): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      className?: proto_r4_core_datatypes_pb.Coding.AsObject,
      classValue?: EventLabel.Label.ClassValueX.AsObject,
    }

    export class ClassValueX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      getChoiceCase(): ClassValueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ClassValueX.AsObject;
      static toObject(includeInstance: boolean, msg: ClassValueX): ClassValueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ClassValueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ClassValueX;
      static deserializeBinaryFromReader(message: ClassValueX, reader: jspb.BinaryReader): ClassValueX;
    }

    export namespace ClassValueX {
      export type AsObject = {
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
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
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.Coding | undefined;
  setType(value?: proto_r4_core_datatypes_pb.Coding): void;

  hasEventTime(): boolean;
  clearEventTime(): void;
  getEventTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setEventTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

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
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.Coding.AsObject,
    eventTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    source?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

