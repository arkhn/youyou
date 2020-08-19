// package: google.fhir.r4.uscore
// file: proto/r4/uscore.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../proto/r4/core/valuesets_pb";
import * as proto_r4_uscore_codes_pb from "../../proto/r4/uscore_codes_pb";

export class USCoreProcedureProfile extends jspb.Message {
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

  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUri(): void;
  getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreProcedureProfile.StatusCode | undefined;
  setStatus(value?: USCoreProcedureProfile.StatusCode): void;

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
  getPerformed(): USCoreProcedureProfile.PerformedX | undefined;
  setPerformed(value?: USCoreProcedureProfile.PerformedX): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPerformer(): void;
  getPerformer(): Array<USCoreProcedureProfile.Performer>;
  setPerformer(value: Array<USCoreProcedureProfile.Performer>): void;
  addPerformer(value?: USCoreProcedureProfile.Performer, index?: number): USCoreProcedureProfile.Performer;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBodySite(): void;
  getBodySite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setOutcome(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReport(): void;
  getReport(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReport(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReport(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComplication(): void;
  getComplication(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setComplication(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addComplication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearComplicationDetail(): void;
  getComplicationDetail(): Array<proto_r4_core_datatypes_pb.Reference>;
  setComplicationDetail(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addComplicationDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearFollowUp(): void;
  getFollowUp(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFollowUp(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFollowUp(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearFocalDevice(): void;
  getFocalDevice(): Array<USCoreProcedureProfile.FocalDevice>;
  setFocalDevice(value: Array<USCoreProcedureProfile.FocalDevice>): void;
  addFocalDevice(value?: USCoreProcedureProfile.FocalDevice, index?: number): USCoreProcedureProfile.FocalDevice;

  clearUsedReference(): void;
  getUsedReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setUsedReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addUsedReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearUsedCode(): void;
  getUsedCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setUsedCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addUsedCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreProcedureProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreProcedureProfile): USCoreProcedureProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreProcedureProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreProcedureProfile;
  static deserializeBinaryFromReader(message: USCoreProcedureProfile, reader: jspb.BinaryReader): USCoreProcedureProfile;
}

export namespace USCoreProcedureProfile {
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
    instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCoreProcedureProfile.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performed?: USCoreProcedureProfile.PerformedX.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer: Array<USCoreProcedureProfile.Performer.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcome?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    report: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    complication: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    complicationDetail: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    followUp: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    focalDevice: Array<USCoreProcedureProfile.FocalDevice.AsObject>,
    usedReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    usedCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EventStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EventStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      action?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manipulated?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class USCorePractitionerProfile extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearName(): void;
  getName(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setName(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAddress(): void;
  getAddress(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddress(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): USCorePractitionerProfile.GenderCode | undefined;
  setGender(value?: USCorePractitionerProfile.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  clearPhoto(): void;
  getPhoto(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhoto(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  clearQualification(): void;
  getQualification(): Array<USCorePractitionerProfile.Qualification>;
  setQualification(value: Array<USCorePractitionerProfile.Qualification>): void;
  addQualification(value?: USCorePractitionerProfile.Qualification, index?: number): USCorePractitionerProfile.Qualification;

  clearCommunication(): void;
  getCommunication(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCommunication(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCommunication(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePractitionerProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePractitionerProfile): USCorePractitionerProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePractitionerProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePractitionerProfile;
  static deserializeBinaryFromReader(message: USCorePractitionerProfile, reader: jspb.BinaryReader): USCorePractitionerProfile;
}

export namespace USCorePractitionerProfile {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    name: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    address: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    gender?: USCorePractitionerProfile.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    photo: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    qualification: Array<USCorePractitionerProfile.Qualification.AsObject>,
    communication: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Qualification extends jspb.Message {
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

    clearIdentifier(): void;
    getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Qualification.AsObject;
    static toObject(includeInstance: boolean, msg: Qualification): Qualification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Qualification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Qualification;
    static deserializeBinaryFromReader(message: Qualification, reader: jspb.BinaryReader): Qualification;
  }

  export namespace Qualification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class USCoreDiagnosticReportProfileLaboratoryReporting extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreDiagnosticReportProfileLaboratoryReporting.StatusCode | undefined;
  setStatus(value?: USCoreDiagnosticReportProfileLaboratoryReporting.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCoreDiagnosticReportProfileLaboratoryReporting.EffectiveX | undefined;
  setEffective(value?: USCoreDiagnosticReportProfileLaboratoryReporting.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultsInterpreter(): void;
  getResultsInterpreter(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultsInterpreter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultsInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResult(): void;
  getResult(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResult(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResult(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMedia(): void;
  getMedia(): Array<USCoreDiagnosticReportProfileLaboratoryReporting.Media>;
  setMedia(value: Array<USCoreDiagnosticReportProfileLaboratoryReporting.Media>): void;
  addMedia(value?: USCoreDiagnosticReportProfileLaboratoryReporting.Media, index?: number): USCoreDiagnosticReportProfileLaboratoryReporting.Media;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_r4_core_datatypes_pb.String | undefined;
  setConclusion(value?: proto_r4_core_datatypes_pb.String): void;

  clearConclusionCode(): void;
  getConclusionCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConclusionCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addConclusionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreDiagnosticReportProfileLaboratoryReporting.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreDiagnosticReportProfileLaboratoryReporting): USCoreDiagnosticReportProfileLaboratoryReporting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreDiagnosticReportProfileLaboratoryReporting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreDiagnosticReportProfileLaboratoryReporting;
  static deserializeBinaryFromReader(message: USCoreDiagnosticReportProfileLaboratoryReporting, reader: jspb.BinaryReader): USCoreDiagnosticReportProfileLaboratoryReporting;
}

export namespace USCoreDiagnosticReportProfileLaboratoryReporting {
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
    status?: USCoreDiagnosticReportProfileLaboratoryReporting.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCoreDiagnosticReportProfileLaboratoryReporting.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultsInterpreter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimen: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    result: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    imagingStudy: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    media: Array<USCoreDiagnosticReportProfileLaboratoryReporting.Media.AsObject>,
    conclusion?: proto_r4_core_datatypes_pb.String.AsObject,
    conclusionCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    presentedForm: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class Media extends jspb.Message {
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

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLink(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      link?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class USCorePediatricWeightForHeightObservationProfile extends jspb.Message {
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

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCorePediatricWeightForHeightObservationProfile.StatusCode | undefined;
  setStatus(value?: USCorePediatricWeightForHeightObservationProfile.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCorePediatricWeightForHeightObservationProfile.EffectiveX | undefined;
  setEffective(value?: USCorePediatricWeightForHeightObservationProfile.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): USCorePediatricWeightForHeightObservationProfile.ValueX | undefined;
  setValue(value?: USCorePediatricWeightForHeightObservationProfile.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange>;
  setReferenceRange(value: Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange>): void;
  addReferenceRange(value?: USCorePediatricWeightForHeightObservationProfile.ReferenceRange, index?: number): USCorePediatricWeightForHeightObservationProfile.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<USCorePediatricWeightForHeightObservationProfile.Component>;
  setComponent(value: Array<USCorePediatricWeightForHeightObservationProfile.Component>): void;
  addComponent(value?: USCorePediatricWeightForHeightObservationProfile.Component, index?: number): USCorePediatricWeightForHeightObservationProfile.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePediatricWeightForHeightObservationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePediatricWeightForHeightObservationProfile): USCorePediatricWeightForHeightObservationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePediatricWeightForHeightObservationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePediatricWeightForHeightObservationProfile;
  static deserializeBinaryFromReader(message: USCorePediatricWeightForHeightObservationProfile, reader: jspb.BinaryReader): USCorePediatricWeightForHeightObservationProfile;
}

export namespace USCorePediatricWeightForHeightObservationProfile {
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
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCorePediatricWeightForHeightObservationProfile.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCorePediatricWeightForHeightObservationProfile.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: USCorePediatricWeightForHeightObservationProfile.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<USCorePediatricWeightForHeightObservationProfile.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): USCorePediatricWeightForHeightObservationProfile.Component.ValueX | undefined;
    setValue(value?: USCorePediatricWeightForHeightObservationProfile.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange>;
    setReferenceRange(value: Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange>): void;
    addReferenceRange(value?: USCorePediatricWeightForHeightObservationProfile.ReferenceRange, index?: number): USCorePediatricWeightForHeightObservationProfile.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: USCorePediatricWeightForHeightObservationProfile.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<USCorePediatricWeightForHeightObservationProfile.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

export class USCoreEncounterProfile extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreEncounterProfile.StatusCode | undefined;
  setStatus(value?: USCoreEncounterProfile.StatusCode): void;

  clearStatusHistory(): void;
  getStatusHistory(): Array<USCoreEncounterProfile.StatusHistory>;
  setStatusHistory(value: Array<USCoreEncounterProfile.StatusHistory>): void;
  addStatusHistory(value?: USCoreEncounterProfile.StatusHistory, index?: number): USCoreEncounterProfile.StatusHistory;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
  setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

  clearClassHistory(): void;
  getClassHistory(): Array<USCoreEncounterProfile.ClassHistory>;
  setClassHistory(value: Array<USCoreEncounterProfile.ClassHistory>): void;
  addClassHistory(value?: USCoreEncounterProfile.ClassHistory, index?: number): USCoreEncounterProfile.ClassHistory;

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasServiceType(): boolean;
  clearServiceType(): void;
  getServiceType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setServiceType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearEpisodeOfCare(): void;
  getEpisodeOfCare(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEpisodeOfCare(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEpisodeOfCare(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearParticipant(): void;
  getParticipant(): Array<USCoreEncounterProfile.Participant>;
  setParticipant(value: Array<USCoreEncounterProfile.Participant>): void;
  addParticipant(value?: USCoreEncounterProfile.Participant, index?: number): USCoreEncounterProfile.Participant;

  clearAppointment(): void;
  getAppointment(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAppointment(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAppointment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): proto_r4_core_datatypes_pb.Duration | undefined;
  setLength(value?: proto_r4_core_datatypes_pb.Duration): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDiagnosis(): void;
  getDiagnosis(): Array<USCoreEncounterProfile.Diagnosis>;
  setDiagnosis(value: Array<USCoreEncounterProfile.Diagnosis>): void;
  addDiagnosis(value?: USCoreEncounterProfile.Diagnosis, index?: number): USCoreEncounterProfile.Diagnosis;

  clearAccount(): void;
  getAccount(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAccount(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAccount(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasHospitalization(): boolean;
  clearHospitalization(): void;
  getHospitalization(): USCoreEncounterProfile.Hospitalization | undefined;
  setHospitalization(value?: USCoreEncounterProfile.Hospitalization): void;

  clearLocation(): void;
  getLocation(): Array<USCoreEncounterProfile.Location>;
  setLocation(value: Array<USCoreEncounterProfile.Location>): void;
  addLocation(value?: USCoreEncounterProfile.Location, index?: number): USCoreEncounterProfile.Location;

  hasServiceProvider(): boolean;
  clearServiceProvider(): void;
  getServiceProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setServiceProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreEncounterProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreEncounterProfile): USCoreEncounterProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreEncounterProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreEncounterProfile;
  static deserializeBinaryFromReader(message: USCoreEncounterProfile, reader: jspb.BinaryReader): USCoreEncounterProfile;
}

export namespace USCoreEncounterProfile {
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
    status?: USCoreEncounterProfile.StatusCode.AsObject,
    statusHistory: Array<USCoreEncounterProfile.StatusHistory.AsObject>,
    classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
    classHistory: Array<USCoreEncounterProfile.ClassHistory.AsObject>,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    episodeOfCare: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    participant: Array<USCoreEncounterProfile.Participant.AsObject>,
    appointment: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    length?: proto_r4_core_datatypes_pb.Duration.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    diagnosis: Array<USCoreEncounterProfile.Diagnosis.AsObject>,
    account: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    hospitalization?: USCoreEncounterProfile.Hospitalization.AsObject,
    location: Array<USCoreEncounterProfile.Location.AsObject>,
    serviceProvider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StatusHistory extends jspb.Message {
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

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): USCoreEncounterProfile.StatusHistory.StatusCode | undefined;
    setStatus(value?: USCoreEncounterProfile.StatusHistory.StatusCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusHistory.AsObject;
    static toObject(includeInstance: boolean, msg: StatusHistory): StatusHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusHistory;
    static deserializeBinaryFromReader(message: StatusHistory, reader: jspb.BinaryReader): StatusHistory;
  }

  export namespace StatusHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      status?: USCoreEncounterProfile.StatusHistory.StatusCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class ClassHistory extends jspb.Message {
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

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
    setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassHistory.AsObject;
    static toObject(includeInstance: boolean, msg: ClassHistory): ClassHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassHistory;
    static deserializeBinaryFromReader(message: ClassHistory, reader: jspb.BinaryReader): ClassHistory;
  }

  export namespace ClassHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }

  export class Participant extends jspb.Message {
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

    clearType(): void;
    getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIndividual(): boolean;
    clearIndividual(): void;
    getIndividual(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIndividual(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      individual?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Diagnosis extends jspb.Message {
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

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCondition(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasUse(): boolean;
    clearUse(): void;
    getUse(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUse(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRank(): boolean;
    clearRank(): void;
    getRank(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setRank(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Diagnosis.AsObject;
    static toObject(includeInstance: boolean, msg: Diagnosis): Diagnosis.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Diagnosis, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Diagnosis;
    static deserializeBinaryFromReader(message: Diagnosis, reader: jspb.BinaryReader): Diagnosis;
  }

  export namespace Diagnosis {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      condition?: proto_r4_core_datatypes_pb.Reference.AsObject,
      use?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      rank?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    }
  }

  export class Hospitalization extends jspb.Message {
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

    hasPreAdmissionIdentifier(): boolean;
    clearPreAdmissionIdentifier(): void;
    getPreAdmissionIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setPreAdmissionIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrigin(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAdmitSource(): boolean;
    clearAdmitSource(): void;
    getAdmitSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdmitSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReAdmission(): boolean;
    clearReAdmission(): void;
    getReAdmission(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReAdmission(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearDietPreference(): void;
    getDietPreference(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setDietPreference(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addDietPreference(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialCourtesy(): void;
    getSpecialCourtesy(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialCourtesy(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialCourtesy(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialArrangement(): void;
    getSpecialArrangement(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialArrangement(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialArrangement(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDestination(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDischargeDisposition(): boolean;
    clearDischargeDisposition(): void;
    getDischargeDisposition(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDischargeDisposition(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hospitalization.AsObject;
    static toObject(includeInstance: boolean, msg: Hospitalization): Hospitalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hospitalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hospitalization;
    static deserializeBinaryFromReader(message: Hospitalization, reader: jspb.BinaryReader): Hospitalization;
  }

  export namespace Hospitalization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      preAdmissionIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      origin?: proto_r4_core_datatypes_pb.Reference.AsObject,
      admitSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reAdmission?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      dietPreference: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialCourtesy: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialArrangement: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      destination?: proto_r4_core_datatypes_pb.Reference.AsObject,
      dischargeDisposition?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Location extends jspb.Message {
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

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): USCoreEncounterProfile.Location.StatusCode | undefined;
    setStatus(value?: USCoreEncounterProfile.Location.StatusCode): void;

    hasPhysicalType(): boolean;
    clearPhysicalType(): void;
    getPhysicalType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPhysicalType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      location?: proto_r4_core_datatypes_pb.Reference.AsObject,
      status?: USCoreEncounterProfile.Location.StatusCode.AsObject,
      physicalType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class USCoreDocumentReferenceProfile extends jspb.Message {
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

  hasMasterIdentifier(): boolean;
  clearMasterIdentifier(): void;
  getMasterIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setMasterIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreDocumentReferenceProfile.StatusCode | undefined;
  setStatus(value?: USCoreDocumentReferenceProfile.StatusCode): void;

  hasDocStatus(): boolean;
  clearDocStatus(): void;
  getDocStatus(): USCoreDocumentReferenceProfile.DocStatusCode | undefined;
  setDocStatus(value?: USCoreDocumentReferenceProfile.DocStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.Instant | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearAuthor(): void;
  getAuthor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAuthor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAuthenticator(): boolean;
  clearAuthenticator(): void;
  getAuthenticator(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthenticator(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCustodian(): boolean;
  clearCustodian(): void;
  getCustodian(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCustodian(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRelatesTo(): void;
  getRelatesTo(): Array<USCoreDocumentReferenceProfile.RelatesTo>;
  setRelatesTo(value: Array<USCoreDocumentReferenceProfile.RelatesTo>): void;
  addRelatesTo(value?: USCoreDocumentReferenceProfile.RelatesTo, index?: number): USCoreDocumentReferenceProfile.RelatesTo;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSecurityLabel(): void;
  getSecurityLabel(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSecurityLabel(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSecurityLabel(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): USCoreDocumentReferenceProfile.Content | undefined;
  setContent(value?: USCoreDocumentReferenceProfile.Content): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): USCoreDocumentReferenceProfile.Context | undefined;
  setContext(value?: USCoreDocumentReferenceProfile.Context): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreDocumentReferenceProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreDocumentReferenceProfile): USCoreDocumentReferenceProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreDocumentReferenceProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreDocumentReferenceProfile;
  static deserializeBinaryFromReader(message: USCoreDocumentReferenceProfile, reader: jspb.BinaryReader): USCoreDocumentReferenceProfile;
}

export namespace USCoreDocumentReferenceProfile {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    masterIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    status?: USCoreDocumentReferenceProfile.StatusCode.AsObject,
    docStatus?: USCoreDocumentReferenceProfile.DocStatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.Instant.AsObject,
    author: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authenticator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    custodian?: proto_r4_core_datatypes_pb.Reference.AsObject,
    relatesTo: Array<USCoreDocumentReferenceProfile.RelatesTo.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    securityLabel: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    content?: USCoreDocumentReferenceProfile.Content.AsObject,
    context?: USCoreDocumentReferenceProfile.Context.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DocStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: DocStatusCode): DocStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocStatusCode;
    static deserializeBinaryFromReader(message: DocStatusCode, reader: jspb.BinaryReader): DocStatusCode;
  }

  export namespace DocStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class RelatesTo extends jspb.Message {
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
    getCode(): USCoreDocumentReferenceProfile.RelatesTo.CodeType | undefined;
    setCode(value?: USCoreDocumentReferenceProfile.RelatesTo.CodeType): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatesTo.AsObject;
    static toObject(includeInstance: boolean, msg: RelatesTo): RelatesTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatesTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatesTo;
    static deserializeBinaryFromReader(message: RelatesTo, reader: jspb.BinaryReader): RelatesTo;
  }

  export namespace RelatesTo {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: USCoreDocumentReferenceProfile.RelatesTo.CodeType.AsObject,
      target?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Content extends jspb.Message {
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

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

    hasFormat(): boolean;
    clearFormat(): void;
    getFormat(): proto_r4_core_datatypes_pb.Coding | undefined;
    setFormat(value?: proto_r4_core_datatypes_pb.Coding): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      format?: proto_r4_core_datatypes_pb.Coding.AsObject,
    }
  }

  export class Context extends jspb.Message {
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

    hasEncounter(): boolean;
    clearEncounter(): void;
    getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
    setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearEvent(): void;
    getEvent(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setEvent(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addEvent(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasFacilityType(): boolean;
    clearFacilityType(): void;
    getFacilityType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFacilityType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPracticeSetting(): boolean;
    clearPracticeSetting(): void;
    getPracticeSetting(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPracticeSetting(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasSourcePatientInfo(): boolean;
    clearSourcePatientInfo(): void;
    getSourcePatientInfo(): proto_r4_core_datatypes_pb.Reference | undefined;
    setSourcePatientInfo(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearRelated(): void;
    getRelated(): Array<proto_r4_core_datatypes_pb.Reference>;
    setRelated(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addRelated(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
  }

  export namespace Context {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
      event: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      facilityType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      practiceSetting?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      sourcePatientInfo?: proto_r4_core_datatypes_pb.Reference.AsObject,
      related: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

export class USCoreCareTeam extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreCareTeam.StatusCode | undefined;
  setStatus(value?: USCoreCareTeam.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearParticipant(): void;
  getParticipant(): Array<USCoreCareTeam.Participant>;
  setParticipant(value: Array<USCoreCareTeam.Participant>): void;
  addParticipant(value?: USCoreCareTeam.Participant, index?: number): USCoreCareTeam.Participant;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearManagingOrganization(): void;
  getManagingOrganization(): Array<proto_r4_core_datatypes_pb.Reference>;
  setManagingOrganization(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreCareTeam.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreCareTeam): USCoreCareTeam.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreCareTeam, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreCareTeam;
  static deserializeBinaryFromReader(message: USCoreCareTeam, reader: jspb.BinaryReader): USCoreCareTeam;
}

export namespace USCoreCareTeam {
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
    status?: USCoreCareTeam.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    participant: Array<USCoreCareTeam.Participant.AsObject>,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    managingOrganization: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CareTeamStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Participant extends jspb.Message {
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

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasMember(): boolean;
    clearMember(): void;
    getMember(): proto_r4_core_datatypes_pb.Reference | undefined;
    setMember(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      member?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

export class USCoreProvenance extends jspb.Message {
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

  clearTarget(): void;
  getTarget(): Array<proto_r4_core_datatypes_pb.Reference>;
  setTarget(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addTarget(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasOccurred(): boolean;
  clearOccurred(): void;
  getOccurred(): USCoreProvenance.OccurredX | undefined;
  setOccurred(value?: USCoreProvenance.OccurredX): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): proto_r4_core_datatypes_pb.Instant | undefined;
  setRecorded(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPolicy(): void;
  getPolicy(): Array<proto_r4_core_datatypes_pb.Uri>;
  setPolicy(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addPolicy(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReason(): void;
  getReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setActivity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearAgent(): void;
  getAgent(): Array<USCoreProvenance.Agent>;
  setAgent(value: Array<USCoreProvenance.Agent>): void;
  addAgent(value?: USCoreProvenance.Agent, index?: number): USCoreProvenance.Agent;

  clearEntity(): void;
  getEntity(): Array<USCoreProvenance.Entity>;
  setEntity(value: Array<USCoreProvenance.Entity>): void;
  addEntity(value?: USCoreProvenance.Entity, index?: number): USCoreProvenance.Entity;

  clearSignature(): void;
  getSignature(): Array<proto_r4_core_datatypes_pb.Signature>;
  setSignature(value: Array<proto_r4_core_datatypes_pb.Signature>): void;
  addSignature(value?: proto_r4_core_datatypes_pb.Signature, index?: number): proto_r4_core_datatypes_pb.Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreProvenance.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreProvenance): USCoreProvenance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreProvenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreProvenance;
  static deserializeBinaryFromReader(message: USCoreProvenance, reader: jspb.BinaryReader): USCoreProvenance;
}

export namespace USCoreProvenance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    target: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    occurred?: USCoreProvenance.OccurredX.AsObject,
    recorded?: proto_r4_core_datatypes_pb.Instant.AsObject,
    policy: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    activity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    agent: Array<USCoreProvenance.Agent.AsObject>,
    entity: Array<USCoreProvenance.Entity.AsObject>,
    signature: Array<proto_r4_core_datatypes_pb.Signature.AsObject>,
  }

  export class OccurredX extends jspb.Message {
    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    getChoiceCase(): OccurredX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OccurredX.AsObject;
    static toObject(includeInstance: boolean, msg: OccurredX): OccurredX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OccurredX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OccurredX;
    static deserializeBinaryFromReader(message: OccurredX, reader: jspb.BinaryReader): OccurredX;
  }

  export namespace OccurredX {
    export type AsObject = {
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      PERIOD = 1,
      DATE_TIME = 2,
    }
  }

  export class Agent extends jspb.Message {
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
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearRole(): void;
    getRole(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRole(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRole(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasWho(): boolean;
    clearWho(): void;
    getWho(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWho(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
  }

  export namespace Agent {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      role: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      who?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Entity extends jspb.Message {
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

    hasRole(): boolean;
    clearRole(): void;
    getRole(): USCoreProvenance.Entity.RoleCode | undefined;
    setRole(value?: USCoreProvenance.Entity.RoleCode): void;

    hasWhat(): boolean;
    clearWhat(): void;
    getWhat(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWhat(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearAgent(): void;
    getAgent(): Array<USCoreProvenance.Agent>;
    setAgent(value: Array<USCoreProvenance.Agent>): void;
    addAgent(value?: USCoreProvenance.Agent, index?: number): USCoreProvenance.Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      role?: USCoreProvenance.Entity.RoleCode.AsObject,
      what?: proto_r4_core_datatypes_pb.Reference.AsObject,
      agent: Array<USCoreProvenance.Agent.AsObject>,
    }

    export class RoleCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RoleCode.AsObject;
      static toObject(includeInstance: boolean, msg: RoleCode): RoleCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RoleCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RoleCode;
      static deserializeBinaryFromReader(message: RoleCode, reader: jspb.BinaryReader): RoleCode;
    }

    export namespace RoleCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class USCoreImmunizationProfile extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreImmunizationProfile.StatusCode | undefined;
  setStatus(value?: USCoreImmunizationProfile.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVaccineCode(): boolean;
  clearVaccineCode(): void;
  getVaccineCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVaccineCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): USCoreImmunizationProfile.OccurrenceX | undefined;
  setOccurrence(value?: USCoreImmunizationProfile.OccurrenceX): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecorded(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPrimarySource(): boolean;
  clearPrimarySource(): void;
  getPrimarySource(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setPrimarySource(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReportOrigin(): boolean;
  clearReportOrigin(): void;
  getReportOrigin(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReportOrigin(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setExpirationDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasSite(): boolean;
  clearSite(): void;
  getSite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDoseQuantity(): boolean;
  clearDoseQuantity(): void;
  getDoseQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
  setDoseQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

  clearPerformer(): void;
  getPerformer(): Array<USCoreImmunizationProfile.Performer>;
  setPerformer(value: Array<USCoreImmunizationProfile.Performer>): void;
  addPerformer(value?: USCoreImmunizationProfile.Performer, index?: number): USCoreImmunizationProfile.Performer;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasIsSubpotent(): boolean;
  clearIsSubpotent(): void;
  getIsSubpotent(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setIsSubpotent(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearSubpotentReason(): void;
  getSubpotentReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSubpotentReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSubpotentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearEducation(): void;
  getEducation(): Array<USCoreImmunizationProfile.Education>;
  setEducation(value: Array<USCoreImmunizationProfile.Education>): void;
  addEducation(value?: USCoreImmunizationProfile.Education, index?: number): USCoreImmunizationProfile.Education;

  clearProgramEligibility(): void;
  getProgramEligibility(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProgramEligibility(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProgramEligibility(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasFundingSource(): boolean;
  clearFundingSource(): void;
  getFundingSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundingSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearReaction(): void;
  getReaction(): Array<USCoreImmunizationProfile.Reaction>;
  setReaction(value: Array<USCoreImmunizationProfile.Reaction>): void;
  addReaction(value?: USCoreImmunizationProfile.Reaction, index?: number): USCoreImmunizationProfile.Reaction;

  clearProtocolApplied(): void;
  getProtocolApplied(): Array<USCoreImmunizationProfile.ProtocolApplied>;
  setProtocolApplied(value: Array<USCoreImmunizationProfile.ProtocolApplied>): void;
  addProtocolApplied(value?: USCoreImmunizationProfile.ProtocolApplied, index?: number): USCoreImmunizationProfile.ProtocolApplied;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreImmunizationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreImmunizationProfile): USCoreImmunizationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreImmunizationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreImmunizationProfile;
  static deserializeBinaryFromReader(message: USCoreImmunizationProfile, reader: jspb.BinaryReader): USCoreImmunizationProfile;
}

export namespace USCoreImmunizationProfile {
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
    status?: USCoreImmunizationProfile.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    vaccineCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: USCoreImmunizationProfile.OccurrenceX.AsObject,
    recorded?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    primarySource?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    reportOrigin?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    expirationDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    site?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    route?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    doseQuantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    performer: Array<USCoreImmunizationProfile.Performer.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    isSubpotent?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subpotentReason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    education: Array<USCoreImmunizationProfile.Education.AsObject>,
    programEligibility: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    fundingSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reaction: Array<USCoreImmunizationProfile.Reaction.AsObject>,
    protocolApplied: Array<USCoreImmunizationProfile.ProtocolApplied.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap]): void;

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
      value: proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.ImmunizationStatusCodesValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OccurrenceX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

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
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      STRING_VALUE = 2,
    }
  }

  export class Performer extends jspb.Message {
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

    hasFunction(): boolean;
    clearFunction(): void;
    getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Education extends jspb.Message {
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

    hasDocumentType(): boolean;
    clearDocumentType(): void;
    getDocumentType(): proto_r4_core_datatypes_pb.String | undefined;
    setDocumentType(value?: proto_r4_core_datatypes_pb.String): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Uri | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasPublicationDate(): boolean;
    clearPublicationDate(): void;
    getPublicationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setPublicationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPresentationDate(): boolean;
    clearPresentationDate(): void;
    getPresentationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setPresentationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Education.AsObject;
    static toObject(includeInstance: boolean, msg: Education): Education.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Education, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Education;
    static deserializeBinaryFromReader(message: Education, reader: jspb.BinaryReader): Education;
  }

  export namespace Education {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      documentType?: proto_r4_core_datatypes_pb.String.AsObject,
      reference?: proto_r4_core_datatypes_pb.Uri.AsObject,
      publicationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      presentationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }
  }

  export class Reaction extends jspb.Message {
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

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDetail(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasReported(): boolean;
    clearReported(): void;
    getReported(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setReported(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reaction.AsObject;
    static toObject(includeInstance: boolean, msg: Reaction): Reaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reaction;
    static deserializeBinaryFromReader(message: Reaction, reader: jspb.BinaryReader): Reaction;
  }

  export namespace Reaction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      detail?: proto_r4_core_datatypes_pb.Reference.AsObject,
      reported?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }
  }

  export class ProtocolApplied extends jspb.Message {
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

    hasSeries(): boolean;
    clearSeries(): void;
    getSeries(): proto_r4_core_datatypes_pb.String | undefined;
    setSeries(value?: proto_r4_core_datatypes_pb.String): void;

    hasAuthority(): boolean;
    clearAuthority(): void;
    getAuthority(): proto_r4_core_datatypes_pb.Reference | undefined;
    setAuthority(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearTargetDisease(): void;
    getTargetDisease(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTargetDisease(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addTargetDisease(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDoseNumber(): boolean;
    clearDoseNumber(): void;
    getDoseNumber(): USCoreImmunizationProfile.ProtocolApplied.DoseNumberX | undefined;
    setDoseNumber(value?: USCoreImmunizationProfile.ProtocolApplied.DoseNumberX): void;

    hasSeriesDoses(): boolean;
    clearSeriesDoses(): void;
    getSeriesDoses(): USCoreImmunizationProfile.ProtocolApplied.SeriesDosesX | undefined;
    setSeriesDoses(value?: USCoreImmunizationProfile.ProtocolApplied.SeriesDosesX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ProtocolApplied.AsObject;
    static toObject(includeInstance: boolean, msg: ProtocolApplied): ProtocolApplied.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ProtocolApplied, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ProtocolApplied;
    static deserializeBinaryFromReader(message: ProtocolApplied, reader: jspb.BinaryReader): ProtocolApplied;
  }

  export namespace ProtocolApplied {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      series?: proto_r4_core_datatypes_pb.String.AsObject,
      authority?: proto_r4_core_datatypes_pb.Reference.AsObject,
      targetDisease: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      doseNumber?: USCoreImmunizationProfile.ProtocolApplied.DoseNumberX.AsObject,
      seriesDoses?: USCoreImmunizationProfile.ProtocolApplied.SeriesDosesX.AsObject,
    }

    export class DoseNumberX extends jspb.Message {
      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): DoseNumberX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DoseNumberX.AsObject;
      static toObject(includeInstance: boolean, msg: DoseNumberX): DoseNumberX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DoseNumberX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DoseNumberX;
      static deserializeBinaryFromReader(message: DoseNumberX, reader: jspb.BinaryReader): DoseNumberX;
    }

    export namespace DoseNumberX {
      export type AsObject = {
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        POSITIVE_INT = 1,
        STRING_VALUE = 2,
      }
    }

    export class SeriesDosesX extends jspb.Message {
      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      getChoiceCase(): SeriesDosesX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SeriesDosesX.AsObject;
      static toObject(includeInstance: boolean, msg: SeriesDosesX): SeriesDosesX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SeriesDosesX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SeriesDosesX;
      static deserializeBinaryFromReader(message: SeriesDosesX, reader: jspb.BinaryReader): SeriesDosesX;
    }

    export namespace SeriesDosesX {
      export type AsObject = {
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        POSITIVE_INT = 1,
        STRING_VALUE = 2,
      }
    }
  }
}

export class PatientUSCoreBirthSexExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): PatientUSCoreBirthSexExtension.ValueCode | undefined;
  setValueCode(value?: PatientUSCoreBirthSexExtension.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreBirthSexExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreBirthSexExtension): PatientUSCoreBirthSexExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreBirthSexExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreBirthSexExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreBirthSexExtension, reader: jspb.BinaryReader): PatientUSCoreBirthSexExtension;
}

export namespace PatientUSCoreBirthSexExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    valueCode?: PatientUSCoreBirthSexExtension.ValueCode.AsObject,
  }

  export class ValueCode extends jspb.Message {
    getValue(): proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap];
    setValue(value: proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValueCode.AsObject;
    static toObject(includeInstance: boolean, msg: ValueCode): ValueCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValueCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValueCode;
    static deserializeBinaryFromReader(message: ValueCode, reader: jspb.BinaryReader): ValueCode;
  }

  export namespace ValueCode {
    export type AsObject = {
      value: proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.BirthSexValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }
}

export class USCoreDiagnosticReportProfileNoteExchange extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreDiagnosticReportProfileNoteExchange.StatusCode | undefined;
  setStatus(value?: USCoreDiagnosticReportProfileNoteExchange.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCoreDiagnosticReportProfileNoteExchange.EffectiveX | undefined;
  setEffective(value?: USCoreDiagnosticReportProfileNoteExchange.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResultsInterpreter(): void;
  getResultsInterpreter(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResultsInterpreter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResultsInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearResult(): void;
  getResult(): Array<proto_r4_core_datatypes_pb.Reference>;
  setResult(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addResult(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_r4_core_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearMedia(): void;
  getMedia(): Array<USCoreDiagnosticReportProfileNoteExchange.Media>;
  setMedia(value: Array<USCoreDiagnosticReportProfileNoteExchange.Media>): void;
  addMedia(value?: USCoreDiagnosticReportProfileNoteExchange.Media, index?: number): USCoreDiagnosticReportProfileNoteExchange.Media;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_r4_core_datatypes_pb.String | undefined;
  setConclusion(value?: proto_r4_core_datatypes_pb.String): void;

  clearConclusionCode(): void;
  getConclusionCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setConclusionCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addConclusionCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreDiagnosticReportProfileNoteExchange.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreDiagnosticReportProfileNoteExchange): USCoreDiagnosticReportProfileNoteExchange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreDiagnosticReportProfileNoteExchange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreDiagnosticReportProfileNoteExchange;
  static deserializeBinaryFromReader(message: USCoreDiagnosticReportProfileNoteExchange, reader: jspb.BinaryReader): USCoreDiagnosticReportProfileNoteExchange;
}

export namespace USCoreDiagnosticReportProfileNoteExchange {
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
    status?: USCoreDiagnosticReportProfileNoteExchange.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCoreDiagnosticReportProfileNoteExchange.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    resultsInterpreter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimen: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    result: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    imagingStudy: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    media: Array<USCoreDiagnosticReportProfileNoteExchange.Media.AsObject>,
    conclusion?: proto_r4_core_datatypes_pb.String.AsObject,
    conclusionCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    presentedForm: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DiagnosticReportStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class Media extends jspb.Message {
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

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_r4_core_datatypes_pb.String | undefined;
    setComment(value?: proto_r4_core_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLink(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      comment?: proto_r4_core_datatypes_pb.String.AsObject,
      link?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }
}

export class USCoreLaboratoryResultObservationProfile extends jspb.Message {
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

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreLaboratoryResultObservationProfile.StatusCode | undefined;
  setStatus(value?: USCoreLaboratoryResultObservationProfile.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCoreLaboratoryResultObservationProfile.EffectiveX | undefined;
  setEffective(value?: USCoreLaboratoryResultObservationProfile.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): USCoreLaboratoryResultObservationProfile.ValueX | undefined;
  setValue(value?: USCoreLaboratoryResultObservationProfile.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<USCoreLaboratoryResultObservationProfile.ReferenceRange>;
  setReferenceRange(value: Array<USCoreLaboratoryResultObservationProfile.ReferenceRange>): void;
  addReferenceRange(value?: USCoreLaboratoryResultObservationProfile.ReferenceRange, index?: number): USCoreLaboratoryResultObservationProfile.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<USCoreLaboratoryResultObservationProfile.Component>;
  setComponent(value: Array<USCoreLaboratoryResultObservationProfile.Component>): void;
  addComponent(value?: USCoreLaboratoryResultObservationProfile.Component, index?: number): USCoreLaboratoryResultObservationProfile.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreLaboratoryResultObservationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreLaboratoryResultObservationProfile): USCoreLaboratoryResultObservationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreLaboratoryResultObservationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreLaboratoryResultObservationProfile;
  static deserializeBinaryFromReader(message: USCoreLaboratoryResultObservationProfile, reader: jspb.BinaryReader): USCoreLaboratoryResultObservationProfile;
}

export namespace USCoreLaboratoryResultObservationProfile {
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
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCoreLaboratoryResultObservationProfile.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCoreLaboratoryResultObservationProfile.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: USCoreLaboratoryResultObservationProfile.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<USCoreLaboratoryResultObservationProfile.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<USCoreLaboratoryResultObservationProfile.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
      time?: proto_r4_core_datatypes_pb.Time.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      BOOLEAN = 4,
      INTEGER = 5,
      RANGE = 6,
      RATIO = 7,
      SAMPLED_DATA = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): USCoreLaboratoryResultObservationProfile.Component.ValueX | undefined;
    setValue(value?: USCoreLaboratoryResultObservationProfile.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<USCoreLaboratoryResultObservationProfile.ReferenceRange>;
    setReferenceRange(value: Array<USCoreLaboratoryResultObservationProfile.ReferenceRange>): void;
    addReferenceRange(value?: USCoreLaboratoryResultObservationProfile.ReferenceRange, index?: number): USCoreLaboratoryResultObservationProfile.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: USCoreLaboratoryResultObservationProfile.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<USCoreLaboratoryResultObservationProfile.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

export class USCoreLocation extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreLocation.StatusCode | undefined;
  setStatus(value?: USCoreLocation.StatusCode): void;

  hasOperationalStatus(): boolean;
  clearOperationalStatus(): void;
  getOperationalStatus(): proto_r4_core_datatypes_pb.Coding | undefined;
  setOperationalStatus(value?: proto_r4_core_datatypes_pb.Coding): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearAlias(): void;
  getAlias(): Array<proto_r4_core_datatypes_pb.String>;
  setAlias(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): USCoreLocation.ModeCode | undefined;
  setMode(value?: USCoreLocation.ModeCode): void;

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasAddress(): boolean;
  clearAddress(): void;
  getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
  setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

  hasPhysicalType(): boolean;
  clearPhysicalType(): void;
  getPhysicalType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPhysicalType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): USCoreLocation.Position | undefined;
  setPosition(value?: USCoreLocation.Position): void;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearHoursOfOperation(): void;
  getHoursOfOperation(): Array<USCoreLocation.HoursOfOperation>;
  setHoursOfOperation(value: Array<USCoreLocation.HoursOfOperation>): void;
  addHoursOfOperation(value?: USCoreLocation.HoursOfOperation, index?: number): USCoreLocation.HoursOfOperation;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreLocation.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreLocation): USCoreLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreLocation;
  static deserializeBinaryFromReader(message: USCoreLocation, reader: jspb.BinaryReader): USCoreLocation;
}

export namespace USCoreLocation {
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
    status?: USCoreLocation.StatusCode.AsObject,
    operationalStatus?: proto_r4_core_datatypes_pb.Coding.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    alias: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    mode?: USCoreLocation.ModeCode.AsObject,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    address?: proto_r4_core_datatypes_pb.Address.AsObject,
    physicalType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    position?: USCoreLocation.Position.AsObject,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    hoursOfOperation: Array<USCoreLocation.HoursOfOperation.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.LocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.LocationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ModeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.LocationModeCode.ValueMap[keyof proto_r4_core_codes_pb.LocationModeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Position extends jspb.Message {
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

    hasLongitude(): boolean;
    clearLongitude(): void;
    getLongitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setLongitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasLatitude(): boolean;
    clearLatitude(): void;
    getLatitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setLatitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasAltitude(): boolean;
    clearAltitude(): void;
    getAltitude(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setAltitude(value?: proto_r4_core_datatypes_pb.Decimal): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      longitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      latitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      altitude?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    }
  }

  export class HoursOfOperation extends jspb.Message {
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

    clearDaysOfWeek(): void;
    getDaysOfWeek(): Array<USCoreLocation.HoursOfOperation.DaysOfWeekCode>;
    setDaysOfWeek(value: Array<USCoreLocation.HoursOfOperation.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: USCoreLocation.HoursOfOperation.DaysOfWeekCode, index?: number): USCoreLocation.HoursOfOperation.DaysOfWeekCode;

    hasAllDay(): boolean;
    clearAllDay(): void;
    getAllDay(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAllDay(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasOpeningTime(): boolean;
    clearOpeningTime(): void;
    getOpeningTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setOpeningTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasClosingTime(): boolean;
    clearClosingTime(): void;
    getClosingTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setClosingTime(value?: proto_r4_core_datatypes_pb.Time): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HoursOfOperation.AsObject;
    static toObject(includeInstance: boolean, msg: HoursOfOperation): HoursOfOperation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HoursOfOperation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HoursOfOperation;
    static deserializeBinaryFromReader(message: HoursOfOperation, reader: jspb.BinaryReader): HoursOfOperation;
  }

  export namespace HoursOfOperation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeek: Array<USCoreLocation.HoursOfOperation.DaysOfWeekCode.AsObject>,
      allDay?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      openingTime?: proto_r4_core_datatypes_pb.Time.AsObject,
      closingTime?: proto_r4_core_datatypes_pb.Time.AsObject,
    }

    export class DaysOfWeekCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DaysOfWeekCode.AsObject;
      static toObject(includeInstance: boolean, msg: DaysOfWeekCode): DaysOfWeekCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DaysOfWeekCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DaysOfWeekCode;
      static deserializeBinaryFromReader(message: DaysOfWeekCode, reader: jspb.BinaryReader): DaysOfWeekCode;
    }

    export namespace DaysOfWeekCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class UsCoreCondition extends jspb.Message {
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

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClinicalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVerificationStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSeverity(): boolean;
  clearSeverity(): void;
  getSeverity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSeverity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearBodySite(): void;
  getBodySite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): UsCoreCondition.OnsetX | undefined;
  setOnset(value?: UsCoreCondition.OnsetX): void;

  hasAbatement(): boolean;
  clearAbatement(): void;
  getAbatement(): UsCoreCondition.AbatementX | undefined;
  setAbatement(value?: UsCoreCondition.AbatementX): void;

  hasRecordedDate(): boolean;
  clearRecordedDate(): void;
  getRecordedDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearStage(): void;
  getStage(): Array<UsCoreCondition.Stage>;
  setStage(value: Array<UsCoreCondition.Stage>): void;
  addStage(value?: UsCoreCondition.Stage, index?: number): UsCoreCondition.Stage;

  clearEvidence(): void;
  getEvidence(): Array<UsCoreCondition.Evidence>;
  setEvidence(value: Array<UsCoreCondition.Evidence>): void;
  addEvidence(value?: UsCoreCondition.Evidence, index?: number): UsCoreCondition.Evidence;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreCondition.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreCondition): UsCoreCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreCondition;
  static deserializeBinaryFromReader(message: UsCoreCondition, reader: jspb.BinaryReader): UsCoreCondition;
}

export namespace UsCoreCondition {
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
    clinicalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verificationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    severity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    bodySite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    onset?: UsCoreCondition.OnsetX.AsObject,
    abatement?: UsCoreCondition.AbatementX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    stage: Array<UsCoreCondition.Stage.AsObject>,
    evidence: Array<UsCoreCondition.Evidence.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class OnsetX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): OnsetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnsetX.AsObject;
    static toObject(includeInstance: boolean, msg: OnsetX): OnsetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnsetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnsetX;
    static deserializeBinaryFromReader(message: OnsetX, reader: jspb.BinaryReader): OnsetX;
  }

  export namespace OnsetX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
    }
  }

  export class AbatementX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): AbatementX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbatementX.AsObject;
    static toObject(includeInstance: boolean, msg: AbatementX): AbatementX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AbatementX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbatementX;
    static deserializeBinaryFromReader(message: AbatementX, reader: jspb.BinaryReader): AbatementX;
  }

  export namespace AbatementX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
    }
  }

  export class Stage extends jspb.Message {
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

    hasSummary(): boolean;
    clearSummary(): void;
    getSummary(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSummary(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAssessment(): void;
    getAssessment(): Array<proto_r4_core_datatypes_pb.Reference>;
    setAssessment(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addAssessment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Stage.AsObject;
    static toObject(includeInstance: boolean, msg: Stage): Stage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Stage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Stage;
    static deserializeBinaryFromReader(message: Stage, reader: jspb.BinaryReader): Stage;
  }

  export namespace Stage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      summary?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      assessment: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Evidence extends jspb.Message {
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

    clearCode(): void;
    getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDetail(): void;
    getDetail(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDetail(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Evidence.AsObject;
    static toObject(includeInstance: boolean, msg: Evidence): Evidence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Evidence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Evidence;
    static deserializeBinaryFromReader(message: Evidence, reader: jspb.BinaryReader): Evidence;
  }

  export namespace Evidence {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      detail: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

export class USCorePulseOximetryProfile extends jspb.Message {
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

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCorePulseOximetryProfile.StatusCode | undefined;
  setStatus(value?: USCorePulseOximetryProfile.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): USCorePulseOximetryProfile.CodeableConceptForCode | undefined;
  setCode(value?: USCorePulseOximetryProfile.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCorePulseOximetryProfile.EffectiveX | undefined;
  setEffective(value?: USCorePulseOximetryProfile.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): USCorePulseOximetryProfile.ValueX | undefined;
  setValue(value?: USCorePulseOximetryProfile.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<USCorePulseOximetryProfile.ReferenceRange>;
  setReferenceRange(value: Array<USCorePulseOximetryProfile.ReferenceRange>): void;
  addReferenceRange(value?: USCorePulseOximetryProfile.ReferenceRange, index?: number): USCorePulseOximetryProfile.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<USCorePulseOximetryProfile.Component>;
  setComponent(value: Array<USCorePulseOximetryProfile.Component>): void;
  addComponent(value?: USCorePulseOximetryProfile.Component, index?: number): USCorePulseOximetryProfile.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePulseOximetryProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePulseOximetryProfile): USCorePulseOximetryProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePulseOximetryProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePulseOximetryProfile;
  static deserializeBinaryFromReader(message: USCorePulseOximetryProfile, reader: jspb.BinaryReader): USCorePulseOximetryProfile;
}

export namespace USCorePulseOximetryProfile {
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
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCorePulseOximetryProfile.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: USCorePulseOximetryProfile.CodeableConceptForCode.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCorePulseOximetryProfile.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: USCorePulseOximetryProfile.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<USCorePulseOximetryProfile.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<USCorePulseOximetryProfile.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_r4_core_datatypes_pb.Coding>;
    setCoding(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addCoding(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    hasOxygenSatCode(): boolean;
    clearOxygenSatCode(): void;
    getOxygenSatCode(): proto_r4_core_datatypes_pb.CodingWithFixedCode | undefined;
    setOxygenSatCode(value?: proto_r4_core_datatypes_pb.CodingWithFixedCode): void;

    hasPulseOx(): boolean;
    clearPulseOx(): void;
    getPulseOx(): proto_r4_core_datatypes_pb.CodingWithFixedCode | undefined;
    setPulseOx(value?: proto_r4_core_datatypes_pb.CodingWithFixedCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      oxygenSatCode?: proto_r4_core_datatypes_pb.CodingWithFixedCode.AsObject,
      pulseOx?: proto_r4_core_datatypes_pb.CodingWithFixedCode.AsObject,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): USCorePulseOximetryProfile.Component.ValueX | undefined;
    setValue(value?: USCorePulseOximetryProfile.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<USCorePulseOximetryProfile.ReferenceRange>;
    setReferenceRange(value: Array<USCorePulseOximetryProfile.ReferenceRange>): void;
    addReferenceRange(value?: USCorePulseOximetryProfile.ReferenceRange, index?: number): USCorePulseOximetryProfile.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: USCorePulseOximetryProfile.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<USCorePulseOximetryProfile.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

export class USCoreImplantableDeviceProfile extends jspb.Message {
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

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDefinition(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasUdiCarrier(): boolean;
  clearUdiCarrier(): void;
  getUdiCarrier(): USCoreImplantableDeviceProfile.UdiCarrier | undefined;
  setUdiCarrier(value?: USCoreImplantableDeviceProfile.UdiCarrier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreImplantableDeviceProfile.StatusCode | undefined;
  setStatus(value?: USCoreImplantableDeviceProfile.StatusCode): void;

  clearStatusReason(): void;
  getStatusReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setStatusReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDistinctIdentifier(): boolean;
  clearDistinctIdentifier(): void;
  getDistinctIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
  setDistinctIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.String | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.String): void;

  hasManufactureDate(): boolean;
  clearManufactureDate(): void;
  getManufactureDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setManufactureDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasExpirationDate(): boolean;
  clearExpirationDate(): void;
  getExpirationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setExpirationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLotNumber(): boolean;
  clearLotNumber(): void;
  getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasSerialNumber(): boolean;
  clearSerialNumber(): void;
  getSerialNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setSerialNumber(value?: proto_r4_core_datatypes_pb.String): void;

  clearDeviceName(): void;
  getDeviceName(): Array<USCoreImplantableDeviceProfile.DeviceName>;
  setDeviceName(value: Array<USCoreImplantableDeviceProfile.DeviceName>): void;
  addDeviceName(value?: USCoreImplantableDeviceProfile.DeviceName, index?: number): USCoreImplantableDeviceProfile.DeviceName;

  hasModelNumber(): boolean;
  clearModelNumber(): void;
  getModelNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setModelNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasPartNumber(): boolean;
  clearPartNumber(): void;
  getPartNumber(): proto_r4_core_datatypes_pb.String | undefined;
  setPartNumber(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSpecialization(): void;
  getSpecialization(): Array<USCoreImplantableDeviceProfile.Specialization>;
  setSpecialization(value: Array<USCoreImplantableDeviceProfile.Specialization>): void;
  addSpecialization(value?: USCoreImplantableDeviceProfile.Specialization, index?: number): USCoreImplantableDeviceProfile.Specialization;

  clearVersion(): void;
  getVersion(): Array<USCoreImplantableDeviceProfile.Version>;
  setVersion(value: Array<USCoreImplantableDeviceProfile.Version>): void;
  addVersion(value?: USCoreImplantableDeviceProfile.Version, index?: number): USCoreImplantableDeviceProfile.Version;

  clearProperty(): void;
  getProperty(): Array<USCoreImplantableDeviceProfile.Property>;
  setProperty(value: Array<USCoreImplantableDeviceProfile.Property>): void;
  addProperty(value?: USCoreImplantableDeviceProfile.Property, index?: number): USCoreImplantableDeviceProfile.Property;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearSafety(): void;
  getSafety(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSafety(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSafety(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasParent(): boolean;
  clearParent(): void;
  getParent(): proto_r4_core_datatypes_pb.Reference | undefined;
  setParent(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreImplantableDeviceProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreImplantableDeviceProfile): USCoreImplantableDeviceProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreImplantableDeviceProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreImplantableDeviceProfile;
  static deserializeBinaryFromReader(message: USCoreImplantableDeviceProfile, reader: jspb.BinaryReader): USCoreImplantableDeviceProfile;
}

export namespace USCoreImplantableDeviceProfile {
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
    definition?: proto_r4_core_datatypes_pb.Reference.AsObject,
    udiCarrier?: USCoreImplantableDeviceProfile.UdiCarrier.AsObject,
    status?: USCoreImplantableDeviceProfile.StatusCode.AsObject,
    statusReason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    distinctIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.String.AsObject,
    manufactureDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    expirationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    serialNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    deviceName: Array<USCoreImplantableDeviceProfile.DeviceName.AsObject>,
    modelNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    partNumber?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specialization: Array<USCoreImplantableDeviceProfile.Specialization.AsObject>,
    version: Array<USCoreImplantableDeviceProfile.Version.AsObject>,
    property: Array<USCoreImplantableDeviceProfile.Property.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    safety: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    parent?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class UdiCarrier extends jspb.Message {
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

    hasDeviceIdentifier(): boolean;
    clearDeviceIdentifier(): void;
    getDeviceIdentifier(): proto_r4_core_datatypes_pb.String | undefined;
    setDeviceIdentifier(value?: proto_r4_core_datatypes_pb.String): void;

    hasIssuer(): boolean;
    clearIssuer(): void;
    getIssuer(): proto_r4_core_datatypes_pb.Uri | undefined;
    setIssuer(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasJurisdiction(): boolean;
    clearJurisdiction(): void;
    getJurisdiction(): proto_r4_core_datatypes_pb.Uri | undefined;
    setJurisdiction(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasCarrierAidc(): boolean;
    clearCarrierAidc(): void;
    getCarrierAidc(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
    setCarrierAidc(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

    hasCarrierHrf(): boolean;
    clearCarrierHrf(): void;
    getCarrierHrf(): proto_r4_core_datatypes_pb.String | undefined;
    setCarrierHrf(value?: proto_r4_core_datatypes_pb.String): void;

    hasEntryType(): boolean;
    clearEntryType(): void;
    getEntryType(): USCoreImplantableDeviceProfile.UdiCarrier.EntryTypeCode | undefined;
    setEntryType(value?: USCoreImplantableDeviceProfile.UdiCarrier.EntryTypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UdiCarrier.AsObject;
    static toObject(includeInstance: boolean, msg: UdiCarrier): UdiCarrier.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UdiCarrier, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UdiCarrier;
    static deserializeBinaryFromReader(message: UdiCarrier, reader: jspb.BinaryReader): UdiCarrier;
  }

  export namespace UdiCarrier {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      deviceIdentifier?: proto_r4_core_datatypes_pb.String.AsObject,
      issuer?: proto_r4_core_datatypes_pb.Uri.AsObject,
      jurisdiction?: proto_r4_core_datatypes_pb.Uri.AsObject,
      carrierAidc?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
      carrierHrf?: proto_r4_core_datatypes_pb.String.AsObject,
      entryType?: USCoreImplantableDeviceProfile.UdiCarrier.EntryTypeCode.AsObject,
    }

    export class EntryTypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EntryTypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: EntryTypeCode): EntryTypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EntryTypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EntryTypeCode;
      static deserializeBinaryFromReader(message: EntryTypeCode, reader: jspb.BinaryReader): EntryTypeCode;
    }

    export namespace EntryTypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap[keyof proto_r4_core_codes_pb.UDIEntryTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FHIRDeviceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DeviceName extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): USCoreImplantableDeviceProfile.DeviceName.TypeCode | undefined;
    setType(value?: USCoreImplantableDeviceProfile.DeviceName.TypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceName.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceName): DeviceName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceName;
    static deserializeBinaryFromReader(message: DeviceName, reader: jspb.BinaryReader): DeviceName;
  }

  export namespace DeviceName {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: USCoreImplantableDeviceProfile.DeviceName.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DeviceNameTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Specialization extends jspb.Message {
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

    hasSystemType(): boolean;
    clearSystemType(): void;
    getSystemType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSystemType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Specialization.AsObject;
    static toObject(includeInstance: boolean, msg: Specialization): Specialization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Specialization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Specialization;
    static deserializeBinaryFromReader(message: Specialization, reader: jspb.BinaryReader): Specialization;
  }

  export namespace Specialization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      systemType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Version extends jspb.Message {
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
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasComponent(): boolean;
    clearComponent(): void;
    getComponent(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setComponent(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Version.AsObject;
    static toObject(includeInstance: boolean, msg: Version): Version.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Version, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Version;
    static deserializeBinaryFromReader(message: Version, reader: jspb.BinaryReader): Version;
  }

  export namespace Version {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      component?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Property extends jspb.Message {
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
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearValueQuantity(): void;
    getValueQuantity(): Array<proto_r4_core_datatypes_pb.Quantity>;
    setValueQuantity(value: Array<proto_r4_core_datatypes_pb.Quantity>): void;
    addValueQuantity(value?: proto_r4_core_datatypes_pb.Quantity, index?: number): proto_r4_core_datatypes_pb.Quantity;

    clearValueCode(): void;
    getValueCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setValueCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addValueCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      valueQuantity: Array<proto_r4_core_datatypes_pb.Quantity.AsObject>,
      valueCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }
}

export class USCoreMedicationRequestProfile extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreMedicationRequestProfile.StatusCode | undefined;
  setStatus(value?: USCoreMedicationRequestProfile.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): USCoreMedicationRequestProfile.IntentCode | undefined;
  setIntent(value?: USCoreMedicationRequestProfile.IntentCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): USCoreMedicationRequestProfile.PriorityCode | undefined;
  setPriority(value?: USCoreMedicationRequestProfile.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReported(): boolean;
  clearReported(): void;
  getReported(): USCoreMedicationRequestProfile.ReportedX | undefined;
  setReported(value?: USCoreMedicationRequestProfile.ReportedX): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): USCoreMedicationRequestProfile.MedicationX | undefined;
  setMedication(value?: USCoreMedicationRequestProfile.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInformation(): void;
  getSupportingInformation(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformation(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUri(): void;
  getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasCourseOfTherapyType(): boolean;
  clearCourseOfTherapyType(): void;
  getCourseOfTherapyType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCourseOfTherapyType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInsurance(): void;
  getInsurance(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsurance(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDosageInstruction(): void;
  getDosageInstruction(): Array<proto_r4_core_datatypes_pb.Dosage>;
  setDosageInstruction(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
  addDosageInstruction(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

  hasDispenseRequest(): boolean;
  clearDispenseRequest(): void;
  getDispenseRequest(): USCoreMedicationRequestProfile.DispenseRequest | undefined;
  setDispenseRequest(value?: USCoreMedicationRequestProfile.DispenseRequest): void;

  hasSubstitution(): boolean;
  clearSubstitution(): void;
  getSubstitution(): USCoreMedicationRequestProfile.Substitution | undefined;
  setSubstitution(value?: USCoreMedicationRequestProfile.Substitution): void;

  hasPriorPrescription(): boolean;
  clearPriorPrescription(): void;
  getPriorPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPriorPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDetectedIssue(): void;
  getDetectedIssue(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDetectedIssue(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEventHistory(): void;
  getEventHistory(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistory(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreMedicationRequestProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreMedicationRequestProfile): USCoreMedicationRequestProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreMedicationRequestProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreMedicationRequestProfile;
  static deserializeBinaryFromReader(message: USCoreMedicationRequestProfile, reader: jspb.BinaryReader): USCoreMedicationRequestProfile;
}

export namespace USCoreMedicationRequestProfile {
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
    status?: USCoreMedicationRequestProfile.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    intent?: USCoreMedicationRequestProfile.IntentCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: USCoreMedicationRequestProfile.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    reported?: USCoreMedicationRequestProfile.ReportedX.AsObject,
    medication?: USCoreMedicationRequestProfile.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformation: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    courseOfTherapyType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    insurance: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosageInstruction: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
    dispenseRequest?: USCoreMedicationRequestProfile.DispenseRequest.AsObject,
    substitution?: USCoreMedicationRequestProfile.Substitution.AsObject,
    priorPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    detectedIssue: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    eventHistory: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap],
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

  export class ReportedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ReportedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportedX.AsObject;
    static toObject(includeInstance: boolean, msg: ReportedX): ReportedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportedX;
    static deserializeBinaryFromReader(message: ReportedX, reader: jspb.BinaryReader): ReportedX;
  }

  export namespace ReportedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      REFERENCE = 2,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class DispenseRequest extends jspb.Message {
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

    hasInitialFill(): boolean;
    clearInitialFill(): void;
    getInitialFill(): USCoreMedicationRequestProfile.DispenseRequest.InitialFill | undefined;
    setInitialFill(value?: USCoreMedicationRequestProfile.DispenseRequest.InitialFill): void;

    hasDispenseInterval(): boolean;
    clearDispenseInterval(): void;
    getDispenseInterval(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDispenseInterval(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasValidityPeriod(): boolean;
    clearValidityPeriod(): void;
    getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasNumberOfRepeatsAllowed(): boolean;
    clearNumberOfRepeatsAllowed(): void;
    getNumberOfRepeatsAllowed(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumberOfRepeatsAllowed(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasExpectedSupplyDuration(): boolean;
    clearExpectedSupplyDuration(): void;
    getExpectedSupplyDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setExpectedSupplyDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasPerformer(): boolean;
    clearPerformer(): void;
    getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DispenseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DispenseRequest): DispenseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DispenseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DispenseRequest;
    static deserializeBinaryFromReader(message: DispenseRequest, reader: jspb.BinaryReader): DispenseRequest;
  }

  export namespace DispenseRequest {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      initialFill?: USCoreMedicationRequestProfile.DispenseRequest.InitialFill.AsObject,
      dispenseInterval?: proto_r4_core_datatypes_pb.Duration.AsObject,
      validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
      numberOfRepeatsAllowed?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      expectedSupplyDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class InitialFill extends jspb.Message {
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

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InitialFill.AsObject;
      static toObject(includeInstance: boolean, msg: InitialFill): InitialFill.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: InitialFill, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InitialFill;
      static deserializeBinaryFromReader(message: InitialFill, reader: jspb.BinaryReader): InitialFill;
    }

    export namespace InitialFill {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }
    }
  }

  export class Substitution extends jspb.Message {
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

    hasAllowed(): boolean;
    clearAllowed(): void;
    getAllowed(): USCoreMedicationRequestProfile.Substitution.AllowedX | undefined;
    setAllowed(value?: USCoreMedicationRequestProfile.Substitution.AllowedX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substitution.AsObject;
    static toObject(includeInstance: boolean, msg: Substitution): Substitution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substitution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substitution;
    static deserializeBinaryFromReader(message: Substitution, reader: jspb.BinaryReader): Substitution;
  }

  export namespace Substitution {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      allowed?: USCoreMedicationRequestProfile.Substitution.AllowedX.AsObject,
      reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class AllowedX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): AllowedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AllowedX.AsObject;
      static toObject(includeInstance: boolean, msg: AllowedX): AllowedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AllowedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AllowedX;
      static deserializeBinaryFromReader(message: AllowedX, reader: jspb.BinaryReader): AllowedX;
    }

    export namespace AllowedX {
      export type AsObject = {
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BOOLEAN = 1,
        CODEABLE_CONCEPT = 2,
      }
    }
  }
}

export class USCoreMedicationProfile extends jspb.Message {
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

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreMedicationProfile.StatusCode | undefined;
  setStatus(value?: USCoreMedicationProfile.StatusCode): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): proto_r4_core_datatypes_pb.Ratio | undefined;
  setAmount(value?: proto_r4_core_datatypes_pb.Ratio): void;

  clearIngredient(): void;
  getIngredient(): Array<USCoreMedicationProfile.Ingredient>;
  setIngredient(value: Array<USCoreMedicationProfile.Ingredient>): void;
  addIngredient(value?: USCoreMedicationProfile.Ingredient, index?: number): USCoreMedicationProfile.Ingredient;

  hasBatch(): boolean;
  clearBatch(): void;
  getBatch(): USCoreMedicationProfile.Batch | undefined;
  setBatch(value?: USCoreMedicationProfile.Batch): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreMedicationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreMedicationProfile): USCoreMedicationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreMedicationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreMedicationProfile;
  static deserializeBinaryFromReader(message: USCoreMedicationProfile, reader: jspb.BinaryReader): USCoreMedicationProfile;
}

export namespace USCoreMedicationProfile {
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
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: USCoreMedicationProfile.StatusCode.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    form?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    amount?: proto_r4_core_datatypes_pb.Ratio.AsObject,
    ingredient: Array<USCoreMedicationProfile.Ingredient.AsObject>,
    batch?: USCoreMedicationProfile.Batch.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Ingredient extends jspb.Message {
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

    hasItem(): boolean;
    clearItem(): void;
    getItem(): USCoreMedicationProfile.Ingredient.ItemX | undefined;
    setItem(value?: USCoreMedicationProfile.Ingredient.ItemX): void;

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIsActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasStrength(): boolean;
    clearStrength(): void;
    getStrength(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setStrength(value?: proto_r4_core_datatypes_pb.Ratio): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ingredient.AsObject;
    static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ingredient;
    static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
  }

  export namespace Ingredient {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      item?: USCoreMedicationProfile.Ingredient.ItemX.AsObject,
      isActive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      strength?: proto_r4_core_datatypes_pb.Ratio.AsObject,
    }

    export class ItemX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ItemX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ItemX.AsObject;
      static toObject(includeInstance: boolean, msg: ItemX): ItemX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ItemX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ItemX;
      static deserializeBinaryFromReader(message: ItemX, reader: jspb.BinaryReader): ItemX;
    }

    export namespace ItemX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Batch extends jspb.Message {
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

    hasLotNumber(): boolean;
    clearLotNumber(): void;
    getLotNumber(): proto_r4_core_datatypes_pb.String | undefined;
    setLotNumber(value?: proto_r4_core_datatypes_pb.String): void;

    hasExpirationDate(): boolean;
    clearExpirationDate(): void;
    getExpirationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setExpirationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Batch.AsObject;
    static toObject(includeInstance: boolean, msg: Batch): Batch.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Batch, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Batch;
    static deserializeBinaryFromReader(message: Batch, reader: jspb.BinaryReader): Batch;
  }

  export namespace Batch {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      lotNumber?: proto_r4_core_datatypes_pb.String.AsObject,
      expirationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }
  }
}

export class USCoreGoalProfile extends jspb.Message {
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

  hasLifecycleStatus(): boolean;
  clearLifecycleStatus(): void;
  getLifecycleStatus(): USCoreGoalProfile.LifecycleStatusCode | undefined;
  setLifecycleStatus(value?: USCoreGoalProfile.LifecycleStatusCode): void;

  hasAchievementStatus(): boolean;
  clearAchievementStatus(): void;
  getAchievementStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAchievementStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): USCoreGoalProfile.StartX | undefined;
  setStart(value?: USCoreGoalProfile.StartX): void;

  clearTarget(): void;
  getTarget(): Array<USCoreGoalProfile.Target>;
  setTarget(value: Array<USCoreGoalProfile.Target>): void;
  addTarget(value?: USCoreGoalProfile.Target, index?: number): USCoreGoalProfile.Target;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setStatusDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.String | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.String): void;

  hasExpressedBy(): boolean;
  clearExpressedBy(): void;
  getExpressedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setExpressedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAddresses(): void;
  getAddresses(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddresses(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearOutcomeCode(): void;
  getOutcomeCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOutcomeCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOutcomeCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearOutcomeReference(): void;
  getOutcomeReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setOutcomeReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreGoalProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreGoalProfile): USCoreGoalProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreGoalProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreGoalProfile;
  static deserializeBinaryFromReader(message: USCoreGoalProfile, reader: jspb.BinaryReader): USCoreGoalProfile;
}

export namespace USCoreGoalProfile {
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
    lifecycleStatus?: USCoreGoalProfile.LifecycleStatusCode.AsObject,
    achievementStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    start?: USCoreGoalProfile.StartX.AsObject,
    target: Array<USCoreGoalProfile.Target.AsObject>,
    statusDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.String.AsObject,
    expressedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    addresses: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    outcomeCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcomeReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class LifecycleStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LifecycleStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: LifecycleStatusCode): LifecycleStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LifecycleStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LifecycleStatusCode;
    static deserializeBinaryFromReader(message: LifecycleStatusCode, reader: jspb.BinaryReader): LifecycleStatusCode;
  }

  export namespace LifecycleStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StartX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): StartX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartX.AsObject;
    static toObject(includeInstance: boolean, msg: StartX): StartX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartX;
    static deserializeBinaryFromReader(message: StartX, reader: jspb.BinaryReader): StartX;
  }

  export namespace StartX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      CODEABLE_CONCEPT = 2,
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

    hasMeasure(): boolean;
    clearMeasure(): void;
    getMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): USCoreGoalProfile.Target.DetailX | undefined;
    setDetail(value?: USCoreGoalProfile.Target.DetailX): void;

    hasDue(): boolean;
    clearDue(): void;
    getDue(): USCoreGoalProfile.Target.DueX | undefined;
    setDue(value?: USCoreGoalProfile.Target.DueX): void;

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
      measure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      detail?: USCoreGoalProfile.Target.DetailX.AsObject,
      due?: USCoreGoalProfile.Target.DueX.AsObject,
    }

    export class DetailX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      getChoiceCase(): DetailX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DetailX.AsObject;
      static toObject(includeInstance: boolean, msg: DetailX): DetailX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DetailX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DetailX;
      static deserializeBinaryFromReader(message: DetailX, reader: jspb.BinaryReader): DetailX;
    }

    export namespace DetailX {
      export type AsObject = {
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        CODEABLE_CONCEPT = 3,
        STRING_VALUE = 4,
        BOOLEAN = 5,
        INTEGER = 6,
        RATIO = 7,
      }
    }

    export class DueX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      getChoiceCase(): DueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DueX.AsObject;
      static toObject(includeInstance: boolean, msg: DueX): DueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DueX;
      static deserializeBinaryFromReader(message: DueX, reader: jspb.BinaryReader): DueX;
    }

    export namespace DueX {
      export type AsObject = {
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
      }
    }
  }
}

export class PatientUSCoreRaceExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearOmbCategory(): void;
  getOmbCategory(): Array<PatientUSCoreRaceExtension.OmbCategoryCoding>;
  setOmbCategory(value: Array<PatientUSCoreRaceExtension.OmbCategoryCoding>): void;
  addOmbCategory(value?: PatientUSCoreRaceExtension.OmbCategoryCoding, index?: number): PatientUSCoreRaceExtension.OmbCategoryCoding;

  clearDetailed(): void;
  getDetailed(): Array<PatientUSCoreRaceExtension.DetailedCoding>;
  setDetailed(value: Array<PatientUSCoreRaceExtension.DetailedCoding>): void;
  addDetailed(value?: PatientUSCoreRaceExtension.DetailedCoding, index?: number): PatientUSCoreRaceExtension.DetailedCoding;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_r4_core_datatypes_pb.String | undefined;
  setText(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreRaceExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreRaceExtension): PatientUSCoreRaceExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreRaceExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreRaceExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreRaceExtension, reader: jspb.BinaryReader): PatientUSCoreRaceExtension;
}

export namespace PatientUSCoreRaceExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    ombCategory: Array<PatientUSCoreRaceExtension.OmbCategoryCoding.AsObject>,
    detailed: Array<PatientUSCoreRaceExtension.DetailedCoding.AsObject>,
    text?: proto_r4_core_datatypes_pb.String.AsObject,
  }

  export class OmbCategoryCoding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): PatientUSCoreRaceExtension.OmbCategoryCoding.BoundCode | undefined;
    setCode(value?: PatientUSCoreRaceExtension.OmbCategoryCoding.BoundCode): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    hasUserSelected(): boolean;
    clearUserSelected(): void;
    getUserSelected(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setUserSelected(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OmbCategoryCoding.AsObject;
    static toObject(includeInstance: boolean, msg: OmbCategoryCoding): OmbCategoryCoding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OmbCategoryCoding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OmbCategoryCoding;
    static deserializeBinaryFromReader(message: OmbCategoryCoding, reader: jspb.BinaryReader): OmbCategoryCoding;
  }

  export namespace OmbCategoryCoding {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
      code?: PatientUSCoreRaceExtension.OmbCategoryCoding.BoundCode.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
      userSelected?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export class BoundCode extends jspb.Message {
      getValue(): proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap];
      setValue(value: proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BoundCode.AsObject;
      static toObject(includeInstance: boolean, msg: BoundCode): BoundCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BoundCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BoundCode;
      static deserializeBinaryFromReader(message: BoundCode, reader: jspb.BinaryReader): BoundCode;
    }

    export namespace BoundCode {
      export type AsObject = {
        value: proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbRaceCategoriesValueSet.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class DetailedCoding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): PatientUSCoreRaceExtension.DetailedCoding.BoundCode | undefined;
    setCode(value?: PatientUSCoreRaceExtension.DetailedCoding.BoundCode): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    hasUserSelected(): boolean;
    clearUserSelected(): void;
    getUserSelected(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setUserSelected(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailedCoding.AsObject;
    static toObject(includeInstance: boolean, msg: DetailedCoding): DetailedCoding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetailedCoding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailedCoding;
    static deserializeBinaryFromReader(message: DetailedCoding, reader: jspb.BinaryReader): DetailedCoding;
  }

  export namespace DetailedCoding {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
      code?: PatientUSCoreRaceExtension.DetailedCoding.BoundCode.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
      userSelected?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export class BoundCode extends jspb.Message {
      getValue(): proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap];
      setValue(value: proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BoundCode.AsObject;
      static toObject(includeInstance: boolean, msg: BoundCode): BoundCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BoundCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BoundCode;
      static deserializeBinaryFromReader(message: BoundCode, reader: jspb.BinaryReader): BoundCode;
    }

    export namespace BoundCode {
      export type AsObject = {
        value: proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedRaceValueSet.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class USCorePractitionerRoleProfile extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasPractitioner(): boolean;
  clearPractitioner(): void;
  getPractitioner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPractitioner(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCode(): void;
  getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearSpecialty(): void;
  getSpecialty(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSpecialty(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSpecialty(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocation(): void;
  getLocation(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocation(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearHealthcareService(): void;
  getHealthcareService(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHealthcareService(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHealthcareService(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAvailableTime(): void;
  getAvailableTime(): Array<USCorePractitionerRoleProfile.AvailableTime>;
  setAvailableTime(value: Array<USCorePractitionerRoleProfile.AvailableTime>): void;
  addAvailableTime(value?: USCorePractitionerRoleProfile.AvailableTime, index?: number): USCorePractitionerRoleProfile.AvailableTime;

  clearNotAvailable(): void;
  getNotAvailable(): Array<USCorePractitionerRoleProfile.NotAvailable>;
  setNotAvailable(value: Array<USCorePractitionerRoleProfile.NotAvailable>): void;
  addNotAvailable(value?: USCorePractitionerRoleProfile.NotAvailable, index?: number): USCorePractitionerRoleProfile.NotAvailable;

  hasAvailabilityExceptions(): boolean;
  clearAvailabilityExceptions(): void;
  getAvailabilityExceptions(): proto_r4_core_datatypes_pb.String | undefined;
  setAvailabilityExceptions(value?: proto_r4_core_datatypes_pb.String): void;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePractitionerRoleProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePractitionerRoleProfile): USCorePractitionerRoleProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePractitionerRoleProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePractitionerRoleProfile;
  static deserializeBinaryFromReader(message: USCorePractitionerRoleProfile, reader: jspb.BinaryReader): USCorePractitionerRoleProfile;
}

export namespace USCorePractitionerRoleProfile {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    practitioner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    specialty: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    healthcareService: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    availableTime: Array<USCorePractitionerRoleProfile.AvailableTime.AsObject>,
    notAvailable: Array<USCorePractitionerRoleProfile.NotAvailable.AsObject>,
    availabilityExceptions?: proto_r4_core_datatypes_pb.String.AsObject,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class AvailableTime extends jspb.Message {
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

    clearDaysOfWeek(): void;
    getDaysOfWeek(): Array<USCorePractitionerRoleProfile.AvailableTime.DaysOfWeekCode>;
    setDaysOfWeek(value: Array<USCorePractitionerRoleProfile.AvailableTime.DaysOfWeekCode>): void;
    addDaysOfWeek(value?: USCorePractitionerRoleProfile.AvailableTime.DaysOfWeekCode, index?: number): USCorePractitionerRoleProfile.AvailableTime.DaysOfWeekCode;

    hasAllDay(): boolean;
    clearAllDay(): void;
    getAllDay(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAllDay(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasAvailableStartTime(): boolean;
    clearAvailableStartTime(): void;
    getAvailableStartTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setAvailableStartTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasAvailableEndTime(): boolean;
    clearAvailableEndTime(): void;
    getAvailableEndTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setAvailableEndTime(value?: proto_r4_core_datatypes_pb.Time): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AvailableTime.AsObject;
    static toObject(includeInstance: boolean, msg: AvailableTime): AvailableTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AvailableTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AvailableTime;
    static deserializeBinaryFromReader(message: AvailableTime, reader: jspb.BinaryReader): AvailableTime;
  }

  export namespace AvailableTime {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      daysOfWeek: Array<USCorePractitionerRoleProfile.AvailableTime.DaysOfWeekCode.AsObject>,
      allDay?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      availableStartTime?: proto_r4_core_datatypes_pb.Time.AsObject,
      availableEndTime?: proto_r4_core_datatypes_pb.Time.AsObject,
    }

    export class DaysOfWeekCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DaysOfWeekCode.AsObject;
      static toObject(includeInstance: boolean, msg: DaysOfWeekCode): DaysOfWeekCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DaysOfWeekCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DaysOfWeekCode;
      static deserializeBinaryFromReader(message: DaysOfWeekCode, reader: jspb.BinaryReader): DaysOfWeekCode;
    }

    export namespace DaysOfWeekCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap[keyof proto_r4_core_codes_pb.DaysOfWeekCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class NotAvailable extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasDuring(): boolean;
    clearDuring(): void;
    getDuring(): proto_r4_core_datatypes_pb.Period | undefined;
    setDuring(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotAvailable.AsObject;
    static toObject(includeInstance: boolean, msg: NotAvailable): NotAvailable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotAvailable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotAvailable;
    static deserializeBinaryFromReader(message: NotAvailable, reader: jspb.BinaryReader): NotAvailable;
  }

  export namespace NotAvailable {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      during?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

export class USCoreAllergyIntolerance extends jspb.Message {
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

  hasClinicalStatus(): boolean;
  clearClinicalStatus(): void;
  getClinicalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClinicalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasVerificationStatus(): boolean;
  clearVerificationStatus(): void;
  getVerificationStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setVerificationStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): USCoreAllergyIntolerance.TypeCode | undefined;
  setType(value?: USCoreAllergyIntolerance.TypeCode): void;

  clearCategory(): void;
  getCategory(): Array<USCoreAllergyIntolerance.CategoryCode>;
  setCategory(value: Array<USCoreAllergyIntolerance.CategoryCode>): void;
  addCategory(value?: USCoreAllergyIntolerance.CategoryCode, index?: number): USCoreAllergyIntolerance.CategoryCode;

  hasCriticality(): boolean;
  clearCriticality(): void;
  getCriticality(): USCoreAllergyIntolerance.CriticalityCode | undefined;
  setCriticality(value?: USCoreAllergyIntolerance.CriticalityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOnset(): boolean;
  clearOnset(): void;
  getOnset(): USCoreAllergyIntolerance.OnsetX | undefined;
  setOnset(value?: USCoreAllergyIntolerance.OnsetX): void;

  hasRecordedDate(): boolean;
  clearRecordedDate(): void;
  getRecordedDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRecordedDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAsserter(): boolean;
  clearAsserter(): void;
  getAsserter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAsserter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLastOccurrence(): boolean;
  clearLastOccurrence(): void;
  getLastOccurrence(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastOccurrence(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearReaction(): void;
  getReaction(): Array<USCoreAllergyIntolerance.Reaction>;
  setReaction(value: Array<USCoreAllergyIntolerance.Reaction>): void;
  addReaction(value?: USCoreAllergyIntolerance.Reaction, index?: number): USCoreAllergyIntolerance.Reaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreAllergyIntolerance.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreAllergyIntolerance): USCoreAllergyIntolerance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreAllergyIntolerance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreAllergyIntolerance;
  static deserializeBinaryFromReader(message: USCoreAllergyIntolerance, reader: jspb.BinaryReader): USCoreAllergyIntolerance;
}

export namespace USCoreAllergyIntolerance {
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
    clinicalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verificationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type?: USCoreAllergyIntolerance.TypeCode.AsObject,
    category: Array<USCoreAllergyIntolerance.CategoryCode.AsObject>,
    criticality?: USCoreAllergyIntolerance.CriticalityCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    onset?: USCoreAllergyIntolerance.OnsetX.AsObject,
    recordedDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    asserter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lastOccurrence?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    reaction: Array<USCoreAllergyIntolerance.Reaction.AsObject>,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CategoryCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCategoryCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class CriticalityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CriticalityCode.AsObject;
    static toObject(includeInstance: boolean, msg: CriticalityCode): CriticalityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CriticalityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CriticalityCode;
    static deserializeBinaryFromReader(message: CriticalityCode, reader: jspb.BinaryReader): CriticalityCode;
  }

  export namespace CriticalityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceCriticalityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OnsetX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Age | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Age): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
    setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

    getChoiceCase(): OnsetX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OnsetX.AsObject;
    static toObject(includeInstance: boolean, msg: OnsetX): OnsetX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OnsetX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OnsetX;
    static deserializeBinaryFromReader(message: OnsetX, reader: jspb.BinaryReader): OnsetX;
  }

  export namespace OnsetX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      age?: proto_r4_core_datatypes_pb.Age.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      AGE = 2,
      PERIOD = 3,
      RANGE = 4,
      STRING_VALUE = 5,
    }
  }

  export class Reaction extends jspb.Message {
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

    hasSubstance(): boolean;
    clearSubstance(): void;
    getSubstance(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSubstance(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearManifestation(): void;
    getManifestation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setManifestation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addManifestation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasOnset(): boolean;
    clearOnset(): void;
    getOnset(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setOnset(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): USCoreAllergyIntolerance.Reaction.SeverityCode | undefined;
    setSeverity(value?: USCoreAllergyIntolerance.Reaction.SeverityCode): void;

    hasExposureRoute(): boolean;
    clearExposureRoute(): void;
    getExposureRoute(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setExposureRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearNote(): void;
    getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reaction.AsObject;
    static toObject(includeInstance: boolean, msg: Reaction): Reaction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reaction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reaction;
    static deserializeBinaryFromReader(message: Reaction, reader: jspb.BinaryReader): Reaction;
  }

  export namespace Reaction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      substance?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      manifestation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      onset?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      severity?: USCoreAllergyIntolerance.Reaction.SeverityCode.AsObject,
      exposureRoute?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    }

    export class SeverityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SeverityCode.AsObject;
      static toObject(includeInstance: boolean, msg: SeverityCode): SeverityCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SeverityCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SeverityCode;
      static deserializeBinaryFromReader(message: SeverityCode, reader: jspb.BinaryReader): SeverityCode;
    }

    export namespace SeverityCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap[keyof proto_r4_core_codes_pb.AllergyIntoleranceSeverityCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class USCoreCarePlanProfile extends jspb.Message {
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

  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUri(): void;
  getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplaces(): void;
  getReplaces(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplaces(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreCarePlanProfile.StatusCode | undefined;
  setStatus(value?: USCoreCarePlanProfile.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): USCoreCarePlanProfile.IntentCode | undefined;
  setIntent(value?: USCoreCarePlanProfile.IntentCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContributor(): void;
  getContributor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContributor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContributor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCareTeam(): void;
  getCareTeam(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCareTeam(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCareTeam(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAddresses(): void;
  getAddresses(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddresses(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfo(): void;
  getSupportingInfo(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfo(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearGoal(): void;
  getGoal(): Array<proto_r4_core_datatypes_pb.Reference>;
  setGoal(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearActivity(): void;
  getActivity(): Array<USCoreCarePlanProfile.Activity>;
  setActivity(value: Array<USCoreCarePlanProfile.Activity>): void;
  addActivity(value?: USCoreCarePlanProfile.Activity, index?: number): USCoreCarePlanProfile.Activity;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreCarePlanProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreCarePlanProfile): USCoreCarePlanProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreCarePlanProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreCarePlanProfile;
  static deserializeBinaryFromReader(message: USCoreCarePlanProfile, reader: jspb.BinaryReader): USCoreCarePlanProfile;
}

export namespace USCoreCarePlanProfile {
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
    instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replaces: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCoreCarePlanProfile.StatusCode.AsObject,
    intent?: USCoreCarePlanProfile.IntentCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contributor: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    careTeam: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    addresses: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfo: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    goal: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    activity: Array<USCoreCarePlanProfile.Activity.AsObject>,
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

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Activity extends jspb.Message {
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

    clearOutcomeCodeableConcept(): void;
    getOutcomeCodeableConcept(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setOutcomeCodeableConcept(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addOutcomeCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearOutcomeReference(): void;
    getOutcomeReference(): Array<proto_r4_core_datatypes_pb.Reference>;
    setOutcomeReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearProgress(): void;
    getProgress(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setProgress(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addProgress(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): USCoreCarePlanProfile.Activity.Detail | undefined;
    setDetail(value?: USCoreCarePlanProfile.Activity.Detail): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Activity.AsObject;
    static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Activity;
    static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
  }

  export namespace Activity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      outcomeCodeableConcept: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      outcomeReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      progress: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      detail?: USCoreCarePlanProfile.Activity.Detail.AsObject,
    }

    export class Detail extends jspb.Message {
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

      hasKind(): boolean;
      clearKind(): void;
      getKind(): USCoreCarePlanProfile.Activity.Detail.KindCode | undefined;
      setKind(value?: USCoreCarePlanProfile.Activity.Detail.KindCode): void;

      clearInstantiatesCanonical(): void;
      getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
      setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
      addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

      clearInstantiatesUri(): void;
      getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
      setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
      addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearReasonCode(): void;
      getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearReasonReference(): void;
      getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
      setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearGoal(): void;
      getGoal(): Array<proto_r4_core_datatypes_pb.Reference>;
      setGoal(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): USCoreCarePlanProfile.Activity.Detail.StatusCode | undefined;
      setStatus(value?: USCoreCarePlanProfile.Activity.Detail.StatusCode): void;

      hasStatusReason(): boolean;
      clearStatusReason(): void;
      getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDoNotPerform(): boolean;
      clearDoNotPerform(): void;
      getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasScheduled(): boolean;
      clearScheduled(): void;
      getScheduled(): USCoreCarePlanProfile.Activity.Detail.ScheduledX | undefined;
      setScheduled(value?: USCoreCarePlanProfile.Activity.Detail.ScheduledX): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
      setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearPerformer(): void;
      getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
      setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasProduct(): boolean;
      clearProduct(): void;
      getProduct(): USCoreCarePlanProfile.Activity.Detail.ProductX | undefined;
      setProduct(value?: USCoreCarePlanProfile.Activity.Detail.ProductX): void;

      hasDailyAmount(): boolean;
      clearDailyAmount(): void;
      getDailyAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setDailyAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Detail.AsObject;
      static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Detail;
      static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
    }

    export namespace Detail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        kind?: USCoreCarePlanProfile.Activity.Detail.KindCode.AsObject,
        instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
        instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        goal: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        status?: USCoreCarePlanProfile.Activity.Detail.StatusCode.AsObject,
        statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        scheduled?: USCoreCarePlanProfile.Activity.Detail.ScheduledX.AsObject,
        location?: proto_r4_core_datatypes_pb.Reference.AsObject,
        performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        product?: USCoreCarePlanProfile.Activity.Detail.ProductX.AsObject,
        dailyAmount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class KindCode extends jspb.Message {
        getValue(): proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap];
        setValue(value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap]): void;

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
          value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class StatusCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ScheduledX extends jspb.Message {
        hasTiming(): boolean;
        clearTiming(): void;
        getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
        setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
        setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        getChoiceCase(): ScheduledX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScheduledX.AsObject;
        static toObject(includeInstance: boolean, msg: ScheduledX): ScheduledX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScheduledX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScheduledX;
        static deserializeBinaryFromReader(message: ScheduledX, reader: jspb.BinaryReader): ScheduledX;
      }

      export namespace ScheduledX {
        export type AsObject = {
          timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
          period?: proto_r4_core_datatypes_pb.Period.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          TIMING = 1,
          PERIOD = 2,
          STRING_VALUE = 3,
        }
      }

      export class ProductX extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        getChoiceCase(): ProductX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProductX.AsObject;
        static toObject(includeInstance: boolean, msg: ProductX): ProductX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProductX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProductX;
        static deserializeBinaryFromReader(message: ProductX, reader: jspb.BinaryReader): ProductX;
      }

      export namespace ProductX {
        export type AsObject = {
          codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          CODEABLE_CONCEPT = 1,
          REFERENCE = 2,
        }
      }
    }
  }
}

export class USCorePatientProfile extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearName(): void;
  getName(): Array<proto_r4_core_datatypes_pb.HumanName>;
  setName(value: Array<proto_r4_core_datatypes_pb.HumanName>): void;
  addName(value?: proto_r4_core_datatypes_pb.HumanName, index?: number): proto_r4_core_datatypes_pb.HumanName;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): USCorePatientProfile.GenderCode | undefined;
  setGender(value?: USCorePatientProfile.GenderCode): void;

  hasBirthDate(): boolean;
  clearBirthDate(): void;
  getBirthDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setBirthDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): USCorePatientProfile.DeceasedX | undefined;
  setDeceased(value?: USCorePatientProfile.DeceasedX): void;

  clearAddress(): void;
  getAddress(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddress(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasMaritalStatus(): boolean;
  clearMaritalStatus(): void;
  getMaritalStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMaritalStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMultipleBirth(): boolean;
  clearMultipleBirth(): void;
  getMultipleBirth(): USCorePatientProfile.MultipleBirthX | undefined;
  setMultipleBirth(value?: USCorePatientProfile.MultipleBirthX): void;

  clearPhoto(): void;
  getPhoto(): Array<proto_r4_core_datatypes_pb.Attachment>;
  setPhoto(value: Array<proto_r4_core_datatypes_pb.Attachment>): void;
  addPhoto(value?: proto_r4_core_datatypes_pb.Attachment, index?: number): proto_r4_core_datatypes_pb.Attachment;

  clearContact(): void;
  getContact(): Array<USCorePatientProfile.Contact>;
  setContact(value: Array<USCorePatientProfile.Contact>): void;
  addContact(value?: USCorePatientProfile.Contact, index?: number): USCorePatientProfile.Contact;

  clearCommunication(): void;
  getCommunication(): Array<USCorePatientProfile.Communication>;
  setCommunication(value: Array<USCorePatientProfile.Communication>): void;
  addCommunication(value?: USCorePatientProfile.Communication, index?: number): USCorePatientProfile.Communication;

  clearGeneralPractitioner(): void;
  getGeneralPractitioner(): Array<proto_r4_core_datatypes_pb.Reference>;
  setGeneralPractitioner(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addGeneralPractitioner(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearLink(): void;
  getLink(): Array<USCorePatientProfile.Link>;
  setLink(value: Array<USCorePatientProfile.Link>): void;
  addLink(value?: USCorePatientProfile.Link, index?: number): USCorePatientProfile.Link;

  hasRace(): boolean;
  clearRace(): void;
  getRace(): PatientUSCoreRaceExtension | undefined;
  setRace(value?: PatientUSCoreRaceExtension): void;

  hasEthnicity(): boolean;
  clearEthnicity(): void;
  getEthnicity(): PatientUSCoreEthnicityExtension | undefined;
  setEthnicity(value?: PatientUSCoreEthnicityExtension): void;

  hasBirthsex(): boolean;
  clearBirthsex(): void;
  getBirthsex(): PatientUSCoreBirthSexExtension.ValueCode | undefined;
  setBirthsex(value?: PatientUSCoreBirthSexExtension.ValueCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePatientProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePatientProfile): USCorePatientProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePatientProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePatientProfile;
  static deserializeBinaryFromReader(message: USCorePatientProfile, reader: jspb.BinaryReader): USCorePatientProfile;
}

export namespace USCorePatientProfile {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    name: Array<proto_r4_core_datatypes_pb.HumanName.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    gender?: USCorePatientProfile.GenderCode.AsObject,
    birthDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    deceased?: USCorePatientProfile.DeceasedX.AsObject,
    address: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    maritalStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    multipleBirth?: USCorePatientProfile.MultipleBirthX.AsObject,
    photo: Array<proto_r4_core_datatypes_pb.Attachment.AsObject>,
    contact: Array<USCorePatientProfile.Contact.AsObject>,
    communication: Array<USCorePatientProfile.Communication.AsObject>,
    generalPractitioner: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    link: Array<USCorePatientProfile.Link.AsObject>,
    race?: PatientUSCoreRaceExtension.AsObject,
    ethnicity?: PatientUSCoreEthnicityExtension.AsObject,
    birthsex?: PatientUSCoreBirthSexExtension.ValueCode.AsObject,
  }

  export class GenderCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GenderCode.AsObject;
    static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GenderCode;
    static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
  }

  export namespace GenderCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DeceasedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    getChoiceCase(): DeceasedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeceasedX.AsObject;
    static toObject(includeInstance: boolean, msg: DeceasedX): DeceasedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeceasedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeceasedX;
    static deserializeBinaryFromReader(message: DeceasedX, reader: jspb.BinaryReader): DeceasedX;
  }

  export namespace DeceasedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      DATE_TIME = 2,
    }
  }

  export class MultipleBirthX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

    getChoiceCase(): MultipleBirthX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MultipleBirthX.AsObject;
    static toObject(includeInstance: boolean, msg: MultipleBirthX): MultipleBirthX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MultipleBirthX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MultipleBirthX;
    static deserializeBinaryFromReader(message: MultipleBirthX, reader: jspb.BinaryReader): MultipleBirthX;
  }

  export namespace MultipleBirthX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      INTEGER = 2,
    }
  }

  export class Contact extends jspb.Message {
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

    clearRelationship(): void;
    getRelationship(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRelationship(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
    setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

    clearTelecom(): void;
    getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
    setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
    setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): USCorePatientProfile.Contact.GenderCode | undefined;
    setGender(value?: USCorePatientProfile.Contact.GenderCode): void;

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      relationship: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
      telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_r4_core_datatypes_pb.Address.AsObject,
      gender?: USCorePatientProfile.Contact.GenderCode.AsObject,
      organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class GenderCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GenderCode.AsObject;
      static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GenderCode;
      static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
    }

    export namespace GenderCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Communication extends jspb.Message {
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
    getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreferred(): boolean;
    clearPreferred(): void;
    getPreferred(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setPreferred(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Communication.AsObject;
    static toObject(includeInstance: boolean, msg: Communication): Communication.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Communication, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Communication;
    static deserializeBinaryFromReader(message: Communication, reader: jspb.BinaryReader): Communication;
  }

  export namespace Communication {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preferred?: proto_r4_core_datatypes_pb.Boolean.AsObject,
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

    hasOther(): boolean;
    clearOther(): void;
    getOther(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOther(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasType(): boolean;
    clearType(): void;
    getType(): USCorePatientProfile.Link.TypeCode | undefined;
    setType(value?: USCorePatientProfile.Link.TypeCode): void;

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
      other?: proto_r4_core_datatypes_pb.Reference.AsObject,
      type?: USCorePatientProfile.Link.TypeCode.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.LinkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.LinkTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class PatientUSCoreEthnicityExtension extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasOmbCategory(): boolean;
  clearOmbCategory(): void;
  getOmbCategory(): PatientUSCoreEthnicityExtension.OmbCategoryCoding | undefined;
  setOmbCategory(value?: PatientUSCoreEthnicityExtension.OmbCategoryCoding): void;

  clearDetailed(): void;
  getDetailed(): Array<PatientUSCoreEthnicityExtension.DetailedCoding>;
  setDetailed(value: Array<PatientUSCoreEthnicityExtension.DetailedCoding>): void;
  addDetailed(value?: PatientUSCoreEthnicityExtension.DetailedCoding, index?: number): PatientUSCoreEthnicityExtension.DetailedCoding;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_r4_core_datatypes_pb.String | undefined;
  setText(value?: proto_r4_core_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientUSCoreEthnicityExtension.AsObject;
  static toObject(includeInstance: boolean, msg: PatientUSCoreEthnicityExtension): PatientUSCoreEthnicityExtension.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientUSCoreEthnicityExtension, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientUSCoreEthnicityExtension;
  static deserializeBinaryFromReader(message: PatientUSCoreEthnicityExtension, reader: jspb.BinaryReader): PatientUSCoreEthnicityExtension;
}

export namespace PatientUSCoreEthnicityExtension {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    ombCategory?: PatientUSCoreEthnicityExtension.OmbCategoryCoding.AsObject,
    detailed: Array<PatientUSCoreEthnicityExtension.DetailedCoding.AsObject>,
    text?: proto_r4_core_datatypes_pb.String.AsObject,
  }

  export class OmbCategoryCoding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): PatientUSCoreEthnicityExtension.OmbCategoryCoding.BoundCode | undefined;
    setCode(value?: PatientUSCoreEthnicityExtension.OmbCategoryCoding.BoundCode): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    hasUserSelected(): boolean;
    clearUserSelected(): void;
    getUserSelected(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setUserSelected(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OmbCategoryCoding.AsObject;
    static toObject(includeInstance: boolean, msg: OmbCategoryCoding): OmbCategoryCoding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OmbCategoryCoding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OmbCategoryCoding;
    static deserializeBinaryFromReader(message: OmbCategoryCoding, reader: jspb.BinaryReader): OmbCategoryCoding;
  }

  export namespace OmbCategoryCoding {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
      code?: PatientUSCoreEthnicityExtension.OmbCategoryCoding.BoundCode.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
      userSelected?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export class BoundCode extends jspb.Message {
      getValue(): proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap];
      setValue(value: proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BoundCode.AsObject;
      static toObject(includeInstance: boolean, msg: BoundCode): BoundCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BoundCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BoundCode;
      static deserializeBinaryFromReader(message: BoundCode, reader: jspb.BinaryReader): BoundCode;
    }

    export namespace BoundCode {
      export type AsObject = {
        value: proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.OmbEthnicityCategoriesValueSet.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class DetailedCoding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasVersion(): boolean;
    clearVersion(): void;
    getVersion(): proto_r4_core_datatypes_pb.String | undefined;
    setVersion(value?: proto_r4_core_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): PatientUSCoreEthnicityExtension.DetailedCoding.BoundCode | undefined;
    setCode(value?: PatientUSCoreEthnicityExtension.DetailedCoding.BoundCode): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    hasUserSelected(): boolean;
    clearUserSelected(): void;
    getUserSelected(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setUserSelected(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetailedCoding.AsObject;
    static toObject(includeInstance: boolean, msg: DetailedCoding): DetailedCoding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetailedCoding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetailedCoding;
    static deserializeBinaryFromReader(message: DetailedCoding, reader: jspb.BinaryReader): DetailedCoding;
  }

  export namespace DetailedCoding {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      version?: proto_r4_core_datatypes_pb.String.AsObject,
      code?: PatientUSCoreEthnicityExtension.DetailedCoding.BoundCode.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
      userSelected?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    }

    export class BoundCode extends jspb.Message {
      getValue(): proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap];
      setValue(value: proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BoundCode.AsObject;
      static toObject(includeInstance: boolean, msg: BoundCode): BoundCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BoundCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BoundCode;
      static deserializeBinaryFromReader(message: BoundCode, reader: jspb.BinaryReader): BoundCode;
    }

    export namespace BoundCode {
      export type AsObject = {
        value: proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.DetailedEthnicityValueSet.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

export class UsCoreDirectEmail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.String | undefined;
  setId(value?: proto_r4_core_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsCoreDirectEmail.AsObject;
  static toObject(includeInstance: boolean, msg: UsCoreDirectEmail): UsCoreDirectEmail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsCoreDirectEmail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsCoreDirectEmail;
  static deserializeBinaryFromReader(message: UsCoreDirectEmail, reader: jspb.BinaryReader): UsCoreDirectEmail;
}

export namespace UsCoreDirectEmail {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.String.AsObject,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    valueBoolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
  }
}

export class USCoreSmokingStatusProfile extends jspb.Message {
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

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCoreSmokingStatusProfile.StatusCode | undefined;
  setStatus(value?: USCoreSmokingStatusProfile.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCoreSmokingStatusProfile.EffectiveX | undefined;
  setEffective(value?: USCoreSmokingStatusProfile.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): USCoreSmokingStatusProfile.ValueX | undefined;
  setValue(value?: USCoreSmokingStatusProfile.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<USCoreSmokingStatusProfile.ReferenceRange>;
  setReferenceRange(value: Array<USCoreSmokingStatusProfile.ReferenceRange>): void;
  addReferenceRange(value?: USCoreSmokingStatusProfile.ReferenceRange, index?: number): USCoreSmokingStatusProfile.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<USCoreSmokingStatusProfile.Component>;
  setComponent(value: Array<USCoreSmokingStatusProfile.Component>): void;
  addComponent(value?: USCoreSmokingStatusProfile.Component, index?: number): USCoreSmokingStatusProfile.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreSmokingStatusProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreSmokingStatusProfile): USCoreSmokingStatusProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreSmokingStatusProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreSmokingStatusProfile;
  static deserializeBinaryFromReader(message: USCoreSmokingStatusProfile, reader: jspb.BinaryReader): USCoreSmokingStatusProfile;
}

export namespace USCoreSmokingStatusProfile {
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
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCoreSmokingStatusProfile.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCoreSmokingStatusProfile.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: USCoreSmokingStatusProfile.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<USCoreSmokingStatusProfile.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<USCoreSmokingStatusProfile.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap];
    setValue(value: proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap]): void;

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
      value: proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap[keyof proto_r4_uscore_codes_pb.USCoreObservationSmokingStatusStatusValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
      INSTANT = 4,
    }
  }

  export class ValueX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): USCoreSmokingStatusProfile.Component.ValueX | undefined;
    setValue(value?: USCoreSmokingStatusProfile.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<USCoreSmokingStatusProfile.ReferenceRange>;
    setReferenceRange(value: Array<USCoreSmokingStatusProfile.ReferenceRange>): void;
    addReferenceRange(value?: USCoreSmokingStatusProfile.ReferenceRange, index?: number): USCoreSmokingStatusProfile.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: USCoreSmokingStatusProfile.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<USCoreSmokingStatusProfile.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

export class USCoreOrganizationProfile extends jspb.Message {
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

  hasActive(): boolean;
  clearActive(): void;
  getActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearAlias(): void;
  getAlias(): Array<proto_r4_core_datatypes_pb.String>;
  setAlias(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearTelecom(): void;
  getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
  setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

  clearAddress(): void;
  getAddress(): Array<proto_r4_core_datatypes_pb.Address>;
  setAddress(value: Array<proto_r4_core_datatypes_pb.Address>): void;
  addAddress(value?: proto_r4_core_datatypes_pb.Address, index?: number): proto_r4_core_datatypes_pb.Address;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContact(): void;
  getContact(): Array<USCoreOrganizationProfile.Contact>;
  setContact(value: Array<USCoreOrganizationProfile.Contact>): void;
  addContact(value?: USCoreOrganizationProfile.Contact, index?: number): USCoreOrganizationProfile.Contact;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCoreOrganizationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCoreOrganizationProfile): USCoreOrganizationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCoreOrganizationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCoreOrganizationProfile;
  static deserializeBinaryFromReader(message: USCoreOrganizationProfile, reader: jspb.BinaryReader): USCoreOrganizationProfile;
}

export namespace USCoreOrganizationProfile {
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
    active?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    alias: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
    address: Array<proto_r4_core_datatypes_pb.Address.AsObject>,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contact: Array<USCoreOrganizationProfile.Contact.AsObject>,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class Contact extends jspb.Message {
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

    hasPurpose(): boolean;
    clearPurpose(): void;
    getPurpose(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPurpose(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
    setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

    clearTelecom(): void;
    getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
    setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
    setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      purpose?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
      telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_r4_core_datatypes_pb.Address.AsObject,
    }
  }
}

export class USCorePediatricBMIforAgeObservationProfile extends jspb.Message {
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

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): USCorePediatricBMIforAgeObservationProfile.StatusCode | undefined;
  setStatus(value?: USCorePediatricBMIforAgeObservationProfile.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): USCorePediatricBMIforAgeObservationProfile.EffectiveX | undefined;
  setEffective(value?: USCorePediatricBMIforAgeObservationProfile.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): USCorePediatricBMIforAgeObservationProfile.ValueX | undefined;
  setValue(value?: USCorePediatricBMIforAgeObservationProfile.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange>;
  setReferenceRange(value: Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange>): void;
  addReferenceRange(value?: USCorePediatricBMIforAgeObservationProfile.ReferenceRange, index?: number): USCorePediatricBMIforAgeObservationProfile.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<USCorePediatricBMIforAgeObservationProfile.Component>;
  setComponent(value: Array<USCorePediatricBMIforAgeObservationProfile.Component>): void;
  addComponent(value?: USCorePediatricBMIforAgeObservationProfile.Component, index?: number): USCorePediatricBMIforAgeObservationProfile.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): USCorePediatricBMIforAgeObservationProfile.AsObject;
  static toObject(includeInstance: boolean, msg: USCorePediatricBMIforAgeObservationProfile): USCorePediatricBMIforAgeObservationProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: USCorePediatricBMIforAgeObservationProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): USCorePediatricBMIforAgeObservationProfile;
  static deserializeBinaryFromReader(message: USCorePediatricBMIforAgeObservationProfile, reader: jspb.BinaryReader): USCorePediatricBMIforAgeObservationProfile;
}

export namespace USCorePediatricBMIforAgeObservationProfile {
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
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: USCorePediatricBMIforAgeObservationProfile.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: USCorePediatricBMIforAgeObservationProfile.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: USCorePediatricBMIforAgeObservationProfile.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<USCorePediatricBMIforAgeObservationProfile.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
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

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): USCorePediatricBMIforAgeObservationProfile.Component.ValueX | undefined;
    setValue(value?: USCorePediatricBMIforAgeObservationProfile.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange>;
    setReferenceRange(value: Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange>): void;
    addReferenceRange(value?: USCorePediatricBMIforAgeObservationProfile.ReferenceRange, index?: number): USCorePediatricBMIforAgeObservationProfile.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: USCorePediatricBMIforAgeObservationProfile.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<USCorePediatricBMIforAgeObservationProfile.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

