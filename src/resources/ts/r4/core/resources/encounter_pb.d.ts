// package: google.fhir.r4.core
// file: proto/r4/core/resources/encounter.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Encounter extends jspb.Message {
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
  getStatus(): Encounter.StatusCode | undefined;
  setStatus(value?: Encounter.StatusCode): void;

  clearStatusHistoryList(): void;
  getStatusHistoryList(): Array<Encounter.StatusHistory>;
  setStatusHistoryList(value: Array<Encounter.StatusHistory>): void;
  addStatusHistory(value?: Encounter.StatusHistory, index?: number): Encounter.StatusHistory;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
  setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

  clearClassHistoryList(): void;
  getClassHistoryList(): Array<Encounter.ClassHistory>;
  setClassHistoryList(value: Array<Encounter.ClassHistory>): void;
  addClassHistory(value?: Encounter.ClassHistory, index?: number): Encounter.ClassHistory;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasServiceType(): boolean;
  clearServiceType(): void;
  getServiceType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setServiceType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearEpisodeOfCareList(): void;
  getEpisodeOfCareList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEpisodeOfCareList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEpisodeOfCare(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearParticipantList(): void;
  getParticipantList(): Array<Encounter.Participant>;
  setParticipantList(value: Array<Encounter.Participant>): void;
  addParticipant(value?: Encounter.Participant, index?: number): Encounter.Participant;

  clearAppointmentList(): void;
  getAppointmentList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAppointmentList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAppointment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasLength(): boolean;
  clearLength(): void;
  getLength(): proto_r4_core_datatypes_pb.Duration | undefined;
  setLength(value?: proto_r4_core_datatypes_pb.Duration): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDiagnosisList(): void;
  getDiagnosisList(): Array<Encounter.Diagnosis>;
  setDiagnosisList(value: Array<Encounter.Diagnosis>): void;
  addDiagnosis(value?: Encounter.Diagnosis, index?: number): Encounter.Diagnosis;

  clearAccountList(): void;
  getAccountList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAccountList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAccount(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasHospitalization(): boolean;
  clearHospitalization(): void;
  getHospitalization(): Encounter.Hospitalization | undefined;
  setHospitalization(value?: Encounter.Hospitalization): void;

  clearLocationList(): void;
  getLocationList(): Array<Encounter.Location>;
  setLocationList(value: Array<Encounter.Location>): void;
  addLocation(value?: Encounter.Location, index?: number): Encounter.Location;

  hasServiceProvider(): boolean;
  clearServiceProvider(): void;
  getServiceProvider(): proto_r4_core_datatypes_pb.Reference | undefined;
  setServiceProvider(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Encounter.AsObject;
  static toObject(includeInstance: boolean, msg: Encounter): Encounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Encounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Encounter;
  static deserializeBinaryFromReader(message: Encounter, reader: jspb.BinaryReader): Encounter;
}

export namespace Encounter {
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
    status?: Encounter.StatusCode.AsObject,
    statusHistoryList: Array<Encounter.StatusHistory.AsObject>,
    classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
    classHistoryList: Array<Encounter.ClassHistory.AsObject>,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    serviceType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    episodeOfCareList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    participantList: Array<Encounter.Participant.AsObject>,
    appointmentList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    length?: proto_r4_core_datatypes_pb.Duration.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    diagnosisList: Array<Encounter.Diagnosis.AsObject>,
    accountList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    hospitalization?: Encounter.Hospitalization.AsObject,
    locationList: Array<Encounter.Location.AsObject>,
    serviceProvider?: proto_r4_core_datatypes_pb.Reference.AsObject,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
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
    getStatus(): Encounter.StatusHistory.StatusCode | undefined;
    setStatus(value?: Encounter.StatusHistory.StatusCode): void;

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
      status?: Encounter.StatusHistory.StatusCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class ClassHistory extends jspb.Message {
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

    hasClassValue(): boolean;
    clearClassValue(): void;
    getClassValue(): proto_r4_core_datatypes_pb.Coding | undefined;
    setClassValue(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClassHistory.AsObject;
    static toObject(includeInstance: boolean, msg: ClassHistory): ClassHistory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClassHistory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClassHistory;
    static deserializeBinaryFromReader(message: ClassHistory, reader: jspb.BinaryReader): ClassHistory;
  }

  export namespace ClassHistory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      classValue?: proto_r4_core_datatypes_pb.Coding.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }

  export class Participant extends jspb.Message {
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

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasIndividual(): boolean;
    clearIndividual(): void;
    getIndividual(): proto_r4_core_datatypes_pb.Reference | undefined;
    setIndividual(value?: proto_r4_core_datatypes_pb.Reference): void;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      individual?: proto_r4_core_datatypes_pb.Reference.AsObject,
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

    hasUse(): boolean;
    clearUse(): void;
    getUse(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUse(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
      use?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      rank?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    }
  }

  export class Hospitalization extends jspb.Message {
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

    hasPreAdmissionIdentifier(): boolean;
    clearPreAdmissionIdentifier(): void;
    getPreAdmissionIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setPreAdmissionIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasOrigin(): boolean;
    clearOrigin(): void;
    getOrigin(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrigin(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasAdmitSource(): boolean;
    clearAdmitSource(): void;
    getAdmitSource(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdmitSource(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReAdmission(): boolean;
    clearReAdmission(): void;
    getReAdmission(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReAdmission(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearDietPreferenceList(): void;
    getDietPreferenceList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setDietPreferenceList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addDietPreference(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialCourtesyList(): void;
    getSpecialCourtesyList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialCourtesyList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialCourtesy(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSpecialArrangementList(): void;
    getSpecialArrangementList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setSpecialArrangementList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addSpecialArrangement(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDestination(): boolean;
    clearDestination(): void;
    getDestination(): proto_r4_core_datatypes_pb.Reference | undefined;
    setDestination(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDischargeDisposition(): boolean;
    clearDischargeDisposition(): void;
    getDischargeDisposition(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDischargeDisposition(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hospitalization.AsObject;
    static toObject(includeInstance: boolean, msg: Hospitalization): Hospitalization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hospitalization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hospitalization;
    static deserializeBinaryFromReader(message: Hospitalization, reader: jspb.BinaryReader): Hospitalization;
  }

  export namespace Hospitalization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      preAdmissionIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      origin?: proto_r4_core_datatypes_pb.Reference.AsObject,
      admitSource?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reAdmission?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      dietPreferenceList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialCourtesyList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      specialArrangementList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      destination?: proto_r4_core_datatypes_pb.Reference.AsObject,
      dischargeDisposition?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }

  export class Location extends jspb.Message {
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

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasStatus(): boolean;
    clearStatus(): void;
    getStatus(): Encounter.Location.StatusCode | undefined;
    setStatus(value?: Encounter.Location.StatusCode): void;

    hasPhysicalType(): boolean;
    clearPhysicalType(): void;
    getPhysicalType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPhysicalType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Location.AsObject;
    static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Location;
    static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
  }

  export namespace Location {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      location?: proto_r4_core_datatypes_pb.Reference.AsObject,
      status?: Encounter.Location.StatusCode.AsObject,
      physicalType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export class StatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.EncounterLocationStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

