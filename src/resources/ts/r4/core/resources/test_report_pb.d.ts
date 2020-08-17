// package: google.fhir.r4.core
// file: proto/r4/core/resources/test_report.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class TestReport extends jspb.Message {
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

  clearContainedList(): void;
  getContainedList(): Array<google_protobuf_any_pb.Any>;
  setContainedList(value: Array<google_protobuf_any_pb.Any>): void;
  addContained(value?: google_protobuf_any_pb.Any, index?: number): google_protobuf_any_pb.Any;

  clearExtensionList(): void;
  getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  clearModifierExtensionList(): void;
  getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
  setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
  addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasName(): boolean;
  clearName(): void;
  getName(): proto_r4_core_datatypes_pb.String | undefined;
  setName(value?: proto_r4_core_datatypes_pb.String): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): TestReport.StatusCode | undefined;
  setStatus(value?: TestReport.StatusCode): void;

  hasTestScript(): boolean;
  clearTestScript(): void;
  getTestScript(): proto_r4_core_datatypes_pb.Reference | undefined;
  setTestScript(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): TestReport.ResultCode | undefined;
  setResult(value?: TestReport.ResultCode): void;

  hasScore(): boolean;
  clearScore(): void;
  getScore(): proto_r4_core_datatypes_pb.Decimal | undefined;
  setScore(value?: proto_r4_core_datatypes_pb.Decimal): void;

  hasTester(): boolean;
  clearTester(): void;
  getTester(): proto_r4_core_datatypes_pb.String | undefined;
  setTester(value?: proto_r4_core_datatypes_pb.String): void;

  hasIssued(): boolean;
  clearIssued(): void;
  getIssued(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setIssued(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearParticipantList(): void;
  getParticipantList(): Array<TestReport.Participant>;
  setParticipantList(value: Array<TestReport.Participant>): void;
  addParticipant(value?: TestReport.Participant, index?: number): TestReport.Participant;

  hasSetup(): boolean;
  clearSetup(): void;
  getSetup(): TestReport.Setup | undefined;
  setSetup(value?: TestReport.Setup): void;

  clearTestList(): void;
  getTestList(): Array<TestReport.Test>;
  setTestList(value: Array<TestReport.Test>): void;
  addTest(value?: TestReport.Test, index?: number): TestReport.Test;

  hasTeardown(): boolean;
  clearTeardown(): void;
  getTeardown(): TestReport.Teardown | undefined;
  setTeardown(value?: TestReport.Teardown): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestReport.AsObject;
  static toObject(includeInstance: boolean, msg: TestReport): TestReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TestReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestReport;
  static deserializeBinaryFromReader(message: TestReport, reader: jspb.BinaryReader): TestReport;
}

export namespace TestReport {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    name?: proto_r4_core_datatypes_pb.String.AsObject,
    status?: TestReport.StatusCode.AsObject,
    testScript?: proto_r4_core_datatypes_pb.Reference.AsObject,
    result?: TestReport.ResultCode.AsObject,
    score?: proto_r4_core_datatypes_pb.Decimal.AsObject,
    tester?: proto_r4_core_datatypes_pb.String.AsObject,
    issued?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    participantList: Array<TestReport.Participant.AsObject>,
    setup?: TestReport.Setup.AsObject,
    testList: Array<TestReport.Test.AsObject>,
    teardown?: TestReport.Teardown.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.TestReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.TestReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_codes_pb.TestReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ResultCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.TestReportResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportResultCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.TestReportResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportResultCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResultCode.AsObject;
    static toObject(includeInstance: boolean, msg: ResultCode): ResultCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResultCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResultCode;
    static deserializeBinaryFromReader(message: ResultCode, reader: jspb.BinaryReader): ResultCode;
  }

  export namespace ResultCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.TestReportResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportResultCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Participant extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasType(): boolean;
    clearType(): void;
    getType(): TestReport.Participant.TypeCode | undefined;
    setType(value?: TestReport.Participant.TypeCode): void;

    hasUri(): boolean;
    clearUri(): void;
    getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasDisplay(): boolean;
    clearDisplay(): void;
    getDisplay(): proto_r4_core_datatypes_pb.String | undefined;
    setDisplay(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Participant.AsObject;
    static toObject(includeInstance: boolean, msg: Participant): Participant.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Participant, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Participant;
    static deserializeBinaryFromReader(message: Participant, reader: jspb.BinaryReader): Participant;
  }

  export namespace Participant {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: TestReport.Participant.TypeCode.AsObject,
      uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
      display?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class TypeCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TypeCode.AsObject;
      static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TypeCode;
      static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
    }

    export namespace TypeCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportParticipantTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Setup extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearActionList(): void;
    getActionList(): Array<TestReport.Setup.SetupAction>;
    setActionList(value: Array<TestReport.Setup.SetupAction>): void;
    addAction(value?: TestReport.Setup.SetupAction, index?: number): TestReport.Setup.SetupAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Setup.AsObject;
    static toObject(includeInstance: boolean, msg: Setup): Setup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Setup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Setup;
    static deserializeBinaryFromReader(message: Setup, reader: jspb.BinaryReader): Setup;
  }

  export namespace Setup {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      actionList: Array<TestReport.Setup.SetupAction.AsObject>,
    }

    export class SetupAction extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestReport.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestReport.Setup.SetupAction.Operation): void;

      hasAssertValue(): boolean;
      clearAssertValue(): void;
      getAssertValue(): TestReport.Setup.SetupAction.Assert | undefined;
      setAssertValue(value?: TestReport.Setup.SetupAction.Assert): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetupAction.AsObject;
      static toObject(includeInstance: boolean, msg: SetupAction): SetupAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetupAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetupAction;
      static deserializeBinaryFromReader(message: SetupAction, reader: jspb.BinaryReader): SetupAction;
    }

    export namespace SetupAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestReport.Setup.SetupAction.Operation.AsObject,
        assertValue?: TestReport.Setup.SetupAction.Assert.AsObject,
      }

      export class Operation extends jspb.Message {
        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        clearModifierExtensionList(): void;
        getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        hasResult(): boolean;
        clearResult(): void;
        getResult(): TestReport.Setup.SetupAction.Operation.ResultCode | undefined;
        setResult(value?: TestReport.Setup.SetupAction.Operation.ResultCode): void;

        hasMessage(): boolean;
        clearMessage(): void;
        getMessage(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setMessage(value?: proto_r4_core_datatypes_pb.Markdown): void;

        hasDetail(): boolean;
        clearDetail(): void;
        getDetail(): proto_r4_core_datatypes_pb.Uri | undefined;
        setDetail(value?: proto_r4_core_datatypes_pb.Uri): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Operation.AsObject;
        static toObject(includeInstance: boolean, msg: Operation): Operation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Operation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Operation;
        static deserializeBinaryFromReader(message: Operation, reader: jspb.BinaryReader): Operation;
      }

      export namespace Operation {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          result?: TestReport.Setup.SetupAction.Operation.ResultCode.AsObject,
          message?: proto_r4_core_datatypes_pb.Markdown.AsObject,
          detail?: proto_r4_core_datatypes_pb.Uri.AsObject,
        }

        export class ResultCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtensionList(): void;
          getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ResultCode.AsObject;
          static toObject(includeInstance: boolean, msg: ResultCode): ResultCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ResultCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ResultCode;
          static deserializeBinaryFromReader(message: ResultCode, reader: jspb.BinaryReader): ResultCode;
        }

        export namespace ResultCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
      }

      export class Assert extends jspb.Message {
        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        clearModifierExtensionList(): void;
        getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        hasResult(): boolean;
        clearResult(): void;
        getResult(): TestReport.Setup.SetupAction.Assert.ResultCode | undefined;
        setResult(value?: TestReport.Setup.SetupAction.Assert.ResultCode): void;

        hasMessage(): boolean;
        clearMessage(): void;
        getMessage(): proto_r4_core_datatypes_pb.Markdown | undefined;
        setMessage(value?: proto_r4_core_datatypes_pb.Markdown): void;

        hasDetail(): boolean;
        clearDetail(): void;
        getDetail(): proto_r4_core_datatypes_pb.String | undefined;
        setDetail(value?: proto_r4_core_datatypes_pb.String): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Assert.AsObject;
        static toObject(includeInstance: boolean, msg: Assert): Assert.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Assert, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Assert;
        static deserializeBinaryFromReader(message: Assert, reader: jspb.BinaryReader): Assert;
      }

      export namespace Assert {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          result?: TestReport.Setup.SetupAction.Assert.ResultCode.AsObject,
          message?: proto_r4_core_datatypes_pb.Markdown.AsObject,
          detail?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export class ResultCode extends jspb.Message {
          getValue(): proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap];
          setValue(value: proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap]): void;

          hasId(): boolean;
          clearId(): void;
          getId(): proto_r4_core_datatypes_pb.String | undefined;
          setId(value?: proto_r4_core_datatypes_pb.String): void;

          clearExtensionList(): void;
          getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
          setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
          addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): ResultCode.AsObject;
          static toObject(includeInstance: boolean, msg: ResultCode): ResultCode.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: ResultCode, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): ResultCode;
          static deserializeBinaryFromReader(message: ResultCode, reader: jspb.BinaryReader): ResultCode;
        }

        export namespace ResultCode {
          export type AsObject = {
            value: proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap[keyof proto_r4_core_codes_pb.TestReportActionResultCode.ValueMap],
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          }
        }
      }
    }
  }

  export class Test extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    clearActionList(): void;
    getActionList(): Array<TestReport.Test.TestAction>;
    setActionList(value: Array<TestReport.Test.TestAction>): void;
    addAction(value?: TestReport.Test.TestAction, index?: number): TestReport.Test.TestAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Test.AsObject;
    static toObject(includeInstance: boolean, msg: Test): Test.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Test, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Test;
    static deserializeBinaryFromReader(message: Test, reader: jspb.BinaryReader): Test;
  }

  export namespace Test {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      actionList: Array<TestReport.Test.TestAction.AsObject>,
    }

    export class TestAction extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestReport.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestReport.Setup.SetupAction.Operation): void;

      hasAssertValue(): boolean;
      clearAssertValue(): void;
      getAssertValue(): TestReport.Setup.SetupAction.Assert | undefined;
      setAssertValue(value?: TestReport.Setup.SetupAction.Assert): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TestAction.AsObject;
      static toObject(includeInstance: boolean, msg: TestAction): TestAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TestAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TestAction;
      static deserializeBinaryFromReader(message: TestAction, reader: jspb.BinaryReader): TestAction;
    }

    export namespace TestAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestReport.Setup.SetupAction.Operation.AsObject,
        assertValue?: TestReport.Setup.SetupAction.Assert.AsObject,
      }
    }
  }

  export class Teardown extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearActionList(): void;
    getActionList(): Array<TestReport.Teardown.TeardownAction>;
    setActionList(value: Array<TestReport.Teardown.TeardownAction>): void;
    addAction(value?: TestReport.Teardown.TeardownAction, index?: number): TestReport.Teardown.TeardownAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Teardown.AsObject;
    static toObject(includeInstance: boolean, msg: Teardown): Teardown.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Teardown, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Teardown;
    static deserializeBinaryFromReader(message: Teardown, reader: jspb.BinaryReader): Teardown;
  }

  export namespace Teardown {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      actionList: Array<TestReport.Teardown.TeardownAction.AsObject>,
    }

    export class TeardownAction extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasOperation(): boolean;
      clearOperation(): void;
      getOperation(): TestReport.Setup.SetupAction.Operation | undefined;
      setOperation(value?: TestReport.Setup.SetupAction.Operation): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TeardownAction.AsObject;
      static toObject(includeInstance: boolean, msg: TeardownAction): TeardownAction.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TeardownAction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TeardownAction;
      static deserializeBinaryFromReader(message: TeardownAction, reader: jspb.BinaryReader): TeardownAction;
    }

    export namespace TeardownAction {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        operation?: TestReport.Setup.SetupAction.Operation.AsObject,
      }
    }
  }
}

