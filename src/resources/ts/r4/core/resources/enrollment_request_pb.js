// source: proto/r4/core/resources/enrollment_request.proto
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
var proto_r4_core_codes_pb = require('../../../../proto/r4/core/codes_pb.js');
goog.object.extend(proto, proto_r4_core_codes_pb);
var proto_r4_core_datatypes_pb = require('../../../../proto/r4/core/datatypes_pb.js');
goog.object.extend(proto, proto_r4_core_datatypes_pb);
goog.exportSymbol('proto.google.fhir.r4.core.EnrollmentRequest', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.EnrollmentRequest.StatusCode', null, global);
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
proto.google.fhir.r4.core.EnrollmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.EnrollmentRequest.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.EnrollmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.EnrollmentRequest.displayName = 'proto.google.fhir.r4.core.EnrollmentRequest';
}
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
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.EnrollmentRequest.StatusCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.displayName = 'proto.google.fhir.r4.core.EnrollmentRequest.StatusCode';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.EnrollmentRequest.repeatedFields_ = [6,8,9,10];



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
proto.google.fhir.r4.core.EnrollmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.EnrollmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.EnrollmentRequest.toObject = function(includeInstance, msg) {
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
    status: (f = msg.getStatus()) && proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && proto_r4_core_datatypes_pb.DateTime.toObject(includeInstance, f),
    insurer: (f = msg.getInsurer()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    provider: (f = msg.getProvider()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    candidate: (f = msg.getCandidate()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    coverage: (f = msg.getCoverage()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest}
 */
proto.google.fhir.r4.core.EnrollmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.EnrollmentRequest;
  return proto.google.fhir.r4.core.EnrollmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest}
 */
proto.google.fhir.r4.core.EnrollmentRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.fhir.r4.core.EnrollmentRequest.StatusCode;
      reader.readMessage(value,proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.DateTime;
      reader.readMessage(value,proto_r4_core_datatypes_pb.DateTime.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setInsurer(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setCandidate(value);
      break;
    case 16:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setCoverage(value);
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
proto.google.fhir.r4.core.EnrollmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.EnrollmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.EnrollmentRequest.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getInsurer();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getCandidate();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getCoverage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.EnrollmentRequest.StatusCode;
  return proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.FinancialResourceStatusCode.Value} */ (reader.readEnum());
      msg.setValue(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
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
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
};


/**
 * optional FinancialResourceStatusCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.FinancialResourceStatusCode.Value}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.FinancialResourceStatusCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.FinancialResourceStatusCode.Value} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.StatusCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional Id id = 1;
 * @return {?proto.google.fhir.r4.core.Id}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.Id} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Id, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Id|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Meta meta = 2;
 * @return {?proto.google.fhir.r4.core.Meta}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getMeta = function() {
  return /** @type{?proto.google.fhir.r4.core.Meta} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Meta, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Meta|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uri implicit_rules = 3;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getImplicitRules = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setImplicitRules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearImplicitRules = function() {
  return this.setImplicitRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasImplicitRules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Code language = 4;
 * @return {?proto.google.fhir.r4.core.Code}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.Code} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Code, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Code|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Narrative text = 5;
 * @return {?proto.google.fhir.r4.core.Narrative}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getText = function() {
  return /** @type{?proto.google.fhir.r4.core.Narrative} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Narrative, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Narrative|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated google.protobuf.Any contained = 6;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getContainedList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setContainedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.addContained = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearContainedList = function() {
  return this.setContainedList([]);
};


/**
 * repeated Extension extension = 8;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 9;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated Identifier identifier = 10;
 * @return {!Array<!proto.google.fhir.r4.core.Identifier>}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getIdentifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Identifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Identifier>} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setIdentifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Identifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.addIdentifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.Identifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearIdentifierList = function() {
  return this.setIdentifierList([]);
};


/**
 * optional StatusCode status = 11;
 * @return {?proto.google.fhir.r4.core.EnrollmentRequest.StatusCode}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getStatus = function() {
  return /** @type{?proto.google.fhir.r4.core.EnrollmentRequest.StatusCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.EnrollmentRequest.StatusCode, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.EnrollmentRequest.StatusCode|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional DateTime created = 12;
 * @return {?proto.google.fhir.r4.core.DateTime}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getCreated = function() {
  return /** @type{?proto.google.fhir.r4.core.DateTime} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.DateTime, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.DateTime|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Reference insurer = 13;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getInsurer = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setInsurer = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearInsurer = function() {
  return this.setInsurer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasInsurer = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Reference provider = 14;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getProvider = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Reference candidate = 15;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getCandidate = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setCandidate = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearCandidate = function() {
  return this.setCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasCandidate = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Reference coverage = 16;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.getCoverage = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 16));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
*/
proto.google.fhir.r4.core.EnrollmentRequest.prototype.setCoverage = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.EnrollmentRequest} returns this
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.clearCoverage = function() {
  return this.setCoverage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.EnrollmentRequest.prototype.hasCoverage = function() {
  return jspb.Message.getField(this, 16) != null;
};


goog.object.extend(exports, proto.google.fhir.r4.core);