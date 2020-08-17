// source: proto/annotations.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.google.fhir.proto.FhirVersion', null, global);
goog.exportSymbol('proto.google.fhir.proto.Requirement', null, global);
goog.exportSymbol('proto.google.fhir.proto.StructureDefinitionKindValue', null, global);
goog.exportSymbol('proto.google.fhir.proto.analyticProtoFor', null, global);
goog.exportSymbol('proto.google.fhir.proto.enumValuesetUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirCodeSystemUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirExtensionUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirFixedSystem', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirInlinedCodingCode', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirInlinedCodingSystem', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirInlinedExtensionUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirOneofIsOptional', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirOriginalCode', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirPathConstraintList', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirPathMessageConstraintList', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirProfileBaseList', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirReferenceTypeList', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirSliceBy', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirSliceOf', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirSliceValue', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirStructureDefinitionUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirValuesetUrl', null, global);
goog.exportSymbol('proto.google.fhir.proto.fhirVersion', null, global);
goog.exportSymbol('proto.google.fhir.proto.isAbstractType', null, global);
goog.exportSymbol('proto.google.fhir.proto.isChoiceType', null, global);
goog.exportSymbol('proto.google.fhir.proto.referencedFhirType', null, global);
goog.exportSymbol('proto.google.fhir.proto.sourceCodeSystem', null, global);
goog.exportSymbol('proto.google.fhir.proto.structureDefinitionKind', null, global);
goog.exportSymbol('proto.google.fhir.proto.validReferenceTypeList', null, global);
goog.exportSymbol('proto.google.fhir.proto.validationRequirement', null, global);
goog.exportSymbol('proto.google.fhir.proto.valueRegex', null, global);
/**
 * @enum {number}
 */
proto.google.fhir.proto.FhirVersion = {
  FHIR_VERSION_UNKNOWN: 0,
  DSTU2: 1,
  STU3: 2,
  R4: 4,
  R5: 5
};

/**
 * @enum {number}
 */
proto.google.fhir.proto.StructureDefinitionKindValue = {
  KIND_UNKNOWN: 0,
  KIND_PRIMITIVE_TYPE: 1,
  KIND_COMPLEX_TYPE: 2,
  KIND_RESOURCE: 3,
  KIND_LOGICAL: 4
};

/**
 * @enum {number}
 */
proto.google.fhir.proto.Requirement = {
  NOT_REQUIRED: 0,
  REQUIRED_BY_FHIR: 1
};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirValuesetUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirValuesetUrl = new jspb.ExtensionFieldInfo(
    180887441,
    {fhirValuesetUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[180887441] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirValuesetUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[180887441] = proto.google.fhir.proto.fhirValuesetUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirReferenceTypeList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.google.fhir.proto.fhirReferenceTypeList = new jspb.ExtensionFieldInfo(
    183546385,
    {fhirReferenceTypeList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[183546385] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirReferenceTypeList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[183546385] = proto.google.fhir.proto.fhirReferenceTypeList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `structureDefinitionKind`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.fhir.proto.StructureDefinitionKindValue>}
 */
proto.google.fhir.proto.structureDefinitionKind = new jspb.ExtensionFieldInfo(
    182131192,
    {structureDefinitionKind: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[182131192] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.structureDefinitionKind,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[182131192] = proto.google.fhir.proto.structureDefinitionKind;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `valueRegex`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.valueRegex = new jspb.ExtensionFieldInfo(
    204543906,
    {valueRegex: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[204543906] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.valueRegex,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[204543906] = proto.google.fhir.proto.valueRegex;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirStructureDefinitionUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirStructureDefinitionUrl = new jspb.ExtensionFieldInfo(
    207562726,
    {fhirStructureDefinitionUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[207562726] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirStructureDefinitionUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[207562726] = proto.google.fhir.proto.fhirStructureDefinitionUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `analyticProtoFor`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.analyticProtoFor = new jspb.ExtensionFieldInfo(
    255621908,
    {analyticProtoFor: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[255621908] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.analyticProtoFor,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[255621908] = proto.google.fhir.proto.analyticProtoFor;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirProfileBaseList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.google.fhir.proto.fhirProfileBaseList = new jspb.ExtensionFieldInfo(
    206336851,
    {fhirProfileBaseList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[206336851] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirProfileBaseList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[206336851] = proto.google.fhir.proto.fhirProfileBaseList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `isAbstractType`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.google.fhir.proto.isAbstractType = new jspb.ExtensionFieldInfo(
    228208334,
    {isAbstractType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[228208334] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.isAbstractType,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[228208334] = proto.google.fhir.proto.isAbstractType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `isChoiceType`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.google.fhir.proto.isChoiceType = new jspb.ExtensionFieldInfo(
    228595764,
    {isChoiceType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[228595764] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.isChoiceType,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[228595764] = proto.google.fhir.proto.isChoiceType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirFixedSystem`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirFixedSystem = new jspb.ExtensionFieldInfo(
    255621907,
    {fhirFixedSystem: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[255621907] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirFixedSystem,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[255621907] = proto.google.fhir.proto.fhirFixedSystem;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirPathMessageConstraintList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.google.fhir.proto.fhirPathMessageConstraintList = new jspb.ExtensionFieldInfo(
    276863075,
    {fhirPathMessageConstraintList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[276863075] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirPathMessageConstraintList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[276863075] = proto.google.fhir.proto.fhirPathMessageConstraintList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirExtensionUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirExtensionUrl = new jspb.ExtensionFieldInfo(
    177048773,
    {fhirExtensionUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[177048773] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirExtensionUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[177048773] = proto.google.fhir.proto.fhirExtensionUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirCodeSystemUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirCodeSystemUrl = new jspb.ExtensionFieldInfo(
    268060945,
    {fhirCodeSystemUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[268060945] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirCodeSystemUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[268060945] = proto.google.fhir.proto.fhirCodeSystemUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `enumValuesetUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.enumValuesetUrl = new jspb.ExtensionFieldInfo(
    276877913,
    {enumValuesetUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumOptions.extensionsBinary[276877913] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.enumValuesetUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumOptions.extensions[276877913] = proto.google.fhir.proto.enumValuesetUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirOriginalCode`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirOriginalCode = new jspb.ExtensionFieldInfo(
    181000551,
    {fhirOriginalCode: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[181000551] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirOriginalCode,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[181000551] = proto.google.fhir.proto.fhirOriginalCode;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `sourceCodeSystem`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.sourceCodeSystem = new jspb.ExtensionFieldInfo(
    275176953,
    {sourceCodeSystem: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.EnumValueOptions.extensionsBinary[275176953] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.sourceCodeSystem,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.EnumValueOptions.extensions[275176953] = proto.google.fhir.proto.sourceCodeSystem;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `validationRequirement`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.fhir.proto.Requirement>}
 */
proto.google.fhir.proto.validationRequirement = new jspb.ExtensionFieldInfo(
    162282766,
    {validationRequirement: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[162282766] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.validationRequirement,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[162282766] = proto.google.fhir.proto.validationRequirement;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirSliceBy`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirSliceBy = new jspb.ExtensionFieldInfo(
    211855060,
    {fhirSliceBy: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[211855060] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirSliceBy,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[211855060] = proto.google.fhir.proto.fhirSliceBy;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirSliceOf`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirSliceOf = new jspb.ExtensionFieldInfo(
    211842556,
    {fhirSliceOf: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[211842556] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirSliceOf,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[211842556] = proto.google.fhir.proto.fhirSliceOf;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirSliceValue`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirSliceValue = new jspb.ExtensionFieldInfo(
    211855323,
    {fhirSliceValue: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[211855323] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirSliceValue,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[211855323] = proto.google.fhir.proto.fhirSliceValue;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirInlinedExtensionUrl`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirInlinedExtensionUrl = new jspb.ExtensionFieldInfo(
    206340037,
    {fhirInlinedExtensionUrl: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[206340037] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirInlinedExtensionUrl,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[206340037] = proto.google.fhir.proto.fhirInlinedExtensionUrl;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirInlinedCodingSystem`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirInlinedCodingSystem = new jspb.ExtensionFieldInfo(
    211854975,
    {fhirInlinedCodingSystem: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[211854975] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirInlinedCodingSystem,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[211854975] = proto.google.fhir.proto.fhirInlinedCodingSystem;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirInlinedCodingCode`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fhirInlinedCodingCode = new jspb.ExtensionFieldInfo(
    212122564,
    {fhirInlinedCodingCode: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[212122564] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirInlinedCodingCode,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[212122564] = proto.google.fhir.proto.fhirInlinedCodingCode;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirPathConstraintList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.google.fhir.proto.fhirPathConstraintList = new jspb.ExtensionFieldInfo(
    244450286,
    {fhirPathConstraintList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[244450286] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirPathConstraintList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[244450286] = proto.google.fhir.proto.fhirPathConstraintList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `validReferenceTypeList`.
 * @type {!jspb.ExtensionFieldInfo<!Array<string>>}
 */
proto.google.fhir.proto.validReferenceTypeList = new jspb.ExtensionFieldInfo(
    218884094,
    {validReferenceTypeList: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    1);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[218884094] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.validReferenceTypeList,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeRepeatedString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[218884094] = proto.google.fhir.proto.validReferenceTypeList;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `referencedFhirType`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.referencedFhirType = new jspb.ExtensionFieldInfo(
    239446062,
    {referencedFhirType: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[239446062] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.referencedFhirType,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[239446062] = proto.google.fhir.proto.referencedFhirType;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirOneofIsOptional`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.google.fhir.proto.fhirOneofIsOptional = new jspb.ExtensionFieldInfo(
    214472422,
    {fhirOneofIsOptional: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.OneofOptions.extensionsBinary[214472422] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirOneofIsOptional,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.OneofOptions.extensions[214472422] = proto.google.fhir.proto.fhirOneofIsOptional;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fhirVersion`.
 * @type {!jspb.ExtensionFieldInfo<!proto.google.fhir.proto.FhirVersion>}
 */
proto.google.fhir.proto.fhirVersion = new jspb.ExtensionFieldInfo(
    248874083,
    {fhirVersion: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FileOptions.extensionsBinary[248874083] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fhirVersion,
    jspb.BinaryReader.prototype.readEnum,
    jspb.BinaryWriter.prototype.writeEnum,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FileOptions.extensions[248874083] = proto.google.fhir.proto.fhirVersion;

goog.object.extend(exports, proto.google.fhir.proto);
