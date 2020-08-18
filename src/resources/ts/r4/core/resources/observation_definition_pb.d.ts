// package: google.fhir.r4.core
// file: proto/r4/core/resources/observation_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ObservationDefinition extends jspb.Message {
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

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  clearPermittedDataType(): void;
  getPermittedDataType(): Array<ObservationDefinition.PermittedDataTypeCode>;
  setPermittedDataType(value: Array<ObservationDefinition.PermittedDataTypeCode>): void;
  addPermittedDataType(value?: ObservationDefinition.PermittedDataTypeCode, index?: number): ObservationDefinition.PermittedDataTypeCode;

  hasMultipleResultsAllowed(): boolean;
  clearMultipleResultsAllowed(): void;
  getMultipleResultsAllowed(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setMultipleResultsAllowed(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasPreferredReportName(): boolean;
  clearPreferredReportName(): void;
  getPreferredReportName(): proto_r4_core_datatypes_pb.String | undefined;
  setPreferredReportName(value?: proto_r4_core_datatypes_pb.String): void;

  hasQuantitativeDetails(): boolean;
  clearQuantitativeDetails(): void;
  getQuantitativeDetails(): ObservationDefinition.QuantitativeDetails | undefined;
  setQuantitativeDetails(value?: ObservationDefinition.QuantitativeDetails): void;

  clearQualifiedInterval(): void;
  getQualifiedInterval(): Array<ObservationDefinition.QualifiedInterval>;
  setQualifiedInterval(value: Array<ObservationDefinition.QualifiedInterval>): void;
  addQualifiedInterval(value?: ObservationDefinition.QualifiedInterval, index?: number): ObservationDefinition.QualifiedInterval;

  hasValidCodedValueSet(): boolean;
  clearValidCodedValueSet(): void;
  getValidCodedValueSet(): proto_r4_core_datatypes_pb.Reference | undefined;
  setValidCodedValueSet(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasNormalCodedValueSet(): boolean;
  clearNormalCodedValueSet(): void;
  getNormalCodedValueSet(): proto_r4_core_datatypes_pb.Reference | undefined;
  setNormalCodedValueSet(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasAbnormalCodedValueSet(): boolean;
  clearAbnormalCodedValueSet(): void;
  getAbnormalCodedValueSet(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAbnormalCodedValueSet(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCriticalCodedValueSet(): boolean;
  clearCriticalCodedValueSet(): void;
  getCriticalCodedValueSet(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCriticalCodedValueSet(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDefinition): ObservationDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDefinition;
  static deserializeBinaryFromReader(message: ObservationDefinition, reader: jspb.BinaryReader): ObservationDefinition;
}

export namespace ObservationDefinition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    permittedDataType: Array<ObservationDefinition.PermittedDataTypeCode.AsObject>,
    multipleResultsAllowed?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    method?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    preferredReportName?: proto_r4_core_datatypes_pb.String.AsObject,
    quantitativeDetails?: ObservationDefinition.QuantitativeDetails.AsObject,
    qualifiedInterval: Array<ObservationDefinition.QualifiedInterval.AsObject>,
    validCodedValueSet?: proto_r4_core_datatypes_pb.Reference.AsObject,
    normalCodedValueSet?: proto_r4_core_datatypes_pb.Reference.AsObject,
    abnormalCodedValueSet?: proto_r4_core_datatypes_pb.Reference.AsObject,
    criticalCodedValueSet?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class PermittedDataTypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PermittedDataTypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: PermittedDataTypeCode): PermittedDataTypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PermittedDataTypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PermittedDataTypeCode;
    static deserializeBinaryFromReader(message: PermittedDataTypeCode, reader: jspb.BinaryReader): PermittedDataTypeCode;
  }

  export namespace PermittedDataTypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationDataTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class QuantitativeDetails extends jspb.Message {
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

    hasCustomaryUnit(): boolean;
    clearCustomaryUnit(): void;
    getCustomaryUnit(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCustomaryUnit(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasUnit(): boolean;
    clearUnit(): void;
    getUnit(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setUnit(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasConversionFactor(): boolean;
    clearConversionFactor(): void;
    getConversionFactor(): proto_r4_core_datatypes_pb.Decimal | undefined;
    setConversionFactor(value?: proto_r4_core_datatypes_pb.Decimal): void;

    hasDecimalPrecision(): boolean;
    clearDecimalPrecision(): void;
    getDecimalPrecision(): proto_r4_core_datatypes_pb.Integer | undefined;
    setDecimalPrecision(value?: proto_r4_core_datatypes_pb.Integer): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuantitativeDetails.AsObject;
    static toObject(includeInstance: boolean, msg: QuantitativeDetails): QuantitativeDetails.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuantitativeDetails, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuantitativeDetails;
    static deserializeBinaryFromReader(message: QuantitativeDetails, reader: jspb.BinaryReader): QuantitativeDetails;
  }

  export namespace QuantitativeDetails {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      customaryUnit?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      unit?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      conversionFactor?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      decimalPrecision?: proto_r4_core_datatypes_pb.Integer.AsObject,
    }
  }

  export class QualifiedInterval extends jspb.Message {
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

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): ObservationDefinition.QualifiedInterval.CategoryCode | undefined;
    setCategory(value?: ObservationDefinition.QualifiedInterval.CategoryCode): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_r4_core_datatypes_pb.Range | undefined;
    setRange(value?: proto_r4_core_datatypes_pb.Range): void;

    hasContext(): boolean;
    clearContext(): void;
    getContext(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setContext(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAppliesTo(): void;
    getAppliesTo(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setAppliesTo(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addAppliesTo(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasGender(): boolean;
    clearGender(): void;
    getGender(): ObservationDefinition.QualifiedInterval.GenderCode | undefined;
    setGender(value?: ObservationDefinition.QualifiedInterval.GenderCode): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasGestationalAge(): boolean;
    clearGestationalAge(): void;
    getGestationalAge(): proto_r4_core_datatypes_pb.Range | undefined;
    setGestationalAge(value?: proto_r4_core_datatypes_pb.Range): void;

    hasCondition(): boolean;
    clearCondition(): void;
    getCondition(): proto_r4_core_datatypes_pb.String | undefined;
    setCondition(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QualifiedInterval.AsObject;
    static toObject(includeInstance: boolean, msg: QualifiedInterval): QualifiedInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QualifiedInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QualifiedInterval;
    static deserializeBinaryFromReader(message: QualifiedInterval, reader: jspb.BinaryReader): QualifiedInterval;
  }

  export namespace QualifiedInterval {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      category?: ObservationDefinition.QualifiedInterval.CategoryCode.AsObject,
      range?: proto_r4_core_datatypes_pb.Range.AsObject,
      context?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      appliesTo: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      gender?: ObservationDefinition.QualifiedInterval.GenderCode.AsObject,
      age?: proto_r4_core_datatypes_pb.Range.AsObject,
      gestationalAge?: proto_r4_core_datatypes_pb.Range.AsObject,
      condition?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class CategoryCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CategoryCode.AsObject;
      static toObject(includeInstance: boolean, msg: CategoryCode): CategoryCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CategoryCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CategoryCode;
      static deserializeBinaryFromReader(message: CategoryCode, reader: jspb.BinaryReader): CategoryCode;
    }

    export namespace CategoryCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap[keyof proto_r4_core_codes_pb.ObservationRangeCategoryCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class GenderCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): GenderCode.AsObject;
      static toObject(includeInstance: boolean, msg: GenderCode): GenderCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: GenderCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): GenderCode;
      static deserializeBinaryFromReader(message: GenderCode, reader: jspb.BinaryReader): GenderCode;
    }

    export namespace GenderCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap[keyof proto_r4_core_codes_pb.AdministrativeGenderCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }
}

