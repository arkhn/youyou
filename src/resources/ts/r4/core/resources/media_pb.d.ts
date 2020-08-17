// package: google.fhir.r4.core
// file: proto/r4/core/resources/media.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Media extends jspb.Message {
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

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Media.StatusCode | undefined;
  setStatus(value?: Media.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasModality(): boolean;
  clearModality(): void;
  getModality(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setModality(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasView(): boolean;
  clearView(): void;
  getView(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setView(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): Media.CreatedX | undefined;
  setCreated(value?: Media.CreatedX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasOperator(): boolean;
  clearOperator(): void;
  getOperator(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOperator(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDeviceName(): boolean;
  clearDeviceName(): void;
  getDeviceName(): proto_r4_core_datatypes_pb.String | undefined;
  setDeviceName(value?: proto_r4_core_datatypes_pb.String): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasHeight(): boolean;
  clearHeight(): void;
  getHeight(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setHeight(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasWidth(): boolean;
  clearWidth(): void;
  getWidth(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setWidth(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasFrames(): boolean;
  clearFrames(): void;
  getFrames(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setFrames(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasDuration(): boolean;
  clearDuration(): void;
  getDuration(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setDuration(value?: proto_r4_core_datatypes_pb.Decimal): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setContent(value?: proto_r4_core_datatypes_pb.Attachment): void;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Media.AsObject;
  static toObject(includeInstance: boolean, msg: Media): Media.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Media, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Media;
  static deserializeBinaryFromReader(message: Media, reader: jspb.BinaryReader): Media;
}

export namespace Media {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: Media.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    modality?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    view?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    created?: Media.CreatedX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    operator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    deviceName?: proto_r4_core_datatypes_pb.String.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    height?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    width?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    frames?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    duration?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    content?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CreatedX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): CreatedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreatedX.AsObject;
    static toObject(includeInstance: boolean, msg: CreatedX): CreatedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreatedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreatedX;
    static deserializeBinaryFromReader(message: CreatedX, reader: jspb.BinaryReader): CreatedX;
  }

  export namespace CreatedX {
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

