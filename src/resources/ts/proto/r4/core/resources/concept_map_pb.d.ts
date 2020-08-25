// package: google.fhir.r4.core
// file: proto/r4/core/resources/concept_map.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ConceptMap extends jspb.Message {
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
  getStatus(): ConceptMap.StatusCode | undefined;
  setStatus(value?: ConceptMap.StatusCode): void;

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

  hasSource(): boolean;
  clearSource(): void;
  getSource(): ConceptMap.SourceX | undefined;
  setSource(value?: ConceptMap.SourceX): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): ConceptMap.TargetX | undefined;
  setTarget(value?: ConceptMap.TargetX): void;

  clearGroup(): void;
  getGroup(): Array<ConceptMap.Group>;
  setGroup(value: Array<ConceptMap.Group>): void;
  addGroup(value?: ConceptMap.Group, index?: number): ConceptMap.Group;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMap.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMap): ConceptMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMap;
  static deserializeBinaryFromReader(message: ConceptMap, reader: jspb.BinaryReader): ConceptMap;
}

export namespace ConceptMap {
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
    status?: ConceptMap.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    source?: ConceptMap.SourceX.AsObject,
    target?: ConceptMap.TargetX.AsObject,
    group: Array<ConceptMap.Group.AsObject>,
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

  export class SourceX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): SourceX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceX.AsObject;
    static toObject(includeInstance: boolean, msg: SourceX): SourceX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceX;
    static deserializeBinaryFromReader(message: SourceX, reader: jspb.BinaryReader): SourceX;
  }

  export namespace SourceX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
    }
  }

  export class TargetX extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCanonical(): boolean;
    clearCanonical(): void;
    getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

    getChoiceCase(): TargetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TargetX.AsObject;
    static toObject(includeInstance: boolean, msg: TargetX): TargetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TargetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TargetX;
    static deserializeBinaryFromReader(message: TargetX, reader: jspb.BinaryReader): TargetX;
  }

  export namespace TargetX {
    export type AsObject = {
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      URI = 1,
      CANONICAL = 2,
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

    hasSource(): boolean;
    clearSource(): void;
    getSource(): proto_r4_core_datatypes_pb.Uri | undefined;
    setSource(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasSourceVersion(): boolean;
    clearSourceVersion(): void;
    getSourceVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setSourceVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Uri | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasTargetVersion(): boolean;
    clearTargetVersion(): void;
    getTargetVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setTargetVersion(value?: proto_r4_core_datatypes_pb.String): void;

    clearElement(): void;
    getElement(): Array<ConceptMap.Group.SourceElement>;
    setElement(value: Array<ConceptMap.Group.SourceElement>): void;
    addElement(value?: ConceptMap.Group.SourceElement, index?: number): ConceptMap.Group.SourceElement;

    hasUnmapped(): boolean;
    clearUnmapped(): void;
    getUnmapped(): ConceptMap.Group.Unmapped | undefined;
    setUnmapped(value?: ConceptMap.Group.Unmapped): void;

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
      source?: proto_r4_core_datatypes_pb.Uri.AsObject,
      sourceVersion?: proto_r4_core_datatypes_pb.String.AsObject,
      target?: proto_r4_core_datatypes_pb.Uri.AsObject,
      targetVersion?: proto_r4_core_datatypes_pb.String.AsObject,
      element: Array<ConceptMap.Group.SourceElement.AsObject>,
      unmapped?: ConceptMap.Group.Unmapped.AsObject,
    }

    export class SourceElement extends jspb.Message {
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

      hasDisplay(): boolean;
      clearDisplay(): void;
      getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
      setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

      clearTarget(): void;
      getTarget(): Array<ConceptMap.Group.SourceElement.TargetElement>;
      setTarget(value: Array<ConceptMap.Group.SourceElement.TargetElement>): void;
      addTarget(value?: ConceptMap.Group.SourceElement.TargetElement, index?: number): ConceptMap.Group.SourceElement.TargetElement;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SourceElement.AsObject;
      static toObject(includeInstance: boolean, msg: SourceElement): SourceElement.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SourceElement, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SourceElement;
      static deserializeBinaryFromReader(message: SourceElement, reader: jspb.BinaryReader): SourceElement;
    }

    export namespace SourceElement {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        display?: proto_r4_core_datatypes_pb.String.AsObject,
        target: Array<ConceptMap.Group.SourceElement.TargetElement.AsObject>,
      }

      export class TargetElement extends jspb.Message {
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

        hasDisplay(): boolean;
        clearDisplay(): void;
        getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
        setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

        hasEquivalence(): boolean;
        clearEquivalence(): void;
        getEquivalence(): ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode | undefined;
        setEquivalence(value?: ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode): void;

        hasComment(): boolean;
        clearComment(): void;
        getComment(): proto_r4_core_datatypes_pb.String | undefined;
        setComment(value?: proto_r4_core_datatypes_pb.String): void;

        clearDependsOn(): void;
        getDependsOn(): Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement>;
        setDependsOn(value: Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement>): void;
        addDependsOn(value?: ConceptMap.Group.SourceElement.TargetElement.OtherElement, index?: number): ConceptMap.Group.SourceElement.TargetElement.OtherElement;

        clearProduct(): void;
        getProduct(): Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement>;
        setProduct(value: Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement>): void;
        addProduct(value?: ConceptMap.Group.SourceElement.TargetElement.OtherElement, index?: number): ConceptMap.Group.SourceElement.TargetElement.OtherElement;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TargetElement.AsObject;
        static toObject(includeInstance: boolean, msg: TargetElement): TargetElement.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TargetElement, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TargetElement;
        static deserializeBinaryFromReader(message: TargetElement, reader: jspb.BinaryReader): TargetElement;
      }

      export namespace TargetElement {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          code?: proto_r4_core_datatypes_pb.Code.AsObject,
          display?: proto_r4_core_datatypes_pb.String.AsObject,
          equivalence?: ConceptMap.Group.SourceElement.TargetElement.EquivalenceCode.AsObject,
          comment?: proto_r4_core_datatypes_pb.String.AsObject,
          dependsOn: Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement.AsObject>,
          product: Array<ConceptMap.Group.SourceElement.TargetElement.OtherElement.AsObject>,
        }

        export class EquivalenceCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): EquivalenceCode.AsObject;
          static toObject(includeInstance: boolean, msg: EquivalenceCode): EquivalenceCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: EquivalenceCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): EquivalenceCode;
          static deserializeBinaryFromReader(message: EquivalenceCode, reader: jspb.BinaryReader): EquivalenceCode;
        }

        export namespace EquivalenceCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapEquivalenceCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }

        export class OtherElement extends jspb.Message {
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

          hasProperty(): boolean;
          clearProperty(): void;
          getProperty(): proto_r4_core_datatypes_pb.Uri | undefined;
          setProperty(value?: proto_r4_core_datatypes_pb.Uri): void;

          hasSystem(): boolean;
          clearSystem(): void;
          getSystem(): proto_r4_core_datatypes_pb.Canonical | undefined;
          setSystem(value?: proto_r4_core_datatypes_pb.Canonical): void;

          hasValue(): boolean;
          clearValue(): void;
          getValue(): proto_r4_core_datatypes_pb.String | undefined;
          setValue(value?: proto_r4_core_datatypes_pb.String): void;

          hasDisplay(): boolean;
          clearDisplay(): void;
          getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
          setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): OtherElement.AsObject;
          static toObject(includeInstance: boolean, msg: OtherElement): OtherElement.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: OtherElement, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): OtherElement;
          static deserializeBinaryFromReader(message: OtherElement, reader: jspb.BinaryReader): OtherElement;
        }

        export namespace OtherElement {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            property?: proto_r4_core_datatypes_pb.Uri.AsObject,
            system?: proto_r4_core_datatypes_pb.Canonical.AsObject,
            value?: proto_r4_core_datatypes_pb.String.AsObject,
            display?: proto_r4_core_datatypes_pb.String.AsObject,
          }
        }
      }
    }

    export class Unmapped extends jspb.Message {
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
      getMode(): ConceptMap.Group.Unmapped.ModeCode | undefined;
      setMode(value?: ConceptMap.Group.Unmapped.ModeCode): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDisplay(): boolean;
      clearDisplay(): void;
      getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
      setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Canonical): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Unmapped.AsObject;
      static toObject(includeInstance: boolean, msg: Unmapped): Unmapped.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Unmapped, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Unmapped;
      static deserializeBinaryFromReader(message: Unmapped, reader: jspb.BinaryReader): Unmapped;
    }

    export namespace Unmapped {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        mode?: ConceptMap.Group.Unmapped.ModeCode.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        display?: proto_r4_core_datatypes_pb.String.AsObject,
        url?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      }

      export class ModeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap[keyof proto_r4_core_codes_pb.ConceptMapGroupUnmappedModeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }
}

