// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_ingredient.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductIngredient extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasRole(): boolean;
  clearRole(): void;
  getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasAllergenicIndicator(): boolean;
  clearAllergenicIndicator(): void;
  getAllergenicIndicator(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setAllergenicIndicator(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearManufacturerList(): void;
  getManufacturerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setManufacturerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addManufacturer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecifiedSubstanceList(): void;
  getSpecifiedSubstanceList(): Array<MedicinalProductIngredient.SpecifiedSubstance>;
  setSpecifiedSubstanceList(value: Array<MedicinalProductIngredient.SpecifiedSubstance>): void;
  addSpecifiedSubstance(value?: MedicinalProductIngredient.SpecifiedSubstance, index?: number): MedicinalProductIngredient.SpecifiedSubstance;

  hasSubstance(): boolean;
  clearSubstance(): void;
  getSubstance(): MedicinalProductIngredient.Substance | undefined;
  setSubstance(value?: MedicinalProductIngredient.Substance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductIngredient.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductIngredient): MedicinalProductIngredient.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductIngredient, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductIngredient;
  static deserializeBinaryFromReader(message: MedicinalProductIngredient, reader: jspb.BinaryReader): MedicinalProductIngredient;
}

export namespace MedicinalProductIngredient {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    allergenicIndicator?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    manufacturerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specifiedSubstanceList: Array<MedicinalProductIngredient.SpecifiedSubstance.AsObject>,
    substance?: MedicinalProductIngredient.Substance.AsObject,
  }

  export class SpecifiedSubstance extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGroup(): boolean;
    clearGroup(): void;
    getGroup(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setGroup(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasConfidentiality(): boolean;
    clearConfidentiality(): void;
    getConfidentiality(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setConfidentiality(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearStrengthList(): void;
    getStrengthList(): Array<MedicinalProductIngredient.SpecifiedSubstance.Strength>;
    setStrengthList(value: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength>): void;
    addStrength(value?: MedicinalProductIngredient.SpecifiedSubstance.Strength, index?: number): MedicinalProductIngredient.SpecifiedSubstance.Strength;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecifiedSubstance.AsObject;
    static toObject(includeInstance: boolean, msg: SpecifiedSubstance): SpecifiedSubstance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecifiedSubstance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecifiedSubstance;
    static deserializeBinaryFromReader(message: SpecifiedSubstance, reader: jspb.BinaryReader): SpecifiedSubstance;
  }

  export namespace SpecifiedSubstance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      group?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      confidentiality?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      strengthList: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength.AsObject>,
    }

    export class Strength extends jspb.Message {
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

      hasPresentation(): boolean;
      clearPresentation(): void;
      getPresentation(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setPresentation(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasPresentationLowLimit(): boolean;
      clearPresentationLowLimit(): void;
      getPresentationLowLimit(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setPresentationLowLimit(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasConcentration(): boolean;
      clearConcentration(): void;
      getConcentration(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setConcentration(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasConcentrationLowLimit(): boolean;
      clearConcentrationLowLimit(): void;
      getConcentrationLowLimit(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setConcentrationLowLimit(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasMeasurementPoint(): boolean;
      clearMeasurementPoint(): void;
      getMeasurementPoint(): proto_r4_core_datatypes_pb.String | undefined;
      setMeasurementPoint(value?: proto_r4_core_datatypes_pb.String): void;

      clearCountryList(): void;
      getCountryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setCountryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addCountry(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearReferenceStrengthList(): void;
      getReferenceStrengthList(): Array<MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength>;
      setReferenceStrengthList(value: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength>): void;
      addReferenceStrength(value?: MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength, index?: number): MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Strength.AsObject;
      static toObject(includeInstance: boolean, msg: Strength): Strength.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Strength, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Strength;
      static deserializeBinaryFromReader(message: Strength, reader: jspb.BinaryReader): Strength;
    }

    export namespace Strength {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        presentation?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        presentationLowLimit?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        concentration?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        concentrationLowLimit?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        measurementPoint?: proto_r4_core_datatypes_pb.String.AsObject,
        countryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        referenceStrengthList: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength.AsObject>,
      }

      export class ReferenceStrength extends jspb.Message {
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

        hasSubstance(): boolean;
        clearSubstance(): void;
        getSubstance(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setSubstance(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasStrength(): boolean;
        clearStrength(): void;
        getStrength(): proto_r4_core_datatypes_pb.Ratio | undefined;
        setStrength(value?: proto_r4_core_datatypes_pb.Ratio): void;

        hasStrengthLowLimit(): boolean;
        clearStrengthLowLimit(): void;
        getStrengthLowLimit(): proto_r4_core_datatypes_pb.Ratio | undefined;
        setStrengthLowLimit(value?: proto_r4_core_datatypes_pb.Ratio): void;

        hasMeasurementPoint(): boolean;
        clearMeasurementPoint(): void;
        getMeasurementPoint(): proto_r4_core_datatypes_pb.String | undefined;
        setMeasurementPoint(value?: proto_r4_core_datatypes_pb.String): void;

        clearCountryList(): void;
        getCountryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setCountryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addCountry(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReferenceStrength.AsObject;
        static toObject(includeInstance: boolean, msg: ReferenceStrength): ReferenceStrength.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReferenceStrength, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReferenceStrength;
        static deserializeBinaryFromReader(message: ReferenceStrength, reader: jspb.BinaryReader): ReferenceStrength;
      }

      export namespace ReferenceStrength {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          strength?: proto_r4_core_datatypes_pb.Ratio.AsObject,
          strengthLowLimit?: proto_r4_core_datatypes_pb.Ratio.AsObject,
          measurementPoint?: proto_r4_core_datatypes_pb.String.AsObject,
          countryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        }
      }
    }
  }

  export class Substance extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearStrengthList(): void;
    getStrengthList(): Array<MedicinalProductIngredient.SpecifiedSubstance.Strength>;
    setStrengthList(value: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength>): void;
    addStrength(value?: MedicinalProductIngredient.SpecifiedSubstance.Strength, index?: number): MedicinalProductIngredient.SpecifiedSubstance.Strength;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substance.AsObject;
    static toObject(includeInstance: boolean, msg: Substance): Substance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substance;
    static deserializeBinaryFromReader(message: Substance, reader: jspb.BinaryReader): Substance;
  }

  export namespace Substance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      strengthList: Array<MedicinalProductIngredient.SpecifiedSubstance.Strength.AsObject>,
    }
  }
}

