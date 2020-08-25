// package: google.fhir.r4.core
// file: proto/r4/core/resources/vision_prescription.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class VisionPrescription extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): VisionPrescription.StatusCode | undefined;
  setStatus(value?: VisionPrescription.StatusCode): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDateWritten(): boolean;
  clearDateWritten(): void;
  getDateWritten(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateWritten(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPrescriber(): boolean;
  clearPrescriber(): void;
  getPrescriber(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPrescriber(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearLensSpecification(): void;
  getLensSpecification(): Array<VisionPrescription.LensSpecification>;
  setLensSpecification(value: Array<VisionPrescription.LensSpecification>): void;
  addLensSpecification(value?: VisionPrescription.LensSpecification, index?: number): VisionPrescription.LensSpecification;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionPrescription.AsObject;
  static toObject(includeInstance: boolean, msg: VisionPrescription): VisionPrescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisionPrescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionPrescription;
  static deserializeBinaryFromReader(message: VisionPrescription, reader: jspb.BinaryReader): VisionPrescription;
}

export namespace VisionPrescription {
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
    status?: VisionPrescription.StatusCode.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dateWritten?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    prescriber?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lensSpecification: Array<VisionPrescription.LensSpecification.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: StatusCode): StatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusCode;
    static deserializeBinaryFromReader(message: StatusCode, reader: jspb.BinaryReader): StatusCode;
  }

  export namespace StatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class LensSpecification extends jspb.Message {
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

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProduct(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasEye(): boolean;
    clearEye(): void;
    getEye(): VisionPrescription.LensSpecification.EyeCode | undefined;
    setEye(value?: VisionPrescription.LensSpecification.EyeCode): void;

    hasSphere(): boolean;
    clearSphere(): void;
    getSphere(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setSphere(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasCylinder(): boolean;
    clearCylinder(): void;
    getCylinder(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setCylinder(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasAxis(): boolean;
    clearAxis(): void;
    getAxis(): proto_r4_core_datatypes_pb.Integer | undefined;
    setAxis(value?: proto_r4_core_datatypes_pb.Integer): void;

    clearPrism(): void;
    getPrism(): Array<VisionPrescription.LensSpecification.Prism>;
    setPrism(value: Array<VisionPrescription.LensSpecification.Prism>): void;
    addPrism(value?: VisionPrescription.LensSpecification.Prism, index?: number): VisionPrescription.LensSpecification.Prism;

    hasAdd(): boolean;
    clearAdd(): void;
    getAdd(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setAdd(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasPower(): boolean;
    clearPower(): void;
    getPower(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setPower(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasBackCurve(): boolean;
    clearBackCurve(): void;
    getBackCurve(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setBackCurve(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasDiameter(): boolean;
    clearDiameter(): void;
    getDiameter(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setDiameter(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasColor(): boolean;
    clearColor(): void;
    getColor(): proto_r4_core_datatypes_pb.String | undefined;
    setColor(value?: proto_r4_core_datatypes_pb.String): void;

    hasBrand(): boolean;
    clearBrand(): void;
    getBrand(): proto_r4_core_datatypes_pb.String | undefined;
    setBrand(value?: proto_r4_core_datatypes_pb.String): void;

    clearNote(): void;
    getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LensSpecification.AsObject;
    static toObject(includeInstance: boolean, msg: LensSpecification): LensSpecification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LensSpecification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LensSpecification;
    static deserializeBinaryFromReader(message: LensSpecification, reader: jspb.BinaryReader): LensSpecification;
  }

  export namespace LensSpecification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      product?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      eye?: VisionPrescription.LensSpecification.EyeCode.AsObject,
      sphere?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      cylinder?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      axis?: proto_r4_core_datatypes_pb.Integer.AsObject,
      prism: Array<VisionPrescription.LensSpecification.Prism.AsObject>,
      add?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      power?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      backCurve?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      diameter?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      duration?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      color?: proto_r4_core_datatypes_pb.String.AsObject,
      brand?: proto_r4_core_datatypes_pb.String.AsObject,
      note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    }

    export class EyeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.VisionEyesCode.ValueMap[keyof proto_r4_core_codes_pb.VisionEyesCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.VisionEyesCode.ValueMap[keyof proto_r4_core_codes_pb.VisionEyesCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EyeCode.AsObject;
      static toObject(includeInstance: boolean, msg: EyeCode): EyeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EyeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EyeCode;
      static deserializeBinaryFromReader(message: EyeCode, reader: jspb.BinaryReader): EyeCode;
    }

    export namespace EyeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.VisionEyesCode.ValueMap[keyof proto_r4_core_codes_pb.VisionEyesCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Prism extends jspb.Message {
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

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasBase(): boolean;
      clearBase(): void;
      getBase(): VisionPrescription.LensSpecification.Prism.BaseCode | undefined;
      setBase(value?: VisionPrescription.LensSpecification.Prism.BaseCode): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Prism.AsObject;
      static toObject(includeInstance: boolean, msg: Prism): Prism.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Prism, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Prism;
      static deserializeBinaryFromReader(message: Prism, reader: jspb.BinaryReader): Prism;
    }

    export namespace Prism {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        amount?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        base?: VisionPrescription.LensSpecification.Prism.BaseCode.AsObject,
      }

      export class BaseCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.VisionBaseCode.ValueMap[keyof proto_r4_core_codes_pb.VisionBaseCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.VisionBaseCode.ValueMap[keyof proto_r4_core_codes_pb.VisionBaseCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): BaseCode.AsObject;
        static toObject(includeInstance: boolean, msg: BaseCode): BaseCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: BaseCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): BaseCode;
        static deserializeBinaryFromReader(message: BaseCode, reader: jspb.BinaryReader): BaseCode;
      }

      export namespace BaseCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.VisionBaseCode.ValueMap[keyof proto_r4_core_codes_pb.VisionBaseCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }
}

