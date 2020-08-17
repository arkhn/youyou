// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_indication.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductIndication extends jspb.Message {
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

  hasDiseaseSymptomProcedure(): boolean;
  clearDiseaseSymptomProcedure(): void;
  getDiseaseSymptomProcedure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDiseaseSymptomProcedure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDiseaseStatus(): boolean;
  clearDiseaseStatus(): void;
  getDiseaseStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDiseaseStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearComorbidityList(): void;
  getComorbidityList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setComorbidityList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addComorbidity(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasIntendedEffect(): boolean;
  clearIntendedEffect(): void;
  getIntendedEffect(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setIntendedEffect(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setDuration(value?: proto_r4_core_datatypes_pb.Quantity): void;

  clearOtherTherapyList(): void;
  getOtherTherapyList(): Array<MedicinalProductIndication.OtherTherapy>;
  setOtherTherapyList(value: Array<MedicinalProductIndication.OtherTherapy>): void;
  addOtherTherapy(value?: MedicinalProductIndication.OtherTherapy, index?: number): MedicinalProductIndication.OtherTherapy;

  clearUndesirableEffectList(): void;
  getUndesirableEffectList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setUndesirableEffectList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addUndesirableEffect(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPopulationList(): void;
  getPopulationList(): Array<proto_r4_core_datatypes_pb.Population>;
  setPopulationList(value: Array<proto_r4_core_datatypes_pb.Population>): void;
  addPopulation(value?: proto_r4_core_datatypes_pb.Population, index?: number): proto_r4_core_datatypes_pb.Population;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductIndication.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductIndication): MedicinalProductIndication.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductIndication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductIndication;
  static deserializeBinaryFromReader(message: MedicinalProductIndication, reader: jspb.BinaryReader): MedicinalProductIndication;
}

export namespace MedicinalProductIndication {
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
    diseaseSymptomProcedure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    diseaseStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    comorbidityList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    intendedEffect?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    duration?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    otherTherapyList: Array<MedicinalProductIndication.OtherTherapy.AsObject>,
    undesirableEffectList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    populationList: Array<proto_r4_core_datatypes_pb.Population.AsObject>,
  }

  export class OtherTherapy extends jspb.Message {
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

    hasTherapyRelationshipType(): boolean;
    clearTherapyRelationshipType(): void;
    getTherapyRelationshipType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setTherapyRelationshipType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMedication(): boolean;
    clearMedication(): void;
    getMedication(): MedicinalProductIndication.OtherTherapy.MedicationX | undefined;
    setMedication(value?: MedicinalProductIndication.OtherTherapy.MedicationX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OtherTherapy.AsObject;
    static toObject(includeInstance: boolean, msg: OtherTherapy): OtherTherapy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OtherTherapy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OtherTherapy;
    static deserializeBinaryFromReader(message: OtherTherapy, reader: jspb.BinaryReader): OtherTherapy;
  }

  export namespace OtherTherapy {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      therapyRelationshipType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      medication?: MedicinalProductIndication.OtherTherapy.MedicationX.AsObject,
    }

    export class MedicationX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): MedicationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MedicationX.AsObject;
      static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MedicationX;
      static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
    }

    export namespace MedicationX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }
}

