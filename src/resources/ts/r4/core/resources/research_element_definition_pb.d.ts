// package: google.fhir.r4.core
// file: proto/r4/core/resources/research_element_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ResearchElementDefinition extends jspb.Message {
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

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
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
  getStatus(): ResearchElementDefinition.StatusCode | undefined;
  setStatus(value?: ResearchElementDefinition.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): ResearchElementDefinition.SubjectX | undefined;
  setSubject(value?: ResearchElementDefinition.SubjectX): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_r4_core_datatypes_pb.String | undefined;
  setPublisher(value?: proto_r4_core_datatypes_pb.String): void;

  clearContactList(): void;
  getContactList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContactList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearCommentList(): void;
  getCommentList(): Array<proto_r4_core_datatypes_pb.String>;
  setCommentList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addComment(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearUseContextList(): void;
  getUseContextList(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContextList(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdictionList(): void;
  getJurisdictionList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdictionList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasUsage(): boolean;
  clearUsage(): void;
  getUsage(): proto_r4_core_datatypes_pb.String | undefined;
  setUsage(value?: proto_r4_core_datatypes_pb.String): void;

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

  clearTopicList(): void;
  getTopicList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTopicList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addTopic(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearAuthorList(): void;
  getAuthorList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setAuthorList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addAuthor(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearEditorList(): void;
  getEditorList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setEditorList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addEditor(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearReviewerList(): void;
  getReviewerList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setReviewerList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addReviewer(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearEndorserList(): void;
  getEndorserList(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setEndorserList(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addEndorser(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearRelatedArtifactList(): void;
  getRelatedArtifactList(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
  setRelatedArtifactList(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
  addRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

  clearLibraryList(): void;
  getLibraryList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setLibraryList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addLibrary(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasType(): boolean;
  clearType(): void;
  getType(): ResearchElementDefinition.TypeCode | undefined;
  setType(value?: ResearchElementDefinition.TypeCode): void;

  hasVariableType(): boolean;
  clearVariableType(): void;
  getVariableType(): ResearchElementDefinition.VariableTypeCode | undefined;
  setVariableType(value?: ResearchElementDefinition.VariableTypeCode): void;

  clearCharacteristicList(): void;
  getCharacteristicList(): Array<ResearchElementDefinition.Characteristic>;
  setCharacteristicList(value: Array<ResearchElementDefinition.Characteristic>): void;
  addCharacteristic(value?: ResearchElementDefinition.Characteristic, index?: number): ResearchElementDefinition.Characteristic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchElementDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchElementDefinition): ResearchElementDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchElementDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchElementDefinition;
  static deserializeBinaryFromReader(message: ResearchElementDefinition, reader: jspb.BinaryReader): ResearchElementDefinition;
}

export namespace ResearchElementDefinition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    shortTitle?: proto_r4_core_datatypes_pb.String.AsObject,
    subtitle?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: ResearchElementDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subject?: ResearchElementDefinition.SubjectX.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    commentList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    useContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdictionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    usage?: proto_r4_core_datatypes_pb.String.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    approvalDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    lastReviewDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    effectivePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    topicList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    authorList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    editorList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    reviewerList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    endorserList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    relatedArtifactList: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
    libraryList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    type?: ResearchElementDefinition.TypeCode.AsObject,
    variableType?: ResearchElementDefinition.VariableTypeCode.AsObject,
    characteristicList: Array<ResearchElementDefinition.Characteristic.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class SubjectX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): SubjectX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubjectX.AsObject;
    static toObject(includeInstance: boolean, msg: SubjectX): SubjectX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubjectX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubjectX;
    static deserializeBinaryFromReader(message: SubjectX, reader: jspb.BinaryReader): SubjectX;
  }

  export namespace SubjectX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchElementTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class VariableTypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VariableTypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: VariableTypeCode): VariableTypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VariableTypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VariableTypeCode;
    static deserializeBinaryFromReader(message: VariableTypeCode, reader: jspb.BinaryReader): VariableTypeCode;
  }

  export namespace VariableTypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap[keyof proto_r4_core_codes_pb.EvidenceVariableTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Characteristic extends jspb.Message {
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

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): ResearchElementDefinition.Characteristic.DefinitionX | undefined;
    setDefinition(value?: ResearchElementDefinition.Characteristic.DefinitionX): void;

    clearUsageContextList(): void;
    getUsageContextList(): Array<proto_r4_core_datatypes_pb.UsageContext>;
    setUsageContextList(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
    addUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

    hasExclude(): boolean;
    clearExclude(): void;
    getExclude(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setExclude(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasUnitOfMeasure(): boolean;
    clearUnitOfMeasure(): void;
    getUnitOfMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUnitOfMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStudyEffectiveDescription(): boolean;
    clearStudyEffectiveDescription(): void;
    getStudyEffectiveDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setStudyEffectiveDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasStudyEffective(): boolean;
    clearStudyEffective(): void;
    getStudyEffective(): ResearchElementDefinition.Characteristic.StudyEffectiveX | undefined;
    setStudyEffective(value?: ResearchElementDefinition.Characteristic.StudyEffectiveX): void;

    hasStudyEffectiveTimeFromStart(): boolean;
    clearStudyEffectiveTimeFromStart(): void;
    getStudyEffectiveTimeFromStart(): proto_r4_core_datatypes_pb.Duration | undefined;
    setStudyEffectiveTimeFromStart(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasStudyEffectiveGroupMeasure(): boolean;
    clearStudyEffectiveGroupMeasure(): void;
    getStudyEffectiveGroupMeasure(): ResearchElementDefinition.Characteristic.StudyEffectiveGroupMeasureCode | undefined;
    setStudyEffectiveGroupMeasure(value?: ResearchElementDefinition.Characteristic.StudyEffectiveGroupMeasureCode): void;

    hasParticipantEffectiveDescription(): boolean;
    clearParticipantEffectiveDescription(): void;
    getParticipantEffectiveDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setParticipantEffectiveDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasParticipantEffective(): boolean;
    clearParticipantEffective(): void;
    getParticipantEffective(): ResearchElementDefinition.Characteristic.ParticipantEffectiveX | undefined;
    setParticipantEffective(value?: ResearchElementDefinition.Characteristic.ParticipantEffectiveX): void;

    hasParticipantEffectiveTimeFromStart(): boolean;
    clearParticipantEffectiveTimeFromStart(): void;
    getParticipantEffectiveTimeFromStart(): proto_r4_core_datatypes_pb.Duration | undefined;
    setParticipantEffectiveTimeFromStart(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasParticipantEffectiveGroupMeasure(): boolean;
    clearParticipantEffectiveGroupMeasure(): void;
    getParticipantEffectiveGroupMeasure(): ResearchElementDefinition.Characteristic.ParticipantEffectiveGroupMeasureCode | undefined;
    setParticipantEffectiveGroupMeasure(value?: ResearchElementDefinition.Characteristic.ParticipantEffectiveGroupMeasureCode): void;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      definition?: ResearchElementDefinition.Characteristic.DefinitionX.AsObject,
      usageContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
      exclude?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      unitOfMeasure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      studyEffectiveDescription?: proto_r4_core_datatypes_pb.String.AsObject,
      studyEffective?: ResearchElementDefinition.Characteristic.StudyEffectiveX.AsObject,
      studyEffectiveTimeFromStart?: proto_r4_core_datatypes_pb.Duration.AsObject,
      studyEffectiveGroupMeasure?: ResearchElementDefinition.Characteristic.StudyEffectiveGroupMeasureCode.AsObject,
      participantEffectiveDescription?: proto_r4_core_datatypes_pb.String.AsObject,
      participantEffective?: ResearchElementDefinition.Characteristic.ParticipantEffectiveX.AsObject,
      participantEffectiveTimeFromStart?: proto_r4_core_datatypes_pb.Duration.AsObject,
      participantEffectiveGroupMeasure?: ResearchElementDefinition.Characteristic.ParticipantEffectiveGroupMeasureCode.AsObject,
    }

    export class DefinitionX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

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
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        CANONICAL = 2,
        EXPRESSION = 3,
        DATA_REQUIREMENT = 4,
      }
    }

    export class StudyEffectiveX extends jspb.Message {
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

      getChoiceCase(): StudyEffectiveX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StudyEffectiveX.AsObject;
      static toObject(includeInstance: boolean, msg: StudyEffectiveX): StudyEffectiveX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StudyEffectiveX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StudyEffectiveX;
      static deserializeBinaryFromReader(message: StudyEffectiveX, reader: jspb.BinaryReader): StudyEffectiveX;
    }

    export namespace StudyEffectiveX {
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

    export class StudyEffectiveGroupMeasureCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StudyEffectiveGroupMeasureCode.AsObject;
      static toObject(includeInstance: boolean, msg: StudyEffectiveGroupMeasureCode): StudyEffectiveGroupMeasureCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StudyEffectiveGroupMeasureCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StudyEffectiveGroupMeasureCode;
      static deserializeBinaryFromReader(message: StudyEffectiveGroupMeasureCode, reader: jspb.BinaryReader): StudyEffectiveGroupMeasureCode;
    }

    export namespace StudyEffectiveGroupMeasureCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    export class ParticipantEffectiveGroupMeasureCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ParticipantEffectiveGroupMeasureCode.AsObject;
      static toObject(includeInstance: boolean, msg: ParticipantEffectiveGroupMeasureCode): ParticipantEffectiveGroupMeasureCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ParticipantEffectiveGroupMeasureCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ParticipantEffectiveGroupMeasureCode;
      static deserializeBinaryFromReader(message: ParticipantEffectiveGroupMeasureCode, reader: jspb.BinaryReader): ParticipantEffectiveGroupMeasureCode;
    }

    export namespace ParticipantEffectiveGroupMeasureCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.GroupMeasureCode.ValueMap[keyof proto_r4_core_codes_pb.GroupMeasureCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

