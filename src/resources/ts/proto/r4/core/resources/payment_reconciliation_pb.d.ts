// package: google.fhir.r4.core
// file: proto/r4/core/resources/payment_reconciliation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class PaymentReconciliation extends jspb.Message {
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
  getStatus(): PaymentReconciliation.StatusCode | undefined;
  setStatus(value?: PaymentReconciliation.StatusCode): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPaymentIssuer(): boolean;
  clearPaymentIssuer(): void;
  getPaymentIssuer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPaymentIssuer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequest(): boolean;
  clearRequest(): void;
  getRequest(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequest(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRequestor(): boolean;
  clearRequestor(): void;
  getRequestor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequestor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): PaymentReconciliation.OutcomeCode | undefined;
  setOutcome(value?: PaymentReconciliation.OutcomeCode): void;

  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): proto_r4_core_datatypes_pb.String | undefined;
  setDisposition(value?: proto_r4_core_datatypes_pb.String): void;

  hasPaymentDate(): boolean;
  clearPaymentDate(): void;
  getPaymentDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setPaymentDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasPaymentAmount(): boolean;
  clearPaymentAmount(): void;
  getPaymentAmount(): proto_r4_core_datatypes_pb.Money | undefined;
  setPaymentAmount(value?: proto_r4_core_datatypes_pb.Money): void;

  hasPaymentIdentifier(): boolean;
  clearPaymentIdentifier(): void;
  getPaymentIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setPaymentIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearDetail(): void;
  getDetail(): Array<PaymentReconciliation.Details>;
  setDetail(value: Array<PaymentReconciliation.Details>): void;
  addDetail(value?: PaymentReconciliation.Details, index?: number): PaymentReconciliation.Details;

  hasFormCode(): boolean;
  clearFormCode(): void;
  getFormCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFormCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearProcessNote(): void;
  getProcessNote(): Array<PaymentReconciliation.Notes>;
  setProcessNote(value: Array<PaymentReconciliation.Notes>): void;
  addProcessNote(value?: PaymentReconciliation.Notes, index?: number): PaymentReconciliation.Notes;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PaymentReconciliation.AsObject;
  static toObject(includeInstance: boolean, msg: PaymentReconciliation): PaymentReconciliation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PaymentReconciliation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PaymentReconciliation;
  static deserializeBinaryFromReader(message: PaymentReconciliation, reader: jspb.BinaryReader): PaymentReconciliation;
}

export namespace PaymentReconciliation {
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
    status?: PaymentReconciliation.StatusCode.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    paymentIssuer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    requestor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: PaymentReconciliation.OutcomeCode.AsObject,
    disposition?: proto_r4_core_datatypes_pb.String.AsObject,
    paymentDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    paymentAmount?: proto_r4_core_datatypes_pb.Money.AsObject,
    paymentIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    detail: Array<PaymentReconciliation.Details.AsObject>,
    formCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    processNote: Array<PaymentReconciliation.Notes.AsObject>,
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

  export class Details extends jspb.Message {
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
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasPredecessor(): boolean;
    clearPredecessor(): void;
    getPredecessor(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setPredecessor(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): proto_r4_core_datatypes_pb.Reference | undefined;
    setRequest(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasSubmitter(): boolean;
    clearSubmitter(): void;
    getSubmitter(): proto_r4_core_datatypes_pb.Reference | undefined;
    setSubmitter(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): proto_r4_core_datatypes_pb.Reference | undefined;
    setResponse(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasResponsible(): boolean;
    clearResponsible(): void;
    getResponsible(): proto_r4_core_datatypes_pb.Reference | undefined;
    setResponsible(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPayee(): boolean;
    clearPayee(): void;
    getPayee(): proto_r4_core_datatypes_pb.Reference | undefined;
    setPayee(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAmount(): boolean;
    clearAmount(): void;
    getAmount(): proto_r4_core_datatypes_pb.Money | undefined;
    setAmount(value?: proto_r4_core_datatypes_pb.Money): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Details.AsObject;
    static toObject(includeInstance: boolean, msg: Details): Details.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Details, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Details;
    static deserializeBinaryFromReader(message: Details, reader: jspb.BinaryReader): Details;
  }

  export namespace Details {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      predecessor?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      request?: proto_r4_core_datatypes_pb.Reference.AsObject,
      submitter?: proto_r4_core_datatypes_pb.Reference.AsObject,
      response?: proto_r4_core_datatypes_pb.Reference.AsObject,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      responsible?: proto_r4_core_datatypes_pb.Reference.AsObject,
      payee?: proto_r4_core_datatypes_pb.Reference.AsObject,
      amount?: proto_r4_core_datatypes_pb.Money.AsObject,
    }
  }

  export class Notes extends jspb.Message {
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
    getType(): PaymentReconciliation.Notes.TypeCode | undefined;
    setType(value?: PaymentReconciliation.Notes.TypeCode): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Notes.AsObject;
    static toObject(includeInstance: boolean, msg: Notes): Notes.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Notes, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Notes;
    static deserializeBinaryFromReader(message: Notes, reader: jspb.BinaryReader): Notes;
  }

  export namespace Notes {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: PaymentReconciliation.Notes.TypeCode.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
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
}

