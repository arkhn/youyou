// package: google.fhir.r4.core
// file: proto/r4/core/resources/verification_result.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class VerificationResult extends jspb.Message {
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

  clearTargetList(): void;
  getTargetList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setTargetList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addTarget(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearTargetLocationList(): void;
  getTargetLocationList(): Array<proto_r4_core_datatypes_pb.String>;
  setTargetLocationList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addTargetLocation(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasNeed(): boolean;
  clearNeed(): void;
  getNeed(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setNeed(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): VerificationResult.StatusCode | undefined;
  setStatus(value?: VerificationResult.StatusCode): void;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setStatusDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasValidationType(): boolean;
  clearValidationType(): void;
  getValidationType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setValidationType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearValidationProcessList(): void;
  getValidationProcessList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setValidationProcessList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addValidationProcess(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasFrequency(): boolean;
  clearFrequency(): void;
  getFrequency(): proto_r4_core_datatypes_pb.Timing | undefined;
  setFrequency(value?: proto_r4_core_datatypes_pb.Timing): void;

  hasLastPerformed(): boolean;
  clearLastPerformed(): void;
  getLastPerformed(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastPerformed(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasNextScheduled(): boolean;
  clearNextScheduled(): void;
  getNextScheduled(): proto_r4_core_datatypes_pb.Date | undefined;
  setNextScheduled(value?: proto_r4_core_datatypes_pb.Date): void;

  hasFailureAction(): boolean;
  clearFailureAction(): void;
  getFailureAction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setFailureAction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPrimarySourceList(): void;
  getPrimarySourceList(): Array<VerificationResult.PrimarySource>;
  setPrimarySourceList(value: Array<VerificationResult.PrimarySource>): void;
  addPrimarySource(value?: VerificationResult.PrimarySource, index?: number): VerificationResult.PrimarySource;

  hasAttestation(): boolean;
  clearAttestation(): void;
  getAttestation(): VerificationResult.Attestation | undefined;
  setAttestation(value?: VerificationResult.Attestation): void;

  clearValidatorList(): void;
  getValidatorList(): Array<VerificationResult.Validator>;
  setValidatorList(value: Array<VerificationResult.Validator>): void;
  addValidator(value?: VerificationResult.Validator, index?: number): VerificationResult.Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerificationResult.AsObject;
  static toObject(includeInstance: boolean, msg: VerificationResult): VerificationResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VerificationResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerificationResult;
  static deserializeBinaryFromReader(message: VerificationResult, reader: jspb.BinaryReader): VerificationResult;
}

export namespace VerificationResult {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    targetList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    targetLocationList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    need?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: VerificationResult.StatusCode.AsObject,
    statusDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    validationType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    validationProcessList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    frequency?: proto_r4_core_datatypes_pb.Timing.AsObject,
    lastPerformed?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    nextScheduled?: proto_r4_core_datatypes_pb.Date.AsObject,
    failureAction?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    primarySourceList: Array<VerificationResult.PrimarySource.AsObject>,
    attestation?: VerificationResult.Attestation.AsObject,
    validatorList: Array<VerificationResult.Validator.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.StatusCode.ValueMap[keyof proto_r4_core_codes_pb.StatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.StatusCode.ValueMap[keyof proto_r4_core_codes_pb.StatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.StatusCode.ValueMap[keyof proto_r4_core_codes_pb.StatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PrimarySource extends jspb.Message {
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

    hasWho(): boolean;
    clearWho(): void;
    getWho(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWho(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearTypeList(): void;
    getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearCommunicationMethodList(): void;
    getCommunicationMethodList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCommunicationMethodList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCommunicationMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasValidationStatus(): boolean;
    clearValidationStatus(): void;
    getValidationStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setValidationStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValidationDate(): boolean;
    clearValidationDate(): void;
    getValidationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setValidationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasCanPushUpdates(): boolean;
    clearCanPushUpdates(): void;
    getCanPushUpdates(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCanPushUpdates(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearPushTypeAvailableList(): void;
    getPushTypeAvailableList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setPushTypeAvailableList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addPushTypeAvailable(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PrimarySource.AsObject;
    static toObject(includeInstance: boolean, msg: PrimarySource): PrimarySource.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PrimarySource, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PrimarySource;
    static deserializeBinaryFromReader(message: PrimarySource, reader: jspb.BinaryReader): PrimarySource;
  }

  export namespace PrimarySource {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      who?: proto_r4_core_datatypes_pb.Reference.AsObject,
      typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      communicationMethodList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      validationStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      validationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      canPushUpdates?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      pushTypeAvailableList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }

  export class Attestation extends jspb.Message {
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

    hasWho(): boolean;
    clearWho(): void;
    getWho(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWho(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCommunicationMethod(): boolean;
    clearCommunicationMethod(): void;
    getCommunicationMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCommunicationMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasSourceIdentityCertificate(): boolean;
    clearSourceIdentityCertificate(): void;
    getSourceIdentityCertificate(): proto_r4_core_datatypes_pb.String | undefined;
    setSourceIdentityCertificate(value?: proto_r4_core_datatypes_pb.String): void;

    hasProxyIdentityCertificate(): boolean;
    clearProxyIdentityCertificate(): void;
    getProxyIdentityCertificate(): proto_r4_core_datatypes_pb.String | undefined;
    setProxyIdentityCertificate(value?: proto_r4_core_datatypes_pb.String): void;

    hasProxySignature(): boolean;
    clearProxySignature(): void;
    getProxySignature(): proto_r4_core_datatypes_pb.Signature | undefined;
    setProxySignature(value?: proto_r4_core_datatypes_pb.Signature): void;

    hasSourceSignature(): boolean;
    clearSourceSignature(): void;
    getSourceSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
    setSourceSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attestation.AsObject;
    static toObject(includeInstance: boolean, msg: Attestation): Attestation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attestation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attestation;
    static deserializeBinaryFromReader(message: Attestation, reader: jspb.BinaryReader): Attestation;
  }

  export namespace Attestation {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      who?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
      communicationMethod?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      sourceIdentityCertificate?: proto_r4_core_datatypes_pb.String.AsObject,
      proxyIdentityCertificate?: proto_r4_core_datatypes_pb.String.AsObject,
      proxySignature?: proto_r4_core_datatypes_pb.Signature.AsObject,
      sourceSignature?: proto_r4_core_datatypes_pb.Signature.AsObject,
    }
  }

  export class Validator extends jspb.Message {
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

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOrganization(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasIdentityCertificate(): boolean;
    clearIdentityCertificate(): void;
    getIdentityCertificate(): proto_r4_core_datatypes_pb.String | undefined;
    setIdentityCertificate(value?: proto_r4_core_datatypes_pb.String): void;

    hasAttestationSignature(): boolean;
    clearAttestationSignature(): void;
    getAttestationSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
    setAttestationSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Validator.AsObject;
    static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Validator;
    static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
  }

  export namespace Validator {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      organization?: proto_r4_core_datatypes_pb.Reference.AsObject,
      identityCertificate?: proto_r4_core_datatypes_pb.String.AsObject,
      attestationSignature?: proto_r4_core_datatypes_pb.Signature.AsObject,
    }
  }
}

