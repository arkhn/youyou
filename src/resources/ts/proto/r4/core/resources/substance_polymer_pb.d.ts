// package: google.fhir.r4.core
// file: proto/r4/core/resources/substance_polymer.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class SubstancePolymer extends jspb.Message {
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

  hasClassValue(): boolean;
  clearClassValue(): void;
  getClassValue(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setClassValue(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  hasGeometry(): boolean;
  clearGeometry(): void;
  getGeometry(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
  setGeometry(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

  clearCopolymerConnectivity(): void;
  getCopolymerConnectivity(): Array<proto_r4_core_datatypes_pb.CodeableConcept>;
  setCopolymerConnectivity(value: Array<proto_r4_core_datatypes_pb.CodeableConcept>): void;
  addCopolymerConnectivity(value?: proto_r4_core_datatypes_pb.CodeableConcept, index?: number): proto_r4_core_datatypes_pb.CodeableConcept;

  clearModification(): void;
  getModification(): Array<proto_r4_core_datatypes_pb.String>;
  setModification(value: Array<proto_r4_core_datatypes_pb.String>): void;
  addModification(value?: proto_r4_core_datatypes_pb.String, index?: number): proto_r4_core_datatypes_pb.String;

  clearMonomerSet(): void;
  getMonomerSet(): Array<SubstancePolymer.MonomerSet>;
  setMonomerSet(value: Array<SubstancePolymer.MonomerSet>): void;
  addMonomerSet(value?: SubstancePolymer.MonomerSet, index?: number): SubstancePolymer.MonomerSet;

  clearRepeat(): void;
  getRepeat(): Array<SubstancePolymer.Repeat>;
  setRepeat(value: Array<SubstancePolymer.Repeat>): void;
  addRepeat(value?: SubstancePolymer.Repeat, index?: number): SubstancePolymer.Repeat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubstancePolymer.AsObject;
  static toObject(includeInstance: boolean, msg: SubstancePolymer): SubstancePolymer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubstancePolymer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubstancePolymer;
  static deserializeBinaryFromReader(message: SubstancePolymer, reader: jspb.BinaryReader): SubstancePolymer;
}

export namespace SubstancePolymer {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    text?: proto_r4_core_datatypes_pb.Narrative.AsObject,
    contained: Array<google_protobuf_any_pb.Any.AsObject>,
    extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    classValue?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    geometry?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
    copolymerConnectivity: Array<proto_r4_core_datatypes_pb.CodeableConcept.AsObject>,
    modification: Array<proto_r4_core_datatypes_pb.String.AsObject>,
    monomerSet: Array<SubstancePolymer.MonomerSet.AsObject>,
    repeat: Array<SubstancePolymer.Repeat.AsObject>,
  }

  export class MonomerSet extends jspb.Message {
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

    hasRatioType(): boolean;
    clearRatioType(): void;
    getRatioType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRatioType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearStartingMaterial(): void;
    getStartingMaterial(): Array<SubstancePolymer.MonomerSet.StartingMaterial>;
    setStartingMaterial(value: Array<SubstancePolymer.MonomerSet.StartingMaterial>): void;
    addStartingMaterial(value?: SubstancePolymer.MonomerSet.StartingMaterial, index?: number): SubstancePolymer.MonomerSet.StartingMaterial;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonomerSet.AsObject;
    static toObject(includeInstance: boolean, msg: MonomerSet): MonomerSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonomerSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonomerSet;
    static deserializeBinaryFromReader(message: MonomerSet, reader: jspb.BinaryReader): MonomerSet;
  }

  export namespace MonomerSet {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      ratioType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      startingMaterial: Array<SubstancePolymer.MonomerSet.StartingMaterial.AsObject>,
    }

    export class StartingMaterial extends jspb.Message {
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

      hasIsDefining(): boolean;
      clearIsDefining(): void;
      getIsDefining(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setIsDefining(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.SubstanceAmount | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.SubstanceAmount): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): StartingMaterial.AsObject;
      static toObject(includeInstance: boolean, msg: StartingMaterial): StartingMaterial.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: StartingMaterial, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): StartingMaterial;
      static deserializeBinaryFromReader(message: StartingMaterial, reader: jspb.BinaryReader): StartingMaterial;
    }

    export namespace StartingMaterial {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        material?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        isDefining?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        amount?: proto_r4_core_datatypes_pb.SubstanceAmount.AsObject,
      }
    }
  }

  export class Repeat extends jspb.Message {
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

    hasNumberOfUnits(): boolean;
    clearNumberOfUnits(): void;
    getNumberOfUnits(): proto_r4_core_datatypes_pb.Integer | undefined;
    setNumberOfUnits(value?: proto_r4_core_datatypes_pb.Integer): void;

    hasAverageMolecularFormula(): boolean;
    clearAverageMolecularFormula(): void;
    getAverageMolecularFormula(): proto_r4_core_datatypes_pb.String | undefined;
    setAverageMolecularFormula(value?: proto_r4_core_datatypes_pb.String): void;

    hasRepeatUnitAmountType(): boolean;
    clearRepeatUnitAmountType(): void;
    getRepeatUnitAmountType(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
    setRepeatUnitAmountType(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

    clearRepeatUnit(): void;
    getRepeatUnit(): Array<SubstancePolymer.Repeat.RepeatUnit>;
    setRepeatUnit(value: Array<SubstancePolymer.Repeat.RepeatUnit>): void;
    addRepeatUnit(value?: SubstancePolymer.Repeat.RepeatUnit, index?: number): SubstancePolymer.Repeat.RepeatUnit;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Repeat.AsObject;
    static toObject(includeInstance: boolean, msg: Repeat): Repeat.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Repeat, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Repeat;
    static deserializeBinaryFromReader(message: Repeat, reader: jspb.BinaryReader): Repeat;
  }

  export namespace Repeat {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      numberOfUnits?: proto_r4_core_datatypes_pb.Integer.AsObject,
      averageMolecularFormula?: proto_r4_core_datatypes_pb.String.AsObject,
      repeatUnitAmountType?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
      repeatUnit: Array<SubstancePolymer.Repeat.RepeatUnit.AsObject>,
    }

    export class RepeatUnit extends jspb.Message {
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

      hasOrientationOfPolymerisation(): boolean;
      clearOrientationOfPolymerisation(): void;
      getOrientationOfPolymerisation(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setOrientationOfPolymerisation(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasRepeatUnit(): boolean;
      clearRepeatUnit(): void;
      getRepeatUnit(): proto_r4_core_datatypes_pb.String | undefined;
      setRepeatUnit(value?: proto_r4_core_datatypes_pb.String): void;

      hasAmount(): boolean;
      clearAmount(): void;
      getAmount(): proto_r4_core_datatypes_pb.SubstanceAmount | undefined;
      setAmount(value?: proto_r4_core_datatypes_pb.SubstanceAmount): void;

      clearDegreeOfPolymerisation(): void;
      getDegreeOfPolymerisation(): Array<SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation>;
      setDegreeOfPolymerisation(value: Array<SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation>): void;
      addDegreeOfPolymerisation(value?: SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation, index?: number): SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation;

      clearStructuralRepresentation(): void;
      getStructuralRepresentation(): Array<SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation>;
      setStructuralRepresentation(value: Array<SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation>): void;
      addStructuralRepresentation(value?: SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation, index?: number): SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RepeatUnit.AsObject;
      static toObject(includeInstance: boolean, msg: RepeatUnit): RepeatUnit.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RepeatUnit, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RepeatUnit;
      static deserializeBinaryFromReader(message: RepeatUnit, reader: jspb.BinaryReader): RepeatUnit;
    }

    export namespace RepeatUnit {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        orientationOfPolymerisation?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        repeatUnit?: proto_r4_core_datatypes_pb.String.AsObject,
        amount?: proto_r4_core_datatypes_pb.SubstanceAmount.AsObject,
        degreeOfPolymerisation: Array<SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation.AsObject>,
        structuralRepresentation: Array<SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation.AsObject>,
      }

      export class DegreeOfPolymerisation extends jspb.Message {
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

        hasDegree(): boolean;
        clearDegree(): void;
        getDegree(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
        setDegree(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

        hasAmount(): boolean;
        clearAmount(): void;
        getAmount(): proto_r4_core_datatypes_pb.SubstanceAmount | undefined;
        setAmount(value?: proto_r4_core_datatypes_pb.SubstanceAmount): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): DegreeOfPolymerisation.AsObject;
        static toObject(includeInstance: boolean, msg: DegreeOfPolymerisation): DegreeOfPolymerisation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: DegreeOfPolymerisation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): DegreeOfPolymerisation;
        static deserializeBinaryFromReader(message: DegreeOfPolymerisation, reader: jspb.BinaryReader): DegreeOfPolymerisation;
      }

      export namespace DegreeOfPolymerisation {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          degree?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          amount?: proto_r4_core_datatypes_pb.SubstanceAmount.AsObject,
        }
      }

      export class StructuralRepresentation extends jspb.Message {
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

        hasRepresentation(): boolean;
        clearRepresentation(): void;
        getRepresentation(): proto_r4_core_datatypes_pb.String | undefined;
        setRepresentation(value?: proto_r4_core_datatypes_pb.String): void;

        hasAttachment(): boolean;
        clearAttachment(): void;
        getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
        setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): StructuralRepresentation.AsObject;
        static toObject(includeInstance: boolean, msg: StructuralRepresentation): StructuralRepresentation.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: StructuralRepresentation, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): StructuralRepresentation;
        static deserializeBinaryFromReader(message: StructuralRepresentation, reader: jspb.BinaryReader): StructuralRepresentation;
      }

      export namespace StructuralRepresentation {
        export type AsObject = {
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
          type?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
          representation?: proto_r4_core_datatypes_pb.String.AsObject,
          attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        }
      }
    }
  }
}

