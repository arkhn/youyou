// package: google.fhir.r4.core
// file: proto/r4/core/resources/code_system.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class CodeSystem extends jspb.Message {
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

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CodeSystem.StatusCode | undefined;
  setStatus(value?: CodeSystem.StatusCode): void;

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

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearUseContextList(): void;
  getUseContextList(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContextList(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdictionList(): void;
  getJurisdictionList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdictionList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasCaseSensitive(): boolean;
  clearCaseSensitive(): void;
  getCaseSensitive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setCaseSensitive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasValueSet(): boolean;
  clearValueSet(): void;
  getValueSet(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setValueSet(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasHierarchyMeaning(): boolean;
  clearHierarchyMeaning(): void;
  getHierarchyMeaning(): CodeSystem.HierarchyMeaningCode | undefined;
  setHierarchyMeaning(value?: CodeSystem.HierarchyMeaningCode): void;

  hasCompositional(): boolean;
  clearCompositional(): void;
  getCompositional(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setCompositional(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasVersionNeeded(): boolean;
  clearVersionNeeded(): void;
  getVersionNeeded(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setVersionNeeded(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): CodeSystem.ContentCode | undefined;
  setContent(value?: CodeSystem.ContentCode): void;

  hasSupplements(): boolean;
  clearSupplements(): void;
  getSupplements(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setSupplements(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setCount(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  clearFilterList(): void;
  getFilterList(): Array<CodeSystem.Filter>;
  setFilterList(value: Array<CodeSystem.Filter>): void;
  addFilter(value?: CodeSystem.Filter, index?: number): CodeSystem.Filter;

  clearPropertyList(): void;
  getPropertyList(): Array<CodeSystem.Property>;
  setPropertyList(value: Array<CodeSystem.Property>): void;
  addProperty(value?: CodeSystem.Property, index?: number): CodeSystem.Property;

  clearConceptList(): void;
  getConceptList(): Array<CodeSystem.ConceptDefinition>;
  setConceptList(value: Array<CodeSystem.ConceptDefinition>): void;
  addConcept(value?: CodeSystem.ConceptDefinition, index?: number): CodeSystem.ConceptDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystem): CodeSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystem;
  static deserializeBinaryFromReader(message: CodeSystem, reader: jspb.BinaryReader): CodeSystem;
}

export namespace CodeSystem {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: CodeSystem.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdictionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    caseSensitive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    valueSet?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    hierarchyMeaning?: CodeSystem.HierarchyMeaningCode.AsObject,
    compositional?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    versionNeeded?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    content?: CodeSystem.ContentCode.AsObject,
    supplements?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    count?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    filterList: Array<CodeSystem.Filter.AsObject>,
    propertyList: Array<CodeSystem.Property.AsObject>,
    conceptList: Array<CodeSystem.ConceptDefinition.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class HierarchyMeaningCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HierarchyMeaningCode.AsObject;
    static toObject(includeInstance: boolean, msg: HierarchyMeaningCode): HierarchyMeaningCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HierarchyMeaningCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HierarchyMeaningCode;
    static deserializeBinaryFromReader(message: HierarchyMeaningCode, reader: jspb.BinaryReader): HierarchyMeaningCode;
  }

  export namespace HierarchyMeaningCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemHierarchyMeaningCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ContentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentCode.AsObject;
    static toObject(includeInstance: boolean, msg: ContentCode): ContentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentCode;
    static deserializeBinaryFromReader(message: ContentCode, reader: jspb.BinaryReader): ContentCode;
  }

  export namespace ContentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSystemContentModeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Filter extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.Code | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.Code): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearOperatorList(): void;
    getOperatorList(): Array<CodeSystem.Filter.OperatorCode>;
    setOperatorList(value: Array<CodeSystem.Filter.OperatorCode>): void;
    addOperator(value?: CodeSystem.Filter.OperatorCode, index?: number): CodeSystem.Filter.OperatorCode;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.Code.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      operatorList: Array<CodeSystem.Filter.OperatorCode.AsObject>,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class OperatorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OperatorCode.AsObject;
      static toObject(includeInstance: boolean, msg: OperatorCode): OperatorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OperatorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OperatorCode;
      static deserializeBinaryFromReader(message: OperatorCode, reader: jspb.BinaryReader): OperatorCode;
    }

    export namespace OperatorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Property extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.Code | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.Code): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): CodeSystem.Property.TypeCode | undefined;
    setType(value?: CodeSystem.Property.TypeCode): void;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.Code.AsObject,
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: CodeSystem.Property.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.PropertyTypeCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.PropertyTypeCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.PropertyTypeCode.ValueMap[keyof proto_r4_core_codes_pb.PropertyTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class ConceptDefinition extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.Code | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.Code): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): proto_r4_core_datatypes_pb.String | undefined;
    setDefinition(value?: proto_r4_core_datatypes_pb.String): void;

    clearDesignationList(): void;
    getDesignationList(): Array<CodeSystem.ConceptDefinition.Designation>;
    setDesignationList(value: Array<CodeSystem.ConceptDefinition.Designation>): void;
    addDesignation(value?: CodeSystem.ConceptDefinition.Designation, index?: number): CodeSystem.ConceptDefinition.Designation;

    clearPropertyList(): void;
    getPropertyList(): Array<CodeSystem.ConceptDefinition.ConceptProperty>;
    setPropertyList(value: Array<CodeSystem.ConceptDefinition.ConceptProperty>): void;
    addProperty(value?: CodeSystem.ConceptDefinition.ConceptProperty, index?: number): CodeSystem.ConceptDefinition.ConceptProperty;

    clearConceptList(): void;
    getConceptList(): Array<CodeSystem.ConceptDefinition>;
    setConceptList(value: Array<CodeSystem.ConceptDefinition>): void;
    addConcept(value?: CodeSystem.ConceptDefinition, index?: number): CodeSystem.ConceptDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptDefinition): ConceptDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptDefinition;
    static deserializeBinaryFromReader(message: ConceptDefinition, reader: jspb.BinaryReader): ConceptDefinition;
  }

  export namespace ConceptDefinition {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.Code.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
      definition?: proto_r4_core_datatypes_pb.String.AsObject,
      designationList: Array<CodeSystem.ConceptDefinition.Designation.AsObject>,
      propertyList: Array<CodeSystem.ConceptDefinition.ConceptProperty.AsObject>,
      conceptList: Array<CodeSystem.ConceptDefinition.AsObject>,
    }

    export class Designation extends jspb.Message {
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

      hasLanguage(): boolean;
      clearLanguage(): void;
      getLanguage(): proto_r4_core_datatypes_pb.Code | undefined;
      setLanguage(value?: proto_r4_core_datatypes_pb.Code): void;

      hasUse(): boolean;
      clearUse(): void;
      getUse(): proto_r4_core_datatypes_pb.Coding | undefined;
      setUse(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): proto_r4_core_datatypes_pb.String | undefined;
      setValue(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Designation.AsObject;
      static toObject(includeInstance: boolean, msg: Designation): Designation.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Designation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Designation;
      static deserializeBinaryFromReader(message: Designation, reader: jspb.BinaryReader): Designation;
    }

    export namespace Designation {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        language?: proto_r4_core_datatypes_pb.Code.AsObject,
        use?: proto_r4_core_datatypes_pb.Coding.AsObject,
        value?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }

    export class ConceptProperty extends jspb.Message {
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

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): CodeSystem.ConceptDefinition.ConceptProperty.ValueX | undefined;
      setValue(value?: CodeSystem.ConceptDefinition.ConceptProperty.ValueX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConceptProperty.AsObject;
      static toObject(includeInstance: boolean, msg: ConceptProperty): ConceptProperty.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConceptProperty, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConceptProperty;
      static deserializeBinaryFromReader(message: ConceptProperty, reader: jspb.BinaryReader): ConceptProperty;
    }

    export namespace ConceptProperty {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        value?: CodeSystem.ConceptDefinition.ConceptProperty.ValueX.AsObject,
      }

      export class ValueX extends jspb.Message {
        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_r4_core_datatypes_pb.Code | undefined;
        setCode(value?: proto_r4_core_datatypes_pb.Code): void;

        hasCoding(): boolean;
        clearCoding(): void;
        getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
        setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        hasInteger(): boolean;
        clearInteger(): void;
        getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
        setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasDateTime(): boolean;
        clearDateTime(): void;
        getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
        setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

        hasDecimal(): boolean;
        clearDecimal(): void;
        getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
        setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

        getChoiceCase(): ValueX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ValueX.AsObject;
        static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ValueX;
        static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
      }

      export namespace ValueX {
        export type AsObject = {
          code?: proto_r4_core_datatypes_pb.Code.AsObject,
          coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
          integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
          pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
          decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          CODE = 1,
          CODING = 2,
          STRING_VALUE = 3,
          INTEGER = 4,
          BOOLEAN = 5,
          DATE_TIME = 6,
          DECIMAL = 7,
        }
      }
    }
  }
}

