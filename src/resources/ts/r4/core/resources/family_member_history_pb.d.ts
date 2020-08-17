// package: google.fhir.r4.core
// file: proto/r4/core/resources/family_member_history.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class FamilyMemberHistory extends jspb.Message {
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
  getStatus(): FamilyMemberHistory.StatusCode | undefined;
  setStatus(value?: FamilyMemberHistory.StatusCode): void;

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
  getBorn(): FamilyMemberHistory.BornX | undefined;
  setBorn(value?: FamilyMemberHistory.BornX): void;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): FamilyMemberHistory.AgeX | undefined;
  setAge(value?: FamilyMemberHistory.AgeX): void;

  hasEstimatedAge(): boolean;
  clearEstimatedAge(): void;
  getEstimatedAge(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setEstimatedAge(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): FamilyMemberHistory.DeceasedX | undefined;
  setDeceased(value?: FamilyMemberHistory.DeceasedX): void;

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
  getConditionList(): Array<FamilyMemberHistory.Condition>;
  setConditionList(value: Array<FamilyMemberHistory.Condition>): void;
  addCondition(value?: FamilyMemberHistory.Condition, index?: number): FamilyMemberHistory.Condition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistory.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistory): FamilyMemberHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistory;
  static deserializeBinaryFromReader(message: FamilyMemberHistory, reader: jspb.BinaryReader): FamilyMemberHistory;
}

export namespace FamilyMemberHistory {
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
    status?: FamilyMemberHistory.StatusCode.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    sex?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    born?: FamilyMemberHistory.BornX.AsObject,
    age?: FamilyMemberHistory.AgeX.AsObject,
    estimatedAge?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    deceased?: FamilyMemberHistory.DeceasedX.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    conditionList: Array<FamilyMemberHistory.Condition.AsObject>,
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
    getOnset(): FamilyMemberHistory.Condition.OnsetX | undefined;
    setOnset(value?: FamilyMemberHistory.Condition.OnsetX): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      contributedToDeath?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      onset?: FamilyMemberHistory.Condition.OnsetX.AsObject,
      noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
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

