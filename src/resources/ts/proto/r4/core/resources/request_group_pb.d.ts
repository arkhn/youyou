// package: google.fhir.r4.core
// file: proto/r4/core/resources/request_group.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class RequestGroup extends jspb.Message {
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

  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUri(): void;
  getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplaces(): void;
  getReplaces(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplaces(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): RequestGroup.StatusCode | undefined;
  setStatus(value?: RequestGroup.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): RequestGroup.IntentCode | undefined;
  setIntent(value?: RequestGroup.IntentCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): RequestGroup.PriorityCode | undefined;
  setPriority(value?: RequestGroup.PriorityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearAction(): void;
  getAction(): Array<RequestGroup.Action>;
  setAction(value: Array<RequestGroup.Action>): void;
  addAction(value?: RequestGroup.Action, index?: number): RequestGroup.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestGroup.AsObject;
  static toObject(includeInstance: boolean, msg: RequestGroup): RequestGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestGroup;
  static deserializeBinaryFromReader(message: RequestGroup, reader: jspb.BinaryReader): RequestGroup;
}

export namespace RequestGroup {
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
    instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replaces: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: RequestGroup.StatusCode.AsObject,
    intent?: RequestGroup.IntentCode.AsObject,
    priority?: RequestGroup.PriorityCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    action: Array<RequestGroup.Action.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Action extends jspb.Message {
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

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): proto_r4_core_datatypes_pb.String | undefined;
    setPrefix(value?: proto_r4_core_datatypes_pb.String): void;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): proto_r4_core_datatypes_pb.String | undefined;
    setTitle(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasTextEquivalent(): boolean;
    clearTextEquivalent(): void;
    getTextEquivalent(): proto_r4_core_datatypes_pb.String | undefined;
    setTextEquivalent(value?: proto_r4_core_datatypes_pb.String): void;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): RequestGroup.Action.PriorityCode | undefined;
    setPriority(value?: RequestGroup.Action.PriorityCode): void;

    clearCode(): void;
    getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDocumentation(): void;
    getDocumentation(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
    setDocumentation(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
    addDocumentation(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

    clearCondition(): void;
    getCondition(): Array<RequestGroup.Action.Condition>;
    setCondition(value: Array<RequestGroup.Action.Condition>): void;
    addCondition(value?: RequestGroup.Action.Condition, index?: number): RequestGroup.Action.Condition;

    clearRelatedAction(): void;
    getRelatedAction(): Array<RequestGroup.Action.RelatedAction>;
    setRelatedAction(value: Array<RequestGroup.Action.RelatedAction>): void;
    addRelatedAction(value?: RequestGroup.Action.RelatedAction, index?: number): RequestGroup.Action.RelatedAction;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): RequestGroup.Action.TimingX | undefined;
    setTiming(value?: RequestGroup.Action.TimingX): void;

    clearParticipant(): void;
    getParticipant(): Array<proto_r4_core_datatypes_pb.Reference>;
    setParticipant(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addParticipant(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGroupingBehavior(): boolean;
    clearGroupingBehavior(): void;
    getGroupingBehavior(): RequestGroup.Action.GroupingBehaviorCode | undefined;
    setGroupingBehavior(value?: RequestGroup.Action.GroupingBehaviorCode): void;

    hasSelectionBehavior(): boolean;
    clearSelectionBehavior(): void;
    getSelectionBehavior(): RequestGroup.Action.SelectionBehaviorCode | undefined;
    setSelectionBehavior(value?: RequestGroup.Action.SelectionBehaviorCode): void;

    hasRequiredBehavior(): boolean;
    clearRequiredBehavior(): void;
    getRequiredBehavior(): RequestGroup.Action.RequiredBehaviorCode | undefined;
    setRequiredBehavior(value?: RequestGroup.Action.RequiredBehaviorCode): void;

    hasPrecheckBehavior(): boolean;
    clearPrecheckBehavior(): void;
    getPrecheckBehavior(): RequestGroup.Action.PrecheckBehaviorCode | undefined;
    setPrecheckBehavior(value?: RequestGroup.Action.PrecheckBehaviorCode): void;

    hasCardinalityBehavior(): boolean;
    clearCardinalityBehavior(): void;
    getCardinalityBehavior(): RequestGroup.Action.CardinalityBehaviorCode | undefined;
    setCardinalityBehavior(value?: RequestGroup.Action.CardinalityBehaviorCode): void;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): proto_r4_core_datatypes_pb.Reference | undefined;
    setResource(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearAction(): void;
    getAction(): Array<RequestGroup.Action>;
    setAction(value: Array<RequestGroup.Action>): void;
    addAction(value?: RequestGroup.Action, index?: number): RequestGroup.Action;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Action.AsObject;
    static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Action;
    static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
  }

  export namespace Action {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      prefix?: proto_r4_core_datatypes_pb.String.AsObject,
      title?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      textEquivalent?: proto_r4_core_datatypes_pb.String.AsObject,
      priority?: RequestGroup.Action.PriorityCode.AsObject,
      code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      documentation: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
      condition: Array<RequestGroup.Action.Condition.AsObject>,
      relatedAction: Array<RequestGroup.Action.RelatedAction.AsObject>,
      timing?: RequestGroup.Action.TimingX.AsObject,
      participant: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      groupingBehavior?: RequestGroup.Action.GroupingBehaviorCode.AsObject,
      selectionBehavior?: RequestGroup.Action.SelectionBehaviorCode.AsObject,
      requiredBehavior?: RequestGroup.Action.RequiredBehaviorCode.AsObject,
      precheckBehavior?: RequestGroup.Action.PrecheckBehaviorCode.AsObject,
      cardinalityBehavior?: RequestGroup.Action.CardinalityBehaviorCode.AsObject,
      resource?: proto_r4_core_datatypes_pb.Reference.AsObject,
      action: Array<RequestGroup.Action.AsObject>,
    }

    export class PriorityCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PriorityCode.AsObject;
      static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PriorityCode;
      static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
    }

    export namespace PriorityCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Condition extends jspb.Message {
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

      hasKind(): boolean;
      clearKind(): void;
      getKind(): RequestGroup.Action.Condition.KindCode | undefined;
      setKind(value?: RequestGroup.Action.Condition.KindCode): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Condition.AsObject;
      static toObject(includeInstance: boolean, msg: Condition): Condition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Condition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Condition;
      static deserializeBinaryFromReader(message: Condition, reader: jspb.BinaryReader): Condition;
    }

    export namespace Condition {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        kind?: RequestGroup.Action.Condition.KindCode.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
      }

      export class KindCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap[keyof proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap[keyof proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KindCode.AsObject;
        static toObject(includeInstance: boolean, msg: KindCode): KindCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KindCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KindCode;
        static deserializeBinaryFromReader(message: KindCode, reader: jspb.BinaryReader): KindCode;
      }

      export namespace KindCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap[keyof proto_r4_core_codes_pb.ActionConditionKindCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class RelatedAction extends jspb.Message {
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

      hasActionId(): boolean;
      clearActionId(): void;
      getActionId(): proto_r4_core_datatypes_pb.Id | undefined;
      setActionId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasRelationship(): boolean;
      clearRelationship(): void;
      getRelationship(): RequestGroup.Action.RelatedAction.RelationshipCode | undefined;
      setRelationship(value?: RequestGroup.Action.RelatedAction.RelationshipCode): void;

      hasOffset(): boolean;
      clearOffset(): void;
      getOffset(): RequestGroup.Action.RelatedAction.OffsetX | undefined;
      setOffset(value?: RequestGroup.Action.RelatedAction.OffsetX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RelatedAction.AsObject;
      static toObject(includeInstance: boolean, msg: RelatedAction): RelatedAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RelatedAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RelatedAction;
      static deserializeBinaryFromReader(message: RelatedAction, reader: jspb.BinaryReader): RelatedAction;
    }

    export namespace RelatedAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        actionId?: proto_r4_core_datatypes_pb.Id.AsObject,
        relationship?: RequestGroup.Action.RelatedAction.RelationshipCode.AsObject,
        offset?: RequestGroup.Action.RelatedAction.OffsetX.AsObject,
      }

      export class RelationshipCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RelationshipCode.AsObject;
        static toObject(includeInstance: boolean, msg: RelationshipCode): RelationshipCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RelationshipCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RelationshipCode;
        static deserializeBinaryFromReader(message: RelationshipCode, reader: jspb.BinaryReader): RelationshipCode;
      }

      export namespace RelationshipCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRelationshipTypeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class OffsetX extends jspb.Message {
        hasDuration(): boolean;
        clearDuration(): void;
        getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
        setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

        hasRange(): boolean;
        clearRange(): void;
        getRange(): proto_r4_core_datatypes_pb.Range | undefined;
        setRange(value?: proto_r4_core_datatypes_pb.Range): void;

        getChoiceCase(): OffsetX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OffsetX.AsObject;
        static toObject(includeInstance: boolean, msg: OffsetX): OffsetX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OffsetX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OffsetX;
        static deserializeBinaryFromReader(message: OffsetX, reader: jspb.BinaryReader): OffsetX;
      }

      export namespace OffsetX {
        export type AsObject = {
          duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
          range?: proto_r4_core_datatypes_pb.Range.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          DURATION = 1,
          RANGE = 2,
        }
      }
    }

    export class TimingX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

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
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        AGE = 2,
        PERIOD = 3,
        DURATION = 4,
        RANGE = 5,
        TIMING = 6,
      }
    }

    export class GroupingBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GroupingBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: GroupingBehaviorCode): GroupingBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GroupingBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GroupingBehaviorCode;
      static deserializeBinaryFromReader(message: GroupingBehaviorCode, reader: jspb.BinaryReader): GroupingBehaviorCode;
    }

    export namespace GroupingBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionGroupingBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class SelectionBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SelectionBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: SelectionBehaviorCode): SelectionBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SelectionBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SelectionBehaviorCode;
      static deserializeBinaryFromReader(message: SelectionBehaviorCode, reader: jspb.BinaryReader): SelectionBehaviorCode;
    }

    export namespace SelectionBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionSelectionBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class RequiredBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RequiredBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: RequiredBehaviorCode): RequiredBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RequiredBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RequiredBehaviorCode;
      static deserializeBinaryFromReader(message: RequiredBehaviorCode, reader: jspb.BinaryReader): RequiredBehaviorCode;
    }

    export namespace RequiredBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionRequiredBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class PrecheckBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PrecheckBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: PrecheckBehaviorCode): PrecheckBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PrecheckBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PrecheckBehaviorCode;
      static deserializeBinaryFromReader(message: PrecheckBehaviorCode, reader: jspb.BinaryReader): PrecheckBehaviorCode;
    }

    export namespace PrecheckBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionPrecheckBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class CardinalityBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CardinalityBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: CardinalityBehaviorCode): CardinalityBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CardinalityBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CardinalityBehaviorCode;
      static deserializeBinaryFromReader(message: CardinalityBehaviorCode, reader: jspb.BinaryReader): CardinalityBehaviorCode;
    }

    export namespace CardinalityBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.ActionCardinalityBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

