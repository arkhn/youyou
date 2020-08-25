// package: google.fhir.stu3.proto
// file: proto/stu3/profiles.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_codes_pb from "../../proto/stu3/codes_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";
import * as proto_stu3_extensions_pb from "../../proto/stu3/extensions_pb";
import * as proto_stu3_metadatatypes_pb from "../../proto/stu3/metadatatypes_pb";
import * as proto_stu3_resources_pb from "../../proto/stu3/resources_pb";

export class Bmi extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bmi.CodeableConceptForCode | undefined;
  setCode(value?: Bmi.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bmi.Effective | undefined;
  setEffective(value?: Bmi.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Bmi.Value | undefined;
  setValue(value?: Bmi.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bmi.ReferenceRange>;
  setReferenceRange(value: Array<Bmi.ReferenceRange>): void;
  addReferenceRange(value?: Bmi.ReferenceRange, index?: number): Bmi.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bmi.Related>;
  setRelated(value: Array<Bmi.Related>): void;
  addRelated(value?: Bmi.Related, index?: number): Bmi.Related;

  clearComponent(): void;
  getComponent(): Array<Bmi.Component>;
  setComponent(value: Array<Bmi.Component>): void;
  addComponent(value?: Bmi.Component, index?: number): Bmi.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bmi.AsObject;
  static toObject(includeInstance: boolean, msg: Bmi): Bmi.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bmi, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bmi;
  static deserializeBinaryFromReader(message: Bmi, reader: jspb.BinaryReader): Bmi;
}

export namespace Bmi {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bmi.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bmi.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Bmi.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bmi.ReferenceRange.AsObject>,
    related: Array<Bmi.Related.AsObject>,
    component: Array<Bmi.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBmiCode(): void;
    getBmiCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBmiCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBmiCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bmiCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Bmi.Component.Value | undefined;
    setValue(value?: Bmi.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Bmi.ReferenceRange>;
    setReferenceRange(value: Array<Bmi.ReferenceRange>): void;
    addReferenceRange(value?: Bmi.ReferenceRange, index?: number): Bmi.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Bmi.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Bmi.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Bodyheight extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bodyheight.CodeableConceptForCode | undefined;
  setCode(value?: Bodyheight.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bodyheight.Effective | undefined;
  setEffective(value?: Bodyheight.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Bodyheight.Value | undefined;
  setValue(value?: Bodyheight.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bodyheight.ReferenceRange>;
  setReferenceRange(value: Array<Bodyheight.ReferenceRange>): void;
  addReferenceRange(value?: Bodyheight.ReferenceRange, index?: number): Bodyheight.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bodyheight.Related>;
  setRelated(value: Array<Bodyheight.Related>): void;
  addRelated(value?: Bodyheight.Related, index?: number): Bodyheight.Related;

  clearComponent(): void;
  getComponent(): Array<Bodyheight.Component>;
  setComponent(value: Array<Bodyheight.Component>): void;
  addComponent(value?: Bodyheight.Component, index?: number): Bodyheight.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bodyheight.AsObject;
  static toObject(includeInstance: boolean, msg: Bodyheight): Bodyheight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bodyheight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bodyheight;
  static deserializeBinaryFromReader(message: Bodyheight, reader: jspb.BinaryReader): Bodyheight;
}

export namespace Bodyheight {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bodyheight.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bodyheight.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Bodyheight.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bodyheight.ReferenceRange.AsObject>,
    related: Array<Bodyheight.Related.AsObject>,
    component: Array<Bodyheight.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBodyHeightCode(): void;
    getBodyHeightCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBodyHeightCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBodyHeightCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bodyHeightCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Bodyheight.Component.Value | undefined;
    setValue(value?: Bodyheight.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Bodyheight.ReferenceRange>;
    setReferenceRange(value: Array<Bodyheight.ReferenceRange>): void;
    addReferenceRange(value?: Bodyheight.ReferenceRange, index?: number): Bodyheight.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Bodyheight.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Bodyheight.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Bodylength extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bodylength.CodeableConceptForCode | undefined;
  setCode(value?: Bodylength.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bodylength.Effective | undefined;
  setEffective(value?: Bodylength.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Bodylength.Value | undefined;
  setValue(value?: Bodylength.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bodylength.ReferenceRange>;
  setReferenceRange(value: Array<Bodylength.ReferenceRange>): void;
  addReferenceRange(value?: Bodylength.ReferenceRange, index?: number): Bodylength.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bodylength.Related>;
  setRelated(value: Array<Bodylength.Related>): void;
  addRelated(value?: Bodylength.Related, index?: number): Bodylength.Related;

  clearComponent(): void;
  getComponent(): Array<Bodylength.Component>;
  setComponent(value: Array<Bodylength.Component>): void;
  addComponent(value?: Bodylength.Component, index?: number): Bodylength.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bodylength.AsObject;
  static toObject(includeInstance: boolean, msg: Bodylength): Bodylength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bodylength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bodylength;
  static deserializeBinaryFromReader(message: Bodylength, reader: jspb.BinaryReader): Bodylength;
}

export namespace Bodylength {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bodylength.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bodylength.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Bodylength.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bodylength.ReferenceRange.AsObject>,
    related: Array<Bodylength.Related.AsObject>,
    component: Array<Bodylength.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBodyLengthCode(): void;
    getBodyLengthCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBodyLengthCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBodyLengthCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bodyLengthCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Bodylength.Component.Value | undefined;
    setValue(value?: Bodylength.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Bodylength.ReferenceRange>;
    setReferenceRange(value: Array<Bodylength.ReferenceRange>): void;
    addReferenceRange(value?: Bodylength.ReferenceRange, index?: number): Bodylength.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Bodylength.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Bodylength.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Bodytemp extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bodytemp.CodeableConceptForCode | undefined;
  setCode(value?: Bodytemp.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bodytemp.Effective | undefined;
  setEffective(value?: Bodytemp.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Bodytemp.Value | undefined;
  setValue(value?: Bodytemp.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bodytemp.ReferenceRange>;
  setReferenceRange(value: Array<Bodytemp.ReferenceRange>): void;
  addReferenceRange(value?: Bodytemp.ReferenceRange, index?: number): Bodytemp.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bodytemp.Related>;
  setRelated(value: Array<Bodytemp.Related>): void;
  addRelated(value?: Bodytemp.Related, index?: number): Bodytemp.Related;

  clearComponent(): void;
  getComponent(): Array<Bodytemp.Component>;
  setComponent(value: Array<Bodytemp.Component>): void;
  addComponent(value?: Bodytemp.Component, index?: number): Bodytemp.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bodytemp.AsObject;
  static toObject(includeInstance: boolean, msg: Bodytemp): Bodytemp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bodytemp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bodytemp;
  static deserializeBinaryFromReader(message: Bodytemp, reader: jspb.BinaryReader): Bodytemp;
}

export namespace Bodytemp {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bodytemp.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bodytemp.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Bodytemp.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bodytemp.ReferenceRange.AsObject>,
    related: Array<Bodytemp.Related.AsObject>,
    component: Array<Bodytemp.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBodyTempCode(): void;
    getBodyTempCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBodyTempCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBodyTempCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bodyTempCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Bodytemp.Component.Value | undefined;
    setValue(value?: Bodytemp.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Bodytemp.ReferenceRange>;
    setReferenceRange(value: Array<Bodytemp.ReferenceRange>): void;
    addReferenceRange(value?: Bodytemp.ReferenceRange, index?: number): Bodytemp.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Bodytemp.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Bodytemp.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Bodyweight extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bodyweight.CodeableConceptForCode | undefined;
  setCode(value?: Bodyweight.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bodyweight.Effective | undefined;
  setEffective(value?: Bodyweight.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Bodyweight.Value | undefined;
  setValue(value?: Bodyweight.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bodyweight.ReferenceRange>;
  setReferenceRange(value: Array<Bodyweight.ReferenceRange>): void;
  addReferenceRange(value?: Bodyweight.ReferenceRange, index?: number): Bodyweight.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bodyweight.Related>;
  setRelated(value: Array<Bodyweight.Related>): void;
  addRelated(value?: Bodyweight.Related, index?: number): Bodyweight.Related;

  clearComponent(): void;
  getComponent(): Array<Bodyweight.Component>;
  setComponent(value: Array<Bodyweight.Component>): void;
  addComponent(value?: Bodyweight.Component, index?: number): Bodyweight.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bodyweight.AsObject;
  static toObject(includeInstance: boolean, msg: Bodyweight): Bodyweight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bodyweight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bodyweight;
  static deserializeBinaryFromReader(message: Bodyweight, reader: jspb.BinaryReader): Bodyweight;
}

export namespace Bodyweight {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bodyweight.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bodyweight.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Bodyweight.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bodyweight.ReferenceRange.AsObject>,
    related: Array<Bodyweight.Related.AsObject>,
    component: Array<Bodyweight.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBodyWeightCode(): void;
    getBodyWeightCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBodyWeightCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBodyWeightCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bodyWeightCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Bodyweight.Component.Value | undefined;
    setValue(value?: Bodyweight.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Bodyweight.ReferenceRange>;
    setReferenceRange(value: Array<Bodyweight.ReferenceRange>): void;
    addReferenceRange(value?: Bodyweight.ReferenceRange, index?: number): Bodyweight.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Bodyweight.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Bodyweight.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Bp extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Bp.CodeableConceptForCode | undefined;
  setCode(value?: Bp.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Bp.Effective | undefined;
  setEffective(value?: Bp.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Bp.ReferenceRange>;
  setReferenceRange(value: Array<Bp.ReferenceRange>): void;
  addReferenceRange(value?: Bp.ReferenceRange, index?: number): Bp.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Bp.Related>;
  setRelated(value: Array<Bp.Related>): void;
  addRelated(value?: Bp.Related, index?: number): Bp.Related;

  clearComponent(): void;
  getComponent(): Array<Bp.Component>;
  setComponent(value: Array<Bp.Component>): void;
  addComponent(value?: Bp.Component, index?: number): Bp.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bp.AsObject;
  static toObject(includeInstance: boolean, msg: Bp): Bp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bp;
  static deserializeBinaryFromReader(message: Bp, reader: jspb.BinaryReader): Bp;
}

export namespace Bp {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Bp.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Bp.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Bp.ReferenceRange.AsObject>,
    related: Array<Bp.Related.AsObject>,
    component: Array<Bp.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBpCode(): void;
    getBpCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBpCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBpCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bpCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
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
    }
  }
}

export class Cholesterol extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Cholesterol.Effective | undefined;
  setEffective(value?: Cholesterol.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Cholesterol.Value | undefined;
  setValue(value?: Cholesterol.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): Cholesterol.ReferenceRange | undefined;
  setReferenceRange(value?: Cholesterol.ReferenceRange): void;

  clearComponent(): void;
  getComponent(): Array<Cholesterol.Component>;
  setComponent(value: Array<Cholesterol.Component>): void;
  addComponent(value?: Cholesterol.Component, index?: number): Cholesterol.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cholesterol.AsObject;
  static toObject(includeInstance: boolean, msg: Cholesterol): Cholesterol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cholesterol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cholesterol;
  static deserializeBinaryFromReader(message: Cholesterol, reader: jspb.BinaryReader): Cholesterol;
}

export namespace Cholesterol {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Cholesterol.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Cholesterol.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange?: Cholesterol.ReferenceRange.AsObject,
    component: Array<Cholesterol.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Cholesterol.Component.Value | undefined;
    setValue(value?: Cholesterol.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Cholesterol.ReferenceRange>;
    setReferenceRange(value: Array<Cholesterol.ReferenceRange>): void;
    addReferenceRange(value?: Cholesterol.ReferenceRange, index?: number): Cholesterol.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Cholesterol.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Cholesterol.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class Clinicaldocument extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.CompositionStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.CompositionStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setClassValue(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_stu3_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  clearAuthor(): void;
  getAuthor(): Array<proto_stu3_datatypes_pb.Reference>;
  setAuthor(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_stu3_datatypes_pb.String | undefined;
  setTitle(value?: proto_stu3_datatypes_pb.String): void;

  hasConfidentiality(): boolean;
  clearConfidentiality(): void;
  getConfidentiality(): proto_stu3_codes_pb.ConfidentialityClassificationCode | undefined;
  setConfidentiality(value?: proto_stu3_codes_pb.ConfidentialityClassificationCode): void;

  clearAttester(): void;
  getAttester(): Array<Clinicaldocument.Attester>;
  setAttester(value: Array<Clinicaldocument.Attester>): void;
  addAttester(value?: Clinicaldocument.Attester, index?: number): Clinicaldocument.Attester;

  hasCustodian(): boolean;
  clearCustodian(): void;
  getCustodian(): proto_stu3_datatypes_pb.Reference | undefined;
  setCustodian(value?: proto_stu3_datatypes_pb.Reference): void;

  clearRelatesTo(): void;
  getRelatesTo(): Array<Clinicaldocument.RelatesTo>;
  setRelatesTo(value: Array<Clinicaldocument.RelatesTo>): void;
  addRelatesTo(value?: Clinicaldocument.RelatesTo, index?: number): Clinicaldocument.RelatesTo;

  clearEvent(): void;
  getEvent(): Array<Clinicaldocument.Event>;
  setEvent(value: Array<Clinicaldocument.Event>): void;
  addEvent(value?: Clinicaldocument.Event, index?: number): Clinicaldocument.Event;

  clearSection(): void;
  getSection(): Array<Clinicaldocument.Section>;
  setSection(value: Array<Clinicaldocument.Section>): void;
  addSection(value?: Clinicaldocument.Section, index?: number): Clinicaldocument.Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Clinicaldocument.AsObject;
  static toObject(includeInstance: boolean, msg: Clinicaldocument): Clinicaldocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Clinicaldocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Clinicaldocument;
  static deserializeBinaryFromReader(message: Clinicaldocument, reader: jspb.BinaryReader): Clinicaldocument;
}

export namespace Clinicaldocument {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    status?: proto_stu3_codes_pb.CompositionStatusCode.AsObject,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    classValue?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    encounter?: proto_stu3_datatypes_pb.Reference.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    author: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    title?: proto_stu3_datatypes_pb.String.AsObject,
    confidentiality?: proto_stu3_codes_pb.ConfidentialityClassificationCode.AsObject,
    attester: Array<Clinicaldocument.Attester.AsObject>,
    custodian?: proto_stu3_datatypes_pb.Reference.AsObject,
    relatesTo: Array<Clinicaldocument.RelatesTo.AsObject>,
    event: Array<Clinicaldocument.Event.AsObject>,
    section: Array<Clinicaldocument.Section.AsObject>,
  }

  export class Attester extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearMode(): void;
    getMode(): Array<proto_stu3_codes_pb.CompositionAttestationModeCode>;
    setMode(value: Array<proto_stu3_codes_pb.CompositionAttestationModeCode>): void;
    addMode(value?: proto_stu3_codes_pb.CompositionAttestationModeCode, index?: number): proto_stu3_codes_pb.CompositionAttestationModeCode;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_stu3_datatypes_pb.Reference | undefined;
    setParty(value?: proto_stu3_datatypes_pb.Reference): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      mode: Array<proto_stu3_codes_pb.CompositionAttestationModeCode.AsObject>,
      time?: proto_stu3_datatypes_pb.DateTime.AsObject,
      party?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class RelatesTo extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_codes_pb.DocumentRelationshipTypeCode | undefined;
    setCode(value?: proto_stu3_codes_pb.DocumentRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): Clinicaldocument.RelatesTo.Target | undefined;
    setTarget(value?: Clinicaldocument.RelatesTo.Target): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_codes_pb.DocumentRelationshipTypeCode.AsObject,
      target?: Clinicaldocument.RelatesTo.Target.AsObject,
    }

    export class Target extends jspb.Message {
      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_stu3_datatypes_pb.Reference | undefined;
      setReference(value?: proto_stu3_datatypes_pb.Reference): void;

      getTargetCase(): Target.TargetCase;
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
        identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
        reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      }

      export enum TargetCase {
        TARGET_NOT_SET = 0,
        IDENTIFIER = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Event extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCode(): void;
    getCode(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setCode(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    clearDetail(): void;
    getDetail(): Array<proto_stu3_datatypes_pb.Reference>;
    setDetail(value: Array<proto_stu3_datatypes_pb.Reference>): void;
    addDetail(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      detail: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Section extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasTitle(): boolean;
    clearTitle(): void;
    getTitle(): proto_stu3_datatypes_pb.String | undefined;
    setTitle(value?: proto_stu3_datatypes_pb.String): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
    setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

    hasMode(): boolean;
    clearMode(): void;
    getMode(): proto_stu3_codes_pb.ListModeCode | undefined;
    setMode(value?: proto_stu3_codes_pb.ListModeCode): void;

    hasOrderedBy(): boolean;
    clearOrderedBy(): void;
    getOrderedBy(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setOrderedBy(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearEntry(): void;
    getEntry(): Array<proto_stu3_datatypes_pb.Reference>;
    setEntry(value: Array<proto_stu3_datatypes_pb.Reference>): void;
    addEntry(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

    hasEmptyReason(): boolean;
    clearEmptyReason(): void;
    getEmptyReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setEmptyReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearSection(): void;
    getSection(): Array<Clinicaldocument.Section>;
    setSection(value: Array<Clinicaldocument.Section>): void;
    addSection(value?: Clinicaldocument.Section, index?: number): Clinicaldocument.Section;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      title?: proto_stu3_datatypes_pb.String.AsObject,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
      mode?: proto_stu3_codes_pb.ListModeCode.AsObject,
      orderedBy?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      entry: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
      emptyReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      section: Array<Clinicaldocument.Section.AsObject>,
    }
  }
}

export class Devicemetricobservation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Devicemetricobservation.Effective | undefined;
  setEffective(value?: Devicemetricobservation.Effective): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Devicemetricobservation.Value | undefined;
  setValue(value?: Devicemetricobservation.Value): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): Devicemetricobservation.ReferenceRange | undefined;
  setReferenceRange(value?: Devicemetricobservation.ReferenceRange): void;

  hasRelated(): boolean;
  clearRelated(): void;
  getRelated(): Devicemetricobservation.Related | undefined;
  setRelated(value?: Devicemetricobservation.Related): void;

  clearComponent(): void;
  getComponent(): Array<Devicemetricobservation.Component>;
  setComponent(value: Array<Devicemetricobservation.Component>): void;
  addComponent(value?: Devicemetricobservation.Component, index?: number): Devicemetricobservation.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Devicemetricobservation.AsObject;
  static toObject(includeInstance: boolean, msg: Devicemetricobservation): Devicemetricobservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Devicemetricobservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Devicemetricobservation;
  static deserializeBinaryFromReader(message: Devicemetricobservation, reader: jspb.BinaryReader): Devicemetricobservation;
}

export namespace Devicemetricobservation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Devicemetricobservation.Effective.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Devicemetricobservation.Value.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange?: Devicemetricobservation.ReferenceRange.AsObject,
    related?: Devicemetricobservation.Related.AsObject,
    component: Array<Devicemetricobservation.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
      attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      RANGE = 5,
      RATIO = 6,
      SAMPLED_DATA = 7,
      ATTACHMENT = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Devicemetricobservation.Component.Value | undefined;
    setValue(value?: Devicemetricobservation.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Devicemetricobservation.ReferenceRange>;
    setReferenceRange(value: Array<Devicemetricobservation.ReferenceRange>): void;
    addReferenceRange(value?: Devicemetricobservation.ReferenceRange, index?: number): Devicemetricobservation.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Devicemetricobservation.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Devicemetricobservation.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class DiagnosticreportGenetics extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.DiagnosticReportStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.DiagnosticReportStatusCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): DiagnosticreportGenetics.Effective | undefined;
  setEffective(value?: DiagnosticreportGenetics.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<DiagnosticreportGenetics.Performer>;
  setPerformer(value: Array<DiagnosticreportGenetics.Performer>): void;
  addPerformer(value?: DiagnosticreportGenetics.Performer, index?: number): DiagnosticreportGenetics.Performer;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_stu3_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearResult(): void;
  getResult(): Array<proto_stu3_datatypes_pb.Reference>;
  setResult(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addResult(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_stu3_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImage(): void;
  getImage(): Array<DiagnosticreportGenetics.Image>;
  setImage(value: Array<DiagnosticreportGenetics.Image>): void;
  addImage(value?: DiagnosticreportGenetics.Image, index?: number): DiagnosticreportGenetics.Image;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_stu3_datatypes_pb.String | undefined;
  setConclusion(value?: proto_stu3_datatypes_pb.String): void;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  clearAssessedCondition(): void;
  getAssessedCondition(): Array<proto_stu3_datatypes_pb.Reference>;
  setAssessedCondition(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addAssessedCondition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearFamilyMemberHistory(): void;
  getFamilyMemberHistory(): Array<proto_stu3_datatypes_pb.Reference>;
  setFamilyMemberHistory(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addFamilyMemberHistory(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearAnalysis(): void;
  getAnalysis(): Array<proto_stu3_extensions_pb.DiagnosticReportAnalysis>;
  setAnalysis(value: Array<proto_stu3_extensions_pb.DiagnosticReportAnalysis>): void;
  addAnalysis(value?: proto_stu3_extensions_pb.DiagnosticReportAnalysis, index?: number): proto_stu3_extensions_pb.DiagnosticReportAnalysis;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticreportGenetics.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticreportGenetics): DiagnosticreportGenetics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticreportGenetics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticreportGenetics;
  static deserializeBinaryFromReader(message: DiagnosticreportGenetics, reader: jspb.BinaryReader): DiagnosticreportGenetics;
}

export namespace DiagnosticreportGenetics {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.DiagnosticReportStatusCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: DiagnosticreportGenetics.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<DiagnosticreportGenetics.Performer.AsObject>,
    specimen: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    result: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    imagingStudy: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    image: Array<DiagnosticreportGenetics.Image.AsObject>,
    conclusion?: proto_stu3_datatypes_pb.String.AsObject,
    presentedForm: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
    assessedCondition: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    familyMemberHistory: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    analysis: Array<proto_stu3_extensions_pb.DiagnosticReportAnalysis.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Image extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_stu3_datatypes_pb.String | undefined;
    setComment(value?: proto_stu3_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_stu3_datatypes_pb.Reference | undefined;
    setLink(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
      link?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class ElementdefinitionDe extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): proto_stu3_datatypes_pb.String | undefined;
  setPath(value?: proto_stu3_datatypes_pb.String): void;

  hasSliceName(): boolean;
  clearSliceName(): void;
  getSliceName(): proto_stu3_datatypes_pb.String | undefined;
  setSliceName(value?: proto_stu3_datatypes_pb.String): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): proto_stu3_datatypes_pb.String | undefined;
  setLabel(value?: proto_stu3_datatypes_pb.String): void;

  clearCode(): void;
  getCode(): Array<proto_stu3_datatypes_pb.Coding>;
  setCode(value: Array<proto_stu3_datatypes_pb.Coding>): void;
  addCode(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

  hasDefinition(): boolean;
  clearDefinition(): void;
  getDefinition(): proto_stu3_datatypes_pb.Markdown | undefined;
  setDefinition(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.Markdown | undefined;
  setComment(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasRequirements(): boolean;
  clearRequirements(): void;
  getRequirements(): proto_stu3_datatypes_pb.Markdown | undefined;
  setRequirements(value?: proto_stu3_datatypes_pb.Markdown): void;

  clearAlias(): void;
  getAlias(): Array<proto_stu3_datatypes_pb.String>;
  setAlias(value: Array<proto_stu3_datatypes_pb.String>): void;
  addAlias(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
  setMin(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): proto_stu3_datatypes_pb.String | undefined;
  setMax(value?: proto_stu3_datatypes_pb.String): void;

  hasBase(): boolean;
  clearBase(): void;
  getBase(): ElementdefinitionDe.Base | undefined;
  setBase(value?: ElementdefinitionDe.Base): void;

  clearType(): void;
  getType(): Array<ElementdefinitionDe.TypeRef>;
  setType(value: Array<ElementdefinitionDe.TypeRef>): void;
  addType(value?: ElementdefinitionDe.TypeRef, index?: number): ElementdefinitionDe.TypeRef;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): ElementdefinitionDe.DefaultValue | undefined;
  setDefaultValue(value?: ElementdefinitionDe.DefaultValue): void;

  hasMeaningWhenMissing(): boolean;
  clearMeaningWhenMissing(): void;
  getMeaningWhenMissing(): proto_stu3_datatypes_pb.Markdown | undefined;
  setMeaningWhenMissing(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasOrderMeaning(): boolean;
  clearOrderMeaning(): void;
  getOrderMeaning(): proto_stu3_datatypes_pb.String | undefined;
  setOrderMeaning(value?: proto_stu3_datatypes_pb.String): void;

  clearExample(): void;
  getExample(): Array<ElementdefinitionDe.Example>;
  setExample(value: Array<ElementdefinitionDe.Example>): void;
  addExample(value?: ElementdefinitionDe.Example, index?: number): ElementdefinitionDe.Example;

  hasMinValue(): boolean;
  clearMinValue(): void;
  getMinValue(): ElementdefinitionDe.MinValue | undefined;
  setMinValue(value?: ElementdefinitionDe.MinValue): void;

  hasMaxValue(): boolean;
  clearMaxValue(): void;
  getMaxValue(): ElementdefinitionDe.MaxValue | undefined;
  setMaxValue(value?: ElementdefinitionDe.MaxValue): void;

  hasMaxLength(): boolean;
  clearMaxLength(): void;
  getMaxLength(): proto_stu3_datatypes_pb.Integer | undefined;
  setMaxLength(value?: proto_stu3_datatypes_pb.Integer): void;

  clearCondition(): void;
  getCondition(): Array<proto_stu3_datatypes_pb.Id>;
  setCondition(value: Array<proto_stu3_datatypes_pb.Id>): void;
  addCondition(value?: proto_stu3_datatypes_pb.Id, index?: number): proto_stu3_datatypes_pb.Id;

  clearConstraint(): void;
  getConstraint(): Array<ElementdefinitionDe.Constraint>;
  setConstraint(value: Array<ElementdefinitionDe.Constraint>): void;
  addConstraint(value?: ElementdefinitionDe.Constraint, index?: number): ElementdefinitionDe.Constraint;

  hasMustSupport(): boolean;
  clearMustSupport(): void;
  getMustSupport(): proto_stu3_datatypes_pb.Boolean | undefined;
  setMustSupport(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasBinding(): boolean;
  clearBinding(): void;
  getBinding(): ElementdefinitionDe.ElementDefinitionBinding | undefined;
  setBinding(value?: ElementdefinitionDe.ElementDefinitionBinding): void;

  clearMapping(): void;
  getMapping(): Array<ElementdefinitionDe.Mapping>;
  setMapping(value: Array<ElementdefinitionDe.Mapping>): void;
  addMapping(value?: ElementdefinitionDe.Mapping, index?: number): ElementdefinitionDe.Mapping;

  clearQuestion(): void;
  getQuestion(): Array<proto_stu3_datatypes_pb.String>;
  setQuestion(value: Array<proto_stu3_datatypes_pb.String>): void;
  addQuestion(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  hasAllowedUnits(): boolean;
  clearAllowedUnits(): void;
  getAllowedUnits(): proto_stu3_extensions_pb.ElementDefinitionAllowedUnits.Value | undefined;
  setAllowedUnits(value?: proto_stu3_extensions_pb.ElementDefinitionAllowedUnits.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementdefinitionDe.AsObject;
  static toObject(includeInstance: boolean, msg: ElementdefinitionDe): ElementdefinitionDe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementdefinitionDe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementdefinitionDe;
  static deserializeBinaryFromReader(message: ElementdefinitionDe, reader: jspb.BinaryReader): ElementdefinitionDe;
}

export namespace ElementdefinitionDe {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    path?: proto_stu3_datatypes_pb.String.AsObject,
    sliceName?: proto_stu3_datatypes_pb.String.AsObject,
    label?: proto_stu3_datatypes_pb.String.AsObject,
    code: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
    definition?: proto_stu3_datatypes_pb.Markdown.AsObject,
    comment?: proto_stu3_datatypes_pb.Markdown.AsObject,
    requirements?: proto_stu3_datatypes_pb.Markdown.AsObject,
    alias: Array<proto_stu3_datatypes_pb.String.AsObject>,
    min?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
    max?: proto_stu3_datatypes_pb.String.AsObject,
    base?: ElementdefinitionDe.Base.AsObject,
    type: Array<ElementdefinitionDe.TypeRef.AsObject>,
    defaultValue?: ElementdefinitionDe.DefaultValue.AsObject,
    meaningWhenMissing?: proto_stu3_datatypes_pb.Markdown.AsObject,
    orderMeaning?: proto_stu3_datatypes_pb.String.AsObject,
    example: Array<ElementdefinitionDe.Example.AsObject>,
    minValue?: ElementdefinitionDe.MinValue.AsObject,
    maxValue?: ElementdefinitionDe.MaxValue.AsObject,
    maxLength?: proto_stu3_datatypes_pb.Integer.AsObject,
    condition: Array<proto_stu3_datatypes_pb.Id.AsObject>,
    constraint: Array<ElementdefinitionDe.Constraint.AsObject>,
    mustSupport?: proto_stu3_datatypes_pb.Boolean.AsObject,
    binding?: ElementdefinitionDe.ElementDefinitionBinding.AsObject,
    mapping: Array<ElementdefinitionDe.Mapping.AsObject>,
    question: Array<proto_stu3_datatypes_pb.String.AsObject>,
    allowedUnits?: proto_stu3_extensions_pb.ElementDefinitionAllowedUnits.Value.AsObject,
  }

  export class Base extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): proto_stu3_datatypes_pb.String | undefined;
    setPath(value?: proto_stu3_datatypes_pb.String): void;

    hasMin(): boolean;
    clearMin(): void;
    getMin(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
    setMin(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

    hasMax(): boolean;
    clearMax(): void;
    getMax(): proto_stu3_datatypes_pb.String | undefined;
    setMax(value?: proto_stu3_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Base.AsObject;
    static toObject(includeInstance: boolean, msg: Base): Base.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Base, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Base;
    static deserializeBinaryFromReader(message: Base, reader: jspb.BinaryReader): Base;
  }

  export namespace Base {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      path?: proto_stu3_datatypes_pb.String.AsObject,
      min?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
      max?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class TypeRef extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Uri | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Uri): void;

    hasTargetProfile(): boolean;
    clearTargetProfile(): void;
    getTargetProfile(): proto_stu3_datatypes_pb.Uri | undefined;
    setTargetProfile(value?: proto_stu3_datatypes_pb.Uri): void;

    hasVersioning(): boolean;
    clearVersioning(): void;
    getVersioning(): proto_stu3_codes_pb.ReferenceVersionRulesCode | undefined;
    setVersioning(value?: proto_stu3_codes_pb.ReferenceVersionRulesCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeRef.AsObject;
    static toObject(includeInstance: boolean, msg: TypeRef): TypeRef.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeRef, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeRef;
    static deserializeBinaryFromReader(message: TypeRef, reader: jspb.BinaryReader): TypeRef;
  }

  export namespace TypeRef {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.Uri.AsObject,
      targetProfile?: proto_stu3_datatypes_pb.Uri.AsObject,
      versioning?: proto_stu3_codes_pb.ReferenceVersionRulesCode.AsObject,
    }
  }

  export class DefaultValue extends jspb.Message {
    hasBase64Binary(): boolean;
    clearBase64Binary(): void;
    getBase64Binary(): proto_stu3_datatypes_pb.Base64Binary | undefined;
    setBase64Binary(value?: proto_stu3_datatypes_pb.Base64Binary): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Code | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Code): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.Id | undefined;
    setId(value?: proto_stu3_datatypes_pb.Id): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
    setMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

    hasOid(): boolean;
    clearOid(): void;
    getOid(): proto_stu3_datatypes_pb.Oid | undefined;
    setOid(value?: proto_stu3_datatypes_pb.Oid): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setPositiveInt(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
    setUnsignedInt(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_stu3_datatypes_pb.Uri | undefined;
    setUri(value?: proto_stu3_datatypes_pb.Uri): void;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): proto_stu3_datatypes_pb.Address | undefined;
    setAddress(value?: proto_stu3_datatypes_pb.Address): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasAnnotation(): boolean;
    clearAnnotation(): void;
    getAnnotation(): proto_stu3_datatypes_pb.Annotation | undefined;
    setAnnotation(value?: proto_stu3_datatypes_pb.Annotation): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasCoding(): boolean;
    clearCoding(): void;
    getCoding(): proto_stu3_datatypes_pb.Coding | undefined;
    setCoding(value?: proto_stu3_datatypes_pb.Coding): void;

    hasContactPoint(): boolean;
    clearContactPoint(): void;
    getContactPoint(): proto_stu3_datatypes_pb.ContactPoint | undefined;
    setContactPoint(value?: proto_stu3_datatypes_pb.ContactPoint): void;

    hasCount(): boolean;
    clearCount(): void;
    getCount(): proto_stu3_datatypes_pb.Count | undefined;
    setCount(value?: proto_stu3_datatypes_pb.Count): void;

    hasDistance(): boolean;
    clearDistance(): void;
    getDistance(): proto_stu3_datatypes_pb.Distance | undefined;
    setDistance(value?: proto_stu3_datatypes_pb.Distance): void;

    hasDuration(): boolean;
    clearDuration(): void;
    getDuration(): proto_stu3_datatypes_pb.Duration | undefined;
    setDuration(value?: proto_stu3_datatypes_pb.Duration): void;

    hasHumanName(): boolean;
    clearHumanName(): void;
    getHumanName(): proto_stu3_datatypes_pb.HumanName | undefined;
    setHumanName(value?: proto_stu3_datatypes_pb.HumanName): void;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
    setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

    hasMoney(): boolean;
    clearMoney(): void;
    getMoney(): proto_stu3_datatypes_pb.Money | undefined;
    setMoney(value?: proto_stu3_datatypes_pb.Money): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

    hasSignature(): boolean;
    clearSignature(): void;
    getSignature(): proto_stu3_datatypes_pb.Signature | undefined;
    setSignature(value?: proto_stu3_datatypes_pb.Signature): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_stu3_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_stu3_datatypes_pb.Timing): void;

    hasMeta(): boolean;
    clearMeta(): void;
    getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
    setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

    getDefaultValueCase(): DefaultValue.DefaultValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DefaultValue.AsObject;
    static toObject(includeInstance: boolean, msg: DefaultValue): DefaultValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DefaultValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DefaultValue;
    static deserializeBinaryFromReader(message: DefaultValue, reader: jspb.BinaryReader): DefaultValue;
  }

  export namespace DefaultValue {
    export type AsObject = {
      base64Binary?: proto_stu3_datatypes_pb.Base64Binary.AsObject,
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      code?: proto_stu3_datatypes_pb.Code.AsObject,
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
      id?: proto_stu3_datatypes_pb.Id.AsObject,
      instant?: proto_stu3_datatypes_pb.Instant.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
      markdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
      oid?: proto_stu3_datatypes_pb.Oid.AsObject,
      positiveInt?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      unsignedInt?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
      uri?: proto_stu3_datatypes_pb.Uri.AsObject,
      address?: proto_stu3_datatypes_pb.Address.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      annotation?: proto_stu3_datatypes_pb.Annotation.AsObject,
      attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      coding?: proto_stu3_datatypes_pb.Coding.AsObject,
      contactPoint?: proto_stu3_datatypes_pb.ContactPoint.AsObject,
      count?: proto_stu3_datatypes_pb.Count.AsObject,
      distance?: proto_stu3_datatypes_pb.Distance.AsObject,
      duration?: proto_stu3_datatypes_pb.Duration.AsObject,
      humanName?: proto_stu3_datatypes_pb.HumanName.AsObject,
      identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
      money?: proto_stu3_datatypes_pb.Money.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
      signature?: proto_stu3_datatypes_pb.Signature.AsObject,
      timing?: proto_stu3_datatypes_pb.Timing.AsObject,
      meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    }

    export enum DefaultValueCase {
      DEFAULT_VALUE_NOT_SET = 0,
      BASE64_BINARY = 1,
      BOOLEAN = 2,
      CODE = 3,
      DATE = 4,
      DATE_TIME = 5,
      DECIMAL = 6,
      ID = 7,
      INSTANT = 8,
      INTEGER = 9,
      MARKDOWN = 10,
      OID = 11,
      POSITIVE_INT = 12,
      STRING_VALUE = 13,
      TIME = 14,
      UNSIGNED_INT = 15,
      URI = 16,
      ADDRESS = 17,
      AGE = 18,
      ANNOTATION = 19,
      ATTACHMENT = 20,
      CODEABLE_CONCEPT = 21,
      CODING = 22,
      CONTACT_POINT = 23,
      COUNT = 24,
      DISTANCE = 25,
      DURATION = 26,
      HUMAN_NAME = 27,
      IDENTIFIER = 28,
      MONEY = 29,
      PERIOD = 30,
      QUANTITY = 31,
      RANGE = 32,
      RATIO = 33,
      REFERENCE = 34,
      SAMPLED_DATA = 35,
      SIGNATURE = 36,
      TIMING = 37,
      META = 38,
    }
  }

  export class Example extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLabel(): boolean;
    clearLabel(): void;
    getLabel(): proto_stu3_datatypes_pb.String | undefined;
    setLabel(value?: proto_stu3_datatypes_pb.String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ElementdefinitionDe.Example.Value | undefined;
    setValue(value?: ElementdefinitionDe.Example.Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Example.AsObject;
    static toObject(includeInstance: boolean, msg: Example): Example.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Example, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Example;
    static deserializeBinaryFromReader(message: Example, reader: jspb.BinaryReader): Example;
  }

  export namespace Example {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      label?: proto_stu3_datatypes_pb.String.AsObject,
      value?: ElementdefinitionDe.Example.Value.AsObject,
    }

    export class Value extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_stu3_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_stu3_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_stu3_datatypes_pb.Code | undefined;
      setCode(value?: proto_stu3_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_stu3_datatypes_pb.Date | undefined;
      setDate(value?: proto_stu3_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.Id | undefined;
      setId(value?: proto_stu3_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_stu3_datatypes_pb.Oid | undefined;
      setOid(value?: proto_stu3_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_stu3_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_stu3_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_stu3_datatypes_pb.Uri | undefined;
      setUri(value?: proto_stu3_datatypes_pb.Uri): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_stu3_datatypes_pb.Address | undefined;
      setAddress(value?: proto_stu3_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_stu3_datatypes_pb.Age | undefined;
      setAge(value?: proto_stu3_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_stu3_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_stu3_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_stu3_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_stu3_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_stu3_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_stu3_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_stu3_datatypes_pb.Count | undefined;
      setCount(value?: proto_stu3_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_stu3_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_stu3_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_stu3_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_stu3_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_stu3_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_stu3_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_stu3_datatypes_pb.Money | undefined;
      setMoney(value?: proto_stu3_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_stu3_datatypes_pb.Reference | undefined;
      setReference(value?: proto_stu3_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_stu3_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_stu3_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_stu3_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_stu3_datatypes_pb.Timing): void;

      hasMeta(): boolean;
      clearMeta(): void;
      getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
      setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        base64Binary?: proto_stu3_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
        code?: proto_stu3_datatypes_pb.Code.AsObject,
        date?: proto_stu3_datatypes_pb.Date.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
        id?: proto_stu3_datatypes_pb.Id.AsObject,
        instant?: proto_stu3_datatypes_pb.Instant.AsObject,
        integer?: proto_stu3_datatypes_pb.Integer.AsObject,
        markdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
        oid?: proto_stu3_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_stu3_datatypes_pb.Uri.AsObject,
        address?: proto_stu3_datatypes_pb.Address.AsObject,
        age?: proto_stu3_datatypes_pb.Age.AsObject,
        annotation?: proto_stu3_datatypes_pb.Annotation.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_stu3_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_stu3_datatypes_pb.ContactPoint.AsObject,
        count?: proto_stu3_datatypes_pb.Count.AsObject,
        distance?: proto_stu3_datatypes_pb.Distance.AsObject,
        duration?: proto_stu3_datatypes_pb.Duration.AsObject,
        humanName?: proto_stu3_datatypes_pb.HumanName.AsObject,
        identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
        money?: proto_stu3_datatypes_pb.Money.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        reference?: proto_stu3_datatypes_pb.Reference.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        signature?: proto_stu3_datatypes_pb.Signature.AsObject,
        timing?: proto_stu3_datatypes_pb.Timing.AsObject,
        meta?: proto_stu3_datatypes_pb.Meta.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        BASE64_BINARY = 1,
        BOOLEAN = 2,
        CODE = 3,
        DATE = 4,
        DATE_TIME = 5,
        DECIMAL = 6,
        ID = 7,
        INSTANT = 8,
        INTEGER = 9,
        MARKDOWN = 10,
        OID = 11,
        POSITIVE_INT = 12,
        STRING_VALUE = 13,
        TIME = 14,
        UNSIGNED_INT = 15,
        URI = 16,
        ADDRESS = 17,
        AGE = 18,
        ANNOTATION = 19,
        ATTACHMENT = 20,
        CODEABLE_CONCEPT = 21,
        CODING = 22,
        CONTACT_POINT = 23,
        COUNT = 24,
        DISTANCE = 25,
        DURATION = 26,
        HUMAN_NAME = 27,
        IDENTIFIER = 28,
        MONEY = 29,
        PERIOD = 30,
        QUANTITY = 31,
        RANGE = 32,
        RATIO = 33,
        REFERENCE = 34,
        SAMPLED_DATA = 35,
        SIGNATURE = 36,
        TIMING = 37,
        META = 38,
      }
    }
  }

  export class MinValue extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setPositiveInt(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
    setUnsignedInt(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getMinValueCase(): MinValue.MinValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MinValue.AsObject;
    static toObject(includeInstance: boolean, msg: MinValue): MinValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MinValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MinValue;
    static deserializeBinaryFromReader(message: MinValue, reader: jspb.BinaryReader): MinValue;
  }

  export namespace MinValue {
    export type AsObject = {
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      instant?: proto_stu3_datatypes_pb.Instant.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
      positiveInt?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      unsignedInt?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum MinValueCase {
      MIN_VALUE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      INSTANT = 3,
      TIME = 4,
      DECIMAL = 5,
      INTEGER = 6,
      POSITIVE_INT = 7,
      UNSIGNED_INT = 8,
      QUANTITY = 9,
    }
  }

  export class MaxValue extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

    hasPositiveInt(): boolean;
    clearPositiveInt(): void;
    getPositiveInt(): proto_stu3_datatypes_pb.PositiveInt | undefined;
    setPositiveInt(value?: proto_stu3_datatypes_pb.PositiveInt): void;

    hasUnsignedInt(): boolean;
    clearUnsignedInt(): void;
    getUnsignedInt(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
    setUnsignedInt(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getMaxValueCase(): MaxValue.MaxValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MaxValue.AsObject;
    static toObject(includeInstance: boolean, msg: MaxValue): MaxValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MaxValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MaxValue;
    static deserializeBinaryFromReader(message: MaxValue, reader: jspb.BinaryReader): MaxValue;
  }

  export namespace MaxValue {
    export type AsObject = {
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      instant?: proto_stu3_datatypes_pb.Instant.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
      positiveInt?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
      unsignedInt?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum MaxValueCase {
      MAX_VALUE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      INSTANT = 3,
      TIME = 4,
      DECIMAL = 5,
      INTEGER = 6,
      POSITIVE_INT = 7,
      UNSIGNED_INT = 8,
      QUANTITY = 9,
    }
  }

  export class Constraint extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasKey(): boolean;
    clearKey(): void;
    getKey(): proto_stu3_datatypes_pb.Id | undefined;
    setKey(value?: proto_stu3_datatypes_pb.Id): void;

    hasRequirements(): boolean;
    clearRequirements(): void;
    getRequirements(): proto_stu3_datatypes_pb.String | undefined;
    setRequirements(value?: proto_stu3_datatypes_pb.String): void;

    hasSeverity(): boolean;
    clearSeverity(): void;
    getSeverity(): proto_stu3_codes_pb.ConstraintSeverityCode | undefined;
    setSeverity(value?: proto_stu3_codes_pb.ConstraintSeverityCode): void;

    hasHuman(): boolean;
    clearHuman(): void;
    getHuman(): proto_stu3_datatypes_pb.String | undefined;
    setHuman(value?: proto_stu3_datatypes_pb.String): void;

    hasExpression(): boolean;
    clearExpression(): void;
    getExpression(): proto_stu3_datatypes_pb.String | undefined;
    setExpression(value?: proto_stu3_datatypes_pb.String): void;

    hasXpath(): boolean;
    clearXpath(): void;
    getXpath(): proto_stu3_datatypes_pb.String | undefined;
    setXpath(value?: proto_stu3_datatypes_pb.String): void;

    hasSource(): boolean;
    clearSource(): void;
    getSource(): proto_stu3_datatypes_pb.Uri | undefined;
    setSource(value?: proto_stu3_datatypes_pb.Uri): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Constraint.AsObject;
    static toObject(includeInstance: boolean, msg: Constraint): Constraint.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Constraint, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Constraint;
    static deserializeBinaryFromReader(message: Constraint, reader: jspb.BinaryReader): Constraint;
  }

  export namespace Constraint {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      key?: proto_stu3_datatypes_pb.Id.AsObject,
      requirements?: proto_stu3_datatypes_pb.String.AsObject,
      severity?: proto_stu3_codes_pb.ConstraintSeverityCode.AsObject,
      human?: proto_stu3_datatypes_pb.String.AsObject,
      expression?: proto_stu3_datatypes_pb.String.AsObject,
      xpath?: proto_stu3_datatypes_pb.String.AsObject,
      source?: proto_stu3_datatypes_pb.Uri.AsObject,
    }
  }

  export class ElementDefinitionBinding extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasStrength(): boolean;
    clearStrength(): void;
    getStrength(): proto_stu3_codes_pb.BindingStrengthCode | undefined;
    setStrength(value?: proto_stu3_codes_pb.BindingStrengthCode): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasValueSet(): boolean;
    clearValueSet(): void;
    getValueSet(): ElementdefinitionDe.ElementDefinitionBinding.ValueSet | undefined;
    setValueSet(value?: ElementdefinitionDe.ElementDefinitionBinding.ValueSet): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ElementDefinitionBinding.AsObject;
    static toObject(includeInstance: boolean, msg: ElementDefinitionBinding): ElementDefinitionBinding.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ElementDefinitionBinding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ElementDefinitionBinding;
    static deserializeBinaryFromReader(message: ElementDefinitionBinding, reader: jspb.BinaryReader): ElementDefinitionBinding;
  }

  export namespace ElementDefinitionBinding {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      strength?: proto_stu3_codes_pb.BindingStrengthCode.AsObject,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      valueSet?: ElementdefinitionDe.ElementDefinitionBinding.ValueSet.AsObject,
    }

    export class ValueSet extends jspb.Message {
      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_stu3_datatypes_pb.Uri | undefined;
      setUri(value?: proto_stu3_datatypes_pb.Uri): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_stu3_datatypes_pb.Reference | undefined;
      setReference(value?: proto_stu3_datatypes_pb.Reference): void;

      getValueSetCase(): ValueSet.ValueSetCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ValueSet.AsObject;
      static toObject(includeInstance: boolean, msg: ValueSet): ValueSet.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ValueSet, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ValueSet;
      static deserializeBinaryFromReader(message: ValueSet, reader: jspb.BinaryReader): ValueSet;
    }

    export namespace ValueSet {
      export type AsObject = {
        uri?: proto_stu3_datatypes_pb.Uri.AsObject,
        reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      }

      export enum ValueSetCase {
        VALUE_SET_NOT_SET = 0,
        URI = 1,
        REFERENCE = 2,
      }
    }
  }

  export class Mapping extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasIdentity(): boolean;
    clearIdentity(): void;
    getIdentity(): proto_stu3_datatypes_pb.Id | undefined;
    setIdentity(value?: proto_stu3_datatypes_pb.Id): void;

    hasLanguage(): boolean;
    clearLanguage(): void;
    getLanguage(): proto_stu3_datatypes_pb.MimeTypeCode | undefined;
    setLanguage(value?: proto_stu3_datatypes_pb.MimeTypeCode): void;

    hasMap(): boolean;
    clearMap(): void;
    getMap(): proto_stu3_datatypes_pb.String | undefined;
    setMap(value?: proto_stu3_datatypes_pb.String): void;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_stu3_datatypes_pb.String | undefined;
    setComment(value?: proto_stu3_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Mapping.AsObject;
    static toObject(includeInstance: boolean, msg: Mapping): Mapping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Mapping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Mapping;
    static deserializeBinaryFromReader(message: Mapping, reader: jspb.BinaryReader): Mapping;
  }

  export namespace Mapping {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      identity?: proto_stu3_datatypes_pb.Id.AsObject,
      language?: proto_stu3_datatypes_pb.MimeTypeCode.AsObject,
      map?: proto_stu3_datatypes_pb.String.AsObject,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }
}

export class FamilymemberhistoryGenetic extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearDefinition(): void;
  getDefinition(): Array<proto_stu3_datatypes_pb.Reference>;
  setDefinition(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDefinition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.FamilyHistoryStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.FamilyHistoryStatusCode): void;

  hasNotDone(): boolean;
  clearNotDone(): void;
  getNotDone(): proto_stu3_datatypes_pb.Boolean | undefined;
  setNotDone(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasNotDoneReason(): boolean;
  clearNotDoneReason(): void;
  getNotDoneReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setNotDoneReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_stu3_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  hasRelationship(): boolean;
  clearRelationship(): void;
  getRelationship(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setRelationship(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasGender(): boolean;
  clearGender(): void;
  getGender(): proto_stu3_codes_pb.AdministrativeGenderCode | undefined;
  setGender(value?: proto_stu3_codes_pb.AdministrativeGenderCode): void;

  hasBorn(): boolean;
  clearBorn(): void;
  getBorn(): FamilymemberhistoryGenetic.Born | undefined;
  setBorn(value?: FamilymemberhistoryGenetic.Born): void;

  hasAge(): boolean;
  clearAge(): void;
  getAge(): FamilymemberhistoryGenetic.AgeType | undefined;
  setAge(value?: FamilymemberhistoryGenetic.AgeType): void;

  hasEstimatedAge(): boolean;
  clearEstimatedAge(): void;
  getEstimatedAge(): proto_stu3_datatypes_pb.Boolean | undefined;
  setEstimatedAge(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasDeceased(): boolean;
  clearDeceased(): void;
  getDeceased(): FamilymemberhistoryGenetic.Deceased | undefined;
  setDeceased(value?: FamilymemberhistoryGenetic.Deceased): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNote(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearCondition(): void;
  getCondition(): Array<FamilymemberhistoryGenetic.Condition>;
  setCondition(value: Array<FamilymemberhistoryGenetic.Condition>): void;
  addCondition(value?: FamilymemberhistoryGenetic.Condition, index?: number): FamilymemberhistoryGenetic.Condition;

  clearParent(): void;
  getParent(): Array<proto_stu3_extensions_pb.FamilyMemberHistoryParent>;
  setParent(value: Array<proto_stu3_extensions_pb.FamilyMemberHistoryParent>): void;
  addParent(value?: proto_stu3_extensions_pb.FamilyMemberHistoryParent, index?: number): proto_stu3_extensions_pb.FamilyMemberHistoryParent;

  clearSibling(): void;
  getSibling(): Array<proto_stu3_extensions_pb.FamilyMemberHistorySibling>;
  setSibling(value: Array<proto_stu3_extensions_pb.FamilyMemberHistorySibling>): void;
  addSibling(value?: proto_stu3_extensions_pb.FamilyMemberHistorySibling, index?: number): proto_stu3_extensions_pb.FamilyMemberHistorySibling;

  clearObservation(): void;
  getObservation(): Array<proto_stu3_datatypes_pb.Reference>;
  setObservation(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addObservation(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilymemberhistoryGenetic.AsObject;
  static toObject(includeInstance: boolean, msg: FamilymemberhistoryGenetic): FamilymemberhistoryGenetic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilymemberhistoryGenetic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilymemberhistoryGenetic;
  static deserializeBinaryFromReader(message: FamilymemberhistoryGenetic, reader: jspb.BinaryReader): FamilymemberhistoryGenetic;
}

export namespace FamilymemberhistoryGenetic {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    definition: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.FamilyHistoryStatusCode.AsObject,
    notDone?: proto_stu3_datatypes_pb.Boolean.AsObject,
    notDoneReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    patient?: proto_stu3_datatypes_pb.Reference.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    relationship?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    gender?: proto_stu3_codes_pb.AdministrativeGenderCode.AsObject,
    born?: FamilymemberhistoryGenetic.Born.AsObject,
    age?: FamilymemberhistoryGenetic.AgeType.AsObject,
    estimatedAge?: proto_stu3_datatypes_pb.Boolean.AsObject,
    deceased?: FamilymemberhistoryGenetic.Deceased.AsObject,
    reasonCode: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    note: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    condition: Array<FamilymemberhistoryGenetic.Condition.AsObject>,
    parent: Array<proto_stu3_extensions_pb.FamilyMemberHistoryParent.AsObject>,
    sibling: Array<proto_stu3_extensions_pb.FamilyMemberHistorySibling.AsObject>,
    observation: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
  }

  export class Born extends jspb.Message {
    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getBornCase(): Born.BornCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Born.AsObject;
    static toObject(includeInstance: boolean, msg: Born): Born.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Born, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Born;
    static deserializeBinaryFromReader(message: Born, reader: jspb.BinaryReader): Born;
  }

  export namespace Born {
    export type AsObject = {
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum BornCase {
      BORN_NOT_SET = 0,
      PERIOD = 1,
      DATE = 2,
      STRING_VALUE = 3,
    }
  }

  export class AgeType extends jspb.Message {
    hasAgeValue(): boolean;
    clearAgeValue(): void;
    getAgeValue(): proto_stu3_datatypes_pb.Age | undefined;
    setAgeValue(value?: proto_stu3_datatypes_pb.Age): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getAgeCase(): AgeType.AgeCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AgeType.AsObject;
    static toObject(includeInstance: boolean, msg: AgeType): AgeType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AgeType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AgeType;
    static deserializeBinaryFromReader(message: AgeType, reader: jspb.BinaryReader): AgeType;
  }

  export namespace AgeType {
    export type AsObject = {
      ageValue?: proto_stu3_datatypes_pb.Age.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum AgeCase {
      AGE_NOT_SET = 0,
      AGE_VALUE = 1,
      RANGE = 2,
      STRING_VALUE = 3,
    }
  }

  export class Deceased extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    getDeceasedCase(): Deceased.DeceasedCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Deceased.AsObject;
    static toObject(includeInstance: boolean, msg: Deceased): Deceased.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Deceased, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Deceased;
    static deserializeBinaryFromReader(message: Deceased, reader: jspb.BinaryReader): Deceased;
  }

  export namespace Deceased {
    export type AsObject = {
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
    }

    export enum DeceasedCase {
      DECEASED_NOT_SET = 0,
      BOOLEAN = 1,
      AGE = 2,
      RANGE = 3,
      DATE = 4,
      STRING_VALUE = 5,
    }
  }

  export class Condition extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasOutcome(): boolean;
    clearOutcome(): void;
    getOutcome(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setOutcome(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasOnset(): boolean;
    clearOnset(): void;
    getOnset(): FamilymemberhistoryGenetic.Condition.Onset | undefined;
    setOnset(value?: FamilymemberhistoryGenetic.Condition.Onset): void;

    hasNote(): boolean;
    clearNote(): void;
    getNote(): proto_stu3_datatypes_pb.Annotation | undefined;
    setNote(value?: proto_stu3_datatypes_pb.Annotation): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      outcome?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      onset?: FamilymemberhistoryGenetic.Condition.Onset.AsObject,
      note?: proto_stu3_datatypes_pb.Annotation.AsObject,
    }

    export class Onset extends jspb.Message {
      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_stu3_datatypes_pb.Age | undefined;
      setAge(value?: proto_stu3_datatypes_pb.Age): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      getOnsetCase(): Onset.OnsetCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Onset.AsObject;
      static toObject(includeInstance: boolean, msg: Onset): Onset.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Onset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Onset;
      static deserializeBinaryFromReader(message: Onset, reader: jspb.BinaryReader): Onset;
    }

    export namespace Onset {
      export type AsObject = {
        age?: proto_stu3_datatypes_pb.Age.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      }

      export enum OnsetCase {
        ONSET_NOT_SET = 0,
        AGE = 1,
        RANGE = 2,
        PERIOD = 3,
        STRING_VALUE = 4,
      }
    }
  }
}

export class HdlCholesterol extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): HdlCholesterol.Effective | undefined;
  setEffective(value?: HdlCholesterol.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): HdlCholesterol.Value | undefined;
  setValue(value?: HdlCholesterol.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): HdlCholesterol.ReferenceRange | undefined;
  setReferenceRange(value?: HdlCholesterol.ReferenceRange): void;

  clearComponent(): void;
  getComponent(): Array<HdlCholesterol.Component>;
  setComponent(value: Array<HdlCholesterol.Component>): void;
  addComponent(value?: HdlCholesterol.Component, index?: number): HdlCholesterol.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HdlCholesterol.AsObject;
  static toObject(includeInstance: boolean, msg: HdlCholesterol): HdlCholesterol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HdlCholesterol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HdlCholesterol;
  static deserializeBinaryFromReader(message: HdlCholesterol, reader: jspb.BinaryReader): HdlCholesterol;
}

export namespace HdlCholesterol {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: HdlCholesterol.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: HdlCholesterol.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange?: HdlCholesterol.ReferenceRange.AsObject,
    component: Array<HdlCholesterol.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): HdlCholesterol.Component.Value | undefined;
    setValue(value?: HdlCholesterol.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<HdlCholesterol.ReferenceRange>;
    setReferenceRange(value: Array<HdlCholesterol.ReferenceRange>): void;
    addReferenceRange(value?: HdlCholesterol.ReferenceRange, index?: number): HdlCholesterol.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: HdlCholesterol.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<HdlCholesterol.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class Headcircum extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Headcircum.CodeableConceptForCode | undefined;
  setCode(value?: Headcircum.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Headcircum.Effective | undefined;
  setEffective(value?: Headcircum.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Headcircum.Value | undefined;
  setValue(value?: Headcircum.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Headcircum.ReferenceRange>;
  setReferenceRange(value: Array<Headcircum.ReferenceRange>): void;
  addReferenceRange(value?: Headcircum.ReferenceRange, index?: number): Headcircum.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Headcircum.Related>;
  setRelated(value: Array<Headcircum.Related>): void;
  addRelated(value?: Headcircum.Related, index?: number): Headcircum.Related;

  clearComponent(): void;
  getComponent(): Array<Headcircum.Component>;
  setComponent(value: Array<Headcircum.Component>): void;
  addComponent(value?: Headcircum.Component, index?: number): Headcircum.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Headcircum.AsObject;
  static toObject(includeInstance: boolean, msg: Headcircum): Headcircum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Headcircum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Headcircum;
  static deserializeBinaryFromReader(message: Headcircum, reader: jspb.BinaryReader): Headcircum;
}

export namespace Headcircum {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Headcircum.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Headcircum.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Headcircum.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Headcircum.ReferenceRange.AsObject>,
    related: Array<Headcircum.Related.AsObject>,
    component: Array<Headcircum.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearHeadCircumCode(): void;
    getHeadCircumCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setHeadCircumCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addHeadCircumCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      headCircumCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Headcircum.Component.Value | undefined;
    setValue(value?: Headcircum.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Headcircum.ReferenceRange>;
    setReferenceRange(value: Array<Headcircum.ReferenceRange>): void;
    addReferenceRange(value?: Headcircum.ReferenceRange, index?: number): Headcircum.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Headcircum.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Headcircum.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Heartrate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Heartrate.CodeableConceptForCode | undefined;
  setCode(value?: Heartrate.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Heartrate.Effective | undefined;
  setEffective(value?: Heartrate.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Heartrate.Value | undefined;
  setValue(value?: Heartrate.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Heartrate.ReferenceRange>;
  setReferenceRange(value: Array<Heartrate.ReferenceRange>): void;
  addReferenceRange(value?: Heartrate.ReferenceRange, index?: number): Heartrate.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Heartrate.Related>;
  setRelated(value: Array<Heartrate.Related>): void;
  addRelated(value?: Heartrate.Related, index?: number): Heartrate.Related;

  clearComponent(): void;
  getComponent(): Array<Heartrate.Component>;
  setComponent(value: Array<Heartrate.Component>): void;
  addComponent(value?: Heartrate.Component, index?: number): Heartrate.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Heartrate.AsObject;
  static toObject(includeInstance: boolean, msg: Heartrate): Heartrate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Heartrate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Heartrate;
  static deserializeBinaryFromReader(message: Heartrate, reader: jspb.BinaryReader): Heartrate;
}

export namespace Heartrate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Heartrate.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Heartrate.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Heartrate.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Heartrate.ReferenceRange.AsObject>,
    related: Array<Heartrate.Related.AsObject>,
    component: Array<Heartrate.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearHeartRateCode(): void;
    getHeartRateCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setHeartRateCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addHeartRateCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      heartRateCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Heartrate.Component.Value | undefined;
    setValue(value?: Heartrate.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Heartrate.ReferenceRange>;
    setReferenceRange(value: Array<Heartrate.ReferenceRange>): void;
    addReferenceRange(value?: Heartrate.ReferenceRange, index?: number): Heartrate.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Heartrate.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Heartrate.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Hlaresult extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.DiagnosticReportStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.DiagnosticReportStatusCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Hlaresult.Effective | undefined;
  setEffective(value?: Hlaresult.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<Hlaresult.Performer>;
  setPerformer(value: Array<Hlaresult.Performer>): void;
  addPerformer(value?: Hlaresult.Performer, index?: number): Hlaresult.Performer;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_stu3_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearResult(): void;
  getResult(): Array<proto_stu3_datatypes_pb.Reference>;
  setResult(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addResult(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_stu3_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImage(): void;
  getImage(): Array<Hlaresult.Image>;
  setImage(value: Array<Hlaresult.Image>): void;
  addImage(value?: Hlaresult.Image, index?: number): Hlaresult.Image;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_stu3_datatypes_pb.String | undefined;
  setConclusion(value?: proto_stu3_datatypes_pb.String): void;

  clearCodedDiagnosis(): void;
  getCodedDiagnosis(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCodedDiagnosis(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCodedDiagnosis(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  hasAlleleDatabase(): boolean;
  clearAlleleDatabase(): void;
  getAlleleDatabase(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setAlleleDatabase(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasGlstring(): boolean;
  clearGlstring(): void;
  getGlstring(): proto_stu3_extensions_pb.DiagnosticReportGlstring | undefined;
  setGlstring(value?: proto_stu3_extensions_pb.DiagnosticReportGlstring): void;

  clearHaploid(): void;
  getHaploid(): Array<proto_stu3_extensions_pb.DiagnosticReportHaploid>;
  setHaploid(value: Array<proto_stu3_extensions_pb.DiagnosticReportHaploid>): void;
  addHaploid(value?: proto_stu3_extensions_pb.DiagnosticReportHaploid, index?: number): proto_stu3_extensions_pb.DiagnosticReportHaploid;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hlaresult.AsObject;
  static toObject(includeInstance: boolean, msg: Hlaresult): Hlaresult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Hlaresult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hlaresult;
  static deserializeBinaryFromReader(message: Hlaresult, reader: jspb.BinaryReader): Hlaresult;
}

export namespace Hlaresult {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.DiagnosticReportStatusCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Hlaresult.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<Hlaresult.Performer.AsObject>,
    specimen: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    result: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    imagingStudy: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    image: Array<Hlaresult.Image.AsObject>,
    conclusion?: proto_stu3_datatypes_pb.String.AsObject,
    codedDiagnosis: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    presentedForm: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
    alleleDatabase?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    glstring?: proto_stu3_extensions_pb.DiagnosticReportGlstring.AsObject,
    haploid: Array<proto_stu3_extensions_pb.DiagnosticReportHaploid.AsObject>,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Image extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_stu3_datatypes_pb.String | undefined;
    setComment(value?: proto_stu3_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_stu3_datatypes_pb.Reference | undefined;
    setLink(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
      link?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class LdlCholesterol extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): LdlCholesterol.Effective | undefined;
  setEffective(value?: LdlCholesterol.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): LdlCholesterol.Value | undefined;
  setValue(value?: LdlCholesterol.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): LdlCholesterol.ReferenceRange | undefined;
  setReferenceRange(value?: LdlCholesterol.ReferenceRange): void;

  clearComponent(): void;
  getComponent(): Array<LdlCholesterol.Component>;
  setComponent(value: Array<LdlCholesterol.Component>): void;
  addComponent(value?: LdlCholesterol.Component, index?: number): LdlCholesterol.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LdlCholesterol.AsObject;
  static toObject(includeInstance: boolean, msg: LdlCholesterol): LdlCholesterol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LdlCholesterol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LdlCholesterol;
  static deserializeBinaryFromReader(message: LdlCholesterol, reader: jspb.BinaryReader): LdlCholesterol;
}

export namespace LdlCholesterol {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: LdlCholesterol.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: LdlCholesterol.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange?: LdlCholesterol.ReferenceRange.AsObject,
    component: Array<LdlCholesterol.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): LdlCholesterol.Component.Value | undefined;
    setValue(value?: LdlCholesterol.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<LdlCholesterol.ReferenceRange>;
    setReferenceRange(value: Array<LdlCholesterol.ReferenceRange>): void;
    addReferenceRange(value?: LdlCholesterol.ReferenceRange, index?: number): LdlCholesterol.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: LdlCholesterol.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<LdlCholesterol.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class LipidProfile extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.DiagnosticReportStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.DiagnosticReportStatusCode): void;

  hasCategory(): boolean;
  clearCategory(): void;
  getCategory(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCategory(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): LipidProfile.Effective | undefined;
  setEffective(value?: LipidProfile.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<LipidProfile.Performer>;
  setPerformer(value: Array<LipidProfile.Performer>): void;
  addPerformer(value?: LipidProfile.Performer, index?: number): LipidProfile.Performer;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_stu3_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): proto_stu3_datatypes_pb.Reference | undefined;
  setResult(value?: proto_stu3_datatypes_pb.Reference): void;

  clearImagingStudy(): void;
  getImagingStudy(): Array<proto_stu3_datatypes_pb.Reference>;
  setImagingStudy(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addImagingStudy(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearImage(): void;
  getImage(): Array<LipidProfile.Image>;
  setImage(value: Array<LipidProfile.Image>): void;
  addImage(value?: LipidProfile.Image, index?: number): LipidProfile.Image;

  hasConclusion(): boolean;
  clearConclusion(): void;
  getConclusion(): proto_stu3_datatypes_pb.String | undefined;
  setConclusion(value?: proto_stu3_datatypes_pb.String): void;

  clearPresentedForm(): void;
  getPresentedForm(): Array<proto_stu3_datatypes_pb.Attachment>;
  setPresentedForm(value: Array<proto_stu3_datatypes_pb.Attachment>): void;
  addPresentedForm(value?: proto_stu3_datatypes_pb.Attachment, index?: number): proto_stu3_datatypes_pb.Attachment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LipidProfile.AsObject;
  static toObject(includeInstance: boolean, msg: LipidProfile): LipidProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LipidProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LipidProfile;
  static deserializeBinaryFromReader(message: LipidProfile, reader: jspb.BinaryReader): LipidProfile;
}

export namespace LipidProfile {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.DiagnosticReportStatusCode.AsObject,
    category?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: LipidProfile.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<LipidProfile.Performer.AsObject>,
    specimen: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    result?: proto_stu3_datatypes_pb.Reference.AsObject,
    imagingStudy: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    image: Array<LipidProfile.Image.AsObject>,
    conclusion?: proto_stu3_datatypes_pb.String.AsObject,
    presentedForm: Array<proto_stu3_datatypes_pb.Attachment.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Performer extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasRole(): boolean;
    clearRole(): void;
    getRole(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setRole(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasActor(): boolean;
    clearActor(): void;
    getActor(): proto_stu3_datatypes_pb.Reference | undefined;
    setActor(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Performer.AsObject;
    static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Performer;
    static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
  }

  export namespace Performer {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      role?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      actor?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Image extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasComment(): boolean;
    clearComment(): void;
    getComment(): proto_stu3_datatypes_pb.String | undefined;
    setComment(value?: proto_stu3_datatypes_pb.String): void;

    hasLink(): boolean;
    clearLink(): void;
    getLink(): proto_stu3_datatypes_pb.Reference | undefined;
    setLink(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
  }

  export namespace Image {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
      link?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class MetadataResource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_stu3_datatypes_pb.String | undefined;
  setVersion(value?: proto_stu3_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_stu3_datatypes_pb.String | undefined;
  setTitle(value?: proto_stu3_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.PublicationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.PublicationStatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_stu3_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_stu3_datatypes_pb.String | undefined;
  setPublisher(value?: proto_stu3_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_stu3_metadatatypes_pb.ContactDetail>;
  setContact(value: Array<proto_stu3_metadatatypes_pb.ContactDetail>): void;
  addContact(value?: proto_stu3_metadatatypes_pb.ContactDetail, index?: number): proto_stu3_metadatatypes_pb.ContactDetail;

  clearUseContext(): void;
  getUseContext(): Array<proto_stu3_metadatatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_stu3_metadatatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_stu3_metadatatypes_pb.UsageContext, index?: number): proto_stu3_metadatatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataResource.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataResource): MetadataResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetadataResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataResource;
  static deserializeBinaryFromReader(message: MetadataResource, reader: jspb.BinaryReader): MetadataResource;
}

export namespace MetadataResource {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    version?: proto_stu3_datatypes_pb.String.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    title?: proto_stu3_datatypes_pb.String.AsObject,
    status?: proto_stu3_codes_pb.PublicationStatusCode.AsObject,
    experimental?: proto_stu3_datatypes_pb.Boolean.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    publisher?: proto_stu3_datatypes_pb.String.AsObject,
    contact: Array<proto_stu3_metadatatypes_pb.ContactDetail.AsObject>,
    useContext: Array<proto_stu3_metadatatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    description?: proto_stu3_datatypes_pb.Markdown.AsObject,
  }
}

export class ObservationGenetics extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): ObservationGenetics.Effective | undefined;
  setEffective(value?: ObservationGenetics.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ObservationGenetics.Value | undefined;
  setValue(value?: ObservationGenetics.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<ObservationGenetics.ReferenceRange>;
  setReferenceRange(value: Array<ObservationGenetics.ReferenceRange>): void;
  addReferenceRange(value?: ObservationGenetics.ReferenceRange, index?: number): ObservationGenetics.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<ObservationGenetics.Related>;
  setRelated(value: Array<ObservationGenetics.Related>): void;
  addRelated(value?: ObservationGenetics.Related, index?: number): ObservationGenetics.Related;

  clearComponent(): void;
  getComponent(): Array<ObservationGenetics.Component>;
  setComponent(value: Array<ObservationGenetics.Component>): void;
  addComponent(value?: ObservationGenetics.Component, index?: number): ObservationGenetics.Component;

  hasDnaSequenceVariantName(): boolean;
  clearDnaSequenceVariantName(): void;
  getDnaSequenceVariantName(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDnaSequenceVariantName(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDnaVariantId(): boolean;
  clearDnaVariantId(): void;
  getDnaVariantId(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDnaVariantId(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDnaSequenceVariantType(): boolean;
  clearDnaSequenceVariantType(): void;
  getDnaSequenceVariantType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDnaSequenceVariantType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasAminoAcidChangeName(): boolean;
  clearAminoAcidChangeName(): void;
  getAminoAcidChangeName(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setAminoAcidChangeName(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasAminoAcidChangeType(): boolean;
  clearAminoAcidChangeType(): void;
  getAminoAcidChangeType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setAminoAcidChangeType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasGeneSymbol(): boolean;
  clearGeneSymbol(): void;
  getGeneSymbol(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setGeneSymbol(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasDnaRegionName(): boolean;
  clearDnaRegionName(): void;
  getDnaRegionName(): proto_stu3_datatypes_pb.String | undefined;
  setDnaRegionName(value?: proto_stu3_datatypes_pb.String): void;

  hasAlleleName(): boolean;
  clearAlleleName(): void;
  getAlleleName(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setAlleleName(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasAllelicState(): boolean;
  clearAllelicState(): void;
  getAllelicState(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setAllelicState(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasAllelicFrequency(): boolean;
  clearAllelicFrequency(): void;
  getAllelicFrequency(): proto_stu3_datatypes_pb.Decimal | undefined;
  setAllelicFrequency(value?: proto_stu3_datatypes_pb.Decimal): void;

  hasCopyNumberEvent(): boolean;
  clearCopyNumberEvent(): void;
  getCopyNumberEvent(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCopyNumberEvent(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasGenomicSourceClass(): boolean;
  clearGenomicSourceClass(): void;
  getGenomicSourceClass(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setGenomicSourceClass(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPhaseSet(): boolean;
  clearPhaseSet(): void;
  getPhaseSet(): proto_stu3_datatypes_pb.Uri | undefined;
  setPhaseSet(value?: proto_stu3_datatypes_pb.Uri): void;

  clearSequence(): void;
  getSequence(): Array<proto_stu3_datatypes_pb.Reference>;
  setSequence(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSequence(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasInterpretationSlice(): boolean;
  clearInterpretationSlice(): void;
  getInterpretationSlice(): proto_stu3_datatypes_pb.Reference | undefined;
  setInterpretationSlice(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGenetics.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGenetics): ObservationGenetics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGenetics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGenetics;
  static deserializeBinaryFromReader(message: ObservationGenetics, reader: jspb.BinaryReader): ObservationGenetics;
}

export namespace ObservationGenetics {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: ObservationGenetics.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: ObservationGenetics.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<ObservationGenetics.ReferenceRange.AsObject>,
    related: Array<ObservationGenetics.Related.AsObject>,
    component: Array<ObservationGenetics.Component.AsObject>,
    dnaSequenceVariantName?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    dnaVariantId?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    dnaSequenceVariantType?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    aminoAcidChangeName?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    aminoAcidChangeType?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    geneSymbol?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    dnaRegionName?: proto_stu3_datatypes_pb.String.AsObject,
    alleleName?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    allelicState?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    allelicFrequency?: proto_stu3_datatypes_pb.Decimal.AsObject,
    copyNumberEvent?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    genomicSourceClass?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    phaseSet?: proto_stu3_datatypes_pb.Uri.AsObject,
    sequence: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    interpretationSlice?: proto_stu3_datatypes_pb.Reference.AsObject,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

    hasRatio(): boolean;
    clearRatio(): void;
    getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
    setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

    hasSampledData(): boolean;
    clearSampledData(): void;
    getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
    setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
      ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
      sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
      attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
      CODEABLE_CONCEPT = 2,
      STRING_VALUE = 3,
      BOOLEAN = 4,
      RANGE = 5,
      RATIO = 6,
      SAMPLED_DATA = 7,
      ATTACHMENT = 8,
      TIME = 9,
      DATE_TIME = 10,
      PERIOD = 11,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ObservationGenetics.Component.Value | undefined;
    setValue(value?: ObservationGenetics.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<ObservationGenetics.ReferenceRange>;
    setReferenceRange(value: Array<ObservationGenetics.ReferenceRange>): void;
    addReferenceRange(value?: ObservationGenetics.ReferenceRange, index?: number): ObservationGenetics.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: ObservationGenetics.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<ObservationGenetics.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class Oxygensat extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Oxygensat.CodeableConceptForCode | undefined;
  setCode(value?: Oxygensat.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Oxygensat.Effective | undefined;
  setEffective(value?: Oxygensat.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Oxygensat.Value | undefined;
  setValue(value?: Oxygensat.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Oxygensat.ReferenceRange>;
  setReferenceRange(value: Array<Oxygensat.ReferenceRange>): void;
  addReferenceRange(value?: Oxygensat.ReferenceRange, index?: number): Oxygensat.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Oxygensat.Related>;
  setRelated(value: Array<Oxygensat.Related>): void;
  addRelated(value?: Oxygensat.Related, index?: number): Oxygensat.Related;

  clearComponent(): void;
  getComponent(): Array<Oxygensat.Component>;
  setComponent(value: Array<Oxygensat.Component>): void;
  addComponent(value?: Oxygensat.Component, index?: number): Oxygensat.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Oxygensat.AsObject;
  static toObject(includeInstance: boolean, msg: Oxygensat): Oxygensat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Oxygensat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Oxygensat;
  static deserializeBinaryFromReader(message: Oxygensat, reader: jspb.BinaryReader): Oxygensat;
}

export namespace Oxygensat {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Oxygensat.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Oxygensat.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Oxygensat.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Oxygensat.ReferenceRange.AsObject>,
    related: Array<Oxygensat.Related.AsObject>,
    component: Array<Oxygensat.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearOxygenSatCode(): void;
    getOxygenSatCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setOxygenSatCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addOxygenSatCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      oxygenSatCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Oxygensat.Component.Value | undefined;
    setValue(value?: Oxygensat.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Oxygensat.ReferenceRange>;
    setReferenceRange(value: Array<Oxygensat.ReferenceRange>): void;
    addReferenceRange(value?: Oxygensat.ReferenceRange, index?: number): Oxygensat.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Oxygensat.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Oxygensat.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class ProcedurerequestGenetics extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearDefinition(): void;
  getDefinition(): Array<proto_stu3_datatypes_pb.Reference>;
  setDefinition(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addDefinition(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearReplaces(): void;
  getReplaces(): Array<proto_stu3_datatypes_pb.Reference>;
  setReplaces(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasRequisition(): boolean;
  clearRequisition(): void;
  getRequisition(): proto_stu3_datatypes_pb.Identifier | undefined;
  setRequisition(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.RequestStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.RequestStatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): proto_stu3_codes_pb.RequestIntentCode | undefined;
  setIntent(value?: proto_stu3_codes_pb.RequestIntentCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_stu3_codes_pb.RequestPriorityCode | undefined;
  setPriority(value?: proto_stu3_codes_pb.RequestPriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_stu3_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_stu3_datatypes_pb.Boolean): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasOccurrence(): boolean;
  clearOccurrence(): void;
  getOccurrence(): ProcedurerequestGenetics.Occurrence | undefined;
  setOccurrence(value?: ProcedurerequestGenetics.Occurrence): void;

  hasAsNeeded(): boolean;
  clearAsNeeded(): void;
  getAsNeeded(): ProcedurerequestGenetics.AsNeeded | undefined;
  setAsNeeded(value?: ProcedurerequestGenetics.AsNeeded): void;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_stu3_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): ProcedurerequestGenetics.Requester | undefined;
  setRequester(value?: ProcedurerequestGenetics.Requester): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_stu3_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_stu3_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearSupportingInfo(): void;
  getSupportingInfo(): Array<proto_stu3_datatypes_pb.Reference>;
  setSupportingInfo(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearSpecimen(): void;
  getSpecimen(): Array<proto_stu3_datatypes_pb.Reference>;
  setSpecimen(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addSpecimen(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearBodySite(): void;
  getBodySite(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setBodySite(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  clearNote(): void;
  getNote(): Array<proto_stu3_datatypes_pb.Annotation>;
  setNote(value: Array<proto_stu3_datatypes_pb.Annotation>): void;
  addNote(value?: proto_stu3_datatypes_pb.Annotation, index?: number): proto_stu3_datatypes_pb.Annotation;

  clearRelevantHistory(): void;
  getRelevantHistory(): Array<proto_stu3_datatypes_pb.Reference>;
  setRelevantHistory(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addRelevantHistory(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  clearItem(): void;
  getItem(): Array<proto_stu3_extensions_pb.DiagnosticReportItem>;
  setItem(value: Array<proto_stu3_extensions_pb.DiagnosticReportItem>): void;
  addItem(value?: proto_stu3_extensions_pb.DiagnosticReportItem, index?: number): proto_stu3_extensions_pb.DiagnosticReportItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedurerequestGenetics.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedurerequestGenetics): ProcedurerequestGenetics.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedurerequestGenetics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedurerequestGenetics;
  static deserializeBinaryFromReader(message: ProcedurerequestGenetics, reader: jspb.BinaryReader): ProcedurerequestGenetics;
}

export namespace ProcedurerequestGenetics {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    definition: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    replaces: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    requisition?: proto_stu3_datatypes_pb.Identifier.AsObject,
    status?: proto_stu3_codes_pb.RequestStatusCode.AsObject,
    intent?: proto_stu3_codes_pb.RequestIntentCode.AsObject,
    priority?: proto_stu3_codes_pb.RequestPriorityCode.AsObject,
    doNotPerform?: proto_stu3_datatypes_pb.Boolean.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    occurrence?: ProcedurerequestGenetics.Occurrence.AsObject,
    asNeeded?: ProcedurerequestGenetics.AsNeeded.AsObject,
    authoredOn?: proto_stu3_datatypes_pb.DateTime.AsObject,
    requester?: ProcedurerequestGenetics.Requester.AsObject,
    performerType?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    performer?: proto_stu3_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    supportingInfo: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    specimen: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    bodySite: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    note: Array<proto_stu3_datatypes_pb.Annotation.AsObject>,
    relevantHistory: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    item: Array<proto_stu3_extensions_pb.DiagnosticReportItem.AsObject>,
  }

  export class Occurrence extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_stu3_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_stu3_datatypes_pb.Timing): void;

    getOccurrenceCase(): Occurrence.OccurrenceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Occurrence.AsObject;
    static toObject(includeInstance: boolean, msg: Occurrence): Occurrence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Occurrence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Occurrence;
    static deserializeBinaryFromReader(message: Occurrence, reader: jspb.BinaryReader): Occurrence;
  }

  export namespace Occurrence {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      timing?: proto_stu3_datatypes_pb.Timing.AsObject,
    }

    export enum OccurrenceCase {
      OCCURRENCE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
      TIMING = 3,
    }
  }

  export class AsNeeded extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    getAsNeededCase(): AsNeeded.AsNeededCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AsNeeded.AsObject;
    static toObject(includeInstance: boolean, msg: AsNeeded): AsNeeded.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AsNeeded, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AsNeeded;
    static deserializeBinaryFromReader(message: AsNeeded, reader: jspb.BinaryReader): AsNeeded;
  }

  export namespace AsNeeded {
    export type AsObject = {
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum AsNeededCase {
      AS_NEEDED_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }

  export class Requester extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasAgent(): boolean;
    clearAgent(): void;
    getAgent(): proto_stu3_datatypes_pb.Reference | undefined;
    setAgent(value?: proto_stu3_datatypes_pb.Reference): void;

    hasOnBehalfOf(): boolean;
    clearOnBehalfOf(): void;
    getOnBehalfOf(): proto_stu3_datatypes_pb.Reference | undefined;
    setOnBehalfOf(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Requester.AsObject;
    static toObject(includeInstance: boolean, msg: Requester): Requester.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Requester, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Requester;
    static deserializeBinaryFromReader(message: Requester, reader: jspb.BinaryReader): Requester;
  }

  export namespace Requester {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      agent?: proto_stu3_datatypes_pb.Reference.AsObject,
      onBehalfOf?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }
}

export class Resprate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Resprate.CodeableConceptForCode | undefined;
  setCode(value?: Resprate.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Resprate.Effective | undefined;
  setEffective(value?: Resprate.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Resprate.Value | undefined;
  setValue(value?: Resprate.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Resprate.ReferenceRange>;
  setReferenceRange(value: Array<Resprate.ReferenceRange>): void;
  addReferenceRange(value?: Resprate.ReferenceRange, index?: number): Resprate.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Resprate.Related>;
  setRelated(value: Array<Resprate.Related>): void;
  addRelated(value?: Resprate.Related, index?: number): Resprate.Related;

  clearComponent(): void;
  getComponent(): Array<Resprate.Component>;
  setComponent(value: Array<Resprate.Component>): void;
  addComponent(value?: Resprate.Component, index?: number): Resprate.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resprate.AsObject;
  static toObject(includeInstance: boolean, msg: Resprate): Resprate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resprate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resprate;
  static deserializeBinaryFromReader(message: Resprate, reader: jspb.BinaryReader): Resprate;
}

export namespace Resprate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Resprate.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Resprate.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Resprate.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Resprate.ReferenceRange.AsObject>,
    related: Array<Resprate.Related.AsObject>,
    component: Array<Resprate.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearRespRateCode(): void;
    getRespRateCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setRespRateCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addRespRateCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      respRateCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Resprate.Component.Value | undefined;
    setValue(value?: Resprate.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Resprate.ReferenceRange>;
    setReferenceRange(value: Array<Resprate.ReferenceRange>): void;
    addReferenceRange(value?: Resprate.ReferenceRange, index?: number): Resprate.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Resprate.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Resprate.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Shareablecodesystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_stu3_datatypes_pb.String | undefined;
  setVersion(value?: proto_stu3_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_stu3_datatypes_pb.String | undefined;
  setTitle(value?: proto_stu3_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.PublicationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.PublicationStatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_stu3_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_stu3_datatypes_pb.String | undefined;
  setPublisher(value?: proto_stu3_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_stu3_metadatatypes_pb.ContactDetail>;
  setContact(value: Array<proto_stu3_metadatatypes_pb.ContactDetail>): void;
  addContact(value?: proto_stu3_metadatatypes_pb.ContactDetail, index?: number): proto_stu3_metadatatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.Markdown): void;

  clearUseContext(): void;
  getUseContext(): Array<proto_stu3_metadatatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_stu3_metadatatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_stu3_metadatatypes_pb.UsageContext, index?: number): proto_stu3_metadatatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_stu3_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_stu3_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasCaseSensitive(): boolean;
  clearCaseSensitive(): void;
  getCaseSensitive(): proto_stu3_datatypes_pb.Boolean | undefined;
  setCaseSensitive(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasValueSet(): boolean;
  clearValueSet(): void;
  getValueSet(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueSet(value?: proto_stu3_datatypes_pb.Uri): void;

  hasHierarchyMeaning(): boolean;
  clearHierarchyMeaning(): void;
  getHierarchyMeaning(): proto_stu3_codes_pb.CodeSystemHierarchyMeaningCode | undefined;
  setHierarchyMeaning(value?: proto_stu3_codes_pb.CodeSystemHierarchyMeaningCode): void;

  hasCompositional(): boolean;
  clearCompositional(): void;
  getCompositional(): proto_stu3_datatypes_pb.Boolean | undefined;
  setCompositional(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasVersionNeeded(): boolean;
  clearVersionNeeded(): void;
  getVersionNeeded(): proto_stu3_datatypes_pb.Boolean | undefined;
  setVersionNeeded(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_stu3_codes_pb.CodeSystemContentModeCode | undefined;
  setContent(value?: proto_stu3_codes_pb.CodeSystemContentModeCode): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): proto_stu3_datatypes_pb.UnsignedInt | undefined;
  setCount(value?: proto_stu3_datatypes_pb.UnsignedInt): void;

  clearFilter(): void;
  getFilter(): Array<Shareablecodesystem.Filter>;
  setFilter(value: Array<Shareablecodesystem.Filter>): void;
  addFilter(value?: Shareablecodesystem.Filter, index?: number): Shareablecodesystem.Filter;

  clearProperty(): void;
  getProperty(): Array<Shareablecodesystem.Property>;
  setProperty(value: Array<Shareablecodesystem.Property>): void;
  addProperty(value?: Shareablecodesystem.Property, index?: number): Shareablecodesystem.Property;

  clearConcept(): void;
  getConcept(): Array<Shareablecodesystem.ConceptDefinition>;
  setConcept(value: Array<Shareablecodesystem.ConceptDefinition>): void;
  addConcept(value?: Shareablecodesystem.ConceptDefinition, index?: number): Shareablecodesystem.ConceptDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shareablecodesystem.AsObject;
  static toObject(includeInstance: boolean, msg: Shareablecodesystem): Shareablecodesystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Shareablecodesystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shareablecodesystem;
  static deserializeBinaryFromReader(message: Shareablecodesystem, reader: jspb.BinaryReader): Shareablecodesystem;
}

export namespace Shareablecodesystem {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    identifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    version?: proto_stu3_datatypes_pb.String.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    title?: proto_stu3_datatypes_pb.String.AsObject,
    status?: proto_stu3_codes_pb.PublicationStatusCode.AsObject,
    experimental?: proto_stu3_datatypes_pb.Boolean.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    publisher?: proto_stu3_datatypes_pb.String.AsObject,
    contact: Array<proto_stu3_metadatatypes_pb.ContactDetail.AsObject>,
    description?: proto_stu3_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_stu3_metadatatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    purpose?: proto_stu3_datatypes_pb.Markdown.AsObject,
    copyright?: proto_stu3_datatypes_pb.Markdown.AsObject,
    caseSensitive?: proto_stu3_datatypes_pb.Boolean.AsObject,
    valueSet?: proto_stu3_datatypes_pb.Uri.AsObject,
    hierarchyMeaning?: proto_stu3_codes_pb.CodeSystemHierarchyMeaningCode.AsObject,
    compositional?: proto_stu3_datatypes_pb.Boolean.AsObject,
    versionNeeded?: proto_stu3_datatypes_pb.Boolean.AsObject,
    content?: proto_stu3_codes_pb.CodeSystemContentModeCode.AsObject,
    count?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
    filter: Array<Shareablecodesystem.Filter.AsObject>,
    property: Array<Shareablecodesystem.Property.AsObject>,
    concept: Array<Shareablecodesystem.ConceptDefinition.AsObject>,
  }

  export class Filter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Code | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Code): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    clearOperator(): void;
    getOperator(): Array<proto_stu3_codes_pb.FilterOperatorCode>;
    setOperator(value: Array<proto_stu3_codes_pb.FilterOperatorCode>): void;
    addOperator(value?: proto_stu3_codes_pb.FilterOperatorCode, index?: number): proto_stu3_codes_pb.FilterOperatorCode;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): proto_stu3_datatypes_pb.String | undefined;
    setValue(value?: proto_stu3_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Filter.AsObject;
    static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Filter;
    static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
  }

  export namespace Filter {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.Code.AsObject,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      operator: Array<proto_stu3_codes_pb.FilterOperatorCode.AsObject>,
      value?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Property extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Code | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Code): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_stu3_datatypes_pb.Uri | undefined;
    setUri(value?: proto_stu3_datatypes_pb.Uri): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.PropertyTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.PropertyTypeCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Property.AsObject;
    static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Property;
    static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
  }

  export namespace Property {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.Code.AsObject,
      uri?: proto_stu3_datatypes_pb.Uri.AsObject,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      type?: proto_stu3_codes_pb.PropertyTypeCode.AsObject,
    }
  }

  export class ConceptDefinition extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Code | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Code): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_stu3_datatypes_pb.String | undefined;
    setDisplay(value?: proto_stu3_datatypes_pb.String): void;

    hasDefinition(): boolean;
    clearDefinition(): void;
    getDefinition(): proto_stu3_datatypes_pb.String | undefined;
    setDefinition(value?: proto_stu3_datatypes_pb.String): void;

    clearDesignation(): void;
    getDesignation(): Array<Shareablecodesystem.ConceptDefinition.Designation>;
    setDesignation(value: Array<Shareablecodesystem.ConceptDefinition.Designation>): void;
    addDesignation(value?: Shareablecodesystem.ConceptDefinition.Designation, index?: number): Shareablecodesystem.ConceptDefinition.Designation;

    clearProperty(): void;
    getProperty(): Array<Shareablecodesystem.ConceptDefinition.ConceptProperty>;
    setProperty(value: Array<Shareablecodesystem.ConceptDefinition.ConceptProperty>): void;
    addProperty(value?: Shareablecodesystem.ConceptDefinition.ConceptProperty, index?: number): Shareablecodesystem.ConceptDefinition.ConceptProperty;

    clearConcept(): void;
    getConcept(): Array<Shareablecodesystem.ConceptDefinition>;
    setConcept(value: Array<Shareablecodesystem.ConceptDefinition>): void;
    addConcept(value?: Shareablecodesystem.ConceptDefinition, index?: number): Shareablecodesystem.ConceptDefinition;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ConceptDefinition.AsObject;
    static toObject(includeInstance: boolean, msg: ConceptDefinition): ConceptDefinition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ConceptDefinition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ConceptDefinition;
    static deserializeBinaryFromReader(message: ConceptDefinition, reader: jspb.BinaryReader): ConceptDefinition;
  }

  export namespace ConceptDefinition {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.Code.AsObject,
      display?: proto_stu3_datatypes_pb.String.AsObject,
      definition?: proto_stu3_datatypes_pb.String.AsObject,
      designation: Array<Shareablecodesystem.ConceptDefinition.Designation.AsObject>,
      property: Array<Shareablecodesystem.ConceptDefinition.ConceptProperty.AsObject>,
      concept: Array<Shareablecodesystem.ConceptDefinition.AsObject>,
    }

    export class Designation extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasLanguage(): boolean;
      clearLanguage(): void;
      getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
      setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

      hasUse(): boolean;
      clearUse(): void;
      getUse(): proto_stu3_datatypes_pb.Coding | undefined;
      setUse(value?: proto_stu3_datatypes_pb.Coding): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): proto_stu3_datatypes_pb.String | undefined;
      setValue(value?: proto_stu3_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Designation.AsObject;
      static toObject(includeInstance: boolean, msg: Designation): Designation.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Designation, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Designation;
      static deserializeBinaryFromReader(message: Designation, reader: jspb.BinaryReader): Designation;
    }

    export namespace Designation {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
        use?: proto_stu3_datatypes_pb.Coding.AsObject,
        value?: proto_stu3_datatypes_pb.String.AsObject,
      }
    }

    export class ConceptProperty extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_stu3_datatypes_pb.Code | undefined;
      setCode(value?: proto_stu3_datatypes_pb.Code): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): Shareablecodesystem.ConceptDefinition.ConceptProperty.Value | undefined;
      setValue(value?: Shareablecodesystem.ConceptDefinition.ConceptProperty.Value): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConceptProperty.AsObject;
      static toObject(includeInstance: boolean, msg: ConceptProperty): ConceptProperty.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConceptProperty, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConceptProperty;
      static deserializeBinaryFromReader(message: ConceptProperty, reader: jspb.BinaryReader): ConceptProperty;
    }

    export namespace ConceptProperty {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        code?: proto_stu3_datatypes_pb.Code.AsObject,
        value?: Shareablecodesystem.ConceptDefinition.ConceptProperty.Value.AsObject,
      }

      export class Value extends jspb.Message {
        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_stu3_datatypes_pb.Code | undefined;
        setCode(value?: proto_stu3_datatypes_pb.Code): void;

        hasCoding(): boolean;
        clearCoding(): void;
        getCoding(): proto_stu3_datatypes_pb.Coding | undefined;
        setCoding(value?: proto_stu3_datatypes_pb.Coding): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_stu3_datatypes_pb.String | undefined;
        setStringValue(value?: proto_stu3_datatypes_pb.String): void;

        hasInteger(): boolean;
        clearInteger(): void;
        getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
        setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
        setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

        hasDateTime(): boolean;
        clearDateTime(): void;
        getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
        setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

        getValueCase(): Value.ValueCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Value.AsObject;
        static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Value;
        static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
      }

      export namespace Value {
        export type AsObject = {
          code?: proto_stu3_datatypes_pb.Code.AsObject,
          coding?: proto_stu3_datatypes_pb.Coding.AsObject,
          stringValue?: proto_stu3_datatypes_pb.String.AsObject,
          integer?: proto_stu3_datatypes_pb.Integer.AsObject,
          pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
          dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        }

        export enum ValueCase {
          VALUE_NOT_SET = 0,
          CODE = 1,
          CODING = 2,
          STRING_VALUE = 3,
          INTEGER = 4,
          BOOLEAN = 5,
          DATE_TIME = 6,
        }
      }
    }
  }
}

export class Shareablevalueset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): proto_stu3_datatypes_pb.String | undefined;
  setVersion(value?: proto_stu3_datatypes_pb.String): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_stu3_datatypes_pb.String | undefined;
  setTitle(value?: proto_stu3_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.PublicationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.PublicationStatusCode): void;

  hasExperimental(): boolean;
  clearExperimental(): void;
  getExperimental(): proto_stu3_datatypes_pb.Boolean | undefined;
  setExperimental(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

  hasPublisher(): boolean;
  clearPublisher(): void;
  getPublisher(): proto_stu3_datatypes_pb.String | undefined;
  setPublisher(value?: proto_stu3_datatypes_pb.String): void;

  clearContact(): void;
  getContact(): Array<proto_stu3_metadatatypes_pb.ContactDetail>;
  setContact(value: Array<proto_stu3_metadatatypes_pb.ContactDetail>): void;
  addContact(value?: proto_stu3_metadatatypes_pb.ContactDetail, index?: number): proto_stu3_metadatatypes_pb.ContactDetail;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_stu3_datatypes_pb.Markdown | undefined;
  setDescription(value?: proto_stu3_datatypes_pb.Markdown): void;

  clearUseContext(): void;
  getUseContext(): Array<proto_stu3_metadatatypes_pb.UsageContext>;
  setUseContext(value: Array<proto_stu3_metadatatypes_pb.UsageContext>): void;
  addUseContext(value?: proto_stu3_metadatatypes_pb.UsageContext, index?: number): proto_stu3_metadatatypes_pb.UsageContext;

  clearJurisdiction(): void;
  getJurisdiction(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setJurisdiction(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addJurisdiction(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasImmutable(): boolean;
  clearImmutable(): void;
  getImmutable(): proto_stu3_datatypes_pb.Boolean | undefined;
  setImmutable(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasPurpose(): boolean;
  clearPurpose(): void;
  getPurpose(): proto_stu3_datatypes_pb.Markdown | undefined;
  setPurpose(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasCopyright(): boolean;
  clearCopyright(): void;
  getCopyright(): proto_stu3_datatypes_pb.Markdown | undefined;
  setCopyright(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasExtensible(): boolean;
  clearExtensible(): void;
  getExtensible(): proto_stu3_datatypes_pb.Boolean | undefined;
  setExtensible(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasCompose(): boolean;
  clearCompose(): void;
  getCompose(): Shareablevalueset.Compose | undefined;
  setCompose(value?: Shareablevalueset.Compose): void;

  hasExpansion(): boolean;
  clearExpansion(): void;
  getExpansion(): Shareablevalueset.Expansion | undefined;
  setExpansion(value?: Shareablevalueset.Expansion): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Shareablevalueset.AsObject;
  static toObject(includeInstance: boolean, msg: Shareablevalueset): Shareablevalueset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Shareablevalueset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Shareablevalueset;
  static deserializeBinaryFromReader(message: Shareablevalueset, reader: jspb.BinaryReader): Shareablevalueset;
}

export namespace Shareablevalueset {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    version?: proto_stu3_datatypes_pb.String.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    title?: proto_stu3_datatypes_pb.String.AsObject,
    status?: proto_stu3_codes_pb.PublicationStatusCode.AsObject,
    experimental?: proto_stu3_datatypes_pb.Boolean.AsObject,
    date?: proto_stu3_datatypes_pb.DateTime.AsObject,
    publisher?: proto_stu3_datatypes_pb.String.AsObject,
    contact: Array<proto_stu3_metadatatypes_pb.ContactDetail.AsObject>,
    description?: proto_stu3_datatypes_pb.Markdown.AsObject,
    useContext: Array<proto_stu3_metadatatypes_pb.UsageContext.AsObject>,
    jurisdiction: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    immutable?: proto_stu3_datatypes_pb.Boolean.AsObject,
    purpose?: proto_stu3_datatypes_pb.Markdown.AsObject,
    copyright?: proto_stu3_datatypes_pb.Markdown.AsObject,
    extensible?: proto_stu3_datatypes_pb.Boolean.AsObject,
    compose?: Shareablevalueset.Compose.AsObject,
    expansion?: Shareablevalueset.Expansion.AsObject,
  }

  export class Compose extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLockedDate(): boolean;
    clearLockedDate(): void;
    getLockedDate(): proto_stu3_datatypes_pb.Date | undefined;
    setLockedDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasInactive(): boolean;
    clearInactive(): void;
    getInactive(): proto_stu3_datatypes_pb.Boolean | undefined;
    setInactive(value?: proto_stu3_datatypes_pb.Boolean): void;

    clearInclude(): void;
    getInclude(): Array<Shareablevalueset.Compose.ConceptSet>;
    setInclude(value: Array<Shareablevalueset.Compose.ConceptSet>): void;
    addInclude(value?: Shareablevalueset.Compose.ConceptSet, index?: number): Shareablevalueset.Compose.ConceptSet;

    clearExclude(): void;
    getExclude(): Array<Shareablevalueset.Compose.ConceptSet>;
    setExclude(value: Array<Shareablevalueset.Compose.ConceptSet>): void;
    addExclude(value?: Shareablevalueset.Compose.ConceptSet, index?: number): Shareablevalueset.Compose.ConceptSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Compose.AsObject;
    static toObject(includeInstance: boolean, msg: Compose): Compose.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Compose, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Compose;
    static deserializeBinaryFromReader(message: Compose, reader: jspb.BinaryReader): Compose;
  }

  export namespace Compose {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      lockedDate?: proto_stu3_datatypes_pb.Date.AsObject,
      inactive?: proto_stu3_datatypes_pb.Boolean.AsObject,
      include: Array<Shareablevalueset.Compose.ConceptSet.AsObject>,
      exclude: Array<Shareablevalueset.Compose.ConceptSet.AsObject>,
    }

    export class ConceptSet extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasSystem(): boolean;
      clearSystem(): void;
      getSystem(): proto_stu3_datatypes_pb.Uri | undefined;
      setSystem(value?: proto_stu3_datatypes_pb.Uri): void;

      hasVersion(): boolean;
      clearVersion(): void;
      getVersion(): proto_stu3_datatypes_pb.String | undefined;
      setVersion(value?: proto_stu3_datatypes_pb.String): void;

      clearConcept(): void;
      getConcept(): Array<Shareablevalueset.Compose.ConceptSet.ConceptReference>;
      setConcept(value: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference>): void;
      addConcept(value?: Shareablevalueset.Compose.ConceptSet.ConceptReference, index?: number): Shareablevalueset.Compose.ConceptSet.ConceptReference;

      clearFilter(): void;
      getFilter(): Array<Shareablevalueset.Compose.ConceptSet.Filter>;
      setFilter(value: Array<Shareablevalueset.Compose.ConceptSet.Filter>): void;
      addFilter(value?: Shareablevalueset.Compose.ConceptSet.Filter, index?: number): Shareablevalueset.Compose.ConceptSet.Filter;

      clearValueSet(): void;
      getValueSet(): Array<proto_stu3_datatypes_pb.Uri>;
      setValueSet(value: Array<proto_stu3_datatypes_pb.Uri>): void;
      addValueSet(value?: proto_stu3_datatypes_pb.Uri, index?: number): proto_stu3_datatypes_pb.Uri;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ConceptSet.AsObject;
      static toObject(includeInstance: boolean, msg: ConceptSet): ConceptSet.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ConceptSet, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ConceptSet;
      static deserializeBinaryFromReader(message: ConceptSet, reader: jspb.BinaryReader): ConceptSet;
    }

    export namespace ConceptSet {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        system?: proto_stu3_datatypes_pb.Uri.AsObject,
        version?: proto_stu3_datatypes_pb.String.AsObject,
        concept: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.AsObject>,
        filter: Array<Shareablevalueset.Compose.ConceptSet.Filter.AsObject>,
        valueSet: Array<proto_stu3_datatypes_pb.Uri.AsObject>,
      }

      export class ConceptReference extends jspb.Message {
        hasId(): boolean;
        clearId(): void;
        getId(): proto_stu3_datatypes_pb.String | undefined;
        setId(value?: proto_stu3_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
        setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
        addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

        clearModifierExtension(): void;
        getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
        setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
        addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_stu3_datatypes_pb.Code | undefined;
        setCode(value?: proto_stu3_datatypes_pb.Code): void;

        hasDisplay(): boolean;
        clearDisplay(): void;
        getDisplay(): proto_stu3_datatypes_pb.String | undefined;
        setDisplay(value?: proto_stu3_datatypes_pb.String): void;

        clearDesignation(): void;
        getDesignation(): Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation>;
        setDesignation(value: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation>): void;
        addDesignation(value?: Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation, index?: number): Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConceptReference.AsObject;
        static toObject(includeInstance: boolean, msg: ConceptReference): ConceptReference.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConceptReference, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConceptReference;
        static deserializeBinaryFromReader(message: ConceptReference, reader: jspb.BinaryReader): ConceptReference;
      }

      export namespace ConceptReference {
        export type AsObject = {
          id?: proto_stu3_datatypes_pb.String.AsObject,
          extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
          code?: proto_stu3_datatypes_pb.Code.AsObject,
          display?: proto_stu3_datatypes_pb.String.AsObject,
          designation: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation.AsObject>,
        }

        export class Designation extends jspb.Message {
          hasId(): boolean;
          clearId(): void;
          getId(): proto_stu3_datatypes_pb.String | undefined;
          setId(value?: proto_stu3_datatypes_pb.String): void;

          clearExtension(): void;
          getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
          setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
          addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

          clearModifierExtension(): void;
          getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
          setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
          addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

          hasLanguage(): boolean;
          clearLanguage(): void;
          getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
          setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

          hasUse(): boolean;
          clearUse(): void;
          getUse(): proto_stu3_datatypes_pb.Coding | undefined;
          setUse(value?: proto_stu3_datatypes_pb.Coding): void;

          hasValue(): boolean;
          clearValue(): void;
          getValue(): proto_stu3_datatypes_pb.String | undefined;
          setValue(value?: proto_stu3_datatypes_pb.String): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Designation.AsObject;
          static toObject(includeInstance: boolean, msg: Designation): Designation.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: Designation, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Designation;
          static deserializeBinaryFromReader(message: Designation, reader: jspb.BinaryReader): Designation;
        }

        export namespace Designation {
          export type AsObject = {
            id?: proto_stu3_datatypes_pb.String.AsObject,
            extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
            modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
            language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
            use?: proto_stu3_datatypes_pb.Coding.AsObject,
            value?: proto_stu3_datatypes_pb.String.AsObject,
          }
        }
      }

      export class Filter extends jspb.Message {
        hasId(): boolean;
        clearId(): void;
        getId(): proto_stu3_datatypes_pb.String | undefined;
        setId(value?: proto_stu3_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
        setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
        addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

        clearModifierExtension(): void;
        getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
        setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
        addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

        hasProperty(): boolean;
        clearProperty(): void;
        getProperty(): proto_stu3_datatypes_pb.Code | undefined;
        setProperty(value?: proto_stu3_datatypes_pb.Code): void;

        hasOp(): boolean;
        clearOp(): void;
        getOp(): proto_stu3_codes_pb.FilterOperatorCode | undefined;
        setOp(value?: proto_stu3_codes_pb.FilterOperatorCode): void;

        hasValue(): boolean;
        clearValue(): void;
        getValue(): proto_stu3_datatypes_pb.Code | undefined;
        setValue(value?: proto_stu3_datatypes_pb.Code): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Filter.AsObject;
        static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Filter;
        static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
      }

      export namespace Filter {
        export type AsObject = {
          id?: proto_stu3_datatypes_pb.String.AsObject,
          extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
          property?: proto_stu3_datatypes_pb.Code.AsObject,
          op?: proto_stu3_codes_pb.FilterOperatorCode.AsObject,
          value?: proto_stu3_datatypes_pb.Code.AsObject,
        }
      }
    }
  }

  export class Expansion extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasIdentifier(): boolean;
    clearIdentifier(): void;
    getIdentifier(): proto_stu3_datatypes_pb.Uri | undefined;
    setIdentifier(value?: proto_stu3_datatypes_pb.Uri): void;

    hasTimestamp(): boolean;
    clearTimestamp(): void;
    getTimestamp(): proto_stu3_datatypes_pb.DateTime | undefined;
    setTimestamp(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasTotal(): boolean;
    clearTotal(): void;
    getTotal(): proto_stu3_datatypes_pb.Integer | undefined;
    setTotal(value?: proto_stu3_datatypes_pb.Integer): void;

    hasOffset(): boolean;
    clearOffset(): void;
    getOffset(): proto_stu3_datatypes_pb.Integer | undefined;
    setOffset(value?: proto_stu3_datatypes_pb.Integer): void;

    clearParameter(): void;
    getParameter(): Array<Shareablevalueset.Expansion.Parameter>;
    setParameter(value: Array<Shareablevalueset.Expansion.Parameter>): void;
    addParameter(value?: Shareablevalueset.Expansion.Parameter, index?: number): Shareablevalueset.Expansion.Parameter;

    clearContains(): void;
    getContains(): Array<Shareablevalueset.Expansion.Contains>;
    setContains(value: Array<Shareablevalueset.Expansion.Contains>): void;
    addContains(value?: Shareablevalueset.Expansion.Contains, index?: number): Shareablevalueset.Expansion.Contains;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Expansion.AsObject;
    static toObject(includeInstance: boolean, msg: Expansion): Expansion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Expansion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Expansion;
    static deserializeBinaryFromReader(message: Expansion, reader: jspb.BinaryReader): Expansion;
  }

  export namespace Expansion {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      identifier?: proto_stu3_datatypes_pb.Uri.AsObject,
      timestamp?: proto_stu3_datatypes_pb.DateTime.AsObject,
      total?: proto_stu3_datatypes_pb.Integer.AsObject,
      offset?: proto_stu3_datatypes_pb.Integer.AsObject,
      parameter: Array<Shareablevalueset.Expansion.Parameter.AsObject>,
      contains: Array<Shareablevalueset.Expansion.Contains.AsObject>,
    }

    export class Parameter extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasName(): boolean;
      clearName(): void;
      getName(): proto_stu3_datatypes_pb.String | undefined;
      setName(value?: proto_stu3_datatypes_pb.String): void;

      hasValue(): boolean;
      clearValue(): void;
      getValue(): Shareablevalueset.Expansion.Parameter.Value | undefined;
      setValue(value?: Shareablevalueset.Expansion.Parameter.Value): void;

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
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        name?: proto_stu3_datatypes_pb.String.AsObject,
        value?: Shareablevalueset.Expansion.Parameter.Value.AsObject,
      }

      export class Value extends jspb.Message {
        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_stu3_datatypes_pb.String | undefined;
        setStringValue(value?: proto_stu3_datatypes_pb.String): void;

        hasBoolean(): boolean;
        clearBoolean(): void;
        getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
        setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

        hasInteger(): boolean;
        clearInteger(): void;
        getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
        setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

        hasDecimal(): boolean;
        clearDecimal(): void;
        getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
        setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

        hasUri(): boolean;
        clearUri(): void;
        getUri(): proto_stu3_datatypes_pb.Uri | undefined;
        setUri(value?: proto_stu3_datatypes_pb.Uri): void;

        hasCode(): boolean;
        clearCode(): void;
        getCode(): proto_stu3_datatypes_pb.Code | undefined;
        setCode(value?: proto_stu3_datatypes_pb.Code): void;

        getValueCase(): Value.ValueCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Value.AsObject;
        static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Value;
        static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
      }

      export namespace Value {
        export type AsObject = {
          stringValue?: proto_stu3_datatypes_pb.String.AsObject,
          pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
          integer?: proto_stu3_datatypes_pb.Integer.AsObject,
          decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
          uri?: proto_stu3_datatypes_pb.Uri.AsObject,
          code?: proto_stu3_datatypes_pb.Code.AsObject,
        }

        export enum ValueCase {
          VALUE_NOT_SET = 0,
          STRING_VALUE = 1,
          BOOLEAN = 2,
          INTEGER = 3,
          DECIMAL = 4,
          URI = 5,
          CODE = 6,
        }
      }
    }

    export class Contains extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      clearModifierExtension(): void;
      getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
      setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasSystem(): boolean;
      clearSystem(): void;
      getSystem(): proto_stu3_datatypes_pb.Uri | undefined;
      setSystem(value?: proto_stu3_datatypes_pb.Uri): void;

      hasAbstract(): boolean;
      clearAbstract(): void;
      getAbstract(): proto_stu3_datatypes_pb.Boolean | undefined;
      setAbstract(value?: proto_stu3_datatypes_pb.Boolean): void;

      hasInactive(): boolean;
      clearInactive(): void;
      getInactive(): proto_stu3_datatypes_pb.Boolean | undefined;
      setInactive(value?: proto_stu3_datatypes_pb.Boolean): void;

      hasVersion(): boolean;
      clearVersion(): void;
      getVersion(): proto_stu3_datatypes_pb.String | undefined;
      setVersion(value?: proto_stu3_datatypes_pb.String): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_stu3_datatypes_pb.Code | undefined;
      setCode(value?: proto_stu3_datatypes_pb.Code): void;

      hasDisplay(): boolean;
      clearDisplay(): void;
      getDisplay(): proto_stu3_datatypes_pb.String | undefined;
      setDisplay(value?: proto_stu3_datatypes_pb.String): void;

      clearDesignation(): void;
      getDesignation(): Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation>;
      setDesignation(value: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation>): void;
      addDesignation(value?: Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation, index?: number): Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation;

      clearContains(): void;
      getContains(): Array<Shareablevalueset.Expansion.Contains>;
      setContains(value: Array<Shareablevalueset.Expansion.Contains>): void;
      addContains(value?: Shareablevalueset.Expansion.Contains, index?: number): Shareablevalueset.Expansion.Contains;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Contains.AsObject;
      static toObject(includeInstance: boolean, msg: Contains): Contains.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Contains, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Contains;
      static deserializeBinaryFromReader(message: Contains, reader: jspb.BinaryReader): Contains;
    }

    export namespace Contains {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        system?: proto_stu3_datatypes_pb.Uri.AsObject,
        pb_abstract?: proto_stu3_datatypes_pb.Boolean.AsObject,
        inactive?: proto_stu3_datatypes_pb.Boolean.AsObject,
        version?: proto_stu3_datatypes_pb.String.AsObject,
        code?: proto_stu3_datatypes_pb.Code.AsObject,
        display?: proto_stu3_datatypes_pb.String.AsObject,
        designation: Array<Shareablevalueset.Compose.ConceptSet.ConceptReference.Designation.AsObject>,
        contains: Array<Shareablevalueset.Expansion.Contains.AsObject>,
      }
    }
  }
}

export class Triglyceride extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Triglyceride.Effective | undefined;
  setEffective(value?: Triglyceride.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Triglyceride.Value | undefined;
  setValue(value?: Triglyceride.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  hasReferenceRange(): boolean;
  clearReferenceRange(): void;
  getReferenceRange(): Triglyceride.ReferenceRange | undefined;
  setReferenceRange(value?: Triglyceride.ReferenceRange): void;

  clearComponent(): void;
  getComponent(): Array<Triglyceride.Component>;
  setComponent(value: Array<Triglyceride.Component>): void;
  addComponent(value?: Triglyceride.Component, index?: number): Triglyceride.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Triglyceride.AsObject;
  static toObject(includeInstance: boolean, msg: Triglyceride): Triglyceride.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Triglyceride, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Triglyceride;
  static deserializeBinaryFromReader(message: Triglyceride, reader: jspb.BinaryReader): Triglyceride;
}

export namespace Triglyceride {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Triglyceride.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Triglyceride.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange?: Triglyceride.ReferenceRange.AsObject,
    component: Array<Triglyceride.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Triglyceride.Component.Value | undefined;
    setValue(value?: Triglyceride.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Triglyceride.ReferenceRange>;
    setReferenceRange(value: Array<Triglyceride.ReferenceRange>): void;
    addReferenceRange(value?: Triglyceride.ReferenceRange, index?: number): Triglyceride.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Triglyceride.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Triglyceride.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_stu3_datatypes_pb.Range | undefined;
      setRange(value?: proto_stu3_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_stu3_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_stu3_datatypes_pb.SampledData): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_stu3_datatypes_pb.Time | undefined;
      setTime(value?: proto_stu3_datatypes_pb.Time): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
        codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        range?: proto_stu3_datatypes_pb.Range.AsObject,
        ratio?: proto_stu3_datatypes_pb.Ratio.AsObject,
        sampledData?: proto_stu3_datatypes_pb.SampledData.AsObject,
        attachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
        time?: proto_stu3_datatypes_pb.Time.AsObject,
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
        CODEABLE_CONCEPT = 2,
        STRING_VALUE = 3,
        RANGE = 4,
        RATIO = 5,
        SAMPLED_DATA = 6,
        ATTACHMENT = 7,
        TIME = 8,
        DATE_TIME = 9,
        PERIOD = 10,
      }
    }
  }
}

export class Vitalsigns extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Vitalsigns.Effective | undefined;
  setEffective(value?: Vitalsigns.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Vitalsigns.Value | undefined;
  setValue(value?: Vitalsigns.Value): void;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Vitalsigns.ReferenceRange>;
  setReferenceRange(value: Array<Vitalsigns.ReferenceRange>): void;
  addReferenceRange(value?: Vitalsigns.ReferenceRange, index?: number): Vitalsigns.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Vitalsigns.Related>;
  setRelated(value: Array<Vitalsigns.Related>): void;
  addRelated(value?: Vitalsigns.Related, index?: number): Vitalsigns.Related;

  clearComponent(): void;
  getComponent(): Array<Vitalsigns.Component>;
  setComponent(value: Array<Vitalsigns.Component>): void;
  addComponent(value?: Vitalsigns.Component, index?: number): Vitalsigns.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vitalsigns.AsObject;
  static toObject(includeInstance: boolean, msg: Vitalsigns): Vitalsigns.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vitalsigns, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vitalsigns;
  static deserializeBinaryFromReader(message: Vitalsigns, reader: jspb.BinaryReader): Vitalsigns;
}

export namespace Vitalsigns {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Vitalsigns.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    value?: Vitalsigns.Value.AsObject,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Vitalsigns.ReferenceRange.AsObject>,
    related: Array<Vitalsigns.Related.AsObject>,
    component: Array<Vitalsigns.Component.AsObject>,
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class Value extends jspb.Message {
    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    getValueCase(): Value.ValueCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Value.AsObject;
    static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Value;
    static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
  }

  export namespace Value {
    export type AsObject = {
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      QUANTITY = 1,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Vitalsigns.Component.Value | undefined;
    setValue(value?: Vitalsigns.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Vitalsigns.ReferenceRange>;
    setReferenceRange(value: Array<Vitalsigns.ReferenceRange>): void;
    addReferenceRange(value?: Vitalsigns.ReferenceRange, index?: number): Vitalsigns.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Vitalsigns.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Vitalsigns.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

export class Vitalspanel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.Id | undefined;
  setId(value?: proto_stu3_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_stu3_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_stu3_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_stu3_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_stu3_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLanguage(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_metadatatypes_pb.Narrative | undefined;
  setText(value?: proto_stu3_metadatatypes_pb.Narrative): void;

  clearContained(): void;
  getContained(): Array<proto_stu3_resources_pb.ContainedResource>;
  setContained(value: Array<proto_stu3_resources_pb.ContainedResource>): void;
  addContained(value?: proto_stu3_resources_pb.ContainedResource, index?: number): proto_stu3_resources_pb.ContainedResource;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtension(): void;
  getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_stu3_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_stu3_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_stu3_datatypes_pb.Identifier, index?: number): proto_stu3_datatypes_pb.Identifier;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_stu3_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.ObservationStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.ObservationStatusCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): Vitalspanel.CodeableConceptForCode | undefined;
  setCode(value?: Vitalspanel.CodeableConceptForCode): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_stu3_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_stu3_datatypes_pb.Reference): void;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): proto_stu3_datatypes_pb.Reference | undefined;
  setContext(value?: proto_stu3_datatypes_pb.Reference): void;

  hasEffective(): boolean;
  clearEffective(): void;
  getEffective(): Vitalspanel.Effective | undefined;
  setEffective(value?: Vitalspanel.Effective): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_stu3_datatypes_pb.Instant | undefined;
  setIssued(value?: proto_stu3_datatypes_pb.Instant): void;

  clearPerformer(): void;
  getPerformer(): Array<proto_stu3_datatypes_pb.Reference>;
  setPerformer(value: Array<proto_stu3_datatypes_pb.Reference>): void;
  addPerformer(value?: proto_stu3_datatypes_pb.Reference, index?: number): proto_stu3_datatypes_pb.Reference;

  hasDataAbsentReason(): boolean;
  clearDataAbsentReason(): void;
  getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasComment(): boolean;
  clearComment(): void;
  getComment(): proto_stu3_datatypes_pb.String | undefined;
  setComment(value?: proto_stu3_datatypes_pb.String): void;

  hasBodySite(): boolean;
  clearBodySite(): void;
  getBodySite(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setBodySite(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_stu3_datatypes_pb.Reference | undefined;
  setDevice(value?: proto_stu3_datatypes_pb.Reference): void;

  clearReferenceRange(): void;
  getReferenceRange(): Array<Vitalspanel.ReferenceRange>;
  setReferenceRange(value: Array<Vitalspanel.ReferenceRange>): void;
  addReferenceRange(value?: Vitalspanel.ReferenceRange, index?: number): Vitalspanel.ReferenceRange;

  clearRelated(): void;
  getRelated(): Array<Vitalspanel.Related>;
  setRelated(value: Array<Vitalspanel.Related>): void;
  addRelated(value?: Vitalspanel.Related, index?: number): Vitalspanel.Related;

  clearComponent(): void;
  getComponent(): Array<Vitalspanel.Component>;
  setComponent(value: Array<Vitalspanel.Component>): void;
  addComponent(value?: Vitalspanel.Component, index?: number): Vitalspanel.Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vitalspanel.AsObject;
  static toObject(includeInstance: boolean, msg: Vitalspanel): Vitalspanel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Vitalspanel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vitalspanel;
  static deserializeBinaryFromReader(message: Vitalspanel, reader: jspb.BinaryReader): Vitalspanel;
}

export namespace Vitalspanel {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.Id.AsObject,
    meta?: proto_stu3_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_stu3_datatypes_pb.Uri.AsObject,
    language?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    text?: proto_stu3_metadatatypes_pb.Narrative.AsObject,
    contained: Array<proto_stu3_resources_pb.ContainedResource.AsObject>,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    identifier: Array<proto_stu3_datatypes_pb.Identifier.AsObject>,
    basedOn: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    status?: proto_stu3_codes_pb.ObservationStatusCode.AsObject,
    category: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    code?: Vitalspanel.CodeableConceptForCode.AsObject,
    subject?: proto_stu3_datatypes_pb.Reference.AsObject,
    context?: proto_stu3_datatypes_pb.Reference.AsObject,
    effective?: Vitalspanel.Effective.AsObject,
    issued?: proto_stu3_datatypes_pb.Instant.AsObject,
    performer: Array<proto_stu3_datatypes_pb.Reference.AsObject>,
    dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    comment?: proto_stu3_datatypes_pb.String.AsObject,
    bodySite?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    device?: proto_stu3_datatypes_pb.Reference.AsObject,
    referenceRange: Array<Vitalspanel.ReferenceRange.AsObject>,
    related: Array<Vitalspanel.Related.AsObject>,
    component: Array<Vitalspanel.Component.AsObject>,
  }

  export class CodeableConceptForCode extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearCoding(): void;
    getCoding(): Array<proto_stu3_datatypes_pb.Coding>;
    setCoding(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

    clearBodyWeightCode(): void;
    getBodyWeightCode(): Array<proto_stu3_datatypes_pb.CodingWithFixedCode>;
    setBodyWeightCode(value: Array<proto_stu3_datatypes_pb.CodingWithFixedCode>): void;
    addBodyWeightCode(value?: proto_stu3_datatypes_pb.CodingWithFixedCode, index?: number): proto_stu3_datatypes_pb.CodingWithFixedCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeableConceptForCode.AsObject;
    static toObject(includeInstance: boolean, msg: CodeableConceptForCode): CodeableConceptForCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeableConceptForCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeableConceptForCode;
    static deserializeBinaryFromReader(message: CodeableConceptForCode, reader: jspb.BinaryReader): CodeableConceptForCode;
  }

  export namespace CodeableConceptForCode {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      coding: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      text?: proto_stu3_datatypes_pb.String.AsObject,
      bodyWeightCode: Array<proto_stu3_datatypes_pb.CodingWithFixedCode.AsObject>,
    }
  }

  export class Effective extends jspb.Message {
    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

    getEffectiveCase(): Effective.EffectiveCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Effective.AsObject;
    static toObject(includeInstance: boolean, msg: Effective): Effective.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Effective, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Effective;
    static deserializeBinaryFromReader(message: Effective, reader: jspb.BinaryReader): Effective;
  }

  export namespace Effective {
    export type AsObject = {
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      period?: proto_stu3_datatypes_pb.Period.AsObject,
    }

    export enum EffectiveCase {
      EFFECTIVE_NOT_SET = 0,
      DATE_TIME = 1,
      PERIOD = 2,
    }
  }

  export class ReferenceRange extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLow(): boolean;
    clearLow(): void;
    getLow(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setLow(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasHigh(): boolean;
    clearHigh(): void;
    getHigh(): proto_stu3_datatypes_pb.SimpleQuantity | undefined;
    setHigh(value?: proto_stu3_datatypes_pb.SimpleQuantity): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Range | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Range): void;

    hasText(): boolean;
    clearText(): void;
    getText(): proto_stu3_datatypes_pb.String | undefined;
    setText(value?: proto_stu3_datatypes_pb.String): void;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      low?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      high?: proto_stu3_datatypes_pb.SimpleQuantity.AsObject,
      type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
      age?: proto_stu3_datatypes_pb.Range.AsObject,
      text?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }

  export class Related extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_stu3_codes_pb.ObservationRelationshipTypeCode | undefined;
    setType(value?: proto_stu3_codes_pb.ObservationRelationshipTypeCode): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Related.AsObject;
    static toObject(includeInstance: boolean, msg: Related): Related.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Related, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Related;
    static deserializeBinaryFromReader(message: Related, reader: jspb.BinaryReader): Related;
  }

  export namespace Related {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      type?: proto_stu3_codes_pb.ObservationRelationshipTypeCode.AsObject,
      target?: proto_stu3_datatypes_pb.Reference.AsObject,
    }
  }

  export class Component extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_stu3_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Vitalspanel.Component.Value | undefined;
    setValue(value?: Vitalspanel.Component.Value): void;

    hasDataAbsentReason(): boolean;
    clearDataAbsentReason(): void;
    getDataAbsentReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setDataAbsentReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasInterpretation(): boolean;
    clearInterpretation(): void;
    getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    clearReferenceRange(): void;
    getReferenceRange(): Array<Vitalspanel.ReferenceRange>;
    setReferenceRange(value: Array<Vitalspanel.ReferenceRange>): void;
    addReferenceRange(value?: Vitalspanel.ReferenceRange, index?: number): Vitalspanel.ReferenceRange;

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
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      value?: Vitalspanel.Component.Value.AsObject,
      dataAbsentReason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      referenceRange: Array<Vitalspanel.ReferenceRange.AsObject>,
    }

    export class Value extends jspb.Message {
      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

      getValueCase(): Value.ValueCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Value.AsObject;
      static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Value;
      static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
    }

    export namespace Value {
      export type AsObject = {
        quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        QUANTITY = 1,
      }
    }
  }
}

