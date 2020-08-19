// package: google.fhir.stu3.proto
// file: proto/stu3/codes.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../proto/annotations_pb";
import * as proto_stu3_datatypes_pb from "../../proto/stu3/datatypes_pb";

export class AbstractTypeCode extends jspb.Message {
  getValue(): AbstractTypeCode.ValueMap[keyof AbstractTypeCode.ValueMap];
  setValue(value: AbstractTypeCode.ValueMap[keyof AbstractTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AbstractTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AbstractTypeCode): AbstractTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AbstractTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AbstractTypeCode;
  static deserializeBinaryFromReader(message: AbstractTypeCode, reader: jspb.BinaryReader): AbstractTypeCode;
}

export namespace AbstractTypeCode {
  export type AsObject = {
    value: AbstractTypeCode.ValueMap[keyof AbstractTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TYPE: 1;
    ANY: 2;
  }

  export const Value: ValueMap;
}

export class AggregationModeCode extends jspb.Message {
  getValue(): AggregationModeCode.ValueMap[keyof AggregationModeCode.ValueMap];
  setValue(value: AggregationModeCode.ValueMap[keyof AggregationModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AggregationModeCode): AggregationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AggregationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregationModeCode;
  static deserializeBinaryFromReader(message: AggregationModeCode, reader: jspb.BinaryReader): AggregationModeCode;
}

export namespace AggregationModeCode {
  export type AsObject = {
    value: AggregationModeCode.ValueMap[keyof AggregationModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONTAINED: 1;
    REFERENCED: 2;
    BUNDLED: 3;
  }

  export const Value: ValueMap;
}

export class BindingStrengthCode extends jspb.Message {
  getValue(): BindingStrengthCode.ValueMap[keyof BindingStrengthCode.ValueMap];
  setValue(value: BindingStrengthCode.ValueMap[keyof BindingStrengthCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingStrengthCode.AsObject;
  static toObject(includeInstance: boolean, msg: BindingStrengthCode): BindingStrengthCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindingStrengthCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingStrengthCode;
  static deserializeBinaryFromReader(message: BindingStrengthCode, reader: jspb.BinaryReader): BindingStrengthCode;
}

export namespace BindingStrengthCode {
  export type AsObject = {
    value: BindingStrengthCode.ValueMap[keyof BindingStrengthCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUIRED: 1;
    EXTENSIBLE: 2;
    PREFERRED: 3;
    EXAMPLE: 4;
  }

  export const Value: ValueMap;
}

export class ConstraintSeverityCode extends jspb.Message {
  getValue(): ConstraintSeverityCode.ValueMap[keyof ConstraintSeverityCode.ValueMap];
  setValue(value: ConstraintSeverityCode.ValueMap[keyof ConstraintSeverityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConstraintSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConstraintSeverityCode): ConstraintSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConstraintSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConstraintSeverityCode;
  static deserializeBinaryFromReader(message: ConstraintSeverityCode, reader: jspb.BinaryReader): ConstraintSeverityCode;
}

export namespace ConstraintSeverityCode {
  export type AsObject = {
    value: ConstraintSeverityCode.ValueMap[keyof ConstraintSeverityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ERROR: 1;
    WARNING: 2;
  }

  export const Value: ValueMap;
}

export class SlicingRulesCode extends jspb.Message {
  getValue(): SlicingRulesCode.ValueMap[keyof SlicingRulesCode.ValueMap];
  setValue(value: SlicingRulesCode.ValueMap[keyof SlicingRulesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlicingRulesCode.AsObject;
  static toObject(includeInstance: boolean, msg: SlicingRulesCode): SlicingRulesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlicingRulesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlicingRulesCode;
  static deserializeBinaryFromReader(message: SlicingRulesCode, reader: jspb.BinaryReader): SlicingRulesCode;
}

export namespace SlicingRulesCode {
  export type AsObject = {
    value: SlicingRulesCode.ValueMap[keyof SlicingRulesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLOSED: 1;
    OPEN: 2;
    OPEN_AT_END: 3;
  }

  export const Value: ValueMap;
}

export class DiscriminatorTypeCode extends jspb.Message {
  getValue(): DiscriminatorTypeCode.ValueMap[keyof DiscriminatorTypeCode.ValueMap];
  setValue(value: DiscriminatorTypeCode.ValueMap[keyof DiscriminatorTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiscriminatorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiscriminatorTypeCode): DiscriminatorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiscriminatorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiscriminatorTypeCode;
  static deserializeBinaryFromReader(message: DiscriminatorTypeCode, reader: jspb.BinaryReader): DiscriminatorTypeCode;
}

export namespace DiscriminatorTypeCode {
  export type AsObject = {
    value: DiscriminatorTypeCode.ValueMap[keyof DiscriminatorTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    VALUE: 1;
    EXISTS: 2;
    PATTERN: 3;
    TYPE: 4;
    PROFILE: 5;
  }

  export const Value: ValueMap;
}

export class PropertyRepresentationCode extends jspb.Message {
  getValue(): PropertyRepresentationCode.ValueMap[keyof PropertyRepresentationCode.ValueMap];
  setValue(value: PropertyRepresentationCode.ValueMap[keyof PropertyRepresentationCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyRepresentationCode.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyRepresentationCode): PropertyRepresentationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyRepresentationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyRepresentationCode;
  static deserializeBinaryFromReader(message: PropertyRepresentationCode, reader: jspb.BinaryReader): PropertyRepresentationCode;
}

export namespace PropertyRepresentationCode {
  export type AsObject = {
    value: PropertyRepresentationCode.ValueMap[keyof PropertyRepresentationCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    XML_ATTR: 1;
    XML_TEXT: 2;
    TYPE_ATTR: 3;
    CDA_TEXT: 4;
    XHTML: 5;
  }

  export const Value: ValueMap;
}

export class ReferenceVersionRulesCode extends jspb.Message {
  getValue(): ReferenceVersionRulesCode.ValueMap[keyof ReferenceVersionRulesCode.ValueMap];
  setValue(value: ReferenceVersionRulesCode.ValueMap[keyof ReferenceVersionRulesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceVersionRulesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceVersionRulesCode): ReferenceVersionRulesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceVersionRulesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceVersionRulesCode;
  static deserializeBinaryFromReader(message: ReferenceVersionRulesCode, reader: jspb.BinaryReader): ReferenceVersionRulesCode;
}

export namespace ReferenceVersionRulesCode {
  export type AsObject = {
    value: ReferenceVersionRulesCode.ValueMap[keyof ReferenceVersionRulesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EITHER: 1;
    INDEPENDENT: 2;
    SPECIFIC: 3;
  }

  export const Value: ValueMap;
}

export class AccountStatusCode extends jspb.Message {
  getValue(): AccountStatusCode.ValueMap[keyof AccountStatusCode.ValueMap];
  setValue(value: AccountStatusCode.ValueMap[keyof AccountStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AccountStatusCode): AccountStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountStatusCode;
  static deserializeBinaryFromReader(message: AccountStatusCode, reader: jspb.BinaryReader): AccountStatusCode;
}

export namespace AccountStatusCode {
  export type AsObject = {
    value: AccountStatusCode.ValueMap[keyof AccountStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class ActionCardinalityBehaviorCode extends jspb.Message {
  getValue(): ActionCardinalityBehaviorCode.ValueMap[keyof ActionCardinalityBehaviorCode.ValueMap];
  setValue(value: ActionCardinalityBehaviorCode.ValueMap[keyof ActionCardinalityBehaviorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionCardinalityBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionCardinalityBehaviorCode): ActionCardinalityBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionCardinalityBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionCardinalityBehaviorCode;
  static deserializeBinaryFromReader(message: ActionCardinalityBehaviorCode, reader: jspb.BinaryReader): ActionCardinalityBehaviorCode;
}

export namespace ActionCardinalityBehaviorCode {
  export type AsObject = {
    value: ActionCardinalityBehaviorCode.ValueMap[keyof ActionCardinalityBehaviorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SINGLE: 1;
    MULTIPLE: 2;
  }

  export const Value: ValueMap;
}

export class ActionConditionKindCode extends jspb.Message {
  getValue(): ActionConditionKindCode.ValueMap[keyof ActionConditionKindCode.ValueMap];
  setValue(value: ActionConditionKindCode.ValueMap[keyof ActionConditionKindCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionConditionKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionConditionKindCode): ActionConditionKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionConditionKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionConditionKindCode;
  static deserializeBinaryFromReader(message: ActionConditionKindCode, reader: jspb.BinaryReader): ActionConditionKindCode;
}

export namespace ActionConditionKindCode {
  export type AsObject = {
    value: ActionConditionKindCode.ValueMap[keyof ActionConditionKindCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    APPLICABILITY: 1;
    START: 2;
    STOP: 3;
  }

  export const Value: ValueMap;
}

export class ActionGroupingBehaviorCode extends jspb.Message {
  getValue(): ActionGroupingBehaviorCode.ValueMap[keyof ActionGroupingBehaviorCode.ValueMap];
  setValue(value: ActionGroupingBehaviorCode.ValueMap[keyof ActionGroupingBehaviorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionGroupingBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionGroupingBehaviorCode): ActionGroupingBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionGroupingBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionGroupingBehaviorCode;
  static deserializeBinaryFromReader(message: ActionGroupingBehaviorCode, reader: jspb.BinaryReader): ActionGroupingBehaviorCode;
}

export namespace ActionGroupingBehaviorCode {
  export type AsObject = {
    value: ActionGroupingBehaviorCode.ValueMap[keyof ActionGroupingBehaviorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    VISUAL_GROUP: 1;
    LOGICAL_GROUP: 2;
    SENTENCE_GROUP: 3;
  }

  export const Value: ValueMap;
}

export class ActionListCode extends jspb.Message {
  getValue(): ActionListCode.ValueMap[keyof ActionListCode.ValueMap];
  setValue(value: ActionListCode.ValueMap[keyof ActionListCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionListCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionListCode): ActionListCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionListCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionListCode;
  static deserializeBinaryFromReader(message: ActionListCode, reader: jspb.BinaryReader): ActionListCode;
}

export namespace ActionListCode {
  export type AsObject = {
    value: ActionListCode.ValueMap[keyof ActionListCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CANCEL: 1;
    POLL: 2;
    REPROCESS: 3;
    STATUS: 4;
  }

  export const Value: ValueMap;
}

export class ActionParticipantTypeCode extends jspb.Message {
  getValue(): ActionParticipantTypeCode.ValueMap[keyof ActionParticipantTypeCode.ValueMap];
  setValue(value: ActionParticipantTypeCode.ValueMap[keyof ActionParticipantTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionParticipantTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionParticipantTypeCode): ActionParticipantTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionParticipantTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionParticipantTypeCode;
  static deserializeBinaryFromReader(message: ActionParticipantTypeCode, reader: jspb.BinaryReader): ActionParticipantTypeCode;
}

export namespace ActionParticipantTypeCode {
  export type AsObject = {
    value: ActionParticipantTypeCode.ValueMap[keyof ActionParticipantTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PATIENT: 1;
    PRACTITIONER: 2;
    RELATED_PERSON: 3;
  }

  export const Value: ValueMap;
}

export class ActionPrecheckBehaviorCode extends jspb.Message {
  getValue(): ActionPrecheckBehaviorCode.ValueMap[keyof ActionPrecheckBehaviorCode.ValueMap];
  setValue(value: ActionPrecheckBehaviorCode.ValueMap[keyof ActionPrecheckBehaviorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionPrecheckBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionPrecheckBehaviorCode): ActionPrecheckBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionPrecheckBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionPrecheckBehaviorCode;
  static deserializeBinaryFromReader(message: ActionPrecheckBehaviorCode, reader: jspb.BinaryReader): ActionPrecheckBehaviorCode;
}

export namespace ActionPrecheckBehaviorCode {
  export type AsObject = {
    value: ActionPrecheckBehaviorCode.ValueMap[keyof ActionPrecheckBehaviorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    YES: 1;
    NO: 2;
  }

  export const Value: ValueMap;
}

export class ActionRelationshipTypeCode extends jspb.Message {
  getValue(): ActionRelationshipTypeCode.ValueMap[keyof ActionRelationshipTypeCode.ValueMap];
  setValue(value: ActionRelationshipTypeCode.ValueMap[keyof ActionRelationshipTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionRelationshipTypeCode): ActionRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionRelationshipTypeCode;
  static deserializeBinaryFromReader(message: ActionRelationshipTypeCode, reader: jspb.BinaryReader): ActionRelationshipTypeCode;
}

export namespace ActionRelationshipTypeCode {
  export type AsObject = {
    value: ActionRelationshipTypeCode.ValueMap[keyof ActionRelationshipTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BEFORE_START: 1;
    BEFORE: 2;
    BEFORE_END: 3;
    CONCURRENT_WITH_START: 4;
    CONCURRENT: 5;
    CONCURRENT_WITH_END: 6;
    AFTER_START: 7;
    AFTER: 8;
    AFTER_END: 9;
  }

  export const Value: ValueMap;
}

export class ActionRequiredBehaviorCode extends jspb.Message {
  getValue(): ActionRequiredBehaviorCode.ValueMap[keyof ActionRequiredBehaviorCode.ValueMap];
  setValue(value: ActionRequiredBehaviorCode.ValueMap[keyof ActionRequiredBehaviorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionRequiredBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionRequiredBehaviorCode): ActionRequiredBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionRequiredBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionRequiredBehaviorCode;
  static deserializeBinaryFromReader(message: ActionRequiredBehaviorCode, reader: jspb.BinaryReader): ActionRequiredBehaviorCode;
}

export namespace ActionRequiredBehaviorCode {
  export type AsObject = {
    value: ActionRequiredBehaviorCode.ValueMap[keyof ActionRequiredBehaviorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MUST: 1;
    COULD: 2;
    MUST_UNLESS_DOCUMENTED: 3;
  }

  export const Value: ValueMap;
}

export class ActionSelectionBehaviorCode extends jspb.Message {
  getValue(): ActionSelectionBehaviorCode.ValueMap[keyof ActionSelectionBehaviorCode.ValueMap];
  setValue(value: ActionSelectionBehaviorCode.ValueMap[keyof ActionSelectionBehaviorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionSelectionBehaviorCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionSelectionBehaviorCode): ActionSelectionBehaviorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionSelectionBehaviorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionSelectionBehaviorCode;
  static deserializeBinaryFromReader(message: ActionSelectionBehaviorCode, reader: jspb.BinaryReader): ActionSelectionBehaviorCode;
}

export namespace ActionSelectionBehaviorCode {
  export type AsObject = {
    value: ActionSelectionBehaviorCode.ValueMap[keyof ActionSelectionBehaviorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ANY: 1;
    ALL: 2;
    ALL_OR_NONE: 3;
    EXACTLY_ONE: 4;
    AT_MOST_ONE: 5;
    ONE_OR_MORE: 6;
  }

  export const Value: ValueMap;
}

export class ActionTypeCode extends jspb.Message {
  getValue(): ActionTypeCode.ValueMap[keyof ActionTypeCode.ValueMap];
  setValue(value: ActionTypeCode.ValueMap[keyof ActionTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActionTypeCode): ActionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionTypeCode;
  static deserializeBinaryFromReader(message: ActionTypeCode, reader: jspb.BinaryReader): ActionTypeCode;
}

export namespace ActionTypeCode {
  export type AsObject = {
    value: ActionTypeCode.ValueMap[keyof ActionTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CREATE: 1;
    UPDATE: 2;
    REMOVE: 3;
    FIRE_EVENT: 4;
  }

  export const Value: ValueMap;
}

export class ActivityDefinitionCategoryCode extends jspb.Message {
  getValue(): ActivityDefinitionCategoryCode.ValueMap[keyof ActivityDefinitionCategoryCode.ValueMap];
  setValue(value: ActivityDefinitionCategoryCode.ValueMap[keyof ActivityDefinitionCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityDefinitionCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityDefinitionCategoryCode): ActivityDefinitionCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivityDefinitionCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityDefinitionCategoryCode;
  static deserializeBinaryFromReader(message: ActivityDefinitionCategoryCode, reader: jspb.BinaryReader): ActivityDefinitionCategoryCode;
}

export namespace ActivityDefinitionCategoryCode {
  export type AsObject = {
    value: ActivityDefinitionCategoryCode.ValueMap[keyof ActivityDefinitionCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TREATMENT: 1;
    EDUCATION: 2;
    ASSESSMENT: 3;
  }

  export const Value: ValueMap;
}

export class AdministrativeGenderCode extends jspb.Message {
  getValue(): AdministrativeGenderCode.ValueMap[keyof AdministrativeGenderCode.ValueMap];
  setValue(value: AdministrativeGenderCode.ValueMap[keyof AdministrativeGenderCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdministrativeGenderCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdministrativeGenderCode): AdministrativeGenderCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdministrativeGenderCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdministrativeGenderCode;
  static deserializeBinaryFromReader(message: AdministrativeGenderCode, reader: jspb.BinaryReader): AdministrativeGenderCode;
}

export namespace AdministrativeGenderCode {
  export type AsObject = {
    value: AdministrativeGenderCode.ValueMap[keyof AdministrativeGenderCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MALE: 1;
    FEMALE: 2;
    OTHER: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class AdverseEventCategoryCode extends jspb.Message {
  getValue(): AdverseEventCategoryCode.ValueMap[keyof AdverseEventCategoryCode.ValueMap];
  setValue(value: AdverseEventCategoryCode.ValueMap[keyof AdverseEventCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventCategoryCode): AdverseEventCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventCategoryCode;
  static deserializeBinaryFromReader(message: AdverseEventCategoryCode, reader: jspb.BinaryReader): AdverseEventCategoryCode;
}

export namespace AdverseEventCategoryCode {
  export type AsObject = {
    value: AdverseEventCategoryCode.ValueMap[keyof AdverseEventCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AE: 1;
    PAE: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventCausalityAssessmentCode extends jspb.Message {
  getValue(): AdverseEventCausalityAssessmentCode.ValueMap[keyof AdverseEventCausalityAssessmentCode.ValueMap];
  setValue(value: AdverseEventCausalityAssessmentCode.ValueMap[keyof AdverseEventCausalityAssessmentCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventCausalityAssessmentCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventCausalityAssessmentCode): AdverseEventCausalityAssessmentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventCausalityAssessmentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventCausalityAssessmentCode;
  static deserializeBinaryFromReader(message: AdverseEventCausalityAssessmentCode, reader: jspb.BinaryReader): AdverseEventCausalityAssessmentCode;
}

export namespace AdverseEventCausalityAssessmentCode {
  export type AsObject = {
    value: AdverseEventCausalityAssessmentCode.ValueMap[keyof AdverseEventCausalityAssessmentCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ASSESS1: 1;
    ASSESS2: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventCausalityCode extends jspb.Message {
  getValue(): AdverseEventCausalityCode.ValueMap[keyof AdverseEventCausalityCode.ValueMap];
  setValue(value: AdverseEventCausalityCode.ValueMap[keyof AdverseEventCausalityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventCausalityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventCausalityCode): AdverseEventCausalityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventCausalityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventCausalityCode;
  static deserializeBinaryFromReader(message: AdverseEventCausalityCode, reader: jspb.BinaryReader): AdverseEventCausalityCode;
}

export namespace AdverseEventCausalityCode {
  export type AsObject = {
    value: AdverseEventCausalityCode.ValueMap[keyof AdverseEventCausalityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CAUSALITY1: 1;
    CAUSALITY2: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventCausalityMethodCode extends jspb.Message {
  getValue(): AdverseEventCausalityMethodCode.ValueMap[keyof AdverseEventCausalityMethodCode.ValueMap];
  setValue(value: AdverseEventCausalityMethodCode.ValueMap[keyof AdverseEventCausalityMethodCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventCausalityMethodCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventCausalityMethodCode): AdverseEventCausalityMethodCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventCausalityMethodCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventCausalityMethodCode;
  static deserializeBinaryFromReader(message: AdverseEventCausalityMethodCode, reader: jspb.BinaryReader): AdverseEventCausalityMethodCode;
}

export namespace AdverseEventCausalityMethodCode {
  export type AsObject = {
    value: AdverseEventCausalityMethodCode.ValueMap[keyof AdverseEventCausalityMethodCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    METHOD1: 1;
    METHOD2: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventCausalityResultCode extends jspb.Message {
  getValue(): AdverseEventCausalityResultCode.ValueMap[keyof AdverseEventCausalityResultCode.ValueMap];
  setValue(value: AdverseEventCausalityResultCode.ValueMap[keyof AdverseEventCausalityResultCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventCausalityResultCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventCausalityResultCode): AdverseEventCausalityResultCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventCausalityResultCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventCausalityResultCode;
  static deserializeBinaryFromReader(message: AdverseEventCausalityResultCode, reader: jspb.BinaryReader): AdverseEventCausalityResultCode;
}

export namespace AdverseEventCausalityResultCode {
  export type AsObject = {
    value: AdverseEventCausalityResultCode.ValueMap[keyof AdverseEventCausalityResultCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESULT1: 1;
    RESULT2: 2;
  }

  export const Value: ValueMap;
}

export class AdverseEventOutcomeCode extends jspb.Message {
  getValue(): AdverseEventOutcomeCode.ValueMap[keyof AdverseEventOutcomeCode.ValueMap];
  setValue(value: AdverseEventOutcomeCode.ValueMap[keyof AdverseEventOutcomeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventOutcomeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventOutcomeCode): AdverseEventOutcomeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventOutcomeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventOutcomeCode;
  static deserializeBinaryFromReader(message: AdverseEventOutcomeCode, reader: jspb.BinaryReader): AdverseEventOutcomeCode;
}

export namespace AdverseEventOutcomeCode {
  export type AsObject = {
    value: AdverseEventOutcomeCode.ValueMap[keyof AdverseEventOutcomeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESOLVED: 1;
    RECOVERING: 2;
    ONGOING: 3;
    RESOLVEDWITHSEQUELAE: 4;
    FATAL: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class AdverseEventSeriousnessCode extends jspb.Message {
  getValue(): AdverseEventSeriousnessCode.ValueMap[keyof AdverseEventSeriousnessCode.ValueMap];
  setValue(value: AdverseEventSeriousnessCode.ValueMap[keyof AdverseEventSeriousnessCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdverseEventSeriousnessCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdverseEventSeriousnessCode): AdverseEventSeriousnessCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdverseEventSeriousnessCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdverseEventSeriousnessCode;
  static deserializeBinaryFromReader(message: AdverseEventSeriousnessCode, reader: jspb.BinaryReader): AdverseEventSeriousnessCode;
}

export namespace AdverseEventSeriousnessCode {
  export type AsObject = {
    value: AdverseEventSeriousnessCode.ValueMap[keyof AdverseEventSeriousnessCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MILD: 1;
    MODERATE: 2;
    SEVERE: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceSubstanceExposureRiskCode extends jspb.Message {
  getValue(): AllergyIntoleranceSubstanceExposureRiskCode.ValueMap[keyof AllergyIntoleranceSubstanceExposureRiskCode.ValueMap];
  setValue(value: AllergyIntoleranceSubstanceExposureRiskCode.ValueMap[keyof AllergyIntoleranceSubstanceExposureRiskCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSubstanceExposureRiskCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSubstanceExposureRiskCode): AllergyIntoleranceSubstanceExposureRiskCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSubstanceExposureRiskCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSubstanceExposureRiskCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSubstanceExposureRiskCode, reader: jspb.BinaryReader): AllergyIntoleranceSubstanceExposureRiskCode;
}

export namespace AllergyIntoleranceSubstanceExposureRiskCode {
  export type AsObject = {
    value: AllergyIntoleranceSubstanceExposureRiskCode.ValueMap[keyof AllergyIntoleranceSubstanceExposureRiskCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    KNOWN_REACTION_RISK: 1;
    NO_KNOWN_REACTION_RISK: 2;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceClinicalStatusCode extends jspb.Message {
  getValue(): AllergyIntoleranceClinicalStatusCode.ValueMap[keyof AllergyIntoleranceClinicalStatusCode.ValueMap];
  setValue(value: AllergyIntoleranceClinicalStatusCode.ValueMap[keyof AllergyIntoleranceClinicalStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceClinicalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceClinicalStatusCode): AllergyIntoleranceClinicalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceClinicalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceClinicalStatusCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceClinicalStatusCode, reader: jspb.BinaryReader): AllergyIntoleranceClinicalStatusCode;
}

export namespace AllergyIntoleranceClinicalStatusCode {
  export type AsObject = {
    value: AllergyIntoleranceClinicalStatusCode.ValueMap[keyof AllergyIntoleranceClinicalStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    RESOLVED: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceCategoryCode extends jspb.Message {
  getValue(): AllergyIntoleranceCategoryCode.ValueMap[keyof AllergyIntoleranceCategoryCode.ValueMap];
  setValue(value: AllergyIntoleranceCategoryCode.ValueMap[keyof AllergyIntoleranceCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCategoryCode): AllergyIntoleranceCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCategoryCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCategoryCode, reader: jspb.BinaryReader): AllergyIntoleranceCategoryCode;
}

export namespace AllergyIntoleranceCategoryCode {
  export type AsObject = {
    value: AllergyIntoleranceCategoryCode.ValueMap[keyof AllergyIntoleranceCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FOOD: 1;
    MEDICATION: 2;
    ENVIRONMENT: 3;
    BIOLOGIC: 4;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceCriticalityCode extends jspb.Message {
  getValue(): AllergyIntoleranceCriticalityCode.ValueMap[keyof AllergyIntoleranceCriticalityCode.ValueMap];
  setValue(value: AllergyIntoleranceCriticalityCode.ValueMap[keyof AllergyIntoleranceCriticalityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCriticalityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCriticalityCode): AllergyIntoleranceCriticalityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCriticalityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCriticalityCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCriticalityCode, reader: jspb.BinaryReader): AllergyIntoleranceCriticalityCode;
}

export namespace AllergyIntoleranceCriticalityCode {
  export type AsObject = {
    value: AllergyIntoleranceCriticalityCode.ValueMap[keyof AllergyIntoleranceCriticalityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LOW: 1;
    HIGH: 2;
    UNABLE_TO_ASSESS: 3;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceTypeCode extends jspb.Message {
  getValue(): AllergyIntoleranceTypeCode.ValueMap[keyof AllergyIntoleranceTypeCode.ValueMap];
  setValue(value: AllergyIntoleranceTypeCode.ValueMap[keyof AllergyIntoleranceTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceTypeCode): AllergyIntoleranceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceTypeCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceTypeCode, reader: jspb.BinaryReader): AllergyIntoleranceTypeCode;
}

export namespace AllergyIntoleranceTypeCode {
  export type AsObject = {
    value: AllergyIntoleranceTypeCode.ValueMap[keyof AllergyIntoleranceTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALLERGY: 1;
    INTOLERANCE: 2;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceVerificationStatusCode extends jspb.Message {
  getValue(): AllergyIntoleranceVerificationStatusCode.ValueMap[keyof AllergyIntoleranceVerificationStatusCode.ValueMap];
  setValue(value: AllergyIntoleranceVerificationStatusCode.ValueMap[keyof AllergyIntoleranceVerificationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceVerificationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceVerificationStatusCode): AllergyIntoleranceVerificationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceVerificationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceVerificationStatusCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceVerificationStatusCode, reader: jspb.BinaryReader): AllergyIntoleranceVerificationStatusCode;
}

export namespace AllergyIntoleranceVerificationStatusCode {
  export type AsObject = {
    value: AllergyIntoleranceVerificationStatusCode.ValueMap[keyof AllergyIntoleranceVerificationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNCONFIRMED: 1;
    CONFIRMED: 2;
    REFUTED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class GenderStatusCode extends jspb.Message {
  getValue(): GenderStatusCode.ValueMap[keyof GenderStatusCode.ValueMap];
  setValue(value: GenderStatusCode.ValueMap[keyof GenderStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenderStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GenderStatusCode): GenderStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenderStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenderStatusCode;
  static deserializeBinaryFromReader(message: GenderStatusCode, reader: jspb.BinaryReader): GenderStatusCode;
}

export namespace GenderStatusCode {
  export type AsObject = {
    value: GenderStatusCode.ValueMap[keyof GenderStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NEUTERED: 1;
    INTACT: 2;
    UNKNOWN: 3;
  }

  export const Value: ValueMap;
}

export class AppointmentStatusCode extends jspb.Message {
  getValue(): AppointmentStatusCode.ValueMap[keyof AppointmentStatusCode.ValueMap];
  setValue(value: AppointmentStatusCode.ValueMap[keyof AppointmentStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AppointmentStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: AppointmentStatusCode): AppointmentStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AppointmentStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AppointmentStatusCode;
  static deserializeBinaryFromReader(message: AppointmentStatusCode, reader: jspb.BinaryReader): AppointmentStatusCode;
}

export namespace AppointmentStatusCode {
  export type AsObject = {
    value: AppointmentStatusCode.ValueMap[keyof AppointmentStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    PENDING: 2;
    BOOKED: 3;
    ARRIVED: 4;
    FULFILLED: 5;
    CANCELLED: 6;
    NOSHOW: 7;
    ENTERED_IN_ERROR: 8;
  }

  export const Value: ValueMap;
}

export class AssertionDirectionTypeCode extends jspb.Message {
  getValue(): AssertionDirectionTypeCode.ValueMap[keyof AssertionDirectionTypeCode.ValueMap];
  setValue(value: AssertionDirectionTypeCode.ValueMap[keyof AssertionDirectionTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionDirectionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionDirectionTypeCode): AssertionDirectionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionDirectionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionDirectionTypeCode;
  static deserializeBinaryFromReader(message: AssertionDirectionTypeCode, reader: jspb.BinaryReader): AssertionDirectionTypeCode;
}

export namespace AssertionDirectionTypeCode {
  export type AsObject = {
    value: AssertionDirectionTypeCode.ValueMap[keyof AssertionDirectionTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESPONSE: 1;
    REQUEST: 2;
  }

  export const Value: ValueMap;
}

export class AssertionOperatorTypeCode extends jspb.Message {
  getValue(): AssertionOperatorTypeCode.ValueMap[keyof AssertionOperatorTypeCode.ValueMap];
  setValue(value: AssertionOperatorTypeCode.ValueMap[keyof AssertionOperatorTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionOperatorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionOperatorTypeCode): AssertionOperatorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionOperatorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionOperatorTypeCode;
  static deserializeBinaryFromReader(message: AssertionOperatorTypeCode, reader: jspb.BinaryReader): AssertionOperatorTypeCode;
}

export namespace AssertionOperatorTypeCode {
  export type AsObject = {
    value: AssertionOperatorTypeCode.ValueMap[keyof AssertionOperatorTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQUALS: 1;
    NOTEQUALS: 2;
    IN: 3;
    NOTIN: 4;
    GREATERTHAN: 5;
    LESSTHAN: 6;
    EMPTY: 7;
    NOTEMPTY: 8;
    CONTAINS: 9;
    NOTCONTAINS: 10;
    EVAL: 11;
  }

  export const Value: ValueMap;
}

export class AssertionResponseTypesCode extends jspb.Message {
  getValue(): AssertionResponseTypesCode.ValueMap[keyof AssertionResponseTypesCode.ValueMap];
  setValue(value: AssertionResponseTypesCode.ValueMap[keyof AssertionResponseTypesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssertionResponseTypesCode.AsObject;
  static toObject(includeInstance: boolean, msg: AssertionResponseTypesCode): AssertionResponseTypesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AssertionResponseTypesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssertionResponseTypesCode;
  static deserializeBinaryFromReader(message: AssertionResponseTypesCode, reader: jspb.BinaryReader): AssertionResponseTypesCode;
}

export namespace AssertionResponseTypesCode {
  export type AsObject = {
    value: AssertionResponseTypesCode.ValueMap[keyof AssertionResponseTypesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OKAY: 1;
    CREATED: 2;
    NOCONTENT: 3;
    NOTMODIFIED: 4;
    BAD: 5;
    FORBIDDEN: 6;
    NOTFOUND: 7;
    METHODNOTALLOWED: 8;
    CONFLICT: 9;
    GONE: 10;
    PRECONDITIONFAILED: 11;
    UNPROCESSABLE: 12;
  }

  export const Value: ValueMap;
}

export class AuditEventActionCode extends jspb.Message {
  getValue(): AuditEventActionCode.ValueMap[keyof AuditEventActionCode.ValueMap];
  setValue(value: AuditEventActionCode.ValueMap[keyof AuditEventActionCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventActionCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventActionCode): AuditEventActionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventActionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventActionCode;
  static deserializeBinaryFromReader(message: AuditEventActionCode, reader: jspb.BinaryReader): AuditEventActionCode;
}

export namespace AuditEventActionCode {
  export type AsObject = {
    value: AuditEventActionCode.ValueMap[keyof AuditEventActionCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    C: 1;
    R: 2;
    U: 3;
    D: 4;
    E: 5;
  }

  export const Value: ValueMap;
}

export class AuditEventOutcomeCode extends jspb.Message {
  getValue(): AuditEventOutcomeCode.ValueMap[keyof AuditEventOutcomeCode.ValueMap];
  setValue(value: AuditEventOutcomeCode.ValueMap[keyof AuditEventOutcomeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventOutcomeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventOutcomeCode): AuditEventOutcomeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventOutcomeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventOutcomeCode;
  static deserializeBinaryFromReader(message: AuditEventOutcomeCode, reader: jspb.BinaryReader): AuditEventOutcomeCode;
}

export namespace AuditEventOutcomeCode {
  export type AsObject = {
    value: AuditEventOutcomeCode.ValueMap[keyof AuditEventOutcomeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUCCESS: 1;
    MINOR_FAILURE: 2;
    SERIOUS_FAILURE: 3;
    MAJOR_FAILURE: 4;
  }

  export const Value: ValueMap;
}

export class BasicResourceTypesCode extends jspb.Message {
  getValue(): BasicResourceTypesCode.ValueMap[keyof BasicResourceTypesCode.ValueMap];
  setValue(value: BasicResourceTypesCode.ValueMap[keyof BasicResourceTypesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BasicResourceTypesCode.AsObject;
  static toObject(includeInstance: boolean, msg: BasicResourceTypesCode): BasicResourceTypesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BasicResourceTypesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BasicResourceTypesCode;
  static deserializeBinaryFromReader(message: BasicResourceTypesCode, reader: jspb.BinaryReader): BasicResourceTypesCode;
}

export namespace BasicResourceTypesCode {
  export type AsObject = {
    value: BasicResourceTypesCode.ValueMap[keyof BasicResourceTypesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONSENT: 1;
    REFERRAL: 2;
    ADVEVENT: 3;
    APTMTREQ: 4;
    TRANSFER: 5;
    DIET: 6;
    ADMINACT: 7;
    EXPOSURE: 8;
    INVESTIGATION: 9;
    ACCOUNT: 10;
    INVOICE: 11;
    ADJUDICAT: 12;
    PREDETREQ: 13;
    PREDETERMINE: 14;
    STUDY: 15;
    PROTOCOL: 16;
  }

  export const Value: ValueMap;
}

export class BundleTypeCode extends jspb.Message {
  getValue(): BundleTypeCode.ValueMap[keyof BundleTypeCode.ValueMap];
  setValue(value: BundleTypeCode.ValueMap[keyof BundleTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BundleTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: BundleTypeCode): BundleTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BundleTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BundleTypeCode;
  static deserializeBinaryFromReader(message: BundleTypeCode, reader: jspb.BinaryReader): BundleTypeCode;
}

export namespace BundleTypeCode {
  export type AsObject = {
    value: BundleTypeCode.ValueMap[keyof BundleTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DOCUMENT: 1;
    MESSAGE: 2;
    TRANSACTION: 3;
    TRANSACTION_RESPONSE: 4;
    BATCH: 5;
    BATCH_RESPONSE: 6;
    HISTORY: 7;
    SEARCHSET: 8;
    COLLECTION: 9;
  }

  export const Value: ValueMap;
}

export class CapabilityStatementKindCode extends jspb.Message {
  getValue(): CapabilityStatementKindCode.ValueMap[keyof CapabilityStatementKindCode.ValueMap];
  setValue(value: CapabilityStatementKindCode.ValueMap[keyof CapabilityStatementKindCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CapabilityStatementKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: CapabilityStatementKindCode): CapabilityStatementKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CapabilityStatementKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CapabilityStatementKindCode;
  static deserializeBinaryFromReader(message: CapabilityStatementKindCode, reader: jspb.BinaryReader): CapabilityStatementKindCode;
}

export namespace CapabilityStatementKindCode {
  export type AsObject = {
    value: CapabilityStatementKindCode.ValueMap[keyof CapabilityStatementKindCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    CAPABILITY: 2;
    REQUIREMENTS: 3;
  }

  export const Value: ValueMap;
}

export class CarePlanActivityCategoryCode extends jspb.Message {
  getValue(): CarePlanActivityCategoryCode.ValueMap[keyof CarePlanActivityCategoryCode.ValueMap];
  setValue(value: CarePlanActivityCategoryCode.ValueMap[keyof CarePlanActivityCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityCategoryCode): CarePlanActivityCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityCategoryCode;
  static deserializeBinaryFromReader(message: CarePlanActivityCategoryCode, reader: jspb.BinaryReader): CarePlanActivityCategoryCode;
}

export namespace CarePlanActivityCategoryCode {
  export type AsObject = {
    value: CarePlanActivityCategoryCode.ValueMap[keyof CarePlanActivityCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DIET: 1;
    DRUG: 2;
    ENCOUNTER: 3;
    OBSERVATION: 4;
    PROCEDURE: 5;
    SUPPLY: 6;
    OTHER: 7;
  }

  export const Value: ValueMap;
}

export class CarePlanActivityStatusCode extends jspb.Message {
  getValue(): CarePlanActivityStatusCode.ValueMap[keyof CarePlanActivityStatusCode.ValueMap];
  setValue(value: CarePlanActivityStatusCode.ValueMap[keyof CarePlanActivityStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanActivityStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanActivityStatusCode): CarePlanActivityStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanActivityStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanActivityStatusCode;
  static deserializeBinaryFromReader(message: CarePlanActivityStatusCode, reader: jspb.BinaryReader): CarePlanActivityStatusCode;
}

export namespace CarePlanActivityStatusCode {
  export type AsObject = {
    value: CarePlanActivityStatusCode.ValueMap[keyof CarePlanActivityStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_STARTED: 1;
    SCHEDULED: 2;
    IN_PROGRESS: 3;
    ON_HOLD: 4;
    COMPLETED: 5;
    CANCELLED: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class CarePlanIntentCode extends jspb.Message {
  getValue(): CarePlanIntentCode.ValueMap[keyof CarePlanIntentCode.ValueMap];
  setValue(value: CarePlanIntentCode.ValueMap[keyof CarePlanIntentCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanIntentCode): CarePlanIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanIntentCode;
  static deserializeBinaryFromReader(message: CarePlanIntentCode, reader: jspb.BinaryReader): CarePlanIntentCode;
}

export namespace CarePlanIntentCode {
  export type AsObject = {
    value: CarePlanIntentCode.ValueMap[keyof CarePlanIntentCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    ORDER: 3;
    OPTION: 4;
  }

  export const Value: ValueMap;
}

export class CarePlanStatusCode extends jspb.Message {
  getValue(): CarePlanStatusCode.ValueMap[keyof CarePlanStatusCode.ValueMap];
  setValue(value: CarePlanStatusCode.ValueMap[keyof CarePlanStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlanStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlanStatusCode): CarePlanStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlanStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlanStatusCode;
  static deserializeBinaryFromReader(message: CarePlanStatusCode, reader: jspb.BinaryReader): CarePlanStatusCode;
}

export namespace CarePlanStatusCode {
  export type AsObject = {
    value: CarePlanStatusCode.ValueMap[keyof CarePlanStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    COMPLETED: 4;
    ENTERED_IN_ERROR: 5;
    CANCELLED: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class CareTeamCategoryCode extends jspb.Message {
  getValue(): CareTeamCategoryCode.ValueMap[keyof CareTeamCategoryCode.ValueMap];
  setValue(value: CareTeamCategoryCode.ValueMap[keyof CareTeamCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CareTeamCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: CareTeamCategoryCode): CareTeamCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CareTeamCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CareTeamCategoryCode;
  static deserializeBinaryFromReader(message: CareTeamCategoryCode, reader: jspb.BinaryReader): CareTeamCategoryCode;
}

export namespace CareTeamCategoryCode {
  export type AsObject = {
    value: CareTeamCategoryCode.ValueMap[keyof CareTeamCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EVENT: 1;
    ENCOUNTER: 2;
    EPISODE: 3;
    LONGITUDINAL: 4;
    CONDITION: 5;
    CLINICAL_RESEARCH: 6;
  }

  export const Value: ValueMap;
}

export class CareTeamStatusCode extends jspb.Message {
  getValue(): CareTeamStatusCode.ValueMap[keyof CareTeamStatusCode.ValueMap];
  setValue(value: CareTeamStatusCode.ValueMap[keyof CareTeamStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CareTeamStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CareTeamStatusCode): CareTeamStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CareTeamStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CareTeamStatusCode;
  static deserializeBinaryFromReader(message: CareTeamStatusCode, reader: jspb.BinaryReader): CareTeamStatusCode;
}

export namespace CareTeamStatusCode {
  export type AsObject = {
    value: CareTeamStatusCode.ValueMap[keyof CareTeamStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    INACTIVE: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class ChargeItemStatusCode extends jspb.Message {
  getValue(): ChargeItemStatusCode.ValueMap[keyof ChargeItemStatusCode.ValueMap];
  setValue(value: ChargeItemStatusCode.ValueMap[keyof ChargeItemStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChargeItemStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ChargeItemStatusCode): ChargeItemStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChargeItemStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChargeItemStatusCode;
  static deserializeBinaryFromReader(message: ChargeItemStatusCode, reader: jspb.BinaryReader): ChargeItemStatusCode;
}

export namespace ChargeItemStatusCode {
  export type AsObject = {
    value: ChargeItemStatusCode.ValueMap[keyof ChargeItemStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    BILLABLE: 2;
    NOT_BILLABLE: 3;
    ABORTED: 4;
    BILLED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class ChoiceListOrientationCode extends jspb.Message {
  getValue(): ChoiceListOrientationCode.ValueMap[keyof ChoiceListOrientationCode.ValueMap];
  setValue(value: ChoiceListOrientationCode.ValueMap[keyof ChoiceListOrientationCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChoiceListOrientationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ChoiceListOrientationCode): ChoiceListOrientationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChoiceListOrientationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChoiceListOrientationCode;
  static deserializeBinaryFromReader(message: ChoiceListOrientationCode, reader: jspb.BinaryReader): ChoiceListOrientationCode;
}

export namespace ChoiceListOrientationCode {
  export type AsObject = {
    value: ChoiceListOrientationCode.ValueMap[keyof ChoiceListOrientationCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HORIZONTAL: 1;
    VERTICAL: 2;
  }

  export const Value: ValueMap;
}

export class UseCode extends jspb.Message {
  getValue(): UseCode.ValueMap[keyof UseCode.ValueMap];
  setValue(value: UseCode.ValueMap[keyof UseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseCode.AsObject;
  static toObject(includeInstance: boolean, msg: UseCode): UseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseCode;
  static deserializeBinaryFromReader(message: UseCode, reader: jspb.BinaryReader): UseCode;
}

export namespace UseCode {
  export type AsObject = {
    value: UseCode.ValueMap[keyof UseCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETE: 1;
    PROPOSED: 2;
    EXPLORATORY: 3;
    OTHER: 4;
  }

  export const Value: ValueMap;
}

export class ClassificationOrContextCode extends jspb.Message {
  getValue(): ClassificationOrContextCode.ValueMap[keyof ClassificationOrContextCode.ValueMap];
  setValue(value: ClassificationOrContextCode.ValueMap[keyof ClassificationOrContextCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClassificationOrContextCode.AsObject;
  static toObject(includeInstance: boolean, msg: ClassificationOrContextCode): ClassificationOrContextCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClassificationOrContextCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClassificationOrContextCode;
  static deserializeBinaryFromReader(message: ClassificationOrContextCode, reader: jspb.BinaryReader): ClassificationOrContextCode;
}

export namespace ClassificationOrContextCode {
  export type AsObject = {
    value: ClassificationOrContextCode.ValueMap[keyof ClassificationOrContextCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLASSIFICATION: 1;
    CONTEXT: 2;
  }

  export const Value: ValueMap;
}

export class ClinicalImpressionStatusCode extends jspb.Message {
  getValue(): ClinicalImpressionStatusCode.ValueMap[keyof ClinicalImpressionStatusCode.ValueMap];
  setValue(value: ClinicalImpressionStatusCode.ValueMap[keyof ClinicalImpressionStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClinicalImpressionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ClinicalImpressionStatusCode): ClinicalImpressionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClinicalImpressionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClinicalImpressionStatusCode;
  static deserializeBinaryFromReader(message: ClinicalImpressionStatusCode, reader: jspb.BinaryReader): ClinicalImpressionStatusCode;
}

export namespace ClinicalImpressionStatusCode {
  export type AsObject = {
    value: ClinicalImpressionStatusCode.ValueMap[keyof ClinicalImpressionStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class CodeSystemContentModeCode extends jspb.Message {
  getValue(): CodeSystemContentModeCode.ValueMap[keyof CodeSystemContentModeCode.ValueMap];
  setValue(value: CodeSystemContentModeCode.ValueMap[keyof CodeSystemContentModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemContentModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemContentModeCode): CodeSystemContentModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemContentModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemContentModeCode;
  static deserializeBinaryFromReader(message: CodeSystemContentModeCode, reader: jspb.BinaryReader): CodeSystemContentModeCode;
}

export namespace CodeSystemContentModeCode {
  export type AsObject = {
    value: CodeSystemContentModeCode.ValueMap[keyof CodeSystemContentModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_PRESENT: 1;
    EXAMPLE: 2;
    FRAGMENT: 3;
    COMPLETE: 4;
  }

  export const Value: ValueMap;
}

export class CodeSystemHierarchyMeaningCode extends jspb.Message {
  getValue(): CodeSystemHierarchyMeaningCode.ValueMap[keyof CodeSystemHierarchyMeaningCode.ValueMap];
  setValue(value: CodeSystemHierarchyMeaningCode.ValueMap[keyof CodeSystemHierarchyMeaningCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeSystemHierarchyMeaningCode.AsObject;
  static toObject(includeInstance: boolean, msg: CodeSystemHierarchyMeaningCode): CodeSystemHierarchyMeaningCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeSystemHierarchyMeaningCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeSystemHierarchyMeaningCode;
  static deserializeBinaryFromReader(message: CodeSystemHierarchyMeaningCode, reader: jspb.BinaryReader): CodeSystemHierarchyMeaningCode;
}

export namespace CodeSystemHierarchyMeaningCode {
  export type AsObject = {
    value: CodeSystemHierarchyMeaningCode.ValueMap[keyof CodeSystemHierarchyMeaningCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GROUPED_BY: 1;
    IS_A: 2;
    PART_OF: 3;
    CLASSIFIED_WITH: 4;
  }

  export const Value: ValueMap;
}

export class CommonTagsCode extends jspb.Message {
  getValue(): CommonTagsCode.ValueMap[keyof CommonTagsCode.ValueMap];
  setValue(value: CommonTagsCode.ValueMap[keyof CommonTagsCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonTagsCode.AsObject;
  static toObject(includeInstance: boolean, msg: CommonTagsCode): CommonTagsCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonTagsCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonTagsCode;
  static deserializeBinaryFromReader(message: CommonTagsCode, reader: jspb.BinaryReader): CommonTagsCode;
}

export namespace CommonTagsCode {
  export type AsObject = {
    value: CommonTagsCode.ValueMap[keyof CommonTagsCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIONABLE: 1;
  }

  export const Value: ValueMap;
}

export class CommunicationCategoryCode extends jspb.Message {
  getValue(): CommunicationCategoryCode.ValueMap[keyof CommunicationCategoryCode.ValueMap];
  setValue(value: CommunicationCategoryCode.ValueMap[keyof CommunicationCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationCategoryCode): CommunicationCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationCategoryCode;
  static deserializeBinaryFromReader(message: CommunicationCategoryCode, reader: jspb.BinaryReader): CommunicationCategoryCode;
}

export namespace CommunicationCategoryCode {
  export type AsObject = {
    value: CommunicationCategoryCode.ValueMap[keyof CommunicationCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALERT: 1;
    NOTIFICATION: 2;
    REMINDER: 3;
    INSTRUCTION: 4;
  }

  export const Value: ValueMap;
}

export class CommunicationNotDoneReasonCode extends jspb.Message {
  getValue(): CommunicationNotDoneReasonCode.ValueMap[keyof CommunicationNotDoneReasonCode.ValueMap];
  setValue(value: CommunicationNotDoneReasonCode.ValueMap[keyof CommunicationNotDoneReasonCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommunicationNotDoneReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: CommunicationNotDoneReasonCode): CommunicationNotDoneReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommunicationNotDoneReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommunicationNotDoneReasonCode;
  static deserializeBinaryFromReader(message: CommunicationNotDoneReasonCode, reader: jspb.BinaryReader): CommunicationNotDoneReasonCode;
}

export namespace CommunicationNotDoneReasonCode {
  export type AsObject = {
    value: CommunicationNotDoneReasonCode.ValueMap[keyof CommunicationNotDoneReasonCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNKNOWN: 1;
    SYSTEM_ERROR: 2;
    INVALID_PHONE_NUMBER: 3;
    RECIPIENT_UNAVAILABLE: 4;
    FAMILY_OBJECTION: 5;
    PATIENT_OBJECTION: 6;
  }

  export const Value: ValueMap;
}

export class CompartmentTypeCode extends jspb.Message {
  getValue(): CompartmentTypeCode.ValueMap[keyof CompartmentTypeCode.ValueMap];
  setValue(value: CompartmentTypeCode.ValueMap[keyof CompartmentTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompartmentTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompartmentTypeCode): CompartmentTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompartmentTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompartmentTypeCode;
  static deserializeBinaryFromReader(message: CompartmentTypeCode, reader: jspb.BinaryReader): CompartmentTypeCode;
}

export namespace CompartmentTypeCode {
  export type AsObject = {
    value: CompartmentTypeCode.ValueMap[keyof CompartmentTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PATIENT: 1;
    ENCOUNTER: 2;
    RELATEDPERSON: 3;
    PRACTITIONER: 4;
    DEVICE: 5;
  }

  export const Value: ValueMap;
}

export class CompositeMeasureScoringCode extends jspb.Message {
  getValue(): CompositeMeasureScoringCode.ValueMap[keyof CompositeMeasureScoringCode.ValueMap];
  setValue(value: CompositeMeasureScoringCode.ValueMap[keyof CompositeMeasureScoringCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositeMeasureScoringCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompositeMeasureScoringCode): CompositeMeasureScoringCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositeMeasureScoringCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositeMeasureScoringCode;
  static deserializeBinaryFromReader(message: CompositeMeasureScoringCode, reader: jspb.BinaryReader): CompositeMeasureScoringCode;
}

export namespace CompositeMeasureScoringCode {
  export type AsObject = {
    value: CompositeMeasureScoringCode.ValueMap[keyof CompositeMeasureScoringCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OPPORTUNITY: 1;
    ALL_OR_NOTHING: 2;
    LINEAR: 3;
    WEIGHTED: 4;
  }

  export const Value: ValueMap;
}

export class CompositionAttestationModeCode extends jspb.Message {
  getValue(): CompositionAttestationModeCode.ValueMap[keyof CompositionAttestationModeCode.ValueMap];
  setValue(value: CompositionAttestationModeCode.ValueMap[keyof CompositionAttestationModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionAttestationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionAttestationModeCode): CompositionAttestationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionAttestationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionAttestationModeCode;
  static deserializeBinaryFromReader(message: CompositionAttestationModeCode, reader: jspb.BinaryReader): CompositionAttestationModeCode;
}

export namespace CompositionAttestationModeCode {
  export type AsObject = {
    value: CompositionAttestationModeCode.ValueMap[keyof CompositionAttestationModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERSONAL: 1;
    PROFESSIONAL: 2;
    LEGAL: 3;
    OFFICIAL: 4;
  }

  export const Value: ValueMap;
}

export class CompositionStatusCode extends jspb.Message {
  getValue(): CompositionStatusCode.ValueMap[keyof CompositionStatusCode.ValueMap];
  setValue(value: CompositionStatusCode.ValueMap[keyof CompositionStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompositionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: CompositionStatusCode): CompositionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CompositionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompositionStatusCode;
  static deserializeBinaryFromReader(message: CompositionStatusCode, reader: jspb.BinaryReader): CompositionStatusCode;
}

export namespace CompositionStatusCode {
  export type AsObject = {
    value: CompositionStatusCode.ValueMap[keyof CompositionStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRELIMINARY: 1;
    FINAL: 2;
    AMENDED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class ConceptMapEquivalenceCode extends jspb.Message {
  getValue(): ConceptMapEquivalenceCode.ValueMap[keyof ConceptMapEquivalenceCode.ValueMap];
  setValue(value: ConceptMapEquivalenceCode.ValueMap[keyof ConceptMapEquivalenceCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapEquivalenceCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapEquivalenceCode): ConceptMapEquivalenceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapEquivalenceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapEquivalenceCode;
  static deserializeBinaryFromReader(message: ConceptMapEquivalenceCode, reader: jspb.BinaryReader): ConceptMapEquivalenceCode;
}

export namespace ConceptMapEquivalenceCode {
  export type AsObject = {
    value: ConceptMapEquivalenceCode.ValueMap[keyof ConceptMapEquivalenceCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RELATEDTO: 1;
    EQUIVALENT: 2;
    EQUAL: 3;
    WIDER: 4;
    SUBSUMES: 5;
    NARROWER: 6;
    SPECIALIZES: 7;
    INEXACT: 8;
    UNMATCHED: 9;
    DISJOINT: 10;
  }

  export const Value: ValueMap;
}

export class ConceptMapGroupUnmappedModeCode extends jspb.Message {
  getValue(): ConceptMapGroupUnmappedModeCode.ValueMap[keyof ConceptMapGroupUnmappedModeCode.ValueMap];
  setValue(value: ConceptMapGroupUnmappedModeCode.ValueMap[keyof ConceptMapGroupUnmappedModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConceptMapGroupUnmappedModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConceptMapGroupUnmappedModeCode): ConceptMapGroupUnmappedModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConceptMapGroupUnmappedModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConceptMapGroupUnmappedModeCode;
  static deserializeBinaryFromReader(message: ConceptMapGroupUnmappedModeCode, reader: jspb.BinaryReader): ConceptMapGroupUnmappedModeCode;
}

export namespace ConceptMapGroupUnmappedModeCode {
  export type AsObject = {
    value: ConceptMapGroupUnmappedModeCode.ValueMap[keyof ConceptMapGroupUnmappedModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROVIDED: 1;
    FIXED: 2;
    OTHER_MAP: 3;
  }

  export const Value: ValueMap;
}

export class PropertyTypeCode extends jspb.Message {
  getValue(): PropertyTypeCode.ValueMap[keyof PropertyTypeCode.ValueMap];
  setValue(value: PropertyTypeCode.ValueMap[keyof PropertyTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PropertyTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: PropertyTypeCode): PropertyTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PropertyTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PropertyTypeCode;
  static deserializeBinaryFromReader(message: PropertyTypeCode, reader: jspb.BinaryReader): PropertyTypeCode;
}

export namespace PropertyTypeCode {
  export type AsObject = {
    value: PropertyTypeCode.ValueMap[keyof PropertyTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CODE: 1;
    CODING: 2;
    STRING: 3;
    INTEGER: 4;
    BOOLEAN: 5;
    DATETIME: 6;
  }

  export const Value: ValueMap;
}

export class ConditionalDeleteStatusCode extends jspb.Message {
  getValue(): ConditionalDeleteStatusCode.ValueMap[keyof ConditionalDeleteStatusCode.ValueMap];
  setValue(value: ConditionalDeleteStatusCode.ValueMap[keyof ConditionalDeleteStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalDeleteStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalDeleteStatusCode): ConditionalDeleteStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalDeleteStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalDeleteStatusCode;
  static deserializeBinaryFromReader(message: ConditionalDeleteStatusCode, reader: jspb.BinaryReader): ConditionalDeleteStatusCode;
}

export namespace ConditionalDeleteStatusCode {
  export type AsObject = {
    value: ConditionalDeleteStatusCode.ValueMap[keyof ConditionalDeleteStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_SUPPORTED: 1;
    SINGLE: 2;
    MULTIPLE: 3;
  }

  export const Value: ValueMap;
}

export class ConditionalReadStatusCode extends jspb.Message {
  getValue(): ConditionalReadStatusCode.ValueMap[keyof ConditionalReadStatusCode.ValueMap];
  setValue(value: ConditionalReadStatusCode.ValueMap[keyof ConditionalReadStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionalReadStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionalReadStatusCode): ConditionalReadStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionalReadStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionalReadStatusCode;
  static deserializeBinaryFromReader(message: ConditionalReadStatusCode, reader: jspb.BinaryReader): ConditionalReadStatusCode;
}

export namespace ConditionalReadStatusCode {
  export type AsObject = {
    value: ConditionalReadStatusCode.ValueMap[keyof ConditionalReadStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_SUPPORTED: 1;
    MODIFIED_SINCE: 2;
    NOT_MATCH: 3;
    FULL_SUPPORT: 4;
  }

  export const Value: ValueMap;
}

export class ConditionCategoryCodesCode extends jspb.Message {
  getValue(): ConditionCategoryCodesCode.ValueMap[keyof ConditionCategoryCodesCode.ValueMap];
  setValue(value: ConditionCategoryCodesCode.ValueMap[keyof ConditionCategoryCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionCategoryCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionCategoryCodesCode): ConditionCategoryCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionCategoryCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionCategoryCodesCode;
  static deserializeBinaryFromReader(message: ConditionCategoryCodesCode, reader: jspb.BinaryReader): ConditionCategoryCodesCode;
}

export namespace ConditionCategoryCodesCode {
  export type AsObject = {
    value: ConditionCategoryCodesCode.ValueMap[keyof ConditionCategoryCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROBLEM_LIST_ITEM: 1;
    ENCOUNTER_DIAGNOSIS: 2;
  }

  export const Value: ValueMap;
}

export class ConditionClinicalStatusCodesCode extends jspb.Message {
  getValue(): ConditionClinicalStatusCodesCode.ValueMap[keyof ConditionClinicalStatusCodesCode.ValueMap];
  setValue(value: ConditionClinicalStatusCodesCode.ValueMap[keyof ConditionClinicalStatusCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionClinicalStatusCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionClinicalStatusCodesCode): ConditionClinicalStatusCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionClinicalStatusCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionClinicalStatusCodesCode;
  static deserializeBinaryFromReader(message: ConditionClinicalStatusCodesCode, reader: jspb.BinaryReader): ConditionClinicalStatusCodesCode;
}

export namespace ConditionClinicalStatusCodesCode {
  export type AsObject = {
    value: ConditionClinicalStatusCodesCode.ValueMap[keyof ConditionClinicalStatusCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    RECURRENCE: 2;
    INACTIVE: 3;
    REMISSION: 4;
    RESOLVED: 5;
  }

  export const Value: ValueMap;
}

export class ConditionStateCode extends jspb.Message {
  getValue(): ConditionStateCode.ValueMap[keyof ConditionStateCode.ValueMap];
  setValue(value: ConditionStateCode.ValueMap[keyof ConditionStateCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionStateCode): ConditionStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionStateCode;
  static deserializeBinaryFromReader(message: ConditionStateCode, reader: jspb.BinaryReader): ConditionStateCode;
}

export namespace ConditionStateCode {
  export type AsObject = {
    value: ConditionStateCode.ValueMap[keyof ConditionStateCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    RESOLVED: 3;
  }

  export const Value: ValueMap;
}

export class ConditionVerificationStatusCode extends jspb.Message {
  getValue(): ConditionVerificationStatusCode.ValueMap[keyof ConditionVerificationStatusCode.ValueMap];
  setValue(value: ConditionVerificationStatusCode.ValueMap[keyof ConditionVerificationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConditionVerificationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConditionVerificationStatusCode): ConditionVerificationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConditionVerificationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConditionVerificationStatusCode;
  static deserializeBinaryFromReader(message: ConditionVerificationStatusCode, reader: jspb.BinaryReader): ConditionVerificationStatusCode;
}

export namespace ConditionVerificationStatusCode {
  export type AsObject = {
    value: ConditionVerificationStatusCode.ValueMap[keyof ConditionVerificationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROVISIONAL: 1;
    DIFFERENTIAL: 2;
    CONFIRMED: 3;
    REFUTED: 4;
    ENTERED_IN_ERROR: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class ConformanceExpectationCode extends jspb.Message {
  getValue(): ConformanceExpectationCode.ValueMap[keyof ConformanceExpectationCode.ValueMap];
  setValue(value: ConformanceExpectationCode.ValueMap[keyof ConformanceExpectationCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConformanceExpectationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConformanceExpectationCode): ConformanceExpectationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConformanceExpectationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConformanceExpectationCode;
  static deserializeBinaryFromReader(message: ConformanceExpectationCode, reader: jspb.BinaryReader): ConformanceExpectationCode;
}

export namespace ConformanceExpectationCode {
  export type AsObject = {
    value: ConformanceExpectationCode.ValueMap[keyof ConformanceExpectationCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SHALL: 1;
    SHOULD: 2;
    MAY: 3;
    SHOULD_NOT: 4;
  }

  export const Value: ValueMap;
}

export class ConsentDataMeaningCode extends jspb.Message {
  getValue(): ConsentDataMeaningCode.ValueMap[keyof ConsentDataMeaningCode.ValueMap];
  setValue(value: ConsentDataMeaningCode.ValueMap[keyof ConsentDataMeaningCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentDataMeaningCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentDataMeaningCode): ConsentDataMeaningCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentDataMeaningCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentDataMeaningCode;
  static deserializeBinaryFromReader(message: ConsentDataMeaningCode, reader: jspb.BinaryReader): ConsentDataMeaningCode;
}

export namespace ConsentDataMeaningCode {
  export type AsObject = {
    value: ConsentDataMeaningCode.ValueMap[keyof ConsentDataMeaningCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    RELATED: 2;
    DEPENDENTS: 3;
    AUTHOREDBY: 4;
  }

  export const Value: ValueMap;
}

export class ConsentExceptTypeCode extends jspb.Message {
  getValue(): ConsentExceptTypeCode.ValueMap[keyof ConsentExceptTypeCode.ValueMap];
  setValue(value: ConsentExceptTypeCode.ValueMap[keyof ConsentExceptTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentExceptTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentExceptTypeCode): ConsentExceptTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentExceptTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentExceptTypeCode;
  static deserializeBinaryFromReader(message: ConsentExceptTypeCode, reader: jspb.BinaryReader): ConsentExceptTypeCode;
}

export namespace ConsentExceptTypeCode {
  export type AsObject = {
    value: ConsentExceptTypeCode.ValueMap[keyof ConsentExceptTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DENY: 1;
    PERMIT: 2;
  }

  export const Value: ValueMap;
}

export class ConsentStateCode extends jspb.Message {
  getValue(): ConsentStateCode.ValueMap[keyof ConsentStateCode.ValueMap];
  setValue(value: ConsentStateCode.ValueMap[keyof ConsentStateCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsentStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConsentStateCode): ConsentStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConsentStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsentStateCode;
  static deserializeBinaryFromReader(message: ConsentStateCode, reader: jspb.BinaryReader): ConsentStateCode;
}

export namespace ConsentStateCode {
  export type AsObject = {
    value: ConsentStateCode.ValueMap[keyof ConsentStateCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    PROPOSED: 2;
    ACTIVE: 3;
    REJECTED: 4;
    INACTIVE: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class ContactEntityTypeCode extends jspb.Message {
  getValue(): ContactEntityTypeCode.ValueMap[keyof ContactEntityTypeCode.ValueMap];
  setValue(value: ContactEntityTypeCode.ValueMap[keyof ContactEntityTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContactEntityTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContactEntityTypeCode): ContactEntityTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContactEntityTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContactEntityTypeCode;
  static deserializeBinaryFromReader(message: ContactEntityTypeCode, reader: jspb.BinaryReader): ContactEntityTypeCode;
}

export namespace ContactEntityTypeCode {
  export type AsObject = {
    value: ContactEntityTypeCode.ValueMap[keyof ContactEntityTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BILL: 1;
    ADMIN: 2;
    HR: 3;
    PAYOR: 4;
    PATINF: 5;
    PRESS: 6;
  }

  export const Value: ValueMap;
}

export class ContentTypeCode extends jspb.Message {
  getValue(): ContentTypeCode.ValueMap[keyof ContentTypeCode.ValueMap];
  setValue(value: ContentTypeCode.ValueMap[keyof ContentTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContentTypeCode): ContentTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContentTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentTypeCode;
  static deserializeBinaryFromReader(message: ContentTypeCode, reader: jspb.BinaryReader): ContentTypeCode;
}

export namespace ContentTypeCode {
  export type AsObject = {
    value: ContentTypeCode.ValueMap[keyof ContentTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    XML: 1;
    JSON: 2;
    TTL: 3;
    NONE: 4;
  }

  export const Value: ValueMap;
}

export class ContractResourceStatusCode extends jspb.Message {
  getValue(): ContractResourceStatusCode.ValueMap[keyof ContractResourceStatusCode.ValueMap];
  setValue(value: ContractResourceStatusCode.ValueMap[keyof ContractResourceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContractResourceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContractResourceStatusCode): ContractResourceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContractResourceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContractResourceStatusCode;
  static deserializeBinaryFromReader(message: ContractResourceStatusCode, reader: jspb.BinaryReader): ContractResourceStatusCode;
}

export namespace ContractResourceStatusCode {
  export type AsObject = {
    value: ContractResourceStatusCode.ValueMap[keyof ContractResourceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AMENDED: 1;
    APPENDED: 2;
    CANCELLED: 3;
    DISPUTED: 4;
    ENTERED_IN_ERROR: 5;
    EXECUTABLE: 6;
    EXECUTED: 7;
    NEGOTIABLE: 8;
    OFFERED: 9;
    POLICY: 10;
    REJECTED: 11;
    RENEWED: 12;
    REVOKED: 13;
    RESOLVED: 14;
    TERMINATED: 15;
  }

  export const Value: ValueMap;
}

export class ContributorTypeCode extends jspb.Message {
  getValue(): ContributorTypeCode.ValueMap[keyof ContributorTypeCode.ValueMap];
  setValue(value: ContributorTypeCode.ValueMap[keyof ContributorTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContributorTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ContributorTypeCode): ContributorTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContributorTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContributorTypeCode;
  static deserializeBinaryFromReader(message: ContributorTypeCode, reader: jspb.BinaryReader): ContributorTypeCode;
}

export namespace ContributorTypeCode {
  export type AsObject = {
    value: ContributorTypeCode.ValueMap[keyof ContributorTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AUTHOR: 1;
    EDITOR: 2;
    REVIEWER: 3;
    ENDORSER: 4;
  }

  export const Value: ValueMap;
}

export class CopyNumberEventCode extends jspb.Message {
  getValue(): CopyNumberEventCode.ValueMap[keyof CopyNumberEventCode.ValueMap];
  setValue(value: CopyNumberEventCode.ValueMap[keyof CopyNumberEventCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CopyNumberEventCode.AsObject;
  static toObject(includeInstance: boolean, msg: CopyNumberEventCode): CopyNumberEventCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CopyNumberEventCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CopyNumberEventCode;
  static deserializeBinaryFromReader(message: CopyNumberEventCode, reader: jspb.BinaryReader): CopyNumberEventCode;
}

export namespace CopyNumberEventCode {
  export type AsObject = {
    value: CopyNumberEventCode.ValueMap[keyof CopyNumberEventCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AMP: 1;
    DEL: 2;
    LOF: 3;
  }

  export const Value: ValueMap;
}

export class DataAbsentReasonCode extends jspb.Message {
  getValue(): DataAbsentReasonCode.ValueMap[keyof DataAbsentReasonCode.ValueMap];
  setValue(value: DataAbsentReasonCode.ValueMap[keyof DataAbsentReasonCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataAbsentReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: DataAbsentReasonCode): DataAbsentReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataAbsentReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataAbsentReasonCode;
  static deserializeBinaryFromReader(message: DataAbsentReasonCode, reader: jspb.BinaryReader): DataAbsentReasonCode;
}

export namespace DataAbsentReasonCode {
  export type AsObject = {
    value: DataAbsentReasonCode.ValueMap[keyof DataAbsentReasonCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNKNOWN: 1;
    ASKED: 2;
    TEMP: 3;
    NOT_ASKED: 4;
    MASKED: 5;
    UNSUPPORTED: 6;
    ASTEXT: 7;
    ERROR: 8;
    NOT_A_NUMBER: 9;
    NOT_PERFORMED: 10;
  }

  export const Value: ValueMap;
}

export class DataElementStringencyCode extends jspb.Message {
  getValue(): DataElementStringencyCode.ValueMap[keyof DataElementStringencyCode.ValueMap];
  setValue(value: DataElementStringencyCode.ValueMap[keyof DataElementStringencyCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataElementStringencyCode.AsObject;
  static toObject(includeInstance: boolean, msg: DataElementStringencyCode): DataElementStringencyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataElementStringencyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataElementStringencyCode;
  static deserializeBinaryFromReader(message: DataElementStringencyCode, reader: jspb.BinaryReader): DataElementStringencyCode;
}

export namespace DataElementStringencyCode {
  export type AsObject = {
    value: DataElementStringencyCode.ValueMap[keyof DataElementStringencyCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPARABLE: 1;
    FULLY_SPECIFIED: 2;
    EQUIVALENT: 3;
    CONVERTABLE: 4;
    SCALEABLE: 5;
    FLEXIBLE: 6;
  }

  export const Value: ValueMap;
}

export class TriggerTypeCode extends jspb.Message {
  getValue(): TriggerTypeCode.ValueMap[keyof TriggerTypeCode.ValueMap];
  setValue(value: TriggerTypeCode.ValueMap[keyof TriggerTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerTypeCode): TriggerTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TriggerTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerTypeCode;
  static deserializeBinaryFromReader(message: TriggerTypeCode, reader: jspb.BinaryReader): TriggerTypeCode;
}

export namespace TriggerTypeCode {
  export type AsObject = {
    value: TriggerTypeCode.ValueMap[keyof TriggerTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NAMED_EVENT: 1;
    PERIODIC: 2;
    DATA_ADDED: 3;
    DATA_MODIFIED: 4;
    DATA_REMOVED: 5;
    DATA_ACCESSED: 6;
    DATA_ACCESS_ENDED: 7;
  }

  export const Value: ValueMap;
}

export class DataTypeCode extends jspb.Message {
  getValue(): DataTypeCode.ValueMap[keyof DataTypeCode.ValueMap];
  setValue(value: DataTypeCode.ValueMap[keyof DataTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DataTypeCode): DataTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DataTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataTypeCode;
  static deserializeBinaryFromReader(message: DataTypeCode, reader: jspb.BinaryReader): DataTypeCode;
}

export namespace DataTypeCode {
  export type AsObject = {
    value: DataTypeCode.ValueMap[keyof DataTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADDRESS: 1;
    AGE: 2;
    ANNOTATION: 3;
    ATTACHMENT: 4;
    BACKBONE_ELEMENT: 5;
    CODEABLE_CONCEPT: 6;
    CODING: 7;
    CONTACT_DETAIL: 8;
    CONTACT_POINT: 9;
    CONTRIBUTOR: 10;
    COUNT: 11;
    DATA_REQUIREMENT: 12;
    DISTANCE: 13;
    DOSAGE: 14;
    DURATION: 15;
    ELEMENT: 16;
    ELEMENT_DEFINITION: 17;
    EXTENSION: 18;
    HUMAN_NAME: 19;
    IDENTIFIER: 20;
    META: 21;
    MONEY: 22;
    NARRATIVE: 23;
    PARAMETER_DEFINITION: 24;
    PERIOD: 25;
    QUANTITY: 26;
    RANGE: 27;
    RATIO: 28;
    REFERENCE: 29;
    RELATED_ARTIFACT: 30;
    SAMPLED_DATA: 31;
    SIGNATURE: 32;
    SIMPLE_QUANTITY: 33;
    TIMING: 34;
    TRIGGER_DEFINITION: 35;
    USAGE_CONTEXT: 36;
    BASE64_BINARY: 37;
    BOOLEAN: 38;
    CODE: 39;
    DATE: 40;
    DATE_TIME: 41;
    DECIMAL: 42;
    ID: 43;
    INSTANT: 44;
    INTEGER: 45;
    MARKDOWN: 46;
    OID: 47;
    POSITIVE_INT: 48;
    STRING: 49;
    TIME: 50;
    UNSIGNED_INT: 51;
    URI: 52;
    UUID: 53;
    XHTML: 54;
  }

  export const Value: ValueMap;
}

export class FHIRAllTypesCode extends jspb.Message {
  getValue(): FHIRAllTypesCode.ValueMap[keyof FHIRAllTypesCode.ValueMap];
  setValue(value: FHIRAllTypesCode.ValueMap[keyof FHIRAllTypesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRAllTypesCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRAllTypesCode): FHIRAllTypesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRAllTypesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRAllTypesCode;
  static deserializeBinaryFromReader(message: FHIRAllTypesCode, reader: jspb.BinaryReader): FHIRAllTypesCode;
}

export namespace FHIRAllTypesCode {
  export type AsObject = {
    value: FHIRAllTypesCode.ValueMap[keyof FHIRAllTypesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADDRESS: 1;
    AGE: 2;
    ANNOTATION: 3;
    ATTACHMENT: 4;
    BACKBONE_ELEMENT: 5;
    CODEABLE_CONCEPT: 6;
    CODING: 7;
    CONTACT_DETAIL: 8;
    CONTACT_POINT: 9;
    CONTRIBUTOR: 10;
    COUNT: 11;
    DATA_REQUIREMENT: 12;
    DISTANCE: 13;
    DOSAGE: 14;
    DURATION: 15;
    ELEMENT: 16;
    ELEMENT_DEFINITION: 17;
    EXTENSION: 18;
    HUMAN_NAME: 19;
    IDENTIFIER: 20;
    META: 21;
    MONEY: 22;
    NARRATIVE: 23;
    PARAMETER_DEFINITION: 24;
    PERIOD: 25;
    QUANTITY: 26;
    RANGE: 27;
    RATIO: 28;
    REFERENCE: 29;
    RELATED_ARTIFACT: 30;
    SAMPLED_DATA: 31;
    SIGNATURE: 32;
    SIMPLE_QUANTITY: 33;
    TIMING: 34;
    TRIGGER_DEFINITION: 35;
    USAGE_CONTEXT: 36;
    BASE64_BINARY: 37;
    BOOLEAN: 38;
    CODE: 39;
    DATE: 40;
    DATE_TIME: 41;
    DECIMAL: 42;
    ID: 43;
    INSTANT: 44;
    INTEGER: 45;
    MARKDOWN: 46;
    OID: 47;
    POSITIVE_INT: 48;
    STRING: 49;
    TIME: 50;
    UNSIGNED_INT: 51;
    URI: 52;
    UUID: 53;
    XHTML: 54;
    ACCOUNT: 55;
    ACTIVITY_DEFINITION: 56;
    ADVERSE_EVENT: 57;
    ALLERGY_INTOLERANCE: 58;
    APPOINTMENT: 59;
    APPOINTMENT_RESPONSE: 60;
    AUDIT_EVENT: 61;
    BASIC: 62;
    BINARY: 63;
    BODY_SITE: 64;
    BUNDLE: 65;
    CAPABILITY_STATEMENT: 66;
    CARE_PLAN: 67;
    CARE_TEAM: 68;
    CHARGE_ITEM: 69;
    CLAIM: 70;
    CLAIM_RESPONSE: 71;
    CLINICAL_IMPRESSION: 72;
    CODE_SYSTEM: 73;
    COMMUNICATION: 74;
    COMMUNICATION_REQUEST: 75;
    COMPARTMENT_DEFINITION: 76;
    COMPOSITION: 77;
    CONCEPT_MAP: 78;
    CONDITION: 79;
    CONSENT: 80;
    CONTRACT: 81;
    COVERAGE: 82;
    DATA_ELEMENT: 83;
    DETECTED_ISSUE: 84;
    DEVICE: 85;
    DEVICE_COMPONENT: 86;
    DEVICE_METRIC: 87;
    DEVICE_REQUEST: 88;
    DEVICE_USE_STATEMENT: 89;
    DIAGNOSTIC_REPORT: 90;
    DOCUMENT_MANIFEST: 91;
    DOCUMENT_REFERENCE: 92;
    DOMAIN_RESOURCE: 93;
    ELIGIBILITY_REQUEST: 94;
    ELIGIBILITY_RESPONSE: 95;
    ENCOUNTER: 96;
    ENDPOINT: 97;
    ENROLLMENT_REQUEST: 98;
    ENROLLMENT_RESPONSE: 99;
    EPISODE_OF_CARE: 100;
    EXPANSION_PROFILE: 101;
    EXPLANATION_OF_BENEFIT: 102;
    FAMILY_MEMBER_HISTORY: 103;
    FLAG: 104;
    GOAL: 105;
    GRAPH_DEFINITION: 106;
    GROUP: 107;
    GUIDANCE_RESPONSE: 108;
    HEALTHCARE_SERVICE: 109;
    IMAGING_MANIFEST: 110;
    IMAGING_STUDY: 111;
    IMMUNIZATION: 112;
    IMMUNIZATION_RECOMMENDATION: 113;
    IMPLEMENTATION_GUIDE: 114;
    LIBRARY: 115;
    LINKAGE: 116;
    LIST: 117;
    LOCATION: 118;
    MEASURE: 119;
    MEASURE_REPORT: 120;
    MEDIA: 121;
    MEDICATION: 122;
    MEDICATION_ADMINISTRATION: 123;
    MEDICATION_DISPENSE: 124;
    MEDICATION_REQUEST: 125;
    MEDICATION_STATEMENT: 126;
    MESSAGE_DEFINITION: 127;
    MESSAGE_HEADER: 128;
    NAMING_SYSTEM: 129;
    NUTRITION_ORDER: 130;
    OBSERVATION: 131;
    OPERATION_DEFINITION: 132;
    OPERATION_OUTCOME: 133;
    ORGANIZATION: 134;
    PARAMETERS: 135;
    PATIENT: 136;
    PAYMENT_NOTICE: 137;
    PAYMENT_RECONCILIATION: 138;
    PERSON: 139;
    PLAN_DEFINITION: 140;
    PRACTITIONER: 141;
    PRACTITIONER_ROLE: 142;
    PROCEDURE: 143;
    PROCEDURE_REQUEST: 144;
    PROCESS_REQUEST: 145;
    PROCESS_RESPONSE: 146;
    PROVENANCE: 147;
    QUESTIONNAIRE: 148;
    QUESTIONNAIRE_RESPONSE: 149;
    REFERRAL_REQUEST: 150;
    RELATED_PERSON: 151;
    REQUEST_GROUP: 152;
    RESEARCH_STUDY: 153;
    RESEARCH_SUBJECT: 154;
    RESOURCE: 155;
    RISK_ASSESSMENT: 156;
    SCHEDULE: 157;
    SEARCH_PARAMETER: 158;
    SEQUENCE: 159;
    SERVICE_DEFINITION: 160;
    SLOT: 161;
    SPECIMEN: 162;
    STRUCTURE_DEFINITION: 163;
    STRUCTURE_MAP: 164;
    SUBSCRIPTION: 165;
    SUBSTANCE: 166;
    SUPPLY_DELIVERY: 167;
    SUPPLY_REQUEST: 168;
    TASK: 169;
    TEST_REPORT: 170;
    TEST_SCRIPT: 171;
    VALUE_SET: 172;
    VISION_PRESCRIPTION: 173;
    TYPE: 174;
    ANY: 175;
  }

  export const Value: ValueMap;
}

export class FHIRDefinedTypeCode extends jspb.Message {
  getValue(): FHIRDefinedTypeCode.ValueMap[keyof FHIRDefinedTypeCode.ValueMap];
  setValue(value: FHIRDefinedTypeCode.ValueMap[keyof FHIRDefinedTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRDefinedTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRDefinedTypeCode): FHIRDefinedTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRDefinedTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRDefinedTypeCode;
  static deserializeBinaryFromReader(message: FHIRDefinedTypeCode, reader: jspb.BinaryReader): FHIRDefinedTypeCode;
}

export namespace FHIRDefinedTypeCode {
  export type AsObject = {
    value: FHIRDefinedTypeCode.ValueMap[keyof FHIRDefinedTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADDRESS: 1;
    AGE: 2;
    ANNOTATION: 3;
    ATTACHMENT: 4;
    BACKBONE_ELEMENT: 5;
    CODEABLE_CONCEPT: 6;
    CODING: 7;
    CONTACT_DETAIL: 8;
    CONTACT_POINT: 9;
    CONTRIBUTOR: 10;
    COUNT: 11;
    DATA_REQUIREMENT: 12;
    DISTANCE: 13;
    DOSAGE: 14;
    DURATION: 15;
    ELEMENT: 16;
    ELEMENT_DEFINITION: 17;
    EXTENSION: 18;
    HUMAN_NAME: 19;
    IDENTIFIER: 20;
    META: 21;
    MONEY: 22;
    NARRATIVE: 23;
    PARAMETER_DEFINITION: 24;
    PERIOD: 25;
    QUANTITY: 26;
    RANGE: 27;
    RATIO: 28;
    REFERENCE: 29;
    RELATED_ARTIFACT: 30;
    SAMPLED_DATA: 31;
    SIGNATURE: 32;
    SIMPLE_QUANTITY: 33;
    TIMING: 34;
    TRIGGER_DEFINITION: 35;
    USAGE_CONTEXT: 36;
    BASE64_BINARY: 37;
    BOOLEAN: 38;
    CODE: 39;
    DATE: 40;
    DATE_TIME: 41;
    DECIMAL: 42;
    ID: 43;
    INSTANT: 44;
    INTEGER: 45;
    MARKDOWN: 46;
    OID: 47;
    POSITIVE_INT: 48;
    STRING: 49;
    TIME: 50;
    UNSIGNED_INT: 51;
    URI: 52;
    UUID: 53;
    XHTML: 54;
    ACCOUNT: 55;
    ACTIVITY_DEFINITION: 56;
    ADVERSE_EVENT: 57;
    ALLERGY_INTOLERANCE: 58;
    APPOINTMENT: 59;
    APPOINTMENT_RESPONSE: 60;
    AUDIT_EVENT: 61;
    BASIC: 62;
    BINARY: 63;
    BODY_SITE: 64;
    BUNDLE: 65;
    CAPABILITY_STATEMENT: 66;
    CARE_PLAN: 67;
    CARE_TEAM: 68;
    CHARGE_ITEM: 69;
    CLAIM: 70;
    CLAIM_RESPONSE: 71;
    CLINICAL_IMPRESSION: 72;
    CODE_SYSTEM: 73;
    COMMUNICATION: 74;
    COMMUNICATION_REQUEST: 75;
    COMPARTMENT_DEFINITION: 76;
    COMPOSITION: 77;
    CONCEPT_MAP: 78;
    CONDITION: 79;
    CONSENT: 80;
    CONTRACT: 81;
    COVERAGE: 82;
    DATA_ELEMENT: 83;
    DETECTED_ISSUE: 84;
    DEVICE: 85;
    DEVICE_COMPONENT: 86;
    DEVICE_METRIC: 87;
    DEVICE_REQUEST: 88;
    DEVICE_USE_STATEMENT: 89;
    DIAGNOSTIC_REPORT: 90;
    DOCUMENT_MANIFEST: 91;
    DOCUMENT_REFERENCE: 92;
    DOMAIN_RESOURCE: 93;
    ELIGIBILITY_REQUEST: 94;
    ELIGIBILITY_RESPONSE: 95;
    ENCOUNTER: 96;
    ENDPOINT: 97;
    ENROLLMENT_REQUEST: 98;
    ENROLLMENT_RESPONSE: 99;
    EPISODE_OF_CARE: 100;
    EXPANSION_PROFILE: 101;
    EXPLANATION_OF_BENEFIT: 102;
    FAMILY_MEMBER_HISTORY: 103;
    FLAG: 104;
    GOAL: 105;
    GRAPH_DEFINITION: 106;
    GROUP: 107;
    GUIDANCE_RESPONSE: 108;
    HEALTHCARE_SERVICE: 109;
    IMAGING_MANIFEST: 110;
    IMAGING_STUDY: 111;
    IMMUNIZATION: 112;
    IMMUNIZATION_RECOMMENDATION: 113;
    IMPLEMENTATION_GUIDE: 114;
    LIBRARY: 115;
    LINKAGE: 116;
    LIST: 117;
    LOCATION: 118;
    MEASURE: 119;
    MEASURE_REPORT: 120;
    MEDIA: 121;
    MEDICATION: 122;
    MEDICATION_ADMINISTRATION: 123;
    MEDICATION_DISPENSE: 124;
    MEDICATION_REQUEST: 125;
    MEDICATION_STATEMENT: 126;
    MESSAGE_DEFINITION: 127;
    MESSAGE_HEADER: 128;
    NAMING_SYSTEM: 129;
    NUTRITION_ORDER: 130;
    OBSERVATION: 131;
    OPERATION_DEFINITION: 132;
    OPERATION_OUTCOME: 133;
    ORGANIZATION: 134;
    PARAMETERS: 135;
    PATIENT: 136;
    PAYMENT_NOTICE: 137;
    PAYMENT_RECONCILIATION: 138;
    PERSON: 139;
    PLAN_DEFINITION: 140;
    PRACTITIONER: 141;
    PRACTITIONER_ROLE: 142;
    PROCEDURE: 143;
    PROCEDURE_REQUEST: 144;
    PROCESS_REQUEST: 145;
    PROCESS_RESPONSE: 146;
    PROVENANCE: 147;
    QUESTIONNAIRE: 148;
    QUESTIONNAIRE_RESPONSE: 149;
    REFERRAL_REQUEST: 150;
    RELATED_PERSON: 151;
    REQUEST_GROUP: 152;
    RESEARCH_STUDY: 153;
    RESEARCH_SUBJECT: 154;
    RESOURCE: 155;
    RISK_ASSESSMENT: 156;
    SCHEDULE: 157;
    SEARCH_PARAMETER: 158;
    SEQUENCE: 159;
    SERVICE_DEFINITION: 160;
    SLOT: 161;
    SPECIMEN: 162;
    STRUCTURE_DEFINITION: 163;
    STRUCTURE_MAP: 164;
    SUBSCRIPTION: 165;
    SUBSTANCE: 166;
    SUPPLY_DELIVERY: 167;
    SUPPLY_REQUEST: 168;
    TASK: 169;
    TEST_REPORT: 170;
    TEST_SCRIPT: 171;
    VALUE_SET: 172;
    VISION_PRESCRIPTION: 173;
  }

  export const Value: ValueMap;
}

export class FHIRDefinedTypeExtCode extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRDefinedTypeExtCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRDefinedTypeExtCode): FHIRDefinedTypeExtCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRDefinedTypeExtCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRDefinedTypeExtCode;
  static deserializeBinaryFromReader(message: FHIRDefinedTypeExtCode, reader: jspb.BinaryReader): FHIRDefinedTypeExtCode;
}

export namespace FHIRDefinedTypeExtCode {
  export type AsObject = {
    value: string,
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }
}

export class DefinitionStatusCode extends jspb.Message {
  getValue(): DefinitionStatusCode.ValueMap[keyof DefinitionStatusCode.ValueMap];
  setValue(value: DefinitionStatusCode.ValueMap[keyof DefinitionStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefinitionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DefinitionStatusCode): DefinitionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefinitionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefinitionStatusCode;
  static deserializeBinaryFromReader(message: DefinitionStatusCode, reader: jspb.BinaryReader): DefinitionStatusCode;
}

export namespace DefinitionStatusCode {
  export type AsObject = {
    value: DefinitionStatusCode.ValueMap[keyof DefinitionStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    WITHDRAWN: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class DefinitionTopicCode extends jspb.Message {
  getValue(): DefinitionTopicCode.ValueMap[keyof DefinitionTopicCode.ValueMap];
  setValue(value: DefinitionTopicCode.ValueMap[keyof DefinitionTopicCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefinitionTopicCode.AsObject;
  static toObject(includeInstance: boolean, msg: DefinitionTopicCode): DefinitionTopicCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefinitionTopicCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefinitionTopicCode;
  static deserializeBinaryFromReader(message: DefinitionTopicCode, reader: jspb.BinaryReader): DefinitionTopicCode;
}

export namespace DefinitionTopicCode {
  export type AsObject = {
    value: DefinitionTopicCode.ValueMap[keyof DefinitionTopicCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TREATMENT: 1;
    EDUCATION: 2;
    ASSESSMENT: 3;
  }

  export const Value: ValueMap;
}

export class DetectedIssueSeverityCode extends jspb.Message {
  getValue(): DetectedIssueSeverityCode.ValueMap[keyof DetectedIssueSeverityCode.ValueMap];
  setValue(value: DetectedIssueSeverityCode.ValueMap[keyof DetectedIssueSeverityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DetectedIssueSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: DetectedIssueSeverityCode): DetectedIssueSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DetectedIssueSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DetectedIssueSeverityCode;
  static deserializeBinaryFromReader(message: DetectedIssueSeverityCode, reader: jspb.BinaryReader): DetectedIssueSeverityCode;
}

export namespace DetectedIssueSeverityCode {
  export type AsObject = {
    value: DetectedIssueSeverityCode.ValueMap[keyof DetectedIssueSeverityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HIGH: 1;
    MODERATE: 2;
    LOW: 3;
  }

  export const Value: ValueMap;
}

export class DeviceUseStatementStatusCode extends jspb.Message {
  getValue(): DeviceUseStatementStatusCode.ValueMap[keyof DeviceUseStatementStatusCode.ValueMap];
  setValue(value: DeviceUseStatementStatusCode.ValueMap[keyof DeviceUseStatementStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceUseStatementStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceUseStatementStatusCode): DeviceUseStatementStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceUseStatementStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceUseStatementStatusCode;
  static deserializeBinaryFromReader(message: DeviceUseStatementStatusCode, reader: jspb.BinaryReader): DeviceUseStatementStatusCode;
}

export namespace DeviceUseStatementStatusCode {
  export type AsObject = {
    value: DeviceUseStatementStatusCode.ValueMap[keyof DeviceUseStatementStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    INTENDED: 4;
    STOPPED: 5;
    ON_HOLD: 6;
  }

  export const Value: ValueMap;
}

export class FHIRDeviceStatusCode extends jspb.Message {
  getValue(): FHIRDeviceStatusCode.ValueMap[keyof FHIRDeviceStatusCode.ValueMap];
  setValue(value: FHIRDeviceStatusCode.ValueMap[keyof FHIRDeviceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRDeviceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRDeviceStatusCode): FHIRDeviceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRDeviceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRDeviceStatusCode;
  static deserializeBinaryFromReader(message: FHIRDeviceStatusCode, reader: jspb.BinaryReader): FHIRDeviceStatusCode;
}

export namespace FHIRDeviceStatusCode {
  export type AsObject = {
    value: FHIRDeviceStatusCode.ValueMap[keyof FHIRDeviceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class DiagnosisRoleCode extends jspb.Message {
  getValue(): DiagnosisRoleCode.ValueMap[keyof DiagnosisRoleCode.ValueMap];
  setValue(value: DiagnosisRoleCode.ValueMap[keyof DiagnosisRoleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosisRoleCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosisRoleCode): DiagnosisRoleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosisRoleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosisRoleCode;
  static deserializeBinaryFromReader(message: DiagnosisRoleCode, reader: jspb.BinaryReader): DiagnosisRoleCode;
}

export namespace DiagnosisRoleCode {
  export type AsObject = {
    value: DiagnosisRoleCode.ValueMap[keyof DiagnosisRoleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AD: 1;
    DD: 2;
    CC: 3;
    CM: 4;
    PRE_OP: 5;
    POST_OP: 6;
    BILLING: 7;
  }

  export const Value: ValueMap;
}

export class DiagnosticReportStatusCode extends jspb.Message {
  getValue(): DiagnosticReportStatusCode.ValueMap[keyof DiagnosticReportStatusCode.ValueMap];
  setValue(value: DiagnosticReportStatusCode.ValueMap[keyof DiagnosticReportStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiagnosticReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DiagnosticReportStatusCode): DiagnosticReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DiagnosticReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiagnosticReportStatusCode;
  static deserializeBinaryFromReader(message: DiagnosticReportStatusCode, reader: jspb.BinaryReader): DiagnosticReportStatusCode;
}

export namespace DiagnosticReportStatusCode {
  export type AsObject = {
    value: DiagnosticReportStatusCode.ValueMap[keyof DiagnosticReportStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REGISTERED: 1;
    PARTIAL: 2;
    PRELIMINARY: 3;
    FINAL: 4;
    AMENDED: 5;
    CORRECTED: 6;
    APPENDED: 7;
    CANCELLED: 8;
    ENTERED_IN_ERROR: 9;
    UNKNOWN: 10;
  }

  export const Value: ValueMap;
}

export class DigitalMediaTypeCode extends jspb.Message {
  getValue(): DigitalMediaTypeCode.ValueMap[keyof DigitalMediaTypeCode.ValueMap];
  setValue(value: DigitalMediaTypeCode.ValueMap[keyof DigitalMediaTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DigitalMediaTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DigitalMediaTypeCode): DigitalMediaTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DigitalMediaTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DigitalMediaTypeCode;
  static deserializeBinaryFromReader(message: DigitalMediaTypeCode, reader: jspb.BinaryReader): DigitalMediaTypeCode;
}

export namespace DigitalMediaTypeCode {
  export type AsObject = {
    value: DigitalMediaTypeCode.ValueMap[keyof DigitalMediaTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PHOTO: 1;
    VIDEO: 2;
    AUDIO: 3;
  }

  export const Value: ValueMap;
}

export class DocumentModeCode extends jspb.Message {
  getValue(): DocumentModeCode.ValueMap[keyof DocumentModeCode.ValueMap];
  setValue(value: DocumentModeCode.ValueMap[keyof DocumentModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentModeCode): DocumentModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentModeCode;
  static deserializeBinaryFromReader(message: DocumentModeCode, reader: jspb.BinaryReader): DocumentModeCode;
}

export namespace DocumentModeCode {
  export type AsObject = {
    value: DocumentModeCode.ValueMap[keyof DocumentModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRODUCER: 1;
    CONSUMER: 2;
  }

  export const Value: ValueMap;
}

export class DocumentReferenceStatusCode extends jspb.Message {
  getValue(): DocumentReferenceStatusCode.ValueMap[keyof DocumentReferenceStatusCode.ValueMap];
  setValue(value: DocumentReferenceStatusCode.ValueMap[keyof DocumentReferenceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentReferenceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentReferenceStatusCode): DocumentReferenceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentReferenceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentReferenceStatusCode;
  static deserializeBinaryFromReader(message: DocumentReferenceStatusCode, reader: jspb.BinaryReader): DocumentReferenceStatusCode;
}

export namespace DocumentReferenceStatusCode {
  export type AsObject = {
    value: DocumentReferenceStatusCode.ValueMap[keyof DocumentReferenceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CURRENT: 1;
    SUPERSEDED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class DocumentRelationshipTypeCode extends jspb.Message {
  getValue(): DocumentRelationshipTypeCode.ValueMap[keyof DocumentRelationshipTypeCode.ValueMap];
  setValue(value: DocumentRelationshipTypeCode.ValueMap[keyof DocumentRelationshipTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentRelationshipTypeCode): DocumentRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentRelationshipTypeCode;
  static deserializeBinaryFromReader(message: DocumentRelationshipTypeCode, reader: jspb.BinaryReader): DocumentRelationshipTypeCode;
}

export namespace DocumentRelationshipTypeCode {
  export type AsObject = {
    value: DocumentRelationshipTypeCode.ValueMap[keyof DocumentRelationshipTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REPLACES: 1;
    TRANSFORMS: 2;
    SIGNS: 3;
    APPENDS: 4;
  }

  export const Value: ValueMap;
}

export class AdmitSourceCode extends jspb.Message {
  getValue(): AdmitSourceCode.ValueMap[keyof AdmitSourceCode.ValueMap];
  setValue(value: AdmitSourceCode.ValueMap[keyof AdmitSourceCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdmitSourceCode.AsObject;
  static toObject(includeInstance: boolean, msg: AdmitSourceCode): AdmitSourceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AdmitSourceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdmitSourceCode;
  static deserializeBinaryFromReader(message: AdmitSourceCode, reader: jspb.BinaryReader): AdmitSourceCode;
}

export namespace AdmitSourceCode {
  export type AsObject = {
    value: AdmitSourceCode.ValueMap[keyof AdmitSourceCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOSP_TRANS: 1;
    EMD: 2;
    OUTP: 3;
    BORN: 4;
    GP: 5;
    MP: 6;
    NURSING: 7;
    PSYCH: 8;
    REHAB: 9;
    OTHER: 10;
  }

  export const Value: ValueMap;
}

export class DietCode extends jspb.Message {
  getValue(): DietCode.ValueMap[keyof DietCode.ValueMap];
  setValue(value: DietCode.ValueMap[keyof DietCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DietCode.AsObject;
  static toObject(includeInstance: boolean, msg: DietCode): DietCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DietCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DietCode;
  static deserializeBinaryFromReader(message: DietCode, reader: jspb.BinaryReader): DietCode;
}

export namespace DietCode {
  export type AsObject = {
    value: DietCode.ValueMap[keyof DietCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    VEGETARIAN: 1;
    DAIRY_FREE: 2;
    NUT_FREE: 3;
    GLUTEN_FREE: 4;
    VEGAN: 5;
    HALAL: 6;
    KOSHER: 7;
  }

  export const Value: ValueMap;
}

export class DischargeDispositionCode extends jspb.Message {
  getValue(): DischargeDispositionCode.ValueMap[keyof DischargeDispositionCode.ValueMap];
  setValue(value: DischargeDispositionCode.ValueMap[keyof DischargeDispositionCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DischargeDispositionCode.AsObject;
  static toObject(includeInstance: boolean, msg: DischargeDispositionCode): DischargeDispositionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DischargeDispositionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DischargeDispositionCode;
  static deserializeBinaryFromReader(message: DischargeDispositionCode, reader: jspb.BinaryReader): DischargeDispositionCode;
}

export namespace DischargeDispositionCode {
  export type AsObject = {
    value: DischargeDispositionCode.ValueMap[keyof DischargeDispositionCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HOME: 1;
    OTHER_HCF: 2;
    HOSP: 3;
    LONG: 4;
    AADVICE: 5;
    EXP: 6;
    PSY: 7;
    REHAB: 8;
    SNF: 9;
    OTH: 10;
  }

  export const Value: ValueMap;
}

export class EncounterLocationStatusCode extends jspb.Message {
  getValue(): EncounterLocationStatusCode.ValueMap[keyof EncounterLocationStatusCode.ValueMap];
  setValue(value: EncounterLocationStatusCode.ValueMap[keyof EncounterLocationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterLocationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterLocationStatusCode): EncounterLocationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterLocationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterLocationStatusCode;
  static deserializeBinaryFromReader(message: EncounterLocationStatusCode, reader: jspb.BinaryReader): EncounterLocationStatusCode;
}

export namespace EncounterLocationStatusCode {
  export type AsObject = {
    value: EncounterLocationStatusCode.ValueMap[keyof EncounterLocationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    ACTIVE: 2;
    RESERVED: 3;
    COMPLETED: 4;
  }

  export const Value: ValueMap;
}

export class SpecialArrangementsCode extends jspb.Message {
  getValue(): SpecialArrangementsCode.ValueMap[keyof SpecialArrangementsCode.ValueMap];
  setValue(value: SpecialArrangementsCode.ValueMap[keyof SpecialArrangementsCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecialArrangementsCode.AsObject;
  static toObject(includeInstance: boolean, msg: SpecialArrangementsCode): SpecialArrangementsCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecialArrangementsCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecialArrangementsCode;
  static deserializeBinaryFromReader(message: SpecialArrangementsCode, reader: jspb.BinaryReader): SpecialArrangementsCode;
}

export namespace SpecialArrangementsCode {
  export type AsObject = {
    value: SpecialArrangementsCode.ValueMap[keyof SpecialArrangementsCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    WHEEL: 1;
    ADD_BED: 2;
    INT: 3;
    ATT: 4;
    DOG: 5;
  }

  export const Value: ValueMap;
}

export class EncounterStatusCode extends jspb.Message {
  getValue(): EncounterStatusCode.ValueMap[keyof EncounterStatusCode.ValueMap];
  setValue(value: EncounterStatusCode.ValueMap[keyof EncounterStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterStatusCode): EncounterStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterStatusCode;
  static deserializeBinaryFromReader(message: EncounterStatusCode, reader: jspb.BinaryReader): EncounterStatusCode;
}

export namespace EncounterStatusCode {
  export type AsObject = {
    value: EncounterStatusCode.ValueMap[keyof EncounterStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    ARRIVED: 2;
    TRIAGED: 3;
    IN_PROGRESS: 4;
    ONLEAVE: 5;
    FINISHED: 6;
    CANCELLED: 7;
    ENTERED_IN_ERROR: 8;
    UNKNOWN: 9;
  }

  export const Value: ValueMap;
}

export class EncounterTypeCode extends jspb.Message {
  getValue(): EncounterTypeCode.ValueMap[keyof EncounterTypeCode.ValueMap];
  setValue(value: EncounterTypeCode.ValueMap[keyof EncounterTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncounterTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EncounterTypeCode): EncounterTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncounterTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncounterTypeCode;
  static deserializeBinaryFromReader(message: EncounterTypeCode, reader: jspb.BinaryReader): EncounterTypeCode;
}

export namespace EncounterTypeCode {
  export type AsObject = {
    value: EncounterTypeCode.ValueMap[keyof EncounterTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADMS: 1;
    BD_BM_CLIN: 2;
    CCS60: 3;
    OKI: 4;
  }

  export const Value: ValueMap;
}

export class EndpointStatusCode extends jspb.Message {
  getValue(): EndpointStatusCode.ValueMap[keyof EndpointStatusCode.ValueMap];
  setValue(value: EndpointStatusCode.ValueMap[keyof EndpointStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EndpointStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EndpointStatusCode): EndpointStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EndpointStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EndpointStatusCode;
  static deserializeBinaryFromReader(message: EndpointStatusCode, reader: jspb.BinaryReader): EndpointStatusCode;
}

export namespace EndpointStatusCode {
  export type AsObject = {
    value: EndpointStatusCode.ValueMap[keyof EndpointStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    SUSPENDED: 2;
    ERROR: 3;
    OFF: 4;
    ENTERED_IN_ERROR: 5;
    TEST: 6;
  }

  export const Value: ValueMap;
}

export class EntityNamePartQualifierCode extends jspb.Message {
  getValue(): EntityNamePartQualifierCode.ValueMap[keyof EntityNamePartQualifierCode.ValueMap];
  setValue(value: EntityNamePartQualifierCode.ValueMap[keyof EntityNamePartQualifierCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntityNamePartQualifierCode.AsObject;
  static toObject(includeInstance: boolean, msg: EntityNamePartQualifierCode): EntityNamePartQualifierCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EntityNamePartQualifierCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntityNamePartQualifierCode;
  static deserializeBinaryFromReader(message: EntityNamePartQualifierCode, reader: jspb.BinaryReader): EntityNamePartQualifierCode;
}

export namespace EntityNamePartQualifierCode {
  export type AsObject = {
    value: EntityNamePartQualifierCode.ValueMap[keyof EntityNamePartQualifierCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LS: 1;
    AC: 2;
    NB: 3;
    PR: 4;
    HON: 5;
    BR: 6;
    AD: 7;
    SP: 8;
    MID: 9;
    CL: 10;
    IN: 11;
  }

  export const Value: ValueMap;
}

export class EnteralFormulaAdditiveTypeCodeCode extends jspb.Message {
  getValue(): EnteralFormulaAdditiveTypeCodeCode.ValueMap[keyof EnteralFormulaAdditiveTypeCodeCode.ValueMap];
  setValue(value: EnteralFormulaAdditiveTypeCodeCode.ValueMap[keyof EnteralFormulaAdditiveTypeCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnteralFormulaAdditiveTypeCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EnteralFormulaAdditiveTypeCodeCode): EnteralFormulaAdditiveTypeCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnteralFormulaAdditiveTypeCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnteralFormulaAdditiveTypeCodeCode;
  static deserializeBinaryFromReader(message: EnteralFormulaAdditiveTypeCodeCode, reader: jspb.BinaryReader): EnteralFormulaAdditiveTypeCodeCode;
}

export namespace EnteralFormulaAdditiveTypeCodeCode {
  export type AsObject = {
    value: EnteralFormulaAdditiveTypeCodeCode.ValueMap[keyof EnteralFormulaAdditiveTypeCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LIPID: 1;
    PROTEIN: 2;
    CARBOHYDRATE: 3;
    FIBER: 4;
    WATER: 5;
  }

  export const Value: ValueMap;
}

export class EpisodeOfCareStatusCode extends jspb.Message {
  getValue(): EpisodeOfCareStatusCode.ValueMap[keyof EpisodeOfCareStatusCode.ValueMap];
  setValue(value: EpisodeOfCareStatusCode.ValueMap[keyof EpisodeOfCareStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpisodeOfCareStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EpisodeOfCareStatusCode): EpisodeOfCareStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpisodeOfCareStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpisodeOfCareStatusCode;
  static deserializeBinaryFromReader(message: EpisodeOfCareStatusCode, reader: jspb.BinaryReader): EpisodeOfCareStatusCode;
}

export namespace EpisodeOfCareStatusCode {
  export type AsObject = {
    value: EpisodeOfCareStatusCode.ValueMap[keyof EpisodeOfCareStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PLANNED: 1;
    WAIT: 2;
    ACTIVE: 3;
    ONHOLD: 4;
    FINISHED: 5;
    CANCELLED: 6;
    ENTERED_IN_ERROR: 7;
  }

  export const Value: ValueMap;
}

export class EpisodeOfCareTypeCode extends jspb.Message {
  getValue(): EpisodeOfCareTypeCode.ValueMap[keyof EpisodeOfCareTypeCode.ValueMap];
  setValue(value: EpisodeOfCareTypeCode.ValueMap[keyof EpisodeOfCareTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EpisodeOfCareTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EpisodeOfCareTypeCode): EpisodeOfCareTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EpisodeOfCareTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EpisodeOfCareTypeCode;
  static deserializeBinaryFromReader(message: EpisodeOfCareTypeCode, reader: jspb.BinaryReader): EpisodeOfCareTypeCode;
}

export namespace EpisodeOfCareTypeCode {
  export type AsObject = {
    value: EpisodeOfCareTypeCode.ValueMap[keyof EpisodeOfCareTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HACC: 1;
    PAC: 2;
    DIAB: 3;
    DA: 4;
    CACP: 5;
  }

  export const Value: ValueMap;
}

export class EventCapabilityModeCode extends jspb.Message {
  getValue(): EventCapabilityModeCode.ValueMap[keyof EventCapabilityModeCode.ValueMap];
  setValue(value: EventCapabilityModeCode.ValueMap[keyof EventCapabilityModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventCapabilityModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventCapabilityModeCode): EventCapabilityModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventCapabilityModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventCapabilityModeCode;
  static deserializeBinaryFromReader(message: EventCapabilityModeCode, reader: jspb.BinaryReader): EventCapabilityModeCode;
}

export namespace EventCapabilityModeCode {
  export type AsObject = {
    value: EventCapabilityModeCode.ValueMap[keyof EventCapabilityModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SENDER: 1;
    RECEIVER: 2;
  }

  export const Value: ValueMap;
}

export class EventStatusCode extends jspb.Message {
  getValue(): EventStatusCode.ValueMap[keyof EventStatusCode.ValueMap];
  setValue(value: EventStatusCode.ValueMap[keyof EventStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: EventStatusCode): EventStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventStatusCode;
  static deserializeBinaryFromReader(message: EventStatusCode, reader: jspb.BinaryReader): EventStatusCode;
}

export namespace EventStatusCode {
  export type AsObject = {
    value: EventStatusCode.ValueMap[keyof EventStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREPARATION: 1;
    IN_PROGRESS: 2;
    SUSPENDED: 3;
    ABORTED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class ClaimPayeeResourceTypeCode extends jspb.Message {
  getValue(): ClaimPayeeResourceTypeCode.ValueMap[keyof ClaimPayeeResourceTypeCode.ValueMap];
  setValue(value: ClaimPayeeResourceTypeCode.ValueMap[keyof ClaimPayeeResourceTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimPayeeResourceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimPayeeResourceTypeCode): ClaimPayeeResourceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimPayeeResourceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimPayeeResourceTypeCode;
  static deserializeBinaryFromReader(message: ClaimPayeeResourceTypeCode, reader: jspb.BinaryReader): ClaimPayeeResourceTypeCode;
}

export namespace ClaimPayeeResourceTypeCode {
  export type AsObject = {
    value: ClaimPayeeResourceTypeCode.ValueMap[keyof ClaimPayeeResourceTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ORGANIZATION: 1;
    PATIENT: 2;
    PRACTITIONER: 3;
    RELATEDPERSON: 4;
  }

  export const Value: ValueMap;
}

export class ExplanationOfBenefitStatusCode extends jspb.Message {
  getValue(): ExplanationOfBenefitStatusCode.ValueMap[keyof ExplanationOfBenefitStatusCode.ValueMap];
  setValue(value: ExplanationOfBenefitStatusCode.ValueMap[keyof ExplanationOfBenefitStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExplanationOfBenefitStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExplanationOfBenefitStatusCode): ExplanationOfBenefitStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExplanationOfBenefitStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExplanationOfBenefitStatusCode;
  static deserializeBinaryFromReader(message: ExplanationOfBenefitStatusCode, reader: jspb.BinaryReader): ExplanationOfBenefitStatusCode;
}

export namespace ExplanationOfBenefitStatusCode {
  export type AsObject = {
    value: ExplanationOfBenefitStatusCode.ValueMap[keyof ExplanationOfBenefitStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    CANCELLED: 2;
    DRAFT: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class ExtensionContextCode extends jspb.Message {
  getValue(): ExtensionContextCode.ValueMap[keyof ExtensionContextCode.ValueMap];
  setValue(value: ExtensionContextCode.ValueMap[keyof ExtensionContextCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExtensionContextCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExtensionContextCode): ExtensionContextCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExtensionContextCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExtensionContextCode;
  static deserializeBinaryFromReader(message: ExtensionContextCode, reader: jspb.BinaryReader): ExtensionContextCode;
}

export namespace ExtensionContextCode {
  export type AsObject = {
    value: ExtensionContextCode.ValueMap[keyof ExtensionContextCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RESOURCE: 1;
    DATATYPE: 2;
    EXTENSION: 3;
  }

  export const Value: ValueMap;
}

export class FilterOperatorCode extends jspb.Message {
  getValue(): FilterOperatorCode.ValueMap[keyof FilterOperatorCode.ValueMap];
  setValue(value: FilterOperatorCode.ValueMap[keyof FilterOperatorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterOperatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: FilterOperatorCode): FilterOperatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterOperatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterOperatorCode;
  static deserializeBinaryFromReader(message: FilterOperatorCode, reader: jspb.BinaryReader): FilterOperatorCode;
}

export namespace FilterOperatorCode {
  export type AsObject = {
    value: FilterOperatorCode.ValueMap[keyof FilterOperatorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQUALS: 1;
    IS_A: 2;
    DESCENDENT_OF: 3;
    IS_NOT_A: 4;
    REGEX: 5;
    IN: 6;
    NOT_IN: 7;
    GENERALIZES: 8;
    EXISTS: 9;
  }

  export const Value: ValueMap;
}

export class FlagCategoryCode extends jspb.Message {
  getValue(): FlagCategoryCode.ValueMap[keyof FlagCategoryCode.ValueMap];
  setValue(value: FlagCategoryCode.ValueMap[keyof FlagCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: FlagCategoryCode): FlagCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagCategoryCode;
  static deserializeBinaryFromReader(message: FlagCategoryCode, reader: jspb.BinaryReader): FlagCategoryCode;
}

export namespace FlagCategoryCode {
  export type AsObject = {
    value: FlagCategoryCode.ValueMap[keyof FlagCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DIET: 1;
    DRUG: 2;
    LAB: 3;
    ADMIN: 4;
    CONTACT: 5;
  }

  export const Value: ValueMap;
}

export class FlagPriorityCodesCode extends jspb.Message {
  getValue(): FlagPriorityCodesCode.ValueMap[keyof FlagPriorityCodesCode.ValueMap];
  setValue(value: FlagPriorityCodesCode.ValueMap[keyof FlagPriorityCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagPriorityCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: FlagPriorityCodesCode): FlagPriorityCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagPriorityCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagPriorityCodesCode;
  static deserializeBinaryFromReader(message: FlagPriorityCodesCode, reader: jspb.BinaryReader): FlagPriorityCodesCode;
}

export namespace FlagPriorityCodesCode {
  export type AsObject = {
    value: FlagPriorityCodesCode.ValueMap[keyof FlagPriorityCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PN: 1;
    PL: 2;
    PM: 3;
    PH: 4;
  }

  export const Value: ValueMap;
}

export class FlagStatusCode extends jspb.Message {
  getValue(): FlagStatusCode.ValueMap[keyof FlagStatusCode.ValueMap];
  setValue(value: FlagStatusCode.ValueMap[keyof FlagStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlagStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FlagStatusCode): FlagStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlagStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlagStatusCode;
  static deserializeBinaryFromReader(message: FlagStatusCode, reader: jspb.BinaryReader): FlagStatusCode;
}

export namespace FlagStatusCode {
  export type AsObject = {
    value: FlagStatusCode.ValueMap[keyof FlagStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class FinancialResourceStatusCode extends jspb.Message {
  getValue(): FinancialResourceStatusCode.ValueMap[keyof FinancialResourceStatusCode.ValueMap];
  setValue(value: FinancialResourceStatusCode.ValueMap[keyof FinancialResourceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinancialResourceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FinancialResourceStatusCode): FinancialResourceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FinancialResourceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinancialResourceStatusCode;
  static deserializeBinaryFromReader(message: FinancialResourceStatusCode, reader: jspb.BinaryReader): FinancialResourceStatusCode;
}

export namespace FinancialResourceStatusCode {
  export type AsObject = {
    value: FinancialResourceStatusCode.ValueMap[keyof FinancialResourceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    CANCELLED: 2;
    DRAFT: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class GoalAcceptanceStatusCode extends jspb.Message {
  getValue(): GoalAcceptanceStatusCode.ValueMap[keyof GoalAcceptanceStatusCode.ValueMap];
  setValue(value: GoalAcceptanceStatusCode.ValueMap[keyof GoalAcceptanceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalAcceptanceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalAcceptanceStatusCode): GoalAcceptanceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalAcceptanceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalAcceptanceStatusCode;
  static deserializeBinaryFromReader(message: GoalAcceptanceStatusCode, reader: jspb.BinaryReader): GoalAcceptanceStatusCode;
}

export namespace GoalAcceptanceStatusCode {
  export type AsObject = {
    value: GoalAcceptanceStatusCode.ValueMap[keyof GoalAcceptanceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AGREE: 1;
    DISAGREE: 2;
    PENDING: 3;
  }

  export const Value: ValueMap;
}

export class GoalCategoryCode extends jspb.Message {
  getValue(): GoalCategoryCode.ValueMap[keyof GoalCategoryCode.ValueMap];
  setValue(value: GoalCategoryCode.ValueMap[keyof GoalCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalCategoryCode): GoalCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalCategoryCode;
  static deserializeBinaryFromReader(message: GoalCategoryCode, reader: jspb.BinaryReader): GoalCategoryCode;
}

export namespace GoalCategoryCode {
  export type AsObject = {
    value: GoalCategoryCode.ValueMap[keyof GoalCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DIETARY: 1;
    SAFETY: 2;
    BEHAVIORAL: 3;
    NURSING: 4;
    PHYSIOTHERAPY: 5;
  }

  export const Value: ValueMap;
}

export class GoalPriorityCode extends jspb.Message {
  getValue(): GoalPriorityCode.ValueMap[keyof GoalPriorityCode.ValueMap];
  setValue(value: GoalPriorityCode.ValueMap[keyof GoalPriorityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalPriorityCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalPriorityCode): GoalPriorityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalPriorityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalPriorityCode;
  static deserializeBinaryFromReader(message: GoalPriorityCode, reader: jspb.BinaryReader): GoalPriorityCode;
}

export namespace GoalPriorityCode {
  export type AsObject = {
    value: GoalPriorityCode.ValueMap[keyof GoalPriorityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HIGH_PRIORITY: 1;
    MEDIUM_PRIORITY: 2;
    LOW_PRIORITY: 3;
  }

  export const Value: ValueMap;
}

export class GoalRelationshipTypeCode extends jspb.Message {
  getValue(): GoalRelationshipTypeCode.ValueMap[keyof GoalRelationshipTypeCode.ValueMap];
  setValue(value: GoalRelationshipTypeCode.ValueMap[keyof GoalRelationshipTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalRelationshipTypeCode): GoalRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalRelationshipTypeCode;
  static deserializeBinaryFromReader(message: GoalRelationshipTypeCode, reader: jspb.BinaryReader): GoalRelationshipTypeCode;
}

export namespace GoalRelationshipTypeCode {
  export type AsObject = {
    value: GoalRelationshipTypeCode.ValueMap[keyof GoalRelationshipTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREDECESSOR: 1;
    SUCCESSOR: 2;
    REPLACEMENT: 3;
    MILESTONE: 4;
    OTHER: 5;
  }

  export const Value: ValueMap;
}

export class GoalStatusCode extends jspb.Message {
  getValue(): GoalStatusCode.ValueMap[keyof GoalStatusCode.ValueMap];
  setValue(value: GoalStatusCode.ValueMap[keyof GoalStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalStatusCode): GoalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalStatusCode;
  static deserializeBinaryFromReader(message: GoalStatusCode, reader: jspb.BinaryReader): GoalStatusCode;
}

export namespace GoalStatusCode {
  export type AsObject = {
    value: GoalStatusCode.ValueMap[keyof GoalStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    ACCEPTED: 2;
    PLANNED: 3;
    IN_PROGRESS: 4;
    ON_TARGET: 5;
    AHEAD_OF_TARGET: 6;
    BEHIND_TARGET: 7;
    SUSTAINING: 8;
    ACHIEVED: 9;
    ON_HOLD: 10;
    CANCELLED: 11;
    ENTERED_IN_ERROR: 12;
    REJECTED: 13;
  }

  export const Value: ValueMap;
}

export class GoalStatusReasonCode extends jspb.Message {
  getValue(): GoalStatusReasonCode.ValueMap[keyof GoalStatusReasonCode.ValueMap];
  setValue(value: GoalStatusReasonCode.ValueMap[keyof GoalStatusReasonCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoalStatusReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: GoalStatusReasonCode): GoalStatusReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GoalStatusReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoalStatusReasonCode;
  static deserializeBinaryFromReader(message: GoalStatusReasonCode, reader: jspb.BinaryReader): GoalStatusReasonCode;
}

export namespace GoalStatusReasonCode {
  export type AsObject = {
    value: GoalStatusReasonCode.ValueMap[keyof GoalStatusReasonCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SURGERY: 1;
    LIFE_EVENT: 2;
    REPLACED: 3;
    PATIENT_REQUEST: 4;
    TEMP_NOT_ATTAINABLE: 5;
    PERMANENT_NOT_ATTAINABLE: 6;
    FINANCIAL_BARRIER: 7;
    LACK_OF_TRANSPORTATION: 8;
    LACK_OF_SOCIAL_SUPPORT: 9;
  }

  export const Value: ValueMap;
}

export class GraphCompartmentRuleCode extends jspb.Message {
  getValue(): GraphCompartmentRuleCode.ValueMap[keyof GraphCompartmentRuleCode.ValueMap];
  setValue(value: GraphCompartmentRuleCode.ValueMap[keyof GraphCompartmentRuleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GraphCompartmentRuleCode.AsObject;
  static toObject(includeInstance: boolean, msg: GraphCompartmentRuleCode): GraphCompartmentRuleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GraphCompartmentRuleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GraphCompartmentRuleCode;
  static deserializeBinaryFromReader(message: GraphCompartmentRuleCode, reader: jspb.BinaryReader): GraphCompartmentRuleCode;
}

export namespace GraphCompartmentRuleCode {
  export type AsObject = {
    value: GraphCompartmentRuleCode.ValueMap[keyof GraphCompartmentRuleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IDENTICAL: 1;
    MATCHING: 2;
    DIFFERENT: 3;
    CUSTOM: 4;
  }

  export const Value: ValueMap;
}

export class GroupTypeCode extends jspb.Message {
  getValue(): GroupTypeCode.ValueMap[keyof GroupTypeCode.ValueMap];
  setValue(value: GroupTypeCode.ValueMap[keyof GroupTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: GroupTypeCode): GroupTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupTypeCode;
  static deserializeBinaryFromReader(message: GroupTypeCode, reader: jspb.BinaryReader): GroupTypeCode;
}

export namespace GroupTypeCode {
  export type AsObject = {
    value: GroupTypeCode.ValueMap[keyof GroupTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PERSON: 1;
    ANIMAL: 2;
    PRACTITIONER: 3;
    DEVICE: 4;
    MEDICATION: 5;
    SUBSTANCE: 6;
  }

  export const Value: ValueMap;
}

export class GuidanceResponseStatusCode extends jspb.Message {
  getValue(): GuidanceResponseStatusCode.ValueMap[keyof GuidanceResponseStatusCode.ValueMap];
  setValue(value: GuidanceResponseStatusCode.ValueMap[keyof GuidanceResponseStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidanceResponseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuidanceResponseStatusCode): GuidanceResponseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidanceResponseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidanceResponseStatusCode;
  static deserializeBinaryFromReader(message: GuidanceResponseStatusCode, reader: jspb.BinaryReader): GuidanceResponseStatusCode;
}

export namespace GuidanceResponseStatusCode {
  export type AsObject = {
    value: GuidanceResponseStatusCode.ValueMap[keyof GuidanceResponseStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUCCESS: 1;
    DATA_REQUESTED: 2;
    DATA_REQUIRED: 3;
    IN_PROGRESS: 4;
    FAILURE: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class GuideDependencyTypeCode extends jspb.Message {
  getValue(): GuideDependencyTypeCode.ValueMap[keyof GuideDependencyTypeCode.ValueMap];
  setValue(value: GuideDependencyTypeCode.ValueMap[keyof GuideDependencyTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuideDependencyTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuideDependencyTypeCode): GuideDependencyTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuideDependencyTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuideDependencyTypeCode;
  static deserializeBinaryFromReader(message: GuideDependencyTypeCode, reader: jspb.BinaryReader): GuideDependencyTypeCode;
}

export namespace GuideDependencyTypeCode {
  export type AsObject = {
    value: GuideDependencyTypeCode.ValueMap[keyof GuideDependencyTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REFERENCE: 1;
    INCLUSION: 2;
  }

  export const Value: ValueMap;
}

export class GuidePageKindCode extends jspb.Message {
  getValue(): GuidePageKindCode.ValueMap[keyof GuidePageKindCode.ValueMap];
  setValue(value: GuidePageKindCode.ValueMap[keyof GuidePageKindCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GuidePageKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: GuidePageKindCode): GuidePageKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GuidePageKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GuidePageKindCode;
  static deserializeBinaryFromReader(message: GuidePageKindCode, reader: jspb.BinaryReader): GuidePageKindCode;
}

export namespace GuidePageKindCode {
  export type AsObject = {
    value: GuidePageKindCode.ValueMap[keyof GuidePageKindCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PAGE: 1;
    EXAMPLE: 2;
    LIST: 3;
    INCLUDE: 4;
    DIRECTORY: 5;
    DICTIONARY: 6;
    TOC: 7;
    RESOURCE: 8;
  }

  export const Value: ValueMap;
}

export class FamilyHistoryNotDoneReasonCode extends jspb.Message {
  getValue(): FamilyHistoryNotDoneReasonCode.ValueMap[keyof FamilyHistoryNotDoneReasonCode.ValueMap];
  setValue(value: FamilyHistoryNotDoneReasonCode.ValueMap[keyof FamilyHistoryNotDoneReasonCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyHistoryNotDoneReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyHistoryNotDoneReasonCode): FamilyHistoryNotDoneReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyHistoryNotDoneReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyHistoryNotDoneReasonCode;
  static deserializeBinaryFromReader(message: FamilyHistoryNotDoneReasonCode, reader: jspb.BinaryReader): FamilyHistoryNotDoneReasonCode;
}

export namespace FamilyHistoryNotDoneReasonCode {
  export type AsObject = {
    value: FamilyHistoryNotDoneReasonCode.ValueMap[keyof FamilyHistoryNotDoneReasonCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUBJECT_UNKNOWN: 1;
    WITHHELD: 2;
    UNABLE_TO_OBTAIN: 3;
    DEFERRED: 4;
  }

  export const Value: ValueMap;
}

export class FamilyHistoryStatusCode extends jspb.Message {
  getValue(): FamilyHistoryStatusCode.ValueMap[keyof FamilyHistoryStatusCode.ValueMap];
  setValue(value: FamilyHistoryStatusCode.ValueMap[keyof FamilyHistoryStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FamilyHistoryStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FamilyHistoryStatusCode): FamilyHistoryStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FamilyHistoryStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FamilyHistoryStatusCode;
  static deserializeBinaryFromReader(message: FamilyHistoryStatusCode, reader: jspb.BinaryReader): FamilyHistoryStatusCode;
}

export namespace FamilyHistoryStatusCode {
  export type AsObject = {
    value: FamilyHistoryStatusCode.ValueMap[keyof FamilyHistoryStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PARTIAL: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    HEALTH_UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class HL7WorkgroupCode extends jspb.Message {
  getValue(): HL7WorkgroupCode.ValueMap[keyof HL7WorkgroupCode.ValueMap];
  setValue(value: HL7WorkgroupCode.ValueMap[keyof HL7WorkgroupCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HL7WorkgroupCode.AsObject;
  static toObject(includeInstance: boolean, msg: HL7WorkgroupCode): HL7WorkgroupCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HL7WorkgroupCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HL7WorkgroupCode;
  static deserializeBinaryFromReader(message: HL7WorkgroupCode, reader: jspb.BinaryReader): HL7WorkgroupCode;
}

export namespace HL7WorkgroupCode {
  export type AsObject = {
    value: HL7WorkgroupCode.ValueMap[keyof HL7WorkgroupCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CBCC: 1;
    CDS: 2;
    CQI: 3;
    CG: 4;
    DEV: 5;
    EHR: 6;
    FHIR: 7;
    FM: 8;
    HSI: 9;
    II: 10;
    INM: 11;
    ITS: 12;
    OO: 13;
    PA: 14;
    PC: 15;
    PHER: 16;
    PHX: 17;
    RCRIM: 18;
    SD: 19;
    SEC: 20;
    US: 21;
    VOCAB: 22;
    AID: 23;
  }

  export const Value: ValueMap;
}

export class TestScriptRequestMethodCodeCode extends jspb.Message {
  getValue(): TestScriptRequestMethodCodeCode.ValueMap[keyof TestScriptRequestMethodCodeCode.ValueMap];
  setValue(value: TestScriptRequestMethodCodeCode.ValueMap[keyof TestScriptRequestMethodCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScriptRequestMethodCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestScriptRequestMethodCodeCode): TestScriptRequestMethodCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScriptRequestMethodCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScriptRequestMethodCodeCode;
  static deserializeBinaryFromReader(message: TestScriptRequestMethodCodeCode, reader: jspb.BinaryReader): TestScriptRequestMethodCodeCode;
}

export namespace TestScriptRequestMethodCodeCode {
  export type AsObject = {
    value: TestScriptRequestMethodCodeCode.ValueMap[keyof TestScriptRequestMethodCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DELETE: 1;
    GET: 2;
    OPTIONS: 3;
    PATCH: 4;
    POST: 5;
    PUT: 6;
  }

  export const Value: ValueMap;
}

export class HTTPVerbCode extends jspb.Message {
  getValue(): HTTPVerbCode.ValueMap[keyof HTTPVerbCode.ValueMap];
  setValue(value: HTTPVerbCode.ValueMap[keyof HTTPVerbCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPVerbCode.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPVerbCode): HTTPVerbCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPVerbCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPVerbCode;
  static deserializeBinaryFromReader(message: HTTPVerbCode, reader: jspb.BinaryReader): HTTPVerbCode;
}

export namespace HTTPVerbCode {
  export type AsObject = {
    value: HTTPVerbCode.ValueMap[keyof HTTPVerbCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GET: 1;
    POST: 2;
    PUT: 3;
    DELETE: 4;
  }

  export const Value: ValueMap;
}

export class IdentityAssuranceLevelCode extends jspb.Message {
  getValue(): IdentityAssuranceLevelCode.ValueMap[keyof IdentityAssuranceLevelCode.ValueMap];
  setValue(value: IdentityAssuranceLevelCode.ValueMap[keyof IdentityAssuranceLevelCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityAssuranceLevelCode.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityAssuranceLevelCode): IdentityAssuranceLevelCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IdentityAssuranceLevelCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityAssuranceLevelCode;
  static deserializeBinaryFromReader(message: IdentityAssuranceLevelCode, reader: jspb.BinaryReader): IdentityAssuranceLevelCode;
}

export namespace IdentityAssuranceLevelCode {
  export type AsObject = {
    value: IdentityAssuranceLevelCode.ValueMap[keyof IdentityAssuranceLevelCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LEVEL1: 1;
    LEVEL2: 2;
    LEVEL3: 3;
    LEVEL4: 4;
  }

  export const Value: ValueMap;
}

export class ImmunizationOriginCodesCode extends jspb.Message {
  getValue(): ImmunizationOriginCodesCode.ValueMap[keyof ImmunizationOriginCodesCode.ValueMap];
  setValue(value: ImmunizationOriginCodesCode.ValueMap[keyof ImmunizationOriginCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationOriginCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationOriginCodesCode): ImmunizationOriginCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationOriginCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationOriginCodesCode;
  static deserializeBinaryFromReader(message: ImmunizationOriginCodesCode, reader: jspb.BinaryReader): ImmunizationOriginCodesCode;
}

export namespace ImmunizationOriginCodesCode {
  export type AsObject = {
    value: ImmunizationOriginCodesCode.ValueMap[keyof ImmunizationOriginCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROVIDER: 1;
    RECORD: 2;
    RECALL: 3;
    SCHOOL: 4;
  }

  export const Value: ValueMap;
}

export class ImmunizationRecommendationDateCriterionCodesCode extends jspb.Message {
  getValue(): ImmunizationRecommendationDateCriterionCodesCode.ValueMap[keyof ImmunizationRecommendationDateCriterionCodesCode.ValueMap];
  setValue(value: ImmunizationRecommendationDateCriterionCodesCode.ValueMap[keyof ImmunizationRecommendationDateCriterionCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationRecommendationDateCriterionCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationRecommendationDateCriterionCodesCode): ImmunizationRecommendationDateCriterionCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationRecommendationDateCriterionCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationRecommendationDateCriterionCodesCode;
  static deserializeBinaryFromReader(message: ImmunizationRecommendationDateCriterionCodesCode, reader: jspb.BinaryReader): ImmunizationRecommendationDateCriterionCodesCode;
}

export namespace ImmunizationRecommendationDateCriterionCodesCode {
  export type AsObject = {
    value: ImmunizationRecommendationDateCriterionCodesCode.ValueMap[keyof ImmunizationRecommendationDateCriterionCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DUE: 1;
    RECOMMENDED: 2;
    EARLIEST: 3;
    OVERDUE: 4;
    LATEST: 5;
  }

  export const Value: ValueMap;
}

export class ImmunizationRecommendationStatusCodesCode extends jspb.Message {
  getValue(): ImmunizationRecommendationStatusCodesCode.ValueMap[keyof ImmunizationRecommendationStatusCodesCode.ValueMap];
  setValue(value: ImmunizationRecommendationStatusCodesCode.ValueMap[keyof ImmunizationRecommendationStatusCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationRecommendationStatusCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationRecommendationStatusCodesCode): ImmunizationRecommendationStatusCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationRecommendationStatusCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationRecommendationStatusCodesCode;
  static deserializeBinaryFromReader(message: ImmunizationRecommendationStatusCodesCode, reader: jspb.BinaryReader): ImmunizationRecommendationStatusCodesCode;
}

export namespace ImmunizationRecommendationStatusCodesCode {
  export type AsObject = {
    value: ImmunizationRecommendationStatusCodesCode.ValueMap[keyof ImmunizationRecommendationStatusCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DUE: 1;
    OVERDUE: 2;
  }

  export const Value: ValueMap;
}

export class ImmunizationStatusCodesCode extends jspb.Message {
  getValue(): ImmunizationStatusCodesCode.ValueMap[keyof ImmunizationStatusCodesCode.ValueMap];
  setValue(value: ImmunizationStatusCodesCode.ValueMap[keyof ImmunizationStatusCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImmunizationStatusCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImmunizationStatusCodesCode): ImmunizationStatusCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImmunizationStatusCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImmunizationStatusCodesCode;
  static deserializeBinaryFromReader(message: ImmunizationStatusCodesCode, reader: jspb.BinaryReader): ImmunizationStatusCodesCode;
}

export namespace ImmunizationStatusCodesCode {
  export type AsObject = {
    value: ImmunizationStatusCodesCode.ValueMap[keyof ImmunizationStatusCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETED: 1;
    ENTERED_IN_ERROR: 2;
  }

  export const Value: ValueMap;
}

export class ImplantStatusCode extends jspb.Message {
  getValue(): ImplantStatusCode.ValueMap[keyof ImplantStatusCode.ValueMap];
  setValue(value: ImplantStatusCode.ValueMap[keyof ImplantStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImplantStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ImplantStatusCode): ImplantStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImplantStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImplantStatusCode;
  static deserializeBinaryFromReader(message: ImplantStatusCode, reader: jspb.BinaryReader): ImplantStatusCode;
}

export namespace ImplantStatusCode {
  export type AsObject = {
    value: ImplantStatusCode.ValueMap[keyof ImplantStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FUNCTIONAL: 1;
    NON_FUNCTIONAL: 2;
    DISABLED: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class InstanceAvailabilityCode extends jspb.Message {
  getValue(): InstanceAvailabilityCode.ValueMap[keyof InstanceAvailabilityCode.ValueMap];
  setValue(value: InstanceAvailabilityCode.ValueMap[keyof InstanceAvailabilityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstanceAvailabilityCode.AsObject;
  static toObject(includeInstance: boolean, msg: InstanceAvailabilityCode): InstanceAvailabilityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstanceAvailabilityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstanceAvailabilityCode;
  static deserializeBinaryFromReader(message: InstanceAvailabilityCode, reader: jspb.BinaryReader): InstanceAvailabilityCode;
}

export namespace InstanceAvailabilityCode {
  export type AsObject = {
    value: InstanceAvailabilityCode.ValueMap[keyof InstanceAvailabilityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ONLINE: 1;
    OFFLINE: 2;
    NEARLINE: 3;
    UNAVAILABLE: 4;
  }

  export const Value: ValueMap;
}

export class IssueSeverityCode extends jspb.Message {
  getValue(): IssueSeverityCode.ValueMap[keyof IssueSeverityCode.ValueMap];
  setValue(value: IssueSeverityCode.ValueMap[keyof IssueSeverityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: IssueSeverityCode): IssueSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueSeverityCode;
  static deserializeBinaryFromReader(message: IssueSeverityCode, reader: jspb.BinaryReader): IssueSeverityCode;
}

export namespace IssueSeverityCode {
  export type AsObject = {
    value: IssueSeverityCode.ValueMap[keyof IssueSeverityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FATAL: 1;
    ERROR: 2;
    WARNING: 3;
    INFORMATION: 4;
  }

  export const Value: ValueMap;
}

export class IssueTypeCode extends jspb.Message {
  getValue(): IssueTypeCode.ValueMap[keyof IssueTypeCode.ValueMap];
  setValue(value: IssueTypeCode.ValueMap[keyof IssueTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: IssueTypeCode): IssueTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueTypeCode;
  static deserializeBinaryFromReader(message: IssueTypeCode, reader: jspb.BinaryReader): IssueTypeCode;
}

export namespace IssueTypeCode {
  export type AsObject = {
    value: IssueTypeCode.ValueMap[keyof IssueTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INVALID: 1;
    STRUCTURE: 2;
    REQUIRED: 3;
    VALUE: 4;
    INVARIANT: 5;
    SECURITY: 6;
    LOGIN: 7;
    UNKNOWN: 8;
    EXPIRED: 9;
    FORBIDDEN: 10;
    SUPPRESSED: 11;
    PROCESSING: 12;
    NOT_SUPPORTED: 13;
    DUPLICATE: 14;
    NOT_FOUND: 15;
    TOO_LONG: 16;
    CODE_INVALID: 17;
    EXTENSION: 18;
    TOO_COSTLY: 19;
    BUSINESS_RULE: 20;
    CONFLICT: 21;
    INCOMPLETE: 22;
    TRANSIENT: 23;
    LOCK_ERROR: 24;
    NO_STORE: 25;
    EXCEPTION: 26;
    TIMEOUT: 27;
    THROTTLED: 28;
    INFORMATIONAL: 29;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemTypeCode extends jspb.Message {
  getValue(): QuestionnaireItemTypeCode.ValueMap[keyof QuestionnaireItemTypeCode.ValueMap];
  setValue(value: QuestionnaireItemTypeCode.ValueMap[keyof QuestionnaireItemTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemTypeCode): QuestionnaireItemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemTypeCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemTypeCode, reader: jspb.BinaryReader): QuestionnaireItemTypeCode;
}

export namespace QuestionnaireItemTypeCode {
  export type AsObject = {
    value: QuestionnaireItemTypeCode.ValueMap[keyof QuestionnaireItemTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GROUP: 1;
    DISPLAY: 2;
    QUESTION: 3;
    BOOLEAN: 4;
    DECIMAL: 5;
    INTEGER: 6;
    DATE: 7;
    DATE_TIME: 8;
    TIME: 9;
    STRING: 10;
    TEXT: 11;
    URL: 12;
    CHOICE: 13;
    OPEN_CHOICE: 14;
    ATTACHMENT: 15;
    REFERENCE: 16;
    QUANTITY: 17;
  }

  export const Value: ValueMap;
}

export class LibraryTypeCode extends jspb.Message {
  getValue(): LibraryTypeCode.ValueMap[keyof LibraryTypeCode.ValueMap];
  setValue(value: LibraryTypeCode.ValueMap[keyof LibraryTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LibraryTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LibraryTypeCode): LibraryTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LibraryTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LibraryTypeCode;
  static deserializeBinaryFromReader(message: LibraryTypeCode, reader: jspb.BinaryReader): LibraryTypeCode;
}

export namespace LibraryTypeCode {
  export type AsObject = {
    value: LibraryTypeCode.ValueMap[keyof LibraryTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LOGIC_LIBRARY: 1;
    MODEL_DEFINITION: 2;
    ASSET_COLLECTION: 3;
    MODULE_DEFINITION: 4;
  }

  export const Value: ValueMap;
}

export class LinkageTypeCode extends jspb.Message {
  getValue(): LinkageTypeCode.ValueMap[keyof LinkageTypeCode.ValueMap];
  setValue(value: LinkageTypeCode.ValueMap[keyof LinkageTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkageTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LinkageTypeCode): LinkageTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkageTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkageTypeCode;
  static deserializeBinaryFromReader(message: LinkageTypeCode, reader: jspb.BinaryReader): LinkageTypeCode;
}

export namespace LinkageTypeCode {
  export type AsObject = {
    value: LinkageTypeCode.ValueMap[keyof LinkageTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    ALTERNATE: 2;
    HISTORICAL: 3;
  }

  export const Value: ValueMap;
}

export class LinkTypeCode extends jspb.Message {
  getValue(): LinkTypeCode.ValueMap[keyof LinkTypeCode.ValueMap];
  setValue(value: LinkTypeCode.ValueMap[keyof LinkTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LinkTypeCode): LinkTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LinkTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkTypeCode;
  static deserializeBinaryFromReader(message: LinkTypeCode, reader: jspb.BinaryReader): LinkTypeCode;
}

export namespace LinkTypeCode {
  export type AsObject = {
    value: LinkTypeCode.ValueMap[keyof LinkTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REPLACED_BY: 1;
    REPLACES: 2;
    REFER: 3;
    SEEALSO: 4;
  }

  export const Value: ValueMap;
}

export class ListEmptyReasonsCode extends jspb.Message {
  getValue(): ListEmptyReasonsCode.ValueMap[keyof ListEmptyReasonsCode.ValueMap];
  setValue(value: ListEmptyReasonsCode.ValueMap[keyof ListEmptyReasonsCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEmptyReasonsCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListEmptyReasonsCode): ListEmptyReasonsCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEmptyReasonsCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEmptyReasonsCode;
  static deserializeBinaryFromReader(message: ListEmptyReasonsCode, reader: jspb.BinaryReader): ListEmptyReasonsCode;
}

export namespace ListEmptyReasonsCode {
  export type AsObject = {
    value: ListEmptyReasonsCode.ValueMap[keyof ListEmptyReasonsCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NILKNOWN: 1;
    NOTASKED: 2;
    WITHHELD: 3;
    UNAVAILABLE: 4;
    NOTSTARTED: 5;
    CLOSED: 6;
  }

  export const Value: ValueMap;
}

export class ExampleUseCodesforListCode extends jspb.Message {
  getValue(): ExampleUseCodesforListCode.ValueMap[keyof ExampleUseCodesforListCode.ValueMap];
  setValue(value: ExampleUseCodesforListCode.ValueMap[keyof ExampleUseCodesforListCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleUseCodesforListCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleUseCodesforListCode): ExampleUseCodesforListCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleUseCodesforListCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleUseCodesforListCode;
  static deserializeBinaryFromReader(message: ExampleUseCodesforListCode, reader: jspb.BinaryReader): ExampleUseCodesforListCode;
}

export namespace ExampleUseCodesforListCode {
  export type AsObject = {
    value: ExampleUseCodesforListCode.ValueMap[keyof ExampleUseCodesforListCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALERTS: 1;
    ADVERSERXNS: 2;
    ALLERGIES: 3;
    MEDICATIONS: 4;
    PROBLEMS: 5;
    WORK: 6;
    WAITING: 7;
    PROTOCOLS: 8;
    PLANS: 9;
  }

  export const Value: ValueMap;
}

export class ListModeCode extends jspb.Message {
  getValue(): ListModeCode.ValueMap[keyof ListModeCode.ValueMap];
  setValue(value: ListModeCode.ValueMap[keyof ListModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListModeCode): ListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModeCode;
  static deserializeBinaryFromReader(message: ListModeCode, reader: jspb.BinaryReader): ListModeCode;
}

export namespace ListModeCode {
  export type AsObject = {
    value: ListModeCode.ValueMap[keyof ListModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    WORKING: 1;
    SNAPSHOT: 2;
    CHANGES: 3;
  }

  export const Value: ValueMap;
}

export class ListOrderCodesCode extends jspb.Message {
  getValue(): ListOrderCodesCode.ValueMap[keyof ListOrderCodesCode.ValueMap];
  setValue(value: ListOrderCodesCode.ValueMap[keyof ListOrderCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrderCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrderCodesCode): ListOrderCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrderCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrderCodesCode;
  static deserializeBinaryFromReader(message: ListOrderCodesCode, reader: jspb.BinaryReader): ListOrderCodesCode;
}

export namespace ListOrderCodesCode {
  export type AsObject = {
    value: ListOrderCodesCode.ValueMap[keyof ListOrderCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    USER: 1;
    SYSTEM: 2;
    EVENT_DATE: 3;
    ENTRY_DATE: 4;
    PRIORITY: 5;
    ALPHABETIC: 6;
    CATEGORY: 7;
    PATIENT: 8;
  }

  export const Value: ValueMap;
}

export class ListStatusCode extends jspb.Message {
  getValue(): ListStatusCode.ValueMap[keyof ListStatusCode.ValueMap];
  setValue(value: ListStatusCode.ValueMap[keyof ListStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ListStatusCode): ListStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStatusCode;
  static deserializeBinaryFromReader(message: ListStatusCode, reader: jspb.BinaryReader): ListStatusCode;
}

export namespace ListStatusCode {
  export type AsObject = {
    value: ListStatusCode.ValueMap[keyof ListStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CURRENT: 1;
    RETIRED: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class LocationModeCode extends jspb.Message {
  getValue(): LocationModeCode.ValueMap[keyof LocationModeCode.ValueMap];
  setValue(value: LocationModeCode.ValueMap[keyof LocationModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationModeCode): LocationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationModeCode;
  static deserializeBinaryFromReader(message: LocationModeCode, reader: jspb.BinaryReader): LocationModeCode;
}

export namespace LocationModeCode {
  export type AsObject = {
    value: LocationModeCode.ValueMap[keyof LocationModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTANCE: 1;
    KIND: 2;
  }

  export const Value: ValueMap;
}

export class LocationTypeCode extends jspb.Message {
  getValue(): LocationTypeCode.ValueMap[keyof LocationTypeCode.ValueMap];
  setValue(value: LocationTypeCode.ValueMap[keyof LocationTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationTypeCode): LocationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationTypeCode;
  static deserializeBinaryFromReader(message: LocationTypeCode, reader: jspb.BinaryReader): LocationTypeCode;
}

export namespace LocationTypeCode {
  export type AsObject = {
    value: LocationTypeCode.ValueMap[keyof LocationTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SI: 1;
    BU: 2;
    WI: 3;
    WA: 4;
    LVL: 5;
    CO: 6;
    RO: 7;
    BD: 8;
    VE: 9;
    HO: 10;
    CA: 11;
    RD: 12;
    AREA: 13;
    JDN: 14;
  }

  export const Value: ValueMap;
}

export class LocationStatusCode extends jspb.Message {
  getValue(): LocationStatusCode.ValueMap[keyof LocationStatusCode.ValueMap];
  setValue(value: LocationStatusCode.ValueMap[keyof LocationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: LocationStatusCode): LocationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationStatusCode;
  static deserializeBinaryFromReader(message: LocationStatusCode, reader: jspb.BinaryReader): LocationStatusCode;
}

export namespace LocationStatusCode {
  export type AsObject = {
    value: LocationStatusCode.ValueMap[keyof LocationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    SUSPENDED: 2;
    INACTIVE: 3;
  }

  export const Value: ValueMap;
}

export class ProbabilityDistributionTypeCode extends jspb.Message {
  getValue(): ProbabilityDistributionTypeCode.ValueMap[keyof ProbabilityDistributionTypeCode.ValueMap];
  setValue(value: ProbabilityDistributionTypeCode.ValueMap[keyof ProbabilityDistributionTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProbabilityDistributionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProbabilityDistributionTypeCode): ProbabilityDistributionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProbabilityDistributionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProbabilityDistributionTypeCode;
  static deserializeBinaryFromReader(message: ProbabilityDistributionTypeCode, reader: jspb.BinaryReader): ProbabilityDistributionTypeCode;
}

export namespace ProbabilityDistributionTypeCode {
  export type AsObject = {
    value: ProbabilityDistributionTypeCode.ValueMap[keyof ProbabilityDistributionTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    B: 1;
    E: 2;
    F: 3;
    G: 4;
    LN: 5;
    N: 6;
    T: 7;
    U: 8;
    X2: 9;
  }

  export const Value: ValueMap;
}

export class StructureMapContextTypeCode extends jspb.Message {
  getValue(): StructureMapContextTypeCode.ValueMap[keyof StructureMapContextTypeCode.ValueMap];
  setValue(value: StructureMapContextTypeCode.ValueMap[keyof StructureMapContextTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapContextTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapContextTypeCode): StructureMapContextTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapContextTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapContextTypeCode;
  static deserializeBinaryFromReader(message: StructureMapContextTypeCode, reader: jspb.BinaryReader): StructureMapContextTypeCode;
}

export namespace StructureMapContextTypeCode {
  export type AsObject = {
    value: StructureMapContextTypeCode.ValueMap[keyof StructureMapContextTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TYPE: 1;
    VARIABLE: 2;
  }

  export const Value: ValueMap;
}

export class StructureMapGroupTypeModeCode extends jspb.Message {
  getValue(): StructureMapGroupTypeModeCode.ValueMap[keyof StructureMapGroupTypeModeCode.ValueMap];
  setValue(value: StructureMapGroupTypeModeCode.ValueMap[keyof StructureMapGroupTypeModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapGroupTypeModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapGroupTypeModeCode): StructureMapGroupTypeModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapGroupTypeModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapGroupTypeModeCode;
  static deserializeBinaryFromReader(message: StructureMapGroupTypeModeCode, reader: jspb.BinaryReader): StructureMapGroupTypeModeCode;
}

export namespace StructureMapGroupTypeModeCode {
  export type AsObject = {
    value: StructureMapGroupTypeModeCode.ValueMap[keyof StructureMapGroupTypeModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NONE: 1;
    TYPES: 2;
    TYPE_AND_TYPES: 3;
  }

  export const Value: ValueMap;
}

export class StructureMapInputModeCode extends jspb.Message {
  getValue(): StructureMapInputModeCode.ValueMap[keyof StructureMapInputModeCode.ValueMap];
  setValue(value: StructureMapInputModeCode.ValueMap[keyof StructureMapInputModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapInputModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapInputModeCode): StructureMapInputModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapInputModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapInputModeCode;
  static deserializeBinaryFromReader(message: StructureMapInputModeCode, reader: jspb.BinaryReader): StructureMapInputModeCode;
}

export namespace StructureMapInputModeCode {
  export type AsObject = {
    value: StructureMapInputModeCode.ValueMap[keyof StructureMapInputModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    TARGET: 2;
  }

  export const Value: ValueMap;
}

export class StructureMapModelModeCode extends jspb.Message {
  getValue(): StructureMapModelModeCode.ValueMap[keyof StructureMapModelModeCode.ValueMap];
  setValue(value: StructureMapModelModeCode.ValueMap[keyof StructureMapModelModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapModelModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapModelModeCode): StructureMapModelModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapModelModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapModelModeCode;
  static deserializeBinaryFromReader(message: StructureMapModelModeCode, reader: jspb.BinaryReader): StructureMapModelModeCode;
}

export namespace StructureMapModelModeCode {
  export type AsObject = {
    value: StructureMapModelModeCode.ValueMap[keyof StructureMapModelModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOURCE: 1;
    QUERIED: 2;
    TARGET: 3;
    PRODUCED: 4;
  }

  export const Value: ValueMap;
}

export class StructureMapSourceListModeCode extends jspb.Message {
  getValue(): StructureMapSourceListModeCode.ValueMap[keyof StructureMapSourceListModeCode.ValueMap];
  setValue(value: StructureMapSourceListModeCode.ValueMap[keyof StructureMapSourceListModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapSourceListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapSourceListModeCode): StructureMapSourceListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapSourceListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapSourceListModeCode;
  static deserializeBinaryFromReader(message: StructureMapSourceListModeCode, reader: jspb.BinaryReader): StructureMapSourceListModeCode;
}

export namespace StructureMapSourceListModeCode {
  export type AsObject = {
    value: StructureMapSourceListModeCode.ValueMap[keyof StructureMapSourceListModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FIRST: 1;
    NOT_FIRST: 2;
    LAST: 3;
    NOT_LAST: 4;
    ONLY_ONE: 5;
  }

  export const Value: ValueMap;
}

export class StructureMapTargetListModeCode extends jspb.Message {
  getValue(): StructureMapTargetListModeCode.ValueMap[keyof StructureMapTargetListModeCode.ValueMap];
  setValue(value: StructureMapTargetListModeCode.ValueMap[keyof StructureMapTargetListModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapTargetListModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapTargetListModeCode): StructureMapTargetListModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapTargetListModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapTargetListModeCode;
  static deserializeBinaryFromReader(message: StructureMapTargetListModeCode, reader: jspb.BinaryReader): StructureMapTargetListModeCode;
}

export namespace StructureMapTargetListModeCode {
  export type AsObject = {
    value: StructureMapTargetListModeCode.ValueMap[keyof StructureMapTargetListModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FIRST: 1;
    SHARE: 2;
    LAST: 3;
    COLLATE: 4;
  }

  export const Value: ValueMap;
}

export class StructureMapTransformCode extends jspb.Message {
  getValue(): StructureMapTransformCode.ValueMap[keyof StructureMapTransformCode.ValueMap];
  setValue(value: StructureMapTransformCode.ValueMap[keyof StructureMapTransformCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureMapTransformCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureMapTransformCode): StructureMapTransformCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureMapTransformCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureMapTransformCode;
  static deserializeBinaryFromReader(message: StructureMapTransformCode, reader: jspb.BinaryReader): StructureMapTransformCode;
}

export namespace StructureMapTransformCode {
  export type AsObject = {
    value: StructureMapTransformCode.ValueMap[keyof StructureMapTransformCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CREATE: 1;
    COPY: 2;
    TRUNCATE: 3;
    ESCAPE: 4;
    CAST: 5;
    APPEND: 6;
    TRANSLATE: 7;
    REFERENCE: 8;
    DATE_OP: 9;
    UUID: 10;
    POINTER: 11;
    EVALUATE: 12;
    CC: 13;
    C: 14;
    QTY: 15;
    ID: 16;
    CP: 17;
  }

  export const Value: ValueMap;
}

export class MatchGradeCode extends jspb.Message {
  getValue(): MatchGradeCode.ValueMap[keyof MatchGradeCode.ValueMap];
  setValue(value: MatchGradeCode.ValueMap[keyof MatchGradeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchGradeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MatchGradeCode): MatchGradeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchGradeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchGradeCode;
  static deserializeBinaryFromReader(message: MatchGradeCode, reader: jspb.BinaryReader): MatchGradeCode;
}

export namespace MatchGradeCode {
  export type AsObject = {
    value: MatchGradeCode.ValueMap[keyof MatchGradeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CERTAIN: 1;
    PROBABLE: 2;
    POSSIBLE: 3;
    CERTAINLY_NOT: 4;
  }

  export const Value: ValueMap;
}

export class MeasureDataUsageCode extends jspb.Message {
  getValue(): MeasureDataUsageCode.ValueMap[keyof MeasureDataUsageCode.ValueMap];
  setValue(value: MeasureDataUsageCode.ValueMap[keyof MeasureDataUsageCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureDataUsageCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureDataUsageCode): MeasureDataUsageCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureDataUsageCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureDataUsageCode;
  static deserializeBinaryFromReader(message: MeasureDataUsageCode, reader: jspb.BinaryReader): MeasureDataUsageCode;
}

export namespace MeasureDataUsageCode {
  export type AsObject = {
    value: MeasureDataUsageCode.ValueMap[keyof MeasureDataUsageCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SUPPLEMENTAL_DATA: 1;
    RISK_ADJUSTMENT_FACTOR: 2;
  }

  export const Value: ValueMap;
}

export class MeasmntPrincipleCode extends jspb.Message {
  getValue(): MeasmntPrincipleCode.ValueMap[keyof MeasmntPrincipleCode.ValueMap];
  setValue(value: MeasmntPrincipleCode.ValueMap[keyof MeasmntPrincipleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasmntPrincipleCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasmntPrincipleCode): MeasmntPrincipleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasmntPrincipleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasmntPrincipleCode;
  static deserializeBinaryFromReader(message: MeasmntPrincipleCode, reader: jspb.BinaryReader): MeasmntPrincipleCode;
}

export namespace MeasmntPrincipleCode {
  export type AsObject = {
    value: MeasmntPrincipleCode.ValueMap[keyof MeasmntPrincipleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OTHER: 1;
    CHEMICAL: 2;
    ELECTRICAL: 3;
    IMPEDANCE: 4;
    NUCLEAR: 5;
    OPTICAL: 6;
    THERMAL: 7;
    BIOLOGICAL: 8;
    MECHANICAL: 9;
    ACOUSTICAL: 10;
    MANUAL: 11;
  }

  export const Value: ValueMap;
}

export class MeasurePopulationTypeCode extends jspb.Message {
  getValue(): MeasurePopulationTypeCode.ValueMap[keyof MeasurePopulationTypeCode.ValueMap];
  setValue(value: MeasurePopulationTypeCode.ValueMap[keyof MeasurePopulationTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasurePopulationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasurePopulationTypeCode): MeasurePopulationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasurePopulationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasurePopulationTypeCode;
  static deserializeBinaryFromReader(message: MeasurePopulationTypeCode, reader: jspb.BinaryReader): MeasurePopulationTypeCode;
}

export namespace MeasurePopulationTypeCode {
  export type AsObject = {
    value: MeasurePopulationTypeCode.ValueMap[keyof MeasurePopulationTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INITIAL_POPULATION: 1;
    NUMERATOR: 2;
    NUMERATOR_EXCLUSION: 3;
    DENOMINATOR: 4;
    DENOMINATOR_EXCLUSION: 5;
    DENOMINATOR_EXCEPTION: 6;
    MEASURE_POPULATION: 7;
    MEASURE_POPULATION_EXCLUSION: 8;
    MEASURE_OBSERVATION: 9;
  }

  export const Value: ValueMap;
}

export class MeasureReportStatusCode extends jspb.Message {
  getValue(): MeasureReportStatusCode.ValueMap[keyof MeasureReportStatusCode.ValueMap];
  setValue(value: MeasureReportStatusCode.ValueMap[keyof MeasureReportStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureReportStatusCode): MeasureReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureReportStatusCode;
  static deserializeBinaryFromReader(message: MeasureReportStatusCode, reader: jspb.BinaryReader): MeasureReportStatusCode;
}

export namespace MeasureReportStatusCode {
  export type AsObject = {
    value: MeasureReportStatusCode.ValueMap[keyof MeasureReportStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETE: 1;
    PENDING: 2;
    ERROR: 3;
  }

  export const Value: ValueMap;
}

export class MeasureReportTypeCode extends jspb.Message {
  getValue(): MeasureReportTypeCode.ValueMap[keyof MeasureReportTypeCode.ValueMap];
  setValue(value: MeasureReportTypeCode.ValueMap[keyof MeasureReportTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureReportTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureReportTypeCode): MeasureReportTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureReportTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureReportTypeCode;
  static deserializeBinaryFromReader(message: MeasureReportTypeCode, reader: jspb.BinaryReader): MeasureReportTypeCode;
}

export namespace MeasureReportTypeCode {
  export type AsObject = {
    value: MeasureReportTypeCode.ValueMap[keyof MeasureReportTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INDIVIDUAL: 1;
    PATIENT_: 2;
    SUMMARY: 3;
  }

  export const Value: ValueMap;
}

export class MeasureScoringCode extends jspb.Message {
  getValue(): MeasureScoringCode.ValueMap[keyof MeasureScoringCode.ValueMap];
  setValue(value: MeasureScoringCode.ValueMap[keyof MeasureScoringCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureScoringCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureScoringCode): MeasureScoringCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureScoringCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureScoringCode;
  static deserializeBinaryFromReader(message: MeasureScoringCode, reader: jspb.BinaryReader): MeasureScoringCode;
}

export namespace MeasureScoringCode {
  export type AsObject = {
    value: MeasureScoringCode.ValueMap[keyof MeasureScoringCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPORTION: 1;
    RATIO: 2;
    CONTINUOUS_VARIABLE: 3;
    COHORT: 4;
  }

  export const Value: ValueMap;
}

export class MeasureTypeCode extends jspb.Message {
  getValue(): MeasureTypeCode.ValueMap[keyof MeasureTypeCode.ValueMap];
  setValue(value: MeasureTypeCode.ValueMap[keyof MeasureTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureTypeCode): MeasureTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureTypeCode;
  static deserializeBinaryFromReader(message: MeasureTypeCode, reader: jspb.BinaryReader): MeasureTypeCode;
}

export namespace MeasureTypeCode {
  export type AsObject = {
    value: MeasureTypeCode.ValueMap[keyof MeasureTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROCESS: 1;
    OUTCOME: 2;
    STRUCTURE: 3;
    PATIENT_REPORTED_OUTCOME: 4;
    COMPOSITE: 5;
  }

  export const Value: ValueMap;
}

export class MedicationAdministrationCategoryCode extends jspb.Message {
  getValue(): MedicationAdministrationCategoryCode.ValueMap[keyof MedicationAdministrationCategoryCode.ValueMap];
  setValue(value: MedicationAdministrationCategoryCode.ValueMap[keyof MedicationAdministrationCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationAdministrationCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationAdministrationCategoryCode): MedicationAdministrationCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationAdministrationCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationAdministrationCategoryCode;
  static deserializeBinaryFromReader(message: MedicationAdministrationCategoryCode, reader: jspb.BinaryReader): MedicationAdministrationCategoryCode;
}

export namespace MedicationAdministrationCategoryCode {
  export type AsObject = {
    value: MedicationAdministrationCategoryCode.ValueMap[keyof MedicationAdministrationCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INPATIENT: 1;
    OUTPATIENT: 2;
    COMMUNITY: 3;
  }

  export const Value: ValueMap;
}

export class MedicationAdministrationStatusCode extends jspb.Message {
  getValue(): MedicationAdministrationStatusCode.ValueMap[keyof MedicationAdministrationStatusCode.ValueMap];
  setValue(value: MedicationAdministrationStatusCode.ValueMap[keyof MedicationAdministrationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationAdministrationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationAdministrationStatusCode): MedicationAdministrationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationAdministrationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationAdministrationStatusCode;
  static deserializeBinaryFromReader(message: MedicationAdministrationStatusCode, reader: jspb.BinaryReader): MedicationAdministrationStatusCode;
}

export namespace MedicationAdministrationStatusCode {
  export type AsObject = {
    value: MedicationAdministrationStatusCode.ValueMap[keyof MedicationAdministrationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    ON_HOLD: 2;
    COMPLETED: 3;
    ENTERED_IN_ERROR: 4;
    STOPPED: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class MedicationDispenseCategoryCode extends jspb.Message {
  getValue(): MedicationDispenseCategoryCode.ValueMap[keyof MedicationDispenseCategoryCode.ValueMap];
  setValue(value: MedicationDispenseCategoryCode.ValueMap[keyof MedicationDispenseCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationDispenseCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationDispenseCategoryCode): MedicationDispenseCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationDispenseCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationDispenseCategoryCode;
  static deserializeBinaryFromReader(message: MedicationDispenseCategoryCode, reader: jspb.BinaryReader): MedicationDispenseCategoryCode;
}

export namespace MedicationDispenseCategoryCode {
  export type AsObject = {
    value: MedicationDispenseCategoryCode.ValueMap[keyof MedicationDispenseCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INPATIENT: 1;
    OUTPATIENT: 2;
    COMMUNITY: 3;
  }

  export const Value: ValueMap;
}

export class MedicationDispenseStatusCode extends jspb.Message {
  getValue(): MedicationDispenseStatusCode.ValueMap[keyof MedicationDispenseStatusCode.ValueMap];
  setValue(value: MedicationDispenseStatusCode.ValueMap[keyof MedicationDispenseStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationDispenseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationDispenseStatusCode): MedicationDispenseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationDispenseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationDispenseStatusCode;
  static deserializeBinaryFromReader(message: MedicationDispenseStatusCode, reader: jspb.BinaryReader): MedicationDispenseStatusCode;
}

export namespace MedicationDispenseStatusCode {
  export type AsObject = {
    value: MedicationDispenseStatusCode.ValueMap[keyof MedicationDispenseStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PREPARATION: 1;
    IN_PROGRESS: 2;
    ON_HOLD: 3;
    COMPLETED: 4;
    ENTERED_IN_ERROR: 5;
    STOPPED: 6;
  }

  export const Value: ValueMap;
}

export class MedicationContainerCode extends jspb.Message {
  getValue(): MedicationContainerCode.ValueMap[keyof MedicationContainerCode.ValueMap];
  setValue(value: MedicationContainerCode.ValueMap[keyof MedicationContainerCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationContainerCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationContainerCode): MedicationContainerCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationContainerCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationContainerCode;
  static deserializeBinaryFromReader(message: MedicationContainerCode, reader: jspb.BinaryReader): MedicationContainerCode;
}

export namespace MedicationContainerCode {
  export type AsObject = {
    value: MedicationContainerCode.ValueMap[keyof MedicationContainerCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AMPOULE: 1;
    BOTTLE: 2;
    BOX: 3;
    CARTRIDGE: 4;
    CONTAINER: 5;
    TUBE: 6;
    UNITDOSE: 7;
    VIAL: 8;
  }

  export const Value: ValueMap;
}

export class MedicationRequestCategoryCode extends jspb.Message {
  getValue(): MedicationRequestCategoryCode.ValueMap[keyof MedicationRequestCategoryCode.ValueMap];
  setValue(value: MedicationRequestCategoryCode.ValueMap[keyof MedicationRequestCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequestCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequestCategoryCode): MedicationRequestCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequestCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequestCategoryCode;
  static deserializeBinaryFromReader(message: MedicationRequestCategoryCode, reader: jspb.BinaryReader): MedicationRequestCategoryCode;
}

export namespace MedicationRequestCategoryCode {
  export type AsObject = {
    value: MedicationRequestCategoryCode.ValueMap[keyof MedicationRequestCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INPATIENT: 1;
    OUTPATIENT: 2;
    COMMUNITY: 3;
  }

  export const Value: ValueMap;
}

export class MedicationRequestIntentCode extends jspb.Message {
  getValue(): MedicationRequestIntentCode.ValueMap[keyof MedicationRequestIntentCode.ValueMap];
  setValue(value: MedicationRequestIntentCode.ValueMap[keyof MedicationRequestIntentCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequestIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequestIntentCode): MedicationRequestIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequestIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequestIntentCode;
  static deserializeBinaryFromReader(message: MedicationRequestIntentCode, reader: jspb.BinaryReader): MedicationRequestIntentCode;
}

export namespace MedicationRequestIntentCode {
  export type AsObject = {
    value: MedicationRequestIntentCode.ValueMap[keyof MedicationRequestIntentCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    ORDER: 3;
    INSTANCE_ORDER: 4;
  }

  export const Value: ValueMap;
}

export class MedicationRequestPriorityCode extends jspb.Message {
  getValue(): MedicationRequestPriorityCode.ValueMap[keyof MedicationRequestPriorityCode.ValueMap];
  setValue(value: MedicationRequestPriorityCode.ValueMap[keyof MedicationRequestPriorityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequestPriorityCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequestPriorityCode): MedicationRequestPriorityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequestPriorityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequestPriorityCode;
  static deserializeBinaryFromReader(message: MedicationRequestPriorityCode, reader: jspb.BinaryReader): MedicationRequestPriorityCode;
}

export namespace MedicationRequestPriorityCode {
  export type AsObject = {
    value: MedicationRequestPriorityCode.ValueMap[keyof MedicationRequestPriorityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ROUTINE: 1;
    URGENT: 2;
    STAT: 3;
    ASAP: 4;
  }

  export const Value: ValueMap;
}

export class MedicationRequestStatusCode extends jspb.Message {
  getValue(): MedicationRequestStatusCode.ValueMap[keyof MedicationRequestStatusCode.ValueMap];
  setValue(value: MedicationRequestStatusCode.ValueMap[keyof MedicationRequestStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequestStatusCode): MedicationRequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequestStatusCode;
  static deserializeBinaryFromReader(message: MedicationRequestStatusCode, reader: jspb.BinaryReader): MedicationRequestStatusCode;
}

export namespace MedicationRequestStatusCode {
  export type AsObject = {
    value: MedicationRequestStatusCode.ValueMap[keyof MedicationRequestStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    ON_HOLD: 2;
    CANCELLED: 3;
    COMPLETED: 4;
    ENTERED_IN_ERROR: 5;
    STOPPED: 6;
    DRAFT: 7;
    UNKNOWN: 8;
  }

  export const Value: ValueMap;
}

export class MedicationStatementCategoryCode extends jspb.Message {
  getValue(): MedicationStatementCategoryCode.ValueMap[keyof MedicationStatementCategoryCode.ValueMap];
  setValue(value: MedicationStatementCategoryCode.ValueMap[keyof MedicationStatementCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatementCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatementCategoryCode): MedicationStatementCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatementCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatementCategoryCode;
  static deserializeBinaryFromReader(message: MedicationStatementCategoryCode, reader: jspb.BinaryReader): MedicationStatementCategoryCode;
}

export namespace MedicationStatementCategoryCode {
  export type AsObject = {
    value: MedicationStatementCategoryCode.ValueMap[keyof MedicationStatementCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INPATIENT: 1;
    OUTPATIENT: 2;
    COMMUNITY: 3;
    PATIENTSPECIFIED: 4;
  }

  export const Value: ValueMap;
}

export class MedicationStatementStatusCode extends jspb.Message {
  getValue(): MedicationStatementStatusCode.ValueMap[keyof MedicationStatementStatusCode.ValueMap];
  setValue(value: MedicationStatementStatusCode.ValueMap[keyof MedicationStatementStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatementStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatementStatusCode): MedicationStatementStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatementStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatementStatusCode;
  static deserializeBinaryFromReader(message: MedicationStatementStatusCode, reader: jspb.BinaryReader): MedicationStatementStatusCode;
}

export namespace MedicationStatementStatusCode {
  export type AsObject = {
    value: MedicationStatementStatusCode.ValueMap[keyof MedicationStatementStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    COMPLETED: 2;
    ENTERED_IN_ERROR: 3;
    INTENDED: 4;
    STOPPED: 5;
    ON_HOLD: 6;
  }

  export const Value: ValueMap;
}

export class MedicationStatementTakenCode extends jspb.Message {
  getValue(): MedicationStatementTakenCode.ValueMap[keyof MedicationStatementTakenCode.ValueMap];
  setValue(value: MedicationStatementTakenCode.ValueMap[keyof MedicationStatementTakenCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatementTakenCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatementTakenCode): MedicationStatementTakenCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatementTakenCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatementTakenCode;
  static deserializeBinaryFromReader(message: MedicationStatementTakenCode, reader: jspb.BinaryReader): MedicationStatementTakenCode;
}

export namespace MedicationStatementTakenCode {
  export type AsObject = {
    value: MedicationStatementTakenCode.ValueMap[keyof MedicationStatementTakenCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    Y: 1;
    N: 2;
    UNK: 3;
    NA: 4;
  }

  export const Value: ValueMap;
}

export class MedicationStatusCode extends jspb.Message {
  getValue(): MedicationStatusCode.ValueMap[keyof MedicationStatusCode.ValueMap];
  setValue(value: MedicationStatusCode.ValueMap[keyof MedicationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationStatusCode): MedicationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationStatusCode;
  static deserializeBinaryFromReader(message: MedicationStatusCode, reader: jspb.BinaryReader): MedicationStatusCode;
}

export namespace MedicationStatusCode {
  export type AsObject = {
    value: MedicationStatusCode.ValueMap[keyof MedicationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class MessageEventCode extends jspb.Message {
  getValue(): MessageEventCode.ValueMap[keyof MessageEventCode.ValueMap];
  setValue(value: MessageEventCode.ValueMap[keyof MessageEventCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageEventCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageEventCode): MessageEventCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageEventCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageEventCode;
  static deserializeBinaryFromReader(message: MessageEventCode, reader: jspb.BinaryReader): MessageEventCode;
}

export namespace MessageEventCode {
  export type AsObject = {
    value: MessageEventCode.ValueMap[keyof MessageEventCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CODE_SYSTEM_EXPAND: 1;
    MEDICATION_ADMINISTRATION_COMPLETE: 2;
    MEDICATION_ADMINISTRATION_NULLIFICATION: 3;
    MEDICATION_ADMINISTRATION_RECORDING: 4;
    MEDICATION_ADMINISTRATION_UPDATE: 5;
    ADMIN_NOTIFY: 6;
    COMMUNICATION_REQUEST: 7;
    DIAGNOSTICREPORT_PROVIDE: 8;
    OBSERVATION_PROVIDE: 9;
    PATIENT_LINK: 10;
    PATIENT_UNLINK: 11;
    VALUESET_EXPAND: 12;
  }

  export const Value: ValueMap;
}

export class MessageHeaderResponseRequestCode extends jspb.Message {
  getValue(): MessageHeaderResponseRequestCode.ValueMap[keyof MessageHeaderResponseRequestCode.ValueMap];
  setValue(value: MessageHeaderResponseRequestCode.ValueMap[keyof MessageHeaderResponseRequestCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageHeaderResponseRequestCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageHeaderResponseRequestCode): MessageHeaderResponseRequestCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageHeaderResponseRequestCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageHeaderResponseRequestCode;
  static deserializeBinaryFromReader(message: MessageHeaderResponseRequestCode, reader: jspb.BinaryReader): MessageHeaderResponseRequestCode;
}

export namespace MessageHeaderResponseRequestCode {
  export type AsObject = {
    value: MessageHeaderResponseRequestCode.ValueMap[keyof MessageHeaderResponseRequestCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALWAYS: 1;
    ON_ERROR: 2;
    NEVER: 3;
    ON_SUCCESS: 4;
  }

  export const Value: ValueMap;
}

export class ExampleMessageReasonCodesCode extends jspb.Message {
  getValue(): ExampleMessageReasonCodesCode.ValueMap[keyof ExampleMessageReasonCodesCode.ValueMap];
  setValue(value: ExampleMessageReasonCodesCode.ValueMap[keyof ExampleMessageReasonCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleMessageReasonCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleMessageReasonCodesCode): ExampleMessageReasonCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExampleMessageReasonCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleMessageReasonCodesCode;
  static deserializeBinaryFromReader(message: ExampleMessageReasonCodesCode, reader: jspb.BinaryReader): ExampleMessageReasonCodesCode;
}

export namespace ExampleMessageReasonCodesCode {
  export type AsObject = {
    value: ExampleMessageReasonCodesCode.ValueMap[keyof ExampleMessageReasonCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADMIT: 1;
    DISCHARGE: 2;
    ABSENT: 3;
    RETURN: 4;
    MOVED: 5;
    EDIT: 6;
  }

  export const Value: ValueMap;
}

export class MessageSignificanceCategoryCode extends jspb.Message {
  getValue(): MessageSignificanceCategoryCode.ValueMap[keyof MessageSignificanceCategoryCode.ValueMap];
  setValue(value: MessageSignificanceCategoryCode.ValueMap[keyof MessageSignificanceCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageSignificanceCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageSignificanceCategoryCode): MessageSignificanceCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageSignificanceCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageSignificanceCategoryCode;
  static deserializeBinaryFromReader(message: MessageSignificanceCategoryCode, reader: jspb.BinaryReader): MessageSignificanceCategoryCode;
}

export namespace MessageSignificanceCategoryCode {
  export type AsObject = {
    value: MessageSignificanceCategoryCode.ValueMap[keyof MessageSignificanceCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CONSEQUENCE: 1;
    CURRENCY: 2;
    NOTIFICATION: 3;
  }

  export const Value: ValueMap;
}

export class MessageTransportCode extends jspb.Message {
  getValue(): MessageTransportCode.ValueMap[keyof MessageTransportCode.ValueMap];
  setValue(value: MessageTransportCode.ValueMap[keyof MessageTransportCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageTransportCode.AsObject;
  static toObject(includeInstance: boolean, msg: MessageTransportCode): MessageTransportCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessageTransportCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageTransportCode;
  static deserializeBinaryFromReader(message: MessageTransportCode, reader: jspb.BinaryReader): MessageTransportCode;
}

export namespace MessageTransportCode {
  export type AsObject = {
    value: MessageTransportCode.ValueMap[keyof MessageTransportCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HTTP: 1;
    FTP: 2;
    MLLP: 3;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCalibrationStateCode extends jspb.Message {
  getValue(): DeviceMetricCalibrationStateCode.ValueMap[keyof DeviceMetricCalibrationStateCode.ValueMap];
  setValue(value: DeviceMetricCalibrationStateCode.ValueMap[keyof DeviceMetricCalibrationStateCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCalibrationStateCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCalibrationStateCode): DeviceMetricCalibrationStateCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCalibrationStateCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCalibrationStateCode;
  static deserializeBinaryFromReader(message: DeviceMetricCalibrationStateCode, reader: jspb.BinaryReader): DeviceMetricCalibrationStateCode;
}

export namespace DeviceMetricCalibrationStateCode {
  export type AsObject = {
    value: DeviceMetricCalibrationStateCode.ValueMap[keyof DeviceMetricCalibrationStateCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_CALIBRATED: 1;
    CALIBRATION_REQUIRED: 2;
    CALIBRATED: 3;
    UNSPECIFIED: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCalibrationTypeCode extends jspb.Message {
  getValue(): DeviceMetricCalibrationTypeCode.ValueMap[keyof DeviceMetricCalibrationTypeCode.ValueMap];
  setValue(value: DeviceMetricCalibrationTypeCode.ValueMap[keyof DeviceMetricCalibrationTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCalibrationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCalibrationTypeCode): DeviceMetricCalibrationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCalibrationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCalibrationTypeCode;
  static deserializeBinaryFromReader(message: DeviceMetricCalibrationTypeCode, reader: jspb.BinaryReader): DeviceMetricCalibrationTypeCode;
}

export namespace DeviceMetricCalibrationTypeCode {
  export type AsObject = {
    value: DeviceMetricCalibrationTypeCode.ValueMap[keyof DeviceMetricCalibrationTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNSPECIFIED: 1;
    OFFSET: 2;
    GAIN: 3;
    TWO_POINT: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricCategoryCode extends jspb.Message {
  getValue(): DeviceMetricCategoryCode.ValueMap[keyof DeviceMetricCategoryCode.ValueMap];
  setValue(value: DeviceMetricCategoryCode.ValueMap[keyof DeviceMetricCategoryCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricCategoryCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricCategoryCode): DeviceMetricCategoryCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricCategoryCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricCategoryCode;
  static deserializeBinaryFromReader(message: DeviceMetricCategoryCode, reader: jspb.BinaryReader): DeviceMetricCategoryCode;
}

export namespace DeviceMetricCategoryCode {
  export type AsObject = {
    value: DeviceMetricCategoryCode.ValueMap[keyof DeviceMetricCategoryCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MEASUREMENT: 1;
    SETTING: 2;
    CALCULATION: 3;
    UNSPECIFIED: 4;
  }

  export const Value: ValueMap;
}

export class DeviceMetricColorCode extends jspb.Message {
  getValue(): DeviceMetricColorCode.ValueMap[keyof DeviceMetricColorCode.ValueMap];
  setValue(value: DeviceMetricColorCode.ValueMap[keyof DeviceMetricColorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricColorCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricColorCode): DeviceMetricColorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricColorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricColorCode;
  static deserializeBinaryFromReader(message: DeviceMetricColorCode, reader: jspb.BinaryReader): DeviceMetricColorCode;
}

export namespace DeviceMetricColorCode {
  export type AsObject = {
    value: DeviceMetricColorCode.ValueMap[keyof DeviceMetricColorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BLACK: 1;
    RED: 2;
    GREEN: 3;
    YELLOW: 4;
    BLUE: 5;
    MAGENTA: 6;
    CYAN: 7;
    WHITE: 8;
  }

  export const Value: ValueMap;
}

export class DeviceMetricOperationalStatusCode extends jspb.Message {
  getValue(): DeviceMetricOperationalStatusCode.ValueMap[keyof DeviceMetricOperationalStatusCode.ValueMap];
  setValue(value: DeviceMetricOperationalStatusCode.ValueMap[keyof DeviceMetricOperationalStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceMetricOperationalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceMetricOperationalStatusCode): DeviceMetricOperationalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceMetricOperationalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceMetricOperationalStatusCode;
  static deserializeBinaryFromReader(message: DeviceMetricOperationalStatusCode, reader: jspb.BinaryReader): DeviceMetricOperationalStatusCode;
}

export namespace DeviceMetricOperationalStatusCode {
  export type AsObject = {
    value: DeviceMetricOperationalStatusCode.ValueMap[keyof DeviceMetricOperationalStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ON: 1;
    OFF: 2;
    STANDBY: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class HumanNameAssemblyOrderCode extends jspb.Message {
  getValue(): HumanNameAssemblyOrderCode.ValueMap[keyof HumanNameAssemblyOrderCode.ValueMap];
  setValue(value: HumanNameAssemblyOrderCode.ValueMap[keyof HumanNameAssemblyOrderCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HumanNameAssemblyOrderCode.AsObject;
  static toObject(includeInstance: boolean, msg: HumanNameAssemblyOrderCode): HumanNameAssemblyOrderCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HumanNameAssemblyOrderCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HumanNameAssemblyOrderCode;
  static deserializeBinaryFromReader(message: HumanNameAssemblyOrderCode, reader: jspb.BinaryReader): HumanNameAssemblyOrderCode;
}

export namespace HumanNameAssemblyOrderCode {
  export type AsObject = {
    value: HumanNameAssemblyOrderCode.ValueMap[keyof HumanNameAssemblyOrderCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NL1: 1;
    NL2: 2;
    NL3: 3;
    NL4: 4;
  }

  export const Value: ValueMap;
}

export class NameRepresentationUseCode extends jspb.Message {
  getValue(): NameRepresentationUseCode.ValueMap[keyof NameRepresentationUseCode.ValueMap];
  setValue(value: NameRepresentationUseCode.ValueMap[keyof NameRepresentationUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NameRepresentationUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: NameRepresentationUseCode): NameRepresentationUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NameRepresentationUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NameRepresentationUseCode;
  static deserializeBinaryFromReader(message: NameRepresentationUseCode, reader: jspb.BinaryReader): NameRepresentationUseCode;
}

export namespace NameRepresentationUseCode {
  export type AsObject = {
    value: NameRepresentationUseCode.ValueMap[keyof NameRepresentationUseCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ABC: 1;
    IDE: 2;
    SYL: 3;
  }

  export const Value: ValueMap;
}

export class NamingSystemIdentifierTypeCode extends jspb.Message {
  getValue(): NamingSystemIdentifierTypeCode.ValueMap[keyof NamingSystemIdentifierTypeCode.ValueMap];
  setValue(value: NamingSystemIdentifierTypeCode.ValueMap[keyof NamingSystemIdentifierTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamingSystemIdentifierTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NamingSystemIdentifierTypeCode): NamingSystemIdentifierTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamingSystemIdentifierTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamingSystemIdentifierTypeCode;
  static deserializeBinaryFromReader(message: NamingSystemIdentifierTypeCode, reader: jspb.BinaryReader): NamingSystemIdentifierTypeCode;
}

export namespace NamingSystemIdentifierTypeCode {
  export type AsObject = {
    value: NamingSystemIdentifierTypeCode.ValueMap[keyof NamingSystemIdentifierTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OID: 1;
    UUID: 2;
    URI: 3;
    OTHER: 4;
  }

  export const Value: ValueMap;
}

export class NamingSystemTypeCode extends jspb.Message {
  getValue(): NamingSystemTypeCode.ValueMap[keyof NamingSystemTypeCode.ValueMap];
  setValue(value: NamingSystemTypeCode.ValueMap[keyof NamingSystemTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamingSystemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NamingSystemTypeCode): NamingSystemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NamingSystemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamingSystemTypeCode;
  static deserializeBinaryFromReader(message: NamingSystemTypeCode, reader: jspb.BinaryReader): NamingSystemTypeCode;
}

export namespace NamingSystemTypeCode {
  export type AsObject = {
    value: NamingSystemTypeCode.ValueMap[keyof NamingSystemTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CODESYSTEM: 1;
    IDENTIFIER: 2;
    ROOT: 3;
  }

  export const Value: ValueMap;
}

export class AuditEventAgentNetworkTypeCode extends jspb.Message {
  getValue(): AuditEventAgentNetworkTypeCode.ValueMap[keyof AuditEventAgentNetworkTypeCode.ValueMap];
  setValue(value: AuditEventAgentNetworkTypeCode.ValueMap[keyof AuditEventAgentNetworkTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEventAgentNetworkTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEventAgentNetworkTypeCode): AuditEventAgentNetworkTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEventAgentNetworkTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEventAgentNetworkTypeCode;
  static deserializeBinaryFromReader(message: AuditEventAgentNetworkTypeCode, reader: jspb.BinaryReader): AuditEventAgentNetworkTypeCode;
}

export namespace AuditEventAgentNetworkTypeCode {
  export type AsObject = {
    value: AuditEventAgentNetworkTypeCode.ValueMap[keyof AuditEventAgentNetworkTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MACHINE_NAME: 1;
    IP_ADDRESS: 2;
    TELEPHONE_NUMBER: 3;
    EMAIL_ADDRESS: 4;
    URI: 5;
  }

  export const Value: ValueMap;
}

export class NoteTypeCode extends jspb.Message {
  getValue(): NoteTypeCode.ValueMap[keyof NoteTypeCode.ValueMap];
  setValue(value: NoteTypeCode.ValueMap[keyof NoteTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: NoteTypeCode): NoteTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoteTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteTypeCode;
  static deserializeBinaryFromReader(message: NoteTypeCode, reader: jspb.BinaryReader): NoteTypeCode;
}

export namespace NoteTypeCode {
  export type AsObject = {
    value: NoteTypeCode.ValueMap[keyof NoteTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DISPLAY: 1;
    PRINT: 2;
    PRINTOPER: 3;
  }

  export const Value: ValueMap;
}

export class NullFlavorCode extends jspb.Message {
  getValue(): NullFlavorCode.ValueMap[keyof NullFlavorCode.ValueMap];
  setValue(value: NullFlavorCode.ValueMap[keyof NullFlavorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullFlavorCode.AsObject;
  static toObject(includeInstance: boolean, msg: NullFlavorCode): NullFlavorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NullFlavorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullFlavorCode;
  static deserializeBinaryFromReader(message: NullFlavorCode, reader: jspb.BinaryReader): NullFlavorCode;
}

export namespace NullFlavorCode {
  export type AsObject = {
    value: NullFlavorCode.ValueMap[keyof NullFlavorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NI: 1;
    INV: 2;
    DER: 3;
    OTH: 4;
    NINF: 5;
    PINF: 6;
    UNC: 7;
    MSK: 8;
    NA: 9;
    UNK: 10;
    ASKU: 11;
    NAV: 12;
    NASK: 13;
    NAVU: 14;
    QS: 15;
    TRC: 16;
    NP: 17;
  }

  export const Value: ValueMap;
}

export class NutritionOrderStatusCode extends jspb.Message {
  getValue(): NutritionOrderStatusCode.ValueMap[keyof NutritionOrderStatusCode.ValueMap];
  setValue(value: NutritionOrderStatusCode.ValueMap[keyof NutritionOrderStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrderStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrderStatusCode): NutritionOrderStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrderStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrderStatusCode;
  static deserializeBinaryFromReader(message: NutritionOrderStatusCode, reader: jspb.BinaryReader): NutritionOrderStatusCode;
}

export namespace NutritionOrderStatusCode {
  export type AsObject = {
    value: NutritionOrderStatusCode.ValueMap[keyof NutritionOrderStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSED: 1;
    DRAFT: 2;
    PLANNED: 3;
    REQUESTED: 4;
    ACTIVE: 5;
    ON_HOLD: 6;
    COMPLETED: 7;
    CANCELLED: 8;
    ENTERED_IN_ERROR: 9;
  }

  export const Value: ValueMap;
}

export class ObservationCategoryCodesCode extends jspb.Message {
  getValue(): ObservationCategoryCodesCode.ValueMap[keyof ObservationCategoryCodesCode.ValueMap];
  setValue(value: ObservationCategoryCodesCode.ValueMap[keyof ObservationCategoryCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationCategoryCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationCategoryCodesCode): ObservationCategoryCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationCategoryCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationCategoryCodesCode;
  static deserializeBinaryFromReader(message: ObservationCategoryCodesCode, reader: jspb.BinaryReader): ObservationCategoryCodesCode;
}

export namespace ObservationCategoryCodesCode {
  export type AsObject = {
    value: ObservationCategoryCodesCode.ValueMap[keyof ObservationCategoryCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SOCIAL_HISTORY: 1;
    VITAL_SIGNS: 2;
    IMAGING: 3;
    LABORATORY: 4;
    PROCEDURE: 5;
    SURVEY: 6;
    EXAM: 7;
    THERAPY: 8;
  }

  export const Value: ValueMap;
}

export class ObservationRelationshipTypeCode extends jspb.Message {
  getValue(): ObservationRelationshipTypeCode.ValueMap[keyof ObservationRelationshipTypeCode.ValueMap];
  setValue(value: ObservationRelationshipTypeCode.ValueMap[keyof ObservationRelationshipTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationRelationshipTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationRelationshipTypeCode): ObservationRelationshipTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationRelationshipTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationRelationshipTypeCode;
  static deserializeBinaryFromReader(message: ObservationRelationshipTypeCode, reader: jspb.BinaryReader): ObservationRelationshipTypeCode;
}

export namespace ObservationRelationshipTypeCode {
  export type AsObject = {
    value: ObservationRelationshipTypeCode.ValueMap[keyof ObservationRelationshipTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HAS_MEMBER: 1;
    DERIVED_FROM: 2;
    SEQUEL_TO: 3;
    REPLACES: 4;
    QUALIFIED_BY: 5;
    INTERFERED_BY: 6;
  }

  export const Value: ValueMap;
}

export class StatisticsCodeCode extends jspb.Message {
  getValue(): StatisticsCodeCode.ValueMap[keyof StatisticsCodeCode.ValueMap];
  setValue(value: StatisticsCodeCode.ValueMap[keyof StatisticsCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatisticsCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: StatisticsCodeCode): StatisticsCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatisticsCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatisticsCodeCode;
  static deserializeBinaryFromReader(message: StatisticsCodeCode, reader: jspb.BinaryReader): StatisticsCodeCode;
}

export namespace StatisticsCodeCode {
  export type AsObject = {
    value: StatisticsCodeCode.ValueMap[keyof StatisticsCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AVERAGE: 1;
    MAXIMUM: 2;
    MINIMUM: 3;
    COUNT: 4;
    TOTALCOUNT: 5;
    MEDIAN: 6;
    STD_DEV: 7;
    SUM: 8;
    VARIANCE: 9;
    TWENTY_PERCENT: 10;
    EIGHTY_PERCENT: 11;
    FOUR_LOWER: 12;
    FOUR_UPPER: 13;
    FOUR_DEV: 14;
    FIVE_ONE: 15;
    FIVE_TWO: 16;
    FIVE_THREE: 17;
    FIVE_FOUR: 18;
    SKEW: 19;
    KURTOSIS: 20;
    REGRESSION: 21;
  }

  export const Value: ValueMap;
}

export class ObservationStatusCode extends jspb.Message {
  getValue(): ObservationStatusCode.ValueMap[keyof ObservationStatusCode.ValueMap];
  setValue(value: ObservationStatusCode.ValueMap[keyof ObservationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationStatusCode): ObservationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationStatusCode;
  static deserializeBinaryFromReader(message: ObservationStatusCode, reader: jspb.BinaryReader): ObservationStatusCode;
}

export namespace ObservationStatusCode {
  export type AsObject = {
    value: ObservationStatusCode.ValueMap[keyof ObservationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REGISTERED: 1;
    PRELIMINARY: 2;
    FINAL: 3;
    AMENDED: 4;
    CORRECTED: 5;
    CANCELLED: 6;
    ENTERED_IN_ERROR: 7;
    UNKNOWN: 8;
  }

  export const Value: ValueMap;
}

export class DeviceComponentOperationalStatusCode extends jspb.Message {
  getValue(): DeviceComponentOperationalStatusCode.ValueMap[keyof DeviceComponentOperationalStatusCode.ValueMap];
  setValue(value: DeviceComponentOperationalStatusCode.ValueMap[keyof DeviceComponentOperationalStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceComponentOperationalStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceComponentOperationalStatusCode): DeviceComponentOperationalStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceComponentOperationalStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceComponentOperationalStatusCode;
  static deserializeBinaryFromReader(message: DeviceComponentOperationalStatusCode, reader: jspb.BinaryReader): DeviceComponentOperationalStatusCode;
}

export namespace DeviceComponentOperationalStatusCode {
  export type AsObject = {
    value: DeviceComponentOperationalStatusCode.ValueMap[keyof DeviceComponentOperationalStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OFF: 1;
    ON: 2;
    NOT_READY: 3;
    STANDBY: 4;
    TRANSDUC_DISCON: 5;
    HW_DISCON: 6;
    ENTERED_IN_ERROR: 7;
  }

  export const Value: ValueMap;
}

export class OperationKindCode extends jspb.Message {
  getValue(): OperationKindCode.ValueMap[keyof OperationKindCode.ValueMap];
  setValue(value: OperationKindCode.ValueMap[keyof OperationKindCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: OperationKindCode): OperationKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationKindCode;
  static deserializeBinaryFromReader(message: OperationKindCode, reader: jspb.BinaryReader): OperationKindCode;
}

export namespace OperationKindCode {
  export type AsObject = {
    value: OperationKindCode.ValueMap[keyof OperationKindCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OPERATION: 1;
    QUERY: 2;
  }

  export const Value: ValueMap;
}

export class OperationOutcomeCodesCode extends jspb.Message {
  getValue(): OperationOutcomeCodesCode.ValueMap[keyof OperationOutcomeCodesCode.ValueMap];
  setValue(value: OperationOutcomeCodesCode.ValueMap[keyof OperationOutcomeCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationOutcomeCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: OperationOutcomeCodesCode): OperationOutcomeCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationOutcomeCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationOutcomeCodesCode;
  static deserializeBinaryFromReader(message: OperationOutcomeCodesCode, reader: jspb.BinaryReader): OperationOutcomeCodesCode;
}

export namespace OperationOutcomeCodesCode {
  export type AsObject = {
    value: OperationOutcomeCodesCode.ValueMap[keyof OperationOutcomeCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MSG_AUTH_REQUIRED: 1;
    MSG_BAD_FORMAT: 2;
    MSG_BAD_SYNTAX: 3;
    MSG_CANT_PARSE_CONTENT: 4;
    MSG_CANT_PARSE_ROOT: 5;
    MSG_CREATED: 6;
    MSG_DATE_FORMAT: 7;
    MSG_DELETED: 8;
    MSG_DELETED_DONE: 9;
    MSG_DELETED_ID: 10;
    MSG_DUPLICATE_ID: 11;
    MSG_ERROR_PARSING: 12;
    MSG_ID_INVALID: 13;
    MSG_ID_TOO_LONG: 14;
    MSG_INVALID_ID: 15;
    MSG_JSON_OBJECT: 16;
    MSG_LOCAL_FAIL: 17;
    MSG_NO_MATCH: 18;
    MSG_NO_EXIST: 19;
    MSG_NO_MODULE: 20;
    MSG_NO_SUMMARY: 21;
    MSG_OP_NOT_ALLOWED: 22;
    MSG_PARAM_CHAINED: 23;
    MSG_PARAM_NO_REPEAT: 24;
    MSG_PARAM_UNKNOWN: 25;
    MSG_PARAM_INVALID: 26;
    MSG_PARAM_MODIFIER_INVALID: 27;
    MSG_RESOURCE_EXAMPLE_PROTECTED: 28;
    MSG_RESOURCE_ID_FAIL: 29;
    MSG_RESOURCE_NOT_ALLOWED: 30;
    MSG_RESOURCE_REQUIRED: 31;
    MSG_RESOURCE_ID_MISMATCH: 32;
    MSG_RESOURCE_ID_MISSING: 33;
    MSG_RESOURCE_TYPE_MISMATCH: 34;
    MSG_SORT_UNKNOWN: 35;
    MSG_TRANSACTION_DUPLICATE_ID: 36;
    MSG_TRANSACTION_MISSING_ID: 37;
    MSG_UNHANDLED_NODE_TYPE: 38;
    MSG_UNKNOWN_CONTENT: 39;
    MSG_UNKNOWN_OPERATION: 40;
    MSG_UNKNOWN_TYPE: 41;
    MSG_UPDATED: 42;
    MSG_VERSION_AWARE: 43;
    MSG_VERSION_AWARE_CONFLICT: 44;
    MSG_VERSION_AWARE_URL: 45;
    MSG_WRONG_NS: 46;
    SEARCH_MULTIPLE: 47;
    UPDATE_MULTIPLE_MATCHES: 48;
    DELETE_MULTIPLE_MATCHES: 49;
    SEARCH_NONE: 50;
  }

  export const Value: ValueMap;
}

export class NarrativeStatusCode extends jspb.Message {
  getValue(): NarrativeStatusCode.ValueMap[keyof NarrativeStatusCode.ValueMap];
  setValue(value: NarrativeStatusCode.ValueMap[keyof NarrativeStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NarrativeStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: NarrativeStatusCode): NarrativeStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NarrativeStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NarrativeStatusCode;
  static deserializeBinaryFromReader(message: NarrativeStatusCode, reader: jspb.BinaryReader): NarrativeStatusCode;
}

export namespace NarrativeStatusCode {
  export type AsObject = {
    value: NarrativeStatusCode.ValueMap[keyof NarrativeStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GENERATED: 1;
    EXTENSIONS: 2;
    ADDITIONAL: 3;
    EMPTY: 4;
  }

  export const Value: ValueMap;
}

export class OperationParameterUseCode extends jspb.Message {
  getValue(): OperationParameterUseCode.ValueMap[keyof OperationParameterUseCode.ValueMap];
  setValue(value: OperationParameterUseCode.ValueMap[keyof OperationParameterUseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperationParameterUseCode.AsObject;
  static toObject(includeInstance: boolean, msg: OperationParameterUseCode): OperationParameterUseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperationParameterUseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperationParameterUseCode;
  static deserializeBinaryFromReader(message: OperationParameterUseCode, reader: jspb.BinaryReader): OperationParameterUseCode;
}

export namespace OperationParameterUseCode {
  export type AsObject = {
    value: OperationParameterUseCode.ValueMap[keyof OperationParameterUseCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN: 1;
    OUT: 2;
  }

  export const Value: ValueMap;
}

export class OrganizationTypeCode extends jspb.Message {
  getValue(): OrganizationTypeCode.ValueMap[keyof OrganizationTypeCode.ValueMap];
  setValue(value: OrganizationTypeCode.ValueMap[keyof OrganizationTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationTypeCode): OrganizationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationTypeCode;
  static deserializeBinaryFromReader(message: OrganizationTypeCode, reader: jspb.BinaryReader): OrganizationTypeCode;
}

export namespace OrganizationTypeCode {
  export type AsObject = {
    value: OrganizationTypeCode.ValueMap[keyof OrganizationTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROV: 1;
    DEPT: 2;
    TEAM: 3;
    GOVT: 4;
    INS: 5;
    EDU: 6;
    RELI: 7;
    CRS: 8;
    CG: 9;
    BUS: 10;
    OTHER: 11;
  }

  export const Value: ValueMap;
}

export class DeviceComponentParameterGroupCode extends jspb.Message {
  getValue(): DeviceComponentParameterGroupCode.ValueMap[keyof DeviceComponentParameterGroupCode.ValueMap];
  setValue(value: DeviceComponentParameterGroupCode.ValueMap[keyof DeviceComponentParameterGroupCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceComponentParameterGroupCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceComponentParameterGroupCode): DeviceComponentParameterGroupCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceComponentParameterGroupCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceComponentParameterGroupCode;
  static deserializeBinaryFromReader(message: DeviceComponentParameterGroupCode, reader: jspb.BinaryReader): DeviceComponentParameterGroupCode;
}

export namespace DeviceComponentParameterGroupCode {
  export type AsObject = {
    value: DeviceComponentParameterGroupCode.ValueMap[keyof DeviceComponentParameterGroupCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    HAEMODYNAMIC: 1;
    ECG: 2;
    RESPIRATORY: 3;
    VENTILATION: 4;
    NEUROLOGICAL: 5;
    DRUG_DELIVERY: 6;
    FLUID_CHEMISTRY: 7;
    BLOOD_CHEMISTRY: 8;
    MISCELLANEOUS: 9;
  }

  export const Value: ValueMap;
}

export class ParticipantRequiredCode extends jspb.Message {
  getValue(): ParticipantRequiredCode.ValueMap[keyof ParticipantRequiredCode.ValueMap];
  setValue(value: ParticipantRequiredCode.ValueMap[keyof ParticipantRequiredCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipantRequiredCode.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipantRequiredCode): ParticipantRequiredCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipantRequiredCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipantRequiredCode;
  static deserializeBinaryFromReader(message: ParticipantRequiredCode, reader: jspb.BinaryReader): ParticipantRequiredCode;
}

export namespace ParticipantRequiredCode {
  export type AsObject = {
    value: ParticipantRequiredCode.ValueMap[keyof ParticipantRequiredCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUIRED: 1;
    OPTIONAL: 2;
    INFORMATION_ONLY: 3;
  }

  export const Value: ValueMap;
}

export class ParticipationStatusCode extends jspb.Message {
  getValue(): ParticipationStatusCode.ValueMap[keyof ParticipationStatusCode.ValueMap];
  setValue(value: ParticipationStatusCode.ValueMap[keyof ParticipationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParticipationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ParticipationStatusCode): ParticipationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ParticipationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParticipationStatusCode;
  static deserializeBinaryFromReader(message: ParticipationStatusCode, reader: jspb.BinaryReader): ParticipationStatusCode;
}

export namespace ParticipationStatusCode {
  export type AsObject = {
    value: ParticipationStatusCode.ValueMap[keyof ParticipationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACCEPTED: 1;
    DECLINED: 2;
    TENTATIVE: 3;
    NEEDS_ACTION: 4;
  }

  export const Value: ValueMap;
}

export class PlanDefinitionTypeCode extends jspb.Message {
  getValue(): PlanDefinitionTypeCode.ValueMap[keyof PlanDefinitionTypeCode.ValueMap];
  setValue(value: PlanDefinitionTypeCode.ValueMap[keyof PlanDefinitionTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanDefinitionTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: PlanDefinitionTypeCode): PlanDefinitionTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanDefinitionTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanDefinitionTypeCode;
  static deserializeBinaryFromReader(message: PlanDefinitionTypeCode, reader: jspb.BinaryReader): PlanDefinitionTypeCode;
}

export namespace PlanDefinitionTypeCode {
  export type AsObject = {
    value: PlanDefinitionTypeCode.ValueMap[keyof PlanDefinitionTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ORDER_SET: 1;
    PROTOCOL: 2;
    ECA_RULE: 3;
  }

  export const Value: ValueMap;
}

export class PostalAddressUseTypeCode extends jspb.Message {
  getValue(): PostalAddressUseTypeCode.ValueMap[keyof PostalAddressUseTypeCode.ValueMap];
  setValue(value: PostalAddressUseTypeCode.ValueMap[keyof PostalAddressUseTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostalAddressUseTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: PostalAddressUseTypeCode): PostalAddressUseTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostalAddressUseTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostalAddressUseTypeCode;
  static deserializeBinaryFromReader(message: PostalAddressUseTypeCode, reader: jspb.BinaryReader): PostalAddressUseTypeCode;
}

export namespace PostalAddressUseTypeCode {
  export type AsObject = {
    value: PostalAddressUseTypeCode.ValueMap[keyof PostalAddressUseTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BAD_ADDRESS: 1;
    CONFIDENTIAL_ADDRESS: 2;
    PRIMARY_HOME: 3;
    VACATION_HOME: 4;
    DIRECT: 5;
    PUBLIC: 6;
    PHYSICAL_VISIT_ADDRESS: 7;
    POSTAL_ADDRESS: 8;
  }

  export const Value: ValueMap;
}

export class PractitionerRoleCode extends jspb.Message {
  getValue(): PractitionerRoleCode.ValueMap[keyof PractitionerRoleCode.ValueMap];
  setValue(value: PractitionerRoleCode.ValueMap[keyof PractitionerRoleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerRoleCode.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerRoleCode): PractitionerRoleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerRoleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerRoleCode;
  static deserializeBinaryFromReader(message: PractitionerRoleCode, reader: jspb.BinaryReader): PractitionerRoleCode;
}

export namespace PractitionerRoleCode {
  export type AsObject = {
    value: PractitionerRoleCode.ValueMap[keyof PractitionerRoleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DOCTOR: 1;
    NURSE: 2;
    PHARMACIST: 3;
    RESEARCHER: 4;
    TEACHER: 5;
    ICT: 6;
  }

  export const Value: ValueMap;
}

export class PractitionerSpecialtyCode extends jspb.Message {
  getValue(): PractitionerSpecialtyCode.ValueMap[keyof PractitionerSpecialtyCode.ValueMap];
  setValue(value: PractitionerSpecialtyCode.ValueMap[keyof PractitionerSpecialtyCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PractitionerSpecialtyCode.AsObject;
  static toObject(includeInstance: boolean, msg: PractitionerSpecialtyCode): PractitionerSpecialtyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PractitionerSpecialtyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PractitionerSpecialtyCode;
  static deserializeBinaryFromReader(message: PractitionerSpecialtyCode, reader: jspb.BinaryReader): PractitionerSpecialtyCode;
}

export namespace PractitionerSpecialtyCode {
  export type AsObject = {
    value: PractitionerSpecialtyCode.ValueMap[keyof PractitionerSpecialtyCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CARDIO: 1;
    DENT: 2;
    DIETARY: 3;
    MIDW: 4;
    SYSARCH: 5;
  }

  export const Value: ValueMap;
}

export class ProcedureProgressStatusCodesCode extends jspb.Message {
  getValue(): ProcedureProgressStatusCodesCode.ValueMap[keyof ProcedureProgressStatusCodesCode.ValueMap];
  setValue(value: ProcedureProgressStatusCodesCode.ValueMap[keyof ProcedureProgressStatusCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProcedureProgressStatusCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProcedureProgressStatusCodesCode): ProcedureProgressStatusCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProcedureProgressStatusCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProcedureProgressStatusCodesCode;
  static deserializeBinaryFromReader(message: ProcedureProgressStatusCodesCode, reader: jspb.BinaryReader): ProcedureProgressStatusCodesCode;
}

export namespace ProcedureProgressStatusCodesCode {
  export type AsObject = {
    value: ProcedureProgressStatusCodesCode.ValueMap[keyof ProcedureProgressStatusCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_OPERATING_ROOM: 1;
    PREPARED: 2;
    ANESTHESIA_INDUCED: 3;
    OPEN_INCISION: 4;
    CLOSED_INCISION: 5;
    IN_RECOVERY_ROOM: 6;
  }

  export const Value: ValueMap;
}

export class ProvenanceEntityRoleCode extends jspb.Message {
  getValue(): ProvenanceEntityRoleCode.ValueMap[keyof ProvenanceEntityRoleCode.ValueMap];
  setValue(value: ProvenanceEntityRoleCode.ValueMap[keyof ProvenanceEntityRoleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProvenanceEntityRoleCode.AsObject;
  static toObject(includeInstance: boolean, msg: ProvenanceEntityRoleCode): ProvenanceEntityRoleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProvenanceEntityRoleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProvenanceEntityRoleCode;
  static deserializeBinaryFromReader(message: ProvenanceEntityRoleCode, reader: jspb.BinaryReader): ProvenanceEntityRoleCode;
}

export namespace ProvenanceEntityRoleCode {
  export type AsObject = {
    value: ProvenanceEntityRoleCode.ValueMap[keyof ProvenanceEntityRoleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DERIVATION: 1;
    REVISION: 2;
    QUOTATION: 3;
    SOURCE: 4;
    REMOVAL: 5;
  }

  export const Value: ValueMap;
}

export class PublicationStatusCode extends jspb.Message {
  getValue(): PublicationStatusCode.ValueMap[keyof PublicationStatusCode.ValueMap];
  setValue(value: PublicationStatusCode.ValueMap[keyof PublicationStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicationStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: PublicationStatusCode): PublicationStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PublicationStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicationStatusCode;
  static deserializeBinaryFromReader(message: PublicationStatusCode, reader: jspb.BinaryReader): PublicationStatusCode;
}

export namespace PublicationStatusCode {
  export type AsObject = {
    value: PublicationStatusCode.ValueMap[keyof PublicationStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    RETIRED: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class QualityTypeCode extends jspb.Message {
  getValue(): QualityTypeCode.ValueMap[keyof QualityTypeCode.ValueMap];
  setValue(value: QualityTypeCode.ValueMap[keyof QualityTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QualityTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QualityTypeCode): QualityTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QualityTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QualityTypeCode;
  static deserializeBinaryFromReader(message: QualityTypeCode, reader: jspb.BinaryReader): QualityTypeCode;
}

export namespace QualityTypeCode {
  export type AsObject = {
    value: QualityTypeCode.ValueMap[keyof QualityTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INDEL: 1;
    SNP: 2;
    UNKNOWN: 3;
  }

  export const Value: ValueMap;
}

export class MaxOccursCode extends jspb.Message {
  getValue(): MaxOccursCode.ValueMap[keyof MaxOccursCode.ValueMap];
  setValue(value: MaxOccursCode.ValueMap[keyof MaxOccursCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MaxOccursCode.AsObject;
  static toObject(includeInstance: boolean, msg: MaxOccursCode): MaxOccursCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MaxOccursCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MaxOccursCode;
  static deserializeBinaryFromReader(message: MaxOccursCode, reader: jspb.BinaryReader): MaxOccursCode;
}

export namespace MaxOccursCode {
  export type AsObject = {
    value: MaxOccursCode.ValueMap[keyof MaxOccursCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MAX: 1;
  }

  export const Value: ValueMap;
}

export class QuestionnaireResponseStatusCode extends jspb.Message {
  getValue(): QuestionnaireResponseStatusCode.ValueMap[keyof QuestionnaireResponseStatusCode.ValueMap];
  setValue(value: QuestionnaireResponseStatusCode.ValueMap[keyof QuestionnaireResponseStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireResponseStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireResponseStatusCode): QuestionnaireResponseStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireResponseStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireResponseStatusCode;
  static deserializeBinaryFromReader(message: QuestionnaireResponseStatusCode, reader: jspb.BinaryReader): QuestionnaireResponseStatusCode;
}

export namespace QuestionnaireResponseStatusCode {
  export type AsObject = {
    value: QuestionnaireResponseStatusCode.ValueMap[keyof QuestionnaireResponseStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    COMPLETED: 2;
    AMENDED: 3;
    ENTERED_IN_ERROR: 4;
    STOPPED: 5;
  }

  export const Value: ValueMap;
}

export class QuestionnaireTextCategoriesCode extends jspb.Message {
  getValue(): QuestionnaireTextCategoriesCode.ValueMap[keyof QuestionnaireTextCategoriesCode.ValueMap];
  setValue(value: QuestionnaireTextCategoriesCode.ValueMap[keyof QuestionnaireTextCategoriesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireTextCategoriesCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireTextCategoriesCode): QuestionnaireTextCategoriesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireTextCategoriesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireTextCategoriesCode;
  static deserializeBinaryFromReader(message: QuestionnaireTextCategoriesCode, reader: jspb.BinaryReader): QuestionnaireTextCategoriesCode;
}

export namespace QuestionnaireTextCategoriesCode {
  export type AsObject = {
    value: QuestionnaireTextCategoriesCode.ValueMap[keyof QuestionnaireTextCategoriesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    INSTRUCTIONS: 1;
    SECURITY: 2;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemUIControlCodesCode extends jspb.Message {
  getValue(): QuestionnaireItemUIControlCodesCode.ValueMap[keyof QuestionnaireItemUIControlCodesCode.ValueMap];
  setValue(value: QuestionnaireItemUIControlCodesCode.ValueMap[keyof QuestionnaireItemUIControlCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemUIControlCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemUIControlCodesCode): QuestionnaireItemUIControlCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemUIControlCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemUIControlCodesCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemUIControlCodesCode, reader: jspb.BinaryReader): QuestionnaireItemUIControlCodesCode;
}

export namespace QuestionnaireItemUIControlCodesCode {
  export type AsObject = {
    value: QuestionnaireItemUIControlCodesCode.ValueMap[keyof QuestionnaireItemUIControlCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LIST: 1;
    TABLE: 2;
    HEADER: 3;
    FOOTER: 4;
    INLINE: 5;
    PROMPT: 6;
    UNIT: 7;
    LOWER: 8;
    UPPER: 9;
    FLYOVER: 10;
    HELP: 11;
    AUTOCOMPLETE: 12;
    DROP_DOWN: 13;
    CHECK_BOX: 14;
    LOOKUP: 15;
    RADIO_BUTTON: 16;
    SLIDER: 17;
    SPINNER: 18;
    TEXT_BOX: 19;
  }

  export const Value: ValueMap;
}

export class QuestionnaireItemUsageModeCode extends jspb.Message {
  getValue(): QuestionnaireItemUsageModeCode.ValueMap[keyof QuestionnaireItemUsageModeCode.ValueMap];
  setValue(value: QuestionnaireItemUsageModeCode.ValueMap[keyof QuestionnaireItemUsageModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuestionnaireItemUsageModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: QuestionnaireItemUsageModeCode): QuestionnaireItemUsageModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuestionnaireItemUsageModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuestionnaireItemUsageModeCode;
  static deserializeBinaryFromReader(message: QuestionnaireItemUsageModeCode, reader: jspb.BinaryReader): QuestionnaireItemUsageModeCode;
}

export namespace QuestionnaireItemUsageModeCode {
  export type AsObject = {
    value: QuestionnaireItemUsageModeCode.ValueMap[keyof QuestionnaireItemUsageModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CAPTURE_DISPLAY: 1;
    CAPTURE: 2;
    DISPLAY: 3;
    DISPLAY_NON_EMPTY: 4;
    CAPTURE_DISPLAY_NON_EMPTY: 5;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceCertaintyCode extends jspb.Message {
  getValue(): AllergyIntoleranceCertaintyCode.ValueMap[keyof AllergyIntoleranceCertaintyCode.ValueMap];
  setValue(value: AllergyIntoleranceCertaintyCode.ValueMap[keyof AllergyIntoleranceCertaintyCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceCertaintyCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceCertaintyCode): AllergyIntoleranceCertaintyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceCertaintyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceCertaintyCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceCertaintyCode, reader: jspb.BinaryReader): AllergyIntoleranceCertaintyCode;
}

export namespace AllergyIntoleranceCertaintyCode {
  export type AsObject = {
    value: AllergyIntoleranceCertaintyCode.ValueMap[keyof AllergyIntoleranceCertaintyCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNLIKELY: 1;
    LIKELY: 2;
    CONFIRMED: 3;
    UNKNOWN: 4;
  }

  export const Value: ValueMap;
}

export class AllergyIntoleranceSeverityCode extends jspb.Message {
  getValue(): AllergyIntoleranceSeverityCode.ValueMap[keyof AllergyIntoleranceSeverityCode.ValueMap];
  setValue(value: AllergyIntoleranceSeverityCode.ValueMap[keyof AllergyIntoleranceSeverityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllergyIntoleranceSeverityCode.AsObject;
  static toObject(includeInstance: boolean, msg: AllergyIntoleranceSeverityCode): AllergyIntoleranceSeverityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllergyIntoleranceSeverityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllergyIntoleranceSeverityCode;
  static deserializeBinaryFromReader(message: AllergyIntoleranceSeverityCode, reader: jspb.BinaryReader): AllergyIntoleranceSeverityCode;
}

export namespace AllergyIntoleranceSeverityCode {
  export type AsObject = {
    value: AllergyIntoleranceSeverityCode.ValueMap[keyof AllergyIntoleranceSeverityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MILD: 1;
    MODERATE: 2;
    SEVERE: 3;
  }

  export const Value: ValueMap;
}

export class ReasonMedicationGivenCodesCode extends jspb.Message {
  getValue(): ReasonMedicationGivenCodesCode.ValueMap[keyof ReasonMedicationGivenCodesCode.ValueMap];
  setValue(value: ReasonMedicationGivenCodesCode.ValueMap[keyof ReasonMedicationGivenCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReasonMedicationGivenCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReasonMedicationGivenCodesCode): ReasonMedicationGivenCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReasonMedicationGivenCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReasonMedicationGivenCodesCode;
  static deserializeBinaryFromReader(message: ReasonMedicationGivenCodesCode, reader: jspb.BinaryReader): ReasonMedicationGivenCodesCode;
}

export namespace ReasonMedicationGivenCodesCode {
  export type AsObject = {
    value: ReasonMedicationGivenCodesCode.ValueMap[keyof ReasonMedicationGivenCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    A: 1;
    B: 2;
    C: 3;
  }

  export const Value: ValueMap;
}

export class ReferenceHandlingPolicyCode extends jspb.Message {
  getValue(): ReferenceHandlingPolicyCode.ValueMap[keyof ReferenceHandlingPolicyCode.ValueMap];
  setValue(value: ReferenceHandlingPolicyCode.ValueMap[keyof ReferenceHandlingPolicyCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferenceHandlingPolicyCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReferenceHandlingPolicyCode): ReferenceHandlingPolicyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferenceHandlingPolicyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferenceHandlingPolicyCode;
  static deserializeBinaryFromReader(message: ReferenceHandlingPolicyCode, reader: jspb.BinaryReader): ReferenceHandlingPolicyCode;
}

export namespace ReferenceHandlingPolicyCode {
  export type AsObject = {
    value: ReferenceHandlingPolicyCode.ValueMap[keyof ReferenceHandlingPolicyCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    LITERAL: 1;
    LOGICAL: 2;
    RESOLVES: 3;
    ENFORCED: 4;
    LOCAL: 5;
  }

  export const Value: ValueMap;
}

export class RelatedArtifactTypeCode extends jspb.Message {
  getValue(): RelatedArtifactTypeCode.ValueMap[keyof RelatedArtifactTypeCode.ValueMap];
  setValue(value: RelatedArtifactTypeCode.ValueMap[keyof RelatedArtifactTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedArtifactTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedArtifactTypeCode): RelatedArtifactTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RelatedArtifactTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedArtifactTypeCode;
  static deserializeBinaryFromReader(message: RelatedArtifactTypeCode, reader: jspb.BinaryReader): RelatedArtifactTypeCode;
}

export namespace RelatedArtifactTypeCode {
  export type AsObject = {
    value: RelatedArtifactTypeCode.ValueMap[keyof RelatedArtifactTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DOCUMENTATION: 1;
    JUSTIFICATION: 2;
    CITATION: 3;
    PREDECESSOR: 4;
    SUCCESSOR: 5;
    DERIVED_FROM: 6;
    DEPENDS_ON: 7;
    COMPOSED_OF: 8;
  }

  export const Value: ValueMap;
}

export class ObservationReferenceRangeMeaningCodesCode extends jspb.Message {
  getValue(): ObservationReferenceRangeMeaningCodesCode.ValueMap[keyof ObservationReferenceRangeMeaningCodesCode.ValueMap];
  setValue(value: ObservationReferenceRangeMeaningCodesCode.ValueMap[keyof ObservationReferenceRangeMeaningCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ObservationReferenceRangeMeaningCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: ObservationReferenceRangeMeaningCodesCode): ObservationReferenceRangeMeaningCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ObservationReferenceRangeMeaningCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ObservationReferenceRangeMeaningCodesCode;
  static deserializeBinaryFromReader(message: ObservationReferenceRangeMeaningCodesCode, reader: jspb.BinaryReader): ObservationReferenceRangeMeaningCodesCode;
}

export namespace ObservationReferenceRangeMeaningCodesCode {
  export type AsObject = {
    value: ObservationReferenceRangeMeaningCodesCode.ValueMap[keyof ObservationReferenceRangeMeaningCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NORMAL: 1;
    RECOMMENDED: 2;
    TREATMENT: 3;
    THERAPEUTIC: 4;
    PRE: 5;
    POST: 6;
    PRE_PUBERTY: 7;
    FOLLICULAR: 8;
    MIDCYCLE: 9;
    LUTEAL: 10;
    POSTMEOPAUSAL: 11;
  }

  export const Value: ValueMap;
}

export class TestReportActionResultCode extends jspb.Message {
  getValue(): TestReportActionResultCode.ValueMap[keyof TestReportActionResultCode.ValueMap];
  setValue(value: TestReportActionResultCode.ValueMap[keyof TestReportActionResultCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportActionResultCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportActionResultCode): TestReportActionResultCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportActionResultCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportActionResultCode;
  static deserializeBinaryFromReader(message: TestReportActionResultCode, reader: jspb.BinaryReader): TestReportActionResultCode;
}

export namespace TestReportActionResultCode {
  export type AsObject = {
    value: TestReportActionResultCode.ValueMap[keyof TestReportActionResultCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PASS: 1;
    SKIP: 2;
    FAIL: 3;
    WARNING: 4;
    ERROR: 5;
  }

  export const Value: ValueMap;
}

export class TestReportParticipantTypeCode extends jspb.Message {
  getValue(): TestReportParticipantTypeCode.ValueMap[keyof TestReportParticipantTypeCode.ValueMap];
  setValue(value: TestReportParticipantTypeCode.ValueMap[keyof TestReportParticipantTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportParticipantTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportParticipantTypeCode): TestReportParticipantTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportParticipantTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportParticipantTypeCode;
  static deserializeBinaryFromReader(message: TestReportParticipantTypeCode, reader: jspb.BinaryReader): TestReportParticipantTypeCode;
}

export namespace TestReportParticipantTypeCode {
  export type AsObject = {
    value: TestReportParticipantTypeCode.ValueMap[keyof TestReportParticipantTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TEST_ENGINE: 1;
    CLIENT: 2;
    SERVER: 3;
  }

  export const Value: ValueMap;
}

export class TestReportResultCode extends jspb.Message {
  getValue(): TestReportResultCode.ValueMap[keyof TestReportResultCode.ValueMap];
  setValue(value: TestReportResultCode.ValueMap[keyof TestReportResultCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportResultCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportResultCode): TestReportResultCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportResultCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportResultCode;
  static deserializeBinaryFromReader(message: TestReportResultCode, reader: jspb.BinaryReader): TestReportResultCode;
}

export namespace TestReportResultCode {
  export type AsObject = {
    value: TestReportResultCode.ValueMap[keyof TestReportResultCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PASS: 1;
    FAIL: 2;
    PENDING: 3;
  }

  export const Value: ValueMap;
}

export class TestReportStatusCode extends jspb.Message {
  getValue(): TestReportStatusCode.ValueMap[keyof TestReportStatusCode.ValueMap];
  setValue(value: TestReportStatusCode.ValueMap[keyof TestReportStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReportStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestReportStatusCode): TestReportStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReportStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReportStatusCode;
  static deserializeBinaryFromReader(message: TestReportStatusCode, reader: jspb.BinaryReader): TestReportStatusCode;
}

export namespace TestReportStatusCode {
  export type AsObject = {
    value: TestReportStatusCode.ValueMap[keyof TestReportStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COMPLETED: 1;
    IN_PROGRESS: 2;
    WAITING: 3;
    STOPPED: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class RepositoryTypeCode extends jspb.Message {
  getValue(): RepositoryTypeCode.ValueMap[keyof RepositoryTypeCode.ValueMap];
  setValue(value: RepositoryTypeCode.ValueMap[keyof RepositoryTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RepositoryTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RepositoryTypeCode): RepositoryTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RepositoryTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RepositoryTypeCode;
  static deserializeBinaryFromReader(message: RepositoryTypeCode, reader: jspb.BinaryReader): RepositoryTypeCode;
}

export namespace RepositoryTypeCode {
  export type AsObject = {
    value: RepositoryTypeCode.ValueMap[keyof RepositoryTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DIRECTLINK: 1;
    OPENAPI: 2;
    LOGIN: 3;
    OAUTH: 4;
    OTHER: 5;
  }

  export const Value: ValueMap;
}

export class RequestIntentCode extends jspb.Message {
  getValue(): RequestIntentCode.ValueMap[keyof RequestIntentCode.ValueMap];
  setValue(value: RequestIntentCode.ValueMap[keyof RequestIntentCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestIntentCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestIntentCode): RequestIntentCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestIntentCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestIntentCode;
  static deserializeBinaryFromReader(message: RequestIntentCode, reader: jspb.BinaryReader): RequestIntentCode;
}

export namespace RequestIntentCode {
  export type AsObject = {
    value: RequestIntentCode.ValueMap[keyof RequestIntentCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PROPOSAL: 1;
    PLAN: 2;
    ORDER: 3;
    ORIGINAL_ORDER: 4;
    REFLEX_ORDER: 5;
    FILLER_ORDER: 6;
    INSTANCE_ORDER: 7;
    OPTION: 8;
  }

  export const Value: ValueMap;
}

export class RequestPriorityCode extends jspb.Message {
  getValue(): RequestPriorityCode.ValueMap[keyof RequestPriorityCode.ValueMap];
  setValue(value: RequestPriorityCode.ValueMap[keyof RequestPriorityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPriorityCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPriorityCode): RequestPriorityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestPriorityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPriorityCode;
  static deserializeBinaryFromReader(message: RequestPriorityCode, reader: jspb.BinaryReader): RequestPriorityCode;
}

export namespace RequestPriorityCode {
  export type AsObject = {
    value: RequestPriorityCode.ValueMap[keyof RequestPriorityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ROUTINE: 1;
    URGENT: 2;
    ASAP: 3;
    STAT: 4;
  }

  export const Value: ValueMap;
}

export class RequestStatusCode extends jspb.Message {
  getValue(): RequestStatusCode.ValueMap[keyof RequestStatusCode.ValueMap];
  setValue(value: RequestStatusCode.ValueMap[keyof RequestStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: RequestStatusCode): RequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestStatusCode;
  static deserializeBinaryFromReader(message: RequestStatusCode, reader: jspb.BinaryReader): RequestStatusCode;
}

export namespace RequestStatusCode {
  export type AsObject = {
    value: RequestStatusCode.ValueMap[keyof RequestStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    CANCELLED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class ResearchStudyStatusCode extends jspb.Message {
  getValue(): ResearchStudyStatusCode.ValueMap[keyof ResearchStudyStatusCode.ValueMap];
  setValue(value: ResearchStudyStatusCode.ValueMap[keyof ResearchStudyStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchStudyStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchStudyStatusCode): ResearchStudyStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchStudyStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchStudyStatusCode;
  static deserializeBinaryFromReader(message: ResearchStudyStatusCode, reader: jspb.BinaryReader): ResearchStudyStatusCode;
}

export namespace ResearchStudyStatusCode {
  export type AsObject = {
    value: ResearchStudyStatusCode.ValueMap[keyof ResearchStudyStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    IN_PROGRESS: 2;
    SUSPENDED: 3;
    STOPPED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
  }

  export const Value: ValueMap;
}

export class ResearchSubjectStatusCode extends jspb.Message {
  getValue(): ResearchSubjectStatusCode.ValueMap[keyof ResearchSubjectStatusCode.ValueMap];
  setValue(value: ResearchSubjectStatusCode.ValueMap[keyof ResearchSubjectStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResearchSubjectStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResearchSubjectStatusCode): ResearchSubjectStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResearchSubjectStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResearchSubjectStatusCode;
  static deserializeBinaryFromReader(message: ResearchSubjectStatusCode, reader: jspb.BinaryReader): ResearchSubjectStatusCode;
}

export namespace ResearchSubjectStatusCode {
  export type AsObject = {
    value: ResearchSubjectStatusCode.ValueMap[keyof ResearchSubjectStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CANDIDATE: 1;
    ENROLLED: 2;
    ACTIVE: 3;
    SUSPENDED: 4;
    WITHDRAWN: 5;
    COMPLETED: 6;
  }

  export const Value: ValueMap;
}

export class PayeeResourceTypeCode extends jspb.Message {
  getValue(): PayeeResourceTypeCode.ValueMap[keyof PayeeResourceTypeCode.ValueMap];
  setValue(value: PayeeResourceTypeCode.ValueMap[keyof PayeeResourceTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayeeResourceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: PayeeResourceTypeCode): PayeeResourceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PayeeResourceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayeeResourceTypeCode;
  static deserializeBinaryFromReader(message: PayeeResourceTypeCode, reader: jspb.BinaryReader): PayeeResourceTypeCode;
}

export namespace PayeeResourceTypeCode {
  export type AsObject = {
    value: PayeeResourceTypeCode.ValueMap[keyof PayeeResourceTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ORGANIZATION: 1;
    PATIENT: 2;
    PRACTITIONER: 3;
    RELATEDPERSON: 4;
  }

  export const Value: ValueMap;
}

export class ResourceTypeCode extends jspb.Message {
  getValue(): ResourceTypeCode.ValueMap[keyof ResourceTypeCode.ValueMap];
  setValue(value: ResourceTypeCode.ValueMap[keyof ResourceTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceTypeCode): ResourceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceTypeCode;
  static deserializeBinaryFromReader(message: ResourceTypeCode, reader: jspb.BinaryReader): ResourceTypeCode;
}

export namespace ResourceTypeCode {
  export type AsObject = {
    value: ResourceTypeCode.ValueMap[keyof ResourceTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACCOUNT: 1;
    ACTIVITY_DEFINITION: 2;
    ADVERSE_EVENT: 3;
    ALLERGY_INTOLERANCE: 4;
    APPOINTMENT: 5;
    APPOINTMENT_RESPONSE: 6;
    AUDIT_EVENT: 7;
    BASIC: 8;
    BINARY: 9;
    BODY_SITE: 10;
    BUNDLE: 11;
    CAPABILITY_STATEMENT: 12;
    CARE_PLAN: 13;
    CARE_TEAM: 14;
    CHARGE_ITEM: 15;
    CLAIM: 16;
    CLAIM_RESPONSE: 17;
    CLINICAL_IMPRESSION: 18;
    CODE_SYSTEM: 19;
    COMMUNICATION: 20;
    COMMUNICATION_REQUEST: 21;
    COMPARTMENT_DEFINITION: 22;
    COMPOSITION: 23;
    CONCEPT_MAP: 24;
    CONDITION: 25;
    CONSENT: 26;
    CONTRACT: 27;
    COVERAGE: 28;
    DATA_ELEMENT: 29;
    DETECTED_ISSUE: 30;
    DEVICE: 31;
    DEVICE_COMPONENT: 32;
    DEVICE_METRIC: 33;
    DEVICE_REQUEST: 34;
    DEVICE_USE_STATEMENT: 35;
    DIAGNOSTIC_REPORT: 36;
    DOCUMENT_MANIFEST: 37;
    DOCUMENT_REFERENCE: 38;
    DOMAIN_RESOURCE: 39;
    ELIGIBILITY_REQUEST: 40;
    ELIGIBILITY_RESPONSE: 41;
    ENCOUNTER: 42;
    ENDPOINT: 43;
    ENROLLMENT_REQUEST: 44;
    ENROLLMENT_RESPONSE: 45;
    EPISODE_OF_CARE: 46;
    EXPANSION_PROFILE: 47;
    EXPLANATION_OF_BENEFIT: 48;
    FAMILY_MEMBER_HISTORY: 49;
    FLAG: 50;
    GOAL: 51;
    GRAPH_DEFINITION: 52;
    GROUP: 53;
    GUIDANCE_RESPONSE: 54;
    HEALTHCARE_SERVICE: 55;
    IMAGING_MANIFEST: 56;
    IMAGING_STUDY: 57;
    IMMUNIZATION: 58;
    IMMUNIZATION_RECOMMENDATION: 59;
    IMPLEMENTATION_GUIDE: 60;
    LIBRARY: 61;
    LINKAGE: 62;
    LIST: 63;
    LOCATION: 64;
    MEASURE: 65;
    MEASURE_REPORT: 66;
    MEDIA: 67;
    MEDICATION: 68;
    MEDICATION_ADMINISTRATION: 69;
    MEDICATION_DISPENSE: 70;
    MEDICATION_REQUEST: 71;
    MEDICATION_STATEMENT: 72;
    MESSAGE_DEFINITION: 73;
    MESSAGE_HEADER: 74;
    NAMING_SYSTEM: 75;
    NUTRITION_ORDER: 76;
    OBSERVATION: 77;
    OPERATION_DEFINITION: 78;
    OPERATION_OUTCOME: 79;
    ORGANIZATION: 80;
    PARAMETERS: 81;
    PATIENT: 82;
    PAYMENT_NOTICE: 83;
    PAYMENT_RECONCILIATION: 84;
    PERSON: 85;
    PLAN_DEFINITION: 86;
    PRACTITIONER: 87;
    PRACTITIONER_ROLE: 88;
    PROCEDURE: 89;
    PROCEDURE_REQUEST: 90;
    PROCESS_REQUEST: 91;
    PROCESS_RESPONSE: 92;
    PROVENANCE: 93;
    QUESTIONNAIRE: 94;
    QUESTIONNAIRE_RESPONSE: 95;
    REFERRAL_REQUEST: 96;
    RELATED_PERSON: 97;
    REQUEST_GROUP: 98;
    RESEARCH_STUDY: 99;
    RESEARCH_SUBJECT: 100;
    RESOURCE: 101;
    RISK_ASSESSMENT: 102;
    SCHEDULE: 103;
    SEARCH_PARAMETER: 104;
    SEQUENCE: 105;
    SERVICE_DEFINITION: 106;
    SLOT: 107;
    SPECIMEN: 108;
    STRUCTURE_DEFINITION: 109;
    STRUCTURE_MAP: 110;
    SUBSCRIPTION: 111;
    SUBSTANCE: 112;
    SUPPLY_DELIVERY: 113;
    SUPPLY_REQUEST: 114;
    TASK: 115;
    TEST_REPORT: 116;
    TEST_SCRIPT: 117;
    VALUE_SET: 118;
    VISION_PRESCRIPTION: 119;
  }

  export const Value: ValueMap;
}

export class ResourceValidationModeCode extends jspb.Message {
  getValue(): ResourceValidationModeCode.ValueMap[keyof ResourceValidationModeCode.ValueMap];
  setValue(value: ResourceValidationModeCode.ValueMap[keyof ResourceValidationModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceValidationModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceValidationModeCode): ResourceValidationModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceValidationModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceValidationModeCode;
  static deserializeBinaryFromReader(message: ResourceValidationModeCode, reader: jspb.BinaryReader): ResourceValidationModeCode;
}

export namespace ResourceValidationModeCode {
  export type AsObject = {
    value: ResourceValidationModeCode.ValueMap[keyof ResourceValidationModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CREATE: 1;
    UPDATE: 2;
    DELETE: 3;
  }

  export const Value: ValueMap;
}

export class ResponseTypeCode extends jspb.Message {
  getValue(): ResponseTypeCode.ValueMap[keyof ResponseTypeCode.ValueMap];
  setValue(value: ResponseTypeCode.ValueMap[keyof ResponseTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseTypeCode): ResponseTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResponseTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseTypeCode;
  static deserializeBinaryFromReader(message: ResponseTypeCode, reader: jspb.BinaryReader): ResponseTypeCode;
}

export namespace ResponseTypeCode {
  export type AsObject = {
    value: ResponseTypeCode.ValueMap[keyof ResponseTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OK: 1;
    TRANSIENT_ERROR: 2;
    FATAL_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class RestfulCapabilityModeCode extends jspb.Message {
  getValue(): RestfulCapabilityModeCode.ValueMap[keyof RestfulCapabilityModeCode.ValueMap];
  setValue(value: RestfulCapabilityModeCode.ValueMap[keyof RestfulCapabilityModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestfulCapabilityModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: RestfulCapabilityModeCode): RestfulCapabilityModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestfulCapabilityModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestfulCapabilityModeCode;
  static deserializeBinaryFromReader(message: RestfulCapabilityModeCode, reader: jspb.BinaryReader): RestfulCapabilityModeCode;
}

export namespace RestfulCapabilityModeCode {
  export type AsObject = {
    value: RestfulCapabilityModeCode.ValueMap[keyof RestfulCapabilityModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CLIENT: 1;
    SERVER: 2;
  }

  export const Value: ValueMap;
}

export class RestfulSecurityServiceCode extends jspb.Message {
  getValue(): RestfulSecurityServiceCode.ValueMap[keyof RestfulSecurityServiceCode.ValueMap];
  setValue(value: RestfulSecurityServiceCode.ValueMap[keyof RestfulSecurityServiceCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestfulSecurityServiceCode.AsObject;
  static toObject(includeInstance: boolean, msg: RestfulSecurityServiceCode): RestfulSecurityServiceCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RestfulSecurityServiceCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestfulSecurityServiceCode;
  static deserializeBinaryFromReader(message: RestfulSecurityServiceCode, reader: jspb.BinaryReader): RestfulSecurityServiceCode;
}

export namespace RestfulSecurityServiceCode {
  export type AsObject = {
    value: RestfulSecurityServiceCode.ValueMap[keyof RestfulSecurityServiceCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    OAUTH: 1;
    SMART_ON_FHIR: 2;
    NTLM: 3;
    BASIC: 4;
    KERBEROS: 5;
    CERTIFICATES: 6;
  }

  export const Value: ValueMap;
}

export class RiskProbabilityCode extends jspb.Message {
  getValue(): RiskProbabilityCode.ValueMap[keyof RiskProbabilityCode.ValueMap];
  setValue(value: RiskProbabilityCode.ValueMap[keyof RiskProbabilityCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RiskProbabilityCode.AsObject;
  static toObject(includeInstance: boolean, msg: RiskProbabilityCode): RiskProbabilityCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RiskProbabilityCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RiskProbabilityCode;
  static deserializeBinaryFromReader(message: RiskProbabilityCode, reader: jspb.BinaryReader): RiskProbabilityCode;
}

export namespace RiskProbabilityCode {
  export type AsObject = {
    value: RiskProbabilityCode.ValueMap[keyof RiskProbabilityCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NEGLIGIBLE: 1;
    LOW: 2;
    MODERATE: 3;
    HIGH: 4;
    CERTAIN: 5;
  }

  export const Value: ValueMap;
}

export class SearchComparatorCode extends jspb.Message {
  getValue(): SearchComparatorCode.ValueMap[keyof SearchComparatorCode.ValueMap];
  setValue(value: SearchComparatorCode.ValueMap[keyof SearchComparatorCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchComparatorCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchComparatorCode): SearchComparatorCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchComparatorCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchComparatorCode;
  static deserializeBinaryFromReader(message: SearchComparatorCode, reader: jspb.BinaryReader): SearchComparatorCode;
}

export namespace SearchComparatorCode {
  export type AsObject = {
    value: SearchComparatorCode.ValueMap[keyof SearchComparatorCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    EQ: 1;
    NE: 2;
    GT: 3;
    LT: 4;
    GE: 5;
    LE: 6;
    SA: 7;
    EB: 8;
    AP: 9;
  }

  export const Value: ValueMap;
}

export class SearchEntryModeCode extends jspb.Message {
  getValue(): SearchEntryModeCode.ValueMap[keyof SearchEntryModeCode.ValueMap];
  setValue(value: SearchEntryModeCode.ValueMap[keyof SearchEntryModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchEntryModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchEntryModeCode): SearchEntryModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchEntryModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchEntryModeCode;
  static deserializeBinaryFromReader(message: SearchEntryModeCode, reader: jspb.BinaryReader): SearchEntryModeCode;
}

export namespace SearchEntryModeCode {
  export type AsObject = {
    value: SearchEntryModeCode.ValueMap[keyof SearchEntryModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MATCH: 1;
    INCLUDE: 2;
    OUTCOME: 3;
  }

  export const Value: ValueMap;
}

export class SearchModifierCodeCode extends jspb.Message {
  getValue(): SearchModifierCodeCode.ValueMap[keyof SearchModifierCodeCode.ValueMap];
  setValue(value: SearchModifierCodeCode.ValueMap[keyof SearchModifierCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchModifierCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchModifierCodeCode): SearchModifierCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchModifierCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchModifierCodeCode;
  static deserializeBinaryFromReader(message: SearchModifierCodeCode, reader: jspb.BinaryReader): SearchModifierCodeCode;
}

export namespace SearchModifierCodeCode {
  export type AsObject = {
    value: SearchModifierCodeCode.ValueMap[keyof SearchModifierCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MISSING: 1;
    EXACT: 2;
    CONTAINS: 3;
    NOT: 4;
    TEXT: 5;
    IN: 6;
    NOT_IN: 7;
    BELOW: 8;
    ABOVE: 9;
    TYPE: 10;
  }

  export const Value: ValueMap;
}

export class SearchParamTypeCode extends jspb.Message {
  getValue(): SearchParamTypeCode.ValueMap[keyof SearchParamTypeCode.ValueMap];
  setValue(value: SearchParamTypeCode.ValueMap[keyof SearchParamTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchParamTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SearchParamTypeCode): SearchParamTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SearchParamTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchParamTypeCode;
  static deserializeBinaryFromReader(message: SearchParamTypeCode, reader: jspb.BinaryReader): SearchParamTypeCode;
}

export namespace SearchParamTypeCode {
  export type AsObject = {
    value: SearchParamTypeCode.ValueMap[keyof SearchParamTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NUMBER: 1;
    DATE: 2;
    STRING: 3;
    TOKEN: 4;
    REFERENCE: 5;
    COMPOSITE: 6;
    QUANTITY: 7;
    URI: 8;
  }

  export const Value: ValueMap;
}

export class XPathUsageTypeCode extends jspb.Message {
  getValue(): XPathUsageTypeCode.ValueMap[keyof XPathUsageTypeCode.ValueMap];
  setValue(value: XPathUsageTypeCode.ValueMap[keyof XPathUsageTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): XPathUsageTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: XPathUsageTypeCode): XPathUsageTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: XPathUsageTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): XPathUsageTypeCode;
  static deserializeBinaryFromReader(message: XPathUsageTypeCode, reader: jspb.BinaryReader): XPathUsageTypeCode;
}

export namespace XPathUsageTypeCode {
  export type AsObject = {
    value: XPathUsageTypeCode.ValueMap[keyof XPathUsageTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NORMAL: 1;
    PHONETIC: 2;
    NEARBY: 3;
    DISTANCE: 4;
    OTHER: 5;
  }

  export const Value: ValueMap;
}

export class SequenceTypeCode extends jspb.Message {
  getValue(): SequenceTypeCode.ValueMap[keyof SequenceTypeCode.ValueMap];
  setValue(value: SequenceTypeCode.ValueMap[keyof SequenceTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SequenceTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SequenceTypeCode): SequenceTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SequenceTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SequenceTypeCode;
  static deserializeBinaryFromReader(message: SequenceTypeCode, reader: jspb.BinaryReader): SequenceTypeCode;
}

export namespace SequenceTypeCode {
  export type AsObject = {
    value: SequenceTypeCode.ValueMap[keyof SequenceTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AA: 1;
    DNA: 2;
    RNA: 3;
  }

  export const Value: ValueMap;
}

export class ServiceProvisionConditionsCode extends jspb.Message {
  getValue(): ServiceProvisionConditionsCode.ValueMap[keyof ServiceProvisionConditionsCode.ValueMap];
  setValue(value: ServiceProvisionConditionsCode.ValueMap[keyof ServiceProvisionConditionsCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceProvisionConditionsCode.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceProvisionConditionsCode): ServiceProvisionConditionsCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceProvisionConditionsCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceProvisionConditionsCode;
  static deserializeBinaryFromReader(message: ServiceProvisionConditionsCode, reader: jspb.BinaryReader): ServiceProvisionConditionsCode;
}

export namespace ServiceProvisionConditionsCode {
  export type AsObject = {
    value: ServiceProvisionConditionsCode.ValueMap[keyof ServiceProvisionConditionsCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FREE: 1;
    DISC: 2;
    COST: 3;
  }

  export const Value: ValueMap;
}

export class ReferralMethodCode extends jspb.Message {
  getValue(): ReferralMethodCode.ValueMap[keyof ReferralMethodCode.ValueMap];
  setValue(value: ReferralMethodCode.ValueMap[keyof ReferralMethodCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReferralMethodCode.AsObject;
  static toObject(includeInstance: boolean, msg: ReferralMethodCode): ReferralMethodCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReferralMethodCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReferralMethodCode;
  static deserializeBinaryFromReader(message: ReferralMethodCode, reader: jspb.BinaryReader): ReferralMethodCode;
}

export namespace ReferralMethodCode {
  export type AsObject = {
    value: ReferralMethodCode.ValueMap[keyof ReferralMethodCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FAX: 1;
    PHONE: 2;
    ELEC: 3;
    SEMAIL: 4;
    MAIL: 5;
  }

  export const Value: ValueMap;
}

export class SlotStatusCode extends jspb.Message {
  getValue(): SlotStatusCode.ValueMap[keyof SlotStatusCode.ValueMap];
  setValue(value: SlotStatusCode.ValueMap[keyof SlotStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SlotStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SlotStatusCode): SlotStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SlotStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SlotStatusCode;
  static deserializeBinaryFromReader(message: SlotStatusCode, reader: jspb.BinaryReader): SlotStatusCode;
}

export namespace SlotStatusCode {
  export type AsObject = {
    value: SlotStatusCode.ValueMap[keyof SlotStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BUSY: 1;
    FREE: 2;
    BUSY_UNAVAILABLE: 3;
    BUSY_TENTATIVE: 4;
    ENTERED_IN_ERROR: 5;
  }

  export const Value: ValueMap;
}

export class SpecialValuesCode extends jspb.Message {
  getValue(): SpecialValuesCode.ValueMap[keyof SpecialValuesCode.ValueMap];
  setValue(value: SpecialValuesCode.ValueMap[keyof SpecialValuesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecialValuesCode.AsObject;
  static toObject(includeInstance: boolean, msg: SpecialValuesCode): SpecialValuesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecialValuesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecialValuesCode;
  static deserializeBinaryFromReader(message: SpecialValuesCode, reader: jspb.BinaryReader): SpecialValuesCode;
}

export namespace SpecialValuesCode {
  export type AsObject = {
    value: SpecialValuesCode.ValueMap[keyof SpecialValuesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TRUE: 1;
    FALSE: 2;
    TRACE: 3;
    SUFFICIENT: 4;
    WITHDRAWN: 5;
    NIL_KNOWN: 6;
  }

  export const Value: ValueMap;
}

export class DeviceSpecificationSpecTypeCode extends jspb.Message {
  getValue(): DeviceSpecificationSpecTypeCode.ValueMap[keyof DeviceSpecificationSpecTypeCode.ValueMap];
  setValue(value: DeviceSpecificationSpecTypeCode.ValueMap[keyof DeviceSpecificationSpecTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceSpecificationSpecTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceSpecificationSpecTypeCode): DeviceSpecificationSpecTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceSpecificationSpecTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceSpecificationSpecTypeCode;
  static deserializeBinaryFromReader(message: DeviceSpecificationSpecTypeCode, reader: jspb.BinaryReader): DeviceSpecificationSpecTypeCode;
}

export namespace DeviceSpecificationSpecTypeCode {
  export type AsObject = {
    value: DeviceSpecificationSpecTypeCode.ValueMap[keyof DeviceSpecificationSpecTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UNSPECIFIED: 1;
    SERIAL_NUMBER: 2;
    PART_NUMBER: 3;
    HARDWARE_REVISION: 4;
    SOFTWARE_REVISION: 5;
    FIRMWARE_REVISION: 6;
    PROTOCOL_REVISION: 7;
    GMDN: 8;
  }

  export const Value: ValueMap;
}

export class SpecimenStatusCode extends jspb.Message {
  getValue(): SpecimenStatusCode.ValueMap[keyof SpecimenStatusCode.ValueMap];
  setValue(value: SpecimenStatusCode.ValueMap[keyof SpecimenStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenStatusCode): SpecimenStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenStatusCode;
  static deserializeBinaryFromReader(message: SpecimenStatusCode, reader: jspb.BinaryReader): SpecimenStatusCode;
}

export namespace SpecimenStatusCode {
  export type AsObject = {
    value: SpecimenStatusCode.ValueMap[keyof SpecimenStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    AVAILABLE: 1;
    UNAVAILABLE: 2;
    UNSATISFACTORY: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class StructureDefinitionKindCode extends jspb.Message {
  getValue(): StructureDefinitionKindCode.ValueMap[keyof StructureDefinitionKindCode.ValueMap];
  setValue(value: StructureDefinitionKindCode.ValueMap[keyof StructureDefinitionKindCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructureDefinitionKindCode.AsObject;
  static toObject(includeInstance: boolean, msg: StructureDefinitionKindCode): StructureDefinitionKindCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StructureDefinitionKindCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructureDefinitionKindCode;
  static deserializeBinaryFromReader(message: StructureDefinitionKindCode, reader: jspb.BinaryReader): StructureDefinitionKindCode;
}

export namespace StructureDefinitionKindCode {
  export type AsObject = {
    value: StructureDefinitionKindCode.ValueMap[keyof StructureDefinitionKindCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PRIMITIVE_TYPE: 1;
    COMPLEX_TYPE: 2;
    RESOURCE: 3;
    LOGICAL: 4;
  }

  export const Value: ValueMap;
}

export class SubscriptionChannelTypeCode extends jspb.Message {
  getValue(): SubscriptionChannelTypeCode.ValueMap[keyof SubscriptionChannelTypeCode.ValueMap];
  setValue(value: SubscriptionChannelTypeCode.ValueMap[keyof SubscriptionChannelTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionChannelTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionChannelTypeCode): SubscriptionChannelTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionChannelTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionChannelTypeCode;
  static deserializeBinaryFromReader(message: SubscriptionChannelTypeCode, reader: jspb.BinaryReader): SubscriptionChannelTypeCode;
}

export namespace SubscriptionChannelTypeCode {
  export type AsObject = {
    value: SubscriptionChannelTypeCode.ValueMap[keyof SubscriptionChannelTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REST_HOOK: 1;
    WEBSOCKET: 2;
    EMAIL: 3;
    SMS: 4;
    MESSAGE: 5;
  }

  export const Value: ValueMap;
}

export class SubscriptionStatusCode extends jspb.Message {
  getValue(): SubscriptionStatusCode.ValueMap[keyof SubscriptionStatusCode.ValueMap];
  setValue(value: SubscriptionStatusCode.ValueMap[keyof SubscriptionStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionStatusCode): SubscriptionStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionStatusCode;
  static deserializeBinaryFromReader(message: SubscriptionStatusCode, reader: jspb.BinaryReader): SubscriptionStatusCode;
}

export namespace SubscriptionStatusCode {
  export type AsObject = {
    value: SubscriptionStatusCode.ValueMap[keyof SubscriptionStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUESTED: 1;
    ACTIVE: 2;
    ERROR: 3;
    OFF: 4;
  }

  export const Value: ValueMap;
}

export class SubscriptionTagCode extends jspb.Message {
  getValue(): SubscriptionTagCode.ValueMap[keyof SubscriptionTagCode.ValueMap];
  setValue(value: SubscriptionTagCode.ValueMap[keyof SubscriptionTagCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscriptionTagCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubscriptionTagCode): SubscriptionTagCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscriptionTagCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscriptionTagCode;
  static deserializeBinaryFromReader(message: SubscriptionTagCode, reader: jspb.BinaryReader): SubscriptionTagCode;
}

export namespace SubscriptionTagCode {
  export type AsObject = {
    value: SubscriptionTagCode.ValueMap[keyof SubscriptionTagCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    QUEUED: 1;
    DELIVERED: 2;
  }

  export const Value: ValueMap;
}

export class SubstanceCategoryCodesCode extends jspb.Message {
  getValue(): SubstanceCategoryCodesCode.ValueMap[keyof SubstanceCategoryCodesCode.ValueMap];
  setValue(value: SubstanceCategoryCodesCode.ValueMap[keyof SubstanceCategoryCodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstanceCategoryCodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: SubstanceCategoryCodesCode): SubstanceCategoryCodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstanceCategoryCodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstanceCategoryCodesCode;
  static deserializeBinaryFromReader(message: SubstanceCategoryCodesCode, reader: jspb.BinaryReader): SubstanceCategoryCodesCode;
}

export namespace SubstanceCategoryCodesCode {
  export type AsObject = {
    value: SubstanceCategoryCodesCode.ValueMap[keyof SubstanceCategoryCodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ALLERGEN: 1;
    BIOLOGICAL: 2;
    BODY: 3;
    CHEMICAL: 4;
    FOOD: 5;
    DRUG: 6;
    MATERIAL: 7;
  }

  export const Value: ValueMap;
}

export class FHIRSubstanceStatusCode extends jspb.Message {
  getValue(): FHIRSubstanceStatusCode.ValueMap[keyof FHIRSubstanceStatusCode.ValueMap];
  setValue(value: FHIRSubstanceStatusCode.ValueMap[keyof FHIRSubstanceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FHIRSubstanceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: FHIRSubstanceStatusCode): FHIRSubstanceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FHIRSubstanceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FHIRSubstanceStatusCode;
  static deserializeBinaryFromReader(message: FHIRSubstanceStatusCode, reader: jspb.BinaryReader): FHIRSubstanceStatusCode;
}

export namespace FHIRSubstanceStatusCode {
  export type AsObject = {
    value: FHIRSubstanceStatusCode.ValueMap[keyof FHIRSubstanceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ACTIVE: 1;
    INACTIVE: 2;
    ENTERED_IN_ERROR: 3;
  }

  export const Value: ValueMap;
}

export class SupplyDeliveryStatusCode extends jspb.Message {
  getValue(): SupplyDeliveryStatusCode.ValueMap[keyof SupplyDeliveryStatusCode.ValueMap];
  setValue(value: SupplyDeliveryStatusCode.ValueMap[keyof SupplyDeliveryStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyDeliveryStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyDeliveryStatusCode): SupplyDeliveryStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyDeliveryStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyDeliveryStatusCode;
  static deserializeBinaryFromReader(message: SupplyDeliveryStatusCode, reader: jspb.BinaryReader): SupplyDeliveryStatusCode;
}

export namespace SupplyDeliveryStatusCode {
  export type AsObject = {
    value: SupplyDeliveryStatusCode.ValueMap[keyof SupplyDeliveryStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    IN_PROGRESS: 1;
    COMPLETED: 2;
    ABANDONED: 3;
    ENTERED_IN_ERROR: 4;
  }

  export const Value: ValueMap;
}

export class SupplyItemTypeCode extends jspb.Message {
  getValue(): SupplyItemTypeCode.ValueMap[keyof SupplyItemTypeCode.ValueMap];
  setValue(value: SupplyItemTypeCode.ValueMap[keyof SupplyItemTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyItemTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyItemTypeCode): SupplyItemTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyItemTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyItemTypeCode;
  static deserializeBinaryFromReader(message: SupplyItemTypeCode, reader: jspb.BinaryReader): SupplyItemTypeCode;
}

export namespace SupplyItemTypeCode {
  export type AsObject = {
    value: SupplyItemTypeCode.ValueMap[keyof SupplyItemTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    MEDICATION: 1;
    DEVICE: 2;
  }

  export const Value: ValueMap;
}

export class SupplyTypeCode extends jspb.Message {
  getValue(): SupplyTypeCode.ValueMap[keyof SupplyTypeCode.ValueMap];
  setValue(value: SupplyTypeCode.ValueMap[keyof SupplyTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyTypeCode): SupplyTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyTypeCode;
  static deserializeBinaryFromReader(message: SupplyTypeCode, reader: jspb.BinaryReader): SupplyTypeCode;
}

export namespace SupplyTypeCode {
  export type AsObject = {
    value: SupplyTypeCode.ValueMap[keyof SupplyTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    CENTRAL: 1;
    NONSTOCK: 2;
  }

  export const Value: ValueMap;
}

export class SupplyRequestReasonCode extends jspb.Message {
  getValue(): SupplyRequestReasonCode.ValueMap[keyof SupplyRequestReasonCode.ValueMap];
  setValue(value: SupplyRequestReasonCode.ValueMap[keyof SupplyRequestReasonCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyRequestReasonCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyRequestReasonCode): SupplyRequestReasonCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyRequestReasonCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyRequestReasonCode;
  static deserializeBinaryFromReader(message: SupplyRequestReasonCode, reader: jspb.BinaryReader): SupplyRequestReasonCode;
}

export namespace SupplyRequestReasonCode {
  export type AsObject = {
    value: SupplyRequestReasonCode.ValueMap[keyof SupplyRequestReasonCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    PATIENT_CARE: 1;
    WARD_STOCK: 2;
  }

  export const Value: ValueMap;
}

export class SupplyRequestStatusCode extends jspb.Message {
  getValue(): SupplyRequestStatusCode.ValueMap[keyof SupplyRequestStatusCode.ValueMap];
  setValue(value: SupplyRequestStatusCode.ValueMap[keyof SupplyRequestStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplyRequestStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: SupplyRequestStatusCode): SupplyRequestStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SupplyRequestStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplyRequestStatusCode;
  static deserializeBinaryFromReader(message: SupplyRequestStatusCode, reader: jspb.BinaryReader): SupplyRequestStatusCode;
}

export namespace SupplyRequestStatusCode {
  export type AsObject = {
    value: SupplyRequestStatusCode.ValueMap[keyof SupplyRequestStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    ACTIVE: 2;
    SUSPENDED: 3;
    CANCELLED: 4;
    COMPLETED: 5;
    ENTERED_IN_ERROR: 6;
    UNKNOWN: 7;
  }

  export const Value: ValueMap;
}

export class SystemRestfulInteractionCode extends jspb.Message {
  getValue(): SystemRestfulInteractionCode.ValueMap[keyof SystemRestfulInteractionCode.ValueMap];
  setValue(value: SystemRestfulInteractionCode.ValueMap[keyof SystemRestfulInteractionCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemRestfulInteractionCode.AsObject;
  static toObject(includeInstance: boolean, msg: SystemRestfulInteractionCode): SystemRestfulInteractionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemRestfulInteractionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemRestfulInteractionCode;
  static deserializeBinaryFromReader(message: SystemRestfulInteractionCode, reader: jspb.BinaryReader): SystemRestfulInteractionCode;
}

export namespace SystemRestfulInteractionCode {
  export type AsObject = {
    value: SystemRestfulInteractionCode.ValueMap[keyof SystemRestfulInteractionCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    TRANSACTION: 1;
    BATCH: 2;
    SEARCH_SYSTEM: 3;
    HISTORY_SYSTEM: 4;
  }

  export const Value: ValueMap;
}

export class SystemVersionProcessingModeCode extends jspb.Message {
  getValue(): SystemVersionProcessingModeCode.ValueMap[keyof SystemVersionProcessingModeCode.ValueMap];
  setValue(value: SystemVersionProcessingModeCode.ValueMap[keyof SystemVersionProcessingModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemVersionProcessingModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: SystemVersionProcessingModeCode): SystemVersionProcessingModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemVersionProcessingModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemVersionProcessingModeCode;
  static deserializeBinaryFromReader(message: SystemVersionProcessingModeCode, reader: jspb.BinaryReader): SystemVersionProcessingModeCode;
}

export namespace SystemVersionProcessingModeCode {
  export type AsObject = {
    value: SystemVersionProcessingModeCode.ValueMap[keyof SystemVersionProcessingModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DEFAULT: 1;
    CHECK: 2;
    OVERRIDE: 3;
  }

  export const Value: ValueMap;
}

export class TaskPerformerTypeCode extends jspb.Message {
  getValue(): TaskPerformerTypeCode.ValueMap[keyof TaskPerformerTypeCode.ValueMap];
  setValue(value: TaskPerformerTypeCode.ValueMap[keyof TaskPerformerTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskPerformerTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TaskPerformerTypeCode): TaskPerformerTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskPerformerTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskPerformerTypeCode;
  static deserializeBinaryFromReader(message: TaskPerformerTypeCode, reader: jspb.BinaryReader): TaskPerformerTypeCode;
}

export namespace TaskPerformerTypeCode {
  export type AsObject = {
    value: TaskPerformerTypeCode.ValueMap[keyof TaskPerformerTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    REQUESTER: 1;
    DISPATCHER: 2;
    SCHEDULER: 3;
    PERFORMER: 4;
    MONITOR: 5;
    MANAGER: 6;
    ACQUIRER: 7;
    REVIEWER: 8;
  }

  export const Value: ValueMap;
}

export class TemplateStatusCodeCode extends jspb.Message {
  getValue(): TemplateStatusCodeCode.ValueMap[keyof TemplateStatusCodeCode.ValueMap];
  setValue(value: TemplateStatusCodeCode.ValueMap[keyof TemplateStatusCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TemplateStatusCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TemplateStatusCodeCode): TemplateStatusCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TemplateStatusCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TemplateStatusCodeCode;
  static deserializeBinaryFromReader(message: TemplateStatusCodeCode, reader: jspb.BinaryReader): TemplateStatusCodeCode;
}

export namespace TemplateStatusCodeCode {
  export type AsObject = {
    value: TemplateStatusCodeCode.ValueMap[keyof TemplateStatusCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    PENDING: 2;
    ACTIVE: 3;
    REVIEW: 4;
    CANCELLED: 5;
    REJECTED: 6;
    RETIRED: 7;
    TERMINATED: 8;
  }

  export const Value: ValueMap;
}

export class TaskStatusCode extends jspb.Message {
  getValue(): TaskStatusCode.ValueMap[keyof TaskStatusCode.ValueMap];
  setValue(value: TaskStatusCode.ValueMap[keyof TaskStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: TaskStatusCode): TaskStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskStatusCode;
  static deserializeBinaryFromReader(message: TaskStatusCode, reader: jspb.BinaryReader): TaskStatusCode;
}

export namespace TaskStatusCode {
  export type AsObject = {
    value: TaskStatusCode.ValueMap[keyof TaskStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    DRAFT: 1;
    REQUESTED: 2;
    RECEIVED: 3;
    ACCEPTED: 4;
    REJECTED: 5;
    READY: 6;
    CANCELLED: 7;
    IN_PROGRESS: 8;
    ON_HOLD: 9;
    FAILED: 10;
    COMPLETED: 11;
    ENTERED_IN_ERROR: 12;
  }

  export const Value: ValueMap;
}

export class TestScriptOperationCodeCode extends jspb.Message {
  getValue(): TestScriptOperationCodeCode.ValueMap[keyof TestScriptOperationCodeCode.ValueMap];
  setValue(value: TestScriptOperationCodeCode.ValueMap[keyof TestScriptOperationCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScriptOperationCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestScriptOperationCodeCode): TestScriptOperationCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScriptOperationCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScriptOperationCodeCode;
  static deserializeBinaryFromReader(message: TestScriptOperationCodeCode, reader: jspb.BinaryReader): TestScriptOperationCodeCode;
}

export namespace TestScriptOperationCodeCode {
  export type AsObject = {
    value: TestScriptOperationCodeCode.ValueMap[keyof TestScriptOperationCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    READ: 1;
    VREAD: 2;
    UPDATE: 3;
    UPDATE_CREATE: 4;
    DELETE: 5;
    DELETE_COND_SINGLE: 6;
    DELETE_COND_MULTIPLE: 7;
    HISTORY: 8;
    CREATE: 9;
    SEARCH: 10;
    BATCH: 11;
    TRANSACTION: 12;
    CAPABILITIES: 13;
    APPLY: 14;
    CANCEL: 15;
    CLOSURE: 16;
    COMPOSE: 17;
    CONFORMS: 18;
    DATA_REQUIREMENTS: 19;
    DOCUMENT: 20;
    EVALUATE: 21;
    EVALUATE_MEASURE: 22;
    EVERYTHING: 23;
    EXPAND: 24;
    FAIL: 25;
    FIND: 26;
    FINISH: 27;
    IMPLEMENTS: 28;
    LOOKUP: 29;
    MATCH: 30;
    META: 31;
    META_ADD: 32;
    META_DELETE: 33;
    POPULATE: 34;
    POPULATEHTML: 35;
    POPULATELINK: 36;
    PROCESS_MESSAGE: 37;
    QUESTIONNAIRE: 38;
    RELEASE: 39;
    RESERVE: 40;
    RESUME: 41;
    SET_INPUT: 42;
    SET_OUTPUT: 43;
    START: 44;
    STATS: 45;
    STOP: 46;
    SUBSET: 47;
    SUBSUMES: 48;
    SUSPEND: 49;
    TRANSFORM: 50;
    TRANSLATE: 51;
    VALIDATE: 52;
    VALIDATE_CODE: 53;
  }

  export const Value: ValueMap;
}

export class TestScriptProfileDestinationTypeCode extends jspb.Message {
  getValue(): TestScriptProfileDestinationTypeCode.ValueMap[keyof TestScriptProfileDestinationTypeCode.ValueMap];
  setValue(value: TestScriptProfileDestinationTypeCode.ValueMap[keyof TestScriptProfileDestinationTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScriptProfileDestinationTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestScriptProfileDestinationTypeCode): TestScriptProfileDestinationTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScriptProfileDestinationTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScriptProfileDestinationTypeCode;
  static deserializeBinaryFromReader(message: TestScriptProfileDestinationTypeCode, reader: jspb.BinaryReader): TestScriptProfileDestinationTypeCode;
}

export namespace TestScriptProfileDestinationTypeCode {
  export type AsObject = {
    value: TestScriptProfileDestinationTypeCode.ValueMap[keyof TestScriptProfileDestinationTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FHIR_SERVER: 1;
    FHIR_SDC_FORMMANAGER: 2;
    FHIR_SDC_FORMPROCESSOR: 3;
    FHIR_SDC_FORMRECEIVER: 4;
  }

  export const Value: ValueMap;
}

export class TestScriptProfileOriginTypeCode extends jspb.Message {
  getValue(): TestScriptProfileOriginTypeCode.ValueMap[keyof TestScriptProfileOriginTypeCode.ValueMap];
  setValue(value: TestScriptProfileOriginTypeCode.ValueMap[keyof TestScriptProfileOriginTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestScriptProfileOriginTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TestScriptProfileOriginTypeCode): TestScriptProfileOriginTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestScriptProfileOriginTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestScriptProfileOriginTypeCode;
  static deserializeBinaryFromReader(message: TestScriptProfileOriginTypeCode, reader: jspb.BinaryReader): TestScriptProfileOriginTypeCode;
}

export namespace TestScriptProfileOriginTypeCode {
  export type AsObject = {
    value: TestScriptProfileOriginTypeCode.ValueMap[keyof TestScriptProfileOriginTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    FHIR_CLIENT: 1;
    FHIR_SDC_FORMFILLER: 2;
  }

  export const Value: ValueMap;
}

export class TransactionModeCode extends jspb.Message {
  getValue(): TransactionModeCode.ValueMap[keyof TransactionModeCode.ValueMap];
  setValue(value: TransactionModeCode.ValueMap[keyof TransactionModeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionModeCode.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionModeCode): TransactionModeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TransactionModeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionModeCode;
  static deserializeBinaryFromReader(message: TransactionModeCode, reader: jspb.BinaryReader): TransactionModeCode;
}

export namespace TransactionModeCode {
  export type AsObject = {
    value: TransactionModeCode.ValueMap[keyof TransactionModeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NOT_SUPPORTED: 1;
    BATCH: 2;
    TRANSACTION: 3;
    BOTH: 4;
  }

  export const Value: ValueMap;
}

export class TypeDerivationRuleCode extends jspb.Message {
  getValue(): TypeDerivationRuleCode.ValueMap[keyof TypeDerivationRuleCode.ValueMap];
  setValue(value: TypeDerivationRuleCode.ValueMap[keyof TypeDerivationRuleCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDerivationRuleCode.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDerivationRuleCode): TypeDerivationRuleCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeDerivationRuleCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDerivationRuleCode;
  static deserializeBinaryFromReader(message: TypeDerivationRuleCode, reader: jspb.BinaryReader): TypeDerivationRuleCode;
}

export namespace TypeDerivationRuleCode {
  export type AsObject = {
    value: TypeDerivationRuleCode.ValueMap[keyof TypeDerivationRuleCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    SPECIALIZATION: 1;
    CONSTRAINT: 2;
  }

  export const Value: ValueMap;
}

export class TypeRestfulInteractionCode extends jspb.Message {
  getValue(): TypeRestfulInteractionCode.ValueMap[keyof TypeRestfulInteractionCode.ValueMap];
  setValue(value: TypeRestfulInteractionCode.ValueMap[keyof TypeRestfulInteractionCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeRestfulInteractionCode.AsObject;
  static toObject(includeInstance: boolean, msg: TypeRestfulInteractionCode): TypeRestfulInteractionCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TypeRestfulInteractionCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeRestfulInteractionCode;
  static deserializeBinaryFromReader(message: TypeRestfulInteractionCode, reader: jspb.BinaryReader): TypeRestfulInteractionCode;
}

export namespace TypeRestfulInteractionCode {
  export type AsObject = {
    value: TypeRestfulInteractionCode.ValueMap[keyof TypeRestfulInteractionCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    READ: 1;
    VREAD: 2;
    UPDATE: 3;
    PATCH: 4;
    DELETE: 5;
    HISTORY_INSTANCE: 6;
    HISTORY_TYPE: 7;
    CREATE: 8;
    SEARCH_TYPE: 9;
  }

  export const Value: ValueMap;
}

export class UDIEntryTypeCode extends jspb.Message {
  getValue(): UDIEntryTypeCode.ValueMap[keyof UDIEntryTypeCode.ValueMap];
  setValue(value: UDIEntryTypeCode.ValueMap[keyof UDIEntryTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UDIEntryTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: UDIEntryTypeCode): UDIEntryTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UDIEntryTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UDIEntryTypeCode;
  static deserializeBinaryFromReader(message: UDIEntryTypeCode, reader: jspb.BinaryReader): UDIEntryTypeCode;
}

export namespace UDIEntryTypeCode {
  export type AsObject = {
    value: UDIEntryTypeCode.ValueMap[keyof UDIEntryTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    BARCODE: 1;
    RFID: 2;
    MANUAL: 3;
    CARD: 4;
    SELF_REPORTED: 5;
    UNKNOWN: 6;
  }

  export const Value: ValueMap;
}

export class UnknownContentCodeCode extends jspb.Message {
  getValue(): UnknownContentCodeCode.ValueMap[keyof UnknownContentCodeCode.ValueMap];
  setValue(value: UnknownContentCodeCode.ValueMap[keyof UnknownContentCodeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnknownContentCodeCode.AsObject;
  static toObject(includeInstance: boolean, msg: UnknownContentCodeCode): UnknownContentCodeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnknownContentCodeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnknownContentCodeCode;
  static deserializeBinaryFromReader(message: UnknownContentCodeCode, reader: jspb.BinaryReader): UnknownContentCodeCode;
}

export namespace UnknownContentCodeCode {
  export type AsObject = {
    value: UnknownContentCodeCode.ValueMap[keyof UnknownContentCodeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NO: 1;
    EXTENSIONS: 2;
    ELEMENTS: 3;
    BOTH: 4;
  }

  export const Value: ValueMap;
}

export class UsageContextTypeCode extends jspb.Message {
  getValue(): UsageContextTypeCode.ValueMap[keyof UsageContextTypeCode.ValueMap];
  setValue(value: UsageContextTypeCode.ValueMap[keyof UsageContextTypeCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsageContextTypeCode.AsObject;
  static toObject(includeInstance: boolean, msg: UsageContextTypeCode): UsageContextTypeCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UsageContextTypeCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsageContextTypeCode;
  static deserializeBinaryFromReader(message: UsageContextTypeCode, reader: jspb.BinaryReader): UsageContextTypeCode;
}

export namespace UsageContextTypeCode {
  export type AsObject = {
    value: UsageContextTypeCode.ValueMap[keyof UsageContextTypeCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    GENDER: 1;
    AGE: 2;
    FOCUS: 3;
    USER: 4;
    WORKFLOW: 5;
    TASK: 6;
    VENUE: 7;
    SPECIES: 8;
  }

  export const Value: ValueMap;
}

export class ConfidentialityClassificationCode extends jspb.Message {
  getValue(): ConfidentialityClassificationCode.ValueMap[keyof ConfidentialityClassificationCode.ValueMap];
  setValue(value: ConfidentialityClassificationCode.ValueMap[keyof ConfidentialityClassificationCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfidentialityClassificationCode.AsObject;
  static toObject(includeInstance: boolean, msg: ConfidentialityClassificationCode): ConfidentialityClassificationCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConfidentialityClassificationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfidentialityClassificationCode;
  static deserializeBinaryFromReader(message: ConfidentialityClassificationCode, reader: jspb.BinaryReader): ConfidentialityClassificationCode;
}

export namespace ConfidentialityClassificationCode {
  export type AsObject = {
    value: ConfidentialityClassificationCode.ValueMap[keyof ConfidentialityClassificationCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    U: 1;
    L: 2;
    M: 3;
    N: 4;
    R: 5;
    V: 6;
  }

  export const Value: ValueMap;
}

export class VaccinationProtocolDoseStatuscodesCode extends jspb.Message {
  getValue(): VaccinationProtocolDoseStatuscodesCode.ValueMap[keyof VaccinationProtocolDoseStatuscodesCode.ValueMap];
  setValue(value: VaccinationProtocolDoseStatuscodesCode.ValueMap[keyof VaccinationProtocolDoseStatuscodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VaccinationProtocolDoseStatuscodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: VaccinationProtocolDoseStatuscodesCode): VaccinationProtocolDoseStatuscodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VaccinationProtocolDoseStatuscodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VaccinationProtocolDoseStatuscodesCode;
  static deserializeBinaryFromReader(message: VaccinationProtocolDoseStatuscodesCode, reader: jspb.BinaryReader): VaccinationProtocolDoseStatuscodesCode;
}

export namespace VaccinationProtocolDoseStatuscodesCode {
  export type AsObject = {
    value: VaccinationProtocolDoseStatuscodesCode.ValueMap[keyof VaccinationProtocolDoseStatuscodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    COUNT: 1;
    NOCOUNT: 2;
  }

  export const Value: ValueMap;
}

export class VaccinationProtocolDoseStatusReasoncodesCode extends jspb.Message {
  getValue(): VaccinationProtocolDoseStatusReasoncodesCode.ValueMap[keyof VaccinationProtocolDoseStatusReasoncodesCode.ValueMap];
  setValue(value: VaccinationProtocolDoseStatusReasoncodesCode.ValueMap[keyof VaccinationProtocolDoseStatusReasoncodesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VaccinationProtocolDoseStatusReasoncodesCode.AsObject;
  static toObject(includeInstance: boolean, msg: VaccinationProtocolDoseStatusReasoncodesCode): VaccinationProtocolDoseStatusReasoncodesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VaccinationProtocolDoseStatusReasoncodesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VaccinationProtocolDoseStatusReasoncodesCode;
  static deserializeBinaryFromReader(message: VaccinationProtocolDoseStatusReasoncodesCode, reader: jspb.BinaryReader): VaccinationProtocolDoseStatusReasoncodesCode;
}

export namespace VaccinationProtocolDoseStatusReasoncodesCode {
  export type AsObject = {
    value: VaccinationProtocolDoseStatusReasoncodesCode.ValueMap[keyof VaccinationProtocolDoseStatusReasoncodesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    ADVSTORAGE: 1;
    COLDCHBRK: 2;
    EXPLOT: 3;
    OUTSIDESCHED: 4;
    PRODRECALL: 5;
  }

  export const Value: ValueMap;
}

export class sequenceStatusCode extends jspb.Message {
  getValue(): sequenceStatusCode.ValueMap[keyof sequenceStatusCode.ValueMap];
  setValue(value: sequenceStatusCode.ValueMap[keyof sequenceStatusCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): sequenceStatusCode.AsObject;
  static toObject(includeInstance: boolean, msg: sequenceStatusCode): sequenceStatusCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: sequenceStatusCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): sequenceStatusCode;
  static deserializeBinaryFromReader(message: sequenceStatusCode, reader: jspb.BinaryReader): sequenceStatusCode;
}

export namespace sequenceStatusCode {
  export type AsObject = {
    value: sequenceStatusCode.ValueMap[keyof sequenceStatusCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    POSITIVE: 1;
    NEGATIVE: 2;
    ABSENT: 3;
  }

  export const Value: ValueMap;
}

export class ResourceVersionPolicyCode extends jspb.Message {
  getValue(): ResourceVersionPolicyCode.ValueMap[keyof ResourceVersionPolicyCode.ValueMap];
  setValue(value: ResourceVersionPolicyCode.ValueMap[keyof ResourceVersionPolicyCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceVersionPolicyCode.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceVersionPolicyCode): ResourceVersionPolicyCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceVersionPolicyCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceVersionPolicyCode;
  static deserializeBinaryFromReader(message: ResourceVersionPolicyCode, reader: jspb.BinaryReader): ResourceVersionPolicyCode;
}

export namespace ResourceVersionPolicyCode {
  export type AsObject = {
    value: ResourceVersionPolicyCode.ValueMap[keyof ResourceVersionPolicyCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    NO_VERSION: 1;
    VERSIONED: 2;
    VERSIONED_UPDATE: 3;
  }

  export const Value: ValueMap;
}

export class VisionBaseCode extends jspb.Message {
  getValue(): VisionBaseCode.ValueMap[keyof VisionBaseCode.ValueMap];
  setValue(value: VisionBaseCode.ValueMap[keyof VisionBaseCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionBaseCode.AsObject;
  static toObject(includeInstance: boolean, msg: VisionBaseCode): VisionBaseCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisionBaseCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionBaseCode;
  static deserializeBinaryFromReader(message: VisionBaseCode, reader: jspb.BinaryReader): VisionBaseCode;
}

export namespace VisionBaseCode {
  export type AsObject = {
    value: VisionBaseCode.ValueMap[keyof VisionBaseCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    UP: 1;
    DOWN: 2;
    IN: 3;
    OUT: 4;
  }

  export const Value: ValueMap;
}

export class VisionEyesCode extends jspb.Message {
  getValue(): VisionEyesCode.ValueMap[keyof VisionEyesCode.ValueMap];
  setValue(value: VisionEyesCode.ValueMap[keyof VisionEyesCode.ValueMap]): void;

  hasId(): boolean;
  clearId(): void;
  getId(): proto_stu3_datatypes_pb.String | undefined;
  setId(value?: proto_stu3_datatypes_pb.String): void;

  clearExtension(): void;
  getExtension(): Array<proto_stu3_datatypes_pb.Extension>;
  setExtension(value: Array<proto_stu3_datatypes_pb.Extension>): void;
  addExtension(value?: proto_stu3_datatypes_pb.Extension, index?: number): proto_stu3_datatypes_pb.Extension;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VisionEyesCode.AsObject;
  static toObject(includeInstance: boolean, msg: VisionEyesCode): VisionEyesCode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VisionEyesCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VisionEyesCode;
  static deserializeBinaryFromReader(message: VisionEyesCode, reader: jspb.BinaryReader): VisionEyesCode;
}

export namespace VisionEyesCode {
  export type AsObject = {
    value: VisionEyesCode.ValueMap[keyof VisionEyesCode.ValueMap],
    id?: proto_stu3_datatypes_pb.String.AsObject,
    extension: Array<proto_stu3_datatypes_pb.Extension.AsObject>,
  }

  export interface ValueMap {
    INVALID_UNINITIALIZED: 0;
    RIGHT: 1;
    LEFT: 2;
  }

  export const Value: ValueMap;
}

