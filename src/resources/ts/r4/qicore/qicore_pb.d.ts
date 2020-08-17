// package: google.fhir.r4.qicore
// file: proto/r4/qicore/qicore.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_extensions_pb from "../../../proto/r4/core/extensions_pb";
import * as proto_r4_core_valuesets_pb from "../../../proto/r4/core/valuesets_pb";
import * as proto_r4_qicore_codes_pb from "../../../proto/r4/qicore/codes_pb";
import * as proto_r4_uscore_pb from "../../../proto/r4/uscore_pb";
import * as proto_r4_uscore_codes_pb from "../../../proto/r4/uscore_codes_pb";

export class QICoreAdverseEvent extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasActuality(): boolean;
  clearActuality(): void;
  getActuality(): QICoreAdverseEvent.ActualityCode | undefined;
  setActuality(value?: QICoreAdverseEvent.ActualityCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setEvent(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasDetected(): boolean;
  clearDetected(): void;
  getDetected(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDetected(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRecordedDate(): boolean;
  clearRecordedDate(): void;
  getRecordedDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearResultingConditionList(): void;
  getResultingConditionList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultingConditionList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultingCondition(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSeriousness(): boolean;
  clearSeriousness(): void;
  getSeriousness(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSeriousness(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSeverity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContributorList(): void;
  getContributorList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContributorList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContributor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSuspectEntityList(): void;
  getSuspectEntityList(): Array<QICoreAdverseEvent.SuspectEntity>;
  setSuspectEntityList(value: Array<QICoreAdverseEvent.SuspectEntity>): void;
  addSuspectEntity(value?: QICoreAdverseEvent.SuspectEntity, index?: number): QICoreAdverseEvent.SuspectEntity;

  clearSubjectMedicalHistoryList(): void;
  getSubjectMedicalHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSubjectMedicalHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSubjectMedicalHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReferenceDocumentList(): void;
  getReferenceDocumentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReferenceDocumentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReferenceDocument(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearStudyList(): void;
  getStudyList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setStudyList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreAdverseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreAdverseEvent): QICoreAdverseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreAdverseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreAdverseEvent;
  static deserializeBinaryFromReader(message: QICoreAdverseEvent, reader: jspb.BinaryReader): QICoreAdverseEvent;
}

export namespace QICoreAdverseEvent {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    actuality?: QICoreAdverseEvent.ActualityCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    event?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    detected?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    resultingConditionList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    seriousness?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    severity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contributorList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    suspectEntityList: Array<QICoreAdverseEvent.SuspectEntity.AsObject>,
    subjectMedicalHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    referenceDocumentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    studyList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class ActualityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap[keyof proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap[keyof proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActualityCode.AsObject;
    static toObject(includeInstance: boolean, msg: ActualityCode): ActualityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActualityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActualityCode;
    static deserializeBinaryFromReader(message: ActualityCode, reader: jspb.BinaryReader): ActualityCode;
  }

  export namespace ActualityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap[keyof proto_r4_core_codes_pb.AdverseEventActualityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class SuspectEntity extends jspb.Message {
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

    hasInstance(): boolean;
    clearInstance(): void;
    getInstance(): proto_r4_core_datatypes_pb.Reference | undefined;
    setInstance(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCausality(): boolean;
    clearCausality(): void;
    getCausality(): QICoreAdverseEvent.SuspectEntity.Causality | undefined;
    setCausality(value?: QICoreAdverseEvent.SuspectEntity.Causality): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SuspectEntity.AsObject;
    static toObject(includeInstance: boolean, msg: SuspectEntity): SuspectEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SuspectEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SuspectEntity;
    static deserializeBinaryFromReader(message: SuspectEntity, reader: jspb.BinaryReader): SuspectEntity;
  }

  export namespace SuspectEntity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      instance?: proto_r4_core_datatypes_pb.Reference.AsObject,
      causality?: QICoreAdverseEvent.SuspectEntity.Causality.AsObject,
    }

    export class Causality extends jspb.Message {
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

      hasAssessment(): boolean;
      clearAssessment(): void;
      getAssessment(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setAssessment(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasProductRelatedness(): boolean;
      clearProductRelatedness(): void;
      getProductRelatedness(): proto_r4_core_datatypes_pb.String | undefined;
      setProductRelatedness(value?: proto_r4_core_datatypes_pb.String): void;

      hasAuthor(): boolean;
      clearAuthor(): void;
      getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
      setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasMethod(): boolean;
      clearMethod(): void;
      getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Causality.AsObject;
      static toObject(includeInstance: boolean, msg: Causality): Causality.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Causality, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Causality;
      static deserializeBinaryFromReader(message: Causality, reader: jspb.BinaryReader): Causality;
    }

    export namespace Causality {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        assessment?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        productRelatedness?: proto_r4_core_datatypes_pb.String.AsObject,
        author?: proto_r4_core_datatypes_pb.Reference.AsObject,
        method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }
  }
}

export class QICoreAllergyIntolerance extends jspb.Message {
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

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClinicalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVerificationStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): QICoreAllergyIntolerance.TypeCode | undefined;
  setType(value?: QICoreAllergyIntolerance.TypeCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<QICoreAllergyIntolerance.CategoryCode>;
  setCategoryList(value: Array<QICoreAllergyIntolerance.CategoryCode>): void;
  addCategory(value?: QICoreAllergyIntolerance.CategoryCode, index?: number): QICoreAllergyIntolerance.CategoryCode;

  hasCriticality(): boolean;
  clearCriticality(): void;
  getCriticality(): QICoreAllergyIntolerance.CriticalityCode | undefined;
  setCriticality(value?: QICoreAllergyIntolerance.CriticalityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): QICoreAllergyIntolerance.OnsetX | undefined;
  setOnset(value?: QICoreAllergyIntolerance.OnsetX): void;

  hasRecordedDate(): boolean;
  clearRecordedDate(): void;
  getRecordedDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLastOccurrence(): boolean;
  clearLastOccurrence(): void;
  getLastOccurrence(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastOccurrence(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearReactionList(): void;
  getReactionList(): Array<QICoreAllergyIntolerance.Reaction>;
  setReactionList(value: Array<QICoreAllergyIntolerance.Reaction>): void;
  addReaction(value?: QICoreAllergyIntolerance.Reaction, index?: number): QICoreAllergyIntolerance.Reaction;

  hasResolutionAge(): boolean;
  clearResolutionAge(): void;
  getResolutionAge(): proto_r4_core_datatypes_pb.Age | undefined;
  setResolutionAge(value?: proto_r4_core_datatypes_pb.Age): void;

  hasReasonRefuted(): boolean;
  clearReasonRefuted(): void;
  getReasonRefuted(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonRefuted(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreAllergyIntolerance.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreAllergyIntolerance): QICoreAllergyIntolerance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreAllergyIntolerance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreAllergyIntolerance;
  static deserializeBinaryFromReader(message: QICoreAllergyIntolerance, reader: jspb.BinaryReader): QICoreAllergyIntolerance;
}

export namespace QICoreAllergyIntolerance {
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
    clinicalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verificationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: QICoreAllergyIntolerance.TypeCode.AsObject,
    categoryList: Array<QICoreAllergyIntolerance.CategoryCode.AsObject>,
    criticality?: QICoreAllergyIntolerance.CriticalityCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    onset?: QICoreAllergyIntolerance.OnsetX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lastOccurrence?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reactionList: Array<QICoreAllergyIntolerance.Reaction.AsObject>,
    resolutionAge?: proto_r4_core_datatypes_pb.Age.AsObject,
    reasonRefuted?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CriticalityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CriticalityCode.AsObject;
    static toObject(includeInstance: boolean, msg: CriticalityCode): CriticalityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CriticalityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CriticalityCode;
    static deserializeBinaryFromReader(message: CriticalityCode, reader: jspb.BinaryReader): CriticalityCode;
  }

  export namespace CriticalityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OnsetX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): OnsetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnsetX.AsObject;
    static toObject(includeInstance: boolean, msg: OnsetX): OnsetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnsetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnsetX;
    static deserializeBinaryFromReader(message: OnsetX, reader: jspb.BinaryReader): OnsetX;
  }

  export namespace OnsetX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
    }
  }

  export class Reaction extends jspb.Message {
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

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSubstance(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearManifestationList(): void;
    getManifestationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setManifestationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addManifestation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasOnset(): boolean;
    clearOnset(): void;
    getOnset(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setOnset(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): QICoreAllergyIntolerance.Reaction.SeverityCode | undefined;
    setSeverity(value?: QICoreAllergyIntolerance.Reaction.SeverityCode): void;

    hasExposureRoute(): boolean;
    clearExposureRoute(): void;
    getExposureRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setExposureRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearNoteList(): void;
    getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    hasReactionDuration(): boolean;
    clearReactionDuration(): void;
    getReactionDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setReactionDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reaction.AsObject;
    static toObject(includeInstance: boolean, msg: Reaction): Reaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reaction;
    static deserializeBinaryFromReader(message: Reaction, reader: jspb.BinaryReader): Reaction;
  }

  export namespace Reaction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manifestationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      onset?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      severity?: QICoreAllergyIntolerance.Reaction.SeverityCode.AsObject,
      exposureRoute?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      reactionDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
    }

    export class SeverityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
        value: proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class QICoreBodyStructure extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasMorphology(): boolean;
  clearMorphology(): void;
  getMorphology(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMorphology(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearLocationQualifierList(): void;
  getLocationQualifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLocationQualifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLocationQualifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearImageList(): void;
  getImageList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setImageList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addImage(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreBodyStructure.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreBodyStructure): QICoreBodyStructure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreBodyStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreBodyStructure;
  static deserializeBinaryFromReader(message: QICoreBodyStructure, reader: jspb.BinaryReader): QICoreBodyStructure;
}

export namespace QICoreBodyStructure {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    morphology?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    location?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    locationQualifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    imageList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class QICoreCarePlan extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplacesList(): void;
  getReplacesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplacesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreCarePlan.StatusCode | undefined;
  setStatus(value?: QICoreCarePlan.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): QICoreCarePlan.IntentCode | undefined;
  setIntent(value?: QICoreCarePlan.IntentCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

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

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContributorList(): void;
  getContributorList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContributorList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContributor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCareTeamList(): void;
  getCareTeamList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCareTeamList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCareTeam(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAddressesList(): void;
  getAddressesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddressesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearGoalList(): void;
  getGoalList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setGoalList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearActivityList(): void;
  getActivityList(): Array<QICoreCarePlan.Activity>;
  setActivityList(value: Array<QICoreCarePlan.Activity>): void;
  addActivity(value?: QICoreCarePlan.Activity, index?: number): QICoreCarePlan.Activity;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCarePlan.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCarePlan): QICoreCarePlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCarePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCarePlan;
  static deserializeBinaryFromReader(message: QICoreCarePlan, reader: jspb.BinaryReader): QICoreCarePlan;
}

export namespace QICoreCarePlan {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replacesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreCarePlan.StatusCode.AsObject,
    intent?: QICoreCarePlan.IntentCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contributorList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    careTeamList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    addressesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfoList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    goalList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    activityList: Array<QICoreCarePlan.Activity.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Activity extends jspb.Message {
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

    clearOutcomeCodeableConceptList(): void;
    getOutcomeCodeableConceptList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setOutcomeCodeableConceptList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addOutcomeCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearOutcomeReferenceList(): void;
    getOutcomeReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setOutcomeReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearProgressList(): void;
    getProgressList(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setProgressList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addProgress(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): QICoreCarePlan.Activity.Detail | undefined;
    setDetail(value?: QICoreCarePlan.Activity.Detail): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Activity.AsObject;
    static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Activity;
    static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
  }

  export namespace Activity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      outcomeCodeableConceptList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      outcomeReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      progressList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      detail?: QICoreCarePlan.Activity.Detail.AsObject,
    }

    export class Detail extends jspb.Message {
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

      hasKind(): boolean;
      clearKind(): void;
      getKind(): QICoreCarePlan.Activity.Detail.KindCode | undefined;
      setKind(value?: QICoreCarePlan.Activity.Detail.KindCode): void;

      clearInstantiatesCanonicalList(): void;
      getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
      setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
      addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

      clearInstantiatesUriList(): void;
      getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
      setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
      addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearReasonCodeList(): void;
      getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearReasonReferenceList(): void;
      getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearGoalList(): void;
      getGoalList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setGoalList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): QICoreCarePlan.Activity.Detail.StatusCode | undefined;
      setStatus(value?: QICoreCarePlan.Activity.Detail.StatusCode): void;

      hasStatusReason(): boolean;
      clearStatusReason(): void;
      getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDoNotPerform(): boolean;
      clearDoNotPerform(): void;
      getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasScheduled(): boolean;
      clearScheduled(): void;
      getScheduled(): QICoreCarePlan.Activity.Detail.ScheduledX | undefined;
      setScheduled(value?: QICoreCarePlan.Activity.Detail.ScheduledX): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
      setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearPerformerList(): void;
      getPerformerList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setPerformerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasProduct(): boolean;
      clearProduct(): void;
      getProduct(): QICoreCarePlan.Activity.Detail.ProductX | undefined;
      setProduct(value?: QICoreCarePlan.Activity.Detail.ProductX): void;

      hasDailyAmount(): boolean;
      clearDailyAmount(): void;
      getDailyAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setDailyAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Detail.AsObject;
      static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Detail;
      static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
    }

    export namespace Detail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        kind?: QICoreCarePlan.Activity.Detail.KindCode.AsObject,
        instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
        instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        goalList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        status?: QICoreCarePlan.Activity.Detail.StatusCode.AsObject,
        statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        scheduled?: QICoreCarePlan.Activity.Detail.ScheduledX.AsObject,
        location?: proto_r4_core_datatypes_pb.Reference.AsObject,
        performerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        product?: QICoreCarePlan.Activity.Detail.ProductX.AsObject,
        dailyAmount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class KindCode extends jspb.Message {
        getValue(): proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap];
        setValue(value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KindCode.AsObject;
        static toObject(includeInstance: boolean, msg: KindCode): KindCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KindCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KindCode;
        static deserializeBinaryFromReader(message: KindCode, reader: jspb.BinaryReader): KindCode;
      }

      export namespace KindCode {
        export type AsObject = {
          value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class StatusCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ScheduledX extends jspb.Message {
        hasTiming(): boolean;
        clearTiming(): void;
        getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
        setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
        setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        getChoiceCase(): ScheduledX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScheduledX.AsObject;
        static toObject(includeInstance: boolean, msg: ScheduledX): ScheduledX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScheduledX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScheduledX;
        static deserializeBinaryFromReader(message: ScheduledX, reader: jspb.BinaryReader): ScheduledX;
      }

      export namespace ScheduledX {
        export type AsObject = {
          timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
          period?: proto_r4_core_datatypes_pb.Period.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          TIMING = 1,
          PERIOD = 2,
          STRING_VALUE = 3,
        }
      }

      export class ProductX extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        getChoiceCase(): ProductX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProductX.AsObject;
        static toObject(includeInstance: boolean, msg: ProductX): ProductX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProductX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProductX;
        static deserializeBinaryFromReader(message: ProductX, reader: jspb.BinaryReader): ProductX;
      }

      export namespace ProductX {
        export type AsObject = {
          codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          CODEABLE_CONCEPT = 1,
          REFERENCE = 2,
        }
      }
    }
  }
}

export class QICoreCareTeam extends jspb.Message {
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
  getStatus(): QICoreCareTeam.StatusCode | undefined;
  setStatus(value?: QICoreCareTeam.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearParticipantList(): void;
  getParticipantList(): Array<QICoreCareTeam.Participant>;
  setParticipantList(value: Array<QICoreCareTeam.Participant>): void;
  addParticipant(value?: QICoreCareTeam.Participant, index?: number): QICoreCareTeam.Participant;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearManagingOrganizationList(): void;
  getManagingOrganizationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setManagingOrganizationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCareTeam.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCareTeam): QICoreCareTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCareTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCareTeam;
  static deserializeBinaryFromReader(message: QICoreCareTeam, reader: jspb.BinaryReader): QICoreCareTeam;
}

export namespace QICoreCareTeam {
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
    status?: QICoreCareTeam.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    participantList: Array<QICoreCareTeam.Participant.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    managingOrganizationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Participant extends jspb.Message {
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

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMember(): boolean;
    clearMember(): void;
    getMember(): proto_r4_core_datatypes_pb.Reference | undefined;
    setMember(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      member?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

export class QICoreClaim extends jspb.Message {
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
  getStatus(): QICoreClaim.StatusCode | undefined;
  setStatus(value?: QICoreClaim.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubType(): boolean;
  clearSubType(): void;
  getSubType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSubType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): QICoreClaim.UseCode | undefined;
  setUse(value?: QICoreClaim.UseCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasBillablePeriod(): boolean;
  clearBillablePeriod(): void;
  getBillablePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setBillablePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasEnterer(): boolean;
  clearEnterer(): void;
  getEnterer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEnterer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasInsurer(): boolean;
  clearInsurer(): void;
  getInsurer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInsurer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFundsReserve(): boolean;
  clearFundsReserve(): void;
  getFundsReserve(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundsReserve(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearRelatedList(): void;
  getRelatedList(): Array<QICoreClaim.RelatedClaim>;
  setRelatedList(value: Array<QICoreClaim.RelatedClaim>): void;
  addRelated(value?: QICoreClaim.RelatedClaim, index?: number): QICoreClaim.RelatedClaim;

  hasPrescription(): boolean;
  clearPrescription(): void;
  getPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOriginalPrescription(): boolean;
  clearOriginalPrescription(): void;
  getOriginalPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOriginalPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPayee(): boolean;
  clearPayee(): void;
  getPayee(): QICoreClaim.Payee | undefined;
  setPayee(value?: QICoreClaim.Payee): void;

  hasReferral(): boolean;
  clearReferral(): void;
  getReferral(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferral(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasFacility(): boolean;
  clearFacility(): void;
  getFacility(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFacility(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCareTeamList(): void;
  getCareTeamList(): Array<QICoreClaim.CareTeam>;
  setCareTeamList(value: Array<QICoreClaim.CareTeam>): void;
  addCareTeam(value?: QICoreClaim.CareTeam, index?: number): QICoreClaim.CareTeam;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<QICoreClaim.SupportingInformation>;
  setSupportingInfoList(value: Array<QICoreClaim.SupportingInformation>): void;
  addSupportingInfo(value?: QICoreClaim.SupportingInformation, index?: number): QICoreClaim.SupportingInformation;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<QICoreClaim.Diagnosis>;
  setDiagnosisList(value: Array<QICoreClaim.Diagnosis>): void;
  addDiagnosis(value?: QICoreClaim.Diagnosis, index?: number): QICoreClaim.Diagnosis;

  clearProcedureList(): void;
  getProcedureList(): Array<QICoreClaim.Procedure>;
  setProcedureList(value: Array<QICoreClaim.Procedure>): void;
  addProcedure(value?: QICoreClaim.Procedure, index?: number): QICoreClaim.Procedure;

  clearInsuranceList(): void;
  getInsuranceList(): Array<QICoreClaim.Insurance>;
  setInsuranceList(value: Array<QICoreClaim.Insurance>): void;
  addInsurance(value?: QICoreClaim.Insurance, index?: number): QICoreClaim.Insurance;

  hasAccident(): boolean;
  clearAccident(): void;
  getAccident(): QICoreClaim.Accident | undefined;
  setAccident(value?: QICoreClaim.Accident): void;

  clearItemList(): void;
  getItemList(): Array<QICoreClaim.Item>;
  setItemList(value: Array<QICoreClaim.Item>): void;
  addItem(value?: QICoreClaim.Item, index?: number): QICoreClaim.Item;

  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): proto_r4_core_datatypes_pb.Money | undefined;
  setTotal(value?: proto_r4_core_datatypes_pb.Money): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreClaim.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreClaim): QICoreClaim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreClaim;
  static deserializeBinaryFromReader(message: QICoreClaim, reader: jspb.BinaryReader): QICoreClaim;
}

export namespace QICoreClaim {
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
    status?: QICoreClaim.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    use?: QICoreClaim.UseCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    billablePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    fundsReserve?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    relatedList: Array<QICoreClaim.RelatedClaim.AsObject>,
    prescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    originalPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    payee?: QICoreClaim.Payee.AsObject,
    referral?: proto_r4_core_datatypes_pb.Reference.AsObject,
    facility?: proto_r4_core_datatypes_pb.Reference.AsObject,
    careTeamList: Array<QICoreClaim.CareTeam.AsObject>,
    supportingInfoList: Array<QICoreClaim.SupportingInformation.AsObject>,
    diagnosisList: Array<QICoreClaim.Diagnosis.AsObject>,
    procedureList: Array<QICoreClaim.Procedure.AsObject>,
    insuranceList: Array<QICoreClaim.Insurance.AsObject>,
    accident?: QICoreClaim.Accident.AsObject,
    itemList: Array<QICoreClaim.Item.AsObject>,
    total?: proto_r4_core_datatypes_pb.Money.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
      value: proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class RelatedClaim extends jspb.Message {
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

    hasClaim(): boolean;
    clearClaim(): void;
    getClaim(): proto_r4_core_datatypes_pb.Reference | undefined;
    setClaim(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasRelationship(): boolean;
    clearRelationship(): void;
    getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Identifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedClaim.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedClaim): RelatedClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatedClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedClaim;
    static deserializeBinaryFromReader(message: RelatedClaim, reader: jspb.BinaryReader): RelatedClaim;
  }

  export namespace RelatedClaim {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      claim?: proto_r4_core_datatypes_pb.Reference.AsObject,
      relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    }
  }

  export class Payee extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_r4_core_datatypes_pb.Reference | undefined;
    setParty(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payee.AsObject;
    static toObject(includeInstance: boolean, msg: Payee): Payee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payee;
    static deserializeBinaryFromReader(message: Payee, reader: jspb.BinaryReader): Payee;
  }

  export namespace Payee {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class CareTeam extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
    setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasResponsible(): boolean;
    clearResponsible(): void;
    getResponsible(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setResponsible(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasQualification(): boolean;
    clearQualification(): void;
    getQualification(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setQualification(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CareTeam.AsObject;
    static toObject(includeInstance: boolean, msg: CareTeam): CareTeam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CareTeam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CareTeam;
    static deserializeBinaryFromReader(message: CareTeam, reader: jspb.BinaryReader): CareTeam;
  }

  export namespace CareTeam {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
      responsible?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      qualification?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class SupportingInformation extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): QICoreClaim.SupportingInformation.TimingX | undefined;
    setTiming(value?: QICoreClaim.SupportingInformation.TimingX): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): QICoreClaim.SupportingInformation.ValueX | undefined;
    setValue(value?: QICoreClaim.SupportingInformation.ValueX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportingInformation.AsObject;
    static toObject(includeInstance: boolean, msg: SupportingInformation): SupportingInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportingInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportingInformation;
    static deserializeBinaryFromReader(message: SupportingInformation, reader: jspb.BinaryReader): SupportingInformation;
  }

  export namespace SupportingInformation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      timing?: QICoreClaim.SupportingInformation.TimingX.AsObject,
      value?: QICoreClaim.SupportingInformation.ValueX.AsObject,
      reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class TimingX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
        PERIOD = 2,
      }
    }

    export class ValueX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

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
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BOOLEAN = 1,
        STRING_VALUE = 2,
        QUANTITY = 3,
        ATTACHMENT = 4,
        REFERENCE = 5,
      }
    }
  }

  export class Diagnosis extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasDiagnosis(): boolean;
    clearDiagnosis(): void;
    getDiagnosis(): QICoreClaim.Diagnosis.DiagnosisX | undefined;
    setDiagnosis(value?: QICoreClaim.Diagnosis.DiagnosisX): void;

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasOnAdmission(): boolean;
    clearOnAdmission(): void;
    getOnAdmission(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOnAdmission(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPackageCode(): boolean;
    clearPackageCode(): void;
    getPackageCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPackageCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Diagnosis.AsObject;
    static toObject(includeInstance: boolean, msg: Diagnosis): Diagnosis.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Diagnosis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Diagnosis;
    static deserializeBinaryFromReader(message: Diagnosis, reader: jspb.BinaryReader): Diagnosis;
  }

  export namespace Diagnosis {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      diagnosis?: QICoreClaim.Diagnosis.DiagnosisX.AsObject,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      onAdmission?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      packageCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class DiagnosisX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): DiagnosisX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DiagnosisX.AsObject;
      static toObject(includeInstance: boolean, msg: DiagnosisX): DiagnosisX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DiagnosisX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DiagnosisX;
      static deserializeBinaryFromReader(message: DiagnosisX, reader: jspb.BinaryReader): DiagnosisX;
    }

    export namespace DiagnosisX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Procedure extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): QICoreClaim.Procedure.ProcedureX | undefined;
    setProcedure(value?: QICoreClaim.Procedure.ProcedureX): void;

    clearUdiList(): void;
    getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Procedure.AsObject;
    static toObject(includeInstance: boolean, msg: Procedure): Procedure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Procedure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Procedure;
    static deserializeBinaryFromReader(message: Procedure, reader: jspb.BinaryReader): Procedure;
  }

  export namespace Procedure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      procedure?: QICoreClaim.Procedure.ProcedureX.AsObject,
      udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class ProcedureX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ProcedureX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ProcedureX.AsObject;
      static toObject(includeInstance: boolean, msg: ProcedureX): ProcedureX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ProcedureX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ProcedureX;
      static deserializeBinaryFromReader(message: ProcedureX, reader: jspb.BinaryReader): ProcedureX;
    }

    export namespace ProcedureX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Insurance extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasFocal(): boolean;
    clearFocal(): void;
    getFocal(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setFocal(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasBusinessArrangement(): boolean;
    clearBusinessArrangement(): void;
    getBusinessArrangement(): proto_r4_core_datatypes_pb.String | undefined;
    setBusinessArrangement(value?: proto_r4_core_datatypes_pb.String): void;

    clearPreAuthRefList(): void;
    getPreAuthRefList(): Array<proto_r4_core_datatypes_pb.String>;
    setPreAuthRefList(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addPreAuthRef(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    hasClaimResponse(): boolean;
    clearClaimResponse(): void;
    getClaimResponse(): proto_r4_core_datatypes_pb.Reference | undefined;
    setClaimResponse(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Insurance.AsObject;
    static toObject(includeInstance: boolean, msg: Insurance): Insurance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Insurance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Insurance;
    static deserializeBinaryFromReader(message: Insurance, reader: jspb.BinaryReader): Insurance;
  }

  export namespace Insurance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      focal?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      businessArrangement?: proto_r4_core_datatypes_pb.String.AsObject,
      preAuthRefList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      claimResponse?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Accident extends jspb.Message {
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

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): QICoreClaim.Accident.LocationX | undefined;
    setLocation(value?: QICoreClaim.Accident.LocationX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Accident.AsObject;
    static toObject(includeInstance: boolean, msg: Accident): Accident.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Accident, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Accident;
    static deserializeBinaryFromReader(message: Accident, reader: jspb.BinaryReader): Accident;
  }

  export namespace Accident {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      location?: QICoreClaim.Accident.LocationX.AsObject,
    }

    export class LocationX extends jspb.Message {
      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): LocationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LocationX.AsObject;
      static toObject(includeInstance: boolean, msg: LocationX): LocationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LocationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LocationX;
      static deserializeBinaryFromReader(message: LocationX, reader: jspb.BinaryReader): LocationX;
    }

    export namespace LocationX {
      export type AsObject = {
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        ADDRESS = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Item extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    clearCareTeamSequenceList(): void;
    getCareTeamSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setCareTeamSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addCareTeamSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearDiagnosisSequenceList(): void;
    getDiagnosisSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setDiagnosisSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addDiagnosisSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearProcedureSequenceList(): void;
    getProcedureSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setProcedureSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addProcedureSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearInformationSequenceList(): void;
    getInformationSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setInformationSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addInformationSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    hasRevenue(): boolean;
    clearRevenue(): void;
    getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasProductOrService(): boolean;
    clearProductOrService(): void;
    getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearModifierList(): void;
    getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearProgramCodeList(): void;
    getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasServiced(): boolean;
    clearServiced(): void;
    getServiced(): QICoreClaim.Item.ServicedX | undefined;
    setServiced(value?: QICoreClaim.Item.ServicedX): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): QICoreClaim.Item.LocationX | undefined;
    setLocation(value?: QICoreClaim.Item.LocationX): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasUnitPrice(): boolean;
    clearUnitPrice(): void;
    getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
    setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

    hasFactor(): boolean;
    clearFactor(): void;
    getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): proto_r4_core_datatypes_pb.Money | undefined;
    setNet(value?: proto_r4_core_datatypes_pb.Money): void;

    clearUdiList(): void;
    getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSubSiteList(): void;
    getSubSiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubSiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubSite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearEncounterList(): void;
    getEncounterList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEncounterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEncounter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearDetailList(): void;
    getDetailList(): Array<QICoreClaim.Item.Detail>;
    setDetailList(value: Array<QICoreClaim.Item.Detail>): void;
    addDetail(value?: QICoreClaim.Item.Detail, index?: number): QICoreClaim.Item.Detail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      careTeamSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      diagnosisSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      procedureSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      informationSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: QICoreClaim.Item.ServicedX.AsObject,
      location?: QICoreClaim.Item.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      encounterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      detailList: Array<QICoreClaim.Item.Detail.AsObject>,
    }

    export class ServicedX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): ServicedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ServicedX.AsObject;
      static toObject(includeInstance: boolean, msg: ServicedX): ServicedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ServicedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ServicedX;
      static deserializeBinaryFromReader(message: ServicedX, reader: jspb.BinaryReader): ServicedX;
    }

    export namespace ServicedX {
      export type AsObject = {
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
        PERIOD = 2,
      }
    }

    export class LocationX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): LocationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LocationX.AsObject;
      static toObject(includeInstance: boolean, msg: LocationX): LocationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LocationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LocationX;
      static deserializeBinaryFromReader(message: LocationX, reader: jspb.BinaryReader): LocationX;
    }

    export namespace LocationX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        ADDRESS = 2,
        REFERENCE = 3,
      }
    }

    export class Detail extends jspb.Message {
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

      hasSequence(): boolean;
      clearSequence(): void;
      getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasRevenue(): boolean;
      clearRevenue(): void;
      getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCategory(): boolean;
      clearCategory(): void;
      getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasProductOrService(): boolean;
      clearProductOrService(): void;
      getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearModifierList(): void;
      getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearProgramCodeList(): void;
      getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasUnitPrice(): boolean;
      clearUnitPrice(): void;
      getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
      setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

      hasFactor(): boolean;
      clearFactor(): void;
      getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasNet(): boolean;
      clearNet(): void;
      getNet(): proto_r4_core_datatypes_pb.Money | undefined;
      setNet(value?: proto_r4_core_datatypes_pb.Money): void;

      clearUdiList(): void;
      getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearSubDetailList(): void;
      getSubDetailList(): Array<QICoreClaim.Item.Detail.SubDetail>;
      setSubDetailList(value: Array<QICoreClaim.Item.Detail.SubDetail>): void;
      addSubDetail(value?: QICoreClaim.Item.Detail.SubDetail, index?: number): QICoreClaim.Item.Detail.SubDetail;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Detail.AsObject;
      static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Detail;
      static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
    }

    export namespace Detail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        net?: proto_r4_core_datatypes_pb.Money.AsObject,
        udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        subDetailList: Array<QICoreClaim.Item.Detail.SubDetail.AsObject>,
      }

      export class SubDetail extends jspb.Message {
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

        hasSequence(): boolean;
        clearSequence(): void;
        getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
        setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

        hasRevenue(): boolean;
        clearRevenue(): void;
        getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasCategory(): boolean;
        clearCategory(): void;
        getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasProductOrService(): boolean;
        clearProductOrService(): void;
        getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        clearModifierList(): void;
        getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        clearProgramCodeList(): void;
        getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasUnitPrice(): boolean;
        clearUnitPrice(): void;
        getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
        setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

        hasFactor(): boolean;
        clearFactor(): void;
        getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
        setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

        hasNet(): boolean;
        clearNet(): void;
        getNet(): proto_r4_core_datatypes_pb.Money | undefined;
        setNet(value?: proto_r4_core_datatypes_pb.Money): void;

        clearUdiList(): void;
        getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
        setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
        addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubDetail.AsObject;
        static toObject(includeInstance: boolean, msg: SubDetail): SubDetail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubDetail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubDetail;
        static deserializeBinaryFromReader(message: SubDetail, reader: jspb.BinaryReader): SubDetail;
      }

      export namespace SubDetail {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
          revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        }
      }
    }
  }
}

export class QICoreCommunication extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInResponseToList(): void;
  getInResponseToList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInResponseToList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInResponseTo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreCommunication.StatusCode | undefined;
  setStatus(value?: QICoreCommunication.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): QICoreCommunication.PriorityCode | undefined;
  setPriority(value?: QICoreCommunication.PriorityCode): void;

  clearMediumList(): void;
  getMediumList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setMediumList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addMedium(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setTopic(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearAboutList(): void;
  getAboutList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAboutList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAbout(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSent(): boolean;
  clearSent(): void;
  getSent(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setSent(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasReceived(): boolean;
  clearReceived(): void;
  getReceived(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setReceived(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearRecipientList(): void;
  getRecipientList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRecipientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRecipient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSender(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPayloadList(): void;
  getPayloadList(): Array<QICoreCommunication.Payload>;
  setPayloadList(value: Array<QICoreCommunication.Payload>): void;
  addPayload(value?: QICoreCommunication.Payload, index?: number): QICoreCommunication.Payload;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCommunication.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCommunication): QICoreCommunication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCommunication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCommunication;
  static deserializeBinaryFromReader(message: QICoreCommunication, reader: jspb.BinaryReader): QICoreCommunication;
}

export namespace QICoreCommunication {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    inResponseToList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreCommunication.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: QICoreCommunication.PriorityCode.AsObject,
    mediumList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    topic?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    aboutList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    sent?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    received?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recipientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    sender?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    payloadList: Array<QICoreCommunication.Payload.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Payload extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): QICoreCommunication.Payload.ContentX | undefined;
    setContent(value?: QICoreCommunication.Payload.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: QICoreCommunication.Payload.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        STRING_VALUE = 1,
        ATTACHMENT = 2,
        REFERENCE = 3,
      }
    }
  }
}

export class QICoreCommunicationRequest extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplacesList(): void;
  getReplacesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplacesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreCommunicationRequest.StatusCode | undefined;
  setStatus(value?: QICoreCommunicationRequest.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): QICoreCommunicationRequest.PriorityCode | undefined;
  setPriority(value?: QICoreCommunicationRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearMediumList(): void;
  getMediumList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setMediumList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addMedium(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAboutList(): void;
  getAboutList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAboutList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAbout(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPayloadList(): void;
  getPayloadList(): Array<QICoreCommunicationRequest.Payload>;
  setPayloadList(value: Array<QICoreCommunicationRequest.Payload>): void;
  addPayload(value?: QICoreCommunicationRequest.Payload, index?: number): QICoreCommunicationRequest.Payload;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): QICoreCommunicationRequest.OccurrenceX | undefined;
  setOccurrence(value?: QICoreCommunicationRequest.OccurrenceX): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRecipientList(): void;
  getRecipientList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRecipientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRecipient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSender(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCommunicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCommunicationRequest): QICoreCommunicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCommunicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCommunicationRequest;
  static deserializeBinaryFromReader(message: QICoreCommunicationRequest, reader: jspb.BinaryReader): QICoreCommunicationRequest;
}

export namespace QICoreCommunicationRequest {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replacesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: QICoreCommunicationRequest.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: QICoreCommunicationRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    mediumList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    aboutList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    payloadList: Array<QICoreCommunicationRequest.Payload.AsObject>,
    occurrence?: QICoreCommunicationRequest.OccurrenceX.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    recipientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    sender?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Payload extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): QICoreCommunicationRequest.Payload.ContentX | undefined;
    setContent(value?: QICoreCommunicationRequest.Payload.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: QICoreCommunicationRequest.Payload.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        STRING_VALUE = 1,
        ATTACHMENT = 2,
        REFERENCE = 3,
      }
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
}

export class QICoreCondition extends jspb.Message {
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

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClinicalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVerificationStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSeverity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): QICoreCondition.OnsetX | undefined;
  setOnset(value?: QICoreCondition.OnsetX): void;

  hasAbatement(): boolean;
  clearAbatement(): void;
  getAbatement(): QICoreCondition.AbatementX | undefined;
  setAbatement(value?: QICoreCondition.AbatementX): void;

  hasRecordedDate(): boolean;
  clearRecordedDate(): void;
  getRecordedDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearStageList(): void;
  getStageList(): Array<QICoreCondition.Stage>;
  setStageList(value: Array<QICoreCondition.Stage>): void;
  addStage(value?: QICoreCondition.Stage, index?: number): QICoreCondition.Stage;

  clearEvidenceList(): void;
  getEvidenceList(): Array<QICoreCondition.Evidence>;
  setEvidenceList(value: Array<QICoreCondition.Evidence>): void;
  addEvidence(value?: QICoreCondition.Evidence, index?: number): QICoreCondition.Evidence;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDueToList(): void;
  getDueToList(): Array<proto_r4_core_extensions_pb.ConditionDueTo.ValueX>;
  setDueToList(value: Array<proto_r4_core_extensions_pb.ConditionDueTo.ValueX>): void;
  addDueTo(value?: proto_r4_core_extensions_pb.ConditionDueTo.ValueX, index?: number): proto_r4_core_extensions_pb.ConditionDueTo.ValueX;

  clearOccurredFollowingList(): void;
  getOccurredFollowingList(): Array<proto_r4_core_extensions_pb.ConditionOccurredFollowing.ValueX>;
  setOccurredFollowingList(value: Array<proto_r4_core_extensions_pb.ConditionOccurredFollowing.ValueX>): void;
  addOccurredFollowing(value?: proto_r4_core_extensions_pb.ConditionOccurredFollowing.ValueX, index?: number): proto_r4_core_extensions_pb.ConditionOccurredFollowing.ValueX;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCondition.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCondition): QICoreCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCondition;
  static deserializeBinaryFromReader(message: QICoreCondition, reader: jspb.BinaryReader): QICoreCondition;
}

export namespace QICoreCondition {
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
    clinicalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verificationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    severity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    bodySiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    onset?: QICoreCondition.OnsetX.AsObject,
    abatement?: QICoreCondition.AbatementX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    stageList: Array<QICoreCondition.Stage.AsObject>,
    evidenceList: Array<QICoreCondition.Evidence.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dueToList: Array<proto_r4_core_extensions_pb.ConditionDueTo.ValueX.AsObject>,
    occurredFollowingList: Array<proto_r4_core_extensions_pb.ConditionOccurredFollowing.ValueX.AsObject>,
  }

  export class OnsetX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): OnsetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnsetX.AsObject;
    static toObject(includeInstance: boolean, msg: OnsetX): OnsetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnsetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnsetX;
    static deserializeBinaryFromReader(message: OnsetX, reader: jspb.BinaryReader): OnsetX;
  }

  export namespace OnsetX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
    }
  }

  export class AbatementX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): AbatementX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbatementX.AsObject;
    static toObject(includeInstance: boolean, msg: AbatementX): AbatementX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbatementX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbatementX;
    static deserializeBinaryFromReader(message: AbatementX, reader: jspb.BinaryReader): AbatementX;
  }

  export namespace AbatementX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
    }
  }

  export class Stage extends jspb.Message {
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

    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSummary(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAssessmentList(): void;
    getAssessmentList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setAssessmentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addAssessment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stage.AsObject;
    static toObject(includeInstance: boolean, msg: Stage): Stage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stage;
    static deserializeBinaryFromReader(message: Stage, reader: jspb.BinaryReader): Stage;
  }

  export namespace Stage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      summary?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      assessmentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Evidence extends jspb.Message {
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

    clearCodeList(): void;
    getCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDetailList(): void;
    getDetailList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDetailList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Evidence.AsObject;
    static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Evidence;
    static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
  }

  export namespace Evidence {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      codeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      detailList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

export class QICoreCoverage extends jspb.Message {
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
  getStatus(): QICoreCoverage.StatusCode | undefined;
  setStatus(value?: QICoreCoverage.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPolicyHolder(): boolean;
  clearPolicyHolder(): void;
  getPolicyHolder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPolicyHolder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSubscriber(): boolean;
  clearSubscriber(): void;
  getSubscriber(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubscriber(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSubscriberId(): boolean;
  clearSubscriberId(): void;
  getSubscriberId(): proto_r4_core_datatypes_pb.String | undefined;
  setSubscriberId(value?: proto_r4_core_datatypes_pb.String): void;

  hasBeneficiary(): boolean;
  clearBeneficiary(): void;
  getBeneficiary(): proto_r4_core_datatypes_pb.Reference | undefined;
  setBeneficiary(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDependent(): boolean;
  clearDependent(): void;
  getDependent(): proto_r4_core_datatypes_pb.String | undefined;
  setDependent(value?: proto_r4_core_datatypes_pb.String): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearPayorList(): void;
  getPayorList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPayorList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPayor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearClassValueList(): void;
  getClassValueList(): Array<QICoreCoverage.Class>;
  setClassValueList(value: Array<QICoreCoverage.Class>): void;
  addClassValue(value?: QICoreCoverage.Class, index?: number): QICoreCoverage.Class;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setOrder(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasNetwork(): boolean;
  clearNetwork(): void;
  getNetwork(): proto_r4_core_datatypes_pb.String | undefined;
  setNetwork(value?: proto_r4_core_datatypes_pb.String): void;

  clearCostToBeneficiaryList(): void;
  getCostToBeneficiaryList(): Array<QICoreCoverage.CostToBeneficiary>;
  setCostToBeneficiaryList(value: Array<QICoreCoverage.CostToBeneficiary>): void;
  addCostToBeneficiary(value?: QICoreCoverage.CostToBeneficiary, index?: number): QICoreCoverage.CostToBeneficiary;

  hasSubrogation(): boolean;
  clearSubrogation(): void;
  getSubrogation(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setSubrogation(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearContractList(): void;
  getContractList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContractList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContract(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreCoverage.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreCoverage): QICoreCoverage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreCoverage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreCoverage;
  static deserializeBinaryFromReader(message: QICoreCoverage, reader: jspb.BinaryReader): QICoreCoverage;
}

export namespace QICoreCoverage {
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
    status?: QICoreCoverage.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    policyHolder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    subscriber?: proto_r4_core_datatypes_pb.Reference.AsObject,
    subscriberId?: proto_r4_core_datatypes_pb.String.AsObject,
    beneficiary?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dependent?: proto_r4_core_datatypes_pb.String.AsObject,
    relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    payorList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    classValueList: Array<QICoreCoverage.Class.AsObject>,
    order?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    network?: proto_r4_core_datatypes_pb.String.AsObject,
    costToBeneficiaryList: Array<QICoreCoverage.CostToBeneficiary.AsObject>,
    subrogation?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    contractList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Class extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Class.AsObject;
    static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Class;
    static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
  }

  export namespace Class {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class CostToBeneficiary extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): QICoreCoverage.CostToBeneficiary.ValueX | undefined;
    setValue(value?: QICoreCoverage.CostToBeneficiary.ValueX): void;

    clearExceptionList(): void;
    getExceptionList(): Array<QICoreCoverage.CostToBeneficiary.Exemption>;
    setExceptionList(value: Array<QICoreCoverage.CostToBeneficiary.Exemption>): void;
    addException(value?: QICoreCoverage.CostToBeneficiary.Exemption, index?: number): QICoreCoverage.CostToBeneficiary.Exemption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CostToBeneficiary.AsObject;
    static toObject(includeInstance: boolean, msg: CostToBeneficiary): CostToBeneficiary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CostToBeneficiary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CostToBeneficiary;
    static deserializeBinaryFromReader(message: CostToBeneficiary, reader: jspb.BinaryReader): CostToBeneficiary;
  }

  export namespace CostToBeneficiary {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: QICoreCoverage.CostToBeneficiary.ValueX.AsObject,
      exceptionList: Array<QICoreCoverage.CostToBeneficiary.Exemption.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

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
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        MONEY = 2,
      }
    }

    export class Exemption extends jspb.Message {
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

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Exemption.AsObject;
      static toObject(includeInstance: boolean, msg: Exemption): Exemption.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Exemption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Exemption;
      static deserializeBinaryFromReader(message: Exemption, reader: jspb.BinaryReader): Exemption;
    }

    export namespace Exemption {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }
    }
  }
}

export class QICoreDevice extends jspb.Message {
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

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDefinition(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasUdiCarrier(): boolean;
  clearUdiCarrier(): void;
  getUdiCarrier(): QICoreDevice.UdiCarrier | undefined;
  setUdiCarrier(value?: QICoreDevice.UdiCarrier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreDevice.StatusCode | undefined;
  setStatus(value?: QICoreDevice.StatusCode): void;

  clearStatusReasonList(): void;
  getStatusReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setStatusReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDistinctIdentifier(): boolean;
  clearDistinctIdentifier(): void;
  getDistinctIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
  setDistinctIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.String | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufactureDate(): boolean;
  clearManufactureDate(): void;
  getManufactureDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setManufactureDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setExpirationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasSerialNumber(): boolean;
  clearSerialNumber(): void;
  getSerialNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setSerialNumber(value?: proto_r4_core_datatypes_pb.String): void;

  clearDeviceNameList(): void;
  getDeviceNameList(): Array<QICoreDevice.DeviceName>;
  setDeviceNameList(value: Array<QICoreDevice.DeviceName>): void;
  addDeviceName(value?: QICoreDevice.DeviceName, index?: number): QICoreDevice.DeviceName;

  hasModelNumber(): boolean;
  clearModelNumber(): void;
  getModelNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setModelNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasPartNumber(): boolean;
  clearPartNumber(): void;
  getPartNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setPartNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSpecializationList(): void;
  getSpecializationList(): Array<QICoreDevice.Specialization>;
  setSpecializationList(value: Array<QICoreDevice.Specialization>): void;
  addSpecialization(value?: QICoreDevice.Specialization, index?: number): QICoreDevice.Specialization;

  clearVersionList(): void;
  getVersionList(): Array<QICoreDevice.Version>;
  setVersionList(value: Array<QICoreDevice.Version>): void;
  addVersion(value?: QICoreDevice.Version, index?: number): QICoreDevice.Version;

  clearPropertyList(): void;
  getPropertyList(): Array<QICoreDevice.Property>;
  setPropertyList(value: Array<QICoreDevice.Property>): void;
  addProperty(value?: QICoreDevice.Property, index?: number): QICoreDevice.Property;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearSafetyList(): void;
  getSafetyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSafetyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSafety(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParent(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreDevice.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreDevice): QICoreDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreDevice;
  static deserializeBinaryFromReader(message: QICoreDevice, reader: jspb.BinaryReader): QICoreDevice;
}

export namespace QICoreDevice {
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
    definition?: proto_r4_core_datatypes_pb.Reference.AsObject,
    udiCarrier?: QICoreDevice.UdiCarrier.AsObject,
    status?: QICoreDevice.StatusCode.AsObject,
    statusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    distinctIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.String.AsObject,
    manufactureDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    expirationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    serialNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    deviceNameList: Array<QICoreDevice.DeviceName.AsObject>,
    modelNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    partNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specializationList: Array<QICoreDevice.Specialization.AsObject>,
    versionList: Array<QICoreDevice.Version.AsObject>,
    propertyList: Array<QICoreDevice.Property.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    safetyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    parent?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class UdiCarrier extends jspb.Message {
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

    hasDeviceIdentifier(): boolean;
    clearDeviceIdentifier(): void;
    getDeviceIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
    setDeviceIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Uri | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasJurisdiction(): boolean;
    clearJurisdiction(): void;
    getJurisdiction(): proto_r4_core_datatypes_pb.Uri | undefined;
    setJurisdiction(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCarrierAidc(): boolean;
    clearCarrierAidc(): void;
    getCarrierAidc(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
    setCarrierAidc(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

    hasCarrierHrf(): boolean;
    clearCarrierHrf(): void;
    getCarrierHrf(): proto_r4_core_datatypes_pb.String | undefined;
    setCarrierHrf(value?: proto_r4_core_datatypes_pb.String): void;

    hasEntryType(): boolean;
    clearEntryType(): void;
    getEntryType(): QICoreDevice.UdiCarrier.EntryTypeCode | undefined;
    setEntryType(value?: QICoreDevice.UdiCarrier.EntryTypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdiCarrier.AsObject;
    static toObject(includeInstance: boolean, msg: UdiCarrier): UdiCarrier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdiCarrier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdiCarrier;
    static deserializeBinaryFromReader(message: UdiCarrier, reader: jspb.BinaryReader): UdiCarrier;
  }

  export namespace UdiCarrier {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      deviceIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Uri.AsObject,
      jurisdiction?: proto_r4_core_datatypes_pb.Uri.AsObject,
      carrierAidc?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
      carrierHrf?: proto_r4_core_datatypes_pb.String.AsObject,
      entryType?: QICoreDevice.UdiCarrier.EntryTypeCode.AsObject,
    }

    export class EntryTypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EntryTypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: EntryTypeCode): EntryTypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EntryTypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EntryTypeCode;
      static deserializeBinaryFromReader(message: EntryTypeCode, reader: jspb.BinaryReader): EntryTypeCode;
    }

    export namespace EntryTypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DeviceName extends jspb.Message {
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): QICoreDevice.DeviceName.TypeCode | undefined;
    setType(value?: QICoreDevice.DeviceName.TypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceName.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceName): DeviceName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceName;
    static deserializeBinaryFromReader(message: DeviceName, reader: jspb.BinaryReader): DeviceName;
  }

  export namespace DeviceName {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: QICoreDevice.DeviceName.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Specialization extends jspb.Message {
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

    hasSystemType(): boolean;
    clearSystemType(): void;
    getSystemType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSystemType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Specialization.AsObject;
    static toObject(includeInstance: boolean, msg: Specialization): Specialization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Specialization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Specialization;
    static deserializeBinaryFromReader(message: Specialization, reader: jspb.BinaryReader): Specialization;
  }

  export namespace Specialization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      systemType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Version extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasComponent(): boolean;
    clearComponent(): void;
    getComponent(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setComponent(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
  }

  export namespace Version {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      component?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Property extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearValueQuantityList(): void;
    getValueQuantityList(): Array<proto_r4_core_datatypes_pb.Quantity>;
    setValueQuantityList(value: Array<proto_r4_core_datatypes_pb.Quantity>): void;
    addValueQuantity(value?: proto_r4_core_datatypes_pb.Quantity, index?: number): proto_r4_core_datatypes_pb.Quantity;

    clearValueCodeList(): void;
    getValueCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setValueCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addValueCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      valueQuantityList: Array<proto_r4_core_datatypes_pb.Quantity.AsObject>,
      valueCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }
}

export class QICoreDeviceRequest extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPriorRequestList(): void;
  getPriorRequestList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPriorRequestList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPriorRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreDeviceRequest.StatusCode | undefined;
  setStatus(value?: QICoreDeviceRequest.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): QICoreDeviceRequest.IntentCode | undefined;
  setIntent(value?: QICoreDeviceRequest.IntentCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): QICoreDeviceRequest.PriorityCode | undefined;
  setPriority(value?: QICoreDeviceRequest.PriorityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): QICoreDeviceRequest.CodeX | undefined;
  setCode(value?: QICoreDeviceRequest.CodeX): void;

  clearParameterList(): void;
  getParameterList(): Array<QICoreDeviceRequest.Parameter>;
  setParameterList(value: Array<QICoreDeviceRequest.Parameter>): void;
  addParameter(value?: QICoreDeviceRequest.Parameter, index?: number): QICoreDeviceRequest.Parameter;

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
  getOccurrence(): QICoreDeviceRequest.OccurrenceX | undefined;
  setOccurrence(value?: QICoreDeviceRequest.OccurrenceX): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearRelevantHistoryList(): void;
  getRelevantHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreDeviceRequest): QICoreDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreDeviceRequest;
  static deserializeBinaryFromReader(message: QICoreDeviceRequest, reader: jspb.BinaryReader): QICoreDeviceRequest;
}

export namespace QICoreDeviceRequest {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    priorRequestList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: QICoreDeviceRequest.StatusCode.AsObject,
    intent?: QICoreDeviceRequest.IntentCode.AsObject,
    priority?: QICoreDeviceRequest.PriorityCode.AsObject,
    code?: QICoreDeviceRequest.CodeX.AsObject,
    parameterList: Array<QICoreDeviceRequest.Parameter.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: QICoreDeviceRequest.OccurrenceX.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfoList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    relevantHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CodeX extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): CodeX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeX.AsObject;
    static toObject(includeInstance: boolean, msg: CodeX): CodeX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeX;
    static deserializeBinaryFromReader(message: CodeX, reader: jspb.BinaryReader): CodeX;
  }

  export namespace CodeX {
    export type AsObject = {
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      REFERENCE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class Parameter extends jspb.Message {
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
    getValue(): QICoreDeviceRequest.Parameter.ValueX | undefined;
    setValue(value?: QICoreDeviceRequest.Parameter.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: QICoreDeviceRequest.Parameter.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

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
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        QUANTITY = 2,
        RANGE = 3,
        BOOLEAN = 4,
      }
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

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

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
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
    }
  }
}

export class DeviceUseStatementQICoreNotDoneExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): DeviceUseStatementQICoreNotDoneExtension.ValueX | undefined;
  setValue(value?: DeviceUseStatementQICoreNotDoneExtension.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUseStatementQICoreNotDoneExtension.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUseStatementQICoreNotDoneExtension): DeviceUseStatementQICoreNotDoneExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUseStatementQICoreNotDoneExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUseStatementQICoreNotDoneExtension;
  static deserializeBinaryFromReader(message: DeviceUseStatementQICoreNotDoneExtension, reader: jspb.BinaryReader): DeviceUseStatementQICoreNotDoneExtension;
}

export namespace DeviceUseStatementQICoreNotDoneExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    value?: DeviceUseStatementQICoreNotDoneExtension.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

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
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
    }
  }
}

export class QICoreDeviceUseStatement extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreDeviceUseStatement.StatusCode | undefined;
  setStatus(value?: QICoreDeviceUseStatement.StatusCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDerivedFromList(): void;
  getDerivedFromList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFromList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasTiming(): boolean;
  clearTiming(): void;
  getTiming(): QICoreDeviceUseStatement.TimingX | undefined;
  setTiming(value?: QICoreDeviceUseStatement.TimingX): void;

  hasRecordedOn(): boolean;
  clearRecordedOn(): void;
  getRecordedOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasNotDone(): boolean;
  clearNotDone(): void;
  getNotDone(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setNotDone(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreDeviceUseStatement.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreDeviceUseStatement): QICoreDeviceUseStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreDeviceUseStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreDeviceUseStatement;
  static deserializeBinaryFromReader(message: QICoreDeviceUseStatement, reader: jspb.BinaryReader): QICoreDeviceUseStatement;
}

export namespace QICoreDeviceUseStatement {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreDeviceUseStatement.StatusCode.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    derivedFromList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    timing?: QICoreDeviceUseStatement.TimingX.AsObject,
    recordedOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    source?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    notDone?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceUseStatementStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class TimingX extends jspb.Message {
    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

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
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      TIMING = 1,
      PERIOD = 2,
      DATE_TIME = 3,
    }
  }
}

export class QICoreDiagnosticReportLab extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreDiagnosticReportLab.StatusCode | undefined;
  setStatus(value?: QICoreDiagnosticReportLab.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
  getEffective(): QICoreDiagnosticReportLab.EffectiveX | undefined;
  setEffective(value?: QICoreDiagnosticReportLab.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultsInterpreterList(): void;
  getResultsInterpreterList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultsInterpreterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultsInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimenList(): void;
  getSpecimenList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimenList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultList(): void;
  getResultList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResult(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearImagingStudyList(): void;
  getImagingStudyList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImagingStudyList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMediaList(): void;
  getMediaList(): Array<QICoreDiagnosticReportLab.Media>;
  setMediaList(value: Array<QICoreDiagnosticReportLab.Media>): void;
  addMedia(value?: QICoreDiagnosticReportLab.Media, index?: number): QICoreDiagnosticReportLab.Media;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_r4_core_datatypes_pb.String | undefined;
  setConclusion(value?: proto_r4_core_datatypes_pb.String): void;

  clearConclusionCodeList(): void;
  getConclusionCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConclusionCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addConclusionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPresentedFormList(): void;
  getPresentedFormList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPresentedFormList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasLocationPerformed(): boolean;
  clearLocationPerformed(): void;
  getLocationPerformed(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocationPerformed(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreDiagnosticReportLab.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreDiagnosticReportLab): QICoreDiagnosticReportLab.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreDiagnosticReportLab, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreDiagnosticReportLab;
  static deserializeBinaryFromReader(message: QICoreDiagnosticReportLab, reader: jspb.BinaryReader): QICoreDiagnosticReportLab;
}

export namespace QICoreDiagnosticReportLab {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreDiagnosticReportLab.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: QICoreDiagnosticReportLab.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultsInterpreterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimenList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    imagingStudyList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    mediaList: Array<QICoreDiagnosticReportLab.Media.AsObject>,
    conclusion?: proto_r4_core_datatypes_pb.String.AsObject,
    conclusionCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    presentedFormList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    locationPerformed?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap],
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

  export class Media extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      link?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class QICoreDiagnosticReportNote extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreDiagnosticReportNote.StatusCode | undefined;
  setStatus(value?: QICoreDiagnosticReportNote.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
  getEffective(): QICoreDiagnosticReportNote.EffectiveX | undefined;
  setEffective(value?: QICoreDiagnosticReportNote.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultsInterpreterList(): void;
  getResultsInterpreterList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultsInterpreterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultsInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimenList(): void;
  getSpecimenList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimenList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultList(): void;
  getResultList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResult(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearImagingStudyList(): void;
  getImagingStudyList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImagingStudyList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMediaList(): void;
  getMediaList(): Array<QICoreDiagnosticReportNote.Media>;
  setMediaList(value: Array<QICoreDiagnosticReportNote.Media>): void;
  addMedia(value?: QICoreDiagnosticReportNote.Media, index?: number): QICoreDiagnosticReportNote.Media;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_r4_core_datatypes_pb.String | undefined;
  setConclusion(value?: proto_r4_core_datatypes_pb.String): void;

  clearConclusionCodeList(): void;
  getConclusionCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConclusionCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addConclusionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPresentedFormList(): void;
  getPresentedFormList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPresentedFormList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasLocationPerformed(): boolean;
  clearLocationPerformed(): void;
  getLocationPerformed(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocationPerformed(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreDiagnosticReportNote.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreDiagnosticReportNote): QICoreDiagnosticReportNote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreDiagnosticReportNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreDiagnosticReportNote;
  static deserializeBinaryFromReader(message: QICoreDiagnosticReportNote, reader: jspb.BinaryReader): QICoreDiagnosticReportNote;
}

export namespace QICoreDiagnosticReportNote {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreDiagnosticReportNote.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: QICoreDiagnosticReportNote.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultsInterpreterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimenList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    imagingStudyList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    mediaList: Array<QICoreDiagnosticReportNote.Media.AsObject>,
    conclusion?: proto_r4_core_datatypes_pb.String.AsObject,
    conclusionCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    presentedFormList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    locationPerformed?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap],
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

  export class Media extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      link?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class EncounterEncounterProcedureExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRank(): boolean;
  clearRank(): void;
  getRank(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setRank(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasProcedure(): boolean;
  clearProcedure(): void;
  getProcedure(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProcedure(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterEncounterProcedureExtension.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterEncounterProcedureExtension): EncounterEncounterProcedureExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterEncounterProcedureExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterEncounterProcedureExtension;
  static deserializeBinaryFromReader(message: EncounterEncounterProcedureExtension, reader: jspb.BinaryReader): EncounterEncounterProcedureExtension;
}

export namespace EncounterEncounterProcedureExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    rank?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    procedure?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

export class QICoreEncounter extends jspb.Message {
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
  getStatus(): QICoreEncounter.StatusCode | undefined;
  setStatus(value?: QICoreEncounter.StatusCode): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<QICoreEncounter.StatusHistory>;
  setStatusHistoryList(value: Array<QICoreEncounter.StatusHistory>): void;
  addStatusHistory(value?: QICoreEncounter.StatusHistory, index?: number): QICoreEncounter.StatusHistory;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
  setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

  clearClassHistoryList(): void;
  getClassHistoryList(): Array<QICoreEncounter.ClassHistory>;
  setClassHistoryList(value: Array<QICoreEncounter.ClassHistory>): void;
  addClassHistory(value?: QICoreEncounter.ClassHistory, index?: number): QICoreEncounter.ClassHistory;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasServiceType(): boolean;
  clearServiceType(): void;
  getServiceType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setServiceType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearEpisodeOfCareList(): void;
  getEpisodeOfCareList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEpisodeOfCareList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEpisodeOfCare(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearParticipantList(): void;
  getParticipantList(): Array<QICoreEncounter.Participant>;
  setParticipantList(value: Array<QICoreEncounter.Participant>): void;
  addParticipant(value?: QICoreEncounter.Participant, index?: number): QICoreEncounter.Participant;

  clearAppointmentList(): void;
  getAppointmentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAppointmentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAppointment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): proto_r4_core_datatypes_pb.Duration | undefined;
  setLength(value?: proto_r4_core_datatypes_pb.Duration): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<QICoreEncounter.Diagnosis>;
  setDiagnosisList(value: Array<QICoreEncounter.Diagnosis>): void;
  addDiagnosis(value?: QICoreEncounter.Diagnosis, index?: number): QICoreEncounter.Diagnosis;

  clearAccountList(): void;
  getAccountList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAccountList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAccount(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasHospitalization(): boolean;
  clearHospitalization(): void;
  getHospitalization(): QICoreEncounter.Hospitalization | undefined;
  setHospitalization(value?: QICoreEncounter.Hospitalization): void;

  clearLocationList(): void;
  getLocationList(): Array<QICoreEncounter.Location>;
  setLocationList(value: Array<QICoreEncounter.Location>): void;
  addLocation(value?: QICoreEncounter.Location, index?: number): QICoreEncounter.Location;

  hasServiceProvider(): boolean;
  clearServiceProvider(): void;
  getServiceProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setServiceProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReasonCancelled(): boolean;
  clearReasonCancelled(): void;
  getReasonCancelled(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonCancelled(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearProcedureList(): void;
  getProcedureList(): Array<EncounterEncounterProcedureExtension>;
  setProcedureList(value: Array<EncounterEncounterProcedureExtension>): void;
  addProcedure(value?: EncounterEncounterProcedureExtension, index?: number): EncounterEncounterProcedureExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreEncounter.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreEncounter): QICoreEncounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreEncounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreEncounter;
  static deserializeBinaryFromReader(message: QICoreEncounter, reader: jspb.BinaryReader): QICoreEncounter;
}

export namespace QICoreEncounter {
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
    status?: QICoreEncounter.StatusCode.AsObject,
    statusHistoryList: Array<QICoreEncounter.StatusHistory.AsObject>,
    classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
    classHistoryList: Array<QICoreEncounter.ClassHistory.AsObject>,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    episodeOfCareList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    participantList: Array<QICoreEncounter.Participant.AsObject>,
    appointmentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    length?: proto_r4_core_datatypes_pb.Duration.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    diagnosisList: Array<QICoreEncounter.Diagnosis.AsObject>,
    accountList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    hospitalization?: QICoreEncounter.Hospitalization.AsObject,
    locationList: Array<QICoreEncounter.Location.AsObject>,
    serviceProvider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCancelled?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    procedureList: Array<EncounterEncounterProcedureExtension.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StatusHistory extends jspb.Message {
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

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): QICoreEncounter.StatusHistory.StatusCode | undefined;
    setStatus(value?: QICoreEncounter.StatusHistory.StatusCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusHistory.AsObject;
    static toObject(includeInstance: boolean, msg: StatusHistory): StatusHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusHistory;
    static deserializeBinaryFromReader(message: StatusHistory, reader: jspb.BinaryReader): StatusHistory;
  }

  export namespace StatusHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      status?: QICoreEncounter.StatusHistory.StatusCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class ClassHistory extends jspb.Message {
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

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
    setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassHistory.AsObject;
    static toObject(includeInstance: boolean, msg: ClassHistory): ClassHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassHistory;
    static deserializeBinaryFromReader(message: ClassHistory, reader: jspb.BinaryReader): ClassHistory;
  }

  export namespace ClassHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }

  export class Participant extends jspb.Message {
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

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIndividual(): boolean;
    clearIndividual(): void;
    getIndividual(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIndividual(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      individual?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Diagnosis extends jspb.Message {
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

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCondition(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasUse(): boolean;
    clearUse(): void;
    getUse(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUse(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRank(): boolean;
    clearRank(): void;
    getRank(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setRank(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Diagnosis.AsObject;
    static toObject(includeInstance: boolean, msg: Diagnosis): Diagnosis.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Diagnosis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Diagnosis;
    static deserializeBinaryFromReader(message: Diagnosis, reader: jspb.BinaryReader): Diagnosis;
  }

  export namespace Diagnosis {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      condition?: proto_r4_core_datatypes_pb.Reference.AsObject,
      use?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      rank?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    }
  }

  export class Hospitalization extends jspb.Message {
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

    hasPreAdmissionIdentifier(): boolean;
    clearPreAdmissionIdentifier(): void;
    getPreAdmissionIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setPreAdmissionIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrigin(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAdmitSource(): boolean;
    clearAdmitSource(): void;
    getAdmitSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdmitSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReAdmission(): boolean;
    clearReAdmission(): void;
    getReAdmission(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReAdmission(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearDietPreferenceList(): void;
    getDietPreferenceList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setDietPreferenceList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addDietPreference(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialCourtesyList(): void;
    getSpecialCourtesyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialCourtesyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialCourtesy(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialArrangementList(): void;
    getSpecialArrangementList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialArrangementList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialArrangement(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDestination(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDischargeDisposition(): boolean;
    clearDischargeDisposition(): void;
    getDischargeDisposition(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDischargeDisposition(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hospitalization.AsObject;
    static toObject(includeInstance: boolean, msg: Hospitalization): Hospitalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hospitalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hospitalization;
    static deserializeBinaryFromReader(message: Hospitalization, reader: jspb.BinaryReader): Hospitalization;
  }

  export namespace Hospitalization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      preAdmissionIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      origin?: proto_r4_core_datatypes_pb.Reference.AsObject,
      admitSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reAdmission?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      dietPreferenceList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialCourtesyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialArrangementList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      destination?: proto_r4_core_datatypes_pb.Reference.AsObject,
      dischargeDisposition?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Location extends jspb.Message {
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

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): QICoreEncounter.Location.StatusCode | undefined;
    setStatus(value?: QICoreEncounter.Location.StatusCode): void;

    hasPhysicalType(): boolean;
    clearPhysicalType(): void;
    getPhysicalType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPhysicalType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      location?: proto_r4_core_datatypes_pb.Reference.AsObject,
      status?: QICoreEncounter.Location.StatusCode.AsObject,
      physicalType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class QICoreFamilyMemberHistory extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreFamilyMemberHistory.StatusCode | undefined;
  setStatus(value?: QICoreFamilyMemberHistory.StatusCode): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSex(): boolean;
  clearSex(): void;
  getSex(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSex(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBorn(): boolean;
  clearBorn(): void;
  getBorn(): QICoreFamilyMemberHistory.BornX | undefined;
  setBorn(value?: QICoreFamilyMemberHistory.BornX): void;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): QICoreFamilyMemberHistory.AgeX | undefined;
  setAge(value?: QICoreFamilyMemberHistory.AgeX): void;

  hasEstimatedAge(): boolean;
  clearEstimatedAge(): void;
  getEstimatedAge(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setEstimatedAge(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): QICoreFamilyMemberHistory.DeceasedX | undefined;
  setDeceased(value?: QICoreFamilyMemberHistory.DeceasedX): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearConditionList(): void;
  getConditionList(): Array<QICoreFamilyMemberHistory.Condition>;
  setConditionList(value: Array<QICoreFamilyMemberHistory.Condition>): void;
  addCondition(value?: QICoreFamilyMemberHistory.Condition, index?: number): QICoreFamilyMemberHistory.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreFamilyMemberHistory.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreFamilyMemberHistory): QICoreFamilyMemberHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreFamilyMemberHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreFamilyMemberHistory;
  static deserializeBinaryFromReader(message: QICoreFamilyMemberHistory, reader: jspb.BinaryReader): QICoreFamilyMemberHistory;
}

export namespace QICoreFamilyMemberHistory {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    status?: QICoreFamilyMemberHistory.StatusCode.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    sex?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    born?: QICoreFamilyMemberHistory.BornX.AsObject,
    age?: QICoreFamilyMemberHistory.AgeX.AsObject,
    estimatedAge?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    deceased?: QICoreFamilyMemberHistory.DeceasedX.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    conditionList: Array<QICoreFamilyMemberHistory.Condition.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FamilyHistoryStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class BornX extends jspb.Message {
    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): BornX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BornX.AsObject;
    static toObject(includeInstance: boolean, msg: BornX): BornX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BornX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BornX;
    static deserializeBinaryFromReader(message: BornX, reader: jspb.BinaryReader): BornX;
  }

  export namespace BornX {
    export type AsObject = {
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      PERIOD = 1,
      DATE = 2,
      STRING_VALUE = 3,
    }
  }

  export class AgeX extends jspb.Message {
    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

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
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      AGE = 1,
      RANGE = 2,
      STRING_VALUE = 3,
    }
  }

  export class DeceasedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): DeceasedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeceasedX.AsObject;
    static toObject(includeInstance: boolean, msg: DeceasedX): DeceasedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeceasedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeceasedX;
    static deserializeBinaryFromReader(message: DeceasedX, reader: jspb.BinaryReader): DeceasedX;
  }

  export namespace DeceasedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      AGE = 2,
      RANGE = 3,
      DATE = 4,
      STRING_VALUE = 5,
    }
  }

  export class Condition extends jspb.Message {
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

    hasOutcome(): boolean;
    clearOutcome(): void;
    getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasContributedToDeath(): boolean;
    clearContributedToDeath(): void;
    getContributedToDeath(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setContributedToDeath(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasOnset(): boolean;
    clearOnset(): void;
    getOnset(): QICoreFamilyMemberHistory.Condition.OnsetX | undefined;
    setOnset(value?: QICoreFamilyMemberHistory.Condition.OnsetX): void;

    clearNoteList(): void;
    getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    hasConditionAbatement(): boolean;
    clearConditionAbatement(): void;
    getConditionAbatement(): proto_r4_core_extensions_pb.FamilyMemberHistoryAbatement.ValueX | undefined;
    setConditionAbatement(value?: proto_r4_core_extensions_pb.FamilyMemberHistoryAbatement.ValueX): void;

    hasConditionSeverity(): boolean;
    clearConditionSeverity(): void;
    getConditionSeverity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setConditionSeverity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Condition.AsObject;
    static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Condition;
    static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
  }

  export namespace Condition {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      contributedToDeath?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      onset?: QICoreFamilyMemberHistory.Condition.OnsetX.AsObject,
      noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      conditionAbatement?: proto_r4_core_extensions_pb.FamilyMemberHistoryAbatement.ValueX.AsObject,
      conditionSeverity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class OnsetX extends jspb.Message {
      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): OnsetX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OnsetX.AsObject;
      static toObject(includeInstance: boolean, msg: OnsetX): OnsetX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OnsetX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OnsetX;
      static deserializeBinaryFromReader(message: OnsetX, reader: jspb.BinaryReader): OnsetX;
    }

    export namespace OnsetX {
      export type AsObject = {
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        AGE = 1,
        RANGE = 2,
        PERIOD = 3,
        STRING_VALUE = 4,
      }
    }
  }
}

export class QICoreFlag extends jspb.Message {
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
  getStatus(): QICoreFlag.StatusCode | undefined;
  setStatus(value?: QICoreFlag.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreFlag.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreFlag): QICoreFlag.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreFlag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreFlag;
  static deserializeBinaryFromReader(message: QICoreFlag, reader: jspb.BinaryReader): QICoreFlag;
}

export namespace QICoreFlag {
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
    status?: QICoreFlag.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FlagStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FlagStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FlagStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FlagStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FlagStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FlagStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class QICoreGoal extends jspb.Message {
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

  hasLifecycleStatus(): boolean;
  clearLifecycleStatus(): void;
  getLifecycleStatus(): QICoreGoal.LifecycleStatusCode | undefined;
  setLifecycleStatus(value?: QICoreGoal.LifecycleStatusCode): void;

  hasAchievementStatus(): boolean;
  clearAchievementStatus(): void;
  getAchievementStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAchievementStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): QICoreGoal.StartX | undefined;
  setStart(value?: QICoreGoal.StartX): void;

  clearTargetList(): void;
  getTargetList(): Array<QICoreGoal.Target>;
  setTargetList(value: Array<QICoreGoal.Target>): void;
  addTarget(value?: QICoreGoal.Target, index?: number): QICoreGoal.Target;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setStatusDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.String | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.String): void;

  hasExpressedBy(): boolean;
  clearExpressedBy(): void;
  getExpressedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setExpressedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAddressesList(): void;
  getAddressesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddressesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearOutcomeCodeList(): void;
  getOutcomeCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOutcomeCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOutcomeCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearOutcomeReferenceList(): void;
  getOutcomeReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setOutcomeReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasReasonRejected(): boolean;
  clearReasonRejected(): void;
  getReasonRejected(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonRejected(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreGoal.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreGoal): QICoreGoal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreGoal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreGoal;
  static deserializeBinaryFromReader(message: QICoreGoal, reader: jspb.BinaryReader): QICoreGoal;
}

export namespace QICoreGoal {
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
    lifecycleStatus?: QICoreGoal.LifecycleStatusCode.AsObject,
    achievementStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    start?: QICoreGoal.StartX.AsObject,
    targetList: Array<QICoreGoal.Target.AsObject>,
    statusDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.String.AsObject,
    expressedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    addressesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    outcomeCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcomeReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    reasonRejected?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }

  export class LifecycleStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LifecycleStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: LifecycleStatusCode): LifecycleStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LifecycleStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LifecycleStatusCode;
    static deserializeBinaryFromReader(message: LifecycleStatusCode, reader: jspb.BinaryReader): LifecycleStatusCode;
  }

  export namespace LifecycleStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StartX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    getChoiceCase(): StartX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartX.AsObject;
    static toObject(includeInstance: boolean, msg: StartX): StartX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartX;
    static deserializeBinaryFromReader(message: StartX, reader: jspb.BinaryReader): StartX;
  }

  export namespace StartX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
    }
  }

  export class Target extends jspb.Message {
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

    hasMeasure(): boolean;
    clearMeasure(): void;
    getMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): QICoreGoal.Target.DetailX | undefined;
    setDetail(value?: QICoreGoal.Target.DetailX): void;

    hasDue(): boolean;
    clearDue(): void;
    getDue(): QICoreGoal.Target.DueX | undefined;
    setDue(value?: QICoreGoal.Target.DueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
  }

  export namespace Target {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      measure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      detail?: QICoreGoal.Target.DetailX.AsObject,
      due?: QICoreGoal.Target.DueX.AsObject,
    }

    export class DetailX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      getChoiceCase(): DetailX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DetailX.AsObject;
      static toObject(includeInstance: boolean, msg: DetailX): DetailX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DetailX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DetailX;
      static deserializeBinaryFromReader(message: DetailX, reader: jspb.BinaryReader): DetailX;
    }

    export namespace DetailX {
      export type AsObject = {
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        CODEABLE_CONCEPT = 3,
        STRING_VALUE = 4,
        BOOLEAN = 5,
        INTEGER = 6,
        RATIO = 7,
      }
    }

    export class DueX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      getChoiceCase(): DueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DueX.AsObject;
      static toObject(includeInstance: boolean, msg: DueX): DueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DueX;
      static deserializeBinaryFromReader(message: DueX, reader: jspb.BinaryReader): DueX;
    }

    export namespace DueX {
      export type AsObject = {
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
        DURATION = 2,
      }
    }
  }
}

export class QICoreImagingStudy extends jspb.Message {
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
  getStatus(): QICoreImagingStudy.StatusCode | undefined;
  setStatus(value?: QICoreImagingStudy.StatusCode): void;

  clearModalityList(): void;
  getModalityList(): Array<proto_r4_core_datatypes_pb.Coding>;
  setModalityList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addModality(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStarted(): boolean;
  clearStarted(): void;
  getStarted(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setStarted(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasReferrer(): boolean;
  clearReferrer(): void;
  getReferrer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferrer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearInterpreterList(): void;
  getInterpreterList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInterpreterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasNumberOfSeries(): boolean;
  clearNumberOfSeries(): void;
  getNumberOfSeries(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setNumberOfSeries(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  hasNumberOfInstances(): boolean;
  clearNumberOfInstances(): void;
  getNumberOfInstances(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setNumberOfInstances(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  hasProcedureReference(): boolean;
  clearProcedureReference(): void;
  getProcedureReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProcedureReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearProcedureCodeList(): void;
  getProcedureCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProcedureCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProcedureCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSeriesList(): void;
  getSeriesList(): Array<QICoreImagingStudy.Series>;
  setSeriesList(value: Array<QICoreImagingStudy.Series>): void;
  addSeries(value?: QICoreImagingStudy.Series, index?: number): QICoreImagingStudy.Series;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreImagingStudy.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreImagingStudy): QICoreImagingStudy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreImagingStudy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreImagingStudy;
  static deserializeBinaryFromReader(message: QICoreImagingStudy, reader: jspb.BinaryReader): QICoreImagingStudy;
}

export namespace QICoreImagingStudy {
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
    status?: QICoreImagingStudy.StatusCode.AsObject,
    modalityList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    started?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    referrer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    interpreterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    numberOfSeries?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    numberOfInstances?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    procedureReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    procedureCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    seriesList: Array<QICoreImagingStudy.Series.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Series extends jspb.Message {
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

    hasUid(): boolean;
    clearUid(): void;
    getUid(): proto_r4_core_datatypes_pb.Id | undefined;
    setUid(value?: proto_r4_core_datatypes_pb.Id): void;

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasModality(): boolean;
    clearModality(): void;
    getModality(): proto_r4_core_datatypes_pb.Coding | undefined;
    setModality(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasNumberOfInstances(): boolean;
    clearNumberOfInstances(): void;
    getNumberOfInstances(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumberOfInstances(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    clearEndpointList(): void;
    getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.Coding | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasLaterality(): boolean;
    clearLaterality(): void;
    getLaterality(): proto_r4_core_datatypes_pb.Coding | undefined;
    setLaterality(value?: proto_r4_core_datatypes_pb.Coding): void;

    clearSpecimenList(): void;
    getSpecimenList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSpecimenList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasStarted(): boolean;
    clearStarted(): void;
    getStarted(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setStarted(value?: proto_r4_core_datatypes_pb.DateTime): void;

    clearPerformerList(): void;
    getPerformerList(): Array<QICoreImagingStudy.Series.Performer>;
    setPerformerList(value: Array<QICoreImagingStudy.Series.Performer>): void;
    addPerformer(value?: QICoreImagingStudy.Series.Performer, index?: number): QICoreImagingStudy.Series.Performer;

    clearInstanceList(): void;
    getInstanceList(): Array<QICoreImagingStudy.Series.Instance>;
    setInstanceList(value: Array<QICoreImagingStudy.Series.Instance>): void;
    addInstance(value?: QICoreImagingStudy.Series.Instance, index?: number): QICoreImagingStudy.Series.Instance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Series.AsObject;
    static toObject(includeInstance: boolean, msg: Series): Series.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Series, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Series;
    static deserializeBinaryFromReader(message: Series, reader: jspb.BinaryReader): Series;
  }

  export namespace Series {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      uid?: proto_r4_core_datatypes_pb.Id.AsObject,
      number?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      modality?: proto_r4_core_datatypes_pb.Coding.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      numberOfInstances?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      bodySite?: proto_r4_core_datatypes_pb.Coding.AsObject,
      laterality?: proto_r4_core_datatypes_pb.Coding.AsObject,
      specimenList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      started?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      performerList: Array<QICoreImagingStudy.Series.Performer.AsObject>,
      instanceList: Array<QICoreImagingStudy.Series.Instance.AsObject>,
    }

    export class Performer extends jspb.Message {
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

      hasFunction(): boolean;
      clearFunction(): void;
      getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasActor(): boolean;
      clearActor(): void;
      getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
      setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Performer.AsObject;
      static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Performer;
      static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
    }

    export namespace Performer {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }
    }

    export class Instance extends jspb.Message {
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

      hasUid(): boolean;
      clearUid(): void;
      getUid(): proto_r4_core_datatypes_pb.Id | undefined;
      setUid(value?: proto_r4_core_datatypes_pb.Id): void;

      hasSopClass(): boolean;
      clearSopClass(): void;
      getSopClass(): proto_r4_core_datatypes_pb.Coding | undefined;
      setSopClass(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasNumber(): boolean;
      clearNumber(): void;
      getNumber(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasTitle(): boolean;
      clearTitle(): void;
      getTitle(): proto_r4_core_datatypes_pb.String | undefined;
      setTitle(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Instance.AsObject;
      static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Instance;
      static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
    }

    export namespace Instance {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        uid?: proto_r4_core_datatypes_pb.Id.AsObject,
        sopClass?: proto_r4_core_datatypes_pb.Coding.AsObject,
        number?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        title?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }
}

export class QICoreImmunization extends jspb.Message {
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
  getStatus(): QICoreImmunization.StatusCode | undefined;
  setStatus(value?: QICoreImmunization.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVaccineCode(): boolean;
  clearVaccineCode(): void;
  getVaccineCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVaccineCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): QICoreImmunization.OccurrenceX | undefined;
  setOccurrence(value?: QICoreImmunization.OccurrenceX): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecorded(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPrimarySource(): boolean;
  clearPrimarySource(): void;
  getPrimarySource(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setPrimarySource(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReportOrigin(): boolean;
  clearReportOrigin(): void;
  getReportOrigin(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReportOrigin(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setExpirationDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasSite(): boolean;
  clearSite(): void;
  getSite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDoseQuantity(): boolean;
  clearDoseQuantity(): void;
  getDoseQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
  setDoseQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

  clearPerformerList(): void;
  getPerformerList(): Array<QICoreImmunization.Performer>;
  setPerformerList(value: Array<QICoreImmunization.Performer>): void;
  addPerformer(value?: QICoreImmunization.Performer, index?: number): QICoreImmunization.Performer;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasIsSubpotent(): boolean;
  clearIsSubpotent(): void;
  getIsSubpotent(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setIsSubpotent(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearSubpotentReasonList(): void;
  getSubpotentReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSubpotentReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSubpotentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearEducationList(): void;
  getEducationList(): Array<QICoreImmunization.Education>;
  setEducationList(value: Array<QICoreImmunization.Education>): void;
  addEducation(value?: QICoreImmunization.Education, index?: number): QICoreImmunization.Education;

  clearProgramEligibilityList(): void;
  getProgramEligibilityList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProgramEligibilityList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProgramEligibility(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasFundingSource(): boolean;
  clearFundingSource(): void;
  getFundingSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundingSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReactionList(): void;
  getReactionList(): Array<QICoreImmunization.Reaction>;
  setReactionList(value: Array<QICoreImmunization.Reaction>): void;
  addReaction(value?: QICoreImmunization.Reaction, index?: number): QICoreImmunization.Reaction;

  clearProtocolAppliedList(): void;
  getProtocolAppliedList(): Array<QICoreImmunization.ProtocolApplied>;
  setProtocolAppliedList(value: Array<QICoreImmunization.ProtocolApplied>): void;
  addProtocolApplied(value?: QICoreImmunization.ProtocolApplied, index?: number): QICoreImmunization.ProtocolApplied;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreImmunization.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreImmunization): QICoreImmunization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreImmunization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreImmunization;
  static deserializeBinaryFromReader(message: QICoreImmunization, reader: jspb.BinaryReader): QICoreImmunization;
}

export namespace QICoreImmunization {
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
    status?: QICoreImmunization.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    vaccineCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: QICoreImmunization.OccurrenceX.AsObject,
    recorded?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    primarySource?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    reportOrigin?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    expirationDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    site?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    route?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    doseQuantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    performerList: Array<QICoreImmunization.Performer.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    isSubpotent?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subpotentReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    educationList: Array<QICoreImmunization.Education.AsObject>,
    programEligibilityList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    fundingSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reactionList: Array<QICoreImmunization.Reaction.AsObject>,
    protocolAppliedList: Array<QICoreImmunization.ProtocolApplied.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap]): void;

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
      value: proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OccurrenceX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

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
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      STRING_VALUE = 2,
    }
  }

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Education extends jspb.Message {
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

    hasDocumentType(): boolean;
    clearDocumentType(): void;
    getDocumentType(): proto_r4_core_datatypes_pb.String | undefined;
    setDocumentType(value?: proto_r4_core_datatypes_pb.String): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Uri | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasPublicationDate(): boolean;
    clearPublicationDate(): void;
    getPublicationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setPublicationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPresentationDate(): boolean;
    clearPresentationDate(): void;
    getPresentationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setPresentationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Education.AsObject;
    static toObject(includeInstance: boolean, msg: Education): Education.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Education, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Education;
    static deserializeBinaryFromReader(message: Education, reader: jspb.BinaryReader): Education;
  }

  export namespace Education {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      documentType?: proto_r4_core_datatypes_pb.String.AsObject,
      reference?: proto_r4_core_datatypes_pb.Uri.AsObject,
      publicationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      presentationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }
  }

  export class Reaction extends jspb.Message {
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

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDetail(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasReported(): boolean;
    clearReported(): void;
    getReported(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setReported(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reaction.AsObject;
    static toObject(includeInstance: boolean, msg: Reaction): Reaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reaction;
    static deserializeBinaryFromReader(message: Reaction, reader: jspb.BinaryReader): Reaction;
  }

  export namespace Reaction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      detail?: proto_r4_core_datatypes_pb.Reference.AsObject,
      reported?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }

  export class ProtocolApplied extends jspb.Message {
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

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): proto_r4_core_datatypes_pb.String | undefined;
    setSeries(value?: proto_r4_core_datatypes_pb.String): void;

    hasAuthority(): boolean;
    clearAuthority(): void;
    getAuthority(): proto_r4_core_datatypes_pb.Reference | undefined;
    setAuthority(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearTargetDiseaseList(): void;
    getTargetDiseaseList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTargetDiseaseList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addTargetDisease(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDoseNumber(): boolean;
    clearDoseNumber(): void;
    getDoseNumber(): QICoreImmunization.ProtocolApplied.DoseNumberX | undefined;
    setDoseNumber(value?: QICoreImmunization.ProtocolApplied.DoseNumberX): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): QICoreImmunization.ProtocolApplied.SeriesDosesX | undefined;
    setSeriesDoses(value?: QICoreImmunization.ProtocolApplied.SeriesDosesX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtocolApplied.AsObject;
    static toObject(includeInstance: boolean, msg: ProtocolApplied): ProtocolApplied.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtocolApplied, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtocolApplied;
    static deserializeBinaryFromReader(message: ProtocolApplied, reader: jspb.BinaryReader): ProtocolApplied;
  }

  export namespace ProtocolApplied {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      series?: proto_r4_core_datatypes_pb.String.AsObject,
      authority?: proto_r4_core_datatypes_pb.Reference.AsObject,
      targetDiseaseList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      doseNumber?: QICoreImmunization.ProtocolApplied.DoseNumberX.AsObject,
      seriesDoses?: QICoreImmunization.ProtocolApplied.SeriesDosesX.AsObject,
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

export class QICoreImmunizationEvaluation extends jspb.Message {
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
  getStatus(): QICoreImmunizationEvaluation.StatusCode | undefined;
  setStatus(value?: QICoreImmunizationEvaluation.StatusCode): void;

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

  clearDoseStatusReasonList(): void;
  getDoseStatusReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setDoseStatusReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
  getDoseNumber(): QICoreImmunizationEvaluation.DoseNumberX | undefined;
  setDoseNumber(value?: QICoreImmunizationEvaluation.DoseNumberX): void;

  hasSeriesDoses(): boolean;
  clearSeriesDoses(): void;
  getSeriesDoses(): QICoreImmunizationEvaluation.SeriesDosesX | undefined;
  setSeriesDoses(value?: QICoreImmunizationEvaluation.SeriesDosesX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreImmunizationEvaluation.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreImmunizationEvaluation): QICoreImmunizationEvaluation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreImmunizationEvaluation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreImmunizationEvaluation;
  static deserializeBinaryFromReader(message: QICoreImmunizationEvaluation, reader: jspb.BinaryReader): QICoreImmunizationEvaluation;
}

export namespace QICoreImmunizationEvaluation {
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
    status?: QICoreImmunizationEvaluation.StatusCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    authority?: proto_r4_core_datatypes_pb.Reference.AsObject,
    targetDisease?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    immunizationEvent?: proto_r4_core_datatypes_pb.Reference.AsObject,
    doseStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    doseStatusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    series?: proto_r4_core_datatypes_pb.String.AsObject,
    doseNumber?: QICoreImmunizationEvaluation.DoseNumberX.AsObject,
    seriesDoses?: QICoreImmunizationEvaluation.SeriesDosesX.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap]): void;

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
      value: proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationEvaluationStatusCodesValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

export class QICoreImmunizationRecommendation extends jspb.Message {
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
  getRecommendationList(): Array<QICoreImmunizationRecommendation.Recommendation>;
  setRecommendationList(value: Array<QICoreImmunizationRecommendation.Recommendation>): void;
  addRecommendation(value?: QICoreImmunizationRecommendation.Recommendation, index?: number): QICoreImmunizationRecommendation.Recommendation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreImmunizationRecommendation.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreImmunizationRecommendation): QICoreImmunizationRecommendation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreImmunizationRecommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreImmunizationRecommendation;
  static deserializeBinaryFromReader(message: QICoreImmunizationRecommendation, reader: jspb.BinaryReader): QICoreImmunizationRecommendation;
}

export namespace QICoreImmunizationRecommendation {
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
    recommendationList: Array<QICoreImmunizationRecommendation.Recommendation.AsObject>,
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
    getDateCriterionList(): Array<QICoreImmunizationRecommendation.Recommendation.DateCriterion>;
    setDateCriterionList(value: Array<QICoreImmunizationRecommendation.Recommendation.DateCriterion>): void;
    addDateCriterion(value?: QICoreImmunizationRecommendation.Recommendation.DateCriterion, index?: number): QICoreImmunizationRecommendation.Recommendation.DateCriterion;

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
    getDoseNumber(): QICoreImmunizationRecommendation.Recommendation.DoseNumberX | undefined;
    setDoseNumber(value?: QICoreImmunizationRecommendation.Recommendation.DoseNumberX): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): QICoreImmunizationRecommendation.Recommendation.SeriesDosesX | undefined;
    setSeriesDoses(value?: QICoreImmunizationRecommendation.Recommendation.SeriesDosesX): void;

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
      dateCriterionList: Array<QICoreImmunizationRecommendation.Recommendation.DateCriterion.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      series?: proto_r4_core_datatypes_pb.String.AsObject,
      doseNumber?: QICoreImmunizationRecommendation.Recommendation.DoseNumberX.AsObject,
      seriesDoses?: QICoreImmunizationRecommendation.Recommendation.SeriesDosesX.AsObject,
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

export class QICoreLocation extends jspb.Message {
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
  getStatus(): QICoreLocation.StatusCode | undefined;
  setStatus(value?: QICoreLocation.StatusCode): void;

  hasOperationalStatus(): boolean;
  clearOperationalStatus(): void;
  getOperationalStatus(): proto_r4_core_datatypes_pb.Coding | undefined;
  setOperationalStatus(value?: proto_r4_core_datatypes_pb.Coding): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearAliasList(): void;
  getAliasList(): Array<proto_r4_core_datatypes_pb.String>;
  setAliasList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): QICoreLocation.ModeCode | undefined;
  setMode(value?: QICoreLocation.ModeCode): void;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
  setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

  hasPhysicalType(): boolean;
  clearPhysicalType(): void;
  getPhysicalType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPhysicalType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): QICoreLocation.Position | undefined;
  setPosition(value?: QICoreLocation.Position): void;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearHoursOfOperationList(): void;
  getHoursOfOperationList(): Array<QICoreLocation.HoursOfOperation>;
  setHoursOfOperationList(value: Array<QICoreLocation.HoursOfOperation>): void;
  addHoursOfOperation(value?: QICoreLocation.HoursOfOperation, index?: number): QICoreLocation.HoursOfOperation;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreLocation.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreLocation): QICoreLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreLocation;
  static deserializeBinaryFromReader(message: QICoreLocation, reader: jspb.BinaryReader): QICoreLocation;
}

export namespace QICoreLocation {
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
    status?: QICoreLocation.StatusCode.AsObject,
    operationalStatus?: proto_r4_core_datatypes_pb.Coding.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    aliasList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    mode?: QICoreLocation.ModeCode.AsObject,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    address?: proto_r4_core_datatypes_pb.Address.AsObject,
    physicalType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    position?: QICoreLocation.Position.AsObject,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    hoursOfOperationList: Array<QICoreLocation.HoursOfOperation.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ModeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModeCode.AsObject;
    static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModeCode;
    static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
  }

  export namespace ModeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Position extends jspb.Message {
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

    hasLongitude(): boolean;
    clearLongitude(): void;
    getLongitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setLongitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasLatitude(): boolean;
    clearLatitude(): void;
    getLatitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setLatitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasAltitude(): boolean;
    clearAltitude(): void;
    getAltitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setAltitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      longitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      latitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      altitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    }
  }

  export class HoursOfOperation extends jspb.Message {
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

    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<QICoreLocation.HoursOfOperation.DaysOfWeekCode>;
    setDaysOfWeekList(value: Array<QICoreLocation.HoursOfOperation.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: QICoreLocation.HoursOfOperation.DaysOfWeekCode, index?: number): QICoreLocation.HoursOfOperation.DaysOfWeekCode;

    hasAllDay(): boolean;
    clearAllDay(): void;
    getAllDay(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAllDay(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasOpeningTime(): boolean;
    clearOpeningTime(): void;
    getOpeningTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setOpeningTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasClosingTime(): boolean;
    clearClosingTime(): void;
    getClosingTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setClosingTime(value?: proto_r4_core_datatypes_pb.Time): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HoursOfOperation.AsObject;
    static toObject(includeInstance: boolean, msg: HoursOfOperation): HoursOfOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HoursOfOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HoursOfOperation;
    static deserializeBinaryFromReader(message: HoursOfOperation, reader: jspb.BinaryReader): HoursOfOperation;
  }

  export namespace HoursOfOperation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeekList: Array<QICoreLocation.HoursOfOperation.DaysOfWeekCode.AsObject>,
      allDay?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      openingTime?: proto_r4_core_datatypes_pb.Time.AsObject,
      closingTime?: proto_r4_core_datatypes_pb.Time.AsObject,
    }

    export class DaysOfWeekCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
        value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class QICoreMedication extends jspb.Message {
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

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreMedication.StatusCode | undefined;
  setStatus(value?: QICoreMedication.StatusCode): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): proto_r4_core_datatypes_pb.Ratio | undefined;
  setAmount(value?: proto_r4_core_datatypes_pb.Ratio): void;

  clearIngredientList(): void;
  getIngredientList(): Array<QICoreMedication.Ingredient>;
  setIngredientList(value: Array<QICoreMedication.Ingredient>): void;
  addIngredient(value?: QICoreMedication.Ingredient, index?: number): QICoreMedication.Ingredient;

  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): QICoreMedication.Batch | undefined;
  setBatch(value?: QICoreMedication.Batch): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMedication.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMedication): QICoreMedication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMedication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMedication;
  static deserializeBinaryFromReader(message: QICoreMedication, reader: jspb.BinaryReader): QICoreMedication;
}

export namespace QICoreMedication {
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
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: QICoreMedication.StatusCode.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    form?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    amount?: proto_r4_core_datatypes_pb.Ratio.AsObject,
    ingredientList: Array<QICoreMedication.Ingredient.AsObject>,
    batch?: QICoreMedication.Batch.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Ingredient extends jspb.Message {
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

    hasItem(): boolean;
    clearItem(): void;
    getItem(): QICoreMedication.Ingredient.ItemX | undefined;
    setItem(value?: QICoreMedication.Ingredient.ItemX): void;

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIsActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasStrength(): boolean;
    clearStrength(): void;
    getStrength(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setStrength(value?: proto_r4_core_datatypes_pb.Ratio): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ingredient.AsObject;
    static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ingredient;
    static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
  }

  export namespace Ingredient {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      item?: QICoreMedication.Ingredient.ItemX.AsObject,
      isActive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      strength?: proto_r4_core_datatypes_pb.Ratio.AsObject,
    }

    export class ItemX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ItemX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ItemX.AsObject;
      static toObject(includeInstance: boolean, msg: ItemX): ItemX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ItemX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ItemX;
      static deserializeBinaryFromReader(message: ItemX, reader: jspb.BinaryReader): ItemX;
    }

    export namespace ItemX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Batch extends jspb.Message {
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

    hasLotNumber(): boolean;
    clearLotNumber(): void;
    getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
    setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setExpirationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Batch.AsObject;
    static toObject(includeInstance: boolean, msg: Batch): Batch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Batch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Batch;
    static deserializeBinaryFromReader(message: Batch, reader: jspb.BinaryReader): Batch;
  }

  export namespace Batch {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
      expirationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }
  }
}

export class QICoreMedicationAdministration extends jspb.Message {
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

  clearInstantiatesList(): void;
  getInstantiatesList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiates(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreMedicationAdministration.StatusCode | undefined;
  setStatus(value?: QICoreMedicationAdministration.StatusCode): void;

  clearStatusReasonList(): void;
  getStatusReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setStatusReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): QICoreMedicationAdministration.MedicationX | undefined;
  setMedication(value?: QICoreMedicationAdministration.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_r4_core_datatypes_pb.Reference | undefined;
  setContext(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): QICoreMedicationAdministration.EffectiveX | undefined;
  setEffective(value?: QICoreMedicationAdministration.EffectiveX): void;

  clearPerformerList(): void;
  getPerformerList(): Array<QICoreMedicationAdministration.Performer>;
  setPerformerList(value: Array<QICoreMedicationAdministration.Performer>): void;
  addPerformer(value?: QICoreMedicationAdministration.Performer, index?: number): QICoreMedicationAdministration.Performer;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequest(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDeviceList(): void;
  getDeviceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDeviceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDevice(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasDosage(): boolean;
  clearDosage(): void;
  getDosage(): QICoreMedicationAdministration.Dosage | undefined;
  setDosage(value?: QICoreMedicationAdministration.Dosage): void;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMedicationAdministration.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMedicationAdministration): QICoreMedicationAdministration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMedicationAdministration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMedicationAdministration;
  static deserializeBinaryFromReader(message: QICoreMedicationAdministration, reader: jspb.BinaryReader): QICoreMedicationAdministration;
}

export namespace QICoreMedicationAdministration {
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
    instantiatesList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreMedicationAdministration.StatusCode.AsObject,
    statusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    medication?: QICoreMedicationAdministration.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    effective?: QICoreMedicationAdministration.EffectiveX.AsObject,
    performerList: Array<QICoreMedicationAdministration.Performer.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    deviceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosage?: QICoreMedicationAdministration.Dosage.AsObject,
    eventHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationAdministrationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
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

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Dosage extends jspb.Message {
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

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    hasSite(): boolean;
    clearSite(): void;
    getSite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRoute(): boolean;
    clearRoute(): void;
    getRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDose(): boolean;
    clearDose(): void;
    getDose(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setDose(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasRate(): boolean;
    clearRate(): void;
    getRate(): QICoreMedicationAdministration.Dosage.RateX | undefined;
    setRate(value?: QICoreMedicationAdministration.Dosage.RateX): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      site?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      route?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      dose?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      rate?: QICoreMedicationAdministration.Dosage.RateX.AsObject,
    }

    export class RateX extends jspb.Message {
      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

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
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        RATIO = 1,
        QUANTITY = 2,
      }
    }
  }
}

export class QICoreMedicationDispense extends jspb.Message {
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

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreMedicationDispense.StatusCode | undefined;
  setStatus(value?: QICoreMedicationDispense.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): QICoreMedicationDispense.StatusReasonX | undefined;
  setStatusReason(value?: QICoreMedicationDispense.StatusReasonX): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): QICoreMedicationDispense.MedicationX | undefined;
  setMedication(value?: QICoreMedicationDispense.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_r4_core_datatypes_pb.Reference | undefined;
  setContext(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPerformerList(): void;
  getPerformerList(): Array<QICoreMedicationDispense.Performer>;
  setPerformerList(value: Array<QICoreMedicationDispense.Performer>): void;
  addPerformer(value?: QICoreMedicationDispense.Performer, index?: number): QICoreMedicationDispense.Performer;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAuthorizingPrescriptionList(): void;
  getAuthorizingPrescriptionList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAuthorizingPrescriptionList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAuthorizingPrescription(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

  hasDaysSupply(): boolean;
  clearDaysSupply(): void;
  getDaysSupply(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
  setDaysSupply(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

  hasWhenPrepared(): boolean;
  clearWhenPrepared(): void;
  getWhenPrepared(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setWhenPrepared(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasWhenHandedOver(): boolean;
  clearWhenHandedOver(): void;
  getWhenHandedOver(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setWhenHandedOver(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDestination(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReceiverList(): void;
  getReceiverList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReceiverList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReceiver(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDosageInstructionList(): void;
  getDosageInstructionList(): Array<proto_r4_core_datatypes_pb.Dosage>;
  setDosageInstructionList(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
  addDosageInstruction(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

  hasSubstitution(): boolean;
  clearSubstitution(): void;
  getSubstitution(): QICoreMedicationDispense.Substitution | undefined;
  setSubstitution(value?: QICoreMedicationDispense.Substitution): void;

  clearDetectedIssueList(): void;
  getDetectedIssueList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDetectedIssueList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMedicationDispense.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMedicationDispense): QICoreMedicationDispense.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMedicationDispense, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMedicationDispense;
  static deserializeBinaryFromReader(message: QICoreMedicationDispense, reader: jspb.BinaryReader): QICoreMedicationDispense;
}

export namespace QICoreMedicationDispense {
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
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreMedicationDispense.StatusCode.AsObject,
    statusReason?: QICoreMedicationDispense.StatusReasonX.AsObject,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    medication?: QICoreMedicationDispense.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    performerList: Array<QICoreMedicationDispense.Performer.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    authorizingPrescriptionList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    daysSupply?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    whenPrepared?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    whenHandedOver?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    destination?: proto_r4_core_datatypes_pb.Reference.AsObject,
    receiverList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosageInstructionList: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
    substitution?: QICoreMedicationDispense.Substitution.AsObject,
    detectedIssueList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    eventHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationDispenseStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StatusReasonX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): StatusReasonX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusReasonX.AsObject;
    static toObject(includeInstance: boolean, msg: StatusReasonX): StatusReasonX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusReasonX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusReasonX;
    static deserializeBinaryFromReader(message: StatusReasonX, reader: jspb.BinaryReader): StatusReasonX;
  }

  export namespace StatusReasonX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Substitution extends jspb.Message {
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

    hasWasSubstituted(): boolean;
    clearWasSubstituted(): void;
    getWasSubstituted(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setWasSubstituted(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearReasonList(): void;
    getReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearResponsiblePartyList(): void;
    getResponsiblePartyList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setResponsiblePartyList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addResponsibleParty(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substitution.AsObject;
    static toObject(includeInstance: boolean, msg: Substitution): Substitution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substitution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substitution;
    static deserializeBinaryFromReader(message: Substitution, reader: jspb.BinaryReader): Substitution;
  }

  export namespace Substitution {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      wasSubstituted?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      responsiblePartyList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

export class QICoreMedicationRequest extends jspb.Message {
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
  getStatus(): QICoreMedicationRequest.StatusCode | undefined;
  setStatus(value?: QICoreMedicationRequest.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): QICoreMedicationRequest.IntentCode | undefined;
  setIntent(value?: QICoreMedicationRequest.IntentCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): QICoreMedicationRequest.PriorityCode | undefined;
  setPriority(value?: QICoreMedicationRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReported(): boolean;
  clearReported(): void;
  getReported(): QICoreMedicationRequest.ReportedX | undefined;
  setReported(value?: QICoreMedicationRequest.ReportedX): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): QICoreMedicationRequest.MedicationX | undefined;
  setMedication(value?: QICoreMedicationRequest.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasCourseOfTherapyType(): boolean;
  clearCourseOfTherapyType(): void;
  getCourseOfTherapyType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCourseOfTherapyType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDosageInstructionList(): void;
  getDosageInstructionList(): Array<proto_r4_core_datatypes_pb.Dosage>;
  setDosageInstructionList(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
  addDosageInstruction(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

  hasDispenseRequest(): boolean;
  clearDispenseRequest(): void;
  getDispenseRequest(): QICoreMedicationRequest.DispenseRequest | undefined;
  setDispenseRequest(value?: QICoreMedicationRequest.DispenseRequest): void;

  hasSubstitution(): boolean;
  clearSubstitution(): void;
  getSubstitution(): QICoreMedicationRequest.Substitution | undefined;
  setSubstitution(value?: QICoreMedicationRequest.Substitution): void;

  hasPriorPrescription(): boolean;
  clearPriorPrescription(): void;
  getPriorPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPriorPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDetectedIssueList(): void;
  getDetectedIssueList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDetectedIssueList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMedicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMedicationRequest): QICoreMedicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMedicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMedicationRequest;
  static deserializeBinaryFromReader(message: QICoreMedicationRequest, reader: jspb.BinaryReader): QICoreMedicationRequest;
}

export namespace QICoreMedicationRequest {
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
    status?: QICoreMedicationRequest.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    intent?: QICoreMedicationRequest.IntentCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: QICoreMedicationRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    reported?: QICoreMedicationRequest.ReportedX.AsObject,
    medication?: QICoreMedicationRequest.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    courseOfTherapyType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosageInstructionList: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
    dispenseRequest?: QICoreMedicationRequest.DispenseRequest.AsObject,
    substitution?: QICoreMedicationRequest.Substitution.AsObject,
    priorPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    detectedIssueList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    eventHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ReportedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ReportedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportedX.AsObject;
    static toObject(includeInstance: boolean, msg: ReportedX): ReportedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportedX;
    static deserializeBinaryFromReader(message: ReportedX, reader: jspb.BinaryReader): ReportedX;
  }

  export namespace ReportedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      REFERENCE = 2,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class DispenseRequest extends jspb.Message {
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

    hasInitialFill(): boolean;
    clearInitialFill(): void;
    getInitialFill(): QICoreMedicationRequest.DispenseRequest.InitialFill | undefined;
    setInitialFill(value?: QICoreMedicationRequest.DispenseRequest.InitialFill): void;

    hasDispenseInterval(): boolean;
    clearDispenseInterval(): void;
    getDispenseInterval(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDispenseInterval(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasValidityPeriod(): boolean;
    clearValidityPeriod(): void;
    getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasNumberOfRepeatsAllowed(): boolean;
    clearNumberOfRepeatsAllowed(): void;
    getNumberOfRepeatsAllowed(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumberOfRepeatsAllowed(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasExpectedSupplyDuration(): boolean;
    clearExpectedSupplyDuration(): void;
    getExpectedSupplyDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setExpectedSupplyDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasPerformer(): boolean;
    clearPerformer(): void;
    getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DispenseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DispenseRequest): DispenseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DispenseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DispenseRequest;
    static deserializeBinaryFromReader(message: DispenseRequest, reader: jspb.BinaryReader): DispenseRequest;
  }

  export namespace DispenseRequest {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      initialFill?: QICoreMedicationRequest.DispenseRequest.InitialFill.AsObject,
      dispenseInterval?: proto_r4_core_datatypes_pb.Duration.AsObject,
      validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
      numberOfRepeatsAllowed?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      expectedSupplyDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class InitialFill extends jspb.Message {
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

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InitialFill.AsObject;
      static toObject(includeInstance: boolean, msg: InitialFill): InitialFill.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: InitialFill, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InitialFill;
      static deserializeBinaryFromReader(message: InitialFill, reader: jspb.BinaryReader): InitialFill;
    }

    export namespace InitialFill {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }
    }
  }

  export class Substitution extends jspb.Message {
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

    hasAllowed(): boolean;
    clearAllowed(): void;
    getAllowed(): QICoreMedicationRequest.Substitution.AllowedX | undefined;
    setAllowed(value?: QICoreMedicationRequest.Substitution.AllowedX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substitution.AsObject;
    static toObject(includeInstance: boolean, msg: Substitution): Substitution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substitution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substitution;
    static deserializeBinaryFromReader(message: Substitution, reader: jspb.BinaryReader): Substitution;
  }

  export namespace Substitution {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      allowed?: QICoreMedicationRequest.Substitution.AllowedX.AsObject,
      reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class AllowedX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): AllowedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AllowedX.AsObject;
      static toObject(includeInstance: boolean, msg: AllowedX): AllowedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AllowedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AllowedX;
      static deserializeBinaryFromReader(message: AllowedX, reader: jspb.BinaryReader): AllowedX;
    }

    export namespace AllowedX {
      export type AsObject = {
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BOOLEAN = 1,
        CODEABLE_CONCEPT = 2,
      }
    }
  }
}

export class QICoreMedicationStatement extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreMedicationStatement.StatusCode | undefined;
  setStatus(value?: QICoreMedicationStatement.StatusCode): void;

  clearStatusReasonList(): void;
  getStatusReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setStatusReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): QICoreMedicationStatement.MedicationX | undefined;
  setMedication(value?: QICoreMedicationStatement.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_r4_core_datatypes_pb.Reference | undefined;
  setContext(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): QICoreMedicationStatement.EffectiveX | undefined;
  setEffective(value?: QICoreMedicationStatement.EffectiveX): void;

  hasDateAsserted(): boolean;
  clearDateAsserted(): void;
  getDateAsserted(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateAsserted(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasInformationSource(): boolean;
  clearInformationSource(): void;
  getInformationSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInformationSource(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDerivedFromList(): void;
  getDerivedFromList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFromList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDosageList(): void;
  getDosageList(): Array<proto_r4_core_datatypes_pb.Dosage>;
  setDosageList(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
  addDosage(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreMedicationStatement.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreMedicationStatement): QICoreMedicationStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreMedicationStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreMedicationStatement;
  static deserializeBinaryFromReader(message: QICoreMedicationStatement, reader: jspb.BinaryReader): QICoreMedicationStatement;
}

export namespace QICoreMedicationStatement {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreMedicationStatement.StatusCode.AsObject,
    statusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    medication?: QICoreMedicationStatement.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: QICoreMedicationStatement.EffectiveX.AsObject,
    dateAsserted?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    informationSource?: proto_r4_core_datatypes_pb.Reference.AsObject,
    derivedFromList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosageList: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatementStatusCodes.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
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
}

export class PatientMilitaryService extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientMilitaryService.AsObject;
  static toObject(includeInstance: boolean, msg: PatientMilitaryService): PatientMilitaryService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientMilitaryService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientMilitaryService;
  static deserializeBinaryFromReader(message: PatientMilitaryService, reader: jspb.BinaryReader): PatientMilitaryService;
}

export namespace PatientMilitaryService {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QICoreNutritionOrder extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearInstantiatesList(): void;
  getInstantiatesList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiates(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreNutritionOrder.StatusCode | undefined;
  setStatus(value?: QICoreNutritionOrder.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): QICoreNutritionOrder.IntentCode | undefined;
  setIntent(value?: QICoreNutritionOrder.IntentCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasOrderer(): boolean;
  clearOrderer(): void;
  getOrderer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrderer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAllergyIntoleranceList(): void;
  getAllergyIntoleranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAllergyIntoleranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAllergyIntolerance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearFoodPreferenceModifierList(): void;
  getFoodPreferenceModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFoodPreferenceModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFoodPreferenceModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearExcludeFoodModifierList(): void;
  getExcludeFoodModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setExcludeFoodModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addExcludeFoodModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOralDiet(): boolean;
  clearOralDiet(): void;
  getOralDiet(): QICoreNutritionOrder.OralDiet | undefined;
  setOralDiet(value?: QICoreNutritionOrder.OralDiet): void;

  clearSupplementList(): void;
  getSupplementList(): Array<QICoreNutritionOrder.Supplement>;
  setSupplementList(value: Array<QICoreNutritionOrder.Supplement>): void;
  addSupplement(value?: QICoreNutritionOrder.Supplement, index?: number): QICoreNutritionOrder.Supplement;

  hasEnteralFormula(): boolean;
  clearEnteralFormula(): void;
  getEnteralFormula(): QICoreNutritionOrder.EnteralFormula | undefined;
  setEnteralFormula(value?: QICoreNutritionOrder.EnteralFormula): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreNutritionOrder.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreNutritionOrder): QICoreNutritionOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreNutritionOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreNutritionOrder;
  static deserializeBinaryFromReader(message: QICoreNutritionOrder, reader: jspb.BinaryReader): QICoreNutritionOrder;
}

export namespace QICoreNutritionOrder {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    instantiatesList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    status?: QICoreNutritionOrder.StatusCode.AsObject,
    intent?: QICoreNutritionOrder.IntentCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    orderer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    allergyIntoleranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    foodPreferenceModifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    excludeFoodModifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    oralDiet?: QICoreNutritionOrder.OralDiet.AsObject,
    supplementList: Array<QICoreNutritionOrder.Supplement.AsObject>,
    enteralFormula?: QICoreNutritionOrder.EnteralFormula.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OralDiet extends jspb.Message {
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

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearScheduleList(): void;
    getScheduleList(): Array<proto_r4_core_datatypes_pb.Timing>;
    setScheduleList(value: Array<proto_r4_core_datatypes_pb.Timing>): void;
    addSchedule(value?: proto_r4_core_datatypes_pb.Timing, index?: number): proto_r4_core_datatypes_pb.Timing;

    clearNutrientList(): void;
    getNutrientList(): Array<QICoreNutritionOrder.OralDiet.Nutrient>;
    setNutrientList(value: Array<QICoreNutritionOrder.OralDiet.Nutrient>): void;
    addNutrient(value?: QICoreNutritionOrder.OralDiet.Nutrient, index?: number): QICoreNutritionOrder.OralDiet.Nutrient;

    clearTextureList(): void;
    getTextureList(): Array<QICoreNutritionOrder.OralDiet.Texture>;
    setTextureList(value: Array<QICoreNutritionOrder.OralDiet.Texture>): void;
    addTexture(value?: QICoreNutritionOrder.OralDiet.Texture, index?: number): QICoreNutritionOrder.OralDiet.Texture;

    clearFluidConsistencyTypeList(): void;
    getFluidConsistencyTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setFluidConsistencyTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addFluidConsistencyType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasInstruction(): boolean;
    clearInstruction(): void;
    getInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OralDiet.AsObject;
    static toObject(includeInstance: boolean, msg: OralDiet): OralDiet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OralDiet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OralDiet;
    static deserializeBinaryFromReader(message: OralDiet, reader: jspb.BinaryReader): OralDiet;
  }

  export namespace OralDiet {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      scheduleList: Array<proto_r4_core_datatypes_pb.Timing.AsObject>,
      nutrientList: Array<QICoreNutritionOrder.OralDiet.Nutrient.AsObject>,
      textureList: Array<QICoreNutritionOrder.OralDiet.Texture.AsObject>,
      fluidConsistencyTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      instruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class Nutrient extends jspb.Message {
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

      hasModifier(): boolean;
      clearModifier(): void;
      getModifier(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Nutrient.AsObject;
      static toObject(includeInstance: boolean, msg: Nutrient): Nutrient.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Nutrient, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Nutrient;
      static deserializeBinaryFromReader(message: Nutrient, reader: jspb.BinaryReader): Nutrient;
    }

    export namespace Nutrient {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifier?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        amount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      }
    }

    export class Texture extends jspb.Message {
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

      hasModifier(): boolean;
      clearModifier(): void;
      getModifier(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasFoodType(): boolean;
      clearFoodType(): void;
      getFoodType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setFoodType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Texture.AsObject;
      static toObject(includeInstance: boolean, msg: Texture): Texture.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Texture, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Texture;
      static deserializeBinaryFromReader(message: Texture, reader: jspb.BinaryReader): Texture;
    }

    export namespace Texture {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifier?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        foodType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }
  }

  export class Supplement extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasProductName(): boolean;
    clearProductName(): void;
    getProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setProductName(value?: proto_r4_core_datatypes_pb.String): void;

    clearScheduleList(): void;
    getScheduleList(): Array<proto_r4_core_datatypes_pb.Timing>;
    setScheduleList(value: Array<proto_r4_core_datatypes_pb.Timing>): void;
    addSchedule(value?: proto_r4_core_datatypes_pb.Timing, index?: number): proto_r4_core_datatypes_pb.Timing;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasInstruction(): boolean;
    clearInstruction(): void;
    getInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Supplement.AsObject;
    static toObject(includeInstance: boolean, msg: Supplement): Supplement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Supplement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Supplement;
    static deserializeBinaryFromReader(message: Supplement, reader: jspb.BinaryReader): Supplement;
  }

  export namespace Supplement {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productName?: proto_r4_core_datatypes_pb.String.AsObject,
      scheduleList: Array<proto_r4_core_datatypes_pb.Timing.AsObject>,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      instruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class EnteralFormula extends jspb.Message {
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

    hasBaseFormulaType(): boolean;
    clearBaseFormulaType(): void;
    getBaseFormulaType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBaseFormulaType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasBaseFormulaProductName(): boolean;
    clearBaseFormulaProductName(): void;
    getBaseFormulaProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setBaseFormulaProductName(value?: proto_r4_core_datatypes_pb.String): void;

    hasAdditiveType(): boolean;
    clearAdditiveType(): void;
    getAdditiveType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdditiveType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAdditiveProductName(): boolean;
    clearAdditiveProductName(): void;
    getAdditiveProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setAdditiveProductName(value?: proto_r4_core_datatypes_pb.String): void;

    hasCaloricDensity(): boolean;
    clearCaloricDensity(): void;
    getCaloricDensity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setCaloricDensity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasRouteofAdministration(): boolean;
    clearRouteofAdministration(): void;
    getRouteofAdministration(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRouteofAdministration(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAdministrationList(): void;
    getAdministrationList(): Array<QICoreNutritionOrder.EnteralFormula.Administration>;
    setAdministrationList(value: Array<QICoreNutritionOrder.EnteralFormula.Administration>): void;
    addAdministration(value?: QICoreNutritionOrder.EnteralFormula.Administration, index?: number): QICoreNutritionOrder.EnteralFormula.Administration;

    hasMaxVolumeToDeliver(): boolean;
    clearMaxVolumeToDeliver(): void;
    getMaxVolumeToDeliver(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setMaxVolumeToDeliver(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasAdministrationInstruction(): boolean;
    clearAdministrationInstruction(): void;
    getAdministrationInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setAdministrationInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnteralFormula.AsObject;
    static toObject(includeInstance: boolean, msg: EnteralFormula): EnteralFormula.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnteralFormula, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnteralFormula;
    static deserializeBinaryFromReader(message: EnteralFormula, reader: jspb.BinaryReader): EnteralFormula;
  }

  export namespace EnteralFormula {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      baseFormulaType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      baseFormulaProductName?: proto_r4_core_datatypes_pb.String.AsObject,
      additiveType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      additiveProductName?: proto_r4_core_datatypes_pb.String.AsObject,
      caloricDensity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      routeofAdministration?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      administrationList: Array<QICoreNutritionOrder.EnteralFormula.Administration.AsObject>,
      maxVolumeToDeliver?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      administrationInstruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class Administration extends jspb.Message {
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

      hasSchedule(): boolean;
      clearSchedule(): void;
      getSchedule(): proto_r4_core_datatypes_pb.Timing | undefined;
      setSchedule(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasRate(): boolean;
      clearRate(): void;
      getRate(): QICoreNutritionOrder.EnteralFormula.Administration.RateX | undefined;
      setRate(value?: QICoreNutritionOrder.EnteralFormula.Administration.RateX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Administration.AsObject;
      static toObject(includeInstance: boolean, msg: Administration): Administration.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Administration, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Administration;
      static deserializeBinaryFromReader(message: Administration, reader: jspb.BinaryReader): Administration;
    }

    export namespace Administration {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        schedule?: proto_r4_core_datatypes_pb.Timing.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        rate?: QICoreNutritionOrder.EnteralFormula.Administration.RateX.AsObject,
      }

      export class RateX extends jspb.Message {
        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasRatio(): boolean;
        clearRatio(): void;
        getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
        setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

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
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          QUANTITY = 1,
          RATIO = 2,
        }
      }
    }
  }
}

export class QICoreObservation extends jspb.Message {
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

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreObservation.StatusCode | undefined;
  setStatus(value?: QICoreObservation.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocusList(): void;
  getFocusList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocusList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): QICoreObservation.EffectiveX | undefined;
  setEffective(value?: QICoreObservation.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QICoreObservation.ValueX | undefined;
  setValue(value?: QICoreObservation.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretationList(): void;
  getInterpretationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRangeList(): void;
  getReferenceRangeList(): Array<QICoreObservation.ReferenceRange>;
  setReferenceRangeList(value: Array<QICoreObservation.ReferenceRange>): void;
  addReferenceRange(value?: QICoreObservation.ReferenceRange, index?: number): QICoreObservation.ReferenceRange;

  clearHasMemberList(): void;
  getHasMemberList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMemberList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFromList(): void;
  getDerivedFromList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFromList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponentList(): void;
  getComponentList(): Array<QICoreObservation.Component>;
  setComponentList(value: Array<QICoreObservation.Component>): void;
  addComponent(value?: QICoreObservation.Component, index?: number): QICoreObservation.Component;

  hasBodyPosition(): boolean;
  clearBodyPosition(): void;
  getBodyPosition(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodyPosition(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDelta(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreObservation.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreObservation): QICoreObservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreObservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreObservation;
  static deserializeBinaryFromReader(message: QICoreObservation, reader: jspb.BinaryReader): QICoreObservation;
}

export namespace QICoreObservation {
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
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreObservation.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focusList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: QICoreObservation.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: QICoreObservation.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRangeList: Array<QICoreObservation.ReferenceRange.AsObject>,
    hasMemberList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFromList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    componentList: Array<QICoreObservation.Component.AsObject>,
    bodyPosition?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    delta?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
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

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

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
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
      INSTANT = 4,
    }
  }

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
      time?: proto_r4_core_datatypes_pb.Time.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      BOOLEAN = 4,
      INTEGER = 5,
      RANGE = 6,
      RATIO = 7,
      SAMPLED_DATA = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesToList(): void;
    getAppliesToList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesToList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesToList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getValue(): QICoreObservation.Component.ValueX | undefined;
    setValue(value?: QICoreObservation.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretationList(): void;
    getInterpretationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRangeList(): void;
    getReferenceRangeList(): Array<QICoreObservation.ReferenceRange>;
    setReferenceRangeList(value: Array<QICoreObservation.ReferenceRange>): void;
    addReferenceRange(value?: QICoreObservation.ReferenceRange, index?: number): QICoreObservation.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: QICoreObservation.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRangeList: Array<QICoreObservation.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

export class QICoreOrganization extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearAliasList(): void;
  getAliasList(): Array<proto_r4_core_datatypes_pb.String>;
  setAliasList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAddressList(): void;
  getAddressList(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddressList(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<QICoreOrganization.Contact>;
  setContactList(value: Array<QICoreOrganization.Contact>): void;
  addContact(value?: QICoreOrganization.Contact, index?: number): QICoreOrganization.Contact;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreOrganization): QICoreOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreOrganization;
  static deserializeBinaryFromReader(message: QICoreOrganization, reader: jspb.BinaryReader): QICoreOrganization;
}

export namespace QICoreOrganization {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    aliasList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    addressList: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contactList: Array<QICoreOrganization.Contact.AsObject>,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class Contact extends jspb.Message {
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

    hasPurpose(): boolean;
    clearPurpose(): void;
    getPurpose(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPurpose(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
    setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

    clearTelecomList(): void;
    getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
    setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
    setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      purpose?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
      telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_r4_core_datatypes_pb.Address.AsObject,
    }
  }
}

export class QICorePatient extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearNameList(): void;
  getNameList(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setNameList(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): QICorePatient.GenderCode | undefined;
  setGender(value?: QICorePatient.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): QICorePatient.DeceasedX | undefined;
  setDeceased(value?: QICorePatient.DeceasedX): void;

  clearAddressList(): void;
  getAddressList(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddressList(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasMaritalStatus(): boolean;
  clearMaritalStatus(): void;
  getMaritalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMaritalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMultipleBirth(): boolean;
  clearMultipleBirth(): void;
  getMultipleBirth(): QICorePatient.MultipleBirthX | undefined;
  setMultipleBirth(value?: QICorePatient.MultipleBirthX): void;

  clearPhotoList(): void;
  getPhotoList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhotoList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  clearContactList(): void;
  getContactList(): Array<QICorePatient.Contact>;
  setContactList(value: Array<QICorePatient.Contact>): void;
  addContact(value?: QICorePatient.Contact, index?: number): QICorePatient.Contact;

  clearCommunicationList(): void;
  getCommunicationList(): Array<QICorePatient.Communication>;
  setCommunicationList(value: Array<QICorePatient.Communication>): void;
  addCommunication(value?: QICorePatient.Communication, index?: number): QICorePatient.Communication;

  clearGeneralPractitionerList(): void;
  getGeneralPractitionerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setGeneralPractitionerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addGeneralPractitioner(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearLinkList(): void;
  getLinkList(): Array<QICorePatient.Link>;
  setLinkList(value: Array<QICorePatient.Link>): void;
  addLink(value?: QICorePatient.Link, index?: number): QICorePatient.Link;

  hasRace(): boolean;
  clearRace(): void;
  getRace(): proto_r4_uscore_pb.PatientUSCoreRaceExtension | undefined;
  setRace(value?: proto_r4_uscore_pb.PatientUSCoreRaceExtension): void;

  hasEthnicity(): boolean;
  clearEthnicity(): void;
  getEthnicity(): proto_r4_uscore_pb.PatientUSCoreEthnicityExtension | undefined;
  setEthnicity(value?: proto_r4_uscore_pb.PatientUSCoreEthnicityExtension): void;

  hasBirthsex(): boolean;
  clearBirthsex(): void;
  getBirthsex(): proto_r4_uscore_pb.PatientUSCoreBirthSexExtension.ValueCode | undefined;
  setBirthsex(value?: proto_r4_uscore_pb.PatientUSCoreBirthSexExtension.ValueCode): void;

  hasReligion(): boolean;
  clearReligion(): void;
  getReligion(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReligion(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBirthPlace(): boolean;
  clearBirthPlace(): void;
  getBirthPlace(): proto_r4_core_datatypes_pb.Address | undefined;
  setBirthPlace(value?: proto_r4_core_datatypes_pb.Address): void;

  clearDisabilityList(): void;
  getDisabilityList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setDisabilityList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addDisability(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNationalityList(): void;
  getNationalityList(): Array<proto_r4_core_extensions_pb.PatientNationality>;
  setNationalityList(value: Array<proto_r4_core_extensions_pb.PatientNationality>): void;
  addNationality(value?: proto_r4_core_extensions_pb.PatientNationality, index?: number): proto_r4_core_extensions_pb.PatientNationality;

  hasCadavericDonor(): boolean;
  clearCadavericDonor(): void;
  getCadavericDonor(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setCadavericDonor(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasMilitaryService(): boolean;
  clearMilitaryService(): void;
  getMilitaryService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMilitaryService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBirthTime(): boolean;
  clearBirthTime(): void;
  getBirthTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setBirthTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICorePatient.AsObject;
  static toObject(includeInstance: boolean, msg: QICorePatient): QICorePatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICorePatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICorePatient;
  static deserializeBinaryFromReader(message: QICorePatient, reader: jspb.BinaryReader): QICorePatient;
}

export namespace QICorePatient {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    nameList: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    gender?: QICorePatient.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    deceased?: QICorePatient.DeceasedX.AsObject,
    addressList: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    maritalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    multipleBirth?: QICorePatient.MultipleBirthX.AsObject,
    photoList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    contactList: Array<QICorePatient.Contact.AsObject>,
    communicationList: Array<QICorePatient.Communication.AsObject>,
    generalPractitionerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    linkList: Array<QICorePatient.Link.AsObject>,
    race?: proto_r4_uscore_pb.PatientUSCoreRaceExtension.AsObject,
    ethnicity?: proto_r4_uscore_pb.PatientUSCoreEthnicityExtension.AsObject,
    birthsex?: proto_r4_uscore_pb.PatientUSCoreBirthSexExtension.ValueCode.AsObject,
    religion?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    birthPlace?: proto_r4_core_datatypes_pb.Address.AsObject,
    disabilityList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    nationalityList: Array<proto_r4_core_extensions_pb.PatientNationality.AsObject>,
    cadavericDonor?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    militaryService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    birthTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DeceasedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    getChoiceCase(): DeceasedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeceasedX.AsObject;
    static toObject(includeInstance: boolean, msg: DeceasedX): DeceasedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeceasedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeceasedX;
    static deserializeBinaryFromReader(message: DeceasedX, reader: jspb.BinaryReader): DeceasedX;
  }

  export namespace DeceasedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      DATE_TIME = 2,
    }
  }

  export class MultipleBirthX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

    getChoiceCase(): MultipleBirthX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultipleBirthX.AsObject;
    static toObject(includeInstance: boolean, msg: MultipleBirthX): MultipleBirthX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultipleBirthX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultipleBirthX;
    static deserializeBinaryFromReader(message: MultipleBirthX, reader: jspb.BinaryReader): MultipleBirthX;
  }

  export namespace MultipleBirthX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      INTEGER = 2,
    }
  }

  export class Contact extends jspb.Message {
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

    clearRelationshipList(): void;
    getRelationshipList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRelationshipList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
    setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

    clearTelecomList(): void;
    getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
    setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
    setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): QICorePatient.Contact.GenderCode | undefined;
    setGender(value?: QICorePatient.Contact.GenderCode): void;

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      relationshipList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
      telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_r4_core_datatypes_pb.Address.AsObject,
      gender?: QICorePatient.Contact.GenderCode.AsObject,
      organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class GenderCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GenderCode.AsObject;
      static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GenderCode;
      static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
    }

    export namespace GenderCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Communication extends jspb.Message {
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

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Communication.AsObject;
    static toObject(includeInstance: boolean, msg: Communication): Communication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Communication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Communication;
    static deserializeBinaryFromReader(message: Communication, reader: jspb.BinaryReader): Communication;
  }

  export namespace Communication {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }

  export class Link extends jspb.Message {
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

    hasOther(): boolean;
    clearOther(): void;
    getOther(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOther(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasType(): boolean;
    clearType(): void;
    getType(): QICorePatient.Link.TypeCode | undefined;
    setType(value?: QICorePatient.Link.TypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      other?: proto_r4_core_datatypes_pb.Reference.AsObject,
      type?: QICorePatient.Link.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        value: proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class QICorePractitioner extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
  setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAddressList(): void;
  getAddressList(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddressList(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): QICorePractitioner.GenderCode | undefined;
  setGender(value?: QICorePractitioner.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearPhotoList(): void;
  getPhotoList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhotoList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  clearQualificationList(): void;
  getQualificationList(): Array<QICorePractitioner.Qualification>;
  setQualificationList(value: Array<QICorePractitioner.Qualification>): void;
  addQualification(value?: QICorePractitioner.Qualification, index?: number): QICorePractitioner.Qualification;

  clearCommunicationList(): void;
  getCommunicationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCommunicationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICorePractitioner.AsObject;
  static toObject(includeInstance: boolean, msg: QICorePractitioner): QICorePractitioner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICorePractitioner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICorePractitioner;
  static deserializeBinaryFromReader(message: QICorePractitioner, reader: jspb.BinaryReader): QICorePractitioner;
}

export namespace QICorePractitioner {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    addressList: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    gender?: QICorePractitioner.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    photoList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    qualificationList: Array<QICorePractitioner.Qualification.AsObject>,
    communicationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Qualification extends jspb.Message {
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

    clearIdentifierList(): void;
    getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Qualification.AsObject;
    static toObject(includeInstance: boolean, msg: Qualification): Qualification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Qualification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Qualification;
    static deserializeBinaryFromReader(message: Qualification, reader: jspb.BinaryReader): Qualification;
  }

  export namespace Qualification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class QICorePractitionerRole extends jspb.Message {
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

  clearHealthcareServiceList(): void;
  getHealthcareServiceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHealthcareServiceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHealthcareService(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAvailableTimeList(): void;
  getAvailableTimeList(): Array<QICorePractitionerRole.AvailableTime>;
  setAvailableTimeList(value: Array<QICorePractitionerRole.AvailableTime>): void;
  addAvailableTime(value?: QICorePractitionerRole.AvailableTime, index?: number): QICorePractitionerRole.AvailableTime;

  clearNotAvailableList(): void;
  getNotAvailableList(): Array<QICorePractitionerRole.NotAvailable>;
  setNotAvailableList(value: Array<QICorePractitionerRole.NotAvailable>): void;
  addNotAvailable(value?: QICorePractitionerRole.NotAvailable, index?: number): QICorePractitionerRole.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICorePractitionerRole.AsObject;
  static toObject(includeInstance: boolean, msg: QICorePractitionerRole): QICorePractitionerRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICorePractitionerRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICorePractitionerRole;
  static deserializeBinaryFromReader(message: QICorePractitionerRole, reader: jspb.BinaryReader): QICorePractitionerRole;
}

export namespace QICorePractitionerRole {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    healthcareServiceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    availableTimeList: Array<QICorePractitionerRole.AvailableTime.AsObject>,
    notAvailableList: Array<QICorePractitionerRole.NotAvailable.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class AvailableTime extends jspb.Message {
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

    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<QICorePractitionerRole.AvailableTime.DaysOfWeekCode>;
    setDaysOfWeekList(value: Array<QICorePractitionerRole.AvailableTime.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: QICorePractitionerRole.AvailableTime.DaysOfWeekCode, index?: number): QICorePractitionerRole.AvailableTime.DaysOfWeekCode;

    hasAllDay(): boolean;
    clearAllDay(): void;
    getAllDay(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAllDay(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAvailableStartTime(): boolean;
    clearAvailableStartTime(): void;
    getAvailableStartTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setAvailableStartTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasAvailableEndTime(): boolean;
    clearAvailableEndTime(): void;
    getAvailableEndTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setAvailableEndTime(value?: proto_r4_core_datatypes_pb.Time): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvailableTime.AsObject;
    static toObject(includeInstance: boolean, msg: AvailableTime): AvailableTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvailableTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvailableTime;
    static deserializeBinaryFromReader(message: AvailableTime, reader: jspb.BinaryReader): AvailableTime;
  }

  export namespace AvailableTime {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeekList: Array<QICorePractitionerRole.AvailableTime.DaysOfWeekCode.AsObject>,
      allDay?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      availableStartTime?: proto_r4_core_datatypes_pb.Time.AsObject,
      availableEndTime?: proto_r4_core_datatypes_pb.Time.AsObject,
    }

    export class DaysOfWeekCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
        value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class NotAvailable extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasDuring(): boolean;
    clearDuring(): void;
    getDuring(): proto_r4_core_datatypes_pb.Period | undefined;
    setDuring(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotAvailable.AsObject;
    static toObject(includeInstance: boolean, msg: NotAvailable): NotAvailable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotAvailable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotAvailable;
    static deserializeBinaryFromReader(message: NotAvailable, reader: jspb.BinaryReader): NotAvailable;
  }

  export namespace NotAvailable {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      during?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

export class QICoreProcedure extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreProcedure.StatusCode | undefined;
  setStatus(value?: QICoreProcedure.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

  hasPerformed(): boolean;
  clearPerformed(): void;
  getPerformed(): QICoreProcedure.PerformedX | undefined;
  setPerformed(value?: QICoreProcedure.PerformedX): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPerformerList(): void;
  getPerformerList(): Array<QICoreProcedure.Performer>;
  setPerformerList(value: Array<QICoreProcedure.Performer>): void;
  addPerformer(value?: QICoreProcedure.Performer, index?: number): QICoreProcedure.Performer;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReportList(): void;
  getReportList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReportList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReport(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComplicationList(): void;
  getComplicationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setComplicationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addComplication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearComplicationDetailList(): void;
  getComplicationDetailList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setComplicationDetailList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addComplicationDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearFollowUpList(): void;
  getFollowUpList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFollowUpList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFollowUp(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearFocalDeviceList(): void;
  getFocalDeviceList(): Array<QICoreProcedure.FocalDevice>;
  setFocalDeviceList(value: Array<QICoreProcedure.FocalDevice>): void;
  addFocalDevice(value?: QICoreProcedure.FocalDevice, index?: number): QICoreProcedure.FocalDevice;

  clearUsedReferenceList(): void;
  getUsedReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setUsedReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addUsedReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearUsedCodeList(): void;
  getUsedCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setUsedCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addUsedCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearApproachBodyStructureList(): void;
  getApproachBodyStructureList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setApproachBodyStructureList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addApproachBodyStructure(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasIncisionDateTime(): boolean;
  clearIncisionDateTime(): void;
  getIncisionDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setIncisionDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreProcedure.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreProcedure): QICoreProcedure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreProcedure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreProcedure;
  static deserializeBinaryFromReader(message: QICoreProcedure, reader: jspb.BinaryReader): QICoreProcedure;
}

export namespace QICoreProcedure {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: QICoreProcedure.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performed?: QICoreProcedure.PerformedX.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerList: Array<QICoreProcedure.Performer.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reportList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    complicationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    complicationDetailList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    followUpList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    focalDeviceList: Array<QICoreProcedure.FocalDevice.AsObject>,
    usedReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    usedCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    approachBodyStructureList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    incisionDateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PerformedX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): PerformedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformedX.AsObject;
    static toObject(includeInstance: boolean, msg: PerformedX): PerformedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformedX;
    static deserializeBinaryFromReader(message: PerformedX, reader: jspb.BinaryReader): PerformedX;
  }

  export namespace PerformedX {
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

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class FocalDevice extends jspb.Message {
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

    hasAction(): boolean;
    clearAction(): void;
    getAction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasManipulated(): boolean;
    clearManipulated(): void;
    getManipulated(): proto_r4_core_datatypes_pb.Reference | undefined;
    setManipulated(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FocalDevice.AsObject;
    static toObject(includeInstance: boolean, msg: FocalDevice): FocalDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FocalDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FocalDevice;
    static deserializeBinaryFromReader(message: FocalDevice, reader: jspb.BinaryReader): FocalDevice;
  }

  export namespace FocalDevice {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manipulated?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class QICoreRelatedPerson extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRelationshipList(): void;
  getRelationshipList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setRelationshipList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNameList(): void;
  getNameList(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setNameList(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): QICoreRelatedPerson.GenderCode | undefined;
  setGender(value?: QICoreRelatedPerson.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearAddressList(): void;
  getAddressList(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddressList(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  clearPhotoList(): void;
  getPhotoList(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhotoList(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearCommunicationList(): void;
  getCommunicationList(): Array<QICoreRelatedPerson.Communication>;
  setCommunicationList(value: Array<QICoreRelatedPerson.Communication>): void;
  addCommunication(value?: QICoreRelatedPerson.Communication, index?: number): QICoreRelatedPerson.Communication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreRelatedPerson.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreRelatedPerson): QICoreRelatedPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreRelatedPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreRelatedPerson;
  static deserializeBinaryFromReader(message: QICoreRelatedPerson, reader: jspb.BinaryReader): QICoreRelatedPerson;
}

export namespace QICoreRelatedPerson {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    relationshipList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    nameList: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    gender?: QICoreRelatedPerson.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    addressList: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    photoList: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    communicationList: Array<QICoreRelatedPerson.Communication.AsObject>,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Communication extends jspb.Message {
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

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Communication.AsObject;
    static toObject(includeInstance: boolean, msg: Communication): Communication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Communication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Communication;
    static deserializeBinaryFromReader(message: Communication, reader: jspb.BinaryReader): Communication;
  }

  export namespace Communication {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }
}

export class ServiceRequestQICoreServiceRequestAppropriatenessScore extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.Id | undefined;
  setId(value?: proto_r4_core_datatypes_pb.Id): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX | undefined;
  setValue(value?: ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequestQICoreServiceRequestAppropriatenessScore.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequestQICoreServiceRequestAppropriatenessScore): ServiceRequestQICoreServiceRequestAppropriatenessScore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequestQICoreServiceRequestAppropriatenessScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequestQICoreServiceRequestAppropriatenessScore;
  static deserializeBinaryFromReader(message: ServiceRequestQICoreServiceRequestAppropriatenessScore, reader: jspb.BinaryReader): ServiceRequestQICoreServiceRequestAppropriatenessScore;
}

export namespace ServiceRequestQICoreServiceRequestAppropriatenessScore {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    value?: ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX.AsObject,
  }

  export class ValueX extends jspb.Message {
    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.Code | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.Code): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

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
      code?: proto_r4_core_datatypes_pb.Code.AsObject,
      decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODE = 1,
      DECIMAL = 2,
    }
  }
}

export class QICoreServiceRequest extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplacesList(): void;
  getReplacesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplacesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasRequisition(): boolean;
  clearRequisition(): void;
  getRequisition(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setRequisition(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreServiceRequest.StatusCode | undefined;
  setStatus(value?: QICoreServiceRequest.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): QICoreServiceRequest.IntentCode | undefined;
  setIntent(value?: QICoreServiceRequest.IntentCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): QICoreServiceRequest.PriorityCode | undefined;
  setPriority(value?: QICoreServiceRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearOrderDetailList(): void;
  getOrderDetailList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOrderDetailList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOrderDetail(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): QICoreServiceRequest.QuantityX | undefined;
  setQuantity(value?: QICoreServiceRequest.QuantityX): void;

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
  getOccurrence(): QICoreServiceRequest.OccurrenceX | undefined;
  setOccurrence(value?: QICoreServiceRequest.OccurrenceX): void;

  hasAsNeeded(): boolean;
  clearAsNeeded(): void;
  getAsNeeded(): QICoreServiceRequest.AsNeededX | undefined;
  setAsNeeded(value?: QICoreServiceRequest.AsNeededX): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearLocationCodeList(): void;
  getLocationCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLocationCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLocationCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocationReferenceList(): void;
  getLocationReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocationReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocationReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimenList(): void;
  getSpecimenList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimenList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasPatientInstruction(): boolean;
  clearPatientInstruction(): void;
  getPatientInstruction(): proto_r4_core_datatypes_pb.String | undefined;
  setPatientInstruction(value?: proto_r4_core_datatypes_pb.String): void;

  clearRelevantHistoryList(): void;
  getRelevantHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearApproachBodyStructureList(): void;
  getApproachBodyStructureList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setApproachBodyStructureList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addApproachBodyStructure(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAppropriatenessScore(): boolean;
  clearAppropriatenessScore(): void;
  getAppropriatenessScore(): ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX | undefined;
  setAppropriatenessScore(value?: ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreServiceRequest): QICoreServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreServiceRequest;
  static deserializeBinaryFromReader(message: QICoreServiceRequest, reader: jspb.BinaryReader): QICoreServiceRequest;
}

export namespace QICoreServiceRequest {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replacesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    requisition?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: QICoreServiceRequest.StatusCode.AsObject,
    intent?: QICoreServiceRequest.IntentCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: QICoreServiceRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    orderDetailList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    quantity?: QICoreServiceRequest.QuantityX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: QICoreServiceRequest.OccurrenceX.AsObject,
    asNeeded?: QICoreServiceRequest.AsNeededX.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    performerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    locationCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    locationReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfoList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimenList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    patientInstruction?: proto_r4_core_datatypes_pb.String.AsObject,
    relevantHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    approachBodyStructureList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    appropriatenessScore?: ServiceRequestQICoreServiceRequestAppropriatenessScore.ValueX.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class QuantityX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): QuantityX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuantityX.AsObject;
    static toObject(includeInstance: boolean, msg: QuantityX): QuantityX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuantityX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuantityX;
    static deserializeBinaryFromReader(message: QuantityX, reader: jspb.BinaryReader): QuantityX;
  }

  export namespace QuantityX {
    export type AsObject = {
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      RATIO = 2,
      RANGE = 3,
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

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

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
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
    }
  }

  export class AsNeededX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }
}

export class QICoreSpecimen extends jspb.Message {
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

  hasAccessionIdentifier(): boolean;
  clearAccessionIdentifier(): void;
  getAccessionIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setAccessionIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QICoreSpecimen.StatusCode | undefined;
  setStatus(value?: QICoreSpecimen.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setReceivedTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearParentList(): void;
  getParentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setParentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addParent(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearRequestList(): void;
  getRequestList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRequestList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): QICoreSpecimen.Collection | undefined;
  setCollection(value?: QICoreSpecimen.Collection): void;

  clearProcessingList(): void;
  getProcessingList(): Array<QICoreSpecimen.Processing>;
  setProcessingList(value: Array<QICoreSpecimen.Processing>): void;
  addProcessing(value?: QICoreSpecimen.Processing, index?: number): QICoreSpecimen.Processing;

  clearContainerList(): void;
  getContainerList(): Array<QICoreSpecimen.Container>;
  setContainerList(value: Array<QICoreSpecimen.Container>): void;
  addContainer(value?: QICoreSpecimen.Container, index?: number): QICoreSpecimen.Container;

  clearConditionList(): void;
  getConditionList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConditionList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCondition(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreSpecimen.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreSpecimen): QICoreSpecimen.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreSpecimen, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreSpecimen;
  static deserializeBinaryFromReader(message: QICoreSpecimen, reader: jspb.BinaryReader): QICoreSpecimen;
}

export namespace QICoreSpecimen {
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
    accessionIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: QICoreSpecimen.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    receivedTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    parentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    requestList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    collection?: QICoreSpecimen.Collection.AsObject,
    processingList: Array<QICoreSpecimen.Processing.AsObject>,
    containerList: Array<QICoreSpecimen.Container.AsObject>,
    conditionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Collection extends jspb.Message {
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

    hasCollector(): boolean;
    clearCollector(): void;
    getCollector(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCollector(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCollected(): boolean;
    clearCollected(): void;
    getCollected(): QICoreSpecimen.Collection.CollectedX | undefined;
    setCollected(value?: QICoreSpecimen.Collection.CollectedX): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasFastingStatus(): boolean;
    clearFastingStatus(): void;
    getFastingStatus(): QICoreSpecimen.Collection.FastingStatusX | undefined;
    setFastingStatus(value?: QICoreSpecimen.Collection.FastingStatusX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
  }

  export namespace Collection {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      collector?: proto_r4_core_datatypes_pb.Reference.AsObject,
      collected?: QICoreSpecimen.Collection.CollectedX.AsObject,
      duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      fastingStatus?: QICoreSpecimen.Collection.FastingStatusX.AsObject,
    }

    export class CollectedX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): CollectedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CollectedX.AsObject;
      static toObject(includeInstance: boolean, msg: CollectedX): CollectedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CollectedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CollectedX;
      static deserializeBinaryFromReader(message: CollectedX, reader: jspb.BinaryReader): CollectedX;
    }

    export namespace CollectedX {
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

    export class FastingStatusX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      getChoiceCase(): FastingStatusX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FastingStatusX.AsObject;
      static toObject(includeInstance: boolean, msg: FastingStatusX): FastingStatusX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: FastingStatusX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FastingStatusX;
      static deserializeBinaryFromReader(message: FastingStatusX, reader: jspb.BinaryReader): FastingStatusX;
    }

    export namespace FastingStatusX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        DURATION = 2,
      }
    }
  }

  export class Processing extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProcedure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAdditiveList(): void;
    getAdditiveList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setAdditiveList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addAdditive(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): QICoreSpecimen.Processing.TimeX | undefined;
    setTime(value?: QICoreSpecimen.Processing.TimeX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processing.AsObject;
    static toObject(includeInstance: boolean, msg: Processing): Processing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Processing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processing;
    static deserializeBinaryFromReader(message: Processing, reader: jspb.BinaryReader): Processing;
  }

  export namespace Processing {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      procedure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      additiveList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      time?: QICoreSpecimen.Processing.TimeX.AsObject,
    }

    export class TimeX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): TimeX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimeX.AsObject;
      static toObject(includeInstance: boolean, msg: TimeX): TimeX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimeX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimeX;
      static deserializeBinaryFromReader(message: TimeX, reader: jspb.BinaryReader): TimeX;
    }

    export namespace TimeX {
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
  }

  export class Container extends jspb.Message {
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

    clearIdentifierList(): void;
    getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCapacity(): boolean;
    clearCapacity(): void;
    getCapacity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setCapacity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasSpecimenQuantity(): boolean;
    clearSpecimenQuantity(): void;
    getSpecimenQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setSpecimenQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasAdditive(): boolean;
    clearAdditive(): void;
    getAdditive(): QICoreSpecimen.Container.AdditiveX | undefined;
    setAdditive(value?: QICoreSpecimen.Container.AdditiveX): void;

    hasContainerSequenceNumber(): boolean;
    clearContainerSequenceNumber(): void;
    getContainerSequenceNumber(): proto_r4_core_datatypes_pb.Integer | undefined;
    setContainerSequenceNumber(value?: proto_r4_core_datatypes_pb.Integer): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Container.AsObject;
    static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Container;
    static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
  }

  export namespace Container {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      capacity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      specimenQuantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      additive?: QICoreSpecimen.Container.AdditiveX.AsObject,
      containerSequenceNumber?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export class AdditiveX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): AdditiveX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AdditiveX.AsObject;
      static toObject(includeInstance: boolean, msg: AdditiveX): AdditiveX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AdditiveX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AdditiveX;
      static deserializeBinaryFromReader(message: AdditiveX, reader: jspb.BinaryReader): AdditiveX;
    }

    export namespace AdditiveX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }
}

export class QICoreSubstance extends jspb.Message {
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
  getStatus(): QICoreSubstance.StatusCode | undefined;
  setStatus(value?: QICoreSubstance.StatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearInstanceList(): void;
  getInstanceList(): Array<QICoreSubstance.Instance>;
  setInstanceList(value: Array<QICoreSubstance.Instance>): void;
  addInstance(value?: QICoreSubstance.Instance, index?: number): QICoreSubstance.Instance;

  clearIngredientList(): void;
  getIngredientList(): Array<QICoreSubstance.Ingredient>;
  setIngredientList(value: Array<QICoreSubstance.Ingredient>): void;
  addIngredient(value?: QICoreSubstance.Ingredient, index?: number): QICoreSubstance.Ingredient;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreSubstance.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreSubstance): QICoreSubstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreSubstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreSubstance;
  static deserializeBinaryFromReader(message: QICoreSubstance, reader: jspb.BinaryReader): QICoreSubstance;
}

export namespace QICoreSubstance {
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
    status?: QICoreSubstance.StatusCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    instanceList: Array<QICoreSubstance.Instance.AsObject>,
    ingredientList: Array<QICoreSubstance.Ingredient.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRSubstanceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Instance extends jspb.Message {
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

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasExpiry(): boolean;
    clearExpiry(): void;
    getExpiry(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setExpiry(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instance.AsObject;
    static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instance;
    static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
  }

  export namespace Instance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      expiry?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    }
  }

  export class Ingredient extends jspb.Message {
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

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): QICoreSubstance.Ingredient.SubstanceX | undefined;
    setSubstance(value?: QICoreSubstance.Ingredient.SubstanceX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ingredient.AsObject;
    static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ingredient;
    static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
  }

  export namespace Ingredient {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      quantity?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      substance?: QICoreSubstance.Ingredient.SubstanceX.AsObject,
    }

    export class SubstanceX extends jspb.Message {
      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): SubstanceX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SubstanceX.AsObject;
      static toObject(includeInstance: boolean, msg: SubstanceX): SubstanceX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SubstanceX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SubstanceX;
      static deserializeBinaryFromReader(message: SubstanceX, reader: jspb.BinaryReader): SubstanceX;
    }

    export namespace SubstanceX {
      export type AsObject = {
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        REFERENCE = 2,
      }
    }
  }
}

export class QICoreTask extends jspb.Message {
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

  hasInstantiatesCanonical(): boolean;
  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasInstantiatesUri(): boolean;
  clearInstantiatesUri(): void;
  getInstantiatesUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBusinessStatus(): boolean;
  clearBusinessStatus(): void;
  getBusinessStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBusinessStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasFocus(): boolean;
  clearFocus(): void;
  getFocus(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFocus(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasForValue(): boolean;
  clearForValue(): void;
  getForValue(): proto_r4_core_datatypes_pb.Reference | undefined;
  setForValue(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastModified(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPerformerTypeList(): void;
  getPerformerTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setPerformerTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReasonCode(): boolean;
  clearReasonCode(): void;
  getReasonCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasReasonReference(): boolean;
  clearReasonReference(): void;
  getReasonReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReasonReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearRelevantHistoryList(): void;
  getRelevantHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasRestriction(): boolean;
  clearRestriction(): void;
  getRestriction(): QICoreTask.Restriction | undefined;
  setRestriction(value?: QICoreTask.Restriction): void;

  clearInputList(): void;
  getInputList(): Array<QICoreTask.Parameter>;
  setInputList(value: Array<QICoreTask.Parameter>): void;
  addInput(value?: QICoreTask.Parameter, index?: number): QICoreTask.Parameter;

  clearOutputList(): void;
  getOutputList(): Array<QICoreTask.Output>;
  setOutputList(value: Array<QICoreTask.Output>): void;
  addOutput(value?: QICoreTask.Output, index?: number): QICoreTask.Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QICoreTask.AsObject;
  static toObject(includeInstance: boolean, msg: QICoreTask): QICoreTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QICoreTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QICoreTask;
  static deserializeBinaryFromReader(message: QICoreTask, reader: jspb.BinaryReader): QICoreTask;
}

export namespace QICoreTask {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    instantiatesCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    instantiatesUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    businessStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    focus?: proto_r4_core_datatypes_pb.Reference.AsObject,
    forValue?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lastModified?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reasonReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    relevantHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    restriction?: QICoreTask.Restriction.AsObject,
    inputList: Array<QICoreTask.Parameter.AsObject>,
    outputList: Array<QICoreTask.Output.AsObject>,
  }

  export class Restriction extends jspb.Message {
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

    hasRepetitions(): boolean;
    clearRepetitions(): void;
    getRepetitions(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setRepetitions(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearRecipientList(): void;
    getRecipientList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setRecipientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addRecipient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Restriction.AsObject;
    static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Restriction;
    static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
  }

  export namespace Restriction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      repetitions?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      recipientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Parameter extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): QICoreTask.Parameter.ValueX | undefined;
    setValue(value?: QICoreTask.Parameter.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: QICoreTask.Parameter.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.Id | undefined;
      setId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
      setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
      setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Count | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
      setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
      setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
      setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
      setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
      setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
      setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

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
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        id?: proto_r4_core_datatypes_pb.Id.AsObject,
        instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
        url?: proto_r4_core_datatypes_pb.Url.AsObject,
        uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
        count?: proto_r4_core_datatypes_pb.Count.AsObject,
        distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
        contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
        relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
        usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
        dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
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

  export class Output extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): QICoreTask.Output.ValueX | undefined;
    setValue(value?: QICoreTask.Output.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: QICoreTask.Output.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.Id | undefined;
      setId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
      setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
      setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Count | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
      setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
      setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
      setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
      setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
      setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
      setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

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
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        id?: proto_r4_core_datatypes_pb.Id.AsObject,
        instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
        url?: proto_r4_core_datatypes_pb.Url.AsObject,
        uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
        count?: proto_r4_core_datatypes_pb.Count.AsObject,
        distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
        contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
        relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
        usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
        dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
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
}

