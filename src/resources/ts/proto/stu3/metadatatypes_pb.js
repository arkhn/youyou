// source: proto/stu3/metadatatypes.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

var proto_annotations_pb = require("../../proto/annotations_pb.js");
goog.object.extend(proto, proto_annotations_pb);
var proto_stu3_codes_pb = require("../../proto/stu3/codes_pb.js");
goog.object.extend(proto, proto_stu3_codes_pb);
var proto_stu3_datatypes_pb = require("../../proto/stu3/datatypes_pb.js");
goog.object.extend(proto, proto_stu3_datatypes_pb);
goog.exportSymbol("proto.google.fhir.stu3.proto.BackboneElement", null, global);
goog.exportSymbol("proto.google.fhir.stu3.proto.ContactDetail", null, global);
goog.exportSymbol("proto.google.fhir.stu3.proto.Contributor", null, global);
goog.exportSymbol("proto.google.fhir.stu3.proto.DataRequirement", null, global);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.CodeFilter",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.ValueSetCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.DateFilter",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.ValueCase",
  null,
  global
);
goog.exportSymbol("proto.google.fhir.stu3.proto.Element", null, global);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Base",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Constraint",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.DefaultValueCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.ValueSetCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Example",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Example.Value",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.ValueCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Fixed",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Fixed.FixedCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Mapping",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.MaxValue",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.MaxValueCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.MinValue",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.MinValue.MinValueCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Pattern",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Pattern.PatternCase",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Slicing",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ElementDefinition.TypeRef",
  null,
  global
);
goog.exportSymbol("proto.google.fhir.stu3.proto.Narrative", null, global);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.ParameterDefinition",
  null,
  global
);
goog.exportSymbol("proto.google.fhir.stu3.proto.RelatedArtifact", null, global);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.TriggerDefinition",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.EventTimingCase",
  null,
  global
);
goog.exportSymbol("proto.google.fhir.stu3.proto.UsageContext", null, global);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.UsageContext.Value",
  null,
  global
);
goog.exportSymbol(
  "proto.google.fhir.stu3.proto.UsageContext.Value.ValueCase",
  null,
  global
);
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
proto.google.fhir.stu3.proto.BackboneElement = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.BackboneElement.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.BackboneElement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.BackboneElement.displayName =
    "proto.google.fhir.stu3.proto.BackboneElement";
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
proto.google.fhir.stu3.proto.ContactDetail = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ContactDetail.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.ContactDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ContactDetail.displayName =
    "proto.google.fhir.stu3.proto.ContactDetail";
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
proto.google.fhir.stu3.proto.Contributor = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.Contributor.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.Contributor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.Contributor.displayName =
    "proto.google.fhir.stu3.proto.Contributor";
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
proto.google.fhir.stu3.proto.DataRequirement = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.DataRequirement.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.DataRequirement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.DataRequirement.displayName =
    "proto.google.fhir.stu3.proto.DataRequirement";
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
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.displayName =
    "proto.google.fhir.stu3.proto.DataRequirement.CodeFilter";
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
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
      .oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.displayName =
    "proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet";
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
proto.google.fhir.stu3.proto.DataRequirement.DateFilter = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.displayName =
    "proto.google.fhir.stu3.proto.DataRequirement.DateFilter";
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
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.displayName =
    "proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value";
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
proto.google.fhir.stu3.proto.Element = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.Element.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.Element, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.Element.displayName =
    "proto.google.fhir.stu3.proto.Element";
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
proto.google.fhir.stu3.proto.ElementDefinition = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.ElementDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition";
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
proto.google.fhir.stu3.proto.ElementDefinition.Slicing = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Slicing.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Slicing";
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
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator";
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
proto.google.fhir.stu3.proto.ElementDefinition.Base = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Base.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Base,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Base.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Base";
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
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.TypeRef,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.TypeRef";
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
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue";
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
proto.google.fhir.stu3.proto.ElementDefinition.Fixed = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Fixed,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Fixed.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Fixed";
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
proto.google.fhir.stu3.proto.ElementDefinition.Pattern = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Pattern,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Pattern.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Pattern";
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
proto.google.fhir.stu3.proto.ElementDefinition.Example = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Example,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Example.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Example";
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
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Example.Value,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Example.Value";
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
proto.google.fhir.stu3.proto.ElementDefinition.MinValue = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.MinValue,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.MinValue.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.MinValue";
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
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.MaxValue,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.MaxValue";
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
proto.google.fhir.stu3.proto.ElementDefinition.Constraint = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Constraint.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Constraint,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Constraint.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Constraint";
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
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding";
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
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .ValueSet.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
    .ValueSet,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet";
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
proto.google.fhir.stu3.proto.ElementDefinition.Mapping = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ElementDefinition.Mapping.repeatedFields_,
    null
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.ElementDefinition.Mapping,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Mapping.displayName =
    "proto.google.fhir.stu3.proto.ElementDefinition.Mapping";
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
proto.google.fhir.stu3.proto.Narrative = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.Narrative.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.Narrative, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.Narrative.displayName =
    "proto.google.fhir.stu3.proto.Narrative";
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
proto.google.fhir.stu3.proto.ParameterDefinition = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.ParameterDefinition.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.ParameterDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.ParameterDefinition.displayName =
    "proto.google.fhir.stu3.proto.ParameterDefinition";
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
proto.google.fhir.stu3.proto.RelatedArtifact = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.RelatedArtifact.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.RelatedArtifact, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.RelatedArtifact.displayName =
    "proto.google.fhir.stu3.proto.RelatedArtifact";
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
proto.google.fhir.stu3.proto.TriggerDefinition = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.TriggerDefinition.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.TriggerDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.TriggerDefinition.displayName =
    "proto.google.fhir.stu3.proto.TriggerDefinition";
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
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming = function (
  opt_data
) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_
  );
};
goog.inherits(
  proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.displayName =
    "proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming";
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
proto.google.fhir.stu3.proto.UsageContext = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.google.fhir.stu3.proto.UsageContext.repeatedFields_,
    null
  );
};
goog.inherits(proto.google.fhir.stu3.proto.UsageContext, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.UsageContext.displayName =
    "proto.google.fhir.stu3.proto.UsageContext";
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
proto.google.fhir.stu3.proto.UsageContext.Value = function (opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    null,
    proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_
  );
};
goog.inherits(proto.google.fhir.stu3.proto.UsageContext.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.stu3.proto.UsageContext.Value.displayName =
    "proto.google.fhir.stu3.proto.UsageContext.Value";
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.BackboneElement.repeatedFields_ = [2, 3];

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
  proto.google.fhir.stu3.proto.BackboneElement.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.BackboneElement.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.BackboneElement} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.BackboneElement.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        modifierExtensionList: jspb.Message.toObjectList(
          msg.getModifierExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.BackboneElement}
 */
proto.google.fhir.stu3.proto.BackboneElement.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.BackboneElement();
  return proto.google.fhir.stu3.proto.BackboneElement.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.BackboneElement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.BackboneElement}
 */
proto.google.fhir.stu3.proto.BackboneElement.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addModifierExtension(value);
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
proto.google.fhir.stu3.proto.BackboneElement.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.BackboneElement.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.BackboneElement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.BackboneElement.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.getModifierExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    3
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.setModifierExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.addModifierExtension = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.BackboneElement} returns this
 */
proto.google.fhir.stu3.proto.BackboneElement.prototype.clearModifierExtensionList = function () {
  return this.setModifierExtensionList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ContactDetail.repeatedFields_ = [2, 4];

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
  proto.google.fhir.stu3.proto.ContactDetail.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ContactDetail.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ContactDetail} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ContactDetail.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        name:
          (f = msg.getName()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        telecomList: jspb.Message.toObjectList(
          msg.getTelecomList(),
          proto_stu3_datatypes_pb.ContactPoint.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.ContactDetail}
 */
proto.google.fhir.stu3.proto.ContactDetail.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ContactDetail();
  return proto.google.fhir.stu3.proto.ContactDetail.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ContactDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ContactDetail}
 */
proto.google.fhir.stu3.proto.ContactDetail.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setName(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.ContactPoint();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.ContactPoint.deserializeBinaryFromReader
        );
        msg.addTelecom(value);
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
proto.google.fhir.stu3.proto.ContactDetail.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ContactDetail.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ContactDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ContactDetail.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getTelecomList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_stu3_datatypes_pb.ContactPoint.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.setId = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String name = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.getName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.setName = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.clearName = function () {
  return this.setName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.hasName = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * repeated ContactPoint telecom = 4;
 * @return {!Array<!proto.google.fhir.stu3.proto.ContactPoint>}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.getTelecomList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ContactPoint>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.ContactPoint,
    4
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ContactPoint>} value
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.setTelecomList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ContactPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ContactPoint}
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.addTelecom = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.google.fhir.stu3.proto.ContactPoint,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ContactDetail} returns this
 */
proto.google.fhir.stu3.proto.ContactDetail.prototype.clearTelecomList = function () {
  return this.setTelecomList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.Contributor.repeatedFields_ = [2, 5];

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
  proto.google.fhir.stu3.proto.Contributor.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.Contributor.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.Contributor} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.Contributor.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.ContributorTypeCode.toObject(includeInstance, f),
        name:
          (f = msg.getName()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        contactList: jspb.Message.toObjectList(
          msg.getContactList(),
          proto.google.fhir.stu3.proto.ContactDetail.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.Contributor}
 */
proto.google.fhir.stu3.proto.Contributor.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.Contributor();
  return proto.google.fhir.stu3.proto.Contributor.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.Contributor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.Contributor}
 */
proto.google.fhir.stu3.proto.Contributor.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.ContributorTypeCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.ContributorTypeCode.deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setName(value);
        break;
      case 5:
        var value = new proto.google.fhir.stu3.proto.ContactDetail();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ContactDetail.deserializeBinaryFromReader
        );
        msg.addContact(value);
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
proto.google.fhir.stu3.proto.Contributor.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.Contributor.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.Contributor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.Contributor.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.ContributorTypeCode.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getContactList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.google.fhir.stu3.proto.ContactDetail.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.setId = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional ContributorTypeCode type = 3;
 * @return {?proto.google.fhir.stu3.proto.ContributorTypeCode}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ContributorTypeCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.ContributorTypeCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ContributorTypeCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.setType = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.hasType = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String name = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.getName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.setName = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.clearName = function () {
  return this.setName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.hasName = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * repeated ContactDetail contact = 5;
 * @return {!Array<!proto.google.fhir.stu3.proto.ContactDetail>}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.getContactList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ContactDetail>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ContactDetail,
    5
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ContactDetail>} value
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.setContactList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ContactDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ContactDetail}
 */
proto.google.fhir.stu3.proto.Contributor.prototype.addContact = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    5,
    opt_value,
    proto.google.fhir.stu3.proto.ContactDetail,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.Contributor} returns this
 */
proto.google.fhir.stu3.proto.Contributor.prototype.clearContactList = function () {
  return this.setContactList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.DataRequirement.repeatedFields_ = [2, 4, 5, 6, 7];

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
  proto.google.fhir.stu3.proto.DataRequirement.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.DataRequirement.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.DataRequirement} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.DataRequirement.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.FHIRAllTypesCode.toObject(includeInstance, f),
        profileList: jspb.Message.toObjectList(
          msg.getProfileList(),
          proto_stu3_datatypes_pb.Uri.toObject,
          includeInstance
        ),
        mustSupportList: jspb.Message.toObjectList(
          msg.getMustSupportList(),
          proto_stu3_datatypes_pb.String.toObject,
          includeInstance
        ),
        codeFilterList: jspb.Message.toObjectList(
          msg.getCodeFilterList(),
          proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.toObject,
          includeInstance
        ),
        dateFilterList: jspb.Message.toObjectList(
          msg.getDateFilterList(),
          proto.google.fhir.stu3.proto.DataRequirement.DateFilter.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.DataRequirement}
 */
proto.google.fhir.stu3.proto.DataRequirement.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.DataRequirement();
  return proto.google.fhir.stu3.proto.DataRequirement.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement}
 */
proto.google.fhir.stu3.proto.DataRequirement.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.FHIRAllTypesCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.FHIRAllTypesCode.deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.addProfile(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.addMustSupport(value);
        break;
      case 6:
        var value = new proto.google.fhir.stu3.proto.DataRequirement.CodeFilter();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.DataRequirement.CodeFilter
            .deserializeBinaryFromReader
        );
        msg.addCodeFilter(value);
        break;
      case 7:
        var value = new proto.google.fhir.stu3.proto.DataRequirement.DateFilter();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.DataRequirement.DateFilter
            .deserializeBinaryFromReader
        );
        msg.addDateFilter(value);
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
proto.google.fhir.stu3.proto.DataRequirement.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.DataRequirement.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.DataRequirement.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.FHIRAllTypesCode.serializeBinaryToWriter
    );
  }
  f = message.getProfileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getMustSupportList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getCodeFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.google.fhir.stu3.proto.DataRequirement.CodeFilter
        .serializeBinaryToWriter
    );
  }
  f = message.getDateFilterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.google.fhir.stu3.proto.DataRequirement.DateFilter
        .serializeBinaryToWriter
    );
  }
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.repeatedFields_ = [
  2,
  5,
  6,
  7
];

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
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        path:
          (f = msg.getPath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        valueSet:
          (f = msg.getValueSet()) &&
          proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.toObject(
            includeInstance,
            f
          ),
        valueCodeList: jspb.Message.toObjectList(
          msg.getValueCodeList(),
          proto_stu3_datatypes_pb.Code.toObject,
          includeInstance
        ),
        valueCodingList: jspb.Message.toObjectList(
          msg.getValueCodingList(),
          proto_stu3_datatypes_pb.Coding.toObject,
          includeInstance
        ),
        valueCodeableConceptList: jspb.Message.toObjectList(
          msg.getValueCodeableConceptList(),
          proto_stu3_datatypes_pb.CodeableConcept.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.DataRequirement.CodeFilter();
  return proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setPath(value);
        break;
      case 4:
        var value = new proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
            .deserializeBinaryFromReader
        );
        msg.setValueSet(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.addValueCode(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.addValueCoding(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.addValueCodeableConcept(value);
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
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getValueSet();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
        .serializeBinaryToWriter
    );
  }
  f = message.getValueCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getValueCodingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getValueCodeableConceptList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.oneofGroups_ = [
  [1, 2]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.ValueSetCase = {
  VALUE_SET_NOT_SET: 0,
  STRING_VALUE: 1,
  REFERENCE: 2
};

/**
 * @return {proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.ValueSetCase}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.getValueSetCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.ValueSetCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
      .oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        stringValue:
          (f = msg.getStringValue()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet();
  return proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setStringValue(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
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
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};

/**
 * optional String string_value = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.getStringValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.setStringValue = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.clearStringValue = function () {
  return this.setStringValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.hasStringValue = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet.prototype.hasReference = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String path = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getPath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setPath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearPath = function () {
  return this.setPath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.hasPath = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional ValueSet value_set = 4;
 * @return {?proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getValueSet = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.ValueSet|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setValueSet = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearValueSet = function () {
  return this.setValueSet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.hasValueSet = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * repeated Code value_code = 5;
 * @return {!Array<!proto.google.fhir.stu3.proto.Code>}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getValueCodeList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Code>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    5
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Code>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setValueCodeList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Code=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.addValueCode = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    5,
    opt_value,
    proto.google.fhir.stu3.proto.Code,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearValueCodeList = function () {
  return this.setValueCodeList([]);
};

/**
 * repeated Coding value_coding = 6;
 * @return {!Array<!proto.google.fhir.stu3.proto.Coding>}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getValueCodingList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Coding>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    6
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Coding>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setValueCodingList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Coding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.addValueCoding = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    6,
    opt_value,
    proto.google.fhir.stu3.proto.Coding,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearValueCodingList = function () {
  return this.setValueCodingList([]);
};

/**
 * repeated CodeableConcept value_codeable_concept = 7;
 * @return {!Array<!proto.google.fhir.stu3.proto.CodeableConcept>}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.getValueCodeableConceptList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.CodeableConcept>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    7
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.CodeableConcept>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.setValueCodeableConceptList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.addValueCodeableConcept = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    7,
    opt_value,
    proto.google.fhir.stu3.proto.CodeableConcept,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.CodeFilter.prototype.clearValueCodeableConceptList = function () {
  return this.setValueCodeableConceptList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.DataRequirement.DateFilter.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        path:
          (f = msg.getPath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        value:
          (f = msg.getValue()) &&
          proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.DataRequirement.DateFilter();
  return proto.google.fhir.stu3.proto.DataRequirement.DateFilter.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setPath(value);
        break;
      case 4:
        var value = new proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
            .deserializeBinaryFromReader
        );
        msg.setValue(value);
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
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
        .serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.oneofGroups_ = [
  [1, 2, 3]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.ValueCase = {
  VALUE_NOT_SET: 0,
  DATE_TIME: 1,
  PERIOD: 2,
  DURATION: 3
};

/**
 * @return {proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.ValueCase}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.getValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
      .oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        period:
          (f = msg.getPeriod()) &&
          proto_stu3_datatypes_pb.Period.toObject(includeInstance, f),
        duration:
          (f = msg.getDuration()) &&
          proto_stu3_datatypes_pb.Duration.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value();
  return proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Period();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Period.deserializeBinaryFromReader
        );
        msg.setPeriod(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Duration();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Duration.deserializeBinaryFromReader
        );
        msg.setDuration(value);
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
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Duration.serializeBinaryToWriter
    );
  }
};

/**
 * optional DateTime date_time = 1;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Period period = 2;
 * @return {?proto.google.fhir.stu3.proto.Period}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.getPeriod = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Period} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Period,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Period|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.setPeriod = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.clearPeriod = function () {
  return this.setPeriod(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.hasPeriod = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Duration duration = 3;
 * @return {?proto.google.fhir.stu3.proto.Duration}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.getDuration = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Duration} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Duration,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Duration|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.setDuration = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.clearDuration = function () {
  return this.setDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String path = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.getPath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.setPath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.clearPath = function () {
  return this.setPath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.hasPath = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Value value = 4;
 * @return {?proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.getValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DataRequirement.DateFilter.Value|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.setValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.clearValue = function () {
  return this.setValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.DateFilter.prototype.hasValue = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional FHIRAllTypesCode type = 3;
 * @return {?proto.google.fhir.stu3.proto.FHIRAllTypesCode}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.FHIRAllTypesCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.FHIRAllTypesCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.FHIRAllTypesCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setType = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.hasType = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * repeated Uri profile = 4;
 * @return {!Array<!proto.google.fhir.stu3.proto.Uri>}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getProfileList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Uri>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    4
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Uri>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setProfileList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Uri=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.addProfile = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.google.fhir.stu3.proto.Uri,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearProfileList = function () {
  return this.setProfileList([]);
};

/**
 * repeated String must_support = 5;
 * @return {!Array<!proto.google.fhir.stu3.proto.String>}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getMustSupportList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.String>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    5
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.String>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setMustSupportList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.String=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.addMustSupport = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    5,
    opt_value,
    proto.google.fhir.stu3.proto.String,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearMustSupportList = function () {
  return this.setMustSupportList([]);
};

/**
 * repeated CodeFilter code_filter = 6;
 * @return {!Array<!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter>}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getCodeFilterList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter,
    6
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setCodeFilterList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.CodeFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.addCodeFilter = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    6,
    opt_value,
    proto.google.fhir.stu3.proto.DataRequirement.CodeFilter,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearCodeFilterList = function () {
  return this.setCodeFilterList([]);
};

/**
 * repeated DateFilter date_filter = 7;
 * @return {!Array<!proto.google.fhir.stu3.proto.DataRequirement.DateFilter>}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.getDateFilterList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.DataRequirement.DateFilter>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter,
    7
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.DataRequirement.DateFilter>} value
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.setDateFilterList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.DataRequirement.DateFilter}
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.addDateFilter = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    7,
    opt_value,
    proto.google.fhir.stu3.proto.DataRequirement.DateFilter,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.DataRequirement} returns this
 */
proto.google.fhir.stu3.proto.DataRequirement.prototype.clearDateFilterList = function () {
  return this.setDateFilterList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.Element.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.Element.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.Element.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.Element} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.Element.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.Element}
 */
proto.google.fhir.stu3.proto.Element.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.Element();
  return proto.google.fhir.stu3.proto.Element.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.Element} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.Element}
 */
proto.google.fhir.stu3.proto.Element.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
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
proto.google.fhir.stu3.proto.Element.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.Element.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.Element} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.Element.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.Element.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Element} returns this
 */
proto.google.fhir.stu3.proto.Element.prototype.setId = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Element} returns this
 */
proto.google.fhir.stu3.proto.Element.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Element.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.Element.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.Element} returns this
 */
proto.google.fhir.stu3.proto.Element.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.Element.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.Element} returns this
 */
proto.google.fhir.stu3.proto.Element.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.repeatedFields_ = [
  2,
  4,
  7,
  13,
  18,
  24,
  28,
  29,
  34
];

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
  proto.google.fhir.stu3.proto.ElementDefinition.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        path:
          (f = msg.getPath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        representationList: jspb.Message.toObjectList(
          msg.getRepresentationList(),
          proto_stu3_codes_pb.PropertyRepresentationCode.toObject,
          includeInstance
        ),
        sliceName:
          (f = msg.getSliceName()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        label:
          (f = msg.getLabel()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        codeList: jspb.Message.toObjectList(
          msg.getCodeList(),
          proto_stu3_datatypes_pb.Coding.toObject,
          includeInstance
        ),
        slicing:
          (f = msg.getSlicing()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.Slicing.toObject(
            includeInstance,
            f
          ),
        short:
          (f = msg.getShort()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        definition:
          (f = msg.getDefinition()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        comment:
          (f = msg.getComment()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        requirements:
          (f = msg.getRequirements()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        aliasList: jspb.Message.toObjectList(
          msg.getAliasList(),
          proto_stu3_datatypes_pb.String.toObject,
          includeInstance
        ),
        min:
          (f = msg.getMin()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        max:
          (f = msg.getMax()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        base:
          (f = msg.getBase()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.Base.toObject(
            includeInstance,
            f
          ),
        contentReference:
          (f = msg.getContentReference()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        typeList: jspb.Message.toObjectList(
          msg.getTypeList(),
          proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.toObject,
          includeInstance
        ),
        defaultValue:
          (f = msg.getDefaultValue()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.toObject(
            includeInstance,
            f
          ),
        meaningWhenMissing:
          (f = msg.getMeaningWhenMissing()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        orderMeaning:
          (f = msg.getOrderMeaning()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        fixed:
          (f = msg.getFixed()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.Fixed.toObject(
            includeInstance,
            f
          ),
        pattern:
          (f = msg.getPattern()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.Pattern.toObject(
            includeInstance,
            f
          ),
        exampleList: jspb.Message.toObjectList(
          msg.getExampleList(),
          proto.google.fhir.stu3.proto.ElementDefinition.Example.toObject,
          includeInstance
        ),
        minValue:
          (f = msg.getMinValue()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.MinValue.toObject(
            includeInstance,
            f
          ),
        maxValue:
          (f = msg.getMaxValue()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.toObject(
            includeInstance,
            f
          ),
        maxLength:
          (f = msg.getMaxLength()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        conditionList: jspb.Message.toObjectList(
          msg.getConditionList(),
          proto_stu3_datatypes_pb.Id.toObject,
          includeInstance
        ),
        constraintList: jspb.Message.toObjectList(
          msg.getConstraintList(),
          proto.google.fhir.stu3.proto.ElementDefinition.Constraint.toObject,
          includeInstance
        ),
        mustSupport:
          (f = msg.getMustSupport()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        isModifier:
          (f = msg.getIsModifier()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        isSummary:
          (f = msg.getIsSummary()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        binding:
          (f = msg.getBinding()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.toObject(
            includeInstance,
            f
          ),
        mappingList: jspb.Message.toObjectList(
          msg.getMappingList(),
          proto.google.fhir.stu3.proto.ElementDefinition.Mapping.toObject,
          includeInstance
        )
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition}
 */
proto.google.fhir.stu3.proto.ElementDefinition.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition();
  return proto.google.fhir.stu3.proto.ElementDefinition.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition}
 */
proto.google.fhir.stu3.proto.ElementDefinition.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setPath(value);
        break;
      case 4:
        var value = new proto_stu3_codes_pb.PropertyRepresentationCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.PropertyRepresentationCode
            .deserializeBinaryFromReader
        );
        msg.addRepresentation(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setSliceName(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setLabel(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.addCode(value);
        break;
      case 8:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Slicing();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Slicing
            .deserializeBinaryFromReader
        );
        msg.setSlicing(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setShort(value);
        break;
      case 10:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setDefinition(value);
        break;
      case 11:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setComment(value);
        break;
      case 12:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setRequirements(value);
        break;
      case 13:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.addAlias(value);
        break;
      case 14:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setMin(value);
        break;
      case 15:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setMax(value);
        break;
      case 16:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Base();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Base
            .deserializeBinaryFromReader
        );
        msg.setBase(value);
        break;
      case 17:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setContentReference(value);
        break;
      case 18:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.TypeRef();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.TypeRef
            .deserializeBinaryFromReader
        );
        msg.addType(value);
        break;
      case 19:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue
            .deserializeBinaryFromReader
        );
        msg.setDefaultValue(value);
        break;
      case 20:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setMeaningWhenMissing(value);
        break;
      case 21:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setOrderMeaning(value);
        break;
      case 22:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Fixed();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Fixed
            .deserializeBinaryFromReader
        );
        msg.setFixed(value);
        break;
      case 23:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Pattern();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Pattern
            .deserializeBinaryFromReader
        );
        msg.setPattern(value);
        break;
      case 24:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Example();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Example
            .deserializeBinaryFromReader
        );
        msg.addExample(value);
        break;
      case 25:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.MinValue();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.MinValue
            .deserializeBinaryFromReader
        );
        msg.setMinValue(value);
        break;
      case 26:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.MaxValue();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.MaxValue
            .deserializeBinaryFromReader
        );
        msg.setMaxValue(value);
        break;
      case 27:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setMaxLength(value);
        break;
      case 28:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.addCondition(value);
        break;
      case 29:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Constraint();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Constraint
            .deserializeBinaryFromReader
        );
        msg.addConstraint(value);
        break;
      case 30:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setMustSupport(value);
        break;
      case 31:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setIsModifier(value);
        break;
      case 32:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setIsSummary(value);
        break;
      case 33:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition
            .ElementDefinitionBinding.deserializeBinaryFromReader
        );
        msg.setBinding(value);
        break;
      case 34:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Mapping();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Mapping
            .deserializeBinaryFromReader
        );
        msg.addMapping(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getRepresentationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_stu3_codes_pb.PropertyRepresentationCode.serializeBinaryToWriter
    );
  }
  f = message.getSliceName();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getSlicing();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Slicing
        .serializeBinaryToWriter
    );
  }
  f = message.getShort();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getDefinition();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getRequirements();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getAliasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getMin();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getBase();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Base
        .serializeBinaryToWriter
    );
  }
  f = message.getContentReference();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.TypeRef
        .serializeBinaryToWriter
    );
  }
  f = message.getDefaultValue();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue
        .serializeBinaryToWriter
    );
  }
  f = message.getMeaningWhenMissing();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getOrderMeaning();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getFixed();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Fixed
        .serializeBinaryToWriter
    );
  }
  f = message.getPattern();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Pattern
        .serializeBinaryToWriter
    );
  }
  f = message.getExampleList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Example
        .serializeBinaryToWriter
    );
  }
  f = message.getMinValue();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.MinValue
        .serializeBinaryToWriter
    );
  }
  f = message.getMaxValue();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.MaxValue
        .serializeBinaryToWriter
    );
  }
  f = message.getMaxLength();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getConditionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      28,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getConstraintList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      29,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Constraint
        .serializeBinaryToWriter
    );
  }
  f = message.getMustSupport();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getIsModifier();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getIsSummary();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getBinding();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
        .serializeBinaryToWriter
    );
  }
  f = message.getMappingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      34,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Mapping
        .serializeBinaryToWriter
    );
  }
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.repeatedFields_ = [2, 3];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Slicing.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        discriminatorList: jspb.Message.toObjectList(
          msg.getDiscriminatorList(),
          proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator
            .toObject,
          includeInstance
        ),
        description:
          (f = msg.getDescription()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        ordered:
          (f = msg.getOrdered()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        rules:
          (f = msg.getRules()) &&
          proto_stu3_codes_pb.SlicingRulesCode.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Slicing();
  return proto.google.fhir.stu3.proto.ElementDefinition.Slicing.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator
            .deserializeBinaryFromReader
        );
        msg.addDiscriminator(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setDescription(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setOrdered(value);
        break;
      case 6:
        var value = new proto_stu3_codes_pb.SlicingRulesCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.SlicingRulesCode.deserializeBinaryFromReader
        );
        msg.setRules(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getDiscriminatorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator
        .serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getOrdered();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getRules();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_codes_pb.SlicingRulesCode.serializeBinaryToWriter
    );
  }
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.repeatedFields_ = [
  2
];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.DiscriminatorTypeCode.toObject(
            includeInstance,
            f
          ),
        path:
          (f = msg.getPath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator();
  return proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.DiscriminatorTypeCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.DiscriminatorTypeCode.deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setPath(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.DiscriminatorTypeCode.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional DiscriminatorTypeCode type = 3;
 * @return {?proto.google.fhir.stu3.proto.DiscriminatorTypeCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DiscriminatorTypeCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.DiscriminatorTypeCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DiscriminatorTypeCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.setType = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.hasType = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String path = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.getPath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.setPath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.clearPath = function () {
  return this.setPath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator.prototype.hasPath = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * repeated Discriminator discriminator = 3;
 * @return {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getDiscriminatorList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator,
    3
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setDiscriminatorList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.addDiscriminator = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.google.fhir.stu3.proto.ElementDefinition.Slicing.Discriminator,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearDiscriminatorList = function () {
  return this.setDiscriminatorList([]);
};

/**
 * optional String description = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getDescription = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setDescription = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearDescription = function () {
  return this.setDescription(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.hasDescription = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Boolean ordered = 5;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getOrdered = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setOrdered = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearOrdered = function () {
  return this.setOrdered(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.hasOrdered = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional SlicingRulesCode rules = 6;
 * @return {?proto.google.fhir.stu3.proto.SlicingRulesCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.getRules = function () {
  return /** @type{?proto.google.fhir.stu3.proto.SlicingRulesCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.SlicingRulesCode,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.SlicingRulesCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.setRules = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Slicing} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.clearRules = function () {
  return this.setRules(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Slicing.prototype.hasRules = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Base.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Base} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Base.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        path:
          (f = msg.getPath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        min:
          (f = msg.getMin()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        max:
          (f = msg.getMax()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Base();
  return proto.google.fhir.stu3.proto.ElementDefinition.Base.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Base} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setPath(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setMin(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setMax(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Base.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Base} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getMin();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String path = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.getPath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.setPath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.clearPath = function () {
  return this.setPath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.hasPath = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional UnsignedInt min = 4;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.getMin = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.setMin = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.clearMin = function () {
  return this.setMin(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.hasMin = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String max = 5;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.getMax = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.setMax = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Base} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.clearMax = function () {
  return this.setMax(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Base.prototype.hasMax = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.repeatedFields_ = [2, 6];

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
  proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        profile:
          (f = msg.getProfile()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        targetProfile:
          (f = msg.getTargetProfile()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        aggregationList: jspb.Message.toObjectList(
          msg.getAggregationList(),
          proto_stu3_codes_pb.AggregationModeCode.toObject,
          includeInstance
        ),
        versioning:
          (f = msg.getVersioning()) &&
          proto_stu3_codes_pb.ReferenceVersionRulesCode.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.TypeRef();
  return proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setProfile(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setTargetProfile(value);
        break;
      case 6:
        var value = new proto_stu3_codes_pb.AggregationModeCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.AggregationModeCode.deserializeBinaryFromReader
        );
        msg.addAggregation(value);
        break;
      case 7:
        var value = new proto_stu3_codes_pb.ReferenceVersionRulesCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.ReferenceVersionRulesCode
            .deserializeBinaryFromReader
        );
        msg.setVersioning(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getTargetProfile();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getAggregationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_stu3_codes_pb.AggregationModeCode.serializeBinaryToWriter
    );
  }
  f = message.getVersioning();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_codes_pb.ReferenceVersionRulesCode.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional Uri code = 3;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setCode = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Uri profile = 4;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getProfile = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setProfile = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearProfile = function () {
  return this.setProfile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.hasProfile = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Uri target_profile = 5;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getTargetProfile = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setTargetProfile = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearTargetProfile = function () {
  return this.setTargetProfile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.hasTargetProfile = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * repeated AggregationModeCode aggregation = 6;
 * @return {!Array<!proto.google.fhir.stu3.proto.AggregationModeCode>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getAggregationList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.AggregationModeCode>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_codes_pb.AggregationModeCode,
    6
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.AggregationModeCode>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setAggregationList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.AggregationModeCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.AggregationModeCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.addAggregation = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    6,
    opt_value,
    proto.google.fhir.stu3.proto.AggregationModeCode,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearAggregationList = function () {
  return this.setAggregationList([]);
};

/**
 * optional ReferenceVersionRulesCode versioning = 7;
 * @return {?proto.google.fhir.stu3.proto.ReferenceVersionRulesCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.getVersioning = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ReferenceVersionRulesCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.ReferenceVersionRulesCode,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ReferenceVersionRulesCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.setVersioning = function (
  value
) {
  return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.clearVersioning = function () {
  return this.setVersioning(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.TypeRef.prototype.hasVersioning = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_ = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38
  ]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.DefaultValueCase = {
  DEFAULT_VALUE_NOT_SET: 0,
  BASE64_BINARY: 1,
  BOOLEAN: 2,
  CODE: 3,
  DATE: 4,
  DATE_TIME: 5,
  DECIMAL: 6,
  ID: 7,
  INSTANT: 8,
  INTEGER: 9,
  MARKDOWN: 10,
  OID: 11,
  POSITIVE_INT: 12,
  STRING_VALUE: 13,
  TIME: 14,
  UNSIGNED_INT: 15,
  URI: 16,
  ADDRESS: 17,
  AGE: 18,
  ANNOTATION: 19,
  ATTACHMENT: 20,
  CODEABLE_CONCEPT: 21,
  CODING: 22,
  CONTACT_POINT: 23,
  COUNT: 24,
  DISTANCE: 25,
  DURATION: 26,
  HUMAN_NAME: 27,
  IDENTIFIER: 28,
  MONEY: 29,
  PERIOD: 30,
  QUANTITY: 31,
  RANGE: 32,
  RATIO: 33,
  REFERENCE: 34,
  SAMPLED_DATA: 35,
  SIGNATURE: 36,
  TIMING: 37,
  META: 38
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.DefaultValueCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDefaultValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.DefaultValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        base64Binary:
          (f = msg.getBase64Binary()) &&
          proto_stu3_datatypes_pb.Base64Binary.toObject(includeInstance, f),
        pb_boolean:
          (f = msg.getBoolean()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Code.toObject(includeInstance, f),
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        markdown:
          (f = msg.getMarkdown()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        oid:
          (f = msg.getOid()) &&
          proto_stu3_datatypes_pb.Oid.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        stringValue:
          (f = msg.getStringValue()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        uri:
          (f = msg.getUri()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        address:
          (f = msg.getAddress()) &&
          proto_stu3_datatypes_pb.Address.toObject(includeInstance, f),
        age:
          (f = msg.getAge()) &&
          proto_stu3_datatypes_pb.Age.toObject(includeInstance, f),
        annotation:
          (f = msg.getAnnotation()) &&
          proto_stu3_datatypes_pb.Annotation.toObject(includeInstance, f),
        attachment:
          (f = msg.getAttachment()) &&
          proto_stu3_datatypes_pb.Attachment.toObject(includeInstance, f),
        codeableConcept:
          (f = msg.getCodeableConcept()) &&
          proto_stu3_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
        coding:
          (f = msg.getCoding()) &&
          proto_stu3_datatypes_pb.Coding.toObject(includeInstance, f),
        contactPoint:
          (f = msg.getContactPoint()) &&
          proto_stu3_datatypes_pb.ContactPoint.toObject(includeInstance, f),
        count:
          (f = msg.getCount()) &&
          proto_stu3_datatypes_pb.Count.toObject(includeInstance, f),
        distance:
          (f = msg.getDistance()) &&
          proto_stu3_datatypes_pb.Distance.toObject(includeInstance, f),
        duration:
          (f = msg.getDuration()) &&
          proto_stu3_datatypes_pb.Duration.toObject(includeInstance, f),
        humanName:
          (f = msg.getHumanName()) &&
          proto_stu3_datatypes_pb.HumanName.toObject(includeInstance, f),
        identifier:
          (f = msg.getIdentifier()) &&
          proto_stu3_datatypes_pb.Identifier.toObject(includeInstance, f),
        money:
          (f = msg.getMoney()) &&
          proto_stu3_datatypes_pb.Money.toObject(includeInstance, f),
        period:
          (f = msg.getPeriod()) &&
          proto_stu3_datatypes_pb.Period.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f),
        range:
          (f = msg.getRange()) &&
          proto_stu3_datatypes_pb.Range.toObject(includeInstance, f),
        ratio:
          (f = msg.getRatio()) &&
          proto_stu3_datatypes_pb.Ratio.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f),
        sampledData:
          (f = msg.getSampledData()) &&
          proto_stu3_datatypes_pb.SampledData.toObject(includeInstance, f),
        signature:
          (f = msg.getSignature()) &&
          proto_stu3_datatypes_pb.Signature.toObject(includeInstance, f),
        timing:
          (f = msg.getTiming()) &&
          proto_stu3_datatypes_pb.Timing.toObject(includeInstance, f),
        meta:
          (f = msg.getMeta()) &&
          proto_stu3_datatypes_pb.Meta.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue();
  return proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Base64Binary();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Base64Binary.deserializeBinaryFromReader
        );
        msg.setBase64Binary(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setBoolean(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 10:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setMarkdown(value);
        break;
      case 11:
        var value = new proto_stu3_datatypes_pb.Oid();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Oid.deserializeBinaryFromReader
        );
        msg.setOid(value);
        break;
      case 12:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 13:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setStringValue(value);
        break;
      case 14:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 15:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 16:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUri(value);
        break;
      case 17:
        var value = new proto_stu3_datatypes_pb.Address();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Address.deserializeBinaryFromReader
        );
        msg.setAddress(value);
        break;
      case 18:
        var value = new proto_stu3_datatypes_pb.Age();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Age.deserializeBinaryFromReader
        );
        msg.setAge(value);
        break;
      case 19:
        var value = new proto_stu3_datatypes_pb.Annotation();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Annotation.deserializeBinaryFromReader
        );
        msg.setAnnotation(value);
        break;
      case 20:
        var value = new proto_stu3_datatypes_pb.Attachment();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Attachment.deserializeBinaryFromReader
        );
        msg.setAttachment(value);
        break;
      case 21:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.setCodeableConcept(value);
        break;
      case 22:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.setCoding(value);
        break;
      case 23:
        var value = new proto_stu3_datatypes_pb.ContactPoint();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.ContactPoint.deserializeBinaryFromReader
        );
        msg.setContactPoint(value);
        break;
      case 24:
        var value = new proto_stu3_datatypes_pb.Count();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Count.deserializeBinaryFromReader
        );
        msg.setCount(value);
        break;
      case 25:
        var value = new proto_stu3_datatypes_pb.Distance();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Distance.deserializeBinaryFromReader
        );
        msg.setDistance(value);
        break;
      case 26:
        var value = new proto_stu3_datatypes_pb.Duration();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Duration.deserializeBinaryFromReader
        );
        msg.setDuration(value);
        break;
      case 27:
        var value = new proto_stu3_datatypes_pb.HumanName();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.HumanName.deserializeBinaryFromReader
        );
        msg.setHumanName(value);
        break;
      case 28:
        var value = new proto_stu3_datatypes_pb.Identifier();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Identifier.deserializeBinaryFromReader
        );
        msg.setIdentifier(value);
        break;
      case 29:
        var value = new proto_stu3_datatypes_pb.Money();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Money.deserializeBinaryFromReader
        );
        msg.setMoney(value);
        break;
      case 30:
        var value = new proto_stu3_datatypes_pb.Period();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Period.deserializeBinaryFromReader
        );
        msg.setPeriod(value);
        break;
      case 31:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
        break;
      case 32:
        var value = new proto_stu3_datatypes_pb.Range();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Range.deserializeBinaryFromReader
        );
        msg.setRange(value);
        break;
      case 33:
        var value = new proto_stu3_datatypes_pb.Ratio();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Ratio.deserializeBinaryFromReader
        );
        msg.setRatio(value);
        break;
      case 34:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
        break;
      case 35:
        var value = new proto_stu3_datatypes_pb.SampledData();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.SampledData.deserializeBinaryFromReader
        );
        msg.setSampledData(value);
        break;
      case 36:
        var value = new proto_stu3_datatypes_pb.Signature();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Signature.deserializeBinaryFromReader
        );
        msg.setSignature(value);
        break;
      case 37:
        var value = new proto_stu3_datatypes_pb.Timing();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Timing.deserializeBinaryFromReader
        );
        msg.setTiming(value);
        break;
      case 38:
        var value = new proto_stu3_datatypes_pb.Meta();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Meta.deserializeBinaryFromReader
        );
        msg.setMeta(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getBase64Binary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Base64Binary.serializeBinaryToWriter
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getMarkdown();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getOid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_stu3_datatypes_pb.Oid.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_stu3_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_stu3_datatypes_pb.Age.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_stu3_datatypes_pb.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_stu3_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCoding();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getContactPoint();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_stu3_datatypes_pb.ContactPoint.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto_stu3_datatypes_pb.Count.serializeBinaryToWriter
    );
  }
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_stu3_datatypes_pb.Distance.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_stu3_datatypes_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHumanName();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_stu3_datatypes_pb.HumanName.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_stu3_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_stu3_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_stu3_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_stu3_datatypes_pb.Range.serializeBinaryToWriter
    );
  }
  f = message.getRatio();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_stu3_datatypes_pb.Ratio.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getSampledData();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_stu3_datatypes_pb.SampledData.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_stu3_datatypes_pb.Signature.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_stu3_datatypes_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_stu3_datatypes_pb.Meta.serializeBinaryToWriter
    );
  }
};

/**
 * optional Base64Binary base64_binary = 1;
 * @return {?proto.google.fhir.stu3.proto.Base64Binary}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getBase64Binary = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Base64Binary} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Base64Binary,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Base64Binary|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setBase64Binary = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearBase64Binary = function () {
  return this.setBase64Binary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasBase64Binary = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Boolean boolean = 2;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getBoolean = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setBoolean = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearBoolean = function () {
  return this.setBoolean(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasBoolean = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Code code = 3;
 * @return {?proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Code} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Code|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setCode = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Date date = 4;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasDate = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional DateTime date_time = 5;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Decimal decimal = 6;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Id id = 7;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setId = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasId = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Instant instant = 8;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Integer integer = 9;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * optional Markdown markdown = 10;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getMarkdown = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    10
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setMarkdown = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    10,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearMarkdown = function () {
  return this.setMarkdown(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasMarkdown = function () {
  return jspb.Message.getField(this, 10) != null;
};

/**
 * optional Oid oid = 11;
 * @return {?proto.google.fhir.stu3.proto.Oid}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getOid = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Oid} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Oid,
    11
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Oid|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setOid = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    11,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearOid = function () {
  return this.setOid(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasOid = function () {
  return jspb.Message.getField(this, 11) != null;
};

/**
 * optional PositiveInt positive_int = 12;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    12
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    12,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 12) != null;
};

/**
 * optional String string_value = 13;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getStringValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    13
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setStringValue = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    13,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearStringValue = function () {
  return this.setStringValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasStringValue = function () {
  return jspb.Message.getField(this, 13) != null;
};

/**
 * optional Time time = 14;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    14
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    14,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasTime = function () {
  return jspb.Message.getField(this, 14) != null;
};

/**
 * optional UnsignedInt unsigned_int = 15;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    15
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    15,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 15) != null;
};

/**
 * optional Uri uri = 16;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getUri = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    16
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setUri = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearUri = function () {
  return this.setUri(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasUri = function () {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional Address address = 17;
 * @return {?proto.google.fhir.stu3.proto.Address}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getAddress = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Address} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Address,
    17
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Address|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setAddress = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearAddress = function () {
  return this.setAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasAddress = function () {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Age age = 18;
 * @return {?proto.google.fhir.stu3.proto.Age}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getAge = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Age} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Age,
    18
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Age|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setAge = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    18,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearAge = function () {
  return this.setAge(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasAge = function () {
  return jspb.Message.getField(this, 18) != null;
};

/**
 * optional Annotation annotation = 19;
 * @return {?proto.google.fhir.stu3.proto.Annotation}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getAnnotation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Annotation} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Annotation,
    19
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Annotation|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setAnnotation = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearAnnotation = function () {
  return this.setAnnotation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasAnnotation = function () {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Attachment attachment = 20;
 * @return {?proto.google.fhir.stu3.proto.Attachment}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getAttachment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Attachment} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Attachment,
    20
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Attachment|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setAttachment = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearAttachment = function () {
  return this.setAttachment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasAttachment = function () {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional CodeableConcept codeable_concept = 21;
 * @return {?proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getCodeableConcept = function () {
  return /** @type{?proto.google.fhir.stu3.proto.CodeableConcept} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    21
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setCodeableConcept = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearCodeableConcept = function () {
  return this.setCodeableConcept(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasCodeableConcept = function () {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Coding coding = 22;
 * @return {?proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getCoding = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Coding} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    22
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Coding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setCoding = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearCoding = function () {
  return this.setCoding(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasCoding = function () {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional ContactPoint contact_point = 23;
 * @return {?proto.google.fhir.stu3.proto.ContactPoint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getContactPoint = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ContactPoint} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.ContactPoint,
    23
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ContactPoint|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setContactPoint = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearContactPoint = function () {
  return this.setContactPoint(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasContactPoint = function () {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Count count = 24;
 * @return {?proto.google.fhir.stu3.proto.Count}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getCount = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Count} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Count,
    24
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Count|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setCount = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearCount = function () {
  return this.setCount(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasCount = function () {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Distance distance = 25;
 * @return {?proto.google.fhir.stu3.proto.Distance}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDistance = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Distance} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Distance,
    25
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Distance|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setDistance = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    25,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearDistance = function () {
  return this.setDistance(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasDistance = function () {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional Duration duration = 26;
 * @return {?proto.google.fhir.stu3.proto.Duration}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getDuration = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Duration} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Duration,
    26
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Duration|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setDuration = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    26,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearDuration = function () {
  return this.setDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 26) != null;
};

/**
 * optional HumanName human_name = 27;
 * @return {?proto.google.fhir.stu3.proto.HumanName}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getHumanName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.HumanName} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.HumanName,
    27
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.HumanName|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setHumanName = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    27,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearHumanName = function () {
  return this.setHumanName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasHumanName = function () {
  return jspb.Message.getField(this, 27) != null;
};

/**
 * optional Identifier identifier = 28;
 * @return {?proto.google.fhir.stu3.proto.Identifier}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getIdentifier = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Identifier} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Identifier,
    28
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Identifier|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setIdentifier = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    28,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearIdentifier = function () {
  return this.setIdentifier(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasIdentifier = function () {
  return jspb.Message.getField(this, 28) != null;
};

/**
 * optional Money money = 29;
 * @return {?proto.google.fhir.stu3.proto.Money}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getMoney = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Money} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Money,
    29
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Money|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setMoney = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    29,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearMoney = function () {
  return this.setMoney(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasMoney = function () {
  return jspb.Message.getField(this, 29) != null;
};

/**
 * optional Period period = 30;
 * @return {?proto.google.fhir.stu3.proto.Period}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getPeriod = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Period} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Period,
    30
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Period|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setPeriod = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    30,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearPeriod = function () {
  return this.setPeriod(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasPeriod = function () {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Quantity quantity = 31;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    31
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    31,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Range range = 32;
 * @return {?proto.google.fhir.stu3.proto.Range}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getRange = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Range} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Range,
    32
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Range|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setRange = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    32,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasRange = function () {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional Ratio ratio = 33;
 * @return {?proto.google.fhir.stu3.proto.Ratio}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getRatio = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Ratio} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Ratio,
    33
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Ratio|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setRatio = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    33,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearRatio = function () {
  return this.setRatio(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasRatio = function () {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * optional Reference reference = 34;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    34
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    34,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasReference = function () {
  return jspb.Message.getField(this, 34) != null;
};

/**
 * optional SampledData sampled_data = 35;
 * @return {?proto.google.fhir.stu3.proto.SampledData}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getSampledData = function () {
  return /** @type{?proto.google.fhir.stu3.proto.SampledData} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.SampledData,
    35
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.SampledData|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setSampledData = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    35,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearSampledData = function () {
  return this.setSampledData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasSampledData = function () {
  return jspb.Message.getField(this, 35) != null;
};

/**
 * optional Signature signature = 36;
 * @return {?proto.google.fhir.stu3.proto.Signature}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getSignature = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Signature} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Signature,
    36
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Signature|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setSignature = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    36,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearSignature = function () {
  return this.setSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 36) != null;
};

/**
 * optional Timing timing = 37;
 * @return {?proto.google.fhir.stu3.proto.Timing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Timing} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Timing,
    37
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Timing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setTiming = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    37,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearTiming = function () {
  return this.setTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasTiming = function () {
  return jspb.Message.getField(this, 37) != null;
};

/**
 * optional Meta meta = 38;
 * @return {?proto.google.fhir.stu3.proto.Meta}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.getMeta = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Meta} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Meta,
    38
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Meta|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.setMeta = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    38,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 38) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_ = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38
  ]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.FixedCase = {
  FIXED_NOT_SET: 0,
  BASE64_BINARY: 1,
  BOOLEAN: 2,
  CODE: 3,
  DATE: 4,
  DATE_TIME: 5,
  DECIMAL: 6,
  ID: 7,
  INSTANT: 8,
  INTEGER: 9,
  MARKDOWN: 10,
  OID: 11,
  POSITIVE_INT: 12,
  STRING_VALUE: 13,
  TIME: 14,
  UNSIGNED_INT: 15,
  URI: 16,
  ADDRESS: 17,
  AGE: 18,
  ANNOTATION: 19,
  ATTACHMENT: 20,
  CODEABLE_CONCEPT: 21,
  CODING: 22,
  CONTACT_POINT: 23,
  COUNT: 24,
  DISTANCE: 25,
  DURATION: 26,
  HUMAN_NAME: 27,
  IDENTIFIER: 28,
  MONEY: 29,
  PERIOD: 30,
  QUANTITY: 31,
  RANGE: 32,
  RATIO: 33,
  REFERENCE: 34,
  SAMPLED_DATA: 35,
  SIGNATURE: 36,
  TIMING: 37,
  META: 38
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.Fixed.FixedCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getFixedCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.Fixed.FixedCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Fixed.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Fixed.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        base64Binary:
          (f = msg.getBase64Binary()) &&
          proto_stu3_datatypes_pb.Base64Binary.toObject(includeInstance, f),
        pb_boolean:
          (f = msg.getBoolean()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Code.toObject(includeInstance, f),
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        markdown:
          (f = msg.getMarkdown()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        oid:
          (f = msg.getOid()) &&
          proto_stu3_datatypes_pb.Oid.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        stringValue:
          (f = msg.getStringValue()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        uri:
          (f = msg.getUri()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        address:
          (f = msg.getAddress()) &&
          proto_stu3_datatypes_pb.Address.toObject(includeInstance, f),
        age:
          (f = msg.getAge()) &&
          proto_stu3_datatypes_pb.Age.toObject(includeInstance, f),
        annotation:
          (f = msg.getAnnotation()) &&
          proto_stu3_datatypes_pb.Annotation.toObject(includeInstance, f),
        attachment:
          (f = msg.getAttachment()) &&
          proto_stu3_datatypes_pb.Attachment.toObject(includeInstance, f),
        codeableConcept:
          (f = msg.getCodeableConcept()) &&
          proto_stu3_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
        coding:
          (f = msg.getCoding()) &&
          proto_stu3_datatypes_pb.Coding.toObject(includeInstance, f),
        contactPoint:
          (f = msg.getContactPoint()) &&
          proto_stu3_datatypes_pb.ContactPoint.toObject(includeInstance, f),
        count:
          (f = msg.getCount()) &&
          proto_stu3_datatypes_pb.Count.toObject(includeInstance, f),
        distance:
          (f = msg.getDistance()) &&
          proto_stu3_datatypes_pb.Distance.toObject(includeInstance, f),
        duration:
          (f = msg.getDuration()) &&
          proto_stu3_datatypes_pb.Duration.toObject(includeInstance, f),
        humanName:
          (f = msg.getHumanName()) &&
          proto_stu3_datatypes_pb.HumanName.toObject(includeInstance, f),
        identifier:
          (f = msg.getIdentifier()) &&
          proto_stu3_datatypes_pb.Identifier.toObject(includeInstance, f),
        money:
          (f = msg.getMoney()) &&
          proto_stu3_datatypes_pb.Money.toObject(includeInstance, f),
        period:
          (f = msg.getPeriod()) &&
          proto_stu3_datatypes_pb.Period.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f),
        range:
          (f = msg.getRange()) &&
          proto_stu3_datatypes_pb.Range.toObject(includeInstance, f),
        ratio:
          (f = msg.getRatio()) &&
          proto_stu3_datatypes_pb.Ratio.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f),
        sampledData:
          (f = msg.getSampledData()) &&
          proto_stu3_datatypes_pb.SampledData.toObject(includeInstance, f),
        signature:
          (f = msg.getSignature()) &&
          proto_stu3_datatypes_pb.Signature.toObject(includeInstance, f),
        timing:
          (f = msg.getTiming()) &&
          proto_stu3_datatypes_pb.Timing.toObject(includeInstance, f),
        meta:
          (f = msg.getMeta()) &&
          proto_stu3_datatypes_pb.Meta.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Fixed();
  return proto.google.fhir.stu3.proto.ElementDefinition.Fixed.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Base64Binary();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Base64Binary.deserializeBinaryFromReader
        );
        msg.setBase64Binary(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setBoolean(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 10:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setMarkdown(value);
        break;
      case 11:
        var value = new proto_stu3_datatypes_pb.Oid();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Oid.deserializeBinaryFromReader
        );
        msg.setOid(value);
        break;
      case 12:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 13:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setStringValue(value);
        break;
      case 14:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 15:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 16:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUri(value);
        break;
      case 17:
        var value = new proto_stu3_datatypes_pb.Address();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Address.deserializeBinaryFromReader
        );
        msg.setAddress(value);
        break;
      case 18:
        var value = new proto_stu3_datatypes_pb.Age();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Age.deserializeBinaryFromReader
        );
        msg.setAge(value);
        break;
      case 19:
        var value = new proto_stu3_datatypes_pb.Annotation();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Annotation.deserializeBinaryFromReader
        );
        msg.setAnnotation(value);
        break;
      case 20:
        var value = new proto_stu3_datatypes_pb.Attachment();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Attachment.deserializeBinaryFromReader
        );
        msg.setAttachment(value);
        break;
      case 21:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.setCodeableConcept(value);
        break;
      case 22:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.setCoding(value);
        break;
      case 23:
        var value = new proto_stu3_datatypes_pb.ContactPoint();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.ContactPoint.deserializeBinaryFromReader
        );
        msg.setContactPoint(value);
        break;
      case 24:
        var value = new proto_stu3_datatypes_pb.Count();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Count.deserializeBinaryFromReader
        );
        msg.setCount(value);
        break;
      case 25:
        var value = new proto_stu3_datatypes_pb.Distance();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Distance.deserializeBinaryFromReader
        );
        msg.setDistance(value);
        break;
      case 26:
        var value = new proto_stu3_datatypes_pb.Duration();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Duration.deserializeBinaryFromReader
        );
        msg.setDuration(value);
        break;
      case 27:
        var value = new proto_stu3_datatypes_pb.HumanName();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.HumanName.deserializeBinaryFromReader
        );
        msg.setHumanName(value);
        break;
      case 28:
        var value = new proto_stu3_datatypes_pb.Identifier();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Identifier.deserializeBinaryFromReader
        );
        msg.setIdentifier(value);
        break;
      case 29:
        var value = new proto_stu3_datatypes_pb.Money();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Money.deserializeBinaryFromReader
        );
        msg.setMoney(value);
        break;
      case 30:
        var value = new proto_stu3_datatypes_pb.Period();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Period.deserializeBinaryFromReader
        );
        msg.setPeriod(value);
        break;
      case 31:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
        break;
      case 32:
        var value = new proto_stu3_datatypes_pb.Range();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Range.deserializeBinaryFromReader
        );
        msg.setRange(value);
        break;
      case 33:
        var value = new proto_stu3_datatypes_pb.Ratio();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Ratio.deserializeBinaryFromReader
        );
        msg.setRatio(value);
        break;
      case 34:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
        break;
      case 35:
        var value = new proto_stu3_datatypes_pb.SampledData();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.SampledData.deserializeBinaryFromReader
        );
        msg.setSampledData(value);
        break;
      case 36:
        var value = new proto_stu3_datatypes_pb.Signature();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Signature.deserializeBinaryFromReader
        );
        msg.setSignature(value);
        break;
      case 37:
        var value = new proto_stu3_datatypes_pb.Timing();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Timing.deserializeBinaryFromReader
        );
        msg.setTiming(value);
        break;
      case 38:
        var value = new proto_stu3_datatypes_pb.Meta();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Meta.deserializeBinaryFromReader
        );
        msg.setMeta(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Fixed.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getBase64Binary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Base64Binary.serializeBinaryToWriter
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getMarkdown();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getOid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_stu3_datatypes_pb.Oid.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_stu3_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_stu3_datatypes_pb.Age.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_stu3_datatypes_pb.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_stu3_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCoding();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getContactPoint();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_stu3_datatypes_pb.ContactPoint.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto_stu3_datatypes_pb.Count.serializeBinaryToWriter
    );
  }
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_stu3_datatypes_pb.Distance.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_stu3_datatypes_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHumanName();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_stu3_datatypes_pb.HumanName.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_stu3_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_stu3_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_stu3_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_stu3_datatypes_pb.Range.serializeBinaryToWriter
    );
  }
  f = message.getRatio();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_stu3_datatypes_pb.Ratio.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getSampledData();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_stu3_datatypes_pb.SampledData.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_stu3_datatypes_pb.Signature.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_stu3_datatypes_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_stu3_datatypes_pb.Meta.serializeBinaryToWriter
    );
  }
};

/**
 * optional Base64Binary base64_binary = 1;
 * @return {?proto.google.fhir.stu3.proto.Base64Binary}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getBase64Binary = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Base64Binary} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Base64Binary,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Base64Binary|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setBase64Binary = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearBase64Binary = function () {
  return this.setBase64Binary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasBase64Binary = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Boolean boolean = 2;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getBoolean = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setBoolean = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearBoolean = function () {
  return this.setBoolean(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasBoolean = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Code code = 3;
 * @return {?proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Code} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Code|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setCode = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Date date = 4;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasDate = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional DateTime date_time = 5;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Decimal decimal = 6;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Id id = 7;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setId = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasId = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Instant instant = 8;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Integer integer = 9;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * optional Markdown markdown = 10;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getMarkdown = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    10
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setMarkdown = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    10,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearMarkdown = function () {
  return this.setMarkdown(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasMarkdown = function () {
  return jspb.Message.getField(this, 10) != null;
};

/**
 * optional Oid oid = 11;
 * @return {?proto.google.fhir.stu3.proto.Oid}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getOid = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Oid} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Oid,
    11
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Oid|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setOid = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    11,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearOid = function () {
  return this.setOid(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasOid = function () {
  return jspb.Message.getField(this, 11) != null;
};

/**
 * optional PositiveInt positive_int = 12;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    12
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    12,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 12) != null;
};

/**
 * optional String string_value = 13;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getStringValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    13
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setStringValue = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    13,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearStringValue = function () {
  return this.setStringValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasStringValue = function () {
  return jspb.Message.getField(this, 13) != null;
};

/**
 * optional Time time = 14;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    14
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    14,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasTime = function () {
  return jspb.Message.getField(this, 14) != null;
};

/**
 * optional UnsignedInt unsigned_int = 15;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    15
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    15,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 15) != null;
};

/**
 * optional Uri uri = 16;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getUri = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    16
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setUri = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearUri = function () {
  return this.setUri(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasUri = function () {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional Address address = 17;
 * @return {?proto.google.fhir.stu3.proto.Address}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getAddress = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Address} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Address,
    17
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Address|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setAddress = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearAddress = function () {
  return this.setAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasAddress = function () {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Age age = 18;
 * @return {?proto.google.fhir.stu3.proto.Age}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getAge = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Age} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Age,
    18
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Age|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setAge = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    18,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearAge = function () {
  return this.setAge(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasAge = function () {
  return jspb.Message.getField(this, 18) != null;
};

/**
 * optional Annotation annotation = 19;
 * @return {?proto.google.fhir.stu3.proto.Annotation}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getAnnotation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Annotation} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Annotation,
    19
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Annotation|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setAnnotation = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearAnnotation = function () {
  return this.setAnnotation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasAnnotation = function () {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Attachment attachment = 20;
 * @return {?proto.google.fhir.stu3.proto.Attachment}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getAttachment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Attachment} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Attachment,
    20
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Attachment|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setAttachment = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearAttachment = function () {
  return this.setAttachment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasAttachment = function () {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional CodeableConcept codeable_concept = 21;
 * @return {?proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getCodeableConcept = function () {
  return /** @type{?proto.google.fhir.stu3.proto.CodeableConcept} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    21
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setCodeableConcept = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearCodeableConcept = function () {
  return this.setCodeableConcept(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasCodeableConcept = function () {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Coding coding = 22;
 * @return {?proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getCoding = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Coding} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    22
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Coding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setCoding = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearCoding = function () {
  return this.setCoding(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasCoding = function () {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional ContactPoint contact_point = 23;
 * @return {?proto.google.fhir.stu3.proto.ContactPoint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getContactPoint = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ContactPoint} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.ContactPoint,
    23
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ContactPoint|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setContactPoint = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearContactPoint = function () {
  return this.setContactPoint(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasContactPoint = function () {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Count count = 24;
 * @return {?proto.google.fhir.stu3.proto.Count}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getCount = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Count} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Count,
    24
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Count|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setCount = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearCount = function () {
  return this.setCount(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasCount = function () {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Distance distance = 25;
 * @return {?proto.google.fhir.stu3.proto.Distance}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getDistance = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Distance} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Distance,
    25
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Distance|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setDistance = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    25,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearDistance = function () {
  return this.setDistance(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasDistance = function () {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional Duration duration = 26;
 * @return {?proto.google.fhir.stu3.proto.Duration}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getDuration = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Duration} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Duration,
    26
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Duration|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setDuration = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    26,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearDuration = function () {
  return this.setDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 26) != null;
};

/**
 * optional HumanName human_name = 27;
 * @return {?proto.google.fhir.stu3.proto.HumanName}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getHumanName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.HumanName} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.HumanName,
    27
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.HumanName|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setHumanName = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    27,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearHumanName = function () {
  return this.setHumanName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasHumanName = function () {
  return jspb.Message.getField(this, 27) != null;
};

/**
 * optional Identifier identifier = 28;
 * @return {?proto.google.fhir.stu3.proto.Identifier}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getIdentifier = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Identifier} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Identifier,
    28
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Identifier|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setIdentifier = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    28,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearIdentifier = function () {
  return this.setIdentifier(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasIdentifier = function () {
  return jspb.Message.getField(this, 28) != null;
};

/**
 * optional Money money = 29;
 * @return {?proto.google.fhir.stu3.proto.Money}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getMoney = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Money} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Money,
    29
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Money|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setMoney = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    29,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearMoney = function () {
  return this.setMoney(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasMoney = function () {
  return jspb.Message.getField(this, 29) != null;
};

/**
 * optional Period period = 30;
 * @return {?proto.google.fhir.stu3.proto.Period}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getPeriod = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Period} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Period,
    30
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Period|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setPeriod = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    30,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearPeriod = function () {
  return this.setPeriod(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasPeriod = function () {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Quantity quantity = 31;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    31
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    31,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Range range = 32;
 * @return {?proto.google.fhir.stu3.proto.Range}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getRange = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Range} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Range,
    32
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Range|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setRange = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    32,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasRange = function () {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional Ratio ratio = 33;
 * @return {?proto.google.fhir.stu3.proto.Ratio}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getRatio = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Ratio} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Ratio,
    33
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Ratio|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setRatio = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    33,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearRatio = function () {
  return this.setRatio(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasRatio = function () {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * optional Reference reference = 34;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    34
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    34,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasReference = function () {
  return jspb.Message.getField(this, 34) != null;
};

/**
 * optional SampledData sampled_data = 35;
 * @return {?proto.google.fhir.stu3.proto.SampledData}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getSampledData = function () {
  return /** @type{?proto.google.fhir.stu3.proto.SampledData} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.SampledData,
    35
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.SampledData|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setSampledData = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    35,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearSampledData = function () {
  return this.setSampledData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasSampledData = function () {
  return jspb.Message.getField(this, 35) != null;
};

/**
 * optional Signature signature = 36;
 * @return {?proto.google.fhir.stu3.proto.Signature}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getSignature = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Signature} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Signature,
    36
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Signature|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setSignature = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    36,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearSignature = function () {
  return this.setSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 36) != null;
};

/**
 * optional Timing timing = 37;
 * @return {?proto.google.fhir.stu3.proto.Timing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Timing} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Timing,
    37
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Timing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setTiming = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    37,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearTiming = function () {
  return this.setTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasTiming = function () {
  return jspb.Message.getField(this, 37) != null;
};

/**
 * optional Meta meta = 38;
 * @return {?proto.google.fhir.stu3.proto.Meta}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.getMeta = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Meta} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Meta,
    38
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Meta|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.setMeta = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    38,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Fixed} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Fixed.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 38) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_ = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38
  ]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.PatternCase = {
  PATTERN_NOT_SET: 0,
  BASE64_BINARY: 1,
  BOOLEAN: 2,
  CODE: 3,
  DATE: 4,
  DATE_TIME: 5,
  DECIMAL: 6,
  ID: 7,
  INSTANT: 8,
  INTEGER: 9,
  MARKDOWN: 10,
  OID: 11,
  POSITIVE_INT: 12,
  STRING_VALUE: 13,
  TIME: 14,
  UNSIGNED_INT: 15,
  URI: 16,
  ADDRESS: 17,
  AGE: 18,
  ANNOTATION: 19,
  ATTACHMENT: 20,
  CODEABLE_CONCEPT: 21,
  CODING: 22,
  CONTACT_POINT: 23,
  COUNT: 24,
  DISTANCE: 25,
  DURATION: 26,
  HUMAN_NAME: 27,
  IDENTIFIER: 28,
  MONEY: 29,
  PERIOD: 30,
  QUANTITY: 31,
  RANGE: 32,
  RATIO: 33,
  REFERENCE: 34,
  SAMPLED_DATA: 35,
  SIGNATURE: 36,
  TIMING: 37,
  META: 38
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.Pattern.PatternCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getPatternCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.Pattern.PatternCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Pattern.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Pattern.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        base64Binary:
          (f = msg.getBase64Binary()) &&
          proto_stu3_datatypes_pb.Base64Binary.toObject(includeInstance, f),
        pb_boolean:
          (f = msg.getBoolean()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Code.toObject(includeInstance, f),
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        markdown:
          (f = msg.getMarkdown()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        oid:
          (f = msg.getOid()) &&
          proto_stu3_datatypes_pb.Oid.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        stringValue:
          (f = msg.getStringValue()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        uri:
          (f = msg.getUri()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        address:
          (f = msg.getAddress()) &&
          proto_stu3_datatypes_pb.Address.toObject(includeInstance, f),
        age:
          (f = msg.getAge()) &&
          proto_stu3_datatypes_pb.Age.toObject(includeInstance, f),
        annotation:
          (f = msg.getAnnotation()) &&
          proto_stu3_datatypes_pb.Annotation.toObject(includeInstance, f),
        attachment:
          (f = msg.getAttachment()) &&
          proto_stu3_datatypes_pb.Attachment.toObject(includeInstance, f),
        codeableConcept:
          (f = msg.getCodeableConcept()) &&
          proto_stu3_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
        coding:
          (f = msg.getCoding()) &&
          proto_stu3_datatypes_pb.Coding.toObject(includeInstance, f),
        contactPoint:
          (f = msg.getContactPoint()) &&
          proto_stu3_datatypes_pb.ContactPoint.toObject(includeInstance, f),
        count:
          (f = msg.getCount()) &&
          proto_stu3_datatypes_pb.Count.toObject(includeInstance, f),
        distance:
          (f = msg.getDistance()) &&
          proto_stu3_datatypes_pb.Distance.toObject(includeInstance, f),
        duration:
          (f = msg.getDuration()) &&
          proto_stu3_datatypes_pb.Duration.toObject(includeInstance, f),
        humanName:
          (f = msg.getHumanName()) &&
          proto_stu3_datatypes_pb.HumanName.toObject(includeInstance, f),
        identifier:
          (f = msg.getIdentifier()) &&
          proto_stu3_datatypes_pb.Identifier.toObject(includeInstance, f),
        money:
          (f = msg.getMoney()) &&
          proto_stu3_datatypes_pb.Money.toObject(includeInstance, f),
        period:
          (f = msg.getPeriod()) &&
          proto_stu3_datatypes_pb.Period.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f),
        range:
          (f = msg.getRange()) &&
          proto_stu3_datatypes_pb.Range.toObject(includeInstance, f),
        ratio:
          (f = msg.getRatio()) &&
          proto_stu3_datatypes_pb.Ratio.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f),
        sampledData:
          (f = msg.getSampledData()) &&
          proto_stu3_datatypes_pb.SampledData.toObject(includeInstance, f),
        signature:
          (f = msg.getSignature()) &&
          proto_stu3_datatypes_pb.Signature.toObject(includeInstance, f),
        timing:
          (f = msg.getTiming()) &&
          proto_stu3_datatypes_pb.Timing.toObject(includeInstance, f),
        meta:
          (f = msg.getMeta()) &&
          proto_stu3_datatypes_pb.Meta.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Pattern();
  return proto.google.fhir.stu3.proto.ElementDefinition.Pattern.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Base64Binary();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Base64Binary.deserializeBinaryFromReader
        );
        msg.setBase64Binary(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setBoolean(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 10:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setMarkdown(value);
        break;
      case 11:
        var value = new proto_stu3_datatypes_pb.Oid();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Oid.deserializeBinaryFromReader
        );
        msg.setOid(value);
        break;
      case 12:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 13:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setStringValue(value);
        break;
      case 14:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 15:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 16:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUri(value);
        break;
      case 17:
        var value = new proto_stu3_datatypes_pb.Address();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Address.deserializeBinaryFromReader
        );
        msg.setAddress(value);
        break;
      case 18:
        var value = new proto_stu3_datatypes_pb.Age();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Age.deserializeBinaryFromReader
        );
        msg.setAge(value);
        break;
      case 19:
        var value = new proto_stu3_datatypes_pb.Annotation();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Annotation.deserializeBinaryFromReader
        );
        msg.setAnnotation(value);
        break;
      case 20:
        var value = new proto_stu3_datatypes_pb.Attachment();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Attachment.deserializeBinaryFromReader
        );
        msg.setAttachment(value);
        break;
      case 21:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.setCodeableConcept(value);
        break;
      case 22:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.setCoding(value);
        break;
      case 23:
        var value = new proto_stu3_datatypes_pb.ContactPoint();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.ContactPoint.deserializeBinaryFromReader
        );
        msg.setContactPoint(value);
        break;
      case 24:
        var value = new proto_stu3_datatypes_pb.Count();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Count.deserializeBinaryFromReader
        );
        msg.setCount(value);
        break;
      case 25:
        var value = new proto_stu3_datatypes_pb.Distance();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Distance.deserializeBinaryFromReader
        );
        msg.setDistance(value);
        break;
      case 26:
        var value = new proto_stu3_datatypes_pb.Duration();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Duration.deserializeBinaryFromReader
        );
        msg.setDuration(value);
        break;
      case 27:
        var value = new proto_stu3_datatypes_pb.HumanName();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.HumanName.deserializeBinaryFromReader
        );
        msg.setHumanName(value);
        break;
      case 28:
        var value = new proto_stu3_datatypes_pb.Identifier();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Identifier.deserializeBinaryFromReader
        );
        msg.setIdentifier(value);
        break;
      case 29:
        var value = new proto_stu3_datatypes_pb.Money();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Money.deserializeBinaryFromReader
        );
        msg.setMoney(value);
        break;
      case 30:
        var value = new proto_stu3_datatypes_pb.Period();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Period.deserializeBinaryFromReader
        );
        msg.setPeriod(value);
        break;
      case 31:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
        break;
      case 32:
        var value = new proto_stu3_datatypes_pb.Range();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Range.deserializeBinaryFromReader
        );
        msg.setRange(value);
        break;
      case 33:
        var value = new proto_stu3_datatypes_pb.Ratio();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Ratio.deserializeBinaryFromReader
        );
        msg.setRatio(value);
        break;
      case 34:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
        break;
      case 35:
        var value = new proto_stu3_datatypes_pb.SampledData();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.SampledData.deserializeBinaryFromReader
        );
        msg.setSampledData(value);
        break;
      case 36:
        var value = new proto_stu3_datatypes_pb.Signature();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Signature.deserializeBinaryFromReader
        );
        msg.setSignature(value);
        break;
      case 37:
        var value = new proto_stu3_datatypes_pb.Timing();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Timing.deserializeBinaryFromReader
        );
        msg.setTiming(value);
        break;
      case 38:
        var value = new proto_stu3_datatypes_pb.Meta();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Meta.deserializeBinaryFromReader
        );
        msg.setMeta(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Pattern.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getBase64Binary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Base64Binary.serializeBinaryToWriter
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getMarkdown();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getOid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_stu3_datatypes_pb.Oid.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_stu3_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_stu3_datatypes_pb.Age.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_stu3_datatypes_pb.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_stu3_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCoding();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getContactPoint();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_stu3_datatypes_pb.ContactPoint.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto_stu3_datatypes_pb.Count.serializeBinaryToWriter
    );
  }
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_stu3_datatypes_pb.Distance.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_stu3_datatypes_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHumanName();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_stu3_datatypes_pb.HumanName.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_stu3_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_stu3_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_stu3_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_stu3_datatypes_pb.Range.serializeBinaryToWriter
    );
  }
  f = message.getRatio();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_stu3_datatypes_pb.Ratio.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getSampledData();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_stu3_datatypes_pb.SampledData.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_stu3_datatypes_pb.Signature.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_stu3_datatypes_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_stu3_datatypes_pb.Meta.serializeBinaryToWriter
    );
  }
};

/**
 * optional Base64Binary base64_binary = 1;
 * @return {?proto.google.fhir.stu3.proto.Base64Binary}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getBase64Binary = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Base64Binary} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Base64Binary,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Base64Binary|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setBase64Binary = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearBase64Binary = function () {
  return this.setBase64Binary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasBase64Binary = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Boolean boolean = 2;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getBoolean = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setBoolean = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearBoolean = function () {
  return this.setBoolean(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasBoolean = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Code code = 3;
 * @return {?proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Code} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Code|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setCode = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Date date = 4;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasDate = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional DateTime date_time = 5;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Decimal decimal = 6;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Id id = 7;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setId = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasId = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Instant instant = 8;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Integer integer = 9;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * optional Markdown markdown = 10;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getMarkdown = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    10
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setMarkdown = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    10,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearMarkdown = function () {
  return this.setMarkdown(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasMarkdown = function () {
  return jspb.Message.getField(this, 10) != null;
};

/**
 * optional Oid oid = 11;
 * @return {?proto.google.fhir.stu3.proto.Oid}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getOid = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Oid} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Oid,
    11
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Oid|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setOid = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    11,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearOid = function () {
  return this.setOid(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasOid = function () {
  return jspb.Message.getField(this, 11) != null;
};

/**
 * optional PositiveInt positive_int = 12;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    12
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    12,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 12) != null;
};

/**
 * optional String string_value = 13;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getStringValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    13
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setStringValue = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    13,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearStringValue = function () {
  return this.setStringValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasStringValue = function () {
  return jspb.Message.getField(this, 13) != null;
};

/**
 * optional Time time = 14;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    14
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    14,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasTime = function () {
  return jspb.Message.getField(this, 14) != null;
};

/**
 * optional UnsignedInt unsigned_int = 15;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    15
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    15,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 15) != null;
};

/**
 * optional Uri uri = 16;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getUri = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    16
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setUri = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearUri = function () {
  return this.setUri(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasUri = function () {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional Address address = 17;
 * @return {?proto.google.fhir.stu3.proto.Address}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getAddress = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Address} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Address,
    17
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Address|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setAddress = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearAddress = function () {
  return this.setAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasAddress = function () {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Age age = 18;
 * @return {?proto.google.fhir.stu3.proto.Age}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getAge = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Age} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Age,
    18
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Age|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setAge = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    18,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearAge = function () {
  return this.setAge(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasAge = function () {
  return jspb.Message.getField(this, 18) != null;
};

/**
 * optional Annotation annotation = 19;
 * @return {?proto.google.fhir.stu3.proto.Annotation}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getAnnotation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Annotation} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Annotation,
    19
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Annotation|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setAnnotation = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearAnnotation = function () {
  return this.setAnnotation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasAnnotation = function () {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Attachment attachment = 20;
 * @return {?proto.google.fhir.stu3.proto.Attachment}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getAttachment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Attachment} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Attachment,
    20
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Attachment|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setAttachment = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearAttachment = function () {
  return this.setAttachment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasAttachment = function () {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional CodeableConcept codeable_concept = 21;
 * @return {?proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getCodeableConcept = function () {
  return /** @type{?proto.google.fhir.stu3.proto.CodeableConcept} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    21
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setCodeableConcept = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearCodeableConcept = function () {
  return this.setCodeableConcept(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasCodeableConcept = function () {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Coding coding = 22;
 * @return {?proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getCoding = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Coding} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    22
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Coding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setCoding = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearCoding = function () {
  return this.setCoding(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasCoding = function () {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional ContactPoint contact_point = 23;
 * @return {?proto.google.fhir.stu3.proto.ContactPoint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getContactPoint = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ContactPoint} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.ContactPoint,
    23
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ContactPoint|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setContactPoint = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearContactPoint = function () {
  return this.setContactPoint(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasContactPoint = function () {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Count count = 24;
 * @return {?proto.google.fhir.stu3.proto.Count}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getCount = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Count} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Count,
    24
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Count|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setCount = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearCount = function () {
  return this.setCount(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasCount = function () {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Distance distance = 25;
 * @return {?proto.google.fhir.stu3.proto.Distance}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getDistance = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Distance} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Distance,
    25
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Distance|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setDistance = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    25,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearDistance = function () {
  return this.setDistance(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasDistance = function () {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional Duration duration = 26;
 * @return {?proto.google.fhir.stu3.proto.Duration}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getDuration = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Duration} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Duration,
    26
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Duration|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setDuration = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    26,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearDuration = function () {
  return this.setDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 26) != null;
};

/**
 * optional HumanName human_name = 27;
 * @return {?proto.google.fhir.stu3.proto.HumanName}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getHumanName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.HumanName} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.HumanName,
    27
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.HumanName|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setHumanName = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    27,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearHumanName = function () {
  return this.setHumanName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasHumanName = function () {
  return jspb.Message.getField(this, 27) != null;
};

/**
 * optional Identifier identifier = 28;
 * @return {?proto.google.fhir.stu3.proto.Identifier}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getIdentifier = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Identifier} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Identifier,
    28
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Identifier|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setIdentifier = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    28,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearIdentifier = function () {
  return this.setIdentifier(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasIdentifier = function () {
  return jspb.Message.getField(this, 28) != null;
};

/**
 * optional Money money = 29;
 * @return {?proto.google.fhir.stu3.proto.Money}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getMoney = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Money} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Money,
    29
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Money|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setMoney = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    29,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearMoney = function () {
  return this.setMoney(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasMoney = function () {
  return jspb.Message.getField(this, 29) != null;
};

/**
 * optional Period period = 30;
 * @return {?proto.google.fhir.stu3.proto.Period}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getPeriod = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Period} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Period,
    30
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Period|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setPeriod = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    30,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearPeriod = function () {
  return this.setPeriod(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasPeriod = function () {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Quantity quantity = 31;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    31
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    31,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Range range = 32;
 * @return {?proto.google.fhir.stu3.proto.Range}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getRange = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Range} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Range,
    32
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Range|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setRange = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    32,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasRange = function () {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional Ratio ratio = 33;
 * @return {?proto.google.fhir.stu3.proto.Ratio}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getRatio = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Ratio} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Ratio,
    33
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Ratio|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setRatio = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    33,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearRatio = function () {
  return this.setRatio(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasRatio = function () {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * optional Reference reference = 34;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    34
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    34,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasReference = function () {
  return jspb.Message.getField(this, 34) != null;
};

/**
 * optional SampledData sampled_data = 35;
 * @return {?proto.google.fhir.stu3.proto.SampledData}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getSampledData = function () {
  return /** @type{?proto.google.fhir.stu3.proto.SampledData} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.SampledData,
    35
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.SampledData|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setSampledData = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    35,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearSampledData = function () {
  return this.setSampledData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasSampledData = function () {
  return jspb.Message.getField(this, 35) != null;
};

/**
 * optional Signature signature = 36;
 * @return {?proto.google.fhir.stu3.proto.Signature}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getSignature = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Signature} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Signature,
    36
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Signature|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setSignature = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    36,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearSignature = function () {
  return this.setSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 36) != null;
};

/**
 * optional Timing timing = 37;
 * @return {?proto.google.fhir.stu3.proto.Timing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Timing} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Timing,
    37
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Timing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setTiming = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    37,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearTiming = function () {
  return this.setTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasTiming = function () {
  return jspb.Message.getField(this, 37) != null;
};

/**
 * optional Meta meta = 38;
 * @return {?proto.google.fhir.stu3.proto.Meta}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.getMeta = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Meta} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Meta,
    38
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Meta|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.setMeta = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    38,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Pattern} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Pattern.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 38) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Example.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Example.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        label:
          (f = msg.getLabel()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        value:
          (f = msg.getValue()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Example();
  return proto.google.fhir.stu3.proto.ElementDefinition.Example.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setLabel(value);
        break;
      case 4:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.Example.Value();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
            .deserializeBinaryFromReader
        );
        msg.setValue(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Example.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
        .serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.oneofGroups_ = [
  [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38
  ]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.ValueCase = {
  VALUE_NOT_SET: 0,
  BASE64_BINARY: 1,
  BOOLEAN: 2,
  CODE: 3,
  DATE: 4,
  DATE_TIME: 5,
  DECIMAL: 6,
  ID: 7,
  INSTANT: 8,
  INTEGER: 9,
  MARKDOWN: 10,
  OID: 11,
  POSITIVE_INT: 12,
  STRING_VALUE: 13,
  TIME: 14,
  UNSIGNED_INT: 15,
  URI: 16,
  ADDRESS: 17,
  AGE: 18,
  ANNOTATION: 19,
  ATTACHMENT: 20,
  CODEABLE_CONCEPT: 21,
  CODING: 22,
  CONTACT_POINT: 23,
  COUNT: 24,
  DISTANCE: 25,
  DURATION: 26,
  HUMAN_NAME: 27,
  IDENTIFIER: 28,
  MONEY: 29,
  PERIOD: 30,
  QUANTITY: 31,
  RANGE: 32,
  RATIO: 33,
  REFERENCE: 34,
  SAMPLED_DATA: 35,
  SIGNATURE: 36,
  TIMING: 37,
  META: 38
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.ValueCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        base64Binary:
          (f = msg.getBase64Binary()) &&
          proto_stu3_datatypes_pb.Base64Binary.toObject(includeInstance, f),
        pb_boolean:
          (f = msg.getBoolean()) &&
          proto_stu3_datatypes_pb.Boolean.toObject(includeInstance, f),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Code.toObject(includeInstance, f),
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        markdown:
          (f = msg.getMarkdown()) &&
          proto_stu3_datatypes_pb.Markdown.toObject(includeInstance, f),
        oid:
          (f = msg.getOid()) &&
          proto_stu3_datatypes_pb.Oid.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        stringValue:
          (f = msg.getStringValue()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        uri:
          (f = msg.getUri()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        address:
          (f = msg.getAddress()) &&
          proto_stu3_datatypes_pb.Address.toObject(includeInstance, f),
        age:
          (f = msg.getAge()) &&
          proto_stu3_datatypes_pb.Age.toObject(includeInstance, f),
        annotation:
          (f = msg.getAnnotation()) &&
          proto_stu3_datatypes_pb.Annotation.toObject(includeInstance, f),
        attachment:
          (f = msg.getAttachment()) &&
          proto_stu3_datatypes_pb.Attachment.toObject(includeInstance, f),
        codeableConcept:
          (f = msg.getCodeableConcept()) &&
          proto_stu3_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
        coding:
          (f = msg.getCoding()) &&
          proto_stu3_datatypes_pb.Coding.toObject(includeInstance, f),
        contactPoint:
          (f = msg.getContactPoint()) &&
          proto_stu3_datatypes_pb.ContactPoint.toObject(includeInstance, f),
        count:
          (f = msg.getCount()) &&
          proto_stu3_datatypes_pb.Count.toObject(includeInstance, f),
        distance:
          (f = msg.getDistance()) &&
          proto_stu3_datatypes_pb.Distance.toObject(includeInstance, f),
        duration:
          (f = msg.getDuration()) &&
          proto_stu3_datatypes_pb.Duration.toObject(includeInstance, f),
        humanName:
          (f = msg.getHumanName()) &&
          proto_stu3_datatypes_pb.HumanName.toObject(includeInstance, f),
        identifier:
          (f = msg.getIdentifier()) &&
          proto_stu3_datatypes_pb.Identifier.toObject(includeInstance, f),
        money:
          (f = msg.getMoney()) &&
          proto_stu3_datatypes_pb.Money.toObject(includeInstance, f),
        period:
          (f = msg.getPeriod()) &&
          proto_stu3_datatypes_pb.Period.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f),
        range:
          (f = msg.getRange()) &&
          proto_stu3_datatypes_pb.Range.toObject(includeInstance, f),
        ratio:
          (f = msg.getRatio()) &&
          proto_stu3_datatypes_pb.Ratio.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f),
        sampledData:
          (f = msg.getSampledData()) &&
          proto_stu3_datatypes_pb.SampledData.toObject(includeInstance, f),
        signature:
          (f = msg.getSignature()) &&
          proto_stu3_datatypes_pb.Signature.toObject(includeInstance, f),
        timing:
          (f = msg.getTiming()) &&
          proto_stu3_datatypes_pb.Timing.toObject(includeInstance, f),
        meta:
          (f = msg.getMeta()) &&
          proto_stu3_datatypes_pb.Meta.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Example.Value();
  return proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Base64Binary();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Base64Binary.deserializeBinaryFromReader
        );
        msg.setBase64Binary(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Boolean();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Boolean.deserializeBinaryFromReader
        );
        msg.setBoolean(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 10:
        var value = new proto_stu3_datatypes_pb.Markdown();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Markdown.deserializeBinaryFromReader
        );
        msg.setMarkdown(value);
        break;
      case 11:
        var value = new proto_stu3_datatypes_pb.Oid();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Oid.deserializeBinaryFromReader
        );
        msg.setOid(value);
        break;
      case 12:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 13:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setStringValue(value);
        break;
      case 14:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 15:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 16:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUri(value);
        break;
      case 17:
        var value = new proto_stu3_datatypes_pb.Address();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Address.deserializeBinaryFromReader
        );
        msg.setAddress(value);
        break;
      case 18:
        var value = new proto_stu3_datatypes_pb.Age();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Age.deserializeBinaryFromReader
        );
        msg.setAge(value);
        break;
      case 19:
        var value = new proto_stu3_datatypes_pb.Annotation();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Annotation.deserializeBinaryFromReader
        );
        msg.setAnnotation(value);
        break;
      case 20:
        var value = new proto_stu3_datatypes_pb.Attachment();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Attachment.deserializeBinaryFromReader
        );
        msg.setAttachment(value);
        break;
      case 21:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.setCodeableConcept(value);
        break;
      case 22:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.setCoding(value);
        break;
      case 23:
        var value = new proto_stu3_datatypes_pb.ContactPoint();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.ContactPoint.deserializeBinaryFromReader
        );
        msg.setContactPoint(value);
        break;
      case 24:
        var value = new proto_stu3_datatypes_pb.Count();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Count.deserializeBinaryFromReader
        );
        msg.setCount(value);
        break;
      case 25:
        var value = new proto_stu3_datatypes_pb.Distance();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Distance.deserializeBinaryFromReader
        );
        msg.setDistance(value);
        break;
      case 26:
        var value = new proto_stu3_datatypes_pb.Duration();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Duration.deserializeBinaryFromReader
        );
        msg.setDuration(value);
        break;
      case 27:
        var value = new proto_stu3_datatypes_pb.HumanName();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.HumanName.deserializeBinaryFromReader
        );
        msg.setHumanName(value);
        break;
      case 28:
        var value = new proto_stu3_datatypes_pb.Identifier();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Identifier.deserializeBinaryFromReader
        );
        msg.setIdentifier(value);
        break;
      case 29:
        var value = new proto_stu3_datatypes_pb.Money();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Money.deserializeBinaryFromReader
        );
        msg.setMoney(value);
        break;
      case 30:
        var value = new proto_stu3_datatypes_pb.Period();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Period.deserializeBinaryFromReader
        );
        msg.setPeriod(value);
        break;
      case 31:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
        break;
      case 32:
        var value = new proto_stu3_datatypes_pb.Range();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Range.deserializeBinaryFromReader
        );
        msg.setRange(value);
        break;
      case 33:
        var value = new proto_stu3_datatypes_pb.Ratio();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Ratio.deserializeBinaryFromReader
        );
        msg.setRatio(value);
        break;
      case 34:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
        break;
      case 35:
        var value = new proto_stu3_datatypes_pb.SampledData();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.SampledData.deserializeBinaryFromReader
        );
        msg.setSampledData(value);
        break;
      case 36:
        var value = new proto_stu3_datatypes_pb.Signature();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Signature.deserializeBinaryFromReader
        );
        msg.setSignature(value);
        break;
      case 37:
        var value = new proto_stu3_datatypes_pb.Timing();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Timing.deserializeBinaryFromReader
        );
        msg.setTiming(value);
        break;
      case 38:
        var value = new proto_stu3_datatypes_pb.Meta();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Meta.deserializeBinaryFromReader
        );
        msg.setMeta(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getBase64Binary();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Base64Binary.serializeBinaryToWriter
    );
  }
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getMarkdown();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_stu3_datatypes_pb.Markdown.serializeBinaryToWriter
    );
  }
  f = message.getOid();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_stu3_datatypes_pb.Oid.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getUri();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_stu3_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getAge();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_stu3_datatypes_pb.Age.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_stu3_datatypes_pb.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_stu3_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCoding();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getContactPoint();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_stu3_datatypes_pb.ContactPoint.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto_stu3_datatypes_pb.Count.serializeBinaryToWriter
    );
  }
  f = message.getDistance();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_stu3_datatypes_pb.Distance.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_stu3_datatypes_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getHumanName();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_stu3_datatypes_pb.HumanName.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_stu3_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_stu3_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_stu3_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_stu3_datatypes_pb.Range.serializeBinaryToWriter
    );
  }
  f = message.getRatio();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_stu3_datatypes_pb.Ratio.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getSampledData();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_stu3_datatypes_pb.SampledData.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_stu3_datatypes_pb.Signature.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_stu3_datatypes_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getMeta();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_stu3_datatypes_pb.Meta.serializeBinaryToWriter
    );
  }
};

/**
 * optional Base64Binary base64_binary = 1;
 * @return {?proto.google.fhir.stu3.proto.Base64Binary}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getBase64Binary = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Base64Binary} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Base64Binary,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Base64Binary|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setBase64Binary = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearBase64Binary = function () {
  return this.setBase64Binary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasBase64Binary = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Boolean boolean = 2;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getBoolean = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setBoolean = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearBoolean = function () {
  return this.setBoolean(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasBoolean = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Code code = 3;
 * @return {?proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Code} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Code|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setCode = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Date date = 4;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasDate = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional DateTime date_time = 5;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Decimal decimal = 6;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Id id = 7;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setId = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasId = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Instant instant = 8;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Integer integer = 9;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * optional Markdown markdown = 10;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getMarkdown = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    10
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setMarkdown = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    10,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearMarkdown = function () {
  return this.setMarkdown(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasMarkdown = function () {
  return jspb.Message.getField(this, 10) != null;
};

/**
 * optional Oid oid = 11;
 * @return {?proto.google.fhir.stu3.proto.Oid}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getOid = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Oid} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Oid,
    11
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Oid|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setOid = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    11,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearOid = function () {
  return this.setOid(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasOid = function () {
  return jspb.Message.getField(this, 11) != null;
};

/**
 * optional PositiveInt positive_int = 12;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    12
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    12,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 12) != null;
};

/**
 * optional String string_value = 13;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getStringValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    13
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setStringValue = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    13,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearStringValue = function () {
  return this.setStringValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasStringValue = function () {
  return jspb.Message.getField(this, 13) != null;
};

/**
 * optional Time time = 14;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    14
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    14,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasTime = function () {
  return jspb.Message.getField(this, 14) != null;
};

/**
 * optional UnsignedInt unsigned_int = 15;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    15
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    15,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 15) != null;
};

/**
 * optional Uri uri = 16;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getUri = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    16
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setUri = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    16,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearUri = function () {
  return this.setUri(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasUri = function () {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional Address address = 17;
 * @return {?proto.google.fhir.stu3.proto.Address}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getAddress = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Address} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Address,
    17
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Address|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setAddress = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    17,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearAddress = function () {
  return this.setAddress(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasAddress = function () {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * optional Age age = 18;
 * @return {?proto.google.fhir.stu3.proto.Age}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getAge = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Age} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Age,
    18
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Age|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setAge = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    18,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearAge = function () {
  return this.setAge(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasAge = function () {
  return jspb.Message.getField(this, 18) != null;
};

/**
 * optional Annotation annotation = 19;
 * @return {?proto.google.fhir.stu3.proto.Annotation}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getAnnotation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Annotation} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Annotation,
    19
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Annotation|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setAnnotation = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    19,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearAnnotation = function () {
  return this.setAnnotation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasAnnotation = function () {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Attachment attachment = 20;
 * @return {?proto.google.fhir.stu3.proto.Attachment}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getAttachment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Attachment} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Attachment,
    20
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Attachment|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setAttachment = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    20,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearAttachment = function () {
  return this.setAttachment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasAttachment = function () {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional CodeableConcept codeable_concept = 21;
 * @return {?proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getCodeableConcept = function () {
  return /** @type{?proto.google.fhir.stu3.proto.CodeableConcept} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    21
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setCodeableConcept = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    21,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearCodeableConcept = function () {
  return this.setCodeableConcept(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasCodeableConcept = function () {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Coding coding = 22;
 * @return {?proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getCoding = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Coding} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    22
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Coding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setCoding = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    22,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearCoding = function () {
  return this.setCoding(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasCoding = function () {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional ContactPoint contact_point = 23;
 * @return {?proto.google.fhir.stu3.proto.ContactPoint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getContactPoint = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ContactPoint} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.ContactPoint,
    23
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ContactPoint|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setContactPoint = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    23,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearContactPoint = function () {
  return this.setContactPoint(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasContactPoint = function () {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * optional Count count = 24;
 * @return {?proto.google.fhir.stu3.proto.Count}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getCount = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Count} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Count,
    24
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Count|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setCount = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    24,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearCount = function () {
  return this.setCount(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasCount = function () {
  return jspb.Message.getField(this, 24) != null;
};

/**
 * optional Distance distance = 25;
 * @return {?proto.google.fhir.stu3.proto.Distance}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getDistance = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Distance} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Distance,
    25
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Distance|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setDistance = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    25,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearDistance = function () {
  return this.setDistance(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasDistance = function () {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional Duration duration = 26;
 * @return {?proto.google.fhir.stu3.proto.Duration}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getDuration = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Duration} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Duration,
    26
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Duration|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setDuration = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    26,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearDuration = function () {
  return this.setDuration(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasDuration = function () {
  return jspb.Message.getField(this, 26) != null;
};

/**
 * optional HumanName human_name = 27;
 * @return {?proto.google.fhir.stu3.proto.HumanName}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getHumanName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.HumanName} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.HumanName,
    27
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.HumanName|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setHumanName = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    27,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearHumanName = function () {
  return this.setHumanName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasHumanName = function () {
  return jspb.Message.getField(this, 27) != null;
};

/**
 * optional Identifier identifier = 28;
 * @return {?proto.google.fhir.stu3.proto.Identifier}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getIdentifier = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Identifier} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Identifier,
    28
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Identifier|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setIdentifier = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    28,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearIdentifier = function () {
  return this.setIdentifier(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasIdentifier = function () {
  return jspb.Message.getField(this, 28) != null;
};

/**
 * optional Money money = 29;
 * @return {?proto.google.fhir.stu3.proto.Money}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getMoney = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Money} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Money,
    29
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Money|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setMoney = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    29,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearMoney = function () {
  return this.setMoney(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasMoney = function () {
  return jspb.Message.getField(this, 29) != null;
};

/**
 * optional Period period = 30;
 * @return {?proto.google.fhir.stu3.proto.Period}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getPeriod = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Period} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Period,
    30
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Period|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setPeriod = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    30,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearPeriod = function () {
  return this.setPeriod(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasPeriod = function () {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Quantity quantity = 31;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    31
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    31,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Range range = 32;
 * @return {?proto.google.fhir.stu3.proto.Range}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getRange = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Range} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Range,
    32
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Range|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setRange = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    32,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasRange = function () {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional Ratio ratio = 33;
 * @return {?proto.google.fhir.stu3.proto.Ratio}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getRatio = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Ratio} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Ratio,
    33
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Ratio|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setRatio = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    33,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearRatio = function () {
  return this.setRatio(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasRatio = function () {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * optional Reference reference = 34;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    34
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    34,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasReference = function () {
  return jspb.Message.getField(this, 34) != null;
};

/**
 * optional SampledData sampled_data = 35;
 * @return {?proto.google.fhir.stu3.proto.SampledData}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getSampledData = function () {
  return /** @type{?proto.google.fhir.stu3.proto.SampledData} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.SampledData,
    35
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.SampledData|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setSampledData = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    35,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearSampledData = function () {
  return this.setSampledData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasSampledData = function () {
  return jspb.Message.getField(this, 35) != null;
};

/**
 * optional Signature signature = 36;
 * @return {?proto.google.fhir.stu3.proto.Signature}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getSignature = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Signature} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Signature,
    36
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Signature|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setSignature = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    36,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearSignature = function () {
  return this.setSignature(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasSignature = function () {
  return jspb.Message.getField(this, 36) != null;
};

/**
 * optional Timing timing = 37;
 * @return {?proto.google.fhir.stu3.proto.Timing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Timing} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Timing,
    37
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Timing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setTiming = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    37,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearTiming = function () {
  return this.setTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasTiming = function () {
  return jspb.Message.getField(this, 37) != null;
};

/**
 * optional Meta meta = 38;
 * @return {?proto.google.fhir.stu3.proto.Meta}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.getMeta = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Meta} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Meta,
    38
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Meta|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.setMeta = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    38,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value
      .oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.clearMeta = function () {
  return this.setMeta(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.Value.prototype.hasMeta = function () {
  return jspb.Message.getField(this, 38) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String label = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.getLabel = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.setLabel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.clearLabel = function () {
  return this.setLabel(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.hasLabel = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Value value = 4;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.Example.Value}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.getValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.Example.Value} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Example.Value,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.Example.Value|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.setValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.clearValue = function () {
  return this.setValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Example.prototype.hasValue = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_ = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.MinValueCase = {
  MIN_VALUE_NOT_SET: 0,
  DATE: 1,
  DATE_TIME: 2,
  INSTANT: 3,
  TIME: 4,
  DECIMAL: 5,
  INTEGER: 6,
  POSITIVE_INT: 7,
  UNSIGNED_INT: 8,
  QUANTITY: 9
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.MinValue.MinValueCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getMinValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.MinValue.MinValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.MinValue.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.MinValue.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.MinValue();
  return proto.google.fhir.stu3.proto.ElementDefinition.MinValue.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.MinValue.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
};

/**
 * optional Date date = 1;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasDate = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional DateTime date_time = 2;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Instant instant = 3;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Time time = 4;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasTime = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Decimal decimal = 5;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Integer integer = 6;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional PositiveInt positive_int = 7;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional UnsignedInt unsigned_int = 8;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Quantity quantity = 9;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MinValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MinValue.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_ = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.MaxValueCase = {
  MAX_VALUE_NOT_SET: 0,
  DATE: 1,
  DATE_TIME: 2,
  INSTANT: 3,
  TIME: 4,
  DECIMAL: 5,
  INTEGER: 6,
  POSITIVE_INT: 7,
  UNSIGNED_INT: 8,
  QUANTITY: 9
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.MaxValueCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getMaxValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.MaxValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f),
        instant:
          (f = msg.getInstant()) &&
          proto_stu3_datatypes_pb.Instant.toObject(includeInstance, f),
        time:
          (f = msg.getTime()) &&
          proto_stu3_datatypes_pb.Time.toObject(includeInstance, f),
        decimal:
          (f = msg.getDecimal()) &&
          proto_stu3_datatypes_pb.Decimal.toObject(includeInstance, f),
        integer:
          (f = msg.getInteger()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        positiveInt:
          (f = msg.getPositiveInt()) &&
          proto_stu3_datatypes_pb.PositiveInt.toObject(includeInstance, f),
        unsignedInt:
          (f = msg.getUnsignedInt()) &&
          proto_stu3_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.MaxValue();
  return proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Instant();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Instant.deserializeBinaryFromReader
        );
        msg.setInstant(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Time();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Time.deserializeBinaryFromReader
        );
        msg.setTime(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Decimal();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Decimal.deserializeBinaryFromReader
        );
        msg.setDecimal(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setInteger(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.PositiveInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.PositiveInt.deserializeBinaryFromReader
        );
        msg.setPositiveInt(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.UnsignedInt();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.UnsignedInt.deserializeBinaryFromReader
        );
        msg.setUnsignedInt(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getInstant();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Time.serializeBinaryToWriter
    );
  }
  f = message.getDecimal();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getInteger();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getPositiveInt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
};

/**
 * optional Date date = 1;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasDate = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional DateTime date_time = 2;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Instant instant = 3;
 * @return {?proto.google.fhir.stu3.proto.Instant}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getInstant = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Instant} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Instant,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Instant|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setInstant = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearInstant = function () {
  return this.setInstant(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasInstant = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Time time = 4;
 * @return {?proto.google.fhir.stu3.proto.Time}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Time} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Time,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Time|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearTime = function () {
  return this.setTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasTime = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Decimal decimal = 5;
 * @return {?proto.google.fhir.stu3.proto.Decimal}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getDecimal = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Decimal} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Decimal,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Decimal|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setDecimal = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    5,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearDecimal = function () {
  return this.setDecimal(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasDecimal = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Integer integer = 6;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getInteger = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setInteger = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    6,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearInteger = function () {
  return this.setInteger(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasInteger = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional PositiveInt positive_int = 7;
 * @return {?proto.google.fhir.stu3.proto.PositiveInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getPositiveInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.PositiveInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.PositiveInt,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.PositiveInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setPositiveInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    7,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearPositiveInt = function () {
  return this.setPositiveInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasPositiveInt = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional UnsignedInt unsigned_int = 8;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getUnsignedInt = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setUnsignedInt = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    8,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearUnsignedInt = function () {
  return this.setUnsignedInt(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasUnsignedInt = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Quantity quantity = 9;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    9,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.MaxValue.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Constraint.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Constraint.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        key:
          (f = msg.getKey()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        requirements:
          (f = msg.getRequirements()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        severity:
          (f = msg.getSeverity()) &&
          proto_stu3_codes_pb.ConstraintSeverityCode.toObject(
            includeInstance,
            f
          ),
        human:
          (f = msg.getHuman()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        expression:
          (f = msg.getExpression()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        xpath:
          (f = msg.getXpath()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        source:
          (f = msg.getSource()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Constraint();
  return proto.google.fhir.stu3.proto.ElementDefinition.Constraint.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setKey(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setRequirements(value);
        break;
      case 5:
        var value = new proto_stu3_codes_pb.ConstraintSeverityCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.ConstraintSeverityCode.deserializeBinaryFromReader
        );
        msg.setSeverity(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setHuman(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setExpression(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setXpath(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setSource(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Constraint.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getRequirements();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getSeverity();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_codes_pb.ConstraintSeverityCode.serializeBinaryToWriter
    );
  }
  f = message.getHuman();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExpression();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getXpath();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional Id key = 3;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getKey = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setKey = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearKey = function () {
  return this.setKey(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasKey = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String requirements = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getRequirements = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setRequirements = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearRequirements = function () {
  return this.setRequirements(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasRequirements = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional ConstraintSeverityCode severity = 5;
 * @return {?proto.google.fhir.stu3.proto.ConstraintSeverityCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getSeverity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ConstraintSeverityCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.ConstraintSeverityCode,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ConstraintSeverityCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setSeverity = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearSeverity = function () {
  return this.setSeverity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasSeverity = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional String human = 6;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getHuman = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setHuman = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearHuman = function () {
  return this.setHuman(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasHuman = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional String expression = 7;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getExpression = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setExpression = function (
  value
) {
  return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearExpression = function () {
  return this.setExpression(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasExpression = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional String xpath = 8;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getXpath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setXpath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearXpath = function () {
  return this.setXpath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasXpath = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Uri source = 9;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.getSource = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.setSource = function (
  value
) {
  return jspb.Message.setWrapperField(this, 9, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.clearSource = function () {
  return this.setSource(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Constraint.prototype.hasSource = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.repeatedFields_ = [
  2
];

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
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        strength:
          (f = msg.getStrength()) &&
          proto_stu3_codes_pb.BindingStrengthCode.toObject(includeInstance, f),
        description:
          (f = msg.getDescription()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        valueSet:
          (f = msg.getValueSet()) &&
          proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding();
  return proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.BindingStrengthCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.BindingStrengthCode.deserializeBinaryFromReader
        );
        msg.setStrength(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setDescription(value);
        break;
      case 5:
        var value = new proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.ElementDefinition
            .ElementDefinitionBinding.ValueSet.deserializeBinaryFromReader
        );
        msg.setValueSet(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getStrength();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.BindingStrengthCode.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getValueSet();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
        .ValueSet.serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.oneofGroups_ = [
  [1, 2]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.ValueSetCase = {
  VALUE_SET_NOT_SET: 0,
  URI: 1,
  REFERENCE: 2
};

/**
 * @return {proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.ValueSetCase}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.getValueSetCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.ValueSetCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .ValueSet.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        uri:
          (f = msg.getUri()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet();
  return proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUri(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getUri();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};

/**
 * optional Uri uri = 1;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.getUri = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.setUri = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .ValueSet.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.clearUri = function () {
  return this.setUri(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.hasUri = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .ValueSet.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet.prototype.hasReference = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional BindingStrengthCode strength = 3;
 * @return {?proto.google.fhir.stu3.proto.BindingStrengthCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.getStrength = function () {
  return /** @type{?proto.google.fhir.stu3.proto.BindingStrengthCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.BindingStrengthCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.BindingStrengthCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.setStrength = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.clearStrength = function () {
  return this.setStrength(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.hasStrength = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String description = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.getDescription = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.setDescription = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.clearDescription = function () {
  return this.setDescription(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.hasDescription = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional ValueSet value_set = 5;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.getValueSet = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding
      .ValueSet,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.ValueSet|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.setValueSet = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.clearValueSet = function () {
  return this.setValueSet(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding.prototype.hasValueSet = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ElementDefinition.Mapping.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ElementDefinition.Mapping.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        identity:
          (f = msg.getIdentity()) &&
          proto_stu3_datatypes_pb.Id.toObject(includeInstance, f),
        language:
          (f = msg.getLanguage()) &&
          proto_stu3_datatypes_pb.MimeTypeCode.toObject(includeInstance, f),
        map:
          (f = msg.getMap()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        comment:
          (f = msg.getComment()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ElementDefinition.Mapping();
  return proto.google.fhir.stu3.proto.ElementDefinition.Mapping.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Id();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Id.deserializeBinaryFromReader
        );
        msg.setIdentity(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.MimeTypeCode();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.MimeTypeCode.deserializeBinaryFromReader
        );
        msg.setLanguage(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setMap(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setComment(value);
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
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ElementDefinition.Mapping.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getIdentity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Id.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.MimeTypeCode.serializeBinaryToWriter
    );
  }
  f = message.getMap();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getComment();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional Id identity = 3;
 * @return {?proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getIdentity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Id} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Id|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setIdentity = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearIdentity = function () {
  return this.setIdentity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.hasIdentity = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional MimeTypeCode language = 4;
 * @return {?proto.google.fhir.stu3.proto.MimeTypeCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getLanguage = function () {
  return /** @type{?proto.google.fhir.stu3.proto.MimeTypeCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.MimeTypeCode,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.MimeTypeCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setLanguage = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearLanguage = function () {
  return this.setLanguage(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.hasLanguage = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String map = 5;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getMap = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setMap = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearMap = function () {
  return this.setMap(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.hasMap = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional String comment = 6;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.getComment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.setComment = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.clearComment = function () {
  return this.setComment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.Mapping.prototype.hasComment = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional String path = 3;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getPath = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setPath = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearPath = function () {
  return this.setPath(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasPath = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * repeated PropertyRepresentationCode representation = 4;
 * @return {!Array<!proto.google.fhir.stu3.proto.PropertyRepresentationCode>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getRepresentationList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.PropertyRepresentationCode>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_codes_pb.PropertyRepresentationCode,
    4
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.PropertyRepresentationCode>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setRepresentationList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.PropertyRepresentationCode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.PropertyRepresentationCode}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addRepresentation = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    4,
    opt_value,
    proto.google.fhir.stu3.proto.PropertyRepresentationCode,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearRepresentationList = function () {
  return this.setRepresentationList([]);
};

/**
 * optional String slice_name = 5;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getSliceName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setSliceName = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearSliceName = function () {
  return this.setSliceName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasSliceName = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional String label = 6;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getLabel = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setLabel = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearLabel = function () {
  return this.setLabel(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasLabel = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * repeated Coding code = 7;
 * @return {!Array<!proto.google.fhir.stu3.proto.Coding>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getCodeList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Coding>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    7
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Coding>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setCodeList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Coding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addCode = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    7,
    opt_value,
    proto.google.fhir.stu3.proto.Coding,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearCodeList = function () {
  return this.setCodeList([]);
};

/**
 * optional Slicing slicing = 8;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.Slicing}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getSlicing = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.Slicing} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Slicing,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.Slicing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setSlicing = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearSlicing = function () {
  return this.setSlicing(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasSlicing = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional String short = 9;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getShort = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setShort = function (
  value
) {
  return jspb.Message.setWrapperField(this, 9, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearShort = function () {
  return this.setShort(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasShort = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * optional Markdown definition = 10;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getDefinition = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    10
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setDefinition = function (
  value
) {
  return jspb.Message.setWrapperField(this, 10, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearDefinition = function () {
  return this.setDefinition(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasDefinition = function () {
  return jspb.Message.getField(this, 10) != null;
};

/**
 * optional Markdown comment = 11;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getComment = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    11
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setComment = function (
  value
) {
  return jspb.Message.setWrapperField(this, 11, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearComment = function () {
  return this.setComment(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasComment = function () {
  return jspb.Message.getField(this, 11) != null;
};

/**
 * optional Markdown requirements = 12;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getRequirements = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    12
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setRequirements = function (
  value
) {
  return jspb.Message.setWrapperField(this, 12, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearRequirements = function () {
  return this.setRequirements(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasRequirements = function () {
  return jspb.Message.getField(this, 12) != null;
};

/**
 * repeated String alias = 13;
 * @return {!Array<!proto.google.fhir.stu3.proto.String>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getAliasList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.String>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    13
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.String>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setAliasList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.String=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addAlias = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    13,
    opt_value,
    proto.google.fhir.stu3.proto.String,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearAliasList = function () {
  return this.setAliasList([]);
};

/**
 * optional UnsignedInt min = 14;
 * @return {?proto.google.fhir.stu3.proto.UnsignedInt}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMin = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UnsignedInt} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.UnsignedInt,
    14
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMin = function (
  value
) {
  return jspb.Message.setWrapperField(this, 14, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMin = function () {
  return this.setMin(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMin = function () {
  return jspb.Message.getField(this, 14) != null;
};

/**
 * optional String max = 15;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMax = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    15
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMax = function (
  value
) {
  return jspb.Message.setWrapperField(this, 15, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMax = function () {
  return this.setMax(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMax = function () {
  return jspb.Message.getField(this, 15) != null;
};

/**
 * optional Base base = 16;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.Base}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getBase = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.Base} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Base,
    16
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.Base|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setBase = function (
  value
) {
  return jspb.Message.setWrapperField(this, 16, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearBase = function () {
  return this.setBase(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasBase = function () {
  return jspb.Message.getField(this, 16) != null;
};

/**
 * optional Uri content_reference = 17;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getContentReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    17
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setContentReference = function (
  value
) {
  return jspb.Message.setWrapperField(this, 17, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearContentReference = function () {
  return this.setContentReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasContentReference = function () {
  return jspb.Message.getField(this, 17) != null;
};

/**
 * repeated TypeRef type = 18;
 * @return {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getTypeList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.TypeRef,
    18
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setTypeList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.TypeRef}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addType = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    18,
    opt_value,
    proto.google.fhir.stu3.proto.ElementDefinition.TypeRef,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearTypeList = function () {
  return this.setTypeList([]);
};

/**
 * optional DefaultValue default_value = 19;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getDefaultValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue,
    19
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.DefaultValue|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setDefaultValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 19, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearDefaultValue = function () {
  return this.setDefaultValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasDefaultValue = function () {
  return jspb.Message.getField(this, 19) != null;
};

/**
 * optional Markdown meaning_when_missing = 20;
 * @return {?proto.google.fhir.stu3.proto.Markdown}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMeaningWhenMissing = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Markdown} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Markdown,
    20
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Markdown|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMeaningWhenMissing = function (
  value
) {
  return jspb.Message.setWrapperField(this, 20, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMeaningWhenMissing = function () {
  return this.setMeaningWhenMissing(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMeaningWhenMissing = function () {
  return jspb.Message.getField(this, 20) != null;
};

/**
 * optional String order_meaning = 21;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getOrderMeaning = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    21
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setOrderMeaning = function (
  value
) {
  return jspb.Message.setWrapperField(this, 21, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearOrderMeaning = function () {
  return this.setOrderMeaning(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasOrderMeaning = function () {
  return jspb.Message.getField(this, 21) != null;
};

/**
 * optional Fixed fixed = 22;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.Fixed}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getFixed = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.Fixed} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Fixed,
    22
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.Fixed|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setFixed = function (
  value
) {
  return jspb.Message.setWrapperField(this, 22, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearFixed = function () {
  return this.setFixed(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasFixed = function () {
  return jspb.Message.getField(this, 22) != null;
};

/**
 * optional Pattern pattern = 23;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.Pattern}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getPattern = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.Pattern} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Pattern,
    23
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.Pattern|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setPattern = function (
  value
) {
  return jspb.Message.setWrapperField(this, 23, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearPattern = function () {
  return this.setPattern(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasPattern = function () {
  return jspb.Message.getField(this, 23) != null;
};

/**
 * repeated Example example = 24;
 * @return {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Example>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getExampleList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Example>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Example,
    24
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Example>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setExampleList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Example=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Example}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addExample = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    24,
    opt_value,
    proto.google.fhir.stu3.proto.ElementDefinition.Example,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearExampleList = function () {
  return this.setExampleList([]);
};

/**
 * optional MinValue min_value = 25;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.MinValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMinValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.MinValue} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.MinValue,
    25
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.MinValue|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMinValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 25, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMinValue = function () {
  return this.setMinValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMinValue = function () {
  return jspb.Message.getField(this, 25) != null;
};

/**
 * optional MaxValue max_value = 26;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.MaxValue}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMaxValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.MaxValue} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.MaxValue,
    26
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.MaxValue|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMaxValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 26, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMaxValue = function () {
  return this.setMaxValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMaxValue = function () {
  return jspb.Message.getField(this, 26) != null;
};

/**
 * optional Integer max_length = 27;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMaxLength = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    27
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMaxLength = function (
  value
) {
  return jspb.Message.setWrapperField(this, 27, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMaxLength = function () {
  return this.setMaxLength(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMaxLength = function () {
  return jspb.Message.getField(this, 27) != null;
};

/**
 * repeated Id condition = 28;
 * @return {!Array<!proto.google.fhir.stu3.proto.Id>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getConditionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Id>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Id,
    28
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Id>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setConditionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 28, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Id}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addCondition = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    28,
    opt_value,
    proto.google.fhir.stu3.proto.Id,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearConditionList = function () {
  return this.setConditionList([]);
};

/**
 * repeated Constraint constraint = 29;
 * @return {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Constraint>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getConstraintList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Constraint>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Constraint,
    29
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Constraint>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setConstraintList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 29, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Constraint}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addConstraint = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    29,
    opt_value,
    proto.google.fhir.stu3.proto.ElementDefinition.Constraint,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearConstraintList = function () {
  return this.setConstraintList([]);
};

/**
 * optional Boolean must_support = 30;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMustSupport = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    30
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMustSupport = function (
  value
) {
  return jspb.Message.setWrapperField(this, 30, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMustSupport = function () {
  return this.setMustSupport(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasMustSupport = function () {
  return jspb.Message.getField(this, 30) != null;
};

/**
 * optional Boolean is_modifier = 31;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getIsModifier = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    31
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setIsModifier = function (
  value
) {
  return jspb.Message.setWrapperField(this, 31, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearIsModifier = function () {
  return this.setIsModifier(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasIsModifier = function () {
  return jspb.Message.getField(this, 31) != null;
};

/**
 * optional Boolean is_summary = 32;
 * @return {?proto.google.fhir.stu3.proto.Boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getIsSummary = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Boolean} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Boolean,
    32
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Boolean|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setIsSummary = function (
  value
) {
  return jspb.Message.setWrapperField(this, 32, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearIsSummary = function () {
  return this.setIsSummary(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasIsSummary = function () {
  return jspb.Message.getField(this, 32) != null;
};

/**
 * optional ElementDefinitionBinding binding = 33;
 * @return {?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getBinding = function () {
  return /** @type{?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding,
    33
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.ElementDefinition.ElementDefinitionBinding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setBinding = function (
  value
) {
  return jspb.Message.setWrapperField(this, 33, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearBinding = function () {
  return this.setBinding(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.hasBinding = function () {
  return jspb.Message.getField(this, 33) != null;
};

/**
 * repeated Mapping mapping = 34;
 * @return {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Mapping>}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.getMappingList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Mapping>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.google.fhir.stu3.proto.ElementDefinition.Mapping,
    34
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.ElementDefinition.Mapping>} value
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.setMappingList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 34, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition.Mapping}
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.addMapping = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    34,
    opt_value,
    proto.google.fhir.stu3.proto.ElementDefinition.Mapping,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ElementDefinition} returns this
 */
proto.google.fhir.stu3.proto.ElementDefinition.prototype.clearMappingList = function () {
  return this.setMappingList([]);
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.Narrative.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.Narrative.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.Narrative.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.Narrative} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.Narrative.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        status:
          (f = msg.getStatus()) &&
          proto_stu3_codes_pb.NarrativeStatusCode.toObject(includeInstance, f),
        div:
          (f = msg.getDiv()) &&
          proto_stu3_datatypes_pb.Xhtml.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.Narrative}
 */
proto.google.fhir.stu3.proto.Narrative.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.Narrative();
  return proto.google.fhir.stu3.proto.Narrative.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.Narrative} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.Narrative}
 */
proto.google.fhir.stu3.proto.Narrative.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.NarrativeStatusCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.NarrativeStatusCode.deserializeBinaryFromReader
        );
        msg.setStatus(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.Xhtml();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Xhtml.deserializeBinaryFromReader
        );
        msg.setDiv(value);
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
proto.google.fhir.stu3.proto.Narrative.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.Narrative.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.Narrative} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.Narrative.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.NarrativeStatusCode.serializeBinaryToWriter
    );
  }
  f = message.getDiv();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.Xhtml.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.setId = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional NarrativeStatusCode status = 3;
 * @return {?proto.google.fhir.stu3.proto.NarrativeStatusCode}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.getStatus = function () {
  return /** @type{?proto.google.fhir.stu3.proto.NarrativeStatusCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.NarrativeStatusCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.NarrativeStatusCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.setStatus = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.clearStatus = function () {
  return this.setStatus(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.hasStatus = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Xhtml div = 4;
 * @return {?proto.google.fhir.stu3.proto.Xhtml}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.getDiv = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Xhtml} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Xhtml,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Xhtml|undefined} value
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.setDiv = function (value) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.Narrative} returns this
 */
proto.google.fhir.stu3.proto.Narrative.prototype.clearDiv = function () {
  return this.setDiv(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.Narrative.prototype.hasDiv = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.ParameterDefinition.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.ParameterDefinition.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.ParameterDefinition.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.ParameterDefinition} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.ParameterDefinition.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        name:
          (f = msg.getName()) &&
          proto_stu3_datatypes_pb.Code.toObject(includeInstance, f),
        use:
          (f = msg.getUse()) &&
          proto_stu3_codes_pb.OperationParameterUseCode.toObject(
            includeInstance,
            f
          ),
        min:
          (f = msg.getMin()) &&
          proto_stu3_datatypes_pb.Integer.toObject(includeInstance, f),
        max:
          (f = msg.getMax()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        documentation:
          (f = msg.getDocumentation()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.FHIRAllTypesCode.toObject(includeInstance, f),
        profile:
          (f = msg.getProfile()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.ParameterDefinition();
  return proto.google.fhir.stu3.proto.ParameterDefinition.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.ParameterDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Code();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Code.deserializeBinaryFromReader
        );
        msg.setName(value);
        break;
      case 4:
        var value = new proto_stu3_codes_pb.OperationParameterUseCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.OperationParameterUseCode
            .deserializeBinaryFromReader
        );
        msg.setUse(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.Integer();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Integer.deserializeBinaryFromReader
        );
        msg.setMin(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setMax(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setDocumentation(value);
        break;
      case 8:
        var value = new proto_stu3_codes_pb.FHIRAllTypesCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.FHIRAllTypesCode.deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 9:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setProfile(value);
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
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.ParameterDefinition.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.ParameterDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.ParameterDefinition.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Code.serializeBinaryToWriter
    );
  }
  f = message.getUse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_codes_pb.OperationParameterUseCode.serializeBinaryToWriter
    );
  }
  f = message.getMin();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.Integer.serializeBinaryToWriter
    );
  }
  f = message.getMax();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getDocumentation();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_codes_pb.FHIRAllTypesCode.serializeBinaryToWriter
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional Code name = 3;
 * @return {?proto.google.fhir.stu3.proto.Code}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Code} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Code,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Code|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setName = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearName = function () {
  return this.setName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasName = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional OperationParameterUseCode use = 4;
 * @return {?proto.google.fhir.stu3.proto.OperationParameterUseCode}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getUse = function () {
  return /** @type{?proto.google.fhir.stu3.proto.OperationParameterUseCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.OperationParameterUseCode,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.OperationParameterUseCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setUse = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearUse = function () {
  return this.setUse(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasUse = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional Integer min = 5;
 * @return {?proto.google.fhir.stu3.proto.Integer}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getMin = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Integer} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Integer,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Integer|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setMin = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearMin = function () {
  return this.setMin(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasMin = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional String max = 6;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getMax = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setMax = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearMax = function () {
  return this.setMax(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasMax = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional String documentation = 7;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getDocumentation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setDocumentation = function (
  value
) {
  return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearDocumentation = function () {
  return this.setDocumentation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasDocumentation = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional FHIRAllTypesCode type = 8;
 * @return {?proto.google.fhir.stu3.proto.FHIRAllTypesCode}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.FHIRAllTypesCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.FHIRAllTypesCode,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.FHIRAllTypesCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setType = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasType = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * optional Reference profile = 9;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.getProfile = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    9
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.setProfile = function (
  value
) {
  return jspb.Message.setWrapperField(this, 9, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.ParameterDefinition} returns this
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.clearProfile = function () {
  return this.setProfile(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.ParameterDefinition.prototype.hasProfile = function () {
  return jspb.Message.getField(this, 9) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.RelatedArtifact.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.RelatedArtifact.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.RelatedArtifact.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.RelatedArtifact} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.RelatedArtifact.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.RelatedArtifactTypeCode.toObject(
            includeInstance,
            f
          ),
        display:
          (f = msg.getDisplay()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        citation:
          (f = msg.getCitation()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        url:
          (f = msg.getUrl()) &&
          proto_stu3_datatypes_pb.Uri.toObject(includeInstance, f),
        document:
          (f = msg.getDocument()) &&
          proto_stu3_datatypes_pb.Attachment.toObject(includeInstance, f),
        resource:
          (f = msg.getResource()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.RelatedArtifact();
  return proto.google.fhir.stu3.proto.RelatedArtifact.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.RelatedArtifact} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.RelatedArtifactTypeCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.RelatedArtifactTypeCode
            .deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setDisplay(value);
        break;
      case 5:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setCitation(value);
        break;
      case 6:
        var value = new proto_stu3_datatypes_pb.Uri();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Uri.deserializeBinaryFromReader
        );
        msg.setUrl(value);
        break;
      case 7:
        var value = new proto_stu3_datatypes_pb.Attachment();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Attachment.deserializeBinaryFromReader
        );
        msg.setDocument(value);
        break;
      case 8:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setResource(value);
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
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.RelatedArtifact.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.RelatedArtifact} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.RelatedArtifact.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.RelatedArtifactTypeCode.serializeBinaryToWriter
    );
  }
  f = message.getDisplay();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getCitation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_stu3_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getDocument();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_stu3_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional RelatedArtifactTypeCode type = 3;
 * @return {?proto.google.fhir.stu3.proto.RelatedArtifactTypeCode}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.RelatedArtifactTypeCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.RelatedArtifactTypeCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.RelatedArtifactTypeCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setType = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasType = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String display = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getDisplay = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setDisplay = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearDisplay = function () {
  return this.setDisplay(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasDisplay = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String citation = 5;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getCitation = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setCitation = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearCitation = function () {
  return this.setCitation(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasCitation = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional Uri url = 6;
 * @return {?proto.google.fhir.stu3.proto.Uri}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getUrl = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Uri} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Uri,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Uri|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setUrl = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearUrl = function () {
  return this.setUrl(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasUrl = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * optional Attachment document = 7;
 * @return {?proto.google.fhir.stu3.proto.Attachment}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getDocument = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Attachment} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Attachment,
    7
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Attachment|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setDocument = function (
  value
) {
  return jspb.Message.setWrapperField(this, 7, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearDocument = function () {
  return this.setDocument(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasDocument = function () {
  return jspb.Message.getField(this, 7) != null;
};

/**
 * optional Reference resource = 8;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.getResource = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    8
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.setResource = function (
  value
) {
  return jspb.Message.setWrapperField(this, 8, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.RelatedArtifact} returns this
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.clearResource = function () {
  return this.setResource(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.RelatedArtifact.prototype.hasResource = function () {
  return jspb.Message.getField(this, 8) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.TriggerDefinition.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.TriggerDefinition.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.TriggerDefinition.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.TriggerDefinition} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.TriggerDefinition.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        type:
          (f = msg.getType()) &&
          proto_stu3_codes_pb.TriggerTypeCode.toObject(includeInstance, f),
        eventName:
          (f = msg.getEventName()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        eventTiming:
          (f = msg.getEventTiming()) &&
          proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.toObject(
            includeInstance,
            f
          ),
        eventData:
          (f = msg.getEventData()) &&
          proto.google.fhir.stu3.proto.DataRequirement.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.TriggerDefinition();
  return proto.google.fhir.stu3.proto.TriggerDefinition.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.TriggerDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_codes_pb.TriggerTypeCode();
        reader.readMessage(
          value,
          proto_stu3_codes_pb.TriggerTypeCode.deserializeBinaryFromReader
        );
        msg.setType(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setEventName(value);
        break;
      case 5:
        var value = new proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming
            .deserializeBinaryFromReader
        );
        msg.setEventTiming(value);
        break;
      case 6:
        var value = new proto.google.fhir.stu3.proto.DataRequirement();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.DataRequirement
            .deserializeBinaryFromReader
        );
        msg.setEventData(value);
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
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.TriggerDefinition.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.TriggerDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.TriggerDefinition.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_codes_pb.TriggerTypeCode.serializeBinaryToWriter
    );
  }
  f = message.getEventName();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getEventTiming();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming
        .serializeBinaryToWriter
    );
  }
  f = message.getEventData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.fhir.stu3.proto.DataRequirement.serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_ = [
  [1, 2, 3, 4]
];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.EventTimingCase = {
  EVENT_TIMING_NOT_SET: 0,
  TIMING: 1,
  REFERENCE: 2,
  DATE: 3,
  DATE_TIME: 4
};

/**
 * @return {proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.EventTimingCase}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.getEventTimingCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.EventTimingCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        timing:
          (f = msg.getTiming()) &&
          proto_stu3_datatypes_pb.Timing.toObject(includeInstance, f),
        reference:
          (f = msg.getReference()) &&
          proto_stu3_datatypes_pb.Reference.toObject(includeInstance, f),
        date:
          (f = msg.getDate()) &&
          proto_stu3_datatypes_pb.Date.toObject(includeInstance, f),
        dateTime:
          (f = msg.getDateTime()) &&
          proto_stu3_datatypes_pb.DateTime.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming();
  return proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.Timing();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Timing.deserializeBinaryFromReader
        );
        msg.setTiming(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Reference();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Reference.deserializeBinaryFromReader
        );
        msg.setReference(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Date();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Date.deserializeBinaryFromReader
        );
        msg.setDate(value);
        break;
      case 4:
        var value = new proto_stu3_datatypes_pb.DateTime();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.DateTime.deserializeBinaryFromReader
        );
        msg.setDateTime(value);
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
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.Timing.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getDateTime();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_stu3_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
};

/**
 * optional Timing timing = 1;
 * @return {?proto.google.fhir.stu3.proto.Timing}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.getTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Timing} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Timing,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Timing|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.setTiming = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.clearTiming = function () {
  return this.setTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.hasTiming = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.stu3.proto.Reference}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.getReference = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Reference} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Reference,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Reference|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.setReference = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.clearReference = function () {
  return this.setReference(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.hasReference = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Date date = 3;
 * @return {?proto.google.fhir.stu3.proto.Date}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.getDate = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Date} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Date,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Date|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.setDate = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.clearDate = function () {
  return this.setDate(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.hasDate = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional DateTime date_time = 4;
 * @return {?proto.google.fhir.stu3.proto.DateTime}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.getDateTime = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DateTime} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.DateTime,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DateTime|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.setDateTime = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    4,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.clearDateTime = function () {
  return this.setDateTime(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming.prototype.hasDateTime = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setId = function (
  value
) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional TriggerTypeCode type = 3;
 * @return {?proto.google.fhir.stu3.proto.TriggerTypeCode}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getType = function () {
  return /** @type{?proto.google.fhir.stu3.proto.TriggerTypeCode} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_codes_pb.TriggerTypeCode,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.TriggerTypeCode|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setType = function (
  value
) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearType = function () {
  return this.setType(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.hasType = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String event_name = 4;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getEventName = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setEventName = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearEventName = function () {
  return this.setEventName(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.hasEventName = function () {
  return jspb.Message.getField(this, 4) != null;
};

/**
 * optional EventTiming event_timing = 5;
 * @return {?proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getEventTiming = function () {
  return /** @type{?proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming,
    5
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.TriggerDefinition.EventTiming|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setEventTiming = function (
  value
) {
  return jspb.Message.setWrapperField(this, 5, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearEventTiming = function () {
  return this.setEventTiming(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.hasEventTiming = function () {
  return jspb.Message.getField(this, 5) != null;
};

/**
 * optional DataRequirement event_data = 6;
 * @return {?proto.google.fhir.stu3.proto.DataRequirement}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.getEventData = function () {
  return /** @type{?proto.google.fhir.stu3.proto.DataRequirement} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.DataRequirement,
    6
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.DataRequirement|undefined} value
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.setEventData = function (
  value
) {
  return jspb.Message.setWrapperField(this, 6, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.TriggerDefinition} returns this
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.clearEventData = function () {
  return this.setEventData(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.TriggerDefinition.prototype.hasEventData = function () {
  return jspb.Message.getField(this, 6) != null;
};

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.stu3.proto.UsageContext.repeatedFields_ = [2];

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
  proto.google.fhir.stu3.proto.UsageContext.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.UsageContext.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.UsageContext} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.UsageContext.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        id:
          (f = msg.getId()) &&
          proto_stu3_datatypes_pb.String.toObject(includeInstance, f),
        extensionList: jspb.Message.toObjectList(
          msg.getExtensionList(),
          proto_stu3_datatypes_pb.Extension.toObject,
          includeInstance
        ),
        code:
          (f = msg.getCode()) &&
          proto_stu3_datatypes_pb.Coding.toObject(includeInstance, f),
        value:
          (f = msg.getValue()) &&
          proto.google.fhir.stu3.proto.UsageContext.Value.toObject(
            includeInstance,
            f
          )
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
 * @return {!proto.google.fhir.stu3.proto.UsageContext}
 */
proto.google.fhir.stu3.proto.UsageContext.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.UsageContext();
  return proto.google.fhir.stu3.proto.UsageContext.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.UsageContext} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.UsageContext}
 */
proto.google.fhir.stu3.proto.UsageContext.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.String();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.String.deserializeBinaryFromReader
        );
        msg.setId(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Extension();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Extension.deserializeBinaryFromReader
        );
        msg.addExtension$(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Coding();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Coding.deserializeBinaryFromReader
        );
        msg.setCode(value);
        break;
      case 4:
        var value = new proto.google.fhir.stu3.proto.UsageContext.Value();
        reader.readMessage(
          value,
          proto.google.fhir.stu3.proto.UsageContext.Value
            .deserializeBinaryFromReader
        );
        msg.setValue(value);
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
proto.google.fhir.stu3.proto.UsageContext.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.UsageContext.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.UsageContext} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.UsageContext.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Coding.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.stu3.proto.UsageContext.Value.serializeBinaryToWriter
    );
  }
};

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_ = [[1, 2, 3]];

/**
 * @enum {number}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.ValueCase = {
  VALUE_NOT_SET: 0,
  CODEABLE_CONCEPT: 1,
  QUANTITY: 2,
  RANGE: 3
};

/**
 * @return {proto.google.fhir.stu3.proto.UsageContext.Value.ValueCase}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.getValueCase = function () {
  return /** @type {proto.google.fhir.stu3.proto.UsageContext.Value.ValueCase} */ (jspb.Message.computeOneofCase(
    this,
    proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_[0]
  ));
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
  proto.google.fhir.stu3.proto.UsageContext.Value.prototype.toObject = function (
    opt_includeInstance
  ) {
    return proto.google.fhir.stu3.proto.UsageContext.Value.toObject(
      opt_includeInstance,
      this
    );
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.google.fhir.stu3.proto.UsageContext.Value} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.google.fhir.stu3.proto.UsageContext.Value.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        codeableConcept:
          (f = msg.getCodeableConcept()) &&
          proto_stu3_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
        quantity:
          (f = msg.getQuantity()) &&
          proto_stu3_datatypes_pb.Quantity.toObject(includeInstance, f),
        range:
          (f = msg.getRange()) &&
          proto_stu3_datatypes_pb.Range.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.stu3.proto.UsageContext.Value();
  return proto.google.fhir.stu3.proto.UsageContext.Value.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.stu3.proto.UsageContext.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.deserializeBinaryFromReader = function (
  msg,
  reader
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto_stu3_datatypes_pb.CodeableConcept();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.CodeableConcept.deserializeBinaryFromReader
        );
        msg.setCodeableConcept(value);
        break;
      case 2:
        var value = new proto_stu3_datatypes_pb.Quantity();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Quantity.deserializeBinaryFromReader
        );
        msg.setQuantity(value);
        break;
      case 3:
        var value = new proto_stu3_datatypes_pb.Range();
        reader.readMessage(
          value,
          proto_stu3_datatypes_pb.Range.deserializeBinaryFromReader
        );
        msg.setRange(value);
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
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.stu3.proto.UsageContext.Value.serializeBinaryToWriter(
    this,
    writer
  );
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.stu3.proto.UsageContext.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.stu3.proto.UsageContext.Value.serializeBinaryToWriter = function (
  message,
  writer
) {
  var f = undefined;
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_stu3_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_stu3_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_stu3_datatypes_pb.Range.serializeBinaryToWriter
    );
  }
};

/**
 * optional CodeableConcept codeable_concept = 1;
 * @return {?proto.google.fhir.stu3.proto.CodeableConcept}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.getCodeableConcept = function () {
  return /** @type{?proto.google.fhir.stu3.proto.CodeableConcept} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.CodeableConcept,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.setCodeableConcept = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    1,
    proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.clearCodeableConcept = function () {
  return this.setCodeableConcept(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.hasCodeableConcept = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional Quantity quantity = 2;
 * @return {?proto.google.fhir.stu3.proto.Quantity}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.getQuantity = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Quantity} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Quantity,
    2
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Quantity|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.setQuantity = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    2,
    proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.clearQuantity = function () {
  return this.setQuantity(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.hasQuantity = function () {
  return jspb.Message.getField(this, 2) != null;
};

/**
 * optional Range range = 3;
 * @return {?proto.google.fhir.stu3.proto.Range}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.getRange = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Range} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Range,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Range|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.setRange = function (
  value
) {
  return jspb.Message.setOneofWrapperField(
    this,
    3,
    proto.google.fhir.stu3.proto.UsageContext.Value.oneofGroups_[0],
    value
  );
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext.Value} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.clearRange = function () {
  return this.setRange(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.Value.prototype.hasRange = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional String id = 1;
 * @return {?proto.google.fhir.stu3.proto.String}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.getId = function () {
  return /** @type{?proto.google.fhir.stu3.proto.String} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.String,
    1
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.String|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.setId = function (value) {
  return jspb.Message.setWrapperField(this, 1, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.clearId = function () {
  return this.setId(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.hasId = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.stu3.proto.Extension>}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.getExtensionList = function () {
  return /** @type{!Array<!proto.google.fhir.stu3.proto.Extension>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto_stu3_datatypes_pb.Extension,
    2
  ));
};

/**
 * @param {!Array<!proto.google.fhir.stu3.proto.Extension>} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.setExtensionList = function (
  value
) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.google.fhir.stu3.proto.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.stu3.proto.Extension}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.addExtension$ = function (
  opt_value,
  opt_index
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    2,
    opt_value,
    proto.google.fhir.stu3.proto.Extension,
    opt_index
  );
};

/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.clearExtensionList = function () {
  return this.setExtensionList([]);
};

/**
 * optional Coding code = 3;
 * @return {?proto.google.fhir.stu3.proto.Coding}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.getCode = function () {
  return /** @type{?proto.google.fhir.stu3.proto.Coding} */ (jspb.Message.getWrapperField(
    this,
    proto_stu3_datatypes_pb.Coding,
    3
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.Coding|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.setCode = function (value) {
  return jspb.Message.setWrapperField(this, 3, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.clearCode = function () {
  return this.setCode(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.hasCode = function () {
  return jspb.Message.getField(this, 3) != null;
};

/**
 * optional Value value = 4;
 * @return {?proto.google.fhir.stu3.proto.UsageContext.Value}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.getValue = function () {
  return /** @type{?proto.google.fhir.stu3.proto.UsageContext.Value} */ (jspb.Message.getWrapperField(
    this,
    proto.google.fhir.stu3.proto.UsageContext.Value,
    4
  ));
};

/**
 * @param {?proto.google.fhir.stu3.proto.UsageContext.Value|undefined} value
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.setValue = function (
  value
) {
  return jspb.Message.setWrapperField(this, 4, value);
};

/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.stu3.proto.UsageContext} returns this
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.clearValue = function () {
  return this.setValue(undefined);
};

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.stu3.proto.UsageContext.prototype.hasValue = function () {
  return jspb.Message.getField(this, 4) != null;
};

goog.object.extend(exports, proto.google.fhir.stu3.proto);
