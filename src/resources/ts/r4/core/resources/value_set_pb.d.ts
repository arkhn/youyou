// package: google.fhir.r4.core
// file: proto/r4/core/resources/value_set.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ValueSet extends jspb.Message {
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
  getStatus(): ValueSet.StatusCode | undefined;
  setStatus(value?: ValueSet.StatusCode): void;

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

  hasImmutable(): boolean;
  clearImmutable(): void;
  getImmutable(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setImmutable(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasCompose(): boolean;
  clearCompose(): void;
  getCompose(): ValueSet.Compose | undefined;
  setCompose(value?: ValueSet.Compose): void;

  hasExpansion(): boolean;
  clearExpansion(): void;
  getExpansion(): ValueSet.Expansion | undefined;
  setExpansion(value?: ValueSet.Expansion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSet): ValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSet;
  static deserializeBinaryFromReader(message: ValueSet, reader: jspb.BinaryReader): ValueSet;
}

export namespace ValueSet {
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
    status?: ValueSet.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    immutable?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    compose?: ValueSet.Compose.AsObject,
    expansion?: ValueSet.Expansion.AsObject,
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

  export class Compose extends jspb.Message {
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

    hasLockedDate(): boolean;
    clearLockedDate(): void;
    getLockedDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setLockedDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasInactive(): boolean;
    clearInactive(): void;
    getInactive(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setInactive(value?: proto_r4_core_datatypes_pb.Boolean): void;

    clearInclude(): void;
    getInclude(): Array<ValueSet.Compose.ConceptSet>;
    setInclude(value: Array<ValueSet.Compose.ConceptSet>): void;
    addInclude(value?: ValueSet.Compose.ConceptSet, index?: number): ValueSet.Compose.ConceptSet;

    clearExclude(): void;
    getExclude(): Array<ValueSet.Compose.ConceptSet>;
    setExclude(value: Array<ValueSet.Compose.ConceptSet>): void;
    addExclude(value?: ValueSet.Compose.ConceptSet, index?: number): ValueSet.Compose.ConceptSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Compose.AsObject;
    static toObject(includeInstance: boolean, msg: Compose): Compose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Compose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Compose;
    static deserializeBinaryFromReader(message: Compose, reader: jspb.BinaryReader): Compose;
  }

  export namespace Compose {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      lockedDate?: proto_r4_core_datatypes_pb.Date.AsObject,
      inactive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      include: Array<ValueSet.Compose.ConceptSet.AsObject>,
      exclude: Array<ValueSet.Compose.ConceptSet.AsObject>,
    }

    export class ConceptSet extends jspb.Message {
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

      hasSystem(): boolean;
      clearSystem(): void;
      getSystem(): proto_r4_core_datatypes_pb.Uri | undefined;
      setSystem(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasVersion(): boolean;
      clearVersion(): void;
      getVersion(): proto_r4_core_datatypes_pb.String | undefined;
      setVersion(value?: proto_r4_core_datatypes_pb.String): void;

      clearConcept(): void;
      getConcept(): Array<ValueSet.Compose.ConceptSet.ConceptReference>;
      setConcept(value: Array<ValueSet.Compose.ConceptSet.ConceptReference>): void;
      addConcept(value?: ValueSet.Compose.ConceptSet.ConceptReference, index?: number): ValueSet.Compose.ConceptSet.ConceptReference;

      clearFilter(): void;
      getFilter(): Array<ValueSet.Compose.ConceptSet.Filter>;
      setFilter(value: Array<ValueSet.Compose.ConceptSet.Filter>): void;
      addFilter(value?: ValueSet.Compose.ConceptSet.Filter, index?: number): ValueSet.Compose.ConceptSet.Filter;

      clearValueSet(): void;
      getValueSet(): Array<proto_r4_core_datatypes_pb.Canonical>;
      setValueSet(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
      addValueSet(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConceptSet.AsObject;
      static toObject(includeInstance: boolean, msg: ConceptSet): ConceptSet.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConceptSet, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConceptSet;
      static deserializeBinaryFromReader(message: ConceptSet, reader: jspb.BinaryReader): ConceptSet;
    }

    export namespace ConceptSet {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        system?: proto_r4_core_datatypes_pb.Uri.AsObject,
        version?: proto_r4_core_datatypes_pb.String.AsObject,
        concept: Array<ValueSet.Compose.ConceptSet.ConceptReference.AsObject>,
        filter: Array<ValueSet.Compose.ConceptSet.Filter.AsObject>,
        valueSet: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
      }

      export class ConceptReference extends jspb.Message {
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

        clearDesignation(): void;
        getDesignation(): Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation>;
        setDesignation(value: Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation>): void;
        addDesignation(value?: ValueSet.Compose.ConceptSet.ConceptReference.Designation, index?: number): ValueSet.Compose.ConceptSet.ConceptReference.Designation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConceptReference.AsObject;
        static toObject(includeInstance: boolean, msg: ConceptReference): ConceptReference.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConceptReference, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConceptReference;
        static deserializeBinaryFromReader(message: ConceptReference, reader: jspb.BinaryReader): ConceptReference;
      }

      export namespace ConceptReference {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          code?: proto_r4_core_datatypes_pb.Code.AsObject,
          display?: proto_r4_core_datatypes_pb.String.AsObject,
          designation: Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation.AsObject>,
        }

        export class Designation extends jspb.Message {
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
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            language?: proto_r4_core_datatypes_pb.Code.AsObject,
            use?: proto_r4_core_datatypes_pb.Coding.AsObject,
            value?: proto_r4_core_datatypes_pb.String.AsObject,
          }
        }
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

        hasProperty(): boolean;
        clearProperty(): void;
        getProperty(): proto_r4_core_datatypes_pb.Code | undefined;
        setProperty(value?: proto_r4_core_datatypes_pb.Code): void;

        hasOp(): boolean;
        clearOp(): void;
        getOp(): ValueSet.Compose.ConceptSet.Filter.OpCode | undefined;
        setOp(value?: ValueSet.Compose.ConceptSet.Filter.OpCode): void;

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
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          property?: proto_r4_core_datatypes_pb.Code.AsObject,
          op?: ValueSet.Compose.ConceptSet.Filter.OpCode.AsObject,
          value?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export class OpCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): OpCode.AsObject;
          static toObject(includeInstance: boolean, msg: OpCode): OpCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: OpCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): OpCode;
          static deserializeBinaryFromReader(message: OpCode, reader: jspb.BinaryReader): OpCode;
        }

        export namespace OpCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.FilterOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.FilterOperatorCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
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

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Uri | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setTimestamp(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasTotal(): boolean;
    clearTotal(): void;
    getTotal(): proto_r4_core_datatypes_pb.Integer | undefined;
    setTotal(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): proto_r4_core_datatypes_pb.Integer | undefined;
    setOffset(value?: proto_r4_core_datatypes_pb.Integer): void;

    clearParameter(): void;
    getParameter(): Array<ValueSet.Expansion.Parameter>;
    setParameter(value: Array<ValueSet.Expansion.Parameter>): void;
    addParameter(value?: ValueSet.Expansion.Parameter, index?: number): ValueSet.Expansion.Parameter;

    clearContains(): void;
    getContains(): Array<ValueSet.Expansion.Contains>;
    setContains(value: Array<ValueSet.Expansion.Contains>): void;
    addContains(value?: ValueSet.Expansion.Contains, index?: number): ValueSet.Expansion.Contains;

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
      identifier?: proto_r4_core_datatypes_pb.Uri.AsObject,
      timestamp?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      total?: proto_r4_core_datatypes_pb.Integer.AsObject,
      offset?: proto_r4_core_datatypes_pb.Integer.AsObject,
      parameter: Array<ValueSet.Expansion.Parameter.AsObject>,
      contains: Array<ValueSet.Expansion.Contains.AsObject>,
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
      getName(): proto_r4_core_datatypes_pb.String | undefined;
      setName(value?: proto_r4_core_datatypes_pb.String): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): ValueSet.Expansion.Parameter.ValueX | undefined;
      setValue(value?: ValueSet.Expansion.Parameter.ValueX): void;

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
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        value?: ValueSet.Expansion.Parameter.ValueX.AsObject,
      }

      export class ValueX extends jspb.Message {
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

        hasUri(): boolean;
        clearUri(): void;
        getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
        setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_r4_core_datatypes_pb.Code | undefined;
        setCode(value?: proto_r4_core_datatypes_pb.Code): void;

        hasDateTime(): boolean;
        clearDateTime(): void;
        getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
        setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

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
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
          pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
          decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
          code?: proto_r4_core_datatypes_pb.Code.AsObject,
          dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          STRING_VALUE = 1,
          BOOLEAN = 2,
          INTEGER = 3,
          DECIMAL = 4,
          URI = 5,
          CODE = 6,
          DATE_TIME = 7,
        }
      }
    }

    export class Contains extends jspb.Message {
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

      hasSystem(): boolean;
      clearSystem(): void;
      getSystem(): proto_r4_core_datatypes_pb.Uri | undefined;
      setSystem(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasAbstract(): boolean;
      clearAbstract(): void;
      getAbstract(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setAbstract(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasInactive(): boolean;
      clearInactive(): void;
      getInactive(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setInactive(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasVersion(): boolean;
      clearVersion(): void;
      getVersion(): proto_r4_core_datatypes_pb.String | undefined;
      setVersion(value?: proto_r4_core_datatypes_pb.String): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDisplay(): boolean;
      clearDisplay(): void;
      getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
      setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

      clearDesignation(): void;
      getDesignation(): Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation>;
      setDesignation(value: Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation>): void;
      addDesignation(value?: ValueSet.Compose.ConceptSet.ConceptReference.Designation, index?: number): ValueSet.Compose.ConceptSet.ConceptReference.Designation;

      clearContains(): void;
      getContains(): Array<ValueSet.Expansion.Contains>;
      setContains(value: Array<ValueSet.Expansion.Contains>): void;
      addContains(value?: ValueSet.Expansion.Contains, index?: number): ValueSet.Expansion.Contains;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Contains.AsObject;
      static toObject(includeInstance: boolean, msg: Contains): Contains.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Contains, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Contains;
      static deserializeBinaryFromReader(message: Contains, reader: jspb.BinaryReader): Contains;
    }

    export namespace Contains {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        system?: proto_r4_core_datatypes_pb.Uri.AsObject,
        pb_abstract?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        inactive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        version?: proto_r4_core_datatypes_pb.String.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        display?: proto_r4_core_datatypes_pb.String.AsObject,
        designation: Array<ValueSet.Compose.ConceptSet.ConceptReference.Designation.AsObject>,
        contains: Array<ValueSet.Expansion.Contains.AsObject>,
      }
    }
  }
}

