// package: google.fhir.r4.core
// file: proto/r4/core/resources/device_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class DeviceDefinition extends jspb.Message {
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

  clearUdiDeviceIdentifierList(): void;
  getUdiDeviceIdentifierList(): Array<DeviceDefinition.UdiDeviceIdentifier>;
  setUdiDeviceIdentifierList(value: Array<DeviceDefinition.UdiDeviceIdentifier>): void;
  addUdiDeviceIdentifier(value?: DeviceDefinition.UdiDeviceIdentifier, index?: number): DeviceDefinition.UdiDeviceIdentifier;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): DeviceDefinition.ManufacturerX | undefined;
  setManufacturer(value?: DeviceDefinition.ManufacturerX): void;

  clearDeviceNameList(): void;
  getDeviceNameList(): Array<DeviceDefinition.DeviceName>;
  setDeviceNameList(value: Array<DeviceDefinition.DeviceName>): void;
  addDeviceName(value?: DeviceDefinition.DeviceName, index?: number): DeviceDefinition.DeviceName;

  hasModelNumber(): boolean;
  clearModelNumber(): void;
  getModelNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setModelNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSpecializationList(): void;
  getSpecializationList(): Array<DeviceDefinition.Specialization>;
  setSpecializationList(value: Array<DeviceDefinition.Specialization>): void;
  addSpecialization(value?: DeviceDefinition.Specialization, index?: number): DeviceDefinition.Specialization;

  clearVersionList(): void;
  getVersionList(): Array<proto_r4_core_datatypes_pb.String>;
  setVersionList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addVersion(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearSafetyList(): void;
  getSafetyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSafetyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSafety(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearShelfLifeStorageList(): void;
  getShelfLifeStorageList(): Array<proto_r4_core_datatypes_pb.ProductShelfLife>;
  setShelfLifeStorageList(value: Array<proto_r4_core_datatypes_pb.ProductShelfLife>): void;
  addShelfLifeStorage(value?: proto_r4_core_datatypes_pb.ProductShelfLife, index?: number): proto_r4_core_datatypes_pb.ProductShelfLife;

  hasPhysicalCharacteristics(): boolean;
  clearPhysicalCharacteristics(): void;
  getPhysicalCharacteristics(): proto_r4_core_datatypes_pb.ProdCharacteristic | undefined;
  setPhysicalCharacteristics(value?: proto_r4_core_datatypes_pb.ProdCharacteristic): void;

  clearLanguageCodeList(): void;
  getLanguageCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLanguageCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLanguageCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCapabilityList(): void;
  getCapabilityList(): Array<DeviceDefinition.Capability>;
  setCapabilityList(value: Array<DeviceDefinition.Capability>): void;
  addCapability(value?: DeviceDefinition.Capability, index?: number): DeviceDefinition.Capability;

  clearPropertyList(): void;
  getPropertyList(): Array<DeviceDefinition.Property>;
  setPropertyList(value: Array<DeviceDefinition.Property>): void;
  addProperty(value?: DeviceDefinition.Property, index?: number): DeviceDefinition.Property;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasOnlineInformation(): boolean;
  clearOnlineInformation(): void;
  getOnlineInformation(): proto_r4_core_datatypes_pb.Uri | undefined;
  setOnlineInformation(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

  hasParentDevice(): boolean;
  clearParentDevice(): void;
  getParentDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParentDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearMaterialList(): void;
  getMaterialList(): Array<DeviceDefinition.Material>;
  setMaterialList(value: Array<DeviceDefinition.Material>): void;
  addMaterial(value?: DeviceDefinition.Material, index?: number): DeviceDefinition.Material;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDefinition): DeviceDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDefinition;
  static deserializeBinaryFromReader(message: DeviceDefinition, reader: jspb.BinaryReader): DeviceDefinition;
}

export namespace DeviceDefinition {
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
    udiDeviceIdentifierList: Array<DeviceDefinition.UdiDeviceIdentifier.AsObject>,
    manufacturer?: DeviceDefinition.ManufacturerX.AsObject,
    deviceNameList: Array<DeviceDefinition.DeviceName.AsObject>,
    modelNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specializationList: Array<DeviceDefinition.Specialization.AsObject>,
    versionList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    safetyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    shelfLifeStorageList: Array<proto_r4_core_datatypes_pb.ProductShelfLife.AsObject>,
    physicalCharacteristics?: proto_r4_core_datatypes_pb.ProdCharacteristic.AsObject,
    languageCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    capabilityList: Array<DeviceDefinition.Capability.AsObject>,
    propertyList: Array<DeviceDefinition.Property.AsObject>,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    onlineInformation?: proto_r4_core_datatypes_pb.Uri.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    parentDevice?: proto_r4_core_datatypes_pb.Reference.AsObject,
    materialList: Array<DeviceDefinition.Material.AsObject>,
  }

  export class UdiDeviceIdentifier extends jspb.Message {
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

    hasDeviceIdentifier(): boolean;
    clearDeviceIdentifier(): void;
    getDeviceIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
    setDeviceIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Uri | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasJurisdiction(): boolean;
    clearJurisdiction(): void;
    getJurisdiction(): proto_r4_core_datatypes_pb.Uri | undefined;
    setJurisdiction(value?: proto_r4_core_datatypes_pb.Uri): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdiDeviceIdentifier.AsObject;
    static toObject(includeInstance: boolean, msg: UdiDeviceIdentifier): UdiDeviceIdentifier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdiDeviceIdentifier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdiDeviceIdentifier;
    static deserializeBinaryFromReader(message: UdiDeviceIdentifier, reader: jspb.BinaryReader): UdiDeviceIdentifier;
  }

  export namespace UdiDeviceIdentifier {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      deviceIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Uri.AsObject,
      jurisdiction?: proto_r4_core_datatypes_pb.Uri.AsObject,
    }
  }

  export class ManufacturerX extends jspb.Message {
    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ManufacturerX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManufacturerX.AsObject;
    static toObject(includeInstance: boolean, msg: ManufacturerX): ManufacturerX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManufacturerX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManufacturerX;
    static deserializeBinaryFromReader(message: ManufacturerX, reader: jspb.BinaryReader): ManufacturerX;
  }

  export namespace ManufacturerX {
    export type AsObject = {
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      STRING_VALUE = 1,
      REFERENCE = 2,
    }
  }

  export class DeviceName extends jspb.Message {
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): DeviceDefinition.DeviceName.TypeCode | undefined;
    setType(value?: DeviceDefinition.DeviceName.TypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceName.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceName): DeviceName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceName;
    static deserializeBinaryFromReader(message: DeviceName, reader: jspb.BinaryReader): DeviceName;
  }

  export namespace DeviceName {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: DeviceDefinition.DeviceName.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TypeCode;
      static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
    }

    export namespace TypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Specialization extends jspb.Message {
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

    hasSystemType(): boolean;
    clearSystemType(): void;
    getSystemType(): proto_r4_core_datatypes_pb.String | undefined;
    setSystemType(value?: proto_r4_core_datatypes_pb.String): void;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Specialization.AsObject;
    static toObject(includeInstance: boolean, msg: Specialization): Specialization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Specialization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Specialization;
    static deserializeBinaryFromReader(message: Specialization, reader: jspb.BinaryReader): Specialization;
  }

  export namespace Specialization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      systemType?: proto_r4_core_datatypes_pb.String.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Capability extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearDescriptionList(): void;
    getDescriptionList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setDescriptionList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addDescription(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Capability.AsObject;
    static toObject(includeInstance: boolean, msg: Capability): Capability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Capability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Capability;
    static deserializeBinaryFromReader(message: Capability, reader: jspb.BinaryReader): Capability;
  }

  export namespace Capability {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      descriptionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }

  export class Property extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearValueQuantityList(): void;
    getValueQuantityList(): Array<proto_r4_core_datatypes_pb.Quantity>;
    setValueQuantityList(value: Array<proto_r4_core_datatypes_pb.Quantity>): void;
    addValueQuantity(value?: proto_r4_core_datatypes_pb.Quantity, index?: number): proto_r4_core_datatypes_pb.Quantity;

    clearValueCodeList(): void;
    getValueCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setValueCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addValueCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      valueQuantityList: Array<proto_r4_core_datatypes_pb.Quantity.AsObject>,
      valueCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }

  export class Material extends jspb.Message {
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

    hasAlternate(): boolean;
    clearAlternate(): void;
    getAlternate(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAlternate(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAllergenicIndicator(): boolean;
    clearAllergenicIndicator(): void;
    getAllergenicIndicator(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAllergenicIndicator(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Material.AsObject;
    static toObject(includeInstance: boolean, msg: Material): Material.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Material, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Material;
    static deserializeBinaryFromReader(message: Material, reader: jspb.BinaryReader): Material;
  }

  export namespace Material {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      alternate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      allergenicIndicator?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }
}

