// package: google.fhir.r4.core
// file: proto/r4/core/resources/procedure.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Procedure extends jspb.Message {
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

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

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
  getStatus(): Procedure.StatusCode | undefined;
  setStatus(value?: Procedure.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformed(): boolean;
  clearPerformed(): void;
  getPerformed(): Procedure.PerformedX | undefined;
  setPerformed(value?: Procedure.PerformedX): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPerformerList(): void;
  getPerformerList(): Array<Procedure.Performer>;
  setPerformerList(value: Array<Procedure.Performer>): void;
  addPerformer(value?: Procedure.Performer, index?: number): Procedure.Performer;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBodySiteList(): void;
  getBodySiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReportList(): void;
  getReportList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReportList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReport(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComplicationList(): void;
  getComplicationList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setComplicationList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addComplication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearComplicationDetailList(): void;
  getComplicationDetailList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setComplicationDetailList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addComplicationDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearFollowUpList(): void;
  getFollowUpList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFollowUpList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFollowUp(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearFocalDeviceList(): void;
  getFocalDeviceList(): Array<Procedure.FocalDevice>;
  setFocalDeviceList(value: Array<Procedure.FocalDevice>): void;
  addFocalDevice(value?: Procedure.FocalDevice, index?: number): Procedure.FocalDevice;

  clearUsedReferenceList(): void;
  getUsedReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setUsedReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addUsedReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearUsedCodeList(): void;
  getUsedCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setUsedCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addUsedCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Procedure.AsObject;
  static toObject(includeInstance: boolean, msg: Procedure): Procedure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Procedure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Procedure;
  static deserializeBinaryFromReader(message: Procedure, reader: jspb.BinaryReader): Procedure;
}

export namespace Procedure {
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
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: Procedure.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performed?: Procedure.PerformedX.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerList: Array<Procedure.Performer.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reportList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    complicationList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    complicationDetailList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    followUpList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    focalDeviceList: Array<Procedure.FocalDevice.AsObject>,
    usedReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    usedCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
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

  export class PerformedX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): PerformedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PerformedX.AsObject;
    static toObject(includeInstance: boolean, msg: PerformedX): PerformedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PerformedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PerformedX;
    static deserializeBinaryFromReader(message: PerformedX, reader: jspb.BinaryReader): PerformedX;
  }

  export namespace PerformedX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      STRING_VALUE = 3,
      AGE = 4,
      RANGE = 5,
    }
  }

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class FocalDevice extends jspb.Message {
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

    hasAction(): boolean;
    clearAction(): void;
    getAction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasManipulated(): boolean;
    clearManipulated(): void;
    getManipulated(): proto_r4_core_datatypes_pb.Reference | undefined;
    setManipulated(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FocalDevice.AsObject;
    static toObject(includeInstance: boolean, msg: FocalDevice): FocalDevice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FocalDevice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FocalDevice;
    static deserializeBinaryFromReader(message: FocalDevice, reader: jspb.BinaryReader): FocalDevice;
  }

  export namespace FocalDevice {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manipulated?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

