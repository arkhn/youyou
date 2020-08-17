// package: google.fhir.r4.core
// file: proto/r4/core/resources/questionnaire_response.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class QuestionnaireResponse extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasQuestionnaire(): boolean;
  clearQuestionnaire(): void;
  getQuestionnaire(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setQuestionnaire(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): QuestionnaireResponse.StatusCode | undefined;
  setStatus(value?: QuestionnaireResponse.StatusCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAuthored(): boolean;
  clearAuthored(): void;
  getAuthored(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthored(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearItemList(): void;
  getItemList(): Array<QuestionnaireResponse.Item>;
  setItemList(value: Array<QuestionnaireResponse.Item>): void;
  addItem(value?: QuestionnaireResponse.Item, index?: number): QuestionnaireResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponse): QuestionnaireResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponse;
  static deserializeBinaryFromReader(message: QuestionnaireResponse, reader: jspb.BinaryReader): QuestionnaireResponse;
}

export namespace QuestionnaireResponse {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    questionnaire?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    status?: QuestionnaireResponse.StatusCode.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    authored?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    source?: proto_r4_core_datatypes_pb.Reference.AsObject,
    itemList: Array<QuestionnaireResponse.Item.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap[keyof proto_r4_core_codes_pb.QuestionnaireResponseStatusCode.ValueMap],
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

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    clearAnswerList(): void;
    getAnswerList(): Array<QuestionnaireResponse.Item.Answer>;
    setAnswerList(value: Array<QuestionnaireResponse.Item.Answer>): void;
    addAnswer(value?: QuestionnaireResponse.Item.Answer, index?: number): QuestionnaireResponse.Item.Answer;

    clearItemList(): void;
    getItemList(): Array<QuestionnaireResponse.Item>;
    setItemList(value: Array<QuestionnaireResponse.Item>): void;
    addItem(value?: QuestionnaireResponse.Item, index?: number): QuestionnaireResponse.Item;

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
      text?: proto_r4_core_datatypes_pb.String.AsObject,
      answerList: Array<QuestionnaireResponse.Item.Answer.AsObject>,
      itemList: Array<QuestionnaireResponse.Item.AsObject>,
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
      getValue(): QuestionnaireResponse.Item.Answer.ValueX | undefined;
      setValue(value?: QuestionnaireResponse.Item.Answer.ValueX): void;

      clearItemList(): void;
      getItemList(): Array<QuestionnaireResponse.Item>;
      setItemList(value: Array<QuestionnaireResponse.Item>): void;
      addItem(value?: QuestionnaireResponse.Item, index?: number): QuestionnaireResponse.Item;

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
        value?: QuestionnaireResponse.Item.Answer.ValueX.AsObject,
        itemList: Array<QuestionnaireResponse.Item.AsObject>,
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

