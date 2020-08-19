// package: google.fhir.r4.core
// file: proto/r4/core/resources/healthcare_service.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class HealthcareService extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasProvidedBy(): boolean;
  clearProvidedBy(): void;
  getProvidedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProvidedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialty(): void;
  getSpecialty(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialty(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocation(): void;
  getLocation(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocation(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  hasExtraDetails(): boolean;
  clearExtraDetails(): void;
  getExtraDetails(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setExtraDetails(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasPhoto(): boolean;
  clearPhoto(): void;
  getPhoto(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setPhoto(value?: proto_r4_core_datatypes_pb.Attachment): void;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearCoverageArea(): void;
  getCoverageArea(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCoverageArea(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCoverageArea(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearServiceProvisionCode(): void;
  getServiceProvisionCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceProvisionCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceProvisionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearEligibility(): void;
  getEligibility(): Array<HealthcareService.Eligibility>;
  setEligibility(value: Array<HealthcareService.Eligibility>): void;
  addEligibility(value?: HealthcareService.Eligibility, index?: number): HealthcareService.Eligibility;

  clearProgram(): void;
  getProgram(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProgram(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProgram(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCharacteristic(): void;
  getCharacteristic(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCharacteristic(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCharacteristic(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCommunication(): void;
  getCommunication(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCommunication(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReferralMethod(): void;
  getReferralMethod(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReferralMethod(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReferralMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasAppointmentRequired(): boolean;
  clearAppointmentRequired(): void;
  getAppointmentRequired(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setAppointmentRequired(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearAvailableTime(): void;
  getAvailableTime(): Array<HealthcareService.AvailableTime>;
  setAvailableTime(value: Array<HealthcareService.AvailableTime>): void;
  addAvailableTime(value?: HealthcareService.AvailableTime, index?: number): HealthcareService.AvailableTime;

  clearNotAvailable(): void;
  getNotAvailable(): Array<HealthcareService.NotAvailable>;
  setNotAvailable(value: Array<HealthcareService.NotAvailable>): void;
  addNotAvailable(value?: HealthcareService.NotAvailable, index?: number): HealthcareService.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthcareService.AsObject;
  static toObject(includeInstance: boolean, msg: HealthcareService): HealthcareService.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HealthcareService, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthcareService;
  static deserializeBinaryFromReader(message: HealthcareService, reader: jspb.BinaryReader): HealthcareService;
}

export namespace HealthcareService {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    providedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
    extraDetails?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    photo?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    coverageArea: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    serviceProvisionCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    eligibility: Array<HealthcareService.Eligibility.AsObject>,
    program: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    characteristic: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    communication: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    referralMethod: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    appointmentRequired?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    availableTime: Array<HealthcareService.AvailableTime.AsObject>,
    notAvailable: Array<HealthcareService.NotAvailable.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class Eligibility extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.Markdown): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Eligibility.AsObject;
    static toObject(includeInstance: boolean, msg: Eligibility): Eligibility.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Eligibility, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Eligibility;
    static deserializeBinaryFromReader(message: Eligibility, reader: jspb.BinaryReader): Eligibility;
  }

  export namespace Eligibility {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      comment?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }
  }

  export class AvailableTime extends jspb.Message {
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

    clearDaysOfWeek(): void;
    getDaysOfWeek(): Array<HealthcareService.AvailableTime.DaysOfWeekCode>;
    setDaysOfWeek(value: Array<HealthcareService.AvailableTime.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: HealthcareService.AvailableTime.DaysOfWeekCode, index?: number): HealthcareService.AvailableTime.DaysOfWeekCode;

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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeek: Array<HealthcareService.AvailableTime.DaysOfWeekCode.AsObject>,
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

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class NotAvailable extends jspb.Message {
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      during?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

