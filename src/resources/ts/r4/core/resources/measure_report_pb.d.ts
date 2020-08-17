// package: google.fhir.r4.core
// file: proto/r4/core/resources/measure_report.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MeasureReport extends jspb.Message {
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

  clearIdentifierList(): void;
  getIdentifierList(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifierList(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): MeasureReport.StatusCode | undefined;
  setStatus(value?: MeasureReport.StatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): MeasureReport.TypeCode | undefined;
  setType(value?: MeasureReport.TypeCode): void;

  hasMeasure(): boolean;
  clearMeasure(): void;
  getMeasure(): proto_r4_core_datatypes_pb.Canonical | undefined;
  setMeasure(value?: proto_r4_core_datatypes_pb.Canonical): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasReporter(): boolean;
  clearReporter(): void;
  getReporter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReporter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasImprovementNotation(): boolean;
  clearImprovementNotation(): void;
  getImprovementNotation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setImprovementNotation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearGroupList(): void;
  getGroupList(): Array<MeasureReport.Group>;
  setGroupList(value: Array<MeasureReport.Group>): void;
  addGroup(value?: MeasureReport.Group, index?: number): MeasureReport.Group;

  clearEvaluatedResourceList(): void;
  getEvaluatedResourceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEvaluatedResourceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEvaluatedResource(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MeasureReport.AsObject;
  static toObject(includeInstance: boolean, msg: MeasureReport): MeasureReport.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MeasureReport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MeasureReport;
  static deserializeBinaryFromReader(message: MeasureReport, reader: jspb.BinaryReader): MeasureReport;
}

export namespace MeasureReport {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    containedList: Array<google_protobuf_any_pb.Any.AsObject>,
    extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifierList: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    status?: MeasureReport.StatusCode.AsObject,
    type?: MeasureReport.TypeCode.AsObject,
    measure?: proto_r4_core_datatypes_pb.Canonical.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    reporter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    improvementNotation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    groupList: Array<MeasureReport.Group.AsObject>,
    evaluatedResourceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap[keyof proto_r4_core_codes_pb.MeasureReportTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Group extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearPopulationList(): void;
    getPopulationList(): Array<MeasureReport.Group.Population>;
    setPopulationList(value: Array<MeasureReport.Group.Population>): void;
    addPopulation(value?: MeasureReport.Group.Population, index?: number): MeasureReport.Group.Population;

    hasMeasureScore(): boolean;
    clearMeasureScore(): void;
    getMeasureScore(): proto_r4_core_datatypes_pb.Quantity | undefined;
    setMeasureScore(value?: proto_r4_core_datatypes_pb.Quantity): void;

    clearStratifierList(): void;
    getStratifierList(): Array<MeasureReport.Group.Stratifier>;
    setStratifierList(value: Array<MeasureReport.Group.Stratifier>): void;
    addStratifier(value?: MeasureReport.Group.Stratifier, index?: number): MeasureReport.Group.Stratifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      populationList: Array<MeasureReport.Group.Population.AsObject>,
      measureScore?: proto_r4_core_datatypes_pb.Quantity.AsObject,
      stratifierList: Array<MeasureReport.Group.Stratifier.AsObject>,
    }

    export class Population extends jspb.Message {
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

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Integer | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasSubjectResults(): boolean;
      clearSubjectResults(): void;
      getSubjectResults(): proto_r4_core_datatypes_pb.Reference | undefined;
      setSubjectResults(value?: proto_r4_core_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Population.AsObject;
      static toObject(includeInstance: boolean, msg: Population): Population.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Population, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Population;
      static deserializeBinaryFromReader(message: Population, reader: jspb.BinaryReader): Population;
    }

    export namespace Population {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        count?: proto_r4_core_datatypes_pb.Integer.AsObject,
        subjectResults?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }
    }

    export class Stratifier extends jspb.Message {
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

      clearCodeList(): void;
      getCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearStratumList(): void;
      getStratumList(): Array<MeasureReport.Group.Stratifier.StratifierGroup>;
      setStratumList(value: Array<MeasureReport.Group.Stratifier.StratifierGroup>): void;
      addStratum(value?: MeasureReport.Group.Stratifier.StratifierGroup, index?: number): MeasureReport.Group.Stratifier.StratifierGroup;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Stratifier.AsObject;
      static toObject(includeInstance: boolean, msg: Stratifier): Stratifier.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Stratifier, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Stratifier;
      static deserializeBinaryFromReader(message: Stratifier, reader: jspb.BinaryReader): Stratifier;
    }

    export namespace Stratifier {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        codeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        stratumList: Array<MeasureReport.Group.Stratifier.StratifierGroup.AsObject>,
      }

      export class StratifierGroup extends jspb.Message {
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

        hasValue(): boolean;
        clearValue(): void;
        getValue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setValue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        clearComponentList(): void;
        getComponentList(): Array<MeasureReport.Group.Stratifier.StratifierGroup.Component>;
        setComponentList(value: Array<MeasureReport.Group.Stratifier.StratifierGroup.Component>): void;
        addComponent(value?: MeasureReport.Group.Stratifier.StratifierGroup.Component, index?: number): MeasureReport.Group.Stratifier.StratifierGroup.Component;

        clearPopulationList(): void;
        getPopulationList(): Array<MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation>;
        setPopulationList(value: Array<MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation>): void;
        addPopulation(value?: MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation, index?: number): MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation;

        hasMeasureScore(): boolean;
        clearMeasureScore(): void;
        getMeasureScore(): proto_r4_core_datatypes_pb.Quantity | undefined;
        setMeasureScore(value?: proto_r4_core_datatypes_pb.Quantity): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StratifierGroup.AsObject;
        static toObject(includeInstance: boolean, msg: StratifierGroup): StratifierGroup.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StratifierGroup, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StratifierGroup;
        static deserializeBinaryFromReader(message: StratifierGroup, reader: jspb.BinaryReader): StratifierGroup;
      }

      export namespace StratifierGroup {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          value?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          componentList: Array<MeasureReport.Group.Stratifier.StratifierGroup.Component.AsObject>,
          populationList: Array<MeasureReport.Group.Stratifier.StratifierGroup.StratifierGroupPopulation.AsObject>,
          measureScore?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        }

        export class Component extends jspb.Message {
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

          hasCode(): boolean;
          clearCode(): void;
          getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          hasValue(): boolean;
          clearValue(): void;
          getValue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setValue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

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
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
            value?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          }
        }

        export class StratifierGroupPopulation extends jspb.Message {
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

          hasCode(): boolean;
          clearCode(): void;
          getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          hasCount(): boolean;
          clearCount(): void;
          getCount(): proto_r4_core_datatypes_pb.Integer | undefined;
          setCount(value?: proto_r4_core_datatypes_pb.Integer): void;

          hasSubjectResults(): boolean;
          clearSubjectResults(): void;
          getSubjectResults(): proto_r4_core_datatypes_pb.Reference | undefined;
          setSubjectResults(value?: proto_r4_core_datatypes_pb.Reference): void;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): StratifierGroupPopulation.AsObject;
          static toObject(includeInstance: boolean, msg: StratifierGroupPopulation): StratifierGroupPopulation.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: StratifierGroupPopulation, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): StratifierGroupPopulation;
          static deserializeBinaryFromReader(message: StratifierGroupPopulation, reader: jspb.BinaryReader): StratifierGroupPopulation;
        }

        export namespace StratifierGroupPopulation {
          export type AsObject = {
            id?: proto_r4_core_datatypes_pb.String.AsObject,
            extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
            code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
            count?: proto_r4_core_datatypes_pb.Integer.AsObject,
            subjectResults?: proto_r4_core_datatypes_pb.Reference.AsObject,
          }
        }
      }
    }
  }
}

