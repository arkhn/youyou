// package: google.fhir.r4.core
// file: proto/r4/core/resources/practitioner_role.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class PractitionerRole extends jspb.Message {
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

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasPractitioner(): boolean;
  clearPractitioner(): void;
  getPractitioner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPractitioner(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCode(): void;
  getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialty(): void;
  getSpecialty(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialty(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocation(): void;
  getLocation(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocation(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearHealthcareService(): void;
  getHealthcareService(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHealthcareService(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHealthcareService(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAvailableTime(): void;
  getAvailableTime(): Array<PractitionerRole.AvailableTime>;
  setAvailableTime(value: Array<PractitionerRole.AvailableTime>): void;
  addAvailableTime(value?: PractitionerRole.AvailableTime, index?: number): PractitionerRole.AvailableTime;

  clearNotAvailable(): void;
  getNotAvailable(): Array<PractitionerRole.NotAvailable>;
  setNotAvailable(value: Array<PractitionerRole.NotAvailable>): void;
  addNotAvailable(value?: PractitionerRole.NotAvailable, index?: number): PractitionerRole.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerRole.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerRole): PractitionerRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerRole;
  static deserializeBinaryFromReader(message: PractitionerRole, reader: jspb.BinaryReader): PractitionerRole;
}

export namespace PractitionerRole {
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
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    practitioner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    healthcareService: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    availableTime: Array<PractitionerRole.AvailableTime.AsObject>,
    notAvailable: Array<PractitionerRole.NotAvailable.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
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
    getDaysOfWeek(): Array<PractitionerRole.AvailableTime.DaysOfWeekCode>;
    setDaysOfWeek(value: Array<PractitionerRole.AvailableTime.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: PractitionerRole.AvailableTime.DaysOfWeekCode, index?: number): PractitionerRole.AvailableTime.DaysOfWeekCode;

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
      daysOfWeek: Array<PractitionerRole.AvailableTime.DaysOfWeekCode.AsObject>,
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

