// package: google.fhir.r4.core
// file: proto/r4/core/resources/bundle_and_contained_resource.proto

import * as jspb from "google-protobuf";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_codes_pb from "../../../../proto/r4/core/codes_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";
import * as proto_r4_core_resources_account_pb from "../../../../proto/r4/core/resources/account_pb";
import * as proto_r4_core_resources_activity_definition_pb from "../../../../proto/r4/core/resources/activity_definition_pb";
import * as proto_r4_core_resources_adverse_event_pb from "../../../../proto/r4/core/resources/adverse_event_pb";
import * as proto_r4_core_resources_allergy_intolerance_pb from "../../../../proto/r4/core/resources/allergy_intolerance_pb";
import * as proto_r4_core_resources_appointment_pb from "../../../../proto/r4/core/resources/appointment_pb";
import * as proto_r4_core_resources_appointment_response_pb from "../../../../proto/r4/core/resources/appointment_response_pb";
import * as proto_r4_core_resources_audit_event_pb from "../../../../proto/r4/core/resources/audit_event_pb";
import * as proto_r4_core_resources_basic_pb from "../../../../proto/r4/core/resources/basic_pb";
import * as proto_r4_core_resources_binary_pb from "../../../../proto/r4/core/resources/binary_pb";
import * as proto_r4_core_resources_biologically_derived_product_pb from "../../../../proto/r4/core/resources/biologically_derived_product_pb";
import * as proto_r4_core_resources_body_structure_pb from "../../../../proto/r4/core/resources/body_structure_pb";
import * as proto_r4_core_resources_capability_statement_pb from "../../../../proto/r4/core/resources/capability_statement_pb";
import * as proto_r4_core_resources_care_plan_pb from "../../../../proto/r4/core/resources/care_plan_pb";
import * as proto_r4_core_resources_care_team_pb from "../../../../proto/r4/core/resources/care_team_pb";
import * as proto_r4_core_resources_catalog_entry_pb from "../../../../proto/r4/core/resources/catalog_entry_pb";
import * as proto_r4_core_resources_charge_item_pb from "../../../../proto/r4/core/resources/charge_item_pb";
import * as proto_r4_core_resources_charge_item_definition_pb from "../../../../proto/r4/core/resources/charge_item_definition_pb";
import * as proto_r4_core_resources_claim_pb from "../../../../proto/r4/core/resources/claim_pb";
import * as proto_r4_core_resources_claim_response_pb from "../../../../proto/r4/core/resources/claim_response_pb";
import * as proto_r4_core_resources_clinical_impression_pb from "../../../../proto/r4/core/resources/clinical_impression_pb";
import * as proto_r4_core_resources_code_system_pb from "../../../../proto/r4/core/resources/code_system_pb";
import * as proto_r4_core_resources_communication_pb from "../../../../proto/r4/core/resources/communication_pb";
import * as proto_r4_core_resources_communication_request_pb from "../../../../proto/r4/core/resources/communication_request_pb";
import * as proto_r4_core_resources_compartment_definition_pb from "../../../../proto/r4/core/resources/compartment_definition_pb";
import * as proto_r4_core_resources_composition_pb from "../../../../proto/r4/core/resources/composition_pb";
import * as proto_r4_core_resources_concept_map_pb from "../../../../proto/r4/core/resources/concept_map_pb";
import * as proto_r4_core_resources_condition_pb from "../../../../proto/r4/core/resources/condition_pb";
import * as proto_r4_core_resources_consent_pb from "../../../../proto/r4/core/resources/consent_pb";
import * as proto_r4_core_resources_contract_pb from "../../../../proto/r4/core/resources/contract_pb";
import * as proto_r4_core_resources_coverage_pb from "../../../../proto/r4/core/resources/coverage_pb";
import * as proto_r4_core_resources_coverage_eligibility_request_pb from "../../../../proto/r4/core/resources/coverage_eligibility_request_pb";
import * as proto_r4_core_resources_coverage_eligibility_response_pb from "../../../../proto/r4/core/resources/coverage_eligibility_response_pb";
import * as proto_r4_core_resources_detected_issue_pb from "../../../../proto/r4/core/resources/detected_issue_pb";
import * as proto_r4_core_resources_device_pb from "../../../../proto/r4/core/resources/device_pb";
import * as proto_r4_core_resources_device_definition_pb from "../../../../proto/r4/core/resources/device_definition_pb";
import * as proto_r4_core_resources_device_metric_pb from "../../../../proto/r4/core/resources/device_metric_pb";
import * as proto_r4_core_resources_device_request_pb from "../../../../proto/r4/core/resources/device_request_pb";
import * as proto_r4_core_resources_device_use_statement_pb from "../../../../proto/r4/core/resources/device_use_statement_pb";
import * as proto_r4_core_resources_diagnostic_report_pb from "../../../../proto/r4/core/resources/diagnostic_report_pb";
import * as proto_r4_core_resources_document_manifest_pb from "../../../../proto/r4/core/resources/document_manifest_pb";
import * as proto_r4_core_resources_document_reference_pb from "../../../../proto/r4/core/resources/document_reference_pb";
import * as proto_r4_core_resources_effect_evidence_synthesis_pb from "../../../../proto/r4/core/resources/effect_evidence_synthesis_pb";
import * as proto_r4_core_resources_encounter_pb from "../../../../proto/r4/core/resources/encounter_pb";
import * as proto_r4_core_resources_endpoint_pb from "../../../../proto/r4/core/resources/endpoint_pb";
import * as proto_r4_core_resources_enrollment_request_pb from "../../../../proto/r4/core/resources/enrollment_request_pb";
import * as proto_r4_core_resources_enrollment_response_pb from "../../../../proto/r4/core/resources/enrollment_response_pb";
import * as proto_r4_core_resources_episode_of_care_pb from "../../../../proto/r4/core/resources/episode_of_care_pb";
import * as proto_r4_core_resources_event_definition_pb from "../../../../proto/r4/core/resources/event_definition_pb";
import * as proto_r4_core_resources_evidence_pb from "../../../../proto/r4/core/resources/evidence_pb";
import * as proto_r4_core_resources_evidence_variable_pb from "../../../../proto/r4/core/resources/evidence_variable_pb";
import * as proto_r4_core_resources_example_scenario_pb from "../../../../proto/r4/core/resources/example_scenario_pb";
import * as proto_r4_core_resources_explanation_of_benefit_pb from "../../../../proto/r4/core/resources/explanation_of_benefit_pb";
import * as proto_r4_core_resources_family_member_history_pb from "../../../../proto/r4/core/resources/family_member_history_pb";
import * as proto_r4_core_resources_flag_pb from "../../../../proto/r4/core/resources/flag_pb";
import * as proto_r4_core_resources_goal_pb from "../../../../proto/r4/core/resources/goal_pb";
import * as proto_r4_core_resources_graph_definition_pb from "../../../../proto/r4/core/resources/graph_definition_pb";
import * as proto_r4_core_resources_group_pb from "../../../../proto/r4/core/resources/group_pb";
import * as proto_r4_core_resources_guidance_response_pb from "../../../../proto/r4/core/resources/guidance_response_pb";
import * as proto_r4_core_resources_healthcare_service_pb from "../../../../proto/r4/core/resources/healthcare_service_pb";
import * as proto_r4_core_resources_imaging_study_pb from "../../../../proto/r4/core/resources/imaging_study_pb";
import * as proto_r4_core_resources_immunization_pb from "../../../../proto/r4/core/resources/immunization_pb";
import * as proto_r4_core_resources_immunization_evaluation_pb from "../../../../proto/r4/core/resources/immunization_evaluation_pb";
import * as proto_r4_core_resources_immunization_recommendation_pb from "../../../../proto/r4/core/resources/immunization_recommendation_pb";
import * as proto_r4_core_resources_implementation_guide_pb from "../../../../proto/r4/core/resources/implementation_guide_pb";
import * as proto_r4_core_resources_insurance_plan_pb from "../../../../proto/r4/core/resources/insurance_plan_pb";
import * as proto_r4_core_resources_invoice_pb from "../../../../proto/r4/core/resources/invoice_pb";
import * as proto_r4_core_resources_library_pb from "../../../../proto/r4/core/resources/library_pb";
import * as proto_r4_core_resources_linkage_pb from "../../../../proto/r4/core/resources/linkage_pb";
import * as proto_r4_core_resources_list_pb from "../../../../proto/r4/core/resources/list_pb";
import * as proto_r4_core_resources_location_pb from "../../../../proto/r4/core/resources/location_pb";
import * as proto_r4_core_resources_measure_pb from "../../../../proto/r4/core/resources/measure_pb";
import * as proto_r4_core_resources_measure_report_pb from "../../../../proto/r4/core/resources/measure_report_pb";
import * as proto_r4_core_resources_media_pb from "../../../../proto/r4/core/resources/media_pb";
import * as proto_r4_core_resources_medication_pb from "../../../../proto/r4/core/resources/medication_pb";
import * as proto_r4_core_resources_medication_administration_pb from "../../../../proto/r4/core/resources/medication_administration_pb";
import * as proto_r4_core_resources_medication_dispense_pb from "../../../../proto/r4/core/resources/medication_dispense_pb";
import * as proto_r4_core_resources_medication_knowledge_pb from "../../../../proto/r4/core/resources/medication_knowledge_pb";
import * as proto_r4_core_resources_medication_request_pb from "../../../../proto/r4/core/resources/medication_request_pb";
import * as proto_r4_core_resources_medication_statement_pb from "../../../../proto/r4/core/resources/medication_statement_pb";
import * as proto_r4_core_resources_medicinal_product_pb from "../../../../proto/r4/core/resources/medicinal_product_pb";
import * as proto_r4_core_resources_medicinal_product_authorization_pb from "../../../../proto/r4/core/resources/medicinal_product_authorization_pb";
import * as proto_r4_core_resources_medicinal_product_contraindication_pb from "../../../../proto/r4/core/resources/medicinal_product_contraindication_pb";
import * as proto_r4_core_resources_medicinal_product_indication_pb from "../../../../proto/r4/core/resources/medicinal_product_indication_pb";
import * as proto_r4_core_resources_medicinal_product_ingredient_pb from "../../../../proto/r4/core/resources/medicinal_product_ingredient_pb";
import * as proto_r4_core_resources_medicinal_product_interaction_pb from "../../../../proto/r4/core/resources/medicinal_product_interaction_pb";
import * as proto_r4_core_resources_medicinal_product_manufactured_pb from "../../../../proto/r4/core/resources/medicinal_product_manufactured_pb";
import * as proto_r4_core_resources_medicinal_product_packaged_pb from "../../../../proto/r4/core/resources/medicinal_product_packaged_pb";
import * as proto_r4_core_resources_medicinal_product_pharmaceutical_pb from "../../../../proto/r4/core/resources/medicinal_product_pharmaceutical_pb";
import * as proto_r4_core_resources_medicinal_product_undesirable_effect_pb from "../../../../proto/r4/core/resources/medicinal_product_undesirable_effect_pb";
import * as proto_r4_core_resources_message_definition_pb from "../../../../proto/r4/core/resources/message_definition_pb";
import * as proto_r4_core_resources_message_header_pb from "../../../../proto/r4/core/resources/message_header_pb";
import * as proto_r4_core_resources_metadata_resource_pb from "../../../../proto/r4/core/resources/metadata_resource_pb";
import * as proto_r4_core_resources_molecular_sequence_pb from "../../../../proto/r4/core/resources/molecular_sequence_pb";
import * as proto_r4_core_resources_naming_system_pb from "../../../../proto/r4/core/resources/naming_system_pb";
import * as proto_r4_core_resources_nutrition_order_pb from "../../../../proto/r4/core/resources/nutrition_order_pb";
import * as proto_r4_core_resources_observation_pb from "../../../../proto/r4/core/resources/observation_pb";
import * as proto_r4_core_resources_observation_definition_pb from "../../../../proto/r4/core/resources/observation_definition_pb";
import * as proto_r4_core_resources_operation_definition_pb from "../../../../proto/r4/core/resources/operation_definition_pb";
import * as proto_r4_core_resources_operation_outcome_pb from "../../../../proto/r4/core/resources/operation_outcome_pb";
import * as proto_r4_core_resources_organization_pb from "../../../../proto/r4/core/resources/organization_pb";
import * as proto_r4_core_resources_organization_affiliation_pb from "../../../../proto/r4/core/resources/organization_affiliation_pb";
import * as proto_r4_core_resources_parameters_pb from "../../../../proto/r4/core/resources/parameters_pb";
import * as proto_r4_core_resources_patient_pb from "../../../../proto/r4/core/resources/patient_pb";
import * as proto_r4_core_resources_payment_notice_pb from "../../../../proto/r4/core/resources/payment_notice_pb";
import * as proto_r4_core_resources_payment_reconciliation_pb from "../../../../proto/r4/core/resources/payment_reconciliation_pb";
import * as proto_r4_core_resources_person_pb from "../../../../proto/r4/core/resources/person_pb";
import * as proto_r4_core_resources_plan_definition_pb from "../../../../proto/r4/core/resources/plan_definition_pb";
import * as proto_r4_core_resources_practitioner_pb from "../../../../proto/r4/core/resources/practitioner_pb";
import * as proto_r4_core_resources_practitioner_role_pb from "../../../../proto/r4/core/resources/practitioner_role_pb";
import * as proto_r4_core_resources_procedure_pb from "../../../../proto/r4/core/resources/procedure_pb";
import * as proto_r4_core_resources_provenance_pb from "../../../../proto/r4/core/resources/provenance_pb";
import * as proto_r4_core_resources_questionnaire_pb from "../../../../proto/r4/core/resources/questionnaire_pb";
import * as proto_r4_core_resources_questionnaire_response_pb from "../../../../proto/r4/core/resources/questionnaire_response_pb";
import * as proto_r4_core_resources_related_person_pb from "../../../../proto/r4/core/resources/related_person_pb";
import * as proto_r4_core_resources_request_group_pb from "../../../../proto/r4/core/resources/request_group_pb";
import * as proto_r4_core_resources_research_definition_pb from "../../../../proto/r4/core/resources/research_definition_pb";
import * as proto_r4_core_resources_research_element_definition_pb from "../../../../proto/r4/core/resources/research_element_definition_pb";
import * as proto_r4_core_resources_research_study_pb from "../../../../proto/r4/core/resources/research_study_pb";
import * as proto_r4_core_resources_research_subject_pb from "../../../../proto/r4/core/resources/research_subject_pb";
import * as proto_r4_core_resources_risk_assessment_pb from "../../../../proto/r4/core/resources/risk_assessment_pb";
import * as proto_r4_core_resources_risk_evidence_synthesis_pb from "../../../../proto/r4/core/resources/risk_evidence_synthesis_pb";
import * as proto_r4_core_resources_schedule_pb from "../../../../proto/r4/core/resources/schedule_pb";
import * as proto_r4_core_resources_search_parameter_pb from "../../../../proto/r4/core/resources/search_parameter_pb";
import * as proto_r4_core_resources_service_request_pb from "../../../../proto/r4/core/resources/service_request_pb";
import * as proto_r4_core_resources_slot_pb from "../../../../proto/r4/core/resources/slot_pb";
import * as proto_r4_core_resources_specimen_pb from "../../../../proto/r4/core/resources/specimen_pb";
import * as proto_r4_core_resources_specimen_definition_pb from "../../../../proto/r4/core/resources/specimen_definition_pb";
import * as proto_r4_core_resources_structure_definition_pb from "../../../../proto/r4/core/resources/structure_definition_pb";
import * as proto_r4_core_resources_structure_map_pb from "../../../../proto/r4/core/resources/structure_map_pb";
import * as proto_r4_core_resources_subscription_pb from "../../../../proto/r4/core/resources/subscription_pb";
import * as proto_r4_core_resources_substance_pb from "../../../../proto/r4/core/resources/substance_pb";
import * as proto_r4_core_resources_substance_nucleic_acid_pb from "../../../../proto/r4/core/resources/substance_nucleic_acid_pb";
import * as proto_r4_core_resources_substance_polymer_pb from "../../../../proto/r4/core/resources/substance_polymer_pb";
import * as proto_r4_core_resources_substance_protein_pb from "../../../../proto/r4/core/resources/substance_protein_pb";
import * as proto_r4_core_resources_substance_reference_information_pb from "../../../../proto/r4/core/resources/substance_reference_information_pb";
import * as proto_r4_core_resources_substance_source_material_pb from "../../../../proto/r4/core/resources/substance_source_material_pb";
import * as proto_r4_core_resources_substance_specification_pb from "../../../../proto/r4/core/resources/substance_specification_pb";
import * as proto_r4_core_resources_supply_delivery_pb from "../../../../proto/r4/core/resources/supply_delivery_pb";
import * as proto_r4_core_resources_supply_request_pb from "../../../../proto/r4/core/resources/supply_request_pb";
import * as proto_r4_core_resources_task_pb from "../../../../proto/r4/core/resources/task_pb";
import * as proto_r4_core_resources_terminology_capabilities_pb from "../../../../proto/r4/core/resources/terminology_capabilities_pb";
import * as proto_r4_core_resources_test_report_pb from "../../../../proto/r4/core/resources/test_report_pb";
import * as proto_r4_core_resources_test_script_pb from "../../../../proto/r4/core/resources/test_script_pb";
import * as proto_r4_core_resources_value_set_pb from "../../../../proto/r4/core/resources/value_set_pb";
import * as proto_r4_core_resources_verification_result_pb from "../../../../proto/r4/core/resources/verification_result_pb";
import * as proto_r4_core_resources_vision_prescription_pb from "../../../../proto/r4/core/resources/vision_prescription_pb";

export class Bundle extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): proto_r4_core_datatypes_pb.Id | undefined;
  setId(value?: proto_r4_core_datatypes_pb.Id): void;

  hasMeta(): boolean;
  clearMeta(): void;
  getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
  setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

  hasImplicitRules(): boolean;
  clearImplicitRules(): void;
  getImplicitRules(): proto_r4_core_datatypes_pb.Uri | undefined;
  setImplicitRules(value?: proto_r4_core_datatypes_pb.Uri): void;

  hasLanguage(): boolean;
  clearLanguage(): void;
  getLanguage(): proto_r4_core_datatypes_pb.Code | undefined;
  setLanguage(value?: proto_r4_core_datatypes_pb.Code): void;

  hasIdentifier(): boolean;
  clearIdentifier(): void;
  getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
  setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

  hasType(): boolean;
  clearType(): void;
  getType(): Bundle.TypeCode | undefined;
  setType(value?: Bundle.TypeCode): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): proto_r4_core_datatypes_pb.Instant | undefined;
  setTimestamp(value?: proto_r4_core_datatypes_pb.Instant): void;

  hasTotal(): boolean;
  clearTotal(): void;
  getTotal(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
  setTotal(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

  clearLinkList(): void;
  getLinkList(): Array<Bundle.Link>;
  setLinkList(value: Array<Bundle.Link>): void;
  addLink(value?: Bundle.Link, index?: number): Bundle.Link;

  clearEntryList(): void;
  getEntryList(): Array<Bundle.Entry>;
  setEntryList(value: Array<Bundle.Entry>): void;
  addEntry(value?: Bundle.Entry, index?: number): Bundle.Entry;

  hasSignature(): boolean;
  clearSignature(): void;
  getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
  setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Bundle.AsObject;
  static toObject(includeInstance: boolean, msg: Bundle): Bundle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Bundle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Bundle;
  static deserializeBinaryFromReader(message: Bundle, reader: jspb.BinaryReader): Bundle;
}

export namespace Bundle {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
    type?: Bundle.TypeCode.AsObject,
    timestamp?: proto_r4_core_datatypes_pb.Instant.AsObject,
    total?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
    linkList: Array<Bundle.Link.AsObject>,
    entryList: Array<Bundle.Entry.AsObject>,
    signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
  }

  export class TypeCode extends jspb.Message {
    getValue(): proto_r4_core_codes_pb.BundleTypeCode.ValueMap[keyof proto_r4_core_codes_pb.BundleTypeCode.ValueMap];
    setValue(value: proto_r4_core_codes_pb.BundleTypeCode.ValueMap[keyof proto_r4_core_codes_pb.BundleTypeCode.ValueMap]): void;

    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TypeCode.AsObject;
    static toObject(includeInstance: boolean, msg: TypeCode): TypeCode.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TypeCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TypeCode;
    static deserializeBinaryFromReader(message: TypeCode, reader: jspb.BinaryReader): TypeCode;
  }

  export namespace TypeCode {
    export type AsObject = {
      value: proto_r4_core_codes_pb.BundleTypeCode.ValueMap[keyof proto_r4_core_codes_pb.BundleTypeCode.ValueMap],
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
    }
  }

  export class Link extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasRelation(): boolean;
    clearRelation(): void;
    getRelation(): proto_r4_core_datatypes_pb.String | undefined;
    setRelation(value?: proto_r4_core_datatypes_pb.String): void;

    hasUrl(): boolean;
    clearUrl(): void;
    getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
    setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Link.AsObject;
    static toObject(includeInstance: boolean, msg: Link): Link.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Link, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Link;
    static deserializeBinaryFromReader(message: Link, reader: jspb.BinaryReader): Link;
  }

  export namespace Link {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      relation?: proto_r4_core_datatypes_pb.String.AsObject,
      url?: proto_r4_core_datatypes_pb.Uri.AsObject,
    }
  }

  export class Entry extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtensionList(): void;
    getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtensionList(): void;
    getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearLinkList(): void;
    getLinkList(): Array<Bundle.Link>;
    setLinkList(value: Array<Bundle.Link>): void;
    addLink(value?: Bundle.Link, index?: number): Bundle.Link;

    hasFullUrl(): boolean;
    clearFullUrl(): void;
    getFullUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
    setFullUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): ContainedResource | undefined;
    setResource(value?: ContainedResource): void;

    hasSearch(): boolean;
    clearSearch(): void;
    getSearch(): Bundle.Entry.Search | undefined;
    setSearch(value?: Bundle.Entry.Search): void;

    hasRequest(): boolean;
    clearRequest(): void;
    getRequest(): Bundle.Entry.Request | undefined;
    setRequest(value?: Bundle.Entry.Request): void;

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): Bundle.Entry.Response | undefined;
    setResponse(value?: Bundle.Entry.Response): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entry.AsObject;
    static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entry;
    static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
  }

  export namespace Entry {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      linkList: Array<Bundle.Link.AsObject>,
      fullUrl?: proto_r4_core_datatypes_pb.Uri.AsObject,
      resource?: ContainedResource.AsObject,
      search?: Bundle.Entry.Search.AsObject,
      request?: Bundle.Entry.Request.AsObject,
      response?: Bundle.Entry.Response.AsObject,
    }

    export class Search extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasMode(): boolean;
      clearMode(): void;
      getMode(): Bundle.Entry.Search.ModeCode | undefined;
      setMode(value?: Bundle.Entry.Search.ModeCode): void;

      hasScore(): boolean;
      clearScore(): void;
      getScore(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setScore(value?: proto_r4_core_datatypes_pb.Decimal): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Search.AsObject;
      static toObject(includeInstance: boolean, msg: Search): Search.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Search, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Search;
      static deserializeBinaryFromReader(message: Search, reader: jspb.BinaryReader): Search;
    }

    export namespace Search {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        mode?: Bundle.Entry.Search.ModeCode.AsObject,
        score?: proto_r4_core_datatypes_pb.Decimal.AsObject,
      }

      export class ModeCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ModeCode.AsObject;
        static toObject(includeInstance: boolean, msg: ModeCode): ModeCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ModeCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ModeCode;
        static deserializeBinaryFromReader(message: ModeCode, reader: jspb.BinaryReader): ModeCode;
      }

      export namespace ModeCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap[keyof proto_r4_core_codes_pb.SearchEntryModeCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class Request extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasMethod(): boolean;
      clearMethod(): void;
      getMethod(): Bundle.Entry.Request.MethodCode | undefined;
      setMethod(value?: Bundle.Entry.Request.MethodCode): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasIfNoneMatch(): boolean;
      clearIfNoneMatch(): void;
      getIfNoneMatch(): proto_r4_core_datatypes_pb.String | undefined;
      setIfNoneMatch(value?: proto_r4_core_datatypes_pb.String): void;

      hasIfModifiedSince(): boolean;
      clearIfModifiedSince(): void;
      getIfModifiedSince(): proto_r4_core_datatypes_pb.Instant | undefined;
      setIfModifiedSince(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasIfMatch(): boolean;
      clearIfMatch(): void;
      getIfMatch(): proto_r4_core_datatypes_pb.String | undefined;
      setIfMatch(value?: proto_r4_core_datatypes_pb.String): void;

      hasIfNoneExist(): boolean;
      clearIfNoneExist(): void;
      getIfNoneExist(): proto_r4_core_datatypes_pb.String | undefined;
      setIfNoneExist(value?: proto_r4_core_datatypes_pb.String): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        method?: Bundle.Entry.Request.MethodCode.AsObject,
        url?: proto_r4_core_datatypes_pb.Uri.AsObject,
        ifNoneMatch?: proto_r4_core_datatypes_pb.String.AsObject,
        ifModifiedSince?: proto_r4_core_datatypes_pb.Instant.AsObject,
        ifMatch?: proto_r4_core_datatypes_pb.String.AsObject,
        ifNoneExist?: proto_r4_core_datatypes_pb.String.AsObject,
      }

      export class MethodCode extends jspb.Message {
        getValue(): proto_r4_core_codes_pb.HTTPVerbCode.ValueMap[keyof proto_r4_core_codes_pb.HTTPVerbCode.ValueMap];
        setValue(value: proto_r4_core_codes_pb.HTTPVerbCode.ValueMap[keyof proto_r4_core_codes_pb.HTTPVerbCode.ValueMap]): void;

        hasId(): boolean;
        clearId(): void;
        getId(): proto_r4_core_datatypes_pb.String | undefined;
        setId(value?: proto_r4_core_datatypes_pb.String): void;

        clearExtensionList(): void;
        getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
        setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
        addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): MethodCode.AsObject;
        static toObject(includeInstance: boolean, msg: MethodCode): MethodCode.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: MethodCode, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): MethodCode;
        static deserializeBinaryFromReader(message: MethodCode, reader: jspb.BinaryReader): MethodCode;
      }

      export namespace MethodCode {
        export type AsObject = {
          value: proto_r4_core_codes_pb.HTTPVerbCode.ValueMap[keyof proto_r4_core_codes_pb.HTTPVerbCode.ValueMap],
          id?: proto_r4_core_datatypes_pb.String.AsObject,
          extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        }
      }
    }

    export class Response extends jspb.Message {
      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.String | undefined;
      setId(value?: proto_r4_core_datatypes_pb.String): void;

      clearExtensionList(): void;
      getExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      clearModifierExtensionList(): void;
      getModifierExtensionList(): Array<proto_r4_core_datatypes_pb.Extension>;
      setModifierExtensionList(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
      addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

      hasStatus(): boolean;
      clearStatus(): void;
      getStatus(): proto_r4_core_datatypes_pb.String | undefined;
      setStatus(value?: proto_r4_core_datatypes_pb.String): void;

      hasLocation(): boolean;
      clearLocation(): void;
      getLocation(): proto_r4_core_datatypes_pb.Uri | undefined;
      setLocation(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasEtag(): boolean;
      clearEtag(): void;
      getEtag(): proto_r4_core_datatypes_pb.String | undefined;
      setEtag(value?: proto_r4_core_datatypes_pb.String): void;

      hasLastModified(): boolean;
      clearLastModified(): void;
      getLastModified(): proto_r4_core_datatypes_pb.Instant | undefined;
      setLastModified(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasOutcome(): boolean;
      clearOutcome(): void;
      getOutcome(): ContainedResource | undefined;
      setOutcome(value?: ContainedResource): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Response.AsObject;
      static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Response;
      static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
      export type AsObject = {
        id?: proto_r4_core_datatypes_pb.String.AsObject,
        extensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        modifierExtensionList: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
        status?: proto_r4_core_datatypes_pb.String.AsObject,
        location?: proto_r4_core_datatypes_pb.Uri.AsObject,
        etag?: proto_r4_core_datatypes_pb.String.AsObject,
        lastModified?: proto_r4_core_datatypes_pb.Instant.AsObject,
        outcome?: ContainedResource.AsObject,
      }
    }
  }
}

export class ContainedResource extends jspb.Message {
  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): proto_r4_core_resources_account_pb.Account | undefined;
  setAccount(value?: proto_r4_core_resources_account_pb.Account): void;

  hasActivityDefinition(): boolean;
  clearActivityDefinition(): void;
  getActivityDefinition(): proto_r4_core_resources_activity_definition_pb.ActivityDefinition | undefined;
  setActivityDefinition(value?: proto_r4_core_resources_activity_definition_pb.ActivityDefinition): void;

  hasAdverseEvent(): boolean;
  clearAdverseEvent(): void;
  getAdverseEvent(): proto_r4_core_resources_adverse_event_pb.AdverseEvent | undefined;
  setAdverseEvent(value?: proto_r4_core_resources_adverse_event_pb.AdverseEvent): void;

  hasAllergyIntolerance(): boolean;
  clearAllergyIntolerance(): void;
  getAllergyIntolerance(): proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance | undefined;
  setAllergyIntolerance(value?: proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance): void;

  hasAppointment(): boolean;
  clearAppointment(): void;
  getAppointment(): proto_r4_core_resources_appointment_pb.Appointment | undefined;
  setAppointment(value?: proto_r4_core_resources_appointment_pb.Appointment): void;

  hasAppointmentResponse(): boolean;
  clearAppointmentResponse(): void;
  getAppointmentResponse(): proto_r4_core_resources_appointment_response_pb.AppointmentResponse | undefined;
  setAppointmentResponse(value?: proto_r4_core_resources_appointment_response_pb.AppointmentResponse): void;

  hasAuditEvent(): boolean;
  clearAuditEvent(): void;
  getAuditEvent(): proto_r4_core_resources_audit_event_pb.AuditEvent | undefined;
  setAuditEvent(value?: proto_r4_core_resources_audit_event_pb.AuditEvent): void;

  hasBasic(): boolean;
  clearBasic(): void;
  getBasic(): proto_r4_core_resources_basic_pb.Basic | undefined;
  setBasic(value?: proto_r4_core_resources_basic_pb.Basic): void;

  hasBinary(): boolean;
  clearBinary(): void;
  getBinary(): proto_r4_core_resources_binary_pb.Binary | undefined;
  setBinary(value?: proto_r4_core_resources_binary_pb.Binary): void;

  hasBiologicallyDerivedProduct(): boolean;
  clearBiologicallyDerivedProduct(): void;
  getBiologicallyDerivedProduct(): proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct | undefined;
  setBiologicallyDerivedProduct(value?: proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct): void;

  hasBodyStructure(): boolean;
  clearBodyStructure(): void;
  getBodyStructure(): proto_r4_core_resources_body_structure_pb.BodyStructure | undefined;
  setBodyStructure(value?: proto_r4_core_resources_body_structure_pb.BodyStructure): void;

  hasBundle(): boolean;
  clearBundle(): void;
  getBundle(): Bundle | undefined;
  setBundle(value?: Bundle): void;

  hasCapabilityStatement(): boolean;
  clearCapabilityStatement(): void;
  getCapabilityStatement(): proto_r4_core_resources_capability_statement_pb.CapabilityStatement | undefined;
  setCapabilityStatement(value?: proto_r4_core_resources_capability_statement_pb.CapabilityStatement): void;

  hasCarePlan(): boolean;
  clearCarePlan(): void;
  getCarePlan(): proto_r4_core_resources_care_plan_pb.CarePlan | undefined;
  setCarePlan(value?: proto_r4_core_resources_care_plan_pb.CarePlan): void;

  hasCareTeam(): boolean;
  clearCareTeam(): void;
  getCareTeam(): proto_r4_core_resources_care_team_pb.CareTeam | undefined;
  setCareTeam(value?: proto_r4_core_resources_care_team_pb.CareTeam): void;

  hasCatalogEntry(): boolean;
  clearCatalogEntry(): void;
  getCatalogEntry(): proto_r4_core_resources_catalog_entry_pb.CatalogEntry | undefined;
  setCatalogEntry(value?: proto_r4_core_resources_catalog_entry_pb.CatalogEntry): void;

  hasChargeItem(): boolean;
  clearChargeItem(): void;
  getChargeItem(): proto_r4_core_resources_charge_item_pb.ChargeItem | undefined;
  setChargeItem(value?: proto_r4_core_resources_charge_item_pb.ChargeItem): void;

  hasChargeItemDefinition(): boolean;
  clearChargeItemDefinition(): void;
  getChargeItemDefinition(): proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition | undefined;
  setChargeItemDefinition(value?: proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition): void;

  hasClaim(): boolean;
  clearClaim(): void;
  getClaim(): proto_r4_core_resources_claim_pb.Claim | undefined;
  setClaim(value?: proto_r4_core_resources_claim_pb.Claim): void;

  hasClaimResponse(): boolean;
  clearClaimResponse(): void;
  getClaimResponse(): proto_r4_core_resources_claim_response_pb.ClaimResponse | undefined;
  setClaimResponse(value?: proto_r4_core_resources_claim_response_pb.ClaimResponse): void;

  hasClinicalImpression(): boolean;
  clearClinicalImpression(): void;
  getClinicalImpression(): proto_r4_core_resources_clinical_impression_pb.ClinicalImpression | undefined;
  setClinicalImpression(value?: proto_r4_core_resources_clinical_impression_pb.ClinicalImpression): void;

  hasCodeSystem(): boolean;
  clearCodeSystem(): void;
  getCodeSystem(): proto_r4_core_resources_code_system_pb.CodeSystem | undefined;
  setCodeSystem(value?: proto_r4_core_resources_code_system_pb.CodeSystem): void;

  hasCommunication(): boolean;
  clearCommunication(): void;
  getCommunication(): proto_r4_core_resources_communication_pb.Communication | undefined;
  setCommunication(value?: proto_r4_core_resources_communication_pb.Communication): void;

  hasCommunicationRequest(): boolean;
  clearCommunicationRequest(): void;
  getCommunicationRequest(): proto_r4_core_resources_communication_request_pb.CommunicationRequest | undefined;
  setCommunicationRequest(value?: proto_r4_core_resources_communication_request_pb.CommunicationRequest): void;

  hasCompartmentDefinition(): boolean;
  clearCompartmentDefinition(): void;
  getCompartmentDefinition(): proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition | undefined;
  setCompartmentDefinition(value?: proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition): void;

  hasComposition(): boolean;
  clearComposition(): void;
  getComposition(): proto_r4_core_resources_composition_pb.Composition | undefined;
  setComposition(value?: proto_r4_core_resources_composition_pb.Composition): void;

  hasConceptMap(): boolean;
  clearConceptMap(): void;
  getConceptMap(): proto_r4_core_resources_concept_map_pb.ConceptMap | undefined;
  setConceptMap(value?: proto_r4_core_resources_concept_map_pb.ConceptMap): void;

  hasCondition(): boolean;
  clearCondition(): void;
  getCondition(): proto_r4_core_resources_condition_pb.Condition | undefined;
  setCondition(value?: proto_r4_core_resources_condition_pb.Condition): void;

  hasConsent(): boolean;
  clearConsent(): void;
  getConsent(): proto_r4_core_resources_consent_pb.Consent | undefined;
  setConsent(value?: proto_r4_core_resources_consent_pb.Consent): void;

  hasContract(): boolean;
  clearContract(): void;
  getContract(): proto_r4_core_resources_contract_pb.Contract | undefined;
  setContract(value?: proto_r4_core_resources_contract_pb.Contract): void;

  hasCoverage(): boolean;
  clearCoverage(): void;
  getCoverage(): proto_r4_core_resources_coverage_pb.Coverage | undefined;
  setCoverage(value?: proto_r4_core_resources_coverage_pb.Coverage): void;

  hasCoverageEligibilityRequest(): boolean;
  clearCoverageEligibilityRequest(): void;
  getCoverageEligibilityRequest(): proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest | undefined;
  setCoverageEligibilityRequest(value?: proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest): void;

  hasCoverageEligibilityResponse(): boolean;
  clearCoverageEligibilityResponse(): void;
  getCoverageEligibilityResponse(): proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse | undefined;
  setCoverageEligibilityResponse(value?: proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse): void;

  hasDetectedIssue(): boolean;
  clearDetectedIssue(): void;
  getDetectedIssue(): proto_r4_core_resources_detected_issue_pb.DetectedIssue | undefined;
  setDetectedIssue(value?: proto_r4_core_resources_detected_issue_pb.DetectedIssue): void;

  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): proto_r4_core_resources_device_pb.Device | undefined;
  setDevice(value?: proto_r4_core_resources_device_pb.Device): void;

  hasDeviceDefinition(): boolean;
  clearDeviceDefinition(): void;
  getDeviceDefinition(): proto_r4_core_resources_device_definition_pb.DeviceDefinition | undefined;
  setDeviceDefinition(value?: proto_r4_core_resources_device_definition_pb.DeviceDefinition): void;

  hasDeviceMetric(): boolean;
  clearDeviceMetric(): void;
  getDeviceMetric(): proto_r4_core_resources_device_metric_pb.DeviceMetric | undefined;
  setDeviceMetric(value?: proto_r4_core_resources_device_metric_pb.DeviceMetric): void;

  hasDeviceRequest(): boolean;
  clearDeviceRequest(): void;
  getDeviceRequest(): proto_r4_core_resources_device_request_pb.DeviceRequest | undefined;
  setDeviceRequest(value?: proto_r4_core_resources_device_request_pb.DeviceRequest): void;

  hasDeviceUseStatement(): boolean;
  clearDeviceUseStatement(): void;
  getDeviceUseStatement(): proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement | undefined;
  setDeviceUseStatement(value?: proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement): void;

  hasDiagnosticReport(): boolean;
  clearDiagnosticReport(): void;
  getDiagnosticReport(): proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport | undefined;
  setDiagnosticReport(value?: proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport): void;

  hasDocumentManifest(): boolean;
  clearDocumentManifest(): void;
  getDocumentManifest(): proto_r4_core_resources_document_manifest_pb.DocumentManifest | undefined;
  setDocumentManifest(value?: proto_r4_core_resources_document_manifest_pb.DocumentManifest): void;

  hasDocumentReference(): boolean;
  clearDocumentReference(): void;
  getDocumentReference(): proto_r4_core_resources_document_reference_pb.DocumentReference | undefined;
  setDocumentReference(value?: proto_r4_core_resources_document_reference_pb.DocumentReference): void;

  hasEffectEvidenceSynthesis(): boolean;
  clearEffectEvidenceSynthesis(): void;
  getEffectEvidenceSynthesis(): proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis | undefined;
  setEffectEvidenceSynthesis(value?: proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis): void;

  hasEncounter(): boolean;
  clearEncounter(): void;
  getEncounter(): proto_r4_core_resources_encounter_pb.Encounter | undefined;
  setEncounter(value?: proto_r4_core_resources_encounter_pb.Encounter): void;

  hasEndpoint(): boolean;
  clearEndpoint(): void;
  getEndpoint(): proto_r4_core_resources_endpoint_pb.Endpoint | undefined;
  setEndpoint(value?: proto_r4_core_resources_endpoint_pb.Endpoint): void;

  hasEnrollmentRequest(): boolean;
  clearEnrollmentRequest(): void;
  getEnrollmentRequest(): proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest | undefined;
  setEnrollmentRequest(value?: proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest): void;

  hasEnrollmentResponse(): boolean;
  clearEnrollmentResponse(): void;
  getEnrollmentResponse(): proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse | undefined;
  setEnrollmentResponse(value?: proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse): void;

  hasEpisodeOfCare(): boolean;
  clearEpisodeOfCare(): void;
  getEpisodeOfCare(): proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare | undefined;
  setEpisodeOfCare(value?: proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare): void;

  hasEventDefinition(): boolean;
  clearEventDefinition(): void;
  getEventDefinition(): proto_r4_core_resources_event_definition_pb.EventDefinition | undefined;
  setEventDefinition(value?: proto_r4_core_resources_event_definition_pb.EventDefinition): void;

  hasEvidence(): boolean;
  clearEvidence(): void;
  getEvidence(): proto_r4_core_resources_evidence_pb.Evidence | undefined;
  setEvidence(value?: proto_r4_core_resources_evidence_pb.Evidence): void;

  hasEvidenceVariable(): boolean;
  clearEvidenceVariable(): void;
  getEvidenceVariable(): proto_r4_core_resources_evidence_variable_pb.EvidenceVariable | undefined;
  setEvidenceVariable(value?: proto_r4_core_resources_evidence_variable_pb.EvidenceVariable): void;

  hasExampleScenario(): boolean;
  clearExampleScenario(): void;
  getExampleScenario(): proto_r4_core_resources_example_scenario_pb.ExampleScenario | undefined;
  setExampleScenario(value?: proto_r4_core_resources_example_scenario_pb.ExampleScenario): void;

  hasExplanationOfBenefit(): boolean;
  clearExplanationOfBenefit(): void;
  getExplanationOfBenefit(): proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit | undefined;
  setExplanationOfBenefit(value?: proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit): void;

  hasFamilyMemberHistory(): boolean;
  clearFamilyMemberHistory(): void;
  getFamilyMemberHistory(): proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory | undefined;
  setFamilyMemberHistory(value?: proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory): void;

  hasFlag(): boolean;
  clearFlag(): void;
  getFlag(): proto_r4_core_resources_flag_pb.Flag | undefined;
  setFlag(value?: proto_r4_core_resources_flag_pb.Flag): void;

  hasGoal(): boolean;
  clearGoal(): void;
  getGoal(): proto_r4_core_resources_goal_pb.Goal | undefined;
  setGoal(value?: proto_r4_core_resources_goal_pb.Goal): void;

  hasGraphDefinition(): boolean;
  clearGraphDefinition(): void;
  getGraphDefinition(): proto_r4_core_resources_graph_definition_pb.GraphDefinition | undefined;
  setGraphDefinition(value?: proto_r4_core_resources_graph_definition_pb.GraphDefinition): void;

  hasGroup(): boolean;
  clearGroup(): void;
  getGroup(): proto_r4_core_resources_group_pb.Group | undefined;
  setGroup(value?: proto_r4_core_resources_group_pb.Group): void;

  hasGuidanceResponse(): boolean;
  clearGuidanceResponse(): void;
  getGuidanceResponse(): proto_r4_core_resources_guidance_response_pb.GuidanceResponse | undefined;
  setGuidanceResponse(value?: proto_r4_core_resources_guidance_response_pb.GuidanceResponse): void;

  hasHealthcareService(): boolean;
  clearHealthcareService(): void;
  getHealthcareService(): proto_r4_core_resources_healthcare_service_pb.HealthcareService | undefined;
  setHealthcareService(value?: proto_r4_core_resources_healthcare_service_pb.HealthcareService): void;

  hasImagingStudy(): boolean;
  clearImagingStudy(): void;
  getImagingStudy(): proto_r4_core_resources_imaging_study_pb.ImagingStudy | undefined;
  setImagingStudy(value?: proto_r4_core_resources_imaging_study_pb.ImagingStudy): void;

  hasImmunization(): boolean;
  clearImmunization(): void;
  getImmunization(): proto_r4_core_resources_immunization_pb.Immunization | undefined;
  setImmunization(value?: proto_r4_core_resources_immunization_pb.Immunization): void;

  hasImmunizationEvaluation(): boolean;
  clearImmunizationEvaluation(): void;
  getImmunizationEvaluation(): proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation | undefined;
  setImmunizationEvaluation(value?: proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation): void;

  hasImmunizationRecommendation(): boolean;
  clearImmunizationRecommendation(): void;
  getImmunizationRecommendation(): proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation | undefined;
  setImmunizationRecommendation(value?: proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation): void;

  hasImplementationGuide(): boolean;
  clearImplementationGuide(): void;
  getImplementationGuide(): proto_r4_core_resources_implementation_guide_pb.ImplementationGuide | undefined;
  setImplementationGuide(value?: proto_r4_core_resources_implementation_guide_pb.ImplementationGuide): void;

  hasInsurancePlan(): boolean;
  clearInsurancePlan(): void;
  getInsurancePlan(): proto_r4_core_resources_insurance_plan_pb.InsurancePlan | undefined;
  setInsurancePlan(value?: proto_r4_core_resources_insurance_plan_pb.InsurancePlan): void;

  hasInvoice(): boolean;
  clearInvoice(): void;
  getInvoice(): proto_r4_core_resources_invoice_pb.Invoice | undefined;
  setInvoice(value?: proto_r4_core_resources_invoice_pb.Invoice): void;

  hasLibrary(): boolean;
  clearLibrary(): void;
  getLibrary(): proto_r4_core_resources_library_pb.Library | undefined;
  setLibrary(value?: proto_r4_core_resources_library_pb.Library): void;

  hasLinkage(): boolean;
  clearLinkage(): void;
  getLinkage(): proto_r4_core_resources_linkage_pb.Linkage | undefined;
  setLinkage(value?: proto_r4_core_resources_linkage_pb.Linkage): void;

  hasList(): boolean;
  clearList(): void;
  getList(): proto_r4_core_resources_list_pb.List | undefined;
  setList(value?: proto_r4_core_resources_list_pb.List): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): proto_r4_core_resources_location_pb.Location | undefined;
  setLocation(value?: proto_r4_core_resources_location_pb.Location): void;

  hasMeasure(): boolean;
  clearMeasure(): void;
  getMeasure(): proto_r4_core_resources_measure_pb.Measure | undefined;
  setMeasure(value?: proto_r4_core_resources_measure_pb.Measure): void;

  hasMeasureReport(): boolean;
  clearMeasureReport(): void;
  getMeasureReport(): proto_r4_core_resources_measure_report_pb.MeasureReport | undefined;
  setMeasureReport(value?: proto_r4_core_resources_measure_report_pb.MeasureReport): void;

  hasMedia(): boolean;
  clearMedia(): void;
  getMedia(): proto_r4_core_resources_media_pb.Media | undefined;
  setMedia(value?: proto_r4_core_resources_media_pb.Media): void;

  hasMedication(): boolean;
  clearMedication(): void;
  getMedication(): proto_r4_core_resources_medication_pb.Medication | undefined;
  setMedication(value?: proto_r4_core_resources_medication_pb.Medication): void;

  hasMedicationAdministration(): boolean;
  clearMedicationAdministration(): void;
  getMedicationAdministration(): proto_r4_core_resources_medication_administration_pb.MedicationAdministration | undefined;
  setMedicationAdministration(value?: proto_r4_core_resources_medication_administration_pb.MedicationAdministration): void;

  hasMedicationDispense(): boolean;
  clearMedicationDispense(): void;
  getMedicationDispense(): proto_r4_core_resources_medication_dispense_pb.MedicationDispense | undefined;
  setMedicationDispense(value?: proto_r4_core_resources_medication_dispense_pb.MedicationDispense): void;

  hasMedicationKnowledge(): boolean;
  clearMedicationKnowledge(): void;
  getMedicationKnowledge(): proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge | undefined;
  setMedicationKnowledge(value?: proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge): void;

  hasMedicationRequest(): boolean;
  clearMedicationRequest(): void;
  getMedicationRequest(): proto_r4_core_resources_medication_request_pb.MedicationRequest | undefined;
  setMedicationRequest(value?: proto_r4_core_resources_medication_request_pb.MedicationRequest): void;

  hasMedicationStatement(): boolean;
  clearMedicationStatement(): void;
  getMedicationStatement(): proto_r4_core_resources_medication_statement_pb.MedicationStatement | undefined;
  setMedicationStatement(value?: proto_r4_core_resources_medication_statement_pb.MedicationStatement): void;

  hasMedicinalProduct(): boolean;
  clearMedicinalProduct(): void;
  getMedicinalProduct(): proto_r4_core_resources_medicinal_product_pb.MedicinalProduct | undefined;
  setMedicinalProduct(value?: proto_r4_core_resources_medicinal_product_pb.MedicinalProduct): void;

  hasMedicinalProductAuthorization(): boolean;
  clearMedicinalProductAuthorization(): void;
  getMedicinalProductAuthorization(): proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization | undefined;
  setMedicinalProductAuthorization(value?: proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization): void;

  hasMedicinalProductContraindication(): boolean;
  clearMedicinalProductContraindication(): void;
  getMedicinalProductContraindication(): proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication | undefined;
  setMedicinalProductContraindication(value?: proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication): void;

  hasMedicinalProductIndication(): boolean;
  clearMedicinalProductIndication(): void;
  getMedicinalProductIndication(): proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication | undefined;
  setMedicinalProductIndication(value?: proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication): void;

  hasMedicinalProductIngredient(): boolean;
  clearMedicinalProductIngredient(): void;
  getMedicinalProductIngredient(): proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient | undefined;
  setMedicinalProductIngredient(value?: proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient): void;

  hasMedicinalProductInteraction(): boolean;
  clearMedicinalProductInteraction(): void;
  getMedicinalProductInteraction(): proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction | undefined;
  setMedicinalProductInteraction(value?: proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction): void;

  hasMedicinalProductManufactured(): boolean;
  clearMedicinalProductManufactured(): void;
  getMedicinalProductManufactured(): proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured | undefined;
  setMedicinalProductManufactured(value?: proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured): void;

  hasMedicinalProductPackaged(): boolean;
  clearMedicinalProductPackaged(): void;
  getMedicinalProductPackaged(): proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged | undefined;
  setMedicinalProductPackaged(value?: proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged): void;

  hasMedicinalProductPharmaceutical(): boolean;
  clearMedicinalProductPharmaceutical(): void;
  getMedicinalProductPharmaceutical(): proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical | undefined;
  setMedicinalProductPharmaceutical(value?: proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical): void;

  hasMedicinalProductUndesirableEffect(): boolean;
  clearMedicinalProductUndesirableEffect(): void;
  getMedicinalProductUndesirableEffect(): proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect | undefined;
  setMedicinalProductUndesirableEffect(value?: proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect): void;

  hasMessageDefinition(): boolean;
  clearMessageDefinition(): void;
  getMessageDefinition(): proto_r4_core_resources_message_definition_pb.MessageDefinition | undefined;
  setMessageDefinition(value?: proto_r4_core_resources_message_definition_pb.MessageDefinition): void;

  hasMessageHeader(): boolean;
  clearMessageHeader(): void;
  getMessageHeader(): proto_r4_core_resources_message_header_pb.MessageHeader | undefined;
  setMessageHeader(value?: proto_r4_core_resources_message_header_pb.MessageHeader): void;

  hasMolecularSequence(): boolean;
  clearMolecularSequence(): void;
  getMolecularSequence(): proto_r4_core_resources_molecular_sequence_pb.MolecularSequence | undefined;
  setMolecularSequence(value?: proto_r4_core_resources_molecular_sequence_pb.MolecularSequence): void;

  hasNamingSystem(): boolean;
  clearNamingSystem(): void;
  getNamingSystem(): proto_r4_core_resources_naming_system_pb.NamingSystem | undefined;
  setNamingSystem(value?: proto_r4_core_resources_naming_system_pb.NamingSystem): void;

  hasNutritionOrder(): boolean;
  clearNutritionOrder(): void;
  getNutritionOrder(): proto_r4_core_resources_nutrition_order_pb.NutritionOrder | undefined;
  setNutritionOrder(value?: proto_r4_core_resources_nutrition_order_pb.NutritionOrder): void;

  hasObservation(): boolean;
  clearObservation(): void;
  getObservation(): proto_r4_core_resources_observation_pb.Observation | undefined;
  setObservation(value?: proto_r4_core_resources_observation_pb.Observation): void;

  hasObservationDefinition(): boolean;
  clearObservationDefinition(): void;
  getObservationDefinition(): proto_r4_core_resources_observation_definition_pb.ObservationDefinition | undefined;
  setObservationDefinition(value?: proto_r4_core_resources_observation_definition_pb.ObservationDefinition): void;

  hasOperationDefinition(): boolean;
  clearOperationDefinition(): void;
  getOperationDefinition(): proto_r4_core_resources_operation_definition_pb.OperationDefinition | undefined;
  setOperationDefinition(value?: proto_r4_core_resources_operation_definition_pb.OperationDefinition): void;

  hasOperationOutcome(): boolean;
  clearOperationOutcome(): void;
  getOperationOutcome(): proto_r4_core_resources_operation_outcome_pb.OperationOutcome | undefined;
  setOperationOutcome(value?: proto_r4_core_resources_operation_outcome_pb.OperationOutcome): void;

  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): proto_r4_core_resources_organization_pb.Organization | undefined;
  setOrganization(value?: proto_r4_core_resources_organization_pb.Organization): void;

  hasOrganizationAffiliation(): boolean;
  clearOrganizationAffiliation(): void;
  getOrganizationAffiliation(): proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation | undefined;
  setOrganizationAffiliation(value?: proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation): void;

  hasParameters(): boolean;
  clearParameters(): void;
  getParameters(): proto_r4_core_resources_parameters_pb.Parameters | undefined;
  setParameters(value?: proto_r4_core_resources_parameters_pb.Parameters): void;

  hasPatient(): boolean;
  clearPatient(): void;
  getPatient(): proto_r4_core_resources_patient_pb.Patient | undefined;
  setPatient(value?: proto_r4_core_resources_patient_pb.Patient): void;

  hasPaymentNotice(): boolean;
  clearPaymentNotice(): void;
  getPaymentNotice(): proto_r4_core_resources_payment_notice_pb.PaymentNotice | undefined;
  setPaymentNotice(value?: proto_r4_core_resources_payment_notice_pb.PaymentNotice): void;

  hasPaymentReconciliation(): boolean;
  clearPaymentReconciliation(): void;
  getPaymentReconciliation(): proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation | undefined;
  setPaymentReconciliation(value?: proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation): void;

  hasPerson(): boolean;
  clearPerson(): void;
  getPerson(): proto_r4_core_resources_person_pb.Person | undefined;
  setPerson(value?: proto_r4_core_resources_person_pb.Person): void;

  hasPlanDefinition(): boolean;
  clearPlanDefinition(): void;
  getPlanDefinition(): proto_r4_core_resources_plan_definition_pb.PlanDefinition | undefined;
  setPlanDefinition(value?: proto_r4_core_resources_plan_definition_pb.PlanDefinition): void;

  hasPractitioner(): boolean;
  clearPractitioner(): void;
  getPractitioner(): proto_r4_core_resources_practitioner_pb.Practitioner | undefined;
  setPractitioner(value?: proto_r4_core_resources_practitioner_pb.Practitioner): void;

  hasPractitionerRole(): boolean;
  clearPractitionerRole(): void;
  getPractitionerRole(): proto_r4_core_resources_practitioner_role_pb.PractitionerRole | undefined;
  setPractitionerRole(value?: proto_r4_core_resources_practitioner_role_pb.PractitionerRole): void;

  hasProcedure(): boolean;
  clearProcedure(): void;
  getProcedure(): proto_r4_core_resources_procedure_pb.Procedure | undefined;
  setProcedure(value?: proto_r4_core_resources_procedure_pb.Procedure): void;

  hasProvenance(): boolean;
  clearProvenance(): void;
  getProvenance(): proto_r4_core_resources_provenance_pb.Provenance | undefined;
  setProvenance(value?: proto_r4_core_resources_provenance_pb.Provenance): void;

  hasQuestionnaire(): boolean;
  clearQuestionnaire(): void;
  getQuestionnaire(): proto_r4_core_resources_questionnaire_pb.Questionnaire | undefined;
  setQuestionnaire(value?: proto_r4_core_resources_questionnaire_pb.Questionnaire): void;

  hasQuestionnaireResponse(): boolean;
  clearQuestionnaireResponse(): void;
  getQuestionnaireResponse(): proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse | undefined;
  setQuestionnaireResponse(value?: proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse): void;

  hasRelatedPerson(): boolean;
  clearRelatedPerson(): void;
  getRelatedPerson(): proto_r4_core_resources_related_person_pb.RelatedPerson | undefined;
  setRelatedPerson(value?: proto_r4_core_resources_related_person_pb.RelatedPerson): void;

  hasRequestGroup(): boolean;
  clearRequestGroup(): void;
  getRequestGroup(): proto_r4_core_resources_request_group_pb.RequestGroup | undefined;
  setRequestGroup(value?: proto_r4_core_resources_request_group_pb.RequestGroup): void;

  hasResearchDefinition(): boolean;
  clearResearchDefinition(): void;
  getResearchDefinition(): proto_r4_core_resources_research_definition_pb.ResearchDefinition | undefined;
  setResearchDefinition(value?: proto_r4_core_resources_research_definition_pb.ResearchDefinition): void;

  hasResearchElementDefinition(): boolean;
  clearResearchElementDefinition(): void;
  getResearchElementDefinition(): proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition | undefined;
  setResearchElementDefinition(value?: proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition): void;

  hasResearchStudy(): boolean;
  clearResearchStudy(): void;
  getResearchStudy(): proto_r4_core_resources_research_study_pb.ResearchStudy | undefined;
  setResearchStudy(value?: proto_r4_core_resources_research_study_pb.ResearchStudy): void;

  hasResearchSubject(): boolean;
  clearResearchSubject(): void;
  getResearchSubject(): proto_r4_core_resources_research_subject_pb.ResearchSubject | undefined;
  setResearchSubject(value?: proto_r4_core_resources_research_subject_pb.ResearchSubject): void;

  hasRiskAssessment(): boolean;
  clearRiskAssessment(): void;
  getRiskAssessment(): proto_r4_core_resources_risk_assessment_pb.RiskAssessment | undefined;
  setRiskAssessment(value?: proto_r4_core_resources_risk_assessment_pb.RiskAssessment): void;

  hasRiskEvidenceSynthesis(): boolean;
  clearRiskEvidenceSynthesis(): void;
  getRiskEvidenceSynthesis(): proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis | undefined;
  setRiskEvidenceSynthesis(value?: proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): proto_r4_core_resources_schedule_pb.Schedule | undefined;
  setSchedule(value?: proto_r4_core_resources_schedule_pb.Schedule): void;

  hasSearchParameter(): boolean;
  clearSearchParameter(): void;
  getSearchParameter(): proto_r4_core_resources_search_parameter_pb.SearchParameter | undefined;
  setSearchParameter(value?: proto_r4_core_resources_search_parameter_pb.SearchParameter): void;

  hasServiceRequest(): boolean;
  clearServiceRequest(): void;
  getServiceRequest(): proto_r4_core_resources_service_request_pb.ServiceRequest | undefined;
  setServiceRequest(value?: proto_r4_core_resources_service_request_pb.ServiceRequest): void;

  hasSlot(): boolean;
  clearSlot(): void;
  getSlot(): proto_r4_core_resources_slot_pb.Slot | undefined;
  setSlot(value?: proto_r4_core_resources_slot_pb.Slot): void;

  hasSpecimen(): boolean;
  clearSpecimen(): void;
  getSpecimen(): proto_r4_core_resources_specimen_pb.Specimen | undefined;
  setSpecimen(value?: proto_r4_core_resources_specimen_pb.Specimen): void;

  hasSpecimenDefinition(): boolean;
  clearSpecimenDefinition(): void;
  getSpecimenDefinition(): proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition | undefined;
  setSpecimenDefinition(value?: proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition): void;

  hasStructureDefinition(): boolean;
  clearStructureDefinition(): void;
  getStructureDefinition(): proto_r4_core_resources_structure_definition_pb.StructureDefinition | undefined;
  setStructureDefinition(value?: proto_r4_core_resources_structure_definition_pb.StructureDefinition): void;

  hasStructureMap(): boolean;
  clearStructureMap(): void;
  getStructureMap(): proto_r4_core_resources_structure_map_pb.StructureMap | undefined;
  setStructureMap(value?: proto_r4_core_resources_structure_map_pb.StructureMap): void;

  hasSubscription(): boolean;
  clearSubscription(): void;
  getSubscription(): proto_r4_core_resources_subscription_pb.Subscription | undefined;
  setSubscription(value?: proto_r4_core_resources_subscription_pb.Subscription): void;

  hasSubstance(): boolean;
  clearSubstance(): void;
  getSubstance(): proto_r4_core_resources_substance_pb.Substance | undefined;
  setSubstance(value?: proto_r4_core_resources_substance_pb.Substance): void;

  hasSubstanceNucleicAcid(): boolean;
  clearSubstanceNucleicAcid(): void;
  getSubstanceNucleicAcid(): proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid | undefined;
  setSubstanceNucleicAcid(value?: proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid): void;

  hasSubstancePolymer(): boolean;
  clearSubstancePolymer(): void;
  getSubstancePolymer(): proto_r4_core_resources_substance_polymer_pb.SubstancePolymer | undefined;
  setSubstancePolymer(value?: proto_r4_core_resources_substance_polymer_pb.SubstancePolymer): void;

  hasSubstanceProtein(): boolean;
  clearSubstanceProtein(): void;
  getSubstanceProtein(): proto_r4_core_resources_substance_protein_pb.SubstanceProtein | undefined;
  setSubstanceProtein(value?: proto_r4_core_resources_substance_protein_pb.SubstanceProtein): void;

  hasSubstanceReferenceInformation(): boolean;
  clearSubstanceReferenceInformation(): void;
  getSubstanceReferenceInformation(): proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation | undefined;
  setSubstanceReferenceInformation(value?: proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation): void;

  hasSubstanceSourceMaterial(): boolean;
  clearSubstanceSourceMaterial(): void;
  getSubstanceSourceMaterial(): proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial | undefined;
  setSubstanceSourceMaterial(value?: proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial): void;

  hasSubstanceSpecification(): boolean;
  clearSubstanceSpecification(): void;
  getSubstanceSpecification(): proto_r4_core_resources_substance_specification_pb.SubstanceSpecification | undefined;
  setSubstanceSpecification(value?: proto_r4_core_resources_substance_specification_pb.SubstanceSpecification): void;

  hasSupplyDelivery(): boolean;
  clearSupplyDelivery(): void;
  getSupplyDelivery(): proto_r4_core_resources_supply_delivery_pb.SupplyDelivery | undefined;
  setSupplyDelivery(value?: proto_r4_core_resources_supply_delivery_pb.SupplyDelivery): void;

  hasSupplyRequest(): boolean;
  clearSupplyRequest(): void;
  getSupplyRequest(): proto_r4_core_resources_supply_request_pb.SupplyRequest | undefined;
  setSupplyRequest(value?: proto_r4_core_resources_supply_request_pb.SupplyRequest): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): proto_r4_core_resources_task_pb.Task | undefined;
  setTask(value?: proto_r4_core_resources_task_pb.Task): void;

  hasTerminologyCapabilities(): boolean;
  clearTerminologyCapabilities(): void;
  getTerminologyCapabilities(): proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities | undefined;
  setTerminologyCapabilities(value?: proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities): void;

  hasTestReport(): boolean;
  clearTestReport(): void;
  getTestReport(): proto_r4_core_resources_test_report_pb.TestReport | undefined;
  setTestReport(value?: proto_r4_core_resources_test_report_pb.TestReport): void;

  hasTestScript(): boolean;
  clearTestScript(): void;
  getTestScript(): proto_r4_core_resources_test_script_pb.TestScript | undefined;
  setTestScript(value?: proto_r4_core_resources_test_script_pb.TestScript): void;

  hasValueSet(): boolean;
  clearValueSet(): void;
  getValueSet(): proto_r4_core_resources_value_set_pb.ValueSet | undefined;
  setValueSet(value?: proto_r4_core_resources_value_set_pb.ValueSet): void;

  hasVerificationResult(): boolean;
  clearVerificationResult(): void;
  getVerificationResult(): proto_r4_core_resources_verification_result_pb.VerificationResult | undefined;
  setVerificationResult(value?: proto_r4_core_resources_verification_result_pb.VerificationResult): void;

  hasVisionPrescription(): boolean;
  clearVisionPrescription(): void;
  getVisionPrescription(): proto_r4_core_resources_vision_prescription_pb.VisionPrescription | undefined;
  setVisionPrescription(value?: proto_r4_core_resources_vision_prescription_pb.VisionPrescription): void;

  getOneofResourceCase(): ContainedResource.OneofResourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContainedResource.AsObject;
  static toObject(includeInstance: boolean, msg: ContainedResource): ContainedResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ContainedResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContainedResource;
  static deserializeBinaryFromReader(message: ContainedResource, reader: jspb.BinaryReader): ContainedResource;
}

export namespace ContainedResource {
  export type AsObject = {
    account?: proto_r4_core_resources_account_pb.Account.AsObject,
    activityDefinition?: proto_r4_core_resources_activity_definition_pb.ActivityDefinition.AsObject,
    adverseEvent?: proto_r4_core_resources_adverse_event_pb.AdverseEvent.AsObject,
    allergyIntolerance?: proto_r4_core_resources_allergy_intolerance_pb.AllergyIntolerance.AsObject,
    appointment?: proto_r4_core_resources_appointment_pb.Appointment.AsObject,
    appointmentResponse?: proto_r4_core_resources_appointment_response_pb.AppointmentResponse.AsObject,
    auditEvent?: proto_r4_core_resources_audit_event_pb.AuditEvent.AsObject,
    basic?: proto_r4_core_resources_basic_pb.Basic.AsObject,
    binary?: proto_r4_core_resources_binary_pb.Binary.AsObject,
    biologicallyDerivedProduct?: proto_r4_core_resources_biologically_derived_product_pb.BiologicallyDerivedProduct.AsObject,
    bodyStructure?: proto_r4_core_resources_body_structure_pb.BodyStructure.AsObject,
    bundle?: Bundle.AsObject,
    capabilityStatement?: proto_r4_core_resources_capability_statement_pb.CapabilityStatement.AsObject,
    carePlan?: proto_r4_core_resources_care_plan_pb.CarePlan.AsObject,
    careTeam?: proto_r4_core_resources_care_team_pb.CareTeam.AsObject,
    catalogEntry?: proto_r4_core_resources_catalog_entry_pb.CatalogEntry.AsObject,
    chargeItem?: proto_r4_core_resources_charge_item_pb.ChargeItem.AsObject,
    chargeItemDefinition?: proto_r4_core_resources_charge_item_definition_pb.ChargeItemDefinition.AsObject,
    claim?: proto_r4_core_resources_claim_pb.Claim.AsObject,
    claimResponse?: proto_r4_core_resources_claim_response_pb.ClaimResponse.AsObject,
    clinicalImpression?: proto_r4_core_resources_clinical_impression_pb.ClinicalImpression.AsObject,
    codeSystem?: proto_r4_core_resources_code_system_pb.CodeSystem.AsObject,
    communication?: proto_r4_core_resources_communication_pb.Communication.AsObject,
    communicationRequest?: proto_r4_core_resources_communication_request_pb.CommunicationRequest.AsObject,
    compartmentDefinition?: proto_r4_core_resources_compartment_definition_pb.CompartmentDefinition.AsObject,
    composition?: proto_r4_core_resources_composition_pb.Composition.AsObject,
    conceptMap?: proto_r4_core_resources_concept_map_pb.ConceptMap.AsObject,
    condition?: proto_r4_core_resources_condition_pb.Condition.AsObject,
    consent?: proto_r4_core_resources_consent_pb.Consent.AsObject,
    contract?: proto_r4_core_resources_contract_pb.Contract.AsObject,
    coverage?: proto_r4_core_resources_coverage_pb.Coverage.AsObject,
    coverageEligibilityRequest?: proto_r4_core_resources_coverage_eligibility_request_pb.CoverageEligibilityRequest.AsObject,
    coverageEligibilityResponse?: proto_r4_core_resources_coverage_eligibility_response_pb.CoverageEligibilityResponse.AsObject,
    detectedIssue?: proto_r4_core_resources_detected_issue_pb.DetectedIssue.AsObject,
    device?: proto_r4_core_resources_device_pb.Device.AsObject,
    deviceDefinition?: proto_r4_core_resources_device_definition_pb.DeviceDefinition.AsObject,
    deviceMetric?: proto_r4_core_resources_device_metric_pb.DeviceMetric.AsObject,
    deviceRequest?: proto_r4_core_resources_device_request_pb.DeviceRequest.AsObject,
    deviceUseStatement?: proto_r4_core_resources_device_use_statement_pb.DeviceUseStatement.AsObject,
    diagnosticReport?: proto_r4_core_resources_diagnostic_report_pb.DiagnosticReport.AsObject,
    documentManifest?: proto_r4_core_resources_document_manifest_pb.DocumentManifest.AsObject,
    documentReference?: proto_r4_core_resources_document_reference_pb.DocumentReference.AsObject,
    effectEvidenceSynthesis?: proto_r4_core_resources_effect_evidence_synthesis_pb.EffectEvidenceSynthesis.AsObject,
    encounter?: proto_r4_core_resources_encounter_pb.Encounter.AsObject,
    endpoint?: proto_r4_core_resources_endpoint_pb.Endpoint.AsObject,
    enrollmentRequest?: proto_r4_core_resources_enrollment_request_pb.EnrollmentRequest.AsObject,
    enrollmentResponse?: proto_r4_core_resources_enrollment_response_pb.EnrollmentResponse.AsObject,
    episodeOfCare?: proto_r4_core_resources_episode_of_care_pb.EpisodeOfCare.AsObject,
    eventDefinition?: proto_r4_core_resources_event_definition_pb.EventDefinition.AsObject,
    evidence?: proto_r4_core_resources_evidence_pb.Evidence.AsObject,
    evidenceVariable?: proto_r4_core_resources_evidence_variable_pb.EvidenceVariable.AsObject,
    exampleScenario?: proto_r4_core_resources_example_scenario_pb.ExampleScenario.AsObject,
    explanationOfBenefit?: proto_r4_core_resources_explanation_of_benefit_pb.ExplanationOfBenefit.AsObject,
    familyMemberHistory?: proto_r4_core_resources_family_member_history_pb.FamilyMemberHistory.AsObject,
    flag?: proto_r4_core_resources_flag_pb.Flag.AsObject,
    goal?: proto_r4_core_resources_goal_pb.Goal.AsObject,
    graphDefinition?: proto_r4_core_resources_graph_definition_pb.GraphDefinition.AsObject,
    group?: proto_r4_core_resources_group_pb.Group.AsObject,
    guidanceResponse?: proto_r4_core_resources_guidance_response_pb.GuidanceResponse.AsObject,
    healthcareService?: proto_r4_core_resources_healthcare_service_pb.HealthcareService.AsObject,
    imagingStudy?: proto_r4_core_resources_imaging_study_pb.ImagingStudy.AsObject,
    immunization?: proto_r4_core_resources_immunization_pb.Immunization.AsObject,
    immunizationEvaluation?: proto_r4_core_resources_immunization_evaluation_pb.ImmunizationEvaluation.AsObject,
    immunizationRecommendation?: proto_r4_core_resources_immunization_recommendation_pb.ImmunizationRecommendation.AsObject,
    implementationGuide?: proto_r4_core_resources_implementation_guide_pb.ImplementationGuide.AsObject,
    insurancePlan?: proto_r4_core_resources_insurance_plan_pb.InsurancePlan.AsObject,
    invoice?: proto_r4_core_resources_invoice_pb.Invoice.AsObject,
    library?: proto_r4_core_resources_library_pb.Library.AsObject,
    linkage?: proto_r4_core_resources_linkage_pb.Linkage.AsObject,
    list?: proto_r4_core_resources_list_pb.List.AsObject,
    location?: proto_r4_core_resources_location_pb.Location.AsObject,
    measure?: proto_r4_core_resources_measure_pb.Measure.AsObject,
    measureReport?: proto_r4_core_resources_measure_report_pb.MeasureReport.AsObject,
    media?: proto_r4_core_resources_media_pb.Media.AsObject,
    medication?: proto_r4_core_resources_medication_pb.Medication.AsObject,
    medicationAdministration?: proto_r4_core_resources_medication_administration_pb.MedicationAdministration.AsObject,
    medicationDispense?: proto_r4_core_resources_medication_dispense_pb.MedicationDispense.AsObject,
    medicationKnowledge?: proto_r4_core_resources_medication_knowledge_pb.MedicationKnowledge.AsObject,
    medicationRequest?: proto_r4_core_resources_medication_request_pb.MedicationRequest.AsObject,
    medicationStatement?: proto_r4_core_resources_medication_statement_pb.MedicationStatement.AsObject,
    medicinalProduct?: proto_r4_core_resources_medicinal_product_pb.MedicinalProduct.AsObject,
    medicinalProductAuthorization?: proto_r4_core_resources_medicinal_product_authorization_pb.MedicinalProductAuthorization.AsObject,
    medicinalProductContraindication?: proto_r4_core_resources_medicinal_product_contraindication_pb.MedicinalProductContraindication.AsObject,
    medicinalProductIndication?: proto_r4_core_resources_medicinal_product_indication_pb.MedicinalProductIndication.AsObject,
    medicinalProductIngredient?: proto_r4_core_resources_medicinal_product_ingredient_pb.MedicinalProductIngredient.AsObject,
    medicinalProductInteraction?: proto_r4_core_resources_medicinal_product_interaction_pb.MedicinalProductInteraction.AsObject,
    medicinalProductManufactured?: proto_r4_core_resources_medicinal_product_manufactured_pb.MedicinalProductManufactured.AsObject,
    medicinalProductPackaged?: proto_r4_core_resources_medicinal_product_packaged_pb.MedicinalProductPackaged.AsObject,
    medicinalProductPharmaceutical?: proto_r4_core_resources_medicinal_product_pharmaceutical_pb.MedicinalProductPharmaceutical.AsObject,
    medicinalProductUndesirableEffect?: proto_r4_core_resources_medicinal_product_undesirable_effect_pb.MedicinalProductUndesirableEffect.AsObject,
    messageDefinition?: proto_r4_core_resources_message_definition_pb.MessageDefinition.AsObject,
    messageHeader?: proto_r4_core_resources_message_header_pb.MessageHeader.AsObject,
    molecularSequence?: proto_r4_core_resources_molecular_sequence_pb.MolecularSequence.AsObject,
    namingSystem?: proto_r4_core_resources_naming_system_pb.NamingSystem.AsObject,
    nutritionOrder?: proto_r4_core_resources_nutrition_order_pb.NutritionOrder.AsObject,
    observation?: proto_r4_core_resources_observation_pb.Observation.AsObject,
    observationDefinition?: proto_r4_core_resources_observation_definition_pb.ObservationDefinition.AsObject,
    operationDefinition?: proto_r4_core_resources_operation_definition_pb.OperationDefinition.AsObject,
    operationOutcome?: proto_r4_core_resources_operation_outcome_pb.OperationOutcome.AsObject,
    organization?: proto_r4_core_resources_organization_pb.Organization.AsObject,
    organizationAffiliation?: proto_r4_core_resources_organization_affiliation_pb.OrganizationAffiliation.AsObject,
    parameters?: proto_r4_core_resources_parameters_pb.Parameters.AsObject,
    patient?: proto_r4_core_resources_patient_pb.Patient.AsObject,
    paymentNotice?: proto_r4_core_resources_payment_notice_pb.PaymentNotice.AsObject,
    paymentReconciliation?: proto_r4_core_resources_payment_reconciliation_pb.PaymentReconciliation.AsObject,
    person?: proto_r4_core_resources_person_pb.Person.AsObject,
    planDefinition?: proto_r4_core_resources_plan_definition_pb.PlanDefinition.AsObject,
    practitioner?: proto_r4_core_resources_practitioner_pb.Practitioner.AsObject,
    practitionerRole?: proto_r4_core_resources_practitioner_role_pb.PractitionerRole.AsObject,
    procedure?: proto_r4_core_resources_procedure_pb.Procedure.AsObject,
    provenance?: proto_r4_core_resources_provenance_pb.Provenance.AsObject,
    questionnaire?: proto_r4_core_resources_questionnaire_pb.Questionnaire.AsObject,
    questionnaireResponse?: proto_r4_core_resources_questionnaire_response_pb.QuestionnaireResponse.AsObject,
    relatedPerson?: proto_r4_core_resources_related_person_pb.RelatedPerson.AsObject,
    requestGroup?: proto_r4_core_resources_request_group_pb.RequestGroup.AsObject,
    researchDefinition?: proto_r4_core_resources_research_definition_pb.ResearchDefinition.AsObject,
    researchElementDefinition?: proto_r4_core_resources_research_element_definition_pb.ResearchElementDefinition.AsObject,
    researchStudy?: proto_r4_core_resources_research_study_pb.ResearchStudy.AsObject,
    researchSubject?: proto_r4_core_resources_research_subject_pb.ResearchSubject.AsObject,
    riskAssessment?: proto_r4_core_resources_risk_assessment_pb.RiskAssessment.AsObject,
    riskEvidenceSynthesis?: proto_r4_core_resources_risk_evidence_synthesis_pb.RiskEvidenceSynthesis.AsObject,
    schedule?: proto_r4_core_resources_schedule_pb.Schedule.AsObject,
    searchParameter?: proto_r4_core_resources_search_parameter_pb.SearchParameter.AsObject,
    serviceRequest?: proto_r4_core_resources_service_request_pb.ServiceRequest.AsObject,
    slot?: proto_r4_core_resources_slot_pb.Slot.AsObject,
    specimen?: proto_r4_core_resources_specimen_pb.Specimen.AsObject,
    specimenDefinition?: proto_r4_core_resources_specimen_definition_pb.SpecimenDefinition.AsObject,
    structureDefinition?: proto_r4_core_resources_structure_definition_pb.StructureDefinition.AsObject,
    structureMap?: proto_r4_core_resources_structure_map_pb.StructureMap.AsObject,
    subscription?: proto_r4_core_resources_subscription_pb.Subscription.AsObject,
    substance?: proto_r4_core_resources_substance_pb.Substance.AsObject,
    substanceNucleicAcid?: proto_r4_core_resources_substance_nucleic_acid_pb.SubstanceNucleicAcid.AsObject,
    substancePolymer?: proto_r4_core_resources_substance_polymer_pb.SubstancePolymer.AsObject,
    substanceProtein?: proto_r4_core_resources_substance_protein_pb.SubstanceProtein.AsObject,
    substanceReferenceInformation?: proto_r4_core_resources_substance_reference_information_pb.SubstanceReferenceInformation.AsObject,
    substanceSourceMaterial?: proto_r4_core_resources_substance_source_material_pb.SubstanceSourceMaterial.AsObject,
    substanceSpecification?: proto_r4_core_resources_substance_specification_pb.SubstanceSpecification.AsObject,
    supplyDelivery?: proto_r4_core_resources_supply_delivery_pb.SupplyDelivery.AsObject,
    supplyRequest?: proto_r4_core_resources_supply_request_pb.SupplyRequest.AsObject,
    task?: proto_r4_core_resources_task_pb.Task.AsObject,
    terminologyCapabilities?: proto_r4_core_resources_terminology_capabilities_pb.TerminologyCapabilities.AsObject,
    testReport?: proto_r4_core_resources_test_report_pb.TestReport.AsObject,
    testScript?: proto_r4_core_resources_test_script_pb.TestScript.AsObject,
    valueSet?: proto_r4_core_resources_value_set_pb.ValueSet.AsObject,
    verificationResult?: proto_r4_core_resources_verification_result_pb.VerificationResult.AsObject,
    visionPrescription?: proto_r4_core_resources_vision_prescription_pb.VisionPrescription.AsObject,
  }

  export enum OneofResourceCase {
    ONEOF_RESOURCE_NOT_SET = 0,
    ACCOUNT = 1,
    ACTIVITY_DEFINITION = 2,
    ADVERSE_EVENT = 3,
    ALLERGY_INTOLERANCE = 4,
    APPOINTMENT = 5,
    APPOINTMENT_RESPONSE = 6,
    AUDIT_EVENT = 7,
    BASIC = 8,
    BINARY = 9,
    BIOLOGICALLY_DERIVED_PRODUCT = 10,
    BODY_STRUCTURE = 11,
    BUNDLE = 12,
    CAPABILITY_STATEMENT = 13,
    CARE_PLAN = 14,
    CARE_TEAM = 15,
    CATALOG_ENTRY = 16,
    CHARGE_ITEM = 17,
    CHARGE_ITEM_DEFINITION = 18,
    CLAIM = 19,
    CLAIM_RESPONSE = 20,
    CLINICAL_IMPRESSION = 21,
    CODE_SYSTEM = 22,
    COMMUNICATION = 23,
    COMMUNICATION_REQUEST = 24,
    COMPARTMENT_DEFINITION = 25,
    COMPOSITION = 26,
    CONCEPT_MAP = 27,
    CONDITION = 28,
    CONSENT = 29,
    CONTRACT = 30,
    COVERAGE = 31,
    COVERAGE_ELIGIBILITY_REQUEST = 32,
    COVERAGE_ELIGIBILITY_RESPONSE = 33,
    DETECTED_ISSUE = 34,
    DEVICE = 35,
    DEVICE_DEFINITION = 36,
    DEVICE_METRIC = 37,
    DEVICE_REQUEST = 38,
    DEVICE_USE_STATEMENT = 39,
    DIAGNOSTIC_REPORT = 40,
    DOCUMENT_MANIFEST = 41,
    DOCUMENT_REFERENCE = 42,
    EFFECT_EVIDENCE_SYNTHESIS = 43,
    ENCOUNTER = 44,
    ENDPOINT = 45,
    ENROLLMENT_REQUEST = 46,
    ENROLLMENT_RESPONSE = 47,
    EPISODE_OF_CARE = 48,
    EVENT_DEFINITION = 49,
    EVIDENCE = 50,
    EVIDENCE_VARIABLE = 51,
    EXAMPLE_SCENARIO = 52,
    EXPLANATION_OF_BENEFIT = 53,
    FAMILY_MEMBER_HISTORY = 54,
    FLAG = 55,
    GOAL = 56,
    GRAPH_DEFINITION = 57,
    GROUP = 58,
    GUIDANCE_RESPONSE = 59,
    HEALTHCARE_SERVICE = 60,
    IMAGING_STUDY = 61,
    IMMUNIZATION = 62,
    IMMUNIZATION_EVALUATION = 63,
    IMMUNIZATION_RECOMMENDATION = 64,
    IMPLEMENTATION_GUIDE = 65,
    INSURANCE_PLAN = 66,
    INVOICE = 67,
    LIBRARY = 68,
    LINKAGE = 69,
    LIST = 70,
    LOCATION = 71,
    MEASURE = 72,
    MEASURE_REPORT = 73,
    MEDIA = 74,
    MEDICATION = 75,
    MEDICATION_ADMINISTRATION = 76,
    MEDICATION_DISPENSE = 77,
    MEDICATION_KNOWLEDGE = 78,
    MEDICATION_REQUEST = 79,
    MEDICATION_STATEMENT = 80,
    MEDICINAL_PRODUCT = 81,
    MEDICINAL_PRODUCT_AUTHORIZATION = 82,
    MEDICINAL_PRODUCT_CONTRAINDICATION = 83,
    MEDICINAL_PRODUCT_INDICATION = 84,
    MEDICINAL_PRODUCT_INGREDIENT = 85,
    MEDICINAL_PRODUCT_INTERACTION = 86,
    MEDICINAL_PRODUCT_MANUFACTURED = 87,
    MEDICINAL_PRODUCT_PACKAGED = 88,
    MEDICINAL_PRODUCT_PHARMACEUTICAL = 89,
    MEDICINAL_PRODUCT_UNDESIRABLE_EFFECT = 90,
    MESSAGE_DEFINITION = 91,
    MESSAGE_HEADER = 92,
    MOLECULAR_SEQUENCE = 93,
    NAMING_SYSTEM = 94,
    NUTRITION_ORDER = 95,
    OBSERVATION = 96,
    OBSERVATION_DEFINITION = 97,
    OPERATION_DEFINITION = 98,
    OPERATION_OUTCOME = 99,
    ORGANIZATION = 100,
    ORGANIZATION_AFFILIATION = 101,
    PARAMETERS = 102,
    PATIENT = 103,
    PAYMENT_NOTICE = 104,
    PAYMENT_RECONCILIATION = 105,
    PERSON = 106,
    PLAN_DEFINITION = 107,
    PRACTITIONER = 108,
    PRACTITIONER_ROLE = 109,
    PROCEDURE = 110,
    PROVENANCE = 111,
    QUESTIONNAIRE = 112,
    QUESTIONNAIRE_RESPONSE = 113,
    RELATED_PERSON = 114,
    REQUEST_GROUP = 115,
    RESEARCH_DEFINITION = 116,
    RESEARCH_ELEMENT_DEFINITION = 117,
    RESEARCH_STUDY = 118,
    RESEARCH_SUBJECT = 119,
    RISK_ASSESSMENT = 120,
    RISK_EVIDENCE_SYNTHESIS = 121,
    SCHEDULE = 122,
    SEARCH_PARAMETER = 123,
    SERVICE_REQUEST = 124,
    SLOT = 125,
    SPECIMEN = 126,
    SPECIMEN_DEFINITION = 127,
    STRUCTURE_DEFINITION = 128,
    STRUCTURE_MAP = 129,
    SUBSCRIPTION = 130,
    SUBSTANCE = 131,
    SUBSTANCE_NUCLEIC_ACID = 132,
    SUBSTANCE_POLYMER = 133,
    SUBSTANCE_PROTEIN = 134,
    SUBSTANCE_REFERENCE_INFORMATION = 135,
    SUBSTANCE_SOURCE_MATERIAL = 136,
    SUBSTANCE_SPECIFICATION = 137,
    SUPPLY_DELIVERY = 138,
    SUPPLY_REQUEST = 139,
    TASK = 140,
    TERMINOLOGY_CAPABILITIES = 141,
    TEST_REPORT = 142,
    TEST_SCRIPT = 143,
    VALUE_SET = 144,
    VERIFICATION_RESULT = 145,
    VISION_PRESCRIPTION = 146,
  }
}

