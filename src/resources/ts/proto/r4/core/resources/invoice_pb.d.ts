// package: google.fhir.r4.core
// file: proto/r4/core/resources/invoice.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Invoice extends jspb.Message {
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
  getStatus(): Invoice.StatusCode | undefined;
  setStatus(value?: Invoice.StatusCode): void;

  hasCancelledReason(): boolean;
  clearCancelledReason(): void;
  getCancelledReason(): proto_r4_core_datatypes_pb.String | undefined;
  setCancelledReason(value?: proto_r4_core_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRecipient(): boolean;
  clearRecipient(): void;
  getRecipient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecipient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearParticipant(): void;
  getParticipant(): Array<Invoice.Participant>;
  setParticipant(value: Array<Invoice.Participant>): void;
  addParticipant(value?: Invoice.Participant, index?: number): Invoice.Participant;

  hasIssuer(): boolean;
  clearIssuer(): void;
  getIssuer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setIssuer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAccount(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearLineItem(): void;
  getLineItem(): Array<Invoice.LineItem>;
  setLineItem(value: Array<Invoice.LineItem>): void;
  addLineItem(value?: Invoice.LineItem, index?: number): Invoice.LineItem;

  clearTotalPriceComponent(): void;
  getTotalPriceComponent(): Array<Invoice.LineItem.PriceComponent>;
  setTotalPriceComponent(value: Array<Invoice.LineItem.PriceComponent>): void;
  addTotalPriceComponent(value?: Invoice.LineItem.PriceComponent, index?: number): Invoice.LineItem.PriceComponent;

  hasTotalNet(): boolean;
  clearTotalNet(): void;
  getTotalNet(): proto_r4_core_datatypes_pb.Money | undefined;
  setTotalNet(value?: proto_r4_core_datatypes_pb.Money): void;

  hasTotalGross(): boolean;
  clearTotalGross(): void;
  getTotalGross(): proto_r4_core_datatypes_pb.Money | undefined;
  setTotalGross(value?: proto_r4_core_datatypes_pb.Money): void;

  hasPaymentTerms(): boolean;
  clearPaymentTerms(): void;
  getPaymentTerms(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPaymentTerms(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invoice.AsObject;
  static toObject(includeInstance: boolean, msg: Invoice): Invoice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Invoice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invoice;
  static deserializeBinaryFromReader(message: Invoice, reader: jspb.BinaryReader): Invoice;
}

export namespace Invoice {
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
    status?: Invoice.StatusCode.AsObject,
    cancelledReason?: proto_r4_core_datatypes_pb.String.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    recipient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    participant: Array<Invoice.Participant.AsObject>,
    issuer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    account?: proto_r4_core_datatypes_pb.Reference.AsObject,
    lineItem: Array<Invoice.LineItem.AsObject>,
    totalPriceComponent: Array<Invoice.LineItem.PriceComponent.AsObject>,
    totalNet?: proto_r4_core_datatypes_pb.Money.AsObject,
    totalGross?: proto_r4_core_datatypes_pb.Money.AsObject,
    paymentTerms?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.InvoiceStatusCode.ValueMap],
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

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
    setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class LineItem extends jspb.Message {
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

    hasChargeItem(): boolean;
    clearChargeItem(): void;
    getChargeItem(): Invoice.LineItem.ChargeItemX | undefined;
    setChargeItem(value?: Invoice.LineItem.ChargeItemX): void;

    clearPriceComponent(): void;
    getPriceComponent(): Array<Invoice.LineItem.PriceComponent>;
    setPriceComponent(value: Array<Invoice.LineItem.PriceComponent>): void;
    addPriceComponent(value?: Invoice.LineItem.PriceComponent, index?: number): Invoice.LineItem.PriceComponent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LineItem.AsObject;
    static toObject(includeInstance: boolean, msg: LineItem): LineItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LineItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LineItem;
    static deserializeBinaryFromReader(message: LineItem, reader: jspb.BinaryReader): LineItem;
  }

  export namespace LineItem {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      chargeItem?: Invoice.LineItem.ChargeItemX.AsObject,
      priceComponent: Array<Invoice.LineItem.PriceComponent.AsObject>,
    }

    export class ChargeItemX extends jspb.Message {
      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): ChargeItemX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ChargeItemX.AsObject;
      static toObject(includeInstance: boolean, msg: ChargeItemX): ChargeItemX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ChargeItemX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ChargeItemX;
      static deserializeBinaryFromReader(message: ChargeItemX, reader: jspb.BinaryReader): ChargeItemX;
    }

    export namespace ChargeItemX {
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

    export class PriceComponent extends jspb.Message {
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
      getType(): Invoice.LineItem.PriceComponent.TypeCode | undefined;
      setType(value?: Invoice.LineItem.PriceComponent.TypeCode): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasFactor(): boolean;
      clearFactor(): void;
      getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.Money | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.Money): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PriceComponent.AsObject;
      static toObject(includeInstance: boolean, msg: PriceComponent): PriceComponent.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PriceComponent, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PriceComponent;
      static deserializeBinaryFromReader(message: PriceComponent, reader: jspb.BinaryReader): PriceComponent;
    }

    export namespace PriceComponent {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: Invoice.LineItem.PriceComponent.TypeCode.AsObject,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        amount?: proto_r4_core_datatypes_pb.Money.AsObject,
      }

      export class TypeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap[keyof proto_r4_core_codes_pb.InvoicePriceComponentTypeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }
}

