// package: google.fhir.r4.core
// file: proto/r4/core/resources/related_person.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class RelatedPerson extends jspb.Message {
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

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRelationship(): void;
  getRelationship(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setRelationship(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearName(): void;
  getName(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setName(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): RelatedPerson.GenderCode | undefined;
  setGender(value?: RelatedPerson.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearAddress(): void;
  getAddress(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddress(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  clearPhoto(): void;
  getPhoto(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhoto(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearCommunication(): void;
  getCommunication(): Array<RelatedPerson.Communication>;
  setCommunication(value: Array<RelatedPerson.Communication>): void;
  addCommunication(value?: RelatedPerson.Communication, index?: number): RelatedPerson.Communication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedPerson.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedPerson): RelatedPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedPerson;
  static deserializeBinaryFromReader(message: RelatedPerson, reader: jspb.BinaryReader): RelatedPerson;
}

export namespace RelatedPerson {
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
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    relationship: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    gender?: RelatedPerson.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    address: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    photo: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    communication: Array<RelatedPerson.Communication.AsObject>,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Communication extends jspb.Message {
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

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }
}

