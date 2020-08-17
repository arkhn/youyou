// package: google.fhir.r4.core
// file: proto/r4/core/resources/device.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Device extends jspb.Message {
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

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDefinition(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearUdiCarrierList(): void;
  getUdiCarrierList(): Array<Device.UdiCarrier>;
  setUdiCarrierList(value: Array<Device.UdiCarrier>): void;
  addUdiCarrier(value?: Device.UdiCarrier, index?: number): Device.UdiCarrier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Device.StatusCode | undefined;
  setStatus(value?: Device.StatusCode): void;

  clearStatusReasonList(): void;
  getStatusReasonList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setStatusReasonList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDistinctIdentifier(): boolean;
  clearDistinctIdentifier(): void;
  getDistinctIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
  setDistinctIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.String | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufactureDate(): boolean;
  clearManufactureDate(): void;
  getManufactureDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setManufactureDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setExpirationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasSerialNumber(): boolean;
  clearSerialNumber(): void;
  getSerialNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setSerialNumber(value?: proto_r4_core_datatypes_pb.String): void;

  clearDeviceNameList(): void;
  getDeviceNameList(): Array<Device.DeviceName>;
  setDeviceNameList(value: Array<Device.DeviceName>): void;
  addDeviceName(value?: Device.DeviceName, index?: number): Device.DeviceName;

  hasModelNumber(): boolean;
  clearModelNumber(): void;
  getModelNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setModelNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasPartNumber(): boolean;
  clearPartNumber(): void;
  getPartNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setPartNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSpecializationList(): void;
  getSpecializationList(): Array<Device.Specialization>;
  setSpecializationList(value: Array<Device.Specialization>): void;
  addSpecialization(value?: Device.Specialization, index?: number): Device.Specialization;

  clearVersionList(): void;
  getVersionList(): Array<Device.Version>;
  setVersionList(value: Array<Device.Version>): void;
  addVersion(value?: Device.Version, index?: number): Device.Version;

  clearPropertyList(): void;
  getPropertyList(): Array<Device.Property>;
  setPropertyList(value: Array<Device.Property>): void;
  addProperty(value?: Device.Property, index?: number): Device.Property;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearSafetyList(): void;
  getSafetyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSafetyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSafety(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParent(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
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
    definition?: proto_r4_core_datatypes_pb.Reference.AsObject,
    udiCarrierList: Array<Device.UdiCarrier.AsObject>,
    status?: Device.StatusCode.AsObject,
    statusReasonList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    distinctIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.String.AsObject,
    manufactureDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    expirationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    serialNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    deviceNameList: Array<Device.DeviceName.AsObject>,
    modelNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    partNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specializationList: Array<Device.Specialization.AsObject>,
    versionList: Array<Device.Version.AsObject>,
    propertyList: Array<Device.Property.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    safetyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    parent?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class UdiCarrier extends jspb.Message {
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

    hasCarrierAidc(): boolean;
    clearCarrierAidc(): void;
    getCarrierAidc(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
    setCarrierAidc(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

    hasCarrierHrf(): boolean;
    clearCarrierHrf(): void;
    getCarrierHrf(): proto_r4_core_datatypes_pb.String | undefined;
    setCarrierHrf(value?: proto_r4_core_datatypes_pb.String): void;

    hasEntryType(): boolean;
    clearEntryType(): void;
    getEntryType(): Device.UdiCarrier.EntryTypeCode | undefined;
    setEntryType(value?: Device.UdiCarrier.EntryTypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdiCarrier.AsObject;
    static toObject(includeInstance: boolean, msg: UdiCarrier): UdiCarrier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdiCarrier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdiCarrier;
    static deserializeBinaryFromReader(message: UdiCarrier, reader: jspb.BinaryReader): UdiCarrier;
  }

  export namespace UdiCarrier {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      deviceIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Uri.AsObject,
      jurisdiction?: proto_r4_core_datatypes_pb.Uri.AsObject,
      carrierAidc?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
      carrierHrf?: proto_r4_core_datatypes_pb.String.AsObject,
      entryType?: Device.UdiCarrier.EntryTypeCode.AsObject,
    }

    export class EntryTypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EntryTypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: EntryTypeCode): EntryTypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EntryTypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EntryTypeCode;
      static deserializeBinaryFromReader(message: EntryTypeCode, reader: jspb.BinaryReader): EntryTypeCode;
    }

    export namespace EntryTypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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
    getType(): Device.DeviceName.TypeCode | undefined;
    setType(value?: Device.DeviceName.TypeCode): void;

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
      type?: Device.DeviceName.TypeCode.AsObject,
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
    getSystemType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSystemType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      systemType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Version extends jspb.Message {
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

    hasComponent(): boolean;
    clearComponent(): void;
    getComponent(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setComponent(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
  }

  export namespace Version {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      component?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
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
}

