// package: google.fhir.r4.core
// file: proto/r4/core/resources/observation.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Observation extends jspb.Message {
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

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Observation.StatusCode | undefined;
  setStatus(value?: Observation.StatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearFocus(): void;
  getFocus(): Array<proto_r4_core_datatypes_pb.Reference>;
  setFocus(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addFocus(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Observation.EffectiveX | undefined;
  setEffective(value?: Observation.EffectiveX): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Observation.ValueX | undefined;
  setValue(value?: Observation.ValueX): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInterpretation(): void;
  getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Observation.ReferenceRange>;
  setReferenceRange(value: Array<Observation.ReferenceRange>): void;
  addReferenceRange(value?: Observation.ReferenceRange, index?: number): Observation.ReferenceRange;

  clearHasMember(): void;
  getHasMember(): Array<proto_r4_core_datatypes_pb.Reference>;
  setHasMember(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addHasMember(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearDerivedFrom(): void;
  getDerivedFrom(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDerivedFrom(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDerivedFrom(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearComponent(): void;
  getComponent(): Array<Observation.Component>;
  setComponent(value: Array<Observation.Component>): void;
  addComponent(value?: Observation.Component, index?: number): Observation.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Observation.AsObject;
  static toObject(includeInstance: boolean, msg: Observation): Observation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Observation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Observation;
  static deserializeBinaryFromReader(message: Observation, reader: jspb.BinaryReader): Observation;
}

export namespace Observation {
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
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: Observation.StatusCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    focus: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    effective?: Observation.EffectiveX.AsObject,
    issued?: proto_r4_core_datatypes_pb.Instant.AsObject,
    performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    value?: Observation.ValueX.AsObject,
    dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    bodySite?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_r4_core_datatypes_pb.Reference.AsObject,
    device?: proto_r4_core_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Observation.ReferenceRange.AsObject>,
    hasMember: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    derivedFrom: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    component: Array<Observation.Component.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ObservationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class EffectiveX extends jspb.Message {
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

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

    getChoiceCase(): EffectiveX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EffectiveX.AsObject;
    static toObject(includeInstance: boolean, msg: EffectiveX): EffectiveX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EffectiveX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EffectiveX;
    static deserializeBinaryFromReader(message: EffectiveX, reader: jspb.BinaryReader): EffectiveX;
  }

  export namespace EffectiveX {
    export type AsObject = {
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
      instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
      INSTANT = 4,
    }
  }

  export class ValueX extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

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

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_r4_core_datatypes_pb.Time | undefined;
    setTime(value?: proto_r4_core_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
      quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
      time?: proto_r4_core_datatypes_pb.Time.AsObject,
      dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      BOOLEAN = 4,
      INTEGER = 5,
      RANGE = 6,
      RATIO = 7,
      SAMPLED_DATA = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
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

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_r4_core_datatypes_pb.String | undefined;
    setText(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReferenceRange.AsObject;
    static toObject(includeInstance: boolean, msg: ReferenceRange): ReferenceRange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReferenceRange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReferenceRange;
    static deserializeBinaryFromReader(message: ReferenceRange, reader: jspb.BinaryReader): ReferenceRange;
  }

  export namespace ReferenceRange {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      low?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      text?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Observation.Component.ValueX | undefined;
    setValue(value?: Observation.Component.ValueX): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearInterpretation(): void;
    getInterpretation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setInterpretation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addInterpretation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Observation.ReferenceRange>;
    setReferenceRange(value: Array<Observation.ReferenceRange>): void;
    addReferenceRange(value?: Observation.ReferenceRange, index?: number): Observation.ReferenceRange;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Component.AsObject;
    static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Component;
    static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
  }

  export namespace Component {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: Observation.Component.ValueX.AsObject,
      dataAbsentReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      interpretation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      referenceRange: Array<Observation.ReferenceRange.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

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

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

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
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        BOOLEAN = 4,
        INTEGER = 5,
        RANGE = 6,
        RATIO = 7,
        SAMPLED_DATA = 8,
        TIME = 9,
        DATE_TIME = 10,
        PERIOD = 11,
      }
    }
  }
}

