// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_source_material.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstanceSourceMaterial extends jspb.Message {
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

  hasSourceMaterialClass(): boolean;
  clearSourceMaterialClass(): void;
  getSourceMaterialClass(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSourceMaterialClass(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSourceMaterialType(): boolean;
  clearSourceMaterialType(): void;
  getSourceMaterialType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSourceMaterialType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSourceMaterialState(): boolean;
  clearSourceMaterialState(): void;
  getSourceMaterialState(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSourceMaterialState(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasOrganismId(): boolean;
  clearOrganismId(): void;
  getOrganismId(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setOrganismId(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasOrganismName(): boolean;
  clearOrganismName(): void;
  getOrganismName(): proto_r4_core_datatypes_pb.String | undefined;
  setOrganismName(value?: proto_r4_core_datatypes_pb.String): void;

  clearParentSubstanceIdList(): void;
  getParentSubstanceIdList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setParentSubstanceIdList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addParentSubstanceId(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearParentSubstanceNameList(): void;
  getParentSubstanceNameList(): Array<proto_r4_core_datatypes_pb.String>;
  setParentSubstanceNameList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addParentSubstanceName(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearCountryOfOriginList(): void;
  getCountryOfOriginList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCountryOfOriginList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCountryOfOrigin(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearGeographicalLocationList(): void;
  getGeographicalLocationList(): Array<proto_r4_core_datatypes_pb.String>;
  setGeographicalLocationList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addGeographicalLocation(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasDevelopmentStage(): boolean;
  clearDevelopmentStage(): void;
  getDevelopmentStage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDevelopmentStage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearFractionDescriptionList(): void;
  getFractionDescriptionList(): Array<SubstanceSourceMaterial.FractionDescription>;
  setFractionDescriptionList(value: Array<SubstanceSourceMaterial.FractionDescription>): void;
  addFractionDescription(value?: SubstanceSourceMaterial.FractionDescription, index?: number): SubstanceSourceMaterial.FractionDescription;

  hasOrganism(): boolean;
  clearOrganism(): void;
  getOrganism(): SubstanceSourceMaterial.Organism | undefined;
  setOrganism(value?: SubstanceSourceMaterial.Organism): void;

  clearPartDescriptionList(): void;
  getPartDescriptionList(): Array<SubstanceSourceMaterial.PartDescription>;
  setPartDescriptionList(value: Array<SubstanceSourceMaterial.PartDescription>): void;
  addPartDescription(value?: SubstanceSourceMaterial.PartDescription, index?: number): SubstanceSourceMaterial.PartDescription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceSourceMaterial.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceSourceMaterial): SubstanceSourceMaterial.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceSourceMaterial, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceSourceMaterial;
  static deserializeBinaryFromReader(message: SubstanceSourceMaterial, reader: jspb.BinaryReader): SubstanceSourceMaterial;
}

export namespace SubstanceSourceMaterial {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    sourceMaterialClass?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    sourceMaterialType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    sourceMaterialState?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    organismId?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    organismName?: proto_r4_core_datatypes_pb.String.AsObject,
    parentSubstanceIdList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    parentSubstanceNameList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    countryOfOriginList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    geographicalLocationList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    developmentStage?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    fractionDescriptionList: Array<SubstanceSourceMaterial.FractionDescription.AsObject>,
    organism?: SubstanceSourceMaterial.Organism.AsObject,
    partDescriptionList: Array<SubstanceSourceMaterial.PartDescription.AsObject>,
  }

  export class FractionDescription extends jspb.Message {
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

    hasFraction(): boolean;
    clearFraction(): void;
    getFraction(): proto_r4_core_datatypes_pb.String | undefined;
    setFraction(value?: proto_r4_core_datatypes_pb.String): void;

    hasMaterialType(): boolean;
    clearMaterialType(): void;
    getMaterialType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMaterialType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FractionDescription.AsObject;
    static toObject(includeInstance: boolean, msg: FractionDescription): FractionDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FractionDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FractionDescription;
    static deserializeBinaryFromReader(message: FractionDescription, reader: jspb.BinaryReader): FractionDescription;
  }

  export namespace FractionDescription {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      fraction?: proto_r4_core_datatypes_pb.String.AsObject,
      materialType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Organism extends jspb.Message {
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

    hasFamily(): boolean;
    clearFamily(): void;
    getFamily(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFamily(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGenus(): boolean;
    clearGenus(): void;
    getGenus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setGenus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasSpecies(): boolean;
    clearSpecies(): void;
    getSpecies(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSpecies(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasIntraspecificType(): boolean;
    clearIntraspecificType(): void;
    getIntraspecificType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setIntraspecificType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasIntraspecificDescription(): boolean;
    clearIntraspecificDescription(): void;
    getIntraspecificDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setIntraspecificDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearAuthorList(): void;
    getAuthorList(): Array<SubstanceSourceMaterial.Organism.Author>;
    setAuthorList(value: Array<SubstanceSourceMaterial.Organism.Author>): void;
    addAuthor(value?: SubstanceSourceMaterial.Organism.Author, index?: number): SubstanceSourceMaterial.Organism.Author;

    hasHybrid(): boolean;
    clearHybrid(): void;
    getHybrid(): SubstanceSourceMaterial.Organism.Hybrid | undefined;
    setHybrid(value?: SubstanceSourceMaterial.Organism.Hybrid): void;

    hasOrganismGeneral(): boolean;
    clearOrganismGeneral(): void;
    getOrganismGeneral(): SubstanceSourceMaterial.Organism.OrganismGeneral | undefined;
    setOrganismGeneral(value?: SubstanceSourceMaterial.Organism.OrganismGeneral): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organism.AsObject;
    static toObject(includeInstance: boolean, msg: Organism): Organism.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organism, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organism;
    static deserializeBinaryFromReader(message: Organism, reader: jspb.BinaryReader): Organism;
  }

  export namespace Organism {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      family?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      genus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      species?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      intraspecificType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      intraspecificDescription?: proto_r4_core_datatypes_pb.String.AsObject,
      authorList: Array<SubstanceSourceMaterial.Organism.Author.AsObject>,
      hybrid?: SubstanceSourceMaterial.Organism.Hybrid.AsObject,
      organismGeneral?: SubstanceSourceMaterial.Organism.OrganismGeneral.AsObject,
    }

    export class Author extends jspb.Message {
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

      hasAuthorType(): boolean;
      clearAuthorType(): void;
      getAuthorType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setAuthorType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAuthorDescription(): boolean;
      clearAuthorDescription(): void;
      getAuthorDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setAuthorDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Author.AsObject;
      static toObject(includeInstance: boolean, msg: Author): Author.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Author, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Author;
      static deserializeBinaryFromReader(message: Author, reader: jspb.BinaryReader): Author;
    }

    export namespace Author {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        authorType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        authorDescription?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }

    export class Hybrid extends jspb.Message {
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

      hasMaternalOrganismId(): boolean;
      clearMaternalOrganismId(): void;
      getMaternalOrganismId(): proto_r4_core_datatypes_pb.String | undefined;
      setMaternalOrganismId(value?: proto_r4_core_datatypes_pb.String): void;

      hasMaternalOrganismName(): boolean;
      clearMaternalOrganismName(): void;
      getMaternalOrganismName(): proto_r4_core_datatypes_pb.String | undefined;
      setMaternalOrganismName(value?: proto_r4_core_datatypes_pb.String): void;

      hasPaternalOrganismId(): boolean;
      clearPaternalOrganismId(): void;
      getPaternalOrganismId(): proto_r4_core_datatypes_pb.String | undefined;
      setPaternalOrganismId(value?: proto_r4_core_datatypes_pb.String): void;

      hasPaternalOrganismName(): boolean;
      clearPaternalOrganismName(): void;
      getPaternalOrganismName(): proto_r4_core_datatypes_pb.String | undefined;
      setPaternalOrganismName(value?: proto_r4_core_datatypes_pb.String): void;

      hasHybridType(): boolean;
      clearHybridType(): void;
      getHybridType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setHybridType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Hybrid.AsObject;
      static toObject(includeInstance: boolean, msg: Hybrid): Hybrid.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Hybrid, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Hybrid;
      static deserializeBinaryFromReader(message: Hybrid, reader: jspb.BinaryReader): Hybrid;
    }

    export namespace Hybrid {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        maternalOrganismId?: proto_r4_core_datatypes_pb.String.AsObject,
        maternalOrganismName?: proto_r4_core_datatypes_pb.String.AsObject,
        paternalOrganismId?: proto_r4_core_datatypes_pb.String.AsObject,
        paternalOrganismName?: proto_r4_core_datatypes_pb.String.AsObject,
        hybridType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }

    export class OrganismGeneral extends jspb.Message {
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

      hasKingdom(): boolean;
      clearKingdom(): void;
      getKingdom(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setKingdom(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasPhylum(): boolean;
      clearPhylum(): void;
      getPhylum(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setPhylum(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasClassValue(): boolean;
      clearClassValue(): void;
      getClassValue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setClassValue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasOrder(): boolean;
      clearOrder(): void;
      getOrder(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setOrder(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OrganismGeneral.AsObject;
      static toObject(includeInstance: boolean, msg: OrganismGeneral): OrganismGeneral.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OrganismGeneral, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OrganismGeneral;
      static deserializeBinaryFromReader(message: OrganismGeneral, reader: jspb.BinaryReader): OrganismGeneral;
    }

    export namespace OrganismGeneral {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        kingdom?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        phylum?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        classValue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        order?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }
  }

  export class PartDescription extends jspb.Message {
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
    getPart(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPart(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPartLocation(): boolean;
    clearPartLocation(): void;
    getPartLocation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPartLocation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PartDescription.AsObject;
    static toObject(includeInstance: boolean, msg: PartDescription): PartDescription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PartDescription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PartDescription;
    static deserializeBinaryFromReader(message: PartDescription, reader: jspb.BinaryReader): PartDescription;
  }

  export namespace PartDescription {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      part?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      partLocation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

