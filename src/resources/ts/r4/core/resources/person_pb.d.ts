// package: google.fhir.r4.core
// file: proto/r4/core/resources/person.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Person extends jspb.Message {
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

  clearNameList(): void;
  getNameList(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setNameList(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): Person.GenderCode | undefined;
  setGender(value?: Person.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearAddressList(): void;
  getAddressList(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddressList(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasPhoto(): boolean;
  clearPhoto(): void;
  getPhoto(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setPhoto(value?: proto_r4_core_datatypes_pb.Attachment): void;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearLinkList(): void;
  getLinkList(): Array<Person.Link>;
  setLinkList(value: Array<Person.Link>): void;
  addLink(value?: Person.Link, index?: number): Person.Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Person.AsObject;
  static toObject(includeInstance: boolean, msg: Person): Person.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Person, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Person;
  static deserializeBinaryFromReader(message: Person, reader: jspb.BinaryReader): Person;
}

export namespace Person {
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
    nameList: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    gender?: Person.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    addressList: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    photo?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    linkList: Array<Person.Link.AsObject>,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Link extends jspb.Message {
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

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAssurance(): boolean;
    clearAssurance(): void;
    getAssurance(): Person.Link.AssuranceCode | undefined;
    setAssurance(value?: Person.Link.AssuranceCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      target?: proto_r4_core_datatypes_pb.Reference.AsObject,
      assurance?: Person.Link.AssuranceCode.AsObject,
    }

    export class AssuranceCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap[keyof proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap[keyof proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AssuranceCode.AsObject;
      static toObject(includeInstance: boolean, msg: AssuranceCode): AssuranceCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AssuranceCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AssuranceCode;
      static deserializeBinaryFromReader(message: AssuranceCode, reader: jspb.BinaryReader): AssuranceCode;
    }

    export namespace AssuranceCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap[keyof proto_r4_core_codes_pb.IdentityAssuranceLevelCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

