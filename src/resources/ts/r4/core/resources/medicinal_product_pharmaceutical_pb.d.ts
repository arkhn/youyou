// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_pharmaceutical.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductPharmaceutical extends jspb.Message {
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

  hasAdministrableDoseForm(): boolean;
  clearAdministrableDoseForm(): void;
  getAdministrableDoseForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAdministrableDoseForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasUnitOfPresentation(): boolean;
  clearUnitOfPresentation(): void;
  getUnitOfPresentation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setUnitOfPresentation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearIngredientList(): void;
  getIngredientList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setIngredientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addIngredient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDeviceList(): void;
  getDeviceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDeviceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDevice(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCharacteristicsList(): void;
  getCharacteristicsList(): Array<MedicinalProductPharmaceutical.Characteristics>;
  setCharacteristicsList(value: Array<MedicinalProductPharmaceutical.Characteristics>): void;
  addCharacteristics(value?: MedicinalProductPharmaceutical.Characteristics, index?: number): MedicinalProductPharmaceutical.Characteristics;

  clearRouteOfAdministrationList(): void;
  getRouteOfAdministrationList(): Array<MedicinalProductPharmaceutical.RouteOfAdministration>;
  setRouteOfAdministrationList(value: Array<MedicinalProductPharmaceutical.RouteOfAdministration>): void;
  addRouteOfAdministration(value?: MedicinalProductPharmaceutical.RouteOfAdministration, index?: number): MedicinalProductPharmaceutical.RouteOfAdministration;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductPharmaceutical.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductPharmaceutical): MedicinalProductPharmaceutical.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductPharmaceutical, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductPharmaceutical;
  static deserializeBinaryFromReader(message: MedicinalProductPharmaceutical, reader: jspb.BinaryReader): MedicinalProductPharmaceutical;
}

export namespace MedicinalProductPharmaceutical {
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
    administrableDoseForm?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    unitOfPresentation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    ingredientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    deviceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    characteristicsList: Array<MedicinalProductPharmaceutical.Characteristics.AsObject>,
    routeOfAdministrationList: Array<MedicinalProductPharmaceutical.RouteOfAdministration.AsObject>,
  }

  export class Characteristics extends jspb.Message {
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

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Characteristics.AsObject;
    static toObject(includeInstance: boolean, msg: Characteristics): Characteristics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Characteristics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Characteristics;
    static deserializeBinaryFromReader(message: Characteristics, reader: jspb.BinaryReader): Characteristics;
  }

  export namespace Characteristics {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class RouteOfAdministration extends jspb.Message {
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

    hasFirstDose(): boolean;
    clearFirstDose(): void;
    getFirstDose(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setFirstDose(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasMaxSingleDose(): boolean;
    clearMaxSingleDose(): void;
    getMaxSingleDose(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setMaxSingleDose(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasMaxDosePerDay(): boolean;
    clearMaxDosePerDay(): void;
    getMaxDosePerDay(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setMaxDosePerDay(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasMaxDosePerTreatmentPeriod(): boolean;
    clearMaxDosePerTreatmentPeriod(): void;
    getMaxDosePerTreatmentPeriod(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setMaxDosePerTreatmentPeriod(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasMaxTreatmentPeriod(): boolean;
    clearMaxTreatmentPeriod(): void;
    getMaxTreatmentPeriod(): proto_r4_core_datatypes_pb.Duration | undefined;
    setMaxTreatmentPeriod(value?: proto_r4_core_datatypes_pb.Duration): void;

    clearTargetSpeciesList(): void;
    getTargetSpeciesList(): Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies>;
    setTargetSpeciesList(value: Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies>): void;
    addTargetSpecies(value?: MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies, index?: number): MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RouteOfAdministration.AsObject;
    static toObject(includeInstance: boolean, msg: RouteOfAdministration): RouteOfAdministration.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RouteOfAdministration, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RouteOfAdministration;
    static deserializeBinaryFromReader(message: RouteOfAdministration, reader: jspb.BinaryReader): RouteOfAdministration;
  }

  export namespace RouteOfAdministration {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      firstDose?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      maxSingleDose?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      maxDosePerDay?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      maxDosePerTreatmentPeriod?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      maxTreatmentPeriod?: proto_r4_core_datatypes_pb.Duration.AsObject,
      targetSpeciesList: Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.AsObject>,
    }

    export class TargetSpecies extends jspb.Message {
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

      clearWithdrawalPeriodList(): void;
      getWithdrawalPeriodList(): Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod>;
      setWithdrawalPeriodList(value: Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod>): void;
      addWithdrawalPeriod(value?: MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod, index?: number): MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TargetSpecies.AsObject;
      static toObject(includeInstance: boolean, msg: TargetSpecies): TargetSpecies.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TargetSpecies, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TargetSpecies;
      static deserializeBinaryFromReader(message: TargetSpecies, reader: jspb.BinaryReader): TargetSpecies;
    }

    export namespace TargetSpecies {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        withdrawalPeriodList: Array<MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod.AsObject>,
      }

      export class WithdrawalPeriod extends jspb.Message {
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

        hasTissue(): boolean;
        clearTissue(): void;
        getTissue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setTissue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasValue(): boolean;
        clearValue(): void;
        getValue(): proto_r4_core_datatypes_pb.Quantity | undefined;
        setValue(value?: proto_r4_core_datatypes_pb.Quantity): void;

        hasSupportingInformation(): boolean;
        clearSupportingInformation(): void;
        getSupportingInformation(): proto_r4_core_datatypes_pb.String | undefined;
        setSupportingInformation(value?: proto_r4_core_datatypes_pb.String): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WithdrawalPeriod.AsObject;
        static toObject(includeInstance: boolean, msg: WithdrawalPeriod): WithdrawalPeriod.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: WithdrawalPeriod, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WithdrawalPeriod;
        static deserializeBinaryFromReader(message: WithdrawalPeriod, reader: jspb.BinaryReader): WithdrawalPeriod;
      }

      export namespace WithdrawalPeriod {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          tissue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          value?: proto_r4_core_datatypes_pb.Quantity.AsObject,
          supportingInformation?: proto_r4_core_datatypes_pb.String.AsObject,
        }
      }
    }
  }
}

