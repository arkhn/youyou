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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasProvidedBy(): boolean;
  clearProvidedBy(): void;
  getProvidedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProvidedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialtyList(): void;
  getSpecialtyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialtyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocationList(): void;
  getLocationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
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

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearCoverageAreaList(): void;
  getCoverageAreaList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCoverageAreaList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCoverageArea(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearServiceProvisionCodeList(): void;
  getServiceProvisionCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceProvisionCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceProvisionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearEligibilityList(): void;
  getEligibilityList(): Array<HealthcareService.Eligibility>;
  setEligibilityList(value: Array<HealthcareService.Eligibility>): void;
  addEligibility(value?: HealthcareService.Eligibility, index?: number): HealthcareService.Eligibility;

  clearProgramList(): void;
  getProgramList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProgramList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProgram(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCharacteristicList(): void;
  getCharacteristicList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCharacteristicList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCharacteristic(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCommunicationList(): void;
  getCommunicationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCommunicationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReferralMethodList(): void;
  getReferralMethodList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReferralMethodList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReferralMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasAppointmentRequired(): boolean;
  clearAppointmentRequired(): void;
  getAppointmentRequired(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setAppointmentRequired(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearAvailableTimeList(): void;
  getAvailableTimeList(): Array<HealthcareService.AvailableTime>;
  setAvailableTimeList(value: Array<HealthcareService.AvailableTime>): void;
  addAvailableTime(value?: HealthcareService.AvailableTime, index?: number): HealthcareService.AvailableTime;

  clearNotAvailableList(): void;
  getNotAvailableList(): Array<HealthcareService.NotAvailable>;
  setNotAvailableList(value: Array<HealthcareService.NotAvailable>): void;
  addNotAvailable(value?: HealthcareService.NotAvailable, index?: number): HealthcareService.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
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
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    providedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialtyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    locationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
    extraDetails?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    photo?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    coverageAreaList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    serviceProvisionCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    eligibilityList: Array<HealthcareService.Eligibility.AsObject>,
    programList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    characteristicList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    communicationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    referralMethodList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    appointmentRequired?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    availableTimeList: Array<HealthcareService.AvailableTime.AsObject>,
    notAvailableList: Array<HealthcareService.NotAvailable.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class Eligibility extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      comment?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }
  }

  export class AvailableTime extends jspb.Message {
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

    clearDaysOfWeekList(): void;
    getDaysOfWeekList(): Array<HealthcareService.AvailableTime.DaysOfWeekCode>;
    setDaysOfWeekList(value: Array<HealthcareService.AvailableTime.DaysOfWeekCode>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeekList: Array<HealthcareService.AvailableTime.DaysOfWeekCode.AsObject>,
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

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class NotAvailable extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      during?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

