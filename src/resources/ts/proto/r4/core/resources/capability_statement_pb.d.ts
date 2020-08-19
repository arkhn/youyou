// package: google.fhir.r4.core
// file: proto/r4/core/resources/capability_statement.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class CapabilityStatement extends jspb.Message {
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
  getStatus(): CapabilityStatement.StatusCode | undefined;
  setStatus(value?: CapabilityStatement.StatusCode): void;

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
  getKind(): CapabilityStatement.KindCode | undefined;
  setKind(value?: CapabilityStatement.KindCode): void;

  clearInstantiates(): void;
  getInstantiates(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiates(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiates(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearImports(): void;
  getImports(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setImports(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addImports(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasSoftware(): boolean;
  clearSoftware(): void;
  getSoftware(): CapabilityStatement.Software | undefined;
  setSoftware(value?: CapabilityStatement.Software): void;

  hasImplementation(): boolean;
  clearImplementation(): void;
  getImplementation(): CapabilityStatement.Implementation | undefined;
  setImplementation(value?: CapabilityStatement.Implementation): void;

  hasFhirVersion(): boolean;
  clearFhirVersion(): void;
  getFhirVersion(): CapabilityStatement.FhirVersionCode | undefined;
  setFhirVersion(value?: CapabilityStatement.FhirVersionCode): void;

  clearFormat(): void;
  getFormat(): Array<CapabilityStatement.FormatCode>;
  setFormat(value: Array<CapabilityStatement.FormatCode>): void;
  addFormat(value?: CapabilityStatement.FormatCode, index?: number): CapabilityStatement.FormatCode;

  clearPatchFormat(): void;
  getPatchFormat(): Array<CapabilityStatement.PatchFormatCode>;
  setPatchFormat(value: Array<CapabilityStatement.PatchFormatCode>): void;
  addPatchFormat(value?: CapabilityStatement.PatchFormatCode, index?: number): CapabilityStatement.PatchFormatCode;

  clearImplementationGuide(): void;
  getImplementationGuide(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setImplementationGuide(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addImplementationGuide(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearRest(): void;
  getRest(): Array<CapabilityStatement.Rest>;
  setRest(value: Array<CapabilityStatement.Rest>): void;
  addRest(value?: CapabilityStatement.Rest, index?: number): CapabilityStatement.Rest;

  clearMessaging(): void;
  getMessaging(): Array<CapabilityStatement.Messaging>;
  setMessaging(value: Array<CapabilityStatement.Messaging>): void;
  addMessaging(value?: CapabilityStatement.Messaging, index?: number): CapabilityStatement.Messaging;

  clearDocument(): void;
  getDocument(): Array<CapabilityStatement.Document>;
  setDocument(value: Array<CapabilityStatement.Document>): void;
  addDocument(value?: CapabilityStatement.Document, index?: number): CapabilityStatement.Document;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatement.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatement): CapabilityStatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatement;
  static deserializeBinaryFromReader(message: CapabilityStatement, reader: jspb.BinaryReader): CapabilityStatement;
}

export namespace CapabilityStatement {
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
    status?: CapabilityStatement.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    kind?: CapabilityStatement.KindCode.AsObject,
    instantiates: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    imports: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    software?: CapabilityStatement.Software.AsObject,
    implementation?: CapabilityStatement.Implementation.AsObject,
    fhirVersion?: CapabilityStatement.FhirVersionCode.AsObject,
    format: Array<CapabilityStatement.FormatCode.AsObject>,
    patchFormat: Array<CapabilityStatement.PatchFormatCode.AsObject>,
    implementationGuide: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    rest: Array<CapabilityStatement.Rest.AsObject>,
    messaging: Array<CapabilityStatement.Messaging.AsObject>,
    document: Array<CapabilityStatement.Document.AsObject>,
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

    hasReleaseDate(): boolean;
    clearReleaseDate(): void;
    getReleaseDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setReleaseDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

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
      releaseDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
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

    hasCustodian(): boolean;
    clearCustodian(): void;
    getCustodian(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCustodian(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      custodian?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class FhirVersionCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FhirVersionCode.AsObject;
    static toObject(includeInstance: boolean, msg: FhirVersionCode): FhirVersionCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FhirVersionCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FhirVersionCode;
    static deserializeBinaryFromReader(message: FhirVersionCode, reader: jspb.BinaryReader): FhirVersionCode;
  }

  export namespace FhirVersionCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class FormatCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FormatCode.AsObject;
    static toObject(includeInstance: boolean, msg: FormatCode): FormatCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FormatCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FormatCode;
    static deserializeBinaryFromReader(message: FormatCode, reader: jspb.BinaryReader): FormatCode;
  }

  export namespace FormatCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      value: string,
    }
  }

  export class PatchFormatCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    getValue(): string;
    setValue(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PatchFormatCode.AsObject;
    static toObject(includeInstance: boolean, msg: PatchFormatCode): PatchFormatCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PatchFormatCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PatchFormatCode;
    static deserializeBinaryFromReader(message: PatchFormatCode, reader: jspb.BinaryReader): PatchFormatCode;
  }

  export namespace PatchFormatCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      value: string,
    }
  }

  export class Rest extends jspb.Message {
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

    hasMode(): boolean;
    clearMode(): void;
    getMode(): CapabilityStatement.Rest.ModeCode | undefined;
    setMode(value?: CapabilityStatement.Rest.ModeCode): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

    hasSecurity(): boolean;
    clearSecurity(): void;
    getSecurity(): CapabilityStatement.Rest.Security | undefined;
    setSecurity(value?: CapabilityStatement.Rest.Security): void;

    clearResource(): void;
    getResource(): Array<CapabilityStatement.Rest.Resource>;
    setResource(value: Array<CapabilityStatement.Rest.Resource>): void;
    addResource(value?: CapabilityStatement.Rest.Resource, index?: number): CapabilityStatement.Rest.Resource;

    clearInteraction(): void;
    getInteraction(): Array<CapabilityStatement.Rest.SystemInteraction>;
    setInteraction(value: Array<CapabilityStatement.Rest.SystemInteraction>): void;
    addInteraction(value?: CapabilityStatement.Rest.SystemInteraction, index?: number): CapabilityStatement.Rest.SystemInteraction;

    clearSearchParam(): void;
    getSearchParam(): Array<CapabilityStatement.Rest.Resource.SearchParam>;
    setSearchParam(value: Array<CapabilityStatement.Rest.Resource.SearchParam>): void;
    addSearchParam(value?: CapabilityStatement.Rest.Resource.SearchParam, index?: number): CapabilityStatement.Rest.Resource.SearchParam;

    clearOperation(): void;
    getOperation(): Array<CapabilityStatement.Rest.Resource.Operation>;
    setOperation(value: Array<CapabilityStatement.Rest.Resource.Operation>): void;
    addOperation(value?: CapabilityStatement.Rest.Resource.Operation, index?: number): CapabilityStatement.Rest.Resource.Operation;

    clearCompartment(): void;
    getCompartment(): Array<proto_r4_core_datatypes_pb.Canonical>;
    setCompartment(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
    addCompartment(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rest.AsObject;
    static toObject(includeInstance: boolean, msg: Rest): Rest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rest;
    static deserializeBinaryFromReader(message: Rest, reader: jspb.BinaryReader): Rest;
  }

  export namespace Rest {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      mode?: CapabilityStatement.Rest.ModeCode.AsObject,
      documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      security?: CapabilityStatement.Rest.Security.AsObject,
      resource: Array<CapabilityStatement.Rest.Resource.AsObject>,
      interaction: Array<CapabilityStatement.Rest.SystemInteraction.AsObject>,
      searchParam: Array<CapabilityStatement.Rest.Resource.SearchParam.AsObject>,
      operation: Array<CapabilityStatement.Rest.Resource.Operation.AsObject>,
      compartment: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    }

    export class ModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ModeCode.AsObject;
      static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ModeCode;
      static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
    }

    export namespace ModeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.RestfulCapabilityModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Security extends jspb.Message {
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

      hasCors(): boolean;
      clearCors(): void;
      getCors(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setCors(value?: proto_r4_core_datatypes_pb.Boolean): void;

      clearService(): void;
      getService(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setService(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addService(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Security.AsObject;
      static toObject(includeInstance: boolean, msg: Security): Security.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Security, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Security;
      static deserializeBinaryFromReader(message: Security, reader: jspb.BinaryReader): Security;
    }

    export namespace Security {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        cors?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        service: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      }
    }

    export class Resource extends jspb.Message {
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
      getType(): CapabilityStatement.Rest.Resource.TypeCode | undefined;
      setType(value?: CapabilityStatement.Rest.Resource.TypeCode): void;

      hasProfile(): boolean;
      clearProfile(): void;
      getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

      clearSupportedProfile(): void;
      getSupportedProfile(): Array<proto_r4_core_datatypes_pb.Canonical>;
      setSupportedProfile(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
      addSupportedProfile(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

      hasDocumentation(): boolean;
      clearDocumentation(): void;
      getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

      clearInteraction(): void;
      getInteraction(): Array<CapabilityStatement.Rest.Resource.ResourceInteraction>;
      setInteraction(value: Array<CapabilityStatement.Rest.Resource.ResourceInteraction>): void;
      addInteraction(value?: CapabilityStatement.Rest.Resource.ResourceInteraction, index?: number): CapabilityStatement.Rest.Resource.ResourceInteraction;

      hasVersioning(): boolean;
      clearVersioning(): void;
      getVersioning(): CapabilityStatement.Rest.Resource.VersioningCode | undefined;
      setVersioning(value?: CapabilityStatement.Rest.Resource.VersioningCode): void;

      hasReadHistory(): boolean;
      clearReadHistory(): void;
      getReadHistory(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setReadHistory(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasUpdateCreate(): boolean;
      clearUpdateCreate(): void;
      getUpdateCreate(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setUpdateCreate(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasConditionalCreate(): boolean;
      clearConditionalCreate(): void;
      getConditionalCreate(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setConditionalCreate(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasConditionalRead(): boolean;
      clearConditionalRead(): void;
      getConditionalRead(): CapabilityStatement.Rest.Resource.ConditionalReadCode | undefined;
      setConditionalRead(value?: CapabilityStatement.Rest.Resource.ConditionalReadCode): void;

      hasConditionalUpdate(): boolean;
      clearConditionalUpdate(): void;
      getConditionalUpdate(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setConditionalUpdate(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasConditionalDelete(): boolean;
      clearConditionalDelete(): void;
      getConditionalDelete(): CapabilityStatement.Rest.Resource.ConditionalDeleteCode | undefined;
      setConditionalDelete(value?: CapabilityStatement.Rest.Resource.ConditionalDeleteCode): void;

      clearReferencePolicy(): void;
      getReferencePolicy(): Array<CapabilityStatement.Rest.Resource.ReferencePolicyCode>;
      setReferencePolicy(value: Array<CapabilityStatement.Rest.Resource.ReferencePolicyCode>): void;
      addReferencePolicy(value?: CapabilityStatement.Rest.Resource.ReferencePolicyCode, index?: number): CapabilityStatement.Rest.Resource.ReferencePolicyCode;

      clearSearchInclude(): void;
      getSearchInclude(): Array<proto_r4_core_datatypes_pb.String>;
      setSearchInclude(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addSearchInclude(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearSearchRevInclude(): void;
      getSearchRevInclude(): Array<proto_r4_core_datatypes_pb.String>;
      setSearchRevInclude(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addSearchRevInclude(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearSearchParam(): void;
      getSearchParam(): Array<CapabilityStatement.Rest.Resource.SearchParam>;
      setSearchParam(value: Array<CapabilityStatement.Rest.Resource.SearchParam>): void;
      addSearchParam(value?: CapabilityStatement.Rest.Resource.SearchParam, index?: number): CapabilityStatement.Rest.Resource.SearchParam;

      clearOperation(): void;
      getOperation(): Array<CapabilityStatement.Rest.Resource.Operation>;
      setOperation(value: Array<CapabilityStatement.Rest.Resource.Operation>): void;
      addOperation(value?: CapabilityStatement.Rest.Resource.Operation, index?: number): CapabilityStatement.Rest.Resource.Operation;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Resource.AsObject;
      static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Resource;
      static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
    }

    export namespace Resource {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: CapabilityStatement.Rest.Resource.TypeCode.AsObject,
        profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        supportedProfile: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
        documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        interaction: Array<CapabilityStatement.Rest.Resource.ResourceInteraction.AsObject>,
        versioning?: CapabilityStatement.Rest.Resource.VersioningCode.AsObject,
        readHistory?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        updateCreate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        conditionalCreate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        conditionalRead?: CapabilityStatement.Rest.Resource.ConditionalReadCode.AsObject,
        conditionalUpdate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        conditionalDelete?: CapabilityStatement.Rest.Resource.ConditionalDeleteCode.AsObject,
        referencePolicy: Array<CapabilityStatement.Rest.Resource.ReferencePolicyCode.AsObject>,
        searchInclude: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        searchRevInclude: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        searchParam: Array<CapabilityStatement.Rest.Resource.SearchParam.AsObject>,
        operation: Array<CapabilityStatement.Rest.Resource.Operation.AsObject>,
      }

      export class TypeCode extends jspb.Message {
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
          value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ResourceInteraction extends jspb.Message {
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
        getCode(): CapabilityStatement.Rest.Resource.ResourceInteraction.CodeType | undefined;
        setCode(value?: CapabilityStatement.Rest.Resource.ResourceInteraction.CodeType): void;

        hasDocumentation(): boolean;
        clearDocumentation(): void;
        getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ResourceInteraction.AsObject;
        static toObject(includeInstance: boolean, msg: ResourceInteraction): ResourceInteraction.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ResourceInteraction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ResourceInteraction;
        static deserializeBinaryFromReader(message: ResourceInteraction, reader: jspb.BinaryReader): ResourceInteraction;
      }

      export namespace ResourceInteraction {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          code?: CapabilityStatement.Rest.Resource.ResourceInteraction.CodeType.AsObject,
          documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        }

        export class CodeType extends jspb.Message {
          getValue(): proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap];
          setValue(value: proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
            value: proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TypeRestfulInteractionValueSet.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
      }

      export class VersioningCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): VersioningCode.AsObject;
        static toObject(includeInstance: boolean, msg: VersioningCode): VersioningCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: VersioningCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): VersioningCode;
        static deserializeBinaryFromReader(message: VersioningCode, reader: jspb.BinaryReader): VersioningCode;
      }

      export namespace VersioningCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceVersionPolicyCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ConditionalReadCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConditionalReadCode.AsObject;
        static toObject(includeInstance: boolean, msg: ConditionalReadCode): ConditionalReadCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConditionalReadCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConditionalReadCode;
        static deserializeBinaryFromReader(message: ConditionalReadCode, reader: jspb.BinaryReader): ConditionalReadCode;
      }

      export namespace ConditionalReadCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalReadStatusCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ConditionalDeleteCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConditionalDeleteCode.AsObject;
        static toObject(includeInstance: boolean, msg: ConditionalDeleteCode): ConditionalDeleteCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConditionalDeleteCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConditionalDeleteCode;
        static deserializeBinaryFromReader(message: ConditionalDeleteCode, reader: jspb.BinaryReader): ConditionalDeleteCode;
      }

      export namespace ConditionalDeleteCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ConditionalDeleteStatusCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ReferencePolicyCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ReferencePolicyCode.AsObject;
        static toObject(includeInstance: boolean, msg: ReferencePolicyCode): ReferencePolicyCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ReferencePolicyCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ReferencePolicyCode;
        static deserializeBinaryFromReader(message: ReferencePolicyCode, reader: jspb.BinaryReader): ReferencePolicyCode;
      }

      export namespace ReferencePolicyCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap[keyof proto_r4_core_codes_pb.ReferenceHandlingPolicyCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class SearchParam extends jspb.Message {
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

        hasDefinition(): boolean;
        clearDefinition(): void;
        getDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
        setDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

        hasType(): boolean;
        clearType(): void;
        getType(): CapabilityStatement.Rest.Resource.SearchParam.TypeCode | undefined;
        setType(value?: CapabilityStatement.Rest.Resource.SearchParam.TypeCode): void;

        hasDocumentation(): boolean;
        clearDocumentation(): void;
        getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SearchParam.AsObject;
        static toObject(includeInstance: boolean, msg: SearchParam): SearchParam.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SearchParam, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SearchParam;
        static deserializeBinaryFromReader(message: SearchParam, reader: jspb.BinaryReader): SearchParam;
      }

      export namespace SearchParam {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          name?: proto_r4_core_datatypes_pb.String.AsObject,
          definition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
          type?: CapabilityStatement.Rest.Resource.SearchParam.TypeCode.AsObject,
          documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
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
      }

      export class Operation extends jspb.Message {
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

        hasDefinition(): boolean;
        clearDefinition(): void;
        getDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
        setDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

        hasDocumentation(): boolean;
        clearDocumentation(): void;
        getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Operation.AsObject;
        static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Operation;
        static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
      }

      export namespace Operation {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          name?: proto_r4_core_datatypes_pb.String.AsObject,
          definition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
          documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        }
      }
    }

    export class SystemInteraction extends jspb.Message {
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
      getCode(): CapabilityStatement.Rest.SystemInteraction.CodeType | undefined;
      setCode(value?: CapabilityStatement.Rest.SystemInteraction.CodeType): void;

      hasDocumentation(): boolean;
      clearDocumentation(): void;
      getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SystemInteraction.AsObject;
      static toObject(includeInstance: boolean, msg: SystemInteraction): SystemInteraction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SystemInteraction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SystemInteraction;
      static deserializeBinaryFromReader(message: SystemInteraction, reader: jspb.BinaryReader): SystemInteraction;
    }

    export namespace SystemInteraction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: CapabilityStatement.Rest.SystemInteraction.CodeType.AsObject,
        documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      }

      export class CodeType extends jspb.Message {
        getValue(): proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap];
        setValue(value: proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

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
          value: proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.SystemRestfulInteractionValueSet.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }

  export class Messaging extends jspb.Message {
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

    clearEndpoint(): void;
    getEndpoint(): Array<CapabilityStatement.Messaging.Endpoint>;
    setEndpoint(value: Array<CapabilityStatement.Messaging.Endpoint>): void;
    addEndpoint(value?: CapabilityStatement.Messaging.Endpoint, index?: number): CapabilityStatement.Messaging.Endpoint;

    hasReliableCache(): boolean;
    clearReliableCache(): void;
    getReliableCache(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setReliableCache(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

    clearSupportedMessage(): void;
    getSupportedMessage(): Array<CapabilityStatement.Messaging.SupportedMessage>;
    setSupportedMessage(value: Array<CapabilityStatement.Messaging.SupportedMessage>): void;
    addSupportedMessage(value?: CapabilityStatement.Messaging.SupportedMessage, index?: number): CapabilityStatement.Messaging.SupportedMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Messaging.AsObject;
    static toObject(includeInstance: boolean, msg: Messaging): Messaging.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Messaging, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Messaging;
    static deserializeBinaryFromReader(message: Messaging, reader: jspb.BinaryReader): Messaging;
  }

  export namespace Messaging {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      endpoint: Array<CapabilityStatement.Messaging.Endpoint.AsObject>,
      reliableCache?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      supportedMessage: Array<CapabilityStatement.Messaging.SupportedMessage.AsObject>,
    }

    export class Endpoint extends jspb.Message {
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

      hasProtocol(): boolean;
      clearProtocol(): void;
      getProtocol(): proto_r4_core_datatypes_pb.Coding | undefined;
      setProtocol(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Url | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Url): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Endpoint.AsObject;
      static toObject(includeInstance: boolean, msg: Endpoint): Endpoint.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Endpoint, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Endpoint;
      static deserializeBinaryFromReader(message: Endpoint, reader: jspb.BinaryReader): Endpoint;
    }

    export namespace Endpoint {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        protocol?: proto_r4_core_datatypes_pb.Coding.AsObject,
        address?: proto_r4_core_datatypes_pb.Url.AsObject,
      }
    }

    export class SupportedMessage extends jspb.Message {
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

      hasMode(): boolean;
      clearMode(): void;
      getMode(): CapabilityStatement.Messaging.SupportedMessage.ModeCode | undefined;
      setMode(value?: CapabilityStatement.Messaging.SupportedMessage.ModeCode): void;

      hasDefinition(): boolean;
      clearDefinition(): void;
      getDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SupportedMessage.AsObject;
      static toObject(includeInstance: boolean, msg: SupportedMessage): SupportedMessage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SupportedMessage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SupportedMessage;
      static deserializeBinaryFromReader(message: SupportedMessage, reader: jspb.BinaryReader): SupportedMessage;
    }

    export namespace SupportedMessage {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        mode?: CapabilityStatement.Messaging.SupportedMessage.ModeCode.AsObject,
        definition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      }

      export class ModeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ModeCode.AsObject;
        static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ModeCode;
        static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
      }

      export namespace ModeCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap[keyof proto_r4_core_codes_pb.EventCapabilityModeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }

  export class Document extends jspb.Message {
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

    hasMode(): boolean;
    clearMode(): void;
    getMode(): CapabilityStatement.Document.ModeCode | undefined;
    setMode(value?: CapabilityStatement.Document.ModeCode): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.Markdown): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Document.AsObject;
    static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Document;
    static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
  }

  export namespace Document {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      mode?: CapabilityStatement.Document.ModeCode.AsObject,
      documentation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export class ModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DocumentModeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DocumentModeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ModeCode.AsObject;
      static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ModeCode;
      static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
    }

    export namespace ModeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DocumentModeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

