// package: google.fhir.r4.core
// file: proto/r4/core/resources/coverage_eligibility_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class CoverageEligibilityResponse extends jspb.Message {
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
  getStatus(): CoverageEligibilityResponse.StatusCode | undefined;
  setStatus(value?: CoverageEligibilityResponse.StatusCode): void;

  clearPurpose(): void;
  getPurpose(): Array<CoverageEligibilityResponse.PurposeCode>;
  setPurpose(value: Array<CoverageEligibilityResponse.PurposeCode>): void;
  addPurpose(value?: CoverageEligibilityResponse.PurposeCode, index?: number): CoverageEligibilityResponse.PurposeCode;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasServiced(): boolean;
  clearServiced(): void;
  getServiced(): CoverageEligibilityResponse.ServicedX | undefined;
  setServiced(value?: CoverageEligibilityResponse.ServicedX): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

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
  getOutcome(): CoverageEligibilityResponse.OutcomeCode | undefined;
  setOutcome(value?: CoverageEligibilityResponse.OutcomeCode): void;

  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): proto_r4_core_datatypes_pb.String | undefined;
  setDisposition(value?: proto_r4_core_datatypes_pb.String): void;

  hasInsurer(): boolean;
  clearInsurer(): void;
  getInsurer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInsurer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearInsurance(): void;
  getInsurance(): Array<CoverageEligibilityResponse.Insurance>;
  setInsurance(value: Array<CoverageEligibilityResponse.Insurance>): void;
  addInsurance(value?: CoverageEligibilityResponse.Insurance, index?: number): CoverageEligibilityResponse.Insurance;

  hasPreAuthRef(): boolean;
  clearPreAuthRef(): void;
  getPreAuthRef(): proto_r4_core_datatypes_pb.String | undefined;
  setPreAuthRef(value?: proto_r4_core_datatypes_pb.String): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearError(): void;
  getError(): Array<CoverageEligibilityResponse.Errors>;
  setError(value: Array<CoverageEligibilityResponse.Errors>): void;
  addError(value?: CoverageEligibilityResponse.Errors, index?: number): CoverageEligibilityResponse.Errors;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoverageEligibilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CoverageEligibilityResponse): CoverageEligibilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoverageEligibilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoverageEligibilityResponse;
  static deserializeBinaryFromReader(message: CoverageEligibilityResponse, reader: jspb.BinaryReader): CoverageEligibilityResponse;
}

export namespace CoverageEligibilityResponse {
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
    status?: CoverageEligibilityResponse.StatusCode.AsObject,
    purpose: Array<CoverageEligibilityResponse.PurposeCode.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    serviced?: CoverageEligibilityResponse.ServicedX.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requestor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    request?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: CoverageEligibilityResponse.OutcomeCode.AsObject,
    disposition?: proto_r4_core_datatypes_pb.String.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insurance: Array<CoverageEligibilityResponse.Insurance.AsObject>,
    preAuthRef?: proto_r4_core_datatypes_pb.String.AsObject,
    form?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    error: Array<CoverageEligibilityResponse.Errors.AsObject>,
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

  export class PurposeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PurposeCode.AsObject;
    static toObject(includeInstance: boolean, msg: PurposeCode): PurposeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PurposeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PurposeCode;
    static deserializeBinaryFromReader(message: PurposeCode, reader: jspb.BinaryReader): PurposeCode;
  }

  export namespace PurposeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityResponsePurposeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
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

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasInforce(): boolean;
    clearInforce(): void;
    getInforce(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setInforce(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasBenefitPeriod(): boolean;
    clearBenefitPeriod(): void;
    getBenefitPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setBenefitPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearItem(): void;
    getItem(): Array<CoverageEligibilityResponse.Insurance.Items>;
    setItem(value: Array<CoverageEligibilityResponse.Insurance.Items>): void;
    addItem(value?: CoverageEligibilityResponse.Insurance.Items, index?: number): CoverageEligibilityResponse.Insurance.Items;

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
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      inforce?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      benefitPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
      item: Array<CoverageEligibilityResponse.Insurance.Items.AsObject>,
    }

    export class Items extends jspb.Message {
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

      hasProductOrService(): boolean;
      clearProductOrService(): void;
      getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearModifier(): void;
      getModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasProvider(): boolean;
      clearProvider(): void;
      getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
      setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasExcluded(): boolean;
      clearExcluded(): void;
      getExcluded(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setExcluded(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasName(): boolean;
      clearName(): void;
      getName(): proto_r4_core_datatypes_pb.String | undefined;
      setName(value?: proto_r4_core_datatypes_pb.String): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      hasNetwork(): boolean;
      clearNetwork(): void;
      getNetwork(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setNetwork(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasUnit(): boolean;
      clearUnit(): void;
      getUnit(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setUnit(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasTerm(): boolean;
      clearTerm(): void;
      getTerm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setTerm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearBenefit(): void;
      getBenefit(): Array<CoverageEligibilityResponse.Insurance.Items.Benefit>;
      setBenefit(value: Array<CoverageEligibilityResponse.Insurance.Items.Benefit>): void;
      addBenefit(value?: CoverageEligibilityResponse.Insurance.Items.Benefit, index?: number): CoverageEligibilityResponse.Insurance.Items.Benefit;

      hasAuthorizationRequired(): boolean;
      clearAuthorizationRequired(): void;
      getAuthorizationRequired(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setAuthorizationRequired(value?: proto_r4_core_datatypes_pb.Boolean): void;

      clearAuthorizationSupporting(): void;
      getAuthorizationSupporting(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setAuthorizationSupporting(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addAuthorizationSupporting(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasAuthorizationUrl(): boolean;
      clearAuthorizationUrl(): void;
      getAuthorizationUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
      setAuthorizationUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Items.AsObject;
      static toObject(includeInstance: boolean, msg: Items): Items.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Items, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Items;
      static deserializeBinaryFromReader(message: Items, reader: jspb.BinaryReader): Items;
    }

    export namespace Items {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
        excluded?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        name?: proto_r4_core_datatypes_pb.String.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        network?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        unit?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        term?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        benefit: Array<CoverageEligibilityResponse.Insurance.Items.Benefit.AsObject>,
        authorizationRequired?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        authorizationSupporting: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        authorizationUrl?: proto_r4_core_datatypes_pb.Uri.AsObject,
      }

      export class Benefit extends jspb.Message {
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

        hasAllowed(): boolean;
        clearAllowed(): void;
        getAllowed(): CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX | undefined;
        setAllowed(value?: CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX): void;

        hasUsed(): boolean;
        clearUsed(): void;
        getUsed(): CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX | undefined;
        setUsed(value?: CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Benefit.AsObject;
        static toObject(includeInstance: boolean, msg: Benefit): Benefit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Benefit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Benefit;
        static deserializeBinaryFromReader(message: Benefit, reader: jspb.BinaryReader): Benefit;
      }

      export namespace Benefit {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          allowed?: CoverageEligibilityResponse.Insurance.Items.Benefit.AllowedX.AsObject,
          used?: CoverageEligibilityResponse.Insurance.Items.Benefit.UsedX.AsObject,
        }

        export class AllowedX extends jspb.Message {
          hasUnsignedInt(): boolean;
          clearUnsignedInt(): void;
          getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
          setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

          hasStringValue(): boolean;
          clearStringValue(): void;
          getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
          setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

          hasMoney(): boolean;
          clearMoney(): void;
          getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
          setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

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
            unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
            stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
            money?: proto_r4_core_datatypes_pb.Money.AsObject,
          }

          export enum ChoiceCase {
            CHOICE_NOT_SET = 0,
            UNSIGNED_INT = 1,
            STRING_VALUE = 2,
            MONEY = 3,
          }
        }

        export class UsedX extends jspb.Message {
          hasUnsignedInt(): boolean;
          clearUnsignedInt(): void;
          getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
          setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

          hasStringValue(): boolean;
          clearStringValue(): void;
          getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
          setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

          hasMoney(): boolean;
          clearMoney(): void;
          getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
          setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

          getChoiceCase(): UsedX.ChoiceCase;
          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): UsedX.AsObject;
          static toObject(includeInstance: boolean, msg: UsedX): UsedX.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: UsedX, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): UsedX;
          static deserializeBinaryFromReader(message: UsedX, reader: jspb.BinaryReader): UsedX;
        }

        export namespace UsedX {
          export type AsObject = {
            unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
            stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
            money?: proto_r4_core_datatypes_pb.Money.AsObject,
          }

          export enum ChoiceCase {
            CHOICE_NOT_SET = 0,
            UNSIGNED_INT = 1,
            STRING_VALUE = 2,
            MONEY = 3,
          }
        }
      }
    }
  }

  export class Errors extends jspb.Message {
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

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Errors.AsObject;
    static toObject(includeInstance: boolean, msg: Errors): Errors.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Errors, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Errors;
    static deserializeBinaryFromReader(message: Errors, reader: jspb.BinaryReader): Errors;
  }

  export namespace Errors {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}

