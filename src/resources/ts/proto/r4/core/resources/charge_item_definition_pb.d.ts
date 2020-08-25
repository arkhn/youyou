// package: google.fhir.r4.core
// file: proto/r4/core/resources/charge_item_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ChargeItemDefinition extends jspb.Message {
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

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  clearDerivedFromUri(): void;
  getDerivedFromUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setDerivedFromUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addDerivedFromUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearReplaces(): void;
  getReplaces(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setReplaces(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ChargeItemDefinition.StatusCode | undefined;
  setStatus(value?: ChargeItemDefinition.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_r4_core_datatypes_pb.String | undefined;
  setPublisher(value?: proto_r4_core_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearUseContext(): void;
  getUseContext(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasApprovalDate(): boolean;
  clearApprovalDate(): void;
  getApprovalDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setApprovalDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasLastReviewDate(): boolean;
  clearLastReviewDate(): void;
  getLastReviewDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setLastReviewDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasEffectivePeriod(): boolean;
  clearEffectivePeriod(): void;
  getEffectivePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setEffectivePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInstance(): void;
  getInstance(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInstance(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInstance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearApplicability(): void;
  getApplicability(): Array<ChargeItemDefinition.Applicability>;
  setApplicability(value: Array<ChargeItemDefinition.Applicability>): void;
  addApplicability(value?: ChargeItemDefinition.Applicability, index?: number): ChargeItemDefinition.Applicability;

  clearPropertyGroup(): void;
  getPropertyGroup(): Array<ChargeItemDefinition.PropertyGroup>;
  setPropertyGroup(value: Array<ChargeItemDefinition.PropertyGroup>): void;
  addPropertyGroup(value?: ChargeItemDefinition.PropertyGroup, index?: number): ChargeItemDefinition.PropertyGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeItemDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeItemDefinition): ChargeItemDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeItemDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeItemDefinition;
  static deserializeBinaryFromReader(message: ChargeItemDefinition, reader: jspb.BinaryReader): ChargeItemDefinition;
}

export namespace ChargeItemDefinition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    derivedFromUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    replaces: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    status?: ChargeItemDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    approvalDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    lastReviewDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    effectivePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    instance: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    applicability: Array<ChargeItemDefinition.Applicability.AsObject>,
    propertyGroup: Array<ChargeItemDefinition.PropertyGroup.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Applicability extends jspb.Message {
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

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_r4_core_datatypes_pb.String | undefined;
    setLanguage(value?: proto_r4_core_datatypes_pb.String): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): proto_r4_core_datatypes_pb.String | undefined;
    setExpression(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Applicability.AsObject;
    static toObject(includeInstance: boolean, msg: Applicability): Applicability.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Applicability, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Applicability;
    static deserializeBinaryFromReader(message: Applicability, reader: jspb.BinaryReader): Applicability;
  }

  export namespace Applicability {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      language?: proto_r4_core_datatypes_pb.String.AsObject,
      expression?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class PropertyGroup extends jspb.Message {
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

    clearApplicability(): void;
    getApplicability(): Array<ChargeItemDefinition.Applicability>;
    setApplicability(value: Array<ChargeItemDefinition.Applicability>): void;
    addApplicability(value?: ChargeItemDefinition.Applicability, index?: number): ChargeItemDefinition.Applicability;

    clearPriceComponent(): void;
    getPriceComponent(): Array<ChargeItemDefinition.PropertyGroup.PriceComponent>;
    setPriceComponent(value: Array<ChargeItemDefinition.PropertyGroup.PriceComponent>): void;
    addPriceComponent(value?: ChargeItemDefinition.PropertyGroup.PriceComponent, index?: number): ChargeItemDefinition.PropertyGroup.PriceComponent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PropertyGroup.AsObject;
    static toObject(includeInstance: boolean, msg: PropertyGroup): PropertyGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PropertyGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PropertyGroup;
    static deserializeBinaryFromReader(message: PropertyGroup, reader: jspb.BinaryReader): PropertyGroup;
  }

  export namespace PropertyGroup {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      applicability: Array<ChargeItemDefinition.Applicability.AsObject>,
      priceComponent: Array<ChargeItemDefinition.PropertyGroup.PriceComponent.AsObject>,
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
      getType(): ChargeItemDefinition.PropertyGroup.PriceComponent.TypeCode | undefined;
      setType(value?: ChargeItemDefinition.PropertyGroup.PriceComponent.TypeCode): void;

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
        type?: ChargeItemDefinition.PropertyGroup.PriceComponent.TypeCode.AsObject,
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

