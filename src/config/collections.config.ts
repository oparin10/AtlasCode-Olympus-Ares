import { FieldWidgetTypes, IconTypes, WidgetsTypes } from "../types";

export interface AdminCollectionField {
  name: string;
  fieldType: FieldWidgetTypes;
  label: string;
  validation: Array<string> | string | null | undefined;
  value?: string;
}

export interface AdminItem {
  collectionID: string;
  widget: WidgetsTypes;
  path: string;
  sidebarLabel: string;
  sidebarIcon: IconTypes;
  fields: Array<AdminCollectionField>;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    collectionID: "id1",
    widget: "string",
    sidebarIcon: "AttachMoney",
    sidebarLabel: "Teste1",
    path: "test",
    fields: [
      { label: "Título", name: "title", fieldType: "string", validation: "" },
      {
        label: "Other string field",
        name: "other",
        fieldType: "markdown",
        validation: "",
      },
    ],
  },
  {
    collectionID: "id2",
    widget: "markdown",
    sidebarIcon: "AddAPhoto",
    sidebarLabel: "Money1",
    path: "test2",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        fieldType: "markdown",
        validation: null,
      },
    ],
  },
  {
    collectionID: "id3",
    widget: "image",
    sidebarIcon: "AddCircle",
    sidebarLabel: "Image",
    path: "image",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        fieldType: "markdown",
        validation: null,
      },
    ],
  },

  {
    collectionID: "id4",
    widget: "text",
    sidebarIcon: "AddShoppingCart",
    sidebarLabel: "Security",
    path: "security",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        fieldType: "markdown",
        validation: null,
      },
    ],
  },
  {
    collectionID: "id5",
    widget: "string",
    sidebarIcon: "AcUnit",
    path: "amostra",
    sidebarLabel: "Amostra label",
    fields: [
      {
        label: "Blog title",
        name: "blogTitle",
        fieldType: "markdown",
        validation: null,
      },
    ],
  },
];
