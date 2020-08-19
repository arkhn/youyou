// package: google.fhir.r4.core
// file: proto/r4/core/resources/message_header.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MessageHeader extends jspb.Message {
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

  hasEvent(): boolean;
  clearEvent(): void;
  getEvent(): MessageHeader.EventX | undefined;
  setEvent(value?: MessageHeader.EventX): void;

  clearDestination(): void;
  getDestination(): Array<MessageHeader.MessageDestination>;
  setDestination(value: Array<MessageHeader.MessageDestination>): void;
  addDestination(value?: MessageHeader.MessageDestination, index?: number): MessageHeader.MessageDestination;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSender(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEnterer(): boolean;
  clearEnterer(): void;
  getEnterer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEnterer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): MessageHeader.MessageSource | undefined;
  setSource(value?: MessageHeader.MessageSource): void;

  hasResponsible(): boolean;
  clearResponsible(): void;
  getResponsible(): proto_r4_core_datatypes_pb.Reference | undefined;
  setResponsible(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasResponse(): boolean;
  clearResponse(): void;
  getResponse(): MessageHeader.Response | undefined;
  setResponse(value?: MessageHeader.Response): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setDefinition(value?: proto_r4_core_datatypes_pb.Canonical): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeader.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeader): MessageHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeader;
  static deserializeBinaryFromReader(message: MessageHeader, reader: jspb.BinaryReader): MessageHeader;
}

export namespace MessageHeader {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    event?: MessageHeader.EventX.AsObject,
    destination: Array<MessageHeader.MessageDestination.AsObject>,
    sender?: proto_r4_core_datatypes_pb.Reference.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    source?: MessageHeader.MessageSource.AsObject,
    responsible?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    response?: MessageHeader.Response.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    definition?: proto_r4_core_datatypes_pb.Canonical.AsObject,
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

  export class MessageDestination extends jspb.Message {
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

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): proto_r4_core_datatypes_pb.Url | undefined;
    setEndpoint(value?: proto_r4_core_datatypes_pb.Url): void;

    hasReceiver(): boolean;
    clearReceiver(): void;
    getReceiver(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReceiver(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageDestination.AsObject;
    static toObject(includeInstance: boolean, msg: MessageDestination): MessageDestination.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageDestination, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageDestination;
    static deserializeBinaryFromReader(message: MessageDestination, reader: jspb.BinaryReader): MessageDestination;
  }

  export namespace MessageDestination {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      target?: proto_r4_core_datatypes_pb.Reference.AsObject,
      endpoint?: proto_r4_core_datatypes_pb.Url.AsObject,
      receiver?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class MessageSource extends jspb.Message {
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

    hasSoftware(): boolean;
    clearSoftware(): void;
    getSoftware(): proto_r4_core_datatypes_pb.String | undefined;
    setSoftware(value?: proto_r4_core_datatypes_pb.String): void;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasContact(): boolean;
    clearContact(): void;
    getContact(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
    setContact(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

    hasEndpoint(): boolean;
    clearEndpoint(): void;
    getEndpoint(): proto_r4_core_datatypes_pb.Url | undefined;
    setEndpoint(value?: proto_r4_core_datatypes_pb.Url): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MessageSource.AsObject;
    static toObject(includeInstance: boolean, msg: MessageSource): MessageSource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MessageSource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MessageSource;
    static deserializeBinaryFromReader(message: MessageSource, reader: jspb.BinaryReader): MessageSource;
  }

  export namespace MessageSource {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      software?: proto_r4_core_datatypes_pb.String.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
      contact?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
      endpoint?: proto_r4_core_datatypes_pb.Url.AsObject,
    }
  }

  export class Response extends jspb.Message {
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
    getIdentifier(): proto_r4_core_datatypes_pb.Id | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Id): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): MessageHeader.Response.CodeType | undefined;
    setCode(value?: MessageHeader.Response.CodeType): void;

    hasDetails(): boolean;
    clearDetails(): void;
    getDetails(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDetails(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier?: proto_r4_core_datatypes_pb.Id.AsObject,
      code?: MessageHeader.Response.CodeType.AsObject,
      details?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ResponseTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResponseTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ResponseTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResponseTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.ResponseTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResponseTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

