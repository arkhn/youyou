// package: google.fhir.r4.core
// file: proto/r4/core/resources/implementation_guide.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ImplementationGuide extends jspb.Message {
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
  getStatus(): ImplementationGuide.StatusCode | undefined;
  setStatus(value?: ImplementationGuide.StatusCode): void;

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

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasPackageId(): boolean;
  clearPackageId(): void;
  getPackageId(): proto_r4_core_datatypes_pb.Id | undefined;
  setPackageId(value?: proto_r4_core_datatypes_pb.Id): void;

  hasLicense(): boolean;
  clearLicense(): void;
  getLicense(): ImplementationGuide.LicenseCode | undefined;
  setLicense(value?: ImplementationGuide.LicenseCode): void;

  clearFhirVersion(): void;
  getFhirVersion(): Array<ImplementationGuide.FhirVersionCode>;
  setFhirVersion(value: Array<ImplementationGuide.FhirVersionCode>): void;
  addFhirVersion(value?: ImplementationGuide.FhirVersionCode, index?: number): ImplementationGuide.FhirVersionCode;

  clearDependsOn(): void;
  getDependsOn(): Array<ImplementationGuide.DependsOn>;
  setDependsOn(value: Array<ImplementationGuide.DependsOn>): void;
  addDependsOn(value?: ImplementationGuide.DependsOn, index?: number): ImplementationGuide.DependsOn;

  clearGlobal(): void;
  getGlobal(): Array<ImplementationGuide.Global>;
  setGlobal(value: Array<ImplementationGuide.Global>): void;
  addGlobal(value?: ImplementationGuide.Global, index?: number): ImplementationGuide.Global;

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): ImplementationGuide.Definition | undefined;
  setDefinition(value?: ImplementationGuide.Definition): void;

  hasManifest(): boolean;
  clearManifest(): void;
  getManifest(): ImplementationGuide.Manifest | undefined;
  setManifest(value?: ImplementationGuide.Manifest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplementationGuide.AsObject;
  static toObject(includeInstance: boolean, msg: ImplementationGuide): ImplementationGuide.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplementationGuide, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplementationGuide;
  static deserializeBinaryFromReader(message: ImplementationGuide, reader: jspb.BinaryReader): ImplementationGuide;
}

export namespace ImplementationGuide {
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
    status?: ImplementationGuide.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    packageId?: proto_r4_core_datatypes_pb.Id.AsObject,
    license?: ImplementationGuide.LicenseCode.AsObject,
    fhirVersion: Array<ImplementationGuide.FhirVersionCode.AsObject>,
    dependsOn: Array<ImplementationGuide.DependsOn.AsObject>,
    global: Array<ImplementationGuide.Global.AsObject>,
    definition?: ImplementationGuide.Definition.AsObject,
    manifest?: ImplementationGuide.Manifest.AsObject,
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

  export class LicenseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap[keyof proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap[keyof proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LicenseCode.AsObject;
    static toObject(includeInstance: boolean, msg: LicenseCode): LicenseCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LicenseCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LicenseCode;
    static deserializeBinaryFromReader(message: LicenseCode, reader: jspb.BinaryReader): LicenseCode;
  }

  export namespace LicenseCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap[keyof proto_r4_core_codes_pb.SPDXLicenseCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

  export class DependsOn extends jspb.Message {
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

    hasPackageId(): boolean;
    clearPackageId(): void;
    getPackageId(): proto_r4_core_datatypes_pb.Id | undefined;
    setPackageId(value?: proto_r4_core_datatypes_pb.Id): void;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DependsOn.AsObject;
    static toObject(includeInstance: boolean, msg: DependsOn): DependsOn.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DependsOn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DependsOn;
    static deserializeBinaryFromReader(message: DependsOn, reader: jspb.BinaryReader): DependsOn;
  }

  export namespace DependsOn {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      uri?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      packageId?: proto_r4_core_datatypes_pb.Id.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Global extends jspb.Message {
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
    getType(): ImplementationGuide.Global.TypeCode | undefined;
    setType(value?: ImplementationGuide.Global.TypeCode): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Global.AsObject;
    static toObject(includeInstance: boolean, msg: Global): Global.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Global, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Global;
    static deserializeBinaryFromReader(message: Global, reader: jspb.BinaryReader): Global;
  }

  export namespace Global {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: ImplementationGuide.Global.TypeCode.AsObject,
      profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
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
  }

  export class Definition extends jspb.Message {
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

    clearGrouping(): void;
    getGrouping(): Array<ImplementationGuide.Definition.Grouping>;
    setGrouping(value: Array<ImplementationGuide.Definition.Grouping>): void;
    addGrouping(value?: ImplementationGuide.Definition.Grouping, index?: number): ImplementationGuide.Definition.Grouping;

    clearResource(): void;
    getResource(): Array<ImplementationGuide.Definition.Resource>;
    setResource(value: Array<ImplementationGuide.Definition.Resource>): void;
    addResource(value?: ImplementationGuide.Definition.Resource, index?: number): ImplementationGuide.Definition.Resource;

    hasPage(): boolean;
    clearPage(): void;
    getPage(): ImplementationGuide.Definition.Page | undefined;
    setPage(value?: ImplementationGuide.Definition.Page): void;

    clearParameter(): void;
    getParameter(): Array<ImplementationGuide.Definition.Parameter>;
    setParameter(value: Array<ImplementationGuide.Definition.Parameter>): void;
    addParameter(value?: ImplementationGuide.Definition.Parameter, index?: number): ImplementationGuide.Definition.Parameter;

    clearTemplate(): void;
    getTemplate(): Array<ImplementationGuide.Definition.Template>;
    setTemplate(value: Array<ImplementationGuide.Definition.Template>): void;
    addTemplate(value?: ImplementationGuide.Definition.Template, index?: number): ImplementationGuide.Definition.Template;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Definition.AsObject;
    static toObject(includeInstance: boolean, msg: Definition): Definition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Definition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Definition;
    static deserializeBinaryFromReader(message: Definition, reader: jspb.BinaryReader): Definition;
  }

  export namespace Definition {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      grouping: Array<ImplementationGuide.Definition.Grouping.AsObject>,
      resource: Array<ImplementationGuide.Definition.Resource.AsObject>,
      page?: ImplementationGuide.Definition.Page.AsObject,
      parameter: Array<ImplementationGuide.Definition.Parameter.AsObject>,
      template: Array<ImplementationGuide.Definition.Template.AsObject>,
    }

    export class Grouping extends jspb.Message {
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

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Grouping.AsObject;
      static toObject(includeInstance: boolean, msg: Grouping): Grouping.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Grouping, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Grouping;
      static deserializeBinaryFromReader(message: Grouping, reader: jspb.BinaryReader): Grouping;
    }

    export namespace Grouping {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
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

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearFhirVersion(): void;
      getFhirVersion(): Array<ImplementationGuide.Definition.Resource.FhirVersionCode>;
      setFhirVersion(value: Array<ImplementationGuide.Definition.Resource.FhirVersionCode>): void;
      addFhirVersion(value?: ImplementationGuide.Definition.Resource.FhirVersionCode, index?: number): ImplementationGuide.Definition.Resource.FhirVersionCode;

      hasName(): boolean;
      clearName(): void;
      getName(): proto_r4_core_datatypes_pb.String | undefined;
      setName(value?: proto_r4_core_datatypes_pb.String): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      hasExample(): boolean;
      clearExample(): void;
      getExample(): ImplementationGuide.Definition.Resource.ExampleX | undefined;
      setExample(value?: ImplementationGuide.Definition.Resource.ExampleX): void;

      hasGroupingId(): boolean;
      clearGroupingId(): void;
      getGroupingId(): proto_r4_core_datatypes_pb.Id | undefined;
      setGroupingId(value?: proto_r4_core_datatypes_pb.Id): void;

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
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        fhirVersion: Array<ImplementationGuide.Definition.Resource.FhirVersionCode.AsObject>,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        example?: ImplementationGuide.Definition.Resource.ExampleX.AsObject,
        groupingId?: proto_r4_core_datatypes_pb.Id.AsObject,
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

      export class ExampleX extends jspb.Message {
        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasCanonical(): boolean;
        clearCanonical(): void;
        getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
        setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

        getChoiceCase(): ExampleX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExampleX.AsObject;
        static toObject(includeInstance: boolean, msg: ExampleX): ExampleX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExampleX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExampleX;
        static deserializeBinaryFromReader(message: ExampleX, reader: jspb.BinaryReader): ExampleX;
      }

      export namespace ExampleX {
        export type AsObject = {
          pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          BOOLEAN = 1,
          CANONICAL = 2,
        }
      }
    }

    export class Page extends jspb.Message {
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
      getName(): ImplementationGuide.Definition.Page.NameX | undefined;
      setName(value?: ImplementationGuide.Definition.Page.NameX): void;

      hasTitle(): boolean;
      clearTitle(): void;
      getTitle(): proto_r4_core_datatypes_pb.String | undefined;
      setTitle(value?: proto_r4_core_datatypes_pb.String): void;

      hasGeneration(): boolean;
      clearGeneration(): void;
      getGeneration(): ImplementationGuide.Definition.Page.GenerationCode | undefined;
      setGeneration(value?: ImplementationGuide.Definition.Page.GenerationCode): void;

      clearPage(): void;
      getPage(): Array<ImplementationGuide.Definition.Page>;
      setPage(value: Array<ImplementationGuide.Definition.Page>): void;
      addPage(value?: ImplementationGuide.Definition.Page, index?: number): ImplementationGuide.Definition.Page;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Page.AsObject;
      static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Page;
      static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
    }

    export namespace Page {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: ImplementationGuide.Definition.Page.NameX.AsObject,
        title?: proto_r4_core_datatypes_pb.String.AsObject,
        generation?: ImplementationGuide.Definition.Page.GenerationCode.AsObject,
        page: Array<ImplementationGuide.Definition.Page.AsObject>,
      }

      export class NameX extends jspb.Message {
        hasUrl(): boolean;
        clearUrl(): void;
        getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
        setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        getChoiceCase(): NameX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): NameX.AsObject;
        static toObject(includeInstance: boolean, msg: NameX): NameX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: NameX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): NameX;
        static deserializeBinaryFromReader(message: NameX, reader: jspb.BinaryReader): NameX;
      }

      export namespace NameX {
        export type AsObject = {
          url?: proto_r4_core_datatypes_pb.Url.AsObject,
          reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          URL = 1,
          REFERENCE = 2,
        }
      }

      export class GenerationCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap[keyof proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap[keyof proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): GenerationCode.AsObject;
        static toObject(includeInstance: boolean, msg: GenerationCode): GenerationCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: GenerationCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): GenerationCode;
        static deserializeBinaryFromReader(message: GenerationCode, reader: jspb.BinaryReader): GenerationCode;
      }

      export namespace GenerationCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap[keyof proto_r4_core_codes_pb.GuidePageGenerationCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
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

      hasCode(): boolean;
      clearCode(): void;
      getCode(): ImplementationGuide.Definition.Parameter.CodeType | undefined;
      setCode(value?: ImplementationGuide.Definition.Parameter.CodeType): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): proto_r4_core_datatypes_pb.String | undefined;
      setValue(value?: proto_r4_core_datatypes_pb.String): void;

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
        code?: ImplementationGuide.Definition.Parameter.CodeType.AsObject,
        value?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class CodeType extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.GuideParameterCode.ValueMap[keyof proto_r4_core_codes_pb.GuideParameterCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.GuideParameterCode.ValueMap[keyof proto_r4_core_codes_pb.GuideParameterCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.GuideParameterCode.ValueMap[keyof proto_r4_core_codes_pb.GuideParameterCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class Template extends jspb.Message {
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

      hasSource(): boolean;
      clearSource(): void;
      getSource(): proto_r4_core_datatypes_pb.String | undefined;
      setSource(value?: proto_r4_core_datatypes_pb.String): void;

      hasScope(): boolean;
      clearScope(): void;
      getScope(): proto_r4_core_datatypes_pb.String | undefined;
      setScope(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Template.AsObject;
      static toObject(includeInstance: boolean, msg: Template): Template.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Template, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Template;
      static deserializeBinaryFromReader(message: Template, reader: jspb.BinaryReader): Template;
    }

    export namespace Template {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        source?: proto_r4_core_datatypes_pb.String.AsObject,
        scope?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }

  export class Manifest extends jspb.Message {
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

    hasRendering(): boolean;
    clearRendering(): void;
    getRendering(): proto_r4_core_datatypes_pb.Url | undefined;
    setRendering(value?: proto_r4_core_datatypes_pb.Url): void;

    clearResource(): void;
    getResource(): Array<ImplementationGuide.Manifest.ManifestResource>;
    setResource(value: Array<ImplementationGuide.Manifest.ManifestResource>): void;
    addResource(value?: ImplementationGuide.Manifest.ManifestResource, index?: number): ImplementationGuide.Manifest.ManifestResource;

    clearPage(): void;
    getPage(): Array<ImplementationGuide.Manifest.ManifestPage>;
    setPage(value: Array<ImplementationGuide.Manifest.ManifestPage>): void;
    addPage(value?: ImplementationGuide.Manifest.ManifestPage, index?: number): ImplementationGuide.Manifest.ManifestPage;

    clearImage(): void;
    getImage(): Array<proto_r4_core_datatypes_pb.String>;
    setImage(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addImage(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    clearOther(): void;
    getOther(): Array<proto_r4_core_datatypes_pb.String>;
    setOther(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addOther(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Manifest.AsObject;
    static toObject(includeInstance: boolean, msg: Manifest): Manifest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Manifest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Manifest;
    static deserializeBinaryFromReader(message: Manifest, reader: jspb.BinaryReader): Manifest;
  }

  export namespace Manifest {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      rendering?: proto_r4_core_datatypes_pb.Url.AsObject,
      resource: Array<ImplementationGuide.Manifest.ManifestResource.AsObject>,
      page: Array<ImplementationGuide.Manifest.ManifestPage.AsObject>,
      image: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      other: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    }

    export class ManifestResource extends jspb.Message {
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

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasExample(): boolean;
      clearExample(): void;
      getExample(): ImplementationGuide.Manifest.ManifestResource.ExampleX | undefined;
      setExample(value?: ImplementationGuide.Manifest.ManifestResource.ExampleX): void;

      hasRelativePath(): boolean;
      clearRelativePath(): void;
      getRelativePath(): proto_r4_core_datatypes_pb.Url | undefined;
      setRelativePath(value?: proto_r4_core_datatypes_pb.Url): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ManifestResource.AsObject;
      static toObject(includeInstance: boolean, msg: ManifestResource): ManifestResource.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ManifestResource, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ManifestResource;
      static deserializeBinaryFromReader(message: ManifestResource, reader: jspb.BinaryReader): ManifestResource;
    }

    export namespace ManifestResource {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        example?: ImplementationGuide.Manifest.ManifestResource.ExampleX.AsObject,
        relativePath?: proto_r4_core_datatypes_pb.Url.AsObject,
      }

      export class ExampleX extends jspb.Message {
        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasCanonical(): boolean;
        clearCanonical(): void;
        getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
        setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

        getChoiceCase(): ExampleX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ExampleX.AsObject;
        static toObject(includeInstance: boolean, msg: ExampleX): ExampleX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ExampleX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ExampleX;
        static deserializeBinaryFromReader(message: ExampleX, reader: jspb.BinaryReader): ExampleX;
      }

      export namespace ExampleX {
        export type AsObject = {
          pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          BOOLEAN = 1,
          CANONICAL = 2,
        }
      }
    }

    export class ManifestPage extends jspb.Message {
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

      hasTitle(): boolean;
      clearTitle(): void;
      getTitle(): proto_r4_core_datatypes_pb.String | undefined;
      setTitle(value?: proto_r4_core_datatypes_pb.String): void;

      clearAnchor(): void;
      getAnchor(): Array<proto_r4_core_datatypes_pb.String>;
      setAnchor(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addAnchor(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ManifestPage.AsObject;
      static toObject(includeInstance: boolean, msg: ManifestPage): ManifestPage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ManifestPage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ManifestPage;
      static deserializeBinaryFromReader(message: ManifestPage, reader: jspb.BinaryReader): ManifestPage;
    }

    export namespace ManifestPage {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        title?: proto_r4_core_datatypes_pb.String.AsObject,
        anchor: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      }
    }
  }
}

