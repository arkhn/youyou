// package: google.fhir.r4.core
// file: proto/r4/core/resources/explanation_of_benefit.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ExplanationOfBenefit extends jspb.Message {
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
  getStatus(): ExplanationOfBenefit.StatusCode | undefined;
  setStatus(value?: ExplanationOfBenefit.StatusCode): void;

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
  getUse(): ExplanationOfBenefit.UseCode | undefined;
  setUse(value?: ExplanationOfBenefit.UseCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasBillablePeriod(): boolean;
  clearBillablePeriod(): void;
  getBillablePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setBillablePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasEnterer(): boolean;
  clearEnterer(): void;
  getEnterer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEnterer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasInsurer(): boolean;
  clearInsurer(): void;
  getInsurer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInsurer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasProvider(): boolean;
  clearProvider(): void;
  getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFundsReserveRequested(): boolean;
  clearFundsReserveRequested(): void;
  getFundsReserveRequested(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundsReserveRequested(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasFundsReserve(): boolean;
  clearFundsReserve(): void;
  getFundsReserve(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundsReserve(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearRelated(): void;
  getRelated(): Array<ExplanationOfBenefit.RelatedClaim>;
  setRelated(value: Array<ExplanationOfBenefit.RelatedClaim>): void;
  addRelated(value?: ExplanationOfBenefit.RelatedClaim, index?: number): ExplanationOfBenefit.RelatedClaim;

  hasPrescription(): boolean;
  clearPrescription(): void;
  getPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOriginalPrescription(): boolean;
  clearOriginalPrescription(): void;
  getOriginalPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOriginalPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPayee(): boolean;
  clearPayee(): void;
  getPayee(): ExplanationOfBenefit.Payee | undefined;
  setPayee(value?: ExplanationOfBenefit.Payee): void;

  hasReferral(): boolean;
  clearReferral(): void;
  getReferral(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferral(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasFacility(): boolean;
  clearFacility(): void;
  getFacility(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFacility(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): proto_r4_core_datatypes_pb.Reference | undefined;
  setClaim(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasClaimResponse(): boolean;
  clearClaimResponse(): void;
  getClaimResponse(): proto_r4_core_datatypes_pb.Reference | undefined;
  setClaimResponse(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): ExplanationOfBenefit.OutcomeCode | undefined;
  setOutcome(value?: ExplanationOfBenefit.OutcomeCode): void;

  hasDisposition(): boolean;
  clearDisposition(): void;
  getDisposition(): proto_r4_core_datatypes_pb.String | undefined;
  setDisposition(value?: proto_r4_core_datatypes_pb.String): void;

  clearPreAuthRef(): void;
  getPreAuthRef(): Array<proto_r4_core_datatypes_pb.String>;
  setPreAuthRef(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addPreAuthRef(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearPreAuthRefPeriod(): void;
  getPreAuthRefPeriod(): Array<proto_r4_core_datatypes_pb.Period>;
  setPreAuthRefPeriod(value: Array<proto_r4_core_datatypes_pb.Period>): void;
  addPreAuthRefPeriod(value?: proto_r4_core_datatypes_pb.Period, index?: number): proto_r4_core_datatypes_pb.Period;

  clearCareTeam(): void;
  getCareTeam(): Array<ExplanationOfBenefit.CareTeam>;
  setCareTeam(value: Array<ExplanationOfBenefit.CareTeam>): void;
  addCareTeam(value?: ExplanationOfBenefit.CareTeam, index?: number): ExplanationOfBenefit.CareTeam;

  clearSupportingInfo(): void;
  getSupportingInfo(): Array<ExplanationOfBenefit.SupportingInformation>;
  setSupportingInfo(value: Array<ExplanationOfBenefit.SupportingInformation>): void;
  addSupportingInfo(value?: ExplanationOfBenefit.SupportingInformation, index?: number): ExplanationOfBenefit.SupportingInformation;

  clearDiagnosis(): void;
  getDiagnosis(): Array<ExplanationOfBenefit.Diagnosis>;
  setDiagnosis(value: Array<ExplanationOfBenefit.Diagnosis>): void;
  addDiagnosis(value?: ExplanationOfBenefit.Diagnosis, index?: number): ExplanationOfBenefit.Diagnosis;

  clearProcedure(): void;
  getProcedure(): Array<ExplanationOfBenefit.Procedure>;
  setProcedure(value: Array<ExplanationOfBenefit.Procedure>): void;
  addProcedure(value?: ExplanationOfBenefit.Procedure, index?: number): ExplanationOfBenefit.Procedure;

  hasPrecedence(): boolean;
  clearPrecedence(): void;
  getPrecedence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setPrecedence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  clearInsurance(): void;
  getInsurance(): Array<ExplanationOfBenefit.Insurance>;
  setInsurance(value: Array<ExplanationOfBenefit.Insurance>): void;
  addInsurance(value?: ExplanationOfBenefit.Insurance, index?: number): ExplanationOfBenefit.Insurance;

  hasAccident(): boolean;
  clearAccident(): void;
  getAccident(): ExplanationOfBenefit.Accident | undefined;
  setAccident(value?: ExplanationOfBenefit.Accident): void;

  clearItem(): void;
  getItem(): Array<ExplanationOfBenefit.Item>;
  setItem(value: Array<ExplanationOfBenefit.Item>): void;
  addItem(value?: ExplanationOfBenefit.Item, index?: number): ExplanationOfBenefit.Item;

  clearAddItem(): void;
  getAddItem(): Array<ExplanationOfBenefit.AddedItem>;
  setAddItem(value: Array<ExplanationOfBenefit.AddedItem>): void;
  addAddItem(value?: ExplanationOfBenefit.AddedItem, index?: number): ExplanationOfBenefit.AddedItem;

  clearAdjudication(): void;
  getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
  setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
  addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

  clearTotal(): void;
  getTotal(): Array<ExplanationOfBenefit.Total>;
  setTotal(value: Array<ExplanationOfBenefit.Total>): void;
  addTotal(value?: ExplanationOfBenefit.Total, index?: number): ExplanationOfBenefit.Total;

  hasPayment(): boolean;
  clearPayment(): void;
  getPayment(): ExplanationOfBenefit.Payment | undefined;
  setPayment(value?: ExplanationOfBenefit.Payment): void;

  hasFormCode(): boolean;
  clearFormCode(): void;
  getFormCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFormCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasForm(): boolean;
  clearForm(): void;
  getForm(): proto_r4_core_datatypes_pb.Attachment | undefined;
  setForm(value?: proto_r4_core_datatypes_pb.Attachment): void;

  clearProcessNote(): void;
  getProcessNote(): Array<ExplanationOfBenefit.Note>;
  setProcessNote(value: Array<ExplanationOfBenefit.Note>): void;
  addProcessNote(value?: ExplanationOfBenefit.Note, index?: number): ExplanationOfBenefit.Note;

  hasBenefitPeriod(): boolean;
  clearBenefitPeriod(): void;
  getBenefitPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setBenefitPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearBenefitBalance(): void;
  getBenefitBalance(): Array<ExplanationOfBenefit.BenefitBalance>;
  setBenefitBalance(value: Array<ExplanationOfBenefit.BenefitBalance>): void;
  addBenefitBalance(value?: ExplanationOfBenefit.BenefitBalance, index?: number): ExplanationOfBenefit.BenefitBalance;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplanationOfBenefit.AsObject;
  static toObject(includeInstance: boolean, msg: ExplanationOfBenefit): ExplanationOfBenefit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplanationOfBenefit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplanationOfBenefit;
  static deserializeBinaryFromReader(message: ExplanationOfBenefit, reader: jspb.BinaryReader): ExplanationOfBenefit;
}

export namespace ExplanationOfBenefit {
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
    status?: ExplanationOfBenefit.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    use?: ExplanationOfBenefit.UseCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    billablePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    fundsReserveRequested?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    fundsReserve?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    related: Array<ExplanationOfBenefit.RelatedClaim.AsObject>,
    prescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    originalPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    payee?: ExplanationOfBenefit.Payee.AsObject,
    referral?: proto_r4_core_datatypes_pb.Reference.AsObject,
    facility?: proto_r4_core_datatypes_pb.Reference.AsObject,
    claim?: proto_r4_core_datatypes_pb.Reference.AsObject,
    claimResponse?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: ExplanationOfBenefit.OutcomeCode.AsObject,
    disposition?: proto_r4_core_datatypes_pb.String.AsObject,
    preAuthRef: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    preAuthRefPeriod: Array<proto_r4_core_datatypes_pb.Period.AsObject>,
    careTeam: Array<ExplanationOfBenefit.CareTeam.AsObject>,
    supportingInfo: Array<ExplanationOfBenefit.SupportingInformation.AsObject>,
    diagnosis: Array<ExplanationOfBenefit.Diagnosis.AsObject>,
    procedure: Array<ExplanationOfBenefit.Procedure.AsObject>,
    precedence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    insurance: Array<ExplanationOfBenefit.Insurance.AsObject>,
    accident?: ExplanationOfBenefit.Accident.AsObject,
    item: Array<ExplanationOfBenefit.Item.AsObject>,
    addItem: Array<ExplanationOfBenefit.AddedItem.AsObject>,
    adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
    total: Array<ExplanationOfBenefit.Total.AsObject>,
    payment?: ExplanationOfBenefit.Payment.AsObject,
    formCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    form?: proto_r4_core_datatypes_pb.Attachment.AsObject,
    processNote: Array<ExplanationOfBenefit.Note.AsObject>,
    benefitPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    benefitBalance: Array<ExplanationOfBenefit.BenefitBalance.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ExplanationOfBenefitStatusCode.ValueMap],
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

  export class RelatedClaim extends jspb.Message {
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

    hasClaim(): boolean;
    clearClaim(): void;
    getClaim(): proto_r4_core_datatypes_pb.Reference | undefined;
    setClaim(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasRelationship(): boolean;
    clearRelationship(): void;
    getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Identifier): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedClaim.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedClaim): RelatedClaim.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatedClaim, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedClaim;
    static deserializeBinaryFromReader(message: RelatedClaim, reader: jspb.BinaryReader): RelatedClaim;
  }

  export namespace RelatedClaim {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      claim?: proto_r4_core_datatypes_pb.Reference.AsObject,
      relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    }
  }

  export class Payee extends jspb.Message {
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

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_r4_core_datatypes_pb.Reference | undefined;
    setParty(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payee.AsObject;
    static toObject(includeInstance: boolean, msg: Payee): Payee.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Payee, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payee;
    static deserializeBinaryFromReader(message: Payee, reader: jspb.BinaryReader): Payee;
  }

  export namespace Payee {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
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

  export class CareTeam extends jspb.Message {
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

    hasProvider(): boolean;
    clearProvider(): void;
    getProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
    setProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasResponsible(): boolean;
    clearResponsible(): void;
    getResponsible(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setResponsible(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasQualification(): boolean;
    clearQualification(): void;
    getQualification(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setQualification(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CareTeam.AsObject;
    static toObject(includeInstance: boolean, msg: CareTeam): CareTeam.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CareTeam, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CareTeam;
    static deserializeBinaryFromReader(message: CareTeam, reader: jspb.BinaryReader): CareTeam;
  }

  export namespace CareTeam {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
      responsible?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      qualification?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class SupportingInformation extends jspb.Message {
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

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): ExplanationOfBenefit.SupportingInformation.TimingX | undefined;
    setTiming(value?: ExplanationOfBenefit.SupportingInformation.TimingX): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ExplanationOfBenefit.SupportingInformation.ValueX | undefined;
    setValue(value?: ExplanationOfBenefit.SupportingInformation.ValueX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.Coding | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.Coding): void;

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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      timing?: ExplanationOfBenefit.SupportingInformation.TimingX.AsObject,
      value?: ExplanationOfBenefit.SupportingInformation.ValueX.AsObject,
      reason?: proto_r4_core_datatypes_pb.Coding.AsObject,
    }

    export class TimingX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): TimingX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimingX.AsObject;
      static toObject(includeInstance: boolean, msg: TimingX): TimingX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimingX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimingX;
      static deserializeBinaryFromReader(message: TimingX, reader: jspb.BinaryReader): TimingX;
    }

    export namespace TimingX {
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

    export class ValueX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

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
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BOOLEAN = 1,
        STRING_VALUE = 2,
        QUANTITY = 3,
        ATTACHMENT = 4,
        REFERENCE = 5,
      }
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasDiagnosis(): boolean;
    clearDiagnosis(): void;
    getDiagnosis(): ExplanationOfBenefit.Diagnosis.DiagnosisX | undefined;
    setDiagnosis(value?: ExplanationOfBenefit.Diagnosis.DiagnosisX): void;

    clearType(): void;
    getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasOnAdmission(): boolean;
    clearOnAdmission(): void;
    getOnAdmission(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOnAdmission(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPackageCode(): boolean;
    clearPackageCode(): void;
    getPackageCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPackageCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      diagnosis?: ExplanationOfBenefit.Diagnosis.DiagnosisX.AsObject,
      type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      onAdmission?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      packageCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
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

  export class Procedure extends jspb.Message {
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

    clearType(): void;
    getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): ExplanationOfBenefit.Procedure.ProcedureX | undefined;
    setProcedure(value?: ExplanationOfBenefit.Procedure.ProcedureX): void;

    clearUdi(): void;
    getUdi(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdi(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Procedure.AsObject;
    static toObject(includeInstance: boolean, msg: Procedure): Procedure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Procedure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Procedure;
    static deserializeBinaryFromReader(message: Procedure, reader: jspb.BinaryReader): Procedure;
  }

  export namespace Procedure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      procedure?: ExplanationOfBenefit.Procedure.ProcedureX.AsObject,
      udi: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }

    export class ProcedureX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ProcedureX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ProcedureX.AsObject;
      static toObject(includeInstance: boolean, msg: ProcedureX): ProcedureX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ProcedureX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ProcedureX;
      static deserializeBinaryFromReader(message: ProcedureX, reader: jspb.BinaryReader): ProcedureX;
    }

    export namespace ProcedureX {
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

    hasFocal(): boolean;
    clearFocal(): void;
    getFocal(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setFocal(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearPreAuthRef(): void;
    getPreAuthRef(): Array<proto_r4_core_datatypes_pb.String>;
    setPreAuthRef(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addPreAuthRef(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

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
      focal?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      preAuthRef: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    }
  }

  export class Accident extends jspb.Message {
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
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): ExplanationOfBenefit.Accident.LocationX | undefined;
    setLocation(value?: ExplanationOfBenefit.Accident.LocationX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Accident.AsObject;
    static toObject(includeInstance: boolean, msg: Accident): Accident.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Accident, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Accident;
    static deserializeBinaryFromReader(message: Accident, reader: jspb.BinaryReader): Accident;
  }

  export namespace Accident {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      location?: ExplanationOfBenefit.Accident.LocationX.AsObject,
    }

    export class LocationX extends jspb.Message {
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
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        ADDRESS = 1,
        REFERENCE = 2,
      }
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

    hasSequence(): boolean;
    clearSequence(): void;
    getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    clearCareTeamSequence(): void;
    getCareTeamSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setCareTeamSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addCareTeamSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearDiagnosisSequence(): void;
    getDiagnosisSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setDiagnosisSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addDiagnosisSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearProcedureSequence(): void;
    getProcedureSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setProcedureSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addProcedureSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearInformationSequence(): void;
    getInformationSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setInformationSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addInformationSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    hasRevenue(): boolean;
    clearRevenue(): void;
    getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

    clearProgramCode(): void;
    getProgramCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setProgramCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasServiced(): boolean;
    clearServiced(): void;
    getServiced(): ExplanationOfBenefit.Item.ServicedX | undefined;
    setServiced(value?: ExplanationOfBenefit.Item.ServicedX): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): ExplanationOfBenefit.Item.LocationX | undefined;
    setLocation(value?: ExplanationOfBenefit.Item.LocationX): void;

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

    clearUdi(): void;
    getUdi(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdi(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSubSite(): void;
    getSubSite(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubSite(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubSite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearEncounter(): void;
    getEncounter(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEncounter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEncounter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearNoteNumber(): void;
    getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearAdjudication(): void;
    getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
    setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
    addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

    clearDetail(): void;
    getDetail(): Array<ExplanationOfBenefit.Item.Detail>;
    setDetail(value: Array<ExplanationOfBenefit.Item.Detail>): void;
    addDetail(value?: ExplanationOfBenefit.Item.Detail, index?: number): ExplanationOfBenefit.Item.Detail;

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
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      careTeamSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      diagnosisSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      procedureSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      informationSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: ExplanationOfBenefit.Item.ServicedX.AsObject,
      location?: ExplanationOfBenefit.Item.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      udi: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      encounter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
      detail: Array<ExplanationOfBenefit.Item.Detail.AsObject>,
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

      hasSequence(): boolean;
      clearSequence(): void;
      getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasRevenue(): boolean;
      clearRevenue(): void;
      getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

      clearProgramCode(): void;
      getProgramCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setProgramCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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

      clearUdi(): void;
      getUdi(): Array<proto_r4_core_datatypes_pb.Reference>;
      setUdi(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearNoteNumber(): void;
      getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
      setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
      addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

      clearAdjudication(): void;
      getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
      setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
      addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

      clearSubDetail(): void;
      getSubDetail(): Array<ExplanationOfBenefit.Item.Detail.SubDetail>;
      setSubDetail(value: Array<ExplanationOfBenefit.Item.Detail.SubDetail>): void;
      addSubDetail(value?: ExplanationOfBenefit.Item.Detail.SubDetail, index?: number): ExplanationOfBenefit.Item.Detail.SubDetail;

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
        sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        programCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        net?: proto_r4_core_datatypes_pb.Money.AsObject,
        udi: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
        adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
        subDetail: Array<ExplanationOfBenefit.Item.Detail.SubDetail.AsObject>,
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

        hasSequence(): boolean;
        clearSequence(): void;
        getSequence(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
        setSequence(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

        hasRevenue(): boolean;
        clearRevenue(): void;
        getRevenue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setRevenue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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

        clearProgramCode(): void;
        getProgramCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setProgramCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addProgramCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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

        clearUdi(): void;
        getUdi(): Array<proto_r4_core_datatypes_pb.Reference>;
        setUdi(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
        addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

        clearNoteNumber(): void;
        getNoteNumber(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
        setNoteNumber(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
        addNoteNumber(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

        clearAdjudication(): void;
        getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
        setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
        addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

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
          sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
          revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          programCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          udi: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
          noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
          adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
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

    clearSubDetailSequence(): void;
    getSubDetailSequence(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setSubDetailSequence(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addSubDetailSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

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
    getServiced(): ExplanationOfBenefit.AddedItem.ServicedX | undefined;
    setServiced(value?: ExplanationOfBenefit.AddedItem.ServicedX): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): ExplanationOfBenefit.AddedItem.LocationX | undefined;
    setLocation(value?: ExplanationOfBenefit.AddedItem.LocationX): void;

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
    getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
    setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
    addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

    clearDetail(): void;
    getDetail(): Array<ExplanationOfBenefit.AddedItem.AddedItemDetail>;
    setDetail(value: Array<ExplanationOfBenefit.AddedItem.AddedItemDetail>): void;
    addDetail(value?: ExplanationOfBenefit.AddedItem.AddedItemDetail, index?: number): ExplanationOfBenefit.AddedItem.AddedItemDetail;

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
      subDetailSequence: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      provider: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: ExplanationOfBenefit.AddedItem.ServicedX.AsObject,
      location?: ExplanationOfBenefit.AddedItem.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSite: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      noteNumber: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
      detail: Array<ExplanationOfBenefit.AddedItem.AddedItemDetail.AsObject>,
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
      getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
      setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
      addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

      clearSubDetail(): void;
      getSubDetail(): Array<ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail>;
      setSubDetail(value: Array<ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail>): void;
      addSubDetail(value?: ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail, index?: number): ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail;

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
        adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
        subDetail: Array<ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.AsObject>,
      }

      export class AddedItemDetailSubDetail extends jspb.Message {
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
        getAdjudication(): Array<ExplanationOfBenefit.Item.Adjudication>;
        setAdjudication(value: Array<ExplanationOfBenefit.Item.Adjudication>): void;
        addAdjudication(value?: ExplanationOfBenefit.Item.Adjudication, index?: number): ExplanationOfBenefit.Item.Adjudication;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AddedItemDetailSubDetail.AsObject;
        static toObject(includeInstance: boolean, msg: AddedItemDetailSubDetail): AddedItemDetailSubDetail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AddedItemDetailSubDetail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AddedItemDetailSubDetail;
        static deserializeBinaryFromReader(message: AddedItemDetailSubDetail, reader: jspb.BinaryReader): AddedItemDetailSubDetail;
      }

      export namespace AddedItemDetailSubDetail {
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
          adjudication: Array<ExplanationOfBenefit.Item.Adjudication.AsObject>,
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
    getType(): ExplanationOfBenefit.Note.TypeCode | undefined;
    setType(value?: ExplanationOfBenefit.Note.TypeCode): void;

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
      type?: ExplanationOfBenefit.Note.TypeCode.AsObject,
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

  export class BenefitBalance extends jspb.Message {
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

    clearFinancial(): void;
    getFinancial(): Array<ExplanationOfBenefit.BenefitBalance.Benefit>;
    setFinancial(value: Array<ExplanationOfBenefit.BenefitBalance.Benefit>): void;
    addFinancial(value?: ExplanationOfBenefit.BenefitBalance.Benefit, index?: number): ExplanationOfBenefit.BenefitBalance.Benefit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BenefitBalance.AsObject;
    static toObject(includeInstance: boolean, msg: BenefitBalance): BenefitBalance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BenefitBalance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BenefitBalance;
    static deserializeBinaryFromReader(message: BenefitBalance, reader: jspb.BinaryReader): BenefitBalance;
  }

  export namespace BenefitBalance {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      excluded?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      network?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      unit?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      term?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      financial: Array<ExplanationOfBenefit.BenefitBalance.Benefit.AsObject>,
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
      getAllowed(): ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX | undefined;
      setAllowed(value?: ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX): void;

      hasUsed(): boolean;
      clearUsed(): void;
      getUsed(): ExplanationOfBenefit.BenefitBalance.Benefit.UsedX | undefined;
      setUsed(value?: ExplanationOfBenefit.BenefitBalance.Benefit.UsedX): void;

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
        allowed?: ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.AsObject,
        used?: ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.AsObject,
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
          money?: proto_r4_core_datatypes_pb.Money.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          UNSIGNED_INT = 1,
          MONEY = 2,
        }
      }
    }
  }
}

