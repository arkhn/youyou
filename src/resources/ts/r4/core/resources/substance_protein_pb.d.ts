// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_protein.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstanceProtein extends jspb.Message {
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

  clearDisulfideLinkage(): void;
  getDisulfideLinkage(): Array<proto_r4_core_datatypes_pb.String>;
  setDisulfideLinkage(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addDisulfideLinkage(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearSubunit(): void;
  getSubunit(): Array<SubstanceProtein.Subunit>;
  setSubunit(value: Array<SubstanceProtein.Subunit>): void;
  addSubunit(value?: SubstanceProtein.Subunit, index?: number): SubstanceProtein.Subunit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceProtein.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceProtein): SubstanceProtein.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceProtein, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceProtein;
  static deserializeBinaryFromReader(message: SubstanceProtein, reader: jspb.BinaryReader): SubstanceProtein;
}

export namespace SubstanceProtein {
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
    disulfideLinkage: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    subunit: Array<SubstanceProtein.Subunit.AsObject>,
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

    hasNTerminalModificationId(): boolean;
    clearNTerminalModificationId(): void;
    getNTerminalModificationId(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setNTerminalModificationId(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasNTerminalModification(): boolean;
    clearNTerminalModification(): void;
    getNTerminalModification(): proto_r4_core_datatypes_pb.String | undefined;
    setNTerminalModification(value?: proto_r4_core_datatypes_pb.String): void;

    hasCTerminalModificationId(): boolean;
    clearCTerminalModificationId(): void;
    getCTerminalModificationId(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setCTerminalModificationId(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasCTerminalModification(): boolean;
    clearCTerminalModification(): void;
    getCTerminalModification(): proto_r4_core_datatypes_pb.String | undefined;
    setCTerminalModification(value?: proto_r4_core_datatypes_pb.String): void;

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
      nTerminalModificationId?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      nTerminalModification?: proto_r4_core_datatypes_pb.String.AsObject,
      cTerminalModificationId?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      cTerminalModification?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }
}

