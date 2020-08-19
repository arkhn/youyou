// package: google.fhir.r4.core
// file: proto/r4/core/resources/search_parameter.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SearchParameter extends jspb.Message {
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

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasDerivedFrom(): boolean;
  clearDerivedFrom(): void;
  getDerivedFrom(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setDerivedFrom(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): SearchParameter.StatusCode | undefined;
  setStatus(value?: SearchParameter.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_r4_core_datatypes_pb.String | undefined;
  setPublisher(value?: proto_r4_core_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearUseContext(): void;
  getUseContext(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.Code | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.Code): void;

  clearBase(): void;
  getBase(): Array<SearchParameter.BaseCode>;
  setBase(value: Array<SearchParameter.BaseCode>): void;
  addBase(value?: SearchParameter.BaseCode, index?: number): SearchParameter.BaseCode;

  hasType(): boolean;
  clearType(): void;
  getType(): SearchParameter.TypeCode | undefined;
  setType(value?: SearchParameter.TypeCode): void;

  hasExpression(): boolean;
  clearExpression(): void;
  getExpression(): proto_r4_core_datatypes_pb.String | undefined;
  setExpression(value?: proto_r4_core_datatypes_pb.String): void;

  hasXpath(): boolean;
  clearXpath(): void;
  getXpath(): proto_r4_core_datatypes_pb.String | undefined;
  setXpath(value?: proto_r4_core_datatypes_pb.String): void;

  hasXpathUsage(): boolean;
  clearXpathUsage(): void;
  getXpathUsage(): SearchParameter.XpathUsageCode | undefined;
  setXpathUsage(value?: SearchParameter.XpathUsageCode): void;

  clearTarget(): void;
  getTarget(): Array<SearchParameter.TargetCode>;
  setTarget(value: Array<SearchParameter.TargetCode>): void;
  addTarget(value?: SearchParameter.TargetCode, index?: number): SearchParameter.TargetCode;

  hasMultipleOr(): boolean;
  clearMultipleOr(): void;
  getMultipleOr(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setMultipleOr(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasMultipleAnd(): boolean;
  clearMultipleAnd(): void;
  getMultipleAnd(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setMultipleAnd(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearComparator(): void;
  getComparator(): Array<SearchParameter.ComparatorCode>;
  setComparator(value: Array<SearchParameter.ComparatorCode>): void;
  addComparator(value?: SearchParameter.ComparatorCode, index?: number): SearchParameter.ComparatorCode;

  clearModifier(): void;
  getModifier(): Array<SearchParameter.ModifierCode>;
  setModifier(value: Array<SearchParameter.ModifierCode>): void;
  addModifier(value?: SearchParameter.ModifierCode, index?: number): SearchParameter.ModifierCode;

  clearChain(): void;
  getChain(): Array<proto_r4_core_datatypes_pb.String>;
  setChain(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addChain(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearComponent(): void;
  getComponent(): Array<SearchParameter.Component>;
  setComponent(value: Array<SearchParameter.Component>): void;
  addComponent(value?: SearchParameter.Component, index?: number): SearchParameter.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchParameter.AsObject;
  static toObject(includeInstance: boolean, msg: SearchParameter): SearchParameter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchParameter;
  static deserializeBinaryFromReader(message: SearchParameter, reader: jspb.BinaryReader): SearchParameter;
}

export namespace SearchParameter {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    derivedFrom?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    status?: SearchParameter.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    code?: proto_r4_core_datatypes_pb.Code.AsObject,
    base: Array<SearchParameter.BaseCode.AsObject>,
    type?: SearchParameter.TypeCode.AsObject,
    expression?: proto_r4_core_datatypes_pb.String.AsObject,
    xpath?: proto_r4_core_datatypes_pb.String.AsObject,
    xpathUsage?: SearchParameter.XpathUsageCode.AsObject,
    target: Array<SearchParameter.TargetCode.AsObject>,
    multipleOr?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    multipleAnd?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    comparator: Array<SearchParameter.ComparatorCode.AsObject>,
    modifier: Array<SearchParameter.ModifierCode.AsObject>,
    chain: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    component: Array<SearchParameter.Component.AsObject>,
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

  export class BaseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BaseCode.AsObject;
    static toObject(includeInstance: boolean, msg: BaseCode): BaseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BaseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BaseCode;
    static deserializeBinaryFromReader(message: BaseCode, reader: jspb.BinaryReader): BaseCode;
  }

  export namespace BaseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class XpathUsageCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap[keyof proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap[keyof proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XpathUsageCode.AsObject;
    static toObject(includeInstance: boolean, msg: XpathUsageCode): XpathUsageCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XpathUsageCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XpathUsageCode;
    static deserializeBinaryFromReader(message: XpathUsageCode, reader: jspb.BinaryReader): XpathUsageCode;
  }

  export namespace XpathUsageCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap[keyof proto_r4_core_codes_pb.XPathUsageTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class TargetCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetCode.AsObject;
    static toObject(includeInstance: boolean, msg: TargetCode): TargetCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetCode;
    static deserializeBinaryFromReader(message: TargetCode, reader: jspb.BinaryReader): TargetCode;
  }

  export namespace TargetCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ComparatorCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SearchComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.SearchComparatorCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SearchComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.SearchComparatorCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComparatorCode.AsObject;
    static toObject(includeInstance: boolean, msg: ComparatorCode): ComparatorCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComparatorCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComparatorCode;
    static deserializeBinaryFromReader(message: ComparatorCode, reader: jspb.BinaryReader): ComparatorCode;
  }

  export namespace ComparatorCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.SearchComparatorCode.ValueMap[keyof proto_r4_core_codes_pb.SearchComparatorCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ModifierCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SearchModifierCode.ValueMap[keyof proto_r4_core_codes_pb.SearchModifierCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SearchModifierCode.ValueMap[keyof proto_r4_core_codes_pb.SearchModifierCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ModifierCode.AsObject;
    static toObject(includeInstance: boolean, msg: ModifierCode): ModifierCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ModifierCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ModifierCode;
    static deserializeBinaryFromReader(message: ModifierCode, reader: jspb.BinaryReader): ModifierCode;
  }

  export namespace ModifierCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.SearchModifierCode.ValueMap[keyof proto_r4_core_codes_pb.SearchModifierCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Component extends jspb.Message {
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

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): proto_r4_core_datatypes_pb.String | undefined;
    setExpression(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      definition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      expression?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }
}

