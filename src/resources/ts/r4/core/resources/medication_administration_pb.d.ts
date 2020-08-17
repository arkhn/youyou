// package: google.fhir.r4.core
// file: proto/r4/core/resources/medication_administration.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicationAdministration extends jspb.Message {
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
  getStatus(): MedicationAdministration.StatusCode | undefined;
  setStatus(value?: MedicationAdministration.StatusCode): void;

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
  getMedication(): MedicationAdministration.MedicationX | undefined;
  setMedication(value?: MedicationAdministration.MedicationX): void;

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
  getEffective(): MedicationAdministration.EffectiveX | undefined;
  setEffective(value?: MedicationAdministration.EffectiveX): void;

  clearPerformerList(): void;
  getPerformerList(): Array<MedicationAdministration.Performer>;
  setPerformerList(value: Array<MedicationAdministration.Performer>): void;
  addPerformer(value?: MedicationAdministration.Performer, index?: number): MedicationAdministration.Performer;

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
  getDosage(): MedicationAdministration.Dosage | undefined;
  setDosage(value?: MedicationAdministration.Dosage): void;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationAdministration.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationAdministration): MedicationAdministration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationAdministration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationAdministration;
  static deserializeBinaryFromReader(message: MedicationAdministration, reader: jspb.BinaryReader): MedicationAdministration;
}

export namespace MedicationAdministration {
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
    status?: MedicationAdministration.StatusCode.AsObject,
    statusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    medication?: MedicationAdministration.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    effective?: MedicationAdministration.EffectiveX.AsObject,
    performerList: Array<MedicationAdministration.Performer.AsObject>,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    deviceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosage?: MedicationAdministration.Dosage.AsObject,
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
    getRate(): MedicationAdministration.Dosage.RateX | undefined;
    setRate(value?: MedicationAdministration.Dosage.RateX): void;

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
      rate?: MedicationAdministration.Dosage.RateX.AsObject,
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

