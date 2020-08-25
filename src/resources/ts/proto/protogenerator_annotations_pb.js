// source: proto/protogenerator_annotations.proto
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
goog.exportSymbol('proto.google.fhir.proto.fieldDescription', null, global);
goog.exportSymbol('proto.google.fhir.proto.messageDescription', null, global);
goog.exportSymbol('proto.google.fhir.proto.reservedReason', null, global);

/**
 * A tuple of {field number, class constructor} for the extension
 * field named `messageDescription`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.messageDescription = new jspb.ExtensionFieldInfo(
    190563156,
    {messageDescription: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[190563156] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.messageDescription,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[190563156] = proto.google.fhir.proto.messageDescription;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `fieldDescription`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.fieldDescription = new jspb.ExtensionFieldInfo(
    190357977,
    {fieldDescription: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[190357977] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.fieldDescription,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[190357977] = proto.google.fhir.proto.fieldDescription;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `reservedReason`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.google.fhir.proto.reservedReason = new jspb.ExtensionFieldInfo(
    248408866,
    {reservedReason: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[248408866] = new jspb.ExtensionFieldBinaryInfo(
    proto.google.fhir.proto.reservedReason,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[248408866] = proto.google.fhir.proto.reservedReason;

goog.object.extend(exports, proto.google.fhir.proto);
