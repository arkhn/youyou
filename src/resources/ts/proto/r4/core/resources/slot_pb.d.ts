// package: google.fhir.r4.core
// file: proto/r4/core/resources/slot.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Slot extends jspb.Message {
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

  clearServiceCategory(): void;
  getServiceCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearServiceType(): void;
  getServiceType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setServiceType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addServiceType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialty(): void;
  getSpecialty(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialty(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasAppointmentType(): boolean;
  clearAppointmentType(): void;
  getAppointmentType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAppointmentType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSchedule(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Slot.StatusCode | undefined;
  setStatus(value?: Slot.StatusCode): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): proto_r4_core_datatypes_pb.Instant | undefined;
  setStart(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): proto_r4_core_datatypes_pb.Instant | undefined;
  setEnd(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasOverbooked(): boolean;
  clearOverbooked(): void;
  getOverbooked(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setOverbooked(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slot.AsObject;
  static toObject(includeInstance: boolean, msg: Slot): Slot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Slot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slot;
  static deserializeBinaryFromReader(message: Slot, reader: jspb.BinaryReader): Slot;
}

export namespace Slot {
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
    serviceCategory: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceType: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    appointmentType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    schedule?: proto_r4_core_datatypes_pb.Reference.AsObject,
    status?: Slot.StatusCode.AsObject,
    start?: proto_r4_core_datatypes_pb.Instant.AsObject,
    end?: proto_r4_core_datatypes_pb.Instant.AsObject,
    overbooked?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SlotStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SlotStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SlotStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SlotStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.SlotStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SlotStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

