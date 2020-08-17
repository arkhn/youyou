// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_packaged.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductPackaged extends jspb.Message {
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

  clearSubjectList(): void;
  getSubjectList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSubjectList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSubject(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasLegalStatusOfSupply(): boolean;
  clearLegalStatusOfSupply(): void;
  getLegalStatusOfSupply(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLegalStatusOfSupply(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearMarketingStatusList(): void;
  getMarketingStatusList(): Array<proto_r4_core_datatypes_pb.MarketingStatus>;
  setMarketingStatusList(value: Array<proto_r4_core_datatypes_pb.MarketingStatus>): void;
  addMarketingStatus(value?: proto_r4_core_datatypes_pb.MarketingStatus, index?: number): proto_r4_core_datatypes_pb.MarketingStatus;

  hasMarketingAuthorization(): boolean;
  clearMarketingAuthorization(): void;
  getMarketingAuthorization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setMarketingAuthorization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearManufacturerList(): void;
  getManufacturerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setManufacturerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addManufacturer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBatchIdentifierList(): void;
  getBatchIdentifierList(): Array<MedicinalProductPackaged.BatchIdentifier>;
  setBatchIdentifierList(value: Array<MedicinalProductPackaged.BatchIdentifier>): void;
  addBatchIdentifier(value?: MedicinalProductPackaged.BatchIdentifier, index?: number): MedicinalProductPackaged.BatchIdentifier;

  clearPackageItemList(): void;
  getPackageItemList(): Array<MedicinalProductPackaged.PackageItem>;
  setPackageItemList(value: Array<MedicinalProductPackaged.PackageItem>): void;
  addPackageItem(value?: MedicinalProductPackaged.PackageItem, index?: number): MedicinalProductPackaged.PackageItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductPackaged.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductPackaged): MedicinalProductPackaged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductPackaged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductPackaged;
  static deserializeBinaryFromReader(message: MedicinalProductPackaged, reader: jspb.BinaryReader): MedicinalProductPackaged;
}

export namespace MedicinalProductPackaged {
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
    subjectList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    legalStatusOfSupply?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    marketingStatusList: Array<proto_r4_core_datatypes_pb.MarketingStatus.AsObject>,
    marketingAuthorization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    manufacturerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    batchIdentifierList: Array<MedicinalProductPackaged.BatchIdentifier.AsObject>,
    packageItemList: Array<MedicinalProductPackaged.PackageItem.AsObject>,
  }

  export class BatchIdentifier extends jspb.Message {
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

    hasOuterPackaging(): boolean;
    clearOuterPackaging(): void;
    getOuterPackaging(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setOuterPackaging(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasImmediatePackaging(): boolean;
    clearImmediatePackaging(): void;
    getImmediatePackaging(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setImmediatePackaging(value?: proto_r4_core_datatypes_pb.Identifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchIdentifier.AsObject;
    static toObject(includeInstance: boolean, msg: BatchIdentifier): BatchIdentifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchIdentifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchIdentifier;
    static deserializeBinaryFromReader(message: BatchIdentifier, reader: jspb.BinaryReader): BatchIdentifier;
  }

  export namespace BatchIdentifier {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      outerPackaging?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      immediatePackaging?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    }
  }

  export class PackageItem extends jspb.Message {
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

    clearIdentifierList(): void;
    getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

    clearMaterialList(): void;
    getMaterialList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setMaterialList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addMaterial(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearAlternateMaterialList(): void;
    getAlternateMaterialList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAlternateMaterialList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAlternateMaterial(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDeviceList(): void;
    getDeviceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDeviceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDevice(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearManufacturedItemList(): void;
    getManufacturedItemList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setManufacturedItemList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addManufacturedItem(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearPackageItemList(): void;
    getPackageItemList(): Array<MedicinalProductPackaged.PackageItem>;
    setPackageItemList(value: Array<MedicinalProductPackaged.PackageItem>): void;
    addPackageItem(value?: MedicinalProductPackaged.PackageItem, index?: number): MedicinalProductPackaged.PackageItem;

    hasPhysicalCharacteristics(): boolean;
    clearPhysicalCharacteristics(): void;
    getPhysicalCharacteristics(): proto_r4_core_datatypes_pb.ProdCharacteristic | undefined;
    setPhysicalCharacteristics(value?: proto_r4_core_datatypes_pb.ProdCharacteristic): void;

    clearOtherCharacteristicsList(): void;
    getOtherCharacteristicsList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setOtherCharacteristicsList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addOtherCharacteristics(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearShelfLifeStorageList(): void;
    getShelfLifeStorageList(): Array<proto_r4_core_datatypes_pb.ProductShelfLife>;
    setShelfLifeStorageList(value: Array<proto_r4_core_datatypes_pb.ProductShelfLife>): void;
    addShelfLifeStorage(value?: proto_r4_core_datatypes_pb.ProductShelfLife, index?: number): proto_r4_core_datatypes_pb.ProductShelfLife;

    clearManufacturerList(): void;
    getManufacturerList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setManufacturerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addManufacturer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PackageItem.AsObject;
    static toObject(includeInstance: boolean, msg: PackageItem): PackageItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PackageItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PackageItem;
    static deserializeBinaryFromReader(message: PackageItem, reader: jspb.BinaryReader): PackageItem;
  }

  export namespace PackageItem {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      materialList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      alternateMaterialList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      deviceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      manufacturedItemList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      packageItemList: Array<MedicinalProductPackaged.PackageItem.AsObject>,
      physicalCharacteristics?: proto_r4_core_datatypes_pb.ProdCharacteristic.AsObject,
      otherCharacteristicsList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      shelfLifeStorageList: Array<proto_r4_core_datatypes_pb.ProductShelfLife.AsObject>,
      manufacturerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

