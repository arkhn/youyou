export type ChoosingCardsItemsType = {
  name: string;
  description: string;
  buttons: {
    content: string;
    path: string;
  }[];
};

export const choosingCardsItems: ChoosingCardsItemsType[] = [
  {
    name: "Implementation Guide",
    description:
      "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
    buttons: [
      {
        content: "new",
        path: "/implementation-guides/choose-new"
      },
      {
        content: "choose existing",
        path: "/implementation-guides/choose-existing"
      }
    ]
  },
  {
    name: "Profile (Patient)",
    description:
      "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
    buttons: [
      {
        content: "new",
        path: "/profile/edit"
      }
    ]
  },
  {
    name: "Extension",
    description:
      "An implementation guide (IG) is a set of rules about how FHIR resources are used (or should be used) to solve a particular problem, with associated documentation to support and clarify the usage. Classically, FHIR implementation guides are published on the web after they are generated using the FHIR Implementation Guide Publisher.",
    buttons: [
      {
        content: "new",
        path: "/extension/edit"
      }
    ]
  }
];
