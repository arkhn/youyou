// package: google.fhir.r4.core
// file: proto/r4/core/resources/terminology_capabilities.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class TerminologyCapabilities extends jspb.Message {
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

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): TerminologyCapabilities.StatusCode | undefined;
  setStatus(value?: TerminologyCapabilities.StatusCode): void;

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

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): TerminologyCapabilities.KindCode | undefined;
  setKind(value?: TerminologyCapabilities.KindCode): void;

  hasSoftware(): boolean;
  clearSoftware(): void;
  getSoftware(): TerminologyCapabilities.Software | undefined;
  setSoftware(value?: TerminologyCapabilities.Software): void;

  hasImplementation(): boolean;
  clearImplementation(): void;
  getImplementation(): TerminologyCapabilities.Implementation | undefined;
  setImplementation(value?: TerminologyCapabilities.Implementation): void;

  hasLockedDate(): boolean;
  clearLockedDate(): void;
  getLockedDate(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setLockedDate(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearCodeSystem(): void;
  getCodeSystem(): Array<TerminologyCapabilities.CodeSystem>;
  setCodeSystem(value: Array<TerminologyCapabilities.CodeSystem>): void;
  addCodeSystem(value?: TerminologyCapabilities.CodeSystem, index?: number): TerminologyCapabilities.CodeSystem;

  hasExpansion(): boolean;
  clearExpansion(): void;
  getExpansion(): TerminologyCapabilities.Expansion | undefined;
  setExpansion(value?: TerminologyCapabilities.Expansion): void;

  hasCodeSearch(): boolean;
  clearCodeSearch(): void;
  getCodeSearch(): TerminologyCapabilities.CodeSearchCode | undefined;
  setCodeSearch(value?: TerminologyCapabilities.CodeSearchCode): void;

  hasValidateCode(): boolean;
  clearValidateCode(): void;
  getValidateCode(): TerminologyCapabilities.ValidateCode | undefined;
  setValidateCode(value?: TerminologyCapabilities.ValidateCode): void;

  hasTranslation(): boolean;
  clearTranslation(): void;
  getTranslation(): TerminologyCapabilities.Translation | undefined;
  setTranslation(value?: TerminologyCapabilities.Translation): void;

  hasClosure(): boolean;
  clearClosure(): void;
  getClosure(): TerminologyCapabilities.Closure | undefined;
  setClosure(value?: TerminologyCapabilities.Closure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TerminologyCapabilities.AsObject;
  static toObject(includeInstance: boolean, msg: TerminologyCapabilities): TerminologyCapabilities.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TerminologyCapabilities, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TerminologyCapabilities;
  static deserializeBinaryFromReader(message: TerminologyCapabilities, reader: jspb.BinaryReader): TerminologyCapabilities;
}

export namespace TerminologyCapabilities {
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
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: TerminologyCapabilities.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    kind?: TerminologyCapabilities.KindCode.AsObject,
    software?: TerminologyCapabilities.Software.AsObject,
    implementation?: TerminologyCapabilities.Implementation.AsObject,
    lockedDate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    codeSystem: Array<TerminologyCapabilities.CodeSystem.AsObject>,
    expansion?: TerminologyCapabilities.Expansion.AsObject,
    codeSearch?: TerminologyCapabilities.CodeSearchCode.AsObject,
    validateCode?: TerminologyCapabilities.ValidateCode.AsObject,
    translation?: TerminologyCapabilities.Translation.AsObject,
    closure?: TerminologyCapabilities.Closure.AsObject,
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

  export class KindCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap[keyof proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap[keyof proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): KindCode.AsObject;
    static toObject(includeInstance: boolean, msg: KindCode): KindCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: KindCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): KindCode;
    static deserializeBinaryFromReader(message: KindCode, reader: jspb.BinaryReader): KindCode;
  }

  export namespace KindCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap[keyof proto_r4_core_codes_pb.CapabilityStatementKindCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Software extends jspb.Message {
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

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Software.AsObject;
    static toObject(includeInstance: boolean, msg: Software): Software.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Software, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Software;
    static deserializeBinaryFromReader(message: Software, reader: jspb.BinaryReader): Software;
  }

  export namespace Software {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Implementation extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
    setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Implementation.AsObject;
    static toObject(includeInstance: boolean, msg: Implementation): Implementation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Implementation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Implementation;
    static deserializeBinaryFromReader(message: Implementation, reader: jspb.BinaryReader): Implementation;
  }

  export namespace Implementation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      url?: proto_r4_core_datatypes_pb.Url.AsObject,
    }
  }

  export class CodeSystem extends jspb.Message {
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

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Canonical): void;

    clearVersion(): void;
    getVersion(): Array<TerminologyCapabilities.CodeSystem.Version>;
    setVersion(value: Array<TerminologyCapabilities.CodeSystem.Version>): void;
    addVersion(value?: TerminologyCapabilities.CodeSystem.Version, index?: number): TerminologyCapabilities.CodeSystem.Version;

    hasSubsumption(): boolean;
    clearSubsumption(): void;
    getSubsumption(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setSubsumption(value?: proto_r4_core_datatypes_pb.Boolean): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      uri?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      version: Array<TerminologyCapabilities.CodeSystem.Version.AsObject>,
      subsumption?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export class Version extends jspb.Message {
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
      getCode(): proto_r4_core_datatypes_pb.String | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.String): void;

      hasIsDefault(): boolean;
      clearIsDefault(): void;
      getIsDefault(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setIsDefault(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCompositional(): boolean;
      clearCompositional(): void;
      getCompositional(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setCompositional(value?: proto_r4_core_datatypes_pb.Boolean): void;

      clearLanguage(): void;
      getLanguage(): Array<proto_r4_core_datatypes_pb.Code>;
      setLanguage(value: Array<proto_r4_core_datatypes_pb.Code>): void;
      addLanguage(value?: proto_r4_core_datatypes_pb.Code, index?: number): proto_r4_core_datatypes_pb.Code;

      clearFilter(): void;
      getFilter(): Array<TerminologyCapabilities.CodeSystem.Version.Filter>;
      setFilter(value: Array<TerminologyCapabilities.CodeSystem.Version.Filter>): void;
      addFilter(value?: TerminologyCapabilities.CodeSystem.Version.Filter, index?: number): TerminologyCapabilities.CodeSystem.Version.Filter;

      clearProperty(): void;
      getProperty(): Array<proto_r4_core_datatypes_pb.Code>;
      setProperty(value: Array<proto_r4_core_datatypes_pb.Code>): void;
      addProperty(value?: proto_r4_core_datatypes_pb.Code, index?: number): proto_r4_core_datatypes_pb.Code;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Version.AsObject;
      static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Version;
      static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
    }

    export namespace Version {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.String.AsObject,
        isDefault?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        compositional?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        language: Array<proto_r4_core_datatypes_pb.Code.AsObject>,
        filter: Array<TerminologyCapabilities.CodeSystem.Version.Filter.AsObject>,
        property: Array<proto_r4_core_datatypes_pb.Code.AsObject>,
      }

      export class Filter extends jspb.Message {
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
        getCode(): proto_r4_core_datatypes_pb.Code | undefined;
        setCode(value?: proto_r4_core_datatypes_pb.Code): void;

        clearOp(): void;
        getOp(): Array<proto_r4_core_datatypes_pb.Code>;
        setOp(value: Array<proto_r4_core_datatypes_pb.Code>): void;
        addOp(value?: proto_r4_core_datatypes_pb.Code, index?: number): proto_r4_core_datatypes_pb.Code;

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
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          code?: proto_r4_core_datatypes_pb.Code.AsObject,
          op: Array<proto_r4_core_datatypes_pb.Code.AsObject>,
        }
      }
    }
  }

  export class Expansion extends jspb.Message {
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

    hasHierarchical(): boolean;
    clearHierarchical(): void;
    getHierarchical(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setHierarchical(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasPaging(): boolean;
    clearPaging(): void;
    getPaging(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPaging(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasIncomplete(): boolean;
    clearIncomplete(): void;
    getIncomplete(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIncomplete(value?: proto_r4_core_datatypes_pb.Boolean): void;

    clearParameter(): void;
    getParameter(): Array<TerminologyCapabilities.Expansion.Parameter>;
    setParameter(value: Array<TerminologyCapabilities.Expansion.Parameter>): void;
    addParameter(value?: TerminologyCapabilities.Expansion.Parameter, index?: number): TerminologyCapabilities.Expansion.Parameter;

    hasTextFilter(): boolean;
    clearTextFilter(): void;
    getTextFilter(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setTextFilter(value?: proto_r4_core_datatypes_pb.Markdown): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Expansion.AsObject;
    static toObject(includeInstance: boolean, msg: Expansion): Expansion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Expansion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Expansion;
    static deserializeBinaryFromReader(message: Expansion, reader: jspb.BinaryReader): Expansion;
  }

  export namespace Expansion {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      hierarchical?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      paging?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      incomplete?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      parameter: Array<TerminologyCapabilities.Expansion.Parameter.AsObject>,
      textFilter?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }

    export class Parameter extends jspb.Message {
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
      getName(): proto_r4_core_datatypes_pb.Code | undefined;
      setName(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDocumentation(): boolean;
      clearDocumentation(): void;
      getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
      setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Parameter.AsObject;
      static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Parameter;
      static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
    }

    export namespace Parameter {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: proto_r4_core_datatypes_pb.Code.AsObject,
        documentation?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }

  export class CodeSearchCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeSearchCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeSearchCode): CodeSearchCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeSearchCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeSearchCode;
    static deserializeBinaryFromReader(message: CodeSearchCode, reader: jspb.BinaryReader): CodeSearchCode;
  }

  export namespace CodeSearchCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap[keyof proto_r4_core_codes_pb.CodeSearchSupportCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ValidateCode extends jspb.Message {
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

    hasTranslations(): boolean;
    clearTranslations(): void;
    getTranslations(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setTranslations(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateCode): ValidateCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateCode;
    static deserializeBinaryFromReader(message: ValidateCode, reader: jspb.BinaryReader): ValidateCode;
  }

  export namespace ValidateCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      translations?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }

  export class Translation extends jspb.Message {
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

    hasNeedsMap(): boolean;
    clearNeedsMap(): void;
    getNeedsMap(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setNeedsMap(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Translation.AsObject;
    static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Translation;
    static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
  }

  export namespace Translation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      needsMap?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }

  export class Closure extends jspb.Message {
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

    hasTranslation(): boolean;
    clearTranslation(): void;
    getTranslation(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setTranslation(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Closure.AsObject;
    static toObject(includeInstance: boolean, msg: Closure): Closure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Closure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Closure;
    static deserializeBinaryFromReader(message: Closure, reader: jspb.BinaryReader): Closure;
  }

  export namespace Closure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      translation?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }
}

