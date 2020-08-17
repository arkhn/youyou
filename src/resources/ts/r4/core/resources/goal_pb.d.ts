// package: google.fhir.r4.core
// file: proto/r4/core/resources/goal.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Goal extends jspb.Message {
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

  hasLifecycleStatus(): boolean;
  clearLifecycleStatus(): void;
  getLifecycleStatus(): Goal.LifecycleStatusCode | undefined;
  setLifecycleStatus(value?: Goal.LifecycleStatusCode): void;

  hasAchievementStatus(): boolean;
  clearAchievementStatus(): void;
  getAchievementStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setAchievementStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStart(): boolean;
  clearStart(): void;
  getStart(): Goal.StartX | undefined;
  setStart(value?: Goal.StartX): void;

  clearTargetList(): void;
  getTargetList(): Array<Goal.Target>;
  setTargetList(value: Array<Goal.Target>): void;
  addTarget(value?: Goal.Target, index?: number): Goal.Target;

  hasStatusDate(): boolean;
  clearStatusDate(): void;
  getStatusDate(): proto_r4_core_datatypes_pb.Date | undefined;
  setStatusDate(value?: proto_r4_core_datatypes_pb.Date): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.String | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.String): void;

  hasExpressedBy(): boolean;
  clearExpressedBy(): void;
  getExpressedBy(): proto_r4_core_datatypes_pb.Reference | undefined;
  setExpressedBy(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAddressesList(): void;
  getAddressesList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddressesList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearOutcomeCodeList(): void;
  getOutcomeCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setOutcomeCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addOutcomeCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearOutcomeReferenceList(): void;
  getOutcomeReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setOutcomeReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

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
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    lifecycleStatus?: Goal.LifecycleStatusCode.AsObject,
    achievementStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    start?: Goal.StartX.AsObject,
    targetList: Array<Goal.Target.AsObject>,
    statusDate?: proto_r4_core_datatypes_pb.Date.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.String.AsObject,
    expressedBy?: proto_r4_core_datatypes_pb.Reference.AsObject,
    addressesList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    outcomeCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    outcomeReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class LifecycleStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LifecycleStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: LifecycleStatusCode): LifecycleStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LifecycleStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LifecycleStatusCode;
    static deserializeBinaryFromReader(message: LifecycleStatusCode, reader: jspb.BinaryReader): LifecycleStatusCode;
  }

  export namespace LifecycleStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap[keyof proto_r4_core_codes_pb.GoalLifecycleStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class StartX extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_r4_core_datatypes_pb.Date | undefined;
    setDate(value?: proto_r4_core_datatypes_pb.Date): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    getChoiceCase(): StartX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartX.AsObject;
    static toObject(includeInstance: boolean, msg: StartX): StartX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartX;
    static deserializeBinaryFromReader(message: StartX, reader: jspb.BinaryReader): StartX;
  }

  export namespace StartX {
    export type AsObject = {
      date?: proto_r4_core_datatypes_pb.Date.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class Target extends jspb.Message {
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

    hasMeasure(): boolean;
    clearMeasure(): void;
    getMeasure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMeasure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): Goal.Target.DetailX | undefined;
    setDetail(value?: Goal.Target.DetailX): void;

    hasDue(): boolean;
    clearDue(): void;
    getDue(): Goal.Target.DueX | undefined;
    setDue(value?: Goal.Target.DueX): void;

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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      measure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      detail?: Goal.Target.DetailX.AsObject,
      due?: Goal.Target.DueX.AsObject,
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

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

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
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        RANGE = 2,
        CODEABLE_CONCEPT = 3,
        STRING_VALUE = 4,
        BOOLEAN = 5,
        INTEGER = 6,
        RATIO = 7,
      }
    }

    export class DueX extends jspb.Message {
      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      getChoiceCase(): DueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DueX.AsObject;
      static toObject(includeInstance: boolean, msg: DueX): DueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DueX;
      static deserializeBinaryFromReader(message: DueX, reader: jspb.BinaryReader): DueX;
    }

    export namespace DueX {
      export type AsObject = {
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE = 1,
        DURATION = 2,
      }
    }
  }
}

