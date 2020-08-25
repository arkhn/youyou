// package: google.fhir.r4.core
// file: proto/r4/core/resources/document_reference.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class DocumentReference extends jspb.Message {
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

  hasMasterIdentifier(): boolean;
  clearMasterIdentifier(): void;
  getMasterIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setMasterIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  clearIdentifier(): void;
  getIdentifier(): Array<proto_r4_core_datatypes_pb.Identifier>;
  setIdentifier(value: Array<proto_r4_core_datatypes_pb.Identifier>): void;
  addIdentifier(value?: proto_r4_core_datatypes_pb.Identifier, index?: number): proto_r4_core_datatypes_pb.Identifier;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): DocumentReference.StatusCode | undefined;
  setStatus(value?: DocumentReference.StatusCode): void;

  hasDocStatus(): boolean;
  clearDocStatus(): void;
  getDocStatus(): DocumentReference.DocStatusCode | undefined;
  setDocStatus(value?: DocumentReference.DocStatusCode): void;

  hasType(): boolean;
  clearType(): void;
  getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDate(): boolean;
  clearDate(): void;
  getDate(): proto_r4_core_datatypes_pb.Instant | undefined;
  setDate(value?: proto_r4_core_datatypes_pb.Instant): void;

  clearAuthor(): void;
  getAuthor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAuthor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAuthor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAuthenticator(): boolean;
  clearAuthenticator(): void;
  getAuthenticator(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthenticator(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasCustodian(): boolean;
  clearCustodian(): void;
  getCustodian(): proto_r4_core_datatypes_pb.Reference | undefined;
  setCustodian(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearRelatesTo(): void;
  getRelatesTo(): Array<DocumentReference.RelatesTo>;
  setRelatesTo(value: Array<DocumentReference.RelatesTo>): void;
  addRelatesTo(value?: DocumentReference.RelatesTo, index?: number): DocumentReference.RelatesTo;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  clearSecurityLabel(): void;
  getSecurityLabel(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setSecurityLabel(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addSecurityLabel(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearContent(): void;
  getContent(): Array<DocumentReference.Content>;
  setContent(value: Array<DocumentReference.Content>): void;
  addContent(value?: DocumentReference.Content, index?: number): DocumentReference.Content;

  hasContext(): boolean;
  clearContext(): void;
  getContext(): DocumentReference.Context | undefined;
  setContext(value?: DocumentReference.Context): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentReference.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentReference): DocumentReference.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentReference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentReference;
  static deserializeBinaryFromReader(message: DocumentReference, reader: jspb.BinaryReader): DocumentReference;
}

export namespace DocumentReference {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    masterIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    identifier: Array<proto_r4_core_datatypes_pb.Identifier.AsObject>,
    status?: DocumentReference.StatusCode.AsObject,
    docStatus?: DocumentReference.DocStatusCode.AsObject,
    type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    date?: proto_r4_core_datatypes_pb.Instant.AsObject,
    author: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authenticator?: proto_r4_core_datatypes_pb.Reference.AsObject,
    custodian?: proto_r4_core_datatypes_pb.Reference.AsObject,
    relatesTo: Array<DocumentReference.RelatesTo.AsObject>,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    securityLabel: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    content: Array<DocumentReference.Content.AsObject>,
    context?: DocumentReference.Context.AsObject,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentReferenceStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class DocStatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DocStatusCode.AsObject;
    static toObject(includeInstance: boolean, msg: DocStatusCode): DocStatusCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DocStatusCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DocStatusCode;
    static deserializeBinaryFromReader(message: DocStatusCode, reader: jspb.BinaryReader): DocStatusCode;
  }

  export namespace DocStatusCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.CompositionStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CompositionStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class RelatesTo extends jspb.Message {
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

    hasCode(): boolean;
    clearCode(): void;
    getCode(): DocumentReference.RelatesTo.CodeType | undefined;
    setCode(value?: DocumentReference.RelatesTo.CodeType): void;

    hasTarget(): boolean;
    clearTarget(): void;
    getTarget(): proto_r4_core_datatypes_pb.Reference | undefined;
    setTarget(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatesTo.AsObject;
    static toObject(includeInstance: boolean, msg: RelatesTo): RelatesTo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatesTo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatesTo;
    static deserializeBinaryFromReader(message: RelatesTo, reader: jspb.BinaryReader): RelatesTo;
  }

  export namespace RelatesTo {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      code?: DocumentReference.RelatesTo.CodeType.AsObject,
      target?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class CodeType extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CodeType.AsObject;
      static toObject(includeInstance: boolean, msg: CodeType): CodeType.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: CodeType, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CodeType;
      static deserializeBinaryFromReader(message: CodeType, reader: jspb.BinaryReader): CodeType;
    }

    export namespace CodeType {
      export type AsObject = {
        value: proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap[keyof proto_r4_core_codes_pb.DocumentRelationshipTypeCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }
  }

  export class Content extends jspb.Message {
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

    hasAttachment(): boolean;
    clearAttachment(): void;
    getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
    setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

    hasFormat(): boolean;
    clearFormat(): void;
    getFormat(): proto_r4_core_datatypes_pb.Coding | undefined;
    setFormat(value?: proto_r4_core_datatypes_pb.Coding): void;

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
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
      format?: proto_r4_core_datatypes_pb.Coding.AsObject,
    }
  }

  export class Context extends jspb.Message {
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

    clearEncounter(): void;
    getEncounter(): Array<proto_r4_core_datatypes_pb.Reference>;
    setEncounter(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addEncounter(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearEvent(): void;
    getEvent(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setEvent(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addEvent(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasPeriod(): boolean;
    clearPeriod(): void;
    getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasFacilityType(): boolean;
    clearFacilityType(): void;
    getFacilityType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setFacilityType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPracticeSetting(): boolean;
    clearPracticeSetting(): void;
    getPracticeSetting(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setPracticeSetting(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasSourcePatientInfo(): boolean;
    clearSourcePatientInfo(): void;
    getSourcePatientInfo(): proto_r4_core_datatypes_pb.Reference | undefined;
    setSourcePatientInfo(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearRelated(): void;
    getRelated(): Array<proto_r4_core_datatypes_pb.Reference>;
    setRelated(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addRelated(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Context.AsObject;
    static toObject(includeInstance: boolean, msg: Context): Context.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Context, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Context;
    static deserializeBinaryFromReader(message: Context, reader: jspb.BinaryReader): Context;
  }

  export namespace Context {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      encounter: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      event: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      period?: proto_r4_core_datatypes_pb.Period.AsObject,
      facilityType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      practiceSetting?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      sourcePatientInfo?: proto_r4_core_datatypes_pb.Reference.AsObject,
      related: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }
}

