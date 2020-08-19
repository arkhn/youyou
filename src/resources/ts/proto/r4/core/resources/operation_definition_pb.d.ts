// package: google.fhir.r4.core
// file: proto/r4/core/resources/operation_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class OperationDefinition extends jspb.Message {
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
  getStatus(): OperationDefinition.StatusCode | undefined;
  setStatus(value?: OperationDefinition.StatusCode): void;

  hasKind(): boolean;
  clearKind(): void;
  getKind(): OperationDefinition.KindCode | undefined;
  setKind(value?: OperationDefinition.KindCode): void;

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

  hasAffectsState(): boolean;
  clearAffectsState(): void;
  getAffectsState(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setAffectsState(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.Code | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.Code): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setComment(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasBase(): boolean;
  clearBase(): void;
  getBase(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setBase(value?: proto_r4_core_datatypes_pb.Canonical): void;

  clearResource(): void;
  getResource(): Array<OperationDefinition.ResourceCode>;
  setResource(value: Array<OperationDefinition.ResourceCode>): void;
  addResource(value?: OperationDefinition.ResourceCode, index?: number): OperationDefinition.ResourceCode;

  hasSystem(): boolean;
  clearSystem(): void;
  getSystem(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setSystem(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setType(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasInstance(): boolean;
  clearInstance(): void;
  getInstance(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setInstance(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasInputProfile(): boolean;
  clearInputProfile(): void;
  getInputProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setInputProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasOutputProfile(): boolean;
  clearOutputProfile(): void;
  getOutputProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setOutputProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

  clearParameter(): void;
  getParameter(): Array<OperationDefinition.Parameter>;
  setParameter(value: Array<OperationDefinition.Parameter>): void;
  addParameter(value?: OperationDefinition.Parameter, index?: number): OperationDefinition.Parameter;

  clearOverload(): void;
  getOverload(): Array<OperationDefinition.Overload>;
  setOverload(value: Array<OperationDefinition.Overload>): void;
  addOverload(value?: OperationDefinition.Overload, index?: number): OperationDefinition.Overload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: OperationDefinition): OperationDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationDefinition;
  static deserializeBinaryFromReader(message: OperationDefinition, reader: jspb.BinaryReader): OperationDefinition;
}

export namespace OperationDefinition {
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
    status?: OperationDefinition.StatusCode.AsObject,
    kind?: OperationDefinition.KindCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    affectsState?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    code?: proto_r4_core_datatypes_pb.Code.AsObject,
    comment?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    base?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    resource: Array<OperationDefinition.ResourceCode.AsObject>,
    system?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    type?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    instance?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    inputProfile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    outputProfile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    parameter: Array<OperationDefinition.Parameter.AsObject>,
    overload: Array<OperationDefinition.Overload.AsObject>,
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
    getValue(): proto_r4_core_codes_pb.OperationKindCode.ValueMap[keyof proto_r4_core_codes_pb.OperationKindCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.OperationKindCode.ValueMap[keyof proto_r4_core_codes_pb.OperationKindCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.OperationKindCode.ValueMap[keyof proto_r4_core_codes_pb.OperationKindCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ResourceCode extends jspb.Message {
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
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.Code | undefined;
    setName(value?: proto_r4_core_datatypes_pb.Code): void;

    hasUse(): boolean;
    clearUse(): void;
    getUse(): OperationDefinition.Parameter.UseCode | undefined;
    setUse(value?: OperationDefinition.Parameter.UseCode): void;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): proto_r4_core_datatypes_pb.Integer | undefined;
    setMin(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): proto_r4_core_datatypes_pb.String | undefined;
    setMax(value?: proto_r4_core_datatypes_pb.String): void;

    hasDocumentation(): boolean;
    clearDocumentation(): void;
    getDocumentation(): proto_r4_core_datatypes_pb.String | undefined;
    setDocumentation(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): OperationDefinition.Parameter.TypeCode | undefined;
    setType(value?: OperationDefinition.Parameter.TypeCode): void;

    clearTargetProfile(): void;
    getTargetProfile(): Array<proto_r4_core_datatypes_pb.Canonical>;
    setTargetProfile(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
    addTargetProfile(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

    hasSearchType(): boolean;
    clearSearchType(): void;
    getSearchType(): OperationDefinition.Parameter.SearchTypeCode | undefined;
    setSearchType(value?: OperationDefinition.Parameter.SearchTypeCode): void;

    hasBinding(): boolean;
    clearBinding(): void;
    getBinding(): OperationDefinition.Parameter.Binding | undefined;
    setBinding(value?: OperationDefinition.Parameter.Binding): void;

    clearReferencedFrom(): void;
    getReferencedFrom(): Array<OperationDefinition.Parameter.ReferencedFrom>;
    setReferencedFrom(value: Array<OperationDefinition.Parameter.ReferencedFrom>): void;
    addReferencedFrom(value?: OperationDefinition.Parameter.ReferencedFrom, index?: number): OperationDefinition.Parameter.ReferencedFrom;

    clearPart(): void;
    getPart(): Array<OperationDefinition.Parameter>;
    setPart(value: Array<OperationDefinition.Parameter>): void;
    addPart(value?: OperationDefinition.Parameter, index?: number): OperationDefinition.Parameter;

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
      use?: OperationDefinition.Parameter.UseCode.AsObject,
      min?: proto_r4_core_datatypes_pb.Integer.AsObject,
      max?: proto_r4_core_datatypes_pb.String.AsObject,
      documentation?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: OperationDefinition.Parameter.TypeCode.AsObject,
      targetProfile: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
      searchType?: OperationDefinition.Parameter.SearchTypeCode.AsObject,
      binding?: OperationDefinition.Parameter.Binding.AsObject,
      referencedFrom: Array<OperationDefinition.Parameter.ReferencedFrom.AsObject>,
      part: Array<OperationDefinition.Parameter.AsObject>,
    }

    export class UseCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap[keyof proto_r4_core_codes_pb.OperationParameterUseCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap];
      setValue(value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap]): void;

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
        value: proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.FHIRAllTypesValueSet.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class SearchTypeCode extends jspb.Message {
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
      toObject(includeInstance?: boolean): SearchTypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: SearchTypeCode): SearchTypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SearchTypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SearchTypeCode;
      static deserializeBinaryFromReader(message: SearchTypeCode, reader: jspb.BinaryReader): SearchTypeCode;
    }

    export namespace SearchTypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchParamTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Binding extends jspb.Message {
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

      hasStrength(): boolean;
      clearStrength(): void;
      getStrength(): OperationDefinition.Parameter.Binding.StrengthCode | undefined;
      setStrength(value?: OperationDefinition.Parameter.Binding.StrengthCode): void;

      hasValueSet(): boolean;
      clearValueSet(): void;
      getValueSet(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setValueSet(value?: proto_r4_core_datatypes_pb.Canonical): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Binding.AsObject;
      static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Binding;
      static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
    }

    export namespace Binding {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        strength?: OperationDefinition.Parameter.Binding.StrengthCode.AsObject,
        valueSet?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      }

      export class StrengthCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StrengthCode.AsObject;
        static toObject(includeInstance: boolean, msg: StrengthCode): StrengthCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StrengthCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StrengthCode;
        static deserializeBinaryFromReader(message: StrengthCode, reader: jspb.BinaryReader): StrengthCode;
      }

      export namespace StrengthCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class ReferencedFrom extends jspb.Message {
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
      getSource(): proto_r4_core_datatypes_pb.String | undefined;
      setSource(value?: proto_r4_core_datatypes_pb.String): void;

      hasSourceId(): boolean;
      clearSourceId(): void;
      getSourceId(): proto_r4_core_datatypes_pb.String | undefined;
      setSourceId(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ReferencedFrom.AsObject;
      static toObject(includeInstance: boolean, msg: ReferencedFrom): ReferencedFrom.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ReferencedFrom, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ReferencedFrom;
      static deserializeBinaryFromReader(message: ReferencedFrom, reader: jspb.BinaryReader): ReferencedFrom;
    }

    export namespace ReferencedFrom {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        source?: proto_r4_core_datatypes_pb.String.AsObject,
        sourceId?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }

  export class Overload extends jspb.Message {
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

    clearParameterName(): void;
    getParameterName(): Array<proto_r4_core_datatypes_pb.String>;
    setParameterName(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addParameterName(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Overload.AsObject;
    static toObject(includeInstance: boolean, msg: Overload): Overload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Overload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Overload;
    static deserializeBinaryFromReader(message: Overload, reader: jspb.BinaryReader): Overload;
  }

  export namespace Overload {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      parameterName: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }
}

