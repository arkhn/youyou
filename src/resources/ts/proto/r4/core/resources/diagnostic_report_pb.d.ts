// package: google.fhir.r4.core
// file: proto/r4/core/resources/diagnostic_report.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class DiagnosticReport extends jspb.Message {
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

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DiagnosticReport.StatusCode | undefined;
  setStatus(value?: DiagnosticReport.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): DiagnosticReport.EffectiveX | undefined;
  setEffective(value?: DiagnosticReport.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultsInterpreter(): void;
  getResultsInterpreter(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultsInterpreter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultsInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResult(): void;
  getResult(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResult(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResult(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMedia(): void;
  getMedia(): Array<DiagnosticReport.Media>;
  setMedia(value: Array<DiagnosticReport.Media>): void;
  addMedia(value?: DiagnosticReport.Media, index?: number): DiagnosticReport.Media;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_r4_core_datatypes_pb.String | undefined;
  setConclusion(value?: proto_r4_core_datatypes_pb.String): void;

  clearConclusionCode(): void;
  getConclusionCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConclusionCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addConclusionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReport.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReport): DiagnosticReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReport;
  static deserializeBinaryFromReader(message: DiagnosticReport, reader: jspb.BinaryReader): DiagnosticReport;
}

export namespace DiagnosticReport {
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
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: DiagnosticReport.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: DiagnosticReport.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultsInterpreter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimen: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    result: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    imagingStudy: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    media: Array<DiagnosticReport.Media.AsObject>,
    conclusion?: proto_r4_core_datatypes_pb.String.AsObject,
    conclusionCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    presentedForm: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class Media extends jspb.Message {
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

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLink(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Media.AsObject;
    static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Media;
    static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
  }

  export namespace Media {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      link?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

