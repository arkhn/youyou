// package: google.fhir.r4.core
// file: proto/r4/core/resources/audit_event.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class AuditEvent extends jspb.Message {
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

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.Coding | undefined;
  setType(value?: proto_r4_core_datatypes_pb.Coding): void;

  clearSubtype(): void;
  getSubtype(): Array<proto_r4_core_datatypes_pb.Coding>;
  setSubtype(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addSubtype(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  hasAction(): boolean;
  clearAction(): void;
  getAction(): AuditEvent.ActionCode | undefined;
  setAction(value?: AuditEvent.ActionCode): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasRecorded(): boolean;
  clearRecorded(): void;
  getRecorded(): proto_r4_core_datatypes_pb.Instant | undefined;
  setRecorded(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): AuditEvent.OutcomeCode | undefined;
  setOutcome(value?: AuditEvent.OutcomeCode): void;

  hasOutcomeDesc(): boolean;
  clearOutcomeDesc(): void;
  getOutcomeDesc(): proto_r4_core_datatypes_pb.String | undefined;
  setOutcomeDesc(value?: proto_r4_core_datatypes_pb.String): void;

  clearPurposeOfEvent(): void;
  getPurposeOfEvent(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setPurposeOfEvent(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addPurposeOfEvent(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearAgent(): void;
  getAgent(): Array<AuditEvent.Agent>;
  setAgent(value: Array<AuditEvent.Agent>): void;
  addAgent(value?: AuditEvent.Agent, index?: number): AuditEvent.Agent;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): AuditEvent.Source | undefined;
  setSource(value?: AuditEvent.Source): void;

  clearEntity(): void;
  getEntity(): Array<AuditEvent.Entity>;
  setEntity(value: Array<AuditEvent.Entity>): void;
  addEntity(value?: AuditEvent.Entity, index?: number): AuditEvent.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEvent): AuditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEvent;
  static deserializeBinaryFromReader(message: AuditEvent, reader: jspb.BinaryReader): AuditEvent;
}

export namespace AuditEvent {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    type?: proto_r4_core_datatypes_pb.Coding.AsObject,
    subtype: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
    action?: AuditEvent.ActionCode.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    recorded?: proto_r4_core_datatypes_pb.Instant.AsObject,
    outcome?: AuditEvent.OutcomeCode.AsObject,
    outcomeDesc?: proto_r4_core_datatypes_pb.String.AsObject,
    purposeOfEvent: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    agent: Array<AuditEvent.Agent.AsObject>,
    source?: AuditEvent.Source.AsObject,
    entity: Array<AuditEvent.Entity.AsObject>,
  }

  export class ActionCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AuditEventActionCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventActionCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AuditEventActionCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventActionCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ActionCode.AsObject;
    static toObject(includeInstance: boolean, msg: ActionCode): ActionCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ActionCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ActionCode;
    static deserializeBinaryFromReader(message: ActionCode, reader: jspb.BinaryReader): ActionCode;
  }

  export namespace ActionCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.AuditEventActionCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventActionCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OutcomeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventOutcomeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    hasAltId(): boolean;
    clearAltId(): void;
    getAltId(): proto_r4_core_datatypes_pb.String | undefined;
    setAltId(value?: proto_r4_core_datatypes_pb.String): void;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasRequestor(): boolean;
    clearRequestor(): void;
    getRequestor(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setRequestor(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasLocation(): boolean;
    clearLocation(): void;
    getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
    setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearPolicy(): void;
    getPolicy(): Array<proto_r4_core_datatypes_pb.Uri>;
    setPolicy(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
    addPolicy(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

    hasMedia(): boolean;
    clearMedia(): void;
    getMedia(): proto_r4_core_datatypes_pb.Coding | undefined;
    setMedia(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasNetwork(): boolean;
    clearNetwork(): void;
    getNetwork(): AuditEvent.Agent.Network | undefined;
    setNetwork(value?: AuditEvent.Agent.Network): void;

    clearPurposeOfUse(): void;
    getPurposeOfUse(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setPurposeOfUse(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addPurposeOfUse(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

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
      altId?: proto_r4_core_datatypes_pb.String.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      requestor?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      location?: proto_r4_core_datatypes_pb.Reference.AsObject,
      policy: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
      media?: proto_r4_core_datatypes_pb.Coding.AsObject,
      network?: AuditEvent.Agent.Network.AsObject,
      purposeOfUse: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }

    export class Network extends jspb.Message {
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

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.String | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.String): void;

      hasType(): boolean;
      clearType(): void;
      getType(): AuditEvent.Agent.Network.TypeCode | undefined;
      setType(value?: AuditEvent.Agent.Network.TypeCode): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Network.AsObject;
      static toObject(includeInstance: boolean, msg: Network): Network.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Network, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Network;
      static deserializeBinaryFromReader(message: Network, reader: jspb.BinaryReader): Network;
    }

    export namespace Network {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        address?: proto_r4_core_datatypes_pb.String.AsObject,
        type?: AuditEvent.Agent.Network.TypeCode.AsObject,
      }

      export class TypeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap[keyof proto_r4_core_codes_pb.AuditEventAgentNetworkTypeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }
  }

  export class Source extends jspb.Message {
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

    hasSite(): boolean;
    clearSite(): void;
    getSite(): proto_r4_core_datatypes_pb.String | undefined;
    setSite(value?: proto_r4_core_datatypes_pb.String): void;

    hasObserver(): boolean;
    clearObserver(): void;
    getObserver(): proto_r4_core_datatypes_pb.Reference | undefined;
    setObserver(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearType(): void;
    getType(): Array<proto_r4_core_datatypes_pb.Coding>;
    setType(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addType(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Source.AsObject;
    static toObject(includeInstance: boolean, msg: Source): Source.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Source, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Source;
    static deserializeBinaryFromReader(message: Source, reader: jspb.BinaryReader): Source;
  }

  export namespace Source {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      site?: proto_r4_core_datatypes_pb.String.AsObject,
      observer?: proto_r4_core_datatypes_pb.Reference.AsObject,
      type: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
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

    hasWhat(): boolean;
    clearWhat(): void;
    getWhat(): proto_r4_core_datatypes_pb.Reference | undefined;
    setWhat(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.Coding | undefined;
    setType(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_r4_core_datatypes_pb.Coding | undefined;
    setRole(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasLifecycle(): boolean;
    clearLifecycle(): void;
    getLifecycle(): proto_r4_core_datatypes_pb.Coding | undefined;
    setLifecycle(value?: proto_r4_core_datatypes_pb.Coding): void;

    clearSecurityLabel(): void;
    getSecurityLabel(): Array<proto_r4_core_datatypes_pb.Coding>;
    setSecurityLabel(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addSecurityLabel(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasQuery(): boolean;
    clearQuery(): void;
    getQuery(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
    setQuery(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

    clearDetail(): void;
    getDetail(): Array<AuditEvent.Entity.Detail>;
    setDetail(value: Array<AuditEvent.Entity.Detail>): void;
    addDetail(value?: AuditEvent.Entity.Detail, index?: number): AuditEvent.Entity.Detail;

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
      what?: proto_r4_core_datatypes_pb.Reference.AsObject,
      type?: proto_r4_core_datatypes_pb.Coding.AsObject,
      role?: proto_r4_core_datatypes_pb.Coding.AsObject,
      lifecycle?: proto_r4_core_datatypes_pb.Coding.AsObject,
      securityLabel: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      query?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
      detail: Array<AuditEvent.Entity.Detail.AsObject>,
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

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.String | undefined;
      setType(value?: proto_r4_core_datatypes_pb.String): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): AuditEvent.Entity.Detail.ValueX | undefined;
      setValue(value?: AuditEvent.Entity.Detail.ValueX): void;

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
        type?: proto_r4_core_datatypes_pb.String.AsObject,
        value?: AuditEvent.Entity.Detail.ValueX.AsObject,
      }

      export class ValueX extends jspb.Message {
        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        hasBase64Binary(): boolean;
        clearBase64Binary(): void;
        getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
        setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

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
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
          base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          STRING_VALUE = 1,
          BASE64_BINARY = 2,
        }
      }
    }
  }
}

