// package: google.fhir.proto
// file: proto/version_config.proto

import * as jspb from "google-protobuf";

export class ResourceConfig extends jspb.Message {
  clearDefaultTimestampFields(): void;
  getDefaultTimestampFields(): Array<string>;
  setDefaultTimestampFields(value: Array<string>): void;
  addDefaultTimestampFields(value: string, index?: number): string;

  clearTimestampOverride(): void;
  getTimestampOverride(): Array<ResourceConfig.TimestampOverride>;
  setTimestampOverride(value: Array<ResourceConfig.TimestampOverride>): void;
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
    defaultTimestampFields: Array<string>,
    timestampOverride: Array<ResourceConfig.TimestampOverride.AsObject>,
  }

  export class TimestampOverride extends jspb.Message {
    getTimestampField(): string;
    setTimestampField(value: string): void;

    clearResourceField(): void;
    getResourceField(): Array<string>;
    setResourceField(value: Array<string>): void;
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
      resourceField: Array<string>,
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

