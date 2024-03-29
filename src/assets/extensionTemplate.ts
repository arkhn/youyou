const StructureDefExtension = {
  resourceType: 'StructureDefinition',
  id: 'Logical id of the extension', // TBD GeneralSettings
  url: 'http://arkhn.com/extensions/extensionName', // TBD GeneralSettings
  version: '4.0.1',
  name: 'Name for this extension (computer friendly)', // TBD GeneralSettings
  title: 'Name for this extension (human friendly)', // TBD GeneralSettings
  status: 'active', // TBD GeneralSettings
  date: '2020-05-11', // TBD GeneralSettings
  publisher: 'Arkhn', // TBD GeneralSettings
  contact: [
    {
      telecom: [
        {
          system: 'url',
          value: 'http://arkhn.com'
        }
      ]
    }
  ],
  description: 'Natural language description of the extension', // TBD GeneralSettings
  fhirVersion: '4.0.1',
  mapping: [
    {
      identity: 'v2',
      uri: 'http://hl7.org/v2',
      name: 'HL7 v2 Mapping'
    },
    {
      identity: 'rim',
      uri: 'http://hl7.org/v3',
      name: 'RIM Mapping'
    }
  ],
  kind: 'complex-type',
  abstract: false,
  context: [
    {
      type: 'element',
      expression: 'ElementDefinition'
    },
    {
      type: 'element',
      expression: 'DiagnosticReport' // TBD select resources
    }
  ],
  type: 'Extension',
  baseDefinition: 'http://hl7.org/fhir/StructureDefinition/Extension',
  derivation: 'constraint',
  snapshot: {
    element: [
      {
        id: 'Extension',
        path: 'Extension',
        short: 'Concise definition for space-constrained presentation', // TBD
        definition: 'Full formal definition as narrative text', // TBD
        comment: 'Comments about the use of this element.', // TBD
        min: 0, // TBD
        max: '1', // TBD
        base: {
          path: 'Extension',
          min: 0,
          max: '*'
        },
        condition: ['ele-1'],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
            source: 'http://hl7.org/fhir/StructureDefinition/Element'
          },
          {
            key: 'ext-1',
            severity: 'error',
            human: 'Must have either extensions or value[x], not both',
            expression: 'extension.exists() != value.exists()',
            xpath:
              "exists(f:extension)!=exists(f:*[starts-with(local-name(.), 'value')])",
            source: 'http://hl7.org/fhir/StructureDefinition/Extension'
          }
        ],
        isModifier: false,
        mapping: [
          {
            identity: 'v2',
            map: 'N/A'
          },
          {
            identity: 'rim',
            map: 'N/A (MIF-level)'
          }
        ]
      },
      {
        id: 'Extension.id',
        path: 'Extension.id',
        representation: ['xmlAttr'],
        short: 'Unique id for inter-element referencing',
        definition:
          'Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
        min: 0,
        max: '1',
        base: {
          path: 'Element.id',
          min: 0,
          max: '1'
        },
        type: [
          {
            extension: [
              {
                url:
                  'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                valueUrl: 'string'
              }
            ],
            code: 'http://hl7.org/fhirpath/System.String'
          }
        ],
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: 'rim',
            map: 'n/a'
          }
        ]
      },
      {
        id: 'Extension.extension',
        path: 'Extension.extension',
        slicing: {
          discriminator: [
            {
              type: 'value',
              path: 'url'
            }
          ],
          description: 'Extensions are always sliced by (at least) url',
          rules: 'open'
        },
        short: 'Extension',
        definition: 'An Extension',
        min: 0,
        max: '0',
        base: {
          path: 'Element.extension',
          min: 0,
          max: '*'
        },
        type: [
          {
            code: 'Extension'
          }
        ],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
            source: 'http://hl7.org/fhir/StructureDefinition/Element'
          },
          {
            key: 'ext-1',
            severity: 'error',
            human: 'Must have either extensions or value[x], not both',
            expression: 'extension.exists() != value.exists()',
            xpath:
              'exists(f:extension)!=exists(f:*[starts-with(local-name(.), "value")])',
            source: 'http://hl7.org/fhir/StructureDefinition/Extension'
          }
        ],
        isModifier: false,
        isSummary: false
      },
      {
        id: 'Extension.url',
        path: 'Extension.url',
        representation: ['xmlAttr'],
        short: 'identifies the meaning of the extension',
        definition:
          'Source of the definition for the extension code - a logical name or a URL.',
        comment:
          'The definition may point directly to a computable or human-readable definition of the extensibility codes, or it may be a logical URI as declared in some other specification. The definition SHALL be a URI for the Structure Definition defining the extension.',
        min: 1,
        max: '1',
        base: {
          path: 'Extension.url',
          min: 1,
          max: '1'
        },
        type: [
          {
            extension: [
              {
                url:
                  'http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type',
                valueUrl: 'uri'
              }
            ],
            code: 'http://hl7.org/fhirpath/System.String'
          }
        ],
        fixedUri: 'http://arkhn.com/extensions/extensionName', // TBD
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: 'rim',
            map: 'N/A'
          }
        ]
      },
      {
        id: 'Extension.value[x]',
        path: 'Extension.value[x]',
        short: 'Value of extension',
        definition:
          'Value of extension - must be one of a constrained set of the data types (see [Extensibility](http://hl7.org/fhir/extensibility.html) for a list).',
        min: 0,
        max: '1',
        base: {
          path: 'Extension.value[x]',
          min: 0,
          max: '1'
        },
        type: [
          {
            code: 'string' // TBD
          }
        ],
        constraint: [
          {
            key: 'ele-1',
            severity: 'error',
            human: 'All FHIR elements must have a @value or children',
            expression: 'hasValue() or (children().count() > id.count())',
            xpath: '@value|f:*|h:div',
            source: 'http://hl7.org/fhir/StructureDefinition/Element'
          }
        ],
        isModifier: false,
        isSummary: false,
        mapping: [
          {
            identity: 'rim',
            map: 'N/A'
          }
        ]
      }
    ]
  },
  differential: {
    element: [
      {
        id: 'Extension',
        path: 'Extension',
        short: 'Concise definition for space-constrained presentation', // TBD
        definition: 'Full formal definition as narrative text', // TBD
        comment: 'Comments about the use of this element', // TBD
        min: 0, // TBD
        max: '1', // TBD
        mapping: [
          {
            identity: 'v2',
            map: 'N/A'
          },
          {
            identity: 'rim',
            map: 'N/A (MIF-level)'
          }
        ]
      },
      {
        id: 'Extension.extension',
        path: 'Extension.extension',
        max: '0'
      },
      {
        id: 'Extension.url',
        path: 'Extension.url',
        fixedUri: 'http://arkhn.com/extensions/extensionName' // TBD
      },
      {
        id: 'Extension.value[x]',
        path: 'Extension.value[x]',
        min: 0,
        type: [
          {
            code: 'string' // TBD
          }
        ]
      }
    ]
  }
};

export default StructureDefExtension;
