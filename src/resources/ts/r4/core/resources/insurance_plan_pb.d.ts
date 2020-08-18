// package: google.fhir.r4.core
// file: proto/r4/core/resources/insurance_plan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class InsurancePlan extends jspb.Message {
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
  getStatus(): InsurancePlan.StatusCode | undefined;
  setStatus(value?: InsurancePlan.StatusCode): void;

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearAlias(): void;
  getAlias(): Array<proto_r4_core_datatypes_pb.String>;
  setAlias(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasOwnedBy(): boolean;
  clearOwnedBy(): void;
  getOwnedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwnedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAdministeredBy(): boolean;
  clearAdministeredBy(): void;
  getAdministeredBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAdministeredBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearCoverageArea(): void;
  getCoverageArea(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCoverageArea(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCoverageArea(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearContact(): void;
  getContact(): Array<InsurancePlan.Contact>;
  setContact(value: Array<InsurancePlan.Contact>): void;
  addContact(value?: InsurancePlan.Contact, index?: number): InsurancePlan.Contact;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNetwork(): void;
  getNetwork(): Array<proto_r4_core_datatypes_pb.Reference>;
  setNetwork(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addNetwork(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCoverage(): void;
  getCoverage(): Array<InsurancePlan.Coverage>;
  setCoverage(value: Array<InsurancePlan.Coverage>): void;
  addCoverage(value?: InsurancePlan.Coverage, index?: number): InsurancePlan.Coverage;

  clearPlan(): void;
  getPlan(): Array<InsurancePlan.Plan>;
  setPlan(value: Array<InsurancePlan.Plan>): void;
  addPlan(value?: InsurancePlan.Plan, index?: number): InsurancePlan.Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsurancePlan.AsObject;
  static toObject(includeInstance: boolean, msg: InsurancePlan): InsurancePlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsurancePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsurancePlan;
  static deserializeBinaryFromReader(message: InsurancePlan, reader: jspb.BinaryReader): InsurancePlan;
}

export namespace InsurancePlan {
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
    status?: InsurancePlan.StatusCode.AsObject,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    alias: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    ownedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    administeredBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    coverageArea: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    contact: Array<InsurancePlan.Contact.AsObject>,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    network: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    coverage: Array<InsurancePlan.Coverage.AsObject>,
    plan: Array<InsurancePlan.Plan.AsObject>,
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

  export class Contact extends jspb.Message {
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

    hasPurpose(): boolean;
    clearPurpose(): void;
    getPurpose(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPurpose(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.HumanName | undefined;
    setName(value?: proto_r4_core_datatypes_pb.HumanName): void;

    clearTelecom(): void;
    getTelecom(): Array<proto_r4_core_datatypes_pb.ContactPoint>;
    setTelecom(value: Array<proto_r4_core_datatypes_pb.ContactPoint>): void;
    addTelecom(value?: proto_r4_core_datatypes_pb.ContactPoint, index?: number): proto_r4_core_datatypes_pb.ContactPoint;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
    setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
  }

  export namespace Contact {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      purpose?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      name?: proto_r4_core_datatypes_pb.HumanName.AsObject,
      telecom: Array<proto_r4_core_datatypes_pb.ContactPoint.AsObject>,
      address?: proto_r4_core_datatypes_pb.Address.AsObject,
    }
  }

  export class Coverage extends jspb.Message {
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

    clearNetwork(): void;
    getNetwork(): Array<proto_r4_core_datatypes_pb.Reference>;
    setNetwork(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addNetwork(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearBenefit(): void;
    getBenefit(): Array<InsurancePlan.Coverage.CoverageBenefit>;
    setBenefit(value: Array<InsurancePlan.Coverage.CoverageBenefit>): void;
    addBenefit(value?: InsurancePlan.Coverage.CoverageBenefit, index?: number): InsurancePlan.Coverage.CoverageBenefit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coverage.AsObject;
    static toObject(includeInstance: boolean, msg: Coverage): Coverage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coverage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coverage;
    static deserializeBinaryFromReader(message: Coverage, reader: jspb.BinaryReader): Coverage;
  }

  export namespace Coverage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      network: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      benefit: Array<InsurancePlan.Coverage.CoverageBenefit.AsObject>,
    }

    export class CoverageBenefit extends jspb.Message {
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

      hasRequirement(): boolean;
      clearRequirement(): void;
      getRequirement(): proto_r4_core_datatypes_pb.String | undefined;
      setRequirement(value?: proto_r4_core_datatypes_pb.String): void;

      clearLimit(): void;
      getLimit(): Array<InsurancePlan.Coverage.CoverageBenefit.Limit>;
      setLimit(value: Array<InsurancePlan.Coverage.CoverageBenefit.Limit>): void;
      addLimit(value?: InsurancePlan.Coverage.CoverageBenefit.Limit, index?: number): InsurancePlan.Coverage.CoverageBenefit.Limit;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CoverageBenefit.AsObject;
      static toObject(includeInstance: boolean, msg: CoverageBenefit): CoverageBenefit.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CoverageBenefit, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CoverageBenefit;
      static deserializeBinaryFromReader(message: CoverageBenefit, reader: jspb.BinaryReader): CoverageBenefit;
    }

    export namespace CoverageBenefit {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        requirement?: proto_r4_core_datatypes_pb.String.AsObject,
        limit: Array<InsurancePlan.Coverage.CoverageBenefit.Limit.AsObject>,
      }

      export class Limit extends jspb.Message {
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

        hasValue(): boolean;
        clearValue(): void;
        getValue(): proto_r4_core_datatypes_pb.Quantity | undefined;
        setValue(value?: proto_r4_core_datatypes_pb.Quantity): void;

        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Limit.AsObject;
        static toObject(includeInstance: boolean, msg: Limit): Limit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Limit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Limit;
        static deserializeBinaryFromReader(message: Limit, reader: jspb.BinaryReader): Limit;
      }

      export namespace Limit {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          value?: proto_r4_core_datatypes_pb.Quantity.AsObject,
          code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        }
      }
    }
  }

  export class Plan extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearCoverageArea(): void;
    getCoverageArea(): Array<proto_r4_core_datatypes_pb.Reference>;
    setCoverageArea(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addCoverageArea(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearNetwork(): void;
    getNetwork(): Array<proto_r4_core_datatypes_pb.Reference>;
    setNetwork(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addNetwork(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearGeneralCost(): void;
    getGeneralCost(): Array<InsurancePlan.Plan.GeneralCost>;
    setGeneralCost(value: Array<InsurancePlan.Plan.GeneralCost>): void;
    addGeneralCost(value?: InsurancePlan.Plan.GeneralCost, index?: number): InsurancePlan.Plan.GeneralCost;

    clearSpecificCost(): void;
    getSpecificCost(): Array<InsurancePlan.Plan.SpecificCost>;
    setSpecificCost(value: Array<InsurancePlan.Plan.SpecificCost>): void;
    addSpecificCost(value?: InsurancePlan.Plan.SpecificCost, index?: number): InsurancePlan.Plan.SpecificCost;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Plan.AsObject;
    static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Plan;
    static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
  }

  export namespace Plan {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      coverageArea: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      network: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      generalCost: Array<InsurancePlan.Plan.GeneralCost.AsObject>,
      specificCost: Array<InsurancePlan.Plan.SpecificCost.AsObject>,
    }

    export class GeneralCost extends jspb.Message {
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

      hasGroupSize(): boolean;
      clearGroupSize(): void;
      getGroupSize(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setGroupSize(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasCost(): boolean;
      clearCost(): void;
      getCost(): proto_r4_core_datatypes_pb.Money | undefined;
      setCost(value?: proto_r4_core_datatypes_pb.Money): void;

      hasComment(): boolean;
      clearComment(): void;
      getComment(): proto_r4_core_datatypes_pb.String | undefined;
      setComment(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GeneralCost.AsObject;
      static toObject(includeInstance: boolean, msg: GeneralCost): GeneralCost.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GeneralCost, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GeneralCost;
      static deserializeBinaryFromReader(message: GeneralCost, reader: jspb.BinaryReader): GeneralCost;
    }

    export namespace GeneralCost {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        groupSize?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        cost?: proto_r4_core_datatypes_pb.Money.AsObject,
        comment?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }

    export class SpecificCost extends jspb.Message {
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

      clearBenefit(): void;
      getBenefit(): Array<InsurancePlan.Plan.SpecificCost.PlanBenefit>;
      setBenefit(value: Array<InsurancePlan.Plan.SpecificCost.PlanBenefit>): void;
      addBenefit(value?: InsurancePlan.Plan.SpecificCost.PlanBenefit, index?: number): InsurancePlan.Plan.SpecificCost.PlanBenefit;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SpecificCost.AsObject;
      static toObject(includeInstance: boolean, msg: SpecificCost): SpecificCost.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SpecificCost, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SpecificCost;
      static deserializeBinaryFromReader(message: SpecificCost, reader: jspb.BinaryReader): SpecificCost;
    }

    export namespace SpecificCost {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        benefit: Array<InsurancePlan.Plan.SpecificCost.PlanBenefit.AsObject>,
      }

      export class PlanBenefit extends jspb.Message {
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

        clearCost(): void;
        getCost(): Array<InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost>;
        setCost(value: Array<InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost>): void;
        addCost(value?: InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost, index?: number): InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PlanBenefit.AsObject;
        static toObject(includeInstance: boolean, msg: PlanBenefit): PlanBenefit.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PlanBenefit, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PlanBenefit;
        static deserializeBinaryFromReader(message: PlanBenefit, reader: jspb.BinaryReader): PlanBenefit;
      }

      export namespace PlanBenefit {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          cost: Array<InsurancePlan.Plan.SpecificCost.PlanBenefit.Cost.AsObject>,
        }

        export class Cost extends jspb.Message {
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

          hasApplicability(): boolean;
          clearApplicability(): void;
          getApplicability(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setApplicability(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          clearQualifiers(): void;
          getQualifiers(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
          setQualifiers(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
          addQualifiers(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

          hasValue(): boolean;
          clearValue(): void;
          getValue(): proto_r4_core_datatypes_pb.Quantity | undefined;
          setValue(value?: proto_r4_core_datatypes_pb.Quantity): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Cost.AsObject;
          static toObject(includeInstance: boolean, msg: Cost): Cost.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: Cost, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Cost;
          static deserializeBinaryFromReader(message: Cost, reader: jspb.BinaryReader): Cost;
        }

        export namespace Cost {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
            applicability?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
            qualifiers: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
            value?: proto_r4_core_datatypes_pb.Quantity.AsObject,
          }
        }
      }
    }
  }
}

