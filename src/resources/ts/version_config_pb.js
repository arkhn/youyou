// source: proto/version_config.proto
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

goog.exportSymbol('proto.google.fhir.proto.ResourceConfig', null, global);
goog.exportSymbol('proto.google.fhir.proto.ResourceConfig.TimestampOverride', null, global);
goog.exportSymbol('proto.google.fhir.proto.VersionConfig', null, global);
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
proto.google.fhir.proto.ResourceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.proto.ResourceConfig.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.proto.ResourceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.proto.ResourceConfig.displayName = 'proto.google.fhir.proto.ResourceConfig';
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
proto.google.fhir.proto.ResourceConfig.TimestampOverride = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.proto.ResourceConfig.TimestampOverride.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.proto.ResourceConfig.TimestampOverride, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.proto.ResourceConfig.TimestampOverride.displayName = 'proto.google.fhir.proto.ResourceConfig.TimestampOverride';
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
proto.google.fhir.proto.VersionConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.fhir.proto.VersionConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.proto.VersionConfig.displayName = 'proto.google.fhir.proto.VersionConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.proto.ResourceConfig.repeatedFields_ = [1,5];



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
proto.google.fhir.proto.ResourceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.proto.ResourceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.proto.ResourceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.ResourceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultTimestampFieldsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    timestampOverrideList: jspb.Message.toObjectList(msg.getTimestampOverrideList(),
    proto.google.fhir.proto.ResourceConfig.TimestampOverride.toObject, includeInstance)
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
 * @return {!proto.google.fhir.proto.ResourceConfig}
 */
proto.google.fhir.proto.ResourceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.proto.ResourceConfig;
  return proto.google.fhir.proto.ResourceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.proto.ResourceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.proto.ResourceConfig}
 */
proto.google.fhir.proto.ResourceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addDefaultTimestampFields(value);
      break;
    case 5:
      var value = new proto.google.fhir.proto.ResourceConfig.TimestampOverride;
      reader.readMessage(value,proto.google.fhir.proto.ResourceConfig.TimestampOverride.deserializeBinaryFromReader);
      msg.addTimestampOverride(value);
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
proto.google.fhir.proto.ResourceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.proto.ResourceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.proto.ResourceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.ResourceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultTimestampFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTimestampOverrideList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.fhir.proto.ResourceConfig.TimestampOverride.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.repeatedFields_ = [2];



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
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.proto.ResourceConfig.TimestampOverride.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampField: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceFieldList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride}
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.proto.ResourceConfig.TimestampOverride;
  return proto.google.fhir.proto.ResourceConfig.TimestampOverride.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride}
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestampField(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addResourceField(value);
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
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.proto.ResourceConfig.TimestampOverride.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestampField();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceFieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string timestamp_field = 1;
 * @return {string}
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.getTimestampField = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} returns this
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.setTimestampField = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string resource_field = 2;
 * @return {!Array<string>}
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.getResourceFieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} returns this
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.setResourceFieldList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} returns this
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.addResourceField = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride} returns this
 */
proto.google.fhir.proto.ResourceConfig.TimestampOverride.prototype.clearResourceFieldList = function() {
  return this.setResourceFieldList([]);
};


/**
 * repeated string default_timestamp_fields = 1;
 * @return {!Array<string>}
 */
proto.google.fhir.proto.ResourceConfig.prototype.getDefaultTimestampFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.fhir.proto.ResourceConfig} returns this
 */
proto.google.fhir.proto.ResourceConfig.prototype.setDefaultTimestampFieldsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.proto.ResourceConfig} returns this
 */
proto.google.fhir.proto.ResourceConfig.prototype.addDefaultTimestampFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.proto.ResourceConfig} returns this
 */
proto.google.fhir.proto.ResourceConfig.prototype.clearDefaultTimestampFieldsList = function() {
  return this.setDefaultTimestampFieldsList([]);
};


/**
 * repeated TimestampOverride timestamp_override = 5;
 * @return {!Array<!proto.google.fhir.proto.ResourceConfig.TimestampOverride>}
 */
proto.google.fhir.proto.ResourceConfig.prototype.getTimestampOverrideList = function() {
  return /** @type{!Array<!proto.google.fhir.proto.ResourceConfig.TimestampOverride>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.proto.ResourceConfig.TimestampOverride, 5));
};


/**
 * @param {!Array<!proto.google.fhir.proto.ResourceConfig.TimestampOverride>} value
 * @return {!proto.google.fhir.proto.ResourceConfig} returns this
*/
proto.google.fhir.proto.ResourceConfig.prototype.setTimestampOverrideList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.proto.ResourceConfig.TimestampOverride=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.proto.ResourceConfig.TimestampOverride}
 */
proto.google.fhir.proto.ResourceConfig.prototype.addTimestampOverride = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.proto.ResourceConfig.TimestampOverride, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.proto.ResourceConfig} returns this
 */
proto.google.fhir.proto.ResourceConfig.prototype.clearTimestampOverrideList = function() {
  return this.setTimestampOverrideList([]);
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
proto.google.fhir.proto.VersionConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.proto.VersionConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.proto.VersionConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.VersionConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceConfigMap: (f = msg.getResourceConfigMap()) ? f.toObject(includeInstance, proto.google.fhir.proto.ResourceConfig.toObject) : []
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
 * @return {!proto.google.fhir.proto.VersionConfig}
 */
proto.google.fhir.proto.VersionConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.proto.VersionConfig;
  return proto.google.fhir.proto.VersionConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.proto.VersionConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.proto.VersionConfig}
 */
proto.google.fhir.proto.VersionConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getResourceConfigMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.fhir.proto.ResourceConfig.deserializeBinaryFromReader, "", new proto.google.fhir.proto.ResourceConfig());
         });
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
proto.google.fhir.proto.VersionConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.proto.VersionConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.proto.VersionConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.proto.VersionConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceConfigMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.fhir.proto.ResourceConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, ResourceConfig> resource_config = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.fhir.proto.ResourceConfig>}
 */
proto.google.fhir.proto.VersionConfig.prototype.getResourceConfigMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.fhir.proto.ResourceConfig>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.google.fhir.proto.ResourceConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.fhir.proto.VersionConfig} returns this
 */
proto.google.fhir.proto.VersionConfig.prototype.clearResourceConfigMap = function() {
  this.getResourceConfigMap().clear();
  return this;};


goog.object.extend(exports, proto.google.fhir.proto);
