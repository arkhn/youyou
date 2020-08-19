// package: google.fhir.r4.core
// file: proto/r4/core/resources/risk_assessment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class RiskAssessment extends jspb.Message {
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

  hasBasedOn(): boolean;
  clearBasedOn(): void;
  getBasedOn(): proto_r4_core_datatypes_pb.Reference | undefined;
  setBasedOn(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParent(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): RiskAssessment.StatusCode | undefined;
  setStatus(value?: RiskAssessment.StatusCode): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): RiskAssessment.OccurrenceX | undefined;
  setOccurrence(value?: RiskAssessment.OccurrenceX): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCondition(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBasis(): void;
  getBasis(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasis(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasis(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPrediction(): void;
  getPrediction(): Array<RiskAssessment.Prediction>;
  setPrediction(value: Array<RiskAssessment.Prediction>): void;
  addPrediction(value?: RiskAssessment.Prediction, index?: number): RiskAssessment.Prediction;

  hasMitigation(): boolean;
  clearMitigation(): void;
  getMitigation(): proto_r4_core_datatypes_pb.String | undefined;
  setMitigation(value?: proto_r4_core_datatypes_pb.String): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskAssessment.AsObject;
  static toObject(includeInstance: boolean, msg: RiskAssessment): RiskAssessment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiskAssessment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskAssessment;
  static deserializeBinaryFromReader(message: RiskAssessment, reader: jspb.BinaryReader): RiskAssessment;
}

export namespace RiskAssessment {
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
    basedOn?: proto_r4_core_datatypes_pb.Reference.AsObject,
    parent?: proto_r4_core_datatypes_pb.Reference.AsObject,
    status?: RiskAssessment.StatusCode.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: RiskAssessment.OccurrenceX.AsObject,
    condition?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    basis: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    prediction: Array<RiskAssessment.Prediction.AsObject>,
    mitigation?: proto_r4_core_datatypes_pb.String.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OccurrenceX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): OccurrenceX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OccurrenceX.AsObject;
    static toObject(includeInstance: boolean, msg: OccurrenceX): OccurrenceX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OccurrenceX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OccurrenceX;
    static deserializeBinaryFromReader(message: OccurrenceX, reader: jspb.BinaryReader): OccurrenceX;
  }

  export namespace OccurrenceX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Prediction extends jspb.Message {
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

    hasOutcome(): boolean;
    clearOutcome(): void;
    getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasProbability(): boolean;
    clearProbability(): void;
    getProbability(): RiskAssessment.Prediction.ProbabilityX | undefined;
    setProbability(value?: RiskAssessment.Prediction.ProbabilityX): void;

    hasQualitativeRisk(): boolean;
    clearQualitativeRisk(): void;
    getQualitativeRisk(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setQualitativeRisk(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRelativeRisk(): boolean;
    clearRelativeRisk(): void;
    getRelativeRisk(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setRelativeRisk(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasWhen(): boolean;
    clearWhen(): void;
    getWhen(): RiskAssessment.Prediction.WhenX | undefined;
    setWhen(value?: RiskAssessment.Prediction.WhenX): void;

    hasRationale(): boolean;
    clearRationale(): void;
    getRationale(): proto_r4_core_datatypes_pb.String | undefined;
    setRationale(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Prediction.AsObject;
    static toObject(includeInstance: boolean, msg: Prediction): Prediction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Prediction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Prediction;
    static deserializeBinaryFromReader(message: Prediction, reader: jspb.BinaryReader): Prediction;
  }

  export namespace Prediction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      probability?: RiskAssessment.Prediction.ProbabilityX.AsObject,
      qualitativeRisk?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      relativeRisk?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      when?: RiskAssessment.Prediction.WhenX.AsObject,
      rationale?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class ProbabilityX extends jspb.Message {
      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      getChoiceCase(): ProbabilityX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ProbabilityX.AsObject;
      static toObject(includeInstance: boolean, msg: ProbabilityX): ProbabilityX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ProbabilityX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ProbabilityX;
      static deserializeBinaryFromReader(message: ProbabilityX, reader: jspb.BinaryReader): ProbabilityX;
    }

    export namespace ProbabilityX {
      export type AsObject = {
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DECIMAL = 1,
        RANGE = 2,
      }
    }

    export class WhenX extends jspb.Message {
      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      getChoiceCase(): WhenX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WhenX.AsObject;
      static toObject(includeInstance: boolean, msg: WhenX): WhenX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: WhenX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WhenX;
      static deserializeBinaryFromReader(message: WhenX, reader: jspb.BinaryReader): WhenX;
    }

    export namespace WhenX {
      export type AsObject = {
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        PERIOD = 1,
        RANGE = 2,
      }
    }
  }
}

