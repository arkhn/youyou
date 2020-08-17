// package: google.fhir.r4.core
// file: proto/r4/core/resources/immunization_recommendation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ImmunizationRecommendation extends jspb.Message {
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

  clearContainedList(): void;
  getContainedList(): Array<google_protobuf_any_pb.Any>;
  setContainedList(value: Array<google_protobuf_any_pb.Any>): void;
  addContained(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

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

  clearRecommendationList(): void;
  getRecommendationList(): Array<ImmunizationRecommendation.Recommendation>;
  setRecommendationList(value: Array<ImmunizationRecommendation.Recommendation>): void;
  addRecommendation(value?: ImmunizationRecommendation.Recommendation, index?: number): ImmunizationRecommendation.Recommendation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationRecommendation.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationRecommendation): ImmunizationRecommendation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationRecommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationRecommendation;
  static deserializeBinaryFromReader(message: ImmunizationRecommendation, reader: jspb.BinaryReader): ImmunizationRecommendation;
}

export namespace ImmunizationRecommendation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    authority?: proto_r4_core_datatypes_pb.Reference.AsObject,
    recommendationList: Array<ImmunizationRecommendation.Recommendation.AsObject>,
  }

  export class Recommendation extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearVaccineCodeList(): void;
    getVaccineCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setVaccineCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addVaccineCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasTargetDisease(): boolean;
    clearTargetDisease(): void;
    getTargetDisease(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setTargetDisease(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearContraindicatedVaccineCodeList(): void;
    getContraindicatedVaccineCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setContraindicatedVaccineCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addContraindicatedVaccineCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasForecastStatus(): boolean;
    clearForecastStatus(): void;
    getForecastStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setForecastStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearForecastReasonList(): void;
    getForecastReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setForecastReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addForecastReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDateCriterionList(): void;
    getDateCriterionList(): Array<ImmunizationRecommendation.Recommendation.DateCriterion>;
    setDateCriterionList(value: Array<ImmunizationRecommendation.Recommendation.DateCriterion>): void;
    addDateCriterion(value?: ImmunizationRecommendation.Recommendation.DateCriterion, index?: number): ImmunizationRecommendation.Recommendation.DateCriterion;

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
    getDoseNumber(): ImmunizationRecommendation.Recommendation.DoseNumberX | undefined;
    setDoseNumber(value?: ImmunizationRecommendation.Recommendation.DoseNumberX): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): ImmunizationRecommendation.Recommendation.SeriesDosesX | undefined;
    setSeriesDoses(value?: ImmunizationRecommendation.Recommendation.SeriesDosesX): void;

    clearSupportingImmunizationList(): void;
    getSupportingImmunizationList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSupportingImmunizationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSupportingImmunization(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearSupportingPatientInformationList(): void;
    getSupportingPatientInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSupportingPatientInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSupportingPatientInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Recommendation.AsObject;
    static toObject(includeInstance: boolean, msg: Recommendation): Recommendation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Recommendation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Recommendation;
    static deserializeBinaryFromReader(message: Recommendation, reader: jspb.BinaryReader): Recommendation;
  }

  export namespace Recommendation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      vaccineCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      targetDisease?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      contraindicatedVaccineCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      forecastStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      forecastReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      dateCriterionList: Array<ImmunizationRecommendation.Recommendation.DateCriterion.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      series?: proto_r4_core_datatypes_pb.String.AsObject,
      doseNumber?: ImmunizationRecommendation.Recommendation.DoseNumberX.AsObject,
      seriesDoses?: ImmunizationRecommendation.Recommendation.SeriesDosesX.AsObject,
      supportingImmunizationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      supportingPatientInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class DateCriterion extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setValue(value?: proto_r4_core_datatypes_pb.DateTime): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DateCriterion.AsObject;
      static toObject(includeInstance: boolean, msg: DateCriterion): DateCriterion.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DateCriterion, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DateCriterion;
      static deserializeBinaryFromReader(message: DateCriterion, reader: jspb.BinaryReader): DateCriterion;
    }

    export namespace DateCriterion {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        value?: proto_r4_core_datatypes_pb.DateTime.AsObject,
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
}

