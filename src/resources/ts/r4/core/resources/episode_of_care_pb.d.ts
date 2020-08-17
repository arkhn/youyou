// package: google.fhir.r4.core
// file: proto/r4/core/resources/episode_of_care.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class EpisodeOfCare extends jspb.Message {
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
  getStatus(): EpisodeOfCare.StatusCode | undefined;
  setStatus(value?: EpisodeOfCare.StatusCode): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<EpisodeOfCare.StatusHistory>;
  setStatusHistoryList(value: Array<EpisodeOfCare.StatusHistory>): void;
  addStatusHistory(value?: EpisodeOfCare.StatusHistory, index?: number): EpisodeOfCare.StatusHistory;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<EpisodeOfCare.Diagnosis>;
  setDiagnosisList(value: Array<EpisodeOfCare.Diagnosis>): void;
  addDiagnosis(value?: EpisodeOfCare.Diagnosis, index?: number): EpisodeOfCare.Diagnosis;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasManagingOrganization(): boolean;
  clearManagingOrganization(): void;
  getManagingOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManagingOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearReferralRequestList(): void;
  getReferralRequestList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReferralRequestList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReferralRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCareManager(): boolean;
  clearCareManager(): void;
  getCareManager(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCareManager(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearTeamList(): void;
  getTeamList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setTeamList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addTeam(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAccountList(): void;
  getAccountList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAccountList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAccount(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpisodeOfCare.AsObject;
  static toObject(includeInstance: boolean, msg: EpisodeOfCare): EpisodeOfCare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpisodeOfCare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpisodeOfCare;
  static deserializeBinaryFromReader(message: EpisodeOfCare, reader: jspb.BinaryReader): EpisodeOfCare;
}

export namespace EpisodeOfCare {
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
    status?: EpisodeOfCare.StatusCode.AsObject,
    statusHistoryList: Array<EpisodeOfCare.StatusHistory.AsObject>,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    diagnosisList: Array<EpisodeOfCare.Diagnosis.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    managingOrganization?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    referralRequestList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    careManager?: proto_r4_core_datatypes_pb.Reference.AsObject,
    teamList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    accountList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StatusHistory extends jspb.Message {
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

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): EpisodeOfCare.StatusHistory.StatusCode | undefined;
    setStatus(value?: EpisodeOfCare.StatusHistory.StatusCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StatusHistory.AsObject;
    static toObject(includeInstance: boolean, msg: StatusHistory): StatusHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StatusHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StatusHistory;
    static deserializeBinaryFromReader(message: StatusHistory, reader: jspb.BinaryReader): StatusHistory;
  }

  export namespace StatusHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      status?: EpisodeOfCare.StatusHistory.StatusCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EpisodeOfCareStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCondition(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRank(): boolean;
    clearRank(): void;
    getRank(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setRank(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

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
      condition?: proto_r4_core_datatypes_pb.Reference.AsObject,
      role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      rank?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    }
  }
}

