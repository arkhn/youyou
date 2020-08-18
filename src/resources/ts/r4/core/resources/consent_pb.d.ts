// package: google.fhir.r4.core
// file: proto/r4/core/resources/consent.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Consent extends jspb.Message {
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
  getStatus(): Consent.StatusCode | undefined;
  setStatus(value?: Consent.StatusCode): void;

  hasScope(): boolean;
  clearScope(): void;
  getScope(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setScope(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearOrganization(): void;
  getOrganization(): Array<proto_r4_core_datatypes_pb.Reference>;
  setOrganization(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addOrganization(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): Consent.SourceX | undefined;
  setSource(value?: Consent.SourceX): void;

  clearPolicy(): void;
  getPolicy(): Array<Consent.Policy>;
  setPolicy(value: Array<Consent.Policy>): void;
  addPolicy(value?: Consent.Policy, index?: number): Consent.Policy;

  hasPolicyRule(): boolean;
  clearPolicyRule(): void;
  getPolicyRule(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPolicyRule(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearVerification(): void;
  getVerification(): Array<Consent.Verification>;
  setVerification(value: Array<Consent.Verification>): void;
  addVerification(value?: Consent.Verification, index?: number): Consent.Verification;

  hasProvision(): boolean;
  clearProvision(): void;
  getProvision(): Consent.Provision | undefined;
  setProvision(value?: Consent.Provision): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Consent.AsObject;
  static toObject(includeInstance: boolean, msg: Consent): Consent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Consent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Consent;
  static deserializeBinaryFromReader(message: Consent, reader: jspb.BinaryReader): Consent;
}

export namespace Consent {
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
    status?: Consent.StatusCode.AsObject,
    scope?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    organization: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    source?: Consent.SourceX.AsObject,
    policy: Array<Consent.Policy.AsObject>,
    policyRule?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    verification: Array<Consent.Verification.AsObject>,
    provision?: Consent.Provision.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ConsentStateCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentStateCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ConsentStateCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentStateCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ConsentStateCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentStateCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class SourceX extends jspb.Message {
    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): SourceX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SourceX.AsObject;
    static toObject(includeInstance: boolean, msg: SourceX): SourceX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SourceX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SourceX;
    static deserializeBinaryFromReader(message: SourceX, reader: jspb.BinaryReader): SourceX;
  }

  export namespace SourceX {
    export type AsObject = {
      attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      ATTACHMENT = 1,
      REFERENCE = 2,
    }
  }

  export class Policy extends jspb.Message {
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

    hasAuthority(): boolean;
    clearAuthority(): void;
    getAuthority(): proto_r4_core_datatypes_pb.Uri | undefined;
    setAuthority(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Policy.AsObject;
    static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Policy;
    static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
  }

  export namespace Policy {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      authority?: proto_r4_core_datatypes_pb.Uri.AsObject,
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
    }
  }

  export class Verification extends jspb.Message {
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

    hasVerified(): boolean;
    clearVerified(): void;
    getVerified(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setVerified(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasVerifiedWith(): boolean;
    clearVerifiedWith(): void;
    getVerifiedWith(): proto_r4_core_datatypes_pb.Reference | undefined;
    setVerifiedWith(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasVerificationDate(): boolean;
    clearVerificationDate(): void;
    getVerificationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setVerificationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Verification.AsObject;
    static toObject(includeInstance: boolean, msg: Verification): Verification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Verification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Verification;
    static deserializeBinaryFromReader(message: Verification, reader: jspb.BinaryReader): Verification;
  }

  export namespace Verification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      verified?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      verifiedWith?: proto_r4_core_datatypes_pb.Reference.AsObject,
      verificationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    }
  }

  export class Provision extends jspb.Message {
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
    getType(): Consent.Provision.TypeCode | undefined;
    setType(value?: Consent.Provision.TypeCode): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearActor(): void;
    getActor(): Array<Consent.Provision.ProvisionActor>;
    setActor(value: Array<Consent.Provision.ProvisionActor>): void;
    addActor(value?: Consent.Provision.ProvisionActor, index?: number): Consent.Provision.ProvisionActor;

    clearAction(): void;
    getAction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSecurityLabel(): void;
    getSecurityLabel(): Array<proto_r4_core_datatypes_pb.Coding>;
    setSecurityLabel(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addSecurityLabel(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    clearPurpose(): void;
    getPurpose(): Array<proto_r4_core_datatypes_pb.Coding>;
    setPurpose(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addPurpose(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    clearClassValue(): void;
    getClassValue(): Array<proto_r4_core_datatypes_pb.Coding>;
    setClassValue(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addClassValue(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    clearCode(): void;
    getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDataPeriod(): boolean;
    clearDataPeriod(): void;
    getDataPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setDataPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearData(): void;
    getData(): Array<Consent.Provision.ProvisionData>;
    setData(value: Array<Consent.Provision.ProvisionData>): void;
    addData(value?: Consent.Provision.ProvisionData, index?: number): Consent.Provision.ProvisionData;

    clearProvision(): void;
    getProvision(): Array<Consent.Provision>;
    setProvision(value: Array<Consent.Provision>): void;
    addProvision(value?: Consent.Provision, index?: number): Consent.Provision;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Provision.AsObject;
    static toObject(includeInstance: boolean, msg: Provision): Provision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Provision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Provision;
    static deserializeBinaryFromReader(message: Provision, reader: jspb.BinaryReader): Provision;
  }

  export namespace Provision {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: Consent.Provision.TypeCode.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      actor: Array<Consent.Provision.ProvisionActor.AsObject>,
      action: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      securityLabel: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      purpose: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      classValue: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      dataPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
      data: Array<Consent.Provision.ProvisionData.AsObject>,
      provision: Array<Consent.Provision.AsObject>,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentProvisionTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class ProvisionActor extends jspb.Message {
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

      hasRole(): boolean;
      clearRole(): void;
      getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ProvisionActor.AsObject;
      static toObject(includeInstance: boolean, msg: ProvisionActor): ProvisionActor.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ProvisionActor, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ProvisionActor;
      static deserializeBinaryFromReader(message: ProvisionActor, reader: jspb.BinaryReader): ProvisionActor;
    }

    export namespace ProvisionActor {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }
    }

    export class ProvisionData extends jspb.Message {
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

      hasMeaning(): boolean;
      clearMeaning(): void;
      getMeaning(): Consent.Provision.ProvisionData.MeaningCode | undefined;
      setMeaning(value?: Consent.Provision.ProvisionData.MeaningCode): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ProvisionData.AsObject;
      static toObject(includeInstance: boolean, msg: ProvisionData): ProvisionData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ProvisionData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ProvisionData;
      static deserializeBinaryFromReader(message: ProvisionData, reader: jspb.BinaryReader): ProvisionData;
    }

    export namespace ProvisionData {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        meaning?: Consent.Provision.ProvisionData.MeaningCode.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export class MeaningCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MeaningCode.AsObject;
        static toObject(includeInstance: boolean, msg: MeaningCode): MeaningCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MeaningCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MeaningCode;
        static deserializeBinaryFromReader(message: MeaningCode, reader: jspb.BinaryReader): MeaningCode;
      }

      export namespace MeaningCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap[keyof proto_r4_core_codes_pb.ConsentDataMeaningCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }
}
