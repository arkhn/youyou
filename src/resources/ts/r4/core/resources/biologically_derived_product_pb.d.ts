// package: google.fhir.r4.core
// file: proto/r4/core/resources/biologically_derived_product.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class BiologicallyDerivedProduct extends jspb.Message {
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

  hasProductCategory(): boolean;
  clearProductCategory(): void;
  getProductCategory(): BiologicallyDerivedProduct.ProductCategoryCode | undefined;
  setProductCategory(value?: BiologicallyDerivedProduct.ProductCategoryCode): void;

  hasProductCode(): boolean;
  clearProductCode(): void;
  getProductCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setProductCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): BiologicallyDerivedProduct.StatusCode | undefined;
  setStatus(value?: BiologicallyDerivedProduct.StatusCode): void;

  clearRequestList(): void;
  getRequestList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRequestList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.Integer | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.Integer): void;

  clearParentList(): void;
  getParentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setParentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addParent(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): BiologicallyDerivedProduct.Collection | undefined;
  setCollection(value?: BiologicallyDerivedProduct.Collection): void;

  clearProcessingList(): void;
  getProcessingList(): Array<BiologicallyDerivedProduct.Processing>;
  setProcessingList(value: Array<BiologicallyDerivedProduct.Processing>): void;
  addProcessing(value?: BiologicallyDerivedProduct.Processing, index?: number): BiologicallyDerivedProduct.Processing;

  hasManipulation(): boolean;
  clearManipulation(): void;
  getManipulation(): BiologicallyDerivedProduct.Manipulation | undefined;
  setManipulation(value?: BiologicallyDerivedProduct.Manipulation): void;

  clearStorageList(): void;
  getStorageList(): Array<BiologicallyDerivedProduct.Storage>;
  setStorageList(value: Array<BiologicallyDerivedProduct.Storage>): void;
  addStorage(value?: BiologicallyDerivedProduct.Storage, index?: number): BiologicallyDerivedProduct.Storage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BiologicallyDerivedProduct.AsObject;
  static toObject(includeInstance: boolean, msg: BiologicallyDerivedProduct): BiologicallyDerivedProduct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BiologicallyDerivedProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BiologicallyDerivedProduct;
  static deserializeBinaryFromReader(message: BiologicallyDerivedProduct, reader: jspb.BinaryReader): BiologicallyDerivedProduct;
}

export namespace BiologicallyDerivedProduct {
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
    productCategory?: BiologicallyDerivedProduct.ProductCategoryCode.AsObject,
    productCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: BiologicallyDerivedProduct.StatusCode.AsObject,
    requestList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    quantity?: proto_r4_core_datatypes_pb.Integer.AsObject,
    parentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    collection?: BiologicallyDerivedProduct.Collection.AsObject,
    processingList: Array<BiologicallyDerivedProduct.Processing.AsObject>,
    manipulation?: BiologicallyDerivedProduct.Manipulation.AsObject,
    storageList: Array<BiologicallyDerivedProduct.Storage.AsObject>,
  }

  export class ProductCategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProductCategoryCode.AsObject;
    static toObject(includeInstance: boolean, msg: ProductCategoryCode): ProductCategoryCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProductCategoryCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProductCategoryCode;
    static deserializeBinaryFromReader(message: ProductCategoryCode, reader: jspb.BinaryReader): ProductCategoryCode;
  }

  export namespace ProductCategoryCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Collection extends jspb.Message {
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

    hasCollector(): boolean;
    clearCollector(): void;
    getCollector(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCollector(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
    setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCollected(): boolean;
    clearCollected(): void;
    getCollected(): BiologicallyDerivedProduct.Collection.CollectedX | undefined;
    setCollected(value?: BiologicallyDerivedProduct.Collection.CollectedX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
  }

  export namespace Collection {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      collector?: proto_r4_core_datatypes_pb.Reference.AsObject,
      source?: proto_r4_core_datatypes_pb.Reference.AsObject,
      collected?: BiologicallyDerivedProduct.Collection.CollectedX.AsObject,
    }

    export class CollectedX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): CollectedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CollectedX.AsObject;
      static toObject(includeInstance: boolean, msg: CollectedX): CollectedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CollectedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CollectedX;
      static deserializeBinaryFromReader(message: CollectedX, reader: jspb.BinaryReader): CollectedX;
    }

    export namespace CollectedX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
      }
    }
  }

  export class Processing extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProcedure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAdditive(): boolean;
    clearAdditive(): void;
    getAdditive(): proto_r4_core_datatypes_pb.Reference | undefined;
    setAdditive(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): BiologicallyDerivedProduct.Processing.TimeX | undefined;
    setTime(value?: BiologicallyDerivedProduct.Processing.TimeX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processing.AsObject;
    static toObject(includeInstance: boolean, msg: Processing): Processing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Processing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processing;
    static deserializeBinaryFromReader(message: Processing, reader: jspb.BinaryReader): Processing;
  }

  export namespace Processing {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      procedure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      additive?: proto_r4_core_datatypes_pb.Reference.AsObject,
      time?: BiologicallyDerivedProduct.Processing.TimeX.AsObject,
    }

    export class TimeX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): TimeX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimeX.AsObject;
      static toObject(includeInstance: boolean, msg: TimeX): TimeX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimeX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimeX;
      static deserializeBinaryFromReader(message: TimeX, reader: jspb.BinaryReader): TimeX;
    }

    export namespace TimeX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
      }
    }
  }

  export class Manipulation extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): BiologicallyDerivedProduct.Manipulation.TimeX | undefined;
    setTime(value?: BiologicallyDerivedProduct.Manipulation.TimeX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Manipulation.AsObject;
    static toObject(includeInstance: boolean, msg: Manipulation): Manipulation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Manipulation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Manipulation;
    static deserializeBinaryFromReader(message: Manipulation, reader: jspb.BinaryReader): Manipulation;
  }

  export namespace Manipulation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      time?: BiologicallyDerivedProduct.Manipulation.TimeX.AsObject,
    }

    export class TimeX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): TimeX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimeX.AsObject;
      static toObject(includeInstance: boolean, msg: TimeX): TimeX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimeX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimeX;
      static deserializeBinaryFromReader(message: TimeX, reader: jspb.BinaryReader): TimeX;
    }

    export namespace TimeX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
      }
    }
  }

  export class Storage extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasTemperature(): boolean;
    clearTemperature(): void;
    getTemperature(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setTemperature(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasScale(): boolean;
    clearScale(): void;
    getScale(): BiologicallyDerivedProduct.Storage.ScaleCode | undefined;
    setScale(value?: BiologicallyDerivedProduct.Storage.ScaleCode): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.Period | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Storage.AsObject;
    static toObject(includeInstance: boolean, msg: Storage): Storage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Storage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Storage;
    static deserializeBinaryFromReader(message: Storage, reader: jspb.BinaryReader): Storage;
  }

  export namespace Storage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      temperature?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      scale?: BiologicallyDerivedProduct.Storage.ScaleCode.AsObject,
      duration?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class ScaleCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ScaleCode.AsObject;
      static toObject(includeInstance: boolean, msg: ScaleCode): ScaleCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ScaleCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ScaleCode;
      static deserializeBinaryFromReader(message: ScaleCode, reader: jspb.BinaryReader): ScaleCode;
    }

    export namespace ScaleCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap[keyof proto_r4_core_codes_pb.BiologicallyDerivedProductStorageScaleCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

