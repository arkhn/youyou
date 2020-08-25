// package: google.fhir.r4.core
// file: proto/r4/core/resources/care_plan.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_valuesets_pb from "../../../../proto/r4/core/valuesets_pb";

export class CarePlan extends jspb.Message {
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

  clearInstantiatesCanonical(): void;
  getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
  setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
  addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

  clearInstantiatesUri(): void;
  getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  clearBasedOn(): void;
  getBasedOn(): Array<proto_r4_core_datatypes_pb.Reference>;
  setBasedOn(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addBasedOn(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearReplaces(): void;
  getReplaces(): Array<proto_r4_core_datatypes_pb.Reference>;
  setReplaces(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addReplaces(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearPartOf(): void;
  getPartOf(): Array<proto_r4_core_datatypes_pb.Reference>;
  setPartOf(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addPartOf(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CarePlan.StatusCode | undefined;
  setStatus(value?: CarePlan.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): CarePlan.IntentCode | undefined;
  setIntent(value?: CarePlan.IntentCode): void;

  clearCategory(): void;
  getCategory(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCategory(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCategory(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): proto_r4_core_datatypes_pb.String | undefined;
  setTitle(value?: proto_r4_core_datatypes_pb.String): void;

  hasDescription(): boolean;
  clearDescription(): void;
  getDescription(): proto_r4_core_datatypes_pb.String | undefined;
  setDescription(value?: proto_r4_core_datatypes_pb.String): void;

  hasSubject(): boolean;
  clearSubject(): void;
  getSubject(): proto_r4_core_datatypes_pb.Reference | undefined;
  setSubject(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
  setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

  hasCreated(): boolean;
  clearCreated(): void;
  getCreated(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setCreated(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasAuthor(): boolean;
  clearAuthor(): void;
  getAuthor(): proto_r4_core_datatypes_pb.Reference | undefined;
  setAuthor(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearContributor(): void;
  getContributor(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContributor(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContributor(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearCareTeam(): void;
  getCareTeam(): Array<proto_r4_core_datatypes_pb.Reference>;
  setCareTeam(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addCareTeam(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearAddresses(): void;
  getAddresses(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAddresses(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAddresses(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearSupportingInfo(): void;
  getSupportingInfo(): Array<proto_r4_core_datatypes_pb.Reference>;
  setSupportingInfo(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addSupportingInfo(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearGoal(): void;
  getGoal(): Array<proto_r4_core_datatypes_pb.Reference>;
  setGoal(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearActivity(): void;
  getActivity(): Array<CarePlan.Activity>;
  setActivity(value: Array<CarePlan.Activity>): void;
  addActivity(value?: CarePlan.Activity, index?: number): CarePlan.Activity;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarePlan.AsObject;
  static toObject(includeInstance: boolean, msg: CarePlan): CarePlan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CarePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarePlan;
  static deserializeBinaryFromReader(message: CarePlan, reader: jspb.BinaryReader): CarePlan;
}

export namespace CarePlan {
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
    instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
    instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    basedOn: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    replaces: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    partOf: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    status?: CarePlan.StatusCode.AsObject,
    intent?: CarePlan.IntentCode.AsObject,
    category: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    title?: proto_r4_core_datatypes_pb.String.AsObject,
    description?: proto_r4_core_datatypes_pb.String.AsObject,
    subject?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    period?: proto_r4_core_datatypes_pb.Period.AsObject,
    created?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    author?: proto_r4_core_datatypes_pb.Reference.AsObject,
    contributor: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    careTeam: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    addresses: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    supportingInfo: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    goal: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    activity: Array<CarePlan.Activity.AsObject>,
    note: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestStatusCode.ValueMap[keyof proto_r4_core_codes_pb.RequestStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class IntentCode extends jspb.Message {
    getValue(): proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap];
    setValue(value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
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
      value: proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanIntentValueSet.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Activity extends jspb.Message {
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

    clearOutcomeCodeableConcept(): void;
    getOutcomeCodeableConcept(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setOutcomeCodeableConcept(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addOutcomeCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearOutcomeReference(): void;
    getOutcomeReference(): Array<proto_r4_core_datatypes_pb.Reference>;
    setOutcomeReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addOutcomeReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    clearProgress(): void;
    getProgress(): Array<proto_r4_core_datatypes_pb.Annotation>;
    setProgress(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
    addProgress(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

    hasReference(): boolean;
    clearReference(): void;
    getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
    setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): CarePlan.Activity.Detail | undefined;
    setDetail(value?: CarePlan.Activity.Detail): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Activity.AsObject;
    static toObject(includeInstance: boolean, msg: Activity): Activity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Activity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Activity;
    static deserializeBinaryFromReader(message: Activity, reader: jspb.BinaryReader): Activity;
  }

  export namespace Activity {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      outcomeCodeableConcept: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      outcomeReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
      progress: Array<proto_r4_core_datatypes_pb.Annotation.AsObject>,
      reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
      detail?: CarePlan.Activity.Detail.AsObject,
    }

    export class Detail extends jspb.Message {
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

      hasKind(): boolean;
      clearKind(): void;
      getKind(): CarePlan.Activity.Detail.KindCode | undefined;
      setKind(value?: CarePlan.Activity.Detail.KindCode): void;

      clearInstantiatesCanonical(): void;
      getInstantiatesCanonical(): Array<proto_r4_core_datatypes_pb.Canonical>;
      setInstantiatesCanonical(value: Array<proto_r4_core_datatypes_pb.Canonical>): void;
      addInstantiatesCanonical(value?: proto_r4_core_datatypes_pb.Canonical, index?: number): proto_r4_core_datatypes_pb.Canonical;

      clearInstantiatesUri(): void;
      getInstantiatesUri(): Array<proto_r4_core_datatypes_pb.Uri>;
      setInstantiatesUri(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
      addInstantiatesUri(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      clearReasonCode(): void;
      getReasonCode(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
      setReasonCode(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
      addReasonCode(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

      clearReasonReference(): void;
      getReasonReference(): Array<proto_r4_core_datatypes_pb.Reference>;
      setReasonReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addReasonReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      clearGoal(): void;
      getGoal(): Array<proto_r4_core_datatypes_pb.Reference>;
      setGoal(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addGoal(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): CarePlan.Activity.Detail.StatusCode | undefined;
      setStatus(value?: CarePlan.Activity.Detail.StatusCode): void;

      hasStatusReason(): boolean;
      clearStatusReason(): void;
      getStatusReason(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setStatusReason(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDoNotPerform(): boolean;
      clearDoNotPerform(): void;
      getDoNotPerform(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setDoNotPerform(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasScheduled(): boolean;
      clearScheduled(): void;
      getScheduled(): CarePlan.Activity.Detail.ScheduledX | undefined;
      setScheduled(value?: CarePlan.Activity.Detail.ScheduledX): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): proto_r4_core_datatypes_pb.Reference | undefined;
      setLocation(value?: proto_r4_core_datatypes_pb.Reference): void;

      clearPerformer(): void;
      getPerformer(): Array<proto_r4_core_datatypes_pb.Reference>;
      setPerformer(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
      addPerformer(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

      hasProduct(): boolean;
      clearProduct(): void;
      getProduct(): CarePlan.Activity.Detail.ProductX | undefined;
      setProduct(value?: CarePlan.Activity.Detail.ProductX): void;

      hasDailyAmount(): boolean;
      clearDailyAmount(): void;
      getDailyAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setDailyAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Detail.AsObject;
      static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Detail;
      static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
    }

    export namespace Detail {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        kind?: CarePlan.Activity.Detail.KindCode.AsObject,
        instantiatesCanonical: Array<proto_r4_core_datatypes_pb.Canonical.AsObject>,
        instantiatesUri: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
        code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        reasonCode: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
        reasonReference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        goal: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        status?: CarePlan.Activity.Detail.StatusCode.AsObject,
        statusReason?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        doNotPerform?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        scheduled?: CarePlan.Activity.Detail.ScheduledX.AsObject,
        location?: proto_r4_core_datatypes_pb.Reference.AsObject,
        performer: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
        product?: CarePlan.Activity.Detail.ProductX.AsObject,
        dailyAmount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class KindCode extends jspb.Message {
        getValue(): proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap];
        setValue(value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtension(): void;
        getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): KindCode.AsObject;
        static toObject(includeInstance: boolean, msg: KindCode): KindCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: KindCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): KindCode;
        static deserializeBinaryFromReader(message: KindCode, reader: jspb.BinaryReader): KindCode;
      }

      export namespace KindCode {
        export type AsObject = {
          value: proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap[keyof proto_r4_core_valuesets_pb.CarePlanActivityKindValueSet.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class StatusCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap]): void;

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
          value: proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap[keyof proto_r4_core_codes_pb.CarePlanActivityStatusCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }

      export class ScheduledX extends jspb.Message {
        hasTiming(): boolean;
        clearTiming(): void;
        getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
        setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

        hasPeriod(): boolean;
        clearPeriod(): void;
        getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
        setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        getChoiceCase(): ScheduledX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ScheduledX.AsObject;
        static toObject(includeInstance: boolean, msg: ScheduledX): ScheduledX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ScheduledX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ScheduledX;
        static deserializeBinaryFromReader(message: ScheduledX, reader: jspb.BinaryReader): ScheduledX;
      }

      export namespace ScheduledX {
        export type AsObject = {
          timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
          period?: proto_r4_core_datatypes_pb.Period.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          TIMING = 1,
          PERIOD = 2,
          STRING_VALUE = 3,
        }
      }

      export class ProductX extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasReference(): boolean;
        clearReference(): void;
        getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
        setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

        getChoiceCase(): ProductX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ProductX.AsObject;
        static toObject(includeInstance: boolean, msg: ProductX): ProductX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ProductX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ProductX;
        static deserializeBinaryFromReader(message: ProductX, reader: jspb.BinaryReader): ProductX;
      }

      export namespace ProductX {
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
    }
  }
}

