// package: google.fhir.r4.core
// file: proto/r4/core/resources/parameters.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as proto_annotations_pb from "../../../../proto/annotations_pb";
import * as proto_r4_core_datatypes_pb from "../../../../proto/r4/core/datatypes_pb";

export class Parameters extends jspb.Message {
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

  clearParameter(): void;
  getParameter(): Array<Parameters.Parameter>;
  setParameter(value: Array<Parameters.Parameter>): void;
  addParameter(value?: Parameters.Parameter, index?: number): Parameters.Parameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Parameters.AsObject;
  static toObject(includeInstance: boolean, msg: Parameters): Parameters.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Parameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Parameters;
  static deserializeBinaryFromReader(message: Parameters, reader: jspb.BinaryReader): Parameters;
}

export namespace Parameters {
  export type AsObject = {
    id?: proto_r4_core_datatypes_pb.Id.AsObject,
    meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
    implicitRules?: proto_r4_core_datatypes_pb.Uri.AsObject,
    language?: proto_r4_core_datatypes_pb.Code.AsObject,
    parameter: Array<Parameters.Parameter.AsObject>,
  }

  export class Parameter extends jspb.Message {
    hasId(): boolean;
    clearId(): void;
    getId(): proto_r4_core_datatypes_pb.String | undefined;
    setId(value?: proto_r4_core_datatypes_pb.String): void;

    clearExtension(): void;
    getExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    clearModifierExtension(): void;
    getModifierExtension(): Array<proto_r4_core_datatypes_pb.Extension>;
    setModifierExtension(value: Array<proto_r4_core_datatypes_pb.Extension>): void;
    addModifierExtension(value?: proto_r4_core_datatypes_pb.Extension, index?: number): proto_r4_core_datatypes_pb.Extension;

    hasName(): boolean;
    clearName(): void;
    getName(): proto_r4_core_datatypes_pb.String | undefined;
    setName(value?: proto_r4_core_datatypes_pb.String): void;

    hasValue(): boolean;
    clearValue(): void;
    getValue(): Parameters.Parameter.ValueX | undefined;
    setValue(value?: Parameters.Parameter.ValueX): void;

    hasResource(): boolean;
    clearResource(): void;
    getResource(): google_protobuf_any_pb.Any | undefined;
    setResource(value?: google_protobuf_any_pb.Any): void;

    clearPart(): void;
    getPart(): Array<Parameters.Parameter>;
    setPart(value: Array<Parameters.Parameter>): void;
    addPart(value?: Parameters.Parameter, index?: number): Parameters.Parameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Parameter.AsObject;
    static toObject(includeInstance: boolean, msg: Parameter): Parameter.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Parameter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Parameter;
    static deserializeBinaryFromReader(message: Parameter, reader: jspb.BinaryReader): Parameter;
  }

  export namespace Parameter {
    export type AsObject = {
      id?: proto_r4_core_datatypes_pb.String.AsObject,
      extension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      modifierExtension: Array<proto_r4_core_datatypes_pb.Extension.AsObject>,
      name?: proto_r4_core_datatypes_pb.String.AsObject,
      value?: Parameters.Parameter.ValueX.AsObject,
      resource?: google_protobuf_any_pb.Any.AsObject,
      part: Array<Parameters.Parameter.AsObject>,
    }

    export class ValueX extends jspb.Message {
      hasBase64Binary(): boolean;
      clearBase64Binary(): void;
      getBase64Binary(): proto_r4_core_datatypes_pb.Base64Binary | undefined;
      setBase64Binary(value?: proto_r4_core_datatypes_pb.Base64Binary): void;

      hasBoolean(): boolean;
      clearBoolean(): void;
      getBoolean(): proto_r4_core_datatypes_pb.Boolean | undefined;
      setBoolean(value?: proto_r4_core_datatypes_pb.Boolean): void;

      hasCanonical(): boolean;
      clearCanonical(): void;
      getCanonical(): proto_r4_core_datatypes_pb.Canonical | undefined;
      setCanonical(value?: proto_r4_core_datatypes_pb.Canonical): void;

      hasCode(): boolean;
      clearCode(): void;
      getCode(): proto_r4_core_datatypes_pb.Code | undefined;
      setCode(value?: proto_r4_core_datatypes_pb.Code): void;

      hasDate(): boolean;
      clearDate(): void;
      getDate(): proto_r4_core_datatypes_pb.Date | undefined;
      setDate(value?: proto_r4_core_datatypes_pb.Date): void;

      hasDateTime(): boolean;
      clearDateTime(): void;
      getDateTime(): proto_r4_core_datatypes_pb.DateTime | undefined;
      setDateTime(value?: proto_r4_core_datatypes_pb.DateTime): void;

      hasDecimal(): boolean;
      clearDecimal(): void;
      getDecimal(): proto_r4_core_datatypes_pb.Decimal | undefined;
      setDecimal(value?: proto_r4_core_datatypes_pb.Decimal): void;

      hasId(): boolean;
      clearId(): void;
      getId(): proto_r4_core_datatypes_pb.Id | undefined;
      setId(value?: proto_r4_core_datatypes_pb.Id): void;

      hasInstant(): boolean;
      clearInstant(): void;
      getInstant(): proto_r4_core_datatypes_pb.Instant | undefined;
      setInstant(value?: proto_r4_core_datatypes_pb.Instant): void;

      hasInteger(): boolean;
      clearInteger(): void;
      getInteger(): proto_r4_core_datatypes_pb.Integer | undefined;
      setInteger(value?: proto_r4_core_datatypes_pb.Integer): void;

      hasMarkdown(): boolean;
      clearMarkdown(): void;
      getMarkdown(): proto_r4_core_datatypes_pb.Markdown | undefined;
      setMarkdown(value?: proto_r4_core_datatypes_pb.Markdown): void;

      hasOid(): boolean;
      clearOid(): void;
      getOid(): proto_r4_core_datatypes_pb.Oid | undefined;
      setOid(value?: proto_r4_core_datatypes_pb.Oid): void;

      hasPositiveInt(): boolean;
      clearPositiveInt(): void;
      getPositiveInt(): proto_r4_core_datatypes_pb.PositiveInt | undefined;
      setPositiveInt(value?: proto_r4_core_datatypes_pb.PositiveInt): void;

      hasStringValue(): boolean;
      clearStringValue(): void;
      getStringValue(): proto_r4_core_datatypes_pb.String | undefined;
      setStringValue(value?: proto_r4_core_datatypes_pb.String): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): proto_r4_core_datatypes_pb.Time | undefined;
      setTime(value?: proto_r4_core_datatypes_pb.Time): void;

      hasUnsignedInt(): boolean;
      clearUnsignedInt(): void;
      getUnsignedInt(): proto_r4_core_datatypes_pb.UnsignedInt | undefined;
      setUnsignedInt(value?: proto_r4_core_datatypes_pb.UnsignedInt): void;

      hasUri(): boolean;
      clearUri(): void;
      getUri(): proto_r4_core_datatypes_pb.Uri | undefined;
      setUri(value?: proto_r4_core_datatypes_pb.Uri): void;

      hasUrl(): boolean;
      clearUrl(): void;
      getUrl(): proto_r4_core_datatypes_pb.Url | undefined;
      setUrl(value?: proto_r4_core_datatypes_pb.Url): void;

      hasUuid(): boolean;
      clearUuid(): void;
      getUuid(): proto_r4_core_datatypes_pb.Uuid | undefined;
      setUuid(value?: proto_r4_core_datatypes_pb.Uuid): void;

      hasAddress(): boolean;
      clearAddress(): void;
      getAddress(): proto_r4_core_datatypes_pb.Address | undefined;
      setAddress(value?: proto_r4_core_datatypes_pb.Address): void;

      hasAge(): boolean;
      clearAge(): void;
      getAge(): proto_r4_core_datatypes_pb.Age | undefined;
      setAge(value?: proto_r4_core_datatypes_pb.Age): void;

      hasAnnotation(): boolean;
      clearAnnotation(): void;
      getAnnotation(): proto_r4_core_datatypes_pb.Annotation | undefined;
      setAnnotation(value?: proto_r4_core_datatypes_pb.Annotation): void;

      hasAttachment(): boolean;
      clearAttachment(): void;
      getAttachment(): proto_r4_core_datatypes_pb.Attachment | undefined;
      setAttachment(value?: proto_r4_core_datatypes_pb.Attachment): void;

      hasCodeableConcept(): boolean;
      clearCodeableConcept(): void;
      getCodeableConcept(): proto_r4_core_datatypes_pb.CodeableConcept | undefined;
      setCodeableConcept(value?: proto_r4_core_datatypes_pb.CodeableConcept): void;

      hasCoding(): boolean;
      clearCoding(): void;
      getCoding(): proto_r4_core_datatypes_pb.Coding | undefined;
      setCoding(value?: proto_r4_core_datatypes_pb.Coding): void;

      hasContactPoint(): boolean;
      clearContactPoint(): void;
      getContactPoint(): proto_r4_core_datatypes_pb.ContactPoint | undefined;
      setContactPoint(value?: proto_r4_core_datatypes_pb.ContactPoint): void;

      hasCount(): boolean;
      clearCount(): void;
      getCount(): proto_r4_core_datatypes_pb.Count | undefined;
      setCount(value?: proto_r4_core_datatypes_pb.Count): void;

      hasDistance(): boolean;
      clearDistance(): void;
      getDistance(): proto_r4_core_datatypes_pb.Distance | undefined;
      setDistance(value?: proto_r4_core_datatypes_pb.Distance): void;

      hasDuration(): boolean;
      clearDuration(): void;
      getDuration(): proto_r4_core_datatypes_pb.Duration | undefined;
      setDuration(value?: proto_r4_core_datatypes_pb.Duration): void;

      hasHumanName(): boolean;
      clearHumanName(): void;
      getHumanName(): proto_r4_core_datatypes_pb.HumanName | undefined;
      setHumanName(value?: proto_r4_core_datatypes_pb.HumanName): void;

      hasIdentifier(): boolean;
      clearIdentifier(): void;
      getIdentifier(): proto_r4_core_datatypes_pb.Identifier | undefined;
      setIdentifier(value?: proto_r4_core_datatypes_pb.Identifier): void;

      hasMoney(): boolean;
      clearMoney(): void;
      getMoney(): proto_r4_core_datatypes_pb.Money | undefined;
      setMoney(value?: proto_r4_core_datatypes_pb.Money): void;

      hasPeriod(): boolean;
      clearPeriod(): void;
      getPeriod(): proto_r4_core_datatypes_pb.Period | undefined;
      setPeriod(value?: proto_r4_core_datatypes_pb.Period): void;

      hasQuantity(): boolean;
      clearQuantity(): void;
      getQuantity(): proto_r4_core_datatypes_pb.Quantity | undefined;
      setQuantity(value?: proto_r4_core_datatypes_pb.Quantity): void;

      hasRange(): boolean;
      clearRange(): void;
      getRange(): proto_r4_core_datatypes_pb.Range | undefined;
      setRange(value?: proto_r4_core_datatypes_pb.Range): void;

      hasRatio(): boolean;
      clearRatio(): void;
      getRatio(): proto_r4_core_datatypes_pb.Ratio | undefined;
      setRatio(value?: proto_r4_core_datatypes_pb.Ratio): void;

      hasReference(): boolean;
      clearReference(): void;
      getReference(): proto_r4_core_datatypes_pb.Reference | undefined;
      setReference(value?: proto_r4_core_datatypes_pb.Reference): void;

      hasSampledData(): boolean;
      clearSampledData(): void;
      getSampledData(): proto_r4_core_datatypes_pb.SampledData | undefined;
      setSampledData(value?: proto_r4_core_datatypes_pb.SampledData): void;

      hasSignature(): boolean;
      clearSignature(): void;
      getSignature(): proto_r4_core_datatypes_pb.Signature | undefined;
      setSignature(value?: proto_r4_core_datatypes_pb.Signature): void;

      hasTiming(): boolean;
      clearTiming(): void;
      getTiming(): proto_r4_core_datatypes_pb.Timing | undefined;
      setTiming(value?: proto_r4_core_datatypes_pb.Timing): void;

      hasContactDetail(): boolean;
      clearContactDetail(): void;
      getContactDetail(): proto_r4_core_datatypes_pb.ContactDetail | undefined;
      setContactDetail(value?: proto_r4_core_datatypes_pb.ContactDetail): void;

      hasContributor(): boolean;
      clearContributor(): void;
      getContributor(): proto_r4_core_datatypes_pb.Contributor | undefined;
      setContributor(value?: proto_r4_core_datatypes_pb.Contributor): void;

      hasDataRequirement(): boolean;
      clearDataRequirement(): void;
      getDataRequirement(): proto_r4_core_datatypes_pb.DataRequirement | undefined;
      setDataRequirement(value?: proto_r4_core_datatypes_pb.DataRequirement): void;

      hasExpression(): boolean;
      clearExpression(): void;
      getExpression(): proto_r4_core_datatypes_pb.Expression | undefined;
      setExpression(value?: proto_r4_core_datatypes_pb.Expression): void;

      hasParameterDefinition(): boolean;
      clearParameterDefinition(): void;
      getParameterDefinition(): proto_r4_core_datatypes_pb.ParameterDefinition | undefined;
      setParameterDefinition(value?: proto_r4_core_datatypes_pb.ParameterDefinition): void;

      hasRelatedArtifact(): boolean;
      clearRelatedArtifact(): void;
      getRelatedArtifact(): proto_r4_core_datatypes_pb.RelatedArtifact | undefined;
      setRelatedArtifact(value?: proto_r4_core_datatypes_pb.RelatedArtifact): void;

      hasTriggerDefinition(): boolean;
      clearTriggerDefinition(): void;
      getTriggerDefinition(): proto_r4_core_datatypes_pb.TriggerDefinition | undefined;
      setTriggerDefinition(value?: proto_r4_core_datatypes_pb.TriggerDefinition): void;

      hasUsageContext(): boolean;
      clearUsageContext(): void;
      getUsageContext(): proto_r4_core_datatypes_pb.UsageContext | undefined;
      setUsageContext(value?: proto_r4_core_datatypes_pb.UsageContext): void;

      hasDosage(): boolean;
      clearDosage(): void;
      getDosage(): proto_r4_core_datatypes_pb.Dosage | undefined;
      setDosage(value?: proto_r4_core_datatypes_pb.Dosage): void;

      hasMeta(): boolean;
      clearMeta(): void;
      getMeta(): proto_r4_core_datatypes_pb.Meta | undefined;
      setMeta(value?: proto_r4_core_datatypes_pb.Meta): void;

      getChoiceCase(): ValueX.ChoiceCase;
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ValueX.AsObject;
      static toObject(includeInstance: boolean, msg: ValueX): ValueX.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: ValueX, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ValueX;
      static deserializeBinaryFromReader(message: ValueX, reader: jspb.BinaryReader): ValueX;
    }

    export namespace ValueX {
      export type AsObject = {
        base64Binary?: proto_r4_core_datatypes_pb.Base64Binary.AsObject,
        pb_boolean?: proto_r4_core_datatypes_pb.Boolean.AsObject,
        canonical?: proto_r4_core_datatypes_pb.Canonical.AsObject,
        code?: proto_r4_core_datatypes_pb.Code.AsObject,
        date?: proto_r4_core_datatypes_pb.Date.AsObject,
        dateTime?: proto_r4_core_datatypes_pb.DateTime.AsObject,
        decimal?: proto_r4_core_datatypes_pb.Decimal.AsObject,
        id?: proto_r4_core_datatypes_pb.Id.AsObject,
        instant?: proto_r4_core_datatypes_pb.Instant.AsObject,
        integer?: proto_r4_core_datatypes_pb.Integer.AsObject,
        markdown?: proto_r4_core_datatypes_pb.Markdown.AsObject,
        oid?: proto_r4_core_datatypes_pb.Oid.AsObject,
        positiveInt?: proto_r4_core_datatypes_pb.PositiveInt.AsObject,
        stringValue?: proto_r4_core_datatypes_pb.String.AsObject,
        time?: proto_r4_core_datatypes_pb.Time.AsObject,
        unsignedInt?: proto_r4_core_datatypes_pb.UnsignedInt.AsObject,
        uri?: proto_r4_core_datatypes_pb.Uri.AsObject,
        url?: proto_r4_core_datatypes_pb.Url.AsObject,
        uuid?: proto_r4_core_datatypes_pb.Uuid.AsObject,
        address?: proto_r4_core_datatypes_pb.Address.AsObject,
        age?: proto_r4_core_datatypes_pb.Age.AsObject,
        annotation?: proto_r4_core_datatypes_pb.Annotation.AsObject,
        attachment?: proto_r4_core_datatypes_pb.Attachment.AsObject,
        codeableConcept?: proto_r4_core_datatypes_pb.CodeableConcept.AsObject,
        coding?: proto_r4_core_datatypes_pb.Coding.AsObject,
        contactPoint?: proto_r4_core_datatypes_pb.ContactPoint.AsObject,
        count?: proto_r4_core_datatypes_pb.Count.AsObject,
        distance?: proto_r4_core_datatypes_pb.Distance.AsObject,
        duration?: proto_r4_core_datatypes_pb.Duration.AsObject,
        humanName?: proto_r4_core_datatypes_pb.HumanName.AsObject,
        identifier?: proto_r4_core_datatypes_pb.Identifier.AsObject,
        money?: proto_r4_core_datatypes_pb.Money.AsObject,
        period?: proto_r4_core_datatypes_pb.Period.AsObject,
        quantity?: proto_r4_core_datatypes_pb.Quantity.AsObject,
        range?: proto_r4_core_datatypes_pb.Range.AsObject,
        ratio?: proto_r4_core_datatypes_pb.Ratio.AsObject,
        reference?: proto_r4_core_datatypes_pb.Reference.AsObject,
        sampledData?: proto_r4_core_datatypes_pb.SampledData.AsObject,
        signature?: proto_r4_core_datatypes_pb.Signature.AsObject,
        timing?: proto_r4_core_datatypes_pb.Timing.AsObject,
        contactDetail?: proto_r4_core_datatypes_pb.ContactDetail.AsObject,
        contributor?: proto_r4_core_datatypes_pb.Contributor.AsObject,
        dataRequirement?: proto_r4_core_datatypes_pb.DataRequirement.AsObject,
        expression?: proto_r4_core_datatypes_pb.Expression.AsObject,
        parameterDefinition?: proto_r4_core_datatypes_pb.ParameterDefinition.AsObject,
        relatedArtifact?: proto_r4_core_datatypes_pb.RelatedArtifact.AsObject,
        triggerDefinition?: proto_r4_core_datatypes_pb.TriggerDefinition.AsObject,
        usageContext?: proto_r4_core_datatypes_pb.UsageContext.AsObject,
        dosage?: proto_r4_core_datatypes_pb.Dosage.AsObject,
        meta?: proto_r4_core_datatypes_pb.Meta.AsObject,
      }

      export enum ChoiceCase {
        CHOICE_NOT_SET = 0,
        BASE64_BINARY = 1,
        BOOLEAN = 2,
        CANONICAL = 3,
        CODE = 4,
        DATE = 5,
        DATE_TIME = 6,
        DECIMAL = 7,
        ID = 8,
        INSTANT = 9,
        INTEGER = 10,
        MARKDOWN = 11,
        OID = 12,
        POSITIVE_INT = 13,
        STRING_VALUE = 14,
        TIME = 15,
        UNSIGNED_INT = 16,
        URI = 17,
        URL = 18,
        UUID = 19,
        ADDRESS = 20,
        AGE = 21,
        ANNOTATION = 22,
        ATTACHMENT = 23,
        CODEABLE_CONCEPT = 24,
        CODING = 25,
        CONTACT_POINT = 26,
        COUNT = 27,
        DISTANCE = 28,
        DURATION = 29,
        HUMAN_NAME = 30,
        IDENTIFIER = 31,
        MONEY = 32,
        PERIOD = 33,
        QUANTITY = 34,
        RANGE = 35,
        RATIO = 36,
        REFERENCE = 37,
        SAMPLED_DATA = 38,
        SIGNATURE = 39,
        TIMING = 40,
        CONTACT_DETAIL = 41,
        CONTRIBUTOR = 42,
        DATA_REQUIREMENT = 43,
        EXPRESSION = 44,
        PARAMETER_DEFINITION = 45,
        RELATED_ARTIFACT = 46,
        TRIGGER_DEFINITION = 47,
        USAGE_CONTEXT = 48,
        DOSAGE = 49,
        META = 50,
      }
    }
  }
}

