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

  clearItemList(): void;
  getItemList(): Array<ClaimResponse.Item>;
  setItemList(value: Array<ClaimResponse.Item>): void;
  addItem(value?: ClaimResponse.Item, index?: number): ClaimResponse.Item;

  clearAddItemList(): void;
  getAddItemList(): Array<ClaimResponse.AddedItem>;
  setAddItemList(value: Array<ClaimResponse.AddedItem>): void;
  addAddItem(value?: ClaimResponse.AddedItem, index?: number): ClaimResponse.AddedItem;

  clearAdjudicationList(): void;
  getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
  setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
  addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

  clearTotalList(): void;
  getTotalList(): Array<ClaimResponse.Total>;
  setTotalList(value: Array<ClaimResponse.Total>): void;
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

  clearProcessNoteList(): void;
  getProcessNoteList(): Array<ClaimResponse.Note>;
  setProcessNoteList(value: Array<ClaimResponse.Note>): void;
  addProcessNote(value?: ClaimResponse.Note, index?: number): ClaimResponse.Note;

  clearCommunicationRequestList(): void;
  getCommunicationRequestList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCommunicationRequestList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCommunicationRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInsuranceList(): void;
  getInsuranceList(): Array<ClaimResponse.Insurance>;
  setInsuranceList(value: Array<ClaimResponse.Insurance>): void;
  addInsurance(value?: ClaimResponse.Insurance, index?: number): ClaimResponse.Insurance;

  clearErrorList(): void;
  getErrorList(): Array<ClaimResponse.Error>;
  setErrorList(value: Array<ClaimResponse.Error>): void;
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
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
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
    itemList: Array<ClaimResponse.Item.AsObject>,
    addItemList: Array<ClaimResponse.AddedItem.AsObject>,
    adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
    totalList: Array<ClaimResponse.Total.AsObject>,
    payment?: ClaimResponse.Payment.AsObject,
    fundsReserve?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    formCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    form?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    processNoteList: Array<ClaimResponse.Note.AsObject>,
    communicationRequestList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    insuranceList: Array<ClaimResponse.Insurance.AsObject>,
    errorList: Array<ClaimResponse.Error.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.FinancialResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class UseCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.UseCode.ValueMap[keyof proto_r4_core_codes_pb.UseCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OutcomeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap[keyof proto_r4_core_codes_pb.ClaimProcessingCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Item extends jspb.Message {
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

    hasItemSequence(): boolean;
    clearItemSequence(): void;
    getItemSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setItemSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    clearNoteNumberList(): void;
    getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearAdjudicationList(): void;
    getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
    setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
    addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

    clearDetailList(): void;
    getDetailList(): Array<ClaimResponse.Item.ItemDetail>;
    setDetailList(value: Array<ClaimResponse.Item.ItemDetail>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
      detailList: Array<ClaimResponse.Item.ItemDetail.AsObject>,
    }

    export class Adjudication extends jspb.Message {
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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasDetailSequence(): boolean;
      clearDetailSequence(): void;
      getDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      clearNoteNumberList(): void;
      getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
      setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
      addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

      clearAdjudicationList(): void;
      getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
      setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
      addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

      clearSubDetailList(): void;
      getSubDetailList(): Array<ClaimResponse.Item.ItemDetail.SubDetail>;
      setSubDetailList(value: Array<ClaimResponse.Item.ItemDetail.SubDetail>): void;
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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        detailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
        adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
        subDetailList: Array<ClaimResponse.Item.ItemDetail.SubDetail.AsObject>,
      }

      export class SubDetail extends jspb.Message {
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

        hasSubDetailSequence(): boolean;
        clearSubDetailSequence(): void;
        getSubDetailSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
        setSubDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

        clearNoteNumberList(): void;
        getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
        setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
        addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

        clearAdjudicationList(): void;
        getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
        setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
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
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          subDetailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
          noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
          adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
        }
      }
    }
  }

  export class AddedItem extends jspb.Message {
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

    clearItemSequenceList(): void;
    getItemSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setItemSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addItemSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearDetailSequenceList(): void;
    getDetailSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setDetailSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearSubdetailSequenceList(): void;
    getSubdetailSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setSubdetailSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addSubdetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearProviderList(): void;
    getProviderList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setProviderList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addProvider(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasProductOrService(): boolean;
    clearProductOrService(): void;
    getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearModifierList(): void;
    getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearProgramCodeList(): void;
    getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

    clearSubSiteList(): void;
    getSubSiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubSiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubSite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearNoteNumberList(): void;
    getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearAdjudicationList(): void;
    getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
    setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
    addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

    clearDetailList(): void;
    getDetailList(): Array<ClaimResponse.AddedItem.AddedItemDetail>;
    setDetailList(value: Array<ClaimResponse.AddedItem.AddedItemDetail>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      detailSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      subdetailSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      providerList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: ClaimResponse.AddedItem.ServicedX.AsObject,
      location?: ClaimResponse.AddedItem.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
      detailList: Array<ClaimResponse.AddedItem.AddedItemDetail.AsObject>,
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

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasProductOrService(): boolean;
      clearProductOrService(): void;
      getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearModifierList(): void;
      getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

      clearNoteNumberList(): void;
      getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
      setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
      addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

      clearAdjudicationList(): void;
      getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
      setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
      addAdjudication(value?: ClaimResponse.Item.Adjudication, index?: number): ClaimResponse.Item.Adjudication;

      clearSubDetailList(): void;
      getSubDetailList(): Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail>;
      setSubDetailList(value: Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail>): void;
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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        net?: proto_r4_core_datatypes_pb.Money.AsObject,
        noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
        adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
        subDetailList: Array<ClaimResponse.AddedItem.AddedItemDetail.AddedItemSubDetail.AsObject>,
      }

      export class AddedItemSubDetail extends jspb.Message {
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

        hasProductOrService(): boolean;
        clearProductOrService(): void;
        getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        clearModifierList(): void;
        getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

        clearNoteNumberList(): void;
        getNoteNumberList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
        setNoteNumberList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
        addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

        clearAdjudicationList(): void;
        getAdjudicationList(): Array<ClaimResponse.Item.Adjudication>;
        setAdjudicationList(value: Array<ClaimResponse.Item.Adjudication>): void;
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
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          noteNumberList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
          adjudicationList: Array<ClaimResponse.Item.Adjudication.AsObject>,
        }
      }
    }
  }

  export class Total extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      amount?: proto_r4_core_datatypes_pb.Money.AsObject,
    }
  }

  export class Payment extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Insurance extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      itemSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      detailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      subDetailSequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

