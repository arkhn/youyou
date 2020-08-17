// package: google.fhir.stu3.proto
// file: proto/stu3/metadatatypes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_codes_pb from "../../proto/stu3/codes_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class BackboneElement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackboneElement.AsObject;
  static toObject(includeInstance: boolean, msg: BackboneElement): BackboneElement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BackboneElement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackboneElement;
  static deserializeBinaryFromReader(message: BackboneElement, reader: jspb.BinaryReader): BackboneElement;
}

export namespace BackboneElement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }
}

export class ContactDetail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  clearTelecomList(): void;
  getTelecomList(): Array<proto_stu3_datatypes_pb.ContactPoint>;
  setTelecomList(value: Array<proto_stu3_datatypes_pb.ContactPoint>): void;
  addTelecom(value?: proto_stu3_datatypes_pb.ContactPoint, index?: number): proto_stu3_datatypes_pb.ContactPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ContactDetail): ContactDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactDetail;
  static deserializeBinaryFromReader(message: ContactDetail, reader: jspb.BinaryReader): ContactDetail;
}

export namespace ContactDetail {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    telecomList: Array<proto_stu3_datatypes_pb.ContactPoint.AsObject>,
  }
}

export class Contributor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.ContributorTypeCode | undefined;
  setType(value?: proto_stu3_codes_pb.ContributorTypeCode): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.String | undefined;
  setName(value?: proto_stu3_datatypes_pb.String): void;

  clearContactList(): void;
  getContactList(): Array<ContactDetail>;
  setContactList(value: Array<ContactDetail>): void;
  addContact(value?: ContactDetail, index?: number): ContactDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Contributor.AsObject;
  static toObject(includeInstance: boolean, msg: Contributor): Contributor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Contributor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Contributor;
  static deserializeBinaryFromReader(message: Contributor, reader: jspb.BinaryReader): Contributor;
}

export namespace Contributor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_codes_pb.ContributorTypeCode.AsObject,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    contactList: Array<ContactDetail.AsObject>,
  }
}

export class DataRequirement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.FHIRAllTypesCode | undefined;
  setType(value?: proto_stu3_codes_pb.FHIRAllTypesCode): void;

  clearProfileList(): void;
  getProfileList(): Array<proto_stu3_datatypes_pb.Uri>;
  setProfileList(value: Array<proto_stu3_datatypes_pb.Uri>): void;
  addProfile(value?: proto_stu3_datatypes_pb.Uri, index?: number): proto_stu3_datatypes_pb.Uri;

  clearMustSupportList(): void;
  getMustSupportList(): Array<proto_stu3_datatypes_pb.String>;
  setMustSupportList(value: Array<proto_stu3_datatypes_pb.String>): void;
  addMustSupport(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  clearCodeFilterList(): void;
  getCodeFilterList(): Array<DataRequirement.CodeFilter>;
  setCodeFilterList(value: Array<DataRequirement.CodeFilter>): void;
  addCodeFilter(value?: DataRequirement.CodeFilter, index?: number): DataRequirement.CodeFilter;

  clearDateFilterList(): void;
  getDateFilterList(): Array<DataRequirement.DateFilter>;
  setDateFilterList(value: Array<DataRequirement.DateFilter>): void;
  addDateFilter(value?: DataRequirement.DateFilter, index?: number): DataRequirement.DateFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataRequirement.AsObject;
  static toObject(includeInstance: boolean, msg: DataRequirement): DataRequirement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataRequirement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataRequirement;
  static deserializeBinaryFromReader(message: DataRequirement, reader: jspb.BinaryReader): DataRequirement;
}

export namespace DataRequirement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_codes_pb.FHIRAllTypesCode.AsObject,
    profileList: Array<proto_stu3_datatypes_pb.Uri.AsObject>,
    mustSupportList: Array<proto_stu3_datatypes_pb.String.AsObject>,
    codeFilterList: Array<DataRequirement.CodeFilter.AsObject>,
    dateFilterList: Array<DataRequirement.DateFilter.AsObject>,
  }

  export class CodeFilter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): proto_stu3_datatypes_pb.String | undefined;
    setPath(value?: proto_stu3_datatypes_pb.String): void;

    hasValueSet(): boolean;
    clearValueSet(): void;
    getValueSet(): DataRequirement.CodeFilter.ValueSet | undefined;
    setValueSet(value?: DataRequirement.CodeFilter.ValueSet): void;

    clearValueCodeList(): void;
    getValueCodeList(): Array<proto_stu3_datatypes_pb.Code>;
    setValueCodeList(value: Array<proto_stu3_datatypes_pb.Code>): void;
    addValueCode(value?: proto_stu3_datatypes_pb.Code, index?: number): proto_stu3_datatypes_pb.Code;

    clearValueCodingList(): void;
    getValueCodingList(): Array<proto_stu3_datatypes_pb.Coding>;
    setValueCodingList(value: Array<proto_stu3_datatypes_pb.Coding>): void;
    addValueCoding(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

    clearValueCodeableConceptList(): void;
    getValueCodeableConceptList(): Array<proto_stu3_datatypes_pb.CodeableConcept>;
    setValueCodeableConceptList(value: Array<proto_stu3_datatypes_pb.CodeableConcept>): void;
    addValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept, index?: number): proto_stu3_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeFilter.AsObject;
    static toObject(includeInstance: boolean, msg: CodeFilter): CodeFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeFilter;
    static deserializeBinaryFromReader(message: CodeFilter, reader: jspb.BinaryReader): CodeFilter;
  }

  export namespace CodeFilter {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      path?: proto_stu3_datatypes_pb.String.AsObject,
      valueSet?: DataRequirement.CodeFilter.ValueSet.AsObject,
      valueCodeList: Array<proto_stu3_datatypes_pb.Code.AsObject>,
      valueCodingList: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
      valueCodeableConceptList: Array<proto_stu3_datatypes_pb.CodeableConcept.AsObject>,
    }

    export class ValueSet extends jspb.Message {
      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_stu3_datatypes_pb.String | undefined;
      setStringValue(value?: proto_stu3_datatypes_pb.String): void;

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
        stringValue?: proto_stu3_datatypes_pb.String.AsObject,
        reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      }

      export enum ValueSetCase {
        VALUE_SET_NOT_SET = 0,
        STRING_VALUE = 1,
        REFERENCE = 2,
      }
    }
  }

  export class DateFilter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasPath(): boolean;
    clearPath(): void;
    getPath(): proto_stu3_datatypes_pb.String | undefined;
    setPath(value?: proto_stu3_datatypes_pb.String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): DataRequirement.DateFilter.Value | undefined;
    setValue(value?: DataRequirement.DateFilter.Value): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateFilter.AsObject;
    static toObject(includeInstance: boolean, msg: DateFilter): DateFilter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateFilter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateFilter;
    static deserializeBinaryFromReader(message: DateFilter, reader: jspb.BinaryReader): DateFilter;
  }

  export namespace DateFilter {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      path?: proto_stu3_datatypes_pb.String.AsObject,
      value?: DataRequirement.DateFilter.Value.AsObject,
    }

    export class Value extends jspb.Message {
      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_stu3_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_stu3_datatypes_pb.Duration): void;

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
        dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
        period?: proto_stu3_datatypes_pb.Period.AsObject,
        duration?: proto_stu3_datatypes_pb.Duration.AsObject,
      }

      export enum ValueCase {
        VALUE_NOT_SET = 0,
        DATE_TIME = 1,
        PERIOD = 2,
        DURATION = 3,
      }
    }
  }
}

export class Element extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Element.AsObject;
  static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Element;
  static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
}

export namespace Element {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }
}

export class ElementDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasPath(): boolean;
  clearPath(): void;
  getPath(): proto_stu3_datatypes_pb.String | undefined;
  setPath(value?: proto_stu3_datatypes_pb.String): void;

  clearRepresentationList(): void;
  getRepresentationList(): Array<proto_stu3_codes_pb.PropertyRepresentationCode>;
  setRepresentationList(value: Array<proto_stu3_codes_pb.PropertyRepresentationCode>): void;
  addRepresentation(value?: proto_stu3_codes_pb.PropertyRepresentationCode, index?: number): proto_stu3_codes_pb.PropertyRepresentationCode;

  hasSliceName(): boolean;
  clearSliceName(): void;
  getSliceName(): proto_stu3_datatypes_pb.String | undefined;
  setSliceName(value?: proto_stu3_datatypes_pb.String): void;

  hasLabel(): boolean;
  clearLabel(): void;
  getLabel(): proto_stu3_datatypes_pb.String | undefined;
  setLabel(value?: proto_stu3_datatypes_pb.String): void;

  clearCodeList(): void;
  getCodeList(): Array<proto_stu3_datatypes_pb.Coding>;
  setCodeList(value: Array<proto_stu3_datatypes_pb.Coding>): void;
  addCode(value?: proto_stu3_datatypes_pb.Coding, index?: number): proto_stu3_datatypes_pb.Coding;

  hasSlicing(): boolean;
  clearSlicing(): void;
  getSlicing(): ElementDefinition.Slicing | undefined;
  setSlicing(value?: ElementDefinition.Slicing): void;

  hasShort(): boolean;
  clearShort(): void;
  getShort(): proto_stu3_datatypes_pb.String | undefined;
  setShort(value?: proto_stu3_datatypes_pb.String): void;

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

  clearAliasList(): void;
  getAliasList(): Array<proto_stu3_datatypes_pb.String>;
  setAliasList(value: Array<proto_stu3_datatypes_pb.String>): void;
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
  getBase(): ElementDefinition.Base | undefined;
  setBase(value?: ElementDefinition.Base): void;

  hasContentReference(): boolean;
  clearContentReference(): void;
  getContentReference(): proto_stu3_datatypes_pb.Uri | undefined;
  setContentReference(value?: proto_stu3_datatypes_pb.Uri): void;

  clearTypeList(): void;
  getTypeList(): Array<ElementDefinition.TypeRef>;
  setTypeList(value: Array<ElementDefinition.TypeRef>): void;
  addType(value?: ElementDefinition.TypeRef, index?: number): ElementDefinition.TypeRef;

  hasDefaultValue(): boolean;
  clearDefaultValue(): void;
  getDefaultValue(): ElementDefinition.DefaultValue | undefined;
  setDefaultValue(value?: ElementDefinition.DefaultValue): void;

  hasMeaningWhenMissing(): boolean;
  clearMeaningWhenMissing(): void;
  getMeaningWhenMissing(): proto_stu3_datatypes_pb.Markdown | undefined;
  setMeaningWhenMissing(value?: proto_stu3_datatypes_pb.Markdown): void;

  hasOrderMeaning(): boolean;
  clearOrderMeaning(): void;
  getOrderMeaning(): proto_stu3_datatypes_pb.String | undefined;
  setOrderMeaning(value?: proto_stu3_datatypes_pb.String): void;

  hasFixed(): boolean;
  clearFixed(): void;
  getFixed(): ElementDefinition.Fixed | undefined;
  setFixed(value?: ElementDefinition.Fixed): void;

  hasPattern(): boolean;
  clearPattern(): void;
  getPattern(): ElementDefinition.Pattern | undefined;
  setPattern(value?: ElementDefinition.Pattern): void;

  clearExampleList(): void;
  getExampleList(): Array<ElementDefinition.Example>;
  setExampleList(value: Array<ElementDefinition.Example>): void;
  addExample(value?: ElementDefinition.Example, index?: number): ElementDefinition.Example;

  hasMinValue(): boolean;
  clearMinValue(): void;
  getMinValue(): ElementDefinition.MinValue | undefined;
  setMinValue(value?: ElementDefinition.MinValue): void;

  hasMaxValue(): boolean;
  clearMaxValue(): void;
  getMaxValue(): ElementDefinition.MaxValue | undefined;
  setMaxValue(value?: ElementDefinition.MaxValue): void;

  hasMaxLength(): boolean;
  clearMaxLength(): void;
  getMaxLength(): proto_stu3_datatypes_pb.Integer | undefined;
  setMaxLength(value?: proto_stu3_datatypes_pb.Integer): void;

  clearConditionList(): void;
  getConditionList(): Array<proto_stu3_datatypes_pb.Id>;
  setConditionList(value: Array<proto_stu3_datatypes_pb.Id>): void;
  addCondition(value?: proto_stu3_datatypes_pb.Id, index?: number): proto_stu3_datatypes_pb.Id;

  clearConstraintList(): void;
  getConstraintList(): Array<ElementDefinition.Constraint>;
  setConstraintList(value: Array<ElementDefinition.Constraint>): void;
  addConstraint(value?: ElementDefinition.Constraint, index?: number): ElementDefinition.Constraint;

  hasMustSupport(): boolean;
  clearMustSupport(): void;
  getMustSupport(): proto_stu3_datatypes_pb.Boolean | undefined;
  setMustSupport(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasIsModifier(): boolean;
  clearIsModifier(): void;
  getIsModifier(): proto_stu3_datatypes_pb.Boolean | undefined;
  setIsModifier(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasIsSummary(): boolean;
  clearIsSummary(): void;
  getIsSummary(): proto_stu3_datatypes_pb.Boolean | undefined;
  setIsSummary(value?: proto_stu3_datatypes_pb.Boolean): void;

  hasBinding(): boolean;
  clearBinding(): void;
  getBinding(): ElementDefinition.ElementDefinitionBinding | undefined;
  setBinding(value?: ElementDefinition.ElementDefinitionBinding): void;

  clearMappingList(): void;
  getMappingList(): Array<ElementDefinition.Mapping>;
  setMappingList(value: Array<ElementDefinition.Mapping>): void;
  addMapping(value?: ElementDefinition.Mapping, index?: number): ElementDefinition.Mapping;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinition): ElementDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinition;
  static deserializeBinaryFromReader(message: ElementDefinition, reader: jspb.BinaryReader): ElementDefinition;
}

export namespace ElementDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    path?: proto_stu3_datatypes_pb.String.AsObject,
    representationList: Array<proto_stu3_codes_pb.PropertyRepresentationCode.AsObject>,
    sliceName?: proto_stu3_datatypes_pb.String.AsObject,
    label?: proto_stu3_datatypes_pb.String.AsObject,
    codeList: Array<proto_stu3_datatypes_pb.Coding.AsObject>,
    slicing?: ElementDefinition.Slicing.AsObject,
    pb_short?: proto_stu3_datatypes_pb.String.AsObject,
    definition?: proto_stu3_datatypes_pb.Markdown.AsObject,
    comment?: proto_stu3_datatypes_pb.Markdown.AsObject,
    requirements?: proto_stu3_datatypes_pb.Markdown.AsObject,
    aliasList: Array<proto_stu3_datatypes_pb.String.AsObject>,
    min?: proto_stu3_datatypes_pb.UnsignedInt.AsObject,
    max?: proto_stu3_datatypes_pb.String.AsObject,
    base?: ElementDefinition.Base.AsObject,
    contentReference?: proto_stu3_datatypes_pb.Uri.AsObject,
    typeList: Array<ElementDefinition.TypeRef.AsObject>,
    defaultValue?: ElementDefinition.DefaultValue.AsObject,
    meaningWhenMissing?: proto_stu3_datatypes_pb.Markdown.AsObject,
    orderMeaning?: proto_stu3_datatypes_pb.String.AsObject,
    fixed?: ElementDefinition.Fixed.AsObject,
    pattern?: ElementDefinition.Pattern.AsObject,
    exampleList: Array<ElementDefinition.Example.AsObject>,
    minValue?: ElementDefinition.MinValue.AsObject,
    maxValue?: ElementDefinition.MaxValue.AsObject,
    maxLength?: proto_stu3_datatypes_pb.Integer.AsObject,
    conditionList: Array<proto_stu3_datatypes_pb.Id.AsObject>,
    constraintList: Array<ElementDefinition.Constraint.AsObject>,
    mustSupport?: proto_stu3_datatypes_pb.Boolean.AsObject,
    isModifier?: proto_stu3_datatypes_pb.Boolean.AsObject,
    isSummary?: proto_stu3_datatypes_pb.Boolean.AsObject,
    binding?: ElementDefinition.ElementDefinitionBinding.AsObject,
    mappingList: Array<ElementDefinition.Mapping.AsObject>,
  }

  export class Slicing extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    clearDiscriminatorList(): void;
    getDiscriminatorList(): Array<ElementDefinition.Slicing.Discriminator>;
    setDiscriminatorList(value: Array<ElementDefinition.Slicing.Discriminator>): void;
    addDiscriminator(value?: ElementDefinition.Slicing.Discriminator, index?: number): ElementDefinition.Slicing.Discriminator;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_stu3_datatypes_pb.String | undefined;
    setDescription(value?: proto_stu3_datatypes_pb.String): void;

    hasOrdered(): boolean;
    clearOrdered(): void;
    getOrdered(): proto_stu3_datatypes_pb.Boolean | undefined;
    setOrdered(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasRules(): boolean;
    clearRules(): void;
    getRules(): proto_stu3_codes_pb.SlicingRulesCode | undefined;
    setRules(value?: proto_stu3_codes_pb.SlicingRulesCode): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Slicing.AsObject;
    static toObject(includeInstance: boolean, msg: Slicing): Slicing.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Slicing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Slicing;
    static deserializeBinaryFromReader(message: Slicing, reader: jspb.BinaryReader): Slicing;
  }

  export namespace Slicing {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      discriminatorList: Array<ElementDefinition.Slicing.Discriminator.AsObject>,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      ordered?: proto_stu3_datatypes_pb.Boolean.AsObject,
      rules?: proto_stu3_codes_pb.SlicingRulesCode.AsObject,
    }

    export class Discriminator extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_stu3_datatypes_pb.String | undefined;
      setId(value?: proto_stu3_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
      addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_stu3_codes_pb.DiscriminatorTypeCode | undefined;
      setType(value?: proto_stu3_codes_pb.DiscriminatorTypeCode): void;

      hasPath(): boolean;
      clearPath(): void;
      getPath(): proto_stu3_datatypes_pb.String | undefined;
      setPath(value?: proto_stu3_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Discriminator.AsObject;
      static toObject(includeInstance: boolean, msg: Discriminator): Discriminator.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Discriminator, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Discriminator;
      static deserializeBinaryFromReader(message: Discriminator, reader: jspb.BinaryReader): Discriminator;
    }

    export namespace Discriminator {
      export type AsObject = {
        id?: proto_stu3_datatypes_pb.String.AsObject,
        extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
        type?: proto_stu3_codes_pb.DiscriminatorTypeCode.AsObject,
        path?: proto_stu3_datatypes_pb.String.AsObject,
      }
    }
  }

  export class Base extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_stu3_datatypes_pb.Uri | undefined;
    setCode(value?: proto_stu3_datatypes_pb.Uri): void;

    hasProfile(): boolean;
    clearProfile(): void;
    getProfile(): proto_stu3_datatypes_pb.Uri | undefined;
    setProfile(value?: proto_stu3_datatypes_pb.Uri): void;

    hasTargetProfile(): boolean;
    clearTargetProfile(): void;
    getTargetProfile(): proto_stu3_datatypes_pb.Uri | undefined;
    setTargetProfile(value?: proto_stu3_datatypes_pb.Uri): void;

    clearAggregationList(): void;
    getAggregationList(): Array<proto_stu3_codes_pb.AggregationModeCode>;
    setAggregationList(value: Array<proto_stu3_codes_pb.AggregationModeCode>): void;
    addAggregation(value?: proto_stu3_codes_pb.AggregationModeCode, index?: number): proto_stu3_codes_pb.AggregationModeCode;

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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      code?: proto_stu3_datatypes_pb.Uri.AsObject,
      profile?: proto_stu3_datatypes_pb.Uri.AsObject,
      targetProfile?: proto_stu3_datatypes_pb.Uri.AsObject,
      aggregationList: Array<proto_stu3_codes_pb.AggregationModeCode.AsObject>,
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

  export class Fixed extends jspb.Message {
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

    getFixedCase(): Fixed.FixedCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Fixed.AsObject;
    static toObject(includeInstance: boolean, msg: Fixed): Fixed.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Fixed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Fixed;
    static deserializeBinaryFromReader(message: Fixed, reader: jspb.BinaryReader): Fixed;
  }

  export namespace Fixed {
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

    export enum FixedCase {
      FIXED_NOT_SET = 0,
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

  export class Pattern extends jspb.Message {
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

    getPatternCase(): Pattern.PatternCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pattern.AsObject;
    static toObject(includeInstance: boolean, msg: Pattern): Pattern.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pattern, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pattern;
    static deserializeBinaryFromReader(message: Pattern, reader: jspb.BinaryReader): Pattern;
  }

  export namespace Pattern {
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

    export enum PatternCase {
      PATTERN_NOT_SET = 0,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
    addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

    hasLabel(): boolean;
    clearLabel(): void;
    getLabel(): proto_stu3_datatypes_pb.String | undefined;
    setLabel(value?: proto_stu3_datatypes_pb.String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): ElementDefinition.Example.Value | undefined;
    setValue(value?: ElementDefinition.Example.Value): void;

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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      label?: proto_stu3_datatypes_pb.String.AsObject,
      value?: ElementDefinition.Example.Value.AsObject,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
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
    getValueSet(): ElementDefinition.ElementDefinitionBinding.ValueSet | undefined;
    setValueSet(value?: ElementDefinition.ElementDefinitionBinding.ValueSet): void;

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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      strength?: proto_stu3_codes_pb.BindingStrengthCode.AsObject,
      description?: proto_stu3_datatypes_pb.String.AsObject,
      valueSet?: ElementDefinition.ElementDefinitionBinding.ValueSet.AsObject,
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

    clearExtensionList(): void;
    getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
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
      extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
      identity?: proto_stu3_datatypes_pb.Id.AsObject,
      language?: proto_stu3_datatypes_pb.MimeTypeCode.AsObject,
      map?: proto_stu3_datatypes_pb.String.AsObject,
      comment?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }
}

export class Narrative extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.NarrativeStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.NarrativeStatusCode): void;

  hasDiv(): boolean;
  clearDiv(): void;
  getDiv(): proto_stu3_datatypes_pb.Xhtml | undefined;
  setDiv(value?: proto_stu3_datatypes_pb.Xhtml): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Narrative.AsObject;
  static toObject(includeInstance: boolean, msg: Narrative): Narrative.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Narrative, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Narrative;
  static deserializeBinaryFromReader(message: Narrative, reader: jspb.BinaryReader): Narrative;
}

export namespace Narrative {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    status?: proto_stu3_codes_pb.NarrativeStatusCode.AsObject,
    div?: proto_stu3_datatypes_pb.Xhtml.AsObject,
  }
}

export class ParameterDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_stu3_datatypes_pb.Code | undefined;
  setName(value?: proto_stu3_datatypes_pb.Code): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_stu3_codes_pb.OperationParameterUseCode | undefined;
  setUse(value?: proto_stu3_codes_pb.OperationParameterUseCode): void;

  hasMin(): boolean;
  clearMin(): void;
  getMin(): proto_stu3_datatypes_pb.Integer | undefined;
  setMin(value?: proto_stu3_datatypes_pb.Integer): void;

  hasMax(): boolean;
  clearMax(): void;
  getMax(): proto_stu3_datatypes_pb.String | undefined;
  setMax(value?: proto_stu3_datatypes_pb.String): void;

  hasDocumentation(): boolean;
  clearDocumentation(): void;
  getDocumentation(): proto_stu3_datatypes_pb.String | undefined;
  setDocumentation(value?: proto_stu3_datatypes_pb.String): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.FHIRAllTypesCode | undefined;
  setType(value?: proto_stu3_codes_pb.FHIRAllTypesCode): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): proto_stu3_datatypes_pb.Reference | undefined;
  setProfile(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParameterDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ParameterDefinition): ParameterDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParameterDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParameterDefinition;
  static deserializeBinaryFromReader(message: ParameterDefinition, reader: jspb.BinaryReader): ParameterDefinition;
}

export namespace ParameterDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.Code.AsObject,
    use?: proto_stu3_codes_pb.OperationParameterUseCode.AsObject,
    min?: proto_stu3_datatypes_pb.Integer.AsObject,
    max?: proto_stu3_datatypes_pb.String.AsObject,
    documentation?: proto_stu3_datatypes_pb.String.AsObject,
    type?: proto_stu3_codes_pb.FHIRAllTypesCode.AsObject,
    profile?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class RelatedArtifact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.RelatedArtifactTypeCode | undefined;
  setType(value?: proto_stu3_codes_pb.RelatedArtifactTypeCode): void;

  hasDisplay(): boolean;
  clearDisplay(): void;
  getDisplay(): proto_stu3_datatypes_pb.String | undefined;
  setDisplay(value?: proto_stu3_datatypes_pb.String): void;

  hasCitation(): boolean;
  clearCitation(): void;
  getCitation(): proto_stu3_datatypes_pb.String | undefined;
  setCitation(value?: proto_stu3_datatypes_pb.String): void;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): proto_stu3_datatypes_pb.Attachment | undefined;
  setDocument(value?: proto_stu3_datatypes_pb.Attachment): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): proto_stu3_datatypes_pb.Reference | undefined;
  setResource(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedArtifact.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedArtifact): RelatedArtifact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedArtifact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedArtifact;
  static deserializeBinaryFromReader(message: RelatedArtifact, reader: jspb.BinaryReader): RelatedArtifact;
}

export namespace RelatedArtifact {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_codes_pb.RelatedArtifactTypeCode.AsObject,
    display?: proto_stu3_datatypes_pb.String.AsObject,
    citation?: proto_stu3_datatypes_pb.String.AsObject,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    document?: proto_stu3_datatypes_pb.Attachment.AsObject,
    resource?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class TriggerDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_codes_pb.TriggerTypeCode | undefined;
  setType(value?: proto_stu3_codes_pb.TriggerTypeCode): void;

  hasEventName(): boolean;
  clearEventName(): void;
  getEventName(): proto_stu3_datatypes_pb.String | undefined;
  setEventName(value?: proto_stu3_datatypes_pb.String): void;

  hasEventTiming(): boolean;
  clearEventTiming(): void;
  getEventTiming(): TriggerDefinition.EventTiming | undefined;
  setEventTiming(value?: TriggerDefinition.EventTiming): void;

  hasEventData(): boolean;
  clearEventData(): void;
  getEventData(): DataRequirement | undefined;
  setEventData(value?: DataRequirement): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerDefinition): TriggerDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerDefinition;
  static deserializeBinaryFromReader(message: TriggerDefinition, reader: jspb.BinaryReader): TriggerDefinition;
}

export namespace TriggerDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_codes_pb.TriggerTypeCode.AsObject,
    eventName?: proto_stu3_datatypes_pb.String.AsObject,
    eventTiming?: TriggerDefinition.EventTiming.AsObject,
    eventData?: DataRequirement.AsObject,
  }

  export class EventTiming extends jspb.Message {
    hasTiming(): boolean;
    clearTiming(): void;
    getTiming(): proto_stu3_datatypes_pb.Timing | undefined;
    setTiming(value?: proto_stu3_datatypes_pb.Timing): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    getEventTimingCase(): EventTiming.EventTimingCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EventTiming.AsObject;
    static toObject(includeInstance: boolean, msg: EventTiming): EventTiming.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EventTiming, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EventTiming;
    static deserializeBinaryFromReader(message: EventTiming, reader: jspb.BinaryReader): EventTiming;
  }

  export namespace EventTiming {
    export type AsObject = {
      timing?: proto_stu3_datatypes_pb.Timing.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
    }

    export enum EventTimingCase {
      EVENT_TIMING_NOT_SET = 0,
      TIMING = 1,
      REFERENCE = 2,
      DATE = 3,
      DATE_TIME = 4,
    }
  }
}

export class UsageContext extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_stu3_datatypes_pb.Coding | undefined;
  setCode(value?: proto_stu3_datatypes_pb.Coding): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): UsageContext.Value | undefined;
  setValue(value?: UsageContext.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageContext.AsObject;
  static toObject(includeInstance: boolean, msg: UsageContext): UsageContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageContext;
  static deserializeBinaryFromReader(message: UsageContext, reader: jspb.BinaryReader): UsageContext;
}

export namespace UsageContext {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.Coding.AsObject,
    value?: UsageContext.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
    setQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

    hasRange(): boolean;
    clearRange(): void;
    getRange(): proto_stu3_datatypes_pb.Range | undefined;
    setRange(value?: proto_stu3_datatypes_pb.Range): void;

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
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
      quantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
      range?: proto_stu3_datatypes_pb.Range.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      QUANTITY = 2,
      RANGE = 3,
    }
  }
}

