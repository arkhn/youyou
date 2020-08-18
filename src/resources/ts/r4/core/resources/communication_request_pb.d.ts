// package: google.fhir.r4.core
// file: proto/r4/core/resources/communication_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class CommunicationRequest extends jspb.Message {
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

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplaces(): void;
  getReplaces(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplaces(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CommunicationRequest.StatusCode | undefined;
  setStatus(value?: CommunicationRequest.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): CommunicationRequest.PriorityCode | undefined;
  setPriority(value?: CommunicationRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearMedium(): void;
  getMedium(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setMedium(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addMedium(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAbout(): void;
  getAbout(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAbout(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAbout(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPayload(): void;
  getPayload(): Array<CommunicationRequest.Payload>;
  setPayload(value: Array<CommunicationRequest.Payload>): void;
  addPayload(value?: CommunicationRequest.Payload, index?: number): CommunicationRequest.Payload;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): CommunicationRequest.OccurrenceX | undefined;
  setOccurrence(value?: CommunicationRequest.OccurrenceX): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRecipient(): void;
  getRecipient(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRecipient(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRecipient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasSender(): boolean;
  clearSender(): void;
  getSender(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSender(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequest): CommunicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequest;
  static deserializeBinaryFromReader(message: CommunicationRequest, reader: jspb.BinaryReader): CommunicationRequest;
}

export namespace CommunicationRequest {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replaces: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: CommunicationRequest.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: CommunicationRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    medium: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    about: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    payload: Array<CommunicationRequest.Payload.AsObject>,
    occurrence?: CommunicationRequest.OccurrenceX.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    recipient: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    sender?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Payload extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): CommunicationRequest.Payload.ContentX | undefined;
    setContent(value?: CommunicationRequest.Payload.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: CommunicationRequest.Payload.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        STRING_VALUE = 1,
        ATTACHMENT = 2,
        REFERENCE = 3,
      }
    }
  }

  export class OccurrenceX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): OccurrenceX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OccurrenceX.AsObject;
    static toObject(includeInstance: boolean, msg: OccurrenceX): OccurrenceX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OccurrenceX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OccurrenceX;
    static deserializeBinaryFromReader(message: OccurrenceX, reader: jspb.BinaryReader): OccurrenceX;
  }

  export namespace OccurrenceX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }
}

