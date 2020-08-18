// package: google.fhir.r4.core
// file: proto/r4/core/resources/research_study.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ResearchStudy extends jspb.Message {
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

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  clearProtocol(): void;
  getProtocol(): Array<proto_r4_core_datatypes_pb.Reference>;
  setProtocol(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addProtocol(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): ResearchStudy.StatusCode | undefined;
  setStatus(value?: ResearchStudy.StatusCode): void;

  hasPrimaryPurposeType(): boolean;
  clearPrimaryPurposeType(): void;
  getPrimaryPurposeType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPrimaryPurposeType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPhase(): boolean;
  clearPhase(): void;
  getPhase(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPhase(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCondition(): void;
  getCondition(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCondition(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCondition(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearContact(): void;
  getContact(): Array<proto_r4_core_datatypes_pb.ContactDetail>;
  setContact(value: Array<proto_r4_core_datatypes_pb.ContactDetail>): void;
  addContact(value?: proto_r4_core_datatypes_pb.ContactDetail, index?: number): proto_r4_core_datatypes_pb.ContactDetail;

  clearRelatedArtifact(): void;
  getRelatedArtifact(): Array<proto_r4_core_datatypes_pb.RelatedArtifact>;
  setRelatedArtifact(value: Array<proto_r4_core_datatypes_pb.RelatedArtifact>): void;
  addRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact, index?: number): proto_r4_core_datatypes_pb.RelatedArtifact;

  clearKeyword(): void;
  getKeyword(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setKeyword(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addKeyword(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearLocation(): void;
  getLocation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setLocation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addLocation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearEnrollment(): void;
  getEnrollment(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEnrollment(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEnrollment(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasSponsor(): boolean;
  clearSponsor(): void;
  getSponsor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSponsor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPrincipalInvestigator(): boolean;
  clearPrincipalInvestigator(): void;
  getPrincipalInvestigator(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPrincipalInvestigator(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSite(): void;
  getSite(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSite(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSite(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasReasonStopped(): boolean;
  clearReasonStopped(): void;
  getReasonStopped(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonStopped(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearArm(): void;
  getArm(): Array<ResearchStudy.Arm>;
  setArm(value: Array<ResearchStudy.Arm>): void;
  addArm(value?: ResearchStudy.Arm, index?: number): ResearchStudy.Arm;

  clearObjective(): void;
  getObjective(): Array<ResearchStudy.Objective>;
  setObjective(value: Array<ResearchStudy.Objective>): void;
  addObjective(value?: ResearchStudy.Objective, index?: number): ResearchStudy.Objective;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchStudy.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchStudy): ResearchStudy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchStudy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchStudy;
  static deserializeBinaryFromReader(message: ResearchStudy, reader: jspb.BinaryReader): ResearchStudy;
}

export namespace ResearchStudy {
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
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    protocol: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: ResearchStudy.StatusCode.AsObject,
    primaryPurposeType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    phase?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    focus: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    condition: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    contact: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    relatedArtifact: Array<proto_r4_core_datatypes_pb.RelatedArtifact.AsObject>,
    keyword: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    enrollment: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    sponsor?: proto_r4_core_datatypes_pb.Reference.AsObject,
    principalInvestigator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    site: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    reasonStopped?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    arm: Array<ResearchStudy.Arm.AsObject>,
    objective: Array<ResearchStudy.Objective.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ResearchStudyStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Arm extends jspb.Message {
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Arm.AsObject;
    static toObject(includeInstance: boolean, msg: Arm): Arm.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Arm, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Arm;
    static deserializeBinaryFromReader(message: Arm, reader: jspb.BinaryReader): Arm;
  }

  export namespace Arm {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Objective extends jspb.Message {
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Objective.AsObject;
    static toObject(includeInstance: boolean, msg: Objective): Objective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Objective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Objective;
    static deserializeBinaryFromReader(message: Objective, reader: jspb.BinaryReader): Objective;
  }

  export namespace Objective {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }
  }
}
