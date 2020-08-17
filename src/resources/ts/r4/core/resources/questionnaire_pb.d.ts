// package: google.fhir.r4.core
// file: proto/r4/core/resources/questionnaire.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Questionnaire extends jspb.Message {
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

  clearDerivedFromList(): void;
  getDerivedFromList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setDerivedFromList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Questionnaire.StatusCode | undefined;
  setStatus(value?: Questionnaire.StatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_r4_core_datatypes_pb.Boolean): void;

  clearSubjectTypeList(): void;
  getSubjectTypeList(): Array<Questionnaire.SubjectTypeCode>;
  setSubjectTypeList(value: Array<Questionnaire.SubjectTypeCode>): void;
  addSubjectType(value?: Questionnaire.SubjectTypeCode, index?: number): Questionnaire.SubjectTypeCode;

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

  clearCodeList(): void;
  getCodeList(): Array<proto_r4_core_datatypes_pb.Coding>;
  setCodeList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addCode(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  clearItemList(): void;
  getItemList(): Array<Questionnaire.Item>;
  setItemList(value: Array<Questionnaire.Item>): void;
  addItem(value?: Questionnaire.Item, index?: number): Questionnaire.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Questionnaire.AsObject;
  static toObject(includeInstance: boolean, msg: Questionnaire): Questionnaire.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Questionnaire, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Questionnaire;
  static deserializeBinaryFromReader(message: Questionnaire, reader: jspb.BinaryReader): Questionnaire;
}

export namespace Questionnaire {
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
    derivedFromList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    status?: Questionnaire.StatusCode.AsObject,
    experimental?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    subjectTypeList: Array<Questionnaire.SubjectTypeCode.AsObject>,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    publisher?: proto_r4_core_datatypes_pb.String.AsObject,
    contactList: Array<proto_r4_core_datatypes_pb.ContactDetail.AsObject>,
    description?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    useContextList: Array<proto_r4_core_datatypes_pb.UsageContext.AsObject>,
    jurisdictionList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    copyright?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    approvalDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    lastReviewDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    effectivePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    codeList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
    itemList: Array<Questionnaire.Item.AsObject>,
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

  export class SubjectTypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubjectTypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: SubjectTypeCode): SubjectTypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubjectTypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubjectTypeCode;
    static deserializeBinaryFromReader(message: SubjectTypeCode, reader: jspb.BinaryReader): SubjectTypeCode;
  }

  export namespace SubjectTypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ResourceTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ResourceTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Item extends jspb.Message {
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

    hasLinkId(): boolean;
    clearLinkId(): void;
    getLinkId(): proto_r4_core_datatypes_pb.String | undefined;
    setLinkId(value?: proto_r4_core_datatypes_pb.String): void;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): proto_r4_core_datatypes_pb.Uri | undefined;
    setDefinition(value?: proto_r4_core_datatypes_pb.Uri): void;

    clearCodeList(): void;
    getCodeList(): Array<proto_r4_core_datatypes_pb.Coding>;
    setCodeList(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
    addCode(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

    hasPrefix(): boolean;
    clearPrefix(): void;
    getPrefix(): proto_r4_core_datatypes_pb.String | undefined;
    setPrefix(value?: proto_r4_core_datatypes_pb.String): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): Questionnaire.Item.TypeCode | undefined;
    setType(value?: Questionnaire.Item.TypeCode): void;

    clearEnableWhenList(): void;
    getEnableWhenList(): Array<Questionnaire.Item.EnableWhen>;
    setEnableWhenList(value: Array<Questionnaire.Item.EnableWhen>): void;
    addEnableWhen(value?: Questionnaire.Item.EnableWhen, index?: number): Questionnaire.Item.EnableWhen;

    hasEnableBehavior(): boolean;
    clearEnableBehavior(): void;
    getEnableBehavior(): Questionnaire.Item.EnableBehaviorCode | undefined;
    setEnableBehavior(value?: Questionnaire.Item.EnableBehaviorCode): void;

    hasRequired(): boolean;
    clearRequired(): void;
    getRequired(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setRequired(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasRepeats(): boolean;
    clearRepeats(): void;
    getRepeats(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setRepeats(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasReadOnly(): boolean;
    clearReadOnly(): void;
    getReadOnly(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setReadOnly(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasMaxLength(): boolean;
    clearMaxLength(): void;
    getMaxLength(): proto_r4_core_datatypes_pb.Integer | undefined;
    setMaxLength(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasAnswerValueSet(): boolean;
    clearAnswerValueSet(): void;
    getAnswerValueSet(): proto_r4_core_datatypes_pb.Canonical | undefined;
    setAnswerValueSet(value?: proto_r4_core_datatypes_pb.Canonical): void;

    clearAnswerOptionList(): void;
    getAnswerOptionList(): Array<Questionnaire.Item.AnswerOption>;
    setAnswerOptionList(value: Array<Questionnaire.Item.AnswerOption>): void;
    addAnswerOption(value?: Questionnaire.Item.AnswerOption, index?: number): Questionnaire.Item.AnswerOption;

    clearInitialList(): void;
    getInitialList(): Array<Questionnaire.Item.Initial>;
    setInitialList(value: Array<Questionnaire.Item.Initial>): void;
    addInitial(value?: Questionnaire.Item.Initial, index?: number): Questionnaire.Item.Initial;

    clearItemList(): void;
    getItemList(): Array<Questionnaire.Item>;
    setItemList(value: Array<Questionnaire.Item>): void;
    addItem(value?: Questionnaire.Item, index?: number): Questionnaire.Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      linkId?: proto_r4_core_datatypes_pb.String.AsObject,
      definition?: proto_r4_core_datatypes_pb.Uri.AsObject,
      codeList: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
      prefix?: proto_r4_core_datatypes_pb.String.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: Questionnaire.Item.TypeCode.AsObject,
      enableWhenList: Array<Questionnaire.Item.EnableWhen.AsObject>,
      enableBehavior?: Questionnaire.Item.EnableBehaviorCode.AsObject,
      required?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      repeats?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      readOnly?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      maxLength?: proto_r4_core_datatypes_pb.Integer.AsObject,
      answerValueSet?: proto_r4_core_datatypes_pb.Canonical.AsObject,
      answerOptionList: Array<Questionnaire.Item.AnswerOption.AsObject>,
      initialList: Array<Questionnaire.Item.Initial.AsObject>,
      itemList: Array<Questionnaire.Item.AsObject>,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap]): void;

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
        value: proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class EnableWhen extends jspb.Message {
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

      hasQuestion(): boolean;
      clearQuestion(): void;
      getQuestion(): proto_r4_core_datatypes_pb.String | undefined;
      setQuestion(value?: proto_r4_core_datatypes_pb.String): void;

      hasOperator(): boolean;
      clearOperator(): void;
      getOperator(): Questionnaire.Item.EnableWhen.OperatorCode | undefined;
      setOperator(value?: Questionnaire.Item.EnableWhen.OperatorCode): void;

      hasAnswer(): boolean;
      clearAnswer(): void;
      getAnswer(): Questionnaire.Item.EnableWhen.AnswerX | undefined;
      setAnswer(value?: Questionnaire.Item.EnableWhen.AnswerX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EnableWhen.AsObject;
      static toObject(includeInstance: boolean, msg: EnableWhen): EnableWhen.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EnableWhen, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EnableWhen;
      static deserializeBinaryFromReader(message: EnableWhen, reader: jspb.BinaryReader): EnableWhen;
    }

    export namespace EnableWhen {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        question?: proto_r4_core_datatypes_pb.String.AsObject,
        operator?: Questionnaire.Item.EnableWhen.OperatorCode.AsObject,
        answer?: Questionnaire.Item.EnableWhen.AnswerX.AsObject,
      }

      export class OperatorCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OperatorCode.AsObject;
        static toObject(includeInstance: boolean, msg: OperatorCode): OperatorCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OperatorCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OperatorCode;
        static deserializeBinaryFromReader(message: OperatorCode, reader: jspb.BinaryReader): OperatorCode;
      }

      export namespace OperatorCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireItemOperatorCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class AnswerX extends jspb.Message {
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

        getChoiceCase(): AnswerX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): AnswerX.AsObject;
        static toObject(includeInstance: boolean, msg: AnswerX): AnswerX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: AnswerX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): AnswerX;
        static deserializeBinaryFromReader(message: AnswerX, reader: jspb.BinaryReader): AnswerX;
      }

      export namespace AnswerX {
        export type AsObject = {
          pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
          decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
          integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
          date?: proto_r4_core_datatypes_pb.Date.AsObject,
          dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
          time?: proto_r4_core_datatypes_pb.Time.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
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
          CODING = 8,
          QUANTITY = 9,
          REFERENCE = 10,
        }
      }
    }

    export class EnableBehaviorCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EnableBehaviorCode.AsObject;
      static toObject(includeInstance: boolean, msg: EnableBehaviorCode): EnableBehaviorCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EnableBehaviorCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EnableBehaviorCode;
      static deserializeBinaryFromReader(message: EnableBehaviorCode, reader: jspb.BinaryReader): EnableBehaviorCode;
    }

    export namespace EnableBehaviorCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap[keyof proto_r4_core_codes_pb.EnableWhenBehaviorCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class AnswerOption extends jspb.Message {
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
      getValue(): Questionnaire.Item.AnswerOption.ValueX | undefined;
      setValue(value?: Questionnaire.Item.AnswerOption.ValueX): void;

      hasInitialSelected(): boolean;
      clearInitialSelected(): void;
      getInitialSelected(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setInitialSelected(value?: proto_r4_core_datatypes_pb.Boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AnswerOption.AsObject;
      static toObject(includeInstance: boolean, msg: AnswerOption): AnswerOption.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AnswerOption, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AnswerOption;
      static deserializeBinaryFromReader(message: AnswerOption, reader: jspb.BinaryReader): AnswerOption;
    }

    export namespace AnswerOption {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        value?: Questionnaire.Item.AnswerOption.ValueX.AsObject,
        initialSelected?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      }

      export class ValueX extends jspb.Message {
        hasInteger(): boolean;
        clearInteger(): void;
        getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
        setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

        hasDate(): boolean;
        clearDate(): void;
        getDate(): proto_r4_core_datatypes_pb.Date | undefined;
        setDate(value?: proto_r4_core_datatypes_pb.Date): void;

        hasTime(): boolean;
        clearTime(): void;
        getTime(): proto_r4_core_datatypes_pb.Time | undefined;
        setTime(value?: proto_r4_core_datatypes_pb.Time): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        hasCoding(): boolean;
        clearCoding(): void;
        getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
        setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

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
          integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
          date?: proto_r4_core_datatypes_pb.Date.AsObject,
          time?: proto_r4_core_datatypes_pb.Time.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
          coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
          reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          INTEGER = 1,
          DATE = 2,
          TIME = 3,
          STRING_VALUE = 4,
          CODING = 5,
          REFERENCE = 6,
        }
      }
    }

    export class Initial extends jspb.Message {
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
      getValue(): Questionnaire.Item.Initial.ValueX | undefined;
      setValue(value?: Questionnaire.Item.Initial.ValueX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Initial.AsObject;
      static toObject(includeInstance: boolean, msg: Initial): Initial.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Initial, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Initial;
      static deserializeBinaryFromReader(message: Initial, reader: jspb.BinaryReader): Initial;
    }

    export namespace Initial {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        value?: Questionnaire.Item.Initial.ValueX.AsObject,
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
}

