// package: google.fhir.r4.core
// file: proto/r4/core/resources/body_structure.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class BodyStructure extends jspb.Message {
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

  hasMorphology(): boolean;
  clearMorphology(): void;
  getMorphology(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMorphology(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearLocationQualifier(): void;
  getLocationQualifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLocationQualifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLocationQualifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearImage(): void;
  getImage(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setImage(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addImage(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodyStructure.AsObject;
  static toObject(includeInstance: boolean, msg: BodyStructure): BodyStructure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodyStructure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodyStructure;
  static deserializeBinaryFromReader(message: BodyStructure, reader: jspb.BinaryReader): BodyStructure;
}

export namespace BodyStructure {
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
    morphology?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    location?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    locationQualifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    image: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }
}

