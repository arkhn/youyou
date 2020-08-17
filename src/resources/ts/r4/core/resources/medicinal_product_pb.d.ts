// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProduct extends jspb.Message {
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

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDomain(): boolean;
  clearDomain(): void;
  getDomain(): proto_r4_core_datatypes_pb.Coding | undefined;
  setDomain(value?: proto_r4_core_datatypes_pb.Coding): void;

  hasCombinedPharmaceuticalDoseForm(): boolean;
  clearCombinedPharmaceuticalDoseForm(): void;
  getCombinedPharmaceuticalDoseForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCombinedPharmaceuticalDoseForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasLegalStatusOfSupply(): boolean;
  clearLegalStatusOfSupply(): void;
  getLegalStatusOfSupply(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLegalStatusOfSupply(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasAdditionalMonitoringIndicator(): boolean;
  clearAdditionalMonitoringIndicator(): void;
  getAdditionalMonitoringIndicator(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAdditionalMonitoringIndicator(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSpecialMeasuresList(): void;
  getSpecialMeasuresList(): Array<proto_r4_core_datatypes_pb.String>;
  setSpecialMeasuresList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addSpecialMeasures(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasPaediatricUseIndicator(): boolean;
  clearPaediatricUseIndicator(): void;
  getPaediatricUseIndicator(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPaediatricUseIndicator(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearProductClassificationList(): void;
  getProductClassificationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProductClassificationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProductClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearMarketingStatusList(): void;
  getMarketingStatusList(): Array<proto_r4_core_datatypes_pb.MarketingStatus>;
  setMarketingStatusList(value: Array<proto_r4_core_datatypes_pb.MarketingStatus>): void;
  addMarketingStatus(value?: proto_r4_core_datatypes_pb.MarketingStatus, index?: number): proto_r4_core_datatypes_pb.MarketingStatus;

  clearPharmaceuticalProductList(): void;
  getPharmaceuticalProductList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPharmaceuticalProductList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPharmaceuticalProduct(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPackagedMedicinalProductList(): void;
  getPackagedMedicinalProductList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPackagedMedicinalProductList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPackagedMedicinalProduct(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAttachedDocumentList(): void;
  getAttachedDocumentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAttachedDocumentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAttachedDocument(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMasterFileList(): void;
  getMasterFileList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setMasterFileList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addMasterFile(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContact(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearClinicalTrialList(): void;
  getClinicalTrialList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setClinicalTrialList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addClinicalTrial(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNameList(): void;
  getNameList(): Array<MedicinalProduct.Name>;
  setNameList(value: Array<MedicinalProduct.Name>): void;
  addName(value?: MedicinalProduct.Name, index?: number): MedicinalProduct.Name;

  clearCrossReferenceList(): void;
  getCrossReferenceList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setCrossReferenceList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addCrossReference(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearManufacturingBusinessOperationList(): void;
  getManufacturingBusinessOperationList(): Array<MedicinalProduct.ManufacturingBusinessOperation>;
  setManufacturingBusinessOperationList(value: Array<MedicinalProduct.ManufacturingBusinessOperation>): void;
  addManufacturingBusinessOperation(value?: MedicinalProduct.ManufacturingBusinessOperation, index?: number): MedicinalProduct.ManufacturingBusinessOperation;

  clearSpecialDesignationList(): void;
  getSpecialDesignationList(): Array<MedicinalProduct.SpecialDesignation>;
  setSpecialDesignationList(value: Array<MedicinalProduct.SpecialDesignation>): void;
  addSpecialDesignation(value?: MedicinalProduct.SpecialDesignation, index?: number): MedicinalProduct.SpecialDesignation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProduct.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProduct): MedicinalProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProduct;
  static deserializeBinaryFromReader(message: MedicinalProduct, reader: jspb.BinaryReader): MedicinalProduct;
}

export namespace MedicinalProduct {
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
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    domain?: proto_r4_core_datatypes_pb.Coding.AsObject,
    combinedPharmaceuticalDoseForm?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    legalStatusOfSupply?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    additionalMonitoringIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specialMeasuresList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    paediatricUseIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    productClassificationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    marketingStatusList: Array<proto_r4_core_datatypes_pb.MarketingStatus.AsObject>,
    pharmaceuticalProductList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    packagedMedicinalProductList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    attachedDocumentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    masterFileList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    contactList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    clinicalTrialList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    nameList: Array<MedicinalProduct.Name.AsObject>,
    crossReferenceList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    manufacturingBusinessOperationList: Array<MedicinalProduct.ManufacturingBusinessOperation.AsObject>,
    specialDesignationList: Array<MedicinalProduct.SpecialDesignation.AsObject>,
  }

  export class Name extends jspb.Message {
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

    hasProductName(): boolean;
    clearProductName(): void;
    getProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setProductName(value?: proto_r4_core_datatypes_pb.String): void;

    clearNamePartList(): void;
    getNamePartList(): Array<MedicinalProduct.Name.NamePart>;
    setNamePartList(value: Array<MedicinalProduct.Name.NamePart>): void;
    addNamePart(value?: MedicinalProduct.Name.NamePart, index?: number): MedicinalProduct.Name.NamePart;

    clearCountryLanguageList(): void;
    getCountryLanguageList(): Array<MedicinalProduct.Name.CountryLanguage>;
    setCountryLanguageList(value: Array<MedicinalProduct.Name.CountryLanguage>): void;
    addCountryLanguage(value?: MedicinalProduct.Name.CountryLanguage, index?: number): MedicinalProduct.Name.CountryLanguage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Name.AsObject;
    static toObject(includeInstance: boolean, msg: Name): Name.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Name, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Name;
    static deserializeBinaryFromReader(message: Name, reader: jspb.BinaryReader): Name;
  }

  export namespace Name {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      productName?: proto_r4_core_datatypes_pb.String.AsObject,
      namePartList: Array<MedicinalProduct.Name.NamePart.AsObject>,
      countryLanguageList: Array<MedicinalProduct.Name.CountryLanguage.AsObject>,
    }

    export class NamePart extends jspb.Message {
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

      hasPart(): boolean;
      clearPart(): void;
      getPart(): proto_r4_core_datatypes_pb.String | undefined;
      setPart(value?: proto_r4_core_datatypes_pb.String): void;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.Coding | undefined;
      setType(value?: proto_r4_core_datatypes_pb.Coding): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): NamePart.AsObject;
      static toObject(includeInstance: boolean, msg: NamePart): NamePart.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: NamePart, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): NamePart;
      static deserializeBinaryFromReader(message: NamePart, reader: jspb.BinaryReader): NamePart;
    }

    export namespace NamePart {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        part?: proto_r4_core_datatypes_pb.String.AsObject,
        type?: proto_r4_core_datatypes_pb.Coding.AsObject,
      }
    }

    export class CountryLanguage extends jspb.Message {
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

      hasCountry(): boolean;
      clearCountry(): void;
      getCountry(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCountry(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasJurisdiction(): boolean;
      clearJurisdiction(): void;
      getJurisdiction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasLanguage(): boolean;
      clearLanguage(): void;
      getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CountryLanguage.AsObject;
      static toObject(includeInstance: boolean, msg: CountryLanguage): CountryLanguage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CountryLanguage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CountryLanguage;
      static deserializeBinaryFromReader(message: CountryLanguage, reader: jspb.BinaryReader): CountryLanguage;
    }

    export namespace CountryLanguage {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        country?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        jurisdiction?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }
  }

  export class ManufacturingBusinessOperation extends jspb.Message {
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

    hasOperationType(): boolean;
    clearOperationType(): void;
    getOperationType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOperationType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAuthorisationReferenceNumber(): boolean;
    clearAuthorisationReferenceNumber(): void;
    getAuthorisationReferenceNumber(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setAuthorisationReferenceNumber(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasEffectiveDate(): boolean;
    clearEffectiveDate(): void;
    getEffectiveDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setEffectiveDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasConfidentialityIndicator(): boolean;
    clearConfidentialityIndicator(): void;
    getConfidentialityIndicator(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setConfidentialityIndicator(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearManufacturerList(): void;
    getManufacturerList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setManufacturerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addManufacturer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasRegulator(): boolean;
    clearRegulator(): void;
    getRegulator(): proto_r4_core_datatypes_pb.Reference | undefined;
    setRegulator(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ManufacturingBusinessOperation.AsObject;
    static toObject(includeInstance: boolean, msg: ManufacturingBusinessOperation): ManufacturingBusinessOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ManufacturingBusinessOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ManufacturingBusinessOperation;
    static deserializeBinaryFromReader(message: ManufacturingBusinessOperation, reader: jspb.BinaryReader): ManufacturingBusinessOperation;
  }

  export namespace ManufacturingBusinessOperation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      operationType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      authorisationReferenceNumber?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      effectiveDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      confidentialityIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manufacturerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      regulator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class SpecialDesignation extends jspb.Message {
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

    hasIntendedUse(): boolean;
    clearIntendedUse(): void;
    getIntendedUse(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setIntendedUse(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasIndication(): boolean;
    clearIndication(): void;
    getIndication(): MedicinalProduct.SpecialDesignation.IndicationX | undefined;
    setIndication(value?: MedicinalProduct.SpecialDesignation.IndicationX): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasSpecies(): boolean;
    clearSpecies(): void;
    getSpecies(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSpecies(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpecialDesignation.AsObject;
    static toObject(includeInstance: boolean, msg: SpecialDesignation): SpecialDesignation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpecialDesignation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpecialDesignation;
    static deserializeBinaryFromReader(message: SpecialDesignation, reader: jspb.BinaryReader): SpecialDesignation;
  }

  export namespace SpecialDesignation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      intendedUse?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      indication?: MedicinalProduct.SpecialDesignation.IndicationX.AsObject,
      status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      species?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class IndicationX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): IndicationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): IndicationX.AsObject;
      static toObject(includeInstance: boolean, msg: IndicationX): IndicationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: IndicationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): IndicationX;
      static deserializeBinaryFromReader(message: IndicationX, reader: jspb.BinaryReader): IndicationX;
    }

    export namespace IndicationX {
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

