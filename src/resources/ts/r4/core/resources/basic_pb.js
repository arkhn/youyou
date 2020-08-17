// source: proto/r4/core/resources/basic.proto
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
goog.exportSymbol('proto.google.fhir.r4.core.Basic', null, global);
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
proto.google.fhir.r4.core.Basic = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Basic.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Basic, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Basic.displayName = 'proto.google.fhir.r4.core.Basic';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Basic.repeatedFields_ = [6,8,9,10];



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
proto.google.fhir.r4.core.Basic.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Basic.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Basic} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Basic.toObject = function(includeInstance, msg) {
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
    code: (f = msg.getCode()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    subject: (f = msg.getSubject()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    author: (f = msg.getAuthor()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Basic}
 */
proto.google.fhir.r4.core.Basic.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Basic;
  return proto.google.fhir.r4.core.Basic.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Basic} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Basic}
 */
proto.google.fhir.r4.core.Basic.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCode(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setSubject(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setAuthor(value);
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
proto.google.fhir.r4.core.Basic.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Basic.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Basic} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Basic.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getAuthor();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.google.fhir.r4.core.Id}
 */
proto.google.fhir.r4.core.Basic.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.Id} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Id, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Id|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Meta meta = 2;
 * @return {?proto.google.fhir.r4.core.Meta}
 */
proto.google.fhir.r4.core.Basic.prototype.getMeta = function() {
  return /** @type{?proto.google.fhir.r4.core.Meta} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Meta, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Meta|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uri implicit_rules = 3;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Basic.prototype.getImplicitRules = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setImplicitRules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearImplicitRules = function() {
  return this.setImplicitRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasImplicitRules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Code language = 4;
 * @return {?proto.google.fhir.r4.core.Code}
 */
proto.google.fhir.r4.core.Basic.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.Code} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Code, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Code|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Narrative text = 5;
 * @return {?proto.google.fhir.r4.core.Narrative}
 */
proto.google.fhir.r4.core.Basic.prototype.getText = function() {
  return /** @type{?proto.google.fhir.r4.core.Narrative} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Narrative, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Narrative|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated google.protobuf.Any contained = 6;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.google.fhir.r4.core.Basic.prototype.getContainedList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setContainedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.google.fhir.r4.core.Basic.prototype.addContained = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearContainedList = function() {
  return this.setContainedList([]);
};


/**
 * repeated Extension extension = 8;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Basic.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Basic.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 9;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Basic.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Basic.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated Identifier identifier = 10;
 * @return {!Array<!proto.google.fhir.r4.core.Identifier>}
 */
proto.google.fhir.r4.core.Basic.prototype.getIdentifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Identifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Identifier>} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setIdentifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Identifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.Basic.prototype.addIdentifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.Identifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearIdentifierList = function() {
  return this.setIdentifierList([]);
};


/**
 * optional CodeableConcept code = 11;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.Basic.prototype.getCode = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasCode = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Reference subject = 12;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.Basic.prototype.getSubject = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setSubject = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearSubject = function() {
  return this.setSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasSubject = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Date created = 13;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.Basic.prototype.getCreated = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Reference author = 14;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.Basic.prototype.getAuthor = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.Basic} returns this
*/
proto.google.fhir.r4.core.Basic.prototype.setAuthor = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Basic} returns this
 */
proto.google.fhir.r4.core.Basic.prototype.clearAuthor = function() {
  return this.setAuthor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Basic.prototype.hasAuthor = function() {
  return jspb.Message.getField(this, 14) != null;
};


goog.object.extend(exports, proto.google.fhir.r4.core);
