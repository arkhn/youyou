// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_specification.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstanceSpecification extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDomain(): boolean;
  clearDomain(): void;
  getDomain(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDomain(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSource(): void;
  getSource(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSource(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  clearMoiety(): void;
  getMoiety(): Array<SubstanceSpecification.Moiety>;
  setMoiety(value: Array<SubstanceSpecification.Moiety>): void;
  addMoiety(value?: SubstanceSpecification.Moiety, index?: number): SubstanceSpecification.Moiety;

  clearProperty(): void;
  getProperty(): Array<SubstanceSpecification.Property>;
  setProperty(value: Array<SubstanceSpecification.Property>): void;
  addProperty(value?: SubstanceSpecification.Property, index?: number): SubstanceSpecification.Property;

  hasReferenceInformation(): boolean;
  clearReferenceInformation(): void;
  getReferenceInformation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferenceInformation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStructure(): boolean;
  clearStructure(): void;
  getStructure(): SubstanceSpecification.Structure | undefined;
  setStructure(value?: SubstanceSpecification.Structure): void;

  clearCode(): void;
  getCode(): Array<SubstanceSpecification.CodeType>;
  setCode(value: Array<SubstanceSpecification.CodeType>): void;
  addCode(value?: SubstanceSpecification.CodeType, index?: number): SubstanceSpecification.CodeType;

  clearName(): void;
  getName(): Array<SubstanceSpecification.Name>;
  setName(value: Array<SubstanceSpecification.Name>): void;
  addName(value?: SubstanceSpecification.Name, index?: number): SubstanceSpecification.Name;

  clearMolecularWeight(): void;
  getMolecularWeight(): Array<SubstanceSpecification.Structure.Isotope.MolecularWeight>;
  setMolecularWeight(value: Array<SubstanceSpecification.Structure.Isotope.MolecularWeight>): void;
  addMolecularWeight(value?: SubstanceSpecification.Structure.Isotope.MolecularWeight, index?: number): SubstanceSpecification.Structure.Isotope.MolecularWeight;

  clearRelationship(): void;
  getRelationship(): Array<SubstanceSpecification.Relationship>;
  setRelationship(value: Array<SubstanceSpecification.Relationship>): void;
  addRelationship(value?: SubstanceSpecification.Relationship, index?: number): SubstanceSpecification.Relationship;

  hasNucleicAcid(): boolean;
  clearNucleicAcid(): void;
  getNucleicAcid(): proto_r4_core_datatypes_pb.Reference | undefined;
  setNucleicAcid(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPolymer(): boolean;
  clearPolymer(): void;
  getPolymer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPolymer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasProtein(): boolean;
  clearProtein(): void;
  getProtein(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProtein(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSourceMaterial(): boolean;
  clearSourceMaterial(): void;
  getSourceMaterial(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSourceMaterial(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceSpecification.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceSpecification): SubstanceSpecification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceSpecification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceSpecification;
  static deserializeBinaryFromReader(message: SubstanceSpecification, reader: jspb.BinaryReader): SubstanceSpecification;
}

export namespace SubstanceSpecification {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    domain?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    source: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
    moiety: Array<SubstanceSpecification.Moiety.AsObject>,
    property: Array<SubstanceSpecification.Property.AsObject>,
    referenceInformation?: proto_r4_core_datatypes_pb.Reference.AsObject,
    structure?: SubstanceSpecification.Structure.AsObject,
    code: Array<SubstanceSpecification.CodeType.AsObject>,
    name: Array<SubstanceSpecification.Name.AsObject>,
    molecularWeight: Array<SubstanceSpecification.Structure.Isotope.MolecularWeight.AsObject>,
    relationship: Array<SubstanceSpecification.Relationship.AsObject>,
    nucleicAcid?: proto_r4_core_datatypes_pb.Reference.AsObject,
    polymer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    protein?: proto_r4_core_datatypes_pb.Reference.AsObject,
    sourceMaterial?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class Moiety extends jspb.Message {
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

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasStereochemistry(): boolean;
    clearStereochemistry(): void;
    getStereochemistry(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStereochemistry(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasOpticalActivity(): boolean;
    clearOpticalActivity(): void;
    getOpticalActivity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOpticalActivity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMolecularFormula(): boolean;
    clearMolecularFormula(): void;
    getMolecularFormula(): proto_r4_core_datatypes_pb.String | undefined;
    setMolecularFormula(value?: proto_r4_core_datatypes_pb.String): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): SubstanceSpecification.Moiety.AmountX | undefined;
    setAmount(value?: SubstanceSpecification.Moiety.AmountX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Moiety.AsObject;
    static toObject(includeInstance: boolean, msg: Moiety): Moiety.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Moiety, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Moiety;
    static deserializeBinaryFromReader(message: Moiety, reader: jspb.BinaryReader): Moiety;
  }

  export namespace Moiety {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      stereochemistry?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      opticalActivity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      molecularFormula?: proto_r4_core_datatypes_pb.String.AsObject,
      amount?: SubstanceSpecification.Moiety.AmountX.AsObject,
    }

    export class AmountX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): AmountX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AmountX.AsObject;
      static toObject(includeInstance: boolean, msg: AmountX): AmountX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AmountX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AmountX;
      static deserializeBinaryFromReader(message: AmountX, reader: jspb.BinaryReader): AmountX;
    }

    export namespace AmountX {
      export type AsObject = {
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        STRING_VALUE = 2,
      }
    }
  }

  export class Property extends jspb.Message {
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

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasParameters(): boolean;
    clearParameters(): void;
    getParameters(): proto_r4_core_datatypes_pb.String | undefined;
    setParameters(value?: proto_r4_core_datatypes_pb.String): void;

    hasDefiningSubstance(): boolean;
    clearDefiningSubstance(): void;
    getDefiningSubstance(): SubstanceSpecification.Property.DefiningSubstanceX | undefined;
    setDefiningSubstance(value?: SubstanceSpecification.Property.DefiningSubstanceX): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): SubstanceSpecification.Property.AmountX | undefined;
    setAmount(value?: SubstanceSpecification.Property.AmountX): void;

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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      parameters?: proto_r4_core_datatypes_pb.String.AsObject,
      definingSubstance?: SubstanceSpecification.Property.DefiningSubstanceX.AsObject,
      amount?: SubstanceSpecification.Property.AmountX.AsObject,
    }

    export class DefiningSubstanceX extends jspb.Message {
      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): DefiningSubstanceX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DefiningSubstanceX.AsObject;
      static toObject(includeInstance: boolean, msg: DefiningSubstanceX): DefiningSubstanceX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DefiningSubstanceX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DefiningSubstanceX;
      static deserializeBinaryFromReader(message: DefiningSubstanceX, reader: jspb.BinaryReader): DefiningSubstanceX;
    }

    export namespace DefiningSubstanceX {
      export type AsObject = {
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        REFERENCE = 1,
        CODEABLE_CONCEPT = 2,
      }
    }

    export class AmountX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): AmountX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AmountX.AsObject;
      static toObject(includeInstance: boolean, msg: AmountX): AmountX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AmountX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AmountX;
      static deserializeBinaryFromReader(message: AmountX, reader: jspb.BinaryReader): AmountX;
    }

    export namespace AmountX {
      export type AsObject = {
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        STRING_VALUE = 2,
      }
    }
  }

  export class Structure extends jspb.Message {
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

    hasStereochemistry(): boolean;
    clearStereochemistry(): void;
    getStereochemistry(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStereochemistry(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasOpticalActivity(): boolean;
    clearOpticalActivity(): void;
    getOpticalActivity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOpticalActivity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMolecularFormula(): boolean;
    clearMolecularFormula(): void;
    getMolecularFormula(): proto_r4_core_datatypes_pb.String | undefined;
    setMolecularFormula(value?: proto_r4_core_datatypes_pb.String): void;

    hasMolecularFormulaByMoiety(): boolean;
    clearMolecularFormulaByMoiety(): void;
    getMolecularFormulaByMoiety(): proto_r4_core_datatypes_pb.String | undefined;
    setMolecularFormulaByMoiety(value?: proto_r4_core_datatypes_pb.String): void;

    clearIsotope(): void;
    getIsotope(): Array<SubstanceSpecification.Structure.Isotope>;
    setIsotope(value: Array<SubstanceSpecification.Structure.Isotope>): void;
    addIsotope(value?: SubstanceSpecification.Structure.Isotope, index?: number): SubstanceSpecification.Structure.Isotope;

    hasMolecularWeight(): boolean;
    clearMolecularWeight(): void;
    getMolecularWeight(): SubstanceSpecification.Structure.Isotope.MolecularWeight | undefined;
    setMolecularWeight(value?: SubstanceSpecification.Structure.Isotope.MolecularWeight): void;

    clearSource(): void;
    getSource(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSource(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearRepresentation(): void;
    getRepresentation(): Array<SubstanceSpecification.Structure.Representation>;
    setRepresentation(value: Array<SubstanceSpecification.Structure.Representation>): void;
    addRepresentation(value?: SubstanceSpecification.Structure.Representation, index?: number): SubstanceSpecification.Structure.Representation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Structure.AsObject;
    static toObject(includeInstance: boolean, msg: Structure): Structure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Structure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Structure;
    static deserializeBinaryFromReader(message: Structure, reader: jspb.BinaryReader): Structure;
  }

  export namespace Structure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      stereochemistry?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      opticalActivity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      molecularFormula?: proto_r4_core_datatypes_pb.String.AsObject,
      molecularFormulaByMoiety?: proto_r4_core_datatypes_pb.String.AsObject,
      isotope: Array<SubstanceSpecification.Structure.Isotope.AsObject>,
      molecularWeight?: SubstanceSpecification.Structure.Isotope.MolecularWeight.AsObject,
      source: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      representation: Array<SubstanceSpecification.Structure.Representation.AsObject>,
    }

    export class Isotope extends jspb.Message {
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

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasName(): boolean;
      clearName(): void;
      getName(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setName(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasSubstitution(): boolean;
      clearSubstitution(): void;
      getSubstitution(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setSubstitution(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasHalfLife(): boolean;
      clearHalfLife(): void;
      getHalfLife(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setHalfLife(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasMolecularWeight(): boolean;
      clearMolecularWeight(): void;
      getMolecularWeight(): SubstanceSpecification.Structure.Isotope.MolecularWeight | undefined;
      setMolecularWeight(value?: SubstanceSpecification.Structure.Isotope.MolecularWeight): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Isotope.AsObject;
      static toObject(includeInstance: boolean, msg: Isotope): Isotope.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Isotope, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Isotope;
      static deserializeBinaryFromReader(message: Isotope, reader: jspb.BinaryReader): Isotope;
    }

    export namespace Isotope {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        name?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        substitution?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        halfLife?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        molecularWeight?: SubstanceSpecification.Structure.Isotope.MolecularWeight.AsObject,
      }

      export class MolecularWeight extends jspb.Message {
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

        hasMethod(): boolean;
        clearMethod(): void;
        getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasType(): boolean;
        clearType(): void;
        getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): proto_r4_core_datatypes_pb.Quantity | undefined;
        setAmount(value?: proto_r4_core_datatypes_pb.Quantity): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MolecularWeight.AsObject;
        static toObject(includeInstance: boolean, msg: MolecularWeight): MolecularWeight.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MolecularWeight, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MolecularWeight;
        static deserializeBinaryFromReader(message: MolecularWeight, reader: jspb.BinaryReader): MolecularWeight;
      }

      export namespace MolecularWeight {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          amount?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        }
      }
    }

    export class Representation extends jspb.Message {
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

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasRepresentation(): boolean;
      clearRepresentation(): void;
      getRepresentation(): proto_r4_core_datatypes_pb.String | undefined;
      setRepresentation(value?: proto_r4_core_datatypes_pb.String): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Representation.AsObject;
      static toObject(includeInstance: boolean, msg: Representation): Representation.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Representation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Representation;
      static deserializeBinaryFromReader(message: Representation, reader: jspb.BinaryReader): Representation;
    }

    export namespace Representation {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        representation?: proto_r4_core_datatypes_pb.String.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      }
    }
  }

  export class CodeType extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStatusDate(): boolean;
    clearStatusDate(): void;
    getStatusDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setStatusDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    clearSource(): void;
    getSource(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSource(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeType.AsObject;
    static toObject(includeInstance: boolean, msg: CodeType): CodeType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeType;
    static deserializeBinaryFromReader(message: CodeType, reader: jspb.BinaryReader): CodeType;
  }

  export namespace CodeType {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      statusDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      source: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

    clearLanguage(): void;
    getLanguage(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setLanguage(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDomain(): void;
    getDomain(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setDomain(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addDomain(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearJurisdiction(): void;
    getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSynonym(): void;
    getSynonym(): Array<SubstanceSpecification.Name>;
    setSynonym(value: Array<SubstanceSpecification.Name>): void;
    addSynonym(value?: SubstanceSpecification.Name, index?: number): SubstanceSpecification.Name;

    clearTranslation(): void;
    getTranslation(): Array<SubstanceSpecification.Name>;
    setTranslation(value: Array<SubstanceSpecification.Name>): void;
    addTranslation(value?: SubstanceSpecification.Name, index?: number): SubstanceSpecification.Name;

    clearOfficial(): void;
    getOfficial(): Array<SubstanceSpecification.Name.Official>;
    setOfficial(value: Array<SubstanceSpecification.Name.Official>): void;
    addOfficial(value?: SubstanceSpecification.Name.Official, index?: number): SubstanceSpecification.Name.Official;

    clearSource(): void;
    getSource(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSource(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      language: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      domain: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      synonym: Array<SubstanceSpecification.Name.AsObject>,
      translation: Array<SubstanceSpecification.Name.AsObject>,
      official: Array<SubstanceSpecification.Name.Official.AsObject>,
      source: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class Official extends jspb.Message {
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

      hasAuthority(): boolean;
      clearAuthority(): void;
      getAuthority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setAuthority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Official.AsObject;
      static toObject(includeInstance: boolean, msg: Official): Official.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Official, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Official;
      static deserializeBinaryFromReader(message: Official, reader: jspb.BinaryReader): Official;
    }

    export namespace Official {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        authority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      }
    }
  }

  export class Relationship extends jspb.Message {
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

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): SubstanceSpecification.Relationship.SubstanceX | undefined;
    setSubstance(value?: SubstanceSpecification.Relationship.SubstanceX): void;

    hasRelationship(): boolean;
    clearRelationship(): void;
    getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasIsDefining(): boolean;
    clearIsDefining(): void;
    getIsDefining(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIsDefining(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): SubstanceSpecification.Relationship.AmountX | undefined;
    setAmount(value?: SubstanceSpecification.Relationship.AmountX): void;

    hasAmountRatioLowLimit(): boolean;
    clearAmountRatioLowLimit(): void;
    getAmountRatioLowLimit(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setAmountRatioLowLimit(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasAmountType(): boolean;
    clearAmountType(): void;
    getAmountType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAmountType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSource(): void;
    getSource(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSource(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Relationship.AsObject;
    static toObject(includeInstance: boolean, msg: Relationship): Relationship.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Relationship, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Relationship;
    static deserializeBinaryFromReader(message: Relationship, reader: jspb.BinaryReader): Relationship;
  }

  export namespace Relationship {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      substance?: SubstanceSpecification.Relationship.SubstanceX.AsObject,
      relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      isDefining?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      amount?: SubstanceSpecification.Relationship.AmountX.AsObject,
      amountRatioLowLimit?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      amountType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      source: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class SubstanceX extends jspb.Message {
      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): SubstanceX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SubstanceX.AsObject;
      static toObject(includeInstance: boolean, msg: SubstanceX): SubstanceX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SubstanceX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SubstanceX;
      static deserializeBinaryFromReader(message: SubstanceX, reader: jspb.BinaryReader): SubstanceX;
    }

    export namespace SubstanceX {
      export type AsObject = {
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        REFERENCE = 1,
        CODEABLE_CONCEPT = 2,
      }
    }

    export class AmountX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): AmountX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AmountX.AsObject;
      static toObject(includeInstance: boolean, msg: AmountX): AmountX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AmountX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AmountX;
      static deserializeBinaryFromReader(message: AmountX, reader: jspb.BinaryReader): AmountX;
    }

    export namespace AmountX {
      export type AsObject = {
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        RATIO = 3,
        STRING_VALUE = 4,
      }
    }
  }
}

