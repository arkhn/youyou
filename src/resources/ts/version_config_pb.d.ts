// package: google.fhir.proto
// file: proto/version_config.proto

import * as jspb from "google-protobuf";

export class ResourceConfig extends jspb.Message {
  clearDefaultTimestampFieldsList(): void;
  getDefaultTimestampFieldsList(): Array<string>;
  setDefaultTimestampFieldsList(value: Array<string>): void;
  addDefaultTimestampFields(value: string, index?: number): string;

  clearTimestampOverrideList(): void;
  getTimestampOverrideList(): Array<ResourceConfig.TimestampOverride>;
  setTimestampOverrideList(value: Array<ResourceConfig.TimestampOverride>): void;
  addTimestampOverride(value?: ResourceConfig.TimestampOverride, index?: number): ResourceConfig.TimestampOverride;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceConfig.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceConfig): ResourceConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResourceConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceConfig;
  static deserializeBinaryFromReader(message: ResourceConfig, reader: jspb.BinaryReader): ResourceConfig;
}

export namespace ResourceConfig {
  export type AsObject = {
    defaultTimestampFieldsList: Array<string>,
    timestampOverrideList: Array<ResourceConfig.TimestampOverride.AsObject>,
  }

  export class TimestampOverride extends jspb.Message {
    getTimestampField(): string;
    setTimestampField(value: string): void;

    clearResourceFieldList(): void;
    getResourceFieldList(): Array<string>;
    setResourceFieldList(value: Array<string>): void;
    addResourceField(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimestampOverride.AsObject;
    static toObject(includeInstance: boolean, msg: TimestampOverride): TimestampOverride.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimestampOverride, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimestampOverride;
    static deserializeBinaryFromReader(message: TimestampOverride, reader: jspb.BinaryReader): TimestampOverride;
  }

  export namespace TimestampOverride {
    export type AsObject = {
      timestampField: string,
      resourceFieldList: Array<string>,
    }
  }
}

export class VersionConfig extends jspb.Message {
  getResourceConfigMap(): jspb.Map<string, ResourceConfig>;
  clearResourceConfigMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionConfig.AsObject;
  static toObject(includeInstance: boolean, msg: VersionConfig): VersionConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionConfig;
  static deserializeBinaryFromReader(message: VersionConfig, reader: jspb.BinaryReader): VersionConfig;
}

export namespace VersionConfig {
  export type AsObject = {
    resourceConfigMap: Array<[string, ResourceConfig.AsObject]>,
  }
}

