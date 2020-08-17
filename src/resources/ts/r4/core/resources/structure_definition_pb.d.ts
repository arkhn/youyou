// package: google.fhir.r4.core
// file: proto/r4/core/resources/structure_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class StructureDefinition extends jspb.Message {
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
  getStatus(): StructureDefinition.StatusCode | undefined;
  setStatus(value?: StructureDefinition.StatusCode): void;

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

  clearKeywordList(): void;
  getKeywordList(): Array<proto_r4_core_datatypes_pb.Coding>;
  setKeywordList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addKeyword(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  hasFhirVersion(): boolean;
  clearFhirVersion(): void;
  getFhirVersion(): StructureDefinition.FhirVersionCode | undefined;
  setFhirVersion(value?: StructureDefinition.FhirVersionCode): void;

  clearMappingList(): void;
  getMappingList(): Array<StructureDefinition.Mapping>;
  setMappingList(value: Array<StructureDefinition.Mapping>): void;
  addMapping(value?: StructureDefinition.Mapping, index?: number): StructureDefinition.Mapping;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): StructureDefinition.KindCode | undefined;
  setKind(value?: StructureDefinition.KindCode): void;

  hasAbstract(): boolean;
  clearAbstract(): void;
  getAbstract(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setAbstract(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearContextList(): void;
  getContextList(): Array<StructureDefinition.Context>;
  setContextList(value: Array<StructureDefinition.Context>): void;
  addContext(value?: StructureDefinition.Context, index?: number): StructureDefinition.Context;

  clearContextInvariantList(): void;
  getContextInvariantList(): Array<proto_r4_core_datatypes_pb.String>;
  setContextInvariantList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addContextInvariant(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.Uri | undefined;
  setType(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasBaseDefinition(): boolean;
  clearBaseDefinition(): void;
  getBaseDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setBaseDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasDerivation(): boolean;
  clearDerivation(): void;
  getDerivation(): StructureDefinition.DerivationCode | undefined;
  setDerivation(value?: StructureDefinition.DerivationCode): void;

  hasSnapshot(): boolean;
  clearSnapshot(): void;
  getSnapshot(): StructureDefinition.Snapshot | undefined;
  setSnapshot(value?: StructureDefinition.Snapshot): void;

  hasDifferential(): boolean;
  clearDifferential(): void;
  getDifferential(): StructureDefinition.Differential | undefined;
  setDifferential(value?: StructureDefinition.Differential): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinition): StructureDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinition;
  static deserializeBinaryFromReader(message: StructureDefinition, reader: jspb.BinaryReader): StructureDefinition;
}

export namespace StructureDefinition {
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
    status?: StructureDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdictionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    keywordList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
    fhirVersion?: StructureDefinition.FhirVersionCode.AsObject,
    mappingList: Array<StructureDefinition.Mapping.AsObject>,
    kind?: StructureDefinition.KindCode.AsObject,
    pb_abstract?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    contextList: Array<StructureDefinition.Context.AsObject>,
    contextInvariantList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    type?: proto_r4_core_datatypes_pb.Uri.AsObject,
    baseDefinition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    derivation?: StructureDefinition.DerivationCode.AsObject,
    snapshot?: StructureDefinition.Snapshot.AsObject,
    differential?: StructureDefinition.Differential.AsObject,
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

  export class FhirVersionCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRVersionCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRVersionCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Mapping extends jspb.Message {
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

    hasIdentity(): boolean;
    clearIdentity(): void;
    getIdentity(): proto_r4_core_datatypes_pb.Id | undefined;
    setIdentity(value?: proto_r4_core_datatypes_pb.Id): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identity?: proto_r4_core_datatypes_pb.Id.AsObject,
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class KindCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap[keyof proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap[keyof proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap[keyof proto_r4_core_codes_pb.StructureDefinitionKindCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Context extends jspb.Message {
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
    getType(): StructureDefinition.Context.TypeCode | undefined;
    setType(value?: StructureDefinition.Context.TypeCode): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): proto_r4_core_datatypes_pb.String | undefined;
    setExpression(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
  }

  export namespace Context {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: StructureDefinition.Context.TypeCode.AsObject,
      expression?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExtensionContextTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class DerivationCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap[keyof proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap[keyof proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DerivationCode.AsObject;
    static toObject(includeInstance: boolean, msg: DerivationCode): DerivationCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DerivationCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DerivationCode;
    static deserializeBinaryFromReader(message: DerivationCode, reader: jspb.BinaryReader): DerivationCode;
  }

  export namespace DerivationCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap[keyof proto_r4_core_codes_pb.TypeDerivationRuleCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Snapshot extends jspb.Message {
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

    clearElementList(): void;
    getElementList(): Array<proto_r4_core_datatypes_pb.ElementDefinition>;
    setElementList(value: Array<proto_r4_core_datatypes_pb.ElementDefinition>): void;
    addElement(value?: proto_r4_core_datatypes_pb.ElementDefinition, index?: number): proto_r4_core_datatypes_pb.ElementDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Snapshot.AsObject;
    static toObject(includeInstance: boolean, msg: Snapshot): Snapshot.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Snapshot, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Snapshot;
    static deserializeBinaryFromReader(message: Snapshot, reader: jspb.BinaryReader): Snapshot;
  }

  export namespace Snapshot {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      elementList: Array<proto_r4_core_datatypes_pb.ElementDefinition.AsObject>,
    }
  }

  export class Differential extends jspb.Message {
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

    clearElementList(): void;
    getElementList(): Array<proto_r4_core_datatypes_pb.ElementDefinition>;
    setElementList(value: Array<proto_r4_core_datatypes_pb.ElementDefinition>): void;
    addElement(value?: proto_r4_core_datatypes_pb.ElementDefinition, index?: number): proto_r4_core_datatypes_pb.ElementDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Differential.AsObject;
    static toObject(includeInstance: boolean, msg: Differential): Differential.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Differential, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Differential;
    static deserializeBinaryFromReader(message: Differential, reader: jspb.BinaryReader): Differential;
  }

  export namespace Differential {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      elementList: Array<proto_r4_core_datatypes_pb.ElementDefinition.AsObject>,
    }
  }
}

