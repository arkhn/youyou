// package: google.fhir.r4.core
// file: proto/r4/core/resources/evidence_variable.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class EvidenceVariable extends jspb.Message {
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

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasShortTitle(): boolean;
  clearShortTitle(): void;
  getShortTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setShortTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasSubtitle(): boolean;
  clearSubtitle(): void;
  getSubtitle(): proto_r4_core_datatypes_pb.String | undefined;
  setSubtitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): EvidenceVariable.StatusCode | undefined;
  setStatus(value?: EvidenceVariable.StatusCode): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_r4_core_datatypes_pb.String | undefined;
  setPublisher(value?: proto_r4_core_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearUseContext(): void;
  getUseContext(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasApprovalDate(): boolean;
  clearApprovalDate(): void;
  getApprovalDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setApprovalDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasLastReviewDate(): boolean;
  clearLastReviewDate(): void;
  getLastReviewDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setLastReviewDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasEffectivePeriod(): boolean;
  clearEffectivePeriod(): void;
  getEffectivePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setEffectivePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearTopic(): void;
  getTopic(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTopic(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addTopic(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearAuthor(): void;
  getAuthor(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setAuthor(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addAuthor(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearEditor(): void;
  getEditor(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setEditor(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addEditor(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearReviewer(): void;
  getReviewer(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setReviewer(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addReviewer(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearEndorser(): void;
  getEndorser(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setEndorser(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addEndorser(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearRelatedArtifact(): void;
  getRelatedArtifact(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
  setRelatedArtifact(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
  addRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

  hasType(): boolean;
  clearType(): void;
  getType(): EvidenceVariable.TypeCode | undefined;
  setType(value?: EvidenceVariable.TypeCode): void;

  clearCharacteristic(): void;
  getCharacteristic(): Array<EvidenceVariable.Characteristic>;
  setCharacteristic(value: Array<EvidenceVariable.Characteristic>): void;
  addCharacteristic(value?: EvidenceVariable.Characteristic, index?: number): EvidenceVariable.Characteristic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvidenceVariable.AsObject;
  static toObject(includeInstance: boolean, msg: EvidenceVariable): EvidenceVariable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EvidenceVariable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvidenceVariable;
  static deserializeBinaryFromReader(message: EvidenceVariable, reader: jspb.BinaryReader): EvidenceVariable;
}

export namespace EvidenceVariable {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    shortTitle?: proto_r4_core_datatypes_pb.String.AsObject,
    subtitle?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: EvidenceVariable.StatusCode.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    approvalDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    lastReviewDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    effectivePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    topic: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    author: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    editor: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    reviewer: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    endorser: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    relatedArtifact: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
    type?: EvidenceVariable.TypeCode.AsObject,
    characteristic: Array<EvidenceVariable.Characteristic.AsObject>,
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

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Characteristic extends jspb.Message {
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

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): EvidenceVariable.Characteristic.DefinitionX | undefined;
    setDefinition(value?: EvidenceVariable.Characteristic.DefinitionX): void;

    clearUsageContext(): void;
    getUsageContext(): Array<proto_r4_core_datatypes_pb.UsageContext>;
    setUsageContext(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
    addUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

    hasExclude(): boolean;
    clearExclude(): void;
    getExclude(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setExclude(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasParticipantEffective(): boolean;
    clearParticipantEffective(): void;
    getParticipantEffective(): EvidenceVariable.Characteristic.ParticipantEffectiveX | undefined;
    setParticipantEffective(value?: EvidenceVariable.Characteristic.ParticipantEffectiveX): void;

    hasTimeFromStart(): boolean;
    clearTimeFromStart(): void;
    getTimeFromStart(): proto_r4_core_datatypes_pb.Duration | undefined;
    setTimeFromStart(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasGroupMeasure(): boolean;
    clearGroupMeasure(): void;
    getGroupMeasure(): EvidenceVariable.Characteristic.GroupMeasureCode | undefined;
    setGroupMeasure(value?: EvidenceVariable.Characteristic.GroupMeasureCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Characteristic.AsObject;
    static toObject(includeInstance: boolean, msg: Characteristic): Characteristic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Characteristic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Characteristic;
    static deserializeBinaryFromReader(message: Characteristic, reader: jspb.BinaryReader): Characteristic;
  }

  export namespace Characteristic {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      definition?: EvidenceVariable.Characteristic.DefinitionX.AsObject,
      usageContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
      exclude?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      participantEffective?: EvidenceVariable.Characteristic.ParticipantEffectiveX.AsObject,
      timeFromStart?: proto_r4_core_datatypes_pb.Duration.AsObject,
      groupMeasure?: EvidenceVariable.Characteristic.GroupMeasureCode.AsObject,
    }

    export class DefinitionX extends jspb.Message {
      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      getChoiceCase(): DefinitionX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DefinitionX.AsObject;
      static toObject(includeInstance: boolean, msg: DefinitionX): DefinitionX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DefinitionX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DefinitionX;
      static deserializeBinaryFromReader(message: DefinitionX, reader: jspb.BinaryReader): DefinitionX;
    }

    export namespace DefinitionX {
      export type AsObject = {
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        REFERENCE = 1,
        CANONICAL = 2,
        CODEABLE_CONCEPT = 3,
        EXPRESSION = 4,
        DATA_REQUIREMENT = 5,
        TRIGGER_DEFINITION = 6,
      }
    }

    export class ParticipantEffectiveX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      getChoiceCase(): ParticipantEffectiveX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ParticipantEffectiveX.AsObject;
      static toObject(includeInstance: boolean, msg: ParticipantEffectiveX): ParticipantEffectiveX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ParticipantEffectiveX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ParticipantEffectiveX;
      static deserializeBinaryFromReader(message: ParticipantEffectiveX, reader: jspb.BinaryReader): ParticipantEffectiveX;
    }

    export namespace ParticipantEffectiveX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
        DURATION = 3,
        TIMING = 4,
      }
    }

    export class GroupMeasureCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GroupMeasureCode.AsObject;
      static toObject(includeInstance: boolean, msg: GroupMeasureCode): GroupMeasureCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GroupMeasureCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GroupMeasureCode;
      static deserializeBinaryFromReader(message: GroupMeasureCode, reader: jspb.BinaryReader): GroupMeasureCode;
    }

    export namespace GroupMeasureCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

