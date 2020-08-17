// package: google.fhir.stu3.uscore
// file: proto/stu3/uscore.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_codes_pb from "../../proto/stu3/codes_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";
import * as proto_stu3_metadatatypes_pb from "../../proto/stu3/metadatatypes_pb";
import * as proto_stu3_resources_pb from "../../proto/stu3/resources_pb";
import * as proto_stu3_uscore_codes_pb from "../../proto/stu3/uscore_codes_pb";

export class UsCoreAllergyintolerance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_stu3_codes_pb.AllergyIntoleranceClinicalStatusCode | undefined;
  setClinicalStatus(value?: proto_stu3_codes_pb.AllergyIntoleranceClinicalStatusCode): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_stu3_codes_pb.AllergyIntoleranceVerificationStatusCode | undefined;
  setVerificationStatus(value?: proto_stu3_codes_pb.AllergyIntoleranceVerificationStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.AllergyIntoleranceTypeCode | undefined;
  setType(value?: proto_stu3_codes_pb.AllergyIntoleranceTypeCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_codes_pb.AllergyIntoleranceCategoryCode>;
  setCategoryList(value: Array<proto_stu3_codes_pb.AllergyIntoleranceCategoryCode>): void;
  addCategory(value?: proto_stu3_codes_pb.AllergyIntoleranceCategoryCode, index?: number): proto_stu3_codes_pb.AllergyIntoleranceCategoryCode;

  hasCriticality(): boolean;
  clearCriticality(): void;
  getCriticality(): proto_stu3_codes_pb.AllergyIntoleranceCriticalityCode | undefined;
  setCriticality(value?: proto_stu3_codes_pb.AllergyIntoleranceCriticalityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_stu3_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_stu3_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): UsCoreAllergyintolerance.Onset | undefined;
  setOnset(value?: UsCoreAllergyintolerance.Onset): void;

  hasAssertedDate(): boolean;
  clearAssertedDate(): void;
  getAssertedDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setAssertedDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_stu3_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_stu3_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_stu3_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_stu3_datatypes_pb.Reference): void;

  hasLastOccurrence(): boolean;
  clearLastOccurrence(): void;
  getLastOccurrence(): proto_stu3_datatypes_pb.DateTime | undefined;
  setLastOccurrence(value?: proto_stu3_datatypes_pb.DateTime): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearReactionList(): void;
  getReactionList(): Array<UsCoreAllergyintolerance.Reaction>;
  setReactionList(value: Array<UsCoreAllergyintolerance.Reaction>): void;
  addReaction(value?: UsCoreAllergyintolerance.Reaction, index?: number): UsCoreAllergyintolerance.Reaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreAllergyintolerance.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreAllergyintolerance): UsCoreAllergyintolerance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreAllergyintolerance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreAllergyintolerance;
  static deserializeBinaryFromReader(message: UsCoreAllergyintolerance, reader: jspb.BinaryReader): UsCoreAllergyintolerance;
}

export namespace UsCoreAllergyintolerance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    clinicalStatus?: proto_stu3_codes_pb.AllergyIntoleranceClinicalStatusCode.AsObject,
    verificationStatus?: proto_stu3_codes_pb.AllergyIntoleranceVerificationStatusCode.AsObject,
    type?: proto_stu3_codes_pb.AllergyIntoleranceTypeCode.AsObject,
    categoryList: Array<proto_stu3_codes_pb.AllergyIntoleranceCategoryCode.AsObject>,
    criticality?: proto_stu3_codes_pb.AllergyIntoleranceCriticalityCode.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_stu3_datatypes_pb.Reference.AsObject,
    onset?: UsCoreAllergyintolerance.Onset.AsObject,
    assertedDate?: proto_stu3_datatypes_pb.DateTime.AsObject,
    recorder?: proto_stu3_datatypes_pb.Reference.AsObject,
    asserter?: proto_stu3_datatypes_pb.Reference.AsObject,
    lastOccurrence?: proto_stu3_datatypes_pb.DateTime.AsObject,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    reactionList: Array<UsCoreAllergyintolerance.Reaction.AsObject>,
  }

  export class Onset extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getOnsetCase(): Onset.OnsetCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Onset.AsObject;
    static toObject(includeInstance: boolean, msg: Onset): Onset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Onset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Onset;
    static deserializeBinaryFromReader(message: Onset, reader: jspb.BinaryReader): Onset;
  }

  export namespace Onset {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum OnsetCase {
      ONSET_NOT_SET = 0,
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
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setSubstance(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearManifestationList(): void;
    getManifestationList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setManifestationList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addManifestation(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasOnset(): boolean;
    clearOnset(): void;
    getOnset(): proto_stu3_datatypes_pb.DateTime | undefined;
    setOnset(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): proto_stu3_codes_pb.AllergyIntoleranceSeverityCode | undefined;
    setSeverity(value?: proto_stu3_codes_pb.AllergyIntoleranceSeverityCode): void;

    hasExposureRoute(): boolean;
    clearExposureRoute(): void;
    getExposureRoute(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setExposureRoute(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearNoteList(): void;
    getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
    setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
    addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      substance?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      manifestationList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      onset?: proto_stu3_datatypes_pb.DateTime.AsObject,
      severity?: proto_stu3_codes_pb.AllergyIntoleranceSeverityCode.AsObject,
      exposureRoute?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    }
  }
}

export class PatientUSCoreBirthSexExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_uscore_codes_pb.UsCoreBirthSexCode | undefined;
  setValueCode(value?: proto_stu3_uscore_codes_pb.UsCoreBirthSexCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreBirthSexExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreBirthSexExtension): PatientUSCoreBirthSexExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreBirthSexExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreBirthSexExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreBirthSexExtension, reader: jspb.BinaryReader): PatientUSCoreBirthSexExtension;
}

export namespace PatientUSCoreBirthSexExtension {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    valueCode?: proto_stu3_uscore_codes_pb.UsCoreBirthSexCode.AsObject,
  }
}

export class UsCoreCareplan extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearDefinitionList(): void;
  getDefinitionList(): Array<proto_stu3_datatypes_pb.Reference>;
  setDefinitionList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDefinition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearReplacesList(): void;
  getReplacesList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReplacesList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_stu3_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.CarePlanStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.CarePlanStatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): proto_stu3_codes_pb.CarePlanIntentCode | undefined;
  setIntent(value?: proto_stu3_codes_pb.CarePlanIntentCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_stu3_datatypes_pb.String | undefined;
  setTitle(value?: proto_stu3_datatypes_pb.String): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.String | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  clearAuthorList(): void;
  getAuthorList(): Array<proto_stu3_datatypes_pb.Reference>;
  setAuthorList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearCareTeamList(): void;
  getCareTeamList(): Array<proto_stu3_datatypes_pb.Reference>;
  setCareTeamList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addCareTeam(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearAddressesList(): void;
  getAddressesList(): Array<proto_stu3_datatypes_pb.Reference>;
  setAddressesList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_stu3_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearGoalList(): void;
  getGoalList(): Array<proto_stu3_datatypes_pb.Reference>;
  setGoalList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addGoal(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearActivityList(): void;
  getActivityList(): Array<UsCoreCareplan.Activity>;
  setActivityList(value: Array<UsCoreCareplan.Activity>): void;
  addActivity(value?: UsCoreCareplan.Activity, index?: number): UsCoreCareplan.Activity;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreCareplan.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreCareplan): UsCoreCareplan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreCareplan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreCareplan;
  static deserializeBinaryFromReader(message: UsCoreCareplan, reader: jspb.BinaryReader): UsCoreCareplan;
}

export namespace UsCoreCareplan {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    definitionList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    replacesList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.CarePlanStatusCode.AsObject,
    intent?: proto_stu3_codes_pb.CarePlanIntentCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    title?: proto_stu3_datatypes_pb.String.AsObject,
    description?: proto_stu3_datatypes_pb.String.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
    authorList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    careTeamList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    addressesList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    supportingInfoList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    goalList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    activityList: Array<UsCoreCareplan.Activity.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
  }

  export class Activity extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearOutcomeCodeableConceptList(): void;
    getOutcomeCodeableConceptList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setOutcomeCodeableConceptList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addOutcomeCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    clearOutcomeReferenceList(): void;
    getOutcomeReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
    setOutcomeReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
    addOutcomeReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

    clearProgressList(): void;
    getProgressList(): Array<proto_stu3_datatypes_pb.Annotation>;
    setProgressList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
    addProgress(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): UsCoreCareplan.Activity.Detail | undefined;
    setDetail(value?: UsCoreCareplan.Activity.Detail): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      outcomeCodeableConceptList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      outcomeReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
      progressList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      detail?: UsCoreCareplan.Activity.Detail.AsObject,
    }

    export class Detail extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasCategory(): boolean;
      clearCategory(): void;
      getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasDefinition(): boolean;
      clearDefinition(): void;
      getDefinition(): proto_stu3_datatypes_pb.Reference | undefined;
      setDefinition(value?: proto_stu3_datatypes_pb.Reference): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      clearReasonCodeList(): void;
      getReasonCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
      setReasonCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
      addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

      clearReasonReferenceList(): void;
      getReasonReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
      setReasonReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
      addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

      clearGoalList(): void;
      getGoalList(): Array<proto_stu3_datatypes_pb.Reference>;
      setGoalList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
      addGoal(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): proto_stu3_codes_pb.CarePlanActivityStatusCode | undefined;
      setStatus(value?: proto_stu3_codes_pb.CarePlanActivityStatusCode): void;

      hasStatusReason(): boolean;
      clearStatusReason(): void;
      getStatusReason(): proto_stu3_datatypes_pb.String | undefined;
      setStatusReason(value?: proto_stu3_datatypes_pb.String): void;

      hasProhibited(): boolean;
      clearProhibited(): void;
      getProhibited(): proto_stu3_datatypes_pb.Boolean | undefined;
      setProhibited(value?: proto_stu3_datatypes_pb.Boolean): void;

      hasScheduled(): boolean;
      clearScheduled(): void;
      getScheduled(): UsCoreCareplan.Activity.Detail.Scheduled | undefined;
      setScheduled(value?: UsCoreCareplan.Activity.Detail.Scheduled): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): proto_stu3_datatypes_pb.Reference | undefined;
      setLocation(value?: proto_stu3_datatypes_pb.Reference): void;

      clearPerformerList(): void;
      getPerformerList(): Array<proto_stu3_datatypes_pb.Reference>;
      setPerformerList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
      addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

      hasProduct(): boolean;
      clearProduct(): void;
      getProduct(): UsCoreCareplan.Activity.Detail.Product | undefined;
      setProduct(value?: UsCoreCareplan.Activity.Detail.Product): void;

      hasDailyAmount(): boolean;
      clearDailyAmount(): void;
      getDailyAmount(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
      setDailyAmount(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_stu3_datatypes_pb.String | undefined;
      setDescription(value?: proto_stu3_datatypes_pb.String): void;

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
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        definition?: proto_stu3_datatypes_pb.Reference.AsObject,
        code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        reasonCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
        reasonReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
        goalList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
        status?: proto_stu3_codes_pb.CarePlanActivityStatusCode.AsObject,
        statusReason?: proto_stu3_datatypes_pb.String.AsObject,
        prohibited?: proto_stu3_datatypes_pb.Boolean.AsObject,
        scheduled?: UsCoreCareplan.Activity.Detail.Scheduled.AsObject,
        location?: proto_stu3_datatypes_pb.Reference.AsObject,
        performerList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
        product?: UsCoreCareplan.Activity.Detail.Product.AsObject,
        dailyAmount?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
        quantity?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
        description?: proto_stu3_datatypes_pb.String.AsObject,
      }

      export class Scheduled extends jspb.Message {
        hasTiming(): boolean;
        clearTiming(): void;
        getTiming(): proto_stu3_datatypes_pb.Timing | undefined;
        setTiming(value?: proto_stu3_datatypes_pb.Timing): void;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
        setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_stu3_datatypes_pb.String | undefined;
        setStringValue(value?: proto_stu3_datatypes_pb.String): void;

        getScheduledCase(): Scheduled.ScheduledCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Scheduled.AsObject;
        static toObject(includeInstance: boolean, msg: Scheduled): Scheduled.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Scheduled, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Scheduled;
        static deserializeBinaryFromReader(message: Scheduled, reader: jspb.BinaryReader): Scheduled;
      }

      export namespace Scheduled {
        export type AsObject = {
          timing?: proto_stu3_datatypes_pb.Timing.AsObject,
          period?: proto_stu3_datatypes_pb.Period.AsObject,
          stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        }

        export enum ScheduledCase {
          SCHEDULED_NOT_SET = 0,
          TIMING = 1,
          PERIOD = 2,
          STRING_VALUE = 3,
        }
      }

      export class Product extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_stu3_datatypes_pb.Reference | undefined;
        setReference(value?: proto_stu3_datatypes_pb.Reference): void;

        getProductCase(): Product.ProductCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Product.AsObject;
        static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Product;
        static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
      }

      export namespace Product {
        export type AsObject = {
          codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
          reference?: proto_stu3_datatypes_pb.Reference.AsObject,
        }

        export enum ProductCase {
          PRODUCT_NOT_SET = 0,
          CODEABLE_CONCEPT = 1,
          REFERENCE = 2,
        }
      }
    }
  }
}

export class UsCoreCareteam extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.CareTeamStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.CareTeamStatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  clearParticipantList(): void;
  getParticipantList(): Array<UsCoreCareteam.Participant>;
  setParticipantList(value: Array<UsCoreCareteam.Participant>): void;
  addParticipant(value?: UsCoreCareteam.Participant, index?: number): UsCoreCareteam.Participant;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearManagingOrganizationList(): void;
  getManagingOrganizationList(): Array<proto_stu3_datatypes_pb.Reference>;
  setManagingOrganizationList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addManagingOrganization(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreCareteam.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreCareteam): UsCoreCareteam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreCareteam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreCareteam;
  static deserializeBinaryFromReader(message: UsCoreCareteam, reader: jspb.BinaryReader): UsCoreCareteam;
}

export namespace UsCoreCareteam {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    status?: proto_stu3_codes_pb.CareTeamStatusCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
    participantList: Array<UsCoreCareteam.Participant.AsObject>,
    reasonCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    managingOrganizationList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
  }

  export class Participant extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasMember(): boolean;
    clearMember(): void;
    getMember(): proto_stu3_datatypes_pb.Reference | undefined;
    setMember(value?: proto_stu3_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_stu3_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_stu3_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      member?: proto_stu3_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_stu3_datatypes_pb.Reference.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }
}

export class UsCoreCondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_stu3_codes_pb.ConditionClinicalStatusCodesCode | undefined;
  setClinicalStatus(value?: proto_stu3_codes_pb.ConditionClinicalStatusCodesCode): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_stu3_codes_pb.ConditionVerificationStatusCode | undefined;
  setVerificationStatus(value?: proto_stu3_codes_pb.ConditionVerificationStatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setSeverity(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): UsCoreCondition.Onset | undefined;
  setOnset(value?: UsCoreCondition.Onset): void;

  hasAbatement(): boolean;
  clearAbatement(): void;
  getAbatement(): UsCoreCondition.Abatement | undefined;
  setAbatement(value?: UsCoreCondition.Abatement): void;

  hasAssertedDate(): boolean;
  clearAssertedDate(): void;
  getAssertedDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setAssertedDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_stu3_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_stu3_datatypes_pb.Reference): void;

  hasStage(): boolean;
  clearStage(): void;
  getStage(): UsCoreCondition.Stage | undefined;
  setStage(value?: UsCoreCondition.Stage): void;

  clearEvidenceList(): void;
  getEvidenceList(): Array<UsCoreCondition.Evidence>;
  setEvidenceList(value: Array<UsCoreCondition.Evidence>): void;
  addEvidence(value?: UsCoreCondition.Evidence, index?: number): UsCoreCondition.Evidence;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreCondition.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreCondition): UsCoreCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreCondition;
  static deserializeBinaryFromReader(message: UsCoreCondition, reader: jspb.BinaryReader): UsCoreCondition;
}

export namespace UsCoreCondition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    clinicalStatus?: proto_stu3_codes_pb.ConditionClinicalStatusCodesCode.AsObject,
    verificationStatus?: proto_stu3_codes_pb.ConditionVerificationStatusCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    severity?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    bodySiteList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    onset?: UsCoreCondition.Onset.AsObject,
    abatement?: UsCoreCondition.Abatement.AsObject,
    assertedDate?: proto_stu3_datatypes_pb.DateTime.AsObject,
    asserter?: proto_stu3_datatypes_pb.Reference.AsObject,
    stage?: UsCoreCondition.Stage.AsObject,
    evidenceList: Array<UsCoreCondition.Evidence.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
  }

  export class Onset extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getOnsetCase(): Onset.OnsetCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Onset.AsObject;
    static toObject(includeInstance: boolean, msg: Onset): Onset.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Onset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Onset;
    static deserializeBinaryFromReader(message: Onset, reader: jspb.BinaryReader): Onset;
  }

  export namespace Onset {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum OnsetCase {
      ONSET_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
    }
  }

  export class Abatement extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getAbatementCase(): Abatement.AbatementCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Abatement.AsObject;
    static toObject(includeInstance: boolean, msg: Abatement): Abatement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Abatement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Abatement;
    static deserializeBinaryFromReader(message: Abatement, reader: jspb.BinaryReader): Abatement;
  }

  export namespace Abatement {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum AbatementCase {
      ABATEMENT_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      BOOLEAN = 3,
      PERIOD = 4,
      RANGE = 5,
      STRING_VALUE = 6,
    }
  }

  export class Stage extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setSummary(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAssessmentList(): void;
    getAssessmentList(): Array<proto_stu3_datatypes_pb.Reference>;
    setAssessmentList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
    addAssessment(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      summary?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      assessmentList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Evidence extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCodeList(): void;
    getCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    clearDetailList(): void;
    getDetailList(): Array<proto_stu3_datatypes_pb.Reference>;
    setDetailList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
    addDetail(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      codeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      detailList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    }
  }
}

export class UsCoreDevice extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasUdi(): boolean;
  clearUdi(): void;
  getUdi(): UsCoreDevice.Udi | undefined;
  setUdi(value?: UsCoreDevice.Udi): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.FHIRDeviceStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.FHIRDeviceStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_stu3_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_stu3_datatypes_pb.String): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_stu3_datatypes_pb.String | undefined;
  setManufacturer(value?: proto_stu3_datatypes_pb.String): void;

  hasManufactureDate(): boolean;
  clearManufactureDate(): void;
  getManufactureDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setManufactureDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setExpirationDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasModel(): boolean;
  clearModel(): void;
  getModel(): proto_stu3_datatypes_pb.String | undefined;
  setModel(value?: proto_stu3_datatypes_pb.String): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_stu3_datatypes_pb.String | undefined;
  setVersion(value?: proto_stu3_datatypes_pb.String): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_stu3_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_stu3_datatypes_pb.Reference): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_stu3_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_stu3_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setContactList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addContact(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_stu3_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_stu3_datatypes_pb.Reference): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearSafetyList(): void;
  getSafetyList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setSafetyList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addSafety(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreDevice.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreDevice): UsCoreDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreDevice;
  static deserializeBinaryFromReader(message: UsCoreDevice, reader: jspb.BinaryReader): UsCoreDevice;
}

export namespace UsCoreDevice {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    udi?: UsCoreDevice.Udi.AsObject,
    status?: proto_stu3_codes_pb.FHIRDeviceStatusCode.AsObject,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    lotNumber?: proto_stu3_datatypes_pb.String.AsObject,
    manufacturer?: proto_stu3_datatypes_pb.String.AsObject,
    manufactureDate?: proto_stu3_datatypes_pb.DateTime.AsObject,
    expirationDate?: proto_stu3_datatypes_pb.DateTime.AsObject,
    model?: proto_stu3_datatypes_pb.String.AsObject,
    version?: proto_stu3_datatypes_pb.String.AsObject,
    patient?: proto_stu3_datatypes_pb.Reference.AsObject,
    owner?: proto_stu3_datatypes_pb.Reference.AsObject,
    contactList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    location?: proto_stu3_datatypes_pb.Reference.AsObject,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    safetyList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class Udi extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasDeviceIdentifier(): boolean;
    clearDeviceIdentifier(): void;
    getDeviceIdentifier(): proto_stu3_datatypes_pb.String | undefined;
    setDeviceIdentifier(value?: proto_stu3_datatypes_pb.String): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_stu3_datatypes_pb.String | undefined;
    setName(value?: proto_stu3_datatypes_pb.String): void;

    hasJurisdiction(): boolean;
    clearJurisdiction(): void;
    getJurisdiction(): proto_stu3_datatypes_pb.Uri | undefined;
    setJurisdiction(value?: proto_stu3_datatypes_pb.Uri): void;

    hasCarrierHrf(): boolean;
    clearCarrierHrf(): void;
    getCarrierHrf(): proto_stu3_datatypes_pb.String | undefined;
    setCarrierHrf(value?: proto_stu3_datatypes_pb.String): void;

    hasCarrierAidc(): boolean;
    clearCarrierAidc(): void;
    getCarrierAidc(): proto_stu3_datatypes_pb.Base64Binary | undefined;
    setCarrierAidc(value?: proto_stu3_datatypes_pb.Base64Binary): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_stu3_datatypes_pb.Uri | undefined;
    setIssuer(value?: proto_stu3_datatypes_pb.Uri): void;

    hasEntryType(): boolean;
    clearEntryType(): void;
    getEntryType(): proto_stu3_codes_pb.UDIEntryTypeCode | undefined;
    setEntryType(value?: proto_stu3_codes_pb.UDIEntryTypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Udi.AsObject;
    static toObject(includeInstance: boolean, msg: Udi): Udi.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Udi, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Udi;
    static deserializeBinaryFromReader(message: Udi, reader: jspb.BinaryReader): Udi;
  }

  export namespace Udi {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      deviceIdentifier?: proto_stu3_datatypes_pb.String.AsObject,
      name?: proto_stu3_datatypes_pb.String.AsObject,
      jurisdiction?: proto_stu3_datatypes_pb.Uri.AsObject,
      carrierHrf?: proto_stu3_datatypes_pb.String.AsObject,
      carrierAidc?: proto_stu3_datatypes_pb.Base64Binary.AsObject,
      issuer?: proto_stu3_datatypes_pb.Uri.AsObject,
      entryType?: proto_stu3_codes_pb.UDIEntryTypeCode.AsObject,
    }
  }
}

export class UsCoreDiagnosticreport extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.DiagnosticReportStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.DiagnosticReportStatusCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): UsCoreDiagnosticreport.Effective | undefined;
  setEffective(value?: UsCoreDiagnosticreport.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<UsCoreDiagnosticreport.Performer>;
  setPerformerList(value: Array<UsCoreDiagnosticreport.Performer>): void;
  addPerformer(value?: UsCoreDiagnosticreport.Performer, index?: number): UsCoreDiagnosticreport.Performer;

  clearSpecimenList(): void;
  getSpecimenList(): Array<proto_stu3_datatypes_pb.Reference>;
  setSpecimenList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearResultList(): void;
  getResultList(): Array<proto_stu3_datatypes_pb.Reference>;
  setResultList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addResult(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImagingStudyList(): void;
  getImagingStudyList(): Array<proto_stu3_datatypes_pb.Reference>;
  setImagingStudyList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImageList(): void;
  getImageList(): Array<UsCoreDiagnosticreport.Image>;
  setImageList(value: Array<UsCoreDiagnosticreport.Image>): void;
  addImage(value?: UsCoreDiagnosticreport.Image, index?: number): UsCoreDiagnosticreport.Image;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_stu3_datatypes_pb.String | undefined;
  setConclusion(value?: proto_stu3_datatypes_pb.String): void;

  clearCodedDiagnosisList(): void;
  getCodedDiagnosisList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCodedDiagnosisList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCodedDiagnosis(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearPresentedFormList(): void;
  getPresentedFormList(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPresentedFormList(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreDiagnosticreport.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreDiagnosticreport): UsCoreDiagnosticreport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreDiagnosticreport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreDiagnosticreport;
  static deserializeBinaryFromReader(message: UsCoreDiagnosticreport, reader: jspb.BinaryReader): UsCoreDiagnosticreport;
}

export namespace UsCoreDiagnosticreport {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.DiagnosticReportStatusCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: UsCoreDiagnosticreport.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performerList: Array<UsCoreDiagnosticreport.Performer.AsObject>,
    specimenList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    resultList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    imagingStudyList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    imageList: Array<UsCoreDiagnosticreport.Image.AsObject>,
    conclusion?: proto_stu3_datatypes_pb.String.AsObject,
    codedDiagnosisList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    presentedFormList: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Image extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_stu3_datatypes_pb.String | undefined;
    setComment(value?: proto_stu3_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_stu3_datatypes_pb.Reference | undefined;
    setLink(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
      link?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class UsCoreDirectEmail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreDirectEmail.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreDirectEmail): UsCoreDirectEmail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreDirectEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreDirectEmail;
  static deserializeBinaryFromReader(message: UsCoreDirectEmail, reader: jspb.BinaryReader): UsCoreDirectEmail;
}

export namespace UsCoreDirectEmail {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class UsCoreDocumentreference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasMasterIdentifier(): boolean;
  clearMasterIdentifier(): void;
  getMasterIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setMasterIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.DocumentReferenceStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.DocumentReferenceStatusCode): void;

  hasDocStatus(): boolean;
  clearDocStatus(): void;
  getDocStatus(): proto_stu3_codes_pb.CompositionStatusCode | undefined;
  setDocStatus(value?: proto_stu3_codes_pb.CompositionStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setClassValue(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_stu3_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasIndexed(): boolean;
  clearIndexed(): void;
  getIndexed(): proto_stu3_datatypes_pb.Instant | undefined;
  setIndexed(value?: proto_stu3_datatypes_pb.Instant): void;

  clearAuthorList(): void;
  getAuthorList(): Array<proto_stu3_datatypes_pb.Reference>;
  setAuthorList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasAuthenticator(): boolean;
  clearAuthenticator(): void;
  getAuthenticator(): proto_stu3_datatypes_pb.Reference | undefined;
  setAuthenticator(value?: proto_stu3_datatypes_pb.Reference): void;

  hasCustodian(): boolean;
  clearCustodian(): void;
  getCustodian(): proto_stu3_datatypes_pb.Reference | undefined;
  setCustodian(value?: proto_stu3_datatypes_pb.Reference): void;

  clearRelatesToList(): void;
  getRelatesToList(): Array<UsCoreDocumentreference.RelatesTo>;
  setRelatesToList(value: Array<UsCoreDocumentreference.RelatesTo>): void;
  addRelatesTo(value?: UsCoreDocumentreference.RelatesTo, index?: number): UsCoreDocumentreference.RelatesTo;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.String | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.String): void;

  clearSecurityLabelList(): void;
  getSecurityLabelList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setSecurityLabelList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addSecurityLabel(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): UsCoreDocumentreference.Content | undefined;
  setContent(value?: UsCoreDocumentreference.Content): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): UsCoreDocumentreference.Context | undefined;
  setContext(value?: UsCoreDocumentreference.Context): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreDocumentreference.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreDocumentreference): UsCoreDocumentreference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreDocumentreference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreDocumentreference;
  static deserializeBinaryFromReader(message: UsCoreDocumentreference, reader: jspb.BinaryReader): UsCoreDocumentreference;
}

export namespace UsCoreDocumentreference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    masterIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    status?: proto_stu3_codes_pb.DocumentReferenceStatusCode.AsObject,
    docStatus?: proto_stu3_codes_pb.CompositionStatusCode.AsObject,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    classValue?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    created?: proto_stu3_datatypes_pb.DateTime.AsObject,
    indexed?: proto_stu3_datatypes_pb.Instant.AsObject,
    authorList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    authenticator?: proto_stu3_datatypes_pb.Reference.AsObject,
    custodian?: proto_stu3_datatypes_pb.Reference.AsObject,
    relatesToList: Array<UsCoreDocumentreference.RelatesTo.AsObject>,
    description?: proto_stu3_datatypes_pb.String.AsObject,
    securityLabelList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    content?: UsCoreDocumentreference.Content.AsObject,
    context?: UsCoreDocumentreference.Context.AsObject,
  }

  export class RelatesTo extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_codes_pb.DocumentRelationshipTypeCode | undefined;
    setCode(value?: proto_stu3_codes_pb.DocumentRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatesTo.AsObject;
    static toObject(includeInstance: boolean, msg: RelatesTo): RelatesTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatesTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatesTo;
    static deserializeBinaryFromReader(message: RelatesTo, reader: jspb.BinaryReader): RelatesTo;
  }

  export namespace RelatesTo {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_codes_pb.DocumentRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Content extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

    hasFormat(): boolean;
    clearFormat(): void;
    getFormat(): proto_stu3_datatypes_pb.Coding | undefined;
    setFormat(value?: proto_stu3_datatypes_pb.Coding): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
      format?: proto_stu3_datatypes_pb.Coding.AsObject,
    }
  }

  export class Context extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasEncounter(): boolean;
    clearEncounter(): void;
    getEncounter(): proto_stu3_datatypes_pb.Reference | undefined;
    setEncounter(value?: proto_stu3_datatypes_pb.Reference): void;

    clearEventList(): void;
    getEventList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setEventList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addEvent(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasFacilityType(): boolean;
    clearFacilityType(): void;
    getFacilityType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setFacilityType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasPracticeSetting(): boolean;
    clearPracticeSetting(): void;
    getPracticeSetting(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setPracticeSetting(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasSourcePatientInfo(): boolean;
    clearSourcePatientInfo(): void;
    getSourcePatientInfo(): proto_stu3_datatypes_pb.Reference | undefined;
    setSourcePatientInfo(value?: proto_stu3_datatypes_pb.Reference): void;

    clearRelatedList(): void;
    getRelatedList(): Array<UsCoreDocumentreference.Context.Related>;
    setRelatedList(value: Array<UsCoreDocumentreference.Context.Related>): void;
    addRelated(value?: UsCoreDocumentreference.Context.Related, index?: number): UsCoreDocumentreference.Context.Related;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
  }

  export namespace Context {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      encounter?: proto_stu3_datatypes_pb.Reference.AsObject,
      eventList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      facilityType?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      practiceSetting?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      sourcePatientInfo?: proto_stu3_datatypes_pb.Reference.AsObject,
      relatedList: Array<UsCoreDocumentreference.Context.Related.AsObject>,
    }

    export class Related extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

      hasRef(): boolean;
      clearRef(): void;
      getRef(): proto_stu3_datatypes_pb.Reference | undefined;
      setRef(value?: proto_stu3_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Related.AsObject;
      static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Related;
      static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
    }

    export namespace Related {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
        ref?: proto_stu3_datatypes_pb.Reference.AsObject,
      }
    }
  }
}

export class UsCoreEncounter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.EncounterStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.EncounterStatusCode): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<UsCoreEncounter.StatusHistory>;
  setStatusHistoryList(value: Array<UsCoreEncounter.StatusHistory>): void;
  addStatusHistory(value?: UsCoreEncounter.StatusHistory, index?: number): UsCoreEncounter.StatusHistory;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_stu3_datatypes_pb.Coding | undefined;
  setClassValue(value?: proto_stu3_datatypes_pb.Coding): void;

  clearClassHistoryList(): void;
  getClassHistoryList(): Array<UsCoreEncounter.ClassHistory>;
  setClassHistoryList(value: Array<UsCoreEncounter.ClassHistory>): void;
  addClassHistory(value?: UsCoreEncounter.ClassHistory, index?: number): UsCoreEncounter.ClassHistory;

  clearTypeList(): void;
  getTypeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  clearEpisodeOfCareList(): void;
  getEpisodeOfCareList(): Array<proto_stu3_datatypes_pb.Reference>;
  setEpisodeOfCareList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addEpisodeOfCare(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearIncomingReferralList(): void;
  getIncomingReferralList(): Array<proto_stu3_datatypes_pb.Reference>;
  setIncomingReferralList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addIncomingReferral(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearParticipantList(): void;
  getParticipantList(): Array<UsCoreEncounter.Participant>;
  setParticipantList(value: Array<UsCoreEncounter.Participant>): void;
  addParticipant(value?: UsCoreEncounter.Participant, index?: number): UsCoreEncounter.Participant;

  hasAppointment(): boolean;
  clearAppointment(): void;
  getAppointment(): proto_stu3_datatypes_pb.Reference | undefined;
  setAppointment(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): proto_stu3_datatypes_pb.Duration | undefined;
  setLength(value?: proto_stu3_datatypes_pb.Duration): void;

  clearReasonList(): void;
  getReasonList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReason(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<UsCoreEncounter.Diagnosis>;
  setDiagnosisList(value: Array<UsCoreEncounter.Diagnosis>): void;
  addDiagnosis(value?: UsCoreEncounter.Diagnosis, index?: number): UsCoreEncounter.Diagnosis;

  clearAccountList(): void;
  getAccountList(): Array<proto_stu3_datatypes_pb.Reference>;
  setAccountList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAccount(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasHospitalization(): boolean;
  clearHospitalization(): void;
  getHospitalization(): UsCoreEncounter.Hospitalization | undefined;
  setHospitalization(value?: UsCoreEncounter.Hospitalization): void;

  clearLocationList(): void;
  getLocationList(): Array<UsCoreEncounter.Location>;
  setLocationList(value: Array<UsCoreEncounter.Location>): void;
  addLocation(value?: UsCoreEncounter.Location, index?: number): UsCoreEncounter.Location;

  hasServiceProvider(): boolean;
  clearServiceProvider(): void;
  getServiceProvider(): proto_stu3_datatypes_pb.Reference | undefined;
  setServiceProvider(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_stu3_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreEncounter.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreEncounter): UsCoreEncounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreEncounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreEncounter;
  static deserializeBinaryFromReader(message: UsCoreEncounter, reader: jspb.BinaryReader): UsCoreEncounter;
}

export namespace UsCoreEncounter {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    status?: proto_stu3_codes_pb.EncounterStatusCode.AsObject,
    statusHistoryList: Array<UsCoreEncounter.StatusHistory.AsObject>,
    classValue?: proto_stu3_datatypes_pb.Coding.AsObject,
    classHistoryList: Array<UsCoreEncounter.ClassHistory.AsObject>,
    typeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    priority?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    episodeOfCareList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    incomingReferralList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    participantList: Array<UsCoreEncounter.Participant.AsObject>,
    appointment?: proto_stu3_datatypes_pb.Reference.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
    length?: proto_stu3_datatypes_pb.Duration.AsObject,
    reasonList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    diagnosisList: Array<UsCoreEncounter.Diagnosis.AsObject>,
    accountList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    hospitalization?: UsCoreEncounter.Hospitalization.AsObject,
    locationList: Array<UsCoreEncounter.Location.AsObject>,
    serviceProvider?: proto_stu3_datatypes_pb.Reference.AsObject,
    partOf?: proto_stu3_datatypes_pb.Reference.AsObject,
  }

  export class StatusHistory extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_stu3_codes_pb.EncounterStatusCode | undefined;
    setStatus(value?: proto_stu3_codes_pb.EncounterStatusCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      status?: proto_stu3_codes_pb.EncounterStatusCode.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }

  export class ClassHistory extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): proto_stu3_datatypes_pb.Coding | undefined;
    setClassValue(value?: proto_stu3_datatypes_pb.Coding): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      classValue?: proto_stu3_datatypes_pb.Coding.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }

  export class Participant extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearTypeList(): void;
    getTypeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasIndividual(): boolean;
    clearIndividual(): void;
    getIndividual(): proto_stu3_datatypes_pb.Reference | undefined;
    setIndividual(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      typeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      individual?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Diagnosis extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): proto_stu3_datatypes_pb.Reference | undefined;
    setCondition(value?: proto_stu3_datatypes_pb.Reference): void;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasRank(): boolean;
    clearRank(): void;
    getRank(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setRank(value?: proto_stu3_datatypes_pb.PositiveInt): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      condition?: proto_stu3_datatypes_pb.Reference.AsObject,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      rank?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
    }
  }

  export class Hospitalization extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasPreAdmissionIdentifier(): boolean;
    clearPreAdmissionIdentifier(): void;
    getPreAdmissionIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
    setPreAdmissionIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): proto_stu3_datatypes_pb.Reference | undefined;
    setOrigin(value?: proto_stu3_datatypes_pb.Reference): void;

    hasAdmitSource(): boolean;
    clearAdmitSource(): void;
    getAdmitSource(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setAdmitSource(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReAdmission(): boolean;
    clearReAdmission(): void;
    getReAdmission(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setReAdmission(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearDietPreferenceList(): void;
    getDietPreferenceList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setDietPreferenceList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addDietPreference(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    clearSpecialCourtesyList(): void;
    getSpecialCourtesyList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setSpecialCourtesyList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addSpecialCourtesy(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    clearSpecialArrangementList(): void;
    getSpecialArrangementList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setSpecialArrangementList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addSpecialArrangement(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): proto_stu3_datatypes_pb.Reference | undefined;
    setDestination(value?: proto_stu3_datatypes_pb.Reference): void;

    hasDischargeDisposition(): boolean;
    clearDischargeDisposition(): void;
    getDischargeDisposition(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDischargeDisposition(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      preAdmissionIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
      origin?: proto_stu3_datatypes_pb.Reference.AsObject,
      admitSource?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      reAdmission?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      dietPreferenceList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      specialCourtesyList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      specialArrangementList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      destination?: proto_stu3_datatypes_pb.Reference.AsObject,
      dischargeDisposition?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Location extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): proto_stu3_datatypes_pb.Reference | undefined;
    setLocation(value?: proto_stu3_datatypes_pb.Reference): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_stu3_codes_pb.EncounterLocationStatusCode | undefined;
    setStatus(value?: proto_stu3_codes_pb.EncounterLocationStatusCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      location?: proto_stu3_datatypes_pb.Reference.AsObject,
      status?: proto_stu3_codes_pb.EncounterLocationStatusCode.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }
}

export class PatientUSCoreEthnicityExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasOmbCategory(): boolean;
  clearOmbCategory(): void;
  getOmbCategory(): proto_stu3_datatypes_pb.Coding | undefined;
  setOmbCategory(value?: proto_stu3_datatypes_pb.Coding): void;

  clearDetailedList(): void;
  getDetailedList(): Array<proto_stu3_datatypes_pb.Coding>;
  setDetailedList(value: Array<proto_stu3_datatypes_pb.Coding>): void;
  addDetailed(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_datatypes_pb.String | undefined;
  setText(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreEthnicityExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreEthnicityExtension): PatientUSCoreEthnicityExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreEthnicityExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreEthnicityExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreEthnicityExtension, reader: jspb.BinaryReader): PatientUSCoreEthnicityExtension;
}

export namespace PatientUSCoreEthnicityExtension {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    ombCategory?: proto_stu3_datatypes_pb.Coding.AsObject,
    detailedList: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
    text?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class UsCoreGoal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.GoalStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.GoalStatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): UsCoreGoal.Start | undefined;
  setStart(value?: UsCoreGoal.Start): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): UsCoreGoal.Target | undefined;
  setTarget(value?: UsCoreGoal.Target): void;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_stu3_datatypes_pb.Date | undefined;
  setStatusDate(value?: proto_stu3_datatypes_pb.Date): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_stu3_datatypes_pb.String | undefined;
  setStatusReason(value?: proto_stu3_datatypes_pb.String): void;

  hasExpressedBy(): boolean;
  clearExpressedBy(): void;
  getExpressedBy(): proto_stu3_datatypes_pb.Reference | undefined;
  setExpressedBy(value?: proto_stu3_datatypes_pb.Reference): void;

  clearAddressesList(): void;
  getAddressesList(): Array<proto_stu3_datatypes_pb.Reference>;
  setAddressesList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearOutcomeCodeList(): void;
  getOutcomeCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setOutcomeCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addOutcomeCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearOutcomeReferenceList(): void;
  getOutcomeReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setOutcomeReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addOutcomeReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreGoal.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreGoal): UsCoreGoal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreGoal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreGoal;
  static deserializeBinaryFromReader(message: UsCoreGoal, reader: jspb.BinaryReader): UsCoreGoal;
}

export namespace UsCoreGoal {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    status?: proto_stu3_codes_pb.GoalStatusCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    priority?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    start?: UsCoreGoal.Start.AsObject,
    target?: UsCoreGoal.Target.AsObject,
    statusDate?: proto_stu3_datatypes_pb.Date.AsObject,
    statusReason?: proto_stu3_datatypes_pb.String.AsObject,
    expressedBy?: proto_stu3_datatypes_pb.Reference.AsObject,
    addressesList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    outcomeCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    outcomeReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class Start extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    getStartCase(): Start.StartCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Start.AsObject;
    static toObject(includeInstance: boolean, msg: Start): Start.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Start, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Start;
    static deserializeBinaryFromReader(message: Start, reader: jspb.BinaryReader): Start;
  }

  export namespace Start {
    export type AsObject = {
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum StartCase {
      START_NOT_SET = 0,
      DATE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class Target extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasMeasure(): boolean;
    clearMeasure(): void;
    getMeasure(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setMeasure(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): UsCoreGoal.Target.Detail | undefined;
    setDetail(value?: UsCoreGoal.Target.Detail): void;

    hasDue(): boolean;
    clearDue(): void;
    getDue(): UsCoreGoal.Target.Due | undefined;
    setDue(value?: UsCoreGoal.Target.Due): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      measure?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      detail?: UsCoreGoal.Target.Detail.AsObject,
      due?: UsCoreGoal.Target.Due.AsObject,
    }

    export class Detail extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      getDetailCase(): Detail.DetailCase;
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
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum DetailCase {
        DETAIL_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        CODEABLE_CONCEPT = 3,
      }
    }

    export class Due extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_stu3_datatypes_pb.Date | undefined;
      setDate(value?: proto_stu3_datatypes_pb.Date): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_stu3_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_stu3_datatypes_pb.Duration): void;

      getDueCase(): Due.DueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Due.AsObject;
      static toObject(includeInstance: boolean, msg: Due): Due.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Due, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Due;
      static deserializeBinaryFromReader(message: Due, reader: jspb.BinaryReader): Due;
    }

    export namespace Due {
      export type AsObject = {
        date?: proto_stu3_datatypes_pb.Date.AsObject,
        duration?: proto_stu3_datatypes_pb.Duration.AsObject,
      }

      export enum DueCase {
        DUE_NOT_SET = 0,
        DATE = 1,
        DURATION = 2,
      }
    }
  }
}

export class UsCoreImmunization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ImmunizationStatusCodesCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ImmunizationStatusCodesCode): void;

  hasNotGiven(): boolean;
  clearNotGiven(): void;
  getNotGiven(): proto_stu3_datatypes_pb.Boolean | undefined;
  setNotGiven(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasVaccineCode(): boolean;
  clearVaccineCode(): void;
  getVaccineCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setVaccineCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_stu3_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_stu3_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasPrimarySource(): boolean;
  clearPrimarySource(): void;
  getPrimarySource(): proto_stu3_datatypes_pb.Boolean | undefined;
  setPrimarySource(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasReportOrigin(): boolean;
  clearReportOrigin(): void;
  getReportOrigin(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setReportOrigin(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_stu3_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_stu3_datatypes_pb.Reference): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_stu3_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_stu3_datatypes_pb.Reference): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_stu3_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_stu3_datatypes_pb.String): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_stu3_datatypes_pb.Date | undefined;
  setExpirationDate(value?: proto_stu3_datatypes_pb.Date): void;

  hasSite(): boolean;
  clearSite(): void;
  getSite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setSite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setRoute(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDoseQuantity(): boolean;
  clearDoseQuantity(): void;
  getDoseQuantity(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
  setDoseQuantity(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

  clearPractitionerList(): void;
  getPractitionerList(): Array<UsCoreImmunization.Practitioner>;
  setPractitionerList(value: Array<UsCoreImmunization.Practitioner>): void;
  addPractitioner(value?: UsCoreImmunization.Practitioner, index?: number): UsCoreImmunization.Practitioner;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  hasExplanation(): boolean;
  clearExplanation(): void;
  getExplanation(): UsCoreImmunization.Explanation | undefined;
  setExplanation(value?: UsCoreImmunization.Explanation): void;

  clearReactionList(): void;
  getReactionList(): Array<UsCoreImmunization.Reaction>;
  setReactionList(value: Array<UsCoreImmunization.Reaction>): void;
  addReaction(value?: UsCoreImmunization.Reaction, index?: number): UsCoreImmunization.Reaction;

  clearVaccinationProtocolList(): void;
  getVaccinationProtocolList(): Array<UsCoreImmunization.VaccinationProtocol>;
  setVaccinationProtocolList(value: Array<UsCoreImmunization.VaccinationProtocol>): void;
  addVaccinationProtocol(value?: UsCoreImmunization.VaccinationProtocol, index?: number): UsCoreImmunization.VaccinationProtocol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreImmunization.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreImmunization): UsCoreImmunization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreImmunization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreImmunization;
  static deserializeBinaryFromReader(message: UsCoreImmunization, reader: jspb.BinaryReader): UsCoreImmunization;
}

export namespace UsCoreImmunization {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    status?: proto_stu3_codes_pb.ImmunizationStatusCodesCode.AsObject,
    notGiven?: proto_stu3_datatypes_pb.Boolean.AsObject,
    vaccineCode?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_stu3_datatypes_pb.Reference.AsObject,
    encounter?: proto_stu3_datatypes_pb.Reference.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    primarySource?: proto_stu3_datatypes_pb.Boolean.AsObject,
    reportOrigin?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    location?: proto_stu3_datatypes_pb.Reference.AsObject,
    manufacturer?: proto_stu3_datatypes_pb.Reference.AsObject,
    lotNumber?: proto_stu3_datatypes_pb.String.AsObject,
    expirationDate?: proto_stu3_datatypes_pb.Date.AsObject,
    site?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    route?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    doseQuantity?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
    practitionerList: Array<UsCoreImmunization.Practitioner.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    explanation?: UsCoreImmunization.Explanation.AsObject,
    reactionList: Array<UsCoreImmunization.Reaction.AsObject>,
    vaccinationProtocolList: Array<UsCoreImmunization.VaccinationProtocol.AsObject>,
  }

  export class Practitioner extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Practitioner.AsObject;
    static toObject(includeInstance: boolean, msg: Practitioner): Practitioner.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Practitioner, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Practitioner;
    static deserializeBinaryFromReader(message: Practitioner, reader: jspb.BinaryReader): Practitioner;
  }

  export namespace Practitioner {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Explanation extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearReasonList(): void;
    getReasonList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setReasonList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addReason(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    clearReasonNotGivenList(): void;
    getReasonNotGivenList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setReasonNotGivenList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addReasonNotGiven(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Explanation.AsObject;
    static toObject(includeInstance: boolean, msg: Explanation): Explanation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Explanation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Explanation;
    static deserializeBinaryFromReader(message: Explanation, reader: jspb.BinaryReader): Explanation;
  }

  export namespace Explanation {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      reasonList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      reasonNotGivenList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    }
  }

  export class Reaction extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): proto_stu3_datatypes_pb.Reference | undefined;
    setDetail(value?: proto_stu3_datatypes_pb.Reference): void;

    hasReported(): boolean;
    clearReported(): void;
    getReported(): proto_stu3_datatypes_pb.Boolean | undefined;
    setReported(value?: proto_stu3_datatypes_pb.Boolean): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      date?: proto_stu3_datatypes_pb.DateTime.AsObject,
      detail?: proto_stu3_datatypes_pb.Reference.AsObject,
      reported?: proto_stu3_datatypes_pb.Boolean.AsObject,
    }
  }

  export class VaccinationProtocol extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasDoseSequence(): boolean;
    clearDoseSequence(): void;
    getDoseSequence(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setDoseSequence(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasAuthority(): boolean;
    clearAuthority(): void;
    getAuthority(): proto_stu3_datatypes_pb.Reference | undefined;
    setAuthority(value?: proto_stu3_datatypes_pb.Reference): void;

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): proto_stu3_datatypes_pb.String | undefined;
    setSeries(value?: proto_stu3_datatypes_pb.String): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setSeriesDoses(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    clearTargetDiseaseList(): void;
    getTargetDiseaseList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setTargetDiseaseList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addTargetDisease(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasDoseStatus(): boolean;
    clearDoseStatus(): void;
    getDoseStatus(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDoseStatus(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasDoseStatusReason(): boolean;
    clearDoseStatusReason(): void;
    getDoseStatusReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDoseStatusReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VaccinationProtocol.AsObject;
    static toObject(includeInstance: boolean, msg: VaccinationProtocol): VaccinationProtocol.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VaccinationProtocol, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VaccinationProtocol;
    static deserializeBinaryFromReader(message: VaccinationProtocol, reader: jspb.BinaryReader): VaccinationProtocol;
  }

  export namespace VaccinationProtocol {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      doseSequence?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      authority?: proto_stu3_datatypes_pb.Reference.AsObject,
      series?: proto_stu3_datatypes_pb.String.AsObject,
      seriesDoses?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      targetDiseaseList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      doseStatus?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      doseStatusReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

export class UsCoreLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.LocationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.LocationStatusCode): void;

  hasOperationalStatus(): boolean;
  clearOperationalStatus(): void;
  getOperationalStatus(): proto_stu3_datatypes_pb.Coding | undefined;
  setOperationalStatus(value?: proto_stu3_datatypes_pb.Coding): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  clearAliasList(): void;
  getAliasList(): Array<proto_stu3_datatypes_pb.String>;
  setAliasList(value: Array<proto_stu3_datatypes_pb.String>): void;
  addAlias(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.String | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.String): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): proto_stu3_codes_pb.LocationModeCode | undefined;
  setMode(value?: proto_stu3_codes_pb.LocationModeCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): proto_stu3_datatypes_pb.Address | undefined;
  setAddress(value?: proto_stu3_datatypes_pb.Address): void;

  hasPhysicalType(): boolean;
  clearPhysicalType(): void;
  getPhysicalType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setPhysicalType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): UsCoreLocation.Position | undefined;
  setPosition(value?: UsCoreLocation.Position): void;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_stu3_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_stu3_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_stu3_datatypes_pb.Reference): void;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_stu3_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreLocation.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreLocation): UsCoreLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreLocation;
  static deserializeBinaryFromReader(message: UsCoreLocation, reader: jspb.BinaryReader): UsCoreLocation;
}

export namespace UsCoreLocation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    status?: proto_stu3_codes_pb.LocationStatusCode.AsObject,
    operationalStatus?: proto_stu3_datatypes_pb.Coding.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    aliasList: Array<proto_stu3_datatypes_pb.String.AsObject>,
    description?: proto_stu3_datatypes_pb.String.AsObject,
    mode?: proto_stu3_codes_pb.LocationModeCode.AsObject,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    address?: proto_stu3_datatypes_pb.Address.AsObject,
    physicalType?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    position?: UsCoreLocation.Position.AsObject,
    managingOrganization?: proto_stu3_datatypes_pb.Reference.AsObject,
    partOf?: proto_stu3_datatypes_pb.Reference.AsObject,
    endpointList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class Position extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLongitude(): boolean;
    clearLongitude(): void;
    getLongitude(): proto_stu3_datatypes_pb.Decimal | undefined;
    setLongitude(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasLatitude(): boolean;
    clearLatitude(): void;
    getLatitude(): proto_stu3_datatypes_pb.Decimal | undefined;
    setLatitude(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasAltitude(): boolean;
    clearAltitude(): void;
    getAltitude(): proto_stu3_datatypes_pb.Decimal | undefined;
    setAltitude(value?: proto_stu3_datatypes_pb.Decimal): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      longitude?: proto_stu3_datatypes_pb.Decimal.AsObject,
      latitude?: proto_stu3_datatypes_pb.Decimal.AsObject,
      altitude?: proto_stu3_datatypes_pb.Decimal.AsObject,
    }
  }
}

export class UsCoreMedication extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.MedicationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.MedicationStatusCode): void;

  hasIsBrand(): boolean;
  clearIsBrand(): void;
  getIsBrand(): proto_stu3_datatypes_pb.Boolean | undefined;
  setIsBrand(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasIsOverTheCounter(): boolean;
  clearIsOverTheCounter(): void;
  getIsOverTheCounter(): proto_stu3_datatypes_pb.Boolean | undefined;
  setIsOverTheCounter(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_stu3_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_stu3_datatypes_pb.Reference): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setForm(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  clearIngredientList(): void;
  getIngredientList(): Array<UsCoreMedication.Ingredient>;
  setIngredientList(value: Array<UsCoreMedication.Ingredient>): void;
  addIngredient(value?: UsCoreMedication.Ingredient, index?: number): UsCoreMedication.Ingredient;

  hasPackageValue(): boolean;
  clearPackageValue(): void;
  getPackageValue(): UsCoreMedication.Package | undefined;
  setPackageValue(value?: UsCoreMedication.Package): void;

  clearImageList(): void;
  getImageList(): Array<proto_stu3_datatypes_pb.Attachment>;
  setImageList(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addImage(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreMedication.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreMedication): UsCoreMedication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreMedication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreMedication;
  static deserializeBinaryFromReader(message: UsCoreMedication, reader: jspb.BinaryReader): UsCoreMedication;
}

export namespace UsCoreMedication {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    status?: proto_stu3_codes_pb.MedicationStatusCode.AsObject,
    isBrand?: proto_stu3_datatypes_pb.Boolean.AsObject,
    isOverTheCounter?: proto_stu3_datatypes_pb.Boolean.AsObject,
    manufacturer?: proto_stu3_datatypes_pb.Reference.AsObject,
    form?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    ingredientList: Array<UsCoreMedication.Ingredient.AsObject>,
    packageValue?: UsCoreMedication.Package.AsObject,
    imageList: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
  }

  export class Ingredient extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasItem(): boolean;
    clearItem(): void;
    getItem(): UsCoreMedication.Ingredient.Item | undefined;
    setItem(value?: UsCoreMedication.Ingredient.Item): void;

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): proto_stu3_datatypes_pb.Boolean | undefined;
    setIsActive(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): proto_stu3_datatypes_pb.Ratio | undefined;
    setAmount(value?: proto_stu3_datatypes_pb.Ratio): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      item?: UsCoreMedication.Ingredient.Item.AsObject,
      isActive?: proto_stu3_datatypes_pb.Boolean.AsObject,
      amount?: proto_stu3_datatypes_pb.Ratio.AsObject,
    }

    export class Item extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_stu3_datatypes_pb.Reference | undefined;
      setReference(value?: proto_stu3_datatypes_pb.Reference): void;

      getItemCase(): Item.ItemCase;
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
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      }

      export enum ItemCase {
        ITEM_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Package extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setContainer(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearContentList(): void;
    getContentList(): Array<UsCoreMedication.Package.Content>;
    setContentList(value: Array<UsCoreMedication.Package.Content>): void;
    addContent(value?: UsCoreMedication.Package.Content, index?: number): UsCoreMedication.Package.Content;

    clearBatchList(): void;
    getBatchList(): Array<UsCoreMedication.Package.Batch>;
    setBatchList(value: Array<UsCoreMedication.Package.Batch>): void;
    addBatch(value?: UsCoreMedication.Package.Batch, index?: number): UsCoreMedication.Package.Batch;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Package.AsObject;
    static toObject(includeInstance: boolean, msg: Package): Package.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Package, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Package;
    static deserializeBinaryFromReader(message: Package, reader: jspb.BinaryReader): Package;
  }

  export namespace Package {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      container?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      contentList: Array<UsCoreMedication.Package.Content.AsObject>,
      batchList: Array<UsCoreMedication.Package.Batch.AsObject>,
    }

    export class Content extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasItem(): boolean;
      clearItem(): void;
      getItem(): UsCoreMedication.Package.Content.Item | undefined;
      setItem(value?: UsCoreMedication.Package.Content.Item): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
      setAmount(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Content.AsObject;
      static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Content;
      static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
    }

    export namespace Content {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        item?: UsCoreMedication.Package.Content.Item.AsObject,
        amount?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      }

      export class Item extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_stu3_datatypes_pb.Reference | undefined;
        setReference(value?: proto_stu3_datatypes_pb.Reference): void;

        getItemCase(): Item.ItemCase;
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
          codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
          reference?: proto_stu3_datatypes_pb.Reference.AsObject,
        }

        export enum ItemCase {
          ITEM_NOT_SET = 0,
          CODEABLE_CONCEPT = 1,
          REFERENCE = 2,
        }
      }
    }

    export class Batch extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasLotNumber(): boolean;
      clearLotNumber(): void;
      getLotNumber(): proto_stu3_datatypes_pb.String | undefined;
      setLotNumber(value?: proto_stu3_datatypes_pb.String): void;

      hasExpirationDate(): boolean;
      clearExpirationDate(): void;
      getExpirationDate(): proto_stu3_datatypes_pb.DateTime | undefined;
      setExpirationDate(value?: proto_stu3_datatypes_pb.DateTime): void;

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
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        lotNumber?: proto_stu3_datatypes_pb.String.AsObject,
        expirationDate?: proto_stu3_datatypes_pb.DateTime.AsObject,
      }
    }
  }
}

export class UsCoreMedicationrequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearDefinitionList(): void;
  getDefinitionList(): Array<proto_stu3_datatypes_pb.Reference>;
  setDefinitionList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDefinition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.MedicationRequestStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.MedicationRequestStatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): proto_stu3_codes_pb.MedicationRequestIntentCode | undefined;
  setIntent(value?: proto_stu3_codes_pb.MedicationRequestIntentCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_stu3_codes_pb.MedicationRequestPriorityCode | undefined;
  setPriority(value?: proto_stu3_codes_pb.MedicationRequestPriorityCode): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): UsCoreMedicationrequest.Medication | undefined;
  setMedication(value?: UsCoreMedicationrequest.Medication): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_stu3_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_stu3_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): UsCoreMedicationrequest.Requester | undefined;
  setRequester(value?: UsCoreMedicationrequest.Requester): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_stu3_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearDosageInstructionList(): void;
  getDosageInstructionList(): Array<proto_stu3_datatypes_pb.Dosage>;
  setDosageInstructionList(value: Array<proto_stu3_datatypes_pb.Dosage>): void;
  addDosageInstruction(value?: proto_stu3_datatypes_pb.Dosage, index?: number): proto_stu3_datatypes_pb.Dosage;

  hasDispenseRequest(): boolean;
  clearDispenseRequest(): void;
  getDispenseRequest(): UsCoreMedicationrequest.DispenseRequest | undefined;
  setDispenseRequest(value?: UsCoreMedicationrequest.DispenseRequest): void;

  hasSubstitution(): boolean;
  clearSubstitution(): void;
  getSubstitution(): UsCoreMedicationrequest.Substitution | undefined;
  setSubstitution(value?: UsCoreMedicationrequest.Substitution): void;

  hasPriorPrescription(): boolean;
  clearPriorPrescription(): void;
  getPriorPrescription(): proto_stu3_datatypes_pb.Reference | undefined;
  setPriorPrescription(value?: proto_stu3_datatypes_pb.Reference): void;

  clearDetectedIssueList(): void;
  getDetectedIssueList(): Array<proto_stu3_datatypes_pb.Reference>;
  setDetectedIssueList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_stu3_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreMedicationrequest.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreMedicationrequest): UsCoreMedicationrequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreMedicationrequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreMedicationrequest;
  static deserializeBinaryFromReader(message: UsCoreMedicationrequest, reader: jspb.BinaryReader): UsCoreMedicationrequest;
}

export namespace UsCoreMedicationrequest {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    definitionList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    status?: proto_stu3_codes_pb.MedicationRequestStatusCode.AsObject,
    intent?: proto_stu3_codes_pb.MedicationRequestIntentCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    priority?: proto_stu3_codes_pb.MedicationRequestPriorityCode.AsObject,
    medication?: UsCoreMedicationrequest.Medication.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    authoredOn?: proto_stu3_datatypes_pb.DateTime.AsObject,
    requester?: UsCoreMedicationrequest.Requester.AsObject,
    recorder?: proto_stu3_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    dosageInstructionList: Array<proto_stu3_datatypes_pb.Dosage.AsObject>,
    dispenseRequest?: UsCoreMedicationrequest.DispenseRequest.AsObject,
    substitution?: UsCoreMedicationrequest.Substitution.AsObject,
    priorPrescription?: proto_stu3_datatypes_pb.Reference.AsObject,
    detectedIssueList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    eventHistoryList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class Medication extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

    getMedicationCase(): Medication.MedicationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Medication.AsObject;
    static toObject(includeInstance: boolean, msg: Medication): Medication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Medication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Medication;
    static deserializeBinaryFromReader(message: Medication, reader: jspb.BinaryReader): Medication;
  }

  export namespace Medication {
    export type AsObject = {
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum MedicationCase {
      MEDICATION_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class Requester extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): proto_stu3_datatypes_pb.Reference | undefined;
    setAgent(value?: proto_stu3_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_stu3_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Requester.AsObject;
    static toObject(includeInstance: boolean, msg: Requester): Requester.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Requester, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Requester;
    static deserializeBinaryFromReader(message: Requester, reader: jspb.BinaryReader): Requester;
  }

  export namespace Requester {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      agent?: proto_stu3_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class DispenseRequest extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasValidityPeriod(): boolean;
    clearValidityPeriod(): void;
    getValidityPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setValidityPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasNumberOfRepeatsAllowed(): boolean;
    clearNumberOfRepeatsAllowed(): void;
    getNumberOfRepeatsAllowed(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setNumberOfRepeatsAllowed(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasExpectedSupplyDuration(): boolean;
    clearExpectedSupplyDuration(): void;
    getExpectedSupplyDuration(): proto_stu3_datatypes_pb.Duration | undefined;
    setExpectedSupplyDuration(value?: proto_stu3_datatypes_pb.Duration): void;

    hasPerformer(): boolean;
    clearPerformer(): void;
    getPerformer(): proto_stu3_datatypes_pb.Reference | undefined;
    setPerformer(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      validityPeriod?: proto_stu3_datatypes_pb.Period.AsObject,
      numberOfRepeatsAllowed?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      quantity?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      expectedSupplyDuration?: proto_stu3_datatypes_pb.Duration.AsObject,
      performer?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Substitution extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasAllowed(): boolean;
    clearAllowed(): void;
    getAllowed(): proto_stu3_datatypes_pb.Boolean | undefined;
    setAllowed(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      allowed?: proto_stu3_datatypes_pb.Boolean.AsObject,
      reason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

export class UsCoreMedicationstatement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_stu3_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.MedicationStatementStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.MedicationStatementStatusCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): UsCoreMedicationstatement.Medication | undefined;
  setMedication(value?: UsCoreMedicationstatement.Medication): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): UsCoreMedicationstatement.Effective | undefined;
  setEffective(value?: UsCoreMedicationstatement.Effective): void;

  hasDateAsserted(): boolean;
  clearDateAsserted(): void;
  getDateAsserted(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDateAsserted(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasInformationSource(): boolean;
  clearInformationSource(): void;
  getInformationSource(): proto_stu3_datatypes_pb.Reference | undefined;
  setInformationSource(value?: proto_stu3_datatypes_pb.Reference): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  clearDerivedFromList(): void;
  getDerivedFromList(): Array<proto_stu3_datatypes_pb.Reference>;
  setDerivedFromList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasTaken(): boolean;
  clearTaken(): void;
  getTaken(): proto_stu3_codes_pb.MedicationStatementTakenCode | undefined;
  setTaken(value?: proto_stu3_codes_pb.MedicationStatementTakenCode): void;

  clearReasonNotTakenList(): void;
  getReasonNotTakenList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonNotTakenList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonNotTaken(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearDosageList(): void;
  getDosageList(): Array<proto_stu3_datatypes_pb.Dosage>;
  setDosageList(value: Array<proto_stu3_datatypes_pb.Dosage>): void;
  addDosage(value?: proto_stu3_datatypes_pb.Dosage, index?: number): proto_stu3_datatypes_pb.Dosage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreMedicationstatement.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreMedicationstatement): UsCoreMedicationstatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreMedicationstatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreMedicationstatement;
  static deserializeBinaryFromReader(message: UsCoreMedicationstatement, reader: jspb.BinaryReader): UsCoreMedicationstatement;
}

export namespace UsCoreMedicationstatement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    status?: proto_stu3_codes_pb.MedicationStatementStatusCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    medication?: UsCoreMedicationstatement.Medication.AsObject,
    effective?: UsCoreMedicationstatement.Effective.AsObject,
    dateAsserted?: proto_stu3_datatypes_pb.DateTime.AsObject,
    informationSource?: proto_stu3_datatypes_pb.Reference.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    derivedFromList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    taken?: proto_stu3_codes_pb.MedicationStatementTakenCode.AsObject,
    reasonNotTakenList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    dosageList: Array<proto_stu3_datatypes_pb.Dosage.AsObject>,
  }

  export class Medication extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

    getMedicationCase(): Medication.MedicationCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Medication.AsObject;
    static toObject(includeInstance: boolean, msg: Medication): Medication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Medication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Medication;
    static deserializeBinaryFromReader(message: Medication, reader: jspb.BinaryReader): Medication;
  }

  export namespace Medication {
    export type AsObject = {
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum MedicationCase {
      MEDICATION_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }
}

export class UsCoreObservationresults extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): UsCoreObservationresults.Effective | undefined;
  setEffective(value?: UsCoreObservationresults.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): UsCoreObservationresults.Value | undefined;
  setValue(value?: UsCoreObservationresults.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRangeList(): void;
  getReferenceRangeList(): Array<UsCoreObservationresults.ReferenceRange>;
  setReferenceRangeList(value: Array<UsCoreObservationresults.ReferenceRange>): void;
  addReferenceRange(value?: UsCoreObservationresults.ReferenceRange, index?: number): UsCoreObservationresults.ReferenceRange;

  clearRelatedList(): void;
  getRelatedList(): Array<UsCoreObservationresults.Related>;
  setRelatedList(value: Array<UsCoreObservationresults.Related>): void;
  addRelated(value?: UsCoreObservationresults.Related, index?: number): UsCoreObservationresults.Related;

  clearComponentList(): void;
  getComponentList(): Array<UsCoreObservationresults.Component>;
  setComponentList(value: Array<UsCoreObservationresults.Component>): void;
  addComponent(value?: UsCoreObservationresults.Component, index?: number): UsCoreObservationresults.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreObservationresults.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreObservationresults): UsCoreObservationresults.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreObservationresults, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreObservationresults;
  static deserializeBinaryFromReader(message: UsCoreObservationresults, reader: jspb.BinaryReader): UsCoreObservationresults;
}

export namespace UsCoreObservationresults {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: UsCoreObservationresults.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performerList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: UsCoreObservationresults.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRangeList: Array<UsCoreObservationresults.ReferenceRange.AsObject>,
    relatedList: Array<UsCoreObservationresults.Related.AsObject>,
    componentList: Array<UsCoreObservationresults.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
      attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      BOOLEAN = 4,
      RANGE = 5,
      RATIO = 6,
      SAMPLED_DATA = 7,
      ATTACHMENT = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesToList(): void;
    getAppliesToList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesToList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesToList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): UsCoreObservationresults.Component.Value | undefined;
    setValue(value?: UsCoreObservationresults.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRangeList(): void;
    getReferenceRangeList(): Array<UsCoreObservationresults.ReferenceRange>;
    setReferenceRangeList(value: Array<UsCoreObservationresults.ReferenceRange>): void;
    addReferenceRange(value?: UsCoreObservationresults.ReferenceRange, index?: number): UsCoreObservationresults.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: UsCoreObservationresults.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRangeList: Array<UsCoreObservationresults.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class UsCoreOrganization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_stu3_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_stu3_datatypes_pb.Boolean): void;

  clearTypeList(): void;
  getTypeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  clearAliasList(): void;
  getAliasList(): Array<proto_stu3_datatypes_pb.String>;
  setAliasList(value: Array<proto_stu3_datatypes_pb.String>): void;
  addAlias(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  clearAddressList(): void;
  getAddressList(): Array<proto_stu3_datatypes_pb.Address>;
  setAddressList(value: Array<proto_stu3_datatypes_pb.Address>): void;
  addAddress(value?: proto_stu3_datatypes_pb.Address, index?: number): proto_stu3_datatypes_pb.Address;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_stu3_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_stu3_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<UsCoreOrganization.Contact>;
  setContactList(value: Array<UsCoreOrganization.Contact>): void;
  addContact(value?: UsCoreOrganization.Contact, index?: number): UsCoreOrganization.Contact;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_stu3_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreOrganization): UsCoreOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreOrganization;
  static deserializeBinaryFromReader(message: UsCoreOrganization, reader: jspb.BinaryReader): UsCoreOrganization;
}

export namespace UsCoreOrganization {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    active?: proto_stu3_datatypes_pb.Boolean.AsObject,
    typeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    aliasList: Array<proto_stu3_datatypes_pb.String.AsObject>,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    addressList: Array<proto_stu3_datatypes_pb.Address.AsObject>,
    partOf?: proto_stu3_datatypes_pb.Reference.AsObject,
    contactList: Array<UsCoreOrganization.Contact.AsObject>,
    endpointList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class Contact extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasPurpose(): boolean;
    clearPurpose(): void;
    getPurpose(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setPurpose(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_stu3_datatypes_pb.HumanName | undefined;
    setName(value?: proto_stu3_datatypes_pb.HumanName): void;

    clearTelecomList(): void;
    getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
    setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_stu3_datatypes_pb.Address | undefined;
    setAddress(value?: proto_stu3_datatypes_pb.Address): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      purpose?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      name?: proto_stu3_datatypes_pb.HumanName.AsObject,
      telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_stu3_datatypes_pb.Address.AsObject,
    }
  }
}

export class UsCorePatient extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_stu3_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_stu3_datatypes_pb.Boolean): void;

  clearNameList(): void;
  getNameList(): Array<proto_stu3_datatypes_pb.HumanName>;
  setNameList(value: Array<proto_stu3_datatypes_pb.HumanName>): void;
  addName(value?: proto_stu3_datatypes_pb.HumanName, index?: number): proto_stu3_datatypes_pb.HumanName;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): proto_stu3_codes_pb.AdministrativeGenderCode | undefined;
  setGender(value?: proto_stu3_codes_pb.AdministrativeGenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_stu3_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_stu3_datatypes_pb.Date): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): UsCorePatient.Deceased | undefined;
  setDeceased(value?: UsCorePatient.Deceased): void;

  clearAddressList(): void;
  getAddressList(): Array<proto_stu3_datatypes_pb.Address>;
  setAddressList(value: Array<proto_stu3_datatypes_pb.Address>): void;
  addAddress(value?: proto_stu3_datatypes_pb.Address, index?: number): proto_stu3_datatypes_pb.Address;

  hasMaritalStatus(): boolean;
  clearMaritalStatus(): void;
  getMaritalStatus(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMaritalStatus(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMultipleBirth(): boolean;
  clearMultipleBirth(): void;
  getMultipleBirth(): UsCorePatient.MultipleBirth | undefined;
  setMultipleBirth(value?: UsCorePatient.MultipleBirth): void;

  clearPhotoList(): void;
  getPhotoList(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPhotoList(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  clearContactList(): void;
  getContactList(): Array<UsCorePatient.Contact>;
  setContactList(value: Array<UsCorePatient.Contact>): void;
  addContact(value?: UsCorePatient.Contact, index?: number): UsCorePatient.Contact;

  clearCommunicationList(): void;
  getCommunicationList(): Array<UsCorePatient.Communication>;
  setCommunicationList(value: Array<UsCorePatient.Communication>): void;
  addCommunication(value?: UsCorePatient.Communication, index?: number): UsCorePatient.Communication;

  clearGeneralPractitionerList(): void;
  getGeneralPractitionerList(): Array<proto_stu3_datatypes_pb.Reference>;
  setGeneralPractitionerList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addGeneralPractitioner(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_stu3_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_stu3_datatypes_pb.Reference): void;

  clearLinkList(): void;
  getLinkList(): Array<UsCorePatient.Link>;
  setLinkList(value: Array<UsCorePatient.Link>): void;
  addLink(value?: UsCorePatient.Link, index?: number): UsCorePatient.Link;

  hasRace(): boolean;
  clearRace(): void;
  getRace(): PatientUSCoreRaceExtension | undefined;
  setRace(value?: PatientUSCoreRaceExtension): void;

  hasEthnicity(): boolean;
  clearEthnicity(): void;
  getEthnicity(): PatientUSCoreEthnicityExtension | undefined;
  setEthnicity(value?: PatientUSCoreEthnicityExtension): void;

  hasBirthsex(): boolean;
  clearBirthsex(): void;
  getBirthsex(): proto_stu3_uscore_codes_pb.UsCoreBirthSexCode | undefined;
  setBirthsex(value?: proto_stu3_uscore_codes_pb.UsCoreBirthSexCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCorePatient.AsObject;
  static toObject(includeInstance: boolean, msg: UsCorePatient): UsCorePatient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCorePatient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCorePatient;
  static deserializeBinaryFromReader(message: UsCorePatient, reader: jspb.BinaryReader): UsCorePatient;
}

export namespace UsCorePatient {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    active?: proto_stu3_datatypes_pb.Boolean.AsObject,
    nameList: Array<proto_stu3_datatypes_pb.HumanName.AsObject>,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    gender?: proto_stu3_codes_pb.AdministrativeGenderCode.AsObject,
    birthDate?: proto_stu3_datatypes_pb.Date.AsObject,
    deceased?: UsCorePatient.Deceased.AsObject,
    addressList: Array<proto_stu3_datatypes_pb.Address.AsObject>,
    maritalStatus?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    multipleBirth?: UsCorePatient.MultipleBirth.AsObject,
    photoList: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
    contactList: Array<UsCorePatient.Contact.AsObject>,
    communicationList: Array<UsCorePatient.Communication.AsObject>,
    generalPractitionerList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    managingOrganization?: proto_stu3_datatypes_pb.Reference.AsObject,
    linkList: Array<UsCorePatient.Link.AsObject>,
    race?: PatientUSCoreRaceExtension.AsObject,
    ethnicity?: PatientUSCoreEthnicityExtension.AsObject,
    birthsex?: proto_stu3_uscore_codes_pb.UsCoreBirthSexCode.AsObject,
  }

  export class Deceased extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    getDeceasedCase(): Deceased.DeceasedCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deceased.AsObject;
    static toObject(includeInstance: boolean, msg: Deceased): Deceased.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deceased, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deceased;
    static deserializeBinaryFromReader(message: Deceased, reader: jspb.BinaryReader): Deceased;
  }

  export namespace Deceased {
    export type AsObject = {
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
    }

    export enum DeceasedCase {
      DECEASED_NOT_SET = 0,
      BOOLEAN = 1,
      DATE_TIME = 2,
    }
  }

  export class MultipleBirth extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

    getMultipleBirthCase(): MultipleBirth.MultipleBirthCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultipleBirth.AsObject;
    static toObject(includeInstance: boolean, msg: MultipleBirth): MultipleBirth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultipleBirth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultipleBirth;
    static deserializeBinaryFromReader(message: MultipleBirth, reader: jspb.BinaryReader): MultipleBirth;
  }

  export namespace MultipleBirth {
    export type AsObject = {
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
    }

    export enum MultipleBirthCase {
      MULTIPLE_BIRTH_NOT_SET = 0,
      BOOLEAN = 1,
      INTEGER = 2,
    }
  }

  export class Contact extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearRelationshipList(): void;
    getRelationshipList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setRelationshipList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addRelationship(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_stu3_datatypes_pb.HumanName | undefined;
    setName(value?: proto_stu3_datatypes_pb.HumanName): void;

    clearTelecomList(): void;
    getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
    setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_stu3_datatypes_pb.Address | undefined;
    setAddress(value?: proto_stu3_datatypes_pb.Address): void;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): proto_stu3_codes_pb.AdministrativeGenderCode | undefined;
    setGender(value?: proto_stu3_codes_pb.AdministrativeGenderCode): void;

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): proto_stu3_datatypes_pb.Reference | undefined;
    setOrganization(value?: proto_stu3_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      relationshipList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      name?: proto_stu3_datatypes_pb.HumanName.AsObject,
      telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_stu3_datatypes_pb.Address.AsObject,
      gender?: proto_stu3_codes_pb.AdministrativeGenderCode.AsObject,
      organization?: proto_stu3_datatypes_pb.Reference.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }

  export class Communication extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_stu3_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_stu3_datatypes_pb.Boolean): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      language?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_stu3_datatypes_pb.Boolean.AsObject,
    }
  }

  export class Link extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasOther(): boolean;
    clearOther(): void;
    getOther(): proto_stu3_datatypes_pb.Reference | undefined;
    setOther(value?: proto_stu3_datatypes_pb.Reference): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.LinkTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.LinkTypeCode): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      other?: proto_stu3_datatypes_pb.Reference.AsObject,
      type?: proto_stu3_codes_pb.LinkTypeCode.AsObject,
    }
  }
}

export class UsCorePractitioner extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_stu3_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.HumanName | undefined;
  setName(value?: proto_stu3_datatypes_pb.HumanName): void;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  clearAddressList(): void;
  getAddressList(): Array<proto_stu3_datatypes_pb.Address>;
  setAddressList(value: Array<proto_stu3_datatypes_pb.Address>): void;
  addAddress(value?: proto_stu3_datatypes_pb.Address, index?: number): proto_stu3_datatypes_pb.Address;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): proto_stu3_codes_pb.AdministrativeGenderCode | undefined;
  setGender(value?: proto_stu3_codes_pb.AdministrativeGenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_stu3_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_stu3_datatypes_pb.Date): void;

  clearPhotoList(): void;
  getPhotoList(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPhotoList(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  clearQualificationList(): void;
  getQualificationList(): Array<UsCorePractitioner.Qualification>;
  setQualificationList(value: Array<UsCorePractitioner.Qualification>): void;
  addQualification(value?: UsCorePractitioner.Qualification, index?: number): UsCorePractitioner.Qualification;

  clearCommunicationList(): void;
  getCommunicationList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCommunicationList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCorePractitioner.AsObject;
  static toObject(includeInstance: boolean, msg: UsCorePractitioner): UsCorePractitioner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCorePractitioner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCorePractitioner;
  static deserializeBinaryFromReader(message: UsCorePractitioner, reader: jspb.BinaryReader): UsCorePractitioner;
}

export namespace UsCorePractitioner {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    active?: proto_stu3_datatypes_pb.Boolean.AsObject,
    name?: proto_stu3_datatypes_pb.HumanName.AsObject,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    addressList: Array<proto_stu3_datatypes_pb.Address.AsObject>,
    gender?: proto_stu3_codes_pb.AdministrativeGenderCode.AsObject,
    birthDate?: proto_stu3_datatypes_pb.Date.AsObject,
    photoList: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
    qualificationList: Array<UsCorePractitioner.Qualification.AsObject>,
    communicationList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class Qualification extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearIdentifierList(): void;
    getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
    setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_stu3_datatypes_pb.Reference | undefined;
    setIssuer(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      issuer?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class UsCorePractitionerrole extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_stu3_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  hasPractitioner(): boolean;
  clearPractitioner(): void;
  getPractitioner(): proto_stu3_datatypes_pb.Reference | undefined;
  setPractitioner(value?: proto_stu3_datatypes_pb.Reference): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_stu3_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_stu3_datatypes_pb.Reference): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecialty(): boolean;
  clearSpecialty(): void;
  getSpecialty(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setSpecialty(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  clearLocationList(): void;
  getLocationList(): Array<proto_stu3_datatypes_pb.Reference>;
  setLocationList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addLocation(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearHealthcareServiceList(): void;
  getHealthcareServiceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setHealthcareServiceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addHealthcareService(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  clearAvailableTimeList(): void;
  getAvailableTimeList(): Array<UsCorePractitionerrole.AvailableTime>;
  setAvailableTimeList(value: Array<UsCorePractitionerrole.AvailableTime>): void;
  addAvailableTime(value?: UsCorePractitionerrole.AvailableTime, index?: number): UsCorePractitionerrole.AvailableTime;

  clearNotAvailableList(): void;
  getNotAvailableList(): Array<UsCorePractitionerrole.NotAvailable>;
  setNotAvailableList(value: Array<UsCorePractitionerrole.NotAvailable>): void;
  addNotAvailable(value?: UsCorePractitionerrole.NotAvailable, index?: number): UsCorePractitionerrole.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_stu3_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_stu3_datatypes_pb.String): void;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_stu3_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCorePractitionerrole.AsObject;
  static toObject(includeInstance: boolean, msg: UsCorePractitionerrole): UsCorePractitionerrole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCorePractitionerrole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCorePractitionerrole;
  static deserializeBinaryFromReader(message: UsCorePractitionerrole, reader: jspb.BinaryReader): UsCorePractitionerrole;
}

export namespace UsCorePractitionerrole {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    active?: proto_stu3_datatypes_pb.Boolean.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
    practitioner?: proto_stu3_datatypes_pb.Reference.AsObject,
    organization?: proto_stu3_datatypes_pb.Reference.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specialty?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    locationList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    healthcareServiceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
    availableTimeList: Array<UsCorePractitionerrole.AvailableTime.AsObject>,
    notAvailableList: Array<UsCorePractitionerrole.NotAvailable.AsObject>,
    availabilityExceptions?: proto_stu3_datatypes_pb.String.AsObject,
    endpointList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class AvailableTime extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<proto_stu3_datatypes_pb.DaysOfWeekCode>;
    setDaysOfWeekList(value: Array<proto_stu3_datatypes_pb.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: proto_stu3_datatypes_pb.DaysOfWeekCode, index?: number): proto_stu3_datatypes_pb.DaysOfWeekCode;

    hasAllDay(): boolean;
    clearAllDay(): void;
    getAllDay(): proto_stu3_datatypes_pb.Boolean | undefined;
    setAllDay(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasAvailableStartTime(): boolean;
    clearAvailableStartTime(): void;
    getAvailableStartTime(): proto_stu3_datatypes_pb.Time | undefined;
    setAvailableStartTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasAvailableEndTime(): boolean;
    clearAvailableEndTime(): void;
    getAvailableEndTime(): proto_stu3_datatypes_pb.Time | undefined;
    setAvailableEndTime(value?: proto_stu3_datatypes_pb.Time): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      daysOfWeekList: Array<proto_stu3_datatypes_pb.DaysOfWeekCode.AsObject>,
      allDay?: proto_stu3_datatypes_pb.Boolean.AsObject,
      availableStartTime?: proto_stu3_datatypes_pb.Time.AsObject,
      availableEndTime?: proto_stu3_datatypes_pb.Time.AsObject,
    }
  }

  export class NotAvailable extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasDuring(): boolean;
    clearDuring(): void;
    getDuring(): proto_stu3_datatypes_pb.Period | undefined;
    setDuring(value?: proto_stu3_datatypes_pb.Period): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      during?: proto_stu3_datatypes_pb.Period.AsObject,
    }
  }
}

export class UsCoreProcedure extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearDefinitionList(): void;
  getDefinitionList(): Array<proto_stu3_datatypes_pb.Reference>;
  setDefinitionList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDefinition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_stu3_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.EventStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.EventStatusCode): void;

  hasNotDone(): boolean;
  clearNotDone(): void;
  getNotDone(): proto_stu3_datatypes_pb.Boolean | undefined;
  setNotDone(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasNotDoneReason(): boolean;
  clearNotDoneReason(): void;
  getNotDoneReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setNotDoneReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasPerformed(): boolean;
  clearPerformed(): void;
  getPerformed(): UsCoreProcedure.Performed | undefined;
  setPerformed(value?: UsCoreProcedure.Performed): void;

  clearPerformerList(): void;
  getPerformerList(): Array<UsCoreProcedure.Performer>;
  setPerformerList(value: Array<UsCoreProcedure.Performer>): void;
  addPerformer(value?: UsCoreProcedure.Performer, index?: number): UsCoreProcedure.Performer;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_stu3_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setOutcome(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  clearReportList(): void;
  getReportList(): Array<proto_stu3_datatypes_pb.Reference>;
  setReportList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReport(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearComplicationList(): void;
  getComplicationList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setComplicationList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addComplication(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearComplicationDetailList(): void;
  getComplicationDetailList(): Array<proto_stu3_datatypes_pb.Reference>;
  setComplicationDetailList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addComplicationDetail(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearFollowUpList(): void;
  getFollowUpList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setFollowUpList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addFollowUp(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearFocalDeviceList(): void;
  getFocalDeviceList(): Array<UsCoreProcedure.FocalDevice>;
  setFocalDeviceList(value: Array<UsCoreProcedure.FocalDevice>): void;
  addFocalDevice(value?: UsCoreProcedure.FocalDevice, index?: number): UsCoreProcedure.FocalDevice;

  clearUsedReferenceList(): void;
  getUsedReferenceList(): Array<proto_stu3_datatypes_pb.Reference>;
  setUsedReferenceList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addUsedReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearUsedCodeList(): void;
  getUsedCodeList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setUsedCodeList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addUsedCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreProcedure.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreProcedure): UsCoreProcedure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreProcedure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreProcedure;
  static deserializeBinaryFromReader(message: UsCoreProcedure, reader: jspb.BinaryReader): UsCoreProcedure;
}

export namespace UsCoreProcedure {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    definitionList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.EventStatusCode.AsObject,
    notDone?: proto_stu3_datatypes_pb.Boolean.AsObject,
    notDoneReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    performed?: UsCoreProcedure.Performed.AsObject,
    performerList: Array<UsCoreProcedure.Performer.AsObject>,
    location?: proto_stu3_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    bodySiteList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    outcome?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    reportList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    complicationList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    complicationDetailList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    followUpList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    focalDeviceList: Array<UsCoreProcedure.FocalDevice.AsObject>,
    usedReferenceList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    usedCodeList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class Performed extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getPerformedCase(): Performed.PerformedCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performed.AsObject;
    static toObject(includeInstance: boolean, msg: Performed): Performed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performed;
    static deserializeBinaryFromReader(message: Performed, reader: jspb.BinaryReader): Performed;
  }

  export namespace Performed {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum PerformedCase {
      PERFORMED_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_stu3_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class FocalDevice extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasAction(): boolean;
    clearAction(): void;
    getAction(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setAction(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasManipulated(): boolean;
    clearManipulated(): void;
    getManipulated(): proto_stu3_datatypes_pb.Reference | undefined;
    setManipulated(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      action?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      manipulated?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class CapabilityStatementProfileResourceAssociationExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ResourceTypeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ResourceTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementProfileResourceAssociationExtension.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementProfileResourceAssociationExtension): CapabilityStatementProfileResourceAssociationExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementProfileResourceAssociationExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementProfileResourceAssociationExtension;
  static deserializeBinaryFromReader(message: CapabilityStatementProfileResourceAssociationExtension, reader: jspb.BinaryReader): CapabilityStatementProfileResourceAssociationExtension;
}

export namespace CapabilityStatementProfileResourceAssociationExtension {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    valueCode?: proto_stu3_codes_pb.ResourceTypeCode.AsObject,
  }
}

export class PatientUSCoreRaceExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearOmbCategoryList(): void;
  getOmbCategoryList(): Array<proto_stu3_datatypes_pb.Coding>;
  setOmbCategoryList(value: Array<proto_stu3_datatypes_pb.Coding>): void;
  addOmbCategory(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

  clearDetailedList(): void;
  getDetailedList(): Array<proto_stu3_datatypes_pb.Coding>;
  setDetailedList(value: Array<proto_stu3_datatypes_pb.Coding>): void;
  addDetailed(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_datatypes_pb.String | undefined;
  setText(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreRaceExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreRaceExtension): PatientUSCoreRaceExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreRaceExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreRaceExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreRaceExtension, reader: jspb.BinaryReader): PatientUSCoreRaceExtension;
}

export namespace PatientUSCoreRaceExtension {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    ombCategoryList: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
    detailedList: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
    text?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class UsCoreSmokingstatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContainedList(): void;
  getContainedList(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContainedList(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): UsCoreSmokingstatus.Effective | undefined;
  setEffective(value?: UsCoreSmokingstatus.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformerList(): void;
  getPerformerList(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformerList(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): UsCoreSmokingstatus.Value | undefined;
  setValue(value?: UsCoreSmokingstatus.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRangeList(): void;
  getReferenceRangeList(): Array<UsCoreSmokingstatus.ReferenceRange>;
  setReferenceRangeList(value: Array<UsCoreSmokingstatus.ReferenceRange>): void;
  addReferenceRange(value?: UsCoreSmokingstatus.ReferenceRange, index?: number): UsCoreSmokingstatus.ReferenceRange;

  clearRelatedList(): void;
  getRelatedList(): Array<UsCoreSmokingstatus.Related>;
  setRelatedList(value: Array<UsCoreSmokingstatus.Related>): void;
  addRelated(value?: UsCoreSmokingstatus.Related, index?: number): UsCoreSmokingstatus.Related;

  clearComponentList(): void;
  getComponentList(): Array<UsCoreSmokingstatus.Component>;
  setComponentList(value: Array<UsCoreSmokingstatus.Component>): void;
  addComponent(value?: UsCoreSmokingstatus.Component, index?: number): UsCoreSmokingstatus.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreSmokingstatus.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreSmokingstatus): UsCoreSmokingstatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreSmokingstatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreSmokingstatus;
  static deserializeBinaryFromReader(message: UsCoreSmokingstatus, reader: jspb.BinaryReader): UsCoreSmokingstatus;
}

export namespace UsCoreSmokingstatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    containedList: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOnList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    categoryList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: UsCoreSmokingstatus.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performerList: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: UsCoreSmokingstatus.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRangeList: Array<UsCoreSmokingstatus.ReferenceRange.AsObject>,
    relatedList: Array<UsCoreSmokingstatus.Related.AsObject>,
    componentList: Array<UsCoreSmokingstatus.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesToList(): void;
    getAppliesToList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesToList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesToList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): UsCoreSmokingstatus.Component.Value | undefined;
    setValue(value?: UsCoreSmokingstatus.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRangeList(): void;
    getReferenceRangeList(): Array<UsCoreSmokingstatus.ReferenceRange>;
    setReferenceRangeList(value: Array<UsCoreSmokingstatus.ReferenceRange>): void;
    addReferenceRange(value?: UsCoreSmokingstatus.ReferenceRange, index?: number): UsCoreSmokingstatus.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: UsCoreSmokingstatus.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRangeList: Array<UsCoreSmokingstatus.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

