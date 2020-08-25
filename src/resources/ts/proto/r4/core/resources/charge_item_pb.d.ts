// package: google.fhir.r4.core
// file: proto/r4/core/resources/charge_item.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ChargeItem extends jspb.Message {
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

  clearDefinitionUri(): void;
  getDefinitionUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setDefinitionUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addDefinitionUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearDefinitionCanonical(): void;
  getDefinitionCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setDefinitionCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addDefinitionCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ChargeItem.StatusCode | undefined;
  setStatus(value?: ChargeItem.StatusCode): void;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_r4_core_datatypes_pb.Reference | undefined;
  setContext(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): ChargeItem.OccurrenceX | undefined;
  setOccurrence(value?: ChargeItem.OccurrenceX): void;

  clearPerformer(): void;
  getPerformer(): Array<ChargeItem.Performer>;
  setPerformer(value: Array<ChargeItem.Performer>): void;
  addPerformer(value?: ChargeItem.Performer, index?: number): ChargeItem.Performer;

  hasPerformingOrganization(): boolean;
  clearPerformingOrganization(): void;
  getPerformingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequestingOrganization(): boolean;
  clearRequestingOrganization(): void;
  getRequestingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequestingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCostCenter(): boolean;
  clearCostCenter(): void;
  getCostCenter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCostCenter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasQuantity(): boolean;
  clearQuantity(): void;
  getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
  setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

  clearBodysite(): void;
  getBodysite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setBodysite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addBodysite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasFactorOverride(): boolean;
  clearFactorOverride(): void;
  getFactorOverride(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setFactorOverride(value?: proto_r4_core_datatypes_pb.Decimal): void;

  hasPriceOverride(): boolean;
  clearPriceOverride(): void;
  getPriceOverride(): proto_r4_core_datatypes_pb.Money | undefined;
  setPriceOverride(value?: proto_r4_core_datatypes_pb.Money): void;

  hasOverrideReason(): boolean;
  clearOverrideReason(): void;
  getOverrideReason(): proto_r4_core_datatypes_pb.String | undefined;
  setOverrideReason(value?: proto_r4_core_datatypes_pb.String): void;

  hasEnterer(): boolean;
  clearEnterer(): void;
  getEnterer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEnterer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEnteredDate(): boolean;
  clearEnteredDate(): void;
  getEnteredDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setEnteredDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearReason(): void;
  getReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearService(): void;
  getService(): Array<proto_r4_core_datatypes_pb.Reference>;
  setService(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addService(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasProduct(): boolean;
  clearProduct(): void;
  getProduct(): ChargeItem.ProductX | undefined;
  setProduct(value?: ChargeItem.ProductX): void;

  clearAccount(): void;
  getAccount(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAccount(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAccount(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearSupportingInformation(): void;
  getSupportingInformation(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformation(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeItem.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeItem): ChargeItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeItem;
  static deserializeBinaryFromReader(message: ChargeItem, reader: jspb.BinaryReader): ChargeItem;
}

export namespace ChargeItem {
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
    definitionUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    definitionCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    status?: ChargeItem.StatusCode.AsObject,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    context?: proto_r4_core_datatypes_pb.Reference.AsObject,
    occurrence?: ChargeItem.OccurrenceX.AsObject,
    performer: Array<ChargeItem.Performer.AsObject>,
    performingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    requestingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    costCenter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
    bodysite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    factorOverride?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    priceOverride?: proto_r4_core_datatypes_pb.Money.AsObject,
    overrideReason?: proto_r4_core_datatypes_pb.String.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    enteredDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    reason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    service: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    product?: ChargeItem.ProductX.AsObject,
    account: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    supportingInformation: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ChargeItemStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

  export class ProductX extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      REFERENCE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }
}

