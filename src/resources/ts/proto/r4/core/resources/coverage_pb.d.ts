// package: google.fhir.r4.core
// file: proto/r4/core/resources/coverage.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Coverage extends jspb.Message {
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
  getStatus(): Coverage.StatusCode | undefined;
  setStatus(value?: Coverage.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPolicyHolder(): boolean;
  clearPolicyHolder(): void;
  getPolicyHolder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPolicyHolder(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSubscriber(): boolean;
  clearSubscriber(): void;
  getSubscriber(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubscriber(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSubscriberId(): boolean;
  clearSubscriberId(): void;
  getSubscriberId(): proto_r4_core_datatypes_pb.String | undefined;
  setSubscriberId(value?: proto_r4_core_datatypes_pb.String): void;

  hasBeneficiary(): boolean;
  clearBeneficiary(): void;
  getBeneficiary(): proto_r4_core_datatypes_pb.Reference | undefined;
  setBeneficiary(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDependent(): boolean;
  clearDependent(): void;
  getDependent(): proto_r4_core_datatypes_pb.String | undefined;
  setDependent(value?: proto_r4_core_datatypes_pb.String): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setRelationship(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearPayor(): void;
  getPayor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPayor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPayor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearClassValue(): void;
  getClassValue(): Array<Coverage.Class>;
  setClassValue(value: Array<Coverage.Class>): void;
  addClassValue(value?: Coverage.Class, index?: number): Coverage.Class;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
  setOrder(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

  hasNetwork(): boolean;
  clearNetwork(): void;
  getNetwork(): proto_r4_core_datatypes_pb.String | undefined;
  setNetwork(value?: proto_r4_core_datatypes_pb.String): void;

  clearCostToBeneficiary(): void;
  getCostToBeneficiary(): Array<Coverage.CostToBeneficiary>;
  setCostToBeneficiary(value: Array<Coverage.CostToBeneficiary>): void;
  addCostToBeneficiary(value?: Coverage.CostToBeneficiary, index?: number): Coverage.CostToBeneficiary;

  hasSubrogation(): boolean;
  clearSubrogation(): void;
  getSubrogation(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setSubrogation(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearContract(): void;
  getContract(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContract(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContract(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    status?: Coverage.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    policyHolder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    subscriber?: proto_r4_core_datatypes_pb.Reference.AsObject,
    subscriberId?: proto_r4_core_datatypes_pb.String.AsObject,
    beneficiary?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dependent?: proto_r4_core_datatypes_pb.String.AsObject,
    relationship?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    payor: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    classValue: Array<Coverage.Class.AsObject>,
    order?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    network?: proto_r4_core_datatypes_pb.String.AsObject,
    costToBeneficiary: Array<Coverage.CostToBeneficiary.AsObject>,
    subrogation?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    contract: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
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

  export class Class extends jspb.Message {
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

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.String | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.String): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Class.AsObject;
    static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Class;
    static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
  }

  export namespace Class {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: proto_r4_core_datatypes_pb.String.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class CostToBeneficiary extends jspb.Message {
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

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Coverage.CostToBeneficiary.ValueX | undefined;
    setValue(value?: Coverage.CostToBeneficiary.ValueX): void;

    clearException(): void;
    getException(): Array<Coverage.CostToBeneficiary.Exemption>;
    setException(value: Array<Coverage.CostToBeneficiary.Exemption>): void;
    addException(value?: Coverage.CostToBeneficiary.Exemption, index?: number): Coverage.CostToBeneficiary.Exemption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CostToBeneficiary.AsObject;
    static toObject(includeInstance: boolean, msg: CostToBeneficiary): CostToBeneficiary.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CostToBeneficiary, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CostToBeneficiary;
    static deserializeBinaryFromReader(message: CostToBeneficiary, reader: jspb.BinaryReader): CostToBeneficiary;
  }

  export namespace CostToBeneficiary {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: Coverage.CostToBeneficiary.ValueX.AsObject,
      exception: Array<Coverage.CostToBeneficiary.Exemption.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

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
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        MONEY = 2,
      }
    }

    export class Exemption extends jspb.Message {
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

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Exemption.AsObject;
      static toObject(includeInstance: boolean, msg: Exemption): Exemption.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Exemption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Exemption;
      static deserializeBinaryFromReader(message: Exemption, reader: jspb.BinaryReader): Exemption;
    }

    export namespace Exemption {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }
    }
  }
}

