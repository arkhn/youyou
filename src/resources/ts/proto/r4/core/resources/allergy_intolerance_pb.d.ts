// package: google.fhir.r4.core
// file: proto/r4/core/resources/allergy_intolerance.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class AllergyIntolerance extends jspb.Message {
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
  getType(): AllergyIntolerance.TypeCode | undefined;
  setType(value?: AllergyIntolerance.TypeCode): void;

  clearCategory(): void;
  getCategory(): Array<AllergyIntolerance.CategoryCode>;
  setCategory(value: Array<AllergyIntolerance.CategoryCode>): void;
  addCategory(value?: AllergyIntolerance.CategoryCode, index?: number): AllergyIntolerance.CategoryCode;

  hasCriticality(): boolean;
  clearCriticality(): void;
  getCriticality(): AllergyIntolerance.CriticalityCode | undefined;
  setCriticality(value?: AllergyIntolerance.CriticalityCode): void;

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
  getOnset(): AllergyIntolerance.OnsetX | undefined;
  setOnset(value?: AllergyIntolerance.OnsetX): void;

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

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearReaction(): void;
  getReaction(): Array<AllergyIntolerance.Reaction>;
  setReaction(value: Array<AllergyIntolerance.Reaction>): void;
  addReaction(value?: AllergyIntolerance.Reaction, index?: number): AllergyIntolerance.Reaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntolerance.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntolerance): AllergyIntolerance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntolerance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntolerance;
  static deserializeBinaryFromReader(message: AllergyIntolerance, reader: jspb.BinaryReader): AllergyIntolerance;
}

export namespace AllergyIntolerance {
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
    clinicalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verificationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: AllergyIntolerance.TypeCode.AsObject,
    category: Array<AllergyIntolerance.CategoryCode.AsObject>,
    criticality?: AllergyIntolerance.CriticalityCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    onset?: AllergyIntolerance.OnsetX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lastOccurrence?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reaction: Array<AllergyIntolerance.Reaction.AsObject>,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CriticalityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

  export class Reaction extends jspb.Message {
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

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSubstance(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearManifestation(): void;
    getManifestation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setManifestation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
    getSeverity(): AllergyIntolerance.Reaction.SeverityCode | undefined;
    setSeverity(value?: AllergyIntolerance.Reaction.SeverityCode): void;

    hasExposureRoute(): boolean;
    clearExposureRoute(): void;
    getExposureRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setExposureRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearNote(): void;
    getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manifestation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      onset?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      severity?: AllergyIntolerance.Reaction.SeverityCode.AsObject,
      exposureRoute?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    }

    export class SeverityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

