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

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasParticipatingOrganization(): boolean;
  clearParticipatingOrganization(): void;
  getParticipatingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParticipatingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearNetwork(): void;
  getNetwork(): Array<proto_r4_core_datatypes_pb.Reference>;
  setNetwork(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addNetwork(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
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
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    participatingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    network: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    healthcareService: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }
}

