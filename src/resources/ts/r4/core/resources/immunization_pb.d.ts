// package: google.fhir.r4.core
// file: proto/r4/core/resources/immunization.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class Immunization extends jspb.Message {
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
  getStatus(): Immunization.StatusCode | undefined;
  setStatus(value?: Immunization.StatusCode): void;

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
  getOccurrence(): Immunization.OccurrenceX | undefined;
  setOccurrence(value?: Immunization.OccurrenceX): void;

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
  getPerformerList(): Array<Immunization.Performer>;
  setPerformerList(value: Array<Immunization.Performer>): void;
  addPerformer(value?: Immunization.Performer, index?: number): Immunization.Performer;

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
  getEducationList(): Array<Immunization.Education>;
  setEducationList(value: Array<Immunization.Education>): void;
  addEducation(value?: Immunization.Education, index?: number): Immunization.Education;

  clearProgramEligibilityList(): void;
  getProgramEligibilityList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProgramEligibilityList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProgramEligibility(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasFundingSource(): boolean;
  clearFundingSource(): void;
  getFundingSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundingSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReactionList(): void;
  getReactionList(): Array<Immunization.Reaction>;
  setReactionList(value: Array<Immunization.Reaction>): void;
  addReaction(value?: Immunization.Reaction, index?: number): Immunization.Reaction;

  clearProtocolAppliedList(): void;
  getProtocolAppliedList(): Array<Immunization.ProtocolApplied>;
  setProtocolAppliedList(value: Array<Immunization.ProtocolApplied>): void;
  addProtocolApplied(value?: Immunization.ProtocolApplied, index?: number): Immunization.ProtocolApplied;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Immunization.AsObject;
  static toObject(includeInstance: boolean, msg: Immunization): Immunization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Immunization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Immunization;
  static deserializeBinaryFromReader(message: Immunization, reader: jspb.BinaryReader): Immunization;
}

export namespace Immunization {
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
    status?: Immunization.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    vaccineCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: Immunization.OccurrenceX.AsObject,
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
    performerList: Array<Immunization.Performer.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    isSubpotent?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subpotentReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    educationList: Array<Immunization.Education.AsObject>,
    programEligibilityList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    fundingSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reactionList: Array<Immunization.Reaction.AsObject>,
    protocolAppliedList: Array<Immunization.ProtocolApplied.AsObject>,
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
    getDoseNumber(): Immunization.ProtocolApplied.DoseNumberX | undefined;
    setDoseNumber(value?: Immunization.ProtocolApplied.DoseNumberX): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): Immunization.ProtocolApplied.SeriesDosesX | undefined;
    setSeriesDoses(value?: Immunization.ProtocolApplied.SeriesDosesX): void;

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
      doseNumber?: Immunization.ProtocolApplied.DoseNumberX.AsObject,
      seriesDoses?: Immunization.ProtocolApplied.SeriesDosesX.AsObject,
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

