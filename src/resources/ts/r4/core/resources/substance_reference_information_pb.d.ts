// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_reference_information.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstanceReferenceInformation extends jspb.Message {
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

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.String | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.String): void;

  clearGeneList(): void;
  getGeneList(): Array<SubstanceReferenceInformation.Gene>;
  setGeneList(value: Array<SubstanceReferenceInformation.Gene>): void;
  addGene(value?: SubstanceReferenceInformation.Gene, index?: number): SubstanceReferenceInformation.Gene;

  clearGeneElementList(): void;
  getGeneElementList(): Array<SubstanceReferenceInformation.GeneElement>;
  setGeneElementList(value: Array<SubstanceReferenceInformation.GeneElement>): void;
  addGeneElement(value?: SubstanceReferenceInformation.GeneElement, index?: number): SubstanceReferenceInformation.GeneElement;

  clearClassificationList(): void;
  getClassificationList(): Array<SubstanceReferenceInformation.Classification>;
  setClassificationList(value: Array<SubstanceReferenceInformation.Classification>): void;
  addClassification(value?: SubstanceReferenceInformation.Classification, index?: number): SubstanceReferenceInformation.Classification;

  clearTargetList(): void;
  getTargetList(): Array<SubstanceReferenceInformation.Target>;
  setTargetList(value: Array<SubstanceReferenceInformation.Target>): void;
  addTarget(value?: SubstanceReferenceInformation.Target, index?: number): SubstanceReferenceInformation.Target;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceReferenceInformation.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceReferenceInformation): SubstanceReferenceInformation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceReferenceInformation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceReferenceInformation;
  static deserializeBinaryFromReader(message: SubstanceReferenceInformation, reader: jspb.BinaryReader): SubstanceReferenceInformation;
}

export namespace SubstanceReferenceInformation {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    comment?: proto_r4_core_datatypes_pb.String.AsObject,
    geneList: Array<SubstanceReferenceInformation.Gene.AsObject>,
    geneElementList: Array<SubstanceReferenceInformation.GeneElement.AsObject>,
    classificationList: Array<SubstanceReferenceInformation.Classification.AsObject>,
    targetList: Array<SubstanceReferenceInformation.Target.AsObject>,
  }

  export class Gene extends jspb.Message {
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

    hasGeneSequenceOrigin(): boolean;
    clearGeneSequenceOrigin(): void;
    getGeneSequenceOrigin(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setGeneSequenceOrigin(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGene(): boolean;
    clearGene(): void;
    getGene(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setGene(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSourceList(): void;
    getSourceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSourceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Gene.AsObject;
    static toObject(includeInstance: boolean, msg: Gene): Gene.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Gene, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Gene;
    static deserializeBinaryFromReader(message: Gene, reader: jspb.BinaryReader): Gene;
  }

  export namespace Gene {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      geneSequenceOrigin?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      gene?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      sourceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class GeneElement extends jspb.Message {
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

    hasElement(): boolean;
    clearElement(): void;
    getElement(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setElement(value?: proto_r4_core_datatypes_pb.Identifier): void;

    clearSourceList(): void;
    getSourceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSourceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GeneElement.AsObject;
    static toObject(includeInstance: boolean, msg: GeneElement): GeneElement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GeneElement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GeneElement;
    static deserializeBinaryFromReader(message: GeneElement, reader: jspb.BinaryReader): GeneElement;
  }

  export namespace GeneElement {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      element?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      sourceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Classification extends jspb.Message {
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

    hasDomain(): boolean;
    clearDomain(): void;
    getDomain(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDomain(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasClassification(): boolean;
    clearClassification(): void;
    getClassification(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSubtypeList(): void;
    getSubtypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubtypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubtype(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSourceList(): void;
    getSourceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSourceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Classification.AsObject;
    static toObject(includeInstance: boolean, msg: Classification): Classification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Classification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Classification;
    static deserializeBinaryFromReader(message: Classification, reader: jspb.BinaryReader): Classification;
  }

  export namespace Classification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      domain?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      classification?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subtypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      sourceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Target extends jspb.Message {
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

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasInteraction(): boolean;
    clearInteraction(): void;
    getInteraction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setInteraction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasOrganism(): boolean;
    clearOrganism(): void;
    getOrganism(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOrganism(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasOrganismType(): boolean;
    clearOrganismType(): void;
    getOrganismType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOrganismType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): SubstanceReferenceInformation.Target.AmountX | undefined;
    setAmount(value?: SubstanceReferenceInformation.Target.AmountX): void;

    hasAmountType(): boolean;
    clearAmountType(): void;
    getAmountType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAmountType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSourceList(): void;
    getSourceList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSourceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Target.AsObject;
    static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Target;
    static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
  }

  export namespace Target {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      target?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interaction?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      organism?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      organismType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      amount?: SubstanceReferenceInformation.Target.AmountX.AsObject,
      amountType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      sourceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
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
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        STRING_VALUE = 3,
      }
    }
  }
}

