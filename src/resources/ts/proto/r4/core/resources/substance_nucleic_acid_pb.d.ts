// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_nucleic_acid.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstanceNucleicAcid extends jspb.Message {
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

  hasSequenceType(): boolean;
  clearSequenceType(): void;
  getSequenceType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSequenceType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasNumberOfSubunits(): boolean;
  clearNumberOfSubunits(): void;
  getNumberOfSubunits(): proto_r4_core_datatypes_pb.Integer | undefined;
  setNumberOfSubunits(value?: proto_r4_core_datatypes_pb.Integer): void;

  hasAreaOfHybridisation(): boolean;
  clearAreaOfHybridisation(): void;
  getAreaOfHybridisation(): proto_r4_core_datatypes_pb.String | undefined;
  setAreaOfHybridisation(value?: proto_r4_core_datatypes_pb.String): void;

  hasOligoNucleotideType(): boolean;
  clearOligoNucleotideType(): void;
  getOligoNucleotideType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setOligoNucleotideType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSubunit(): void;
  getSubunit(): Array<SubstanceNucleicAcid.Subunit>;
  setSubunit(value: Array<SubstanceNucleicAcid.Subunit>): void;
  addSubunit(value?: SubstanceNucleicAcid.Subunit, index?: number): SubstanceNucleicAcid.Subunit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceNucleicAcid.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceNucleicAcid): SubstanceNucleicAcid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceNucleicAcid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceNucleicAcid;
  static deserializeBinaryFromReader(message: SubstanceNucleicAcid, reader: jspb.BinaryReader): SubstanceNucleicAcid;
}

export namespace SubstanceNucleicAcid {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    sequenceType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    numberOfSubunits?: proto_r4_core_datatypes_pb.Integer.AsObject,
    areaOfHybridisation?: proto_r4_core_datatypes_pb.String.AsObject,
    oligoNucleotideType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subunit: Array<SubstanceNucleicAcid.Subunit.AsObject>,
  }

  export class Subunit extends jspb.Message {
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

    hasSubunit(): boolean;
    clearSubunit(): void;
    getSubunit(): proto_r4_core_datatypes_pb.Integer | undefined;
    setSubunit(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.String | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.String): void;

    hasLength(): boolean;
    clearLength(): void;
    getLength(): proto_r4_core_datatypes_pb.Integer | undefined;
    setLength(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasSequenceAttachment(): boolean;
    clearSequenceAttachment(): void;
    getSequenceAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
    setSequenceAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

    hasFivePrime(): boolean;
    clearFivePrime(): void;
    getFivePrime(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFivePrime(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasThreePrime(): boolean;
    clearThreePrime(): void;
    getThreePrime(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setThreePrime(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearLinkage(): void;
    getLinkage(): Array<SubstanceNucleicAcid.Subunit.Linkage>;
    setLinkage(value: Array<SubstanceNucleicAcid.Subunit.Linkage>): void;
    addLinkage(value?: SubstanceNucleicAcid.Subunit.Linkage, index?: number): SubstanceNucleicAcid.Subunit.Linkage;

    clearSugar(): void;
    getSugar(): Array<SubstanceNucleicAcid.Subunit.Sugar>;
    setSugar(value: Array<SubstanceNucleicAcid.Subunit.Sugar>): void;
    addSugar(value?: SubstanceNucleicAcid.Subunit.Sugar, index?: number): SubstanceNucleicAcid.Subunit.Sugar;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subunit.AsObject;
    static toObject(includeInstance: boolean, msg: Subunit): Subunit.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subunit, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subunit;
    static deserializeBinaryFromReader(message: Subunit, reader: jspb.BinaryReader): Subunit;
  }

  export namespace Subunit {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      subunit?: proto_r4_core_datatypes_pb.Integer.AsObject,
      sequence?: proto_r4_core_datatypes_pb.String.AsObject,
      length?: proto_r4_core_datatypes_pb.Integer.AsObject,
      sequenceAttachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      fivePrime?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      threePrime?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      linkage: Array<SubstanceNucleicAcid.Subunit.Linkage.AsObject>,
      sugar: Array<SubstanceNucleicAcid.Subunit.Sugar.AsObject>,
    }

    export class Linkage extends jspb.Message {
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

      hasConnectivity(): boolean;
      clearConnectivity(): void;
      getConnectivity(): proto_r4_core_datatypes_pb.String | undefined;
      setConnectivity(value?: proto_r4_core_datatypes_pb.String): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasName(): boolean;
      clearName(): void;
      getName(): proto_r4_core_datatypes_pb.String | undefined;
      setName(value?: proto_r4_core_datatypes_pb.String): void;

      hasResidueSite(): boolean;
      clearResidueSite(): void;
      getResidueSite(): proto_r4_core_datatypes_pb.String | undefined;
      setResidueSite(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Linkage.AsObject;
      static toObject(includeInstance: boolean, msg: Linkage): Linkage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Linkage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Linkage;
      static deserializeBinaryFromReader(message: Linkage, reader: jspb.BinaryReader): Linkage;
    }

    export namespace Linkage {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        connectivity?: proto_r4_core_datatypes_pb.String.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        residueSite?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }

    export class Sugar extends jspb.Message {
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
      getName(): proto_r4_core_datatypes_pb.String | undefined;
      setName(value?: proto_r4_core_datatypes_pb.String): void;

      hasResidueSite(): boolean;
      clearResidueSite(): void;
      getResidueSite(): proto_r4_core_datatypes_pb.String | undefined;
      setResidueSite(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Sugar.AsObject;
      static toObject(includeInstance: boolean, msg: Sugar): Sugar.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Sugar, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Sugar;
      static deserializeBinaryFromReader(message: Sugar, reader: jspb.BinaryReader): Sugar;
    }

    export namespace Sugar {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        residueSite?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }
}

