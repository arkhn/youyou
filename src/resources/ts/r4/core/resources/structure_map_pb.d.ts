// package: google.fhir.r4.core
// file: proto/r4/core/resources/structure_map.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class StructureMap extends jspb.Message {
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

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): StructureMap.StatusCode | undefined;
  setStatus(value?: StructureMap.StatusCode): void;

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

  clearStructure(): void;
  getStructure(): Array<StructureMap.Structure>;
  setStructure(value: Array<StructureMap.Structure>): void;
  addStructure(value?: StructureMap.Structure, index?: number): StructureMap.Structure;

  clearImport(): void;
  getImport(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setImport(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addImport(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearGroup(): void;
  getGroup(): Array<StructureMap.Group>;
  setGroup(value: Array<StructureMap.Group>): void;
  addGroup(value?: StructureMap.Group, index?: number): StructureMap.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMap.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMap): StructureMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMap;
  static deserializeBinaryFromReader(message: StructureMap, reader: jspb.BinaryReader): StructureMap;
}

export namespace StructureMap {
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
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: StructureMap.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    structure: Array<StructureMap.Structure.AsObject>,
    import: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    group: Array<StructureMap.Group.AsObject>,
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

  export class Structure extends jspb.Message {
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
    getUrl(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setUrl(value?: proto_r4_core_datatypes_pb.Canonical): void;

    hasMode(): boolean;
    clearMode(): void;
    getMode(): StructureMap.Structure.ModeCode | undefined;
    setMode(value?: StructureMap.Structure.ModeCode): void;

    hasAlias(): boolean;
    clearAlias(): void;
    getAlias(): proto_r4_core_datatypes_pb.String | undefined;
    setAlias(value?: proto_r4_core_datatypes_pb.String): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Structure.AsObject;
    static toObject(includeInstance: boolean, msg: Structure): Structure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Structure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Structure;
    static deserializeBinaryFromReader(message: Structure, reader: jspb.BinaryReader): Structure;
  }

  export namespace Structure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      url?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      mode?: StructureMap.Structure.ModeCode.AsObject,
      alias?: proto_r4_core_datatypes_pb.String.AsObject,
      documentation?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class ModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapModelModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Group extends jspb.Message {
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
    getName(): proto_r4_core_datatypes_pb.Id | undefined;
    setName(value?: proto_r4_core_datatypes_pb.Id): void;

    hasExtends(): boolean;
    clearExtends(): void;
    getExtends(): proto_r4_core_datatypes_pb.Id | undefined;
    setExtends(value?: proto_r4_core_datatypes_pb.Id): void;

    hasTypeMode(): boolean;
    clearTypeMode(): void;
    getTypeMode(): StructureMap.Group.TypeModeCode | undefined;
    setTypeMode(value?: StructureMap.Group.TypeModeCode): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

    clearInput(): void;
    getInput(): Array<StructureMap.Group.Input>;
    setInput(value: Array<StructureMap.Group.Input>): void;
    addInput(value?: StructureMap.Group.Input, index?: number): StructureMap.Group.Input;

    clearRule(): void;
    getRule(): Array<StructureMap.Group.Rule>;
    setRule(value: Array<StructureMap.Group.Rule>): void;
    addRule(value?: StructureMap.Group.Rule, index?: number): StructureMap.Group.Rule;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.Id.AsObject,
      pb_extends?: proto_r4_core_datatypes_pb.Id.AsObject,
      typeMode?: StructureMap.Group.TypeModeCode.AsObject,
      documentation?: proto_r4_core_datatypes_pb.String.AsObject,
      input: Array<StructureMap.Group.Input.AsObject>,
      rule: Array<StructureMap.Group.Rule.AsObject>,
    }

    export class TypeModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TypeModeCode.AsObject;
      static toObject(includeInstance: boolean, msg: TypeModeCode): TypeModeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TypeModeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TypeModeCode;
      static deserializeBinaryFromReader(message: TypeModeCode, reader: jspb.BinaryReader): TypeModeCode;
    }

    export namespace TypeModeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapGroupTypeModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Input extends jspb.Message {
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
      getName(): proto_r4_core_datatypes_pb.Id | undefined;
      setName(value?: proto_r4_core_datatypes_pb.Id): void;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.String | undefined;
      setType(value?: proto_r4_core_datatypes_pb.String): void;

      hasMode(): boolean;
      clearMode(): void;
      getMode(): StructureMap.Group.Input.ModeCode | undefined;
      setMode(value?: StructureMap.Group.Input.ModeCode): void;

      hasDocumentation(): boolean;
      clearDocumentation(): void;
      getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
      setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Input.AsObject;
      static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Input;
      static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
    }

    export namespace Input {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: proto_r4_core_datatypes_pb.Id.AsObject,
        type?: proto_r4_core_datatypes_pb.String.AsObject,
        mode?: StructureMap.Group.Input.ModeCode.AsObject,
        documentation?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class ModeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapInputModeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class Rule extends jspb.Message {
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
      getName(): proto_r4_core_datatypes_pb.Id | undefined;
      setName(value?: proto_r4_core_datatypes_pb.Id): void;

      clearSource(): void;
      getSource(): Array<StructureMap.Group.Rule.Source>;
      setSource(value: Array<StructureMap.Group.Rule.Source>): void;
      addSource(value?: StructureMap.Group.Rule.Source, index?: number): StructureMap.Group.Rule.Source;

      clearTarget(): void;
      getTarget(): Array<StructureMap.Group.Rule.Target>;
      setTarget(value: Array<StructureMap.Group.Rule.Target>): void;
      addTarget(value?: StructureMap.Group.Rule.Target, index?: number): StructureMap.Group.Rule.Target;

      clearRule(): void;
      getRule(): Array<StructureMap.Group.Rule>;
      setRule(value: Array<StructureMap.Group.Rule>): void;
      addRule(value?: StructureMap.Group.Rule, index?: number): StructureMap.Group.Rule;

      clearDependent(): void;
      getDependent(): Array<StructureMap.Group.Rule.Dependent>;
      setDependent(value: Array<StructureMap.Group.Rule.Dependent>): void;
      addDependent(value?: StructureMap.Group.Rule.Dependent, index?: number): StructureMap.Group.Rule.Dependent;

      hasDocumentation(): boolean;
      clearDocumentation(): void;
      getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
      setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Rule.AsObject;
      static toObject(includeInstance: boolean, msg: Rule): Rule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Rule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Rule;
      static deserializeBinaryFromReader(message: Rule, reader: jspb.BinaryReader): Rule;
    }

    export namespace Rule {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        name?: proto_r4_core_datatypes_pb.Id.AsObject,
        source: Array<StructureMap.Group.Rule.Source.AsObject>,
        target: Array<StructureMap.Group.Rule.Target.AsObject>,
        rule: Array<StructureMap.Group.Rule.AsObject>,
        dependent: Array<StructureMap.Group.Rule.Dependent.AsObject>,
        documentation?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class Source extends jspb.Message {
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

        hasContext(): boolean;
        clearContext(): void;
        getContext(): proto_r4_core_datatypes_pb.Id | undefined;
        setContext(value?: proto_r4_core_datatypes_pb.Id): void;

        hasMin(): boolean;
        clearMin(): void;
        getMin(): proto_r4_core_datatypes_pb.Integer | undefined;
        setMin(value?: proto_r4_core_datatypes_pb.Integer): void;

        hasMax(): boolean;
        clearMax(): void;
        getMax(): proto_r4_core_datatypes_pb.String | undefined;
        setMax(value?: proto_r4_core_datatypes_pb.String): void;

        hasType(): boolean;
        clearType(): void;
        getType(): proto_r4_core_datatypes_pb.String | undefined;
        setType(value?: proto_r4_core_datatypes_pb.String): void;

        hasDefaultValue(): boolean;
        clearDefaultValue(): void;
        getDefaultValue(): StructureMap.Group.Rule.Source.DefaultValueX | undefined;
        setDefaultValue(value?: StructureMap.Group.Rule.Source.DefaultValueX): void;

        hasElement(): boolean;
        clearElement(): void;
        getElement(): proto_r4_core_datatypes_pb.String | undefined;
        setElement(value?: proto_r4_core_datatypes_pb.String): void;

        hasListMode(): boolean;
        clearListMode(): void;
        getListMode(): StructureMap.Group.Rule.Source.ListModeCode | undefined;
        setListMode(value?: StructureMap.Group.Rule.Source.ListModeCode): void;

        hasVariable(): boolean;
        clearVariable(): void;
        getVariable(): proto_r4_core_datatypes_pb.Id | undefined;
        setVariable(value?: proto_r4_core_datatypes_pb.Id): void;

        hasCondition(): boolean;
        clearCondition(): void;
        getCondition(): proto_r4_core_datatypes_pb.String | undefined;
        setCondition(value?: proto_r4_core_datatypes_pb.String): void;

        hasCheck(): boolean;
        clearCheck(): void;
        getCheck(): proto_r4_core_datatypes_pb.String | undefined;
        setCheck(value?: proto_r4_core_datatypes_pb.String): void;

        hasLogMessage(): boolean;
        clearLogMessage(): void;
        getLogMessage(): proto_r4_core_datatypes_pb.String | undefined;
        setLogMessage(value?: proto_r4_core_datatypes_pb.String): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Source.AsObject;
        static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Source;
        static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
      }

      export namespace Source {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          context?: proto_r4_core_datatypes_pb.Id.AsObject,
          min?: proto_r4_core_datatypes_pb.Integer.AsObject,
          max?: proto_r4_core_datatypes_pb.String.AsObject,
          type?: proto_r4_core_datatypes_pb.String.AsObject,
          defaultValue?: StructureMap.Group.Rule.Source.DefaultValueX.AsObject,
          element?: proto_r4_core_datatypes_pb.String.AsObject,
          listMode?: StructureMap.Group.Rule.Source.ListModeCode.AsObject,
          variable?: proto_r4_core_datatypes_pb.Id.AsObject,
          condition?: proto_r4_core_datatypes_pb.String.AsObject,
          check?: proto_r4_core_datatypes_pb.String.AsObject,
          logMessage?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export class DefaultValueX extends jspb.Message {
          hasBase64Binary(): boolean;
          clearBase64Binary(): void;
          getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
          setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

          hasBoolean(): boolean;
          clearBoolean(): void;
          getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
          setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

          hasCanonical(): boolean;
          clearCanonical(): void;
          getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
          setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

          hasCode(): boolean;
          clearCode(): void;
          getCode(): proto_r4_core_datatypes_pb.Code | undefined;
          setCode(value?: proto_r4_core_datatypes_pb.Code): void;

          hasDate(): boolean;
          clearDate(): void;
          getDate(): proto_r4_core_datatypes_pb.Date | undefined;
          setDate(value?: proto_r4_core_datatypes_pb.Date): void;

          hasDateTime(): boolean;
          clearDateTime(): void;
          getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
          setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

          hasDecimal(): boolean;
          clearDecimal(): void;
          getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
          setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.Id | undefined;
          setId(value?: proto_r4_core_datatypes_pb.Id): void;

          hasInstant(): boolean;
          clearInstant(): void;
          getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
          setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

          hasInteger(): boolean;
          clearInteger(): void;
          getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
          setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

          hasMarkdown(): boolean;
          clearMarkdown(): void;
          getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
          setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

          hasOid(): boolean;
          clearOid(): void;
          getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
          setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

          hasPositiveInt(): boolean;
          clearPositiveInt(): void;
          getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
          setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

          hasStringValue(): boolean;
          clearStringValue(): void;
          getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
          setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

          hasTime(): boolean;
          clearTime(): void;
          getTime(): proto_r4_core_datatypes_pb.Time | undefined;
          setTime(value?: proto_r4_core_datatypes_pb.Time): void;

          hasUnsignedInt(): boolean;
          clearUnsignedInt(): void;
          getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
          setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

          hasUri(): boolean;
          clearUri(): void;
          getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
          setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

          hasUrl(): boolean;
          clearUrl(): void;
          getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
          setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

          hasUuid(): boolean;
          clearUuid(): void;
          getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
          setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

          hasAddress(): boolean;
          clearAddress(): void;
          getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
          setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

          hasAge(): boolean;
          clearAge(): void;
          getAge(): proto_r4_core_datatypes_pb.Age | undefined;
          setAge(value?: proto_r4_core_datatypes_pb.Age): void;

          hasAnnotation(): boolean;
          clearAnnotation(): void;
          getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
          setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

          hasAttachment(): boolean;
          clearAttachment(): void;
          getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
          setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

          hasCodeableConcept(): boolean;
          clearCodeableConcept(): void;
          getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          hasCoding(): boolean;
          clearCoding(): void;
          getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
          setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

          hasContactPoint(): boolean;
          clearContactPoint(): void;
          getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
          setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

          hasCount(): boolean;
          clearCount(): void;
          getCount(): proto_r4_core_datatypes_pb.Count | undefined;
          setCount(value?: proto_r4_core_datatypes_pb.Count): void;

          hasDistance(): boolean;
          clearDistance(): void;
          getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
          setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

          hasDuration(): boolean;
          clearDuration(): void;
          getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
          setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

          hasHumanName(): boolean;
          clearHumanName(): void;
          getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
          setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

          hasIdentifier(): boolean;
          clearIdentifier(): void;
          getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
          setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

          hasMoney(): boolean;
          clearMoney(): void;
          getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
          setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

          hasPeriod(): boolean;
          clearPeriod(): void;
          getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
          setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

          hasQuantity(): boolean;
          clearQuantity(): void;
          getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
          setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

          hasRange(): boolean;
          clearRange(): void;
          getRange(): proto_r4_core_datatypes_pb.Range | undefined;
          setRange(value?: proto_r4_core_datatypes_pb.Range): void;

          hasRatio(): boolean;
          clearRatio(): void;
          getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
          setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

          hasReference(): boolean;
          clearReference(): void;
          getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
          setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

          hasSampledData(): boolean;
          clearSampledData(): void;
          getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
          setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

          hasSignature(): boolean;
          clearSignature(): void;
          getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
          setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

          hasTiming(): boolean;
          clearTiming(): void;
          getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
          setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

          hasContactDetail(): boolean;
          clearContactDetail(): void;
          getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
          setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

          hasContributor(): boolean;
          clearContributor(): void;
          getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
          setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

          hasDataRequirement(): boolean;
          clearDataRequirement(): void;
          getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
          setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

          hasExpression(): boolean;
          clearExpression(): void;
          getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
          setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

          hasParameterDefinition(): boolean;
          clearParameterDefinition(): void;
          getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
          setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

          hasRelatedArtifact(): boolean;
          clearRelatedArtifact(): void;
          getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
          setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

          hasTriggerDefinition(): boolean;
          clearTriggerDefinition(): void;
          getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
          setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

          hasUsageContext(): boolean;
          clearUsageContext(): void;
          getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
          setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

          hasDosage(): boolean;
          clearDosage(): void;
          getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
          setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

          hasMeta(): boolean;
          clearMeta(): void;
          getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
          setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

          getChoiceCase(): DefaultValueX.ChoiceCase;
          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): DefaultValueX.AsObject;
          static toObject(includeInstance: boolean, msg: DefaultValueX): DefaultValueX.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: DefaultValueX, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): DefaultValueX;
          static deserializeBinaryFromReader(message: DefaultValueX, reader: jspb.BinaryReader): DefaultValueX;
        }

        export namespace DefaultValueX {
          export type AsObject = {
            base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
            pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
            canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
            code?: proto_r4_core_datatypes_pb.Code.AsObject,
            date?: proto_r4_core_datatypes_pb.Date.AsObject,
            dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
            decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
            id?: proto_r4_core_datatypes_pb.Id.AsObject,
            instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
            integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
            markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
            oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
            positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
            stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
            time?: proto_r4_core_datatypes_pb.Time.AsObject,
            unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
            uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
            url?: proto_r4_core_datatypes_pb.Url.AsObject,
            uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
            address?: proto_r4_core_datatypes_pb.Address.AsObject,
            age?: proto_r4_core_datatypes_pb.Age.AsObject,
            annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
            attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
            codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
            coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
            contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
            count?: proto_r4_core_datatypes_pb.Count.AsObject,
            distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
            duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
            humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
            identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
            money?: proto_r4_core_datatypes_pb.Money.AsObject,
            period?: proto_r4_core_datatypes_pb.Period.AsObject,
            quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
            range?: proto_r4_core_datatypes_pb.Range.AsObject,
            ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
            reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
            sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
            signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
            timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
            contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
            contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
            dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
            expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
            parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
            relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
            triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
            usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
            dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
            meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
          }

          export enum ChoiceCase {
            CHOICE_NOT_SET = 0,
            BASE64_BINARY = 1,
            BOOLEAN = 2,
            CANONICAL = 3,
            CODE = 4,
            DATE = 5,
            DATE_TIME = 6,
            DECIMAL = 7,
            ID = 8,
            INSTANT = 9,
            INTEGER = 10,
            MARKDOWN = 11,
            OID = 12,
            POSITIVE_INT = 13,
            STRING_VALUE = 14,
            TIME = 15,
            UNSIGNED_INT = 16,
            URI = 17,
            URL = 18,
            UUID = 19,
            ADDRESS = 20,
            AGE = 21,
            ANNOTATION = 22,
            ATTACHMENT = 23,
            CODEABLE_CONCEPT = 24,
            CODING = 25,
            CONTACT_POINT = 26,
            COUNT = 27,
            DISTANCE = 28,
            DURATION = 29,
            HUMAN_NAME = 30,
            IDENTIFIER = 31,
            MONEY = 32,
            PERIOD = 33,
            QUANTITY = 34,
            RANGE = 35,
            RATIO = 36,
            REFERENCE = 37,
            SAMPLED_DATA = 38,
            SIGNATURE = 39,
            TIMING = 40,
            CONTACT_DETAIL = 41,
            CONTRIBUTOR = 42,
            DATA_REQUIREMENT = 43,
            EXPRESSION = 44,
            PARAMETER_DEFINITION = 45,
            RELATED_ARTIFACT = 46,
            TRIGGER_DEFINITION = 47,
            USAGE_CONTEXT = 48,
            DOSAGE = 49,
            META = 50,
          }
        }

        export class ListModeCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ListModeCode.AsObject;
          static toObject(includeInstance: boolean, msg: ListModeCode): ListModeCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ListModeCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ListModeCode;
          static deserializeBinaryFromReader(message: ListModeCode, reader: jspb.BinaryReader): ListModeCode;
        }

        export namespace ListModeCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapSourceListModeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
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

        hasContext(): boolean;
        clearContext(): void;
        getContext(): proto_r4_core_datatypes_pb.Id | undefined;
        setContext(value?: proto_r4_core_datatypes_pb.Id): void;

        hasContextType(): boolean;
        clearContextType(): void;
        getContextType(): StructureMap.Group.Rule.Target.ContextTypeCode | undefined;
        setContextType(value?: StructureMap.Group.Rule.Target.ContextTypeCode): void;

        hasElement(): boolean;
        clearElement(): void;
        getElement(): proto_r4_core_datatypes_pb.String | undefined;
        setElement(value?: proto_r4_core_datatypes_pb.String): void;

        hasVariable(): boolean;
        clearVariable(): void;
        getVariable(): proto_r4_core_datatypes_pb.Id | undefined;
        setVariable(value?: proto_r4_core_datatypes_pb.Id): void;

        clearListMode(): void;
        getListMode(): Array<StructureMap.Group.Rule.Target.ListModeCode>;
        setListMode(value: Array<StructureMap.Group.Rule.Target.ListModeCode>): void;
        addListMode(value?: StructureMap.Group.Rule.Target.ListModeCode, index?: number): StructureMap.Group.Rule.Target.ListModeCode;

        hasListRuleId(): boolean;
        clearListRuleId(): void;
        getListRuleId(): proto_r4_core_datatypes_pb.Id | undefined;
        setListRuleId(value?: proto_r4_core_datatypes_pb.Id): void;

        hasTransform(): boolean;
        clearTransform(): void;
        getTransform(): StructureMap.Group.Rule.Target.TransformCode | undefined;
        setTransform(value?: StructureMap.Group.Rule.Target.TransformCode): void;

        clearParameter(): void;
        getParameter(): Array<StructureMap.Group.Rule.Target.Parameter>;
        setParameter(value: Array<StructureMap.Group.Rule.Target.Parameter>): void;
        addParameter(value?: StructureMap.Group.Rule.Target.Parameter, index?: number): StructureMap.Group.Rule.Target.Parameter;

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
          context?: proto_r4_core_datatypes_pb.Id.AsObject,
          contextType?: StructureMap.Group.Rule.Target.ContextTypeCode.AsObject,
          element?: proto_r4_core_datatypes_pb.String.AsObject,
          variable?: proto_r4_core_datatypes_pb.Id.AsObject,
          listMode: Array<StructureMap.Group.Rule.Target.ListModeCode.AsObject>,
          listRuleId?: proto_r4_core_datatypes_pb.Id.AsObject,
          transform?: StructureMap.Group.Rule.Target.TransformCode.AsObject,
          parameter: Array<StructureMap.Group.Rule.Target.Parameter.AsObject>,
        }

        export class ContextTypeCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ContextTypeCode.AsObject;
          static toObject(includeInstance: boolean, msg: ContextTypeCode): ContextTypeCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ContextTypeCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ContextTypeCode;
          static deserializeBinaryFromReader(message: ContextTypeCode, reader: jspb.BinaryReader): ContextTypeCode;
        }

        export namespace ContextTypeCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapContextTypeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class ListModeCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ListModeCode.AsObject;
          static toObject(includeInstance: boolean, msg: ListModeCode): ListModeCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ListModeCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ListModeCode;
          static deserializeBinaryFromReader(message: ListModeCode, reader: jspb.BinaryReader): ListModeCode;
        }

        export namespace ListModeCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTargetListModeCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class TransformCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): TransformCode.AsObject;
          static toObject(includeInstance: boolean, msg: TransformCode): TransformCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: TransformCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): TransformCode;
          static deserializeBinaryFromReader(message: TransformCode, reader: jspb.BinaryReader): TransformCode;
        }

        export namespace TransformCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap[keyof proto_r4_core_codes_pb.StructureMapTransformCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

          hasValue(): boolean;
          clearValue(): void;
          getValue(): StructureMap.Group.Rule.Target.Parameter.ValueX | undefined;
          setValue(value?: StructureMap.Group.Rule.Target.Parameter.ValueX): void;

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
            value?: StructureMap.Group.Rule.Target.Parameter.ValueX.AsObject,
          }

          export class ValueX extends jspb.Message {
            hasId(): boolean;
            clearId(): void;
            getId(): proto_r4_core_datatypes_pb.Id | undefined;
            setId(value?: proto_r4_core_datatypes_pb.Id): void;

            hasStringValue(): boolean;
            clearStringValue(): void;
            getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
            setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

            hasBoolean(): boolean;
            clearBoolean(): void;
            getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
            setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

            hasInteger(): boolean;
            clearInteger(): void;
            getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
            setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

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
              id?: proto_r4_core_datatypes_pb.Id.AsObject,
              stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
              pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
              integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
              decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
            }

            export enum ChoiceCase {
              CHOICE_NOT_SET = 0,
              ID = 1,
              STRING_VALUE = 2,
              BOOLEAN = 3,
              INTEGER = 4,
              DECIMAL = 5,
            }
          }
        }
      }

      export class Dependent extends jspb.Message {
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
        getName(): proto_r4_core_datatypes_pb.Id | undefined;
        setName(value?: proto_r4_core_datatypes_pb.Id): void;

        clearVariable(): void;
        getVariable(): Array<proto_r4_core_datatypes_pb.String>;
        setVariable(value: Array<proto_r4_core_datatypes_pb.String>): void;
        addVariable(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Dependent.AsObject;
        static toObject(includeInstance: boolean, msg: Dependent): Dependent.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Dependent, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Dependent;
        static deserializeBinaryFromReader(message: Dependent, reader: jspb.BinaryReader): Dependent;
      }

      export namespace Dependent {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          name?: proto_r4_core_datatypes_pb.Id.AsObject,
          variable: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        }
      }
    }
  }
}
