// package: google.fhir.r4.core
// file: proto/r4/core/resources/adverse_event.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class AdverseEvent extends jspb.Message {
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
  getActuality(): AdverseEvent.ActualityCode | undefined;
  setActuality(value?: AdverseEvent.ActualityCode): void;

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
  getSuspectEntityList(): Array<AdverseEvent.SuspectEntity>;
  setSuspectEntityList(value: Array<AdverseEvent.SuspectEntity>): void;
  addSuspectEntity(value?: AdverseEvent.SuspectEntity, index?: number): AdverseEvent.SuspectEntity;

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
  toObject(includeInstance?: boolean): AdverseEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEvent): AdverseEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEvent;
  static deserializeBinaryFromReader(message: AdverseEvent, reader: jspb.BinaryReader): AdverseEvent;
}

export namespace AdverseEvent {
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
    actuality?: AdverseEvent.ActualityCode.AsObject,
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
    suspectEntityList: Array<AdverseEvent.SuspectEntity.AsObject>,
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

    clearCausalityList(): void;
    getCausalityList(): Array<AdverseEvent.SuspectEntity.Causality>;
    setCausalityList(value: Array<AdverseEvent.SuspectEntity.Causality>): void;
    addCausality(value?: AdverseEvent.SuspectEntity.Causality, index?: number): AdverseEvent.SuspectEntity.Causality;

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
      causalityList: Array<AdverseEvent.SuspectEntity.Causality.AsObject>,
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

