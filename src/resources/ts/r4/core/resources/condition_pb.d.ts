// package: google.fhir.r4.core
// file: proto/r4/core/resources/condition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Condition extends jspb.Message {
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
  getOnset(): Condition.OnsetX | undefined;
  setOnset(value?: Condition.OnsetX): void;

  hasAbatement(): boolean;
  clearAbatement(): void;
  getAbatement(): Condition.AbatementX | undefined;
  setAbatement(value?: Condition.AbatementX): void;

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
  getStageList(): Array<Condition.Stage>;
  setStageList(value: Array<Condition.Stage>): void;
  addStage(value?: Condition.Stage, index?: number): Condition.Stage;

  clearEvidenceList(): void;
  getEvidenceList(): Array<Condition.Evidence>;
  setEvidenceList(value: Array<Condition.Evidence>): void;
  addEvidence(value?: Condition.Evidence, index?: number): Condition.Evidence;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

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
    onset?: Condition.OnsetX.AsObject,
    abatement?: Condition.AbatementX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    stageList: Array<Condition.Stage.AsObject>,
    evidenceList: Array<Condition.Evidence.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
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
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
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

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

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
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
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

