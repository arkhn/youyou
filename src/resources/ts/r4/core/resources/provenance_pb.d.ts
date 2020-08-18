// package: google.fhir.r4.core
// file: proto/r4/core/resources/provenance.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Provenance extends jspb.Message {
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

  clearTarget(): void;
  getTarget(): Array<proto_r4_core_datatypes_pb.Reference>;
  setTarget(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addTarget(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasOccurred(): boolean;
  clearOccurred(): void;
  getOccurred(): Provenance.OccurredX | undefined;
  setOccurred(value?: Provenance.OccurredX): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): proto_r4_core_datatypes_pb.Instant | undefined;
  setRecorded(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPolicy(): void;
  getPolicy(): Array<proto_r4_core_datatypes_pb.Uri>;
  setPolicy(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addPolicy(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReason(): void;
  getReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasActivity(): boolean;
  clearActivity(): void;
  getActivity(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setActivity(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearAgent(): void;
  getAgent(): Array<Provenance.Agent>;
  setAgent(value: Array<Provenance.Agent>): void;
  addAgent(value?: Provenance.Agent, index?: number): Provenance.Agent;

  clearEntity(): void;
  getEntity(): Array<Provenance.Entity>;
  setEntity(value: Array<Provenance.Entity>): void;
  addEntity(value?: Provenance.Entity, index?: number): Provenance.Entity;

  clearSignature(): void;
  getSignature(): Array<proto_r4_core_datatypes_pb.Signature>;
  setSignature(value: Array<proto_r4_core_datatypes_pb.Signature>): void;
  addSignature(value?: proto_r4_core_datatypes_pb.Signature, index?: number): proto_r4_core_datatypes_pb.Signature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Provenance.AsObject;
  static toObject(includeInstance: boolean, msg: Provenance): Provenance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Provenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Provenance;
  static deserializeBinaryFromReader(message: Provenance, reader: jspb.BinaryReader): Provenance;
}

export namespace Provenance {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    target: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    occurred?: Provenance.OccurredX.AsObject,
    recorded?: proto_r4_core_datatypes_pb.Instant.AsObject,
    policy: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    activity?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    agent: Array<Provenance.Agent.AsObject>,
    entity: Array<Provenance.Entity.AsObject>,
    signature: Array<proto_r4_core_datatypes_pb.Signature.AsObject>,
  }

  export class OccurredX extends jspb.Message {
    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    getChoiceCase(): OccurredX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OccurredX.AsObject;
    static toObject(includeInstance: boolean, msg: OccurredX): OccurredX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OccurredX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OccurredX;
    static deserializeBinaryFromReader(message: OccurredX, reader: jspb.BinaryReader): OccurredX;
  }

  export namespace OccurredX {
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

  export class Agent extends jspb.Message {
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

    clearRole(): void;
    getRole(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRole(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRole(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasWho(): boolean;
    clearWho(): void;
    getWho(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWho(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_r4_core_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Agent.AsObject;
    static toObject(includeInstance: boolean, msg: Agent): Agent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Agent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Agent;
    static deserializeBinaryFromReader(message: Agent, reader: jspb.BinaryReader): Agent;
  }

  export namespace Agent {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      role: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      who?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Entity extends jspb.Message {
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
    getRole(): Provenance.Entity.RoleCode | undefined;
    setRole(value?: Provenance.Entity.RoleCode): void;

    hasWhat(): boolean;
    clearWhat(): void;
    getWhat(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWhat(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearAgent(): void;
    getAgent(): Array<Provenance.Agent>;
    setAgent(value: Array<Provenance.Agent>): void;
    addAgent(value?: Provenance.Agent, index?: number): Provenance.Agent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      role?: Provenance.Entity.RoleCode.AsObject,
      what?: proto_r4_core_datatypes_pb.Reference.AsObject,
      agent: Array<Provenance.Agent.AsObject>,
    }

    export class RoleCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RoleCode.AsObject;
      static toObject(includeInstance: boolean, msg: RoleCode): RoleCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RoleCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RoleCode;
      static deserializeBinaryFromReader(message: RoleCode, reader: jspb.BinaryReader): RoleCode;
    }

    export namespace RoleCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap[keyof proto_r4_core_codes_pb.ProvenanceEntityRoleCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

