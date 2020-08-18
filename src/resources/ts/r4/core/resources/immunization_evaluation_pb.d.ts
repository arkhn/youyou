// package: google.fhir.r4.core
// file: proto/r4/core/resources/immunization_evaluation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class ImmunizationEvaluation extends jspb.Message {
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
  getStatus(): ImmunizationEvaluation.StatusCode | undefined;
  setStatus(value?: ImmunizationEvaluation.StatusCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthority(): boolean;
  clearAuthority(): void;
  getAuthority(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthority(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasTargetDisease(): boolean;
  clearTargetDisease(): void;
  getTargetDisease(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setTargetDisease(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasImmunizationEvent(): boolean;
  clearImmunizationEvent(): void;
  getImmunizationEvent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setImmunizationEvent(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDoseStatus(): boolean;
  clearDoseStatus(): void;
  getDoseStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDoseStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearDoseStatusReason(): void;
  getDoseStatusReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setDoseStatusReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addDoseStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasSeries(): boolean;
  clearSeries(): void;
  getSeries(): proto_r4_core_datatypes_pb.String | undefined;
  setSeries(value?: proto_r4_core_datatypes_pb.String): void;

  hasDoseNumber(): boolean;
  clearDoseNumber(): void;
  getDoseNumber(): ImmunizationEvaluation.DoseNumberX | undefined;
  setDoseNumber(value?: ImmunizationEvaluation.DoseNumberX): void;

  hasSeriesDoses(): boolean;
  clearSeriesDoses(): void;
  getSeriesDoses(): ImmunizationEvaluation.SeriesDosesX | undefined;
  setSeriesDoses(value?: ImmunizationEvaluation.SeriesDosesX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationEvaluation.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationEvaluation): ImmunizationEvaluation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationEvaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationEvaluation;
  static deserializeBinaryFromReader(message: ImmunizationEvaluation, reader: jspb.BinaryReader): ImmunizationEvaluation;
}

export namespace ImmunizationEvaluation {
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
    status?: ImmunizationEvaluation.StatusCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    authority?: proto_r4_core_datatypes_pb.Reference.AsObject,
    targetDisease?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    immunizationEvent?: proto_r4_core_datatypes_pb.Reference.AsObject,
    doseStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    doseStatusReason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    series?: proto_r4_core_datatypes_pb.String.AsObject,
    doseNumber?: ImmunizationEvaluation.DoseNumberX.AsObject,
    seriesDoses?: ImmunizationEvaluation.SeriesDosesX.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap]): void;

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
      value: proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DoseNumberX extends jspb.Message {
    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): DoseNumberX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoseNumberX.AsObject;
    static toObject(includeInstance: boolean, msg: DoseNumberX): DoseNumberX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoseNumberX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoseNumberX;
    static deserializeBinaryFromReader(message: DoseNumberX, reader: jspb.BinaryReader): DoseNumberX;
  }

  export namespace DoseNumberX {
    export type AsObject = {
      positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      POSITIVE_INT = 1,
      STRING_VALUE = 2,
    }
  }

  export class SeriesDosesX extends jspb.Message {
    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): SeriesDosesX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SeriesDosesX.AsObject;
    static toObject(includeInstance: boolean, msg: SeriesDosesX): SeriesDosesX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SeriesDosesX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SeriesDosesX;
    static deserializeBinaryFromReader(message: SeriesDosesX, reader: jspb.BinaryReader): SeriesDosesX;
  }

  export namespace SeriesDosesX {
    export type AsObject = {
      positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      POSITIVE_INT = 1,
      STRING_VALUE = 2,
    }
  }
}

