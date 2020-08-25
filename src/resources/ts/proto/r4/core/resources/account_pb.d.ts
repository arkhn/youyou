// package: google.fhir.r4.core
// file: proto/r4/core/resources/account.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Account extends jspb.Message {
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

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Account.StatusCode | undefined;
  setStatus(value?: Account.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  clearSubject(): void;
  getSubject(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSubject(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSubject(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasServicePeriod(): boolean;
  clearServicePeriod(): void;
  getServicePeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setServicePeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  clearCoverage(): void;
  getCoverage(): Array<Account.Coverage>;
  setCoverage(value: Array<Account.Coverage>): void;
  addCoverage(value?: Account.Coverage, index?: number): Account.Coverage;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOwner(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearGuarantor(): void;
  getGuarantor(): Array<Account.Guarantor>;
  setGuarantor(value: Array<Account.Guarantor>): void;
  addGuarantor(value?: Account.Guarantor, index?: number): Account.Guarantor;

  hasPartOf(): boolean;
  clearPartOf(): void;
  getPartOf(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPartOf(value?: proto_r4_core_datatypes_pb.Reference): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
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
    status?: Account.StatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    subject: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    servicePeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
    coverage: Array<Account.Coverage.AsObject>,
    owner?: proto_r4_core_datatypes_pb.Reference.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    guarantor: Array<Account.Guarantor.AsObject>,
    partOf?: proto_r4_core_datatypes_pb.Reference.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.AccountStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AccountStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.AccountStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AccountStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.AccountStatusCode.ValueMap[keyof proto_r4_core_codes_pb.AccountStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Coverage extends jspb.Message {
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

    hasCoverage(): boolean;
    clearCoverage(): void;
    getCoverage(): proto_r4_core_datatypes_pb.Reference | undefined;
    setCoverage(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasPriority(): boolean;
    clearPriority(): void;
    getPriority(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
    setPriority(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coverage.AsObject;
    static toObject(includeInstance: boolean, msg: Coverage): Coverage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coverage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coverage;
    static deserializeBinaryFromReader(message: Coverage, reader: jspb.BinaryReader): Coverage;
  }

  export namespace Coverage {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      coverage?: proto_r4_core_datatypes_pb.Reference.AsObject,
      priority?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
    }
  }

  export class Guarantor extends jspb.Message {
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

    hasParty(): boolean;
    clearParty(): void;
    getParty(): proto_r4_core_datatypes_pb.Reference | undefined;
    setParty(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasOnHold(): boolean;
    clearOnHold(): void;
    getOnHold(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setOnHold(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Guarantor.AsObject;
    static toObject(includeInstance: boolean, msg: Guarantor): Guarantor.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Guarantor, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Guarantor;
    static deserializeBinaryFromReader(message: Guarantor, reader: jspb.BinaryReader): Guarantor;
  }

  export namespace Guarantor {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      party?: proto_r4_core_datatypes_pb.Reference.AsObject,
      onHold?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
    }
  }
}

