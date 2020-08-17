// package: google.fhir.r4.core
// file: proto/r4/core/resources/task.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class Task extends jspb.Message {
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

  hasInstantiatesCanonical(): boolean;
  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasInstantiatesUri(): boolean;
  clearInstantiatesUri(): void;
  getInstantiatesUri(): proto_r4_core_datatypes_pb.Uri | undefined;
  setInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri): void;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearPartOfList(): void;
  getPartOfList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOfList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Task.StatusCode | undefined;
  setStatus(value?: Task.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasBusinessStatus(): boolean;
  clearBusinessStatus(): void;
  getBusinessStatus(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBusinessStatus(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): Task.IntentCode | undefined;
  setIntent(value?: Task.IntentCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): Task.PriorityCode | undefined;
  setPriority(value?: Task.PriorityCode): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasFocus(): boolean;
  clearFocus(): void;
  getFocus(): proto_r4_core_datatypes_pb.Reference | undefined;
  setFocus(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasForValue(): boolean;
  clearForValue(): void;
  getForValue(): proto_r4_core_datatypes_pb.Reference | undefined;
  setForValue(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasExecutionPeriod(): boolean;
  clearExecutionPeriod(): void;
  getExecutionPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setExecutionPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasLastModified(): boolean;
  clearLastModified(): void;
  getLastModified(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setLastModified(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearPerformerTypeList(): void;
  getPerformerTypeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setPerformerTypeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReasonCode(): boolean;
  clearReasonCode(): void;
  getReasonCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasReasonReference(): boolean;
  clearReasonReference(): void;
  getReasonReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReasonReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearRelevantHistoryList(): void;
  getRelevantHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRelevantHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasRestriction(): boolean;
  clearRestriction(): void;
  getRestriction(): Task.Restriction | undefined;
  setRestriction(value?: Task.Restriction): void;

  clearInputList(): void;
  getInputList(): Array<Task.Parameter>;
  setInputList(value: Array<Task.Parameter>): void;
  addInput(value?: Task.Parameter, index?: number): Task.Parameter;

  clearOutputList(): void;
  getOutputList(): Array<Task.Output>;
  setOutputList(value: Array<Task.Output>): void;
  addOutput(value?: Task.Output, index?: number): Task.Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
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
    instantiatesCanonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    instantiatesUri?: proto_r4_core_datatypes_pb.Uri.AsObject,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    partOfList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: Task.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    businessStatus?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    intent?: Task.IntentCode.AsObject,
    priority?: Task.PriorityCode.AsObject,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    focus?: proto_r4_core_datatypes_pb.Reference.AsObject,
    forValue?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    executionPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    lastModified?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerTypeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    reasonReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    relevantHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    restriction?: Task.Restriction.AsObject,
    inputList: Array<Task.Parameter.AsObject>,
    outputList: Array<Task.Output.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.TaskStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TaskStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.TaskStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TaskStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.TaskStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TaskStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.TaskIntentValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Restriction extends jspb.Message {
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

    hasRepetitions(): boolean;
    clearRepetitions(): void;
    getRepetitions(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setRepetitions(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    clearRecipientList(): void;
    getRecipientList(): Array<proto_r4_core_datatypes_pb.Reference>;
    setRecipientList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addRecipient(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Restriction.AsObject;
    static toObject(includeInstance: boolean, msg: Restriction): Restriction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Restriction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Restriction;
    static deserializeBinaryFromReader(message: Restriction, reader: jspb.BinaryReader): Restriction;
  }

  export namespace Restriction {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      repetitions?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      recipientList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Parameter extends jspb.Message {
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

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Task.Parameter.ValueX | undefined;
    setValue(value?: Task.Parameter.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: Task.Parameter.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.Id | undefined;
      setId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
      setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
      setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Count | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
      setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
      setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
      setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
      setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
      setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
      setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

      hasMeta(): boolean;
      clearMeta(): void;
      getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
      setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

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
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        id?: proto_r4_core_datatypes_pb.Id.AsObject,
        instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
        url?: proto_r4_core_datatypes_pb.Url.AsObject,
        uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
        count?: proto_r4_core_datatypes_pb.Count.AsObject,
        distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
        contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
        relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
        usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
        dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
        meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BASE64_BINARY = 1,
        BOOLEAN = 2,
        CANONICAL = 3,
        CODE = 4,
        DATE = 5,
        DATE_TIME = 6,
        DECIMAL = 7,
        ID = 8,
        INSTANT = 9,
        INTEGER = 10,
        MARKDOWN = 11,
        OID = 12,
        POSITIVE_INT = 13,
        STRING_VALUE = 14,
        TIME = 15,
        UNSIGNED_INT = 16,
        URI = 17,
        URL = 18,
        UUID = 19,
        ADDRESS = 20,
        AGE = 21,
        ANNOTATION = 22,
        ATTACHMENT = 23,
        CODEABLE_CONCEPT = 24,
        CODING = 25,
        CONTACT_POINT = 26,
        COUNT = 27,
        DISTANCE = 28,
        DURATION = 29,
        HUMAN_NAME = 30,
        IDENTIFIER = 31,
        MONEY = 32,
        PERIOD = 33,
        QUANTITY = 34,
        RANGE = 35,
        RATIO = 36,
        REFERENCE = 37,
        SAMPLED_DATA = 38,
        SIGNATURE = 39,
        TIMING = 40,
        CONTACT_DETAIL = 41,
        CONTRIBUTOR = 42,
        DATA_REQUIREMENT = 43,
        EXPRESSION = 44,
        PARAMETER_DEFINITION = 45,
        RELATED_ARTIFACT = 46,
        TRIGGER_DEFINITION = 47,
        USAGE_CONTEXT = 48,
        DOSAGE = 49,
        META = 50,
      }
    }
  }

  export class Output extends jspb.Message {
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

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Task.Output.ValueX | undefined;
    setValue(value?: Task.Output.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: Task.Output.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.Id | undefined;
      setId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
      setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
      setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Count | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
      setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
      setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
      setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
      setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
      setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
      setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

      hasMeta(): boolean;
      clearMeta(): void;
      getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
      setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

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
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        id?: proto_r4_core_datatypes_pb.Id.AsObject,
        instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
        url?: proto_r4_core_datatypes_pb.Url.AsObject,
        uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
        count?: proto_r4_core_datatypes_pb.Count.AsObject,
        distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
        contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
        relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
        usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
        dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
        meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BASE64_BINARY = 1,
        BOOLEAN = 2,
        CANONICAL = 3,
        CODE = 4,
        DATE = 5,
        DATE_TIME = 6,
        DECIMAL = 7,
        ID = 8,
        INSTANT = 9,
        INTEGER = 10,
        MARKDOWN = 11,
        OID = 12,
        POSITIVE_INT = 13,
        STRING_VALUE = 14,
        TIME = 15,
        UNSIGNED_INT = 16,
        URI = 17,
        URL = 18,
        UUID = 19,
        ADDRESS = 20,
        AGE = 21,
        ANNOTATION = 22,
        ATTACHMENT = 23,
        CODEABLE_CONCEPT = 24,
        CODING = 25,
        CONTACT_POINT = 26,
        COUNT = 27,
        DISTANCE = 28,
        DURATION = 29,
        HUMAN_NAME = 30,
        IDENTIFIER = 31,
        MONEY = 32,
        PERIOD = 33,
        QUANTITY = 34,
        RANGE = 35,
        RATIO = 36,
        REFERENCE = 37,
        SAMPLED_DATA = 38,
        SIGNATURE = 39,
        TIMING = 40,
        CONTACT_DETAIL = 41,
        CONTRIBUTOR = 42,
        DATA_REQUIREMENT = 43,
        EXPRESSION = 44,
        PARAMETER_DEFINITION = 45,
        RELATED_ARTIFACT = 46,
        TRIGGER_DEFINITION = 47,
        USAGE_CONTEXT = 48,
        DOSAGE = 49,
        META = 50,
      }
    }
  }
}

