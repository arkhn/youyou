// package: google.fhir.r4.core
// file: proto/r4/core/resources/graph_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class GraphDefinition extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): GraphDefinition.StatusCode | undefined;
  setStatus(value?: GraphDefinition.StatusCode): void;

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

  hasStart(): boolean;
  clearStart(): void;
  getStart(): GraphDefinition.StartCode | undefined;
  setStart(value?: GraphDefinition.StartCode): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

  clearLink(): void;
  getLink(): Array<GraphDefinition.Link>;
  setLink(value: Array<GraphDefinition.Link>): void;
  addLink(value?: GraphDefinition.Link, index?: number): GraphDefinition.Link;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: GraphDefinition): GraphDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphDefinition;
  static deserializeBinaryFromReader(message: GraphDefinition, reader: jspb.BinaryReader): GraphDefinition;
}

export namespace GraphDefinition {
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
    status?: GraphDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    start?: GraphDefinition.StartCode.AsObject,
    profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    link: Array<GraphDefinition.Link.AsObject>,
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

  export class StartCode extends jspb.Message {
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
    toObject(includeInstance?: boolean): StartCode.AsObject;
    static toObject(includeInstance: boolean, msg: StartCode): StartCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartCode;
    static deserializeBinaryFromReader(message: StartCode, reader: jspb.BinaryReader): StartCode;
  }

  export namespace StartCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
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

    hasPath(): boolean;
    clearPath(): void;
    getPath(): proto_r4_core_datatypes_pb.String | undefined;
    setPath(value?: proto_r4_core_datatypes_pb.String): void;

    hasSliceName(): boolean;
    clearSliceName(): void;
    getSliceName(): proto_r4_core_datatypes_pb.String | undefined;
    setSliceName(value?: proto_r4_core_datatypes_pb.String): void;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): proto_r4_core_datatypes_pb.Integer | undefined;
    setMin(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): proto_r4_core_datatypes_pb.String | undefined;
    setMax(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearTarget(): void;
    getTarget(): Array<GraphDefinition.Link.Target>;
    setTarget(value: Array<GraphDefinition.Link.Target>): void;
    addTarget(value?: GraphDefinition.Link.Target, index?: number): GraphDefinition.Link.Target;

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
      path?: proto_r4_core_datatypes_pb.String.AsObject,
      sliceName?: proto_r4_core_datatypes_pb.String.AsObject,
      min?: proto_r4_core_datatypes_pb.Integer.AsObject,
      max?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      target: Array<GraphDefinition.Link.Target.AsObject>,
    }

    export class Target extends jspb.Message {
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
      getType(): GraphDefinition.Link.Target.TypeCode | undefined;
      setType(value?: GraphDefinition.Link.Target.TypeCode): void;

      hasParams(): boolean;
      clearParams(): void;
      getParams(): proto_r4_core_datatypes_pb.String | undefined;
      setParams(value?: proto_r4_core_datatypes_pb.String): void;

      hasProfile(): boolean;
      clearProfile(): void;
      getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

      clearCompartment(): void;
      getCompartment(): Array<GraphDefinition.Link.Target.Compartment>;
      setCompartment(value: Array<GraphDefinition.Link.Target.Compartment>): void;
      addCompartment(value?: GraphDefinition.Link.Target.Compartment, index?: number): GraphDefinition.Link.Target.Compartment;

      clearLink(): void;
      getLink(): Array<GraphDefinition.Link>;
      setLink(value: Array<GraphDefinition.Link>): void;
      addLink(value?: GraphDefinition.Link, index?: number): GraphDefinition.Link;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Target.AsObject;
      static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Target;
      static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
    }

    export namespace Target {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: GraphDefinition.Link.Target.TypeCode.AsObject,
        params?: proto_r4_core_datatypes_pb.String.AsObject,
        profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        compartment: Array<GraphDefinition.Link.Target.Compartment.AsObject>,
        link: Array<GraphDefinition.Link.AsObject>,
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

      export class Compartment extends jspb.Message {
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

        hasUse(): boolean;
        clearUse(): void;
        getUse(): GraphDefinition.Link.Target.Compartment.UseCode | undefined;
        setUse(value?: GraphDefinition.Link.Target.Compartment.UseCode): void;

        hasCode(): boolean;
        clearCode(): void;
        getCode(): GraphDefinition.Link.Target.Compartment.CodeType | undefined;
        setCode(value?: GraphDefinition.Link.Target.Compartment.CodeType): void;

        hasRule(): boolean;
        clearRule(): void;
        getRule(): GraphDefinition.Link.Target.Compartment.RuleCode | undefined;
        setRule(value?: GraphDefinition.Link.Target.Compartment.RuleCode): void;

        hasExpression(): boolean;
        clearExpression(): void;
        getExpression(): proto_r4_core_datatypes_pb.String | undefined;
        setExpression(value?: proto_r4_core_datatypes_pb.String): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.String | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.String): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Compartment.AsObject;
        static toObject(includeInstance: boolean, msg: Compartment): Compartment.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Compartment, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Compartment;
        static deserializeBinaryFromReader(message: Compartment, reader: jspb.BinaryReader): Compartment;
      }

      export namespace Compartment {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          use?: GraphDefinition.Link.Target.Compartment.UseCode.AsObject,
          code?: GraphDefinition.Link.Target.Compartment.CodeType.AsObject,
          rule?: GraphDefinition.Link.Target.Compartment.RuleCode.AsObject,
          expression?: proto_r4_core_datatypes_pb.String.AsObject,
          description?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export class UseCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): UseCode.AsObject;
          static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): UseCode;
          static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
        }

        export namespace UseCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentUseCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class CodeType extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap]): void;

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
            value: proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.CompartmentTypeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class RuleCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): RuleCode.AsObject;
          static toObject(includeInstance: boolean, msg: RuleCode): RuleCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: RuleCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): RuleCode;
          static deserializeBinaryFromReader(message: RuleCode, reader: jspb.BinaryReader): RuleCode;
        }

        export namespace RuleCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap[keyof proto_r4_core_codes_pb.GraphCompartmentRuleCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
      }
    }
  }
}

