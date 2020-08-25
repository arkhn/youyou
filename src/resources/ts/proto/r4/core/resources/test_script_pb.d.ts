// package: google.fhir.r4.core
// file: proto/r4/core/resources/test_script.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class TestScript extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

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
  getStatus(): TestScript.StatusCode | undefined;
  setStatus(value?: TestScript.StatusCode): void;

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

  clearOrigin(): void;
  getOrigin(): Array<TestScript.Origin>;
  setOrigin(value: Array<TestScript.Origin>): void;
  addOrigin(value?: TestScript.Origin, index?: number): TestScript.Origin;

  clearDestination(): void;
  getDestination(): Array<TestScript.Destination>;
  setDestination(value: Array<TestScript.Destination>): void;
  addDestination(value?: TestScript.Destination, index?: number): TestScript.Destination;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): TestScript.Metadata | undefined;
  setMetadata(value?: TestScript.Metadata): void;

  clearFixture(): void;
  getFixture(): Array<TestScript.Fixture>;
  setFixture(value: Array<TestScript.Fixture>): void;
  addFixture(value?: TestScript.Fixture, index?: number): TestScript.Fixture;

  clearProfile(): void;
  getProfile(): Array<proto_r4_core_datatypes_pb.Reference>;
  setProfile(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addProfile(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearVariable(): void;
  getVariable(): Array<TestScript.Variable>;
  setVariable(value: Array<TestScript.Variable>): void;
  addVariable(value?: TestScript.Variable, index?: number): TestScript.Variable;

  hasSetup(): boolean;
  clearSetup(): void;
  getSetup(): TestScript.Setup | undefined;
  setSetup(value?: TestScript.Setup): void;

  clearTest(): void;
  getTest(): Array<TestScript.Test>;
  setTest(value: Array<TestScript.Test>): void;
  addTest(value?: TestScript.Test, index?: number): TestScript.Test;

  hasTeardown(): boolean;
  clearTeardown(): void;
  getTeardown(): TestScript.Teardown | undefined;
  setTeardown(value?: TestScript.Teardown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScript.AsObject;
  static toObject(includeInstance: boolean, msg: TestScript): TestScript.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScript, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScript;
  static deserializeBinaryFromReader(message: TestScript, reader: jspb.BinaryReader): TestScript;
}

export namespace TestScript {
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
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: TestScript.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    origin: Array<TestScript.Origin.AsObject>,
    destination: Array<TestScript.Destination.AsObject>,
    metadata?: TestScript.Metadata.AsObject,
    fixture: Array<TestScript.Fixture.AsObject>,
    profile: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    variable: Array<TestScript.Variable.AsObject>,
    setup?: TestScript.Setup.AsObject,
    test: Array<TestScript.Test.AsObject>,
    teardown?: TestScript.Teardown.AsObject,
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

  export class Origin extends jspb.Message {
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

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): proto_r4_core_datatypes_pb.Integer | undefined;
    setIndex(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_r4_core_datatypes_pb.Coding | undefined;
    setProfile(value?: proto_r4_core_datatypes_pb.Coding): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Origin.AsObject;
    static toObject(includeInstance: boolean, msg: Origin): Origin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Origin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Origin;
    static deserializeBinaryFromReader(message: Origin, reader: jspb.BinaryReader): Origin;
  }

  export namespace Origin {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      index?: proto_r4_core_datatypes_pb.Integer.AsObject,
      profile?: proto_r4_core_datatypes_pb.Coding.AsObject,
    }
  }

  export class Destination extends jspb.Message {
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

    hasIndex(): boolean;
    clearIndex(): void;
    getIndex(): proto_r4_core_datatypes_pb.Integer | undefined;
    setIndex(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_r4_core_datatypes_pb.Coding | undefined;
    setProfile(value?: proto_r4_core_datatypes_pb.Coding): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Destination.AsObject;
    static toObject(includeInstance: boolean, msg: Destination): Destination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Destination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Destination;
    static deserializeBinaryFromReader(message: Destination, reader: jspb.BinaryReader): Destination;
  }

  export namespace Destination {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      index?: proto_r4_core_datatypes_pb.Integer.AsObject,
      profile?: proto_r4_core_datatypes_pb.Coding.AsObject,
    }
  }

  export class Metadata extends jspb.Message {
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

    clearLink(): void;
    getLink(): Array<TestScript.Metadata.Link>;
    setLink(value: Array<TestScript.Metadata.Link>): void;
    addLink(value?: TestScript.Metadata.Link, index?: number): TestScript.Metadata.Link;

    clearCapability(): void;
    getCapability(): Array<TestScript.Metadata.Capability>;
    setCapability(value: Array<TestScript.Metadata.Capability>): void;
    addCapability(value?: TestScript.Metadata.Capability, index?: number): TestScript.Metadata.Capability;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      link: Array<TestScript.Metadata.Link.AsObject>,
      capability: Array<TestScript.Metadata.Capability.AsObject>,
    }

    export class Link extends jspb.Message {
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

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Link.AsObject;
      static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Link;
      static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
    }

    export namespace Link {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        url?: proto_r4_core_datatypes_pb.Uri.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }

    export class Capability extends jspb.Message {
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

      hasRequired(): boolean;
      clearRequired(): void;
      getRequired(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setRequired(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasValidated(): boolean;
      clearValidated(): void;
      getValidated(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setValidated(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      clearOrigin(): void;
      getOrigin(): Array<proto_r4_core_datatypes_pb.Integer>;
      setOrigin(value: Array<proto_r4_core_datatypes_pb.Integer>): void;
      addOrigin(value?: proto_r4_core_datatypes_pb.Integer, index?: number): proto_r4_core_datatypes_pb.Integer;

      hasDestination(): boolean;
      clearDestination(): void;
      getDestination(): proto_r4_core_datatypes_pb.Integer | undefined;
      setDestination(value?: proto_r4_core_datatypes_pb.Integer): void;

      clearLink(): void;
      getLink(): Array<proto_r4_core_datatypes_pb.Uri>;
      setLink(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
      addLink(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

      hasCapabilities(): boolean;
      clearCapabilities(): void;
      getCapabilities(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCapabilities(value?: proto_r4_core_datatypes_pb.Canonical): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Capability.AsObject;
      static toObject(includeInstance: boolean, msg: Capability): Capability.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Capability, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Capability;
      static deserializeBinaryFromReader(message: Capability, reader: jspb.BinaryReader): Capability;
    }

    export namespace Capability {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        required?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        validated?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        origin: Array<proto_r4_core_datatypes_pb.Integer.AsObject>,
        destination?: proto_r4_core_datatypes_pb.Integer.AsObject,
        link: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
        capabilities?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      }
    }
  }

  export class Fixture extends jspb.Message {
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

    hasAutocreate(): boolean;
    clearAutocreate(): void;
    getAutocreate(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAutocreate(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAutodelete(): boolean;
    clearAutodelete(): void;
    getAutodelete(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAutodelete(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): proto_r4_core_datatypes_pb.Reference | undefined;
    setResource(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fixture.AsObject;
    static toObject(includeInstance: boolean, msg: Fixture): Fixture.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fixture, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fixture;
    static deserializeBinaryFromReader(message: Fixture, reader: jspb.BinaryReader): Fixture;
  }

  export namespace Fixture {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      autocreate?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      autodelete?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      resource?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Variable extends jspb.Message {
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

    hasDefaultValue(): boolean;
    clearDefaultValue(): void;
    getDefaultValue(): proto_r4_core_datatypes_pb.String | undefined;
    setDefaultValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): proto_r4_core_datatypes_pb.String | undefined;
    setExpression(value?: proto_r4_core_datatypes_pb.String): void;

    hasHeaderField(): boolean;
    clearHeaderField(): void;
    getHeaderField(): proto_r4_core_datatypes_pb.String | undefined;
    setHeaderField(value?: proto_r4_core_datatypes_pb.String): void;

    hasHint(): boolean;
    clearHint(): void;
    getHint(): proto_r4_core_datatypes_pb.String | undefined;
    setHint(value?: proto_r4_core_datatypes_pb.String): void;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): proto_r4_core_datatypes_pb.String | undefined;
    setPath(value?: proto_r4_core_datatypes_pb.String): void;

    hasSourceId(): boolean;
    clearSourceId(): void;
    getSourceId(): proto_r4_core_datatypes_pb.Id | undefined;
    setSourceId(value?: proto_r4_core_datatypes_pb.Id): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Variable.AsObject;
    static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Variable;
    static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
  }

  export namespace Variable {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      defaultValue?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      expression?: proto_r4_core_datatypes_pb.String.AsObject,
      headerField?: proto_r4_core_datatypes_pb.String.AsObject,
      hint?: proto_r4_core_datatypes_pb.String.AsObject,
      path?: proto_r4_core_datatypes_pb.String.AsObject,
      sourceId?: proto_r4_core_datatypes_pb.Id.AsObject,
    }
  }

  export class Setup extends jspb.Message {
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

    clearAction(): void;
    getAction(): Array<TestScript.Setup.SetupAction>;
    setAction(value: Array<TestScript.Setup.SetupAction>): void;
    addAction(value?: TestScript.Setup.SetupAction, index?: number): TestScript.Setup.SetupAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Setup.AsObject;
    static toObject(includeInstance: boolean, msg: Setup): Setup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Setup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Setup;
    static deserializeBinaryFromReader(message: Setup, reader: jspb.BinaryReader): Setup;
  }

  export namespace Setup {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action: Array<TestScript.Setup.SetupAction.AsObject>,
    }

    export class SetupAction extends jspb.Message {
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

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestScript.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestScript.Setup.SetupAction.Operation): void;

      hasAssertValue(): boolean;
      clearAssertValue(): void;
      getAssertValue(): TestScript.Setup.SetupAction.Assert | undefined;
      setAssertValue(value?: TestScript.Setup.SetupAction.Assert): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetupAction.AsObject;
      static toObject(includeInstance: boolean, msg: SetupAction): SetupAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetupAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetupAction;
      static deserializeBinaryFromReader(message: SetupAction, reader: jspb.BinaryReader): SetupAction;
    }

    export namespace SetupAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestScript.Setup.SetupAction.Operation.AsObject,
        assertValue?: TestScript.Setup.SetupAction.Assert.AsObject,
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

        hasType(): boolean;
        clearType(): void;
        getType(): proto_r4_core_datatypes_pb.Coding | undefined;
        setType(value?: proto_r4_core_datatypes_pb.Coding): void;

        hasResource(): boolean;
        clearResource(): void;
        getResource(): TestScript.Setup.SetupAction.Operation.ResourceCode | undefined;
        setResource(value?: TestScript.Setup.SetupAction.Operation.ResourceCode): void;

        hasLabel(): boolean;
        clearLabel(): void;
        getLabel(): proto_r4_core_datatypes_pb.String | undefined;
        setLabel(value?: proto_r4_core_datatypes_pb.String): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.String | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.String): void;

        hasAccept(): boolean;
        clearAccept(): void;
        getAccept(): TestScript.Setup.SetupAction.Operation.AcceptCode | undefined;
        setAccept(value?: TestScript.Setup.SetupAction.Operation.AcceptCode): void;

        hasContentType(): boolean;
        clearContentType(): void;
        getContentType(): TestScript.Setup.SetupAction.Operation.ContentTypeCode | undefined;
        setContentType(value?: TestScript.Setup.SetupAction.Operation.ContentTypeCode): void;

        hasDestination(): boolean;
        clearDestination(): void;
        getDestination(): proto_r4_core_datatypes_pb.Integer | undefined;
        setDestination(value?: proto_r4_core_datatypes_pb.Integer): void;

        hasEncodeRequestUrl(): boolean;
        clearEncodeRequestUrl(): void;
        getEncodeRequestUrl(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setEncodeRequestUrl(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasMethod(): boolean;
        clearMethod(): void;
        getMethod(): TestScript.Setup.SetupAction.Operation.MethodCode | undefined;
        setMethod(value?: TestScript.Setup.SetupAction.Operation.MethodCode): void;

        hasOrigin(): boolean;
        clearOrigin(): void;
        getOrigin(): proto_r4_core_datatypes_pb.Integer | undefined;
        setOrigin(value?: proto_r4_core_datatypes_pb.Integer): void;

        hasParams(): boolean;
        clearParams(): void;
        getParams(): proto_r4_core_datatypes_pb.String | undefined;
        setParams(value?: proto_r4_core_datatypes_pb.String): void;

        clearRequestHeader(): void;
        getRequestHeader(): Array<TestScript.Setup.SetupAction.Operation.RequestHeader>;
        setRequestHeader(value: Array<TestScript.Setup.SetupAction.Operation.RequestHeader>): void;
        addRequestHeader(value?: TestScript.Setup.SetupAction.Operation.RequestHeader, index?: number): TestScript.Setup.SetupAction.Operation.RequestHeader;

        hasRequestId(): boolean;
        clearRequestId(): void;
        getRequestId(): proto_r4_core_datatypes_pb.Id | undefined;
        setRequestId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasResponseId(): boolean;
        clearResponseId(): void;
        getResponseId(): proto_r4_core_datatypes_pb.Id | undefined;
        setResponseId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasSourceId(): boolean;
        clearSourceId(): void;
        getSourceId(): proto_r4_core_datatypes_pb.Id | undefined;
        setSourceId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasTargetId(): boolean;
        clearTargetId(): void;
        getTargetId(): proto_r4_core_datatypes_pb.Id | undefined;
        setTargetId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasUrl(): boolean;
        clearUrl(): void;
        getUrl(): proto_r4_core_datatypes_pb.String | undefined;
        setUrl(value?: proto_r4_core_datatypes_pb.String): void;

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
          type?: proto_r4_core_datatypes_pb.Coding.AsObject,
          resource?: TestScript.Setup.SetupAction.Operation.ResourceCode.AsObject,
          label?: proto_r4_core_datatypes_pb.String.AsObject,
          description?: proto_r4_core_datatypes_pb.String.AsObject,
          accept?: TestScript.Setup.SetupAction.Operation.AcceptCode.AsObject,
          contentType?: TestScript.Setup.SetupAction.Operation.ContentTypeCode.AsObject,
          destination?: proto_r4_core_datatypes_pb.Integer.AsObject,
          encodeRequestUrl?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          method?: TestScript.Setup.SetupAction.Operation.MethodCode.AsObject,
          origin?: proto_r4_core_datatypes_pb.Integer.AsObject,
          params?: proto_r4_core_datatypes_pb.String.AsObject,
          requestHeader: Array<TestScript.Setup.SetupAction.Operation.RequestHeader.AsObject>,
          requestId?: proto_r4_core_datatypes_pb.Id.AsObject,
          responseId?: proto_r4_core_datatypes_pb.Id.AsObject,
          sourceId?: proto_r4_core_datatypes_pb.Id.AsObject,
          targetId?: proto_r4_core_datatypes_pb.Id.AsObject,
          url?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export class ResourceCode extends jspb.Message {
          getValue(): proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap];
          setValue(value: proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ResourceCode.AsObject;
          static toObject(includeInstance: boolean, msg: ResourceCode): ResourceCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ResourceCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ResourceCode;
          static deserializeBinaryFromReader(message: ResourceCode, reader: jspb.BinaryReader): ResourceCode;
        }

        export namespace ResourceCode {
          export type AsObject = {
            value: proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class AcceptCode extends jspb.Message {
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
          toObject(includeInstance?: boolean): AcceptCode.AsObject;
          static toObject(includeInstance: boolean, msg: AcceptCode): AcceptCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: AcceptCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): AcceptCode;
          static deserializeBinaryFromReader(message: AcceptCode, reader: jspb.BinaryReader): AcceptCode;
        }

        export namespace AcceptCode {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            value: string,
          }
        }

        export class ContentTypeCode extends jspb.Message {
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
          toObject(includeInstance?: boolean): ContentTypeCode.AsObject;
          static toObject(includeInstance: boolean, msg: ContentTypeCode): ContentTypeCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ContentTypeCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ContentTypeCode;
          static deserializeBinaryFromReader(message: ContentTypeCode, reader: jspb.BinaryReader): ContentTypeCode;
        }

        export namespace ContentTypeCode {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            value: string,
          }
        }

        export class MethodCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): MethodCode.AsObject;
          static toObject(includeInstance: boolean, msg: MethodCode): MethodCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: MethodCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): MethodCode;
          static deserializeBinaryFromReader(message: MethodCode, reader: jspb.BinaryReader): MethodCode;
        }

        export namespace MethodCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class RequestHeader extends jspb.Message {
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

          hasField(): boolean;
          clearField(): void;
          getField(): proto_r4_core_datatypes_pb.String | undefined;
          setField(value?: proto_r4_core_datatypes_pb.String): void;

          hasValue(): boolean;
          clearValue(): void;
          getValue(): proto_r4_core_datatypes_pb.String | undefined;
          setValue(value?: proto_r4_core_datatypes_pb.String): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): RequestHeader.AsObject;
          static toObject(includeInstance: boolean, msg: RequestHeader): RequestHeader.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: RequestHeader, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): RequestHeader;
          static deserializeBinaryFromReader(message: RequestHeader, reader: jspb.BinaryReader): RequestHeader;
        }

        export namespace RequestHeader {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            field?: proto_r4_core_datatypes_pb.String.AsObject,
            value?: proto_r4_core_datatypes_pb.String.AsObject,
          }
        }
      }

      export class Assert extends jspb.Message {
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

        hasLabel(): boolean;
        clearLabel(): void;
        getLabel(): proto_r4_core_datatypes_pb.String | undefined;
        setLabel(value?: proto_r4_core_datatypes_pb.String): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.String | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.String): void;

        hasDirection(): boolean;
        clearDirection(): void;
        getDirection(): TestScript.Setup.SetupAction.Assert.DirectionCode | undefined;
        setDirection(value?: TestScript.Setup.SetupAction.Assert.DirectionCode): void;

        hasCompareToSourceId(): boolean;
        clearCompareToSourceId(): void;
        getCompareToSourceId(): proto_r4_core_datatypes_pb.String | undefined;
        setCompareToSourceId(value?: proto_r4_core_datatypes_pb.String): void;

        hasCompareToSourceExpression(): boolean;
        clearCompareToSourceExpression(): void;
        getCompareToSourceExpression(): proto_r4_core_datatypes_pb.String | undefined;
        setCompareToSourceExpression(value?: proto_r4_core_datatypes_pb.String): void;

        hasCompareToSourcePath(): boolean;
        clearCompareToSourcePath(): void;
        getCompareToSourcePath(): proto_r4_core_datatypes_pb.String | undefined;
        setCompareToSourcePath(value?: proto_r4_core_datatypes_pb.String): void;

        hasContentType(): boolean;
        clearContentType(): void;
        getContentType(): TestScript.Setup.SetupAction.Assert.ContentTypeCode | undefined;
        setContentType(value?: TestScript.Setup.SetupAction.Assert.ContentTypeCode): void;

        hasExpression(): boolean;
        clearExpression(): void;
        getExpression(): proto_r4_core_datatypes_pb.String | undefined;
        setExpression(value?: proto_r4_core_datatypes_pb.String): void;

        hasHeaderField(): boolean;
        clearHeaderField(): void;
        getHeaderField(): proto_r4_core_datatypes_pb.String | undefined;
        setHeaderField(value?: proto_r4_core_datatypes_pb.String): void;

        hasMinimumId(): boolean;
        clearMinimumId(): void;
        getMinimumId(): proto_r4_core_datatypes_pb.String | undefined;
        setMinimumId(value?: proto_r4_core_datatypes_pb.String): void;

        hasNavigationLinks(): boolean;
        clearNavigationLinks(): void;
        getNavigationLinks(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setNavigationLinks(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasOperator(): boolean;
        clearOperator(): void;
        getOperator(): TestScript.Setup.SetupAction.Assert.OperatorCode | undefined;
        setOperator(value?: TestScript.Setup.SetupAction.Assert.OperatorCode): void;

        hasPath(): boolean;
        clearPath(): void;
        getPath(): proto_r4_core_datatypes_pb.String | undefined;
        setPath(value?: proto_r4_core_datatypes_pb.String): void;

        hasRequestMethod(): boolean;
        clearRequestMethod(): void;
        getRequestMethod(): TestScript.Setup.SetupAction.Assert.RequestMethodCode | undefined;
        setRequestMethod(value?: TestScript.Setup.SetupAction.Assert.RequestMethodCode): void;

        hasRequestUrl(): boolean;
        clearRequestUrl(): void;
        getRequestUrl(): proto_r4_core_datatypes_pb.String | undefined;
        setRequestUrl(value?: proto_r4_core_datatypes_pb.String): void;

        hasResource(): boolean;
        clearResource(): void;
        getResource(): TestScript.Setup.SetupAction.Assert.ResourceCode | undefined;
        setResource(value?: TestScript.Setup.SetupAction.Assert.ResourceCode): void;

        hasResponse(): boolean;
        clearResponse(): void;
        getResponse(): TestScript.Setup.SetupAction.Assert.ResponseCode | undefined;
        setResponse(value?: TestScript.Setup.SetupAction.Assert.ResponseCode): void;

        hasResponseCode(): boolean;
        clearResponseCode(): void;
        getResponseCode(): proto_r4_core_datatypes_pb.String | undefined;
        setResponseCode(value?: proto_r4_core_datatypes_pb.String): void;

        hasSourceId(): boolean;
        clearSourceId(): void;
        getSourceId(): proto_r4_core_datatypes_pb.Id | undefined;
        setSourceId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasValidateProfileId(): boolean;
        clearValidateProfileId(): void;
        getValidateProfileId(): proto_r4_core_datatypes_pb.Id | undefined;
        setValidateProfileId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasValue(): boolean;
        clearValue(): void;
        getValue(): proto_r4_core_datatypes_pb.String | undefined;
        setValue(value?: proto_r4_core_datatypes_pb.String): void;

        hasWarningOnly(): boolean;
        clearWarningOnly(): void;
        getWarningOnly(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setWarningOnly(value?: proto_r4_core_datatypes_pb.Boolean): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Assert.AsObject;
        static toObject(includeInstance: boolean, msg: Assert): Assert.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Assert, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Assert;
        static deserializeBinaryFromReader(message: Assert, reader: jspb.BinaryReader): Assert;
      }

      export namespace Assert {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          label?: proto_r4_core_datatypes_pb.String.AsObject,
          description?: proto_r4_core_datatypes_pb.String.AsObject,
          direction?: TestScript.Setup.SetupAction.Assert.DirectionCode.AsObject,
          compareToSourceId?: proto_r4_core_datatypes_pb.String.AsObject,
          compareToSourceExpression?: proto_r4_core_datatypes_pb.String.AsObject,
          compareToSourcePath?: proto_r4_core_datatypes_pb.String.AsObject,
          contentType?: TestScript.Setup.SetupAction.Assert.ContentTypeCode.AsObject,
          expression?: proto_r4_core_datatypes_pb.String.AsObject,
          headerField?: proto_r4_core_datatypes_pb.String.AsObject,
          minimumId?: proto_r4_core_datatypes_pb.String.AsObject,
          navigationLinks?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          operator?: TestScript.Setup.SetupAction.Assert.OperatorCode.AsObject,
          path?: proto_r4_core_datatypes_pb.String.AsObject,
          requestMethod?: TestScript.Setup.SetupAction.Assert.RequestMethodCode.AsObject,
          requestUrl?: proto_r4_core_datatypes_pb.String.AsObject,
          resource?: TestScript.Setup.SetupAction.Assert.ResourceCode.AsObject,
          response?: TestScript.Setup.SetupAction.Assert.ResponseCode.AsObject,
          responseCode?: proto_r4_core_datatypes_pb.String.AsObject,
          sourceId?: proto_r4_core_datatypes_pb.Id.AsObject,
          validateProfileId?: proto_r4_core_datatypes_pb.Id.AsObject,
          value?: proto_r4_core_datatypes_pb.String.AsObject,
          warningOnly?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        }

        export class DirectionCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): DirectionCode.AsObject;
          static toObject(includeInstance: boolean, msg: DirectionCode): DirectionCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: DirectionCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): DirectionCode;
          static deserializeBinaryFromReader(message: DirectionCode, reader: jspb.BinaryReader): DirectionCode;
        }

        export namespace DirectionCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionDirectionTypeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class ContentTypeCode extends jspb.Message {
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
          toObject(includeInstance?: boolean): ContentTypeCode.AsObject;
          static toObject(includeInstance: boolean, msg: ContentTypeCode): ContentTypeCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ContentTypeCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ContentTypeCode;
          static deserializeBinaryFromReader(message: ContentTypeCode, reader: jspb.BinaryReader): ContentTypeCode;
        }

        export namespace ContentTypeCode {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            value: string,
          }
        }

        export class OperatorCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
            value: proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionOperatorTypeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class RequestMethodCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): RequestMethodCode.AsObject;
          static toObject(includeInstance: boolean, msg: RequestMethodCode): RequestMethodCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: RequestMethodCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): RequestMethodCode;
          static deserializeBinaryFromReader(message: RequestMethodCode, reader: jspb.BinaryReader): RequestMethodCode;
        }

        export namespace RequestMethodCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap[keyof proto_r4_core_codes_pb.TestScriptRequestMethodCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class ResourceCode extends jspb.Message {
          getValue(): proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap];
          setValue(value: proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ResourceCode.AsObject;
          static toObject(includeInstance: boolean, msg: ResourceCode): ResourceCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ResourceCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ResourceCode;
          static deserializeBinaryFromReader(message: ResourceCode, reader: jspb.BinaryReader): ResourceCode;
        }

        export namespace ResourceCode {
          export type AsObject = {
            value: proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRDefinedTypeValueSet.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class ResponseCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ResponseCode.AsObject;
          static toObject(includeInstance: boolean, msg: ResponseCode): ResponseCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ResponseCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ResponseCode;
          static deserializeBinaryFromReader(message: ResponseCode, reader: jspb.BinaryReader): ResponseCode;
        }

        export namespace ResponseCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap[keyof proto_r4_core_codes_pb.AssertionResponseTypesCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
      }
    }
  }

  export class Test extends jspb.Message {
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

    clearAction(): void;
    getAction(): Array<TestScript.Test.TestAction>;
    setAction(value: Array<TestScript.Test.TestAction>): void;
    addAction(value?: TestScript.Test.TestAction, index?: number): TestScript.Test.TestAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Test.AsObject;
    static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Test;
    static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
  }

  export namespace Test {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      action: Array<TestScript.Test.TestAction.AsObject>,
    }

    export class TestAction extends jspb.Message {
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

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestScript.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestScript.Setup.SetupAction.Operation): void;

      hasAssertValue(): boolean;
      clearAssertValue(): void;
      getAssertValue(): TestScript.Setup.SetupAction.Assert | undefined;
      setAssertValue(value?: TestScript.Setup.SetupAction.Assert): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TestAction.AsObject;
      static toObject(includeInstance: boolean, msg: TestAction): TestAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TestAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TestAction;
      static deserializeBinaryFromReader(message: TestAction, reader: jspb.BinaryReader): TestAction;
    }

    export namespace TestAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestScript.Setup.SetupAction.Operation.AsObject,
        assertValue?: TestScript.Setup.SetupAction.Assert.AsObject,
      }
    }
  }

  export class Teardown extends jspb.Message {
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

    clearAction(): void;
    getAction(): Array<TestScript.Teardown.TeardownAction>;
    setAction(value: Array<TestScript.Teardown.TeardownAction>): void;
    addAction(value?: TestScript.Teardown.TeardownAction, index?: number): TestScript.Teardown.TeardownAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Teardown.AsObject;
    static toObject(includeInstance: boolean, msg: Teardown): Teardown.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Teardown, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Teardown;
    static deserializeBinaryFromReader(message: Teardown, reader: jspb.BinaryReader): Teardown;
  }

  export namespace Teardown {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action: Array<TestScript.Teardown.TeardownAction.AsObject>,
    }

    export class TeardownAction extends jspb.Message {
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

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestScript.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestScript.Setup.SetupAction.Operation): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TeardownAction.AsObject;
      static toObject(includeInstance: boolean, msg: TeardownAction): TeardownAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TeardownAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TeardownAction;
      static deserializeBinaryFromReader(message: TeardownAction, reader: jspb.BinaryReader): TeardownAction;
    }

    export namespace TeardownAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestScript.Setup.SetupAction.Operation.AsObject,
      }
    }
  }
}

