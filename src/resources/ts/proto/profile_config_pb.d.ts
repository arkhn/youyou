// package: google.fhir.proto
// file: proto/profile_config.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../proto/r4/core/codes_pb";

export class PackageInfo extends jspb.Message {
  getFhirVersion(): proto_annotations_pb.FhirVersionMap[keyof proto_annotations_pb.FhirVersionMap];
  setFhirVersion(
    value: proto_annotations_pb.FhirVersionMap[keyof proto_annotations_pb.FhirVersionMap]
  ): void;

  getBaseUrl(): string;
  setBaseUrl(value: string): void;

  getProtoPackage(): string;
  setProtoPackage(value: string): void;

  getJavaProtoPackage(): string;
  setJavaProtoPackage(value: string): void;

  getGoProtoPackage(): string;
  setGoProtoPackage(value: string): void;

  hasLocalContainedResource(): boolean;
  clearLocalContainedResource(): void;
  getLocalContainedResource(): boolean;
  setLocalContainedResource(value: boolean): void;

  hasContainedResourcePackage(): boolean;
  clearContainedResourcePackage(): void;
  getContainedResourcePackage(): string;
  setContainedResourcePackage(value: string): void;

  getPublisher(): string;
  setPublisher(value: string): void;

  getTelcomUrl(): string;
  setTelcomUrl(value: string): void;

  getLicense(): PackageInfo.LicenseMap[keyof PackageInfo.LicenseMap];
  setLicense(value: PackageInfo.LicenseMap[keyof PackageInfo.LicenseMap]): void;

  getLicenseDate(): string;
  setLicenseDate(value: string): void;

  getContainedResourceBehavior(): PackageInfo.ContainedResourceBehaviorMap[keyof PackageInfo.ContainedResourceBehaviorMap];
  setContainedResourceBehavior(
    value: PackageInfo.ContainedResourceBehaviorMap[keyof PackageInfo.ContainedResourceBehaviorMap]
  ): void;

  getFileSplittingBehavior(): PackageInfo.FileSplittingBehaviorMap[keyof PackageInfo.FileSplittingBehaviorMap];
  setFileSplittingBehavior(
    value: PackageInfo.FileSplittingBehaviorMap[keyof PackageInfo.FileSplittingBehaviorMap]
  ): void;

  getContainedResourceCase(): PackageInfo.ContainedResourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PackageInfo.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: PackageInfo
  ): PackageInfo.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: PackageInfo,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): PackageInfo;
  static deserializeBinaryFromReader(
    message: PackageInfo,
    reader: jspb.BinaryReader
  ): PackageInfo;
}

export namespace PackageInfo {
  export type AsObject = {
    fhirVersion: proto_annotations_pb.FhirVersionMap[keyof proto_annotations_pb.FhirVersionMap];
    baseUrl: string;
    protoPackage: string;
    javaProtoPackage: string;
    goProtoPackage: string;
    localContainedResource: boolean;
    containedResourcePackage: string;
    publisher: string;
    telcomUrl: string;
    license: PackageInfo.LicenseMap[keyof PackageInfo.LicenseMap];
    licenseDate: string;
    containedResourceBehavior: PackageInfo.ContainedResourceBehaviorMap[keyof PackageInfo.ContainedResourceBehaviorMap];
    fileSplittingBehavior: PackageInfo.FileSplittingBehaviorMap[keyof PackageInfo.FileSplittingBehaviorMap];
  };

  export interface LicenseMap {
    NONE: 0;
    APACHE: 1;
  }

  export const License: LicenseMap;

  export interface ContainedResourceBehaviorMap {
    DEFAULT: 0;
    ANY: 1;
    TYPED_CONTAINED_RESOURCE: 2;
  }

  export const ContainedResourceBehavior: ContainedResourceBehaviorMap;

  export interface FileSplittingBehaviorMap {
    DEFAULT_SPLITTING_BEHAVIOR: 0;
    NO_SPLITTING: 1;
    SEPARATE_EXTENSIONS: 2;
    SPLIT_RESOURCES: 3;
  }

  export const FileSplittingBehavior: FileSplittingBehaviorMap;

  export enum ContainedResourceCase {
    CONTAINED_RESOURCE_NOT_SET = 0,
    LOCAL_CONTAINED_RESOURCE = 6,
    CONTAINED_RESOURCE_PACKAGE = 7
  }
}

export class Profiles extends jspb.Message {
  clearProfile(): void;
  getProfile(): Array<Profile>;
  setProfile(value: Array<Profile>): void;
  addProfile(value?: Profile, index?: number): Profile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profiles.AsObject;
  static toObject(includeInstance: boolean, msg: Profiles): Profiles.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Profiles,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Profiles;
  static deserializeBinaryFromReader(
    message: Profiles,
    reader: jspb.BinaryReader
  ): Profiles;
}

export namespace Profiles {
  export type AsObject = {
    profile: Array<Profile.AsObject>;
  };
}

export class Extensions extends jspb.Message {
  clearSimpleExtension(): void;
  getSimpleExtension(): Array<SimpleExtension>;
  setSimpleExtension(value: Array<SimpleExtension>): void;
  addSimpleExtension(value?: SimpleExtension, index?: number): SimpleExtension;

  clearComplexExtension(): void;
  getComplexExtension(): Array<ComplexExtension>;
  setComplexExtension(value: Array<ComplexExtension>): void;
  addComplexExtension(
    value?: ComplexExtension,
    index?: number
  ): ComplexExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Extensions.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: Extensions
  ): Extensions.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Extensions,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Extensions;
  static deserializeBinaryFromReader(
    message: Extensions,
    reader: jspb.BinaryReader
  ): Extensions;
}

export namespace Extensions {
  export type AsObject = {
    simpleExtension: Array<SimpleExtension.AsObject>;
    complexExtension: Array<ComplexExtension.AsObject>;
  };
}

export class Terminologies extends jspb.Message {
  clearCodeSystem(): void;
  getCodeSystem(): Array<CodeSystemConfig>;
  setCodeSystem(value: Array<CodeSystemConfig>): void;
  addCodeSystem(value?: CodeSystemConfig, index?: number): CodeSystemConfig;

  clearValueSet(): void;
  getValueSet(): Array<ValueSetConfig>;
  setValueSet(value: Array<ValueSetConfig>): void;
  addValueSet(value?: ValueSetConfig, index?: number): ValueSetConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Terminologies.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: Terminologies
  ): Terminologies.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Terminologies,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Terminologies;
  static deserializeBinaryFromReader(
    message: Terminologies,
    reader: jspb.BinaryReader
  ): Terminologies;
}

export namespace Terminologies {
  export type AsObject = {
    codeSystem: Array<CodeSystemConfig.AsObject>;
    valueSet: Array<ValueSetConfig.AsObject>;
  };
}

export class Profile extends jspb.Message {
  hasElementData(): boolean;
  clearElementData(): void;
  getElementData(): ElementData | undefined;
  setElementData(value?: ElementData): void;

  getBaseUrl(): string;
  setBaseUrl(value: string): void;

  clearRestriction(): void;
  getRestriction(): Array<FieldRestriction>;
  setRestriction(value: Array<FieldRestriction>): void;
  addRestriction(value?: FieldRestriction, index?: number): FieldRestriction;

  clearExtensionSlice(): void;
  getExtensionSlice(): Array<ExtensionSlice>;
  setExtensionSlice(value: Array<ExtensionSlice>): void;
  addExtensionSlice(value?: ExtensionSlice, index?: number): ExtensionSlice;

  clearCodeableConceptSlice(): void;
  getCodeableConceptSlice(): Array<CodeableConceptSlice>;
  setCodeableConceptSlice(value: Array<CodeableConceptSlice>): void;
  addCodeableConceptSlice(
    value?: CodeableConceptSlice,
    index?: number
  ): CodeableConceptSlice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Profile.AsObject;
  static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: Profile,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Profile;
  static deserializeBinaryFromReader(
    message: Profile,
    reader: jspb.BinaryReader
  ): Profile;
}

export namespace Profile {
  export type AsObject = {
    elementData?: ElementData.AsObject;
    baseUrl: string;
    restriction: Array<FieldRestriction.AsObject>;
    extensionSlice: Array<ExtensionSlice.AsObject>;
    codeableConceptSlice: Array<CodeableConceptSlice.AsObject>;
  };
}

export class FieldRestriction extends jspb.Message {
  getFieldId(): string;
  setFieldId(value: string): void;

  getSizeRestriction(): SizeRestrictionMap[keyof SizeRestrictionMap];
  setSizeRestriction(value: SizeRestrictionMap[keyof SizeRestrictionMap]): void;

  hasReferenceRestriction(): boolean;
  clearReferenceRestriction(): void;
  getReferenceRestriction(): ReferenceRestriction | undefined;
  setReferenceRestriction(value?: ReferenceRestriction): void;

  hasChoiceTypeRestriction(): boolean;
  clearChoiceTypeRestriction(): void;
  getChoiceTypeRestriction(): ChoiceTypeRestriction | undefined;
  setChoiceTypeRestriction(value?: ChoiceTypeRestriction): void;

  clearFhirPathConstraint(): void;
  getFhirPathConstraint(): Array<FhirPathConstraint>;
  setFhirPathConstraint(value: Array<FhirPathConstraint>): void;
  addFhirPathConstraint(
    value?: FhirPathConstraint,
    index?: number
  ): FhirPathConstraint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FieldRestriction.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FieldRestriction
  ): FieldRestriction.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: FieldRestriction,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): FieldRestriction;
  static deserializeBinaryFromReader(
    message: FieldRestriction,
    reader: jspb.BinaryReader
  ): FieldRestriction;
}

export namespace FieldRestriction {
  export type AsObject = {
    fieldId: string;
    sizeRestriction: SizeRestrictionMap[keyof SizeRestrictionMap];
    referenceRestriction?: ReferenceRestriction.AsObject;
    choiceTypeRestriction?: ChoiceTypeRestriction.AsObject;
    fhirPathConstraint: Array<FhirPathConstraint.AsObject>;
  };
}

export class ReferenceRestriction extends jspb.Message {
  clearAllowed(): void;
  getAllowed(): Array<string>;
  setAllowed(value: Array<string>): void;
  addAllowed(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceRestriction.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ReferenceRestriction
  ): ReferenceRestriction.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ReferenceRestriction,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceRestriction;
  static deserializeBinaryFromReader(
    message: ReferenceRestriction,
    reader: jspb.BinaryReader
  ): ReferenceRestriction;
}

export namespace ReferenceRestriction {
  export type AsObject = {
    allowed: Array<string>;
  };
}

export class ChoiceTypeRestriction extends jspb.Message {
  clearAllowed(): void;
  getAllowed(): Array<string>;
  setAllowed(value: Array<string>): void;
  addAllowed(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChoiceTypeRestriction.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ChoiceTypeRestriction
  ): ChoiceTypeRestriction.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ChoiceTypeRestriction,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ChoiceTypeRestriction;
  static deserializeBinaryFromReader(
    message: ChoiceTypeRestriction,
    reader: jspb.BinaryReader
  ): ChoiceTypeRestriction;
}

export namespace ChoiceTypeRestriction {
  export type AsObject = {
    allowed: Array<string>;
  };
}

export class FhirPathConstraint extends jspb.Message {
  getSeverity(): FhirPathConstraint.SeverityMap[keyof FhirPathConstraint.SeverityMap];
  setSeverity(
    value: FhirPathConstraint.SeverityMap[keyof FhirPathConstraint.SeverityMap]
  ): void;

  getDescription(): string;
  setDescription(value: string): void;

  getExpression(): string;
  setExpression(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FhirPathConstraint.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: FhirPathConstraint
  ): FhirPathConstraint.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: FhirPathConstraint,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): FhirPathConstraint;
  static deserializeBinaryFromReader(
    message: FhirPathConstraint,
    reader: jspb.BinaryReader
  ): FhirPathConstraint;
}

export namespace FhirPathConstraint {
  export type AsObject = {
    severity: FhirPathConstraint.SeverityMap[keyof FhirPathConstraint.SeverityMap];
    description: string;
    expression: string;
  };

  export interface SeverityMap {
    DEFAULT: 0;
    ERROR: 1;
    WARNING: 2;
  }

  export const Severity: SeverityMap;
}

export class ExtensionSlice extends jspb.Message {
  getFieldId(): string;
  setFieldId(value: string): void;

  hasElementData(): boolean;
  clearElementData(): void;
  getElementData(): ElementData | undefined;
  setElementData(value?: ElementData): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionSlice.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ExtensionSlice
  ): ExtensionSlice.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ExtensionSlice,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionSlice;
  static deserializeBinaryFromReader(
    message: ExtensionSlice,
    reader: jspb.BinaryReader
  ): ExtensionSlice;
}

export namespace ExtensionSlice {
  export type AsObject = {
    fieldId: string;
    elementData?: ElementData.AsObject;
    url: string;
  };
}

export class CodeableConceptSlice extends jspb.Message {
  getFieldId(): string;
  setFieldId(value: string): void;

  clearCodingSlice(): void;
  getCodingSlice(): Array<CodeableConceptSlice.CodingSlice>;
  setCodingSlice(value: Array<CodeableConceptSlice.CodingSlice>): void;
  addCodingSlice(
    value?: CodeableConceptSlice.CodingSlice,
    index?: number
  ): CodeableConceptSlice.CodingSlice;

  getRules(): proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap];
  setRules(
    value: proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap]
  ): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeableConceptSlice.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CodeableConceptSlice
  ): CodeableConceptSlice.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CodeableConceptSlice,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CodeableConceptSlice;
  static deserializeBinaryFromReader(
    message: CodeableConceptSlice,
    reader: jspb.BinaryReader
  ): CodeableConceptSlice;
}

export namespace CodeableConceptSlice {
  export type AsObject = {
    fieldId: string;
    codingSlice: Array<CodeableConceptSlice.CodingSlice.AsObject>;
    rules: proto_r4_core_codes_pb.SlicingRulesCode.ValueMap[keyof proto_r4_core_codes_pb.SlicingRulesCode.ValueMap];
  };

  export class CodingSlice extends jspb.Message {
    hasElementData(): boolean;
    clearElementData(): void;
    getElementData(): ElementData | undefined;
    setElementData(value?: ElementData): void;

    hasCodeData(): boolean;
    clearCodeData(): void;
    getCodeData(): CodeData | undefined;
    setCodeData(value?: CodeData): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodingSlice.AsObject;
    static toObject(
      includeInstance: boolean,
      msg: CodingSlice
    ): CodingSlice.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: CodingSlice,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): CodingSlice;
    static deserializeBinaryFromReader(
      message: CodingSlice,
      reader: jspb.BinaryReader
    ): CodingSlice;
  }

  export namespace CodingSlice {
    export type AsObject = {
      elementData?: ElementData.AsObject;
      codeData?: CodeData.AsObject;
    };
  }
}

export class ComplexExtension extends jspb.Message {
  hasElementData(): boolean;
  clearElementData(): void;
  getElementData(): ElementData | undefined;
  setElementData(value?: ElementData): void;

  getCanHaveAdditionalExtensions(): boolean;
  setCanHaveAdditionalExtensions(value: boolean): void;

  clearSimpleField(): void;
  getSimpleField(): Array<SimpleExtension>;
  setSimpleField(value: Array<SimpleExtension>): void;
  addSimpleField(value?: SimpleExtension, index?: number): SimpleExtension;

  clearComplexField(): void;
  getComplexField(): Array<ComplexExtension>;
  setComplexField(value: Array<ComplexExtension>): void;
  addComplexField(value?: ComplexExtension, index?: number): ComplexExtension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComplexExtension.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ComplexExtension
  ): ComplexExtension.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ComplexExtension,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ComplexExtension;
  static deserializeBinaryFromReader(
    message: ComplexExtension,
    reader: jspb.BinaryReader
  ): ComplexExtension;
}

export namespace ComplexExtension {
  export type AsObject = {
    elementData?: ElementData.AsObject;
    canHaveAdditionalExtensions: boolean;
    simpleField: Array<SimpleExtension.AsObject>;
    complexField: Array<ComplexExtension.AsObject>;
  };
}

export class SimpleExtension extends jspb.Message {
  hasElementData(): boolean;
  clearElementData(): void;
  getElementData(): ElementData | undefined;
  setElementData(value?: ElementData): void;

  clearType(): void;
  getType(): Array<string>;
  setType(value: Array<string>): void;
  addType(value: string, index?: number): string;

  hasCodeType(): boolean;
  clearCodeType(): void;
  getCodeType(): CodeData | undefined;
  setCodeType(value?: CodeData): void;

  getCanHaveExtensions(): boolean;
  setCanHaveExtensions(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleExtension.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: SimpleExtension
  ): SimpleExtension.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: SimpleExtension,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): SimpleExtension;
  static deserializeBinaryFromReader(
    message: SimpleExtension,
    reader: jspb.BinaryReader
  ): SimpleExtension;
}

export namespace SimpleExtension {
  export type AsObject = {
    elementData?: ElementData.AsObject;
    type: Array<string>;
    codeType?: CodeData.AsObject;
    canHaveExtensions: boolean;
  };
}

export class ElementData extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSizeRestriction(): SizeRestrictionMap[keyof SizeRestrictionMap];
  setSizeRestriction(value: SizeRestrictionMap[keyof SizeRestrictionMap]): void;

  getDescription(): string;
  setDescription(value: string): void;

  getShort(): string;
  setShort(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getUrlOverride(): string;
  setUrlOverride(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementData.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ElementData
  ): ElementData.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ElementData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ElementData;
  static deserializeBinaryFromReader(
    message: ElementData,
    reader: jspb.BinaryReader
  ): ElementData;
}

export namespace ElementData {
  export type AsObject = {
    name: string;
    sizeRestriction: SizeRestrictionMap[keyof SizeRestrictionMap];
    description: string;
    short: string;
    comment: string;
    urlOverride: string;
  };
}

export class CodeData extends jspb.Message {
  getSystem(): string;
  setSystem(value: string): void;

  getBindingStrength(): proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap];
  setBindingStrength(
    value: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap]
  ): void;

  getFixedValue(): string;
  setFixedValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeData.AsObject;
  static toObject(includeInstance: boolean, msg: CodeData): CodeData.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CodeData,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CodeData;
  static deserializeBinaryFromReader(
    message: CodeData,
    reader: jspb.BinaryReader
  ): CodeData;
}

export namespace CodeData {
  export type AsObject = {
    system: string;
    bindingStrength: proto_r4_core_codes_pb.BindingStrengthCode.ValueMap[keyof proto_r4_core_codes_pb.BindingStrengthCode.ValueMap];
    fixedValue: string;
  };
}

export class CodeSystemConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStatus(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
  setStatus(
    value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]
  ): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrlOverride(): string;
  setUrlOverride(value: string): void;

  clearConcept(): void;
  getConcept(): Array<CodeSystemConfig.Concept>;
  setConcept(value: Array<CodeSystemConfig.Concept>): void;
  addConcept(
    value?: CodeSystemConfig.Concept,
    index?: number
  ): CodeSystemConfig.Concept;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: CodeSystemConfig
  ): CodeSystemConfig.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: CodeSystemConfig,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemConfig;
  static deserializeBinaryFromReader(
    message: CodeSystemConfig,
    reader: jspb.BinaryReader
  ): CodeSystemConfig;
}

export namespace CodeSystemConfig {
  export type AsObject = {
    name: string;
    status: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    description: string;
    urlOverride: string;
    concept: Array<CodeSystemConfig.Concept.AsObject>;
  };

  export class Concept extends jspb.Message {
    getCode(): string;
    setCode(value: string): void;

    getDisplay(): string;
    setDisplay(value: string): void;

    getDefinition(): string;
    setDefinition(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Concept.AsObject;
    static toObject(includeInstance: boolean, msg: Concept): Concept.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: Concept,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): Concept;
    static deserializeBinaryFromReader(
      message: Concept,
      reader: jspb.BinaryReader
    ): Concept;
  }

  export namespace Concept {
    export type AsObject = {
      code: string;
      display: string;
      definition: string;
    };
  }
}

export class ValueSetConfig extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getStatus(): proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
  setStatus(
    value: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap]
  ): void;

  getDescription(): string;
  setDescription(value: string): void;

  getUrlOverride(): string;
  setUrlOverride(value: string): void;

  clearSystem(): void;
  getSystem(): Array<ValueSetConfig.System>;
  setSystem(value: Array<ValueSetConfig.System>): void;
  addSystem(
    value?: ValueSetConfig.System,
    index?: number
  ): ValueSetConfig.System;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetConfig.AsObject;
  static toObject(
    includeInstance: boolean,
    msg: ValueSetConfig
  ): ValueSetConfig.AsObject;
  static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
  static extensionsBinary: {
    [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
  };
  static serializeBinaryToWriter(
    message: ValueSetConfig,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetConfig;
  static deserializeBinaryFromReader(
    message: ValueSetConfig,
    reader: jspb.BinaryReader
  ): ValueSetConfig;
}

export namespace ValueSetConfig {
  export type AsObject = {
    name: string;
    status: proto_r4_core_codes_pb.PublicationStatusCode.ValueMap[keyof proto_r4_core_codes_pb.PublicationStatusCode.ValueMap];
    description: string;
    urlOverride: string;
    system: Array<ValueSetConfig.System.AsObject>;
  };

  export class System extends jspb.Message {
    getUrl(): string;
    setUrl(value: string): void;

    clearInclude(): void;
    getInclude(): Array<string>;
    setInclude(value: Array<string>): void;
    addInclude(value: string, index?: number): string;

    clearExclude(): void;
    getExclude(): Array<string>;
    setExclude(value: Array<string>): void;
    addExclude(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): System.AsObject;
    static toObject(includeInstance: boolean, msg: System): System.AsObject;
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> };
    static extensionsBinary: {
      [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>;
    };
    static serializeBinaryToWriter(
      message: System,
      writer: jspb.BinaryWriter
    ): void;
    static deserializeBinary(bytes: Uint8Array): System;
    static deserializeBinaryFromReader(
      message: System,
      reader: jspb.BinaryReader
    ): System;
  }

  export namespace System {
    export type AsObject = {
      url: string;
      include: Array<string>;
      exclude: Array<string>;
    };
  }
}

export interface SizeRestrictionMap {
  UNSET: 0;
  ABSENT: 1;
  REQUIRED: 2;
  OPTIONAL: 3;
  AT_LEAST_ONE: 4;
  REPEATED: 5;
}

export const SizeRestriction: SizeRestrictionMap;
