// source: proto/r4/core/resources/explanation_of_benefit.proto
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
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Accident', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Note', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Payee', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Payment', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.ChoiceCase', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.Total', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode', null, global);
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
proto.google.fhir.r4.core.ExplanationOfBenefit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Payee, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Payee';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Accident, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Accident';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Total = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Total.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Total, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Total.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Total';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Payment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Payment';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Note.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Note, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Note.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Note';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX';
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.displayName = 'proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.repeatedFields_ = [6,8,9,10,24,34,35,36,37,38,39,41,43,44,45,46,50,52];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.toObject = function(includeInstance, msg) {
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
    status: (f = msg.getStatus()) && proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    subType: (f = msg.getSubType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    use: (f = msg.getUse()) && proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.toObject(includeInstance, f),
    patient: (f = msg.getPatient()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    billablePeriod: (f = msg.getBillablePeriod()) && proto_r4_core_datatypes_pb.Period.toObject(includeInstance, f),
    created: (f = msg.getCreated()) && proto_r4_core_datatypes_pb.DateTime.toObject(includeInstance, f),
    enterer: (f = msg.getEnterer()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    insurer: (f = msg.getInsurer()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    provider: (f = msg.getProvider()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    priority: (f = msg.getPriority()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    fundsReserveRequested: (f = msg.getFundsReserveRequested()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    fundsReserve: (f = msg.getFundsReserve()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    relatedList: jspb.Message.toObjectList(msg.getRelatedList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.toObject, includeInstance),
    prescription: (f = msg.getPrescription()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    originalPrescription: (f = msg.getOriginalPrescription()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    payee: (f = msg.getPayee()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.toObject(includeInstance, f),
    referral: (f = msg.getReferral()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    facility: (f = msg.getFacility()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    claim: (f = msg.getClaim()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    claimResponse: (f = msg.getClaimResponse()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    outcome: (f = msg.getOutcome()) && proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.toObject(includeInstance, f),
    disposition: (f = msg.getDisposition()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    preAuthRefList: jspb.Message.toObjectList(msg.getPreAuthRefList(),
    proto_r4_core_datatypes_pb.String.toObject, includeInstance),
    preAuthRefPeriodList: jspb.Message.toObjectList(msg.getPreAuthRefPeriodList(),
    proto_r4_core_datatypes_pb.Period.toObject, includeInstance),
    careTeamList: jspb.Message.toObjectList(msg.getCareTeamList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.toObject, includeInstance),
    supportingInfoList: jspb.Message.toObjectList(msg.getSupportingInfoList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.toObject, includeInstance),
    diagnosisList: jspb.Message.toObjectList(msg.getDiagnosisList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.toObject, includeInstance),
    procedureList: jspb.Message.toObjectList(msg.getProcedureList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.toObject, includeInstance),
    precedence: (f = msg.getPrecedence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    insuranceList: jspb.Message.toObjectList(msg.getInsuranceList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.toObject, includeInstance),
    accident: (f = msg.getAccident()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.toObject(includeInstance, f),
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.toObject, includeInstance),
    addItemList: jspb.Message.toObjectList(msg.getAddItemList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance),
    totalList: jspb.Message.toObjectList(msg.getTotalList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Total.toObject, includeInstance),
    payment: (f = msg.getPayment()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.toObject(includeInstance, f),
    formCode: (f = msg.getFormCode()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    form: (f = msg.getForm()) && proto_r4_core_datatypes_pb.Attachment.toObject(includeInstance, f),
    processNoteList: jspb.Message.toObjectList(msg.getProcessNoteList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Note.toObject, includeInstance),
    benefitPeriod: (f = msg.getBenefitPeriod()) && proto_r4_core_datatypes_pb.Period.toObject(includeInstance, f),
    benefitBalanceList: jspb.Message.toObjectList(msg.getBenefitBalanceList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setSubType(value);
      break;
    case 14:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.deserializeBinaryFromReader);
      msg.setUse(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setPatient(value);
      break;
    case 16:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.setBillablePeriod(value);
      break;
    case 17:
      var value = new proto_r4_core_datatypes_pb.DateTime;
      reader.readMessage(value,proto_r4_core_datatypes_pb.DateTime.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    case 18:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setEnterer(value);
      break;
    case 19:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setInsurer(value);
      break;
    case 20:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 21:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setPriority(value);
      break;
    case 22:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setFundsReserveRequested(value);
      break;
    case 23:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setFundsReserve(value);
      break;
    case 24:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.deserializeBinaryFromReader);
      msg.addRelated(value);
      break;
    case 25:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setPrescription(value);
      break;
    case 26:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setOriginalPrescription(value);
      break;
    case 27:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Payee;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.deserializeBinaryFromReader);
      msg.setPayee(value);
      break;
    case 28:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setReferral(value);
      break;
    case 29:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setFacility(value);
      break;
    case 30:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setClaim(value);
      break;
    case 31:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setClaimResponse(value);
      break;
    case 32:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.deserializeBinaryFromReader);
      msg.setOutcome(value);
      break;
    case 33:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setDisposition(value);
      break;
    case 34:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.addPreAuthRef(value);
      break;
    case 35:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.addPreAuthRefPeriod(value);
      break;
    case 36:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.deserializeBinaryFromReader);
      msg.addCareTeam(value);
      break;
    case 37:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.deserializeBinaryFromReader);
      msg.addSupportingInfo(value);
      break;
    case 38:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.deserializeBinaryFromReader);
      msg.addDiagnosis(value);
      break;
    case 39:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.deserializeBinaryFromReader);
      msg.addProcedure(value);
      break;
    case 40:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setPrecedence(value);
      break;
    case 41:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.deserializeBinaryFromReader);
      msg.addInsurance(value);
      break;
    case 42:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Accident;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.deserializeBinaryFromReader);
      msg.setAccident(value);
      break;
    case 43:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    case 44:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.deserializeBinaryFromReader);
      msg.addAddItem(value);
      break;
    case 45:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
      break;
    case 46:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Total;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Total.deserializeBinaryFromReader);
      msg.addTotal(value);
      break;
    case 47:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Payment;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.deserializeBinaryFromReader);
      msg.setPayment(value);
      break;
    case 48:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setFormCode(value);
      break;
    case 49:
      var value = new proto_r4_core_datatypes_pb.Attachment;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Attachment.deserializeBinaryFromReader);
      msg.setForm(value);
      break;
    case 50:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Note;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Note.deserializeBinaryFromReader);
      msg.addProcessNote(value);
      break;
    case 51:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.setBenefitPeriod(value);
      break;
    case 52:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.deserializeBinaryFromReader);
      msg.addBenefitBalance(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.serializeBinaryToWriter = function(message, writer) {
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
      proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getSubType();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getUse();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.serializeBinaryToWriter
    );
  }
  f = message.getPatient();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getBillablePeriod();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_r4_core_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getEnterer();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getInsurer();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getPriority();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getFundsReserveRequested();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getFundsReserve();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getRelatedList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.serializeBinaryToWriter
    );
  }
  f = message.getPrescription();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getOriginalPrescription();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getPayee();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.serializeBinaryToWriter
    );
  }
  f = message.getReferral();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getFacility();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getClaim();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getClaimResponse();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getOutcome();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.serializeBinaryToWriter
    );
  }
  f = message.getDisposition();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getPreAuthRefList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      34,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getPreAuthRefPeriodList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      35,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getCareTeamList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      36,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.serializeBinaryToWriter
    );
  }
  f = message.getSupportingInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      37,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosisList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      38,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.serializeBinaryToWriter
    );
  }
  f = message.getProcedureList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      39,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.serializeBinaryToWriter
    );
  }
  f = message.getPrecedence();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getInsuranceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      41,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.serializeBinaryToWriter
    );
  }
  f = message.getAccident();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.serializeBinaryToWriter
    );
  }
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      43,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.serializeBinaryToWriter
    );
  }
  f = message.getAddItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      44,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      45,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
  f = message.getTotalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      46,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Total.serializeBinaryToWriter
    );
  }
  f = message.getPayment();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.serializeBinaryToWriter
    );
  }
  f = message.getFormCode();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto_r4_core_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getProcessNoteList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Note.serializeBinaryToWriter
    );
  }
  f = message.getBenefitPeriod();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
  f = message.getBenefitBalanceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      52,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.ExplanationOfBenefitStatusCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional ExplanationOfBenefitStatusCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefitStatusCode.Value}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.ExplanationOfBenefitStatusCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefitStatusCode.Value} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.UseCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional UseCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.UseCode.Value}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.UseCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.UseCode.Value} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    claim: (f = msg.getClaim()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    relationship: (f = msg.getRelationship()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Identifier.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setClaim(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setRelationship(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.Identifier;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Identifier.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getClaim();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getRelationship();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional Reference claim = 4;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getClaim = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setClaim = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearClaim = function() {
  return this.setClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.hasClaim = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept relationship = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getRelationship = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setRelationship = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearRelationship = function() {
  return this.setRelationship(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.hasRelationship = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Identifier reference = 6;
 * @return {?proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Identifier} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.Identifier|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.setReference = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim.prototype.hasReference = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    type: (f = msg.getType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    party: (f = msg.getParty()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Payee;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setParty(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getParty();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept type = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Reference party = 5;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.getParty = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.setParty = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.clearParty = function() {
  return this.setParty(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payee.prototype.hasParty = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.ClaimProcessingCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional ClaimProcessingCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.ClaimProcessingCode.Value}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.ClaimProcessingCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.ClaimProcessingCode.Value} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    provider: (f = msg.getProvider()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    responsible: (f = msg.getResponsible()) && proto_r4_core_datatypes_pb.Boolean.toObject(includeInstance, f),
    role: (f = msg.getRole()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    qualification: (f = msg.getQualification()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setProvider(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.Boolean;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setResponsible(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setRole(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setQualification(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getProvider();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getResponsible();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getRole();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQualification();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Reference provider = 5;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getProvider = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Boolean responsible = 6;
 * @return {?proto.google.fhir.r4.core.Boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getResponsible = function() {
  return /** @type{?proto.google.fhir.r4.core.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Boolean, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.Boolean|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setResponsible = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearResponsible = function() {
  return this.setResponsible(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasResponsible = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CodeableConcept role = 7;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getRole = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setRole = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearRole = function() {
  return this.setRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasRole = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CodeableConcept qualification = 8;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.getQualification = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.setQualification = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.clearQualification = function() {
  return this.setQualification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam.prototype.hasQualification = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    code: (f = msg.getCode()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    timing: (f = msg.getTiming()) && proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.toObject(includeInstance, f),
    reason: (f = msg.getReason()) && proto_r4_core_datatypes_pb.Coding.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCode(value);
      break;
    case 7:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.deserializeBinaryFromReader);
      msg.setTiming(value);
      break;
    case 8:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.Coding;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Coding.deserializeBinaryFromReader);
      msg.setReason(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getTiming();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.Coding.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  DATE: 1,
  PERIOD: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && proto_r4_core_datatypes_pb.Period.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
};


/**
 * optional Date date = 1;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.setDate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Period period = 2;
 * @return {?proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.getPeriod = function() {
  return /** @type{?proto.google.fhir.r4.core.Period} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Period, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Period|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.setPeriod = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  BOOLEAN: 1,
  STRING_VALUE: 2,
  QUANTITY: 3,
  ATTACHMENT: 4,
  REFERENCE: 5
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_boolean: (f = msg.getBoolean()) && proto_r4_core_datatypes_pb.Boolean.toObject(includeInstance, f),
    stringValue: (f = msg.getStringValue()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.Quantity.toObject(includeInstance, f),
    attachment: (f = msg.getAttachment()) && proto_r4_core_datatypes_pb.Attachment.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Boolean;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setBoolean(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setStringValue(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Quantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Quantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.Attachment;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Attachment.deserializeBinaryFromReader);
      msg.setAttachment(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoolean();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getAttachment();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.Attachment.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional Boolean boolean = 1;
 * @return {?proto.google.fhir.r4.core.Boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getBoolean = function() {
  return /** @type{?proto.google.fhir.r4.core.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Boolean, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Boolean|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.setBoolean = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.clearBoolean = function() {
  return this.setBoolean(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.hasBoolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional String string_value = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getStringValue = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.clearStringValue = function() {
  return this.setStringValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Quantity quantity = 3;
 * @return {?proto.google.fhir.r4.core.Quantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.Quantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Quantity, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Quantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.setQuantity = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Attachment attachment = 4;
 * @return {?proto.google.fhir.r4.core.Attachment}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getAttachment = function() {
  return /** @type{?proto.google.fhir.r4.core.Attachment} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Attachment, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Attachment|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.setAttachment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.clearAttachment = function() {
  return this.setAttachment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.hasAttachment = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Reference reference = 5;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept category = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CodeableConcept code = 6;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getCode = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasCode = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional TimingX timing = 7;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getTiming = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.TimingX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setTiming = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearTiming = function() {
  return this.setTiming(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasTiming = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ValueX value = 8;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getValue = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.ValueX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Coding reason = 9;
 * @return {?proto.google.fhir.r4.core.Coding}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.getReason = function() {
  return /** @type{?proto.google.fhir.r4.core.Coding} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Coding, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Coding|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation.prototype.hasReason = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.repeatedFields_ = [2,3,6];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    diagnosis: (f = msg.getDiagnosis()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.toObject(includeInstance, f),
    typeList: jspb.Message.toObjectList(msg.getTypeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    onAdmission: (f = msg.getOnAdmission()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    packageCode: (f = msg.getPackageCode()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.deserializeBinaryFromReader);
      msg.setDiagnosis(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addType(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setOnAdmission(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setPackageCode(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosis();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.serializeBinaryToWriter
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getOnAdmission();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getPackageCode();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  CODEABLE_CONCEPT: 1,
  REFERENCE: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.toObject = function(includeInstance, msg) {
  var f, obj = {
    codeableConcept: (f = msg.getCodeableConcept()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCodeableConcept(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional CodeableConcept codeable_concept = 1;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.getCodeableConcept = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.setCodeableConcept = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.clearCodeableConcept = function() {
  return this.setCodeableConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.hasCodeableConcept = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DiagnosisX diagnosis = 5;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getDiagnosis = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.DiagnosisX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setDiagnosis = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearDiagnosis = function() {
  return this.setDiagnosis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.hasDiagnosis = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated CodeableConcept type = 6;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getTypeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 6));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.addType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional CodeableConcept on_admission = 7;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getOnAdmission = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setOnAdmission = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearOnAdmission = function() {
  return this.setOnAdmission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.hasOnAdmission = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CodeableConcept package_code = 8;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.getPackageCode = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.setPackageCode = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.clearPackageCode = function() {
  return this.setPackageCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis.prototype.hasPackageCode = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.repeatedFields_ = [2,3,5,8];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    typeList: jspb.Message.toObjectList(msg.getTypeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.DateTime.toObject(includeInstance, f),
    procedure: (f = msg.getProcedure()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.toObject(includeInstance, f),
    udiList: jspb.Message.toObjectList(msg.getUdiList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addType(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.DateTime;
      reader.readMessage(value,proto_r4_core_datatypes_pb.DateTime.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 7:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.deserializeBinaryFromReader);
      msg.setProcedure(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addUdi(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getProcedure();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.serializeBinaryToWriter
    );
  }
  f = message.getUdiList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  CODEABLE_CONCEPT: 1,
  REFERENCE: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.toObject = function(includeInstance, msg) {
  var f, obj = {
    codeableConcept: (f = msg.getCodeableConcept()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCodeableConcept(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional CodeableConcept codeable_concept = 1;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.getCodeableConcept = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.setCodeableConcept = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.clearCodeableConcept = function() {
  return this.setCodeableConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.hasCodeableConcept = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CodeableConcept type = 5;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getTypeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setTypeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.addType = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional DateTime date = 6;
 * @return {?proto.google.fhir.r4.core.DateTime}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.DateTime} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.DateTime, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.DateTime|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.hasDate = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ProcedureX procedure = 7;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getProcedure = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.ProcedureX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setProcedure = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearProcedure = function() {
  return this.setProcedure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.hasProcedure = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated Reference udi = 8;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.getUdiList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.setUdiList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.addUdi = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure.prototype.clearUdiList = function() {
  return this.setUdiList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.repeatedFields_ = [2,3,6];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    focal: (f = msg.getFocal()) && proto_r4_core_datatypes_pb.Boolean.toObject(includeInstance, f),
    coverage: (f = msg.getCoverage()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f),
    preAuthRefList: jspb.Message.toObjectList(msg.getPreAuthRefList(),
    proto_r4_core_datatypes_pb.String.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.Boolean;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setFocal(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.setCoverage(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.addPreAuthRef(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getFocal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getCoverage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getPreAuthRefList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional Boolean focal = 4;
 * @return {?proto.google.fhir.r4.core.Boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getFocal = function() {
  return /** @type{?proto.google.fhir.r4.core.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Boolean, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Boolean|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setFocal = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearFocal = function() {
  return this.setFocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.hasFocal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Reference coverage = 5;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getCoverage = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setCoverage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearCoverage = function() {
  return this.setCoverage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.hasCoverage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated String pre_auth_ref = 6;
 * @return {!Array<!proto.google.fhir.r4.core.String>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.getPreAuthRefList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.String>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.String, 6));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.String>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.setPreAuthRefList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.fhir.r4.core.String=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.addPreAuthRef = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.fhir.r4.core.String, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance.prototype.clearPreAuthRefList = function() {
  return this.setPreAuthRefList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Accident;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 6:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.deserializeBinaryFromReader);
      msg.setLocation(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  ADDRESS: 1,
  REFERENCE: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: (f = msg.getAddress()) && proto_r4_core_datatypes_pb.Address.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Address;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional Address address = 1;
 * @return {?proto.google.fhir.r4.core.Address}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.getAddress = function() {
  return /** @type{?proto.google.fhir.r4.core.Address} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Address, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Address|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.setAddress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Reference reference = 2;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional Date date = 4;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.hasDate = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept type = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional LocationX location = 6;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.LocationX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Accident.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.repeatedFields_ = [2,3,5,6,7,8,12,13,20,22,23,24,25,26];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    careTeamSequenceList: jspb.Message.toObjectList(msg.getCareTeamSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    diagnosisSequenceList: jspb.Message.toObjectList(msg.getDiagnosisSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    procedureSequenceList: jspb.Message.toObjectList(msg.getProcedureSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    informationSequenceList: jspb.Message.toObjectList(msg.getInformationSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    revenue: (f = msg.getRevenue()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    programCodeList: jspb.Message.toObjectList(msg.getProgramCodeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    serviced: (f = msg.getServiced()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.toObject(includeInstance, f),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    udiList: jspb.Message.toObjectList(msg.getUdiList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance),
    bodySite: (f = msg.getBodySite()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    subSiteList: jspb.Message.toObjectList(msg.getSubSiteList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    encounterList: jspb.Message.toObjectList(msg.getEncounterList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance),
    detailList: jspb.Message.toObjectList(msg.getDetailList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addCareTeamSequence(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addDiagnosisSequence(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addProcedureSequence(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addInformationSequence(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setRevenue(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 11:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addProgramCode(value);
      break;
    case 14:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.deserializeBinaryFromReader);
      msg.setServiced(value);
      break;
    case 15:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 16:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 17:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 18:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 19:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 20:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addUdi(value);
      break;
    case 21:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setBodySite(value);
      break;
    case 22:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addSubSite(value);
      break;
    case 23:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addEncounter(value);
      break;
    case 24:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 25:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
      break;
    case 26:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.deserializeBinaryFromReader);
      msg.addDetail(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getCareTeamSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosisSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getProcedureSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getInformationSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getRevenue();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProgramCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getServiced();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getUdiList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getBodySite();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getSubSiteList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      22,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getEncounterList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      23,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      24,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      25,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
  f = message.getDetailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      26,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  DATE: 1,
  PERIOD: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && proto_r4_core_datatypes_pb.Period.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
};


/**
 * optional Date date = 1;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.setDate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Period period = 2;
 * @return {?proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.getPeriod = function() {
  return /** @type{?proto.google.fhir.r4.core.Period} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Period, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Period|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.setPeriod = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  CODEABLE_CONCEPT: 1,
  ADDRESS: 2,
  REFERENCE: 3
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.toObject = function(includeInstance, msg) {
  var f, obj = {
    codeableConcept: (f = msg.getCodeableConcept()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && proto_r4_core_datatypes_pb.Address.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCodeableConcept(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Address;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional CodeableConcept codeable_concept = 1;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.getCodeableConcept = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.setCodeableConcept = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.clearCodeableConcept = function() {
  return this.setCodeableConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.hasCodeableConcept = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address address = 2;
 * @return {?proto.google.fhir.r4.core.Address}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.getAddress = function() {
  return /** @type{?proto.google.fhir.r4.core.Address} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Address, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Address|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.setAddress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Reference reference = 3;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    reason: (f = msg.getReason()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setReason(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getReason();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept category = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept reason = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getReason = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setReason = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearReason = function() {
  return this.setReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Money amount = 6;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getAmount = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Decimal value = 7;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.getValue = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.prototype.hasValue = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.repeatedFields_ = [2,3,8,9,14,15,16,17];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    revenue: (f = msg.getRevenue()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    programCodeList: jspb.Message.toObjectList(msg.getProgramCodeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    udiList: jspb.Message.toObjectList(msg.getUdiList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance),
    subDetailList: jspb.Message.toObjectList(msg.getSubDetailList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setRevenue(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addProgramCode(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 11:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addUdi(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 16:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
      break;
    case 17:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.deserializeBinaryFromReader);
      msg.addSubDetail(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getRevenue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProgramCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getUdiList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
  f = message.getSubDetailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.repeatedFields_ = [2,3,8,9,14,15,16];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    sequence: (f = msg.getSequence()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    revenue: (f = msg.getRevenue()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    programCodeList: jspb.Message.toObjectList(msg.getProgramCodeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    udiList: jspb.Message.toObjectList(msg.getUdiList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setRevenue(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addProgramCode(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 11:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 12:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addUdi(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 16:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getSequence();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getRevenue();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProgramCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getUdiList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      16,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept revenue = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getRevenue = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setRevenue = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearRevenue = function() {
  return this.setRevenue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasRevenue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CodeableConcept category = 6;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CodeableConcept product_or_service = 7;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CodeableConcept modifier = 8;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated CodeableConcept program_code = 9;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getProgramCodeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setProgramCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addProgramCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearProgramCodeList = function() {
  return this.setProgramCodeList([]);
};


/**
 * optional SimpleQuantity quantity = 10;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 10));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Money unit_price = 11;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Decimal factor = 12;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Money net = 13;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.hasNet = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated Reference udi = 14;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getUdiList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 14));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setUdiList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addUdi = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearUdiList = function() {
  return this.setUdiList([]);
};


/**
 * repeated PositiveInt note_number = 15;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 15));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Adjudication adjudication = 16;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 16));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CodeableConcept revenue = 5;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getRevenue = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setRevenue = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearRevenue = function() {
  return this.setRevenue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasRevenue = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CodeableConcept category = 6;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CodeableConcept product_or_service = 7;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated CodeableConcept modifier = 8;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated CodeableConcept program_code = 9;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getProgramCodeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setProgramCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addProgramCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearProgramCodeList = function() {
  return this.setProgramCodeList([]);
};


/**
 * optional SimpleQuantity quantity = 10;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 10));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional Money unit_price = 11;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Decimal factor = 12;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Money net = 13;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.hasNet = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated Reference udi = 14;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getUdiList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 14));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setUdiList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addUdi = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearUdiList = function() {
  return this.setUdiList([]);
};


/**
 * repeated PositiveInt note_number = 15;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 15));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Adjudication adjudication = 16;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 16));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 16, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 16, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * repeated SubDetail sub_detail = 17;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.getSubDetailList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail, 17));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.setSubDetailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.addSubDetail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.SubDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail.prototype.clearSubDetailList = function() {
  return this.setSubDetailList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt sequence = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setSequence = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearSequence = function() {
  return this.setSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasSequence = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated PositiveInt care_team_sequence = 5;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getCareTeamSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 5));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setCareTeamSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addCareTeamSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearCareTeamSequenceList = function() {
  return this.setCareTeamSequenceList([]);
};


/**
 * repeated PositiveInt diagnosis_sequence = 6;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getDiagnosisSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 6));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setDiagnosisSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addDiagnosisSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearDiagnosisSequenceList = function() {
  return this.setDiagnosisSequenceList([]);
};


/**
 * repeated PositiveInt procedure_sequence = 7;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getProcedureSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 7));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setProcedureSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addProcedureSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearProcedureSequenceList = function() {
  return this.setProcedureSequenceList([]);
};


/**
 * repeated PositiveInt information_sequence = 8;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getInformationSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setInformationSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addInformationSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearInformationSequenceList = function() {
  return this.setInformationSequenceList([]);
};


/**
 * optional CodeableConcept revenue = 9;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getRevenue = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setRevenue = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearRevenue = function() {
  return this.setRevenue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasRevenue = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CodeableConcept category = 10;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 10));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional CodeableConcept product_or_service = 11;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated CodeableConcept modifier = 12;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 12));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated CodeableConcept program_code = 13;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getProgramCodeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 13));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setProgramCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addProgramCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearProgramCodeList = function() {
  return this.setProgramCodeList([]);
};


/**
 * optional ServicedX serviced = 14;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getServiced = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.ServicedX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setServiced = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearServiced = function() {
  return this.setServiced(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasServiced = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional LocationX location = 15;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Item.LocationX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional SimpleQuantity quantity = 16;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 16));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional Money unit_price = 17;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 17));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Decimal factor = 18;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 18));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Money net = 19;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 19));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasNet = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * repeated Reference udi = 20;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getUdiList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 20));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setUdiList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addUdi = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearUdiList = function() {
  return this.setUdiList([]);
};


/**
 * optional CodeableConcept body_site = 21;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getBodySite = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 21));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setBodySite = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearBodySite = function() {
  return this.setBodySite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.hasBodySite = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated CodeableConcept sub_site = 22;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getSubSiteList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 22));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setSubSiteList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 22, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addSubSite = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 22, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearSubSiteList = function() {
  return this.setSubSiteList([]);
};


/**
 * repeated Reference encounter = 23;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getEncounterList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 23));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setEncounterList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 23, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addEncounter = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 23, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearEncounterList = function() {
  return this.setEncounterList([]);
};


/**
 * repeated PositiveInt note_number = 24;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 24));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Adjudication adjudication = 25;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 25));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 25, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 25, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * repeated Detail detail = 26;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.getDetailList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail, 26));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.setDetailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 26, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.addDetail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 26, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Detail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Item.prototype.clearDetailList = function() {
  return this.setDetailList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.repeatedFields_ = [2,3,4,5,6,7,9,10,18,19,20,21];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    itemSequenceList: jspb.Message.toObjectList(msg.getItemSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    detailSequenceList: jspb.Message.toObjectList(msg.getDetailSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    subDetailSequenceList: jspb.Message.toObjectList(msg.getSubDetailSequenceList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    providerList: jspb.Message.toObjectList(msg.getProviderList(),
    proto_r4_core_datatypes_pb.Reference.toObject, includeInstance),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    programCodeList: jspb.Message.toObjectList(msg.getProgramCodeList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    serviced: (f = msg.getServiced()) && proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.toObject(includeInstance, f),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    bodySite: (f = msg.getBodySite()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    subSiteList: jspb.Message.toObjectList(msg.getSubSiteList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance),
    detailList: jspb.Message.toObjectList(msg.getDetailList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addItemSequence(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addDetailSequence(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addSubDetailSequence(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
      msg.addProvider(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addProgramCode(value);
      break;
    case 11:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.deserializeBinaryFromReader);
      msg.setServiced(value);
      break;
    case 12:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 13:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 14:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 15:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 16:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 17:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setBodySite(value);
      break;
    case 18:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addSubSite(value);
      break;
    case 19:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 20:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
      break;
    case 21:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.deserializeBinaryFromReader);
      msg.addDetail(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getItemSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getDetailSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getSubDetailSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getProviderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getProgramCodeList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getServiced();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getBodySite();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getSubSiteList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      18,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      20,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
  f = message.getDetailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      21,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  DATE: 1,
  PERIOD: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    period: (f = msg.getPeriod()) && proto_r4_core_datatypes_pb.Period.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Period;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Period.deserializeBinaryFromReader);
      msg.setPeriod(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getPeriod();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Period.serializeBinaryToWriter
    );
  }
};


/**
 * optional Date date = 1;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.setDate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Period period = 2;
 * @return {?proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.getPeriod = function() {
  return /** @type{?proto.google.fhir.r4.core.Period} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Period, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Period|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.setPeriod = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.clearPeriod = function() {
  return this.setPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX.prototype.hasPeriod = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  CODEABLE_CONCEPT: 1,
  ADDRESS: 2,
  REFERENCE: 3
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.toObject = function(includeInstance, msg) {
  var f, obj = {
    codeableConcept: (f = msg.getCodeableConcept()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && proto_r4_core_datatypes_pb.Address.toObject(includeInstance, f),
    reference: (f = msg.getReference()) && proto_r4_core_datatypes_pb.Reference.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCodeableConcept(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Address;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Address.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Reference;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Reference.deserializeBinaryFromReader);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCodeableConcept();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Address.serializeBinaryToWriter
    );
  }
  f = message.getReference();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Reference.serializeBinaryToWriter
    );
  }
};


/**
 * optional CodeableConcept codeable_concept = 1;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.getCodeableConcept = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.setCodeableConcept = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.clearCodeableConcept = function() {
  return this.setCodeableConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.hasCodeableConcept = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Address address = 2;
 * @return {?proto.google.fhir.r4.core.Address}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.getAddress = function() {
  return /** @type{?proto.google.fhir.r4.core.Address} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Address, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Address|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.setAddress = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Reference reference = 3;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.getReference = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.setReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.clearReference = function() {
  return this.setReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX.prototype.hasReference = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.repeatedFields_ = [2,3,5,10,11,12];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance),
    subDetailList: jspb.Message.toObjectList(msg.getSubDetailList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 11:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
      break;
    case 12:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.deserializeBinaryFromReader);
      msg.addSubDetail(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
  f = message.getSubDetailList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.repeatedFields_ = [2,3,5,10,11];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    productOrService: (f = msg.getProductOrService()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    modifierList: jspb.Message.toObjectList(msg.getModifierList(),
    proto_r4_core_datatypes_pb.CodeableConcept.toObject, includeInstance),
    quantity: (f = msg.getQuantity()) && proto_r4_core_datatypes_pb.SimpleQuantity.toObject(includeInstance, f),
    unitPrice: (f = msg.getUnitPrice()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    factor: (f = msg.getFactor()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f),
    net: (f = msg.getNet()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    noteNumberList: jspb.Message.toObjectList(msg.getNoteNumberList(),
    proto_r4_core_datatypes_pb.PositiveInt.toObject, includeInstance),
    adjudicationList: jspb.Message.toObjectList(msg.getAdjudicationList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setProductOrService(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.addModifier(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.SimpleQuantity;
      reader.readMessage(value,proto_r4_core_datatypes_pb.SimpleQuantity.deserializeBinaryFromReader);
      msg.setQuantity(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setUnitPrice(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setFactor(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setNet(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.addNoteNumber(value);
      break;
    case 11:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.deserializeBinaryFromReader);
      msg.addAdjudication(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getProductOrService();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getModifierList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.SimpleQuantity.serializeBinaryToWriter
    );
  }
  f = message.getUnitPrice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getFactor();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getNet();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getNoteNumberList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getAdjudicationList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept product_or_service = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CodeableConcept modifier = 5;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * optional SimpleQuantity quantity = 6;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Money unit_price = 7;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal factor = 8;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Money net = 9;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.hasNet = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated PositiveInt note_number = 10;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Item.Adjudication adjudication = 11;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 11));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept product_or_service = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated CodeableConcept modifier = 5;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 5));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * optional SimpleQuantity quantity = 6;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Money unit_price = 7;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Decimal factor = 8;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Money net = 9;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.hasNet = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated PositiveInt note_number = 10;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Item.Adjudication adjudication = 11;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 11));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * repeated AddedItemDetailSubDetail sub_detail = 12;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.getSubDetailList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail, 12));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.setSubDetailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.addSubDetail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.AddedItemDetailSubDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail.prototype.clearSubDetailList = function() {
  return this.setSubDetailList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated PositiveInt item_sequence = 4;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getItemSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setItemSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addItemSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearItemSequenceList = function() {
  return this.setItemSequenceList([]);
};


/**
 * repeated PositiveInt detail_sequence = 5;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getDetailSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 5));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setDetailSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addDetailSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearDetailSequenceList = function() {
  return this.setDetailSequenceList([]);
};


/**
 * repeated PositiveInt sub_detail_sequence = 6;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getSubDetailSequenceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 6));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setSubDetailSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addSubDetailSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearSubDetailSequenceList = function() {
  return this.setSubDetailSequenceList([]);
};


/**
 * repeated Reference provider = 7;
 * @return {!Array<!proto.google.fhir.r4.core.Reference>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getProviderList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Reference>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Reference, 7));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Reference>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setProviderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Reference=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addProvider = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.google.fhir.r4.core.Reference, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearProviderList = function() {
  return this.setProviderList([]);
};


/**
 * optional CodeableConcept product_or_service = 8;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getProductOrService = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setProductOrService = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearProductOrService = function() {
  return this.setProductOrService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasProductOrService = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated CodeableConcept modifier = 9;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getModifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setModifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addModifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearModifierList = function() {
  return this.setModifierList([]);
};


/**
 * repeated CodeableConcept program_code = 10;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getProgramCodeList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setProgramCodeList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addProgramCode = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearProgramCodeList = function() {
  return this.setProgramCodeList([]);
};


/**
 * optional ServicedX serviced = 11;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getServiced = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.ServicedX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setServiced = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearServiced = function() {
  return this.setServiced(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasServiced = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional LocationX location = 12;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.LocationX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional SimpleQuantity quantity = 13;
 * @return {?proto.google.fhir.r4.core.SimpleQuantity}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getQuantity = function() {
  return /** @type{?proto.google.fhir.r4.core.SimpleQuantity} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.SimpleQuantity, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.SimpleQuantity|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setQuantity = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearQuantity = function() {
  return this.setQuantity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasQuantity = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Money unit_price = 14;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getUnitPrice = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setUnitPrice = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearUnitPrice = function() {
  return this.setUnitPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasUnitPrice = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Decimal factor = 15;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getFactor = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setFactor = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearFactor = function() {
  return this.setFactor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasFactor = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Money net = 16;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getNet = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 16));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setNet = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearNet = function() {
  return this.setNet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasNet = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional CodeableConcept body_site = 17;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getBodySite = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 17));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setBodySite = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearBodySite = function() {
  return this.setBodySite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.hasBodySite = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * repeated CodeableConcept sub_site = 18;
 * @return {!Array<!proto.google.fhir.r4.core.CodeableConcept>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getSubSiteList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.CodeableConcept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 18));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.CodeableConcept>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setSubSiteList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 18, value);
};


/**
 * @param {!proto.google.fhir.r4.core.CodeableConcept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addSubSite = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 18, opt_value, proto.google.fhir.r4.core.CodeableConcept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearSubSiteList = function() {
  return this.setSubSiteList([]);
};


/**
 * repeated PositiveInt note_number = 19;
 * @return {!Array<!proto.google.fhir.r4.core.PositiveInt>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getNoteNumberList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.PositiveInt>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 19));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.PositiveInt>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setNoteNumberList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.google.fhir.r4.core.PositiveInt=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addNoteNumber = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.google.fhir.r4.core.PositiveInt, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearNoteNumberList = function() {
  return this.setNoteNumberList([]);
};


/**
 * repeated Item.Adjudication adjudication = 20;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 20));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 20, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 20, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * repeated AddedItemDetail detail = 21;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.getDetailList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail, 21));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.setDetailList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 21, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.addDetail = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 21, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.AddedItemDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem.prototype.clearDetailList = function() {
  return this.setDetailList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Total.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Total;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Total.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setAmount(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Total.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept category = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Money amount = 5;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.getAmount = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Total.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    type: (f = msg.getType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    adjustment: (f = msg.getAdjustment()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    adjustmentReason: (f = msg.getAdjustmentReason()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    date: (f = msg.getDate()) && proto_r4_core_datatypes_pb.Date.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f),
    identifier: (f = msg.getIdentifier()) && proto_r4_core_datatypes_pb.Identifier.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Payment;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setAdjustment(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setAdjustmentReason(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Date;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Date.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.Identifier;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Identifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAdjustment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getAdjustmentReason();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Date.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept type = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Money adjustment = 5;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getAdjustment = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setAdjustment = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearAdjustment = function() {
  return this.setAdjustment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasAdjustment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CodeableConcept adjustment_reason = 6;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getAdjustmentReason = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setAdjustmentReason = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearAdjustmentReason = function() {
  return this.setAdjustmentReason(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasAdjustmentReason = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Date date = 7;
 * @return {?proto.google.fhir.r4.core.Date}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getDate = function() {
  return /** @type{?proto.google.fhir.r4.core.Date} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Date, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Date|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasDate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Money amount = 8;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getAmount = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Identifier identifier = 9;
 * @return {?proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.getIdentifier = function() {
  return /** @type{?proto.google.fhir.r4.core.Identifier} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Identifier|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Payment.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Note.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    number: (f = msg.getNumber()) && proto_r4_core_datatypes_pb.PositiveInt.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.toObject(includeInstance, f),
    text: (f = msg.getText()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    language: (f = msg.getLanguage()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Note;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Note.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.PositiveInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.PositiveInt.deserializeBinaryFromReader);
      msg.setNumber(value);
      break;
    case 5:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setLanguage(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Note.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getNumber();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.PositiveInt.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.NoteTypeCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional NoteTypeCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.NoteTypeCode.Value}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.NoteTypeCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.NoteTypeCode.Value} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional PositiveInt number = 4;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getNumber = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setNumber = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearNumber = function() {
  return this.setNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.hasNumber = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TypeCode type = 5;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Note.TypeCode|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional String text = 6;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getText = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.hasText = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CodeableConcept language = 7;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.Note.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.repeatedFields_ = [2,3,11];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    category: (f = msg.getCategory()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    excluded: (f = msg.getExcluded()) && proto_r4_core_datatypes_pb.Boolean.toObject(includeInstance, f),
    name: (f = msg.getName()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    description: (f = msg.getDescription()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    network: (f = msg.getNetwork()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    unit: (f = msg.getUnit()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    term: (f = msg.getTerm()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    financialList: jspb.Message.toObjectList(msg.getFinancialList(),
    proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.toObject, includeInstance)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setCategory(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Boolean;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Boolean.deserializeBinaryFromReader);
      msg.setExcluded(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setName(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setDescription(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setNetwork(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setUnit(value);
      break;
    case 10:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setTerm(value);
      break;
    case 11:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.deserializeBinaryFromReader);
      msg.addFinancial(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getCategory();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getExcluded();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Boolean.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getNetwork();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getUnit();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getTerm();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getFinancialList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    type: (f = msg.getType()) && proto_r4_core_datatypes_pb.CodeableConcept.toObject(includeInstance, f),
    allowed: (f = msg.getAllowed()) && proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.toObject(includeInstance, f),
    used: (f = msg.getUsed()) && proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addExtension$(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Extension;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Extension.deserializeBinaryFromReader);
      msg.addModifierExtension(value);
      break;
    case 4:
      var value = new proto_r4_core_datatypes_pb.CodeableConcept;
      reader.readMessage(value,proto_r4_core_datatypes_pb.CodeableConcept.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 5:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.deserializeBinaryFromReader);
      msg.setAllowed(value);
      break;
    case 6:
      var value = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX;
      reader.readMessage(value,proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.deserializeBinaryFromReader);
      msg.setUsed(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getModifierExtensionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Extension.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.CodeableConcept.serializeBinaryToWriter
    );
  }
  f = message.getAllowed();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.serializeBinaryToWriter
    );
  }
  f = message.getUsed();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.serializeBinaryToWriter
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  UNSIGNED_INT: 1,
  STRING_VALUE: 2,
  MONEY: 3
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.toObject = function(includeInstance, msg) {
  var f, obj = {
    unsignedInt: (f = msg.getUnsignedInt()) && proto_r4_core_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
    stringValue: (f = msg.getStringValue()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    money: (f = msg.getMoney()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.UnsignedInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.UnsignedInt.deserializeBinaryFromReader);
      msg.setUnsignedInt(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setStringValue(value);
      break;
    case 3:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setMoney(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getStringValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional UnsignedInt unsigned_int = 1;
 * @return {?proto.google.fhir.r4.core.UnsignedInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.getUnsignedInt = function() {
  return /** @type{?proto.google.fhir.r4.core.UnsignedInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.UnsignedInt, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.setUnsignedInt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.clearUnsignedInt = function() {
  return this.setUnsignedInt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.hasUnsignedInt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional String string_value = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.getStringValue = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.setStringValue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.clearStringValue = function() {
  return this.setStringValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.hasStringValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Money money = 3;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.getMoney = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.setMoney = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.clearMoney = function() {
  return this.setMoney(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX.prototype.hasMoney = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.ChoiceCase = {
  CHOICE_NOT_SET: 0,
  UNSIGNED_INT: 1,
  MONEY: 2
};

/**
 * @return {proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.ChoiceCase}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.getChoiceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.ChoiceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.toObject = function(includeInstance, msg) {
  var f, obj = {
    unsignedInt: (f = msg.getUnsignedInt()) && proto_r4_core_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
    money: (f = msg.getMoney()) && proto_r4_core_datatypes_pb.Money.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX;
  return proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_datatypes_pb.UnsignedInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.UnsignedInt.deserializeBinaryFromReader);
      msg.setUnsignedInt(value);
      break;
    case 2:
      var value = new proto_r4_core_datatypes_pb.Money;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Money.deserializeBinaryFromReader);
      msg.setMoney(value);
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
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUnsignedInt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getMoney();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_datatypes_pb.Money.serializeBinaryToWriter
    );
  }
};


/**
 * optional UnsignedInt unsigned_int = 1;
 * @return {?proto.google.fhir.r4.core.UnsignedInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.getUnsignedInt = function() {
  return /** @type{?proto.google.fhir.r4.core.UnsignedInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.UnsignedInt, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.setUnsignedInt = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.clearUnsignedInt = function() {
  return this.setUnsignedInt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.hasUnsignedInt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Money money = 2;
 * @return {?proto.google.fhir.r4.core.Money}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.getMoney = function() {
  return /** @type{?proto.google.fhir.r4.core.Money} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Money, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Money|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.setMoney = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.clearMoney = function() {
  return this.setMoney(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX.prototype.hasMoney = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept type = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AllowedX allowed = 5;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getAllowed = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.AllowedX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setAllowed = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearAllowed = function() {
  return this.setAllowed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.hasAllowed = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UsedX used = 6;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.getUsed = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.UsedX|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.setUsed = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.clearUsed = function() {
  return this.setUsed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit.prototype.hasUsed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional CodeableConcept category = 4;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getCategory = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setCategory = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearCategory = function() {
  return this.setCategory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Boolean excluded = 5;
 * @return {?proto.google.fhir.r4.core.Boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getExcluded = function() {
  return /** @type{?proto.google.fhir.r4.core.Boolean} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Boolean, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Boolean|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setExcluded = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearExcluded = function() {
  return this.setExcluded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasExcluded = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional String name = 6;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getName = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setName = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearName = function() {
  return this.setName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasName = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional String description = 7;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getDescription = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setDescription = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearDescription = function() {
  return this.setDescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional CodeableConcept network = 8;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getNetwork = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setNetwork = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearNetwork = function() {
  return this.setNetwork(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasNetwork = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CodeableConcept unit = 9;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getUnit = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setUnit = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearUnit = function() {
  return this.setUnit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional CodeableConcept term = 10;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getTerm = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 10));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setTerm = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearTerm = function() {
  return this.setTerm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.hasTerm = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated Benefit financial = 11;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.getFinancialList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit, 11));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.setFinancialList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.addFinancial = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.Benefit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance.prototype.clearFinancialList = function() {
  return this.setFinancialList([]);
};


/**
 * optional Id id = 1;
 * @return {?proto.google.fhir.r4.core.Id}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.Id} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Id, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Id|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Meta meta = 2;
 * @return {?proto.google.fhir.r4.core.Meta}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getMeta = function() {
  return /** @type{?proto.google.fhir.r4.core.Meta} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Meta, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Meta|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uri implicit_rules = 3;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getImplicitRules = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setImplicitRules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearImplicitRules = function() {
  return this.setImplicitRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasImplicitRules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Code language = 4;
 * @return {?proto.google.fhir.r4.core.Code}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.Code} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Code, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Code|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Narrative text = 5;
 * @return {?proto.google.fhir.r4.core.Narrative}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getText = function() {
  return /** @type{?proto.google.fhir.r4.core.Narrative} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Narrative, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Narrative|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasText = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated google.protobuf.Any contained = 6;
 * @return {!Array<!proto.google.protobuf.Any>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getContainedList = function() {
  return /** @type{!Array<!proto.google.protobuf.Any>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {!Array<!proto.google.protobuf.Any>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setContainedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.google.protobuf.Any=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Any}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addContained = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.google.protobuf.Any, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearContainedList = function() {
  return this.setContainedList([]);
};


/**
 * repeated Extension extension = 8;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 8));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 9;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated Identifier identifier = 10;
 * @return {!Array<!proto.google.fhir.r4.core.Identifier>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getIdentifierList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Identifier>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Identifier>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setIdentifierList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Identifier=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addIdentifier = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.Identifier, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearIdentifierList = function() {
  return this.setIdentifierList([]);
};


/**
 * optional StatusCode status = 11;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getStatus = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.StatusCode|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional CodeableConcept type = 12;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasType = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CodeableConcept sub_type = 13;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getSubType = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setSubType = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearSubType = function() {
  return this.setSubType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasSubType = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional UseCode use = 14;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getUse = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.UseCode|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setUse = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearUse = function() {
  return this.setUse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasUse = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional Reference patient = 15;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPatient = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPatient = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPatient = function() {
  return this.setPatient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPatient = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional Period billable_period = 16;
 * @return {?proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getBillablePeriod = function() {
  return /** @type{?proto.google.fhir.r4.core.Period} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Period, 16));
};


/**
 * @param {?proto.google.fhir.r4.core.Period|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setBillablePeriod = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearBillablePeriod = function() {
  return this.setBillablePeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasBillablePeriod = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional DateTime created = 17;
 * @return {?proto.google.fhir.r4.core.DateTime}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getCreated = function() {
  return /** @type{?proto.google.fhir.r4.core.DateTime} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.DateTime, 17));
};


/**
 * @param {?proto.google.fhir.r4.core.DateTime|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional Reference enterer = 18;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getEnterer = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 18));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setEnterer = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearEnterer = function() {
  return this.setEnterer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasEnterer = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Reference insurer = 19;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getInsurer = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 19));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setInsurer = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearInsurer = function() {
  return this.setInsurer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasInsurer = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Reference provider = 20;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getProvider = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 20));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setProvider = function(value) {
  return jspb.Message.setWrapperField(this, 20, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearProvider = function() {
  return this.setProvider(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional CodeableConcept priority = 21;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPriority = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 21));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPriority = function(value) {
  return jspb.Message.setWrapperField(this, 21, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPriority = function() {
  return this.setPriority(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPriority = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CodeableConcept funds_reserve_requested = 22;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getFundsReserveRequested = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 22));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setFundsReserveRequested = function(value) {
  return jspb.Message.setWrapperField(this, 22, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearFundsReserveRequested = function() {
  return this.setFundsReserveRequested(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasFundsReserveRequested = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional CodeableConcept funds_reserve = 23;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getFundsReserve = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 23));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setFundsReserve = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearFundsReserve = function() {
  return this.setFundsReserve(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasFundsReserve = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * repeated RelatedClaim related = 24;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getRelatedList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim, 24));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setRelatedList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 24, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addRelated = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 24, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.RelatedClaim, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearRelatedList = function() {
  return this.setRelatedList([]);
};


/**
 * optional Reference prescription = 25;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPrescription = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 25));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPrescription = function(value) {
  return jspb.Message.setWrapperField(this, 25, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPrescription = function() {
  return this.setPrescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPrescription = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Reference original_prescription = 26;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getOriginalPrescription = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 26));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setOriginalPrescription = function(value) {
  return jspb.Message.setWrapperField(this, 26, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearOriginalPrescription = function() {
  return this.setOriginalPrescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasOriginalPrescription = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Payee payee = 27;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Payee}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPayee = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Payee} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Payee, 27));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Payee|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPayee = function(value) {
  return jspb.Message.setWrapperField(this, 27, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPayee = function() {
  return this.setPayee(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPayee = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Reference referral = 28;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getReferral = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 28));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setReferral = function(value) {
  return jspb.Message.setWrapperField(this, 28, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearReferral = function() {
  return this.setReferral(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasReferral = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional Reference facility = 29;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getFacility = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 29));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setFacility = function(value) {
  return jspb.Message.setWrapperField(this, 29, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearFacility = function() {
  return this.setFacility(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasFacility = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Reference claim = 30;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getClaim = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 30));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setClaim = function(value) {
  return jspb.Message.setWrapperField(this, 30, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearClaim = function() {
  return this.setClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasClaim = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional Reference claim_response = 31;
 * @return {?proto.google.fhir.r4.core.Reference}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getClaimResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.Reference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Reference, 31));
};


/**
 * @param {?proto.google.fhir.r4.core.Reference|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setClaimResponse = function(value) {
  return jspb.Message.setWrapperField(this, 31, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearClaimResponse = function() {
  return this.setClaimResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasClaimResponse = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional OutcomeCode outcome = 32;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getOutcome = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode, 32));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.OutcomeCode|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setOutcome = function(value) {
  return jspb.Message.setWrapperField(this, 32, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearOutcome = function() {
  return this.setOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasOutcome = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional String disposition = 33;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getDisposition = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 33));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setDisposition = function(value) {
  return jspb.Message.setWrapperField(this, 33, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearDisposition = function() {
  return this.setDisposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasDisposition = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * repeated String pre_auth_ref = 34;
 * @return {!Array<!proto.google.fhir.r4.core.String>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPreAuthRefList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.String>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.String, 34));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.String>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPreAuthRefList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 34, value);
};


/**
 * @param {!proto.google.fhir.r4.core.String=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addPreAuthRef = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 34, opt_value, proto.google.fhir.r4.core.String, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPreAuthRefList = function() {
  return this.setPreAuthRefList([]);
};


/**
 * repeated Period pre_auth_ref_period = 35;
 * @return {!Array<!proto.google.fhir.r4.core.Period>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPreAuthRefPeriodList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Period>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Period, 35));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Period>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPreAuthRefPeriodList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 35, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Period=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addPreAuthRefPeriod = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 35, opt_value, proto.google.fhir.r4.core.Period, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPreAuthRefPeriodList = function() {
  return this.setPreAuthRefPeriodList([]);
};


/**
 * repeated CareTeam care_team = 36;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getCareTeamList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam, 36));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setCareTeamList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 36, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addCareTeam = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 36, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.CareTeam, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearCareTeamList = function() {
  return this.setCareTeamList([]);
};


/**
 * repeated SupportingInformation supporting_info = 37;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getSupportingInfoList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation, 37));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setSupportingInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 37, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addSupportingInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 37, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.SupportingInformation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearSupportingInfoList = function() {
  return this.setSupportingInfoList([]);
};


/**
 * repeated Diagnosis diagnosis = 38;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getDiagnosisList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis, 38));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setDiagnosisList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 38, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addDiagnosis = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 38, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Diagnosis, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearDiagnosisList = function() {
  return this.setDiagnosisList([]);
};


/**
 * repeated Procedure procedure = 39;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getProcedureList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure, 39));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setProcedureList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 39, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addProcedure = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 39, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Procedure, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearProcedureList = function() {
  return this.setProcedureList([]);
};


/**
 * optional PositiveInt precedence = 40;
 * @return {?proto.google.fhir.r4.core.PositiveInt}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPrecedence = function() {
  return /** @type{?proto.google.fhir.r4.core.PositiveInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.PositiveInt, 40));
};


/**
 * @param {?proto.google.fhir.r4.core.PositiveInt|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPrecedence = function(value) {
  return jspb.Message.setWrapperField(this, 40, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPrecedence = function() {
  return this.setPrecedence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPrecedence = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * repeated Insurance insurance = 41;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getInsuranceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance, 41));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setInsuranceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 41, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addInsurance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 41, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Insurance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearInsuranceList = function() {
  return this.setInsuranceList([]);
};


/**
 * optional Accident accident = 42;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getAccident = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Accident, 42));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Accident|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setAccident = function(value) {
  return jspb.Message.setWrapperField(this, 42, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearAccident = function() {
  return this.setAccident(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasAccident = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * repeated Item item = 43;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getItemList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item, 43));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 43, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 43, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearItemList = function() {
  return this.setItemList([]);
};


/**
 * repeated AddedItem add_item = 44;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getAddItemList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem, 44));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setAddItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 44, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addAddItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 44, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.AddedItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearAddItemList = function() {
  return this.setAddItemList([]);
};


/**
 * repeated Item.Adjudication adjudication = 45;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getAdjudicationList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, 45));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setAdjudicationList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 45, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addAdjudication = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 45, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Item.Adjudication, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearAdjudicationList = function() {
  return this.setAdjudicationList([]);
};


/**
 * repeated Total total = 46;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Total>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getTotalList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Total>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Total, 46));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Total>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setTotalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 46, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Total}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addTotal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 46, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Total, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearTotalList = function() {
  return this.setTotalList([]);
};


/**
 * optional Payment payment = 47;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit.Payment}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getPayment = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit.Payment} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Payment, 47));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit.Payment|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setPayment = function(value) {
  return jspb.Message.setWrapperField(this, 47, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearPayment = function() {
  return this.setPayment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasPayment = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional CodeableConcept form_code = 48;
 * @return {?proto.google.fhir.r4.core.CodeableConcept}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getFormCode = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeableConcept} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.CodeableConcept, 48));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeableConcept|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setFormCode = function(value) {
  return jspb.Message.setWrapperField(this, 48, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearFormCode = function() {
  return this.setFormCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasFormCode = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional Attachment form = 49;
 * @return {?proto.google.fhir.r4.core.Attachment}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getForm = function() {
  return /** @type{?proto.google.fhir.r4.core.Attachment} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Attachment, 49));
};


/**
 * @param {?proto.google.fhir.r4.core.Attachment|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setForm = function(value) {
  return jspb.Message.setWrapperField(this, 49, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasForm = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * repeated Note process_note = 50;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Note>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getProcessNoteList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Note>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.Note, 50));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.Note>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setProcessNoteList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.Note}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addProcessNote = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.Note, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearProcessNoteList = function() {
  return this.setProcessNoteList([]);
};


/**
 * optional Period benefit_period = 51;
 * @return {?proto.google.fhir.r4.core.Period}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getBenefitPeriod = function() {
  return /** @type{?proto.google.fhir.r4.core.Period} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Period, 51));
};


/**
 * @param {?proto.google.fhir.r4.core.Period|undefined} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setBenefitPeriod = function(value) {
  return jspb.Message.setWrapperField(this, 51, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearBenefitPeriod = function() {
  return this.setBenefitPeriod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.hasBenefitPeriod = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * repeated BenefitBalance benefit_balance = 52;
 * @return {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance>}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.getBenefitBalanceList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance, 52));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance>} value
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
*/
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.setBenefitBalanceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 52, value);
};


/**
 * @param {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance}
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.addBenefitBalance = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 52, opt_value, proto.google.fhir.r4.core.ExplanationOfBenefit.BenefitBalance, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.ExplanationOfBenefit} returns this
 */
proto.google.fhir.r4.core.ExplanationOfBenefit.prototype.clearBenefitBalanceList = function() {
  return this.setBenefitBalanceList([]);
};


goog.object.extend(exports, proto.google.fhir.r4.core);
