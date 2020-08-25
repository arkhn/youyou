// package: google.fhir.r4.core
// file: proto/r4/core/resources/schedule.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Schedule extends jspb.Message {
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

  clearActor(): void;
  getActor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setActor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addActor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPlanningHorizon(): boolean;
  clearPlanningHorizon(): void;
  getPlanningHorizon(): proto_r4_core_datatypes_pb.Period | undefined;
  setPlanningHorizon(value?: proto_r4_core_datatypes_pb.Period): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
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
    serviceCategory: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceType: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    actor: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    planningHorizon?: proto_r4_core_datatypes_pb.Period.AsObject,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
  }
}

