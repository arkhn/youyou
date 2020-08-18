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

  clearSpecialMeasures(): void;
  getSpecialMeasures(): Array<proto_r4_core_datatypes_pb.String>;
  setSpecialMeasures(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addSpecialMeasures(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasPaediatricUseIndicator(): boolean;
  clearPaediatricUseIndicator(): void;
  getPaediatricUseIndicator(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPaediatricUseIndicator(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearProductClassification(): void;
  getProductClassification(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProductClassification(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProductClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearMarketingStatus(): void;
  getMarketingStatus(): Array<proto_r4_core_datatypes_pb.MarketingStatus>;
  setMarketingStatus(value: Array<proto_r4_core_datatypes_pb.MarketingStatus>): void;
  addMarketingStatus(value?: proto_r4_core_datatypes_pb.MarketingStatus, index?: number): proto_r4_core_datatypes_pb.MarketingStatus;

  clearPharmaceuticalProduct(): void;
  getPharmaceuticalProduct(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPharmaceuticalProduct(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPharmaceuticalProduct(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPackagedMedicinalProduct(): void;
  getPackagedMedicinalProduct(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPackagedMedicinalProduct(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPackagedMedicinalProduct(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAttachedDocument(): void;
  getAttachedDocument(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAttachedDocument(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAttachedDocument(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMasterFile(): void;
  getMasterFile(): Array<proto_r4_core_datatypes_pb.Reference>;
  setMasterFile(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addMasterFile(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContact(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContact(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearClinicalTrial(): void;
  getClinicalTrial(): Array<proto_r4_core_datatypes_pb.Reference>;
  setClinicalTrial(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addClinicalTrial(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearName(): void;
  getName(): Array<MedicinalProduct.Name>;
  setName(value: Array<MedicinalProduct.Name>): void;
  addName(value?: MedicinalProduct.Name, index?: number): MedicinalProduct.Name;

  clearCrossReference(): void;
  getCrossReference(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setCrossReference(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addCrossReference(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearManufacturingBusinessOperation(): void;
  getManufacturingBusinessOperation(): Array<MedicinalProduct.ManufacturingBusinessOperation>;
  setManufacturingBusinessOperation(value: Array<MedicinalProduct.ManufacturingBusinessOperation>): void;
  addManufacturingBusinessOperation(value?: MedicinalProduct.ManufacturingBusinessOperation, index?: number): MedicinalProduct.ManufacturingBusinessOperation;

  clearSpecialDesignation(): void;
  getSpecialDesignation(): Array<MedicinalProduct.SpecialDesignation>;
  setSpecialDesignation(value: Array<MedicinalProduct.SpecialDesignation>): void;
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
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    domain?: proto_r4_core_datatypes_pb.Coding.AsObject,
    combinedPharmaceuticalDoseForm?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    legalStatusOfSupply?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    additionalMonitoringIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specialMeasures: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    paediatricUseIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    productClassification: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    marketingStatus: Array<proto_r4_core_datatypes_pb.MarketingStatus.AsObject>,
    pharmaceuticalProduct: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    packagedMedicinalProduct: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    attachedDocument: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    masterFile: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    contact: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    clinicalTrial: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    name: Array<MedicinalProduct.Name.AsObject>,
    crossReference: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    manufacturingBusinessOperation: Array<MedicinalProduct.ManufacturingBusinessOperation.AsObject>,
    specialDesignation: Array<MedicinalProduct.SpecialDesignation.AsObject>,
  }

  export class Name extends jspb.Message {
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

    hasProductName(): boolean;
    clearProductName(): void;
    getProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setProductName(value?: proto_r4_core_datatypes_pb.String): void;

    clearNamePart(): void;
    getNamePart(): Array<MedicinalProduct.Name.NamePart>;
    setNamePart(value: Array<MedicinalProduct.Name.NamePart>): void;
    addNamePart(value?: MedicinalProduct.Name.NamePart, index?: number): MedicinalProduct.Name.NamePart;

    clearCountryLanguage(): void;
    getCountryLanguage(): Array<MedicinalProduct.Name.CountryLanguage>;
    setCountryLanguage(value: Array<MedicinalProduct.Name.CountryLanguage>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      productName?: proto_r4_core_datatypes_pb.String.AsObject,
      namePart: Array<MedicinalProduct.Name.NamePart.AsObject>,
      countryLanguage: Array<MedicinalProduct.Name.CountryLanguage.AsObject>,
    }

    export class NamePart extends jspb.Message {
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        part?: proto_r4_core_datatypes_pb.String.AsObject,
        type?: proto_r4_core_datatypes_pb.Coding.AsObject,
      }
    }

    export class CountryLanguage extends jspb.Message {
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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

    clearManufacturer(): void;
    getManufacturer(): Array<proto_r4_core_datatypes_pb.Reference>;
    setManufacturer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      operationType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      authorisationReferenceNumber?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      effectiveDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      confidentialityIndicator?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manufacturer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      regulator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class SpecialDesignation extends jspb.Message {
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

    clearIdentifier(): void;
    getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
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

