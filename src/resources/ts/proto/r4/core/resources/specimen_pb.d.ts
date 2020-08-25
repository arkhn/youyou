// package: google.fhir.r4.core
// file: proto/r4/core/resources/specimen.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Specimen extends jspb.Message {
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

  hasAccessionIdentifier(): boolean;
  clearAccessionIdentifier(): void;
  getAccessionIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setAccessionIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Specimen.StatusCode | undefined;
  setStatus(value?: Specimen.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasReceivedTime(): boolean;
  clearReceivedTime(): void;
  getReceivedTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setReceivedTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearParent(): void;
  getParent(): Array<proto_r4_core_datatypes_pb.Reference>;
  setParent(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addParent(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearRequest(): void;
  getRequest(): Array<proto_r4_core_datatypes_pb.Reference>;
  setRequest(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addRequest(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasCollection(): boolean;
  clearCollection(): void;
  getCollection(): Specimen.Collection | undefined;
  setCollection(value?: Specimen.Collection): void;

  clearProcessing(): void;
  getProcessing(): Array<Specimen.Processing>;
  setProcessing(value: Array<Specimen.Processing>): void;
  addProcessing(value?: Specimen.Processing, index?: number): Specimen.Processing;

  clearContainer(): void;
  getContainer(): Array<Specimen.Container>;
  setContainer(value: Array<Specimen.Container>): void;
  addContainer(value?: Specimen.Container, index?: number): Specimen.Container;

  clearCondition(): void;
  getCondition(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCondition(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCondition(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Specimen.AsObject;
  static toObject(includeInstance: boolean, msg: Specimen): Specimen.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Specimen, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Specimen;
  static deserializeBinaryFromReader(message: Specimen, reader: jspb.BinaryReader): Specimen;
}

export namespace Specimen {
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
    accessionIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    status?: Specimen.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    receivedTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    parent: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    request: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    collection?: Specimen.Collection.AsObject,
    processing: Array<Specimen.Processing.AsObject>,
    container: Array<Specimen.Container.AsObject>,
    condition: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Collection extends jspb.Message {
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

    hasCollector(): boolean;
    clearCollector(): void;
    getCollector(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCollector(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasCollected(): boolean;
    clearCollected(): void;
    getCollected(): Specimen.Collection.CollectedX | undefined;
    setCollected(value?: Specimen.Collection.CollectedX): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasMethod(): boolean;
    clearMethod(): void;
    getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasFastingStatus(): boolean;
    clearFastingStatus(): void;
    getFastingStatus(): Specimen.Collection.FastingStatusX | undefined;
    setFastingStatus(value?: Specimen.Collection.FastingStatusX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Collection.AsObject;
    static toObject(includeInstance: boolean, msg: Collection): Collection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Collection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Collection;
    static deserializeBinaryFromReader(message: Collection, reader: jspb.BinaryReader): Collection;
  }

  export namespace Collection {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      collector?: proto_r4_core_datatypes_pb.Reference.AsObject,
      collected?: Specimen.Collection.CollectedX.AsObject,
      duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      fastingStatus?: Specimen.Collection.FastingStatusX.AsObject,
    }

    export class CollectedX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): CollectedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CollectedX.AsObject;
      static toObject(includeInstance: boolean, msg: CollectedX): CollectedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CollectedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CollectedX;
      static deserializeBinaryFromReader(message: CollectedX, reader: jspb.BinaryReader): CollectedX;
    }

    export namespace CollectedX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
      }
    }

    export class FastingStatusX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      getChoiceCase(): FastingStatusX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): FastingStatusX.AsObject;
      static toObject(includeInstance: boolean, msg: FastingStatusX): FastingStatusX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: FastingStatusX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): FastingStatusX;
      static deserializeBinaryFromReader(message: FastingStatusX, reader: jspb.BinaryReader): FastingStatusX;
    }

    export namespace FastingStatusX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        DURATION = 2,
      }
    }
  }

  export class Processing extends jspb.Message {
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

    hasProcedure(): boolean;
    clearProcedure(): void;
    getProcedure(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setProcedure(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAdditive(): void;
    getAdditive(): Array<proto_r4_core_datatypes_pb.Reference>;
    setAdditive(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addAdditive(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): Specimen.Processing.TimeX | undefined;
    setTime(value?: Specimen.Processing.TimeX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processing.AsObject;
    static toObject(includeInstance: boolean, msg: Processing): Processing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Processing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processing;
    static deserializeBinaryFromReader(message: Processing, reader: jspb.BinaryReader): Processing;
  }

  export namespace Processing {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      procedure?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      additive: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      time?: Specimen.Processing.TimeX.AsObject,
    }

    export class TimeX extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      getChoiceCase(): TimeX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TimeX.AsObject;
      static toObject(includeInstance: boolean, msg: TimeX): TimeX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TimeX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TimeX;
      static deserializeBinaryFromReader(message: TimeX, reader: jspb.BinaryReader): TimeX;
    }

    export namespace TimeX {
      export type AsObject = {
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
      }
    }
  }

  export class Container extends jspb.Message {
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

    clearIdentifier(): void;
    getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
    setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
    addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasCapacity(): boolean;
    clearCapacity(): void;
    getCapacity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setCapacity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasSpecimenQuantity(): boolean;
    clearSpecimenQuantity(): void;
    getSpecimenQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setSpecimenQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasAdditive(): boolean;
    clearAdditive(): void;
    getAdditive(): Specimen.Container.AdditiveX | undefined;
    setAdditive(value?: Specimen.Container.AdditiveX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Container.AsObject;
    static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Container;
    static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
  }

  export namespace Container {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      capacity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      specimenQuantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      additive?: Specimen.Container.AdditiveX.AsObject,
    }

    export class AdditiveX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): AdditiveX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AdditiveX.AsObject;
      static toObject(includeInstance: boolean, msg: AdditiveX): AdditiveX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AdditiveX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AdditiveX;
      static deserializeBinaryFromReader(message: AdditiveX, reader: jspb.BinaryReader): AdditiveX;
    }

    export namespace AdditiveX {
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

