// package: google.fhir.r4.core
// file: proto/r4/core/resources/service_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ServiceRequest extends jspb.Message {
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

  hasRequisition(): boolean;
  clearRequisition(): void;
  getRequisition(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setRequisition(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ServiceRequest.StatusCode | undefined;
  setStatus(value?: ServiceRequest.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): ServiceRequest.IntentCode | undefined;
  setIntent(value?: ServiceRequest.IntentCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): ServiceRequest.PriorityCode | undefined;
  setPriority(value?: ServiceRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearOrderDetail(): void;
  getOrderDetail(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOrderDetail(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOrderDetail(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): ServiceRequest.QuantityX | undefined;
  setQuantity(value?: ServiceRequest.QuantityX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): ServiceRequest.OccurrenceX | undefined;
  setOccurrence(value?: ServiceRequest.OccurrenceX): void;

  hasAsNeeded(): boolean;
  clearAsNeeded(): void;
  getAsNeeded(): ServiceRequest.AsNeededX | undefined;
  setAsNeeded(value?: ServiceRequest.AsNeededX): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearLocationCode(): void;
  getLocationCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLocationCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLocationCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocationReference(): void;
  getLocationReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setLocationReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addLocationReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInsurance(): void;
  getInsurance(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsurance(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfo(): void;
  getSupportingInfo(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfo(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBodySite(): void;
  getBodySite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodySite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasPatientInstruction(): boolean;
  clearPatientInstruction(): void;
  getPatientInstruction(): proto_r4_core_datatypes_pb.String | undefined;
  setPatientInstruction(value?: proto_r4_core_datatypes_pb.String): void;

  clearRelevantHistory(): void;
  getRelevantHistory(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistory(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceRequest): ServiceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceRequest;
  static deserializeBinaryFromReader(message: ServiceRequest, reader: jspb.BinaryReader): ServiceRequest;
}

export namespace ServiceRequest {
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
    requisition?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: ServiceRequest.StatusCode.AsObject,
    intent?: ServiceRequest.IntentCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: ServiceRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    orderDetail: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    quantity?: ServiceRequest.QuantityX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: ServiceRequest.OccurrenceX.AsObject,
    asNeeded?: ServiceRequest.AsNeededX.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    locationCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    locationReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    insurance: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfo: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    specimen: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    bodySite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    patientInstruction?: proto_r4_core_datatypes_pb.String.AsObject,
    relevantHistory: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
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
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
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

  export class QuantityX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    getChoiceCase(): QuantityX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuantityX.AsObject;
    static toObject(includeInstance: boolean, msg: QuantityX): QuantityX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuantityX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuantityX;
    static deserializeBinaryFromReader(message: QuantityX, reader: jspb.BinaryReader): QuantityX;
  }

  export namespace QuantityX {
    export type AsObject = {
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      RATIO = 2,
      RANGE = 3,
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

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

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
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
    }
  }

  export class AsNeededX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): AsNeededX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsNeededX.AsObject;
    static toObject(includeInstance: boolean, msg: AsNeededX): AsNeededX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsNeededX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsNeededX;
    static deserializeBinaryFromReader(message: AsNeededX, reader: jspb.BinaryReader): AsNeededX;
  }

  export namespace AsNeededX {
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
