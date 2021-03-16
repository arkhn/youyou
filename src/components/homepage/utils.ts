export type EditorOptionsButtonsType = {
  content: string;
  path: string;
  disabled: boolean;
};

export type EditorOptionsType = {
  name: string;
  buttons: EditorOptionsButtonsType[];
};

export const editorOptions: EditorOptionsType[] = [
  {
    name: 'Implementation Guide',
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
    buttons: [
      {
        disabled: true,
        content: 'new',
        path: '/extension/edit'
      }
    ]
  }
];
