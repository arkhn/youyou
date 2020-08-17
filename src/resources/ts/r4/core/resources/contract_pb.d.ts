// package: google.fhir.r4.core
// file: proto/r4/core/resources/contract.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Contract extends jspb.Message {
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

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_r4_core_datatypes_pb.String | undefined;
  setVersion(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Contract.StatusCode | undefined;
  setStatus(value?: Contract.StatusCode): void;

  hasLegalState(): boolean;
  clearLegalState(): void;
  getLegalState(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setLegalState(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasInstantiatesCanonical(): boolean;
  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): proto_r4_core_datatypes_pb.Reference | undefined;
  setInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasInstantiatesUri(): boolean;
  clearInstantiatesUri(): void;
  getInstantiatesUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasContentDerivative(): boolean;
  clearContentDerivative(): void;
  getContentDerivative(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setContentDerivative(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasApplies(): boolean;
  clearApplies(): void;
  getApplies(): proto_r4_core_datatypes_pb.Period | undefined;
  setApplies(value?: proto_r4_core_datatypes_pb.Period): void;

  hasExpirationType(): boolean;
  clearExpirationType(): void;
  getExpirationType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setExpirationType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSubjectList(): void;
  getSubjectList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSubjectList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSubject(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAuthorityList(): void;
  getAuthorityList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAuthorityList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAuthority(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDomainList(): void;
  getDomainList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDomainList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDomain(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSiteList(): void;
  getSiteList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSiteList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSite(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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

  clearAliasList(): void;
  getAliasList(): Array<proto_r4_core_datatypes_pb.String>;
  setAliasList(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addAlias(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasScope(): boolean;
  clearScope(): void;
  getScope(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setScope(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasTopic(): boolean;
  clearTopic(): void;
  getTopic(): Contract.TopicX | undefined;
  setTopic(value?: Contract.TopicX): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearSubTypeList(): void;
  getSubTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSubTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSubType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasContentDefinition(): boolean;
  clearContentDefinition(): void;
  getContentDefinition(): Contract.ContentDefinition | undefined;
  setContentDefinition(value?: Contract.ContentDefinition): void;

  clearTermList(): void;
  getTermList(): Array<Contract.Term>;
  setTermList(value: Array<Contract.Term>): void;
  addTerm(value?: Contract.Term, index?: number): Contract.Term;

  clearSupportingInfoList(): void;
  getSupportingInfoList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfoList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearRelevantHistoryList(): void;
  getRelevantHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSignerList(): void;
  getSignerList(): Array<Contract.Signatory>;
  setSignerList(value: Array<Contract.Signatory>): void;
  addSigner(value?: Contract.Signatory, index?: number): Contract.Signatory;

  clearFriendlyList(): void;
  getFriendlyList(): Array<Contract.FriendlyLanguage>;
  setFriendlyList(value: Array<Contract.FriendlyLanguage>): void;
  addFriendly(value?: Contract.FriendlyLanguage, index?: number): Contract.FriendlyLanguage;

  clearLegalList(): void;
  getLegalList(): Array<Contract.LegalLanguage>;
  setLegalList(value: Array<Contract.LegalLanguage>): void;
  addLegal(value?: Contract.LegalLanguage, index?: number): Contract.LegalLanguage;

  clearRuleList(): void;
  getRuleList(): Array<Contract.ComputableLanguage>;
  setRuleList(value: Array<Contract.ComputableLanguage>): void;
  addRule(value?: Contract.ComputableLanguage, index?: number): Contract.ComputableLanguage;

  hasLegallyBinding(): boolean;
  clearLegallyBinding(): void;
  getLegallyBinding(): Contract.LegallyBindingX | undefined;
  setLegallyBinding(value?: Contract.LegallyBindingX): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contract.AsObject;
  static toObject(includeInstance: boolean, msg: Contract): Contract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contract;
  static deserializeBinaryFromReader(message: Contract, reader: jspb.BinaryReader): Contract;
}

export namespace Contract {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    version?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: Contract.StatusCode.AsObject,
    legalState?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    instantiatesCanonical?: proto_r4_core_datatypes_pb.Reference.AsObject,
    instantiatesUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
    contentDerivative?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    issued?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    applies?: proto_r4_core_datatypes_pb.Period.AsObject,
    expirationType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subjectList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authorityList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    domainList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    siteList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    subtitle?: proto_r4_core_datatypes_pb.String.AsObject,
    aliasList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    scope?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    topic?: Contract.TopicX.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    contentDefinition?: Contract.ContentDefinition.AsObject,
    termList: Array<Contract.Term.AsObject>,
    supportingInfoList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    relevantHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    signerList: Array<Contract.Signatory.AsObject>,
    friendlyList: Array<Contract.FriendlyLanguage.AsObject>,
    legalList: Array<Contract.LegalLanguage.AsObject>,
    ruleList: Array<Contract.ComputableLanguage.AsObject>,
    legallyBinding?: Contract.LegallyBindingX.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class TopicX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): TopicX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicX.AsObject;
    static toObject(includeInstance: boolean, msg: TopicX): TopicX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicX;
    static deserializeBinaryFromReader(message: TopicX, reader: jspb.BinaryReader): TopicX;
  }

  export namespace TopicX {
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

  export class ContentDefinition extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasSubType(): boolean;
    clearSubType(): void;
    getSubType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSubType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPublisher(): boolean;
    clearPublisher(): void;
    getPublisher(): proto_r4_core_datatypes_pb.Reference | undefined;
    setPublisher(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPublicationDate(): boolean;
    clearPublicationDate(): void;
    getPublicationDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setPublicationDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPublicationStatus(): boolean;
    clearPublicationStatus(): void;
    getPublicationStatus(): Contract.ContentDefinition.PublicationStatusCode | undefined;
    setPublicationStatus(value?: Contract.ContentDefinition.PublicationStatusCode): void;

    hasCopyright(): boolean;
    clearCopyright(): void;
    getCopyright(): proto_r4_core_datatypes_pb.Markdown | undefined;
    setCopyright(value?: proto_r4_core_datatypes_pb.Markdown): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ContentDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: ContentDefinition): ContentDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ContentDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ContentDefinition;
    static deserializeBinaryFromReader(message: ContentDefinition, reader: jspb.BinaryReader): ContentDefinition;
  }

  export namespace ContentDefinition {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      publisher?: proto_r4_core_datatypes_pb.Reference.AsObject,
      publicationDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      publicationStatus?: Contract.ContentDefinition.PublicationStatusCode.AsObject,
      copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    }

    export class PublicationStatusCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PublicationStatusCode.AsObject;
      static toObject(includeInstance: boolean, msg: PublicationStatusCode): PublicationStatusCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PublicationStatusCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PublicationStatusCode;
      static deserializeBinaryFromReader(message: PublicationStatusCode, reader: jspb.BinaryReader): PublicationStatusCode;
    }

    export namespace PublicationStatusCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ContractResourcePublicationStatusCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Term extends jspb.Message {
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

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

    hasIssued(): boolean;
    clearIssued(): void;
    getIssued(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setIssued(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasApplies(): boolean;
    clearApplies(): void;
    getApplies(): proto_r4_core_datatypes_pb.Period | undefined;
    setApplies(value?: proto_r4_core_datatypes_pb.Period): void;

    hasTopic(): boolean;
    clearTopic(): void;
    getTopic(): Contract.Term.TopicX | undefined;
    setTopic(value?: Contract.Term.TopicX): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasSubType(): boolean;
    clearSubType(): void;
    getSubType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setSubType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    clearSecurityLabelList(): void;
    getSecurityLabelList(): Array<Contract.Term.SecurityLabel>;
    setSecurityLabelList(value: Array<Contract.Term.SecurityLabel>): void;
    addSecurityLabel(value?: Contract.Term.SecurityLabel, index?: number): Contract.Term.SecurityLabel;

    hasOffer(): boolean;
    clearOffer(): void;
    getOffer(): Contract.Term.ContractOffer | undefined;
    setOffer(value?: Contract.Term.ContractOffer): void;

    clearAssetList(): void;
    getAssetList(): Array<Contract.Term.ContractAsset>;
    setAssetList(value: Array<Contract.Term.ContractAsset>): void;
    addAsset(value?: Contract.Term.ContractAsset, index?: number): Contract.Term.ContractAsset;

    clearActionList(): void;
    getActionList(): Array<Contract.Term.Action>;
    setActionList(value: Array<Contract.Term.Action>): void;
    addAction(value?: Contract.Term.Action, index?: number): Contract.Term.Action;

    clearGroupList(): void;
    getGroupList(): Array<Contract.Term>;
    setGroupList(value: Array<Contract.Term>): void;
    addGroup(value?: Contract.Term, index?: number): Contract.Term;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Term.AsObject;
    static toObject(includeInstance: boolean, msg: Term): Term.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Term, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Term;
    static deserializeBinaryFromReader(message: Term, reader: jspb.BinaryReader): Term;
  }

  export namespace Term {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
      issued?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      applies?: proto_r4_core_datatypes_pb.Period.AsObject,
      topic?: Contract.Term.TopicX.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      subType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      securityLabelList: Array<Contract.Term.SecurityLabel.AsObject>,
      offer?: Contract.Term.ContractOffer.AsObject,
      assetList: Array<Contract.Term.ContractAsset.AsObject>,
      actionList: Array<Contract.Term.Action.AsObject>,
      groupList: Array<Contract.Term.AsObject>,
    }

    export class TopicX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): TopicX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TopicX.AsObject;
      static toObject(includeInstance: boolean, msg: TopicX): TopicX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TopicX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TopicX;
      static deserializeBinaryFromReader(message: TopicX, reader: jspb.BinaryReader): TopicX;
    }

    export namespace TopicX {
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

    export class SecurityLabel extends jspb.Message {
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

      clearNumberList(): void;
      getNumberList(): Array<proto_r4_core_datatypes_pb.UnsignedInt>;
      setNumberList(value: Array<proto_r4_core_datatypes_pb.UnsignedInt>): void;
      addNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt, index?: number): proto_r4_core_datatypes_pb.UnsignedInt;

      hasClassification(): boolean;
      clearClassification(): void;
      getClassification(): proto_r4_core_datatypes_pb.Coding | undefined;
      setClassification(value?: proto_r4_core_datatypes_pb.Coding): void;

      clearCategoryList(): void;
      getCategoryList(): Array<proto_r4_core_datatypes_pb.Coding>;
      setCategoryList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
      addCategory(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

      clearControlList(): void;
      getControlList(): Array<proto_r4_core_datatypes_pb.Coding>;
      setControlList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
      addControl(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SecurityLabel.AsObject;
      static toObject(includeInstance: boolean, msg: SecurityLabel): SecurityLabel.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SecurityLabel, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SecurityLabel;
      static deserializeBinaryFromReader(message: SecurityLabel, reader: jspb.BinaryReader): SecurityLabel;
    }

    export namespace SecurityLabel {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        numberList: Array<proto_r4_core_datatypes_pb.UnsignedInt.AsObject>,
        classification?: proto_r4_core_datatypes_pb.Coding.AsObject,
        categoryList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
        controlList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      }
    }

    export class ContractOffer extends jspb.Message {
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

      clearIdentifierList(): void;
      getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
      setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
      addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

      clearPartyList(): void;
      getPartyList(): Array<Contract.Term.ContractOffer.ContractParty>;
      setPartyList(value: Array<Contract.Term.ContractOffer.ContractParty>): void;
      addParty(value?: Contract.Term.ContractOffer.ContractParty, index?: number): Contract.Term.ContractOffer.ContractParty;

      hasTopic(): boolean;
      clearTopic(): void;
      getTopic(): proto_r4_core_datatypes_pb.Reference | undefined;
      setTopic(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDecision(): boolean;
      clearDecision(): void;
      getDecision(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setDecision(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearDecisionModeList(): void;
      getDecisionModeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setDecisionModeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addDecisionMode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearAnswerList(): void;
      getAnswerList(): Array<Contract.Term.ContractOffer.Answer>;
      setAnswerList(value: Array<Contract.Term.ContractOffer.Answer>): void;
      addAnswer(value?: Contract.Term.ContractOffer.Answer, index?: number): Contract.Term.ContractOffer.Answer;

      hasText(): boolean;
      clearText(): void;
      getText(): proto_r4_core_datatypes_pb.String | undefined;
      setText(value?: proto_r4_core_datatypes_pb.String): void;

      clearLinkIdList(): void;
      getLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearSecurityLabelNumberList(): void;
      getSecurityLabelNumberList(): Array<proto_r4_core_datatypes_pb.UnsignedInt>;
      setSecurityLabelNumberList(value: Array<proto_r4_core_datatypes_pb.UnsignedInt>): void;
      addSecurityLabelNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt, index?: number): proto_r4_core_datatypes_pb.UnsignedInt;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContractOffer.AsObject;
      static toObject(includeInstance: boolean, msg: ContractOffer): ContractOffer.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContractOffer, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContractOffer;
      static deserializeBinaryFromReader(message: ContractOffer, reader: jspb.BinaryReader): ContractOffer;
    }

    export namespace ContractOffer {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
        partyList: Array<Contract.Term.ContractOffer.ContractParty.AsObject>,
        topic?: proto_r4_core_datatypes_pb.Reference.AsObject,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        decision?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        decisionModeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        answerList: Array<Contract.Term.ContractOffer.Answer.AsObject>,
        text?: proto_r4_core_datatypes_pb.String.AsObject,
        linkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        securityLabelNumberList: Array<proto_r4_core_datatypes_pb.UnsignedInt.AsObject>,
      }

      export class ContractParty extends jspb.Message {
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

        clearReferenceList(): void;
        getReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
        setReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
        addReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

        hasRole(): boolean;
        clearRole(): void;
        getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ContractParty.AsObject;
        static toObject(includeInstance: boolean, msg: ContractParty): ContractParty.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ContractParty, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ContractParty;
        static deserializeBinaryFromReader(message: ContractParty, reader: jspb.BinaryReader): ContractParty;
      }

      export namespace ContractParty {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          referenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
          role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        }
      }

      export class Answer extends jspb.Message {
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

        hasValue(): boolean;
        clearValue(): void;
        getValue(): Contract.Term.ContractOffer.Answer.ValueX | undefined;
        setValue(value?: Contract.Term.ContractOffer.Answer.ValueX): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Answer.AsObject;
        static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Answer;
        static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
      }

      export namespace Answer {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          value?: Contract.Term.ContractOffer.Answer.ValueX.AsObject,
        }

        export class ValueX extends jspb.Message {
          hasBoolean(): boolean;
          clearBoolean(): void;
          getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
          setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

          hasDecimal(): boolean;
          clearDecimal(): void;
          getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
          setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

          hasInteger(): boolean;
          clearInteger(): void;
          getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
          setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

          hasDate(): boolean;
          clearDate(): void;
          getDate(): proto_r4_core_datatypes_pb.Date | undefined;
          setDate(value?: proto_r4_core_datatypes_pb.Date): void;

          hasDateTime(): boolean;
          clearDateTime(): void;
          getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
          setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

          hasTime(): boolean;
          clearTime(): void;
          getTime(): proto_r4_core_datatypes_pb.Time | undefined;
          setTime(value?: proto_r4_core_datatypes_pb.Time): void;

          hasStringValue(): boolean;
          clearStringValue(): void;
          getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
          setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

          hasUri(): boolean;
          clearUri(): void;
          getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
          setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

          hasAttachment(): boolean;
          clearAttachment(): void;
          getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
          setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

          hasCoding(): boolean;
          clearCoding(): void;
          getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
          setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

          hasQuantity(): boolean;
          clearQuantity(): void;
          getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
          setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

          hasReference(): boolean;
          clearReference(): void;
          getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
          setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

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
            pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
            decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
            integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
            date?: proto_r4_core_datatypes_pb.Date.AsObject,
            dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
            time?: proto_r4_core_datatypes_pb.Time.AsObject,
            stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
            uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
            attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
            coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
            quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
            reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
          }

          export enum ChoiceCase {
            CHOICE_NOT_SET = 0,
            BOOLEAN = 1,
            DECIMAL = 2,
            INTEGER = 3,
            DATE = 4,
            DATE_TIME = 5,
            TIME = 6,
            STRING_VALUE = 7,
            URI = 8,
            ATTACHMENT = 9,
            CODING = 10,
            QUANTITY = 11,
            REFERENCE = 12,
          }
        }
      }
    }

    export class ContractAsset extends jspb.Message {
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

      hasScope(): boolean;
      clearScope(): void;
      getScope(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setScope(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearTypeList(): void;
      getTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearTypeReferenceList(): void;
      getTypeReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setTypeReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addTypeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearSubtypeList(): void;
      getSubtypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setSubtypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addSubtype(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasRelationship(): boolean;
      clearRelationship(): void;
      getRelationship(): proto_r4_core_datatypes_pb.Coding | undefined;
      setRelationship(value?: proto_r4_core_datatypes_pb.Coding): void;

      clearContextList(): void;
      getContextList(): Array<Contract.Term.ContractAsset.AssetContext>;
      setContextList(value: Array<Contract.Term.ContractAsset.AssetContext>): void;
      addContext(value?: Contract.Term.ContractAsset.AssetContext, index?: number): Contract.Term.ContractAsset.AssetContext;

      hasCondition(): boolean;
      clearCondition(): void;
      getCondition(): proto_r4_core_datatypes_pb.String | undefined;
      setCondition(value?: proto_r4_core_datatypes_pb.String): void;

      clearPeriodTypeList(): void;
      getPeriodTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setPeriodTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addPeriodType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearPeriodList(): void;
      getPeriodList(): Array<proto_r4_core_datatypes_pb.Period>;
      setPeriodList(value: Array<proto_r4_core_datatypes_pb.Period>): void;
      addPeriod(value?: proto_r4_core_datatypes_pb.Period, index?: number): proto_r4_core_datatypes_pb.Period;

      clearUsePeriodList(): void;
      getUsePeriodList(): Array<proto_r4_core_datatypes_pb.Period>;
      setUsePeriodList(value: Array<proto_r4_core_datatypes_pb.Period>): void;
      addUsePeriod(value?: proto_r4_core_datatypes_pb.Period, index?: number): proto_r4_core_datatypes_pb.Period;

      hasText(): boolean;
      clearText(): void;
      getText(): proto_r4_core_datatypes_pb.String | undefined;
      setText(value?: proto_r4_core_datatypes_pb.String): void;

      clearLinkIdList(): void;
      getLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearAnswerList(): void;
      getAnswerList(): Array<Contract.Term.ContractOffer.Answer>;
      setAnswerList(value: Array<Contract.Term.ContractOffer.Answer>): void;
      addAnswer(value?: Contract.Term.ContractOffer.Answer, index?: number): Contract.Term.ContractOffer.Answer;

      clearSecurityLabelNumberList(): void;
      getSecurityLabelNumberList(): Array<proto_r4_core_datatypes_pb.UnsignedInt>;
      setSecurityLabelNumberList(value: Array<proto_r4_core_datatypes_pb.UnsignedInt>): void;
      addSecurityLabelNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt, index?: number): proto_r4_core_datatypes_pb.UnsignedInt;

      clearValuedItemList(): void;
      getValuedItemList(): Array<Contract.Term.ContractAsset.ValuedItem>;
      setValuedItemList(value: Array<Contract.Term.ContractAsset.ValuedItem>): void;
      addValuedItem(value?: Contract.Term.ContractAsset.ValuedItem, index?: number): Contract.Term.ContractAsset.ValuedItem;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContractAsset.AsObject;
      static toObject(includeInstance: boolean, msg: ContractAsset): ContractAsset.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContractAsset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContractAsset;
      static deserializeBinaryFromReader(message: ContractAsset, reader: jspb.BinaryReader): ContractAsset;
    }

    export namespace ContractAsset {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        scope?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        typeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        typeReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        subtypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        relationship?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contextList: Array<Contract.Term.ContractAsset.AssetContext.AsObject>,
        condition?: proto_r4_core_datatypes_pb.String.AsObject,
        periodTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        periodList: Array<proto_r4_core_datatypes_pb.Period.AsObject>,
        usePeriodList: Array<proto_r4_core_datatypes_pb.Period.AsObject>,
        text?: proto_r4_core_datatypes_pb.String.AsObject,
        linkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        answerList: Array<Contract.Term.ContractOffer.Answer.AsObject>,
        securityLabelNumberList: Array<proto_r4_core_datatypes_pb.UnsignedInt.AsObject>,
        valuedItemList: Array<Contract.Term.ContractAsset.ValuedItem.AsObject>,
      }

      export class AssetContext extends jspb.Message {
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

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        clearCodeList(): void;
        getCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
        setCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
        addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

        hasText(): boolean;
        clearText(): void;
        getText(): proto_r4_core_datatypes_pb.String | undefined;
        setText(value?: proto_r4_core_datatypes_pb.String): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AssetContext.AsObject;
        static toObject(includeInstance: boolean, msg: AssetContext): AssetContext.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AssetContext, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AssetContext;
        static deserializeBinaryFromReader(message: AssetContext, reader: jspb.BinaryReader): AssetContext;
      }

      export namespace AssetContext {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
          codeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
          text?: proto_r4_core_datatypes_pb.String.AsObject,
        }
      }

      export class ValuedItem extends jspb.Message {
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

        hasEntity(): boolean;
        clearEntity(): void;
        getEntity(): Contract.Term.ContractAsset.ValuedItem.EntityX | undefined;
        setEntity(value?: Contract.Term.ContractAsset.ValuedItem.EntityX): void;

        hasIdentifier(): boolean;
        clearIdentifier(): void;
        getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
        setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

        hasEffectiveTime(): boolean;
        clearEffectiveTime(): void;
        getEffectiveTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
        setEffectiveTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasUnitPrice(): boolean;
        clearUnitPrice(): void;
        getUnitPrice(): proto_r4_core_datatypes_pb.Money | undefined;
        setUnitPrice(value?: proto_r4_core_datatypes_pb.Money): void;

        hasFactor(): boolean;
        clearFactor(): void;
        getFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
        setFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

        hasPoints(): boolean;
        clearPoints(): void;
        getPoints(): proto_r4_core_datatypes_pb.Decimal | undefined;
        setPoints(value?: proto_r4_core_datatypes_pb.Decimal): void;

        hasNet(): boolean;
        clearNet(): void;
        getNet(): proto_r4_core_datatypes_pb.Money | undefined;
        setNet(value?: proto_r4_core_datatypes_pb.Money): void;

        hasPayment(): boolean;
        clearPayment(): void;
        getPayment(): proto_r4_core_datatypes_pb.String | undefined;
        setPayment(value?: proto_r4_core_datatypes_pb.String): void;

        hasPaymentDate(): boolean;
        clearPaymentDate(): void;
        getPaymentDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
        setPaymentDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

        hasResponsible(): boolean;
        clearResponsible(): void;
        getResponsible(): proto_r4_core_datatypes_pb.Reference | undefined;
        setResponsible(value?: proto_r4_core_datatypes_pb.Reference): void;

        hasRecipient(): boolean;
        clearRecipient(): void;
        getRecipient(): proto_r4_core_datatypes_pb.Reference | undefined;
        setRecipient(value?: proto_r4_core_datatypes_pb.Reference): void;

        clearLinkIdList(): void;
        getLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
        setLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
        addLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

        clearSecurityLabelNumberList(): void;
        getSecurityLabelNumberList(): Array<proto_r4_core_datatypes_pb.UnsignedInt>;
        setSecurityLabelNumberList(value: Array<proto_r4_core_datatypes_pb.UnsignedInt>): void;
        addSecurityLabelNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt, index?: number): proto_r4_core_datatypes_pb.UnsignedInt;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ValuedItem.AsObject;
        static toObject(includeInstance: boolean, msg: ValuedItem): ValuedItem.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ValuedItem, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ValuedItem;
        static deserializeBinaryFromReader(message: ValuedItem, reader: jspb.BinaryReader): ValuedItem;
      }

      export namespace ValuedItem {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          entity?: Contract.Term.ContractAsset.ValuedItem.EntityX.AsObject,
          identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
          effectiveTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          unitPrice?: proto_r4_core_datatypes_pb.Money.AsObject,
          factor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          points?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          net?: proto_r4_core_datatypes_pb.Money.AsObject,
          payment?: proto_r4_core_datatypes_pb.String.AsObject,
          paymentDate?: proto_r4_core_datatypes_pb.DateTime.AsObject,
          responsible?: proto_r4_core_datatypes_pb.Reference.AsObject,
          recipient?: proto_r4_core_datatypes_pb.Reference.AsObject,
          linkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
          securityLabelNumberList: Array<proto_r4_core_datatypes_pb.UnsignedInt.AsObject>,
        }

        export class EntityX extends jspb.Message {
          hasCodeableConcept(): boolean;
          clearCodeableConcept(): void;
          getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          hasReference(): boolean;
          clearReference(): void;
          getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
          setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

          getChoiceCase(): EntityX.ChoiceCase;
          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): EntityX.AsObject;
          static toObject(includeInstance: boolean, msg: EntityX): EntityX.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: EntityX, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): EntityX;
          static deserializeBinaryFromReader(message: EntityX, reader: jspb.BinaryReader): EntityX;
        }

        export namespace EntityX {
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
      }
    }

    export class Action extends jspb.Message {
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

      hasDoNotPerform(): boolean;
      clearDoNotPerform(): void;
      getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearSubjectList(): void;
      getSubjectList(): Array<Contract.Term.Action.ActionSubject>;
      setSubjectList(value: Array<Contract.Term.Action.ActionSubject>): void;
      addSubject(value?: Contract.Term.Action.ActionSubject, index?: number): Contract.Term.Action.ActionSubject;

      hasIntent(): boolean;
      clearIntent(): void;
      getIntent(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setIntent(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearLinkIdList(): void;
      getLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasContext(): boolean;
      clearContext(): void;
      getContext(): proto_r4_core_datatypes_pb.Reference | undefined;
      setContext(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearContextLinkIdList(): void;
      getContextLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setContextLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addContextLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      hasOccurrence(): boolean;
      clearOccurrence(): void;
      getOccurrence(): Contract.Term.Action.OccurrenceX | undefined;
      setOccurrence(value?: Contract.Term.Action.OccurrenceX): void;

      clearRequesterList(): void;
      getRequesterList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setRequesterList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addRequester(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearRequesterLinkIdList(): void;
      getRequesterLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setRequesterLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addRequesterLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearPerformerTypeList(): void;
      getPerformerTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setPerformerTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      hasPerformerRole(): boolean;
      clearPerformerRole(): void;
      getPerformerRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setPerformerRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasPerformer(): boolean;
      clearPerformer(): void;
      getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
      setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearPerformerLinkIdList(): void;
      getPerformerLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setPerformerLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addPerformerLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearReasonCodeList(): void;
      getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearReasonReferenceList(): void;
      getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
      setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearReasonList(): void;
      getReasonList(): Array<proto_r4_core_datatypes_pb.String>;
      setReasonList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addReason(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearReasonLinkIdList(): void;
      getReasonLinkIdList(): Array<proto_r4_core_datatypes_pb.String>;
      setReasonLinkIdList(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addReasonLinkId(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      clearNoteList(): void;
      getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
      setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
      addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

      clearSecurityLabelNumberList(): void;
      getSecurityLabelNumberList(): Array<proto_r4_core_datatypes_pb.UnsignedInt>;
      setSecurityLabelNumberList(value: Array<proto_r4_core_datatypes_pb.UnsignedInt>): void;
      addSecurityLabelNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt, index?: number): proto_r4_core_datatypes_pb.UnsignedInt;

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
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        subjectList: Array<Contract.Term.Action.ActionSubject.AsObject>,
        intent?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        linkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        status?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        context?: proto_r4_core_datatypes_pb.Reference.AsObject,
        contextLinkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        occurrence?: Contract.Term.Action.OccurrenceX.AsObject,
        requesterList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        requesterLinkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        performerTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        performerRole?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
        performerLinkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        reasonList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        reasonLinkIdList: Array<proto_r4_core_datatypes_pb.String.AsObject>,
        noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
        securityLabelNumberList: Array<proto_r4_core_datatypes_pb.UnsignedInt.AsObject>,
      }

      export class ActionSubject extends jspb.Message {
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

        clearReferenceList(): void;
        getReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
        setReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
        addReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

        hasRole(): boolean;
        clearRole(): void;
        getRole(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setRole(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ActionSubject.AsObject;
        static toObject(includeInstance: boolean, msg: ActionSubject): ActionSubject.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ActionSubject, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ActionSubject;
        static deserializeBinaryFromReader(message: ActionSubject, reader: jspb.BinaryReader): ActionSubject;
      }

      export namespace ActionSubject {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          referenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
          role?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        }
      }

      export class OccurrenceX extends jspb.Message {
        hasDateTime(): boolean;
        clearDateTime(): void;
        getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
        setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
        setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

        hasTiming(): boolean;
        clearTiming(): void;
        getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
        setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

        getChoiceCase(): OccurrenceX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OccurrenceX.AsObject;
        static toObject(includeInstance: boolean, msg: OccurrenceX): OccurrenceX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OccurrenceX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OccurrenceX;
        static deserializeBinaryFromReader(message: OccurrenceX, reader: jspb.BinaryReader): OccurrenceX;
      }

      export namespace OccurrenceX {
        export type AsObject = {
          dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
          period?: proto_r4_core_datatypes_pb.Period.AsObject,
          timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          DATE_TIME = 1,
          PERIOD = 2,
          TIMING = 3,
        }
      }
    }
  }

  export class Signatory extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.Coding | undefined;
    setType(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_r4_core_datatypes_pb.Reference | undefined;
    setParty(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearSignatureList(): void;
    getSignatureList(): Array<proto_r4_core_datatypes_pb.Signature>;
    setSignatureList(value: Array<proto_r4_core_datatypes_pb.Signature>): void;
    addSignature(value?: proto_r4_core_datatypes_pb.Signature, index?: number): proto_r4_core_datatypes_pb.Signature;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Signatory.AsObject;
    static toObject(includeInstance: boolean, msg: Signatory): Signatory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Signatory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Signatory;
    static deserializeBinaryFromReader(message: Signatory, reader: jspb.BinaryReader): Signatory;
  }

  export namespace Signatory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.Coding.AsObject,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
      signatureList: Array<proto_r4_core_datatypes_pb.Signature.AsObject>,
    }
  }

  export class FriendlyLanguage extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Contract.FriendlyLanguage.ContentX | undefined;
    setContent(value?: Contract.FriendlyLanguage.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FriendlyLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: FriendlyLanguage): FriendlyLanguage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FriendlyLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FriendlyLanguage;
    static deserializeBinaryFromReader(message: FriendlyLanguage, reader: jspb.BinaryReader): FriendlyLanguage;
  }

  export namespace FriendlyLanguage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: Contract.FriendlyLanguage.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        ATTACHMENT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class LegalLanguage extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Contract.LegalLanguage.ContentX | undefined;
    setContent(value?: Contract.LegalLanguage.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegalLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: LegalLanguage): LegalLanguage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegalLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegalLanguage;
    static deserializeBinaryFromReader(message: LegalLanguage, reader: jspb.BinaryReader): LegalLanguage;
  }

  export namespace LegalLanguage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: Contract.LegalLanguage.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        ATTACHMENT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class ComputableLanguage extends jspb.Message {
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

    hasContent(): boolean;
    clearContent(): void;
    getContent(): Contract.ComputableLanguage.ContentX | undefined;
    setContent(value?: Contract.ComputableLanguage.ContentX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ComputableLanguage.AsObject;
    static toObject(includeInstance: boolean, msg: ComputableLanguage): ComputableLanguage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ComputableLanguage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ComputableLanguage;
    static deserializeBinaryFromReader(message: ComputableLanguage, reader: jspb.BinaryReader): ComputableLanguage;
  }

  export namespace ComputableLanguage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      content?: Contract.ComputableLanguage.ContentX.AsObject,
    }

    export class ContentX extends jspb.Message {
      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ContentX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ContentX.AsObject;
      static toObject(includeInstance: boolean, msg: ContentX): ContentX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ContentX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ContentX;
      static deserializeBinaryFromReader(message: ContentX, reader: jspb.BinaryReader): ContentX;
    }

    export namespace ContentX {
      export type AsObject = {
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        ATTACHMENT = 1,
        REFERENCE = 2,
      }
    }
  }

  export class LegallyBindingX extends jspb.Message {
    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): LegallyBindingX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LegallyBindingX.AsObject;
    static toObject(includeInstance: boolean, msg: LegallyBindingX): LegallyBindingX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LegallyBindingX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LegallyBindingX;
    static deserializeBinaryFromReader(message: LegallyBindingX, reader: jspb.BinaryReader): LegallyBindingX;
  }

  export namespace LegallyBindingX {
    export type AsObject = {
      attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      ATTACHMENT = 1,
      REFERENCE = 2,
    }
  }
}

