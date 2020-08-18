// package: google.fhir.r4.core
// file: proto/r4/core/resources/imaging_study.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class ImagingStudy extends jspb.Message {
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
  getStatus(): ImagingStudy.StatusCode | undefined;
  setStatus(value?: ImagingStudy.StatusCode): void;

  clearModality(): void;
  getModality(): Array<proto_r4_core_datatypes_pb.Coding>;
  setModality(value: Array<proto_r4_core_datatypes_pb.Coding>): void;
  addModality(value?: proto_r4_core_datatypes_pb.Coding, index?: number): proto_r4_core_datatypes_pb.Coding;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasStarted(): boolean;
  clearStarted(): void;
  getStarted(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setStarted(value?: proto_r4_core_datatypes_pb.DateTime): void;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasReferrer(): boolean;
  clearReferrer(): void;
  getReferrer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setReferrer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearInterpreter(): void;
  getInterpreter(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInterpreter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInterpreter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEndpoint(): void;
  getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasNumberOfSeries(): boolean;
  clearNumberOfSeries(): void;
  getNumberOfSeries(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setNumberOfSeries(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  hasNumberOfInstances(): boolean;
  clearNumberOfInstances(): void;
  getNumberOfInstances(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setNumberOfInstances(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  hasProcedureReference(): boolean;
  clearProcedureReference(): void;
  getProcedureReference(): proto_r4_core_datatypes_pb.Reference | undefined;
  setProcedureReference(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearProcedureCode(): void;
  getProcedureCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProcedureCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProcedureCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
  setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCode(): void;
  getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReference(): void;
  getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSeries(): void;
  getSeries(): Array<ImagingStudy.Series>;
  setSeries(value: Array<ImagingStudy.Series>): void;
  addSeries(value?: ImagingStudy.Series, index?: number): ImagingStudy.Series;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImagingStudy.AsObject;
  static toObject(includeInstance: boolean, msg: ImagingStudy): ImagingStudy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ImagingStudy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImagingStudy;
  static deserializeBinaryFromReader(message: ImagingStudy, reader: jspb.BinaryReader): ImagingStudy;
}

export namespace ImagingStudy {
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
    status?: ImagingStudy.StatusCode.AsObject,
    modality: Array<proto_r4_core_datatypes_pb.Coding.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    started?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    referrer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    interpreter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    numberOfSeries?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    numberOfInstances?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    procedureReference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    procedureCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    location?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    series: Array<ImagingStudy.Series.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap[keyof proto_r4_core_codes_pb.ImagingStudyStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Series extends jspb.Message {
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

    hasUid(): boolean;
    clearUid(): void;
    getUid(): proto_r4_core_datatypes_pb.Id | undefined;
    setUid(value?: proto_r4_core_datatypes_pb.Id): void;

    hasNumber(): boolean;
    clearNumber(): void;
    getNumber(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasModality(): boolean;
    clearModality(): void;
    getModality(): proto_r4_core_datatypes_pb.Coding | undefined;
    setModality(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasDescription(): boolean;
    clearDescription(): void;
    getDescription(): proto_r4_core_datatypes_pb.String | undefined;
    setDescription(value?: proto_r4_core_datatypes_pb.String): void;

    hasNumberOfInstances(): boolean;
    clearNumberOfInstances(): void;
    getNumberOfInstances(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumberOfInstances(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    clearEndpoint(): void;
    getEndpoint(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEndpoint(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEndpoint(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasBodySite(): boolean;
    clearBodySite(): void;
    getBodySite(): proto_r4_core_datatypes_pb.Coding | undefined;
    setBodySite(value?: proto_r4_core_datatypes_pb.Coding): void;

    hasLaterality(): boolean;
    clearLaterality(): void;
    getLaterality(): proto_r4_core_datatypes_pb.Coding | undefined;
    setLaterality(value?: proto_r4_core_datatypes_pb.Coding): void;

    clearSpecimen(): void;
    getSpecimen(): Array<proto_r4_core_datatypes_pb.Reference>;
    setSpecimen(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addSpecimen(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    hasStarted(): boolean;
    clearStarted(): void;
    getStarted(): proto_r4_core_datatypes_pb.DateTime | undefined;
    setStarted(value?: proto_r4_core_datatypes_pb.DateTime): void;

    clearPerformer(): void;
    getPerformer(): Array<ImagingStudy.Series.Performer>;
    setPerformer(value: Array<ImagingStudy.Series.Performer>): void;
    addPerformer(value?: ImagingStudy.Series.Performer, index?: number): ImagingStudy.Series.Performer;

    clearInstance(): void;
    getInstance(): Array<ImagingStudy.Series.Instance>;
    setInstance(value: Array<ImagingStudy.Series.Instance>): void;
    addInstance(value?: ImagingStudy.Series.Instance, index?: number): ImagingStudy.Series.Instance;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Series.AsObject;
    static toObject(includeInstance: boolean, msg: Series): Series.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Series, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Series;
    static deserializeBinaryFromReader(message: Series, reader: jspb.BinaryReader): Series;
  }

  export namespace Series {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      uid?: proto_r4_core_datatypes_pb.Id.AsObject,
      number?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      modality?: proto_r4_core_datatypes_pb.Coding.AsObject,
      description?: proto_r4_core_datatypes_pb.String.AsObject,
      numberOfInstances?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      endpoint: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      bodySite?: proto_r4_core_datatypes_pb.Coding.AsObject,
      laterality?: proto_r4_core_datatypes_pb.Coding.AsObject,
      specimen: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      started?: proto_r4_core_datatypes_pb.DateTime.AsObject,
      performer: Array<ImagingStudy.Series.Performer.AsObject>,
      instance: Array<ImagingStudy.Series.Instance.AsObject>,
    }

    export class Performer extends jspb.Message {
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

      hasFunction(): boolean;
      clearFunction(): void;
      getFunction(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setFunction(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasActor(): boolean;
      clearActor(): void;
      getActor(): proto_r4_core_datatypes_pb.Reference | undefined;
      setActor(value?: proto_r4_core_datatypes_pb.Reference): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Performer.AsObject;
      static toObject(includeInstance: boolean, msg: Performer): Performer.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Performer, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Performer;
      static deserializeBinaryFromReader(message: Performer, reader: jspb.BinaryReader): Performer;
    }

    export namespace Performer {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        pb_function?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        actor?: proto_r4_core_datatypes_pb.Reference.AsObject,
      }
    }

    export class Instance extends jspb.Message {
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

      hasUid(): boolean;
      clearUid(): void;
      getUid(): proto_r4_core_datatypes_pb.Id | undefined;
      setUid(value?: proto_r4_core_datatypes_pb.Id): void;

      hasSopClass(): boolean;
      clearSopClass(): void;
      getSopClass(): proto_r4_core_datatypes_pb.Coding | undefined;
      setSopClass(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasNumber(): boolean;
      clearNumber(): void;
      getNumber(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setNumber(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasTitle(): boolean;
      clearTitle(): void;
      getTitle(): proto_r4_core_datatypes_pb.String | undefined;
      setTitle(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Instance.AsObject;
      static toObject(includeInstance: boolean, msg: Instance): Instance.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Instance, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Instance;
      static deserializeBinaryFromReader(message: Instance, reader: jspb.BinaryReader): Instance;
    }

    export namespace Instance {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        uid?: proto_r4_core_datatypes_pb.Id.AsObject,
        sopClass?: proto_r4_core_datatypes_pb.Coding.AsObject,
        number?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        title?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }
}

