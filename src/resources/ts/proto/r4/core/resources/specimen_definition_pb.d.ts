// package: google.fhir.r4.core
// file: proto/r4/core/resources/specimen_definition.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SpecimenDefinition extends jspb.Message {
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

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasTypeCollected(): boolean;
  clearTypeCollected(): void;
  getTypeCollected(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setTypeCollected(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearPatientPreparation(): void;
  getPatientPreparation(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setPatientPreparation(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addPatientPreparation(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  hasTimeAspect(): boolean;
  clearTimeAspect(): void;
  getTimeAspect(): proto_r4_core_datatypes_pb.String | undefined;
  setTimeAspect(value?: proto_r4_core_datatypes_pb.String): void;

  clearCollection(): void;
  getCollection(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCollection(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCollection(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearTypeTested(): void;
  getTypeTested(): Array<SpecimenDefinition.TypeTested>;
  setTypeTested(value: Array<SpecimenDefinition.TypeTested>): void;
  addTypeTested(value?: SpecimenDefinition.TypeTested, index?: number): SpecimenDefinition.TypeTested;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpecimenDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: SpecimenDefinition): SpecimenDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpecimenDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpecimenDefinition;
  static deserializeBinaryFromReader(message: SpecimenDefinition, reader: jspb.BinaryReader): SpecimenDefinition;
}

export namespace SpecimenDefinition {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    typeCollected?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    patientPreparation: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    timeAspect?: proto_r4_core_datatypes_pb.String.AsObject,
    collection: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    typeTested: Array<SpecimenDefinition.TypeTested.AsObject>,
  }

  export class TypeTested extends jspb.Message {
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

    hasIsDerived(): boolean;
    clearIsDerived(): void;
    getIsDerived(): proto_r4_core_datatypes_pb.Boolean | undefined;
    setIsDerived(value?: proto_r4_core_datatypes_pb.Boolean): void;

    hasType(): boolean;
    clearType(): void;
    getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    hasPreference(): boolean;
    clearPreference(): void;
    getPreference(): SpecimenDefinition.TypeTested.PreferenceCode | undefined;
    setPreference(value?: SpecimenDefinition.TypeTested.PreferenceCode): void;

    hasContainer(): boolean;
    clearContainer(): void;
    getContainer(): SpecimenDefinition.TypeTested.Container | undefined;
    setContainer(value?: SpecimenDefinition.TypeTested.Container): void;

    hasRequirement(): boolean;
    clearRequirement(): void;
    getRequirement(): proto_r4_core_datatypes_pb.String | undefined;
    setRequirement(value?: proto_r4_core_datatypes_pb.String): void;

    hasRetentionTime(): boolean;
    clearRetentionTime(): void;
    getRetentionTime(): proto_r4_core_datatypes_pb.Duration | undefined;
    setRetentionTime(value?: proto_r4_core_datatypes_pb.Duration): void;

    clearRejectionCriterion(): void;
    getRejectionCriterion(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
    setRejectionCriterion(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
    addRejectionCriterion(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

    clearHandling(): void;
    getHandling(): Array<SpecimenDefinition.TypeTested.Handling>;
    setHandling(value: Array<SpecimenDefinition.TypeTested.Handling>): void;
    addHandling(value?: SpecimenDefinition.TypeTested.Handling, index?: number): SpecimenDefinition.TypeTested.Handling;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeTested.AsObject;
    static toObject(includeInstance: boolean, msg: TypeTested): TypeTested.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeTested, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeTested;
    static deserializeBinaryFromReader(message: TypeTested, reader: jspb.BinaryReader): TypeTested;
  }

  export namespace TypeTested {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      isDerived?: proto_r4_core_datatypes_pb.Boolean.AsObject,
      type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      preference?: SpecimenDefinition.TypeTested.PreferenceCode.AsObject,
      container?: SpecimenDefinition.TypeTested.Container.AsObject,
      requirement?: proto_r4_core_datatypes_pb.String.AsObject,
      retentionTime?: proto_r4_core_datatypes_pb.Duration.AsObject,
      rejectionCriterion: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
      handling: Array<SpecimenDefinition.TypeTested.Handling.AsObject>,
    }

    export class PreferenceCode extends jspb.Message {
      getValue(): proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap];
      setValue(value: proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap]): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtension(): void;
      getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): PreferenceCode.AsObject;
      static toObject(includeInstance: boolean, msg: PreferenceCode): PreferenceCode.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: PreferenceCode, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): PreferenceCode;
      static deserializeBinaryFromReader(message: PreferenceCode, reader: jspb.BinaryReader): PreferenceCode;
    }

    export namespace PreferenceCode {
      export type AsObject = {
        value: proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap[keyof proto_r4_core_codes_pb.SpecimenContainedPreferenceCode.ValueMap],
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      }
    }

    export class Container extends jspb.Message {
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

      hasMaterial(): boolean;
      clearMaterial(): void;
      getMaterial(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setMaterial(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasType(): boolean;
      clearType(): void;
      getType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCap(): boolean;
      clearCap(): void;
      getCap(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCap(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasDescription(): boolean;
      clearDescription(): void;
      getDescription(): proto_r4_core_datatypes_pb.String | undefined;
      setDescription(value?: proto_r4_core_datatypes_pb.String): void;

      hasCapacity(): boolean;
      clearCapacity(): void;
      getCapacity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
      setCapacity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

      hasMinimumVolume(): boolean;
      clearMinimumVolume(): void;
      getMinimumVolume(): SpecimenDefinition.TypeTested.Container.MinimumVolumeX | undefined;
      setMinimumVolume(value?: SpecimenDefinition.TypeTested.Container.MinimumVolumeX): void;

      clearAdditive(): void;
      getAdditive(): Array<SpecimenDefinition.TypeTested.Container.Additive>;
      setAdditive(value: Array<SpecimenDefinition.TypeTested.Container.Additive>): void;
      addAdditive(value?: SpecimenDefinition.TypeTested.Container.Additive, index?: number): SpecimenDefinition.TypeTested.Container.Additive;

      hasPreparation(): boolean;
      clearPreparation(): void;
      getPreparation(): proto_r4_core_datatypes_pb.String | undefined;
      setPreparation(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Container.AsObject;
      static toObject(includeInstance: boolean, msg: Container): Container.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Container, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Container;
      static deserializeBinaryFromReader(message: Container, reader: jspb.BinaryReader): Container;
    }

    export namespace Container {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        material?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        cap?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        description?: proto_r4_core_datatypes_pb.String.AsObject,
        capacity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
        minimumVolume?: SpecimenDefinition.TypeTested.Container.MinimumVolumeX.AsObject,
        additive: Array<SpecimenDefinition.TypeTested.Container.Additive.AsObject>,
        preparation?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class MinimumVolumeX extends jspb.Message {
        hasQuantity(): boolean;
        clearQuantity(): void;
        getQuantity(): proto_r4_core_datatypes_pb.SimpleQuantity | undefined;
        setQuantity(value?: proto_r4_core_datatypes_pb.SimpleQuantity): void;

        hasStringValue(): boolean;
        clearStringValue(): void;
        getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
        setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

        getChoiceCase(): MinimumVolumeX.ChoiceCase;
        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MinimumVolumeX.AsObject;
        static toObject(includeInstance: boolean, msg: MinimumVolumeX): MinimumVolumeX.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MinimumVolumeX, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MinimumVolumeX;
        static deserializeBinaryFromReader(message: MinimumVolumeX, reader: jspb.BinaryReader): MinimumVolumeX;
      }

      export namespace MinimumVolumeX {
        export type AsObject = {
          quantity?: proto_r4_core_datatypes_pb.SimpleQuantity.AsObject,
          stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        }

        export enum ChoiceCase {
          CHOICE_NOT_SET = 0,
          QUANTITY = 1,
          STRING_VALUE = 2,
        }
      }

      export class Additive extends jspb.Message {
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

        hasAdditive(): boolean;
        clearAdditive(): void;
        getAdditive(): SpecimenDefinition.TypeTested.Container.Additive.AdditiveX | undefined;
        setAdditive(value?: SpecimenDefinition.TypeTested.Container.Additive.AdditiveX): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Additive.AsObject;
        static toObject(includeInstance: boolean, msg: Additive): Additive.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Additive, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Additive;
        static deserializeBinaryFromReader(message: Additive, reader: jspb.BinaryReader): Additive;
      }

      export namespace Additive {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          additive?: SpecimenDefinition.TypeTested.Container.Additive.AdditiveX.AsObject,
        }

        export class AdditiveX extends jspb.Message {
          hasCodeableConcept(): boolean;
          clearCodeableConcept(): void;
          getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
          setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

          hasReference(): boolean;
          clearReference(): void;
          getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
          setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

          getChoiceCase(): AdditiveX.ChoiceCase;
          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): AdditiveX.AsObject;
          static toObject(includeInstance: boolean, msg: AdditiveX): AdditiveX.AsObject;
          static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
          static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
          static serializeBinaryToWriter(message: AdditiveX, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): AdditiveX;
          static deserializeBinaryFromReader(message: AdditiveX, reader: jspb.BinaryReader): AdditiveX;
        }

        export namespace AdditiveX {
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

    export class Handling extends jspb.Message {
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

      hasTemperatureQualifier(): boolean;
      clearTemperatureQualifier(): void;
      getTemperatureQualifier(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setTemperatureQualifier(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasTemperatureRange(): boolean;
      clearTemperatureRange(): void;
      getTemperatureRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setTemperatureRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasMaxDuration(): boolean;
      clearMaxDuration(): void;
      getMaxDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setMaxDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasInstruction(): boolean;
      clearInstruction(): void;
      getInstruction(): proto_r4_core_datatypes_pb.String | undefined;
      setInstruction(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Handling.AsObject;
      static toObject(includeInstance: boolean, msg: Handling): Handling.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Handling, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Handling;
      static deserializeBinaryFromReader(message: Handling, reader: jspb.BinaryReader): Handling;
    }

    export namespace Handling {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        temperatureQualifier?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        temperatureRange?: proto_r4_core_datatypes_pb.Range.AsObject,
        maxDuration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        instruction?: proto_r4_core_datatypes_pb.String.AsObject,
      }
    }
  }
}

