// package: google.fhir.r4.core
// file: proto/r4/core/resources/claim.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Claim extends jspb.Message {
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
  getStatus(): Claim.StatusCode | undefined;
  setStatus(value?: Claim.StatusCode): void;

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
  getUse(): Claim.UseCode | undefined;
  setUse(value?: Claim.UseCode): void;

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

  hasFundsReserve(): boolean;
  clearFundsReserve(): void;
  getFundsReserve(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFundsReserve(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearRelatedList(): void;
  getRelatedList(): Array<Claim.RelatedClaim>;
  setRelatedList(value: Array<Claim.RelatedClaim>): void;
  addRelated(value?: Claim.RelatedClaim, index?: number): Claim.RelatedClaim;

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
  getPayee(): Claim.Payee | undefined;
  setPayee(value?: Claim.Payee): void;

  hasReferral(): boolean;
  clearReferral(): void;
  getReferral(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferral(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasFacility(): boolean;
  clearFacility(): void;
  getFacility(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFacility(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCareTeamList(): void;
  getCareTeamList(): Array<Claim.CareTeam>;
  setCareTeamList(value: Array<Claim.CareTeam>): void;
  addCareTeam(value?: Claim.CareTeam, index?: number): Claim.CareTeam;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<Claim.SupportingInformation>;
  setSupportingInfoList(value: Array<Claim.SupportingInformation>): void;
  addSupportingInfo(value?: Claim.SupportingInformation, index?: number): Claim.SupportingInformation;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<Claim.Diagnosis>;
  setDiagnosisList(value: Array<Claim.Diagnosis>): void;
  addDiagnosis(value?: Claim.Diagnosis, index?: number): Claim.Diagnosis;

  clearProcedureList(): void;
  getProcedureList(): Array<Claim.Procedure>;
  setProcedureList(value: Array<Claim.Procedure>): void;
  addProcedure(value?: Claim.Procedure, index?: number): Claim.Procedure;

  clearInsuranceList(): void;
  getInsuranceList(): Array<Claim.Insurance>;
  setInsuranceList(value: Array<Claim.Insurance>): void;
  addInsurance(value?: Claim.Insurance, index?: number): Claim.Insurance;

  hasAccident(): boolean;
  clearAccident(): void;
  getAccident(): Claim.Accident | undefined;
  setAccident(value?: Claim.Accident): void;

  clearItemList(): void;
  getItemList(): Array<Claim.Item>;
  setItemList(value: Array<Claim.Item>): void;
  addItem(value?: Claim.Item, index?: number): Claim.Item;

  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): proto_r4_core_datatypes_pb.Money | undefined;
  setTotal(value?: proto_r4_core_datatypes_pb.Money): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Claim.AsObject;
  static toObject(includeInstance: boolean, msg: Claim): Claim.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Claim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Claim;
  static deserializeBinaryFromReader(message: Claim, reader: jspb.BinaryReader): Claim;
}

export namespace Claim {
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
    status?: Claim.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    use?: Claim.UseCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    billablePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    enterer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insurer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    provider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    fundsReserve?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    relatedList: Array<Claim.RelatedClaim.AsObject>,
    prescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    originalPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    payee?: Claim.Payee.AsObject,
    referral?: proto_r4_core_datatypes_pb.Reference.AsObject,
    facility?: proto_r4_core_datatypes_pb.Reference.AsObject,
    careTeamList: Array<Claim.CareTeam.AsObject>,
    supportingInfoList: Array<Claim.SupportingInformation.AsObject>,
    diagnosisList: Array<Claim.Diagnosis.AsObject>,
    procedureList: Array<Claim.Procedure.AsObject>,
    insuranceList: Array<Claim.Insurance.AsObject>,
    accident?: Claim.Accident.AsObject,
    itemList: Array<Claim.Item.AsObject>,
    total?: proto_r4_core_datatypes_pb.Money.AsObject,
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

  export class RelatedClaim extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class CareTeam extends jspb.Message {
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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
    getTiming(): Claim.SupportingInformation.TimingX | undefined;
    setTiming(value?: Claim.SupportingInformation.TimingX): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Claim.SupportingInformation.ValueX | undefined;
    setValue(value?: Claim.SupportingInformation.ValueX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      timing?: Claim.SupportingInformation.TimingX.AsObject,
      value?: Claim.SupportingInformation.ValueX.AsObject,
      reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
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

    hasDiagnosis(): boolean;
    clearDiagnosis(): void;
    getDiagnosis(): Claim.Diagnosis.DiagnosisX | undefined;
    setDiagnosis(value?: Claim.Diagnosis.DiagnosisX): void;

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      diagnosis?: Claim.Diagnosis.DiagnosisX.AsObject,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
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

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): Claim.Procedure.ProcedureX | undefined;
    setProcedure(value?: Claim.Procedure.ProcedureX): void;

    clearUdiList(): void;
    getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      procedure?: Claim.Procedure.ProcedureX.AsObject,
      udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
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

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasBusinessArrangement(): boolean;
    clearBusinessArrangement(): void;
    getBusinessArrangement(): proto_r4_core_datatypes_pb.String | undefined;
    setBusinessArrangement(value?: proto_r4_core_datatypes_pb.String): void;

    clearPreAuthRefList(): void;
    getPreAuthRefList(): Array<proto_r4_core_datatypes_pb.String>;
    setPreAuthRefList(value: Array<proto_r4_core_datatypes_pb.String>): void;
    addPreAuthRef(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

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
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      businessArrangement?: proto_r4_core_datatypes_pb.String.AsObject,
      preAuthRefList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      claimResponse?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Accident extends jspb.Message {
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
    getLocation(): Claim.Accident.LocationX | undefined;
    setLocation(value?: Claim.Accident.LocationX): void;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      location?: Claim.Accident.LocationX.AsObject,
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

    clearCareTeamSequenceList(): void;
    getCareTeamSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setCareTeamSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addCareTeamSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearDiagnosisSequenceList(): void;
    getDiagnosisSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setDiagnosisSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addDiagnosisSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearProcedureSequenceList(): void;
    getProcedureSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setProcedureSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
    addProcedureSequence(value?: proto_r4_core_datatypes_pb.PositiveInt, index?: number): proto_r4_core_datatypes_pb.PositiveInt;

    clearInformationSequenceList(): void;
    getInformationSequenceList(): Array<proto_r4_core_datatypes_pb.PositiveInt>;
    setInformationSequenceList(value: Array<proto_r4_core_datatypes_pb.PositiveInt>): void;
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
    getServiced(): Claim.Item.ServicedX | undefined;
    setServiced(value?: Claim.Item.ServicedX): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): Claim.Item.LocationX | undefined;
    setLocation(value?: Claim.Item.LocationX): void;

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

    clearUdiList(): void;
    getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSubSiteList(): void;
    getSubSiteList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSubSiteList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSubSite(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearEncounterList(): void;
    getEncounterList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEncounterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEncounter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearDetailList(): void;
    getDetailList(): Array<Claim.Item.Detail>;
    setDetailList(value: Array<Claim.Item.Detail>): void;
    addDetail(value?: Claim.Item.Detail, index?: number): Claim.Item.Detail;

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
      sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      careTeamSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      diagnosisSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      procedureSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      informationSequenceList: Array<proto_r4_core_datatypes_pb.PositiveInt.AsObject>,
      revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      serviced?: Claim.Item.ServicedX.AsObject,
      location?: Claim.Item.LocationX.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
      factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      net?: proto_r4_core_datatypes_pb.Money.AsObject,
      udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subSiteList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      encounterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      detailList: Array<Claim.Item.Detail.AsObject>,
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

    export class Detail extends jspb.Message {
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

      clearModifierList(): void;
      getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearProgramCodeList(): void;
      getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

      clearUdiList(): void;
      getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearSubDetailList(): void;
      getSubDetailList(): Array<Claim.Item.Detail.SubDetail>;
      setSubDetailList(value: Array<Claim.Item.Detail.SubDetail>): void;
      addSubDetail(value?: Claim.Item.Detail.SubDetail, index?: number): Claim.Item.Detail.SubDetail;

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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
        factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        net?: proto_r4_core_datatypes_pb.Money.AsObject,
        udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        subDetailList: Array<Claim.Item.Detail.SubDetail.AsObject>,
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

        clearModifierList(): void;
        getModifierList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setModifierList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        clearProgramCodeList(): void;
        getProgramCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setProgramCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

        clearUdiList(): void;
        getUdiList(): Array<proto_r4_core_datatypes_pb.Reference>;
        setUdiList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
        addUdi(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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
          sequence?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
          revenue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          productOrService?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          modifierList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          programCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          udiList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        }
      }
    }
  }
}

