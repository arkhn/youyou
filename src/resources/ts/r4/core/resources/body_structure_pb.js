// source: proto/r4/core/resources/body_structure.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var proto_annotations_pb = require('../../../../proto/annotations_pb.js');
goog.object.extend(proto, proto_annotations_pb);
var proto_r4_core_datatypes_pb = require('../../../../proto/r4/core/datatypes_pb.js');
goog.object.extend(proto, proto_r4_core_datatypes_pb);
goog.exportSymbol('proto.google.fhir.r4.core.BodyStructure', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.fhir.r4.core.BodyStructure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.BodyStructure.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.BodyStructure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.BodyStructure.displayName = 'proto.google.fhir.r4.core.BodyStructure';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.BodyStructure.repeatedFields_ = [6,8,9,10,14,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.BodyStructure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.BodyStructure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.BodyStructure.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.Id.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto_r4_core_datatypes_pb.Meta.toObject(includeInstance, f),
    implicitRules: (f = msg.getImplicitRules()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f),
    language: (f = msg.getLanguage()) && proto_r4_core_datatypes_pb.Code.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto_r4_core_datatypes_pb.Narrative.toObject(includeInstance, f),
    containedList: jspb.Message.toObjectList(msg.getContainedList(),
    google_protobuf_any_pb.Any.toObject, includeInstance),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    identifierList: jspb.Message.toObjectList(msg.getIdentifierList(),
    proto_r4_core_datatypes_pb.Identifier.toObject, includeInstance),
    active: (f = msg.getActive()) && proto_r4_core_datatypes_pb.Boolean.toObject(includeInstance, f),
    morphology: (f = msg.getMorphology()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    locationQualifierList: jspb.Message.toObjectList(msg.getLocationQualifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    description: (f = msg.getDescription()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    imageList: jspb.Message.toObjectList(msg.getImageList(),
    proto_r4_core_datatypes_pb.Attachment.toObject, includeInstance),
    patient: (f = msg.getPatient()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.fhir.r4.core.BodyStructure}
 */
proto.google.fhir.r4.core.BodyStructure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.BodyStructure;
  return proto.google.fhir.r4.core.BodyStructure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.BodyStructure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.BodyStructure}
 */
proto.google.fhir.r4.core.BodyStructure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Id;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Meta;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Meta.deserializeBinaryFromReader);
      msg.setMeta(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Uri;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Uri.deserializeBinaryFromReader);
      msg.setImplicitRules(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.Code;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Code.deserializeBinaryFromReader);
      msg.setLanguage(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Narrative;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Narrative.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 6:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.addContained(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.Identifier;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Identifier.deserializeBinaryFromReader);
      msg.addIdentifier(value);
      break;
    case 11:
      var value = new proto_r4_core_datatypes_pb.Boolean;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setActive(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setMorphology(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addLocationQualifier(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 16:
      var value = new proto_r4_core_datatypes_pb.Attachment;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Attachment.deserializeBinaryFromReader);
      msg.addImage(value);
      break;
    case 17:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setPatient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.BodyStructure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.BodyStructure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.BodyStructure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Meta.serializeBinaryToWriter
    );
  }
  f = message.getImplicitRules();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Narrative.serializeBinaryToWriter
    );
  }
  f = message.getContainedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getIdentifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getActive();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getMorphology();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getLocationQualifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getImageList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto_r4_core_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getPatient();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.google.fhir.r4.core.Id}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.Id} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Id, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Id|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Meta meta = 2;
 * @return {?proto.google.fhir.r4.core.Meta}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getMeta = function() {
  return /** @type{?proto.google.fhir.r4.core.Meta} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Meta, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Meta|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uri implicit_rules = 3;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getImplicitRules = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setImplicitRules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearImplicitRules = function() {
  return this.setImplicitRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasImplicitRules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Code language = 4;
 * @return {?proto.google.fhir.r4.core.Code}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.Code} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Code, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Code|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Narrative text = 5;
 * @return {?proto.google.fhir.r4.core.Narrative}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getText = function() {
  return /** @type{?proto.google.fhir.r4.core.Narrative} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Narrative, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Narrative|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated google.protobuf.Any contained = 6;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getContainedList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setContainedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addContained = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearContainedList = function() {
  return this.setContainedList([]);
};


/**
 * repeated Extension extension = 8;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 9;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated Identifier identifier = 10;
 * @return {!Array<!proto.google.fhir.r4.core.Identifier>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getIdentifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Identifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Identifier>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setIdentifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Identifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addIdentifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.Identifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearIdentifierList = function() {
  return this.setIdentifierList([]);
};


/**
 * optional Boolean active = 11;
 * @return {?proto.google.fhir.r4.core.Boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getActive = function() {
  return /** @type{?proto.google.fhir.r4.core.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Boolean, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.Boolean|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setActive = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearActive = function() {
  return this.setActive(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasActive = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CodeableConcept morphology = 12;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getMorphology = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setMorphology = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearMorphology = function() {
  return this.setMorphology(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasMorphology = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CodeableConcept location = 13;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated CodeableConcept location_qualifier = 14;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getLocationQualifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 14));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setLocationQualifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addLocationQualifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearLocationQualifierList = function() {
  return this.setLocationQualifierList([]);
};


/**
 * optional String description = 15;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getDescription = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * repeated Attachment image = 16;
 * @return {!Array<!proto.google.fhir.r4.core.Attachment>}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getImageList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Attachment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Attachment, 16));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Attachment>} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setImageList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Attachment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Attachment}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.addImage = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.google.fhir.r4.core.Attachment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearImageList = function() {
  return this.setImageList([]);
};


/**
 * optional Reference patient = 17;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.getPatient = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 17));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
*/
proto.google.fhir.r4.core.BodyStructure.prototype.setPatient = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.BodyStructure} returns this
 */
proto.google.fhir.r4.core.BodyStructure.prototype.clearPatient = function() {
  return this.setPatient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.BodyStructure.prototype.hasPatient = function() {
  return jspb.Message.getField(this, 17) != null;
};


goog.object.extend(exports, proto.google.fhir.r4.core);
