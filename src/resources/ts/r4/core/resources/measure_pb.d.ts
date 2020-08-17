// package: google.fhir.r4.core
// file: proto/r4/core/resources/measure.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Measure extends jspb.Message {
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

  hasSubtitle(): boolean;
  clearSubtitle(): void;
  getSubtitle(): proto_r4_core_datatypes_pb.String | undefined;
  setSubtitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Measure.StatusCode | undefined;
  setStatus(value?: Measure.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): Measure.SubjectX | undefined;
  setSubject(value?: Measure.SubjectX): void;

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

  hasDisclaimer(): boolean;
  clearDisclaimer(): void;
  getDisclaimer(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDisclaimer(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasScoring(): boolean;
  clearScoring(): void;
  getScoring(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setScoring(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasCompositeScoring(): boolean;
  clearCompositeScoring(): void;
  getCompositeScoring(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCompositeScoring(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearTypeList(): void;
  getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasRiskAdjustment(): boolean;
  clearRiskAdjustment(): void;
  getRiskAdjustment(): proto_r4_core_datatypes_pb.String | undefined;
  setRiskAdjustment(value?: proto_r4_core_datatypes_pb.String): void;

  hasRateAggregation(): boolean;
  clearRateAggregation(): void;
  getRateAggregation(): proto_r4_core_datatypes_pb.String | undefined;
  setRateAggregation(value?: proto_r4_core_datatypes_pb.String): void;

  hasRationale(): boolean;
  clearRationale(): void;
  getRationale(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setRationale(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasClinicalRecommendationStatement(): boolean;
  clearClinicalRecommendationStatement(): void;
  getClinicalRecommendationStatement(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setClinicalRecommendationStatement(value?: proto_r4_core_datatypes_pb.Markdown): void;

  hasImprovementNotation(): boolean;
  clearImprovementNotation(): void;
  getImprovementNotation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setImprovementNotation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearDefinitionList(): void;
  getDefinitionList(): Array<proto_r4_core_datatypes_pb.Markdown>;
  setDefinitionList(value: Array<proto_r4_core_datatypes_pb.Markdown>): void;
  addDefinition(value?: proto_r4_core_datatypes_pb.Markdown, index?: number): proto_r4_core_datatypes_pb.Markdown;

  hasGuidance(): boolean;
  clearGuidance(): void;
  getGuidance(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setGuidance(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearGroupList(): void;
  getGroupList(): Array<Measure.Group>;
  setGroupList(value: Array<Measure.Group>): void;
  addGroup(value?: Measure.Group, index?: number): Measure.Group;

  clearSupplementalDataList(): void;
  getSupplementalDataList(): Array<Measure.SupplementalData>;
  setSupplementalDataList(value: Array<Measure.SupplementalData>): void;
  addSupplementalData(value?: Measure.SupplementalData, index?: number): Measure.SupplementalData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measure.AsObject;
  static toObject(includeInstance: boolean, msg: Measure): Measure.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Measure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measure;
  static deserializeBinaryFromReader(message: Measure, reader: jspb.BinaryReader): Measure;
}

export namespace Measure {
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
    subtitle?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: Measure.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subject?: Measure.SubjectX.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
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
    disclaimer?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    scoring?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    compositeScoring?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    riskAdjustment?: proto_r4_core_datatypes_pb.String.AsObject,
    rateAggregation?: proto_r4_core_datatypes_pb.String.AsObject,
    rationale?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    clinicalRecommendationStatement?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    improvementNotation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    definitionList: Array<proto_r4_core_datatypes_pb.Markdown.AsObject>,
    guidance?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    groupList: Array<Measure.Group.AsObject>,
    supplementalDataList: Array<Measure.SupplementalData.AsObject>,
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

  export class Group extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearPopulationList(): void;
    getPopulationList(): Array<Measure.Group.Population>;
    setPopulationList(value: Array<Measure.Group.Population>): void;
    addPopulation(value?: Measure.Group.Population, index?: number): Measure.Group.Population;

    clearStratifierList(): void;
    getStratifierList(): Array<Measure.Group.Stratifier>;
    setStratifierList(value: Array<Measure.Group.Stratifier>): void;
    addStratifier(value?: Measure.Group.Stratifier, index?: number): Measure.Group.Stratifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      populationList: Array<Measure.Group.Population.AsObject>,
      stratifierList: Array<Measure.Group.Stratifier.AsObject>,
    }

    export class Population extends jspb.Message {
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

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      hasCriteria(): boolean;
      clearCriteria(): void;
      getCriteria(): proto_r4_core_datatypes_pb.Expression | undefined;
      setCriteria(value?: proto_r4_core_datatypes_pb.Expression): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Population.AsObject;
      static toObject(includeInstance: boolean, msg: Population): Population.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Population, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Population;
      static deserializeBinaryFromReader(message: Population, reader: jspb.BinaryReader): Population;
    }

    export namespace Population {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
      }
    }

    export class Stratifier extends jspb.Message {
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

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      hasCriteria(): boolean;
      clearCriteria(): void;
      getCriteria(): proto_r4_core_datatypes_pb.Expression | undefined;
      setCriteria(value?: proto_r4_core_datatypes_pb.Expression): void;

      clearComponentList(): void;
      getComponentList(): Array<Measure.Group.Stratifier.Component>;
      setComponentList(value: Array<Measure.Group.Stratifier.Component>): void;
      addComponent(value?: Measure.Group.Stratifier.Component, index?: number): Measure.Group.Stratifier.Component;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Stratifier.AsObject;
      static toObject(includeInstance: boolean, msg: Stratifier): Stratifier.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Stratifier, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Stratifier;
      static deserializeBinaryFromReader(message: Stratifier, reader: jspb.BinaryReader): Stratifier;
    }

    export namespace Stratifier {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
        componentList: Array<Measure.Group.Stratifier.Component.AsObject>,
      }

      export class Component extends jspb.Message {
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

        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasDescription(): boolean;
        clearDescription(): void;
        getDescription(): proto_r4_core_datatypes_pb.String | undefined;
        setDescription(value?: proto_r4_core_datatypes_pb.String): void;

        hasCriteria(): boolean;
        clearCriteria(): void;
        getCriteria(): proto_r4_core_datatypes_pb.Expression | undefined;
        setCriteria(value?: proto_r4_core_datatypes_pb.Expression): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Component.AsObject;
        static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Component;
        static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
      }

      export namespace Component {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          description?: proto_r4_core_datatypes_pb.String.AsObject,
          criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
        }
      }
    }
  }

  export class SupplementalData extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearUsageList(): void;
    getUsageList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setUsageList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addUsage(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasCriteria(): boolean;
    clearCriteria(): void;
    getCriteria(): proto_r4_core_datatypes_pb.Expression | undefined;
    setCriteria(value?: proto_r4_core_datatypes_pb.Expression): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupplementalData.AsObject;
    static toObject(includeInstance: boolean, msg: SupplementalData): SupplementalData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupplementalData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupplementalData;
    static deserializeBinaryFromReader(message: SupplementalData, reader: jspb.BinaryReader): SupplementalData;
  }

  export namespace SupplementalData {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      usageList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
    }
  }
}

