// package: google.fhir.r4.core
// file: proto/r4/core/resources/medication_request.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicationRequest extends jspb.Message {
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
  getStatus(): MedicationRequest.StatusCode | undefined;
  setStatus(value?: MedicationRequest.StatusCode): void;

  hasStatusReason(): boolean;
  clearStatusReason(): void;
  getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): MedicationRequest.IntentCode | undefined;
  setIntent(value?: MedicationRequest.IntentCode): void;

  clearCategoryList(): void;
  getCategoryList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategoryList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasPriority(): boolean;
  clearPriority(): void;
  getPriority(): MedicationRequest.PriorityCode | undefined;
  setPriority(value?: MedicationRequest.PriorityCode): void;

  hasDoNotPerform(): boolean;
  clearDoNotPerform(): void;
  getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
  setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

  hasReported(): boolean;
  clearReported(): void;
  getReported(): MedicationRequest.ReportedX | undefined;
  setReported(value?: MedicationRequest.ReportedX): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): MedicationRequest.MedicationX | undefined;
  setMedication(value?: MedicationRequest.MedicationX): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearSupportingInformationList(): void;
  getSupportingInformationList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInformationList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInformation(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasAuthoredOn(): boolean;
  clearAuthoredOn(): void;
  getAuthoredOn(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setAuthoredOn(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasRequester(): boolean;
  clearRequester(): void;
  getRequester(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRequester(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformer(): boolean;
  clearPerformer(): void;
  getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPerformerType(): boolean;
  clearPerformerType(): void;
  getPerformerType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setPerformerType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasRecorder(): boolean;
  clearRecorder(): void;
  getRecorder(): proto_r4_core_datatypes_pb.Reference | undefined;
  setRecorder(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearReasonCodeList(): void;
  getReasonCodeList(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setReasonCodeList(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearReasonReferenceList(): void;
  getReasonReferenceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReasonReferenceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearInstantiatesCanonicalList(): void;
  getInstantiatesCanonicalList(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonicalList(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUriList(): void;
  getInstantiatesUriList(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUriList(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOnList(): void;
  getBasedOnList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOnList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasGroupIdentifier(): boolean;
  clearGroupIdentifier(): void;
  getGroupIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setGroupIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasCourseOfTherapyType(): boolean;
  clearCourseOfTherapyType(): void;
  getCourseOfTherapyType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCourseOfTherapyType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearInsuranceList(): void;
  getInsuranceList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setInsuranceList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addInsurance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearNoteList(): void;
  getNoteList(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNoteList(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  clearDosageInstructionList(): void;
  getDosageInstructionList(): Array<proto_r4_core_datatypes_pb.Dosage>;
  setDosageInstructionList(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
  addDosageInstruction(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

  hasDispenseRequest(): boolean;
  clearDispenseRequest(): void;
  getDispenseRequest(): MedicationRequest.DispenseRequest | undefined;
  setDispenseRequest(value?: MedicationRequest.DispenseRequest): void;

  hasSubstitution(): boolean;
  clearSubstitution(): void;
  getSubstitution(): MedicationRequest.Substitution | undefined;
  setSubstitution(value?: MedicationRequest.Substitution): void;

  hasPriorPrescription(): boolean;
  clearPriorPrescription(): void;
  getPriorPrescription(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPriorPrescription(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearDetectedIssueList(): void;
  getDetectedIssueList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setDetectedIssueList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addDetectedIssue(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearEventHistoryList(): void;
  getEventHistoryList(): Array<proto_r4_core_datatypes_pb.Reference>;
  setEventHistoryList(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addEventHistory(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationRequest): MedicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationRequest;
  static deserializeBinaryFromReader(message: MedicationRequest, reader: jspb.BinaryReader): MedicationRequest;
}

export namespace MedicationRequest {
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
    status?: MedicationRequest.StatusCode.AsObject,
    statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    intent?: MedicationRequest.IntentCode.AsObject,
    categoryList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    priority?: MedicationRequest.PriorityCode.AsObject,
    doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
    reported?: MedicationRequest.ReportedX.AsObject,
    medication?: MedicationRequest.MedicationX.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    supportingInformationList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    authoredOn?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    requester?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    performerType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    recorder?: proto_r4_core_datatypes_pb.Reference.AsObject,
    reasonCodeList: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    reasonReferenceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    instantiatesCanonicalList: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUriList: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOnList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    groupIdentifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    courseOfTherapyType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    insuranceList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    noteList: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
    dosageInstructionList: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
    dispenseRequest?: MedicationRequest.DispenseRequest.AsObject,
    substitution?: MedicationRequest.Substitution.AsObject,
    priorPrescription?: proto_r4_core_datatypes_pb.Reference.AsObject,
    detectedIssueList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    eventHistoryList: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationrequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IntentCode.AsObject;
    static toObject(includeInstance: boolean, msg: IntentCode): IntentCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: IntentCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IntentCode;
    static deserializeBinaryFromReader(message: IntentCode, reader: jspb.BinaryReader): IntentCode;
  }

  export namespace IntentCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationRequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class PriorityCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PriorityCode.AsObject;
    static toObject(includeInstance: boolean, msg: PriorityCode): PriorityCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PriorityCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PriorityCode;
    static deserializeBinaryFromReader(message: PriorityCode, reader: jspb.BinaryReader): PriorityCode;
  }

  export namespace PriorityCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.RequestPriorityCode.ValueMap[keyof proto_r4_core_codes_pb.RequestPriorityCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class ReportedX extends jspb.Message {
    hasBoolean(): boolean;
    clearBoolean(): void;
    getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): ReportedX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReportedX.AsObject;
    static toObject(includeInstance: boolean, msg: ReportedX): ReportedX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReportedX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReportedX;
    static deserializeBinaryFromReader(message: ReportedX, reader: jspb.BinaryReader): ReportedX;
  }

  export namespace ReportedX {
    export type AsObject = {
      pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      BOOLEAN = 1,
      REFERENCE = 2,
    }
  }

  export class MedicationX extends jspb.Message {
    hasCodeableConcept(): boolean;
    clearCodeableConcept(): void;
    getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    getChoiceCase(): MedicationX.ChoiceCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicationX.AsObject;
    static toObject(includeInstance: boolean, msg: MedicationX): MedicationX.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicationX, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicationX;
    static deserializeBinaryFromReader(message: MedicationX, reader: jspb.BinaryReader): MedicationX;
  }

  export namespace MedicationX {
    export type AsObject = {
      codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export enum ChoiceCase {
      CHOICE_NOT_SET = 0,
      CODEABLE_CONCEPT = 1,
      REFERENCE = 2,
    }
  }

  export class DispenseRequest extends jspb.Message {
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

    hasInitialFill(): boolean;
    clearInitialFill(): void;
    getInitialFill(): MedicationRequest.DispenseRequest.InitialFill | undefined;
    setInitialFill(value?: MedicationRequest.DispenseRequest.InitialFill): void;

    hasDispenseInterval(): boolean;
    clearDispenseInterval(): void;
    getDispenseInterval(): proto_r4_core_datatypes_pb.Duration | undefined;
    setDispenseInterval(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasValidityPeriod(): boolean;
    clearValidityPeriod(): void;
    getValidityPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
    setValidityPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

    hasNumberOfRepeatsAllowed(): boolean;
    clearNumberOfRepeatsAllowed(): void;
    getNumberOfRepeatsAllowed(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
    setNumberOfRepeatsAllowed(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasExpectedSupplyDuration(): boolean;
    clearExpectedSupplyDuration(): void;
    getExpectedSupplyDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
    setExpectedSupplyDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

    hasPerformer(): boolean;
    clearPerformer(): void;
    getPerformer(): proto_r4_core_datatypes_pb.Reference | undefined;
    setPerformer(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DispenseRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DispenseRequest): DispenseRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DispenseRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DispenseRequest;
    static deserializeBinaryFromReader(message: DispenseRequest, reader: jspb.BinaryReader): DispenseRequest;
  }

  export namespace DispenseRequest {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      initialFill?: MedicationRequest.DispenseRequest.InitialFill.AsObject,
      dispenseInterval?: proto_r4_core_datatypes_pb.Duration.AsObject,
      validityPeriod?: proto_r4_core_datatypes_pb.Period.AsObject,
      numberOfRepeatsAllowed?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      expectedSupplyDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      performer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }

    export class InitialFill extends jspb.Message {
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

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): InitialFill.AsObject;
      static toObject(includeInstance: boolean, msg: InitialFill): InitialFill.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: InitialFill, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): InitialFill;
      static deserializeBinaryFromReader(message: InitialFill, reader: jspb.BinaryReader): InitialFill;
    }

    export namespace InitialFill {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }
    }
  }

  export class Substitution extends jspb.Message {
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

    hasAllowed(): boolean;
    clearAllowed(): void;
    getAllowed(): MedicationRequest.Substitution.AllowedX | undefined;
    setAllowed(value?: MedicationRequest.Substitution.AllowedX): void;

    hasReason(): boolean;
    clearReason(): void;
    getReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Substitution.AsObject;
    static toObject(includeInstance: boolean, msg: Substitution): Substitution.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Substitution, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Substitution;
    static deserializeBinaryFromReader(message: Substitution, reader: jspb.BinaryReader): Substitution;
  }

  export namespace Substitution {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      allowed?: MedicationRequest.Substitution.AllowedX.AsObject,
      reason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    }

    export class AllowedX extends jspb.Message {
      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      getChoiceCase(): AllowedX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AllowedX.AsObject;
      static toObject(includeInstance: boolean, msg: AllowedX): AllowedX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AllowedX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AllowedX;
      static deserializeBinaryFromReader(message: AllowedX, reader: jspb.BinaryReader): AllowedX;
    }

    export namespace AllowedX {
      export type AsObject = {
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BOOLEAN = 1,
        CODEABLE_CONCEPT = 2,
      }
    }
  }
}

