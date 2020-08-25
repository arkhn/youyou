// package: google.fhir.r4.core
// file: proto/r4/core/resources/nutrition_order.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class NutritionOrder extends jspb.Message {
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

  clearInstantiates(): void;
  getInstantiates(): Array<proto_r4_core_datatypes_pb.Uri>;
  setInstantiates(value: Array<proto_r4_core_datatypes_pb.Uri>): void;
  addInstantiates(value?: proto_r4_core_datatypes_pb.Uri, index?: number): proto_r4_core_datatypes_pb.Uri;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): NutritionOrder.StatusCode | undefined;
  setStatus(value?: NutritionOrder.StatusCode): void;

  hasIntent(): boolean;
  clearIntent(): void;
  getIntent(): NutritionOrder.IntentCode | undefined;
  setIntent(value?: NutritionOrder.IntentCode): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_datatypes_pb.Reference | undefined;
  setPatient(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_datatypes_pb.Reference | undefined;
  setEncounter(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDateTime(): boolean;
  clearDateTime(): void;
  getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
  setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

  hasOrderer(): boolean;
  clearOrderer(): void;
  getOrderer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setOrderer(value?: proto_r4_core_datatypes_pb.Reference): void;

  clearAllergyIntolerance(): void;
  getAllergyIntolerance(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAllergyIntolerance(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAllergyIntolerance(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearFoodPreferenceModifier(): void;
  getFoodPreferenceModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setFoodPreferenceModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addFoodPreferenceModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearExcludeFoodModifier(): void;
  getExcludeFoodModifier(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setExcludeFoodModifier(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addExcludeFoodModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasOralDiet(): boolean;
  clearOralDiet(): void;
  getOralDiet(): NutritionOrder.OralDiet | undefined;
  setOralDiet(value?: NutritionOrder.OralDiet): void;

  clearSupplement(): void;
  getSupplement(): Array<NutritionOrder.Supplement>;
  setSupplement(value: Array<NutritionOrder.Supplement>): void;
  addSupplement(value?: NutritionOrder.Supplement, index?: number): NutritionOrder.Supplement;

  hasEnteralFormula(): boolean;
  clearEnteralFormula(): void;
  getEnteralFormula(): NutritionOrder.EnteralFormula | undefined;
  setEnteralFormula(value?: NutritionOrder.EnteralFormula): void;

  clearNote(): void;
  getNote(): Array<proto_r4_core_datatypes_pb.Annotation>;
  setNote(value: Array<proto_r4_core_datatypes_pb.Annotation>): void;
  addNote(value?: proto_r4_core_datatypes_pb.Annotation, index?: number): proto_r4_core_datatypes_pb.Annotation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NutritionOrder.AsObject;
  static toObject(includeInstance: boolean, msg: NutritionOrder): NutritionOrder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NutritionOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NutritionOrder;
  static deserializeBinaryFromReader(message: NutritionOrder, reader: jspb.BinaryReader): NutritionOrder;
}

export namespace NutritionOrder {
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
    instantiates: Array<proto_r4_core_datatypes_pb.Uri.AsObject>,
    status?: NutritionOrder.StatusCode.AsObject,
    intent?: NutritionOrder.IntentCode.AsObject,
    patient?: proto_r4_core_datatypes_pb.Reference.AsObject,
    encounter?: proto_r4_core_datatypes_pb.Reference.AsObject,
    dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
    orderer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    allergyIntolerance: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    foodPreferenceModifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    excludeFoodModifier: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    oralDiet?: NutritionOrder.OralDiet.AsObject,
    supplement: Array<NutritionOrder.Supplement.AsObject>,
    enteralFormula?: NutritionOrder.EnteralFormula.AsObject,
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
    getValue(): proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.RequestIntentCode.ValueMap[keyof proto_r4_core_codes_pb.RequestIntentCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class OralDiet extends jspb.Message {
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

    clearType(): void;
    getType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearSchedule(): void;
    getSchedule(): Array<proto_r4_core_datatypes_pb.Timing>;
    setSchedule(value: Array<proto_r4_core_datatypes_pb.Timing>): void;
    addSchedule(value?: proto_r4_core_datatypes_pb.Timing, index?: number): proto_r4_core_datatypes_pb.Timing;

    clearNutrient(): void;
    getNutrient(): Array<NutritionOrder.OralDiet.Nutrient>;
    setNutrient(value: Array<NutritionOrder.OralDiet.Nutrient>): void;
    addNutrient(value?: NutritionOrder.OralDiet.Nutrient, index?: number): NutritionOrder.OralDiet.Nutrient;

    clearTexture(): void;
    getTexture(): Array<NutritionOrder.OralDiet.Texture>;
    setTexture(value: Array<NutritionOrder.OralDiet.Texture>): void;
    addTexture(value?: NutritionOrder.OralDiet.Texture, index?: number): NutritionOrder.OralDiet.Texture;

    clearFluidConsistencyType(): void;
    getFluidConsistencyType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setFluidConsistencyType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addFluidConsistencyType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    hasInstruction(): boolean;
    clearInstruction(): void;
    getInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OralDiet.AsObject;
    static toObject(includeInstance: boolean, msg: OralDiet): OralDiet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OralDiet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OralDiet;
    static deserializeBinaryFromReader(message: OralDiet, reader: jspb.BinaryReader): OralDiet;
  }

  export namespace OralDiet {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      schedule: Array<proto_r4_core_datatypes_pb.Timing.AsObject>,
      nutrient: Array<NutritionOrder.OralDiet.Nutrient.AsObject>,
      texture: Array<NutritionOrder.OralDiet.Texture.AsObject>,
      fluidConsistencyType: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      instruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class Nutrient extends jspb.Message {
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

      hasModifier(): boolean;
      clearModifier(): void;
      getModifier(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Nutrient.AsObject;
      static toObject(includeInstance: boolean, msg: Nutrient): Nutrient.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Nutrient, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Nutrient;
      static deserializeBinaryFromReader(message: Nutrient, reader: jspb.BinaryReader): Nutrient;
    }

    export namespace Nutrient {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifier?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        amount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      }
    }

    export class Texture extends jspb.Message {
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

      hasModifier(): boolean;
      clearModifier(): void;
      getModifier(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setModifier(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasFoodType(): boolean;
      clearFoodType(): void;
      getFoodType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setFoodType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Texture.AsObject;
      static toObject(includeInstance: boolean, msg: Texture): Texture.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Texture, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Texture;
      static deserializeBinaryFromReader(message: Texture, reader: jspb.BinaryReader): Texture;
    }

    export namespace Texture {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifier?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        foodType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }
  }

  export class Supplement extends jspb.Message {
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

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasProductName(): boolean;
    clearProductName(): void;
    getProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setProductName(value?: proto_r4_core_datatypes_pb.String): void;

    clearSchedule(): void;
    getSchedule(): Array<proto_r4_core_datatypes_pb.Timing>;
    setSchedule(value: Array<proto_r4_core_datatypes_pb.Timing>): void;
    addSchedule(value?: proto_r4_core_datatypes_pb.Timing, index?: number): proto_r4_core_datatypes_pb.Timing;

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasInstruction(): boolean;
    clearInstruction(): void;
    getInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Supplement.AsObject;
    static toObject(includeInstance: boolean, msg: Supplement): Supplement.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Supplement, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Supplement;
    static deserializeBinaryFromReader(message: Supplement, reader: jspb.BinaryReader): Supplement;
  }

  export namespace Supplement {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      productName?: proto_r4_core_datatypes_pb.String.AsObject,
      schedule: Array<proto_r4_core_datatypes_pb.Timing.AsObject>,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      instruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class EnteralFormula extends jspb.Message {
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

    hasBaseFormulaType(): boolean;
    clearBaseFormulaType(): void;
    getBaseFormulaType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setBaseFormulaType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasBaseFormulaProductName(): boolean;
    clearBaseFormulaProductName(): void;
    getBaseFormulaProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setBaseFormulaProductName(value?: proto_r4_core_datatypes_pb.String): void;

    hasAdditiveType(): boolean;
    clearAdditiveType(): void;
    getAdditiveType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setAdditiveType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasAdditiveProductName(): boolean;
    clearAdditiveProductName(): void;
    getAdditiveProductName(): proto_r4_core_datatypes_pb.String | undefined;
    setAdditiveProductName(value?: proto_r4_core_datatypes_pb.String): void;

    hasCaloricDensity(): boolean;
    clearCaloricDensity(): void;
    getCaloricDensity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setCaloricDensity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasRouteofAdministration(): boolean;
    clearRouteofAdministration(): void;
    getRouteofAdministration(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRouteofAdministration(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearAdministration(): void;
    getAdministration(): Array<NutritionOrder.EnteralFormula.Administration>;
    setAdministration(value: Array<NutritionOrder.EnteralFormula.Administration>): void;
    addAdministration(value?: NutritionOrder.EnteralFormula.Administration, index?: number): NutritionOrder.EnteralFormula.Administration;

    hasMaxVolumeToDeliver(): boolean;
    clearMaxVolumeToDeliver(): void;
    getMaxVolumeToDeliver(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setMaxVolumeToDeliver(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    hasAdministrationInstruction(): boolean;
    clearAdministrationInstruction(): void;
    getAdministrationInstruction(): proto_r4_core_datatypes_pb.String | undefined;
    setAdministrationInstruction(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnteralFormula.AsObject;
    static toObject(includeInstance: boolean, msg: EnteralFormula): EnteralFormula.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EnteralFormula, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnteralFormula;
    static deserializeBinaryFromReader(message: EnteralFormula, reader: jspb.BinaryReader): EnteralFormula;
  }

  export namespace EnteralFormula {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      baseFormulaType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      baseFormulaProductName?: proto_r4_core_datatypes_pb.String.AsObject,
      additiveType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      additiveProductName?: proto_r4_core_datatypes_pb.String.AsObject,
      caloricDensity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      routeofAdministration?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      administration: Array<NutritionOrder.EnteralFormula.Administration.AsObject>,
      maxVolumeToDeliver?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
      administrationInstruction?: proto_r4_core_datatypes_pb.String.AsObject,
    }

    export class Administration extends jspb.Message {
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

      hasSchedule(): boolean;
      clearSchedule(): void;
      getSchedule(): proto_r4_core_datatypes_pb.Timing | undefined;
      setSchedule(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasRate(): boolean;
      clearRate(): void;
      getRate(): NutritionOrder.EnteralFormula.Administration.RateX | undefined;
      setRate(value?: NutritionOrder.EnteralFormula.Administration.RateX): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Administration.AsObject;
      static toObject(includeInstance: boolean, msg: Administration): Administration.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Administration, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Administration;
      static deserializeBinaryFromReader(message: Administration, reader: jspb.BinaryReader): Administration;
    }

    export namespace Administration {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        schedule?: proto_r4_core_datatypes_pb.Timing.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        rate?: NutritionOrder.EnteralFormula.Administration.RateX.AsObject,
      }

      export class RateX extends jspb.Message {
        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasRatio(): boolean;
        clearRatio(): void;
        getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
        setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

        getChoiceCase(): RateX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): RateX.AsObject;
        static toObject(includeInstance: boolean, msg: RateX): RateX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: RateX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): RateX;
        static deserializeBinaryFromReader(message: RateX, reader: jspb.BinaryReader): RateX;
      }

      export namespace RateX {
        export type AsObject = {
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          QUANTITY = 1,
          RATIO = 2,
        }
      }
    }
  }
}

