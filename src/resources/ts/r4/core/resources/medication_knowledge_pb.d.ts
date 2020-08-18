// package: google.fhir.r4.core
// file: proto/r4/core/resources/medication_knowledge.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class MedicationKnowledge extends jspb.Message {
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

  hasCode(): boolean;
  clearCode(): void;
  getCode(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setCode(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): MedicationKnowledge.StatusCode | undefined;
  setStatus(value?: MedicationKnowledge.StatusCode): void;

  hasManufacturer(): boolean;
  clearManufacturer(): void;
  getManufacturer(): proto_r4_core_datatypes_pb.Reference | undefined;
  setManufacturer(value?: proto_r4_core_datatypes_pb.Reference): void;

  hasDoseForm(): boolean;
  clearDoseForm(): void;
  getDoseForm(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setDoseForm(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
  setAmount(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

  clearSynonym(): void;
  getSynonym(): Array<proto_r4_core_datatypes_pb.String>;
  setSynonym(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addSynonym(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearRelatedMedicationKnowledge(): void;
  getRelatedMedicationKnowledge(): Array<MedicationKnowledge.RelatedMedicationKnowledge>;
  setRelatedMedicationKnowledge(value: Array<MedicationKnowledge.RelatedMedicationKnowledge>): void;
  addRelatedMedicationKnowledge(value?: MedicationKnowledge.RelatedMedicationKnowledge, index?: number): MedicationKnowledge.RelatedMedicationKnowledge;

  clearAssociatedMedication(): void;
  getAssociatedMedication(): Array<proto_r4_core_datatypes_pb.Reference>;
  setAssociatedMedication(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addAssociatedMedication(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearProductType(): void;
  getProductType(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setProductType(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addProductType(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearMonograph(): void;
  getMonograph(): Array<MedicationKnowledge.Monograph>;
  setMonograph(value: Array<MedicationKnowledge.Monograph>): void;
  addMonograph(value?: MedicationKnowledge.Monograph, index?: number): MedicationKnowledge.Monograph;

  clearIngredient(): void;
  getIngredient(): Array<MedicationKnowledge.Ingredient>;
  setIngredient(value: Array<MedicationKnowledge.Ingredient>): void;
  addIngredient(value?: MedicationKnowledge.Ingredient, index?: number): MedicationKnowledge.Ingredient;

  hasPreparationInstruction(): boolean;
  clearPreparationInstruction(): void;
  getPreparationInstruction(): proto_r4_core_datatypes_pb.Markdown | undefined;
  setPreparationInstruction(value?: proto_r4_core_datatypes_pb.Markdown): void;

  clearIntendedRoute(): void;
  getIntendedRoute(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setIntendedRoute(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addIntendedRoute(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearCost(): void;
  getCost(): Array<MedicationKnowledge.Cost>;
  setCost(value: Array<MedicationKnowledge.Cost>): void;
  addCost(value?: MedicationKnowledge.Cost, index?: number): MedicationKnowledge.Cost;

  clearMonitoringProgram(): void;
  getMonitoringProgram(): Array<MedicationKnowledge.MonitoringProgram>;
  setMonitoringProgram(value: Array<MedicationKnowledge.MonitoringProgram>): void;
  addMonitoringProgram(value?: MedicationKnowledge.MonitoringProgram, index?: number): MedicationKnowledge.MonitoringProgram;

  clearAdministrationGuidelines(): void;
  getAdministrationGuidelines(): Array<MedicationKnowledge.AdministrationGuidelines>;
  setAdministrationGuidelines(value: Array<MedicationKnowledge.AdministrationGuidelines>): void;
  addAdministrationGuidelines(value?: MedicationKnowledge.AdministrationGuidelines, index?: number): MedicationKnowledge.AdministrationGuidelines;

  clearMedicineClassification(): void;
  getMedicineClassification(): Array<MedicationKnowledge.MedicineClassification>;
  setMedicineClassification(value: Array<MedicationKnowledge.MedicineClassification>): void;
  addMedicineClassification(value?: MedicationKnowledge.MedicineClassification, index?: number): MedicationKnowledge.MedicineClassification;

  hasPackaging(): boolean;
  clearPackaging(): void;
  getPackaging(): MedicationKnowledge.Packaging | undefined;
  setPackaging(value?: MedicationKnowledge.Packaging): void;

  clearDrugCharacteristic(): void;
  getDrugCharacteristic(): Array<MedicationKnowledge.DrugCharacteristic>;
  setDrugCharacteristic(value: Array<MedicationKnowledge.DrugCharacteristic>): void;
  addDrugCharacteristic(value?: MedicationKnowledge.DrugCharacteristic, index?: number): MedicationKnowledge.DrugCharacteristic;

  clearContraindication(): void;
  getContraindication(): Array<proto_r4_core_datatypes_pb.Reference>;
  setContraindication(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
  addContraindication(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

  clearRegulatory(): void;
  getRegulatory(): Array<MedicationKnowledge.Regulatory>;
  setRegulatory(value: Array<MedicationKnowledge.Regulatory>): void;
  addRegulatory(value?: MedicationKnowledge.Regulatory, index?: number): MedicationKnowledge.Regulatory;

  clearKinetics(): void;
  getKinetics(): Array<MedicationKnowledge.Kinetics>;
  setKinetics(value: Array<MedicationKnowledge.Kinetics>): void;
  addKinetics(value?: MedicationKnowledge.Kinetics, index?: number): MedicationKnowledge.Kinetics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MedicationKnowledge.AsObject;
  static toObject(includeInstance: boolean, msg: MedicationKnowledge): MedicationKnowledge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MedicationKnowledge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MedicationKnowledge;
  static deserializeBinaryFromReader(message: MedicationKnowledge, reader: jspb.BinaryReader): MedicationKnowledge;
}

export namespace MedicationKnowledge {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    code?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    status?: MedicationKnowledge.StatusCode.AsObject,
    manufacturer?: proto_r4_core_datatypes_pb.Reference.AsObject,
    doseForm?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    amount?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    synonym: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    relatedMedicationKnowledge: Array<MedicationKnowledge.RelatedMedicationKnowledge.AsObject>,
    associatedMedication: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    productType: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    monograph: Array<MedicationKnowledge.Monograph.AsObject>,
    ingredient: Array<MedicationKnowledge.Ingredient.AsObject>,
    preparationInstruction?: proto_r4_core_datatypes_pb.Markdown.AsObject,
    intendedRoute: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    cost: Array<MedicationKnowledge.Cost.AsObject>,
    monitoringProgram: Array<MedicationKnowledge.MonitoringProgram.AsObject>,
    administrationGuidelines: Array<MedicationKnowledge.AdministrationGuidelines.AsObject>,
    medicineClassification: Array<MedicationKnowledge.MedicineClassification.AsObject>,
    packaging?: MedicationKnowledge.Packaging.AsObject,
    drugCharacteristic: Array<MedicationKnowledge.DrugCharacteristic.AsObject>,
    contraindication: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    regulatory: Array<MedicationKnowledge.Regulatory.AsObject>,
    kinetics: Array<MedicationKnowledge.Kinetics.AsObject>,
  }

  export class StatusCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap]): void;

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
      value: proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap[keyof proto_r4_core_codes_pb.MedicationKnowledgeStatusCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class RelatedMedicationKnowledge extends jspb.Message {
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

    clearReference(): void;
    getReference(): Array<proto_r4_core_datatypes_pb.Reference>;
    setReference(value: Array<proto_r4_core_datatypes_pb.Reference>): void;
    addReference(value?: proto_r4_core_datatypes_pb.Reference, index?: number): proto_r4_core_datatypes_pb.Reference;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RelatedMedicationKnowledge.AsObject;
    static toObject(includeInstance: boolean, msg: RelatedMedicationKnowledge): RelatedMedicationKnowledge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RelatedMedicationKnowledge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RelatedMedicationKnowledge;
    static deserializeBinaryFromReader(message: RelatedMedicationKnowledge, reader: jspb.BinaryReader): RelatedMedicationKnowledge;
  }

  export namespace RelatedMedicationKnowledge {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      reference: Array<proto_r4_core_datatypes_pb.Reference.AsObject>,
    }
  }

  export class Monograph extends jspb.Message {
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

    hasSource(): boolean;
    clearSource(): void;
    getSource(): proto_r4_core_datatypes_pb.Reference | undefined;
    setSource(value?: proto_r4_core_datatypes_pb.Reference): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Monograph.AsObject;
    static toObject(includeInstance: boolean, msg: Monograph): Monograph.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Monograph, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Monograph;
    static deserializeBinaryFromReader(message: Monograph, reader: jspb.BinaryReader): Monograph;
  }

  export namespace Monograph {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      source?: proto_r4_core_datatypes_pb.Reference.AsObject,
    }
  }

  export class Ingredient extends jspb.Message {
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

    hasItem(): boolean;
    clearItem(): void;
    getItem(): MedicationKnowledge.Ingredient.ItemX | undefined;
    setItem(value?: MedicationKnowledge.Ingredient.ItemX): void;

    hasIsActive(): boolean;
    clearIsActive(): void;
    getIsActive(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIsActive(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasStrength(): boolean;
    clearStrength(): void;
    getStrength(): proto_r4_core_datatypes_pb.Ratio | undefined;
    setStrength(value?: proto_r4_core_datatypes_pb.Ratio): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ingredient.AsObject;
    static toObject(includeInstance: boolean, msg: Ingredient): Ingredient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ingredient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ingredient;
    static deserializeBinaryFromReader(message: Ingredient, reader: jspb.BinaryReader): Ingredient;
  }

  export namespace Ingredient {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      item?: MedicationKnowledge.Ingredient.ItemX.AsObject,
      isActive?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      strength?: proto_r4_core_datatypes_pb.Ratio.AsObject,
    }

    export class ItemX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): ItemX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ItemX.AsObject;
      static toObject(includeInstance: boolean, msg: ItemX): ItemX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ItemX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ItemX;
      static deserializeBinaryFromReader(message: ItemX, reader: jspb.BinaryReader): ItemX;
    }

    export namespace ItemX {
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

  export class Cost extends jspb.Message {
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

    hasSource(): boolean;
    clearSource(): void;
    getSource(): proto_r4_core_datatypes_pb.String | undefined;
    setSource(value?: proto_r4_core_datatypes_pb.String): void;

    hasCost(): boolean;
    clearCost(): void;
    getCost(): proto_r4_core_datatypes_pb.Money | undefined;
    setCost(value?: proto_r4_core_datatypes_pb.Money): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Cost.AsObject;
    static toObject(includeInstance: boolean, msg: Cost): Cost.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Cost, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Cost;
    static deserializeBinaryFromReader(message: Cost, reader: jspb.BinaryReader): Cost;
  }

  export namespace Cost {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      source?: proto_r4_core_datatypes_pb.String.AsObject,
      cost?: proto_r4_core_datatypes_pb.Money.AsObject,
    }
  }

  export class MonitoringProgram extends jspb.Message {
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

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonitoringProgram.AsObject;
    static toObject(includeInstance: boolean, msg: MonitoringProgram): MonitoringProgram.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonitoringProgram, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonitoringProgram;
    static deserializeBinaryFromReader(message: MonitoringProgram, reader: jspb.BinaryReader): MonitoringProgram;
  }

  export namespace MonitoringProgram {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
    }
  }

  export class AdministrationGuidelines extends jspb.Message {
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

    clearDosage(): void;
    getDosage(): Array<MedicationKnowledge.AdministrationGuidelines.Dosage>;
    setDosage(value: Array<MedicationKnowledge.AdministrationGuidelines.Dosage>): void;
    addDosage(value?: MedicationKnowledge.AdministrationGuidelines.Dosage, index?: number): MedicationKnowledge.AdministrationGuidelines.Dosage;

    hasIndication(): boolean;
    clearIndication(): void;
    getIndication(): MedicationKnowledge.AdministrationGuidelines.IndicationX | undefined;
    setIndication(value?: MedicationKnowledge.AdministrationGuidelines.IndicationX): void;

    clearPatientCharacteristics(): void;
    getPatientCharacteristics(): Array<MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics>;
    setPatientCharacteristics(value: Array<MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics>): void;
    addPatientCharacteristics(value?: MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics, index?: number): MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AdministrationGuidelines.AsObject;
    static toObject(includeInstance: boolean, msg: AdministrationGuidelines): AdministrationGuidelines.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AdministrationGuidelines, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AdministrationGuidelines;
    static deserializeBinaryFromReader(message: AdministrationGuidelines, reader: jspb.BinaryReader): AdministrationGuidelines;
  }

  export namespace AdministrationGuidelines {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      dosage: Array<MedicationKnowledge.AdministrationGuidelines.Dosage.AsObject>,
      indication?: MedicationKnowledge.AdministrationGuidelines.IndicationX.AsObject,
      patientCharacteristics: Array<MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics.AsObject>,
    }

    export class Dosage extends jspb.Message {
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

      clearDosage(): void;
      getDosage(): Array<proto_r4_core_datatypes_pb.Dosage>;
      setDosage(value: Array<proto_r4_core_datatypes_pb.Dosage>): void;
      addDosage(value?: proto_r4_core_datatypes_pb.Dosage, index?: number): proto_r4_core_datatypes_pb.Dosage;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Dosage.AsObject;
      static toObject(includeInstance: boolean, msg: Dosage): Dosage.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Dosage, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Dosage;
      static deserializeBinaryFromReader(message: Dosage, reader: jspb.BinaryReader): Dosage;
    }

    export namespace Dosage {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        dosage: Array<proto_r4_core_datatypes_pb.Dosage.AsObject>,
      }
    }

    export class IndicationX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      getChoiceCase(): IndicationX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): IndicationX.AsObject;
      static toObject(includeInstance: boolean, msg: IndicationX): IndicationX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: IndicationX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): IndicationX;
      static deserializeBinaryFromReader(message: IndicationX, reader: jspb.BinaryReader): IndicationX;
    }

    export namespace IndicationX {
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

    export class PatientCharacteristics extends jspb.Message {
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

      hasCharacteristic(): boolean;
      clearCharacteristic(): void;
      getCharacteristic(): MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics.CharacteristicX | undefined;
      setCharacteristic(value?: MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics.CharacteristicX): void;

      clearValue(): void;
      getValue(): Array<proto_r4_core_datatypes_pb.String>;
      setValue(value: Array<proto_r4_core_datatypes_pb.String>): void;
      addValue(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PatientCharacteristics.AsObject;
      static toObject(includeInstance: boolean, msg: PatientCharacteristics): PatientCharacteristics.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PatientCharacteristics, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PatientCharacteristics;
      static deserializeBinaryFromReader(message: PatientCharacteristics, reader: jspb.BinaryReader): PatientCharacteristics;
    }

    export namespace PatientCharacteristics {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        characteristic?: MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics.CharacteristicX.AsObject,
        value: Array<proto_r4_core_datatypes_pb.String.AsObject>,
      }

      export class CharacteristicX extends jspb.Message {
        hasCodeableConcept(): boolean;
        clearCodeableConcept(): void;
        getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        getChoiceCase(): CharacteristicX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): CharacteristicX.AsObject;
        static toObject(includeInstance: boolean, msg: CharacteristicX): CharacteristicX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: CharacteristicX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): CharacteristicX;
        static deserializeBinaryFromReader(message: CharacteristicX, reader: jspb.BinaryReader): CharacteristicX;
      }

      export namespace CharacteristicX {
        export type AsObject = {
          codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          CODEABLE_CONCEPT = 1,
          QUANTITY = 2,
        }
      }
    }
  }

  export class MedicineClassification extends jspb.Message {
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

    clearClassification(): void;
    getClassification(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setClassification(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addClassification(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MedicineClassification.AsObject;
    static toObject(includeInstance: boolean, msg: MedicineClassification): MedicineClassification.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MedicineClassification, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MedicineClassification;
    static deserializeBinaryFromReader(message: MedicineClassification, reader: jspb.BinaryReader): MedicineClassification;
  }

  export namespace MedicineClassification {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      classification: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    }
  }

  export class Packaging extends jspb.Message {
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

    hasQuantity(): boolean;
    clearQuantity(): void;
    getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
    setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Packaging.AsObject;
    static toObject(includeInstance: boolean, msg: Packaging): Packaging.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Packaging, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Packaging;
    static deserializeBinaryFromReader(message: Packaging, reader: jspb.BinaryReader): Packaging;
  }

  export namespace Packaging {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
    }
  }

  export class DrugCharacteristic extends jspb.Message {
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

    hasValue(): boolean;
    clearValue(): void;
    getValue(): MedicationKnowledge.DrugCharacteristic.ValueX | undefined;
    setValue(value?: MedicationKnowledge.DrugCharacteristic.ValueX): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DrugCharacteristic.AsObject;
    static toObject(includeInstance: boolean, msg: DrugCharacteristic): DrugCharacteristic.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DrugCharacteristic, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DrugCharacteristic;
    static deserializeBinaryFromReader(message: DrugCharacteristic, reader: jspb.BinaryReader): DrugCharacteristic;
  }

  export namespace DrugCharacteristic {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      value?: MedicationKnowledge.DrugCharacteristic.ValueX.AsObject,
    }

    export class ValueX extends jspb.Message {
      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      getChoiceCase(): ValueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ValueX.AsObject;
      static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ValueX;
      static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
    }

    export namespace ValueX {
      export type AsObject = {
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        CODEABLE_CONCEPT = 1,
        STRING_VALUE = 2,
        QUANTITY = 3,
        BASE64_BINARY = 4,
      }
    }
  }

  export class Regulatory extends jspb.Message {
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

    hasRegulatoryAuthority(): boolean;
    clearRegulatoryAuthority(): void;
    getRegulatoryAuthority(): proto_r4_core_datatypes_pb.Reference | undefined;
    setRegulatoryAuthority(value?: proto_r4_core_datatypes_pb.Reference): void;

    clearSubstitution(): void;
    getSubstitution(): Array<MedicationKnowledge.Regulatory.Substitution>;
    setSubstitution(value: Array<MedicationKnowledge.Regulatory.Substitution>): void;
    addSubstitution(value?: MedicationKnowledge.Regulatory.Substitution, index?: number): MedicationKnowledge.Regulatory.Substitution;

    clearSchedule(): void;
    getSchedule(): Array<MedicationKnowledge.Regulatory.Schedule>;
    setSchedule(value: Array<MedicationKnowledge.Regulatory.Schedule>): void;
    addSchedule(value?: MedicationKnowledge.Regulatory.Schedule, index?: number): MedicationKnowledge.Regulatory.Schedule;

    hasMaxDispense(): boolean;
    clearMaxDispense(): void;
    getMaxDispense(): MedicationKnowledge.Regulatory.MaxDispense | undefined;
    setMaxDispense(value?: MedicationKnowledge.Regulatory.MaxDispense): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Regulatory.AsObject;
    static toObject(includeInstance: boolean, msg: Regulatory): Regulatory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Regulatory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Regulatory;
    static deserializeBinaryFromReader(message: Regulatory, reader: jspb.BinaryReader): Regulatory;
  }

  export namespace Regulatory {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      regulatoryAuthority?: proto_r4_core_datatypes_pb.Reference.AsObject,
      substitution: Array<MedicationKnowledge.Regulatory.Substitution.AsObject>,
      schedule: Array<MedicationKnowledge.Regulatory.Schedule.AsObject>,
      maxDispense?: MedicationKnowledge.Regulatory.MaxDispense.AsObject,
    }

    export class Substitution extends jspb.Message {
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

      hasAllowed(): boolean;
      clearAllowed(): void;
      getAllowed(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setAllowed(value?: proto_r4_core_datatypes_pb.Boolean): void;

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
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        allowed?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      }
    }

    export class Schedule extends jspb.Message {
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
      getSchedule(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setSchedule(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Schedule.AsObject;
      static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Schedule;
      static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
    }

    export namespace Schedule {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        schedule?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      }
    }

    export class MaxDispense extends jspb.Message {
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

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Duration | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Duration): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): MaxDispense.AsObject;
      static toObject(includeInstance: boolean, msg: MaxDispense): MaxDispense.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: MaxDispense, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): MaxDispense;
      static deserializeBinaryFromReader(message: MaxDispense, reader: jspb.BinaryReader): MaxDispense;
    }

    export namespace MaxDispense {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        period?: proto_r4_core_datatypes_pb.Duration.AsObject,
      }
    }
  }

  export class Kinetics extends jspb.Message {
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

    clearAreaUnderCurve(): void;
    getAreaUnderCurve(): Array<proto_r4_core_datatypes_pb.SimpleQuantity>;
    setAreaUnderCurve(value: Array<proto_r4_core_datatypes_pb.SimpleQuantity>): void;
    addAreaUnderCurve(value?: proto_r4_core_datatypes_pb.SimpleQuantity, index?: number): proto_r4_core_datatypes_pb.SimpleQuantity;

    clearLethalDose50(): void;
    getLethalDose50(): Array<proto_r4_core_datatypes_pb.SimpleQuantity>;
    setLethalDose50(value: Array<proto_r4_core_datatypes_pb.SimpleQuantity>): void;
    addLethalDose50(value?: proto_r4_core_datatypes_pb.SimpleQuantity, index?: number): proto_r4_core_datatypes_pb.SimpleQuantity;

    hasHalfLifePeriod(): boolean;
    clearHalfLifePeriod(): void;
    getHalfLifePeriod(): proto_r4_core_datatypes_pb.Duration | undefined;
    setHalfLifePeriod(value?: proto_r4_core_datatypes_pb.Duration): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Kinetics.AsObject;
    static toObject(includeInstance: boolean, msg: Kinetics): Kinetics.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Kinetics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Kinetics;
    static deserializeBinaryFromReader(message: Kinetics, reader: jspb.BinaryReader): Kinetics;
  }

  export namespace Kinetics {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      areaUnderCurve: Array<proto_r4_core_datatypes_pb.SimpleQuantity.AsObject>,
      lethalDose50: Array<proto_r4_core_datatypes_pb.SimpleQuantity.AsObject>,
      halfLifePeriod?: proto_r4_core_datatypes_pb.Duration.AsObject,
    }
  }
}
