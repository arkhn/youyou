// package: google.fhir.r4.core
// file: proto/r4/core/resources/medication_dispense.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicationDispense extends jspb.Message {
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
  getStatus(): MedicationDispense.StatusCode | undefined;
  setStatus(value?: MedicationDispense.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): MedicationDispense.StatusReasonX | undefined;
  setStatusReason(value?: MedicationDispense.StatusReasonX): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): MedicationDispense.MedicationX | undefined;
  setMedication(value?: MedicationDispense.MedicationX): void;

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
  getPerformerList(): Array<MedicationDispense.Performer>;
  setPerformerList(value: Array<MedicationDispense.Performer>): void;
  addPerformer(value?: MedicationDispense.Performer, index?: number): MedicationDispense.Performer;

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
  getSubstitution(): MedicationDispense.Substitution | undefined;
  setSubstitution(value?: MedicationDispense.Substitution): void;

  clearDetectedIssueList(): void;
  getDetectedIssueList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDetectedIssueList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationDispense.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationDispense): MedicationDispense.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationDispense, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationDispense;
  static deserializeBinaryFromReader(message: MedicationDispense, reader: jspb.BinaryReader): MedicationDispense;
}

export namespace MedicationDispense {
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
    status?: MedicationDispense.StatusCode.AsObject,
    statusReason?: MedicationDispense.StatusReasonX.AsObject,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    medication?: MedicationDispense.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    performerList: Array<MedicationDispense.Performer.AsObject>,
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
    substitution?: MedicationDispense.Substitution.AsObject,
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

