// source: proto/r4/core/resources/bundle_and_contained_resource.proto
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

var proto_annotations_pb = require('../../../../proto/annotations_pb.js');
goog.object.extend(proto, proto_annotations_pb);
var proto_r4_core_codes_pb = require('../../../../proto/r4/core/codes_pb.js');
goog.object.extend(proto, proto_r4_core_codes_pb);
var proto_r4_core_datatypes_pb = require('../../../../proto/r4/core/datatypes_pb.js');
goog.object.extend(proto, proto_r4_core_datatypes_pb);
var proto_r4_core_resources_account_pb = require('../../../../proto/r4/core/resources/account_pb.js');
goog.object.extend(proto, proto_r4_core_resources_account_pb);
var proto_r4_core_resources_activity_definition_pb = require('../../../../proto/r4/core/resources/activity_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_activity_definition_pb);
var proto_r4_core_resources_adverse_event_pb = require('../../../../proto/r4/core/resources/adverse_event_pb.js');
goog.object.extend(proto, proto_r4_core_resources_adverse_event_pb);
var proto_r4_core_resources_allergy_intolerance_pb = require('../../../../proto/r4/core/resources/allergy_intolerance_pb.js');
goog.object.extend(proto, proto_r4_core_resources_allergy_intolerance_pb);
var proto_r4_core_resources_appointment_pb = require('../../../../proto/r4/core/resources/appointment_pb.js');
goog.object.extend(proto, proto_r4_core_resources_appointment_pb);
var proto_r4_core_resources_appointment_response_pb = require('../../../../proto/r4/core/resources/appointment_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_appointment_response_pb);
var proto_r4_core_resources_audit_event_pb = require('../../../../proto/r4/core/resources/audit_event_pb.js');
goog.object.extend(proto, proto_r4_core_resources_audit_event_pb);
var proto_r4_core_resources_basic_pb = require('../../../../proto/r4/core/resources/basic_pb.js');
goog.object.extend(proto, proto_r4_core_resources_basic_pb);
var proto_r4_core_resources_binary_pb = require('../../../../proto/r4/core/resources/binary_pb.js');
goog.object.extend(proto, proto_r4_core_resources_binary_pb);
var proto_r4_core_resources_biologically_derived_product_pb = require('../../../../proto/r4/core/resources/biologically_derived_product_pb.js');
goog.object.extend(proto, proto_r4_core_resources_biologically_derived_product_pb);
var proto_r4_core_resources_body_structure_pb = require('../../../../proto/r4/core/resources/body_structure_pb.js');
goog.object.extend(proto, proto_r4_core_resources_body_structure_pb);
var proto_r4_core_resources_capability_statement_pb = require('../../../../proto/r4/core/resources/capability_statement_pb.js');
goog.object.extend(proto, proto_r4_core_resources_capability_statement_pb);
var proto_r4_core_resources_care_plan_pb = require('../../../../proto/r4/core/resources/care_plan_pb.js');
goog.object.extend(proto, proto_r4_core_resources_care_plan_pb);
var proto_r4_core_resources_care_team_pb = require('../../../../proto/r4/core/resources/care_team_pb.js');
goog.object.extend(proto, proto_r4_core_resources_care_team_pb);
var proto_r4_core_resources_catalog_entry_pb = require('../../../../proto/r4/core/resources/catalog_entry_pb.js');
goog.object.extend(proto, proto_r4_core_resources_catalog_entry_pb);
var proto_r4_core_resources_charge_item_pb = require('../../../../proto/r4/core/resources/charge_item_pb.js');
goog.object.extend(proto, proto_r4_core_resources_charge_item_pb);
var proto_r4_core_resources_charge_item_definition_pb = require('../../../../proto/r4/core/resources/charge_item_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_charge_item_definition_pb);
var proto_r4_core_resources_claim_pb = require('../../../../proto/r4/core/resources/claim_pb.js');
goog.object.extend(proto, proto_r4_core_resources_claim_pb);
var proto_r4_core_resources_claim_response_pb = require('../../../../proto/r4/core/resources/claim_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_claim_response_pb);
var proto_r4_core_resources_clinical_impression_pb = require('../../../../proto/r4/core/resources/clinical_impression_pb.js');
goog.object.extend(proto, proto_r4_core_resources_clinical_impression_pb);
var proto_r4_core_resources_code_system_pb = require('../../../../proto/r4/core/resources/code_system_pb.js');
goog.object.extend(proto, proto_r4_core_resources_code_system_pb);
var proto_r4_core_resources_communication_pb = require('../../../../proto/r4/core/resources/communication_pb.js');
goog.object.extend(proto, proto_r4_core_resources_communication_pb);
var proto_r4_core_resources_communication_request_pb = require('../../../../proto/r4/core/resources/communication_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_communication_request_pb);
var proto_r4_core_resources_compartment_definition_pb = require('../../../../proto/r4/core/resources/compartment_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_compartment_definition_pb);
var proto_r4_core_resources_composition_pb = require('../../../../proto/r4/core/resources/composition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_composition_pb);
var proto_r4_core_resources_concept_map_pb = require('../../../../proto/r4/core/resources/concept_map_pb.js');
goog.object.extend(proto, proto_r4_core_resources_concept_map_pb);
var proto_r4_core_resources_condition_pb = require('../../../../proto/r4/core/resources/condition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_condition_pb);
var proto_r4_core_resources_consent_pb = require('../../../../proto/r4/core/resources/consent_pb.js');
goog.object.extend(proto, proto_r4_core_resources_consent_pb);
var proto_r4_core_resources_contract_pb = require('../../../../proto/r4/core/resources/contract_pb.js');
goog.object.extend(proto, proto_r4_core_resources_contract_pb);
var proto_r4_core_resources_coverage_pb = require('../../../../proto/r4/core/resources/coverage_pb.js');
goog.object.extend(proto, proto_r4_core_resources_coverage_pb);
var proto_r4_core_resources_coverage_eligibility_request_pb = require('../../../../proto/r4/core/resources/coverage_eligibility_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_coverage_eligibility_request_pb);
var proto_r4_core_resources_coverage_eligibility_response_pb = require('../../../../proto/r4/core/resources/coverage_eligibility_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_coverage_eligibility_response_pb);
var proto_r4_core_resources_detected_issue_pb = require('../../../../proto/r4/core/resources/detected_issue_pb.js');
goog.object.extend(proto, proto_r4_core_resources_detected_issue_pb);
var proto_r4_core_resources_device_pb = require('../../../../proto/r4/core/resources/device_pb.js');
goog.object.extend(proto, proto_r4_core_resources_device_pb);
var proto_r4_core_resources_device_definition_pb = require('../../../../proto/r4/core/resources/device_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_device_definition_pb);
var proto_r4_core_resources_device_metric_pb = require('../../../../proto/r4/core/resources/device_metric_pb.js');
goog.object.extend(proto, proto_r4_core_resources_device_metric_pb);
var proto_r4_core_resources_device_request_pb = require('../../../../proto/r4/core/resources/device_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_device_request_pb);
var proto_r4_core_resources_device_use_statement_pb = require('../../../../proto/r4/core/resources/device_use_statement_pb.js');
goog.object.extend(proto, proto_r4_core_resources_device_use_statement_pb);
var proto_r4_core_resources_diagnostic_report_pb = require('../../../../proto/r4/core/resources/diagnostic_report_pb.js');
goog.object.extend(proto, proto_r4_core_resources_diagnostic_report_pb);
var proto_r4_core_resources_document_manifest_pb = require('../../../../proto/r4/core/resources/document_manifest_pb.js');
goog.object.extend(proto, proto_r4_core_resources_document_manifest_pb);
var proto_r4_core_resources_document_reference_pb = require('../../../../proto/r4/core/resources/document_reference_pb.js');
goog.object.extend(proto, proto_r4_core_resources_document_reference_pb);
var proto_r4_core_resources_effect_evidence_synthesis_pb = require('../../../../proto/r4/core/resources/effect_evidence_synthesis_pb.js');
goog.object.extend(proto, proto_r4_core_resources_effect_evidence_synthesis_pb);
var proto_r4_core_resources_encounter_pb = require('../../../../proto/r4/core/resources/encounter_pb.js');
goog.object.extend(proto, proto_r4_core_resources_encounter_pb);
var proto_r4_core_resources_endpoint_pb = require('../../../../proto/r4/core/resources/endpoint_pb.js');
goog.object.extend(proto, proto_r4_core_resources_endpoint_pb);
var proto_r4_core_resources_enrollment_request_pb = require('../../../../proto/r4/core/resources/enrollment_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_enrollment_request_pb);
var proto_r4_core_resources_enrollment_response_pb = require('../../../../proto/r4/core/resources/enrollment_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_enrollment_response_pb);
var proto_r4_core_resources_episode_of_care_pb = require('../../../../proto/r4/core/resources/episode_of_care_pb.js');
goog.object.extend(proto, proto_r4_core_resources_episode_of_care_pb);
var proto_r4_core_resources_event_definition_pb = require('../../../../proto/r4/core/resources/event_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_event_definition_pb);
var proto_r4_core_resources_evidence_pb = require('../../../../proto/r4/core/resources/evidence_pb.js');
goog.object.extend(proto, proto_r4_core_resources_evidence_pb);
var proto_r4_core_resources_evidence_variable_pb = require('../../../../proto/r4/core/resources/evidence_variable_pb.js');
goog.object.extend(proto, proto_r4_core_resources_evidence_variable_pb);
var proto_r4_core_resources_example_scenario_pb = require('../../../../proto/r4/core/resources/example_scenario_pb.js');
goog.object.extend(proto, proto_r4_core_resources_example_scenario_pb);
var proto_r4_core_resources_explanation_of_benefit_pb = require('../../../../proto/r4/core/resources/explanation_of_benefit_pb.js');
goog.object.extend(proto, proto_r4_core_resources_explanation_of_benefit_pb);
var proto_r4_core_resources_family_member_history_pb = require('../../../../proto/r4/core/resources/family_member_history_pb.js');
goog.object.extend(proto, proto_r4_core_resources_family_member_history_pb);
var proto_r4_core_resources_flag_pb = require('../../../../proto/r4/core/resources/flag_pb.js');
goog.object.extend(proto, proto_r4_core_resources_flag_pb);
var proto_r4_core_resources_goal_pb = require('../../../../proto/r4/core/resources/goal_pb.js');
goog.object.extend(proto, proto_r4_core_resources_goal_pb);
var proto_r4_core_resources_graph_definition_pb = require('../../../../proto/r4/core/resources/graph_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_graph_definition_pb);
var proto_r4_core_resources_group_pb = require('../../../../proto/r4/core/resources/group_pb.js');
goog.object.extend(proto, proto_r4_core_resources_group_pb);
var proto_r4_core_resources_guidance_response_pb = require('../../../../proto/r4/core/resources/guidance_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_guidance_response_pb);
var proto_r4_core_resources_healthcare_service_pb = require('../../../../proto/r4/core/resources/healthcare_service_pb.js');
goog.object.extend(proto, proto_r4_core_resources_healthcare_service_pb);
var proto_r4_core_resources_imaging_study_pb = require('../../../../proto/r4/core/resources/imaging_study_pb.js');
goog.object.extend(proto, proto_r4_core_resources_imaging_study_pb);
var proto_r4_core_resources_immunization_pb = require('../../../../proto/r4/core/resources/immunization_pb.js');
goog.object.extend(proto, proto_r4_core_resources_immunization_pb);
var proto_r4_core_resources_immunization_evaluation_pb = require('../../../../proto/r4/core/resources/immunization_evaluation_pb.js');
goog.object.extend(proto, proto_r4_core_resources_immunization_evaluation_pb);
var proto_r4_core_resources_immunization_recommendation_pb = require('../../../../proto/r4/core/resources/immunization_recommendation_pb.js');
goog.object.extend(proto, proto_r4_core_resources_immunization_recommendation_pb);
var proto_r4_core_resources_implementation_guide_pb = require('../../../../proto/r4/core/resources/implementation_guide_pb.js');
goog.object.extend(proto, proto_r4_core_resources_implementation_guide_pb);
var proto_r4_core_resources_insurance_plan_pb = require('../../../../proto/r4/core/resources/insurance_plan_pb.js');
goog.object.extend(proto, proto_r4_core_resources_insurance_plan_pb);
var proto_r4_core_resources_invoice_pb = require('../../../../proto/r4/core/resources/invoice_pb.js');
goog.object.extend(proto, proto_r4_core_resources_invoice_pb);
var proto_r4_core_resources_library_pb = require('../../../../proto/r4/core/resources/library_pb.js');
goog.object.extend(proto, proto_r4_core_resources_library_pb);
var proto_r4_core_resources_linkage_pb = require('../../../../proto/r4/core/resources/linkage_pb.js');
goog.object.extend(proto, proto_r4_core_resources_linkage_pb);
var proto_r4_core_resources_list_pb = require('../../../../proto/r4/core/resources/list_pb.js');
goog.object.extend(proto, proto_r4_core_resources_list_pb);
var proto_r4_core_resources_location_pb = require('../../../../proto/r4/core/resources/location_pb.js');
goog.object.extend(proto, proto_r4_core_resources_location_pb);
var proto_r4_core_resources_measure_pb = require('../../../../proto/r4/core/resources/measure_pb.js');
goog.object.extend(proto, proto_r4_core_resources_measure_pb);
var proto_r4_core_resources_measure_report_pb = require('../../../../proto/r4/core/resources/measure_report_pb.js');
goog.object.extend(proto, proto_r4_core_resources_measure_report_pb);
var proto_r4_core_resources_media_pb = require('../../../../proto/r4/core/resources/media_pb.js');
goog.object.extend(proto, proto_r4_core_resources_media_pb);
var proto_r4_core_resources_medication_pb = require('../../../../proto/r4/core/resources/medication_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_pb);
var proto_r4_core_resources_medication_administration_pb = require('../../../../proto/r4/core/resources/medication_administration_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_administration_pb);
var proto_r4_core_resources_medication_dispense_pb = require('../../../../proto/r4/core/resources/medication_dispense_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_dispense_pb);
var proto_r4_core_resources_medication_knowledge_pb = require('../../../../proto/r4/core/resources/medication_knowledge_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_knowledge_pb);
var proto_r4_core_resources_medication_request_pb = require('../../../../proto/r4/core/resources/medication_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_request_pb);
var proto_r4_core_resources_medication_statement_pb = require('../../../../proto/r4/core/resources/medication_statement_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medication_statement_pb);
var proto_r4_core_resources_medicinal_product_pb = require('../../../../proto/r4/core/resources/medicinal_product_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_pb);
var proto_r4_core_resources_medicinal_product_authorization_pb = require('../../../../proto/r4/core/resources/medicinal_product_authorization_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_authorization_pb);
var proto_r4_core_resources_medicinal_product_contraindication_pb = require('../../../../proto/r4/core/resources/medicinal_product_contraindication_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_contraindication_pb);
var proto_r4_core_resources_medicinal_product_indication_pb = require('../../../../proto/r4/core/resources/medicinal_product_indication_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_indication_pb);
var proto_r4_core_resources_medicinal_product_ingredient_pb = require('../../../../proto/r4/core/resources/medicinal_product_ingredient_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_ingredient_pb);
var proto_r4_core_resources_medicinal_product_interaction_pb = require('../../../../proto/r4/core/resources/medicinal_product_interaction_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_interaction_pb);
var proto_r4_core_resources_medicinal_product_manufactured_pb = require('../../../../proto/r4/core/resources/medicinal_product_manufactured_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_manufactured_pb);
var proto_r4_core_resources_medicinal_product_packaged_pb = require('../../../../proto/r4/core/resources/medicinal_product_packaged_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_packaged_pb);
var proto_r4_core_resources_medicinal_product_pharmaceutical_pb = require('../../../../proto/r4/core/resources/medicinal_product_pharmaceutical_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_pharmaceutical_pb);
var proto_r4_core_resources_medicinal_product_undesirable_effect_pb = require('../../../../proto/r4/core/resources/medicinal_product_undesirable_effect_pb.js');
goog.object.extend(proto, proto_r4_core_resources_medicinal_product_undesirable_effect_pb);
var proto_r4_core_resources_message_definition_pb = require('../../../../proto/r4/core/resources/message_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_message_definition_pb);
var proto_r4_core_resources_message_header_pb = require('../../../../proto/r4/core/resources/message_header_pb.js');
goog.object.extend(proto, proto_r4_core_resources_message_header_pb);
var proto_r4_core_resources_metadata_resource_pb = require('../../../../proto/r4/core/resources/metadata_resource_pb.js');
goog.object.extend(proto, proto_r4_core_resources_metadata_resource_pb);
var proto_r4_core_resources_molecular_sequence_pb = require('../../../../proto/r4/core/resources/molecular_sequence_pb.js');
goog.object.extend(proto, proto_r4_core_resources_molecular_sequence_pb);
var proto_r4_core_resources_naming_system_pb = require('../../../../proto/r4/core/resources/naming_system_pb.js');
goog.object.extend(proto, proto_r4_core_resources_naming_system_pb);
var proto_r4_core_resources_nutrition_order_pb = require('../../../../proto/r4/core/resources/nutrition_order_pb.js');
goog.object.extend(proto, proto_r4_core_resources_nutrition_order_pb);
var proto_r4_core_resources_observation_pb = require('../../../../proto/r4/core/resources/observation_pb.js');
goog.object.extend(proto, proto_r4_core_resources_observation_pb);
var proto_r4_core_resources_observation_definition_pb = require('../../../../proto/r4/core/resources/observation_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_observation_definition_pb);
var proto_r4_core_resources_operation_definition_pb = require('../../../../proto/r4/core/resources/operation_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_operation_definition_pb);
var proto_r4_core_resources_operation_outcome_pb = require('../../../../proto/r4/core/resources/operation_outcome_pb.js');
goog.object.extend(proto, proto_r4_core_resources_operation_outcome_pb);
var proto_r4_core_resources_organization_pb = require('../../../../proto/r4/core/resources/organization_pb.js');
goog.object.extend(proto, proto_r4_core_resources_organization_pb);
var proto_r4_core_resources_organization_affiliation_pb = require('../../../../proto/r4/core/resources/organization_affiliation_pb.js');
goog.object.extend(proto, proto_r4_core_resources_organization_affiliation_pb);
var proto_r4_core_resources_parameters_pb = require('../../../../proto/r4/core/resources/parameters_pb.js');
goog.object.extend(proto, proto_r4_core_resources_parameters_pb);
var proto_r4_core_resources_patient_pb = require('../../../../proto/r4/core/resources/patient_pb.js');
goog.object.extend(proto, proto_r4_core_resources_patient_pb);
var proto_r4_core_resources_payment_notice_pb = require('../../../../proto/r4/core/resources/payment_notice_pb.js');
goog.object.extend(proto, proto_r4_core_resources_payment_notice_pb);
var proto_r4_core_resources_payment_reconciliation_pb = require('../../../../proto/r4/core/resources/payment_reconciliation_pb.js');
goog.object.extend(proto, proto_r4_core_resources_payment_reconciliation_pb);
var proto_r4_core_resources_person_pb = require('../../../../proto/r4/core/resources/person_pb.js');
goog.object.extend(proto, proto_r4_core_resources_person_pb);
var proto_r4_core_resources_plan_definition_pb = require('../../../../proto/r4/core/resources/plan_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_plan_definition_pb);
var proto_r4_core_resources_practitioner_pb = require('../../../../proto/r4/core/resources/practitioner_pb.js');
goog.object.extend(proto, proto_r4_core_resources_practitioner_pb);
var proto_r4_core_resources_practitioner_role_pb = require('../../../../proto/r4/core/resources/practitioner_role_pb.js');
goog.object.extend(proto, proto_r4_core_resources_practitioner_role_pb);
var proto_r4_core_resources_procedure_pb = require('../../../../proto/r4/core/resources/procedure_pb.js');
goog.object.extend(proto, proto_r4_core_resources_procedure_pb);
var proto_r4_core_resources_provenance_pb = require('../../../../proto/r4/core/resources/provenance_pb.js');
goog.object.extend(proto, proto_r4_core_resources_provenance_pb);
var proto_r4_core_resources_questionnaire_pb = require('../../../../proto/r4/core/resources/questionnaire_pb.js');
goog.object.extend(proto, proto_r4_core_resources_questionnaire_pb);
var proto_r4_core_resources_questionnaire_response_pb = require('../../../../proto/r4/core/resources/questionnaire_response_pb.js');
goog.object.extend(proto, proto_r4_core_resources_questionnaire_response_pb);
var proto_r4_core_resources_related_person_pb = require('../../../../proto/r4/core/resources/related_person_pb.js');
goog.object.extend(proto, proto_r4_core_resources_related_person_pb);
var proto_r4_core_resources_request_group_pb = require('../../../../proto/r4/core/resources/request_group_pb.js');
goog.object.extend(proto, proto_r4_core_resources_request_group_pb);
var proto_r4_core_resources_research_definition_pb = require('../../../../proto/r4/core/resources/research_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_research_definition_pb);
var proto_r4_core_resources_research_element_definition_pb = require('../../../../proto/r4/core/resources/research_element_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_research_element_definition_pb);
var proto_r4_core_resources_research_study_pb = require('../../../../proto/r4/core/resources/research_study_pb.js');
goog.object.extend(proto, proto_r4_core_resources_research_study_pb);
var proto_r4_core_resources_research_subject_pb = require('../../../../proto/r4/core/resources/research_subject_pb.js');
goog.object.extend(proto, proto_r4_core_resources_research_subject_pb);
var proto_r4_core_resources_risk_assessment_pb = require('../../../../proto/r4/core/resources/risk_assessment_pb.js');
goog.object.extend(proto, proto_r4_core_resources_risk_assessment_pb);
var proto_r4_core_resources_risk_evidence_synthesis_pb = require('../../../../proto/r4/core/resources/risk_evidence_synthesis_pb.js');
goog.object.extend(proto, proto_r4_core_resources_risk_evidence_synthesis_pb);
var proto_r4_core_resources_schedule_pb = require('../../../../proto/r4/core/resources/schedule_pb.js');
goog.object.extend(proto, proto_r4_core_resources_schedule_pb);
var proto_r4_core_resources_search_parameter_pb = require('../../../../proto/r4/core/resources/search_parameter_pb.js');
goog.object.extend(proto, proto_r4_core_resources_search_parameter_pb);
var proto_r4_core_resources_service_request_pb = require('../../../../proto/r4/core/resources/service_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_service_request_pb);
var proto_r4_core_resources_slot_pb = require('../../../../proto/r4/core/resources/slot_pb.js');
goog.object.extend(proto, proto_r4_core_resources_slot_pb);
var proto_r4_core_resources_specimen_pb = require('../../../../proto/r4/core/resources/specimen_pb.js');
goog.object.extend(proto, proto_r4_core_resources_specimen_pb);
var proto_r4_core_resources_specimen_definition_pb = require('../../../../proto/r4/core/resources/specimen_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_specimen_definition_pb);
var proto_r4_core_resources_structure_definition_pb = require('../../../../proto/r4/core/resources/structure_definition_pb.js');
goog.object.extend(proto, proto_r4_core_resources_structure_definition_pb);
var proto_r4_core_resources_structure_map_pb = require('../../../../proto/r4/core/resources/structure_map_pb.js');
goog.object.extend(proto, proto_r4_core_resources_structure_map_pb);
var proto_r4_core_resources_subscription_pb = require('../../../../proto/r4/core/resources/subscription_pb.js');
goog.object.extend(proto, proto_r4_core_resources_subscription_pb);
var proto_r4_core_resources_substance_pb = require('../../../../proto/r4/core/resources/substance_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_pb);
var proto_r4_core_resources_substance_nucleic_acid_pb = require('../../../../proto/r4/core/resources/substance_nucleic_acid_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_nucleic_acid_pb);
var proto_r4_core_resources_substance_polymer_pb = require('../../../../proto/r4/core/resources/substance_polymer_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_polymer_pb);
var proto_r4_core_resources_substance_protein_pb = require('../../../../proto/r4/core/resources/substance_protein_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_protein_pb);
var proto_r4_core_resources_substance_reference_information_pb = require('../../../../proto/r4/core/resources/substance_reference_information_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_reference_information_pb);
var proto_r4_core_resources_substance_source_material_pb = require('../../../../proto/r4/core/resources/substance_source_material_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_source_material_pb);
var proto_r4_core_resources_substance_specification_pb = require('../../../../proto/r4/core/resources/substance_specification_pb.js');
goog.object.extend(proto, proto_r4_core_resources_substance_specification_pb);
var proto_r4_core_resources_supply_delivery_pb = require('../../../../proto/r4/core/resources/supply_delivery_pb.js');
goog.object.extend(proto, proto_r4_core_resources_supply_delivery_pb);
var proto_r4_core_resources_supply_request_pb = require('../../../../proto/r4/core/resources/supply_request_pb.js');
goog.object.extend(proto, proto_r4_core_resources_supply_request_pb);
var proto_r4_core_resources_task_pb = require('../../../../proto/r4/core/resources/task_pb.js');
goog.object.extend(proto, proto_r4_core_resources_task_pb);
var proto_r4_core_resources_terminology_capabilities_pb = require('../../../../proto/r4/core/resources/terminology_capabilities_pb.js');
goog.object.extend(proto, proto_r4_core_resources_terminology_capabilities_pb);
var proto_r4_core_resources_test_report_pb = require('../../../../proto/r4/core/resources/test_report_pb.js');
goog.object.extend(proto, proto_r4_core_resources_test_report_pb);
var proto_r4_core_resources_test_script_pb = require('../../../../proto/r4/core/resources/test_script_pb.js');
goog.object.extend(proto, proto_r4_core_resources_test_script_pb);
var proto_r4_core_resources_value_set_pb = require('../../../../proto/r4/core/resources/value_set_pb.js');
goog.object.extend(proto, proto_r4_core_resources_value_set_pb);
var proto_r4_core_resources_verification_result_pb = require('../../../../proto/r4/core/resources/verification_result_pb.js');
goog.object.extend(proto, proto_r4_core_resources_verification_result_pb);
var proto_r4_core_resources_vision_prescription_pb = require('../../../../proto/r4/core/resources/vision_prescription_pb.js');
goog.object.extend(proto, proto_r4_core_resources_vision_prescription_pb);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry.Request', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry.Response', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry.Search', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.Link', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.Bundle.TypeCode', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ContainedResource', null, global);
goog.exportSymbol('proto.google.fhir.r4.core.ContainedResource.OneofResourceCase', null, global);
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
proto.google.fhir.r4.core.Bundle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.displayName = 'proto.google.fhir.r4.core.Bundle';
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
proto.google.fhir.r4.core.Bundle.TypeCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.TypeCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.TypeCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.TypeCode.displayName = 'proto.google.fhir.r4.core.Bundle.TypeCode';
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
proto.google.fhir.r4.core.Bundle.Link = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Link.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Link, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Link.displayName = 'proto.google.fhir.r4.core.Bundle.Link';
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
proto.google.fhir.r4.core.Bundle.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.displayName = 'proto.google.fhir.r4.core.Bundle.Entry';
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
proto.google.fhir.r4.core.Bundle.Entry.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.Search.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.Search.displayName = 'proto.google.fhir.r4.core.Bundle.Entry.Search';
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
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.displayName = 'proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode';
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
proto.google.fhir.r4.core.Bundle.Entry.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.Request.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.Request.displayName = 'proto.google.fhir.r4.core.Bundle.Entry.Request';
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
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.displayName = 'proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode';
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
proto.google.fhir.r4.core.Bundle.Entry.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.fhir.r4.core.Bundle.Entry.Response.repeatedFields_, null);
};
goog.inherits(proto.google.fhir.r4.core.Bundle.Entry.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.Bundle.Entry.Response.displayName = 'proto.google.fhir.r4.core.Bundle.Entry.Response';
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
proto.google.fhir.r4.core.ContainedResource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.google.fhir.r4.core.ContainedResource.oneofGroups_);
};
goog.inherits(proto.google.fhir.r4.core.ContainedResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.fhir.r4.core.ContainedResource.displayName = 'proto.google.fhir.r4.core.ContainedResource';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.repeatedFields_ = [9,10];



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
proto.google.fhir.r4.core.Bundle.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.Id.toObject(includeInstance, f),
    meta: (f = msg.getMeta()) && proto_r4_core_datatypes_pb.Meta.toObject(includeInstance, f),
    implicitRules: (f = msg.getImplicitRules()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f),
    language: (f = msg.getLanguage()) && proto_r4_core_datatypes_pb.Code.toObject(includeInstance, f),
    identifier: (f = msg.getIdentifier()) && proto_r4_core_datatypes_pb.Identifier.toObject(includeInstance, f),
    type: (f = msg.getType()) && proto.google.fhir.r4.core.Bundle.TypeCode.toObject(includeInstance, f),
    timestamp: (f = msg.getTimestamp()) && proto_r4_core_datatypes_pb.Instant.toObject(includeInstance, f),
    total: (f = msg.getTotal()) && proto_r4_core_datatypes_pb.UnsignedInt.toObject(includeInstance, f),
    linkList: jspb.Message.toObjectList(msg.getLinkList(),
    proto.google.fhir.r4.core.Bundle.Link.toObject, includeInstance),
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.google.fhir.r4.core.Bundle.Entry.toObject, includeInstance),
    signature: (f = msg.getSignature()) && proto_r4_core_datatypes_pb.Signature.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle}
 */
proto.google.fhir.r4.core.Bundle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle;
  return proto.google.fhir.r4.core.Bundle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle}
 */
proto.google.fhir.r4.core.Bundle.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_r4_core_datatypes_pb.Identifier;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Identifier.deserializeBinaryFromReader);
      msg.setIdentifier(value);
      break;
    case 6:
      var value = new proto.google.fhir.r4.core.Bundle.TypeCode;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.TypeCode.deserializeBinaryFromReader);
      msg.setType(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Instant;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Instant.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.UnsignedInt;
      reader.readMessage(value,proto_r4_core_datatypes_pb.UnsignedInt.deserializeBinaryFromReader);
      msg.setTotal(value);
      break;
    case 9:
      var value = new proto.google.fhir.r4.core.Bundle.Link;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Link.deserializeBinaryFromReader);
      msg.addLink(value);
      break;
    case 10:
      var value = new proto.google.fhir.r4.core.Bundle.Entry;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.deserializeBinaryFromReader);
      msg.addEntry(value);
      break;
    case 11:
      var value = new proto_r4_core_datatypes_pb.Signature;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Signature.deserializeBinaryFromReader);
      msg.setSignature(value);
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
proto.google.fhir.r4.core.Bundle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getIdentifier();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Identifier.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.fhir.r4.core.Bundle.TypeCode.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getTotal();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.UnsignedInt.serializeBinaryToWriter
    );
  }
  f = message.getLinkList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.google.fhir.r4.core.Bundle.Link.serializeBinaryToWriter
    );
  }
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.serializeBinaryToWriter
    );
  }
  f = message.getSignature();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_datatypes_pb.Signature.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.TypeCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.TypeCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.TypeCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.TypeCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.TypeCode;
  return proto.google.fhir.r4.core.Bundle.TypeCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.TypeCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.BundleTypeCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.TypeCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.TypeCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.TypeCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional BundleTypeCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.BundleTypeCode.Value}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.BundleTypeCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.BundleTypeCode.Value} value
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode} returns this
*/
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode} returns this
*/
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.TypeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.TypeCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Link.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.Bundle.Link.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Link.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Link} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Link.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    relation: (f = msg.getRelation()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle.Link}
 */
proto.google.fhir.r4.core.Bundle.Link.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Link;
  return proto.google.fhir.r4.core.Bundle.Link.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Link} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Link}
 */
proto.google.fhir.r4.core.Bundle.Link.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setRelation(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Uri;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Uri.deserializeBinaryFromReader);
      msg.setUrl(value);
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
proto.google.fhir.r4.core.Bundle.Link.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Link.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Link} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Link.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getRelation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
*/
proto.google.fhir.r4.core.Bundle.Link.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
*/
proto.google.fhir.r4.core.Bundle.Link.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
*/
proto.google.fhir.r4.core.Bundle.Link.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional String relation = 4;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.getRelation = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
*/
proto.google.fhir.r4.core.Bundle.Link.prototype.setRelation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.clearRelation = function() {
  return this.setRelation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.hasRelation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Uri url = 5;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.getUrl = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
*/
proto.google.fhir.r4.core.Bundle.Link.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Link} returns this
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Link.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.repeatedFields_ = [2,3,4];



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
proto.google.fhir.r4.core.Bundle.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    linkList: jspb.Message.toObjectList(msg.getLinkList(),
    proto.google.fhir.r4.core.Bundle.Link.toObject, includeInstance),
    fullUrl: (f = msg.getFullUrl()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && proto.google.fhir.r4.core.ContainedResource.toObject(includeInstance, f),
    search: (f = msg.getSearch()) && proto.google.fhir.r4.core.Bundle.Entry.Search.toObject(includeInstance, f),
    request: (f = msg.getRequest()) && proto.google.fhir.r4.core.Bundle.Entry.Request.toObject(includeInstance, f),
    response: (f = msg.getResponse()) && proto.google.fhir.r4.core.Bundle.Entry.Response.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry}
 */
proto.google.fhir.r4.core.Bundle.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry;
  return proto.google.fhir.r4.core.Bundle.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry}
 */
proto.google.fhir.r4.core.Bundle.Entry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.fhir.r4.core.Bundle.Link;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Link.deserializeBinaryFromReader);
      msg.addLink(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Uri;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Uri.deserializeBinaryFromReader);
      msg.setFullUrl(value);
      break;
    case 6:
      var value = new proto.google.fhir.r4.core.ContainedResource;
      reader.readMessage(value,proto.google.fhir.r4.core.ContainedResource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 7:
      var value = new proto.google.fhir.r4.core.Bundle.Entry.Search;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.Search.deserializeBinaryFromReader);
      msg.setSearch(value);
      break;
    case 8:
      var value = new proto.google.fhir.r4.core.Bundle.Entry.Request;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.Request.deserializeBinaryFromReader);
      msg.setRequest(value);
      break;
    case 9:
      var value = new proto.google.fhir.r4.core.Bundle.Entry.Response;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.Response.deserializeBinaryFromReader);
      msg.setResponse(value);
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
proto.google.fhir.r4.core.Bundle.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getLinkList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.fhir.r4.core.Bundle.Link.serializeBinaryToWriter
    );
  }
  f = message.getFullUrl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.google.fhir.r4.core.ContainedResource.serializeBinaryToWriter
    );
  }
  f = message.getSearch();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.Search.serializeBinaryToWriter
    );
  }
  f = message.getRequest();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.Request.serializeBinaryToWriter
    );
  }
  f = message.getResponse();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.Response.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    mode: (f = msg.getMode()) && proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.toObject(includeInstance, f),
    score: (f = msg.getScore()) && proto_r4_core_datatypes_pb.Decimal.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry.Search;
  return proto.google.fhir.r4.core.Bundle.Entry.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.deserializeBinaryFromReader);
      msg.setMode(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Decimal;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Decimal.deserializeBinaryFromReader);
      msg.setScore(value);
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
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMode();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.serializeBinaryToWriter
    );
  }
  f = message.getScore();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Decimal.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode;
  return proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.SearchEntryModeCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional SearchEntryModeCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.SearchEntryModeCode.Value}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.SearchEntryModeCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.SearchEntryModeCode.Value} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional ModeCode mode = 4;
 * @return {?proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.getMode = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.Entry.Search.ModeCode|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.setMode = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.clearMode = function() {
  return this.setMode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.hasMode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Decimal score = 5;
 * @return {?proto.google.fhir.r4.core.Decimal}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.getScore = function() {
  return /** @type{?proto.google.fhir.r4.core.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Decimal, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Decimal|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.setScore = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Search} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.clearScore = function() {
  return this.setScore(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Search.prototype.hasScore = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    method: (f = msg.getMethod()) && proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.toObject(includeInstance, f),
    url: (f = msg.getUrl()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f),
    ifNoneMatch: (f = msg.getIfNoneMatch()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    ifModifiedSince: (f = msg.getIfModifiedSince()) && proto_r4_core_datatypes_pb.Instant.toObject(includeInstance, f),
    ifMatch: (f = msg.getIfMatch()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    ifNoneExist: (f = msg.getIfNoneExist()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry.Request;
  return proto.google.fhir.r4.core.Bundle.Entry.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.deserializeBinaryFromReader);
      msg.setMethod(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Uri;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Uri.deserializeBinaryFromReader);
      msg.setUrl(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setIfNoneMatch(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Instant;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Instant.deserializeBinaryFromReader);
      msg.setIfModifiedSince(value);
      break;
    case 8:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setIfMatch(value);
      break;
    case 9:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setIfNoneExist(value);
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
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getMethod();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getIfNoneMatch();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getIfModifiedSince();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getIfMatch();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getIfNoneExist();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.repeatedFields_ = [3];



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
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.toObject = function(includeInstance, msg) {
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode;
  return proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.google.fhir.r4.core.HTTPVerbCode.Value} */ (reader.readEnum());
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
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.serializeBinaryToWriter = function(message, writer) {
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
 * optional HTTPVerbCode.Value value = 1;
 * @return {!proto.google.fhir.r4.core.HTTPVerbCode.Value}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.getValue = function() {
  return /** @type {!proto.google.fhir.r4.core.HTTPVerbCode.Value} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.google.fhir.r4.core.HTTPVerbCode.Value} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.setValue = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional String id = 2;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.hasId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Extension extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional MethodCode method = 4;
 * @return {?proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getMethod = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.Entry.Request.MethodCode|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setMethod = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearMethod = function() {
  return this.setMethod(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasMethod = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Uri url = 5;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getUrl = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setUrl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearUrl = function() {
  return this.setUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional String if_none_match = 6;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getIfNoneMatch = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setIfNoneMatch = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearIfNoneMatch = function() {
  return this.setIfNoneMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasIfNoneMatch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Instant if_modified_since = 7;
 * @return {?proto.google.fhir.r4.core.Instant}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getIfModifiedSince = function() {
  return /** @type{?proto.google.fhir.r4.core.Instant} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Instant, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Instant|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setIfModifiedSince = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearIfModifiedSince = function() {
  return this.setIfModifiedSince(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasIfModifiedSince = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional String if_match = 8;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getIfMatch = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setIfMatch = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearIfMatch = function() {
  return this.setIfMatch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasIfMatch = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional String if_none_exist = 9;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.getIfNoneExist = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.setIfNoneExist = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Request} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.clearIfNoneExist = function() {
  return this.setIfNoneExist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Request.prototype.hasIfNoneExist = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.repeatedFields_ = [2,3];



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
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.Bundle.Entry.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    extensionList: jspb.Message.toObjectList(msg.getExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    modifierExtensionList: jspb.Message.toObjectList(msg.getModifierExtensionList(),
    proto_r4_core_datatypes_pb.Extension.toObject, includeInstance),
    status: (f = msg.getStatus()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto_r4_core_datatypes_pb.Uri.toObject(includeInstance, f),
    etag: (f = msg.getEtag()) && proto_r4_core_datatypes_pb.String.toObject(includeInstance, f),
    lastModified: (f = msg.getLastModified()) && proto_r4_core_datatypes_pb.Instant.toObject(includeInstance, f),
    outcome: (f = msg.getOutcome()) && proto.google.fhir.r4.core.ContainedResource.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.Bundle.Entry.Response;
  return proto.google.fhir.r4.core.Bundle.Entry.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 5:
      var value = new proto_r4_core_datatypes_pb.Uri;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Uri.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 6:
      var value = new proto_r4_core_datatypes_pb.String;
      reader.readMessage(value,proto_r4_core_datatypes_pb.String.deserializeBinaryFromReader);
      msg.setEtag(value);
      break;
    case 7:
      var value = new proto_r4_core_datatypes_pb.Instant;
      reader.readMessage(value,proto_r4_core_datatypes_pb.Instant.deserializeBinaryFromReader);
      msg.setLastModified(value);
      break;
    case 8:
      var value = new proto.google.fhir.r4.core.ContainedResource;
      reader.readMessage(value,proto.google.fhir.r4.core.ContainedResource.deserializeBinaryFromReader);
      msg.setOutcome(value);
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
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.Bundle.Entry.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.Bundle.Entry.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_datatypes_pb.Uri.serializeBinaryToWriter
    );
  }
  f = message.getEtag();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_datatypes_pb.String.serializeBinaryToWriter
    );
  }
  f = message.getLastModified();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_datatypes_pb.Instant.serializeBinaryToWriter
    );
  }
  f = message.getOutcome();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.google.fhir.r4.core.ContainedResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * optional String status = 4;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getStatus = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Uri location = 5;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional String etag = 6;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getEtag = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setEtag = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearEtag = function() {
  return this.setEtag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasEtag = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Instant last_modified = 7;
 * @return {?proto.google.fhir.r4.core.Instant}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getLastModified = function() {
  return /** @type{?proto.google.fhir.r4.core.Instant} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Instant, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Instant|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setLastModified = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearLastModified = function() {
  return this.setLastModified(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasLastModified = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ContainedResource outcome = 8;
 * @return {?proto.google.fhir.r4.core.ContainedResource}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.getOutcome = function() {
  return /** @type{?proto.google.fhir.r4.core.ContainedResource} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ContainedResource, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.ContainedResource|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.setOutcome = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry.Response} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.clearOutcome = function() {
  return this.setOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.Response.prototype.hasOutcome = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional String id = 1;
 * @return {?proto.google.fhir.r4.core.String}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.String} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.String, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.String|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Extension extension = 2;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 2));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.addExtension$ = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearExtensionList = function() {
  return this.setExtensionList([]);
};


/**
 * repeated Extension modifier_extension = 3;
 * @return {!Array<!proto.google.fhir.r4.core.Extension>}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getModifierExtensionList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Extension>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_r4_core_datatypes_pb.Extension, 3));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Extension>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setModifierExtensionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Extension=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Extension}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.addModifierExtension = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.fhir.r4.core.Extension, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearModifierExtensionList = function() {
  return this.setModifierExtensionList([]);
};


/**
 * repeated Link link = 4;
 * @return {!Array<!proto.google.fhir.r4.core.Bundle.Link>}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getLinkList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Bundle.Link>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.Bundle.Link, 4));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Bundle.Link>} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setLinkList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Bundle.Link=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Bundle.Link}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.addLink = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.fhir.r4.core.Bundle.Link, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearLinkList = function() {
  return this.setLinkList([]);
};


/**
 * optional Uri full_url = 5;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getFullUrl = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setFullUrl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearFullUrl = function() {
  return this.setFullUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasFullUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ContainedResource resource = 6;
 * @return {?proto.google.fhir.r4.core.ContainedResource}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getResource = function() {
  return /** @type{?proto.google.fhir.r4.core.ContainedResource} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.ContainedResource, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.ContainedResource|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasResource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Search search = 7;
 * @return {?proto.google.fhir.r4.core.Bundle.Entry.Search}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getSearch = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.Entry.Search} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry.Search, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.Entry.Search|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setSearch = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearSearch = function() {
  return this.setSearch(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasSearch = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Request request = 8;
 * @return {?proto.google.fhir.r4.core.Bundle.Entry.Request}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.Entry.Request} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry.Request, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.Entry.Request|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setRequest = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearRequest = function() {
  return this.setRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasRequest = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Response response = 9;
 * @return {?proto.google.fhir.r4.core.Bundle.Entry.Response}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.getResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.Entry.Response} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry.Response, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.Entry.Response|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
*/
proto.google.fhir.r4.core.Bundle.Entry.prototype.setResponse = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle.Entry} returns this
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.clearResponse = function() {
  return this.setResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.Entry.prototype.hasResponse = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional Id id = 1;
 * @return {?proto.google.fhir.r4.core.Id}
 */
proto.google.fhir.r4.core.Bundle.prototype.getId = function() {
  return /** @type{?proto.google.fhir.r4.core.Id} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Id, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Id|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Meta meta = 2;
 * @return {?proto.google.fhir.r4.core.Meta}
 */
proto.google.fhir.r4.core.Bundle.prototype.getMeta = function() {
  return /** @type{?proto.google.fhir.r4.core.Meta} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Meta, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.Meta|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setMeta = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearMeta = function() {
  return this.setMeta(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasMeta = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Uri implicit_rules = 3;
 * @return {?proto.google.fhir.r4.core.Uri}
 */
proto.google.fhir.r4.core.Bundle.prototype.getImplicitRules = function() {
  return /** @type{?proto.google.fhir.r4.core.Uri} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Uri, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.Uri|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setImplicitRules = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearImplicitRules = function() {
  return this.setImplicitRules(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasImplicitRules = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Code language = 4;
 * @return {?proto.google.fhir.r4.core.Code}
 */
proto.google.fhir.r4.core.Bundle.prototype.getLanguage = function() {
  return /** @type{?proto.google.fhir.r4.core.Code} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Code, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.Code|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setLanguage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearLanguage = function() {
  return this.setLanguage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasLanguage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Identifier identifier = 5;
 * @return {?proto.google.fhir.r4.core.Identifier}
 */
proto.google.fhir.r4.core.Bundle.prototype.getIdentifier = function() {
  return /** @type{?proto.google.fhir.r4.core.Identifier} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Identifier, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Identifier|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setIdentifier = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearIdentifier = function() {
  return this.setIdentifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasIdentifier = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional TypeCode type = 6;
 * @return {?proto.google.fhir.r4.core.Bundle.TypeCode}
 */
proto.google.fhir.r4.core.Bundle.prototype.getType = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle.TypeCode} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle.TypeCode, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle.TypeCode|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setType = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearType = function() {
  return this.setType(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasType = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Instant timestamp = 7;
 * @return {?proto.google.fhir.r4.core.Instant}
 */
proto.google.fhir.r4.core.Bundle.prototype.getTimestamp = function() {
  return /** @type{?proto.google.fhir.r4.core.Instant} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Instant, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.Instant|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setTimestamp = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearTimestamp = function() {
  return this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UnsignedInt total = 8;
 * @return {?proto.google.fhir.r4.core.UnsignedInt}
 */
proto.google.fhir.r4.core.Bundle.prototype.getTotal = function() {
  return /** @type{?proto.google.fhir.r4.core.UnsignedInt} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.UnsignedInt, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.UnsignedInt|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setTotal = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearTotal = function() {
  return this.setTotal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasTotal = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated Link link = 9;
 * @return {!Array<!proto.google.fhir.r4.core.Bundle.Link>}
 */
proto.google.fhir.r4.core.Bundle.prototype.getLinkList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Bundle.Link>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.Bundle.Link, 9));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Bundle.Link>} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setLinkList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Bundle.Link=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Bundle.Link}
 */
proto.google.fhir.r4.core.Bundle.prototype.addLink = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.google.fhir.r4.core.Bundle.Link, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearLinkList = function() {
  return this.setLinkList([]);
};


/**
 * repeated Entry entry = 10;
 * @return {!Array<!proto.google.fhir.r4.core.Bundle.Entry>}
 */
proto.google.fhir.r4.core.Bundle.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.google.fhir.r4.core.Bundle.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.fhir.r4.core.Bundle.Entry, 10));
};


/**
 * @param {!Array<!proto.google.fhir.r4.core.Bundle.Entry>} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.google.fhir.r4.core.Bundle.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.fhir.r4.core.Bundle.Entry}
 */
proto.google.fhir.r4.core.Bundle.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.google.fhir.r4.core.Bundle.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};


/**
 * optional Signature signature = 11;
 * @return {?proto.google.fhir.r4.core.Signature}
 */
proto.google.fhir.r4.core.Bundle.prototype.getSignature = function() {
  return /** @type{?proto.google.fhir.r4.core.Signature} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_datatypes_pb.Signature, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.Signature|undefined} value
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
*/
proto.google.fhir.r4.core.Bundle.prototype.setSignature = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.Bundle} returns this
 */
proto.google.fhir.r4.core.Bundle.prototype.clearSignature = function() {
  return this.setSignature(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.Bundle.prototype.hasSignature = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.google.fhir.r4.core.ContainedResource.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146]];

/**
 * @enum {number}
 */
proto.google.fhir.r4.core.ContainedResource.OneofResourceCase = {
  ONEOF_RESOURCE_NOT_SET: 0,
  ACCOUNT: 1,
  ACTIVITY_DEFINITION: 2,
  ADVERSE_EVENT: 3,
  ALLERGY_INTOLERANCE: 4,
  APPOINTMENT: 5,
  APPOINTMENT_RESPONSE: 6,
  AUDIT_EVENT: 7,
  BASIC: 8,
  BINARY: 9,
  BIOLOGICALLY_DERIVED_PRODUCT: 10,
  BODY_STRUCTURE: 11,
  BUNDLE: 12,
  CAPABILITY_STATEMENT: 13,
  CARE_PLAN: 14,
  CARE_TEAM: 15,
  CATALOG_ENTRY: 16,
  CHARGE_ITEM: 17,
  CHARGE_ITEM_DEFINITION: 18,
  CLAIM: 19,
  CLAIM_RESPONSE: 20,
  CLINICAL_IMPRESSION: 21,
  CODE_SYSTEM: 22,
  COMMUNICATION: 23,
  COMMUNICATION_REQUEST: 24,
  COMPARTMENT_DEFINITION: 25,
  COMPOSITION: 26,
  CONCEPT_MAP: 27,
  CONDITION: 28,
  CONSENT: 29,
  CONTRACT: 30,
  COVERAGE: 31,
  COVERAGE_ELIGIBILITY_REQUEST: 32,
  COVERAGE_ELIGIBILITY_RESPONSE: 33,
  DETECTED_ISSUE: 34,
  DEVICE: 35,
  DEVICE_DEFINITION: 36,
  DEVICE_METRIC: 37,
  DEVICE_REQUEST: 38,
  DEVICE_USE_STATEMENT: 39,
  DIAGNOSTIC_REPORT: 40,
  DOCUMENT_MANIFEST: 41,
  DOCUMENT_REFERENCE: 42,
  EFFECT_EVIDENCE_SYNTHESIS: 43,
  ENCOUNTER: 44,
  ENDPOINT: 45,
  ENROLLMENT_REQUEST: 46,
  ENROLLMENT_RESPONSE: 47,
  EPISODE_OF_CARE: 48,
  EVENT_DEFINITION: 49,
  EVIDENCE: 50,
  EVIDENCE_VARIABLE: 51,
  EXAMPLE_SCENARIO: 52,
  EXPLANATION_OF_BENEFIT: 53,
  FAMILY_MEMBER_HISTORY: 54,
  FLAG: 55,
  GOAL: 56,
  GRAPH_DEFINITION: 57,
  GROUP: 58,
  GUIDANCE_RESPONSE: 59,
  HEALTHCARE_SERVICE: 60,
  IMAGING_STUDY: 61,
  IMMUNIZATION: 62,
  IMMUNIZATION_EVALUATION: 63,
  IMMUNIZATION_RECOMMENDATION: 64,
  IMPLEMENTATION_GUIDE: 65,
  INSURANCE_PLAN: 66,
  INVOICE: 67,
  LIBRARY: 68,
  LINKAGE: 69,
  LIST: 70,
  LOCATION: 71,
  MEASURE: 72,
  MEASURE_REPORT: 73,
  MEDIA: 74,
  MEDICATION: 75,
  MEDICATION_ADMINISTRATION: 76,
  MEDICATION_DISPENSE: 77,
  MEDICATION_KNOWLEDGE: 78,
  MEDICATION_REQUEST: 79,
  MEDICATION_STATEMENT: 80,
  MEDICINAL_PRODUCT: 81,
  MEDICINAL_PRODUCT_AUTHORIZATION: 82,
  MEDICINAL_PRODUCT_CONTRAINDICATION: 83,
  MEDICINAL_PRODUCT_INDICATION: 84,
  MEDICINAL_PRODUCT_INGREDIENT: 85,
  MEDICINAL_PRODUCT_INTERACTION: 86,
  MEDICINAL_PRODUCT_MANUFACTURED: 87,
  MEDICINAL_PRODUCT_PACKAGED: 88,
  MEDICINAL_PRODUCT_PHARMACEUTICAL: 89,
  MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT: 90,
  MESSAGE_DEFINITION: 91,
  MESSAGE_HEADER: 92,
  MOLECULAR_SEQUENCE: 93,
  NAMING_SYSTEM: 94,
  NUTRITION_ORDER: 95,
  OBSERVATION: 96,
  OBSERVATION_DEFINITION: 97,
  OPERATION_DEFINITION: 98,
  OPERATION_OUTCOME: 99,
  ORGANIZATION: 100,
  ORGANIZATION_AFFILIATION: 101,
  PARAMETERS: 102,
  PATIENT: 103,
  PAYMENT_NOTICE: 104,
  PAYMENT_RECONCILIATION: 105,
  PERSON: 106,
  PLAN_DEFINITION: 107,
  PRACTITIONER: 108,
  PRACTITIONER_ROLE: 109,
  PROCEDURE: 110,
  PROVENANCE: 111,
  QUESTIONNAIRE: 112,
  QUESTIONNAIRE_RESPONSE: 113,
  RELATED_PERSON: 114,
  REQUEST_GROUP: 115,
  RESEARCH_DEFINITION: 116,
  RESEARCH_ELEMENT_DEFINITION: 117,
  RESEARCH_STUDY: 118,
  RESEARCH_SUBJECT: 119,
  RISK_ASSESSMENT: 120,
  RISK_EVIDENCE_SYNTHESIS: 121,
  SCHEDULE: 122,
  SEARCH_PARAMETER: 123,
  SERVICE_REQUEST: 124,
  SLOT: 125,
  SPECIMEN: 126,
  SPECIMEN_DEFINITION: 127,
  STRUCTURE_DEFINITION: 128,
  STRUCTURE_MAP: 129,
  SUBSCRIPTION: 130,
  SUBSTANCE: 131,
  SUBSTANCE_NUCLEIC_ACID: 132,
  SUBSTANCE_POLYMER: 133,
  SUBSTANCE_PROTEIN: 134,
  SUBSTANCE_REFERENCE_INFORMATION: 135,
  SUBSTANCE_SOURCE_MATERIAL: 136,
  SUBSTANCE_SPECIFICATION: 137,
  SUPPLY_DELIVERY: 138,
  SUPPLY_REQUEST: 139,
  TASK: 140,
  TERMINOLOGY_CAPABILITIES: 141,
  TEST_REPORT: 142,
  TEST_SCRIPT: 143,
  VALUE_SET: 144,
  VERIFICATION_RESULT: 145,
  VISION_PRESCRIPTION: 146
};

/**
 * @return {proto.google.fhir.r4.core.ContainedResource.OneofResourceCase}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getOneofResourceCase = function() {
  return /** @type {proto.google.fhir.r4.core.ContainedResource.OneofResourceCase} */(jspb.Message.computeOneofCase(this, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0]));
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
proto.google.fhir.r4.core.ContainedResource.prototype.toObject = function(opt_includeInstance) {
  return proto.google.fhir.r4.core.ContainedResource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.fhir.r4.core.ContainedResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ContainedResource.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto_r4_core_resources_account_pb.Account.toObject(includeInstance, f),
    activityDefinition: (f = msg.getActivityDefinition()) && proto_r4_core_resources_activity_definition_pb.ActivityDefinition.toObject(includeInstance, f),
    adverseEvent: (f = msg.getAdverseEvent()) && proto_r4_core_resources_adverse_event_pb.AdverseEvent.toObject(includeInstance, f),
    allergyIntolerance: (f = msg.getAllergyIntolerance()) && proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance.toObject(includeInstance, f),
    appointment: (f = msg.getAppointment()) && proto_r4_core_resources_appointment_pb.Appointment.toObject(includeInstance, f),
    appointmentResponse: (f = msg.getAppointmentResponse()) && proto_r4_core_resources_appointment_response_pb.AppointmentResponse.toObject(includeInstance, f),
    auditEvent: (f = msg.getAuditEvent()) && proto_r4_core_resources_audit_event_pb.AuditEvent.toObject(includeInstance, f),
    basic: (f = msg.getBasic()) && proto_r4_core_resources_basic_pb.Basic.toObject(includeInstance, f),
    binary: (f = msg.getBinary()) && proto_r4_core_resources_binary_pb.Binary.toObject(includeInstance, f),
    biologicallyDerivedProduct: (f = msg.getBiologicallyDerivedProduct()) && proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct.toObject(includeInstance, f),
    bodyStructure: (f = msg.getBodyStructure()) && proto_r4_core_resources_body_structure_pb.BodyStructure.toObject(includeInstance, f),
    bundle: (f = msg.getBundle()) && proto.google.fhir.r4.core.Bundle.toObject(includeInstance, f),
    capabilityStatement: (f = msg.getCapabilityStatement()) && proto_r4_core_resources_capability_statement_pb.CapabilityStatement.toObject(includeInstance, f),
    carePlan: (f = msg.getCarePlan()) && proto_r4_core_resources_care_plan_pb.CarePlan.toObject(includeInstance, f),
    careTeam: (f = msg.getCareTeam()) && proto_r4_core_resources_care_team_pb.CareTeam.toObject(includeInstance, f),
    catalogEntry: (f = msg.getCatalogEntry()) && proto_r4_core_resources_catalog_entry_pb.CatalogEntry.toObject(includeInstance, f),
    chargeItem: (f = msg.getChargeItem()) && proto_r4_core_resources_charge_item_pb.ChargeItem.toObject(includeInstance, f),
    chargeItemDefinition: (f = msg.getChargeItemDefinition()) && proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition.toObject(includeInstance, f),
    claim: (f = msg.getClaim()) && proto_r4_core_resources_claim_pb.Claim.toObject(includeInstance, f),
    claimResponse: (f = msg.getClaimResponse()) && proto_r4_core_resources_claim_response_pb.ClaimResponse.toObject(includeInstance, f),
    clinicalImpression: (f = msg.getClinicalImpression()) && proto_r4_core_resources_clinical_impression_pb.ClinicalImpression.toObject(includeInstance, f),
    codeSystem: (f = msg.getCodeSystem()) && proto_r4_core_resources_code_system_pb.CodeSystem.toObject(includeInstance, f),
    communication: (f = msg.getCommunication()) && proto_r4_core_resources_communication_pb.Communication.toObject(includeInstance, f),
    communicationRequest: (f = msg.getCommunicationRequest()) && proto_r4_core_resources_communication_request_pb.CommunicationRequest.toObject(includeInstance, f),
    compartmentDefinition: (f = msg.getCompartmentDefinition()) && proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition.toObject(includeInstance, f),
    composition: (f = msg.getComposition()) && proto_r4_core_resources_composition_pb.Composition.toObject(includeInstance, f),
    conceptMap: (f = msg.getConceptMap()) && proto_r4_core_resources_concept_map_pb.ConceptMap.toObject(includeInstance, f),
    condition: (f = msg.getCondition()) && proto_r4_core_resources_condition_pb.Condition.toObject(includeInstance, f),
    consent: (f = msg.getConsent()) && proto_r4_core_resources_consent_pb.Consent.toObject(includeInstance, f),
    contract: (f = msg.getContract()) && proto_r4_core_resources_contract_pb.Contract.toObject(includeInstance, f),
    coverage: (f = msg.getCoverage()) && proto_r4_core_resources_coverage_pb.Coverage.toObject(includeInstance, f),
    coverageEligibilityRequest: (f = msg.getCoverageEligibilityRequest()) && proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest.toObject(includeInstance, f),
    coverageEligibilityResponse: (f = msg.getCoverageEligibilityResponse()) && proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse.toObject(includeInstance, f),
    detectedIssue: (f = msg.getDetectedIssue()) && proto_r4_core_resources_detected_issue_pb.DetectedIssue.toObject(includeInstance, f),
    device: (f = msg.getDevice()) && proto_r4_core_resources_device_pb.Device.toObject(includeInstance, f),
    deviceDefinition: (f = msg.getDeviceDefinition()) && proto_r4_core_resources_device_definition_pb.DeviceDefinition.toObject(includeInstance, f),
    deviceMetric: (f = msg.getDeviceMetric()) && proto_r4_core_resources_device_metric_pb.DeviceMetric.toObject(includeInstance, f),
    deviceRequest: (f = msg.getDeviceRequest()) && proto_r4_core_resources_device_request_pb.DeviceRequest.toObject(includeInstance, f),
    deviceUseStatement: (f = msg.getDeviceUseStatement()) && proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement.toObject(includeInstance, f),
    diagnosticReport: (f = msg.getDiagnosticReport()) && proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport.toObject(includeInstance, f),
    documentManifest: (f = msg.getDocumentManifest()) && proto_r4_core_resources_document_manifest_pb.DocumentManifest.toObject(includeInstance, f),
    documentReference: (f = msg.getDocumentReference()) && proto_r4_core_resources_document_reference_pb.DocumentReference.toObject(includeInstance, f),
    effectEvidenceSynthesis: (f = msg.getEffectEvidenceSynthesis()) && proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis.toObject(includeInstance, f),
    encounter: (f = msg.getEncounter()) && proto_r4_core_resources_encounter_pb.Encounter.toObject(includeInstance, f),
    endpoint: (f = msg.getEndpoint()) && proto_r4_core_resources_endpoint_pb.Endpoint.toObject(includeInstance, f),
    enrollmentRequest: (f = msg.getEnrollmentRequest()) && proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest.toObject(includeInstance, f),
    enrollmentResponse: (f = msg.getEnrollmentResponse()) && proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse.toObject(includeInstance, f),
    episodeOfCare: (f = msg.getEpisodeOfCare()) && proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare.toObject(includeInstance, f),
    eventDefinition: (f = msg.getEventDefinition()) && proto_r4_core_resources_event_definition_pb.EventDefinition.toObject(includeInstance, f),
    evidence: (f = msg.getEvidence()) && proto_r4_core_resources_evidence_pb.Evidence.toObject(includeInstance, f),
    evidenceVariable: (f = msg.getEvidenceVariable()) && proto_r4_core_resources_evidence_variable_pb.EvidenceVariable.toObject(includeInstance, f),
    exampleScenario: (f = msg.getExampleScenario()) && proto_r4_core_resources_example_scenario_pb.ExampleScenario.toObject(includeInstance, f),
    explanationOfBenefit: (f = msg.getExplanationOfBenefit()) && proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit.toObject(includeInstance, f),
    familyMemberHistory: (f = msg.getFamilyMemberHistory()) && proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory.toObject(includeInstance, f),
    flag: (f = msg.getFlag()) && proto_r4_core_resources_flag_pb.Flag.toObject(includeInstance, f),
    goal: (f = msg.getGoal()) && proto_r4_core_resources_goal_pb.Goal.toObject(includeInstance, f),
    graphDefinition: (f = msg.getGraphDefinition()) && proto_r4_core_resources_graph_definition_pb.GraphDefinition.toObject(includeInstance, f),
    group: (f = msg.getGroup()) && proto_r4_core_resources_group_pb.Group.toObject(includeInstance, f),
    guidanceResponse: (f = msg.getGuidanceResponse()) && proto_r4_core_resources_guidance_response_pb.GuidanceResponse.toObject(includeInstance, f),
    healthcareService: (f = msg.getHealthcareService()) && proto_r4_core_resources_healthcare_service_pb.HealthcareService.toObject(includeInstance, f),
    imagingStudy: (f = msg.getImagingStudy()) && proto_r4_core_resources_imaging_study_pb.ImagingStudy.toObject(includeInstance, f),
    immunization: (f = msg.getImmunization()) && proto_r4_core_resources_immunization_pb.Immunization.toObject(includeInstance, f),
    immunizationEvaluation: (f = msg.getImmunizationEvaluation()) && proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation.toObject(includeInstance, f),
    immunizationRecommendation: (f = msg.getImmunizationRecommendation()) && proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation.toObject(includeInstance, f),
    implementationGuide: (f = msg.getImplementationGuide()) && proto_r4_core_resources_implementation_guide_pb.ImplementationGuide.toObject(includeInstance, f),
    insurancePlan: (f = msg.getInsurancePlan()) && proto_r4_core_resources_insurance_plan_pb.InsurancePlan.toObject(includeInstance, f),
    invoice: (f = msg.getInvoice()) && proto_r4_core_resources_invoice_pb.Invoice.toObject(includeInstance, f),
    library: (f = msg.getLibrary()) && proto_r4_core_resources_library_pb.Library.toObject(includeInstance, f),
    linkage: (f = msg.getLinkage()) && proto_r4_core_resources_linkage_pb.Linkage.toObject(includeInstance, f),
    list: (f = msg.getList()) && proto_r4_core_resources_list_pb.List.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto_r4_core_resources_location_pb.Location.toObject(includeInstance, f),
    measure: (f = msg.getMeasure()) && proto_r4_core_resources_measure_pb.Measure.toObject(includeInstance, f),
    measureReport: (f = msg.getMeasureReport()) && proto_r4_core_resources_measure_report_pb.MeasureReport.toObject(includeInstance, f),
    media: (f = msg.getMedia()) && proto_r4_core_resources_media_pb.Media.toObject(includeInstance, f),
    medication: (f = msg.getMedication()) && proto_r4_core_resources_medication_pb.Medication.toObject(includeInstance, f),
    medicationAdministration: (f = msg.getMedicationAdministration()) && proto_r4_core_resources_medication_administration_pb.MedicationAdministration.toObject(includeInstance, f),
    medicationDispense: (f = msg.getMedicationDispense()) && proto_r4_core_resources_medication_dispense_pb.MedicationDispense.toObject(includeInstance, f),
    medicationKnowledge: (f = msg.getMedicationKnowledge()) && proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge.toObject(includeInstance, f),
    medicationRequest: (f = msg.getMedicationRequest()) && proto_r4_core_resources_medication_request_pb.MedicationRequest.toObject(includeInstance, f),
    medicationStatement: (f = msg.getMedicationStatement()) && proto_r4_core_resources_medication_statement_pb.MedicationStatement.toObject(includeInstance, f),
    medicinalProduct: (f = msg.getMedicinalProduct()) && proto_r4_core_resources_medicinal_product_pb.MedicinalProduct.toObject(includeInstance, f),
    medicinalProductAuthorization: (f = msg.getMedicinalProductAuthorization()) && proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization.toObject(includeInstance, f),
    medicinalProductContraindication: (f = msg.getMedicinalProductContraindication()) && proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication.toObject(includeInstance, f),
    medicinalProductIndication: (f = msg.getMedicinalProductIndication()) && proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication.toObject(includeInstance, f),
    medicinalProductIngredient: (f = msg.getMedicinalProductIngredient()) && proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient.toObject(includeInstance, f),
    medicinalProductInteraction: (f = msg.getMedicinalProductInteraction()) && proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction.toObject(includeInstance, f),
    medicinalProductManufactured: (f = msg.getMedicinalProductManufactured()) && proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured.toObject(includeInstance, f),
    medicinalProductPackaged: (f = msg.getMedicinalProductPackaged()) && proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged.toObject(includeInstance, f),
    medicinalProductPharmaceutical: (f = msg.getMedicinalProductPharmaceutical()) && proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical.toObject(includeInstance, f),
    medicinalProductUndesirableEffect: (f = msg.getMedicinalProductUndesirableEffect()) && proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect.toObject(includeInstance, f),
    messageDefinition: (f = msg.getMessageDefinition()) && proto_r4_core_resources_message_definition_pb.MessageDefinition.toObject(includeInstance, f),
    messageHeader: (f = msg.getMessageHeader()) && proto_r4_core_resources_message_header_pb.MessageHeader.toObject(includeInstance, f),
    molecularSequence: (f = msg.getMolecularSequence()) && proto_r4_core_resources_molecular_sequence_pb.MolecularSequence.toObject(includeInstance, f),
    namingSystem: (f = msg.getNamingSystem()) && proto_r4_core_resources_naming_system_pb.NamingSystem.toObject(includeInstance, f),
    nutritionOrder: (f = msg.getNutritionOrder()) && proto_r4_core_resources_nutrition_order_pb.NutritionOrder.toObject(includeInstance, f),
    observation: (f = msg.getObservation()) && proto_r4_core_resources_observation_pb.Observation.toObject(includeInstance, f),
    observationDefinition: (f = msg.getObservationDefinition()) && proto_r4_core_resources_observation_definition_pb.ObservationDefinition.toObject(includeInstance, f),
    operationDefinition: (f = msg.getOperationDefinition()) && proto_r4_core_resources_operation_definition_pb.OperationDefinition.toObject(includeInstance, f),
    operationOutcome: (f = msg.getOperationOutcome()) && proto_r4_core_resources_operation_outcome_pb.OperationOutcome.toObject(includeInstance, f),
    organization: (f = msg.getOrganization()) && proto_r4_core_resources_organization_pb.Organization.toObject(includeInstance, f),
    organizationAffiliation: (f = msg.getOrganizationAffiliation()) && proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation.toObject(includeInstance, f),
    parameters: (f = msg.getParameters()) && proto_r4_core_resources_parameters_pb.Parameters.toObject(includeInstance, f),
    patient: (f = msg.getPatient()) && proto_r4_core_resources_patient_pb.Patient.toObject(includeInstance, f),
    paymentNotice: (f = msg.getPaymentNotice()) && proto_r4_core_resources_payment_notice_pb.PaymentNotice.toObject(includeInstance, f),
    paymentReconciliation: (f = msg.getPaymentReconciliation()) && proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation.toObject(includeInstance, f),
    person: (f = msg.getPerson()) && proto_r4_core_resources_person_pb.Person.toObject(includeInstance, f),
    planDefinition: (f = msg.getPlanDefinition()) && proto_r4_core_resources_plan_definition_pb.PlanDefinition.toObject(includeInstance, f),
    practitioner: (f = msg.getPractitioner()) && proto_r4_core_resources_practitioner_pb.Practitioner.toObject(includeInstance, f),
    practitionerRole: (f = msg.getPractitionerRole()) && proto_r4_core_resources_practitioner_role_pb.PractitionerRole.toObject(includeInstance, f),
    procedure: (f = msg.getProcedure()) && proto_r4_core_resources_procedure_pb.Procedure.toObject(includeInstance, f),
    provenance: (f = msg.getProvenance()) && proto_r4_core_resources_provenance_pb.Provenance.toObject(includeInstance, f),
    questionnaire: (f = msg.getQuestionnaire()) && proto_r4_core_resources_questionnaire_pb.Questionnaire.toObject(includeInstance, f),
    questionnaireResponse: (f = msg.getQuestionnaireResponse()) && proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse.toObject(includeInstance, f),
    relatedPerson: (f = msg.getRelatedPerson()) && proto_r4_core_resources_related_person_pb.RelatedPerson.toObject(includeInstance, f),
    requestGroup: (f = msg.getRequestGroup()) && proto_r4_core_resources_request_group_pb.RequestGroup.toObject(includeInstance, f),
    researchDefinition: (f = msg.getResearchDefinition()) && proto_r4_core_resources_research_definition_pb.ResearchDefinition.toObject(includeInstance, f),
    researchElementDefinition: (f = msg.getResearchElementDefinition()) && proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition.toObject(includeInstance, f),
    researchStudy: (f = msg.getResearchStudy()) && proto_r4_core_resources_research_study_pb.ResearchStudy.toObject(includeInstance, f),
    researchSubject: (f = msg.getResearchSubject()) && proto_r4_core_resources_research_subject_pb.ResearchSubject.toObject(includeInstance, f),
    riskAssessment: (f = msg.getRiskAssessment()) && proto_r4_core_resources_risk_assessment_pb.RiskAssessment.toObject(includeInstance, f),
    riskEvidenceSynthesis: (f = msg.getRiskEvidenceSynthesis()) && proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && proto_r4_core_resources_schedule_pb.Schedule.toObject(includeInstance, f),
    searchParameter: (f = msg.getSearchParameter()) && proto_r4_core_resources_search_parameter_pb.SearchParameter.toObject(includeInstance, f),
    serviceRequest: (f = msg.getServiceRequest()) && proto_r4_core_resources_service_request_pb.ServiceRequest.toObject(includeInstance, f),
    slot: (f = msg.getSlot()) && proto_r4_core_resources_slot_pb.Slot.toObject(includeInstance, f),
    specimen: (f = msg.getSpecimen()) && proto_r4_core_resources_specimen_pb.Specimen.toObject(includeInstance, f),
    specimenDefinition: (f = msg.getSpecimenDefinition()) && proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition.toObject(includeInstance, f),
    structureDefinition: (f = msg.getStructureDefinition()) && proto_r4_core_resources_structure_definition_pb.StructureDefinition.toObject(includeInstance, f),
    structureMap: (f = msg.getStructureMap()) && proto_r4_core_resources_structure_map_pb.StructureMap.toObject(includeInstance, f),
    subscription: (f = msg.getSubscription()) && proto_r4_core_resources_subscription_pb.Subscription.toObject(includeInstance, f),
    substance: (f = msg.getSubstance()) && proto_r4_core_resources_substance_pb.Substance.toObject(includeInstance, f),
    substanceNucleicAcid: (f = msg.getSubstanceNucleicAcid()) && proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid.toObject(includeInstance, f),
    substancePolymer: (f = msg.getSubstancePolymer()) && proto_r4_core_resources_substance_polymer_pb.SubstancePolymer.toObject(includeInstance, f),
    substanceProtein: (f = msg.getSubstanceProtein()) && proto_r4_core_resources_substance_protein_pb.SubstanceProtein.toObject(includeInstance, f),
    substanceReferenceInformation: (f = msg.getSubstanceReferenceInformation()) && proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation.toObject(includeInstance, f),
    substanceSourceMaterial: (f = msg.getSubstanceSourceMaterial()) && proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial.toObject(includeInstance, f),
    substanceSpecification: (f = msg.getSubstanceSpecification()) && proto_r4_core_resources_substance_specification_pb.SubstanceSpecification.toObject(includeInstance, f),
    supplyDelivery: (f = msg.getSupplyDelivery()) && proto_r4_core_resources_supply_delivery_pb.SupplyDelivery.toObject(includeInstance, f),
    supplyRequest: (f = msg.getSupplyRequest()) && proto_r4_core_resources_supply_request_pb.SupplyRequest.toObject(includeInstance, f),
    task: (f = msg.getTask()) && proto_r4_core_resources_task_pb.Task.toObject(includeInstance, f),
    terminologyCapabilities: (f = msg.getTerminologyCapabilities()) && proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities.toObject(includeInstance, f),
    testReport: (f = msg.getTestReport()) && proto_r4_core_resources_test_report_pb.TestReport.toObject(includeInstance, f),
    testScript: (f = msg.getTestScript()) && proto_r4_core_resources_test_script_pb.TestScript.toObject(includeInstance, f),
    valueSet: (f = msg.getValueSet()) && proto_r4_core_resources_value_set_pb.ValueSet.toObject(includeInstance, f),
    verificationResult: (f = msg.getVerificationResult()) && proto_r4_core_resources_verification_result_pb.VerificationResult.toObject(includeInstance, f),
    visionPrescription: (f = msg.getVisionPrescription()) && proto_r4_core_resources_vision_prescription_pb.VisionPrescription.toObject(includeInstance, f)
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
 * @return {!proto.google.fhir.r4.core.ContainedResource}
 */
proto.google.fhir.r4.core.ContainedResource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.fhir.r4.core.ContainedResource;
  return proto.google.fhir.r4.core.ContainedResource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.fhir.r4.core.ContainedResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.fhir.r4.core.ContainedResource}
 */
proto.google.fhir.r4.core.ContainedResource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_r4_core_resources_account_pb.Account;
      reader.readMessage(value,proto_r4_core_resources_account_pb.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 2:
      var value = new proto_r4_core_resources_activity_definition_pb.ActivityDefinition;
      reader.readMessage(value,proto_r4_core_resources_activity_definition_pb.ActivityDefinition.deserializeBinaryFromReader);
      msg.setActivityDefinition(value);
      break;
    case 3:
      var value = new proto_r4_core_resources_adverse_event_pb.AdverseEvent;
      reader.readMessage(value,proto_r4_core_resources_adverse_event_pb.AdverseEvent.deserializeBinaryFromReader);
      msg.setAdverseEvent(value);
      break;
    case 4:
      var value = new proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance;
      reader.readMessage(value,proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance.deserializeBinaryFromReader);
      msg.setAllergyIntolerance(value);
      break;
    case 5:
      var value = new proto_r4_core_resources_appointment_pb.Appointment;
      reader.readMessage(value,proto_r4_core_resources_appointment_pb.Appointment.deserializeBinaryFromReader);
      msg.setAppointment(value);
      break;
    case 6:
      var value = new proto_r4_core_resources_appointment_response_pb.AppointmentResponse;
      reader.readMessage(value,proto_r4_core_resources_appointment_response_pb.AppointmentResponse.deserializeBinaryFromReader);
      msg.setAppointmentResponse(value);
      break;
    case 7:
      var value = new proto_r4_core_resources_audit_event_pb.AuditEvent;
      reader.readMessage(value,proto_r4_core_resources_audit_event_pb.AuditEvent.deserializeBinaryFromReader);
      msg.setAuditEvent(value);
      break;
    case 8:
      var value = new proto_r4_core_resources_basic_pb.Basic;
      reader.readMessage(value,proto_r4_core_resources_basic_pb.Basic.deserializeBinaryFromReader);
      msg.setBasic(value);
      break;
    case 9:
      var value = new proto_r4_core_resources_binary_pb.Binary;
      reader.readMessage(value,proto_r4_core_resources_binary_pb.Binary.deserializeBinaryFromReader);
      msg.setBinary(value);
      break;
    case 10:
      var value = new proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct;
      reader.readMessage(value,proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct.deserializeBinaryFromReader);
      msg.setBiologicallyDerivedProduct(value);
      break;
    case 11:
      var value = new proto_r4_core_resources_body_structure_pb.BodyStructure;
      reader.readMessage(value,proto_r4_core_resources_body_structure_pb.BodyStructure.deserializeBinaryFromReader);
      msg.setBodyStructure(value);
      break;
    case 12:
      var value = new proto.google.fhir.r4.core.Bundle;
      reader.readMessage(value,proto.google.fhir.r4.core.Bundle.deserializeBinaryFromReader);
      msg.setBundle(value);
      break;
    case 13:
      var value = new proto_r4_core_resources_capability_statement_pb.CapabilityStatement;
      reader.readMessage(value,proto_r4_core_resources_capability_statement_pb.CapabilityStatement.deserializeBinaryFromReader);
      msg.setCapabilityStatement(value);
      break;
    case 14:
      var value = new proto_r4_core_resources_care_plan_pb.CarePlan;
      reader.readMessage(value,proto_r4_core_resources_care_plan_pb.CarePlan.deserializeBinaryFromReader);
      msg.setCarePlan(value);
      break;
    case 15:
      var value = new proto_r4_core_resources_care_team_pb.CareTeam;
      reader.readMessage(value,proto_r4_core_resources_care_team_pb.CareTeam.deserializeBinaryFromReader);
      msg.setCareTeam(value);
      break;
    case 16:
      var value = new proto_r4_core_resources_catalog_entry_pb.CatalogEntry;
      reader.readMessage(value,proto_r4_core_resources_catalog_entry_pb.CatalogEntry.deserializeBinaryFromReader);
      msg.setCatalogEntry(value);
      break;
    case 17:
      var value = new proto_r4_core_resources_charge_item_pb.ChargeItem;
      reader.readMessage(value,proto_r4_core_resources_charge_item_pb.ChargeItem.deserializeBinaryFromReader);
      msg.setChargeItem(value);
      break;
    case 18:
      var value = new proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition;
      reader.readMessage(value,proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition.deserializeBinaryFromReader);
      msg.setChargeItemDefinition(value);
      break;
    case 19:
      var value = new proto_r4_core_resources_claim_pb.Claim;
      reader.readMessage(value,proto_r4_core_resources_claim_pb.Claim.deserializeBinaryFromReader);
      msg.setClaim(value);
      break;
    case 20:
      var value = new proto_r4_core_resources_claim_response_pb.ClaimResponse;
      reader.readMessage(value,proto_r4_core_resources_claim_response_pb.ClaimResponse.deserializeBinaryFromReader);
      msg.setClaimResponse(value);
      break;
    case 21:
      var value = new proto_r4_core_resources_clinical_impression_pb.ClinicalImpression;
      reader.readMessage(value,proto_r4_core_resources_clinical_impression_pb.ClinicalImpression.deserializeBinaryFromReader);
      msg.setClinicalImpression(value);
      break;
    case 22:
      var value = new proto_r4_core_resources_code_system_pb.CodeSystem;
      reader.readMessage(value,proto_r4_core_resources_code_system_pb.CodeSystem.deserializeBinaryFromReader);
      msg.setCodeSystem(value);
      break;
    case 23:
      var value = new proto_r4_core_resources_communication_pb.Communication;
      reader.readMessage(value,proto_r4_core_resources_communication_pb.Communication.deserializeBinaryFromReader);
      msg.setCommunication(value);
      break;
    case 24:
      var value = new proto_r4_core_resources_communication_request_pb.CommunicationRequest;
      reader.readMessage(value,proto_r4_core_resources_communication_request_pb.CommunicationRequest.deserializeBinaryFromReader);
      msg.setCommunicationRequest(value);
      break;
    case 25:
      var value = new proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition;
      reader.readMessage(value,proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition.deserializeBinaryFromReader);
      msg.setCompartmentDefinition(value);
      break;
    case 26:
      var value = new proto_r4_core_resources_composition_pb.Composition;
      reader.readMessage(value,proto_r4_core_resources_composition_pb.Composition.deserializeBinaryFromReader);
      msg.setComposition(value);
      break;
    case 27:
      var value = new proto_r4_core_resources_concept_map_pb.ConceptMap;
      reader.readMessage(value,proto_r4_core_resources_concept_map_pb.ConceptMap.deserializeBinaryFromReader);
      msg.setConceptMap(value);
      break;
    case 28:
      var value = new proto_r4_core_resources_condition_pb.Condition;
      reader.readMessage(value,proto_r4_core_resources_condition_pb.Condition.deserializeBinaryFromReader);
      msg.setCondition(value);
      break;
    case 29:
      var value = new proto_r4_core_resources_consent_pb.Consent;
      reader.readMessage(value,proto_r4_core_resources_consent_pb.Consent.deserializeBinaryFromReader);
      msg.setConsent(value);
      break;
    case 30:
      var value = new proto_r4_core_resources_contract_pb.Contract;
      reader.readMessage(value,proto_r4_core_resources_contract_pb.Contract.deserializeBinaryFromReader);
      msg.setContract(value);
      break;
    case 31:
      var value = new proto_r4_core_resources_coverage_pb.Coverage;
      reader.readMessage(value,proto_r4_core_resources_coverage_pb.Coverage.deserializeBinaryFromReader);
      msg.setCoverage(value);
      break;
    case 32:
      var value = new proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest;
      reader.readMessage(value,proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest.deserializeBinaryFromReader);
      msg.setCoverageEligibilityRequest(value);
      break;
    case 33:
      var value = new proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse;
      reader.readMessage(value,proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse.deserializeBinaryFromReader);
      msg.setCoverageEligibilityResponse(value);
      break;
    case 34:
      var value = new proto_r4_core_resources_detected_issue_pb.DetectedIssue;
      reader.readMessage(value,proto_r4_core_resources_detected_issue_pb.DetectedIssue.deserializeBinaryFromReader);
      msg.setDetectedIssue(value);
      break;
    case 35:
      var value = new proto_r4_core_resources_device_pb.Device;
      reader.readMessage(value,proto_r4_core_resources_device_pb.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 36:
      var value = new proto_r4_core_resources_device_definition_pb.DeviceDefinition;
      reader.readMessage(value,proto_r4_core_resources_device_definition_pb.DeviceDefinition.deserializeBinaryFromReader);
      msg.setDeviceDefinition(value);
      break;
    case 37:
      var value = new proto_r4_core_resources_device_metric_pb.DeviceMetric;
      reader.readMessage(value,proto_r4_core_resources_device_metric_pb.DeviceMetric.deserializeBinaryFromReader);
      msg.setDeviceMetric(value);
      break;
    case 38:
      var value = new proto_r4_core_resources_device_request_pb.DeviceRequest;
      reader.readMessage(value,proto_r4_core_resources_device_request_pb.DeviceRequest.deserializeBinaryFromReader);
      msg.setDeviceRequest(value);
      break;
    case 39:
      var value = new proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement;
      reader.readMessage(value,proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement.deserializeBinaryFromReader);
      msg.setDeviceUseStatement(value);
      break;
    case 40:
      var value = new proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport;
      reader.readMessage(value,proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport.deserializeBinaryFromReader);
      msg.setDiagnosticReport(value);
      break;
    case 41:
      var value = new proto_r4_core_resources_document_manifest_pb.DocumentManifest;
      reader.readMessage(value,proto_r4_core_resources_document_manifest_pb.DocumentManifest.deserializeBinaryFromReader);
      msg.setDocumentManifest(value);
      break;
    case 42:
      var value = new proto_r4_core_resources_document_reference_pb.DocumentReference;
      reader.readMessage(value,proto_r4_core_resources_document_reference_pb.DocumentReference.deserializeBinaryFromReader);
      msg.setDocumentReference(value);
      break;
    case 43:
      var value = new proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis;
      reader.readMessage(value,proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis.deserializeBinaryFromReader);
      msg.setEffectEvidenceSynthesis(value);
      break;
    case 44:
      var value = new proto_r4_core_resources_encounter_pb.Encounter;
      reader.readMessage(value,proto_r4_core_resources_encounter_pb.Encounter.deserializeBinaryFromReader);
      msg.setEncounter(value);
      break;
    case 45:
      var value = new proto_r4_core_resources_endpoint_pb.Endpoint;
      reader.readMessage(value,proto_r4_core_resources_endpoint_pb.Endpoint.deserializeBinaryFromReader);
      msg.setEndpoint(value);
      break;
    case 46:
      var value = new proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest;
      reader.readMessage(value,proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest.deserializeBinaryFromReader);
      msg.setEnrollmentRequest(value);
      break;
    case 47:
      var value = new proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse;
      reader.readMessage(value,proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse.deserializeBinaryFromReader);
      msg.setEnrollmentResponse(value);
      break;
    case 48:
      var value = new proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare;
      reader.readMessage(value,proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare.deserializeBinaryFromReader);
      msg.setEpisodeOfCare(value);
      break;
    case 49:
      var value = new proto_r4_core_resources_event_definition_pb.EventDefinition;
      reader.readMessage(value,proto_r4_core_resources_event_definition_pb.EventDefinition.deserializeBinaryFromReader);
      msg.setEventDefinition(value);
      break;
    case 50:
      var value = new proto_r4_core_resources_evidence_pb.Evidence;
      reader.readMessage(value,proto_r4_core_resources_evidence_pb.Evidence.deserializeBinaryFromReader);
      msg.setEvidence(value);
      break;
    case 51:
      var value = new proto_r4_core_resources_evidence_variable_pb.EvidenceVariable;
      reader.readMessage(value,proto_r4_core_resources_evidence_variable_pb.EvidenceVariable.deserializeBinaryFromReader);
      msg.setEvidenceVariable(value);
      break;
    case 52:
      var value = new proto_r4_core_resources_example_scenario_pb.ExampleScenario;
      reader.readMessage(value,proto_r4_core_resources_example_scenario_pb.ExampleScenario.deserializeBinaryFromReader);
      msg.setExampleScenario(value);
      break;
    case 53:
      var value = new proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit;
      reader.readMessage(value,proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit.deserializeBinaryFromReader);
      msg.setExplanationOfBenefit(value);
      break;
    case 54:
      var value = new proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory;
      reader.readMessage(value,proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory.deserializeBinaryFromReader);
      msg.setFamilyMemberHistory(value);
      break;
    case 55:
      var value = new proto_r4_core_resources_flag_pb.Flag;
      reader.readMessage(value,proto_r4_core_resources_flag_pb.Flag.deserializeBinaryFromReader);
      msg.setFlag(value);
      break;
    case 56:
      var value = new proto_r4_core_resources_goal_pb.Goal;
      reader.readMessage(value,proto_r4_core_resources_goal_pb.Goal.deserializeBinaryFromReader);
      msg.setGoal(value);
      break;
    case 57:
      var value = new proto_r4_core_resources_graph_definition_pb.GraphDefinition;
      reader.readMessage(value,proto_r4_core_resources_graph_definition_pb.GraphDefinition.deserializeBinaryFromReader);
      msg.setGraphDefinition(value);
      break;
    case 58:
      var value = new proto_r4_core_resources_group_pb.Group;
      reader.readMessage(value,proto_r4_core_resources_group_pb.Group.deserializeBinaryFromReader);
      msg.setGroup(value);
      break;
    case 59:
      var value = new proto_r4_core_resources_guidance_response_pb.GuidanceResponse;
      reader.readMessage(value,proto_r4_core_resources_guidance_response_pb.GuidanceResponse.deserializeBinaryFromReader);
      msg.setGuidanceResponse(value);
      break;
    case 60:
      var value = new proto_r4_core_resources_healthcare_service_pb.HealthcareService;
      reader.readMessage(value,proto_r4_core_resources_healthcare_service_pb.HealthcareService.deserializeBinaryFromReader);
      msg.setHealthcareService(value);
      break;
    case 61:
      var value = new proto_r4_core_resources_imaging_study_pb.ImagingStudy;
      reader.readMessage(value,proto_r4_core_resources_imaging_study_pb.ImagingStudy.deserializeBinaryFromReader);
      msg.setImagingStudy(value);
      break;
    case 62:
      var value = new proto_r4_core_resources_immunization_pb.Immunization;
      reader.readMessage(value,proto_r4_core_resources_immunization_pb.Immunization.deserializeBinaryFromReader);
      msg.setImmunization(value);
      break;
    case 63:
      var value = new proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation;
      reader.readMessage(value,proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation.deserializeBinaryFromReader);
      msg.setImmunizationEvaluation(value);
      break;
    case 64:
      var value = new proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation;
      reader.readMessage(value,proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation.deserializeBinaryFromReader);
      msg.setImmunizationRecommendation(value);
      break;
    case 65:
      var value = new proto_r4_core_resources_implementation_guide_pb.ImplementationGuide;
      reader.readMessage(value,proto_r4_core_resources_implementation_guide_pb.ImplementationGuide.deserializeBinaryFromReader);
      msg.setImplementationGuide(value);
      break;
    case 66:
      var value = new proto_r4_core_resources_insurance_plan_pb.InsurancePlan;
      reader.readMessage(value,proto_r4_core_resources_insurance_plan_pb.InsurancePlan.deserializeBinaryFromReader);
      msg.setInsurancePlan(value);
      break;
    case 67:
      var value = new proto_r4_core_resources_invoice_pb.Invoice;
      reader.readMessage(value,proto_r4_core_resources_invoice_pb.Invoice.deserializeBinaryFromReader);
      msg.setInvoice(value);
      break;
    case 68:
      var value = new proto_r4_core_resources_library_pb.Library;
      reader.readMessage(value,proto_r4_core_resources_library_pb.Library.deserializeBinaryFromReader);
      msg.setLibrary(value);
      break;
    case 69:
      var value = new proto_r4_core_resources_linkage_pb.Linkage;
      reader.readMessage(value,proto_r4_core_resources_linkage_pb.Linkage.deserializeBinaryFromReader);
      msg.setLinkage(value);
      break;
    case 70:
      var value = new proto_r4_core_resources_list_pb.List;
      reader.readMessage(value,proto_r4_core_resources_list_pb.List.deserializeBinaryFromReader);
      msg.setList(value);
      break;
    case 71:
      var value = new proto_r4_core_resources_location_pb.Location;
      reader.readMessage(value,proto_r4_core_resources_location_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 72:
      var value = new proto_r4_core_resources_measure_pb.Measure;
      reader.readMessage(value,proto_r4_core_resources_measure_pb.Measure.deserializeBinaryFromReader);
      msg.setMeasure(value);
      break;
    case 73:
      var value = new proto_r4_core_resources_measure_report_pb.MeasureReport;
      reader.readMessage(value,proto_r4_core_resources_measure_report_pb.MeasureReport.deserializeBinaryFromReader);
      msg.setMeasureReport(value);
      break;
    case 74:
      var value = new proto_r4_core_resources_media_pb.Media;
      reader.readMessage(value,proto_r4_core_resources_media_pb.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 75:
      var value = new proto_r4_core_resources_medication_pb.Medication;
      reader.readMessage(value,proto_r4_core_resources_medication_pb.Medication.deserializeBinaryFromReader);
      msg.setMedication(value);
      break;
    case 76:
      var value = new proto_r4_core_resources_medication_administration_pb.MedicationAdministration;
      reader.readMessage(value,proto_r4_core_resources_medication_administration_pb.MedicationAdministration.deserializeBinaryFromReader);
      msg.setMedicationAdministration(value);
      break;
    case 77:
      var value = new proto_r4_core_resources_medication_dispense_pb.MedicationDispense;
      reader.readMessage(value,proto_r4_core_resources_medication_dispense_pb.MedicationDispense.deserializeBinaryFromReader);
      msg.setMedicationDispense(value);
      break;
    case 78:
      var value = new proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge;
      reader.readMessage(value,proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge.deserializeBinaryFromReader);
      msg.setMedicationKnowledge(value);
      break;
    case 79:
      var value = new proto_r4_core_resources_medication_request_pb.MedicationRequest;
      reader.readMessage(value,proto_r4_core_resources_medication_request_pb.MedicationRequest.deserializeBinaryFromReader);
      msg.setMedicationRequest(value);
      break;
    case 80:
      var value = new proto_r4_core_resources_medication_statement_pb.MedicationStatement;
      reader.readMessage(value,proto_r4_core_resources_medication_statement_pb.MedicationStatement.deserializeBinaryFromReader);
      msg.setMedicationStatement(value);
      break;
    case 81:
      var value = new proto_r4_core_resources_medicinal_product_pb.MedicinalProduct;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_pb.MedicinalProduct.deserializeBinaryFromReader);
      msg.setMedicinalProduct(value);
      break;
    case 82:
      var value = new proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization.deserializeBinaryFromReader);
      msg.setMedicinalProductAuthorization(value);
      break;
    case 83:
      var value = new proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication.deserializeBinaryFromReader);
      msg.setMedicinalProductContraindication(value);
      break;
    case 84:
      var value = new proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication.deserializeBinaryFromReader);
      msg.setMedicinalProductIndication(value);
      break;
    case 85:
      var value = new proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient.deserializeBinaryFromReader);
      msg.setMedicinalProductIngredient(value);
      break;
    case 86:
      var value = new proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction.deserializeBinaryFromReader);
      msg.setMedicinalProductInteraction(value);
      break;
    case 87:
      var value = new proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured.deserializeBinaryFromReader);
      msg.setMedicinalProductManufactured(value);
      break;
    case 88:
      var value = new proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged.deserializeBinaryFromReader);
      msg.setMedicinalProductPackaged(value);
      break;
    case 89:
      var value = new proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical.deserializeBinaryFromReader);
      msg.setMedicinalProductPharmaceutical(value);
      break;
    case 90:
      var value = new proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect;
      reader.readMessage(value,proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect.deserializeBinaryFromReader);
      msg.setMedicinalProductUndesirableEffect(value);
      break;
    case 91:
      var value = new proto_r4_core_resources_message_definition_pb.MessageDefinition;
      reader.readMessage(value,proto_r4_core_resources_message_definition_pb.MessageDefinition.deserializeBinaryFromReader);
      msg.setMessageDefinition(value);
      break;
    case 92:
      var value = new proto_r4_core_resources_message_header_pb.MessageHeader;
      reader.readMessage(value,proto_r4_core_resources_message_header_pb.MessageHeader.deserializeBinaryFromReader);
      msg.setMessageHeader(value);
      break;
    case 93:
      var value = new proto_r4_core_resources_molecular_sequence_pb.MolecularSequence;
      reader.readMessage(value,proto_r4_core_resources_molecular_sequence_pb.MolecularSequence.deserializeBinaryFromReader);
      msg.setMolecularSequence(value);
      break;
    case 94:
      var value = new proto_r4_core_resources_naming_system_pb.NamingSystem;
      reader.readMessage(value,proto_r4_core_resources_naming_system_pb.NamingSystem.deserializeBinaryFromReader);
      msg.setNamingSystem(value);
      break;
    case 95:
      var value = new proto_r4_core_resources_nutrition_order_pb.NutritionOrder;
      reader.readMessage(value,proto_r4_core_resources_nutrition_order_pb.NutritionOrder.deserializeBinaryFromReader);
      msg.setNutritionOrder(value);
      break;
    case 96:
      var value = new proto_r4_core_resources_observation_pb.Observation;
      reader.readMessage(value,proto_r4_core_resources_observation_pb.Observation.deserializeBinaryFromReader);
      msg.setObservation(value);
      break;
    case 97:
      var value = new proto_r4_core_resources_observation_definition_pb.ObservationDefinition;
      reader.readMessage(value,proto_r4_core_resources_observation_definition_pb.ObservationDefinition.deserializeBinaryFromReader);
      msg.setObservationDefinition(value);
      break;
    case 98:
      var value = new proto_r4_core_resources_operation_definition_pb.OperationDefinition;
      reader.readMessage(value,proto_r4_core_resources_operation_definition_pb.OperationDefinition.deserializeBinaryFromReader);
      msg.setOperationDefinition(value);
      break;
    case 99:
      var value = new proto_r4_core_resources_operation_outcome_pb.OperationOutcome;
      reader.readMessage(value,proto_r4_core_resources_operation_outcome_pb.OperationOutcome.deserializeBinaryFromReader);
      msg.setOperationOutcome(value);
      break;
    case 100:
      var value = new proto_r4_core_resources_organization_pb.Organization;
      reader.readMessage(value,proto_r4_core_resources_organization_pb.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    case 101:
      var value = new proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation;
      reader.readMessage(value,proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation.deserializeBinaryFromReader);
      msg.setOrganizationAffiliation(value);
      break;
    case 102:
      var value = new proto_r4_core_resources_parameters_pb.Parameters;
      reader.readMessage(value,proto_r4_core_resources_parameters_pb.Parameters.deserializeBinaryFromReader);
      msg.setParameters(value);
      break;
    case 103:
      var value = new proto_r4_core_resources_patient_pb.Patient;
      reader.readMessage(value,proto_r4_core_resources_patient_pb.Patient.deserializeBinaryFromReader);
      msg.setPatient(value);
      break;
    case 104:
      var value = new proto_r4_core_resources_payment_notice_pb.PaymentNotice;
      reader.readMessage(value,proto_r4_core_resources_payment_notice_pb.PaymentNotice.deserializeBinaryFromReader);
      msg.setPaymentNotice(value);
      break;
    case 105:
      var value = new proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation;
      reader.readMessage(value,proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation.deserializeBinaryFromReader);
      msg.setPaymentReconciliation(value);
      break;
    case 106:
      var value = new proto_r4_core_resources_person_pb.Person;
      reader.readMessage(value,proto_r4_core_resources_person_pb.Person.deserializeBinaryFromReader);
      msg.setPerson(value);
      break;
    case 107:
      var value = new proto_r4_core_resources_plan_definition_pb.PlanDefinition;
      reader.readMessage(value,proto_r4_core_resources_plan_definition_pb.PlanDefinition.deserializeBinaryFromReader);
      msg.setPlanDefinition(value);
      break;
    case 108:
      var value = new proto_r4_core_resources_practitioner_pb.Practitioner;
      reader.readMessage(value,proto_r4_core_resources_practitioner_pb.Practitioner.deserializeBinaryFromReader);
      msg.setPractitioner(value);
      break;
    case 109:
      var value = new proto_r4_core_resources_practitioner_role_pb.PractitionerRole;
      reader.readMessage(value,proto_r4_core_resources_practitioner_role_pb.PractitionerRole.deserializeBinaryFromReader);
      msg.setPractitionerRole(value);
      break;
    case 110:
      var value = new proto_r4_core_resources_procedure_pb.Procedure;
      reader.readMessage(value,proto_r4_core_resources_procedure_pb.Procedure.deserializeBinaryFromReader);
      msg.setProcedure(value);
      break;
    case 111:
      var value = new proto_r4_core_resources_provenance_pb.Provenance;
      reader.readMessage(value,proto_r4_core_resources_provenance_pb.Provenance.deserializeBinaryFromReader);
      msg.setProvenance(value);
      break;
    case 112:
      var value = new proto_r4_core_resources_questionnaire_pb.Questionnaire;
      reader.readMessage(value,proto_r4_core_resources_questionnaire_pb.Questionnaire.deserializeBinaryFromReader);
      msg.setQuestionnaire(value);
      break;
    case 113:
      var value = new proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse;
      reader.readMessage(value,proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse.deserializeBinaryFromReader);
      msg.setQuestionnaireResponse(value);
      break;
    case 114:
      var value = new proto_r4_core_resources_related_person_pb.RelatedPerson;
      reader.readMessage(value,proto_r4_core_resources_related_person_pb.RelatedPerson.deserializeBinaryFromReader);
      msg.setRelatedPerson(value);
      break;
    case 115:
      var value = new proto_r4_core_resources_request_group_pb.RequestGroup;
      reader.readMessage(value,proto_r4_core_resources_request_group_pb.RequestGroup.deserializeBinaryFromReader);
      msg.setRequestGroup(value);
      break;
    case 116:
      var value = new proto_r4_core_resources_research_definition_pb.ResearchDefinition;
      reader.readMessage(value,proto_r4_core_resources_research_definition_pb.ResearchDefinition.deserializeBinaryFromReader);
      msg.setResearchDefinition(value);
      break;
    case 117:
      var value = new proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition;
      reader.readMessage(value,proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition.deserializeBinaryFromReader);
      msg.setResearchElementDefinition(value);
      break;
    case 118:
      var value = new proto_r4_core_resources_research_study_pb.ResearchStudy;
      reader.readMessage(value,proto_r4_core_resources_research_study_pb.ResearchStudy.deserializeBinaryFromReader);
      msg.setResearchStudy(value);
      break;
    case 119:
      var value = new proto_r4_core_resources_research_subject_pb.ResearchSubject;
      reader.readMessage(value,proto_r4_core_resources_research_subject_pb.ResearchSubject.deserializeBinaryFromReader);
      msg.setResearchSubject(value);
      break;
    case 120:
      var value = new proto_r4_core_resources_risk_assessment_pb.RiskAssessment;
      reader.readMessage(value,proto_r4_core_resources_risk_assessment_pb.RiskAssessment.deserializeBinaryFromReader);
      msg.setRiskAssessment(value);
      break;
    case 121:
      var value = new proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis;
      reader.readMessage(value,proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis.deserializeBinaryFromReader);
      msg.setRiskEvidenceSynthesis(value);
      break;
    case 122:
      var value = new proto_r4_core_resources_schedule_pb.Schedule;
      reader.readMessage(value,proto_r4_core_resources_schedule_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    case 123:
      var value = new proto_r4_core_resources_search_parameter_pb.SearchParameter;
      reader.readMessage(value,proto_r4_core_resources_search_parameter_pb.SearchParameter.deserializeBinaryFromReader);
      msg.setSearchParameter(value);
      break;
    case 124:
      var value = new proto_r4_core_resources_service_request_pb.ServiceRequest;
      reader.readMessage(value,proto_r4_core_resources_service_request_pb.ServiceRequest.deserializeBinaryFromReader);
      msg.setServiceRequest(value);
      break;
    case 125:
      var value = new proto_r4_core_resources_slot_pb.Slot;
      reader.readMessage(value,proto_r4_core_resources_slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    case 126:
      var value = new proto_r4_core_resources_specimen_pb.Specimen;
      reader.readMessage(value,proto_r4_core_resources_specimen_pb.Specimen.deserializeBinaryFromReader);
      msg.setSpecimen(value);
      break;
    case 127:
      var value = new proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition;
      reader.readMessage(value,proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition.deserializeBinaryFromReader);
      msg.setSpecimenDefinition(value);
      break;
    case 128:
      var value = new proto_r4_core_resources_structure_definition_pb.StructureDefinition;
      reader.readMessage(value,proto_r4_core_resources_structure_definition_pb.StructureDefinition.deserializeBinaryFromReader);
      msg.setStructureDefinition(value);
      break;
    case 129:
      var value = new proto_r4_core_resources_structure_map_pb.StructureMap;
      reader.readMessage(value,proto_r4_core_resources_structure_map_pb.StructureMap.deserializeBinaryFromReader);
      msg.setStructureMap(value);
      break;
    case 130:
      var value = new proto_r4_core_resources_subscription_pb.Subscription;
      reader.readMessage(value,proto_r4_core_resources_subscription_pb.Subscription.deserializeBinaryFromReader);
      msg.setSubscription(value);
      break;
    case 131:
      var value = new proto_r4_core_resources_substance_pb.Substance;
      reader.readMessage(value,proto_r4_core_resources_substance_pb.Substance.deserializeBinaryFromReader);
      msg.setSubstance(value);
      break;
    case 132:
      var value = new proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid;
      reader.readMessage(value,proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid.deserializeBinaryFromReader);
      msg.setSubstanceNucleicAcid(value);
      break;
    case 133:
      var value = new proto_r4_core_resources_substance_polymer_pb.SubstancePolymer;
      reader.readMessage(value,proto_r4_core_resources_substance_polymer_pb.SubstancePolymer.deserializeBinaryFromReader);
      msg.setSubstancePolymer(value);
      break;
    case 134:
      var value = new proto_r4_core_resources_substance_protein_pb.SubstanceProtein;
      reader.readMessage(value,proto_r4_core_resources_substance_protein_pb.SubstanceProtein.deserializeBinaryFromReader);
      msg.setSubstanceProtein(value);
      break;
    case 135:
      var value = new proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation;
      reader.readMessage(value,proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation.deserializeBinaryFromReader);
      msg.setSubstanceReferenceInformation(value);
      break;
    case 136:
      var value = new proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial;
      reader.readMessage(value,proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial.deserializeBinaryFromReader);
      msg.setSubstanceSourceMaterial(value);
      break;
    case 137:
      var value = new proto_r4_core_resources_substance_specification_pb.SubstanceSpecification;
      reader.readMessage(value,proto_r4_core_resources_substance_specification_pb.SubstanceSpecification.deserializeBinaryFromReader);
      msg.setSubstanceSpecification(value);
      break;
    case 138:
      var value = new proto_r4_core_resources_supply_delivery_pb.SupplyDelivery;
      reader.readMessage(value,proto_r4_core_resources_supply_delivery_pb.SupplyDelivery.deserializeBinaryFromReader);
      msg.setSupplyDelivery(value);
      break;
    case 139:
      var value = new proto_r4_core_resources_supply_request_pb.SupplyRequest;
      reader.readMessage(value,proto_r4_core_resources_supply_request_pb.SupplyRequest.deserializeBinaryFromReader);
      msg.setSupplyRequest(value);
      break;
    case 140:
      var value = new proto_r4_core_resources_task_pb.Task;
      reader.readMessage(value,proto_r4_core_resources_task_pb.Task.deserializeBinaryFromReader);
      msg.setTask(value);
      break;
    case 141:
      var value = new proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities;
      reader.readMessage(value,proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities.deserializeBinaryFromReader);
      msg.setTerminologyCapabilities(value);
      break;
    case 142:
      var value = new proto_r4_core_resources_test_report_pb.TestReport;
      reader.readMessage(value,proto_r4_core_resources_test_report_pb.TestReport.deserializeBinaryFromReader);
      msg.setTestReport(value);
      break;
    case 143:
      var value = new proto_r4_core_resources_test_script_pb.TestScript;
      reader.readMessage(value,proto_r4_core_resources_test_script_pb.TestScript.deserializeBinaryFromReader);
      msg.setTestScript(value);
      break;
    case 144:
      var value = new proto_r4_core_resources_value_set_pb.ValueSet;
      reader.readMessage(value,proto_r4_core_resources_value_set_pb.ValueSet.deserializeBinaryFromReader);
      msg.setValueSet(value);
      break;
    case 145:
      var value = new proto_r4_core_resources_verification_result_pb.VerificationResult;
      reader.readMessage(value,proto_r4_core_resources_verification_result_pb.VerificationResult.deserializeBinaryFromReader);
      msg.setVerificationResult(value);
      break;
    case 146:
      var value = new proto_r4_core_resources_vision_prescription_pb.VisionPrescription;
      reader.readMessage(value,proto_r4_core_resources_vision_prescription_pb.VisionPrescription.deserializeBinaryFromReader);
      msg.setVisionPrescription(value);
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
proto.google.fhir.r4.core.ContainedResource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.fhir.r4.core.ContainedResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.fhir.r4.core.ContainedResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.fhir.r4.core.ContainedResource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_r4_core_resources_account_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getActivityDefinition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_r4_core_resources_activity_definition_pb.ActivityDefinition.serializeBinaryToWriter
    );
  }
  f = message.getAdverseEvent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_r4_core_resources_adverse_event_pb.AdverseEvent.serializeBinaryToWriter
    );
  }
  f = message.getAllergyIntolerance();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance.serializeBinaryToWriter
    );
  }
  f = message.getAppointment();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_r4_core_resources_appointment_pb.Appointment.serializeBinaryToWriter
    );
  }
  f = message.getAppointmentResponse();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_r4_core_resources_appointment_response_pb.AppointmentResponse.serializeBinaryToWriter
    );
  }
  f = message.getAuditEvent();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_r4_core_resources_audit_event_pb.AuditEvent.serializeBinaryToWriter
    );
  }
  f = message.getBasic();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_r4_core_resources_basic_pb.Basic.serializeBinaryToWriter
    );
  }
  f = message.getBinary();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto_r4_core_resources_binary_pb.Binary.serializeBinaryToWriter
    );
  }
  f = message.getBiologicallyDerivedProduct();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct.serializeBinaryToWriter
    );
  }
  f = message.getBodyStructure();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto_r4_core_resources_body_structure_pb.BodyStructure.serializeBinaryToWriter
    );
  }
  f = message.getBundle();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.google.fhir.r4.core.Bundle.serializeBinaryToWriter
    );
  }
  f = message.getCapabilityStatement();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto_r4_core_resources_capability_statement_pb.CapabilityStatement.serializeBinaryToWriter
    );
  }
  f = message.getCarePlan();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto_r4_core_resources_care_plan_pb.CarePlan.serializeBinaryToWriter
    );
  }
  f = message.getCareTeam();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto_r4_core_resources_care_team_pb.CareTeam.serializeBinaryToWriter
    );
  }
  f = message.getCatalogEntry();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto_r4_core_resources_catalog_entry_pb.CatalogEntry.serializeBinaryToWriter
    );
  }
  f = message.getChargeItem();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto_r4_core_resources_charge_item_pb.ChargeItem.serializeBinaryToWriter
    );
  }
  f = message.getChargeItemDefinition();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition.serializeBinaryToWriter
    );
  }
  f = message.getClaim();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto_r4_core_resources_claim_pb.Claim.serializeBinaryToWriter
    );
  }
  f = message.getClaimResponse();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto_r4_core_resources_claim_response_pb.ClaimResponse.serializeBinaryToWriter
    );
  }
  f = message.getClinicalImpression();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto_r4_core_resources_clinical_impression_pb.ClinicalImpression.serializeBinaryToWriter
    );
  }
  f = message.getCodeSystem();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto_r4_core_resources_code_system_pb.CodeSystem.serializeBinaryToWriter
    );
  }
  f = message.getCommunication();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto_r4_core_resources_communication_pb.Communication.serializeBinaryToWriter
    );
  }
  f = message.getCommunicationRequest();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto_r4_core_resources_communication_request_pb.CommunicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getCompartmentDefinition();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition.serializeBinaryToWriter
    );
  }
  f = message.getComposition();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto_r4_core_resources_composition_pb.Composition.serializeBinaryToWriter
    );
  }
  f = message.getConceptMap();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto_r4_core_resources_concept_map_pb.ConceptMap.serializeBinaryToWriter
    );
  }
  f = message.getCondition();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto_r4_core_resources_condition_pb.Condition.serializeBinaryToWriter
    );
  }
  f = message.getConsent();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto_r4_core_resources_consent_pb.Consent.serializeBinaryToWriter
    );
  }
  f = message.getContract();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto_r4_core_resources_contract_pb.Contract.serializeBinaryToWriter
    );
  }
  f = message.getCoverage();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto_r4_core_resources_coverage_pb.Coverage.serializeBinaryToWriter
    );
  }
  f = message.getCoverageEligibilityRequest();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest.serializeBinaryToWriter
    );
  }
  f = message.getCoverageEligibilityResponse();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse.serializeBinaryToWriter
    );
  }
  f = message.getDetectedIssue();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto_r4_core_resources_detected_issue_pb.DetectedIssue.serializeBinaryToWriter
    );
  }
  f = message.getDevice();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto_r4_core_resources_device_pb.Device.serializeBinaryToWriter
    );
  }
  f = message.getDeviceDefinition();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto_r4_core_resources_device_definition_pb.DeviceDefinition.serializeBinaryToWriter
    );
  }
  f = message.getDeviceMetric();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto_r4_core_resources_device_metric_pb.DeviceMetric.serializeBinaryToWriter
    );
  }
  f = message.getDeviceRequest();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto_r4_core_resources_device_request_pb.DeviceRequest.serializeBinaryToWriter
    );
  }
  f = message.getDeviceUseStatement();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement.serializeBinaryToWriter
    );
  }
  f = message.getDiagnosticReport();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport.serializeBinaryToWriter
    );
  }
  f = message.getDocumentManifest();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto_r4_core_resources_document_manifest_pb.DocumentManifest.serializeBinaryToWriter
    );
  }
  f = message.getDocumentReference();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto_r4_core_resources_document_reference_pb.DocumentReference.serializeBinaryToWriter
    );
  }
  f = message.getEffectEvidenceSynthesis();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis.serializeBinaryToWriter
    );
  }
  f = message.getEncounter();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto_r4_core_resources_encounter_pb.Encounter.serializeBinaryToWriter
    );
  }
  f = message.getEndpoint();
  if (f != null) {
    writer.writeMessage(
      45,
      f,
      proto_r4_core_resources_endpoint_pb.Endpoint.serializeBinaryToWriter
    );
  }
  f = message.getEnrollmentRequest();
  if (f != null) {
    writer.writeMessage(
      46,
      f,
      proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest.serializeBinaryToWriter
    );
  }
  f = message.getEnrollmentResponse();
  if (f != null) {
    writer.writeMessage(
      47,
      f,
      proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse.serializeBinaryToWriter
    );
  }
  f = message.getEpisodeOfCare();
  if (f != null) {
    writer.writeMessage(
      48,
      f,
      proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare.serializeBinaryToWriter
    );
  }
  f = message.getEventDefinition();
  if (f != null) {
    writer.writeMessage(
      49,
      f,
      proto_r4_core_resources_event_definition_pb.EventDefinition.serializeBinaryToWriter
    );
  }
  f = message.getEvidence();
  if (f != null) {
    writer.writeMessage(
      50,
      f,
      proto_r4_core_resources_evidence_pb.Evidence.serializeBinaryToWriter
    );
  }
  f = message.getEvidenceVariable();
  if (f != null) {
    writer.writeMessage(
      51,
      f,
      proto_r4_core_resources_evidence_variable_pb.EvidenceVariable.serializeBinaryToWriter
    );
  }
  f = message.getExampleScenario();
  if (f != null) {
    writer.writeMessage(
      52,
      f,
      proto_r4_core_resources_example_scenario_pb.ExampleScenario.serializeBinaryToWriter
    );
  }
  f = message.getExplanationOfBenefit();
  if (f != null) {
    writer.writeMessage(
      53,
      f,
      proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit.serializeBinaryToWriter
    );
  }
  f = message.getFamilyMemberHistory();
  if (f != null) {
    writer.writeMessage(
      54,
      f,
      proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory.serializeBinaryToWriter
    );
  }
  f = message.getFlag();
  if (f != null) {
    writer.writeMessage(
      55,
      f,
      proto_r4_core_resources_flag_pb.Flag.serializeBinaryToWriter
    );
  }
  f = message.getGoal();
  if (f != null) {
    writer.writeMessage(
      56,
      f,
      proto_r4_core_resources_goal_pb.Goal.serializeBinaryToWriter
    );
  }
  f = message.getGraphDefinition();
  if (f != null) {
    writer.writeMessage(
      57,
      f,
      proto_r4_core_resources_graph_definition_pb.GraphDefinition.serializeBinaryToWriter
    );
  }
  f = message.getGroup();
  if (f != null) {
    writer.writeMessage(
      58,
      f,
      proto_r4_core_resources_group_pb.Group.serializeBinaryToWriter
    );
  }
  f = message.getGuidanceResponse();
  if (f != null) {
    writer.writeMessage(
      59,
      f,
      proto_r4_core_resources_guidance_response_pb.GuidanceResponse.serializeBinaryToWriter
    );
  }
  f = message.getHealthcareService();
  if (f != null) {
    writer.writeMessage(
      60,
      f,
      proto_r4_core_resources_healthcare_service_pb.HealthcareService.serializeBinaryToWriter
    );
  }
  f = message.getImagingStudy();
  if (f != null) {
    writer.writeMessage(
      61,
      f,
      proto_r4_core_resources_imaging_study_pb.ImagingStudy.serializeBinaryToWriter
    );
  }
  f = message.getImmunization();
  if (f != null) {
    writer.writeMessage(
      62,
      f,
      proto_r4_core_resources_immunization_pb.Immunization.serializeBinaryToWriter
    );
  }
  f = message.getImmunizationEvaluation();
  if (f != null) {
    writer.writeMessage(
      63,
      f,
      proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation.serializeBinaryToWriter
    );
  }
  f = message.getImmunizationRecommendation();
  if (f != null) {
    writer.writeMessage(
      64,
      f,
      proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation.serializeBinaryToWriter
    );
  }
  f = message.getImplementationGuide();
  if (f != null) {
    writer.writeMessage(
      65,
      f,
      proto_r4_core_resources_implementation_guide_pb.ImplementationGuide.serializeBinaryToWriter
    );
  }
  f = message.getInsurancePlan();
  if (f != null) {
    writer.writeMessage(
      66,
      f,
      proto_r4_core_resources_insurance_plan_pb.InsurancePlan.serializeBinaryToWriter
    );
  }
  f = message.getInvoice();
  if (f != null) {
    writer.writeMessage(
      67,
      f,
      proto_r4_core_resources_invoice_pb.Invoice.serializeBinaryToWriter
    );
  }
  f = message.getLibrary();
  if (f != null) {
    writer.writeMessage(
      68,
      f,
      proto_r4_core_resources_library_pb.Library.serializeBinaryToWriter
    );
  }
  f = message.getLinkage();
  if (f != null) {
    writer.writeMessage(
      69,
      f,
      proto_r4_core_resources_linkage_pb.Linkage.serializeBinaryToWriter
    );
  }
  f = message.getList();
  if (f != null) {
    writer.writeMessage(
      70,
      f,
      proto_r4_core_resources_list_pb.List.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      71,
      f,
      proto_r4_core_resources_location_pb.Location.serializeBinaryToWriter
    );
  }
  f = message.getMeasure();
  if (f != null) {
    writer.writeMessage(
      72,
      f,
      proto_r4_core_resources_measure_pb.Measure.serializeBinaryToWriter
    );
  }
  f = message.getMeasureReport();
  if (f != null) {
    writer.writeMessage(
      73,
      f,
      proto_r4_core_resources_measure_report_pb.MeasureReport.serializeBinaryToWriter
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      74,
      f,
      proto_r4_core_resources_media_pb.Media.serializeBinaryToWriter
    );
  }
  f = message.getMedication();
  if (f != null) {
    writer.writeMessage(
      75,
      f,
      proto_r4_core_resources_medication_pb.Medication.serializeBinaryToWriter
    );
  }
  f = message.getMedicationAdministration();
  if (f != null) {
    writer.writeMessage(
      76,
      f,
      proto_r4_core_resources_medication_administration_pb.MedicationAdministration.serializeBinaryToWriter
    );
  }
  f = message.getMedicationDispense();
  if (f != null) {
    writer.writeMessage(
      77,
      f,
      proto_r4_core_resources_medication_dispense_pb.MedicationDispense.serializeBinaryToWriter
    );
  }
  f = message.getMedicationKnowledge();
  if (f != null) {
    writer.writeMessage(
      78,
      f,
      proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge.serializeBinaryToWriter
    );
  }
  f = message.getMedicationRequest();
  if (f != null) {
    writer.writeMessage(
      79,
      f,
      proto_r4_core_resources_medication_request_pb.MedicationRequest.serializeBinaryToWriter
    );
  }
  f = message.getMedicationStatement();
  if (f != null) {
    writer.writeMessage(
      80,
      f,
      proto_r4_core_resources_medication_statement_pb.MedicationStatement.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProduct();
  if (f != null) {
    writer.writeMessage(
      81,
      f,
      proto_r4_core_resources_medicinal_product_pb.MedicinalProduct.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductAuthorization();
  if (f != null) {
    writer.writeMessage(
      82,
      f,
      proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductContraindication();
  if (f != null) {
    writer.writeMessage(
      83,
      f,
      proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductIndication();
  if (f != null) {
    writer.writeMessage(
      84,
      f,
      proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductIngredient();
  if (f != null) {
    writer.writeMessage(
      85,
      f,
      proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductInteraction();
  if (f != null) {
    writer.writeMessage(
      86,
      f,
      proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductManufactured();
  if (f != null) {
    writer.writeMessage(
      87,
      f,
      proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductPackaged();
  if (f != null) {
    writer.writeMessage(
      88,
      f,
      proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductPharmaceutical();
  if (f != null) {
    writer.writeMessage(
      89,
      f,
      proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical.serializeBinaryToWriter
    );
  }
  f = message.getMedicinalProductUndesirableEffect();
  if (f != null) {
    writer.writeMessage(
      90,
      f,
      proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect.serializeBinaryToWriter
    );
  }
  f = message.getMessageDefinition();
  if (f != null) {
    writer.writeMessage(
      91,
      f,
      proto_r4_core_resources_message_definition_pb.MessageDefinition.serializeBinaryToWriter
    );
  }
  f = message.getMessageHeader();
  if (f != null) {
    writer.writeMessage(
      92,
      f,
      proto_r4_core_resources_message_header_pb.MessageHeader.serializeBinaryToWriter
    );
  }
  f = message.getMolecularSequence();
  if (f != null) {
    writer.writeMessage(
      93,
      f,
      proto_r4_core_resources_molecular_sequence_pb.MolecularSequence.serializeBinaryToWriter
    );
  }
  f = message.getNamingSystem();
  if (f != null) {
    writer.writeMessage(
      94,
      f,
      proto_r4_core_resources_naming_system_pb.NamingSystem.serializeBinaryToWriter
    );
  }
  f = message.getNutritionOrder();
  if (f != null) {
    writer.writeMessage(
      95,
      f,
      proto_r4_core_resources_nutrition_order_pb.NutritionOrder.serializeBinaryToWriter
    );
  }
  f = message.getObservation();
  if (f != null) {
    writer.writeMessage(
      96,
      f,
      proto_r4_core_resources_observation_pb.Observation.serializeBinaryToWriter
    );
  }
  f = message.getObservationDefinition();
  if (f != null) {
    writer.writeMessage(
      97,
      f,
      proto_r4_core_resources_observation_definition_pb.ObservationDefinition.serializeBinaryToWriter
    );
  }
  f = message.getOperationDefinition();
  if (f != null) {
    writer.writeMessage(
      98,
      f,
      proto_r4_core_resources_operation_definition_pb.OperationDefinition.serializeBinaryToWriter
    );
  }
  f = message.getOperationOutcome();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      proto_r4_core_resources_operation_outcome_pb.OperationOutcome.serializeBinaryToWriter
    );
  }
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      100,
      f,
      proto_r4_core_resources_organization_pb.Organization.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationAffiliation();
  if (f != null) {
    writer.writeMessage(
      101,
      f,
      proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation.serializeBinaryToWriter
    );
  }
  f = message.getParameters();
  if (f != null) {
    writer.writeMessage(
      102,
      f,
      proto_r4_core_resources_parameters_pb.Parameters.serializeBinaryToWriter
    );
  }
  f = message.getPatient();
  if (f != null) {
    writer.writeMessage(
      103,
      f,
      proto_r4_core_resources_patient_pb.Patient.serializeBinaryToWriter
    );
  }
  f = message.getPaymentNotice();
  if (f != null) {
    writer.writeMessage(
      104,
      f,
      proto_r4_core_resources_payment_notice_pb.PaymentNotice.serializeBinaryToWriter
    );
  }
  f = message.getPaymentReconciliation();
  if (f != null) {
    writer.writeMessage(
      105,
      f,
      proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation.serializeBinaryToWriter
    );
  }
  f = message.getPerson();
  if (f != null) {
    writer.writeMessage(
      106,
      f,
      proto_r4_core_resources_person_pb.Person.serializeBinaryToWriter
    );
  }
  f = message.getPlanDefinition();
  if (f != null) {
    writer.writeMessage(
      107,
      f,
      proto_r4_core_resources_plan_definition_pb.PlanDefinition.serializeBinaryToWriter
    );
  }
  f = message.getPractitioner();
  if (f != null) {
    writer.writeMessage(
      108,
      f,
      proto_r4_core_resources_practitioner_pb.Practitioner.serializeBinaryToWriter
    );
  }
  f = message.getPractitionerRole();
  if (f != null) {
    writer.writeMessage(
      109,
      f,
      proto_r4_core_resources_practitioner_role_pb.PractitionerRole.serializeBinaryToWriter
    );
  }
  f = message.getProcedure();
  if (f != null) {
    writer.writeMessage(
      110,
      f,
      proto_r4_core_resources_procedure_pb.Procedure.serializeBinaryToWriter
    );
  }
  f = message.getProvenance();
  if (f != null) {
    writer.writeMessage(
      111,
      f,
      proto_r4_core_resources_provenance_pb.Provenance.serializeBinaryToWriter
    );
  }
  f = message.getQuestionnaire();
  if (f != null) {
    writer.writeMessage(
      112,
      f,
      proto_r4_core_resources_questionnaire_pb.Questionnaire.serializeBinaryToWriter
    );
  }
  f = message.getQuestionnaireResponse();
  if (f != null) {
    writer.writeMessage(
      113,
      f,
      proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse.serializeBinaryToWriter
    );
  }
  f = message.getRelatedPerson();
  if (f != null) {
    writer.writeMessage(
      114,
      f,
      proto_r4_core_resources_related_person_pb.RelatedPerson.serializeBinaryToWriter
    );
  }
  f = message.getRequestGroup();
  if (f != null) {
    writer.writeMessage(
      115,
      f,
      proto_r4_core_resources_request_group_pb.RequestGroup.serializeBinaryToWriter
    );
  }
  f = message.getResearchDefinition();
  if (f != null) {
    writer.writeMessage(
      116,
      f,
      proto_r4_core_resources_research_definition_pb.ResearchDefinition.serializeBinaryToWriter
    );
  }
  f = message.getResearchElementDefinition();
  if (f != null) {
    writer.writeMessage(
      117,
      f,
      proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition.serializeBinaryToWriter
    );
  }
  f = message.getResearchStudy();
  if (f != null) {
    writer.writeMessage(
      118,
      f,
      proto_r4_core_resources_research_study_pb.ResearchStudy.serializeBinaryToWriter
    );
  }
  f = message.getResearchSubject();
  if (f != null) {
    writer.writeMessage(
      119,
      f,
      proto_r4_core_resources_research_subject_pb.ResearchSubject.serializeBinaryToWriter
    );
  }
  f = message.getRiskAssessment();
  if (f != null) {
    writer.writeMessage(
      120,
      f,
      proto_r4_core_resources_risk_assessment_pb.RiskAssessment.serializeBinaryToWriter
    );
  }
  f = message.getRiskEvidenceSynthesis();
  if (f != null) {
    writer.writeMessage(
      121,
      f,
      proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      122,
      f,
      proto_r4_core_resources_schedule_pb.Schedule.serializeBinaryToWriter
    );
  }
  f = message.getSearchParameter();
  if (f != null) {
    writer.writeMessage(
      123,
      f,
      proto_r4_core_resources_search_parameter_pb.SearchParameter.serializeBinaryToWriter
    );
  }
  f = message.getServiceRequest();
  if (f != null) {
    writer.writeMessage(
      124,
      f,
      proto_r4_core_resources_service_request_pb.ServiceRequest.serializeBinaryToWriter
    );
  }
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      125,
      f,
      proto_r4_core_resources_slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getSpecimen();
  if (f != null) {
    writer.writeMessage(
      126,
      f,
      proto_r4_core_resources_specimen_pb.Specimen.serializeBinaryToWriter
    );
  }
  f = message.getSpecimenDefinition();
  if (f != null) {
    writer.writeMessage(
      127,
      f,
      proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition.serializeBinaryToWriter
    );
  }
  f = message.getStructureDefinition();
  if (f != null) {
    writer.writeMessage(
      128,
      f,
      proto_r4_core_resources_structure_definition_pb.StructureDefinition.serializeBinaryToWriter
    );
  }
  f = message.getStructureMap();
  if (f != null) {
    writer.writeMessage(
      129,
      f,
      proto_r4_core_resources_structure_map_pb.StructureMap.serializeBinaryToWriter
    );
  }
  f = message.getSubscription();
  if (f != null) {
    writer.writeMessage(
      130,
      f,
      proto_r4_core_resources_subscription_pb.Subscription.serializeBinaryToWriter
    );
  }
  f = message.getSubstance();
  if (f != null) {
    writer.writeMessage(
      131,
      f,
      proto_r4_core_resources_substance_pb.Substance.serializeBinaryToWriter
    );
  }
  f = message.getSubstanceNucleicAcid();
  if (f != null) {
    writer.writeMessage(
      132,
      f,
      proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid.serializeBinaryToWriter
    );
  }
  f = message.getSubstancePolymer();
  if (f != null) {
    writer.writeMessage(
      133,
      f,
      proto_r4_core_resources_substance_polymer_pb.SubstancePolymer.serializeBinaryToWriter
    );
  }
  f = message.getSubstanceProtein();
  if (f != null) {
    writer.writeMessage(
      134,
      f,
      proto_r4_core_resources_substance_protein_pb.SubstanceProtein.serializeBinaryToWriter
    );
  }
  f = message.getSubstanceReferenceInformation();
  if (f != null) {
    writer.writeMessage(
      135,
      f,
      proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation.serializeBinaryToWriter
    );
  }
  f = message.getSubstanceSourceMaterial();
  if (f != null) {
    writer.writeMessage(
      136,
      f,
      proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial.serializeBinaryToWriter
    );
  }
  f = message.getSubstanceSpecification();
  if (f != null) {
    writer.writeMessage(
      137,
      f,
      proto_r4_core_resources_substance_specification_pb.SubstanceSpecification.serializeBinaryToWriter
    );
  }
  f = message.getSupplyDelivery();
  if (f != null) {
    writer.writeMessage(
      138,
      f,
      proto_r4_core_resources_supply_delivery_pb.SupplyDelivery.serializeBinaryToWriter
    );
  }
  f = message.getSupplyRequest();
  if (f != null) {
    writer.writeMessage(
      139,
      f,
      proto_r4_core_resources_supply_request_pb.SupplyRequest.serializeBinaryToWriter
    );
  }
  f = message.getTask();
  if (f != null) {
    writer.writeMessage(
      140,
      f,
      proto_r4_core_resources_task_pb.Task.serializeBinaryToWriter
    );
  }
  f = message.getTerminologyCapabilities();
  if (f != null) {
    writer.writeMessage(
      141,
      f,
      proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities.serializeBinaryToWriter
    );
  }
  f = message.getTestReport();
  if (f != null) {
    writer.writeMessage(
      142,
      f,
      proto_r4_core_resources_test_report_pb.TestReport.serializeBinaryToWriter
    );
  }
  f = message.getTestScript();
  if (f != null) {
    writer.writeMessage(
      143,
      f,
      proto_r4_core_resources_test_script_pb.TestScript.serializeBinaryToWriter
    );
  }
  f = message.getValueSet();
  if (f != null) {
    writer.writeMessage(
      144,
      f,
      proto_r4_core_resources_value_set_pb.ValueSet.serializeBinaryToWriter
    );
  }
  f = message.getVerificationResult();
  if (f != null) {
    writer.writeMessage(
      145,
      f,
      proto_r4_core_resources_verification_result_pb.VerificationResult.serializeBinaryToWriter
    );
  }
  f = message.getVisionPrescription();
  if (f != null) {
    writer.writeMessage(
      146,
      f,
      proto_r4_core_resources_vision_prescription_pb.VisionPrescription.serializeBinaryToWriter
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.google.fhir.r4.core.Account}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAccount = function() {
  return /** @type{?proto.google.fhir.r4.core.Account} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_account_pb.Account, 1));
};


/**
 * @param {?proto.google.fhir.r4.core.Account|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAccount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ActivityDefinition activity_definition = 2;
 * @return {?proto.google.fhir.r4.core.ActivityDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getActivityDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.ActivityDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_activity_definition_pb.ActivityDefinition, 2));
};


/**
 * @param {?proto.google.fhir.r4.core.ActivityDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setActivityDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearActivityDefinition = function() {
  return this.setActivityDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasActivityDefinition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AdverseEvent adverse_event = 3;
 * @return {?proto.google.fhir.r4.core.AdverseEvent}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAdverseEvent = function() {
  return /** @type{?proto.google.fhir.r4.core.AdverseEvent} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_adverse_event_pb.AdverseEvent, 3));
};


/**
 * @param {?proto.google.fhir.r4.core.AdverseEvent|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAdverseEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAdverseEvent = function() {
  return this.setAdverseEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAdverseEvent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AllergyIntolerance allergy_intolerance = 4;
 * @return {?proto.google.fhir.r4.core.AllergyIntolerance}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAllergyIntolerance = function() {
  return /** @type{?proto.google.fhir.r4.core.AllergyIntolerance} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance, 4));
};


/**
 * @param {?proto.google.fhir.r4.core.AllergyIntolerance|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAllergyIntolerance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAllergyIntolerance = function() {
  return this.setAllergyIntolerance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAllergyIntolerance = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Appointment appointment = 5;
 * @return {?proto.google.fhir.r4.core.Appointment}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAppointment = function() {
  return /** @type{?proto.google.fhir.r4.core.Appointment} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_appointment_pb.Appointment, 5));
};


/**
 * @param {?proto.google.fhir.r4.core.Appointment|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAppointment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAppointment = function() {
  return this.setAppointment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAppointment = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AppointmentResponse appointment_response = 6;
 * @return {?proto.google.fhir.r4.core.AppointmentResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAppointmentResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.AppointmentResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_appointment_response_pb.AppointmentResponse, 6));
};


/**
 * @param {?proto.google.fhir.r4.core.AppointmentResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAppointmentResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAppointmentResponse = function() {
  return this.setAppointmentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAppointmentResponse = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AuditEvent audit_event = 7;
 * @return {?proto.google.fhir.r4.core.AuditEvent}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getAuditEvent = function() {
  return /** @type{?proto.google.fhir.r4.core.AuditEvent} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_audit_event_pb.AuditEvent, 7));
};


/**
 * @param {?proto.google.fhir.r4.core.AuditEvent|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setAuditEvent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearAuditEvent = function() {
  return this.setAuditEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasAuditEvent = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Basic basic = 8;
 * @return {?proto.google.fhir.r4.core.Basic}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getBasic = function() {
  return /** @type{?proto.google.fhir.r4.core.Basic} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_basic_pb.Basic, 8));
};


/**
 * @param {?proto.google.fhir.r4.core.Basic|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setBasic = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearBasic = function() {
  return this.setBasic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasBasic = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional Binary binary = 9;
 * @return {?proto.google.fhir.r4.core.Binary}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getBinary = function() {
  return /** @type{?proto.google.fhir.r4.core.Binary} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_binary_pb.Binary, 9));
};


/**
 * @param {?proto.google.fhir.r4.core.Binary|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setBinary = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearBinary = function() {
  return this.setBinary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasBinary = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional BiologicallyDerivedProduct biologically_derived_product = 10;
 * @return {?proto.google.fhir.r4.core.BiologicallyDerivedProduct}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getBiologicallyDerivedProduct = function() {
  return /** @type{?proto.google.fhir.r4.core.BiologicallyDerivedProduct} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct, 10));
};


/**
 * @param {?proto.google.fhir.r4.core.BiologicallyDerivedProduct|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setBiologicallyDerivedProduct = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearBiologicallyDerivedProduct = function() {
  return this.setBiologicallyDerivedProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasBiologicallyDerivedProduct = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional BodyStructure body_structure = 11;
 * @return {?proto.google.fhir.r4.core.BodyStructure}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getBodyStructure = function() {
  return /** @type{?proto.google.fhir.r4.core.BodyStructure} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_body_structure_pb.BodyStructure, 11));
};


/**
 * @param {?proto.google.fhir.r4.core.BodyStructure|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setBodyStructure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearBodyStructure = function() {
  return this.setBodyStructure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasBodyStructure = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Bundle bundle = 12;
 * @return {?proto.google.fhir.r4.core.Bundle}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getBundle = function() {
  return /** @type{?proto.google.fhir.r4.core.Bundle} */ (
    jspb.Message.getWrapperField(this, proto.google.fhir.r4.core.Bundle, 12));
};


/**
 * @param {?proto.google.fhir.r4.core.Bundle|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setBundle = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearBundle = function() {
  return this.setBundle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasBundle = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional CapabilityStatement capability_statement = 13;
 * @return {?proto.google.fhir.r4.core.CapabilityStatement}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCapabilityStatement = function() {
  return /** @type{?proto.google.fhir.r4.core.CapabilityStatement} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_capability_statement_pb.CapabilityStatement, 13));
};


/**
 * @param {?proto.google.fhir.r4.core.CapabilityStatement|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCapabilityStatement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCapabilityStatement = function() {
  return this.setCapabilityStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCapabilityStatement = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional CarePlan care_plan = 14;
 * @return {?proto.google.fhir.r4.core.CarePlan}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCarePlan = function() {
  return /** @type{?proto.google.fhir.r4.core.CarePlan} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_care_plan_pb.CarePlan, 14));
};


/**
 * @param {?proto.google.fhir.r4.core.CarePlan|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCarePlan = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCarePlan = function() {
  return this.setCarePlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCarePlan = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional CareTeam care_team = 15;
 * @return {?proto.google.fhir.r4.core.CareTeam}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCareTeam = function() {
  return /** @type{?proto.google.fhir.r4.core.CareTeam} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_care_team_pb.CareTeam, 15));
};


/**
 * @param {?proto.google.fhir.r4.core.CareTeam|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCareTeam = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCareTeam = function() {
  return this.setCareTeam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCareTeam = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional CatalogEntry catalog_entry = 16;
 * @return {?proto.google.fhir.r4.core.CatalogEntry}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCatalogEntry = function() {
  return /** @type{?proto.google.fhir.r4.core.CatalogEntry} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_catalog_entry_pb.CatalogEntry, 16));
};


/**
 * @param {?proto.google.fhir.r4.core.CatalogEntry|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCatalogEntry = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCatalogEntry = function() {
  return this.setCatalogEntry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCatalogEntry = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ChargeItem charge_item = 17;
 * @return {?proto.google.fhir.r4.core.ChargeItem}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getChargeItem = function() {
  return /** @type{?proto.google.fhir.r4.core.ChargeItem} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_charge_item_pb.ChargeItem, 17));
};


/**
 * @param {?proto.google.fhir.r4.core.ChargeItem|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setChargeItem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearChargeItem = function() {
  return this.setChargeItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasChargeItem = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ChargeItemDefinition charge_item_definition = 18;
 * @return {?proto.google.fhir.r4.core.ChargeItemDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getChargeItemDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.ChargeItemDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition, 18));
};


/**
 * @param {?proto.google.fhir.r4.core.ChargeItemDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setChargeItemDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearChargeItemDefinition = function() {
  return this.setChargeItemDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasChargeItemDefinition = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional Claim claim = 19;
 * @return {?proto.google.fhir.r4.core.Claim}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getClaim = function() {
  return /** @type{?proto.google.fhir.r4.core.Claim} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_claim_pb.Claim, 19));
};


/**
 * @param {?proto.google.fhir.r4.core.Claim|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setClaim = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearClaim = function() {
  return this.setClaim(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasClaim = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ClaimResponse claim_response = 20;
 * @return {?proto.google.fhir.r4.core.ClaimResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getClaimResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.ClaimResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_claim_response_pb.ClaimResponse, 20));
};


/**
 * @param {?proto.google.fhir.r4.core.ClaimResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setClaimResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearClaimResponse = function() {
  return this.setClaimResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasClaimResponse = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ClinicalImpression clinical_impression = 21;
 * @return {?proto.google.fhir.r4.core.ClinicalImpression}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getClinicalImpression = function() {
  return /** @type{?proto.google.fhir.r4.core.ClinicalImpression} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_clinical_impression_pb.ClinicalImpression, 21));
};


/**
 * @param {?proto.google.fhir.r4.core.ClinicalImpression|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setClinicalImpression = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearClinicalImpression = function() {
  return this.setClinicalImpression(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasClinicalImpression = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional CodeSystem code_system = 22;
 * @return {?proto.google.fhir.r4.core.CodeSystem}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCodeSystem = function() {
  return /** @type{?proto.google.fhir.r4.core.CodeSystem} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_code_system_pb.CodeSystem, 22));
};


/**
 * @param {?proto.google.fhir.r4.core.CodeSystem|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCodeSystem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCodeSystem = function() {
  return this.setCodeSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCodeSystem = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional Communication communication = 23;
 * @return {?proto.google.fhir.r4.core.Communication}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCommunication = function() {
  return /** @type{?proto.google.fhir.r4.core.Communication} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_communication_pb.Communication, 23));
};


/**
 * @param {?proto.google.fhir.r4.core.Communication|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCommunication = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCommunication = function() {
  return this.setCommunication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCommunication = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional CommunicationRequest communication_request = 24;
 * @return {?proto.google.fhir.r4.core.CommunicationRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCommunicationRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.CommunicationRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_communication_request_pb.CommunicationRequest, 24));
};


/**
 * @param {?proto.google.fhir.r4.core.CommunicationRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCommunicationRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCommunicationRequest = function() {
  return this.setCommunicationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCommunicationRequest = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional CompartmentDefinition compartment_definition = 25;
 * @return {?proto.google.fhir.r4.core.CompartmentDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCompartmentDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.CompartmentDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition, 25));
};


/**
 * @param {?proto.google.fhir.r4.core.CompartmentDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCompartmentDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCompartmentDefinition = function() {
  return this.setCompartmentDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCompartmentDefinition = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional Composition composition = 26;
 * @return {?proto.google.fhir.r4.core.Composition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getComposition = function() {
  return /** @type{?proto.google.fhir.r4.core.Composition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_composition_pb.Composition, 26));
};


/**
 * @param {?proto.google.fhir.r4.core.Composition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setComposition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearComposition = function() {
  return this.setComposition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasComposition = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional ConceptMap concept_map = 27;
 * @return {?proto.google.fhir.r4.core.ConceptMap}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getConceptMap = function() {
  return /** @type{?proto.google.fhir.r4.core.ConceptMap} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_concept_map_pb.ConceptMap, 27));
};


/**
 * @param {?proto.google.fhir.r4.core.ConceptMap|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setConceptMap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearConceptMap = function() {
  return this.setConceptMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasConceptMap = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Condition condition = 28;
 * @return {?proto.google.fhir.r4.core.Condition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCondition = function() {
  return /** @type{?proto.google.fhir.r4.core.Condition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_condition_pb.Condition, 28));
};


/**
 * @param {?proto.google.fhir.r4.core.Condition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCondition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCondition = function() {
  return this.setCondition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCondition = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional Consent consent = 29;
 * @return {?proto.google.fhir.r4.core.Consent}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getConsent = function() {
  return /** @type{?proto.google.fhir.r4.core.Consent} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_consent_pb.Consent, 29));
};


/**
 * @param {?proto.google.fhir.r4.core.Consent|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setConsent = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearConsent = function() {
  return this.setConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasConsent = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Contract contract = 30;
 * @return {?proto.google.fhir.r4.core.Contract}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getContract = function() {
  return /** @type{?proto.google.fhir.r4.core.Contract} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_contract_pb.Contract, 30));
};


/**
 * @param {?proto.google.fhir.r4.core.Contract|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setContract = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearContract = function() {
  return this.setContract(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasContract = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional Coverage coverage = 31;
 * @return {?proto.google.fhir.r4.core.Coverage}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCoverage = function() {
  return /** @type{?proto.google.fhir.r4.core.Coverage} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_coverage_pb.Coverage, 31));
};


/**
 * @param {?proto.google.fhir.r4.core.Coverage|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCoverage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCoverage = function() {
  return this.setCoverage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCoverage = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional CoverageEligibilityRequest coverage_eligibility_request = 32;
 * @return {?proto.google.fhir.r4.core.CoverageEligibilityRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCoverageEligibilityRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.CoverageEligibilityRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest, 32));
};


/**
 * @param {?proto.google.fhir.r4.core.CoverageEligibilityRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCoverageEligibilityRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCoverageEligibilityRequest = function() {
  return this.setCoverageEligibilityRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCoverageEligibilityRequest = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional CoverageEligibilityResponse coverage_eligibility_response = 33;
 * @return {?proto.google.fhir.r4.core.CoverageEligibilityResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getCoverageEligibilityResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.CoverageEligibilityResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse, 33));
};


/**
 * @param {?proto.google.fhir.r4.core.CoverageEligibilityResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setCoverageEligibilityResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearCoverageEligibilityResponse = function() {
  return this.setCoverageEligibilityResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasCoverageEligibilityResponse = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional DetectedIssue detected_issue = 34;
 * @return {?proto.google.fhir.r4.core.DetectedIssue}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDetectedIssue = function() {
  return /** @type{?proto.google.fhir.r4.core.DetectedIssue} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_detected_issue_pb.DetectedIssue, 34));
};


/**
 * @param {?proto.google.fhir.r4.core.DetectedIssue|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDetectedIssue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDetectedIssue = function() {
  return this.setDetectedIssue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDetectedIssue = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional Device device = 35;
 * @return {?proto.google.fhir.r4.core.Device}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDevice = function() {
  return /** @type{?proto.google.fhir.r4.core.Device} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_device_pb.Device, 35));
};


/**
 * @param {?proto.google.fhir.r4.core.Device|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDevice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDevice = function() {
  return this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional DeviceDefinition device_definition = 36;
 * @return {?proto.google.fhir.r4.core.DeviceDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDeviceDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.DeviceDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_device_definition_pb.DeviceDefinition, 36));
};


/**
 * @param {?proto.google.fhir.r4.core.DeviceDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDeviceDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDeviceDefinition = function() {
  return this.setDeviceDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDeviceDefinition = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional DeviceMetric device_metric = 37;
 * @return {?proto.google.fhir.r4.core.DeviceMetric}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDeviceMetric = function() {
  return /** @type{?proto.google.fhir.r4.core.DeviceMetric} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_device_metric_pb.DeviceMetric, 37));
};


/**
 * @param {?proto.google.fhir.r4.core.DeviceMetric|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDeviceMetric = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDeviceMetric = function() {
  return this.setDeviceMetric(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDeviceMetric = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional DeviceRequest device_request = 38;
 * @return {?proto.google.fhir.r4.core.DeviceRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDeviceRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.DeviceRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_device_request_pb.DeviceRequest, 38));
};


/**
 * @param {?proto.google.fhir.r4.core.DeviceRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDeviceRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDeviceRequest = function() {
  return this.setDeviceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDeviceRequest = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional DeviceUseStatement device_use_statement = 39;
 * @return {?proto.google.fhir.r4.core.DeviceUseStatement}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDeviceUseStatement = function() {
  return /** @type{?proto.google.fhir.r4.core.DeviceUseStatement} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement, 39));
};


/**
 * @param {?proto.google.fhir.r4.core.DeviceUseStatement|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDeviceUseStatement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDeviceUseStatement = function() {
  return this.setDeviceUseStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDeviceUseStatement = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional DiagnosticReport diagnostic_report = 40;
 * @return {?proto.google.fhir.r4.core.DiagnosticReport}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDiagnosticReport = function() {
  return /** @type{?proto.google.fhir.r4.core.DiagnosticReport} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport, 40));
};


/**
 * @param {?proto.google.fhir.r4.core.DiagnosticReport|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDiagnosticReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDiagnosticReport = function() {
  return this.setDiagnosticReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDiagnosticReport = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional DocumentManifest document_manifest = 41;
 * @return {?proto.google.fhir.r4.core.DocumentManifest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDocumentManifest = function() {
  return /** @type{?proto.google.fhir.r4.core.DocumentManifest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_document_manifest_pb.DocumentManifest, 41));
};


/**
 * @param {?proto.google.fhir.r4.core.DocumentManifest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDocumentManifest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDocumentManifest = function() {
  return this.setDocumentManifest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDocumentManifest = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional DocumentReference document_reference = 42;
 * @return {?proto.google.fhir.r4.core.DocumentReference}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getDocumentReference = function() {
  return /** @type{?proto.google.fhir.r4.core.DocumentReference} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_document_reference_pb.DocumentReference, 42));
};


/**
 * @param {?proto.google.fhir.r4.core.DocumentReference|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setDocumentReference = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearDocumentReference = function() {
  return this.setDocumentReference(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasDocumentReference = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional EffectEvidenceSynthesis effect_evidence_synthesis = 43;
 * @return {?proto.google.fhir.r4.core.EffectEvidenceSynthesis}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEffectEvidenceSynthesis = function() {
  return /** @type{?proto.google.fhir.r4.core.EffectEvidenceSynthesis} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis, 43));
};


/**
 * @param {?proto.google.fhir.r4.core.EffectEvidenceSynthesis|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEffectEvidenceSynthesis = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEffectEvidenceSynthesis = function() {
  return this.setEffectEvidenceSynthesis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEffectEvidenceSynthesis = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional Encounter encounter = 44;
 * @return {?proto.google.fhir.r4.core.Encounter}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEncounter = function() {
  return /** @type{?proto.google.fhir.r4.core.Encounter} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_encounter_pb.Encounter, 44));
};


/**
 * @param {?proto.google.fhir.r4.core.Encounter|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEncounter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEncounter = function() {
  return this.setEncounter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEncounter = function() {
  return jspb.Message.getField(this, 44) != null;
};


/**
 * optional Endpoint endpoint = 45;
 * @return {?proto.google.fhir.r4.core.Endpoint}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEndpoint = function() {
  return /** @type{?proto.google.fhir.r4.core.Endpoint} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_endpoint_pb.Endpoint, 45));
};


/**
 * @param {?proto.google.fhir.r4.core.Endpoint|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEndpoint = function(value) {
  return jspb.Message.setOneofWrapperField(this, 45, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEndpoint = function() {
  return this.setEndpoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEndpoint = function() {
  return jspb.Message.getField(this, 45) != null;
};


/**
 * optional EnrollmentRequest enrollment_request = 46;
 * @return {?proto.google.fhir.r4.core.EnrollmentRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEnrollmentRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.EnrollmentRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest, 46));
};


/**
 * @param {?proto.google.fhir.r4.core.EnrollmentRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEnrollmentRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 46, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEnrollmentRequest = function() {
  return this.setEnrollmentRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEnrollmentRequest = function() {
  return jspb.Message.getField(this, 46) != null;
};


/**
 * optional EnrollmentResponse enrollment_response = 47;
 * @return {?proto.google.fhir.r4.core.EnrollmentResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEnrollmentResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.EnrollmentResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse, 47));
};


/**
 * @param {?proto.google.fhir.r4.core.EnrollmentResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEnrollmentResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 47, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEnrollmentResponse = function() {
  return this.setEnrollmentResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEnrollmentResponse = function() {
  return jspb.Message.getField(this, 47) != null;
};


/**
 * optional EpisodeOfCare episode_of_care = 48;
 * @return {?proto.google.fhir.r4.core.EpisodeOfCare}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEpisodeOfCare = function() {
  return /** @type{?proto.google.fhir.r4.core.EpisodeOfCare} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare, 48));
};


/**
 * @param {?proto.google.fhir.r4.core.EpisodeOfCare|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEpisodeOfCare = function(value) {
  return jspb.Message.setOneofWrapperField(this, 48, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEpisodeOfCare = function() {
  return this.setEpisodeOfCare(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEpisodeOfCare = function() {
  return jspb.Message.getField(this, 48) != null;
};


/**
 * optional EventDefinition event_definition = 49;
 * @return {?proto.google.fhir.r4.core.EventDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEventDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.EventDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_event_definition_pb.EventDefinition, 49));
};


/**
 * @param {?proto.google.fhir.r4.core.EventDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEventDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 49, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEventDefinition = function() {
  return this.setEventDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEventDefinition = function() {
  return jspb.Message.getField(this, 49) != null;
};


/**
 * optional Evidence evidence = 50;
 * @return {?proto.google.fhir.r4.core.Evidence}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEvidence = function() {
  return /** @type{?proto.google.fhir.r4.core.Evidence} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_evidence_pb.Evidence, 50));
};


/**
 * @param {?proto.google.fhir.r4.core.Evidence|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEvidence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 50, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEvidence = function() {
  return this.setEvidence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEvidence = function() {
  return jspb.Message.getField(this, 50) != null;
};


/**
 * optional EvidenceVariable evidence_variable = 51;
 * @return {?proto.google.fhir.r4.core.EvidenceVariable}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getEvidenceVariable = function() {
  return /** @type{?proto.google.fhir.r4.core.EvidenceVariable} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_evidence_variable_pb.EvidenceVariable, 51));
};


/**
 * @param {?proto.google.fhir.r4.core.EvidenceVariable|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setEvidenceVariable = function(value) {
  return jspb.Message.setOneofWrapperField(this, 51, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearEvidenceVariable = function() {
  return this.setEvidenceVariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasEvidenceVariable = function() {
  return jspb.Message.getField(this, 51) != null;
};


/**
 * optional ExampleScenario example_scenario = 52;
 * @return {?proto.google.fhir.r4.core.ExampleScenario}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getExampleScenario = function() {
  return /** @type{?proto.google.fhir.r4.core.ExampleScenario} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_example_scenario_pb.ExampleScenario, 52));
};


/**
 * @param {?proto.google.fhir.r4.core.ExampleScenario|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setExampleScenario = function(value) {
  return jspb.Message.setOneofWrapperField(this, 52, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearExampleScenario = function() {
  return this.setExampleScenario(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasExampleScenario = function() {
  return jspb.Message.getField(this, 52) != null;
};


/**
 * optional ExplanationOfBenefit explanation_of_benefit = 53;
 * @return {?proto.google.fhir.r4.core.ExplanationOfBenefit}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getExplanationOfBenefit = function() {
  return /** @type{?proto.google.fhir.r4.core.ExplanationOfBenefit} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit, 53));
};


/**
 * @param {?proto.google.fhir.r4.core.ExplanationOfBenefit|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setExplanationOfBenefit = function(value) {
  return jspb.Message.setOneofWrapperField(this, 53, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearExplanationOfBenefit = function() {
  return this.setExplanationOfBenefit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasExplanationOfBenefit = function() {
  return jspb.Message.getField(this, 53) != null;
};


/**
 * optional FamilyMemberHistory family_member_history = 54;
 * @return {?proto.google.fhir.r4.core.FamilyMemberHistory}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getFamilyMemberHistory = function() {
  return /** @type{?proto.google.fhir.r4.core.FamilyMemberHistory} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory, 54));
};


/**
 * @param {?proto.google.fhir.r4.core.FamilyMemberHistory|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setFamilyMemberHistory = function(value) {
  return jspb.Message.setOneofWrapperField(this, 54, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearFamilyMemberHistory = function() {
  return this.setFamilyMemberHistory(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasFamilyMemberHistory = function() {
  return jspb.Message.getField(this, 54) != null;
};


/**
 * optional Flag flag = 55;
 * @return {?proto.google.fhir.r4.core.Flag}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getFlag = function() {
  return /** @type{?proto.google.fhir.r4.core.Flag} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_flag_pb.Flag, 55));
};


/**
 * @param {?proto.google.fhir.r4.core.Flag|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setFlag = function(value) {
  return jspb.Message.setOneofWrapperField(this, 55, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearFlag = function() {
  return this.setFlag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasFlag = function() {
  return jspb.Message.getField(this, 55) != null;
};


/**
 * optional Goal goal = 56;
 * @return {?proto.google.fhir.r4.core.Goal}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getGoal = function() {
  return /** @type{?proto.google.fhir.r4.core.Goal} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_goal_pb.Goal, 56));
};


/**
 * @param {?proto.google.fhir.r4.core.Goal|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setGoal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 56, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearGoal = function() {
  return this.setGoal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasGoal = function() {
  return jspb.Message.getField(this, 56) != null;
};


/**
 * optional GraphDefinition graph_definition = 57;
 * @return {?proto.google.fhir.r4.core.GraphDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getGraphDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.GraphDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_graph_definition_pb.GraphDefinition, 57));
};


/**
 * @param {?proto.google.fhir.r4.core.GraphDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setGraphDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 57, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearGraphDefinition = function() {
  return this.setGraphDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasGraphDefinition = function() {
  return jspb.Message.getField(this, 57) != null;
};


/**
 * optional Group group = 58;
 * @return {?proto.google.fhir.r4.core.Group}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getGroup = function() {
  return /** @type{?proto.google.fhir.r4.core.Group} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_group_pb.Group, 58));
};


/**
 * @param {?proto.google.fhir.r4.core.Group|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 58, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearGroup = function() {
  return this.setGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasGroup = function() {
  return jspb.Message.getField(this, 58) != null;
};


/**
 * optional GuidanceResponse guidance_response = 59;
 * @return {?proto.google.fhir.r4.core.GuidanceResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getGuidanceResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.GuidanceResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_guidance_response_pb.GuidanceResponse, 59));
};


/**
 * @param {?proto.google.fhir.r4.core.GuidanceResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setGuidanceResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 59, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearGuidanceResponse = function() {
  return this.setGuidanceResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasGuidanceResponse = function() {
  return jspb.Message.getField(this, 59) != null;
};


/**
 * optional HealthcareService healthcare_service = 60;
 * @return {?proto.google.fhir.r4.core.HealthcareService}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getHealthcareService = function() {
  return /** @type{?proto.google.fhir.r4.core.HealthcareService} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_healthcare_service_pb.HealthcareService, 60));
};


/**
 * @param {?proto.google.fhir.r4.core.HealthcareService|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setHealthcareService = function(value) {
  return jspb.Message.setOneofWrapperField(this, 60, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearHealthcareService = function() {
  return this.setHealthcareService(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasHealthcareService = function() {
  return jspb.Message.getField(this, 60) != null;
};


/**
 * optional ImagingStudy imaging_study = 61;
 * @return {?proto.google.fhir.r4.core.ImagingStudy}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getImagingStudy = function() {
  return /** @type{?proto.google.fhir.r4.core.ImagingStudy} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_imaging_study_pb.ImagingStudy, 61));
};


/**
 * @param {?proto.google.fhir.r4.core.ImagingStudy|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setImagingStudy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 61, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearImagingStudy = function() {
  return this.setImagingStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasImagingStudy = function() {
  return jspb.Message.getField(this, 61) != null;
};


/**
 * optional Immunization immunization = 62;
 * @return {?proto.google.fhir.r4.core.Immunization}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getImmunization = function() {
  return /** @type{?proto.google.fhir.r4.core.Immunization} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_immunization_pb.Immunization, 62));
};


/**
 * @param {?proto.google.fhir.r4.core.Immunization|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setImmunization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 62, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearImmunization = function() {
  return this.setImmunization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasImmunization = function() {
  return jspb.Message.getField(this, 62) != null;
};


/**
 * optional ImmunizationEvaluation immunization_evaluation = 63;
 * @return {?proto.google.fhir.r4.core.ImmunizationEvaluation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getImmunizationEvaluation = function() {
  return /** @type{?proto.google.fhir.r4.core.ImmunizationEvaluation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation, 63));
};


/**
 * @param {?proto.google.fhir.r4.core.ImmunizationEvaluation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setImmunizationEvaluation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 63, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearImmunizationEvaluation = function() {
  return this.setImmunizationEvaluation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasImmunizationEvaluation = function() {
  return jspb.Message.getField(this, 63) != null;
};


/**
 * optional ImmunizationRecommendation immunization_recommendation = 64;
 * @return {?proto.google.fhir.r4.core.ImmunizationRecommendation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getImmunizationRecommendation = function() {
  return /** @type{?proto.google.fhir.r4.core.ImmunizationRecommendation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation, 64));
};


/**
 * @param {?proto.google.fhir.r4.core.ImmunizationRecommendation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setImmunizationRecommendation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 64, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearImmunizationRecommendation = function() {
  return this.setImmunizationRecommendation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasImmunizationRecommendation = function() {
  return jspb.Message.getField(this, 64) != null;
};


/**
 * optional ImplementationGuide implementation_guide = 65;
 * @return {?proto.google.fhir.r4.core.ImplementationGuide}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getImplementationGuide = function() {
  return /** @type{?proto.google.fhir.r4.core.ImplementationGuide} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_implementation_guide_pb.ImplementationGuide, 65));
};


/**
 * @param {?proto.google.fhir.r4.core.ImplementationGuide|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setImplementationGuide = function(value) {
  return jspb.Message.setOneofWrapperField(this, 65, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearImplementationGuide = function() {
  return this.setImplementationGuide(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasImplementationGuide = function() {
  return jspb.Message.getField(this, 65) != null;
};


/**
 * optional InsurancePlan insurance_plan = 66;
 * @return {?proto.google.fhir.r4.core.InsurancePlan}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getInsurancePlan = function() {
  return /** @type{?proto.google.fhir.r4.core.InsurancePlan} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_insurance_plan_pb.InsurancePlan, 66));
};


/**
 * @param {?proto.google.fhir.r4.core.InsurancePlan|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setInsurancePlan = function(value) {
  return jspb.Message.setOneofWrapperField(this, 66, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearInsurancePlan = function() {
  return this.setInsurancePlan(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasInsurancePlan = function() {
  return jspb.Message.getField(this, 66) != null;
};


/**
 * optional Invoice invoice = 67;
 * @return {?proto.google.fhir.r4.core.Invoice}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getInvoice = function() {
  return /** @type{?proto.google.fhir.r4.core.Invoice} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_invoice_pb.Invoice, 67));
};


/**
 * @param {?proto.google.fhir.r4.core.Invoice|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setInvoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 67, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearInvoice = function() {
  return this.setInvoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasInvoice = function() {
  return jspb.Message.getField(this, 67) != null;
};


/**
 * optional Library library = 68;
 * @return {?proto.google.fhir.r4.core.Library}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getLibrary = function() {
  return /** @type{?proto.google.fhir.r4.core.Library} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_library_pb.Library, 68));
};


/**
 * @param {?proto.google.fhir.r4.core.Library|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setLibrary = function(value) {
  return jspb.Message.setOneofWrapperField(this, 68, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearLibrary = function() {
  return this.setLibrary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasLibrary = function() {
  return jspb.Message.getField(this, 68) != null;
};


/**
 * optional Linkage linkage = 69;
 * @return {?proto.google.fhir.r4.core.Linkage}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getLinkage = function() {
  return /** @type{?proto.google.fhir.r4.core.Linkage} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_linkage_pb.Linkage, 69));
};


/**
 * @param {?proto.google.fhir.r4.core.Linkage|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setLinkage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 69, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearLinkage = function() {
  return this.setLinkage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasLinkage = function() {
  return jspb.Message.getField(this, 69) != null;
};


/**
 * optional List list = 70;
 * @return {?proto.google.fhir.r4.core.List}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getList = function() {
  return /** @type{?proto.google.fhir.r4.core.List} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_list_pb.List, 70));
};


/**
 * @param {?proto.google.fhir.r4.core.List|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setList = function(value) {
  return jspb.Message.setOneofWrapperField(this, 70, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearList = function() {
  return this.setList(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasList = function() {
  return jspb.Message.getField(this, 70) != null;
};


/**
 * optional Location location = 71;
 * @return {?proto.google.fhir.r4.core.Location}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getLocation = function() {
  return /** @type{?proto.google.fhir.r4.core.Location} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_location_pb.Location, 71));
};


/**
 * @param {?proto.google.fhir.r4.core.Location|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 71, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 71) != null;
};


/**
 * optional Measure measure = 72;
 * @return {?proto.google.fhir.r4.core.Measure}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMeasure = function() {
  return /** @type{?proto.google.fhir.r4.core.Measure} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_measure_pb.Measure, 72));
};


/**
 * @param {?proto.google.fhir.r4.core.Measure|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMeasure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 72, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMeasure = function() {
  return this.setMeasure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMeasure = function() {
  return jspb.Message.getField(this, 72) != null;
};


/**
 * optional MeasureReport measure_report = 73;
 * @return {?proto.google.fhir.r4.core.MeasureReport}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMeasureReport = function() {
  return /** @type{?proto.google.fhir.r4.core.MeasureReport} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_measure_report_pb.MeasureReport, 73));
};


/**
 * @param {?proto.google.fhir.r4.core.MeasureReport|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMeasureReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 73, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMeasureReport = function() {
  return this.setMeasureReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMeasureReport = function() {
  return jspb.Message.getField(this, 73) != null;
};


/**
 * optional Media media = 74;
 * @return {?proto.google.fhir.r4.core.Media}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedia = function() {
  return /** @type{?proto.google.fhir.r4.core.Media} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_media_pb.Media, 74));
};


/**
 * @param {?proto.google.fhir.r4.core.Media|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 74, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 74) != null;
};


/**
 * optional Medication medication = 75;
 * @return {?proto.google.fhir.r4.core.Medication}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedication = function() {
  return /** @type{?proto.google.fhir.r4.core.Medication} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_pb.Medication, 75));
};


/**
 * @param {?proto.google.fhir.r4.core.Medication|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedication = function(value) {
  return jspb.Message.setOneofWrapperField(this, 75, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedication = function() {
  return this.setMedication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedication = function() {
  return jspb.Message.getField(this, 75) != null;
};


/**
 * optional MedicationAdministration medication_administration = 76;
 * @return {?proto.google.fhir.r4.core.MedicationAdministration}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicationAdministration = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicationAdministration} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_administration_pb.MedicationAdministration, 76));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicationAdministration|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicationAdministration = function(value) {
  return jspb.Message.setOneofWrapperField(this, 76, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicationAdministration = function() {
  return this.setMedicationAdministration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicationAdministration = function() {
  return jspb.Message.getField(this, 76) != null;
};


/**
 * optional MedicationDispense medication_dispense = 77;
 * @return {?proto.google.fhir.r4.core.MedicationDispense}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicationDispense = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicationDispense} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_dispense_pb.MedicationDispense, 77));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicationDispense|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicationDispense = function(value) {
  return jspb.Message.setOneofWrapperField(this, 77, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicationDispense = function() {
  return this.setMedicationDispense(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicationDispense = function() {
  return jspb.Message.getField(this, 77) != null;
};


/**
 * optional MedicationKnowledge medication_knowledge = 78;
 * @return {?proto.google.fhir.r4.core.MedicationKnowledge}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicationKnowledge = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicationKnowledge} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge, 78));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicationKnowledge|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicationKnowledge = function(value) {
  return jspb.Message.setOneofWrapperField(this, 78, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicationKnowledge = function() {
  return this.setMedicationKnowledge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicationKnowledge = function() {
  return jspb.Message.getField(this, 78) != null;
};


/**
 * optional MedicationRequest medication_request = 79;
 * @return {?proto.google.fhir.r4.core.MedicationRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicationRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicationRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_request_pb.MedicationRequest, 79));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicationRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicationRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 79, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicationRequest = function() {
  return this.setMedicationRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicationRequest = function() {
  return jspb.Message.getField(this, 79) != null;
};


/**
 * optional MedicationStatement medication_statement = 80;
 * @return {?proto.google.fhir.r4.core.MedicationStatement}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicationStatement = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicationStatement} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medication_statement_pb.MedicationStatement, 80));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicationStatement|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicationStatement = function(value) {
  return jspb.Message.setOneofWrapperField(this, 80, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicationStatement = function() {
  return this.setMedicationStatement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicationStatement = function() {
  return jspb.Message.getField(this, 80) != null;
};


/**
 * optional MedicinalProduct medicinal_product = 81;
 * @return {?proto.google.fhir.r4.core.MedicinalProduct}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProduct = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProduct} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_pb.MedicinalProduct, 81));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProduct|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProduct = function(value) {
  return jspb.Message.setOneofWrapperField(this, 81, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProduct = function() {
  return this.setMedicinalProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProduct = function() {
  return jspb.Message.getField(this, 81) != null;
};


/**
 * optional MedicinalProductAuthorization medicinal_product_authorization = 82;
 * @return {?proto.google.fhir.r4.core.MedicinalProductAuthorization}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductAuthorization = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductAuthorization} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization, 82));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductAuthorization|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductAuthorization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 82, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductAuthorization = function() {
  return this.setMedicinalProductAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductAuthorization = function() {
  return jspb.Message.getField(this, 82) != null;
};


/**
 * optional MedicinalProductContraindication medicinal_product_contraindication = 83;
 * @return {?proto.google.fhir.r4.core.MedicinalProductContraindication}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductContraindication = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductContraindication} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication, 83));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductContraindication|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductContraindication = function(value) {
  return jspb.Message.setOneofWrapperField(this, 83, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductContraindication = function() {
  return this.setMedicinalProductContraindication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductContraindication = function() {
  return jspb.Message.getField(this, 83) != null;
};


/**
 * optional MedicinalProductIndication medicinal_product_indication = 84;
 * @return {?proto.google.fhir.r4.core.MedicinalProductIndication}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductIndication = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductIndication} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication, 84));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductIndication|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductIndication = function(value) {
  return jspb.Message.setOneofWrapperField(this, 84, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductIndication = function() {
  return this.setMedicinalProductIndication(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductIndication = function() {
  return jspb.Message.getField(this, 84) != null;
};


/**
 * optional MedicinalProductIngredient medicinal_product_ingredient = 85;
 * @return {?proto.google.fhir.r4.core.MedicinalProductIngredient}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductIngredient = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductIngredient} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient, 85));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductIngredient|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductIngredient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 85, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductIngredient = function() {
  return this.setMedicinalProductIngredient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductIngredient = function() {
  return jspb.Message.getField(this, 85) != null;
};


/**
 * optional MedicinalProductInteraction medicinal_product_interaction = 86;
 * @return {?proto.google.fhir.r4.core.MedicinalProductInteraction}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductInteraction = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductInteraction} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction, 86));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductInteraction|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductInteraction = function(value) {
  return jspb.Message.setOneofWrapperField(this, 86, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductInteraction = function() {
  return this.setMedicinalProductInteraction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductInteraction = function() {
  return jspb.Message.getField(this, 86) != null;
};


/**
 * optional MedicinalProductManufactured medicinal_product_manufactured = 87;
 * @return {?proto.google.fhir.r4.core.MedicinalProductManufactured}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductManufactured = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductManufactured} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured, 87));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductManufactured|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductManufactured = function(value) {
  return jspb.Message.setOneofWrapperField(this, 87, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductManufactured = function() {
  return this.setMedicinalProductManufactured(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductManufactured = function() {
  return jspb.Message.getField(this, 87) != null;
};


/**
 * optional MedicinalProductPackaged medicinal_product_packaged = 88;
 * @return {?proto.google.fhir.r4.core.MedicinalProductPackaged}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductPackaged = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductPackaged} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged, 88));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductPackaged|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductPackaged = function(value) {
  return jspb.Message.setOneofWrapperField(this, 88, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductPackaged = function() {
  return this.setMedicinalProductPackaged(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductPackaged = function() {
  return jspb.Message.getField(this, 88) != null;
};


/**
 * optional MedicinalProductPharmaceutical medicinal_product_pharmaceutical = 89;
 * @return {?proto.google.fhir.r4.core.MedicinalProductPharmaceutical}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductPharmaceutical = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductPharmaceutical} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical, 89));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductPharmaceutical|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductPharmaceutical = function(value) {
  return jspb.Message.setOneofWrapperField(this, 89, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductPharmaceutical = function() {
  return this.setMedicinalProductPharmaceutical(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductPharmaceutical = function() {
  return jspb.Message.getField(this, 89) != null;
};


/**
 * optional MedicinalProductUndesirableEffect medicinal_product_undesirable_effect = 90;
 * @return {?proto.google.fhir.r4.core.MedicinalProductUndesirableEffect}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMedicinalProductUndesirableEffect = function() {
  return /** @type{?proto.google.fhir.r4.core.MedicinalProductUndesirableEffect} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect, 90));
};


/**
 * @param {?proto.google.fhir.r4.core.MedicinalProductUndesirableEffect|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMedicinalProductUndesirableEffect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 90, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMedicinalProductUndesirableEffect = function() {
  return this.setMedicinalProductUndesirableEffect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMedicinalProductUndesirableEffect = function() {
  return jspb.Message.getField(this, 90) != null;
};


/**
 * optional MessageDefinition message_definition = 91;
 * @return {?proto.google.fhir.r4.core.MessageDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMessageDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.MessageDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_message_definition_pb.MessageDefinition, 91));
};


/**
 * @param {?proto.google.fhir.r4.core.MessageDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMessageDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 91, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMessageDefinition = function() {
  return this.setMessageDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMessageDefinition = function() {
  return jspb.Message.getField(this, 91) != null;
};


/**
 * optional MessageHeader message_header = 92;
 * @return {?proto.google.fhir.r4.core.MessageHeader}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMessageHeader = function() {
  return /** @type{?proto.google.fhir.r4.core.MessageHeader} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_message_header_pb.MessageHeader, 92));
};


/**
 * @param {?proto.google.fhir.r4.core.MessageHeader|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMessageHeader = function(value) {
  return jspb.Message.setOneofWrapperField(this, 92, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMessageHeader = function() {
  return this.setMessageHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMessageHeader = function() {
  return jspb.Message.getField(this, 92) != null;
};


/**
 * optional MolecularSequence molecular_sequence = 93;
 * @return {?proto.google.fhir.r4.core.MolecularSequence}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getMolecularSequence = function() {
  return /** @type{?proto.google.fhir.r4.core.MolecularSequence} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_molecular_sequence_pb.MolecularSequence, 93));
};


/**
 * @param {?proto.google.fhir.r4.core.MolecularSequence|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setMolecularSequence = function(value) {
  return jspb.Message.setOneofWrapperField(this, 93, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearMolecularSequence = function() {
  return this.setMolecularSequence(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasMolecularSequence = function() {
  return jspb.Message.getField(this, 93) != null;
};


/**
 * optional NamingSystem naming_system = 94;
 * @return {?proto.google.fhir.r4.core.NamingSystem}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getNamingSystem = function() {
  return /** @type{?proto.google.fhir.r4.core.NamingSystem} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_naming_system_pb.NamingSystem, 94));
};


/**
 * @param {?proto.google.fhir.r4.core.NamingSystem|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setNamingSystem = function(value) {
  return jspb.Message.setOneofWrapperField(this, 94, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearNamingSystem = function() {
  return this.setNamingSystem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasNamingSystem = function() {
  return jspb.Message.getField(this, 94) != null;
};


/**
 * optional NutritionOrder nutrition_order = 95;
 * @return {?proto.google.fhir.r4.core.NutritionOrder}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getNutritionOrder = function() {
  return /** @type{?proto.google.fhir.r4.core.NutritionOrder} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_nutrition_order_pb.NutritionOrder, 95));
};


/**
 * @param {?proto.google.fhir.r4.core.NutritionOrder|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setNutritionOrder = function(value) {
  return jspb.Message.setOneofWrapperField(this, 95, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearNutritionOrder = function() {
  return this.setNutritionOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasNutritionOrder = function() {
  return jspb.Message.getField(this, 95) != null;
};


/**
 * optional Observation observation = 96;
 * @return {?proto.google.fhir.r4.core.Observation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getObservation = function() {
  return /** @type{?proto.google.fhir.r4.core.Observation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_observation_pb.Observation, 96));
};


/**
 * @param {?proto.google.fhir.r4.core.Observation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setObservation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 96, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearObservation = function() {
  return this.setObservation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasObservation = function() {
  return jspb.Message.getField(this, 96) != null;
};


/**
 * optional ObservationDefinition observation_definition = 97;
 * @return {?proto.google.fhir.r4.core.ObservationDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getObservationDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.ObservationDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_observation_definition_pb.ObservationDefinition, 97));
};


/**
 * @param {?proto.google.fhir.r4.core.ObservationDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setObservationDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 97, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearObservationDefinition = function() {
  return this.setObservationDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasObservationDefinition = function() {
  return jspb.Message.getField(this, 97) != null;
};


/**
 * optional OperationDefinition operation_definition = 98;
 * @return {?proto.google.fhir.r4.core.OperationDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getOperationDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.OperationDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_operation_definition_pb.OperationDefinition, 98));
};


/**
 * @param {?proto.google.fhir.r4.core.OperationDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setOperationDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 98, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearOperationDefinition = function() {
  return this.setOperationDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasOperationDefinition = function() {
  return jspb.Message.getField(this, 98) != null;
};


/**
 * optional OperationOutcome operation_outcome = 99;
 * @return {?proto.google.fhir.r4.core.OperationOutcome}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getOperationOutcome = function() {
  return /** @type{?proto.google.fhir.r4.core.OperationOutcome} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_operation_outcome_pb.OperationOutcome, 99));
};


/**
 * @param {?proto.google.fhir.r4.core.OperationOutcome|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setOperationOutcome = function(value) {
  return jspb.Message.setOneofWrapperField(this, 99, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearOperationOutcome = function() {
  return this.setOperationOutcome(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasOperationOutcome = function() {
  return jspb.Message.getField(this, 99) != null;
};


/**
 * optional Organization organization = 100;
 * @return {?proto.google.fhir.r4.core.Organization}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getOrganization = function() {
  return /** @type{?proto.google.fhir.r4.core.Organization} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_organization_pb.Organization, 100));
};


/**
 * @param {?proto.google.fhir.r4.core.Organization|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setOrganization = function(value) {
  return jspb.Message.setOneofWrapperField(this, 100, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 100) != null;
};


/**
 * optional OrganizationAffiliation organization_affiliation = 101;
 * @return {?proto.google.fhir.r4.core.OrganizationAffiliation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getOrganizationAffiliation = function() {
  return /** @type{?proto.google.fhir.r4.core.OrganizationAffiliation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation, 101));
};


/**
 * @param {?proto.google.fhir.r4.core.OrganizationAffiliation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setOrganizationAffiliation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 101, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearOrganizationAffiliation = function() {
  return this.setOrganizationAffiliation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasOrganizationAffiliation = function() {
  return jspb.Message.getField(this, 101) != null;
};


/**
 * optional Parameters parameters = 102;
 * @return {?proto.google.fhir.r4.core.Parameters}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getParameters = function() {
  return /** @type{?proto.google.fhir.r4.core.Parameters} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_parameters_pb.Parameters, 102));
};


/**
 * @param {?proto.google.fhir.r4.core.Parameters|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setParameters = function(value) {
  return jspb.Message.setOneofWrapperField(this, 102, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearParameters = function() {
  return this.setParameters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasParameters = function() {
  return jspb.Message.getField(this, 102) != null;
};


/**
 * optional Patient patient = 103;
 * @return {?proto.google.fhir.r4.core.Patient}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPatient = function() {
  return /** @type{?proto.google.fhir.r4.core.Patient} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_patient_pb.Patient, 103));
};


/**
 * @param {?proto.google.fhir.r4.core.Patient|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPatient = function(value) {
  return jspb.Message.setOneofWrapperField(this, 103, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPatient = function() {
  return this.setPatient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPatient = function() {
  return jspb.Message.getField(this, 103) != null;
};


/**
 * optional PaymentNotice payment_notice = 104;
 * @return {?proto.google.fhir.r4.core.PaymentNotice}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPaymentNotice = function() {
  return /** @type{?proto.google.fhir.r4.core.PaymentNotice} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_payment_notice_pb.PaymentNotice, 104));
};


/**
 * @param {?proto.google.fhir.r4.core.PaymentNotice|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPaymentNotice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 104, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPaymentNotice = function() {
  return this.setPaymentNotice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPaymentNotice = function() {
  return jspb.Message.getField(this, 104) != null;
};


/**
 * optional PaymentReconciliation payment_reconciliation = 105;
 * @return {?proto.google.fhir.r4.core.PaymentReconciliation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPaymentReconciliation = function() {
  return /** @type{?proto.google.fhir.r4.core.PaymentReconciliation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation, 105));
};


/**
 * @param {?proto.google.fhir.r4.core.PaymentReconciliation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPaymentReconciliation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 105, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPaymentReconciliation = function() {
  return this.setPaymentReconciliation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPaymentReconciliation = function() {
  return jspb.Message.getField(this, 105) != null;
};


/**
 * optional Person person = 106;
 * @return {?proto.google.fhir.r4.core.Person}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPerson = function() {
  return /** @type{?proto.google.fhir.r4.core.Person} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_person_pb.Person, 106));
};


/**
 * @param {?proto.google.fhir.r4.core.Person|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPerson = function(value) {
  return jspb.Message.setOneofWrapperField(this, 106, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPerson = function() {
  return this.setPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPerson = function() {
  return jspb.Message.getField(this, 106) != null;
};


/**
 * optional PlanDefinition plan_definition = 107;
 * @return {?proto.google.fhir.r4.core.PlanDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPlanDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.PlanDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_plan_definition_pb.PlanDefinition, 107));
};


/**
 * @param {?proto.google.fhir.r4.core.PlanDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPlanDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 107, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPlanDefinition = function() {
  return this.setPlanDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPlanDefinition = function() {
  return jspb.Message.getField(this, 107) != null;
};


/**
 * optional Practitioner practitioner = 108;
 * @return {?proto.google.fhir.r4.core.Practitioner}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPractitioner = function() {
  return /** @type{?proto.google.fhir.r4.core.Practitioner} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_practitioner_pb.Practitioner, 108));
};


/**
 * @param {?proto.google.fhir.r4.core.Practitioner|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPractitioner = function(value) {
  return jspb.Message.setOneofWrapperField(this, 108, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPractitioner = function() {
  return this.setPractitioner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPractitioner = function() {
  return jspb.Message.getField(this, 108) != null;
};


/**
 * optional PractitionerRole practitioner_role = 109;
 * @return {?proto.google.fhir.r4.core.PractitionerRole}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getPractitionerRole = function() {
  return /** @type{?proto.google.fhir.r4.core.PractitionerRole} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_practitioner_role_pb.PractitionerRole, 109));
};


/**
 * @param {?proto.google.fhir.r4.core.PractitionerRole|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setPractitionerRole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 109, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearPractitionerRole = function() {
  return this.setPractitionerRole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasPractitionerRole = function() {
  return jspb.Message.getField(this, 109) != null;
};


/**
 * optional Procedure procedure = 110;
 * @return {?proto.google.fhir.r4.core.Procedure}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getProcedure = function() {
  return /** @type{?proto.google.fhir.r4.core.Procedure} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_procedure_pb.Procedure, 110));
};


/**
 * @param {?proto.google.fhir.r4.core.Procedure|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setProcedure = function(value) {
  return jspb.Message.setOneofWrapperField(this, 110, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearProcedure = function() {
  return this.setProcedure(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasProcedure = function() {
  return jspb.Message.getField(this, 110) != null;
};


/**
 * optional Provenance provenance = 111;
 * @return {?proto.google.fhir.r4.core.Provenance}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getProvenance = function() {
  return /** @type{?proto.google.fhir.r4.core.Provenance} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_provenance_pb.Provenance, 111));
};


/**
 * @param {?proto.google.fhir.r4.core.Provenance|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setProvenance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 111, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearProvenance = function() {
  return this.setProvenance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasProvenance = function() {
  return jspb.Message.getField(this, 111) != null;
};


/**
 * optional Questionnaire questionnaire = 112;
 * @return {?proto.google.fhir.r4.core.Questionnaire}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getQuestionnaire = function() {
  return /** @type{?proto.google.fhir.r4.core.Questionnaire} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_questionnaire_pb.Questionnaire, 112));
};


/**
 * @param {?proto.google.fhir.r4.core.Questionnaire|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setQuestionnaire = function(value) {
  return jspb.Message.setOneofWrapperField(this, 112, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearQuestionnaire = function() {
  return this.setQuestionnaire(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasQuestionnaire = function() {
  return jspb.Message.getField(this, 112) != null;
};


/**
 * optional QuestionnaireResponse questionnaire_response = 113;
 * @return {?proto.google.fhir.r4.core.QuestionnaireResponse}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getQuestionnaireResponse = function() {
  return /** @type{?proto.google.fhir.r4.core.QuestionnaireResponse} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse, 113));
};


/**
 * @param {?proto.google.fhir.r4.core.QuestionnaireResponse|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setQuestionnaireResponse = function(value) {
  return jspb.Message.setOneofWrapperField(this, 113, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearQuestionnaireResponse = function() {
  return this.setQuestionnaireResponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasQuestionnaireResponse = function() {
  return jspb.Message.getField(this, 113) != null;
};


/**
 * optional RelatedPerson related_person = 114;
 * @return {?proto.google.fhir.r4.core.RelatedPerson}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getRelatedPerson = function() {
  return /** @type{?proto.google.fhir.r4.core.RelatedPerson} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_related_person_pb.RelatedPerson, 114));
};


/**
 * @param {?proto.google.fhir.r4.core.RelatedPerson|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setRelatedPerson = function(value) {
  return jspb.Message.setOneofWrapperField(this, 114, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearRelatedPerson = function() {
  return this.setRelatedPerson(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasRelatedPerson = function() {
  return jspb.Message.getField(this, 114) != null;
};


/**
 * optional RequestGroup request_group = 115;
 * @return {?proto.google.fhir.r4.core.RequestGroup}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getRequestGroup = function() {
  return /** @type{?proto.google.fhir.r4.core.RequestGroup} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_request_group_pb.RequestGroup, 115));
};


/**
 * @param {?proto.google.fhir.r4.core.RequestGroup|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setRequestGroup = function(value) {
  return jspb.Message.setOneofWrapperField(this, 115, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearRequestGroup = function() {
  return this.setRequestGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasRequestGroup = function() {
  return jspb.Message.getField(this, 115) != null;
};


/**
 * optional ResearchDefinition research_definition = 116;
 * @return {?proto.google.fhir.r4.core.ResearchDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getResearchDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.ResearchDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_research_definition_pb.ResearchDefinition, 116));
};


/**
 * @param {?proto.google.fhir.r4.core.ResearchDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setResearchDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 116, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearResearchDefinition = function() {
  return this.setResearchDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasResearchDefinition = function() {
  return jspb.Message.getField(this, 116) != null;
};


/**
 * optional ResearchElementDefinition research_element_definition = 117;
 * @return {?proto.google.fhir.r4.core.ResearchElementDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getResearchElementDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.ResearchElementDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition, 117));
};


/**
 * @param {?proto.google.fhir.r4.core.ResearchElementDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setResearchElementDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 117, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearResearchElementDefinition = function() {
  return this.setResearchElementDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasResearchElementDefinition = function() {
  return jspb.Message.getField(this, 117) != null;
};


/**
 * optional ResearchStudy research_study = 118;
 * @return {?proto.google.fhir.r4.core.ResearchStudy}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getResearchStudy = function() {
  return /** @type{?proto.google.fhir.r4.core.ResearchStudy} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_research_study_pb.ResearchStudy, 118));
};


/**
 * @param {?proto.google.fhir.r4.core.ResearchStudy|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setResearchStudy = function(value) {
  return jspb.Message.setOneofWrapperField(this, 118, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearResearchStudy = function() {
  return this.setResearchStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasResearchStudy = function() {
  return jspb.Message.getField(this, 118) != null;
};


/**
 * optional ResearchSubject research_subject = 119;
 * @return {?proto.google.fhir.r4.core.ResearchSubject}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getResearchSubject = function() {
  return /** @type{?proto.google.fhir.r4.core.ResearchSubject} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_research_subject_pb.ResearchSubject, 119));
};


/**
 * @param {?proto.google.fhir.r4.core.ResearchSubject|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setResearchSubject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 119, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearResearchSubject = function() {
  return this.setResearchSubject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasResearchSubject = function() {
  return jspb.Message.getField(this, 119) != null;
};


/**
 * optional RiskAssessment risk_assessment = 120;
 * @return {?proto.google.fhir.r4.core.RiskAssessment}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getRiskAssessment = function() {
  return /** @type{?proto.google.fhir.r4.core.RiskAssessment} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_risk_assessment_pb.RiskAssessment, 120));
};


/**
 * @param {?proto.google.fhir.r4.core.RiskAssessment|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setRiskAssessment = function(value) {
  return jspb.Message.setOneofWrapperField(this, 120, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearRiskAssessment = function() {
  return this.setRiskAssessment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasRiskAssessment = function() {
  return jspb.Message.getField(this, 120) != null;
};


/**
 * optional RiskEvidenceSynthesis risk_evidence_synthesis = 121;
 * @return {?proto.google.fhir.r4.core.RiskEvidenceSynthesis}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getRiskEvidenceSynthesis = function() {
  return /** @type{?proto.google.fhir.r4.core.RiskEvidenceSynthesis} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis, 121));
};


/**
 * @param {?proto.google.fhir.r4.core.RiskEvidenceSynthesis|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setRiskEvidenceSynthesis = function(value) {
  return jspb.Message.setOneofWrapperField(this, 121, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearRiskEvidenceSynthesis = function() {
  return this.setRiskEvidenceSynthesis(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasRiskEvidenceSynthesis = function() {
  return jspb.Message.getField(this, 121) != null;
};


/**
 * optional Schedule schedule = 122;
 * @return {?proto.google.fhir.r4.core.Schedule}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSchedule = function() {
  return /** @type{?proto.google.fhir.r4.core.Schedule} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_schedule_pb.Schedule, 122));
};


/**
 * @param {?proto.google.fhir.r4.core.Schedule|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSchedule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 122, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 122) != null;
};


/**
 * optional SearchParameter search_parameter = 123;
 * @return {?proto.google.fhir.r4.core.SearchParameter}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSearchParameter = function() {
  return /** @type{?proto.google.fhir.r4.core.SearchParameter} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_search_parameter_pb.SearchParameter, 123));
};


/**
 * @param {?proto.google.fhir.r4.core.SearchParameter|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSearchParameter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 123, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSearchParameter = function() {
  return this.setSearchParameter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSearchParameter = function() {
  return jspb.Message.getField(this, 123) != null;
};


/**
 * optional ServiceRequest service_request = 124;
 * @return {?proto.google.fhir.r4.core.ServiceRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getServiceRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.ServiceRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_service_request_pb.ServiceRequest, 124));
};


/**
 * @param {?proto.google.fhir.r4.core.ServiceRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setServiceRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 124, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearServiceRequest = function() {
  return this.setServiceRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasServiceRequest = function() {
  return jspb.Message.getField(this, 124) != null;
};


/**
 * optional Slot slot = 125;
 * @return {?proto.google.fhir.r4.core.Slot}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSlot = function() {
  return /** @type{?proto.google.fhir.r4.core.Slot} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_slot_pb.Slot, 125));
};


/**
 * @param {?proto.google.fhir.r4.core.Slot|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSlot = function(value) {
  return jspb.Message.setOneofWrapperField(this, 125, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 125) != null;
};


/**
 * optional Specimen specimen = 126;
 * @return {?proto.google.fhir.r4.core.Specimen}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSpecimen = function() {
  return /** @type{?proto.google.fhir.r4.core.Specimen} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_specimen_pb.Specimen, 126));
};


/**
 * @param {?proto.google.fhir.r4.core.Specimen|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSpecimen = function(value) {
  return jspb.Message.setOneofWrapperField(this, 126, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSpecimen = function() {
  return this.setSpecimen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSpecimen = function() {
  return jspb.Message.getField(this, 126) != null;
};


/**
 * optional SpecimenDefinition specimen_definition = 127;
 * @return {?proto.google.fhir.r4.core.SpecimenDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSpecimenDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.SpecimenDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition, 127));
};


/**
 * @param {?proto.google.fhir.r4.core.SpecimenDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSpecimenDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 127, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSpecimenDefinition = function() {
  return this.setSpecimenDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSpecimenDefinition = function() {
  return jspb.Message.getField(this, 127) != null;
};


/**
 * optional StructureDefinition structure_definition = 128;
 * @return {?proto.google.fhir.r4.core.StructureDefinition}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getStructureDefinition = function() {
  return /** @type{?proto.google.fhir.r4.core.StructureDefinition} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_structure_definition_pb.StructureDefinition, 128));
};


/**
 * @param {?proto.google.fhir.r4.core.StructureDefinition|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setStructureDefinition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 128, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearStructureDefinition = function() {
  return this.setStructureDefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasStructureDefinition = function() {
  return jspb.Message.getField(this, 128) != null;
};


/**
 * optional StructureMap structure_map = 129;
 * @return {?proto.google.fhir.r4.core.StructureMap}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getStructureMap = function() {
  return /** @type{?proto.google.fhir.r4.core.StructureMap} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_structure_map_pb.StructureMap, 129));
};


/**
 * @param {?proto.google.fhir.r4.core.StructureMap|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setStructureMap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 129, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearStructureMap = function() {
  return this.setStructureMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasStructureMap = function() {
  return jspb.Message.getField(this, 129) != null;
};


/**
 * optional Subscription subscription = 130;
 * @return {?proto.google.fhir.r4.core.Subscription}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubscription = function() {
  return /** @type{?proto.google.fhir.r4.core.Subscription} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_subscription_pb.Subscription, 130));
};


/**
 * @param {?proto.google.fhir.r4.core.Subscription|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubscription = function(value) {
  return jspb.Message.setOneofWrapperField(this, 130, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubscription = function() {
  return this.setSubscription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubscription = function() {
  return jspb.Message.getField(this, 130) != null;
};


/**
 * optional Substance substance = 131;
 * @return {?proto.google.fhir.r4.core.Substance}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstance = function() {
  return /** @type{?proto.google.fhir.r4.core.Substance} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_pb.Substance, 131));
};


/**
 * @param {?proto.google.fhir.r4.core.Substance|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 131, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstance = function() {
  return this.setSubstance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstance = function() {
  return jspb.Message.getField(this, 131) != null;
};


/**
 * optional SubstanceNucleicAcid substance_nucleic_acid = 132;
 * @return {?proto.google.fhir.r4.core.SubstanceNucleicAcid}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstanceNucleicAcid = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstanceNucleicAcid} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid, 132));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstanceNucleicAcid|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstanceNucleicAcid = function(value) {
  return jspb.Message.setOneofWrapperField(this, 132, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstanceNucleicAcid = function() {
  return this.setSubstanceNucleicAcid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstanceNucleicAcid = function() {
  return jspb.Message.getField(this, 132) != null;
};


/**
 * optional SubstancePolymer substance_polymer = 133;
 * @return {?proto.google.fhir.r4.core.SubstancePolymer}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstancePolymer = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstancePolymer} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_polymer_pb.SubstancePolymer, 133));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstancePolymer|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstancePolymer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 133, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstancePolymer = function() {
  return this.setSubstancePolymer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstancePolymer = function() {
  return jspb.Message.getField(this, 133) != null;
};


/**
 * optional SubstanceProtein substance_protein = 134;
 * @return {?proto.google.fhir.r4.core.SubstanceProtein}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstanceProtein = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstanceProtein} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_protein_pb.SubstanceProtein, 134));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstanceProtein|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstanceProtein = function(value) {
  return jspb.Message.setOneofWrapperField(this, 134, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstanceProtein = function() {
  return this.setSubstanceProtein(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstanceProtein = function() {
  return jspb.Message.getField(this, 134) != null;
};


/**
 * optional SubstanceReferenceInformation substance_reference_information = 135;
 * @return {?proto.google.fhir.r4.core.SubstanceReferenceInformation}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstanceReferenceInformation = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstanceReferenceInformation} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation, 135));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstanceReferenceInformation|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstanceReferenceInformation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 135, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstanceReferenceInformation = function() {
  return this.setSubstanceReferenceInformation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstanceReferenceInformation = function() {
  return jspb.Message.getField(this, 135) != null;
};


/**
 * optional SubstanceSourceMaterial substance_source_material = 136;
 * @return {?proto.google.fhir.r4.core.SubstanceSourceMaterial}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstanceSourceMaterial = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstanceSourceMaterial} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial, 136));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstanceSourceMaterial|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstanceSourceMaterial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 136, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstanceSourceMaterial = function() {
  return this.setSubstanceSourceMaterial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstanceSourceMaterial = function() {
  return jspb.Message.getField(this, 136) != null;
};


/**
 * optional SubstanceSpecification substance_specification = 137;
 * @return {?proto.google.fhir.r4.core.SubstanceSpecification}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSubstanceSpecification = function() {
  return /** @type{?proto.google.fhir.r4.core.SubstanceSpecification} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_substance_specification_pb.SubstanceSpecification, 137));
};


/**
 * @param {?proto.google.fhir.r4.core.SubstanceSpecification|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSubstanceSpecification = function(value) {
  return jspb.Message.setOneofWrapperField(this, 137, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSubstanceSpecification = function() {
  return this.setSubstanceSpecification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSubstanceSpecification = function() {
  return jspb.Message.getField(this, 137) != null;
};


/**
 * optional SupplyDelivery supply_delivery = 138;
 * @return {?proto.google.fhir.r4.core.SupplyDelivery}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSupplyDelivery = function() {
  return /** @type{?proto.google.fhir.r4.core.SupplyDelivery} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_supply_delivery_pb.SupplyDelivery, 138));
};


/**
 * @param {?proto.google.fhir.r4.core.SupplyDelivery|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSupplyDelivery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 138, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSupplyDelivery = function() {
  return this.setSupplyDelivery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSupplyDelivery = function() {
  return jspb.Message.getField(this, 138) != null;
};


/**
 * optional SupplyRequest supply_request = 139;
 * @return {?proto.google.fhir.r4.core.SupplyRequest}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getSupplyRequest = function() {
  return /** @type{?proto.google.fhir.r4.core.SupplyRequest} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_supply_request_pb.SupplyRequest, 139));
};


/**
 * @param {?proto.google.fhir.r4.core.SupplyRequest|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setSupplyRequest = function(value) {
  return jspb.Message.setOneofWrapperField(this, 139, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearSupplyRequest = function() {
  return this.setSupplyRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasSupplyRequest = function() {
  return jspb.Message.getField(this, 139) != null;
};


/**
 * optional Task task = 140;
 * @return {?proto.google.fhir.r4.core.Task}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getTask = function() {
  return /** @type{?proto.google.fhir.r4.core.Task} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_task_pb.Task, 140));
};


/**
 * @param {?proto.google.fhir.r4.core.Task|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setTask = function(value) {
  return jspb.Message.setOneofWrapperField(this, 140, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearTask = function() {
  return this.setTask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasTask = function() {
  return jspb.Message.getField(this, 140) != null;
};


/**
 * optional TerminologyCapabilities terminology_capabilities = 141;
 * @return {?proto.google.fhir.r4.core.TerminologyCapabilities}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getTerminologyCapabilities = function() {
  return /** @type{?proto.google.fhir.r4.core.TerminologyCapabilities} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities, 141));
};


/**
 * @param {?proto.google.fhir.r4.core.TerminologyCapabilities|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setTerminologyCapabilities = function(value) {
  return jspb.Message.setOneofWrapperField(this, 141, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearTerminologyCapabilities = function() {
  return this.setTerminologyCapabilities(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasTerminologyCapabilities = function() {
  return jspb.Message.getField(this, 141) != null;
};


/**
 * optional TestReport test_report = 142;
 * @return {?proto.google.fhir.r4.core.TestReport}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getTestReport = function() {
  return /** @type{?proto.google.fhir.r4.core.TestReport} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_test_report_pb.TestReport, 142));
};


/**
 * @param {?proto.google.fhir.r4.core.TestReport|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setTestReport = function(value) {
  return jspb.Message.setOneofWrapperField(this, 142, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearTestReport = function() {
  return this.setTestReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasTestReport = function() {
  return jspb.Message.getField(this, 142) != null;
};


/**
 * optional TestScript test_script = 143;
 * @return {?proto.google.fhir.r4.core.TestScript}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getTestScript = function() {
  return /** @type{?proto.google.fhir.r4.core.TestScript} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_test_script_pb.TestScript, 143));
};


/**
 * @param {?proto.google.fhir.r4.core.TestScript|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setTestScript = function(value) {
  return jspb.Message.setOneofWrapperField(this, 143, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearTestScript = function() {
  return this.setTestScript(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasTestScript = function() {
  return jspb.Message.getField(this, 143) != null;
};


/**
 * optional ValueSet value_set = 144;
 * @return {?proto.google.fhir.r4.core.ValueSet}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getValueSet = function() {
  return /** @type{?proto.google.fhir.r4.core.ValueSet} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_value_set_pb.ValueSet, 144));
};


/**
 * @param {?proto.google.fhir.r4.core.ValueSet|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setValueSet = function(value) {
  return jspb.Message.setOneofWrapperField(this, 144, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearValueSet = function() {
  return this.setValueSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasValueSet = function() {
  return jspb.Message.getField(this, 144) != null;
};


/**
 * optional VerificationResult verification_result = 145;
 * @return {?proto.google.fhir.r4.core.VerificationResult}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getVerificationResult = function() {
  return /** @type{?proto.google.fhir.r4.core.VerificationResult} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_verification_result_pb.VerificationResult, 145));
};


/**
 * @param {?proto.google.fhir.r4.core.VerificationResult|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setVerificationResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 145, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearVerificationResult = function() {
  return this.setVerificationResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasVerificationResult = function() {
  return jspb.Message.getField(this, 145) != null;
};


/**
 * optional VisionPrescription vision_prescription = 146;
 * @return {?proto.google.fhir.r4.core.VisionPrescription}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.getVisionPrescription = function() {
  return /** @type{?proto.google.fhir.r4.core.VisionPrescription} */ (
    jspb.Message.getWrapperField(this, proto_r4_core_resources_vision_prescription_pb.VisionPrescription, 146));
};


/**
 * @param {?proto.google.fhir.r4.core.VisionPrescription|undefined} value
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
*/
proto.google.fhir.r4.core.ContainedResource.prototype.setVisionPrescription = function(value) {
  return jspb.Message.setOneofWrapperField(this, 146, proto.google.fhir.r4.core.ContainedResource.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.fhir.r4.core.ContainedResource} returns this
 */
proto.google.fhir.r4.core.ContainedResource.prototype.clearVisionPrescription = function() {
  return this.setVisionPrescription(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.fhir.r4.core.ContainedResource.prototype.hasVisionPrescription = function() {
  return jspb.Message.getField(this, 146) != null;
};


goog.object.extend(exports, proto.google.fhir.r4.core);
