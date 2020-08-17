// package: google.fhir.r4.core
// file: proto/r4/core/resources/coverage_eligibility_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class CoverageEligibilityRequest extends jspb.Message {
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
  getStatus(): CoverageEligibilityRequest.StatusCode | undefined;
  setStatus(value?: CoverageEligibilityRequest.StatusCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPurposeList(): void;
  getPurposeList(): Array<CoverageEligibilityRequest.PurposeCode>;
  setPurposeList(value: Array<CoverageEligibilityRequest.PurposeCode>): void;
  addPurpose(value?: CoverageEligibilityRequest.PurposeCode, index?: number): CoverageEligibilityRequest.PurposeCode;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasServiced(): boolean;
  clearServiced(): void;
  getServiced(): CoverageEligibilityRequest.ServicedX | undefined;
  setServiced(value?: CoverageEligibilityRequest.ServicedX): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasEnterer(): boolean;
  clearEnterer(): void;
  getEnterer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEnterer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasInsurer(): boolean;
  clearInsurer(): void;
  getInsurer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInsurer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasFacility(): boolean;
  clearFacility(): void;
  getFacility(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFacility(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<CoverageEligibilityRequest.SupportingInformation>;
  setSupportingInfoList(value: Array<CoverageEligibilityRequest.SupportingInformation>): void;
  addSupportingInfo(value?: CoverageEligibilityRequest.SupportingInformation, index?: number): CoverageEligibilityRequest.SupportingInformation;

  clearInsuranceList(): void;
  getInsuranceList(): Array<CoverageEligibilityRequest.Insurance>;
  setInsuranceList(value: Array<CoverageEligibilityRequest.Insurance>): void;
  addInsurance(value?: CoverageEligibilityRequest.Insurance, index?: number): CoverageEligibilityRequest.Insurance;

  clearItemList(): void;
  getItemList(): Array<CoverageEligibilityRequest.Details>;
  setItemList(value: Array<CoverageEligibilityRequest.Details>): void;
  addItem(value?: CoverageEligibilityRequest.Details, index?: number): CoverageEligibilityRequest.Details;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoverageEligibilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CoverageEligibilityRequest): CoverageEligibilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CoverageEligibilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoverageEligibilityRequest;
  static deserializeBinaryFromReader(message: CoverageEligibilityRequest, reader: jspb.BinaryReader): CoverageEligibilityRequest;
}

export namespace CoverageEligibilityRequest {
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
    status?: CoverageEligibilityRequest.StatusCode.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    purposeList: Array<CoverageEligibilityRequest.PurposeCode.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    serviced?: CoverageEligibilityRequest.ServicedX.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    facility?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInfoList: Array<CoverageEligibilityRequest.SupportingInformation.AsObject>,
    insuranceList: Array<CoverageEligibilityRequest.Insurance.AsObject>,
    itemList: Array<CoverageEligibilityRequest.Details.AsObject>,
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

  export class PurposeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap[keyof proto_r4_core_codes_pb.EligibilityRequestPurposeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

  export class SupportingInformation extends jspb.Message {
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

    hasInformation(): boolean;
    clearInformation(): void;
    getInformation(): proto_r4_core_datatypes_pb.Reference | undefined;
    setInformation(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAppliesToAll(): boolean;
    clearAppliesToAll(): void;
    getAppliesToAll(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setAppliesToAll(value?: proto_r4_core_datatypes_pb.Boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportingInformation.AsObject;
    static toObject(includeInstance: boolean, msg: SupportingInformation): SupportingInformation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportingInformation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportingInformation;
    static deserializeBinaryFromReader(message: SupportingInformation, reader: jspb.BinaryReader): SupportingInformation;
  }

  export namespace SupportingInformation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      information?: proto_r4_core_datatypes_pb.Reference.AsObject,
      appliesToAll?: proto_r4_core_datatypes_pb.Boolean.AsObject,
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
      focal?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      businessArrangement?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Details extends jspb.Message {
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

    clearSupportingInfoSequenceList(): void;
    getSupportingInfoSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setSupportingInfoSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addSupportingInfoSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasProductOrService(): boolean;
    clearProductOrService(): void;
    getProductOrService(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProductOrService(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearModifierList(): void;
    getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
    setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasUnitPrice(): boolean;
    clearUnitPrice(): void;
    getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
    setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

    hasFacility(): boolean;
    clearFacility(): void;
    getFacility(): proto_r4_core_datatypes_pb.Reference | undefined;
    setFacility(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearDiagnosisList(): void;
    getDiagnosisList(): Array<CoverageEligibilityRequest.Details.Diagnosis>;
    setDiagnosisList(value: Array<CoverageEligibilityRequest.Details.Diagnosis>): void;
    addDiagnosis(value?: CoverageEligibilityRequest.Details.Diagnosis, index?: number): CoverageEligibilityRequest.Details.Diagnosis;

    clearDetailList(): void;
    getDetailList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDetailList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      supportingInfoSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      facility?: proto_r4_core_datatypes_pb.Reference.AsObject,
      diagnosisList: Array<CoverageEligibilityRequest.Details.Diagnosis.AsObject>,
      detailList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class Diagnosis extends jspb.Message {
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

      hasDiagnosis(): boolean;
      clearDiagnosis(): void;
      getDiagnosis(): CoverageEligibilityRequest.Details.Diagnosis.DiagnosisX | undefined;
      setDiagnosis(value?: CoverageEligibilityRequest.Details.Diagnosis.DiagnosisX): void;

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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        diagnosis?: CoverageEligibilityRequest.Details.Diagnosis.DiagnosisX.AsObject,
      }

      export class DiagnosisX extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        getChoiceCase(): DiagnosisX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DiagnosisX.AsObject;
        static toObject(includeInstance: boolean, msg: DiagnosisX): DiagnosisX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DiagnosisX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DiagnosisX;
        static deserializeBinaryFromReader(message: DiagnosisX, reader: jspb.BinaryReader): DiagnosisX;
      }

      export namespace DiagnosisX {
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

