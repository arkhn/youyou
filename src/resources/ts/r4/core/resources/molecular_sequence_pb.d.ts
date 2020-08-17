// package: google.fhir.r4.core
// file: proto/r4/core/resources/molecular_sequence.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MolecularSequence extends jspb.Message {
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
  getType(): MolecularSequence.TypeCode | undefined;
  setType(value?: MolecularSequence.TypeCode): void;

  hasCoordinateSystem(): boolean;
  clearCoordinateSystem(): void;
  getCoordinateSystem(): proto_r4_core_datatypes_pb.Integer | undefined;
  setCoordinateSystem(value?: proto_r4_core_datatypes_pb.Integer): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

  hasReferenceSeq(): boolean;
  clearReferenceSeq(): void;
  getReferenceSeq(): MolecularSequence.ReferenceSeq | undefined;
  setReferenceSeq(value?: MolecularSequence.ReferenceSeq): void;

  clearVariantList(): void;
  getVariantList(): Array<MolecularSequence.Variant>;
  setVariantList(value: Array<MolecularSequence.Variant>): void;
  addVariant(value?: MolecularSequence.Variant, index?: number): MolecularSequence.Variant;

  hasObservedSeq(): boolean;
  clearObservedSeq(): void;
  getObservedSeq(): proto_r4_core_datatypes_pb.String | undefined;
  setObservedSeq(value?: proto_r4_core_datatypes_pb.String): void;

  clearQualityList(): void;
  getQualityList(): Array<MolecularSequence.Quality>;
  setQualityList(value: Array<MolecularSequence.Quality>): void;
  addQuality(value?: MolecularSequence.Quality, index?: number): MolecularSequence.Quality;

  hasReadCoverage(): boolean;
  clearReadCoverage(): void;
  getReadCoverage(): proto_r4_core_datatypes_pb.Integer | undefined;
  setReadCoverage(value?: proto_r4_core_datatypes_pb.Integer): void;

  clearRepositoryList(): void;
  getRepositoryList(): Array<MolecularSequence.Repository>;
  setRepositoryList(value: Array<MolecularSequence.Repository>): void;
  addRepository(value?: MolecularSequence.Repository, index?: number): MolecularSequence.Repository;

  clearPointerList(): void;
  getPointerList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPointerList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPointer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearStructureVariantList(): void;
  getStructureVariantList(): Array<MolecularSequence.StructureVariant>;
  setStructureVariantList(value: Array<MolecularSequence.StructureVariant>): void;
  addStructureVariant(value?: MolecularSequence.StructureVariant, index?: number): MolecularSequence.StructureVariant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MolecularSequence.AsObject;
  static toObject(includeInstance: boolean, msg: MolecularSequence): MolecularSequence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MolecularSequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MolecularSequence;
  static deserializeBinaryFromReader(message: MolecularSequence, reader: jspb.BinaryReader): MolecularSequence;
}

export namespace MolecularSequence {
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
    type?: MolecularSequence.TypeCode.AsObject,
    coordinateSystem?: proto_r4_core_datatypes_pb.Integer.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    referenceSeq?: MolecularSequence.ReferenceSeq.AsObject,
    variantList: Array<MolecularSequence.Variant.AsObject>,
    observedSeq?: proto_r4_core_datatypes_pb.String.AsObject,
    qualityList: Array<MolecularSequence.Quality.AsObject>,
    readCoverage?: proto_r4_core_datatypes_pb.Integer.AsObject,
    repositoryList: Array<MolecularSequence.Repository.AsObject>,
    pointerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    structureVariantList: Array<MolecularSequence.StructureVariant.AsObject>,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SequenceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SequenceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SequenceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SequenceTypeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.SequenceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SequenceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ReferenceSeq extends jspb.Message {
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

    hasChromosome(): boolean;
    clearChromosome(): void;
    getChromosome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setChromosome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGenomeBuild(): boolean;
    clearGenomeBuild(): void;
    getGenomeBuild(): proto_r4_core_datatypes_pb.String | undefined;
    setGenomeBuild(value?: proto_r4_core_datatypes_pb.String): void;

    hasOrientation(): boolean;
    clearOrientation(): void;
    getOrientation(): MolecularSequence.ReferenceSeq.OrientationCode | undefined;
    setOrientation(value?: MolecularSequence.ReferenceSeq.OrientationCode): void;

    hasReferenceSeqId(): boolean;
    clearReferenceSeqId(): void;
    getReferenceSeqId(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReferenceSeqId(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReferenceSeqPointer(): boolean;
    clearReferenceSeqPointer(): void;
    getReferenceSeqPointer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReferenceSeqPointer(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasReferenceSeqString(): boolean;
    clearReferenceSeqString(): void;
    getReferenceSeqString(): proto_r4_core_datatypes_pb.String | undefined;
    setReferenceSeqString(value?: proto_r4_core_datatypes_pb.String): void;

    hasStrand(): boolean;
    clearStrand(): void;
    getStrand(): MolecularSequence.ReferenceSeq.StrandCode | undefined;
    setStrand(value?: MolecularSequence.ReferenceSeq.StrandCode): void;

    hasWindowStart(): boolean;
    clearWindowStart(): void;
    getWindowStart(): proto_r4_core_datatypes_pb.Integer | undefined;
    setWindowStart(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasWindowEnd(): boolean;
    clearWindowEnd(): void;
    getWindowEnd(): proto_r4_core_datatypes_pb.Integer | undefined;
    setWindowEnd(value?: proto_r4_core_datatypes_pb.Integer): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceSeq.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceSeq): ReferenceSeq.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceSeq, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceSeq;
    static deserializeBinaryFromReader(message: ReferenceSeq, reader: jspb.BinaryReader): ReferenceSeq;
  }

  export namespace ReferenceSeq {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      chromosome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      genomeBuild?: proto_r4_core_datatypes_pb.String.AsObject,
      orientation?: MolecularSequence.ReferenceSeq.OrientationCode.AsObject,
      referenceSeqId?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      referenceSeqPointer?: proto_r4_core_datatypes_pb.Reference.AsObject,
      referenceSeqString?: proto_r4_core_datatypes_pb.String.AsObject,
      strand?: MolecularSequence.ReferenceSeq.StrandCode.AsObject,
      windowStart?: proto_r4_core_datatypes_pb.Integer.AsObject,
      windowEnd?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export class OrientationCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.OrientationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.OrientationTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.OrientationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.OrientationTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OrientationCode.AsObject;
      static toObject(includeInstance: boolean, msg: OrientationCode): OrientationCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OrientationCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OrientationCode;
      static deserializeBinaryFromReader(message: OrientationCode, reader: jspb.BinaryReader): OrientationCode;
    }

    export namespace OrientationCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.OrientationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.OrientationTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class StrandCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.StrandTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StrandTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.StrandTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StrandTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StrandCode.AsObject;
      static toObject(includeInstance: boolean, msg: StrandCode): StrandCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StrandCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StrandCode;
      static deserializeBinaryFromReader(message: StrandCode, reader: jspb.BinaryReader): StrandCode;
    }

    export namespace StrandCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.StrandTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StrandTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Variant extends jspb.Message {
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

    hasStart(): boolean;
    clearStart(): void;
    getStart(): proto_r4_core_datatypes_pb.Integer | undefined;
    setStart(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): proto_r4_core_datatypes_pb.Integer | undefined;
    setEnd(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasObservedAllele(): boolean;
    clearObservedAllele(): void;
    getObservedAllele(): proto_r4_core_datatypes_pb.String | undefined;
    setObservedAllele(value?: proto_r4_core_datatypes_pb.String): void;

    hasReferenceAllele(): boolean;
    clearReferenceAllele(): void;
    getReferenceAllele(): proto_r4_core_datatypes_pb.String | undefined;
    setReferenceAllele(value?: proto_r4_core_datatypes_pb.String): void;

    hasCigar(): boolean;
    clearCigar(): void;
    getCigar(): proto_r4_core_datatypes_pb.String | undefined;
    setCigar(value?: proto_r4_core_datatypes_pb.String): void;

    hasVariantPointer(): boolean;
    clearVariantPointer(): void;
    getVariantPointer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setVariantPointer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variant.AsObject;
    static toObject(includeInstance: boolean, msg: Variant): Variant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variant;
    static deserializeBinaryFromReader(message: Variant, reader: jspb.BinaryReader): Variant;
  }

  export namespace Variant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      start?: proto_r4_core_datatypes_pb.Integer.AsObject,
      end?: proto_r4_core_datatypes_pb.Integer.AsObject,
      observedAllele?: proto_r4_core_datatypes_pb.String.AsObject,
      referenceAllele?: proto_r4_core_datatypes_pb.String.AsObject,
      cigar?: proto_r4_core_datatypes_pb.String.AsObject,
      variantPointer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Quality extends jspb.Message {
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
    getType(): MolecularSequence.Quality.TypeCode | undefined;
    setType(value?: MolecularSequence.Quality.TypeCode): void;

    hasStandardSequence(): boolean;
    clearStandardSequence(): void;
    getStandardSequence(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStandardSequence(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): proto_r4_core_datatypes_pb.Integer | undefined;
    setStart(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasEnd(): boolean;
    clearEnd(): void;
    getEnd(): proto_r4_core_datatypes_pb.Integer | undefined;
    setEnd(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasScore(): boolean;
    clearScore(): void;
    getScore(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setScore(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasTruthTp(): boolean;
    clearTruthTp(): void;
    getTruthTp(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setTruthTp(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasQueryTp(): boolean;
    clearQueryTp(): void;
    getQueryTp(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setQueryTp(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasTruthFn(): boolean;
    clearTruthFn(): void;
    getTruthFn(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setTruthFn(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasQueryFp(): boolean;
    clearQueryFp(): void;
    getQueryFp(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setQueryFp(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasGtFp(): boolean;
    clearGtFp(): void;
    getGtFp(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setGtFp(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasPrecision(): boolean;
    clearPrecision(): void;
    getPrecision(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setPrecision(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasRecall(): boolean;
    clearRecall(): void;
    getRecall(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setRecall(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasFScore(): boolean;
    clearFScore(): void;
    getFScore(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setFScore(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasRoc(): boolean;
    clearRoc(): void;
    getRoc(): MolecularSequence.Quality.Roc | undefined;
    setRoc(value?: MolecularSequence.Quality.Roc): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Quality.AsObject;
    static toObject(includeInstance: boolean, msg: Quality): Quality.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Quality, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Quality;
    static deserializeBinaryFromReader(message: Quality, reader: jspb.BinaryReader): Quality;
  }

  export namespace Quality {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: MolecularSequence.Quality.TypeCode.AsObject,
      standardSequence?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      start?: proto_r4_core_datatypes_pb.Integer.AsObject,
      end?: proto_r4_core_datatypes_pb.Integer.AsObject,
      score?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      truthTp?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      queryTp?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      truthFn?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      queryFp?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      gtFp?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      precision?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      recall?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      fScore?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      roc?: MolecularSequence.Quality.Roc.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.QualityTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QualityTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.QualityTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QualityTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.QualityTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QualityTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Roc extends jspb.Message {
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

      clearScoreList(): void;
      getScoreList(): Array<proto_r4_core_datatypes_pb.Integer>;
      setScoreList(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
      addScore(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

      clearNumTpList(): void;
      getNumTpList(): Array<proto_r4_core_datatypes_pb.Integer>;
      setNumTpList(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
      addNumTp(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

      clearNumFpList(): void;
      getNumFpList(): Array<proto_r4_core_datatypes_pb.Integer>;
      setNumFpList(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
      addNumFp(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

      clearNumFnList(): void;
      getNumFnList(): Array<proto_r4_core_datatypes_pb.Integer>;
      setNumFnList(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
      addNumFn(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

      clearPrecisionList(): void;
      getPrecisionList(): Array<proto_r4_core_datatypes_pb.Decimal>;
      setPrecisionList(value: Array<proto_r4_core_datatypes_pb.Decimal>): void;
      addPrecision(value?: proto_r4_core_datatypes_pb.Decimal, index?: number): proto_r4_core_datatypes_pb.Decimal;

      clearSensitivityList(): void;
      getSensitivityList(): Array<proto_r4_core_datatypes_pb.Decimal>;
      setSensitivityList(value: Array<proto_r4_core_datatypes_pb.Decimal>): void;
      addSensitivity(value?: proto_r4_core_datatypes_pb.Decimal, index?: number): proto_r4_core_datatypes_pb.Decimal;

      clearFMeasureList(): void;
      getFMeasureList(): Array<proto_r4_core_datatypes_pb.Decimal>;
      setFMeasureList(value: Array<proto_r4_core_datatypes_pb.Decimal>): void;
      addFMeasure(value?: proto_r4_core_datatypes_pb.Decimal, index?: number): proto_r4_core_datatypes_pb.Decimal;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Roc.AsObject;
      static toObject(includeInstance: boolean, msg: Roc): Roc.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Roc, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Roc;
      static deserializeBinaryFromReader(message: Roc, reader: jspb.BinaryReader): Roc;
    }

    export namespace Roc {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        scoreList: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
        numTpList: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
        numFpList: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
        numFnList: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
        precisionList: Array<proto_r4_core_datatypes_pb.Decimal.AsObject>,
        sensitivityList: Array<proto_r4_core_datatypes_pb.Decimal.AsObject>,
        fMeasureList: Array<proto_r4_core_datatypes_pb.Decimal.AsObject>,
      }
    }
  }

  export class Repository extends jspb.Message {
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
    getType(): MolecularSequence.Repository.TypeCode | undefined;
    setType(value?: MolecularSequence.Repository.TypeCode): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasDatasetId(): boolean;
    clearDatasetId(): void;
    getDatasetId(): proto_r4_core_datatypes_pb.String | undefined;
    setDatasetId(value?: proto_r4_core_datatypes_pb.String): void;

    hasVariantsetId(): boolean;
    clearVariantsetId(): void;
    getVariantsetId(): proto_r4_core_datatypes_pb.String | undefined;
    setVariantsetId(value?: proto_r4_core_datatypes_pb.String): void;

    hasReadsetId(): boolean;
    clearReadsetId(): void;
    getReadsetId(): proto_r4_core_datatypes_pb.String | undefined;
    setReadsetId(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repository.AsObject;
    static toObject(includeInstance: boolean, msg: Repository): Repository.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repository, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repository;
    static deserializeBinaryFromReader(message: Repository, reader: jspb.BinaryReader): Repository;
  }

  export namespace Repository {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: MolecularSequence.Repository.TypeCode.AsObject,
      url?: proto_r4_core_datatypes_pb.Uri.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      datasetId?: proto_r4_core_datatypes_pb.String.AsObject,
      variantsetId?: proto_r4_core_datatypes_pb.String.AsObject,
      readsetId?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.RepositoryTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class StructureVariant extends jspb.Message {
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

    hasVariantType(): boolean;
    clearVariantType(): void;
    getVariantType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setVariantType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasExact(): boolean;
    clearExact(): void;
    getExact(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setExact(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasLength(): boolean;
    clearLength(): void;
    getLength(): proto_r4_core_datatypes_pb.Integer | undefined;
    setLength(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasOuter(): boolean;
    clearOuter(): void;
    getOuter(): MolecularSequence.StructureVariant.Outer | undefined;
    setOuter(value?: MolecularSequence.StructureVariant.Outer): void;

    hasInner(): boolean;
    clearInner(): void;
    getInner(): MolecularSequence.StructureVariant.Inner | undefined;
    setInner(value?: MolecularSequence.StructureVariant.Inner): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StructureVariant.AsObject;
    static toObject(includeInstance: boolean, msg: StructureVariant): StructureVariant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StructureVariant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StructureVariant;
    static deserializeBinaryFromReader(message: StructureVariant, reader: jspb.BinaryReader): StructureVariant;
  }

  export namespace StructureVariant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      variantType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      exact?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      length?: proto_r4_core_datatypes_pb.Integer.AsObject,
      outer?: MolecularSequence.StructureVariant.Outer.AsObject,
      inner?: MolecularSequence.StructureVariant.Inner.AsObject,
    }

    export class Outer extends jspb.Message {
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

      hasStart(): boolean;
      clearStart(): void;
      getStart(): proto_r4_core_datatypes_pb.Integer | undefined;
      setStart(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasEnd(): boolean;
      clearEnd(): void;
      getEnd(): proto_r4_core_datatypes_pb.Integer | undefined;
      setEnd(value?: proto_r4_core_datatypes_pb.Integer): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Outer.AsObject;
      static toObject(includeInstance: boolean, msg: Outer): Outer.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Outer, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Outer;
      static deserializeBinaryFromReader(message: Outer, reader: jspb.BinaryReader): Outer;
    }

    export namespace Outer {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        start?: proto_r4_core_datatypes_pb.Integer.AsObject,
        end?: proto_r4_core_datatypes_pb.Integer.AsObject,
      }
    }

    export class Inner extends jspb.Message {
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

      hasStart(): boolean;
      clearStart(): void;
      getStart(): proto_r4_core_datatypes_pb.Integer | undefined;
      setStart(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasEnd(): boolean;
      clearEnd(): void;
      getEnd(): proto_r4_core_datatypes_pb.Integer | undefined;
      setEnd(value?: proto_r4_core_datatypes_pb.Integer): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Inner.AsObject;
      static toObject(includeInstance: boolean, msg: Inner): Inner.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Inner, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Inner;
      static deserializeBinaryFromReader(message: Inner, reader: jspb.BinaryReader): Inner;
    }

    export namespace Inner {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        start?: proto_r4_core_datatypes_pb.Integer.AsObject,
        end?: proto_r4_core_datatypes_pb.Integer.AsObject,
      }
    }
  }
}

