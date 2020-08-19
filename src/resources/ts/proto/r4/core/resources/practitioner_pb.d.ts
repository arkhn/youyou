// package: google.fhir.r4.core
// file: proto/r4/core/resources/practitioner.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Practitioner extends jspb.Message {
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

  clearName(): void;
  getName(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setName(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAddress(): void;
  getAddress(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddress(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): Practitioner.GenderCode | undefined;
  setGender(value?: Practitioner.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearPhoto(): void;
  getPhoto(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhoto(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  clearQualification(): void;
  getQualification(): Array<Practitioner.Qualification>;
  setQualification(value: Array<Practitioner.Qualification>): void;
  addQualification(value?: Practitioner.Qualification, index?: number): Practitioner.Qualification;

  clearCommunication(): void;
  getCommunication(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCommunication(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Practitioner.AsObject;
  static toObject(includeInstance: boolean, msg: Practitioner): Practitioner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Practitioner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Practitioner;
  static deserializeBinaryFromReader(message: Practitioner, reader: jspb.BinaryReader): Practitioner;
}

export namespace Practitioner {
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
    name: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    address: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    gender?: Practitioner.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    photo: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    qualification: Array<Practitioner.Qualification.AsObject>,
    communication: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
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

  export class Qualification extends jspb.Message {
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

    clearIdentifier(): void;
    getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Qualification.AsObject;
    static toObject(includeInstance: boolean, msg: Qualification): Qualification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Qualification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Qualification;
    static deserializeBinaryFromReader(message: Qualification, reader: jspb.BinaryReader): Qualification;
  }

  export namespace Qualification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

