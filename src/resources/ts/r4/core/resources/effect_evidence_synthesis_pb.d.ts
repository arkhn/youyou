// package: google.fhir.r4.core
// file: proto/r4/core/resources/effect_evidence_synthesis.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class EffectEvidenceSynthesis extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): EffectEvidenceSynthesis.StatusCode | undefined;
  setStatus(value?: EffectEvidenceSynthesis.StatusCode): void;

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

  hasSynthesisType(): boolean;
  clearSynthesisType(): void;
  getSynthesisType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setSynthesisType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStudyType(): boolean;
  clearStudyType(): void;
  getStudyType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStudyType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPopulation(): boolean;
  clearPopulation(): void;
  getPopulation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPopulation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasExposure(): boolean;
  clearExposure(): void;
  getExposure(): proto_r4_core_datatypes_pb.Reference | undefined;
  setExposure(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasExposureAlternative(): boolean;
  clearExposureAlternative(): void;
  getExposureAlternative(): proto_r4_core_datatypes_pb.Reference | undefined;
  setExposureAlternative(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasOutcome(): boolean;
  clearOutcome(): void;
  getOutcome(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOutcome(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSampleSize(): boolean;
  clearSampleSize(): void;
  getSampleSize(): EffectEvidenceSynthesis.SampleSize | undefined;
  setSampleSize(value?: EffectEvidenceSynthesis.SampleSize): void;

  clearResultsByExposure(): void;
  getResultsByExposure(): Array<EffectEvidenceSynthesis.ResultsByExposure>;
  setResultsByExposure(value: Array<EffectEvidenceSynthesis.ResultsByExposure>): void;
  addResultsByExposure(value?: EffectEvidenceSynthesis.ResultsByExposure, index?: number): EffectEvidenceSynthesis.ResultsByExposure;

  clearEffectEstimate(): void;
  getEffectEstimate(): Array<EffectEvidenceSynthesis.EffectEstimate>;
  setEffectEstimate(value: Array<EffectEvidenceSynthesis.EffectEstimate>): void;
  addEffectEstimate(value?: EffectEvidenceSynthesis.EffectEstimate, index?: number): EffectEvidenceSynthesis.EffectEstimate;

  clearCertainty(): void;
  getCertainty(): Array<EffectEvidenceSynthesis.Certainty>;
  setCertainty(value: Array<EffectEvidenceSynthesis.Certainty>): void;
  addCertainty(value?: EffectEvidenceSynthesis.Certainty, index?: number): EffectEvidenceSynthesis.Certainty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectEvidenceSynthesis.AsObject;
  static toObject(includeInstance: boolean, msg: EffectEvidenceSynthesis): EffectEvidenceSynthesis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectEvidenceSynthesis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectEvidenceSynthesis;
  static deserializeBinaryFromReader(message: EffectEvidenceSynthesis, reader: jspb.BinaryReader): EffectEvidenceSynthesis;
}

export namespace EffectEvidenceSynthesis {
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
    status?: EffectEvidenceSynthesis.StatusCode.AsObject,
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
    synthesisType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    studyType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    population?: proto_r4_core_datatypes_pb.Reference.AsObject,
    exposure?: proto_r4_core_datatypes_pb.Reference.AsObject,
    exposureAlternative?: proto_r4_core_datatypes_pb.Reference.AsObject,
    outcome?: proto_r4_core_datatypes_pb.Reference.AsObject,
    sampleSize?: EffectEvidenceSynthesis.SampleSize.AsObject,
    resultsByExposure: Array<EffectEvidenceSynthesis.ResultsByExposure.AsObject>,
    effectEstimate: Array<EffectEvidenceSynthesis.EffectEstimate.AsObject>,
    certainty: Array<EffectEvidenceSynthesis.Certainty.AsObject>,
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

  export class SampleSize extends jspb.Message {
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

    hasNumberOfStudies(): boolean;
    clearNumberOfStudies(): void;
    getNumberOfStudies(): proto_r4_core_datatypes_pb.Integer | undefined;
    setNumberOfStudies(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasNumberOfParticipants(): boolean;
    clearNumberOfParticipants(): void;
    getNumberOfParticipants(): proto_r4_core_datatypes_pb.Integer | undefined;
    setNumberOfParticipants(value?: proto_r4_core_datatypes_pb.Integer): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleSize.AsObject;
    static toObject(includeInstance: boolean, msg: SampleSize): SampleSize.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleSize, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleSize;
    static deserializeBinaryFromReader(message: SampleSize, reader: jspb.BinaryReader): SampleSize;
  }

  export namespace SampleSize {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      numberOfStudies?: proto_r4_core_datatypes_pb.Integer.AsObject,
      numberOfParticipants?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }
  }

  export class ResultsByExposure extends jspb.Message {
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

    hasExposureState(): boolean;
    clearExposureState(): void;
    getExposureState(): EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode | undefined;
    setExposureState(value?: EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode): void;

    hasVariantState(): boolean;
    clearVariantState(): void;
    getVariantState(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setVariantState(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasRiskEvidenceSynthesis(): boolean;
    clearRiskEvidenceSynthesis(): void;
    getRiskEvidenceSynthesis(): proto_r4_core_datatypes_pb.Reference | undefined;
    setRiskEvidenceSynthesis(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultsByExposure.AsObject;
    static toObject(includeInstance: boolean, msg: ResultsByExposure): ResultsByExposure.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultsByExposure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultsByExposure;
    static deserializeBinaryFromReader(message: ResultsByExposure, reader: jspb.BinaryReader): ResultsByExposure;
  }

  export namespace ResultsByExposure {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      exposureState?: EffectEvidenceSynthesis.ResultsByExposure.ExposureStateCode.AsObject,
      variantState?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      riskEvidenceSynthesis?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class ExposureStateCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ExposureStateCode.ValueMap[keyof proto_r4_core_codes_pb.ExposureStateCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ExposureStateCode.ValueMap[keyof proto_r4_core_codes_pb.ExposureStateCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ExposureStateCode.AsObject;
      static toObject(includeInstance: boolean, msg: ExposureStateCode): ExposureStateCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ExposureStateCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ExposureStateCode;
      static deserializeBinaryFromReader(message: ExposureStateCode, reader: jspb.BinaryReader): ExposureStateCode;
    }

    export namespace ExposureStateCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ExposureStateCode.ValueMap[keyof proto_r4_core_codes_pb.ExposureStateCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class EffectEstimate extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasVariantState(): boolean;
    clearVariantState(): void;
    getVariantState(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setVariantState(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setValue(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasUnitOfMeasure(): boolean;
    clearUnitOfMeasure(): void;
    getUnitOfMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUnitOfMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearPrecisionEstimate(): void;
    getPrecisionEstimate(): Array<EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate>;
    setPrecisionEstimate(value: Array<EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate>): void;
    addPrecisionEstimate(value?: EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate, index?: number): EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectEstimate.AsObject;
    static toObject(includeInstance: boolean, msg: EffectEstimate): EffectEstimate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectEstimate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectEstimate;
    static deserializeBinaryFromReader(message: EffectEstimate, reader: jspb.BinaryReader): EffectEstimate;
  }

  export namespace EffectEstimate {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      variantState?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      unitOfMeasure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      precisionEstimate: Array<EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate.AsObject>,
    }

    export class PrecisionEstimate extends jspb.Message {
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

      hasLevel(): boolean;
      clearLevel(): void;
      getLevel(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setLevel(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasFrom(): boolean;
      clearFrom(): void;
      getFrom(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setFrom(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasTo(): boolean;
      clearTo(): void;
      getTo(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setTo(value?: proto_r4_core_datatypes_pb.Decimal): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PrecisionEstimate.AsObject;
      static toObject(includeInstance: boolean, msg: PrecisionEstimate): PrecisionEstimate.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PrecisionEstimate, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PrecisionEstimate;
      static deserializeBinaryFromReader(message: PrecisionEstimate, reader: jspb.BinaryReader): PrecisionEstimate;
    }

    export namespace PrecisionEstimate {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        level?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        from?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        to?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      }
    }
  }

  export class Certainty extends jspb.Message {
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

    clearRating(): void;
    getRating(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRating(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRating(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearNote(): void;
    getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    clearCertaintySubcomponent(): void;
    getCertaintySubcomponent(): Array<EffectEvidenceSynthesis.Certainty.CertaintySubcomponent>;
    setCertaintySubcomponent(value: Array<EffectEvidenceSynthesis.Certainty.CertaintySubcomponent>): void;
    addCertaintySubcomponent(value?: EffectEvidenceSynthesis.Certainty.CertaintySubcomponent, index?: number): EffectEvidenceSynthesis.Certainty.CertaintySubcomponent;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Certainty.AsObject;
    static toObject(includeInstance: boolean, msg: Certainty): Certainty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Certainty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Certainty;
    static deserializeBinaryFromReader(message: Certainty, reader: jspb.BinaryReader): Certainty;
  }

  export namespace Certainty {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      rating: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      certaintySubcomponent: Array<EffectEvidenceSynthesis.Certainty.CertaintySubcomponent.AsObject>,
    }

    export class CertaintySubcomponent extends jspb.Message {
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

      clearRating(): void;
      getRating(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setRating(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addRating(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearNote(): void;
      getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
      setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
      addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CertaintySubcomponent.AsObject;
      static toObject(includeInstance: boolean, msg: CertaintySubcomponent): CertaintySubcomponent.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CertaintySubcomponent, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CertaintySubcomponent;
      static deserializeBinaryFromReader(message: CertaintySubcomponent, reader: jspb.BinaryReader): CertaintySubcomponent;
    }

    export namespace CertaintySubcomponent {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        rating: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      }
    }
  }
}

