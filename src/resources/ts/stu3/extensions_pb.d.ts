// package: google.fhir.stu3.proto
// file: proto/stu3/extensions.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_codes_pb from "../../proto/stu3/codes_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class DataElementAdministrativeStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementAdministrativeStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementAdministrativeStatus): DataElementAdministrativeStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementAdministrativeStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementAdministrativeStatus;
  static deserializeBinaryFromReader(message: DataElementAdministrativeStatus, reader: jspb.BinaryReader): DataElementAdministrativeStatus;
}

export namespace DataElementAdministrativeStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DataElementChangeDescription extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementChangeDescription.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementChangeDescription): DataElementChangeDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementChangeDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementChangeDescription;
  static deserializeBinaryFromReader(message: DataElementChangeDescription, reader: jspb.BinaryReader): DataElementChangeDescription;
}

export namespace DataElementChangeDescription {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class DataElementClassificationOrContext extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ClassificationOrContextCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ClassificationOrContextCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementClassificationOrContext.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementClassificationOrContext): DataElementClassificationOrContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementClassificationOrContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementClassificationOrContext;
  static deserializeBinaryFromReader(message: DataElementClassificationOrContext, reader: jspb.BinaryReader): DataElementClassificationOrContext;
}

export namespace DataElementClassificationOrContext {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ClassificationOrContextCode.AsObject,
  }
}

export class DataElementContactAddress extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAddress(): boolean;
  clearValueAddress(): void;
  getValueAddress(): proto_stu3_datatypes_pb.Address | undefined;
  setValueAddress(value?: proto_stu3_datatypes_pb.Address): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementContactAddress.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementContactAddress): DataElementContactAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementContactAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementContactAddress;
  static deserializeBinaryFromReader(message: DataElementContactAddress, reader: jspb.BinaryReader): DataElementContactAddress;
}

export namespace DataElementContactAddress {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAddress?: proto_stu3_datatypes_pb.Address.AsObject,
  }
}

export class DataElementDocumentReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementDocumentReference.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementDocumentReference): DataElementDocumentReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementDocumentReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementDocumentReference;
  static deserializeBinaryFromReader(message: DataElementDocumentReference, reader: jspb.BinaryReader): DataElementDocumentReference;
}

export namespace DataElementDocumentReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DataElementEffectivePeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementEffectivePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementEffectivePeriod): DataElementEffectivePeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementEffectivePeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementEffectivePeriod;
  static deserializeBinaryFromReader(message: DataElementEffectivePeriod, reader: jspb.BinaryReader): DataElementEffectivePeriod;
}

export namespace DataElementEffectivePeriod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valuePeriod?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class DataElementIsDataElementConcept extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementIsDataElementConcept.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementIsDataElementConcept): DataElementIsDataElementConcept.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementIsDataElementConcept, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementIsDataElementConcept;
  static deserializeBinaryFromReader(message: DataElementIsDataElementConcept, reader: jspb.BinaryReader): DataElementIsDataElementConcept;
}

export namespace DataElementIsDataElementConcept {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class DataElementRegistryOrg extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementRegistryOrg.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementRegistryOrg): DataElementRegistryOrg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementRegistryOrg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementRegistryOrg;
  static deserializeBinaryFromReader(message: DataElementRegistryOrg, reader: jspb.BinaryReader): DataElementRegistryOrg;
}

export namespace DataElementRegistryOrg {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DataElementSubmitterOrg extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementSubmitterOrg.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementSubmitterOrg): DataElementSubmitterOrg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementSubmitterOrg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementSubmitterOrg;
  static deserializeBinaryFromReader(message: DataElementSubmitterOrg, reader: jspb.BinaryReader): DataElementSubmitterOrg;
}

export namespace DataElementSubmitterOrg {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ElementDefinitionObjectClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionObjectClass.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionObjectClass): ElementDefinitionObjectClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionObjectClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionObjectClass;
  static deserializeBinaryFromReader(message: ElementDefinitionObjectClass, reader: jspb.BinaryReader): ElementDefinitionObjectClass;
}

export namespace ElementDefinitionObjectClass {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class ElementDefinitionObjectClassProperty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionObjectClassProperty.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionObjectClassProperty): ElementDefinitionObjectClassProperty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionObjectClassProperty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionObjectClassProperty;
  static deserializeBinaryFromReader(message: ElementDefinitionObjectClassProperty, reader: jspb.BinaryReader): ElementDefinitionObjectClassProperty;
}

export namespace ElementDefinitionObjectClassProperty {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class PermittedValueConceptmap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermittedValueConceptmap.AsObject;
  static toObject(includeInstance: boolean, msg: PermittedValueConceptmap): PermittedValueConceptmap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermittedValueConceptmap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermittedValueConceptmap;
  static deserializeBinaryFromReader(message: PermittedValueConceptmap, reader: jspb.BinaryReader): PermittedValueConceptmap;
}

export namespace PermittedValueConceptmap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class PermittedValueValueset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PermittedValueValueset.AsObject;
  static toObject(includeInstance: boolean, msg: PermittedValueValueset): PermittedValueValueset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PermittedValueValueset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PermittedValueValueset;
  static deserializeBinaryFromReader(message: PermittedValueValueset, reader: jspb.BinaryReader): PermittedValueValueset;
}

export namespace PermittedValueValueset {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class AllergyIntoleranceCertainty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.AllergyIntoleranceCertaintyCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.AllergyIntoleranceCertaintyCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCertainty.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCertainty): AllergyIntoleranceCertainty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCertainty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCertainty;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCertainty, reader: jspb.BinaryReader): AllergyIntoleranceCertainty;
}

export namespace AllergyIntoleranceCertainty {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.AllergyIntoleranceCertaintyCode.AsObject,
  }
}

export class AllergyIntoleranceDuration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_stu3_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_stu3_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceDuration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceDuration): AllergyIntoleranceDuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceDuration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceDuration, reader: jspb.BinaryReader): AllergyIntoleranceDuration;
}

export namespace AllergyIntoleranceDuration {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDuration?: proto_stu3_datatypes_pb.Duration.AsObject,
  }
}

export class AllergyIntoleranceReasonRefuted extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceReasonRefuted.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceReasonRefuted): AllergyIntoleranceReasonRefuted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceReasonRefuted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceReasonRefuted;
  static deserializeBinaryFromReader(message: AllergyIntoleranceReasonRefuted, reader: jspb.BinaryReader): AllergyIntoleranceReasonRefuted;
}

export namespace AllergyIntoleranceReasonRefuted {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceResolutionAge extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAge(): boolean;
  clearValueAge(): void;
  getValueAge(): proto_stu3_datatypes_pb.Age | undefined;
  setValueAge(value?: proto_stu3_datatypes_pb.Age): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceResolutionAge.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceResolutionAge): AllergyIntoleranceResolutionAge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceResolutionAge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceResolutionAge;
  static deserializeBinaryFromReader(message: AllergyIntoleranceResolutionAge, reader: jspb.BinaryReader): AllergyIntoleranceResolutionAge;
}

export namespace AllergyIntoleranceResolutionAge {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAge?: proto_stu3_datatypes_pb.Age.AsObject,
  }
}

export class AllergyIntoleranceSubstanceExposureRisk extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasSubstance(): boolean;
  clearSubstance(): void;
  getSubstance(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setSubstance(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasExposureRisk(): boolean;
  clearExposureRisk(): void;
  getExposureRisk(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setExposureRisk(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSubstanceExposureRisk.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSubstanceExposureRisk): AllergyIntoleranceSubstanceExposureRisk.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSubstanceExposureRisk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSubstanceExposureRisk;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSubstanceExposureRisk, reader: jspb.BinaryReader): AllergyIntoleranceSubstanceExposureRisk;
}

export namespace AllergyIntoleranceSubstanceExposureRisk {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    substance?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    exposureRisk?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AuditEventAccession extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAccession.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAccession): AuditEventAccession.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAccession, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAccession;
  static deserializeBinaryFromReader(message: AuditEventAccession, reader: jspb.BinaryReader): AuditEventAccession;
}

export namespace AuditEventAccession {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventAnonymized extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAnonymized.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAnonymized): AuditEventAnonymized.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAnonymized, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAnonymized;
  static deserializeBinaryFromReader(message: AuditEventAnonymized, reader: jspb.BinaryReader): AuditEventAnonymized;
}

export namespace AuditEventAnonymized {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class AuditEventEncrypted extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventEncrypted.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventEncrypted): AuditEventEncrypted.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventEncrypted, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventEncrypted;
  static deserializeBinaryFromReader(message: AuditEventEncrypted, reader: jspb.BinaryReader): AuditEventEncrypted;
}

export namespace AuditEventEncrypted {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class AuditEventInstance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventInstance.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventInstance): AuditEventInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventInstance;
  static deserializeBinaryFromReader(message: AuditEventInstance, reader: jspb.BinaryReader): AuditEventInstance;
}

export namespace AuditEventInstance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventMPPS extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventMPPS.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventMPPS): AuditEventMPPS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventMPPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventMPPS;
  static deserializeBinaryFromReader(message: AuditEventMPPS, reader: jspb.BinaryReader): AuditEventMPPS;
}

export namespace AuditEventMPPS {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventNumberOfInstances extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventNumberOfInstances.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventNumberOfInstances): AuditEventNumberOfInstances.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventNumberOfInstances, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventNumberOfInstances;
  static deserializeBinaryFromReader(message: AuditEventNumberOfInstances, reader: jspb.BinaryReader): AuditEventNumberOfInstances;
}

export namespace AuditEventNumberOfInstances {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class AuditEventParticipantObjectContainsStudy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventParticipantObjectContainsStudy.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventParticipantObjectContainsStudy): AuditEventParticipantObjectContainsStudy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventParticipantObjectContainsStudy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventParticipantObjectContainsStudy;
  static deserializeBinaryFromReader(message: AuditEventParticipantObjectContainsStudy, reader: jspb.BinaryReader): AuditEventParticipantObjectContainsStudy;
}

export namespace AuditEventParticipantObjectContainsStudy {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class AuditEventSOPClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventSOPClass.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventSOPClass): AuditEventSOPClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventSOPClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventSOPClass;
  static deserializeBinaryFromReader(message: AuditEventSOPClass, reader: jspb.BinaryReader): AuditEventSOPClass;
}

export namespace AuditEventSOPClass {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class PatientBirthPlace extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAddress(): boolean;
  clearValueAddress(): void;
  getValueAddress(): proto_stu3_datatypes_pb.Address | undefined;
  setValueAddress(value?: proto_stu3_datatypes_pb.Address): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientBirthPlace.AsObject;
  static toObject(includeInstance: boolean, msg: PatientBirthPlace): PatientBirthPlace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientBirthPlace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientBirthPlace;
  static deserializeBinaryFromReader(message: PatientBirthPlace, reader: jspb.BinaryReader): PatientBirthPlace;
}

export namespace PatientBirthPlace {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAddress?: proto_stu3_datatypes_pb.Address.AsObject,
  }
}

export class BodySiteInstance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BodySiteInstance.AsObject;
  static toObject(includeInstance: boolean, msg: BodySiteInstance): BodySiteInstance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BodySiteInstance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BodySiteInstance;
  static deserializeBinaryFromReader(message: BodySiteInstance, reader: jspb.BinaryReader): BodySiteInstance;
}

export namespace BodySiteInstance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class CapabilityStatementExpectation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ConformanceExpectationCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ConformanceExpectationCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementExpectation.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementExpectation): CapabilityStatementExpectation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementExpectation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementExpectation;
  static deserializeBinaryFromReader(message: CapabilityStatementExpectation, reader: jspb.BinaryReader): CapabilityStatementExpectation;
}

export namespace CapabilityStatementExpectation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ConformanceExpectationCode.AsObject,
  }
}

export class CapabilityStatementProhibited extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementProhibited.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementProhibited): CapabilityStatementProhibited.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementProhibited, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementProhibited;
  static deserializeBinaryFromReader(message: CapabilityStatementProhibited, reader: jspb.BinaryReader): CapabilityStatementProhibited;
}

export namespace CapabilityStatementProhibited {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class CapabilityStatementSearchParameterCombination extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearRequiredList(): void;
  getRequiredList(): Array<proto_stu3_datatypes_pb.String>;
  setRequiredList(value: Array<proto_stu3_datatypes_pb.String>): void;
  addRequired(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  clearOptionalList(): void;
  getOptionalList(): Array<proto_stu3_datatypes_pb.String>;
  setOptionalList(value: Array<proto_stu3_datatypes_pb.String>): void;
  addOptional(value?: proto_stu3_datatypes_pb.String, index?: number): proto_stu3_datatypes_pb.String;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementSearchParameterCombination.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementSearchParameterCombination): CapabilityStatementSearchParameterCombination.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementSearchParameterCombination, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementSearchParameterCombination;
  static deserializeBinaryFromReader(message: CapabilityStatementSearchParameterCombination, reader: jspb.BinaryReader): CapabilityStatementSearchParameterCombination;
}

export namespace CapabilityStatementSearchParameterCombination {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    requiredList: Array<proto_stu3_datatypes_pb.String.AsObject>,
    optionalList: Array<proto_stu3_datatypes_pb.String.AsObject>,
  }
}

export class CapabilityStatementSupportedSystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementSupportedSystem.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementSupportedSystem): CapabilityStatementSupportedSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementSupportedSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementSupportedSystem;
  static deserializeBinaryFromReader(message: CapabilityStatementSupportedSystem, reader: jspb.BinaryReader): CapabilityStatementSupportedSystem;
}

export namespace CapabilityStatementSupportedSystem {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class CapabilityStatementWebsocket extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementWebsocket.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementWebsocket): CapabilityStatementWebsocket.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementWebsocket, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementWebsocket;
  static deserializeBinaryFromReader(message: CapabilityStatementWebsocket, reader: jspb.BinaryReader): CapabilityStatementWebsocket;
}

export namespace CapabilityStatementWebsocket {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class CarePlanActivityTitle extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityTitle.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityTitle): CarePlanActivityTitle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityTitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityTitle;
  static deserializeBinaryFromReader(message: CarePlanActivityTitle, reader: jspb.BinaryReader): CarePlanActivityTitle;
}

export namespace CarePlanActivityTitle {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemAuthor): CodeSystemAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemAuthor;
  static deserializeBinaryFromReader(message: CodeSystemAuthor, reader: jspb.BinaryReader): CodeSystemAuthor;
}

export namespace CodeSystemAuthor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemComment extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_stu3_datatypes_pb.String | undefined;
  setContent(value?: proto_stu3_datatypes_pb.String): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): proto_stu3_datatypes_pb.Instant | undefined;
  setTimestamp(value?: proto_stu3_datatypes_pb.Instant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemComment.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemComment): CodeSystemComment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemComment;
  static deserializeBinaryFromReader(message: CodeSystemComment, reader: jspb.BinaryReader): CodeSystemComment;
}

export namespace CodeSystemComment {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    content?: proto_stu3_datatypes_pb.String.AsObject,
    timestamp?: proto_stu3_datatypes_pb.Instant.AsObject,
  }
}

export class CodeSystemComments extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemComments.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemComments): CodeSystemComments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemComments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemComments;
  static deserializeBinaryFromReader(message: CodeSystemComments, reader: jspb.BinaryReader): CodeSystemComments;
}

export namespace CodeSystemComments {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemConceptOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemConceptOrder.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemConceptOrder): CodeSystemConceptOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemConceptOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemConceptOrder;
  static deserializeBinaryFromReader(message: CodeSystemConceptOrder, reader: jspb.BinaryReader): CodeSystemConceptOrder;
}

export namespace CodeSystemConceptOrder {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class CodeSystemDeprecated extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemDeprecated.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemDeprecated): CodeSystemDeprecated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemDeprecated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemDeprecated;
  static deserializeBinaryFromReader(message: CodeSystemDeprecated, reader: jspb.BinaryReader): CodeSystemDeprecated;
}

export namespace CodeSystemDeprecated {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class CodeSystemEffectiveDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemEffectiveDate.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemEffectiveDate): CodeSystemEffectiveDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemEffectiveDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemEffectiveDate;
  static deserializeBinaryFromReader(message: CodeSystemEffectiveDate, reader: jspb.BinaryReader): CodeSystemEffectiveDate;
}

export namespace CodeSystemEffectiveDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class CodeSystemExpirationDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemExpirationDate.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemExpirationDate): CodeSystemExpirationDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemExpirationDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemExpirationDate;
  static deserializeBinaryFromReader(message: CodeSystemExpirationDate, reader: jspb.BinaryReader): CodeSystemExpirationDate;
}

export namespace CodeSystemExpirationDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class CodeSystemHistory extends jspb.Message {
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

  clearRevisionList(): void;
  getRevisionList(): Array<CodeSystemHistory.Revision>;
  setRevisionList(value: Array<CodeSystemHistory.Revision>): void;
  addRevision(value?: CodeSystemHistory.Revision, index?: number): CodeSystemHistory.Revision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemHistory.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemHistory): CodeSystemHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemHistory;
  static deserializeBinaryFromReader(message: CodeSystemHistory, reader: jspb.BinaryReader): CodeSystemHistory;
}

export namespace CodeSystemHistory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    revisionList: Array<CodeSystemHistory.Revision.AsObject>,
  }

  export class Revision extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasIdSlice(): boolean;
    clearIdSlice(): void;
    getIdSlice(): proto_stu3_datatypes_pb.String | undefined;
    setIdSlice(value?: proto_stu3_datatypes_pb.String): void;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): proto_stu3_datatypes_pb.String | undefined;
    setAuthor(value?: proto_stu3_datatypes_pb.String): void;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): proto_stu3_datatypes_pb.String | undefined;
    setNotes(value?: proto_stu3_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Revision.AsObject;
    static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Revision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Revision;
    static deserializeBinaryFromReader(message: Revision, reader: jspb.BinaryReader): Revision;
  }

  export namespace Revision {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      date?: proto_stu3_datatypes_pb.DateTime.AsObject,
      idSlice?: proto_stu3_datatypes_pb.String.AsObject,
      author?: proto_stu3_datatypes_pb.String.AsObject,
      notes?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }
}

export class CodeSystemKeyWord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemKeyWord.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemKeyWord): CodeSystemKeyWord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemKeyWord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemKeyWord;
  static deserializeBinaryFromReader(message: CodeSystemKeyWord, reader: jspb.BinaryReader): CodeSystemKeyWord;
}

export namespace CodeSystemKeyWord {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemLabel.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemLabel): CodeSystemLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemLabel;
  static deserializeBinaryFromReader(message: CodeSystemLabel, reader: jspb.BinaryReader): CodeSystemLabel;
}

export namespace CodeSystemLabel {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemMap.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemMap): CodeSystemMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemMap;
  static deserializeBinaryFromReader(message: CodeSystemMap, reader: jspb.BinaryReader): CodeSystemMap;
}

export namespace CodeSystemMap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class CodeSystemOrdinalValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemOrdinalValue.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemOrdinalValue): CodeSystemOrdinalValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemOrdinalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemOrdinalValue;
  static deserializeBinaryFromReader(message: CodeSystemOrdinalValue, reader: jspb.BinaryReader): CodeSystemOrdinalValue;
}

export namespace CodeSystemOrdinalValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class CodeSystemOtherName extends jspb.Message {
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

  hasPreferred(): boolean;
  clearPreferred(): void;
  getPreferred(): proto_stu3_datatypes_pb.Boolean | undefined;
  setPreferred(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemOtherName.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemOtherName): CodeSystemOtherName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemOtherName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemOtherName;
  static deserializeBinaryFromReader(message: CodeSystemOtherName, reader: jspb.BinaryReader): CodeSystemOtherName;
}

export namespace CodeSystemOtherName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    preferred?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class CodeSystemReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemReference.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemReference): CodeSystemReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemReference;
  static deserializeBinaryFromReader(message: CodeSystemReference, reader: jspb.BinaryReader): CodeSystemReference;
}

export namespace CodeSystemReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class CodeSystemReplacedby extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemReplacedby.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemReplacedby): CodeSystemReplacedby.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemReplacedby, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemReplacedby;
  static deserializeBinaryFromReader(message: CodeSystemReplacedby, reader: jspb.BinaryReader): CodeSystemReplacedby;
}

export namespace CodeSystemReplacedby {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class CodeSystemSourceReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemSourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemSourceReference): CodeSystemSourceReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemSourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemSourceReference;
  static deserializeBinaryFromReader(message: CodeSystemSourceReference, reader: jspb.BinaryReader): CodeSystemSourceReference;
}

export namespace CodeSystemSourceReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class CodeSystemSubsumes extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_datatypes_pb.Code | undefined;
  setValueCode(value?: proto_stu3_datatypes_pb.Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemSubsumes.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemSubsumes): CodeSystemSubsumes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemSubsumes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemSubsumes;
  static deserializeBinaryFromReader(message: CodeSystemSubsumes, reader: jspb.BinaryReader): CodeSystemSubsumes;
}

export namespace CodeSystemSubsumes {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_datatypes_pb.Code.AsObject,
  }
}

export class CodeSystemTrustedExpansion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemTrustedExpansion.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemTrustedExpansion): CodeSystemTrustedExpansion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemTrustedExpansion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemTrustedExpansion;
  static deserializeBinaryFromReader(message: CodeSystemTrustedExpansion, reader: jspb.BinaryReader): CodeSystemTrustedExpansion;
}

export namespace CodeSystemTrustedExpansion {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class CodeSystemUsage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): proto_stu3_datatypes_pb.String | undefined;
  setUser(value?: proto_stu3_datatypes_pb.String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_stu3_datatypes_pb.String | undefined;
  setUse(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemUsage.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemUsage): CodeSystemUsage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemUsage;
  static deserializeBinaryFromReader(message: CodeSystemUsage, reader: jspb.BinaryReader): CodeSystemUsage;
}

export namespace CodeSystemUsage {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    user?: proto_stu3_datatypes_pb.String.AsObject,
    use?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodeSystemWarning extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemWarning.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemWarning): CodeSystemWarning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemWarning;
  static deserializeBinaryFromReader(message: CodeSystemWarning, reader: jspb.BinaryReader): CodeSystemWarning;
}

export namespace CodeSystemWarning {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
  }
}

export class CodeSystemWorkflowStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemWorkflowStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemWorkflowStatus): CodeSystemWorkflowStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemWorkflowStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemWorkflowStatus;
  static deserializeBinaryFromReader(message: CodeSystemWorkflowStatus, reader: jspb.BinaryReader): CodeSystemWorkflowStatus;
}

export namespace CodeSystemWorkflowStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodingSctdescid extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueId(): boolean;
  clearValueId(): void;
  getValueId(): proto_stu3_datatypes_pb.Id | undefined;
  setValueId(value?: proto_stu3_datatypes_pb.Id): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodingSctdescid.AsObject;
  static toObject(includeInstance: boolean, msg: CodingSctdescid): CodingSctdescid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingSctdescid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingSctdescid;
  static deserializeBinaryFromReader(message: CodingSctdescid, reader: jspb.BinaryReader): CodingSctdescid;
}

export namespace CodingSctdescid {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueId?: proto_stu3_datatypes_pb.Id.AsObject,
  }
}

export class CommunicationMedia extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAttachment(): boolean;
  clearValueAttachment(): void;
  getValueAttachment(): proto_stu3_datatypes_pb.Attachment | undefined;
  setValueAttachment(value?: proto_stu3_datatypes_pb.Attachment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationMedia.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationMedia): CommunicationMedia.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationMedia, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationMedia;
  static deserializeBinaryFromReader(message: CommunicationMedia, reader: jspb.BinaryReader): CommunicationMedia;
}

export namespace CommunicationMedia {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAttachment?: proto_stu3_datatypes_pb.Attachment.AsObject,
  }
}

export class CommunicationReasonNotPerformed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationReasonNotPerformed.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationReasonNotPerformed): CommunicationReasonNotPerformed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationReasonNotPerformed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationReasonNotPerformed;
  static deserializeBinaryFromReader(message: CommunicationReasonNotPerformed, reader: jspb.BinaryReader): CommunicationReasonNotPerformed;
}

export namespace CommunicationReasonNotPerformed {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class CommunicationRequestDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): CommunicationRequestDefinition.Value | undefined;
  setValue(value?: CommunicationRequestDefinition.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestDefinition): CommunicationRequestDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestDefinition;
  static deserializeBinaryFromReader(message: CommunicationRequestDefinition, reader: jspb.BinaryReader): CommunicationRequestDefinition;
}

export namespace CommunicationRequestDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: CommunicationRequestDefinition.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class CommunicationRequestOrderedBy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): CommunicationRequestOrderedBy.Value | undefined;
  setValue(value?: CommunicationRequestOrderedBy.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestOrderedBy.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestOrderedBy): CommunicationRequestOrderedBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestOrderedBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestOrderedBy;
  static deserializeBinaryFromReader(message: CommunicationRequestOrderedBy, reader: jspb.BinaryReader): CommunicationRequestOrderedBy;
}

export namespace CommunicationRequestOrderedBy {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: CommunicationRequestOrderedBy.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class CommunicationRequestReasonRejected extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestReasonRejected.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestReasonRejected): CommunicationRequestReasonRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestReasonRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestReasonRejected;
  static deserializeBinaryFromReader(message: CommunicationRequestReasonRejected, reader: jspb.BinaryReader): CommunicationRequestReasonRejected;
}

export namespace CommunicationRequestReasonRejected {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class CommunicationRequestRelevantHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestRelevantHistory.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestRelevantHistory): CommunicationRequestRelevantHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestRelevantHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestRelevantHistory;
  static deserializeBinaryFromReader(message: CommunicationRequestRelevantHistory, reader: jspb.BinaryReader): CommunicationRequestRelevantHistory;
}

export namespace CommunicationRequestRelevantHistory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class CommunicationRequestSupportingInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationRequestSupportingInfo.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationRequestSupportingInfo): CommunicationRequestSupportingInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationRequestSupportingInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationRequestSupportingInfo;
  static deserializeBinaryFromReader(message: CommunicationRequestSupportingInfo, reader: jspb.BinaryReader): CommunicationRequestSupportingInfo;
}

export namespace CommunicationRequestSupportingInfo {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class CompositionOtherConfidentiality extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionOtherConfidentiality.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionOtherConfidentiality): CompositionOtherConfidentiality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionOtherConfidentiality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionOtherConfidentiality;
  static deserializeBinaryFromReader(message: CompositionOtherConfidentiality, reader: jspb.BinaryReader): CompositionOtherConfidentiality;
}

export namespace CompositionOtherConfidentiality {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class ConceptMapBidirectional extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapBidirectional.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapBidirectional): ConceptMapBidirectional.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapBidirectional, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapBidirectional;
  static deserializeBinaryFromReader(message: ConceptMapBidirectional, reader: jspb.BinaryReader): ConceptMapBidirectional;
}

export namespace ConceptMapBidirectional {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ConditionBasedOn extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionBasedOn.Value | undefined;
  setValue(value?: ConditionBasedOn.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionBasedOn.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionBasedOn): ConditionBasedOn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionBasedOn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionBasedOn;
  static deserializeBinaryFromReader(message: ConditionBasedOn, reader: jspb.BinaryReader): ConditionBasedOn;
}

export namespace ConditionBasedOn {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ConditionBasedOn.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class ConditionCriticality extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionCriticality.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionCriticality): ConditionCriticality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionCriticality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionCriticality;
  static deserializeBinaryFromReader(message: ConditionCriticality, reader: jspb.BinaryReader): ConditionCriticality;
}

export namespace ConditionCriticality {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ConditionDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionDefinition): ConditionDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionDefinition;
  static deserializeBinaryFromReader(message: ConditionDefinition, reader: jspb.BinaryReader): ConditionDefinition;
}

export namespace ConditionDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ConditionDueTo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionDueTo.Value | undefined;
  setValue(value?: ConditionDueTo.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionDueTo.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionDueTo): ConditionDueTo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionDueTo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionDueTo;
  static deserializeBinaryFromReader(message: ConditionDueTo, reader: jspb.BinaryReader): ConditionDueTo;
}

export namespace ConditionDueTo {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ConditionDueTo.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class ConditionOccurredFollowing extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionOccurredFollowing.Value | undefined;
  setValue(value?: ConditionOccurredFollowing.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionOccurredFollowing.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionOccurredFollowing): ConditionOccurredFollowing.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionOccurredFollowing, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionOccurredFollowing;
  static deserializeBinaryFromReader(message: ConditionOccurredFollowing, reader: jspb.BinaryReader): ConditionOccurredFollowing;
}

export namespace ConditionOccurredFollowing {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ConditionOccurredFollowing.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class ConditionOutcome extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionOutcome.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionOutcome): ConditionOutcome.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionOutcome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionOutcome;
  static deserializeBinaryFromReader(message: ConditionOutcome, reader: jspb.BinaryReader): ConditionOutcome;
}

export namespace ConditionOutcome {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ConditionPartOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConditionPartOf.Value | undefined;
  setValue(value?: ConditionPartOf.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionPartOf.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionPartOf): ConditionPartOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionPartOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionPartOf;
  static deserializeBinaryFromReader(message: ConditionPartOf, reader: jspb.BinaryReader): ConditionPartOf;
}

export namespace ConditionPartOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ConditionPartOf.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class ConditionRuledOut extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionRuledOut.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionRuledOut): ConditionRuledOut.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionRuledOut, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionRuledOut;
  static deserializeBinaryFromReader(message: ConditionRuledOut, reader: jspb.BinaryReader): ConditionRuledOut;
}

export namespace ConditionRuledOut {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ConditionTargetBodySite extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionTargetBodySite.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionTargetBodySite): ConditionTargetBodySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionTargetBodySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionTargetBodySite;
  static deserializeBinaryFromReader(message: ConditionTargetBodySite, reader: jspb.BinaryReader): ConditionTargetBodySite;
}

export namespace ConditionTargetBodySite {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ConsentLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentLocation.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentLocation): ConsentLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentLocation;
  static deserializeBinaryFromReader(message: ConsentLocation, reader: jspb.BinaryReader): ConsentLocation;
}

export namespace ConsentLocation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ConsentNotificationEndpoint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentNotificationEndpoint.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentNotificationEndpoint): ConsentNotificationEndpoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentNotificationEndpoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentNotificationEndpoint;
  static deserializeBinaryFromReader(message: ConsentNotificationEndpoint, reader: jspb.BinaryReader): ConsentNotificationEndpoint;
}

export namespace ConsentNotificationEndpoint {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ConsentWitness extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ConsentWitness.Value | undefined;
  setValue(value?: ConsentWitness.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentWitness.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentWitness): ConsentWitness.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentWitness, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentWitness;
  static deserializeBinaryFromReader(message: ConsentWitness, reader: jspb.BinaryReader): ConsentWitness;
}

export namespace ConsentWitness {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ConsentWitness.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class CalculatedValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CalculatedValue.AsObject;
  static toObject(includeInstance: boolean, msg: CalculatedValue): CalculatedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CalculatedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CalculatedValue;
  static deserializeBinaryFromReader(message: CalculatedValue, reader: jspb.BinaryReader): CalculatedValue;
}

export namespace CalculatedValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AttachmentCitation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentCitation.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentCitation): AttachmentCitation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentCitation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentCitation;
  static deserializeBinaryFromReader(message: AttachmentCitation, reader: jspb.BinaryReader): AttachmentCitation;
}

export namespace AttachmentCitation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CqifCondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CqifCondition.AsObject;
  static toObject(includeInstance: boolean, msg: CqifCondition): CqifCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CqifCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CqifCondition;
  static deserializeBinaryFromReader(message: CqifCondition, reader: jspb.BinaryReader): CqifCondition;
}

export namespace CqifCondition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CqlExpression extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CqlExpression.AsObject;
  static toObject(includeInstance: boolean, msg: CqlExpression): CqlExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CqlExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CqlExpression;
  static deserializeBinaryFromReader(message: CqlExpression, reader: jspb.BinaryReader): CqlExpression;
}

export namespace CqlExpression {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class FhirPathExpression extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FhirPathExpression.AsObject;
  static toObject(includeInstance: boolean, msg: FhirPathExpression): FhirPathExpression.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FhirPathExpression, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FhirPathExpression;
  static deserializeBinaryFromReader(message: FhirPathExpression, reader: jspb.BinaryReader): FhirPathExpression;
}

export namespace FhirPathExpression {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class BasicEncounterClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicEncounterClass.AsObject;
  static toObject(includeInstance: boolean, msg: BasicEncounterClass): BasicEncounterClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicEncounterClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicEncounterClass;
  static deserializeBinaryFromReader(message: BasicEncounterClass, reader: jspb.BinaryReader): BasicEncounterClass;
}

export namespace BasicEncounterClass {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicEncounterType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicEncounterType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicEncounterType): BasicEncounterType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicEncounterType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicEncounterType;
  static deserializeBinaryFromReader(message: BasicEncounterType, reader: jspb.BinaryReader): BasicEncounterType;
}

export namespace BasicEncounterType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicInitiatingOrganization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicInitiatingOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: BasicInitiatingOrganization): BasicInitiatingOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicInitiatingOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicInitiatingOrganization;
  static deserializeBinaryFromReader(message: BasicInitiatingOrganization, reader: jspb.BinaryReader): BasicInitiatingOrganization;
}

export namespace BasicInitiatingOrganization {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class BasicInitiatingPerson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): BasicInitiatingPerson.Value | undefined;
  setValue(value?: BasicInitiatingPerson.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicInitiatingPerson.AsObject;
  static toObject(includeInstance: boolean, msg: BasicInitiatingPerson): BasicInitiatingPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicInitiatingPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicInitiatingPerson;
  static deserializeBinaryFromReader(message: BasicInitiatingPerson, reader: jspb.BinaryReader): BasicInitiatingPerson;
}

export namespace BasicInitiatingPerson {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: BasicInitiatingPerson.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class BasicReceivingOrganization extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicReceivingOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: BasicReceivingOrganization): BasicReceivingOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicReceivingOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicReceivingOrganization;
  static deserializeBinaryFromReader(message: BasicReceivingOrganization, reader: jspb.BinaryReader): BasicReceivingOrganization;
}

export namespace BasicReceivingOrganization {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class BasicReceivingPerson extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): BasicReceivingPerson.Value | undefined;
  setValue(value?: BasicReceivingPerson.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicReceivingPerson.AsObject;
  static toObject(includeInstance: boolean, msg: BasicReceivingPerson): BasicReceivingPerson.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicReceivingPerson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicReceivingPerson;
  static deserializeBinaryFromReader(message: BasicReceivingPerson, reader: jspb.BinaryReader): BasicReceivingPerson;
}

export namespace BasicReceivingPerson {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: BasicReceivingPerson.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class BasicRecipientLanguage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicRecipientLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: BasicRecipientLanguage): BasicRecipientLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicRecipientLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicRecipientLanguage;
  static deserializeBinaryFromReader(message: BasicRecipientLanguage, reader: jspb.BinaryReader): BasicRecipientLanguage;
}

export namespace BasicRecipientLanguage {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicRecipientType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicRecipientType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicRecipientType): BasicRecipientType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicRecipientType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicRecipientType;
  static deserializeBinaryFromReader(message: BasicRecipientType, reader: jspb.BinaryReader): BasicRecipientType;
}

export namespace BasicRecipientType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserLanguage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserLanguage.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserLanguage): BasicSystemUserLanguage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserLanguage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserLanguage;
  static deserializeBinaryFromReader(message: BasicSystemUserLanguage, reader: jspb.BinaryReader): BasicSystemUserLanguage;
}

export namespace BasicSystemUserLanguage {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserTaskContext extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserTaskContext.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserTaskContext): BasicSystemUserTaskContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserTaskContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserTaskContext;
  static deserializeBinaryFromReader(message: BasicSystemUserTaskContext, reader: jspb.BinaryReader): BasicSystemUserTaskContext;
}

export namespace BasicSystemUserTaskContext {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BasicSystemUserType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicSystemUserType.AsObject;
  static toObject(includeInstance: boolean, msg: BasicSystemUserType): BasicSystemUserType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicSystemUserType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicSystemUserType;
  static deserializeBinaryFromReader(message: BasicSystemUserType, reader: jspb.BinaryReader): BasicSystemUserType;
}

export namespace BasicSystemUserType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class InitialValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitialValue.AsObject;
  static toObject(includeInstance: boolean, msg: InitialValue): InitialValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InitialValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitialValue;
  static deserializeBinaryFromReader(message: InitialValue, reader: jspb.BinaryReader): InitialValue;
}

export namespace InitialValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CqifLibrary extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CqifLibrary.AsObject;
  static toObject(includeInstance: boolean, msg: CqifLibrary): CqifLibrary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CqifLibrary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CqifLibrary;
  static deserializeBinaryFromReader(message: CqifLibrary, reader: jspb.BinaryReader): CqifLibrary;
}

export namespace CqifLibrary {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class MeasureInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasMeasure(): boolean;
  clearMeasure(): void;
  getMeasure(): proto_stu3_datatypes_pb.Reference | undefined;
  setMeasure(value?: proto_stu3_datatypes_pb.Reference): void;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  hasPopulationIdentifier(): boolean;
  clearPopulationIdentifier(): void;
  getPopulationIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setPopulationIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureInfo): MeasureInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureInfo;
  static deserializeBinaryFromReader(message: MeasureInfo, reader: jspb.BinaryReader): MeasureInfo;
}

export namespace MeasureInfo {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    measure?: proto_stu3_datatypes_pb.Reference.AsObject,
    groupIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
    populationIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class QuestionnaireOptionCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOptionCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOptionCode): QuestionnaireOptionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOptionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOptionCode;
  static deserializeBinaryFromReader(message: QuestionnaireOptionCode, reader: jspb.BinaryReader): QuestionnaireOptionCode;
}

export namespace QuestionnaireOptionCode {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AttachmentQualityOfEvidence extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentQualityOfEvidence.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentQualityOfEvidence): AttachmentQualityOfEvidence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentQualityOfEvidence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentQualityOfEvidence;
  static deserializeBinaryFromReader(message: AttachmentQualityOfEvidence, reader: jspb.BinaryReader): AttachmentQualityOfEvidence;
}

export namespace AttachmentQualityOfEvidence {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class CodingSourceValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodingSourceValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: CodingSourceValueSet): CodingSourceValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingSourceValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingSourceValueSet;
  static deserializeBinaryFromReader(message: CodingSourceValueSet, reader: jspb.BinaryReader): CodingSourceValueSet;
}

export namespace CodingSourceValueSet {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class AttachmentStrengthOfRecommendation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachmentStrengthOfRecommendation.AsObject;
  static toObject(includeInstance: boolean, msg: AttachmentStrengthOfRecommendation): AttachmentStrengthOfRecommendation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AttachmentStrengthOfRecommendation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachmentStrengthOfRecommendation;
  static deserializeBinaryFromReader(message: AttachmentStrengthOfRecommendation, reader: jspb.BinaryReader): AttachmentStrengthOfRecommendation;
}

export namespace AttachmentStrengthOfRecommendation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DataAbsentReason extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.DataAbsentReasonCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.DataAbsentReasonCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAbsentReason.AsObject;
  static toObject(includeInstance: boolean, msg: DataAbsentReason): DataAbsentReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAbsentReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAbsentReason;
  static deserializeBinaryFromReader(message: DataAbsentReason, reader: jspb.BinaryReader): DataAbsentReason;
}

export namespace DataAbsentReason {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.DataAbsentReasonCode.AsObject,
  }
}

export class StructureDefinitionDatadictionary extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionDatadictionary.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionDatadictionary): StructureDefinitionDatadictionary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionDatadictionary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionDatadictionary;
  static deserializeBinaryFromReader(message: StructureDefinitionDatadictionary, reader: jspb.BinaryReader): StructureDefinitionDatadictionary;
}

export namespace StructureDefinitionDatadictionary {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class DeviceDin extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceDin.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceDin): DeviceDin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceDin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceDin;
  static deserializeBinaryFromReader(message: DeviceDin, reader: jspb.BinaryReader): DeviceDin;
}

export namespace DeviceDin {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class DeviceImplantStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ImplantStatusCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ImplantStatusCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceImplantStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceImplantStatus): DeviceImplantStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceImplantStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceImplantStatus;
  static deserializeBinaryFromReader(message: DeviceImplantStatus, reader: jspb.BinaryReader): DeviceImplantStatus;
}

export namespace DeviceImplantStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ImplantStatusCode.AsObject,
  }
}

export class DeviceRequestPatientInstruction extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasLang(): boolean;
  clearLang(): void;
  getLang(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLang(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_stu3_datatypes_pb.String | undefined;
  setContent(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceRequestPatientInstruction.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceRequestPatientInstruction): DeviceRequestPatientInstruction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceRequestPatientInstruction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceRequestPatientInstruction;
  static deserializeBinaryFromReader(message: DeviceRequestPatientInstruction, reader: jspb.BinaryReader): DeviceRequestPatientInstruction;
}

export namespace DeviceRequestPatientInstruction {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    lang?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    content?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class DeviceRequestReasonRejected extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceRequestReasonRejected.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceRequestReasonRejected): DeviceRequestReasonRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceRequestReasonRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceRequestReasonRejected;
  static deserializeBinaryFromReader(message: DeviceRequestReasonRejected, reader: jspb.BinaryReader): DeviceRequestReasonRejected;
}

export namespace DeviceRequestReasonRejected {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportAddendumOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAddendumOf.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAddendumOf): DiagnosticReportAddendumOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAddendumOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAddendumOf;
  static deserializeBinaryFromReader(message: DiagnosticReportAddendumOf, reader: jspb.BinaryReader): DiagnosticReportAddendumOf;
}

export namespace DiagnosticReportAddendumOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportExtends extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportExtends.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportExtends): DiagnosticReportExtends.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportExtends, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportExtends;
  static deserializeBinaryFromReader(message: DiagnosticReportExtends, reader: jspb.BinaryReader): DiagnosticReportExtends;
}

export namespace DiagnosticReportExtends {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportAnalysis extends jspb.Message {
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
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasInterpretation(): boolean;
  clearInterpretation(): void;
  getInterpretation(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setInterpretation(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAnalysis.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAnalysis): DiagnosticReportAnalysis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAnalysis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAnalysis;
  static deserializeBinaryFromReader(message: DiagnosticReportAnalysis, reader: jspb.BinaryReader): DiagnosticReportAnalysis;
}

export namespace DiagnosticReportAnalysis {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    interpretation?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportAssessedCondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAssessedCondition.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAssessedCondition): DiagnosticReportAssessedCondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAssessedCondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAssessedCondition;
  static deserializeBinaryFromReader(message: DiagnosticReportAssessedCondition, reader: jspb.BinaryReader): DiagnosticReportAssessedCondition;
}

export namespace DiagnosticReportAssessedCondition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportFamilyMemberHistory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportFamilyMemberHistory.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportFamilyMemberHistory): DiagnosticReportFamilyMemberHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportFamilyMemberHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportFamilyMemberHistory;
  static deserializeBinaryFromReader(message: DiagnosticReportFamilyMemberHistory, reader: jspb.BinaryReader): DiagnosticReportFamilyMemberHistory;
}

export namespace DiagnosticReportFamilyMemberHistory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportLocationPerformed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportLocationPerformed.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportLocationPerformed): DiagnosticReportLocationPerformed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportLocationPerformed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportLocationPerformed;
  static deserializeBinaryFromReader(message: DiagnosticReportLocationPerformed, reader: jspb.BinaryReader): DiagnosticReportLocationPerformed;
}

export namespace DiagnosticReportLocationPerformed {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportReplaces): DiagnosticReportReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportReplaces;
  static deserializeBinaryFromReader(message: DiagnosticReportReplaces, reader: jspb.BinaryReader): DiagnosticReportReplaces;
}

export namespace DiagnosticReportReplaces {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportSummaryOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportSummaryOf.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportSummaryOf): DiagnosticReportSummaryOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportSummaryOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportSummaryOf;
  static deserializeBinaryFromReader(message: DiagnosticReportSummaryOf, reader: jspb.BinaryReader): DiagnosticReportSummaryOf;
}

export namespace DiagnosticReportSummaryOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ElementDefinitionAllowedUnits extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionAllowedUnits.Value | undefined;
  setValue(value?: ElementDefinitionAllowedUnits.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionAllowedUnits.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionAllowedUnits): ElementDefinitionAllowedUnits.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionAllowedUnits, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionAllowedUnits;
  static deserializeBinaryFromReader(message: ElementDefinitionAllowedUnits, reader: jspb.BinaryReader): ElementDefinitionAllowedUnits;
}

export namespace ElementDefinitionAllowedUnits {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ElementDefinitionAllowedUnits.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }
}

export class ElementDefinitionBestpractice extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionBestpractice.Value | undefined;
  setValue(value?: ElementDefinitionBestpractice.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionBestpractice.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionBestpractice): ElementDefinitionBestpractice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionBestpractice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionBestpractice;
  static deserializeBinaryFromReader(message: ElementDefinitionBestpractice, reader: jspb.BinaryReader): ElementDefinitionBestpractice;
}

export namespace ElementDefinitionBestpractice {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ElementDefinitionBestpractice.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

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
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
      codeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      BOOLEAN = 1,
      CODEABLE_CONCEPT = 2,
    }
  }
}

export class ElementDefinitionBindingName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionBindingName.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionBindingName): ElementDefinitionBindingName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionBindingName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionBindingName;
  static deserializeBinaryFromReader(message: ElementDefinitionBindingName, reader: jspb.BinaryReader): ElementDefinitionBindingName;
}

export namespace ElementDefinitionBindingName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionEquivalence extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ConceptMapEquivalenceCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ConceptMapEquivalenceCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionEquivalence.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionEquivalence): ElementDefinitionEquivalence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionEquivalence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionEquivalence;
  static deserializeBinaryFromReader(message: ElementDefinitionEquivalence, reader: jspb.BinaryReader): ElementDefinitionEquivalence;
}

export namespace ElementDefinitionEquivalence {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ConceptMapEquivalenceCode.AsObject,
  }
}

export class ElementDefinitionIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionIdentifier): ElementDefinitionIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionIdentifier;
  static deserializeBinaryFromReader(message: ElementDefinitionIdentifier, reader: jspb.BinaryReader): ElementDefinitionIdentifier;
}

export namespace ElementDefinitionIdentifier {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class ElementDefinitionInheritedExtensibleValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionInheritedExtensibleValueSet.Value | undefined;
  setValue(value?: ElementDefinitionInheritedExtensibleValueSet.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionInheritedExtensibleValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionInheritedExtensibleValueSet): ElementDefinitionInheritedExtensibleValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionInheritedExtensibleValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionInheritedExtensibleValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionInheritedExtensibleValueSet, reader: jspb.BinaryReader): ElementDefinitionInheritedExtensibleValueSet;
}

export namespace ElementDefinitionInheritedExtensibleValueSet {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ElementDefinitionInheritedExtensibleValueSet.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_stu3_datatypes_pb.Uri | undefined;
    setUri(value?: proto_stu3_datatypes_pb.Uri): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      uri?: proto_stu3_datatypes_pb.Uri.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      URI = 1,
      REFERENCE = 2,
    }
  }
}

export class ElementDefinitionIsCommonBinding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionIsCommonBinding.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionIsCommonBinding): ElementDefinitionIsCommonBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionIsCommonBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionIsCommonBinding;
  static deserializeBinaryFromReader(message: ElementDefinitionIsCommonBinding, reader: jspb.BinaryReader): ElementDefinitionIsCommonBinding;
}

export namespace ElementDefinitionIsCommonBinding {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ElementDefinitionMaxValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionMaxValueSet.Value | undefined;
  setValue(value?: ElementDefinitionMaxValueSet.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionMaxValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionMaxValueSet): ElementDefinitionMaxValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionMaxValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionMaxValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionMaxValueSet, reader: jspb.BinaryReader): ElementDefinitionMaxValueSet;
}

export namespace ElementDefinitionMaxValueSet {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ElementDefinitionMaxValueSet.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_stu3_datatypes_pb.Uri | undefined;
    setUri(value?: proto_stu3_datatypes_pb.Uri): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      uri?: proto_stu3_datatypes_pb.Uri.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      URI = 1,
      REFERENCE = 2,
    }
  }
}

export class ElementDefinitionMinValueSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ElementDefinitionMinValueSet.Value | undefined;
  setValue(value?: ElementDefinitionMinValueSet.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionMinValueSet.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionMinValueSet): ElementDefinitionMinValueSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionMinValueSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionMinValueSet;
  static deserializeBinaryFromReader(message: ElementDefinitionMinValueSet, reader: jspb.BinaryReader): ElementDefinitionMinValueSet;
}

export namespace ElementDefinitionMinValueSet {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ElementDefinitionMinValueSet.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_stu3_datatypes_pb.Uri | undefined;
    setUri(value?: proto_stu3_datatypes_pb.Uri): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      uri?: proto_stu3_datatypes_pb.Uri.AsObject,
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      URI = 1,
      REFERENCE = 2,
    }
  }
}

export class Namespace extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Namespace.AsObject;
  static toObject(includeInstance: boolean, msg: Namespace): Namespace.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Namespace, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Namespace;
  static deserializeBinaryFromReader(message: Namespace, reader: jspb.BinaryReader): Namespace;
}

export namespace Namespace {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ElementDefinitionQuestion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionQuestion): ElementDefinitionQuestion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionQuestion;
  static deserializeBinaryFromReader(message: ElementDefinitionQuestion, reader: jspb.BinaryReader): ElementDefinitionQuestion;
}

export namespace ElementDefinitionQuestion {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionSelector extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionSelector.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionSelector): ElementDefinitionSelector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionSelector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionSelector;
  static deserializeBinaryFromReader(message: ElementDefinitionSelector, reader: jspb.BinaryReader): ElementDefinitionSelector;
}

export namespace ElementDefinitionSelector {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionTranslatable extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionTranslatable.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionTranslatable): ElementDefinitionTranslatable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionTranslatable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionTranslatable;
  static deserializeBinaryFromReader(message: ElementDefinitionTranslatable, reader: jspb.BinaryReader): ElementDefinitionTranslatable;
}

export namespace ElementDefinitionTranslatable {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class EncounterAssociatedEncounter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterAssociatedEncounter.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterAssociatedEncounter): EncounterAssociatedEncounter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterAssociatedEncounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterAssociatedEncounter;
  static deserializeBinaryFromReader(message: EncounterAssociatedEncounter, reader: jspb.BinaryReader): EncounterAssociatedEncounter;
}

export namespace EncounterAssociatedEncounter {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class EncounterModeOfArrival extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterModeOfArrival.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterModeOfArrival): EncounterModeOfArrival.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterModeOfArrival, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterModeOfArrival;
  static deserializeBinaryFromReader(message: EncounterModeOfArrival, reader: jspb.BinaryReader): EncounterModeOfArrival;
}

export namespace EncounterModeOfArrival {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class EncounterPrimaryDiagnosis extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValuePositiveInt(): boolean;
  clearValuePositiveInt(): void;
  getValuePositiveInt(): proto_stu3_datatypes_pb.PositiveInt | undefined;
  setValuePositiveInt(value?: proto_stu3_datatypes_pb.PositiveInt): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterPrimaryDiagnosis.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterPrimaryDiagnosis): EncounterPrimaryDiagnosis.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterPrimaryDiagnosis, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterPrimaryDiagnosis;
  static deserializeBinaryFromReader(message: EncounterPrimaryDiagnosis, reader: jspb.BinaryReader): EncounterPrimaryDiagnosis;
}

export namespace EncounterPrimaryDiagnosis {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valuePositiveInt?: proto_stu3_datatypes_pb.PositiveInt.AsObject,
  }
}

export class EncounterReasonCancelled extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterReasonCancelled.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterReasonCancelled): EncounterReasonCancelled.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterReasonCancelled, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterReasonCancelled;
  static deserializeBinaryFromReader(message: EncounterReasonCancelled, reader: jspb.BinaryReader): EncounterReasonCancelled;
}

export namespace EncounterReasonCancelled {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class EntryFormat extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntryFormat.AsObject;
  static toObject(includeInstance: boolean, msg: EntryFormat): EntryFormat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntryFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntryFormat;
  static deserializeBinaryFromReader(message: EntryFormat, reader: jspb.BinaryReader): EntryFormat;
}

export namespace EntryFormat {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class Definition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): Definition.Value | undefined;
  setValue(value?: Definition.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Definition.AsObject;
  static toObject(includeInstance: boolean, msg: Definition): Definition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Definition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Definition;
  static deserializeBinaryFromReader(message: Definition, reader: jspb.BinaryReader): Definition;
}

export namespace Definition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: Definition.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class DiagnosticReportNotDone extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportNotDone.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportNotDone): DiagnosticReportNotDone.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportNotDone, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportNotDone;
  static deserializeBinaryFromReader(message: DiagnosticReportNotDone, reader: jspb.BinaryReader): DiagnosticReportNotDone;
}

export namespace DiagnosticReportNotDone {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class OnBehalfOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OnBehalfOf.AsObject;
  static toObject(includeInstance: boolean, msg: OnBehalfOf): OnBehalfOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OnBehalfOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OnBehalfOf;
  static deserializeBinaryFromReader(message: OnBehalfOf, reader: jspb.BinaryReader): OnBehalfOf;
}

export namespace OnBehalfOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class PartOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartOf.AsObject;
  static toObject(includeInstance: boolean, msg: PartOf): PartOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PartOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartOf;
  static deserializeBinaryFromReader(message: PartOf, reader: jspb.BinaryReader): PartOf;
}

export namespace PartOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationPerformerRole extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationPerformerRole.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationPerformerRole): ObservationPerformerRole.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationPerformerRole, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationPerformerRole;
  static deserializeBinaryFromReader(message: ObservationPerformerRole, reader: jspb.BinaryReader): ObservationPerformerRole;
}

export namespace ObservationPerformerRole {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ReasonCode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReasonCode): ReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReasonCode;
  static deserializeBinaryFromReader(message: ReasonCode, reader: jspb.BinaryReader): ReasonCode;
}

export namespace ReasonCode {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ReasonReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ReasonReference.Value | undefined;
  setValue(value?: ReasonReference.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReasonReference.AsObject;
  static toObject(includeInstance: boolean, msg: ReasonReference): ReasonReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReasonReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReasonReference;
  static deserializeBinaryFromReader(message: ReasonReference, reader: jspb.BinaryReader): ReasonReference;
}

export namespace ReasonReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ReasonReference.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class FamilyMemberHistoryObservation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryObservation.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryObservation): FamilyMemberHistoryObservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryObservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryObservation;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryObservation, reader: jspb.BinaryReader): FamilyMemberHistoryObservation;
}

export namespace FamilyMemberHistoryObservation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryParent extends jspb.Message {
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
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryParent.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryParent): FamilyMemberHistoryParent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryParent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryParent;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryParent, reader: jspb.BinaryReader): FamilyMemberHistoryParent;
}

export namespace FamilyMemberHistoryParent {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    reference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistorySibling extends jspb.Message {
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
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasReference(): boolean;
  clearReference(): void;
  getReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistorySibling.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistorySibling): FamilyMemberHistorySibling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistorySibling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistorySibling;
  static deserializeBinaryFromReader(message: FamilyMemberHistorySibling, reader: jspb.BinaryReader): FamilyMemberHistorySibling;
}

export namespace FamilyMemberHistorySibling {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    reference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistoryAbatement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): FamilyMemberHistoryAbatement.Value | undefined;
  setValue(value?: FamilyMemberHistoryAbatement.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryAbatement.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryAbatement): FamilyMemberHistoryAbatement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryAbatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryAbatement;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryAbatement, reader: jspb.BinaryReader): FamilyMemberHistoryAbatement;
}

export namespace FamilyMemberHistoryAbatement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: FamilyMemberHistoryAbatement.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasAge(): boolean;
    clearAge(): void;
    getAge(): proto_stu3_datatypes_pb.Age | undefined;
    setAge(value?: proto_stu3_datatypes_pb.Age): void;

    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

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
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      age?: proto_stu3_datatypes_pb.Age.AsObject,
      pb_boolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      DATE = 1,
      AGE = 2,
      BOOLEAN = 3,
    }
  }
}

export class FamilyMemberHistoryPatientRecord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryPatientRecord.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryPatientRecord): FamilyMemberHistoryPatientRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryPatientRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryPatientRecord;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryPatientRecord, reader: jspb.BinaryReader): FamilyMemberHistoryPatientRecord;
}

export namespace FamilyMemberHistoryPatientRecord {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class FamilyMemberHistorySeverity extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistorySeverity.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistorySeverity): FamilyMemberHistorySeverity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistorySeverity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistorySeverity;
  static deserializeBinaryFromReader(message: FamilyMemberHistorySeverity, reader: jspb.BinaryReader): FamilyMemberHistorySeverity;
}

export namespace FamilyMemberHistorySeverity {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class FamilyMemberHistoryType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyMemberHistoryType.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyMemberHistoryType): FamilyMemberHistoryType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyMemberHistoryType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyMemberHistoryType;
  static deserializeBinaryFromReader(message: FamilyMemberHistoryType, reader: jspb.BinaryReader): FamilyMemberHistoryType;
}

export namespace FamilyMemberHistoryType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class FlagDetail extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagDetail.AsObject;
  static toObject(includeInstance: boolean, msg: FlagDetail): FlagDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagDetail;
  static deserializeBinaryFromReader(message: FlagDetail, reader: jspb.BinaryReader): FlagDetail;
}

export namespace FlagDetail {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class FlagPriority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagPriority.AsObject;
  static toObject(includeInstance: boolean, msg: FlagPriority): FlagPriority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagPriority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagPriority;
  static deserializeBinaryFromReader(message: FlagPriority, reader: jspb.BinaryReader): FlagPriority;
}

export namespace FlagPriority {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AddressGeolocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasLatitude(): boolean;
  clearLatitude(): void;
  getLatitude(): proto_stu3_datatypes_pb.Decimal | undefined;
  setLatitude(value?: proto_stu3_datatypes_pb.Decimal): void;

  hasLongitude(): boolean;
  clearLongitude(): void;
  getLongitude(): proto_stu3_datatypes_pb.Decimal | undefined;
  setLongitude(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressGeolocation.AsObject;
  static toObject(includeInstance: boolean, msg: AddressGeolocation): AddressGeolocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressGeolocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressGeolocation;
  static deserializeBinaryFromReader(message: AddressGeolocation, reader: jspb.BinaryReader): AddressGeolocation;
}

export namespace AddressGeolocation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    latitude?: proto_stu3_datatypes_pb.Decimal.AsObject,
    longitude?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class GoalAcceptance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasIndividual(): boolean;
  clearIndividual(): void;
  getIndividual(): proto_stu3_datatypes_pb.Reference | undefined;
  setIndividual(value?: proto_stu3_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_codes_pb.GoalAcceptanceStatusCode | undefined;
  setStatus(value?: proto_stu3_codes_pb.GoalAcceptanceStatusCode): void;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setPriority(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalAcceptance.AsObject;
  static toObject(includeInstance: boolean, msg: GoalAcceptance): GoalAcceptance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalAcceptance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalAcceptance;
  static deserializeBinaryFromReader(message: GoalAcceptance, reader: jspb.BinaryReader): GoalAcceptance;
}

export namespace GoalAcceptance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    individual?: proto_stu3_datatypes_pb.Reference.AsObject,
    status?: proto_stu3_codes_pb.GoalAcceptanceStatusCode.AsObject,
    priority?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ResourcePertainsToGoal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourcePertainsToGoal.AsObject;
  static toObject(includeInstance: boolean, msg: ResourcePertainsToGoal): ResourcePertainsToGoal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourcePertainsToGoal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourcePertainsToGoal;
  static deserializeBinaryFromReader(message: ResourcePertainsToGoal, reader: jspb.BinaryReader): ResourcePertainsToGoal;
}

export namespace ResourcePertainsToGoal {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class GoalReasonRejected extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalReasonRejected.AsObject;
  static toObject(includeInstance: boolean, msg: GoalReasonRejected): GoalReasonRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalReasonRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalReasonRejected;
  static deserializeBinaryFromReader(message: GoalReasonRejected, reader: jspb.BinaryReader): GoalReasonRejected;
}

export namespace GoalReasonRejected {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class GoalRelationship extends jspb.Message {
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
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasTarget(): boolean;
  clearTarget(): void;
  getTarget(): proto_stu3_datatypes_pb.Reference | undefined;
  setTarget(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalRelationship.AsObject;
  static toObject(includeInstance: boolean, msg: GoalRelationship): GoalRelationship.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalRelationship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalRelationship;
  static deserializeBinaryFromReader(message: GoalRelationship, reader: jspb.BinaryReader): GoalRelationship;
}

export namespace GoalRelationship {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    target?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportAlleleDatabase extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportAlleleDatabase.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportAlleleDatabase): DiagnosticReportAlleleDatabase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportAlleleDatabase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportAlleleDatabase;
  static deserializeBinaryFromReader(message: DiagnosticReportAlleleDatabase, reader: jspb.BinaryReader): DiagnosticReportAlleleDatabase;
}

export namespace DiagnosticReportAlleleDatabase {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportGlstring extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUrl(): boolean;
  clearUrl(): void;
  getUrl(): proto_stu3_datatypes_pb.Uri | undefined;
  setUrl(value?: proto_stu3_datatypes_pb.Uri): void;

  hasText(): boolean;
  clearText(): void;
  getText(): proto_stu3_datatypes_pb.String | undefined;
  setText(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportGlstring.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportGlstring): DiagnosticReportGlstring.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportGlstring, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportGlstring;
  static deserializeBinaryFromReader(message: DiagnosticReportGlstring, reader: jspb.BinaryReader): DiagnosticReportGlstring;
}

export namespace DiagnosticReportGlstring {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    url?: proto_stu3_datatypes_pb.Uri.AsObject,
    text?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class DiagnosticReportHaploid extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasLocus(): boolean;
  clearLocus(): void;
  getLocus(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setLocus(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasMethod(): boolean;
  clearMethod(): void;
  getMethod(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setMethod(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportHaploid.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportHaploid): DiagnosticReportHaploid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportHaploid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportHaploid;
  static deserializeBinaryFromReader(message: DiagnosticReportHaploid, reader: jspb.BinaryReader): DiagnosticReportHaploid;
}

export namespace DiagnosticReportHaploid {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    locus?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    type?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    method?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DiagnosticReportMethod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportMethod.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportMethod): DiagnosticReportMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportMethod;
  static deserializeBinaryFromReader(message: DiagnosticReportMethod, reader: jspb.BinaryReader): DiagnosticReportMethod;
}

export namespace DiagnosticReportMethod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class BundleHttpResponseHeader extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleHttpResponseHeader.AsObject;
  static toObject(includeInstance: boolean, msg: BundleHttpResponseHeader): BundleHttpResponseHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleHttpResponseHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleHttpResponseHeader;
  static deserializeBinaryFromReader(message: BundleHttpResponseHeader, reader: jspb.BinaryReader): BundleHttpResponseHeader;
}

export namespace BundleHttpResponseHeader {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNameAssemblyOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.HumanNameAssemblyOrderCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.HumanNameAssemblyOrderCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameAssemblyOrder.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameAssemblyOrder): HumanNameAssemblyOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameAssemblyOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameAssemblyOrder;
  static deserializeBinaryFromReader(message: HumanNameAssemblyOrder, reader: jspb.BinaryReader): HumanNameAssemblyOrder;
}

export namespace HumanNameAssemblyOrder {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.HumanNameAssemblyOrderCode.AsObject,
  }
}

export class HumanNameFathersFamily extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameFathersFamily.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameFathersFamily): HumanNameFathersFamily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameFathersFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameFathersFamily;
  static deserializeBinaryFromReader(message: HumanNameFathersFamily, reader: jspb.BinaryReader): HumanNameFathersFamily;
}

export namespace HumanNameFathersFamily {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNameMothersFamily extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameMothersFamily.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameMothersFamily): HumanNameMothersFamily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameMothersFamily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameMothersFamily;
  static deserializeBinaryFromReader(message: HumanNameMothersFamily, reader: jspb.BinaryReader): HumanNameMothersFamily;
}

export namespace HumanNameMothersFamily {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNameOwnName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameOwnName.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameOwnName): HumanNameOwnName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameOwnName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameOwnName;
  static deserializeBinaryFromReader(message: HumanNameOwnName, reader: jspb.BinaryReader): HumanNameOwnName;
}

export namespace HumanNameOwnName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNameOwnPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameOwnPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameOwnPrefix): HumanNameOwnPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameOwnPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameOwnPrefix;
  static deserializeBinaryFromReader(message: HumanNameOwnPrefix, reader: jspb.BinaryReader): HumanNameOwnPrefix;
}

export namespace HumanNameOwnPrefix {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNamePartnerName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNamePartnerName.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNamePartnerName): HumanNamePartnerName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNamePartnerName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNamePartnerName;
  static deserializeBinaryFromReader(message: HumanNamePartnerName, reader: jspb.BinaryReader): HumanNamePartnerName;
}

export namespace HumanNamePartnerName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class HumanNamePartnerPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNamePartnerPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNamePartnerPrefix): HumanNamePartnerPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNamePartnerPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNamePartnerPrefix;
  static deserializeBinaryFromReader(message: HumanNamePartnerPrefix, reader: jspb.BinaryReader): HumanNamePartnerPrefix;
}

export namespace HumanNamePartnerPrefix {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class IdentifierValidDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifierValidDate.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifierValidDate): IdentifierValidDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentifierValidDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifierValidDate;
  static deserializeBinaryFromReader(message: IdentifierValidDate, reader: jspb.BinaryReader): IdentifierValidDate;
}

export namespace IdentifierValidDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
  }
}

export class ImplementationGuidePage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplementationGuidePage.AsObject;
  static toObject(includeInstance: boolean, msg: ImplementationGuidePage): ImplementationGuidePage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplementationGuidePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplementationGuidePage;
  static deserializeBinaryFromReader(message: ImplementationGuidePage, reader: jspb.BinaryReader): ImplementationGuidePage;
}

export namespace ImplementationGuidePage {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class AddressADUse extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.PostalAddressUseTypeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.PostalAddressUseTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADUse.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADUse): AddressADUse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADUse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADUse;
  static deserializeBinaryFromReader(message: AddressADUse, reader: jspb.BinaryReader): AddressADUse;
}

export namespace AddressADUse {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.PostalAddressUseTypeCode.AsObject,
  }
}

export class AddressADXPAdditionalLocator extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPAdditionalLocator.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPAdditionalLocator): AddressADXPAdditionalLocator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPAdditionalLocator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPAdditionalLocator;
  static deserializeBinaryFromReader(message: AddressADXPAdditionalLocator, reader: jspb.BinaryReader): AddressADXPAdditionalLocator;
}

export namespace AddressADXPAdditionalLocator {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPBuildingNumberSuffix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPBuildingNumberSuffix.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPBuildingNumberSuffix): AddressADXPBuildingNumberSuffix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPBuildingNumberSuffix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPBuildingNumberSuffix;
  static deserializeBinaryFromReader(message: AddressADXPBuildingNumberSuffix, reader: jspb.BinaryReader): AddressADXPBuildingNumberSuffix;
}

export namespace AddressADXPBuildingNumberSuffix {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPCareOf extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPCareOf.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPCareOf): AddressADXPCareOf.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPCareOf, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPCareOf;
  static deserializeBinaryFromReader(message: AddressADXPCareOf, reader: jspb.BinaryReader): AddressADXPCareOf;
}

export namespace AddressADXPCareOf {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPCensusTract extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPCensusTract.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPCensusTract): AddressADXPCensusTract.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPCensusTract, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPCensusTract;
  static deserializeBinaryFromReader(message: AddressADXPCensusTract, reader: jspb.BinaryReader): AddressADXPCensusTract;
}

export namespace AddressADXPCensusTract {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDelimiter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDelimiter.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDelimiter): AddressADXPDelimiter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDelimiter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDelimiter;
  static deserializeBinaryFromReader(message: AddressADXPDelimiter, reader: jspb.BinaryReader): AddressADXPDelimiter;
}

export namespace AddressADXPDelimiter {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryAddressLine extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryAddressLine.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryAddressLine): AddressADXPDeliveryAddressLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryAddressLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryAddressLine;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryAddressLine, reader: jspb.BinaryReader): AddressADXPDeliveryAddressLine;
}

export namespace AddressADXPDeliveryAddressLine {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationArea extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationArea.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationArea): AddressADXPDeliveryInstallationArea.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationArea, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationArea;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationArea, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationArea;
}

export namespace AddressADXPDeliveryInstallationArea {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationQualifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationQualifier.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationQualifier): AddressADXPDeliveryInstallationQualifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationQualifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationQualifier;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationQualifier, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationQualifier;
}

export namespace AddressADXPDeliveryInstallationQualifier {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryInstallationType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryInstallationType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryInstallationType): AddressADXPDeliveryInstallationType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryInstallationType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryInstallationType;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryInstallationType, reader: jspb.BinaryReader): AddressADXPDeliveryInstallationType;
}

export namespace AddressADXPDeliveryInstallationType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryMode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryMode.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryMode): AddressADXPDeliveryMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryMode;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryMode, reader: jspb.BinaryReader): AddressADXPDeliveryMode;
}

export namespace AddressADXPDeliveryMode {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDeliveryModeIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDeliveryModeIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDeliveryModeIdentifier): AddressADXPDeliveryModeIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDeliveryModeIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDeliveryModeIdentifier;
  static deserializeBinaryFromReader(message: AddressADXPDeliveryModeIdentifier, reader: jspb.BinaryReader): AddressADXPDeliveryModeIdentifier;
}

export namespace AddressADXPDeliveryModeIdentifier {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPDirection extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPDirection.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPDirection): AddressADXPDirection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPDirection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPDirection;
  static deserializeBinaryFromReader(message: AddressADXPDirection, reader: jspb.BinaryReader): AddressADXPDirection;
}

export namespace AddressADXPDirection {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPHouseNumber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPHouseNumber.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPHouseNumber): AddressADXPHouseNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPHouseNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPHouseNumber;
  static deserializeBinaryFromReader(message: AddressADXPHouseNumber, reader: jspb.BinaryReader): AddressADXPHouseNumber;
}

export namespace AddressADXPHouseNumber {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPHouseNumberNumeric extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPHouseNumberNumeric.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPHouseNumberNumeric): AddressADXPHouseNumberNumeric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPHouseNumberNumeric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPHouseNumberNumeric;
  static deserializeBinaryFromReader(message: AddressADXPHouseNumberNumeric, reader: jspb.BinaryReader): AddressADXPHouseNumberNumeric;
}

export namespace AddressADXPHouseNumberNumeric {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPPostBox extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPPostBox.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPPostBox): AddressADXPPostBox.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPPostBox, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPPostBox;
  static deserializeBinaryFromReader(message: AddressADXPPostBox, reader: jspb.BinaryReader): AddressADXPPostBox;
}

export namespace AddressADXPPostBox {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPPrecinct extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPPrecinct.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPPrecinct): AddressADXPPrecinct.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPPrecinct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPPrecinct;
  static deserializeBinaryFromReader(message: AddressADXPPrecinct, reader: jspb.BinaryReader): AddressADXPPrecinct;
}

export namespace AddressADXPPrecinct {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetAddressLine extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetAddressLine.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetAddressLine): AddressADXPStreetAddressLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetAddressLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetAddressLine;
  static deserializeBinaryFromReader(message: AddressADXPStreetAddressLine, reader: jspb.BinaryReader): AddressADXPStreetAddressLine;
}

export namespace AddressADXPStreetAddressLine {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetName.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetName): AddressADXPStreetName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetName;
  static deserializeBinaryFromReader(message: AddressADXPStreetName, reader: jspb.BinaryReader): AddressADXPStreetName;
}

export namespace AddressADXPStreetName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetNameBase extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetNameBase.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetNameBase): AddressADXPStreetNameBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetNameBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetNameBase;
  static deserializeBinaryFromReader(message: AddressADXPStreetNameBase, reader: jspb.BinaryReader): AddressADXPStreetNameBase;
}

export namespace AddressADXPStreetNameBase {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPStreetNameType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPStreetNameType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPStreetNameType): AddressADXPStreetNameType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPStreetNameType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPStreetNameType;
  static deserializeBinaryFromReader(message: AddressADXPStreetNameType, reader: jspb.BinaryReader): AddressADXPStreetNameType;
}

export namespace AddressADXPStreetNameType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPUnitID extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPUnitID.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPUnitID): AddressADXPUnitID.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPUnitID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPUnitID;
  static deserializeBinaryFromReader(message: AddressADXPUnitID, reader: jspb.BinaryReader): AddressADXPUnitID;
}

export namespace AddressADXPUnitID {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AddressADXPUnitType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressADXPUnitType.AsObject;
  static toObject(includeInstance: boolean, msg: AddressADXPUnitType): AddressADXPUnitType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddressADXPUnitType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressADXPUnitType;
  static deserializeBinaryFromReader(message: AddressADXPUnitType, reader: jspb.BinaryReader): AddressADXPUnitType;
}

export namespace AddressADXPUnitType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class CodingCOValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodingCOValue.AsObject;
  static toObject(includeInstance: boolean, msg: CodingCOValue): CodingCOValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodingCOValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodingCOValue;
  static deserializeBinaryFromReader(message: CodingCOValue, reader: jspb.BinaryReader): CodingCOValue;
}

export namespace CodingCOValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class HumanNameENQualifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.EntityNamePartQualifierCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.EntityNamePartQualifierCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameENQualifier.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameENQualifier): HumanNameENQualifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameENQualifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameENQualifier;
  static deserializeBinaryFromReader(message: HumanNameENQualifier, reader: jspb.BinaryReader): HumanNameENQualifier;
}

export namespace HumanNameENQualifier {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.EntityNamePartQualifierCode.AsObject,
  }
}

export class HumanNameENRepresentation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.NameRepresentationUseCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.NameRepresentationUseCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameENRepresentation.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameENRepresentation): HumanNameENRepresentation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameENRepresentation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameENRepresentation;
  static deserializeBinaryFromReader(message: HumanNameENRepresentation, reader: jspb.BinaryReader): HumanNameENRepresentation;
}

export namespace HumanNameENRepresentation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.NameRepresentationUseCode.AsObject,
  }
}

export class AnyNullFlavor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.NullFlavorCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.NullFlavorCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyNullFlavor.AsObject;
  static toObject(includeInstance: boolean, msg: AnyNullFlavor): AnyNullFlavor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyNullFlavor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyNullFlavor;
  static deserializeBinaryFromReader(message: AnyNullFlavor, reader: jspb.BinaryReader): AnyNullFlavor;
}

export namespace AnyNullFlavor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.NullFlavorCode.AsObject,
  }
}

export class AnyPreferred extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyPreferred.AsObject;
  static toObject(includeInstance: boolean, msg: AnyPreferred): AnyPreferred.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyPreferred, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyPreferred;
  static deserializeBinaryFromReader(message: AnyPreferred, reader: jspb.BinaryReader): AnyPreferred;
}

export namespace AnyPreferred {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class StringSCCoding extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringSCCoding.AsObject;
  static toObject(includeInstance: boolean, msg: StringSCCoding): StringSCCoding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringSCCoding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringSCCoding;
  static deserializeBinaryFromReader(message: StringSCCoding, reader: jspb.BinaryReader): StringSCCoding;
}

export namespace StringSCCoding {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class ContactPointTELAddress extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactPointTELAddress.AsObject;
  static toObject(includeInstance: boolean, msg: ContactPointTELAddress): ContactPointTELAddress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactPointTELAddress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactPointTELAddress;
  static deserializeBinaryFromReader(message: ContactPointTELAddress, reader: jspb.BinaryReader): ContactPointTELAddress;
}

export namespace ContactPointTELAddress {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class QuantityUncertainty extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityUncertainty.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityUncertainty): QuantityUncertainty.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityUncertainty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityUncertainty;
  static deserializeBinaryFromReader(message: QuantityUncertainty, reader: jspb.BinaryReader): QuantityUncertainty;
}

export namespace QuantityUncertainty {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class QuantityUncertaintyType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ProbabilityDistributionTypeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ProbabilityDistributionTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuantityUncertaintyType.AsObject;
  static toObject(includeInstance: boolean, msg: QuantityUncertaintyType): QuantityUncertaintyType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuantityUncertaintyType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuantityUncertaintyType;
  static deserializeBinaryFromReader(message: QuantityUncertaintyType, reader: jspb.BinaryReader): QuantityUncertaintyType;
}

export namespace QuantityUncertaintyType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ProbabilityDistributionTypeCode.AsObject,
  }
}

export class AnyVerification extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnyVerification.AsObject;
  static toObject(includeInstance: boolean, msg: AnyVerification): AnyVerification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnyVerification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnyVerification;
  static deserializeBinaryFromReader(message: AnyVerification, reader: jspb.BinaryReader): AnyVerification;
}

export namespace AnyVerification {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class LocationAlias extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAlias.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAlias): LocationAlias.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAlias, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAlias;
  static deserializeBinaryFromReader(message: LocationAlias, reader: jspb.BinaryReader): LocationAlias;
}

export namespace LocationAlias {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class BundleLocationDistance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDistance(): boolean;
  clearValueDistance(): void;
  getValueDistance(): proto_stu3_datatypes_pb.Distance | undefined;
  setValueDistance(value?: proto_stu3_datatypes_pb.Distance): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleLocationDistance.AsObject;
  static toObject(includeInstance: boolean, msg: BundleLocationDistance): BundleLocationDistance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleLocationDistance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleLocationDistance;
  static deserializeBinaryFromReader(message: BundleLocationDistance, reader: jspb.BinaryReader): BundleLocationDistance;
}

export namespace BundleLocationDistance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDistance?: proto_stu3_datatypes_pb.Distance.AsObject,
  }
}

export class DataElementMapSourcePublisher extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementMapSourcePublisher.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementMapSourcePublisher): DataElementMapSourcePublisher.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementMapSourcePublisher, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementMapSourcePublisher;
  static deserializeBinaryFromReader(message: DataElementMapSourcePublisher, reader: jspb.BinaryReader): DataElementMapSourcePublisher;
}

export namespace DataElementMapSourcePublisher {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class BundleMatchGrade extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.MatchGradeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.MatchGradeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleMatchGrade.AsObject;
  static toObject(includeInstance: boolean, msg: BundleMatchGrade): BundleMatchGrade.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleMatchGrade, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleMatchGrade;
  static deserializeBinaryFromReader(message: BundleMatchGrade, reader: jspb.BinaryReader): BundleMatchGrade;
}

export namespace BundleMatchGrade {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.MatchGradeCode.AsObject,
  }
}

export class MaxDecimalPlaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxDecimalPlaces.AsObject;
  static toObject(includeInstance: boolean, msg: MaxDecimalPlaces): MaxDecimalPlaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxDecimalPlaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxDecimalPlaces;
  static deserializeBinaryFromReader(message: MaxDecimalPlaces, reader: jspb.BinaryReader): MaxDecimalPlaces;
}

export namespace MaxDecimalPlaces {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class MaxSize extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxSize.AsObject;
  static toObject(includeInstance: boolean, msg: MaxSize): MaxSize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxSize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxSize;
  static deserializeBinaryFromReader(message: MaxSize, reader: jspb.BinaryReader): MaxSize;
}

export namespace MaxSize {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class QuestionnaireMaxValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QuestionnaireMaxValue.Value | undefined;
  setValue(value?: QuestionnaireMaxValue.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMaxValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMaxValue): QuestionnaireMaxValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMaxValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMaxValue;
  static deserializeBinaryFromReader(message: QuestionnaireMaxValue, reader: jspb.BinaryReader): QuestionnaireMaxValue;
}

export namespace QuestionnaireMaxValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: QuestionnaireMaxValue.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

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
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      instant?: proto_stu3_datatypes_pb.Instant.AsObject,
      decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      TIME = 3,
      INSTANT = 4,
      DECIMAL = 5,
      INTEGER = 6,
    }
  }
}

export class MedicationUsualRoute extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationUsualRoute.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationUsualRoute): MedicationUsualRoute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationUsualRoute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationUsualRoute;
  static deserializeBinaryFromReader(message: MedicationUsualRoute, reader: jspb.BinaryReader): MedicationUsualRoute;
}

export namespace MedicationUsualRoute {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class MedicationDispenseValidityPeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationDispenseValidityPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationDispenseValidityPeriod): MedicationDispenseValidityPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationDispenseValidityPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationDispenseValidityPeriod;
  static deserializeBinaryFromReader(message: MedicationDispenseValidityPeriod, reader: jspb.BinaryReader): MedicationDispenseValidityPeriod;
}

export namespace MedicationDispenseValidityPeriod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valuePeriod?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class MedicationStatementPrescriber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatementPrescriber.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatementPrescriber): MedicationStatementPrescriber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatementPrescriber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatementPrescriber;
  static deserializeBinaryFromReader(message: MedicationStatementPrescriber, reader: jspb.BinaryReader): MedicationStatementPrescriber;
}

export namespace MedicationStatementPrescriber {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class MessageHeaderMessageheaderResponseRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.MessageHeaderResponseRequestCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.MessageHeaderResponseRequestCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeaderMessageheaderResponseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeaderMessageheaderResponseRequest): MessageHeaderMessageheaderResponseRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageHeaderMessageheaderResponseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeaderMessageheaderResponseRequest;
  static deserializeBinaryFromReader(message: MessageHeaderMessageheaderResponseRequest, reader: jspb.BinaryReader): MessageHeaderMessageheaderResponseRequest;
}

export namespace MessageHeaderMessageheaderResponseRequest {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.MessageHeaderResponseRequestCode.AsObject,
  }
}

export class MimeType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_datatypes_pb.MimeTypeCode | undefined;
  setValueCode(value?: proto_stu3_datatypes_pb.MimeTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MimeType.AsObject;
  static toObject(includeInstance: boolean, msg: MimeType): MimeType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MimeType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MimeType;
  static deserializeBinaryFromReader(message: MimeType, reader: jspb.BinaryReader): MimeType;
}

export namespace MimeType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_datatypes_pb.MimeTypeCode.AsObject,
  }
}

export class MinLength extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinLength.AsObject;
  static toObject(includeInstance: boolean, msg: MinLength): MinLength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinLength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinLength;
  static deserializeBinaryFromReader(message: MinLength, reader: jspb.BinaryReader): MinLength;
}

export namespace MinLength {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireMinValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QuestionnaireMinValue.Value | undefined;
  setValue(value?: QuestionnaireMinValue.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMinValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMinValue): QuestionnaireMinValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMinValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMinValue;
  static deserializeBinaryFromReader(message: QuestionnaireMinValue, reader: jspb.BinaryReader): QuestionnaireMinValue;
}

export namespace QuestionnaireMinValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: QuestionnaireMinValue.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.Date | undefined;
    setDate(value?: proto_stu3_datatypes_pb.Date): void;

    hasDateTime(): boolean;
    clearDateTime(): void;
    getDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasTime(): boolean;
    clearTime(): void;
    getTime(): proto_stu3_datatypes_pb.Time | undefined;
    setTime(value?: proto_stu3_datatypes_pb.Time): void;

    hasInstant(): boolean;
    clearInstant(): void;
    getInstant(): proto_stu3_datatypes_pb.Instant | undefined;
    setInstant(value?: proto_stu3_datatypes_pb.Instant): void;

    hasDecimal(): boolean;
    clearDecimal(): void;
    getDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
    setDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

    hasInteger(): boolean;
    clearInteger(): void;
    getInteger(): proto_stu3_datatypes_pb.Integer | undefined;
    setInteger(value?: proto_stu3_datatypes_pb.Integer): void;

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
      date?: proto_stu3_datatypes_pb.Date.AsObject,
      dateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
      time?: proto_stu3_datatypes_pb.Time.AsObject,
      instant?: proto_stu3_datatypes_pb.Instant.AsObject,
      decimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
      integer?: proto_stu3_datatypes_pb.Integer.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      DATE = 1,
      DATE_TIME = 2,
      TIME = 3,
      INSTANT = 4,
      DECIMAL = 5,
      INTEGER = 6,
    }
  }
}

export class ObservationBodyPosition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationBodyPosition.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationBodyPosition): ObservationBodyPosition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationBodyPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationBodyPosition;
  static deserializeBinaryFromReader(message: ObservationBodyPosition, reader: jspb.BinaryReader): ObservationBodyPosition;
}

export namespace ObservationBodyPosition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDelta extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDelta.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDelta): ObservationDelta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDelta;
  static deserializeBinaryFromReader(message: ObservationDelta, reader: jspb.BinaryReader): ObservationDelta;
}

export namespace ObservationDelta {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationEventTiming extends jspb.Message {
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
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasOffset(): boolean;
  clearOffset(): void;
  getOffset(): proto_stu3_datatypes_pb.Quantity | undefined;
  setOffset(value?: proto_stu3_datatypes_pb.Quantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationEventTiming.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationEventTiming): ObservationEventTiming.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationEventTiming, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationEventTiming;
  static deserializeBinaryFromReader(message: ObservationEventTiming, reader: jspb.BinaryReader): ObservationEventTiming;
}

export namespace ObservationEventTiming {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    offset?: proto_stu3_datatypes_pb.Quantity.AsObject,
  }
}

export class ObservationFocalSubject extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationFocalSubject.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationFocalSubject): ObservationFocalSubject.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationFocalSubject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationFocalSubject;
  static deserializeBinaryFromReader(message: ObservationFocalSubject, reader: jspb.BinaryReader): ObservationFocalSubject;
}

export namespace ObservationFocalSubject {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationAlleleName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAlleleName.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAlleleName): ObservationAlleleName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAlleleName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAlleleName;
  static deserializeBinaryFromReader(message: ObservationAlleleName, reader: jspb.BinaryReader): ObservationAlleleName;
}

export namespace ObservationAlleleName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationAllelicFrequency extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAllelicFrequency.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAllelicFrequency): ObservationAllelicFrequency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAllelicFrequency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAllelicFrequency;
  static deserializeBinaryFromReader(message: ObservationAllelicFrequency, reader: jspb.BinaryReader): ObservationAllelicFrequency;
}

export namespace ObservationAllelicFrequency {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class ObservationAllelicState extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAllelicState.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAllelicState): ObservationAllelicState.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAllelicState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAllelicState;
  static deserializeBinaryFromReader(message: ObservationAllelicState, reader: jspb.BinaryReader): ObservationAllelicState;
}

export namespace ObservationAllelicState {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationAminoAcidChangeName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAminoAcidChangeName.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAminoAcidChangeName): ObservationAminoAcidChangeName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAminoAcidChangeName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAminoAcidChangeName;
  static deserializeBinaryFromReader(message: ObservationAminoAcidChangeName, reader: jspb.BinaryReader): ObservationAminoAcidChangeName;
}

export namespace ObservationAminoAcidChangeName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationAminoAcidChangeType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationAminoAcidChangeType.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationAminoAcidChangeType): ObservationAminoAcidChangeType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationAminoAcidChangeType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationAminoAcidChangeType;
  static deserializeBinaryFromReader(message: ObservationAminoAcidChangeType, reader: jspb.BinaryReader): ObservationAminoAcidChangeType;
}

export namespace ObservationAminoAcidChangeType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationCopyNumberEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationCopyNumberEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationCopyNumberEvent): ObservationCopyNumberEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationCopyNumberEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationCopyNumberEvent;
  static deserializeBinaryFromReader(message: ObservationCopyNumberEvent, reader: jspb.BinaryReader): ObservationCopyNumberEvent;
}

export namespace ObservationCopyNumberEvent {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDNARegionName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDNARegionName.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDNARegionName): ObservationDNARegionName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDNARegionName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDNARegionName;
  static deserializeBinaryFromReader(message: ObservationDNARegionName, reader: jspb.BinaryReader): ObservationDNARegionName;
}

export namespace ObservationDNARegionName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ObservationDNASequenceVariantName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDNASequenceVariantName.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDNASequenceVariantName): ObservationDNASequenceVariantName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDNASequenceVariantName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDNASequenceVariantName;
  static deserializeBinaryFromReader(message: ObservationDNASequenceVariantName, reader: jspb.BinaryReader): ObservationDNASequenceVariantName;
}

export namespace ObservationDNASequenceVariantName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDNASequenceVariantType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDNASequenceVariantType.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDNASequenceVariantType): ObservationDNASequenceVariantType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDNASequenceVariantType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDNASequenceVariantType;
  static deserializeBinaryFromReader(message: ObservationDNASequenceVariantType, reader: jspb.BinaryReader): ObservationDNASequenceVariantType;
}

export namespace ObservationDNASequenceVariantType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationDNAVariantId extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationDNAVariantId.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationDNAVariantId): ObservationDNAVariantId.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationDNAVariantId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationDNAVariantId;
  static deserializeBinaryFromReader(message: ObservationDNAVariantId, reader: jspb.BinaryReader): ObservationDNAVariantId;
}

export namespace ObservationDNAVariantId {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationGene extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGene.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGene): ObservationGene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGene;
  static deserializeBinaryFromReader(message: ObservationGene, reader: jspb.BinaryReader): ObservationGene;
}

export namespace ObservationGene {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationGenomicSourceClass extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationGenomicSourceClass.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationGenomicSourceClass): ObservationGenomicSourceClass.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationGenomicSourceClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationGenomicSourceClass;
  static deserializeBinaryFromReader(message: ObservationGenomicSourceClass, reader: jspb.BinaryReader): ObservationGenomicSourceClass;
}

export namespace ObservationGenomicSourceClass {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ObservationInterpretation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationInterpretation.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationInterpretation): ObservationInterpretation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationInterpretation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationInterpretation;
  static deserializeBinaryFromReader(message: ObservationInterpretation, reader: jspb.BinaryReader): ObservationInterpretation;
}

export namespace ObservationInterpretation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationPhaseSet extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationPhaseSet.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationPhaseSet): ObservationPhaseSet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationPhaseSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationPhaseSet;
  static deserializeBinaryFromReader(message: ObservationPhaseSet, reader: jspb.BinaryReader): ObservationPhaseSet;
}

export namespace ObservationPhaseSet {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ObservationSequence extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationSequence.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationSequence): ObservationSequence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationSequence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationSequence;
  static deserializeBinaryFromReader(message: ObservationSequence, reader: jspb.BinaryReader): ObservationSequence;
}

export namespace ObservationSequence {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ObservationTimeOffset extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationTimeOffset.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationTimeOffset): ObservationTimeOffset.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationTimeOffset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationTimeOffset;
  static deserializeBinaryFromReader(message: ObservationTimeOffset, reader: jspb.BinaryReader): ObservationTimeOffset;
}

export namespace ObservationTimeOffset {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class AllergyIntoleranceAdministration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceAdministration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceAdministration): AllergyIntoleranceAdministration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceAdministration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceAdministration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceAdministration, reader: jspb.BinaryReader): AllergyIntoleranceAdministration;
}

export namespace AllergyIntoleranceAdministration {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class AllergyIntoleranceCareplan extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCareplan.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCareplan): AllergyIntoleranceCareplan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCareplan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCareplan;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCareplan, reader: jspb.BinaryReader): AllergyIntoleranceCareplan;
}

export namespace AllergyIntoleranceCareplan {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class AllergyIntoleranceExposureDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDate.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDate): AllergyIntoleranceExposureDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDate;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDate, reader: jspb.BinaryReader): AllergyIntoleranceExposureDate;
}

export namespace AllergyIntoleranceExposureDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
  }
}

export class AllergyIntoleranceExposureDescription extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDescription.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDescription): AllergyIntoleranceExposureDescription.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDescription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDescription;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDescription, reader: jspb.BinaryReader): AllergyIntoleranceExposureDescription;
}

export namespace AllergyIntoleranceExposureDescription {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AllergyIntoleranceExposureDuration extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_stu3_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_stu3_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceExposureDuration.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceExposureDuration): AllergyIntoleranceExposureDuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceExposureDuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceExposureDuration;
  static deserializeBinaryFromReader(message: AllergyIntoleranceExposureDuration, reader: jspb.BinaryReader): AllergyIntoleranceExposureDuration;
}

export namespace AllergyIntoleranceExposureDuration {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDuration?: proto_stu3_datatypes_pb.Duration.AsObject,
  }
}

export class AllergyIntoleranceLocation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceLocation.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceLocation): AllergyIntoleranceLocation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceLocation;
  static deserializeBinaryFromReader(message: AllergyIntoleranceLocation, reader: jspb.BinaryReader): AllergyIntoleranceLocation;
}

export namespace AllergyIntoleranceLocation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class AllergyIntoleranceManagement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceManagement.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceManagement): AllergyIntoleranceManagement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceManagement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceManagement;
  static deserializeBinaryFromReader(message: AllergyIntoleranceManagement, reader: jspb.BinaryReader): AllergyIntoleranceManagement;
}

export namespace AllergyIntoleranceManagement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class AllergyIntoleranceTest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): AllergyIntoleranceTest.Value | undefined;
  setValue(value?: AllergyIntoleranceTest.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceTest.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceTest): AllergyIntoleranceTest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceTest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceTest;
  static deserializeBinaryFromReader(message: AllergyIntoleranceTest, reader: jspb.BinaryReader): AllergyIntoleranceTest;
}

export namespace AllergyIntoleranceTest {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: AllergyIntoleranceTest.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class OperationOutcomeAuthority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeAuthority.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeAuthority): OperationOutcomeAuthority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeAuthority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeAuthority;
  static deserializeBinaryFromReader(message: OperationOutcomeAuthority, reader: jspb.BinaryReader): OperationOutcomeAuthority;
}

export namespace OperationOutcomeAuthority {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class OperationOutcomeDetectedIssue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeDetectedIssue.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeDetectedIssue): OperationOutcomeDetectedIssue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeDetectedIssue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeDetectedIssue;
  static deserializeBinaryFromReader(message: OperationOutcomeDetectedIssue, reader: jspb.BinaryReader): OperationOutcomeDetectedIssue;
}

export namespace OperationOutcomeDetectedIssue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class OperationOutcomeIssueSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeIssueSource.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeIssueSource): OperationOutcomeIssueSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeIssueSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeIssueSource;
  static deserializeBinaryFromReader(message: OperationOutcomeIssueSource, reader: jspb.BinaryReader): OperationOutcomeIssueSource;
}

export namespace OperationOutcomeIssueSource {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class OrganizationAlias extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationAlias.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationAlias): OrganizationAlias.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationAlias, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationAlias;
  static deserializeBinaryFromReader(message: OrganizationAlias, reader: jspb.BinaryReader): OrganizationAlias;
}

export namespace OrganizationAlias {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class OrganizationPeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPeriod): OrganizationPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPeriod;
  static deserializeBinaryFromReader(message: OrganizationPeriod, reader: jspb.BinaryReader): OrganizationPeriod;
}

export namespace OrganizationPeriod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valuePeriod?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class OrganizationPreferredContact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationPreferredContact.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationPreferredContact): OrganizationPreferredContact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationPreferredContact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationPreferredContact;
  static deserializeBinaryFromReader(message: OrganizationPreferredContact, reader: jspb.BinaryReader): OrganizationPreferredContact;
}

export namespace OrganizationPreferredContact {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class PatientAdoptionInfo extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientAdoptionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PatientAdoptionInfo): PatientAdoptionInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientAdoptionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientAdoptionInfo;
  static deserializeBinaryFromReader(message: PatientAdoptionInfo, reader: jspb.BinaryReader): PatientAdoptionInfo;
}

export namespace PatientAdoptionInfo {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientBirthTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientBirthTime.AsObject;
  static toObject(includeInstance: boolean, msg: PatientBirthTime): PatientBirthTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientBirthTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientBirthTime;
  static deserializeBinaryFromReader(message: PatientBirthTime, reader: jspb.BinaryReader): PatientBirthTime;
}

export namespace PatientBirthTime {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
  }
}

export class PatientCadavericDonor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCadavericDonor.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCadavericDonor): PatientCadavericDonor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCadavericDonor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCadavericDonor;
  static deserializeBinaryFromReader(message: PatientCadavericDonor, reader: jspb.BinaryReader): PatientCadavericDonor;
}

export namespace PatientCadavericDonor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class PatientCitizenship extends jspb.Message {
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
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCitizenship.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCitizenship): PatientCitizenship.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCitizenship, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCitizenship;
  static deserializeBinaryFromReader(message: PatientCitizenship, reader: jspb.BinaryReader): PatientCitizenship;
}

export namespace PatientCitizenship {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class PatientClinicalTrial extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasNct(): boolean;
  clearNct(): void;
  getNct(): proto_stu3_datatypes_pb.String | undefined;
  setNct(value?: proto_stu3_datatypes_pb.String): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  hasReason(): boolean;
  clearReason(): void;
  getReason(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setReason(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientClinicalTrial.AsObject;
  static toObject(includeInstance: boolean, msg: PatientClinicalTrial): PatientClinicalTrial.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientClinicalTrial, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientClinicalTrial;
  static deserializeBinaryFromReader(message: PatientClinicalTrial, reader: jspb.BinaryReader): PatientClinicalTrial;
}

export namespace PatientClinicalTrial {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    nct?: proto_stu3_datatypes_pb.String.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
    reason?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientCongregation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientCongregation.AsObject;
  static toObject(includeInstance: boolean, msg: PatientCongregation): PatientCongregation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientCongregation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientCongregation;
  static deserializeBinaryFromReader(message: PatientCongregation, reader: jspb.BinaryReader): PatientCongregation;
}

export namespace PatientCongregation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class PatientDisability extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientDisability.AsObject;
  static toObject(includeInstance: boolean, msg: PatientDisability): PatientDisability.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientDisability, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientDisability;
  static deserializeBinaryFromReader(message: PatientDisability, reader: jspb.BinaryReader): PatientDisability;
}

export namespace PatientDisability {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientImportance extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientImportance.AsObject;
  static toObject(includeInstance: boolean, msg: PatientImportance): PatientImportance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientImportance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientImportance;
  static deserializeBinaryFromReader(message: PatientImportance, reader: jspb.BinaryReader): PatientImportance;
}

export namespace PatientImportance {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PatientInterpreterRequired extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientInterpreterRequired.AsObject;
  static toObject(includeInstance: boolean, msg: PatientInterpreterRequired): PatientInterpreterRequired.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientInterpreterRequired, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientInterpreterRequired;
  static deserializeBinaryFromReader(message: PatientInterpreterRequired, reader: jspb.BinaryReader): PatientInterpreterRequired;
}

export namespace PatientInterpreterRequired {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class PatientMothersMaidenName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientMothersMaidenName.AsObject;
  static toObject(includeInstance: boolean, msg: PatientMothersMaidenName): PatientMothersMaidenName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientMothersMaidenName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientMothersMaidenName;
  static deserializeBinaryFromReader(message: PatientMothersMaidenName, reader: jspb.BinaryReader): PatientMothersMaidenName;
}

export namespace PatientMothersMaidenName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class PatientNationality extends jspb.Message {
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
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientNationality.AsObject;
  static toObject(includeInstance: boolean, msg: PatientNationality): PatientNationality.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientNationality, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientNationality;
  static deserializeBinaryFromReader(message: PatientNationality, reader: jspb.BinaryReader): PatientNationality;
}

export namespace PatientNationality {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    period?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class PatientReligion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatientReligion.AsObject;
  static toObject(includeInstance: boolean, msg: PatientReligion): PatientReligion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatientReligion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatientReligion;
  static deserializeBinaryFromReader(message: PatientReligion, reader: jspb.BinaryReader): PatientReligion;
}

export namespace PatientReligion {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class DoseType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DoseType.AsObject;
  static toObject(includeInstance: boolean, msg: DoseType): DoseType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DoseType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DoseType;
  static deserializeBinaryFromReader(message: DoseType, reader: jspb.BinaryReader): DoseType;
}

export namespace DoseType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class InfuseOver extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_stu3_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_stu3_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfuseOver.AsObject;
  static toObject(includeInstance: boolean, msg: InfuseOver): InfuseOver.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfuseOver, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfuseOver;
  static deserializeBinaryFromReader(message: InfuseOver, reader: jspb.BinaryReader): InfuseOver;
}

export namespace InfuseOver {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDuration?: proto_stu3_datatypes_pb.Duration.AsObject,
  }
}

export class MaxDeliveryRate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueRatio(): boolean;
  clearValueRatio(): void;
  getValueRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
  setValueRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxDeliveryRate.AsObject;
  static toObject(includeInstance: boolean, msg: MaxDeliveryRate): MaxDeliveryRate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxDeliveryRate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxDeliveryRate;
  static deserializeBinaryFromReader(message: MaxDeliveryRate, reader: jspb.BinaryReader): MaxDeliveryRate;
}

export namespace MaxDeliveryRate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueRatio?: proto_stu3_datatypes_pb.Ratio.AsObject,
  }
}

export class MaxDeliveryVolume extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueQuantity(): boolean;
  clearValueQuantity(): void;
  getValueQuantity(): proto_stu3_datatypes_pb.Quantity | undefined;
  setValueQuantity(value?: proto_stu3_datatypes_pb.Quantity): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxDeliveryVolume.AsObject;
  static toObject(includeInstance: boolean, msg: MaxDeliveryVolume): MaxDeliveryVolume.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxDeliveryVolume, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxDeliveryVolume;
  static deserializeBinaryFromReader(message: MaxDeliveryVolume, reader: jspb.BinaryReader): MaxDeliveryVolume;
}

export namespace MaxDeliveryVolume {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueQuantity?: proto_stu3_datatypes_pb.Quantity.AsObject,
  }
}

export class MinDosePerPeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueRatio(): boolean;
  clearValueRatio(): void;
  getValueRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
  setValueRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MinDosePerPeriod.AsObject;
  static toObject(includeInstance: boolean, msg: MinDosePerPeriod): MinDosePerPeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MinDosePerPeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MinDosePerPeriod;
  static deserializeBinaryFromReader(message: MinDosePerPeriod, reader: jspb.BinaryReader): MinDosePerPeriod;
}

export namespace MinDosePerPeriod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueRatio?: proto_stu3_datatypes_pb.Ratio.AsObject,
  }
}

export class RateGoal extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueRatio(): boolean;
  clearValueRatio(): void;
  getValueRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
  setValueRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateGoal.AsObject;
  static toObject(includeInstance: boolean, msg: RateGoal): RateGoal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateGoal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateGoal;
  static deserializeBinaryFromReader(message: RateGoal, reader: jspb.BinaryReader): RateGoal;
}

export namespace RateGoal {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueRatio?: proto_stu3_datatypes_pb.Ratio.AsObject,
  }
}

export class RateIncrement extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueRatio(): boolean;
  clearValueRatio(): void;
  getValueRatio(): proto_stu3_datatypes_pb.Ratio | undefined;
  setValueRatio(value?: proto_stu3_datatypes_pb.Ratio): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateIncrement.AsObject;
  static toObject(includeInstance: boolean, msg: RateIncrement): RateIncrement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateIncrement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateIncrement;
  static deserializeBinaryFromReader(message: RateIncrement, reader: jspb.BinaryReader): RateIncrement;
}

export namespace RateIncrement {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueRatio?: proto_stu3_datatypes_pb.Ratio.AsObject,
  }
}

export class RateIncrementInterval extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDuration(): boolean;
  clearValueDuration(): void;
  getValueDuration(): proto_stu3_datatypes_pb.Duration | undefined;
  setValueDuration(value?: proto_stu3_datatypes_pb.Duration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateIncrementInterval.AsObject;
  static toObject(includeInstance: boolean, msg: RateIncrementInterval): RateIncrementInterval.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RateIncrementInterval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateIncrementInterval;
  static deserializeBinaryFromReader(message: RateIncrementInterval, reader: jspb.BinaryReader): RateIncrementInterval;
}

export namespace RateIncrementInterval {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDuration?: proto_stu3_datatypes_pb.Duration.AsObject,
  }
}

export class RefillsRemaining extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefillsRemaining.AsObject;
  static toObject(includeInstance: boolean, msg: RefillsRemaining): RefillsRemaining.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RefillsRemaining, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefillsRemaining;
  static deserializeBinaryFromReader(message: RefillsRemaining, reader: jspb.BinaryReader): RefillsRemaining;
}

export namespace RefillsRemaining {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class AnimalSpecies extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnimalSpecies.AsObject;
  static toObject(includeInstance: boolean, msg: AnimalSpecies): AnimalSpecies.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AnimalSpecies, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnimalSpecies;
  static deserializeBinaryFromReader(message: AnimalSpecies, reader: jspb.BinaryReader): AnimalSpecies;
}

export namespace AnimalSpecies {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PractitionerClassification extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerClassification.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerClassification): PractitionerClassification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerClassification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerClassification;
  static deserializeBinaryFromReader(message: PractitionerClassification, reader: jspb.BinaryReader): PractitionerClassification;
}

export namespace PractitionerClassification {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class PractitionerRolePrimaryInd extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerRolePrimaryInd.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerRolePrimaryInd): PractitionerRolePrimaryInd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerRolePrimaryInd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerRolePrimaryInd;
  static deserializeBinaryFromReader(message: PractitionerRolePrimaryInd, reader: jspb.BinaryReader): PractitionerRolePrimaryInd;
}

export namespace PractitionerRolePrimaryInd {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ProcedureApproachBodySite extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureApproachBodySite.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureApproachBodySite): ProcedureApproachBodySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureApproachBodySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureApproachBodySite;
  static deserializeBinaryFromReader(message: ProcedureApproachBodySite, reader: jspb.BinaryReader): ProcedureApproachBodySite;
}

export namespace ProcedureApproachBodySite {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ProcedureCausedBy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): ProcedureCausedBy.Value | undefined;
  setValue(value?: ProcedureCausedBy.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureCausedBy.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureCausedBy): ProcedureCausedBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureCausedBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureCausedBy;
  static deserializeBinaryFromReader(message: ProcedureCausedBy, reader: jspb.BinaryReader): ProcedureCausedBy;
}

export namespace ProcedureCausedBy {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: ProcedureCausedBy.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class ProcedureIncisionDateTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDateTime(): boolean;
  clearValueDateTime(): void;
  getValueDateTime(): proto_stu3_datatypes_pb.DateTime | undefined;
  setValueDateTime(value?: proto_stu3_datatypes_pb.DateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureIncisionDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureIncisionDateTime): ProcedureIncisionDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureIncisionDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureIncisionDateTime;
  static deserializeBinaryFromReader(message: ProcedureIncisionDateTime, reader: jspb.BinaryReader): ProcedureIncisionDateTime;
}

export namespace ProcedureIncisionDateTime {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDateTime?: proto_stu3_datatypes_pb.DateTime.AsObject,
  }
}

export class ProcedureMethod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureMethod.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureMethod): ProcedureMethod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureMethod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureMethod;
  static deserializeBinaryFromReader(message: ProcedureMethod, reader: jspb.BinaryReader): ProcedureMethod;
}

export namespace ProcedureMethod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureProgressStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureProgressStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureProgressStatus): ProcedureProgressStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureProgressStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureProgressStatus;
  static deserializeBinaryFromReader(message: ProcedureProgressStatus, reader: jspb.BinaryReader): ProcedureProgressStatus;
}

export namespace ProcedureProgressStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureSchedule extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueTiming(): boolean;
  clearValueTiming(): void;
  getValueTiming(): proto_stu3_datatypes_pb.Timing | undefined;
  setValueTiming(value?: proto_stu3_datatypes_pb.Timing): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureSchedule.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureSchedule): ProcedureSchedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureSchedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureSchedule;
  static deserializeBinaryFromReader(message: ProcedureSchedule, reader: jspb.BinaryReader): ProcedureSchedule;
}

export namespace ProcedureSchedule {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueTiming?: proto_stu3_datatypes_pb.Timing.AsObject,
  }
}

export class ProcedureTargetBodySite extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureTargetBodySite.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureTargetBodySite): ProcedureTargetBodySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureTargetBodySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureTargetBodySite;
  static deserializeBinaryFromReader(message: ProcedureTargetBodySite, reader: jspb.BinaryReader): ProcedureTargetBodySite;
}

export namespace ProcedureTargetBodySite {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ProcedureRequestApproachBodySite extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestApproachBodySite.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestApproachBodySite): ProcedureRequestApproachBodySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestApproachBodySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestApproachBodySite;
  static deserializeBinaryFromReader(message: ProcedureRequestApproachBodySite, reader: jspb.BinaryReader): ProcedureRequestApproachBodySite;
}

export namespace ProcedureRequestApproachBodySite {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ProcedureRequestAuthorizedBy extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestAuthorizedBy.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestAuthorizedBy): ProcedureRequestAuthorizedBy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestAuthorizedBy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestAuthorizedBy;
  static deserializeBinaryFromReader(message: ProcedureRequestAuthorizedBy, reader: jspb.BinaryReader): ProcedureRequestAuthorizedBy;
}

export namespace ProcedureRequestAuthorizedBy {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DiagnosticReportItem extends jspb.Message {
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
  getCode(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  hasGeneticsObservation(): boolean;
  clearGeneticsObservation(): void;
  getGeneticsObservation(): proto_stu3_datatypes_pb.Reference | undefined;
  setGeneticsObservation(value?: proto_stu3_datatypes_pb.Reference): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_stu3_datatypes_pb.Reference | undefined;
  setSpecimen(value?: proto_stu3_datatypes_pb.Reference): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): proto_stu3_datatypes_pb.Code | undefined;
  setStatus(value?: proto_stu3_datatypes_pb.Code): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportItem.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportItem): DiagnosticReportItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportItem;
  static deserializeBinaryFromReader(message: DiagnosticReportItem, reader: jspb.BinaryReader): DiagnosticReportItem;
}

export namespace DiagnosticReportItem {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    code?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
    geneticsObservation?: proto_stu3_datatypes_pb.Reference.AsObject,
    specimen?: proto_stu3_datatypes_pb.Reference.AsObject,
    status?: proto_stu3_datatypes_pb.Code.AsObject,
  }
}

export class ProcedureRequestPrecondition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestPrecondition.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestPrecondition): ProcedureRequestPrecondition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestPrecondition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestPrecondition;
  static deserializeBinaryFromReader(message: ProcedureRequestPrecondition, reader: jspb.BinaryReader): ProcedureRequestPrecondition;
}

export namespace ProcedureRequestPrecondition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureRequestQuestionnaireRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestQuestionnaireRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestQuestionnaireRequest): ProcedureRequestQuestionnaireRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestQuestionnaireRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestQuestionnaireRequest;
  static deserializeBinaryFromReader(message: ProcedureRequestQuestionnaireRequest, reader: jspb.BinaryReader): ProcedureRequestQuestionnaireRequest;
}

export namespace ProcedureRequestQuestionnaireRequest {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ProcedureRequestReasonRefused extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestReasonRefused.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestReasonRefused): ProcedureRequestReasonRefused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestReasonRefused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestReasonRefused;
  static deserializeBinaryFromReader(message: ProcedureRequestReasonRefused, reader: jspb.BinaryReader): ProcedureRequestReasonRefused;
}

export namespace ProcedureRequestReasonRefused {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureRequestReasonRejected extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestReasonRejected.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestReasonRejected): ProcedureRequestReasonRejected.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestReasonRejected, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestReasonRejected;
  static deserializeBinaryFromReader(message: ProcedureRequestReasonRejected, reader: jspb.BinaryReader): ProcedureRequestReasonRejected;
}

export namespace ProcedureRequestReasonRejected {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class ProcedureRequestTargetBodySite extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureRequestTargetBodySite.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureRequestTargetBodySite): ProcedureRequestTargetBodySite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureRequestTargetBodySite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureRequestTargetBodySite;
  static deserializeBinaryFromReader(message: ProcedureRequestTargetBodySite, reader: jspb.BinaryReader): ProcedureRequestTargetBodySite;
}

export namespace ProcedureRequestTargetBodySite {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireAllowedProfile extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireAllowedProfile.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireAllowedProfile): QuestionnaireAllowedProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireAllowedProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireAllowedProfile;
  static deserializeBinaryFromReader(message: QuestionnaireAllowedProfile, reader: jspb.BinaryReader): QuestionnaireAllowedProfile;
}

export namespace QuestionnaireAllowedProfile {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireAllowedResource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ResourceTypeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ResourceTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireAllowedResource.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireAllowedResource): QuestionnaireAllowedResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireAllowedResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireAllowedResource;
  static deserializeBinaryFromReader(message: QuestionnaireAllowedResource, reader: jspb.BinaryReader): QuestionnaireAllowedResource;
}

export namespace QuestionnaireAllowedResource {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ResourceTypeCode.AsObject,
  }
}

export class QuestionnaireBaseType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.DataTypeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.DataTypeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireBaseType.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireBaseType): QuestionnaireBaseType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireBaseType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireBaseType;
  static deserializeBinaryFromReader(message: QuestionnaireBaseType, reader: jspb.BinaryReader): QuestionnaireBaseType;
}

export namespace QuestionnaireBaseType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.DataTypeCode.AsObject,
  }
}

export class QuestionnaireChoiceOrientation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.ChoiceListOrientationCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.ChoiceListOrientationCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireChoiceOrientation.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireChoiceOrientation): QuestionnaireChoiceOrientation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireChoiceOrientation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireChoiceOrientation;
  static deserializeBinaryFromReader(message: QuestionnaireChoiceOrientation, reader: jspb.BinaryReader): QuestionnaireChoiceOrientation;
}

export namespace QuestionnaireChoiceOrientation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.ChoiceListOrientationCode.AsObject,
  }
}

export class QuestionnaireDeMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireDeMap.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireDeMap): QuestionnaireDeMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireDeMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireDeMap;
  static deserializeBinaryFromReader(message: QuestionnaireDeMap, reader: jspb.BinaryReader): QuestionnaireDeMap;
}

export namespace QuestionnaireDeMap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireDisplayCategory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireDisplayCategory.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireDisplayCategory): QuestionnaireDisplayCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireDisplayCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireDisplayCategory;
  static deserializeBinaryFromReader(message: QuestionnaireDisplayCategory, reader: jspb.BinaryReader): QuestionnaireDisplayCategory;
}

export namespace QuestionnaireDisplayCategory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireFhirType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireFhirType.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireFhirType): QuestionnaireFhirType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireFhirType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireFhirType;
  static deserializeBinaryFromReader(message: QuestionnaireFhirType, reader: jspb.BinaryReader): QuestionnaireFhirType;
}

export namespace QuestionnaireFhirType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireHidden extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireHidden.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireHidden): QuestionnaireHidden.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireHidden, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireHidden;
  static deserializeBinaryFromReader(message: QuestionnaireHidden, reader: jspb.BinaryReader): QuestionnaireHidden;
}

export namespace QuestionnaireHidden {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class QuestionnaireItemControl extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemControl.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemControl): QuestionnaireItemControl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemControl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemControl;
  static deserializeBinaryFromReader(message: QuestionnaireItemControl, reader: jspb.BinaryReader): QuestionnaireItemControl;
}

export namespace QuestionnaireItemControl {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireLookupQuestionnaire extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireLookupQuestionnaire.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireLookupQuestionnaire): QuestionnaireLookupQuestionnaire.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireLookupQuestionnaire, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireLookupQuestionnaire;
  static deserializeBinaryFromReader(message: QuestionnaireLookupQuestionnaire, reader: jspb.BinaryReader): QuestionnaireLookupQuestionnaire;
}

export namespace QuestionnaireLookupQuestionnaire {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class QuestionnaireMaxOccurs extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMaxOccurs.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMaxOccurs): QuestionnaireMaxOccurs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMaxOccurs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMaxOccurs;
  static deserializeBinaryFromReader(message: QuestionnaireMaxOccurs, reader: jspb.BinaryReader): QuestionnaireMaxOccurs;
}

export namespace QuestionnaireMaxOccurs {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireMinOccurs extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireMinOccurs.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireMinOccurs): QuestionnaireMinOccurs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireMinOccurs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireMinOccurs;
  static deserializeBinaryFromReader(message: QuestionnaireMinOccurs, reader: jspb.BinaryReader): QuestionnaireMinOccurs;
}

export namespace QuestionnaireMinOccurs {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class QuestionnaireOptionExclusive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOptionExclusive.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOptionExclusive): QuestionnaireOptionExclusive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOptionExclusive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOptionExclusive;
  static deserializeBinaryFromReader(message: QuestionnaireOptionExclusive, reader: jspb.BinaryReader): QuestionnaireOptionExclusive;
}

export namespace QuestionnaireOptionExclusive {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class QuestionnaireOptionPrefix extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOptionPrefix.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOptionPrefix): QuestionnaireOptionPrefix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOptionPrefix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOptionPrefix;
  static deserializeBinaryFromReader(message: QuestionnaireOptionPrefix, reader: jspb.BinaryReader): QuestionnaireOptionPrefix;
}

export namespace QuestionnaireOptionPrefix {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireOrdinalValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireOrdinalValue.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireOrdinalValue): QuestionnaireOrdinalValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireOrdinalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireOrdinalValue;
  static deserializeBinaryFromReader(message: QuestionnaireOrdinalValue, reader: jspb.BinaryReader): QuestionnaireOrdinalValue;
}

export namespace QuestionnaireOrdinalValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class QuestionnaireReferenceFilter extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireReferenceFilter.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireReferenceFilter): QuestionnaireReferenceFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireReferenceFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireReferenceFilter;
  static deserializeBinaryFromReader(message: QuestionnaireReferenceFilter, reader: jspb.BinaryReader): QuestionnaireReferenceFilter;
}

export namespace QuestionnaireReferenceFilter {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class QuestionnaireSourceStructureMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireSourceStructureMap.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireSourceStructureMap): QuestionnaireSourceStructureMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireSourceStructureMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireSourceStructureMap;
  static deserializeBinaryFromReader(message: QuestionnaireSourceStructureMap, reader: jspb.BinaryReader): QuestionnaireSourceStructureMap;
}

export namespace QuestionnaireSourceStructureMap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireStudyprotocolIdentifier extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueIdentifier(): boolean;
  clearValueIdentifier(): void;
  getValueIdentifier(): proto_stu3_datatypes_pb.Identifier | undefined;
  setValueIdentifier(value?: proto_stu3_datatypes_pb.Identifier): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireStudyprotocolIdentifier.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireStudyprotocolIdentifier): QuestionnaireStudyprotocolIdentifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireStudyprotocolIdentifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireStudyprotocolIdentifier;
  static deserializeBinaryFromReader(message: QuestionnaireStudyprotocolIdentifier, reader: jspb.BinaryReader): QuestionnaireStudyprotocolIdentifier;
}

export namespace QuestionnaireStudyprotocolIdentifier {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueIdentifier?: proto_stu3_datatypes_pb.Identifier.AsObject,
  }
}

export class QuestionnaireSupportLink extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireSupportLink.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireSupportLink): QuestionnaireSupportLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireSupportLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireSupportLink;
  static deserializeBinaryFromReader(message: QuestionnaireSupportLink, reader: jspb.BinaryReader): QuestionnaireSupportLink;
}

export namespace QuestionnaireSupportLink {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class QuestionnaireTargetStructureMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireTargetStructureMap.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireTargetStructureMap): QuestionnaireTargetStructureMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireTargetStructureMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireTargetStructureMap;
  static deserializeBinaryFromReader(message: QuestionnaireTargetStructureMap, reader: jspb.BinaryReader): QuestionnaireTargetStructureMap;
}

export namespace QuestionnaireTargetStructureMap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class QuestionnaireUnit extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCoding(): boolean;
  clearValueCoding(): void;
  getValueCoding(): proto_stu3_datatypes_pb.Coding | undefined;
  setValueCoding(value?: proto_stu3_datatypes_pb.Coding): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUnit.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUnit): QuestionnaireUnit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUnit;
  static deserializeBinaryFromReader(message: QuestionnaireUnit, reader: jspb.BinaryReader): QuestionnaireUnit;
}

export namespace QuestionnaireUnit {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCoding?: proto_stu3_datatypes_pb.Coding.AsObject,
  }
}

export class QuestionnaireUsageMode extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.QuestionnaireItemUsageModeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.QuestionnaireItemUsageModeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireUsageMode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireUsageMode): QuestionnaireUsageMode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireUsageMode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireUsageMode;
  static deserializeBinaryFromReader(message: QuestionnaireUsageMode, reader: jspb.BinaryReader): QuestionnaireUsageMode;
}

export namespace QuestionnaireUsageMode {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.QuestionnaireItemUsageModeCode.AsObject,
  }
}

export class QuestionnaireResponseAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): QuestionnaireResponseAuthor.Value | undefined;
  setValue(value?: QuestionnaireResponseAuthor.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseAuthor): QuestionnaireResponseAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseAuthor;
  static deserializeBinaryFromReader(message: QuestionnaireResponseAuthor, reader: jspb.BinaryReader): QuestionnaireResponseAuthor;
}

export namespace QuestionnaireResponseAuthor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: QuestionnaireResponseAuthor.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class QuestionnaireResponseNote extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAnnotation(): boolean;
  clearValueAnnotation(): void;
  getValueAnnotation(): proto_stu3_datatypes_pb.Annotation | undefined;
  setValueAnnotation(value?: proto_stu3_datatypes_pb.Annotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseNote.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseNote): QuestionnaireResponseNote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseNote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseNote;
  static deserializeBinaryFromReader(message: QuestionnaireResponseNote, reader: jspb.BinaryReader): QuestionnaireResponseNote;
}

export namespace QuestionnaireResponseNote {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAnnotation?: proto_stu3_datatypes_pb.Annotation.AsObject,
  }
}

export class QuestionnaireResponseReason extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseReason.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseReason): QuestionnaireResponseReason.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseReason, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseReason;
  static deserializeBinaryFromReader(message: QuestionnaireResponseReason, reader: jspb.BinaryReader): QuestionnaireResponseReason;
}

export namespace QuestionnaireResponseReason {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class QuestionnaireResponseReviewer extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseReviewer.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseReviewer): QuestionnaireResponseReviewer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseReviewer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseReviewer;
  static deserializeBinaryFromReader(message: QuestionnaireResponseReviewer, reader: jspb.BinaryReader): QuestionnaireResponseReviewer;
}

export namespace QuestionnaireResponseReviewer {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ReferralRequestReasonRefused extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferralRequestReasonRefused.AsObject;
  static toObject(includeInstance: boolean, msg: ReferralRequestReasonRefused): ReferralRequestReasonRefused.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferralRequestReasonRefused, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferralRequestReasonRefused;
  static deserializeBinaryFromReader(message: ReferralRequestReasonRefused, reader: jspb.BinaryReader): ReferralRequestReasonRefused;
}

export namespace ReferralRequestReasonRefused {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class Regex extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Regex.AsObject;
  static toObject(includeInstance: boolean, msg: Regex): Regex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Regex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Regex;
  static deserializeBinaryFromReader(message: Regex, reader: jspb.BinaryReader): Regex;
}

export namespace Regex {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class RenderedValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RenderedValue.AsObject;
  static toObject(includeInstance: boolean, msg: RenderedValue): RenderedValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RenderedValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RenderedValue;
  static deserializeBinaryFromReader(message: RenderedValue, reader: jspb.BinaryReader): RenderedValue;
}

export namespace RenderedValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StringMarkdown extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringMarkdown.AsObject;
  static toObject(includeInstance: boolean, msg: StringMarkdown): StringMarkdown.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringMarkdown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringMarkdown;
  static deserializeBinaryFromReader(message: StringMarkdown, reader: jspb.BinaryReader): StringMarkdown;
}

export namespace StringMarkdown {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
  }
}

export class Style extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Style.AsObject;
  static toObject(includeInstance: boolean, msg: Style): Style.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Style, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Style;
  static deserializeBinaryFromReader(message: Style, reader: jspb.BinaryReader): Style;
}

export namespace Style {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StyleSensitive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StyleSensitive.AsObject;
  static toObject(includeInstance: boolean, msg: StyleSensitive): StyleSensitive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StyleSensitive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StyleSensitive;
  static deserializeBinaryFromReader(message: StyleSensitive, reader: jspb.BinaryReader): StyleSensitive;
}

export namespace StyleSensitive {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class StringXhtml extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringXhtml.AsObject;
  static toObject(includeInstance: boolean, msg: StringXhtml): StringXhtml.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringXhtml, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringXhtml;
  static deserializeBinaryFromReader(message: StringXhtml, reader: jspb.BinaryReader): StringXhtml;
}

export namespace StringXhtml {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ApprovalDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovalDate.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovalDate): ApprovalDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApprovalDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovalDate;
  static deserializeBinaryFromReader(message: ApprovalDate, reader: jspb.BinaryReader): ApprovalDate;
}

export namespace ApprovalDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class EffectivePeriod extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValuePeriod(): boolean;
  clearValuePeriod(): void;
  getValuePeriod(): proto_stu3_datatypes_pb.Period | undefined;
  setValuePeriod(value?: proto_stu3_datatypes_pb.Period): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectivePeriod.AsObject;
  static toObject(includeInstance: boolean, msg: EffectivePeriod): EffectivePeriod.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EffectivePeriod, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectivePeriod;
  static deserializeBinaryFromReader(message: EffectivePeriod, reader: jspb.BinaryReader): EffectivePeriod;
}

export namespace EffectivePeriod {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valuePeriod?: proto_stu3_datatypes_pb.Period.AsObject,
  }
}

export class LastReviewDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LastReviewDate.AsObject;
  static toObject(includeInstance: boolean, msg: LastReviewDate): LastReviewDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LastReviewDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LastReviewDate;
  static deserializeBinaryFromReader(message: LastReviewDate, reader: jspb.BinaryReader): LastReviewDate;
}

export namespace LastReviewDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class SpecimenCollectionPriority extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenCollectionPriority.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenCollectionPriority): SpecimenCollectionPriority.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenCollectionPriority, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenCollectionPriority;
  static deserializeBinaryFromReader(message: SpecimenCollectionPriority, reader: jspb.BinaryReader): SpecimenCollectionPriority;
}

export namespace SpecimenCollectionPriority {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class SpecimenIsDryWeight extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenIsDryWeight.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenIsDryWeight): SpecimenIsDryWeight.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenIsDryWeight, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenIsDryWeight;
  static deserializeBinaryFromReader(message: SpecimenIsDryWeight, reader: jspb.BinaryReader): SpecimenIsDryWeight;
}

export namespace SpecimenIsDryWeight {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class SpecimenProcessingTime extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): SpecimenProcessingTime.Value | undefined;
  setValue(value?: SpecimenProcessingTime.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenProcessingTime.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenProcessingTime): SpecimenProcessingTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenProcessingTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenProcessingTime;
  static deserializeBinaryFromReader(message: SpecimenProcessingTime, reader: jspb.BinaryReader): SpecimenProcessingTime;
}

export namespace SpecimenProcessingTime {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: SpecimenProcessingTime.Value.AsObject,
  }

  export class Value extends jspb.Message {
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
      period?: proto_stu3_datatypes_pb.Period.AsObject,
      duration?: proto_stu3_datatypes_pb.Duration.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      PERIOD = 1,
      DURATION = 2,
    }
  }
}

export class SpecimenSequenceNumber extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenSequenceNumber.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenSequenceNumber): SpecimenSequenceNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenSequenceNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenSequenceNumber;
  static deserializeBinaryFromReader(message: SpecimenSequenceNumber, reader: jspb.BinaryReader): SpecimenSequenceNumber;
}

export namespace SpecimenSequenceNumber {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class SpecimenSpecialHandling extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCodeableConcept(): boolean;
  clearValueCodeableConcept(): void;
  getValueCodeableConcept(): proto_stu3_datatypes_pb.CodeableConcept | undefined;
  setValueCodeableConcept(value?: proto_stu3_datatypes_pb.CodeableConcept): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenSpecialHandling.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenSpecialHandling): SpecimenSpecialHandling.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenSpecialHandling, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenSpecialHandling;
  static deserializeBinaryFromReader(message: SpecimenSpecialHandling, reader: jspb.BinaryReader): SpecimenSpecialHandling;
}

export namespace SpecimenSpecialHandling {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCodeableConcept?: proto_stu3_datatypes_pb.CodeableConcept.AsObject,
  }
}

export class StructureDefinitionAncestor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionAncestor.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionAncestor): StructureDefinitionAncestor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionAncestor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionAncestor;
  static deserializeBinaryFromReader(message: StructureDefinitionAncestor, reader: jspb.BinaryReader): StructureDefinitionAncestor;
}

export namespace StructureDefinitionAncestor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class StructureDefinitionAnnotation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueAnnotation(): boolean;
  clearValueAnnotation(): void;
  getValueAnnotation(): proto_stu3_datatypes_pb.Annotation | undefined;
  setValueAnnotation(value?: proto_stu3_datatypes_pb.Annotation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionAnnotation.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionAnnotation): StructureDefinitionAnnotation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionAnnotation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionAnnotation;
  static deserializeBinaryFromReader(message: StructureDefinitionAnnotation, reader: jspb.BinaryReader): StructureDefinitionAnnotation;
}

export namespace StructureDefinitionAnnotation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueAnnotation?: proto_stu3_datatypes_pb.Annotation.AsObject,
  }
}

export class BallotStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BallotStatus.AsObject;
  static toObject(includeInstance: boolean, msg: BallotStatus): BallotStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BallotStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BallotStatus;
  static deserializeBinaryFromReader(message: BallotStatus, reader: jspb.BinaryReader): BallotStatus;
}

export namespace BallotStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionCategory extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionCategory.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionCategory): StructureDefinitionCategory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionCategory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionCategory;
  static deserializeBinaryFromReader(message: StructureDefinitionCategory, reader: jspb.BinaryReader): StructureDefinitionCategory;
}

export namespace StructureDefinitionCategory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionDisplayHint extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionDisplayHint.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionDisplayHint): ElementDefinitionDisplayHint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionDisplayHint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionDisplayHint;
  static deserializeBinaryFromReader(message: ElementDefinitionDisplayHint, reader: jspb.BinaryReader): ElementDefinitionDisplayHint;
}

export namespace ElementDefinitionDisplayHint {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionExplicitTypeName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionExplicitTypeName.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionExplicitTypeName): ElementDefinitionExplicitTypeName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionExplicitTypeName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionExplicitTypeName;
  static deserializeBinaryFromReader(message: ElementDefinitionExplicitTypeName, reader: jspb.BinaryReader): ElementDefinitionExplicitTypeName;
}

export namespace ElementDefinitionExplicitTypeName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionFmmNoWarnings extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionFmmNoWarnings.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionFmmNoWarnings): StructureDefinitionFmmNoWarnings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionFmmNoWarnings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionFmmNoWarnings;
  static deserializeBinaryFromReader(message: StructureDefinitionFmmNoWarnings, reader: jspb.BinaryReader): StructureDefinitionFmmNoWarnings;
}

export namespace StructureDefinitionFmmNoWarnings {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class Fmm extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fmm.AsObject;
  static toObject(includeInstance: boolean, msg: Fmm): Fmm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fmm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fmm;
  static deserializeBinaryFromReader(message: Fmm, reader: jspb.BinaryReader): Fmm;
}

export namespace Fmm {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class ElementDefinitionJsonType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionJsonType.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionJsonType): ElementDefinitionJsonType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionJsonType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionJsonType;
  static deserializeBinaryFromReader(message: ElementDefinitionJsonType, reader: jspb.BinaryReader): ElementDefinitionJsonType;
}

export namespace ElementDefinitionJsonType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionRdfType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionRdfType.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionRdfType): ElementDefinitionRdfType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionRdfType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionRdfType;
  static deserializeBinaryFromReader(message: ElementDefinitionRdfType, reader: jspb.BinaryReader): ElementDefinitionRdfType;
}

export namespace ElementDefinitionRdfType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ElementDefinitionRegex extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionRegex.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionRegex): ElementDefinitionRegex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionRegex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionRegex;
  static deserializeBinaryFromReader(message: ElementDefinitionRegex, reader: jspb.BinaryReader): ElementDefinitionRegex;
}

export namespace ElementDefinitionRegex {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionSummary extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionSummary.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionSummary): StructureDefinitionSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionSummary;
  static deserializeBinaryFromReader(message: StructureDefinitionSummary, reader: jspb.BinaryReader): StructureDefinitionSummary;
}

export namespace StructureDefinitionSummary {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
  }
}

export class StructureDefinitionTableName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionTableName.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionTableName): StructureDefinitionTableName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionTableName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionTableName;
  static deserializeBinaryFromReader(message: StructureDefinitionTableName, reader: jspb.BinaryReader): StructureDefinitionTableName;
}

export namespace StructureDefinitionTableName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class StructureDefinitionTemplateStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.TemplateStatusCodeCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.TemplateStatusCodeCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionTemplateStatus.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionTemplateStatus): StructureDefinitionTemplateStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionTemplateStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionTemplateStatus;
  static deserializeBinaryFromReader(message: StructureDefinitionTemplateStatus, reader: jspb.BinaryReader): StructureDefinitionTemplateStatus;
}

export namespace StructureDefinitionTemplateStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.TemplateStatusCodeCode.AsObject,
  }
}

export class Wg extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueCode(): boolean;
  clearValueCode(): void;
  getValueCode(): proto_stu3_codes_pb.HL7WorkgroupCode | undefined;
  setValueCode(value?: proto_stu3_codes_pb.HL7WorkgroupCode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wg.AsObject;
  static toObject(includeInstance: boolean, msg: Wg): Wg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wg;
  static deserializeBinaryFromReader(message: Wg, reader: jspb.BinaryReader): Wg;
}

export namespace Wg {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueCode?: proto_stu3_codes_pb.HL7WorkgroupCode.AsObject,
  }
}

export class ElementDefinitionXmlType extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ElementDefinitionXmlType.AsObject;
  static toObject(includeInstance: boolean, msg: ElementDefinitionXmlType): ElementDefinitionXmlType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ElementDefinitionXmlType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ElementDefinitionXmlType;
  static deserializeBinaryFromReader(message: ElementDefinitionXmlType, reader: jspb.BinaryReader): ElementDefinitionXmlType;
}

export namespace ElementDefinitionXmlType {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class TaskCandidateList extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValue(): boolean;
  clearValue(): void;
  getValue(): TaskCandidateList.Value | undefined;
  setValue(value?: TaskCandidateList.Value): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskCandidateList.AsObject;
  static toObject(includeInstance: boolean, msg: TaskCandidateList): TaskCandidateList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskCandidateList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskCandidateList;
  static deserializeBinaryFromReader(message: TaskCandidateList, reader: jspb.BinaryReader): TaskCandidateList;
}

export namespace TaskCandidateList {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    value?: TaskCandidateList.Value.AsObject,
  }

  export class Value extends jspb.Message {
    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_stu3_datatypes_pb.Reference | undefined;
    setReference(value?: proto_stu3_datatypes_pb.Reference): void;

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
      reference?: proto_stu3_datatypes_pb.Reference.AsObject,
    }

    export enum ValueCase {
      VALUE_NOT_SET = 0,
      REFERENCE = 1,
    }
  }
}

export class TaskReplaces extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskReplaces.AsObject;
  static toObject(includeInstance: boolean, msg: TaskReplaces): TaskReplaces.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskReplaces, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskReplaces;
  static deserializeBinaryFromReader(message: TaskReplaces, reader: jspb.BinaryReader): TaskReplaces;
}

export namespace TaskReplaces {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class DaysOfCycle extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  clearDayList(): void;
  getDayList(): Array<proto_stu3_datatypes_pb.Integer>;
  setDayList(value: Array<proto_stu3_datatypes_pb.Integer>): void;
  addDay(value?: proto_stu3_datatypes_pb.Integer, index?: number): proto_stu3_datatypes_pb.Integer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DaysOfCycle.AsObject;
  static toObject(includeInstance: boolean, msg: DaysOfCycle): DaysOfCycle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DaysOfCycle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DaysOfCycle;
  static deserializeBinaryFromReader(message: DaysOfCycle, reader: jspb.BinaryReader): DaysOfCycle;
}

export namespace DaysOfCycle {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    dayList: Array<proto_stu3_datatypes_pb.Integer.AsObject>,
  }
}

export class TimingExact extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimingExact.AsObject;
  static toObject(includeInstance: boolean, msg: TimingExact): TimingExact.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimingExact, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimingExact;
  static deserializeBinaryFromReader(message: TimingExact, reader: jspb.BinaryReader): TimingExact;
}

export namespace TimingExact {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class Translation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasLang(): boolean;
  clearLang(): void;
  getLang(): proto_stu3_datatypes_pb.LanguageCode | undefined;
  setLang(value?: proto_stu3_datatypes_pb.LanguageCode): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): Translation.Content | undefined;
  setContent(value?: Translation.Content): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Translation.AsObject;
  static toObject(includeInstance: boolean, msg: Translation): Translation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Translation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Translation;
  static deserializeBinaryFromReader(message: Translation, reader: jspb.BinaryReader): Translation;
}

export namespace Translation {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    lang?: proto_stu3_datatypes_pb.LanguageCode.AsObject,
    content?: Translation.Content.AsObject,
  }

  export class Content extends jspb.Message {
    hasStringValue(): boolean;
    clearStringValue(): void;
    getStringValue(): proto_stu3_datatypes_pb.String | undefined;
    setStringValue(value?: proto_stu3_datatypes_pb.String): void;

    hasMarkdown(): boolean;
    clearMarkdown(): void;
    getMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
    setMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

    getContentCase(): Content.ContentCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Content.AsObject;
    static toObject(includeInstance: boolean, msg: Content): Content.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Content, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Content;
    static deserializeBinaryFromReader(message: Content, reader: jspb.BinaryReader): Content;
  }

  export namespace Content {
    export type AsObject = {
      stringValue?: proto_stu3_datatypes_pb.String.AsObject,
      markdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
    }

    export enum ContentCase {
      CONTENT_NOT_SET = 0,
      STRING_VALUE = 1,
      MARKDOWN = 2,
    }
  }
}

export class UsageContextGroup extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageContextGroup.AsObject;
  static toObject(includeInstance: boolean, msg: UsageContextGroup): UsageContextGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageContextGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageContextGroup;
  static deserializeBinaryFromReader(message: UsageContextGroup, reader: jspb.BinaryReader): UsageContextGroup;
}

export namespace UsageContextGroup {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetAuthor extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetAuthor.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetAuthor): ValueSetAuthor.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetAuthor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetAuthor;
  static deserializeBinaryFromReader(message: ValueSetAuthor, reader: jspb.BinaryReader): ValueSetAuthor;
}

export namespace ValueSetAuthor {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetCaseSensitive extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetCaseSensitive.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetCaseSensitive): ValueSetCaseSensitive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetCaseSensitive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetCaseSensitive;
  static deserializeBinaryFromReader(message: ValueSetCaseSensitive, reader: jspb.BinaryReader): ValueSetCaseSensitive;
}

export namespace ValueSetCaseSensitive {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetComment extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): proto_stu3_datatypes_pb.String | undefined;
  setContent(value?: proto_stu3_datatypes_pb.String): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): proto_stu3_datatypes_pb.Instant | undefined;
  setTimestamp(value?: proto_stu3_datatypes_pb.Instant): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetComment.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetComment): ValueSetComment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetComment;
  static deserializeBinaryFromReader(message: ValueSetComment, reader: jspb.BinaryReader): ValueSetComment;
}

export namespace ValueSetComment {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    content?: proto_stu3_datatypes_pb.String.AsObject,
    timestamp?: proto_stu3_datatypes_pb.Instant.AsObject,
  }
}

export class ValueSetComments extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetComments.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetComments): ValueSetComments.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetComments, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetComments;
  static deserializeBinaryFromReader(message: ValueSetComments, reader: jspb.BinaryReader): ValueSetComments;
}

export namespace ValueSetComments {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetConceptOrder extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueInteger(): boolean;
  clearValueInteger(): void;
  getValueInteger(): proto_stu3_datatypes_pb.Integer | undefined;
  setValueInteger(value?: proto_stu3_datatypes_pb.Integer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetConceptOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetConceptOrder): ValueSetConceptOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetConceptOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetConceptOrder;
  static deserializeBinaryFromReader(message: ValueSetConceptOrder, reader: jspb.BinaryReader): ValueSetConceptOrder;
}

export namespace ValueSetConceptOrder {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueInteger?: proto_stu3_datatypes_pb.Integer.AsObject,
  }
}

export class ValueSetDefinition extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetDefinition): ValueSetDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetDefinition;
  static deserializeBinaryFromReader(message: ValueSetDefinition, reader: jspb.BinaryReader): ValueSetDefinition;
}

export namespace ValueSetDefinition {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetEffectiveDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetEffectiveDate.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetEffectiveDate): ValueSetEffectiveDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetEffectiveDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetEffectiveDate;
  static deserializeBinaryFromReader(message: ValueSetEffectiveDate, reader: jspb.BinaryReader): ValueSetEffectiveDate;
}

export namespace ValueSetEffectiveDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class ValueSetExpansionSource extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpansionSource.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpansionSource): ValueSetExpansionSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpansionSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpansionSource;
  static deserializeBinaryFromReader(message: ValueSetExpansionSource, reader: jspb.BinaryReader): ValueSetExpansionSource;
}

export namespace ValueSetExpansionSource {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetExpirationDate extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDate(): boolean;
  clearValueDate(): void;
  getValueDate(): proto_stu3_datatypes_pb.Date | undefined;
  setValueDate(value?: proto_stu3_datatypes_pb.Date): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetExpirationDate.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetExpirationDate): ValueSetExpirationDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetExpirationDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetExpirationDate;
  static deserializeBinaryFromReader(message: ValueSetExpirationDate, reader: jspb.BinaryReader): ValueSetExpirationDate;
}

export namespace ValueSetExpirationDate {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDate?: proto_stu3_datatypes_pb.Date.AsObject,
  }
}

export class ValueSetHistory extends jspb.Message {
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

  clearRevisionList(): void;
  getRevisionList(): Array<ValueSetHistory.Revision>;
  setRevisionList(value: Array<ValueSetHistory.Revision>): void;
  addRevision(value?: ValueSetHistory.Revision, index?: number): ValueSetHistory.Revision;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetHistory.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetHistory): ValueSetHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetHistory;
  static deserializeBinaryFromReader(message: ValueSetHistory, reader: jspb.BinaryReader): ValueSetHistory;
}

export namespace ValueSetHistory {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    revisionList: Array<ValueSetHistory.Revision.AsObject>,
  }

  export class Revision extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_stu3_datatypes_pb.String | undefined;
    setId(value?: proto_stu3_datatypes_pb.String): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): proto_stu3_datatypes_pb.DateTime | undefined;
    setDate(value?: proto_stu3_datatypes_pb.DateTime): void;

    hasIdSlice(): boolean;
    clearIdSlice(): void;
    getIdSlice(): proto_stu3_datatypes_pb.String | undefined;
    setIdSlice(value?: proto_stu3_datatypes_pb.String): void;

    hasAuthor(): boolean;
    clearAuthor(): void;
    getAuthor(): proto_stu3_datatypes_pb.String | undefined;
    setAuthor(value?: proto_stu3_datatypes_pb.String): void;

    hasNotes(): boolean;
    clearNotes(): void;
    getNotes(): proto_stu3_datatypes_pb.String | undefined;
    setNotes(value?: proto_stu3_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Revision.AsObject;
    static toObject(includeInstance: boolean, msg: Revision): Revision.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Revision, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Revision;
    static deserializeBinaryFromReader(message: Revision, reader: jspb.BinaryReader): Revision;
  }

  export namespace Revision {
    export type AsObject = {
      id?: proto_stu3_datatypes_pb.String.AsObject,
      date?: proto_stu3_datatypes_pb.DateTime.AsObject,
      idSlice?: proto_stu3_datatypes_pb.String.AsObject,
      author?: proto_stu3_datatypes_pb.String.AsObject,
      notes?: proto_stu3_datatypes_pb.String.AsObject,
    }
  }
}

export class ValueSetKeyWord extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetKeyWord.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetKeyWord): ValueSetKeyWord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetKeyWord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetKeyWord;
  static deserializeBinaryFromReader(message: ValueSetKeyWord, reader: jspb.BinaryReader): ValueSetKeyWord;
}

export namespace ValueSetKeyWord {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetLabel extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetLabel.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetLabel): ValueSetLabel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetLabel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetLabel;
  static deserializeBinaryFromReader(message: ValueSetLabel, reader: jspb.BinaryReader): ValueSetLabel;
}

export namespace ValueSetLabel {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetMap extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetMap.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetMap): ValueSetMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetMap;
  static deserializeBinaryFromReader(message: ValueSetMap, reader: jspb.BinaryReader): ValueSetMap;
}

export namespace ValueSetMap {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ValueSetOrdinalValue extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueDecimal(): boolean;
  clearValueDecimal(): void;
  getValueDecimal(): proto_stu3_datatypes_pb.Decimal | undefined;
  setValueDecimal(value?: proto_stu3_datatypes_pb.Decimal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetOrdinalValue.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetOrdinalValue): ValueSetOrdinalValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetOrdinalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetOrdinalValue;
  static deserializeBinaryFromReader(message: ValueSetOrdinalValue, reader: jspb.BinaryReader): ValueSetOrdinalValue;
}

export namespace ValueSetOrdinalValue {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueDecimal?: proto_stu3_datatypes_pb.Decimal.AsObject,
  }
}

export class ValueSetOtherName extends jspb.Message {
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

  hasPreferred(): boolean;
  clearPreferred(): void;
  getPreferred(): proto_stu3_datatypes_pb.Boolean | undefined;
  setPreferred(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetOtherName.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetOtherName): ValueSetOtherName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetOtherName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetOtherName;
  static deserializeBinaryFromReader(message: ValueSetOtherName, reader: jspb.BinaryReader): ValueSetOtherName;
}

export namespace ValueSetOtherName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    name?: proto_stu3_datatypes_pb.String.AsObject,
    preferred?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetReference.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetReference): ValueSetReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetReference;
  static deserializeBinaryFromReader(message: ValueSetReference, reader: jspb.BinaryReader): ValueSetReference;
}

export namespace ValueSetReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetSourceReference extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSourceReference.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSourceReference): ValueSetSourceReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSourceReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSourceReference;
  static deserializeBinaryFromReader(message: ValueSetSourceReference, reader: jspb.BinaryReader): ValueSetSourceReference;
}

export namespace ValueSetSourceReference {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetSystem extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueReference(): boolean;
  clearValueReference(): void;
  getValueReference(): proto_stu3_datatypes_pb.Reference | undefined;
  setValueReference(value?: proto_stu3_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystem.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystem): ValueSetSystem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystem;
  static deserializeBinaryFromReader(message: ValueSetSystem, reader: jspb.BinaryReader): ValueSetSystem;
}

export namespace ValueSetSystem {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueReference?: proto_stu3_datatypes_pb.Reference.AsObject,
  }
}

export class ValueSetSystemName extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystemName.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystemName): ValueSetSystemName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystemName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystemName;
  static deserializeBinaryFromReader(message: ValueSetSystemName, reader: jspb.BinaryReader): ValueSetSystemName;
}

export namespace ValueSetSystemName {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetSystemRef extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetSystemRef.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetSystemRef): ValueSetSystemRef.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetSystemRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetSystemRef;
  static deserializeBinaryFromReader(message: ValueSetSystemRef, reader: jspb.BinaryReader): ValueSetSystemRef;
}

export namespace ValueSetSystemRef {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetToocostly extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetToocostly.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetToocostly): ValueSetToocostly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetToocostly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetToocostly;
  static deserializeBinaryFromReader(message: ValueSetToocostly, reader: jspb.BinaryReader): ValueSetToocostly;
}

export namespace ValueSetToocostly {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetTrustedExpansion extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueUri(): boolean;
  clearValueUri(): void;
  getValueUri(): proto_stu3_datatypes_pb.Uri | undefined;
  setValueUri(value?: proto_stu3_datatypes_pb.Uri): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetTrustedExpansion.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetTrustedExpansion): ValueSetTrustedExpansion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetTrustedExpansion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetTrustedExpansion;
  static deserializeBinaryFromReader(message: ValueSetTrustedExpansion, reader: jspb.BinaryReader): ValueSetTrustedExpansion;
}

export namespace ValueSetTrustedExpansion {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueUri?: proto_stu3_datatypes_pb.Uri.AsObject,
  }
}

export class ValueSetUnclosed extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueBoolean(): boolean;
  clearValueBoolean(): void;
  getValueBoolean(): proto_stu3_datatypes_pb.Boolean | undefined;
  setValueBoolean(value?: proto_stu3_datatypes_pb.Boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetUnclosed.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetUnclosed): ValueSetUnclosed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetUnclosed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetUnclosed;
  static deserializeBinaryFromReader(message: ValueSetUnclosed, reader: jspb.BinaryReader): ValueSetUnclosed;
}

export namespace ValueSetUnclosed {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueBoolean?: proto_stu3_datatypes_pb.Boolean.AsObject,
  }
}

export class ValueSetUsage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  hasUser(): boolean;
  clearUser(): void;
  getUser(): proto_stu3_datatypes_pb.String | undefined;
  setUser(value?: proto_stu3_datatypes_pb.String): void;

  hasUse(): boolean;
  clearUse(): void;
  getUse(): proto_stu3_datatypes_pb.String | undefined;
  setUse(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetUsage.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetUsage): ValueSetUsage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetUsage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetUsage;
  static deserializeBinaryFromReader(message: ValueSetUsage, reader: jspb.BinaryReader): ValueSetUsage;
}

export namespace ValueSetUsage {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extensionList: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
    user?: proto_stu3_datatypes_pb.String.AsObject,
    use?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

export class ValueSetWarning extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueMarkdown(): boolean;
  clearValueMarkdown(): void;
  getValueMarkdown(): proto_stu3_datatypes_pb.Markdown | undefined;
  setValueMarkdown(value?: proto_stu3_datatypes_pb.Markdown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetWarning.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetWarning): ValueSetWarning.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetWarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetWarning;
  static deserializeBinaryFromReader(message: ValueSetWarning, reader: jspb.BinaryReader): ValueSetWarning;
}

export namespace ValueSetWarning {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueMarkdown?: proto_stu3_datatypes_pb.Markdown.AsObject,
  }
}

export class ValueSetWorkflowStatus extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  hasValueString(): boolean;
  clearValueString(): void;
  getValueString(): proto_stu3_datatypes_pb.String | undefined;
  setValueString(value?: proto_stu3_datatypes_pb.String): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueSetWorkflowStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ValueSetWorkflowStatus): ValueSetWorkflowStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValueSetWorkflowStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueSetWorkflowStatus;
  static deserializeBinaryFromReader(message: ValueSetWorkflowStatus, reader: jspb.BinaryReader): ValueSetWorkflowStatus;
}

export namespace ValueSetWorkflowStatus {
  export type AsObject = {
    id?: proto_stu3_datatypes_pb.String.AsObject,
    valueString?: proto_stu3_datatypes_pb.String.AsObject,
  }
}

