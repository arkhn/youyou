// package: google.fhir.r4.core
// file: proto/r4/core/resources/medicinal_product_authorization.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicinalProductAuthorization extends jspb.Message {
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

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCountry(): void;
  getCountry(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCountry(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCountry(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setStatusDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRestoreDate(): boolean;
  clearRestoreDate(): void;
  getRestoreDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setRestoreDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasValidityPeriod(): boolean;
  clearValidityPeriod(): void;
  getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasDataExclusivityPeriod(): boolean;
  clearDataExclusivityPeriod(): void;
  getDataExclusivityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setDataExclusivityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasDateOfFirstAuthorization(): boolean;
  clearDateOfFirstAuthorization(): void;
  getDateOfFirstAuthorization(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateOfFirstAuthorization(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasInternationalBirthDate(): boolean;
  clearInternationalBirthDate(): void;
  getInternationalBirthDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setInternationalBirthDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLegalBasis(): boolean;
  clearLegalBasis(): void;
  getLegalBasis(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLegalBasis(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearJurisdictionalAuthorization(): void;
  getJurisdictionalAuthorization(): Array<MedicinalProductAuthorization.JurisdictionalAuthorization>;
  setJurisdictionalAuthorization(value: Array<MedicinalProductAuthorization.JurisdictionalAuthorization>): void;
  addJurisdictionalAuthorization(value?: MedicinalProductAuthorization.JurisdictionalAuthorization, index?: number): MedicinalProductAuthorization.JurisdictionalAuthorization;

  hasHolder(): boolean;
  clearHolder(): void;
  getHolder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setHolder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasRegulator(): boolean;
  clearRegulator(): void;
  getRegulator(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRegulator(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasProcedure(): boolean;
  clearProcedure(): void;
  getProcedure(): MedicinalProductAuthorization.Procedure | undefined;
  setProcedure(value?: MedicinalProductAuthorization.Procedure): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicinalProductAuthorization.AsObject;
  static toObject(includeInstance: boolean, msg: MedicinalProductAuthorization): MedicinalProductAuthorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicinalProductAuthorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicinalProductAuthorization;
  static deserializeBinaryFromReader(message: MedicinalProductAuthorization, reader: jspb.BinaryReader): MedicinalProductAuthorization;
}

export namespace MedicinalProductAuthorization {
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
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    country: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    statusDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    restoreDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    dataExclusivityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    dateOfFirstAuthorization?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    internationalBirthDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    legalBasis?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    jurisdictionalAuthorization: Array<MedicinalProductAuthorization.JurisdictionalAuthorization.AsObject>,
    holder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    regulator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    procedure?: MedicinalProductAuthorization.Procedure.AsObject,
  }

  export class JurisdictionalAuthorization extends jspb.Message {
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

    clearIdentifier(): void;
    getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasCountry(): boolean;
    clearCountry(): void;
    getCountry(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCountry(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearJurisdiction(): void;
    getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasLegalStatusOfSupply(): boolean;
    clearLegalStatusOfSupply(): void;
    getLegalStatusOfSupply(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setLegalStatusOfSupply(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValidityPeriod(): boolean;
    clearValidityPeriod(): void;
    getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JurisdictionalAuthorization.AsObject;
    static toObject(includeInstance: boolean, msg: JurisdictionalAuthorization): JurisdictionalAuthorization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JurisdictionalAuthorization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JurisdictionalAuthorization;
    static deserializeBinaryFromReader(message: JurisdictionalAuthorization, reader: jspb.BinaryReader): JurisdictionalAuthorization;
  }

  export namespace JurisdictionalAuthorization {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      country?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      legalStatusOfSupply?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
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

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): MedicinalProductAuthorization.Procedure.DateX | undefined;
    setDate(value?: MedicinalProductAuthorization.Procedure.DateX): void;

    clearApplication(): void;
    getApplication(): Array<MedicinalProductAuthorization.Procedure>;
    setApplication(value: Array<MedicinalProductAuthorization.Procedure>): void;
    addApplication(value?: MedicinalProductAuthorization.Procedure, index?: number): MedicinalProductAuthorization.Procedure;

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
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      date?: MedicinalProductAuthorization.Procedure.DateX.AsObject,
      application: Array<MedicinalProductAuthorization.Procedure.AsObject>,
    }

    export class DateX extends jspb.Message {
      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      getChoiceCase(): DateX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DateX.AsObject;
      static toObject(includeInstance: boolean, msg: DateX): DateX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DateX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DateX;
      static deserializeBinaryFromReader(message: DateX, reader: jspb.BinaryReader): DateX;
    }

    export namespace DateX {
      export type AsObject = {
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        PERIOD = 1,
        DATE_TIME = 2,
      }
    }
  }
}

