// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_manufactured.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductManufactured extends jspb.Message {
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

  hasManufacturedDoseForm(): boolean;
  clearManufacturedDoseForm(): void;
  getManufacturedDoseForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setManufacturedDoseForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasUnitOfPresentation(): boolean;
  clearUnitOfPresentation(): void;
  getUnitOfPresentation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setUnitOfPresentation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

  clearManufacturerList(): void;
  getManufacturerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setManufacturerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addManufacturer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearIngredientList(): void;
  getIngredientList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setIngredientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addIngredient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPhysicalCharacteristics(): boolean;
  clearPhysicalCharacteristics(): void;
  getPhysicalCharacteristics(): proto_r4_core_datatypes_pb.ProdCharacteristic | undefined;
  setPhysicalCharacteristics(value?: proto_r4_core_datatypes_pb.ProdCharacteristic): void;

  clearOtherCharacteristicsList(): void;
  getOtherCharacteristicsList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOtherCharacteristicsList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOtherCharacteristics(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductManufactured.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductManufactured): MedicinalProductManufactured.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductManufactured, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductManufactured;
  static deserializeBinaryFromReader(message: MedicinalProductManufactured, reader: jspb.BinaryReader): MedicinalProductManufactured;
}

export namespace MedicinalProductManufactured {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    manufacturedDoseForm?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    unitOfPresentation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    manufacturerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    ingredientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    physicalCharacteristics?: proto_r4_core_datatypes_pb.ProdCharacteristic.AsObject,
    otherCharacteristicsList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
  }
}

