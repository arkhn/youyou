// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_undesirable_effect.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductUndesirableEffect extends jspb.Message {
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

  clearSubjectList(): void;
  getSubjectList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSubjectList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSubject(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasSymptomConditionEffect(): boolean;
  clearSymptomConditionEffect(): void;
  getSymptomConditionEffect(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSymptomConditionEffect(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasClassification(): boolean;
  clearClassification(): void;
  getClassification(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFrequencyOfOccurrence(): boolean;
  clearFrequencyOfOccurrence(): void;
  getFrequencyOfOccurrence(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFrequencyOfOccurrence(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPopulationList(): void;
  getPopulationList(): Array<proto_r4_core_datatypes_pb.Population>;
  setPopulationList(value: Array<proto_r4_core_datatypes_pb.Population>): void;
  addPopulation(value?: proto_r4_core_datatypes_pb.Population, index?: number): proto_r4_core_datatypes_pb.Population;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductUndesirableEffect.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductUndesirableEffect): MedicinalProductUndesirableEffect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductUndesirableEffect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductUndesirableEffect;
  static deserializeBinaryFromReader(message: MedicinalProductUndesirableEffect, reader: jspb.BinaryReader): MedicinalProductUndesirableEffect;
}

export namespace MedicinalProductUndesirableEffect {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    subjectList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    symptomConditionEffect?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    classification?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    frequencyOfOccurrence?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    populationList: Array<proto_r4_core_datatypes_pb.Population.AsObject>,
  }
}

