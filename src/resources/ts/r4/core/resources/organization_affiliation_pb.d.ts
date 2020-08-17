// package: google.fhir.r4.core
// file: proto/r4/core/resources/organization_affiliation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class OrganizationAffiliation extends jspb.Message {
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

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasParticipatingOrganization(): boolean;
  clearParticipatingOrganization(): void;
  getParticipatingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParticipatingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearNetworkList(): void;
  getNetworkList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setNetworkList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addNetwork(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCodeList(): void;
  getCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialtyList(): void;
  getSpecialtyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialtyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocationList(): void;
  getLocationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearHealthcareServiceList(): void;
  getHealthcareServiceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHealthcareServiceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHealthcareService(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearEndpointList(): void;
  getEndpointList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpointList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationAffiliation.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationAffiliation): OrganizationAffiliation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationAffiliation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationAffiliation;
  static deserializeBinaryFromReader(message: OrganizationAffiliation, reader: jspb.BinaryReader): OrganizationAffiliation;
}

export namespace OrganizationAffiliation {
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
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    participatingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    networkList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    codeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialtyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    locationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    healthcareServiceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecomList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    endpointList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }
}

