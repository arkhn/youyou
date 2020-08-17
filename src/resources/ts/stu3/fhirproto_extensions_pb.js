// source: proto/stu3/fhirproto_extensions.proto
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

var proto_annotations_pb = require('../../proto/annotations_pb.js');
goog.object.extend(proto, proto_annotations_pb);
var proto_stu3_datatypes_pb = require('../../proto/stu3/datatypes_pb.js');
goog.object.extend(proto, proto_stu3_datatypes_pb);
goog.exportSymbol('proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride', null, global);
goog.exportSymbol('proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue', null, global);
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
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.displayName = 'proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue';
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
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.displayName = 'proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride';
}



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
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
    valueBoolean: (f = msg.getValueBoolean()) && proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue;
  return proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_stu3_datatypes_pb.String;
      reader.readMessage(value,proto_stu3_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 3:
      var value = new proto_stu3_datatypes_pb.Boolean;
      reader.readMessage(value,proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setValueBoolean(value);
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
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getValueBoolean();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.fhir.stu3.proto.String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.getId = function() {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (
    jspb.Message.getWrapperField(this, proto_stu3_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} returns this
*/
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} returns this
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.fhir.stu3.proto.Boolean value_boolean = 3;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.getValueBoolean = function() {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_stu3_datatypes_pb.Boolean, 3));
};


/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} returns this
*/
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.setValueBoolean = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue} returns this
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.clearValueBoolean = function() {
  return this.setValueBoolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.fhirproto.PrimitiveHasNoValue.prototype.hasValueBoolean = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
    separator: (f = msg.getSeparator()) && proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
    stride: (f = msg.getStride()) && proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride;
  return proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_stu3_datatypes_pb.String;
      reader.readMessage(value,proto_stu3_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 4:
      var value = new proto_stu3_datatypes_pb.String;
      reader.readMessage(value,proto_stu3_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setSeparator(value);
      break;
    case 5:
      var value = new proto_stu3_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setStride(value);
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
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getSeparator();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getStride();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.fhir.stu3.proto.String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.getId = function() {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (
    jspb.Message.getWrapperField(this, proto_stu3_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
*/
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.fhir.stu3.proto.String separator = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.getSeparator = function() {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (
    jspb.Message.getWrapperField(this, proto_stu3_datatypes_pb.String, 4));
};


/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
*/
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.setSeparator = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.clearSeparator = function() {
  return this.setSeparator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.hasSeparator = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.fhir.stu3.proto.PositiveInt stride = 5;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.getStride = function() {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_stu3_datatypes_pb.PositiveInt, 5));
};


/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
*/
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.setStride = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride} returns this
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.clearStride = function() {
  return this.setStride(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.fhirproto.Base64BinarySeparatorStride.prototype.hasStride = function() {
  return jspb.Message.getField(this, 5) != null;
};


goog.object.extend(exports, proto.google.fhir.stu3.fhirproto);
