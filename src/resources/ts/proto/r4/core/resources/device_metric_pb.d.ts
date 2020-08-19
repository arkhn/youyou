// package: google.fhir.r4.core
// file: proto/r4/core/resources/device_metric.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class DeviceMetric extends jspb.Message {
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

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasUnit(): boolean;
  clearUnit(): void;
  getUnit(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setUnit(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParent(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOperationalStatus(): boolean;
  clearOperationalStatus(): void;
  getOperationalStatus(): DeviceMetric.OperationalStatusCode | undefined;
  setOperationalStatus(value?: DeviceMetric.OperationalStatusCode): void;

  hasColor(): boolean;
  clearColor(): void;
  getColor(): DeviceMetric.ColorCode | undefined;
  setColor(value?: DeviceMetric.ColorCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): DeviceMetric.CategoryCode | undefined;
  setCategory(value?: DeviceMetric.CategoryCode): void;

  hasMeasurementPeriod(): boolean;
  clearMeasurementPeriod(): void;
  getMeasurementPeriod(): proto_r4_core_datatypes_pb.Timing | undefined;
  setMeasurementPeriod(value?: proto_r4_core_datatypes_pb.Timing): void;

  clearCalibration(): void;
  getCalibration(): Array<DeviceMetric.Calibration>;
  setCalibration(value: Array<DeviceMetric.Calibration>): void;
  addCalibration(value?: DeviceMetric.Calibration, index?: number): DeviceMetric.Calibration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetric.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetric): DeviceMetric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetric;
  static deserializeBinaryFromReader(message: DeviceMetric, reader: jspb.BinaryReader): DeviceMetric;
}

export namespace DeviceMetric {
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
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    unit?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    source?: proto_r4_core_datatypes_pb.Reference.AsObject,
    parent?: proto_r4_core_datatypes_pb.Reference.AsObject,
    operationalStatus?: DeviceMetric.OperationalStatusCode.AsObject,
    color?: DeviceMetric.ColorCode.AsObject,
    category?: DeviceMetric.CategoryCode.AsObject,
    measurementPeriod?: proto_r4_core_datatypes_pb.Timing.AsObject,
    calibration: Array<DeviceMetric.Calibration.AsObject>,
  }

  export class OperationalStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OperationalStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: OperationalStatusCode): OperationalStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OperationalStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OperationalStatusCode;
    static deserializeBinaryFromReader(message: OperationalStatusCode, reader: jspb.BinaryReader): OperationalStatusCode;
  }

  export namespace OperationalStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricOperationalStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ColorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ColorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ColorCode): ColorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ColorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ColorCode;
    static deserializeBinaryFromReader(message: ColorCode, reader: jspb.BinaryReader): ColorCode;
  }

  export namespace ColorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricColorCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryCode.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryCode): CategoryCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryCode;
    static deserializeBinaryFromReader(message: CategoryCode, reader: jspb.BinaryReader): CategoryCode;
  }

  export namespace CategoryCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Calibration extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): DeviceMetric.Calibration.TypeCode | undefined;
    setType(value?: DeviceMetric.Calibration.TypeCode): void;

    hasState(): boolean;
    clearState(): void;
    getState(): DeviceMetric.Calibration.StateCode | undefined;
    setState(value?: DeviceMetric.Calibration.StateCode): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Instant | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Instant): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Calibration.AsObject;
    static toObject(includeInstance: boolean, msg: Calibration): Calibration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Calibration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Calibration;
    static deserializeBinaryFromReader(message: Calibration, reader: jspb.BinaryReader): Calibration;
  }

  export namespace Calibration {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: DeviceMetric.Calibration.TypeCode.AsObject,
      state?: DeviceMetric.Calibration.StateCode.AsObject,
      time?: proto_r4_core_datatypes_pb.Instant.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
        value: proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class StateCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StateCode.AsObject;
      static toObject(includeInstance: boolean, msg: StateCode): StateCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StateCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StateCode;
      static deserializeBinaryFromReader(message: StateCode, reader: jspb.BinaryReader): StateCode;
    }

    export namespace StateCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceMetricCalibrationStateCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

