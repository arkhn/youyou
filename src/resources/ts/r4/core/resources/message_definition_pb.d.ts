// package: google.fhir.r4.core
// file: proto/r4/core/resources/message_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MessageDefinition extends jspb.Message {
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

  clearReplacesList(): void;
  getReplacesList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setReplacesList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): MessageDefinition.StatusCode | undefined;
  setStatus(value?: MessageDefinition.StatusCode): void;

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

  hasBase(): boolean;
  clearBase(): void;
  getBase(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setBase(value?: proto_r4_core_datatypes_pb.Canonical): void;

  clearParentList(): void;
  getParentList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setParentList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addParent(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): MessageDefinition.EventX | undefined;
  setEvent(value?: MessageDefinition.EventX): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): MessageDefinition.CategoryCode | undefined;
  setCategory(value?: MessageDefinition.CategoryCode): void;

  clearFocusList(): void;
  getFocusList(): Array<MessageDefinition.Focus>;
  setFocusList(value: Array<MessageDefinition.Focus>): void;
  addFocus(value?: MessageDefinition.Focus, index?: number): MessageDefinition.Focus;

  hasResponseRequired(): boolean;
  clearResponseRequired(): void;
  getResponseRequired(): MessageDefinition.ResponseRequiredCode | undefined;
  setResponseRequired(value?: MessageDefinition.ResponseRequiredCode): void;

  clearAllowedResponseList(): void;
  getAllowedResponseList(): Array<MessageDefinition.AllowedResponse>;
  setAllowedResponseList(value: Array<MessageDefinition.AllowedResponse>): void;
  addAllowedResponse(value?: MessageDefinition.AllowedResponse, index?: number): MessageDefinition.AllowedResponse;

  clearGraphList(): void;
  getGraphList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setGraphList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addGraph(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: MessageDefinition): MessageDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageDefinition;
  static deserializeBinaryFromReader(message: MessageDefinition, reader: jspb.BinaryReader): MessageDefinition;
}

export namespace MessageDefinition {
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
    replacesList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    status?: MessageDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdictionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    base?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    parentList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    event?: MessageDefinition.EventX.AsObject,
    category?: MessageDefinition.CategoryCode.AsObject,
    focusList: Array<MessageDefinition.Focus.AsObject>,
    responseRequired?: MessageDefinition.ResponseRequiredCode.AsObject,
    allowedResponseList: Array<MessageDefinition.AllowedResponse.AsObject>,
    graphList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
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

  export class EventX extends jspb.Message {
    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
    setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    getChoiceCase(): EventX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventX.AsObject;
    static toObject(includeInstance: boolean, msg: EventX): EventX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventX;
    static deserializeBinaryFromReader(message: EventX, reader: jspb.BinaryReader): EventX;
  }

  export namespace EventX {
    export type AsObject = {
      coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODING = 1,
      URI = 2,
    }
  }

  export class CategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryCode.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryCode): CategoryCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryCode;
    static deserializeBinaryFromReader(message: CategoryCode, reader: jspb.BinaryReader): CategoryCode;
  }

  export namespace CategoryCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.MessageSignificanceCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Focus extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): MessageDefinition.Focus.CodeType | undefined;
    setCode(value?: MessageDefinition.Focus.CodeType): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setProfile(value?: proto_r4_core_datatypes_pb.Canonical): void;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setMin(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): proto_r4_core_datatypes_pb.String | undefined;
    setMax(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Focus.AsObject;
    static toObject(includeInstance: boolean, msg: Focus): Focus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Focus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Focus;
    static deserializeBinaryFromReader(message: Focus, reader: jspb.BinaryReader): Focus;
  }

  export namespace Focus {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: MessageDefinition.Focus.CodeType.AsObject,
      profile?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      min?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      max?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class ResponseRequiredCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseRequiredCode.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseRequiredCode): ResponseRequiredCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseRequiredCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseRequiredCode;
    static deserializeBinaryFromReader(message: ResponseRequiredCode, reader: jspb.BinaryReader): ResponseRequiredCode;
  }

  export namespace ResponseRequiredCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap[keyof proto_r4_core_codes_pb.MessageheaderResponseRequestCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class AllowedResponse extends jspb.Message {
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

    hasMessage(): boolean;
    clearMessage(): void;
    getMessage(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setMessage(value?: proto_r4_core_datatypes_pb.Canonical): void;

    hasSituation(): boolean;
    clearSituation(): void;
    getSituation(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setSituation(value?: proto_r4_core_datatypes_pb.Markdown): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllowedResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllowedResponse): AllowedResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllowedResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllowedResponse;
    static deserializeBinaryFromReader(message: AllowedResponse, reader: jspb.BinaryReader): AllowedResponse;
  }

  export namespace AllowedResponse {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      message?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      situation?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }
  }
}

