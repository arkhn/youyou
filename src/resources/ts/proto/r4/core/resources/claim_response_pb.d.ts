// package: google.fhir.r4.core
// file: proto/r4/core/resources/claim_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ClaimResponse extends jspb.Message {
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
  getStatus(): ClaimResponse.StatusCode | undefined;
  setStatus(value?: ClaimResponse.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubType(): boolean;
  clearSubType(): void;
  getSubType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSubType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): ClaimResponse.UseCode | undefined;
  setUse(value?: ClaimResponse.UseCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasInsurer(): boolean;
  clearInsurer(): void;
  getInsurer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInsurer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequestor(): boolean;
  clearRequestor(): void;
  getRequestor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequestor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequest(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): ClaimResponse.OutcomeCode | undefined;
  setOutcome(value?: ClaimResponse.OutcomeCode): void;

  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): proto_r4_core_datatypes_pb.String | undefined;
  setDisposition(value?: proto_r4_core_datatypes_pb.String): void;

  hasPreAuthRef(): boolean;
  clearPreAuthRef(): void;
  getPreAuthRef(): proto_r4_core_datatypes_pb.String | undefined;
  setPreAuthRef(value?: proto_r4_core_datatypes_pb.String): void;

  hasPreAuthPeriod(): boolean;
  clearPreAuthPeriod(): void;
  getPreAuthPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPreAuthPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasPayeeType(): boolean;
  clearPayeeType(): void;
  getPayeeType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPayeeType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearItem(): void;
  getItem(): Array<ClaimResponse.Item>;
  setItem(value: Array<ClaimResponse.Item>): void;
  addItem(value?: ClaimResponse.Item, index?: number): ClaimResponse.Item;

  clearAddItem(): void;
  getAddItem(): Array<ClaimResponse.AddedItem>;
  setAddItem(value: Array<ClaimResponse.AddedItem>): void;
  addAddItem(value?: ClaimResponse.AddedItem, index?: number): ClaimResponse.AddedItem;

  clearAdjudication(): void;
  getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
  setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
  addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

  clearTotal(): void;
  getTotal(): Array<ClaimResponse.Total>;
  setTotal(value: Array<ClaimResponse.Total>): void;
  addTotal(value?: ClaimResponse.Total, index?: number): ClaimResponse.Total;

  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): ClaimResponse.Payment | undefined;
  setPayment(value?: ClaimResponse.Payment): void;

  hasFundsReserve(): boolean;
  clearFundsReserve(): void;
  getFundsReserve(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundsReserve(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFormCode(): boolean;
  clearFormCode(): void;
  getFormCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFormCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setForm(value?: proto_r4_core_datatypes_pb.Attachment): void;

  clearProcessNote(): void;
  getProcessNote(): Array<ClaimResponse.Note>;
  setProcessNote(value: Array<ClaimResponse.Note>): void;
  addProcessNote(value?: ClaimResponse.Note, index?: number): ClaimResponse.Note;

  clearCommunicationRequest(): void;
  getCommunicationRequest(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCommunicationRequest(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCommunicationRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInsurance(): void;
  getInsurance(): Array<ClaimResponse.Insurance>;
  setInsurance(value: Array<ClaimResponse.Insurance>): void;
  addInsurance(value?: ClaimResponse.Insurance, index?: number): ClaimResponse.Insurance;

  clearError(): void;
  getError(): Array<ClaimResponse.Error>;
  setError(value: Array<ClaimResponse.Error>): void;
  addError(value?: ClaimResponse.Error, index?: number): ClaimResponse.Error;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimResponse): ClaimResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimResponse;
  static deserializeBinaryFromReader(message: ClaimResponse, reader: jspb.BinaryReader): ClaimResponse;
}

export namespace ClaimResponse {
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
    status?: ClaimResponse.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    use?: ClaimResponse.UseCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    requestor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: ClaimResponse.OutcomeCode.AsObject,
    disposition?: proto_r4_core_datatypes_pb.String.AsObject,
    preAuthRef?: proto_r4_core_datatypes_pb.String.AsObject,
    preAuthPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    payeeType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    item: Array<ClaimResponse.Item.AsObject>,
    addItem: Array<ClaimResponse.AddedItem.AsObject>,
    adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
    total: Array<ClaimResponse.Total.AsObject>,
    payment?: ClaimResponse.Payment.AsObject,
    fundsReserve?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    formCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    form?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    processNote: Array<ClaimResponse.Note.AsObject>,
    communicationRequest: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    insurance: Array<ClaimResponse.Insurance.AsObject>,
    error: Array<ClaimResponse.Error.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OutcomeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OutcomeCode.AsObject;
    static toObject(includeInstance: boolean, msg: OutcomeCode): OutcomeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OutcomeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OutcomeCode;
    static deserializeBinaryFromReader(message: OutcomeCode, reader: jspb.BinaryReader): OutcomeCode;
  }

  export namespace OutcomeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Item extends jspb.Message {
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

    hasItemSequence(): boolean;
    clearItemSequence(): void;
    getItemSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setItemSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    clearNoteNumber(): void;
    getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearAdjudication(): void;
    getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
    setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
    addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

    clearDetail(): void;
    getDetail(): Array<ClaimResponse.Item.ItemDetail>;
    setDetail(value: Array<ClaimResponse.Item.ItemDetail>): void;
    addDetail(value?: ClaimResponse.Item.ItemDetail, index?: number): ClaimResponse.Item.ItemDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
      detail: Array<ClaimResponse.Item.ItemDetail.AsObject>,
    }

    export class Adjudication extends jspb.Message {
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

      hasCategory(): boolean;
      clearCategory(): void;
      getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReason(): boolean;
      clearReason(): void;
      getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.Money | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.Money): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setValue(value?: proto_r4_core_datatypes_pb.Decimal): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Adjudication.AsObject;
      static toObject(includeInstance: boolean, msg: Adjudication): Adjudication.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Adjudication, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Adjudication;
      static deserializeBinaryFromReader(message: Adjudication, reader: jspb.BinaryReader): Adjudication;
    }

    export namespace Adjudication {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        amount?: proto_r4_core_datatypes_pb.Money.AsObject,
        value?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      }
    }

    export class ItemDetail extends jspb.Message {
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

      hasDetailSequence(): boolean;
      clearDetailSequence(): void;
      getDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      clearNoteNumber(): void;
      getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
      setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
      addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

      clearAdjudication(): void;
      getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
      setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
      addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

      clearSubDetail(): void;
      getSubDetail(): Array<ClaimResponse.Item.ItemDetail.SubDetail>;
      setSubDetail(value: Array<ClaimResponse.Item.ItemDetail.SubDetail>): void;
      addSubDetail(value?: ClaimResponse.Item.ItemDetail.SubDetail, index?: number): ClaimResponse.Item.ItemDetail.SubDetail;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ItemDetail.AsObject;
      static toObject(includeInstance: boolean, msg: ItemDetail): ItemDetail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ItemDetail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ItemDetail;
      static deserializeBinaryFromReader(message: ItemDetail, reader: jspb.BinaryReader): ItemDetail;
    }

    export namespace ItemDetail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        detailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
        adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
        subDetail: Array<ClaimResponse.Item.ItemDetail.SubDetail.AsObject>,
      }

      export class SubDetail extends jspb.Message {
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

        hasSubDetailSequence(): boolean;
        clearSubDetailSequence(): void;
        getSubDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
        setSubDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

        clearNoteNumber(): void;
        getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
        setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
        addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

        clearAdjudication(): void;
        getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
        setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
        addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): SubDetail.AsObject;
        static toObject(includeInstance: boolean, msg: SubDetail): SubDetail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: SubDetail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): SubDetail;
        static deserializeBinaryFromReader(message: SubDetail, reader: jspb.BinaryReader): SubDetail;
      }

      export namespace SubDetail {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          subDetailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
          noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
          adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
        }
      }
    }
  }

  export class AddedItem extends jspb.Message {
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

    clearItemSequence(): void;
    getItemSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setItemSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addItemSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearDetailSequence(): void;
    getDetailSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setDetailSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearSubdetailSequence(): void;
    getSubdetailSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setSubdetailSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addSubdetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearProvider(): void;
    getProvider(): Array<proto_r4_core_datatypes_pb.Reference>;
    setProvider(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addProvider(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasProductOrService(): boolean;
    clearProductOrService(): void;
    getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearModifier(): void;
    getModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearProgramCode(): void;
    getProgramCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setProgramCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasServiced(): boolean;
    clearServiced(): void;
    getServiced(): ClaimResponse.AddedItem.ServicedX | undefined;
    setServiced(value?: ClaimResponse.AddedItem.ServicedX): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): ClaimResponse.AddedItem.LocationX | undefined;
    setLocation(value?: ClaimResponse.AddedItem.LocationX): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasUnitPrice(): boolean;
    clearUnitPrice(): void;
    getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
    setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

    hasFactor(): boolean;
    clearFactor(): void;
    getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasNet(): boolean;
    clearNet(): void;
    getNet(): proto_r4_core_datatypes_pb.Money | undefined;
    setNet(value?: proto_r4_core_datatypes_pb.Money): void;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSubSite(): void;
    getSubSite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubSite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubSite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearNoteNumber(): void;
    getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearAdjudication(): void;
    getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
    setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
    addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

    clearDetail(): void;
    getDetail(): Array<ClaimResponse.AddedItem.AddedItemDetail>;
    setDetail(value: Array<ClaimResponse.AddedItem.AddedItemDetail>): void;
    addDetail(value?: ClaimResponse.AddedItem.AddedItemDetail, index?: number): ClaimResponse.AddedItem.AddedItemDetail;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddedItem.AsObject;
    static toObject(includeInstance: boolean, msg: AddedItem): AddedItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddedItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddedItem;
    static deserializeBinaryFromReader(message: AddedItem, reader: jspb.BinaryReader): AddedItem;
  }

  export namespace AddedItem {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      detailSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      subdetailSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      provider: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: ClaimResponse.AddedItem.ServicedX.AsObject,
      location?: ClaimResponse.AddedItem.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
      detail: Array<ClaimResponse.AddedItem.AddedItemDetail.AsObject>,
    }

    export class ServicedX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): ServicedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ServicedX.AsObject;
      static toObject(includeInstance: boolean, msg: ServicedX): ServicedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ServicedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ServicedX;
      static deserializeBinaryFromReader(message: ServicedX, reader: jspb.BinaryReader): ServicedX;
    }

    export namespace ServicedX {
      export type AsObject = {
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
        PERIOD = 2,
      }
    }

    export class LocationX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): LocationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): LocationX.AsObject;
      static toObject(includeInstance: boolean, msg: LocationX): LocationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: LocationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): LocationX;
      static deserializeBinaryFromReader(message: LocationX, reader: jspb.BinaryReader): LocationX;
    }

    export namespace LocationX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        ADDRESS = 2,
        REFERENCE = 3,
      }
    }

    export class AddedItemDetail extends jspb.Message {
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

      hasProductOrService(): boolean;
      clearProductOrService(): void;
      getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearModifier(): void;
      getModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasUnitPrice(): boolean;
      clearUnitPrice(): void;
      getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
      setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

      hasFactor(): boolean;
      clearFactor(): void;
      getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasNet(): boolean;
      clearNet(): void;
      getNet(): proto_r4_core_datatypes_pb.Money | undefined;
      setNet(value?: proto_r4_core_datatypes_pb.Money): void;

      clearNoteNumber(): void;
      getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
      setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
      addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

      clearAdjudication(): void;
      getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
      setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
      addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

      clearSubDetail(): void;
      getSubDetail(): Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail>;
      setSubDetail(value: Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail>): void;
      addSubDetail(value?: ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail, index?: number): ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AddedItemDetail.AsObject;
      static toObject(includeInstance: boolean, msg: AddedItemDetail): AddedItemDetail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AddedItemDetail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AddedItemDetail;
      static deserializeBinaryFromReader(message: AddedItemDetail, reader: jspb.BinaryReader): AddedItemDetail;
    }

    export namespace AddedItemDetail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        net?: proto_r4_core_datatypes_pb.Money.AsObject,
        noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
        adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
        subDetail: Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail.AsObject>,
      }

      export class AddedItemSubDetail extends jspb.Message {
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

        hasProductOrService(): boolean;
        clearProductOrService(): void;
        getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        clearModifier(): void;
        getModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasUnitPrice(): boolean;
        clearUnitPrice(): void;
        getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
        setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

        hasFactor(): boolean;
        clearFactor(): void;
        getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
        setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

        hasNet(): boolean;
        clearNet(): void;
        getNet(): proto_r4_core_datatypes_pb.Money | undefined;
        setNet(value?: proto_r4_core_datatypes_pb.Money): void;

        clearNoteNumber(): void;
        getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
        setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
        addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

        clearAdjudication(): void;
        getAdjudication(): Array<ClaimResponse.Item.Adjudication>;
        setAdjudication(value: Array<ClaimResponse.Item.Adjudication>): void;
        addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AddedItemSubDetail.AsObject;
        static toObject(includeInstance: boolean, msg: AddedItemSubDetail): AddedItemSubDetail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AddedItemSubDetail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AddedItemSubDetail;
        static deserializeBinaryFromReader(message: AddedItemSubDetail, reader: jspb.BinaryReader): AddedItemSubDetail;
      }

      export namespace AddedItemSubDetail {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
          adjudication: Array<ClaimResponse.Item.Adjudication.AsObject>,
        }
      }
    }
  }

  export class Total extends jspb.Message {
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

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): proto_r4_core_datatypes_pb.Money | undefined;
    setAmount(value?: proto_r4_core_datatypes_pb.Money): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Total.AsObject;
    static toObject(includeInstance: boolean, msg: Total): Total.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Total, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Total;
    static deserializeBinaryFromReader(message: Total, reader: jspb.BinaryReader): Total;
  }

  export namespace Total {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      amount?: proto_r4_core_datatypes_pb.Money.AsObject,
    }
  }

  export class Payment extends jspb.Message {
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

    hasAdjustment(): boolean;
    clearAdjustment(): void;
    getAdjustment(): proto_r4_core_datatypes_pb.Money | undefined;
    setAdjustment(value?: proto_r4_core_datatypes_pb.Money): void;

    hasAdjustmentReason(): boolean;
    clearAdjustmentReason(): void;
    getAdjustmentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdjustmentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): proto_r4_core_datatypes_pb.Money | undefined;
    setAmount(value?: proto_r4_core_datatypes_pb.Money): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payment.AsObject;
    static toObject(includeInstance: boolean, msg: Payment): Payment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payment;
    static deserializeBinaryFromReader(message: Payment, reader: jspb.BinaryReader): Payment;
  }

  export namespace Payment {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      adjustment?: proto_r4_core_datatypes_pb.Money.AsObject,
      adjustmentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      amount?: proto_r4_core_datatypes_pb.Money.AsObject,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    }
  }

  export class Note extends jspb.Message {
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

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setNumber(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasType(): boolean;
    clearType(): void;
    getType(): ClaimResponse.Note.TypeCode | undefined;
    setType(value?: ClaimResponse.Note.TypeCode): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Note.AsObject;
    static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Note;
    static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
  }

  export namespace Note {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      number?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      type?: ClaimResponse.Note.TypeCode.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      language?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.NoteTypeCode.ValueMap[keyof proto_r4_core_codes_pb.NoteTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.NoteTypeCode.ValueMap[keyof proto_r4_core_codes_pb.NoteTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.NoteTypeCode.ValueMap[keyof proto_r4_core_codes_pb.NoteTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Insurance extends jspb.Message {
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasFocal(): boolean;
    clearFocal(): void;
    getFocal(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setFocal(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasBusinessArrangement(): boolean;
    clearBusinessArrangement(): void;
    getBusinessArrangement(): proto_r4_core_datatypes_pb.String | undefined;
    setBusinessArrangement(value?: proto_r4_core_datatypes_pb.String): void;

    hasClaimResponse(): boolean;
    clearClaimResponse(): void;
    getClaimResponse(): proto_r4_core_datatypes_pb.Reference | undefined;
    setClaimResponse(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Insurance.AsObject;
    static toObject(includeInstance: boolean, msg: Insurance): Insurance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Insurance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Insurance;
    static deserializeBinaryFromReader(message: Insurance, reader: jspb.BinaryReader): Insurance;
  }

  export namespace Insurance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      focal?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      businessArrangement?: proto_r4_core_datatypes_pb.String.AsObject,
      claimResponse?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Error extends jspb.Message {
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

    hasItemSequence(): boolean;
    clearItemSequence(): void;
    getItemSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setItemSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasDetailSequence(): boolean;
    clearDetailSequence(): void;
    getDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasSubDetailSequence(): boolean;
    clearSubDetailSequence(): void;
    getSubDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSubDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Error.AsObject;
    static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Error;
    static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
  }

  export namespace Error {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      detailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      subDetailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

