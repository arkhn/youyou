// package: google.fhir.r4.core
// file: proto/r4/core/resources/appointment.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Appointment extends jspb.Message {
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
  getStatus(): Appointment.StatusCode | undefined;
  setStatus(value?: Appointment.StatusCode): void;

  hasCancelationReason(): boolean;
  clearCancelationReason(): void;
  getCancelationReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCancelationReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearServiceCategoryList(): void;
  getServiceCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearServiceTypeList(): void;
  getServiceTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialtyList(): void;
  getSpecialtyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialtyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasAppointmentType(): boolean;
  clearAppointmentType(): void;
  getAppointmentType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAppointmentType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): proto_r4_core_datatypes_pb.Instant | undefined;
  setStart(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): proto_r4_core_datatypes_pb.Instant | undefined;
  setEnd(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasMinutesDuration(): boolean;
  clearMinutesDuration(): void;
  getMinutesDuration(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setMinutesDuration(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  clearSlotList(): void;
  getSlotList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSlotList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSlot(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  hasPatientInstruction(): boolean;
  clearPatientInstruction(): void;
  getPatientInstruction(): proto_r4_core_datatypes_pb.String | undefined;
  setPatientInstruction(value?: proto_r4_core_datatypes_pb.String): void;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearParticipantList(): void;
  getParticipantList(): Array<Appointment.Participant>;
  setParticipantList(value: Array<Appointment.Participant>): void;
  addParticipant(value?: Appointment.Participant, index?: number): Appointment.Participant;

  clearRequestedPeriodList(): void;
  getRequestedPeriodList(): Array<proto_r4_core_datatypes_pb.Period>;
  setRequestedPeriodList(value: Array<proto_r4_core_datatypes_pb.Period>): void;
  addRequestedPeriod(value?: proto_r4_core_datatypes_pb.Period, index?: number): proto_r4_core_datatypes_pb.Period;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Appointment.AsObject;
  static toObject(includeInstance: boolean, msg: Appointment): Appointment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Appointment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Appointment;
  static deserializeBinaryFromReader(message: Appointment, reader: jspb.BinaryReader): Appointment;
}

export namespace Appointment {
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
    status?: Appointment.StatusCode.AsObject,
    cancelationReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    serviceCategoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialtyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    appointmentType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    priority?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    start?: proto_r4_core_datatypes_pb.Instant.AsObject,
    end?: proto_r4_core_datatypes_pb.Instant.AsObject,
    minutesDuration?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    slotList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
    patientInstruction?: proto_r4_core_datatypes_pb.String.AsObject,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    participantList: Array<Appointment.Participant.AsObject>,
    requestedPeriodList: Array<proto_r4_core_datatypes_pb.Period.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AppointmentStatusCode.ValueMap],
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

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasRequired(): boolean;
    clearRequired(): void;
    getRequired(): Appointment.Participant.RequiredCode | undefined;
    setRequired(value?: Appointment.Participant.RequiredCode): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Appointment.Participant.StatusCode | undefined;
    setStatus(value?: Appointment.Participant.StatusCode): void;

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
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
      required?: Appointment.Participant.RequiredCode.AsObject,
      status?: Appointment.Participant.StatusCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class RequiredCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RequiredCode.AsObject;
      static toObject(includeInstance: boolean, msg: RequiredCode): RequiredCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RequiredCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RequiredCode;
      static deserializeBinaryFromReader(message: RequiredCode, reader: jspb.BinaryReader): RequiredCode;
    }

    export namespace RequiredCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipantRequiredCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

