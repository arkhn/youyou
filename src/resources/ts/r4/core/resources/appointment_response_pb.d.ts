// package: google.fhir.r4.core
// file: proto/r4/core/resources/appointment_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class AppointmentResponse extends jspb.Message {
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

  hasAppointment(): boolean;
  clearAppointment(): void;
  getAppointment(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAppointment(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): proto_r4_core_datatypes_pb.Instant | undefined;
  setStart(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasEnd(): boolean;
  clearEnd(): void;
  getEnd(): proto_r4_core_datatypes_pb.Instant | undefined;
  setEnd(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearParticipantTypeList(): void;
  getParticipantTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setParticipantTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addParticipantType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasActor(): boolean;
  clearActor(): void;
  getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasParticipantStatus(): boolean;
  clearParticipantStatus(): void;
  getParticipantStatus(): AppointmentResponse.ParticipantStatusCode | undefined;
  setParticipantStatus(value?: AppointmentResponse.ParticipantStatusCode): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppointmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AppointmentResponse): AppointmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppointmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppointmentResponse;
  static deserializeBinaryFromReader(message: AppointmentResponse, reader: jspb.BinaryReader): AppointmentResponse;
}

export namespace AppointmentResponse {
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
    appointment?: proto_r4_core_datatypes_pb.Reference.AsObject,
    start?: proto_r4_core_datatypes_pb.Instant.AsObject,
    end?: proto_r4_core_datatypes_pb.Instant.AsObject,
    participantTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    participantStatus?: AppointmentResponse.ParticipantStatusCode.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
  }

  export class ParticipantStatusCode extends jspb.Message {
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
    toObject(includeInstance?: boolean): ParticipantStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: ParticipantStatusCode): ParticipantStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParticipantStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParticipantStatusCode;
    static deserializeBinaryFromReader(message: ParticipantStatusCode, reader: jspb.BinaryReader): ParticipantStatusCode;
  }

  export namespace ParticipantStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ParticipationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

