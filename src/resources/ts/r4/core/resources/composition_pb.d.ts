// package: google.fhir.r4.core
// file: proto/r4/core/resources/composition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class Composition extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Composition.StatusCode | undefined;
  setStatus(value?: Composition.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearAuthorList(): void;
  getAuthorList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAuthorList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasConfidentiality(): boolean;
  clearConfidentiality(): void;
  getConfidentiality(): Composition.ConfidentialityCode | undefined;
  setConfidentiality(value?: Composition.ConfidentialityCode): void;

  clearAttesterList(): void;
  getAttesterList(): Array<Composition.Attester>;
  setAttesterList(value: Array<Composition.Attester>): void;
  addAttester(value?: Composition.Attester, index?: number): Composition.Attester;

  hasCustodian(): boolean;
  clearCustodian(): void;
  getCustodian(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCustodian(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRelatesToList(): void;
  getRelatesToList(): Array<Composition.RelatesTo>;
  setRelatesToList(value: Array<Composition.RelatesTo>): void;
  addRelatesTo(value?: Composition.RelatesTo, index?: number): Composition.RelatesTo;

  clearEventList(): void;
  getEventList(): Array<Composition.Event>;
  setEventList(value: Array<Composition.Event>): void;
  addEvent(value?: Composition.Event, index?: number): Composition.Event;

  clearSectionList(): void;
  getSectionList(): Array<Composition.Section>;
  setSectionList(value: Array<Composition.Section>): void;
  addSection(value?: Composition.Section, index?: number): Composition.Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Composition.AsObject;
  static toObject(includeInstance: boolean, msg: Composition): Composition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Composition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Composition;
  static deserializeBinaryFromReader(message: Composition, reader: jspb.BinaryReader): Composition;
}

export namespace Composition {
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
    status?: Composition.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    authorList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    confidentiality?: Composition.ConfidentialityCode.AsObject,
    attesterList: Array<Composition.Attester.AsObject>,
    custodian?: proto_r4_core_datatypes_pb.Reference.AsObject,
    relatesToList: Array<Composition.RelatesTo.AsObject>,
    eventList: Array<Composition.Event.AsObject>,
    sectionList: Array<Composition.Section.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ConfidentialityCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConfidentialityCode.AsObject;
    static toObject(includeInstance: boolean, msg: ConfidentialityCode): ConfidentialityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConfidentialityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConfidentialityCode;
    static deserializeBinaryFromReader(message: ConfidentialityCode, reader: jspb.BinaryReader): ConfidentialityCode;
  }

  export namespace ConfidentialityCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.V3ConfidentialityClassificationValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Attester extends jspb.Message {
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

    hasMode(): boolean;
    clearMode(): void;
    getMode(): Composition.Attester.ModeCode | undefined;
    setMode(value?: Composition.Attester.ModeCode): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_r4_core_datatypes_pb.Reference | undefined;
    setParty(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Attester.AsObject;
    static toObject(includeInstance: boolean, msg: Attester): Attester.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Attester, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Attester;
    static deserializeBinaryFromReader(message: Attester, reader: jspb.BinaryReader): Attester;
  }

  export namespace Attester {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      mode?: Composition.Attester.ModeCode.AsObject,
      time?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class ModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ModeCode.AsObject;
      static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ModeCode;
      static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
    }

    export namespace ModeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionAttestationModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class RelatesTo extends jspb.Message {
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
    getCode(): Composition.RelatesTo.CodeType | undefined;
    setCode(value?: Composition.RelatesTo.CodeType): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Composition.RelatesTo.TargetX | undefined;
    setTarget(value?: Composition.RelatesTo.TargetX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatesTo.AsObject;
    static toObject(includeInstance: boolean, msg: RelatesTo): RelatesTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatesTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatesTo;
    static deserializeBinaryFromReader(message: RelatesTo, reader: jspb.BinaryReader): RelatesTo;
  }

  export namespace RelatesTo {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: Composition.RelatesTo.CodeType.AsObject,
      target?: Composition.RelatesTo.TargetX.AsObject,
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CodeType.AsObject;
      static toObject(includeInstance: boolean, msg: CodeType): CodeType.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CodeType, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CodeType;
      static deserializeBinaryFromReader(message: CodeType, reader: jspb.BinaryReader): CodeType;
    }

    export namespace CodeType {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class TargetX extends jspb.Message {
      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): TargetX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TargetX.AsObject;
      static toObject(includeInstance: boolean, msg: TargetX): TargetX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TargetX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TargetX;
      static deserializeBinaryFromReader(message: TargetX, reader: jspb.BinaryReader): TargetX;
    }

    export namespace TargetX {
      export type AsObject = {
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        IDENTIFIER = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Event extends jspb.Message {
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

    clearCodeList(): void;
    getCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearDetailList(): void;
    getDetailList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setDetailList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addDetail(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Event.AsObject;
    static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Event;
    static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
  }

  export namespace Event {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      codeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      detailList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Section extends jspb.Message {
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

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): proto_r4_core_datatypes_pb.String | undefined;
    setTitle(value?: proto_r4_core_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAuthorList(): void;
    getAuthorList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setAuthorList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addAuthor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasFocus(): boolean;
    clearFocus(): void;
    getFocus(): proto_r4_core_datatypes_pb.Reference | undefined;
    setFocus(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.Narrative | undefined;
    setText(value?: proto_r4_core_datatypes_pb.Narrative): void;

    hasMode(): boolean;
    clearMode(): void;
    getMode(): Composition.Section.ModeCode | undefined;
    setMode(value?: Composition.Section.ModeCode): void;

    hasOrderedBy(): boolean;
    clearOrderedBy(): void;
    getOrderedBy(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setOrderedBy(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearEntryList(): void;
    getEntryList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEntryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEntry(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasEmptyReason(): boolean;
    clearEmptyReason(): void;
    getEmptyReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setEmptyReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearSectionList(): void;
    getSectionList(): Array<Composition.Section>;
    setSectionList(value: Array<Composition.Section>): void;
    addSection(value?: Composition.Section, index?: number): Composition.Section;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Section.AsObject;
    static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Section;
    static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
  }

  export namespace Section {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      title?: proto_r4_core_datatypes_pb.String.AsObject,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      authorList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      focus?: proto_r4_core_datatypes_pb.Reference.AsObject,
      text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
      mode?: Composition.Section.ModeCode.AsObject,
      orderedBy?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      entryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      emptyReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      sectionList: Array<Composition.Section.AsObject>,
    }

    export class ModeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ListModeCode.ValueMap[keyof proto_r4_core_codes_pb.ListModeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ListModeCode.ValueMap[keyof proto_r4_core_codes_pb.ListModeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ModeCode.AsObject;
      static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ModeCode;
      static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
    }

    export namespace ModeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ListModeCode.ValueMap[keyof proto_r4_core_codes_pb.ListModeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

