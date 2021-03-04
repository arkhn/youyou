export type EditorOptionsButtonsType = {
  content: string;
  path: string;
  disabled: boolean;
};

export type EditorOptionsType = {
  name: string;
  description: string;
  buttons: EditorOptionsButtonsType[];
};

export const editorOptions: EditorOptionsType[] = [
  {
    name: 'Implementation Guide',
    description:
      'An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.',
    buttons: [
      {
        disabled: true,
        content: 'new',
        path: '/implementation-guides/choose-new'
      },
      {
        disabled: true,
        content: 'choose existing',
        path: '/implementation-guides/choose-existing'
      }
    ]
  },
  {
    name: 'Profile',
    description:
      'An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.',
    buttons: [
      {
        disabled: false,
        content: 'new',
        path: '/profile/edit'
      }
    ]
  },
  {
    name: 'Extension',
    description:
      'An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.',
    buttons: [
      {
        disabled: true,
        content: 'new',
        path: '/extension/edit'
      }
    ]
  }
];
