// package: google.fhir.r4.core
// file: proto/r4/core/resources/example_scenario.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ExampleScenario extends jspb.Message {
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

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ExampleScenario.StatusCode | undefined;
  setStatus(value?: ExampleScenario.StatusCode): void;

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

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearActor(): void;
  getActor(): Array<ExampleScenario.Actor>;
  setActor(value: Array<ExampleScenario.Actor>): void;
  addActor(value?: ExampleScenario.Actor, index?: number): ExampleScenario.Actor;

  clearInstance(): void;
  getInstance(): Array<ExampleScenario.Instance>;
  setInstance(value: Array<ExampleScenario.Instance>): void;
  addInstance(value?: ExampleScenario.Instance, index?: number): ExampleScenario.Instance;

  clearProcess(): void;
  getProcess(): Array<ExampleScenario.Process>;
  setProcess(value: Array<ExampleScenario.Process>): void;
  addProcess(value?: ExampleScenario.Process, index?: number): ExampleScenario.Process;

  clearWorkflow(): void;
  getWorkflow(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setWorkflow(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addWorkflow(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleScenario.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleScenario): ExampleScenario.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleScenario, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleScenario;
  static deserializeBinaryFromReader(message: ExampleScenario, reader: jspb.BinaryReader): ExampleScenario;
}

export namespace ExampleScenario {
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
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: ExampleScenario.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    actor: Array<ExampleScenario.Actor.AsObject>,
    instance: Array<ExampleScenario.Instance.AsObject>,
    process: Array<ExampleScenario.Process.AsObject>,
    workflow: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
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

  export class Actor extends jspb.Message {
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

    hasActorId(): boolean;
    clearActorId(): void;
    getActorId(): proto_r4_core_datatypes_pb.String | undefined;
    setActorId(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): ExampleScenario.Actor.TypeCode | undefined;
    setType(value?: ExampleScenario.Actor.TypeCode): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Actor.AsObject;
    static toObject(includeInstance: boolean, msg: Actor): Actor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Actor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Actor;
    static deserializeBinaryFromReader(message: Actor, reader: jspb.BinaryReader): Actor;
  }

  export namespace Actor {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      actorId?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: ExampleScenario.Actor.TypeCode.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ExampleScenarioActorTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Instance extends jspb.Message {
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

    hasResourceId(): boolean;
    clearResourceId(): void;
    getResourceId(): proto_r4_core_datatypes_pb.String | undefined;
    setResourceId(value?: proto_r4_core_datatypes_pb.String): void;

    hasResourceType(): boolean;
    clearResourceType(): void;
    getResourceType(): ExampleScenario.Instance.ResourceTypeCode | undefined;
    setResourceType(value?: ExampleScenario.Instance.ResourceTypeCode): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

    clearVersion(): void;
    getVersion(): Array<ExampleScenario.Instance.Version>;
    setVersion(value: Array<ExampleScenario.Instance.Version>): void;
    addVersion(value?: ExampleScenario.Instance.Version, index?: number): ExampleScenario.Instance.Version;

    clearContainedInstance(): void;
    getContainedInstance(): Array<ExampleScenario.Instance.ContainedInstance>;
    setContainedInstance(value: Array<ExampleScenario.Instance.ContainedInstance>): void;
    addContainedInstance(value?: ExampleScenario.Instance.ContainedInstance, index?: number): ExampleScenario.Instance.ContainedInstance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Instance.AsObject;
    static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Instance;
    static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
  }

  export namespace Instance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      resourceId?: proto_r4_core_datatypes_pb.String.AsObject,
      resourceType?: ExampleScenario.Instance.ResourceTypeCode.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      version: Array<ExampleScenario.Instance.Version.AsObject>,
      containedInstance: Array<ExampleScenario.Instance.ContainedInstance.AsObject>,
    }

    export class ResourceTypeCode extends jspb.Message {
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
      toObject(includeInstance?: boolean): ResourceTypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: ResourceTypeCode): ResourceTypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ResourceTypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ResourceTypeCode;
      static deserializeBinaryFromReader(message: ResourceTypeCode, reader: jspb.BinaryReader): ResourceTypeCode;
    }

    export namespace ResourceTypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
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

      hasVersionId(): boolean;
      clearVersionId(): void;
      getVersionId(): proto_r4_core_datatypes_pb.String | undefined;
      setVersionId(value?: proto_r4_core_datatypes_pb.String): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

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
        versionId?: proto_r4_core_datatypes_pb.String.AsObject,
        description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      }
    }

    export class ContainedInstance extends jspb.Message {
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

      hasResourceId(): boolean;
      clearResourceId(): void;
      getResourceId(): proto_r4_core_datatypes_pb.String | undefined;
      setResourceId(value?: proto_r4_core_datatypes_pb.String): void;

      hasVersionId(): boolean;
      clearVersionId(): void;
      getVersionId(): proto_r4_core_datatypes_pb.String | undefined;
      setVersionId(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContainedInstance.AsObject;
      static toObject(includeInstance: boolean, msg: ContainedInstance): ContainedInstance.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContainedInstance, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContainedInstance;
      static deserializeBinaryFromReader(message: ContainedInstance, reader: jspb.BinaryReader): ContainedInstance;
    }

    export namespace ContainedInstance {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        resourceId?: proto_r4_core_datatypes_pb.String.AsObject,
        versionId?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }

  export class Process extends jspb.Message {
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

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): proto_r4_core_datatypes_pb.String | undefined;
    setTitle(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

    hasPreConditions(): boolean;
    clearPreConditions(): void;
    getPreConditions(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setPreConditions(value?: proto_r4_core_datatypes_pb.Markdown): void;

    hasPostConditions(): boolean;
    clearPostConditions(): void;
    getPostConditions(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setPostConditions(value?: proto_r4_core_datatypes_pb.Markdown): void;

    clearStep(): void;
    getStep(): Array<ExampleScenario.Process.Step>;
    setStep(value: Array<ExampleScenario.Process.Step>): void;
    addStep(value?: ExampleScenario.Process.Step, index?: number): ExampleScenario.Process.Step;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Process.AsObject;
    static toObject(includeInstance: boolean, msg: Process): Process.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Process, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Process;
    static deserializeBinaryFromReader(message: Process, reader: jspb.BinaryReader): Process;
  }

  export namespace Process {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      title?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      preConditions?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      postConditions?: proto_r4_core_datatypes_pb.Markdown.AsObject,
      step: Array<ExampleScenario.Process.Step.AsObject>,
    }

    export class Step extends jspb.Message {
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

      clearProcess(): void;
      getProcess(): Array<ExampleScenario.Process>;
      setProcess(value: Array<ExampleScenario.Process>): void;
      addProcess(value?: ExampleScenario.Process, index?: number): ExampleScenario.Process;

      hasPause(): boolean;
      clearPause(): void;
      getPause(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setPause(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): ExampleScenario.Process.Step.Operation | undefined;
      setOperation(value?: ExampleScenario.Process.Step.Operation): void;

      clearAlternative(): void;
      getAlternative(): Array<ExampleScenario.Process.Step.Alternative>;
      setAlternative(value: Array<ExampleScenario.Process.Step.Alternative>): void;
      addAlternative(value?: ExampleScenario.Process.Step.Alternative, index?: number): ExampleScenario.Process.Step.Alternative;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Step.AsObject;
      static toObject(includeInstance: boolean, msg: Step): Step.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Step, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Step;
      static deserializeBinaryFromReader(message: Step, reader: jspb.BinaryReader): Step;
    }

    export namespace Step {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        process: Array<ExampleScenario.Process.AsObject>,
        pause?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        operation?: ExampleScenario.Process.Step.Operation.AsObject,
        alternative: Array<ExampleScenario.Process.Step.Alternative.AsObject>,
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

        hasNumber(): boolean;
        clearNumber(): void;
        getNumber(): proto_r4_core_datatypes_pb.String | undefined;
        setNumber(value?: proto_r4_core_datatypes_pb.String): void;

        hasType(): boolean;
        clearType(): void;
        getType(): proto_r4_core_datatypes_pb.String | undefined;
        setType(value?: proto_r4_core_datatypes_pb.String): void;

        hasName(): boolean;
        clearName(): void;
        getName(): proto_r4_core_datatypes_pb.String | undefined;
        setName(value?: proto_r4_core_datatypes_pb.String): void;

        hasInitiator(): boolean;
        clearInitiator(): void;
        getInitiator(): proto_r4_core_datatypes_pb.String | undefined;
        setInitiator(value?: proto_r4_core_datatypes_pb.String): void;

        hasReceiver(): boolean;
        clearReceiver(): void;
        getReceiver(): proto_r4_core_datatypes_pb.String | undefined;
        setReceiver(value?: proto_r4_core_datatypes_pb.String): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

        hasInitiatorActive(): boolean;
        clearInitiatorActive(): void;
        getInitiatorActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setInitiatorActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasReceiverActive(): boolean;
        clearReceiverActive(): void;
        getReceiverActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
        setReceiverActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

        hasRequest(): boolean;
        clearRequest(): void;
        getRequest(): ExampleScenario.Instance.ContainedInstance | undefined;
        setRequest(value?: ExampleScenario.Instance.ContainedInstance): void;

        hasResponse(): boolean;
        clearResponse(): void;
        getResponse(): ExampleScenario.Instance.ContainedInstance | undefined;
        setResponse(value?: ExampleScenario.Instance.ContainedInstance): void;

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
          number?: proto_r4_core_datatypes_pb.String.AsObject,
          type?: proto_r4_core_datatypes_pb.String.AsObject,
          name?: proto_r4_core_datatypes_pb.String.AsObject,
          initiator?: proto_r4_core_datatypes_pb.String.AsObject,
          receiver?: proto_r4_core_datatypes_pb.String.AsObject,
          description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
          initiatorActive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          receiverActive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          request?: ExampleScenario.Instance.ContainedInstance.AsObject,
          response?: ExampleScenario.Instance.ContainedInstance.AsObject,
        }
      }

      export class Alternative extends jspb.Message {
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

        hasTitle(): boolean;
        clearTitle(): void;
        getTitle(): proto_r4_core_datatypes_pb.String | undefined;
        setTitle(value?: proto_r4_core_datatypes_pb.String): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

        clearStep(): void;
        getStep(): Array<ExampleScenario.Process.Step>;
        setStep(value: Array<ExampleScenario.Process.Step>): void;
        addStep(value?: ExampleScenario.Process.Step, index?: number): ExampleScenario.Process.Step;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Alternative.AsObject;
        static toObject(includeInstance: boolean, msg: Alternative): Alternative.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Alternative, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Alternative;
        static deserializeBinaryFromReader(message: Alternative, reader: jspb.BinaryReader): Alternative;
      }

      export namespace Alternative {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          title?: proto_r4_core_datatypes_pb.String.AsObject,
          description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
          step: Array<ExampleScenario.Process.Step.AsObject>,
        }
      }
    }
  }
}

