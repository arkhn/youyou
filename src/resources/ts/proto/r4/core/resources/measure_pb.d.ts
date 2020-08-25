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

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearUseContext(): void;
  getUseContext(): Array<proto_r4_core_datatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_r4_core_datatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_r4_core_datatypes_pb.UsageContext, index?: number): proto_r4_core_datatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

  clearLibrary(): void;
  getLibrary(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setLibrary(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
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

  clearType(): void;
  getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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

  clearDefinition(): void;
  getDefinition(): Array<proto_r4_core_datatypes_pb.Markdown>;
  setDefinition(value: Array<proto_r4_core_datatypes_pb.Markdown>): void;
  addDefinition(value?: proto_r4_core_datatypes_pb.Markdown, index?: number): proto_r4_core_datatypes_pb.Markdown;

  hasGuidance(): boolean;
  clearGuidance(): void;
  getGuidance(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setGuidance(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearGroup(): void;
  getGroup(): Array<Measure.Group>;
  setGroup(value: Array<Measure.Group>): void;
  addGroup(value?: Measure.Group, index?: number): Measure.Group;

  clearSupplementalData(): void;
  getSupplementalData(): Array<Measure.SupplementalData>;
  setSupplementalData(value: Array<Measure.SupplementalData>): void;
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
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    subtitle?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: Measure.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subject?: Measure.SubjectX.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    usage?: proto_r4_core_datatypes_pb.String.AsObject,
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
    library: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    disclaimer?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    scoring?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    compositeScoring?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    riskAdjustment?: proto_r4_core_datatypes_pb.String.AsObject,
    rateAggregation?: proto_r4_core_datatypes_pb.String.AsObject,
    rationale?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    clinicalRecommendationStatement?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    improvementNotation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    definition: Array<proto_r4_core_datatypes_pb.Markdown.AsObject>,
    guidance?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    group: Array<Measure.Group.AsObject>,
    supplementalData: Array<Measure.SupplementalData.AsObject>,
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

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearPopulation(): void;
    getPopulation(): Array<Measure.Group.Population>;
    setPopulation(value: Array<Measure.Group.Population>): void;
    addPopulation(value?: Measure.Group.Population, index?: number): Measure.Group.Population;

    clearStratifier(): void;
    getStratifier(): Array<Measure.Group.Stratifier>;
    setStratifier(value: Array<Measure.Group.Stratifier>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      population: Array<Measure.Group.Population.AsObject>,
      stratifier: Array<Measure.Group.Stratifier.AsObject>,
    }

    export class Population extends jspb.Message {
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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

      clearComponent(): void;
      getComponent(): Array<Measure.Group.Stratifier.Component>;
      setComponent(value: Array<Measure.Group.Stratifier.Component>): void;
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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
        component: Array<Measure.Group.Stratifier.Component.AsObject>,
      }

      export class Component extends jspb.Message {
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
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
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

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearUsage(): void;
    getUsage(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setUsage(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
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
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      usage: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      criteria?: proto_r4_core_datatypes_pb.Expression.AsObject,
    }
  }
}

