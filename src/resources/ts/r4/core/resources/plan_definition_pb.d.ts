// package: google.fhir.r4.core
// file: proto/r4/core/resources/plan_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class PlanDefinition extends jspb.Message {
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

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): PlanDefinition.StatusCode | undefined;
  setStatus(value?: PlanDefinition.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): PlanDefinition.SubjectX | undefined;
  setSubject(value?: PlanDefinition.SubjectX): void;

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

  clearGoal(): void;
  getGoal(): Array<PlanDefinition.Goal>;
  setGoal(value: Array<PlanDefinition.Goal>): void;
  addGoal(value?: PlanDefinition.Goal, index?: number): PlanDefinition.Goal;

  clearAction(): void;
  getAction(): Array<PlanDefinition.Action>;
  setAction(value: Array<PlanDefinition.Action>): void;
  addAction(value?: PlanDefinition.Action, index?: number): PlanDefinition.Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: PlanDefinition): PlanDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanDefinition;
  static deserializeBinaryFromReader(message: PlanDefinition, reader: jspb.BinaryReader): PlanDefinition;
}

export namespace PlanDefinition {
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
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: PlanDefinition.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subject?: PlanDefinition.SubjectX.AsObject,
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
    goal: Array<PlanDefinition.Goal.AsObject>,
    action: Array<PlanDefinition.Action.AsObject>,
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

  export class Goal extends jspb.Message {
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

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasStart(): boolean;
    clearStart(): void;
    getStart(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setStart(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAddresses(): void;
    getAddresses(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAddresses(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAddresses(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDocumentation(): void;
    getDocumentation(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
    setDocumentation(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
    addDocumentation(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

    clearTarget(): void;
    getTarget(): Array<PlanDefinition.Goal.Target>;
    setTarget(value: Array<PlanDefinition.Goal.Target>): void;
    addTarget(value?: PlanDefinition.Goal.Target, index?: number): PlanDefinition.Goal.Target;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Goal.AsObject;
    static toObject(includeInstance: boolean, msg: Goal): Goal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Goal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Goal;
    static deserializeBinaryFromReader(message: Goal, reader: jspb.BinaryReader): Goal;
  }

  export namespace Goal {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      description?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      start?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      addresses: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      documentation: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
      target: Array<PlanDefinition.Goal.Target.AsObject>,
    }

    export class Target extends jspb.Message {
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

      hasMeasure(): boolean;
      clearMeasure(): void;
      getMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDetail(): boolean;
      clearDetail(): void;
      getDetail(): PlanDefinition.Goal.Target.DetailX | undefined;
      setDetail(value?: PlanDefinition.Goal.Target.DetailX): void;

      hasDue(): boolean;
      clearDue(): void;
      getDue(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDue(value?: proto_r4_core_datatypes_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Target.AsObject;
      static toObject(includeInstance: boolean, msg: Target): Target.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Target, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Target;
      static deserializeBinaryFromReader(message: Target, reader: jspb.BinaryReader): Target;
    }

    export namespace Target {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        measure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        detail?: PlanDefinition.Goal.Target.DetailX.AsObject,
        due?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }

      export class DetailX extends jspb.Message {
        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

        hasRange(): boolean;
        clearRange(): void;
        getRange(): proto_r4_core_datatypes_pb.Range | undefined;
        setRange(value?: proto_r4_core_datatypes_pb.Range): void;

        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        getChoiceCase(): DetailX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DetailX.AsObject;
        static toObject(includeInstance: boolean, msg: DetailX): DetailX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DetailX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DetailX;
        static deserializeBinaryFromReader(message: DetailX, reader: jspb.BinaryReader): DetailX;
      }

      export namespace DetailX {
        export type AsObject = {
          quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
          range?: proto_r4_core_datatypes_pb.Range.AsObject,
          codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          QUANTITY = 1,
          RANGE = 2,
          CODEABLE_CONCEPT = 3,
        }
      }
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
    getPriority(): PlanDefinition.Action.PriorityCode | undefined;
    setPriority(value?: PlanDefinition.Action.PriorityCode): void;

    clearCode(): void;
    getCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReason(): void;
    getReason(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setReason(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addReason(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearDocumentation(): void;
    getDocumentation(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
    setDocumentation(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
    addDocumentation(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

    clearGoalId(): void;
    getGoalId(): Array<proto_r4_core_datatypes_pb.Id>;
    setGoalId(value: Array<proto_r4_core_datatypes_pb.Id>): void;
    addGoalId(value?: proto_r4_core_datatypes_pb.Id, index?: number): proto_r4_core_datatypes_pb.Id;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): PlanDefinition.Action.SubjectX | undefined;
    setSubject(value?: PlanDefinition.Action.SubjectX): void;

    clearTrigger(): void;
    getTrigger(): Array<proto_r4_core_datatypes_pb.TriggerDefinition>;
    setTrigger(value: Array<proto_r4_core_datatypes_pb.TriggerDefinition>): void;
    addTrigger(value?: proto_r4_core_datatypes_pb.TriggerDefinition, index?: number): proto_r4_core_datatypes_pb.TriggerDefinition;

    clearCondition(): void;
    getCondition(): Array<PlanDefinition.Action.Condition>;
    setCondition(value: Array<PlanDefinition.Action.Condition>): void;
    addCondition(value?: PlanDefinition.Action.Condition, index?: number): PlanDefinition.Action.Condition;

    clearInput(): void;
    getInput(): Array<proto_r4_core_datatypes_pb.DataRequirement>;
    setInput(value: Array<proto_r4_core_datatypes_pb.DataRequirement>): void;
    addInput(value?: proto_r4_core_datatypes_pb.DataRequirement, index?: number): proto_r4_core_datatypes_pb.DataRequirement;

    clearOutput(): void;
    getOutput(): Array<proto_r4_core_datatypes_pb.DataRequirement>;
    setOutput(value: Array<proto_r4_core_datatypes_pb.DataRequirement>): void;
    addOutput(value?: proto_r4_core_datatypes_pb.DataRequirement, index?: number): proto_r4_core_datatypes_pb.DataRequirement;

    clearRelatedAction(): void;
    getRelatedAction(): Array<PlanDefinition.Action.RelatedAction>;
    setRelatedAction(value: Array<PlanDefinition.Action.RelatedAction>): void;
    addRelatedAction(value?: PlanDefinition.Action.RelatedAction, index?: number): PlanDefinition.Action.RelatedAction;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): PlanDefinition.Action.TimingX | undefined;
    setTiming(value?: PlanDefinition.Action.TimingX): void;

    clearParticipant(): void;
    getParticipant(): Array<PlanDefinition.Action.Participant>;
    setParticipant(value: Array<PlanDefinition.Action.Participant>): void;
    addParticipant(value?: PlanDefinition.Action.Participant, index?: number): PlanDefinition.Action.Participant;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasGroupingBehavior(): boolean;
    clearGroupingBehavior(): void;
    getGroupingBehavior(): PlanDefinition.Action.GroupingBehaviorCode | undefined;
    setGroupingBehavior(value?: PlanDefinition.Action.GroupingBehaviorCode): void;

    hasSelectionBehavior(): boolean;
    clearSelectionBehavior(): void;
    getSelectionBehavior(): PlanDefinition.Action.SelectionBehaviorCode | undefined;
    setSelectionBehavior(value?: PlanDefinition.Action.SelectionBehaviorCode): void;

    hasRequiredBehavior(): boolean;
    clearRequiredBehavior(): void;
    getRequiredBehavior(): PlanDefinition.Action.RequiredBehaviorCode | undefined;
    setRequiredBehavior(value?: PlanDefinition.Action.RequiredBehaviorCode): void;

    hasPrecheckBehavior(): boolean;
    clearPrecheckBehavior(): void;
    getPrecheckBehavior(): PlanDefinition.Action.PrecheckBehaviorCode | undefined;
    setPrecheckBehavior(value?: PlanDefinition.Action.PrecheckBehaviorCode): void;

    hasCardinalityBehavior(): boolean;
    clearCardinalityBehavior(): void;
    getCardinalityBehavior(): PlanDefinition.Action.CardinalityBehaviorCode | undefined;
    setCardinalityBehavior(value?: PlanDefinition.Action.CardinalityBehaviorCode): void;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): PlanDefinition.Action.DefinitionX | undefined;
    setDefinition(value?: PlanDefinition.Action.DefinitionX): void;

    hasTransform(): boolean;
    clearTransform(): void;
    getTransform(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setTransform(value?: proto_r4_core_datatypes_pb.Canonical): void;

    clearDynamicValue(): void;
    getDynamicValue(): Array<PlanDefinition.Action.DynamicValue>;
    setDynamicValue(value: Array<PlanDefinition.Action.DynamicValue>): void;
    addDynamicValue(value?: PlanDefinition.Action.DynamicValue, index?: number): PlanDefinition.Action.DynamicValue;

    clearAction(): void;
    getAction(): Array<PlanDefinition.Action>;
    setAction(value: Array<PlanDefinition.Action>): void;
    addAction(value?: PlanDefinition.Action, index?: number): PlanDefinition.Action;

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
      priority?: PlanDefinition.Action.PriorityCode.AsObject,
      code: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      reason: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      documentation: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
      goalId: Array<proto_r4_core_datatypes_pb.Id.AsObject>,
      subject?: PlanDefinition.Action.SubjectX.AsObject,
      trigger: Array<proto_r4_core_datatypes_pb.TriggerDefinition.AsObject>,
      condition: Array<PlanDefinition.Action.Condition.AsObject>,
      input: Array<proto_r4_core_datatypes_pb.DataRequirement.AsObject>,
      output: Array<proto_r4_core_datatypes_pb.DataRequirement.AsObject>,
      relatedAction: Array<PlanDefinition.Action.RelatedAction.AsObject>,
      timing?: PlanDefinition.Action.TimingX.AsObject,
      participant: Array<PlanDefinition.Action.Participant.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      groupingBehavior?: PlanDefinition.Action.GroupingBehaviorCode.AsObject,
      selectionBehavior?: PlanDefinition.Action.SelectionBehaviorCode.AsObject,
      requiredBehavior?: PlanDefinition.Action.RequiredBehaviorCode.AsObject,
      precheckBehavior?: PlanDefinition.Action.PrecheckBehaviorCode.AsObject,
      cardinalityBehavior?: PlanDefinition.Action.CardinalityBehaviorCode.AsObject,
      definition?: PlanDefinition.Action.DefinitionX.AsObject,
      transform?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      dynamicValue: Array<PlanDefinition.Action.DynamicValue.AsObject>,
      action: Array<PlanDefinition.Action.AsObject>,
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
      getKind(): PlanDefinition.Action.Condition.KindCode | undefined;
      setKind(value?: PlanDefinition.Action.Condition.KindCode): void;

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
        kind?: PlanDefinition.Action.Condition.KindCode.AsObject,
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
      getRelationship(): PlanDefinition.Action.RelatedAction.RelationshipCode | undefined;
      setRelationship(value?: PlanDefinition.Action.RelatedAction.RelationshipCode): void;

      hasOffset(): boolean;
      clearOffset(): void;
      getOffset(): PlanDefinition.Action.RelatedAction.OffsetX | undefined;
      setOffset(value?: PlanDefinition.Action.RelatedAction.OffsetX): void;

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
        relationship?: PlanDefinition.Action.RelatedAction.RelationshipCode.AsObject,
        offset?: PlanDefinition.Action.RelatedAction.OffsetX.AsObject,
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

    export class Participant extends jspb.Message {
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
      getType(): PlanDefinition.Action.Participant.TypeCode | undefined;
      setType(value?: PlanDefinition.Action.Participant.TypeCode): void;

      hasRole(): boolean;
      clearRole(): void;
      getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Participant.AsObject;
      static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Participant;
      static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
    }

    export namespace Participant {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: PlanDefinition.Action.Participant.TypeCode.AsObject,
        role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export class TypeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ActionParticipantTypeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
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

    export class DefinitionX extends jspb.Message {
      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

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
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CANONICAL = 1,
        URI = 2,
      }
    }

    export class DynamicValue extends jspb.Message {
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

      hasPath(): boolean;
      clearPath(): void;
      getPath(): proto_r4_core_datatypes_pb.String | undefined;
      setPath(value?: proto_r4_core_datatypes_pb.String): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DynamicValue.AsObject;
      static toObject(includeInstance: boolean, msg: DynamicValue): DynamicValue.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DynamicValue, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DynamicValue;
      static deserializeBinaryFromReader(message: DynamicValue, reader: jspb.BinaryReader): DynamicValue;
    }

    export namespace DynamicValue {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        path?: proto_r4_core_datatypes_pb.String.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
      }
    }
  }
}

