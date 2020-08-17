// package: google.fhir.r4.core
// file: proto/r4/core/resources/clinical_impression.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class ClinicalImpression extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ClinicalImpression.StatusCode | undefined;
  setStatus(value?: ClinicalImpression.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

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
  getEffective(): ClinicalImpression.EffectiveX | undefined;
  setEffective(value?: ClinicalImpression.EffectiveX): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAssessor(): boolean;
  clearAssessor(): void;
  getAssessor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAssessor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPrevious(): boolean;
  clearPrevious(): void;
  getPrevious(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPrevious(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearProblemList(): void;
  getProblemList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setProblemList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addProblem(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInvestigationList(): void;
  getInvestigationList(): Array<ClinicalImpression.Investigation>;
  setInvestigationList(value: Array<ClinicalImpression.Investigation>): void;
  addInvestigation(value?: ClinicalImpression.Investigation, index?: number): ClinicalImpression.Investigation;

  clearProtocolList(): void;
  getProtocolList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setProtocolList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addProtocol(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasSummary(): boolean;
  clearSummary(): void;
  getSummary(): proto_r4_core_datatypes_pb.String | undefined;
  setSummary(value?: proto_r4_core_datatypes_pb.String): void;

  clearFindingList(): void;
  getFindingList(): Array<ClinicalImpression.Finding>;
  setFindingList(value: Array<ClinicalImpression.Finding>): void;
  addFinding(value?: ClinicalImpression.Finding, index?: number): ClinicalImpression.Finding;

  clearPrognosisCodeableConceptList(): void;
  getPrognosisCodeableConceptList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setPrognosisCodeableConceptList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addPrognosisCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPrognosisReferenceList(): void;
  getPrognosisReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPrognosisReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPrognosisReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClinicalImpression.AsObject;
  static toObject(includeInstance: boolean, msg: ClinicalImpression): ClinicalImpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClinicalImpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClinicalImpression;
  static deserializeBinaryFromReader(message: ClinicalImpression, reader: jspb.BinaryReader): ClinicalImpression;
}

export namespace ClinicalImpression {
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
    status?: ClinicalImpression.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: ClinicalImpression.EffectiveX.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    assessor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    previous?: proto_r4_core_datatypes_pb.Reference.AsObject,
    problemList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    investigationList: Array<ClinicalImpression.Investigation.AsObject>,
    protocolList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    summary?: proto_r4_core_datatypes_pb.String.AsObject,
    findingList: Array<ClinicalImpression.Finding.AsObject>,
    prognosisCodeableConceptList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    prognosisReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfoList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap]): void;

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
      value: proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ClinicalImpressionStatusValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

  export class Investigation extends jspb.Message {
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

    clearItemList(): void;
    getItemList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setItemList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addItem(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Investigation.AsObject;
    static toObject(includeInstance: boolean, msg: Investigation): Investigation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Investigation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Investigation;
    static deserializeBinaryFromReader(message: Investigation, reader: jspb.BinaryReader): Investigation;
  }

  export namespace Investigation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      itemList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Finding extends jspb.Message {
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

    hasItemCodeableConcept(): boolean;
    clearItemCodeableConcept(): void;
    getItemCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setItemCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasItemReference(): boolean;
    clearItemReference(): void;
    getItemReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setItemReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasBasis(): boolean;
    clearBasis(): void;
    getBasis(): proto_r4_core_datatypes_pb.String | undefined;
    setBasis(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Finding.AsObject;
    static toObject(includeInstance: boolean, msg: Finding): Finding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Finding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Finding;
    static deserializeBinaryFromReader(message: Finding, reader: jspb.BinaryReader): Finding;
  }

  export namespace Finding {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      itemReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      basis?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }
}

