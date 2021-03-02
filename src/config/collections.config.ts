import { IconTypes, WidgetsTypes } from "../types";

export interface AdminCollectionField {
  name: string;
  widget: WidgetsTypes;
  label: string;
  validation: Array<string> | string | null | undefined;
}

export interface AdminItem {
  collectionID: string;
  widget: WidgetsTypes;
  path: string;
  menuLabel: string;
  icon: IconTypes;
  fields: Array<AdminCollectionField>;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    collectionID: "id1",
    widget: "string",
    icon: "AttachMoney",
    menuLabel: "Teste1",
    path: "test",
    fields: [
      { label: "Título", name: "title", widget: "string", validation: "" },
    ],
  },
  {
    collectionID: "id2",
    widget: "markdown",
    icon: "AddAPhoto",
    menuLabel: "Money1",
    path: "test2",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        widget: "markdown",
        validation: null,
      },
    ],
  },
  {
    collectionID: "id3",
    widget: "image",
    icon: "AddCircle",
    menuLabel: "Image",
    path: "image",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        widget: "markdown",
        validation: null,
      },
    ],
  },

  {
    collectionID: "id4",
    widget: "text",
    icon: "AddShoppingCart",
    menuLabel: "Security",
    path: "security",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        widget: "markdown",
        validation: null,
      },
    ],
  },
  {
    collectionID: "id5",
    widget: "string",
    icon: "AcUnit",
    path: "amostra",
    menuLabel: "Amostra label",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        widget: "markdown",
        validation: null,
      },
    ],
  },
];
