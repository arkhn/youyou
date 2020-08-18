// package: google.fhir.r4.core
// file: proto/r4/core/resources/catalog_entry.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class CatalogEntry extends jspb.Message {
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

  hasOrderable(): boolean;
  clearOrderable(): void;
  getOrderable(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setOrderable(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReferencedItem(): boolean;
  clearReferencedItem(): void;
  getReferencedItem(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferencedItem(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAdditionalIdentifier(): void;
  getAdditionalIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setAdditionalIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addAdditionalIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearClassification(): void;
  getClassification(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setClassification(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CatalogEntry.StatusCode | undefined;
  setStatus(value?: CatalogEntry.StatusCode): void;

  hasValidityPeriod(): boolean;
  clearValidityPeriod(): void;
  getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasValidTo(): boolean;
  clearValidTo(): void;
  getValidTo(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setValidTo(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLastUpdated(): boolean;
  clearLastUpdated(): void;
  getLastUpdated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastUpdated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearAdditionalCharacteristic(): void;
  getAdditionalCharacteristic(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setAdditionalCharacteristic(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addAdditionalCharacteristic(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearAdditionalClassification(): void;
  getAdditionalClassification(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setAdditionalClassification(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addAdditionalClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearRelatedEntry(): void;
  getRelatedEntry(): Array<CatalogEntry.RelatedEntry>;
  setRelatedEntry(value: Array<CatalogEntry.RelatedEntry>): void;
  addRelatedEntry(value?: CatalogEntry.RelatedEntry, index?: number): CatalogEntry.RelatedEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CatalogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: CatalogEntry): CatalogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CatalogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CatalogEntry;
  static deserializeBinaryFromReader(message: CatalogEntry, reader: jspb.BinaryReader): CatalogEntry;
}

export namespace CatalogEntry {
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
    orderable?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    referencedItem?: proto_r4_core_datatypes_pb.Reference.AsObject,
    additionalIdentifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    classification: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    status?: CatalogEntry.StatusCode.AsObject,
    validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    validTo?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lastUpdated?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    additionalCharacteristic: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    additionalClassification: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    relatedEntry: Array<CatalogEntry.RelatedEntry.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class RelatedEntry extends jspb.Message {
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

    hasRelationtype(): boolean;
    clearRelationtype(): void;
    getRelationtype(): CatalogEntry.RelatedEntry.RelationtypeCode | undefined;
    setRelationtype(value?: CatalogEntry.RelatedEntry.RelationtypeCode): void;

    hasItem(): boolean;
    clearItem(): void;
    getItem(): proto_r4_core_datatypes_pb.Reference | undefined;
    setItem(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedEntry.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedEntry): RelatedEntry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatedEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedEntry;
    static deserializeBinaryFromReader(message: RelatedEntry, reader: jspb.BinaryReader): RelatedEntry;
  }

  export namespace RelatedEntry {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      relationtype?: CatalogEntry.RelatedEntry.RelationtypeCode.AsObject,
      item?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class RelationtypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RelationtypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: RelationtypeCode): RelationtypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RelationtypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RelationtypeCode;
      static deserializeBinaryFromReader(message: RelationtypeCode, reader: jspb.BinaryReader): RelationtypeCode;
    }

    export namespace RelationtypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CatalogEntryRelationTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

