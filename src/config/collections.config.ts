import {
  DataWidgetTypes,
  FieldWidgetTypes,
  IconTypes,
  WidgetsTypes,
} from "../types";

export interface AdminCollectionField {
  name: string;
  fieldType: FieldWidgetTypes;
  label: string;
  validation: Array<string> | string | null | undefined | RegExp;
  defaultValue?: string;
}

export interface AdminItem {
  collectionRef: string;
  dataWidget: DataWidgetTypes;
  routerPath: string;
  sidebarLabel: string;
  sidebarIcon: IconTypes;
  fields: Array<AdminCollectionField>;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    collectionRef: "testCollection",
    dataWidget: "table",
    sidebarIcon: "AttachMoney",
    sidebarLabel: "Teste1",
    routerPath: "test",
    fields: [
      {
        label: "Título",
        name: "title",
        fieldType: "string",
        validation: "",
        defaultValue: "defaultValueTest",
      },
      {
        label: "Other string field",
        name: "other",
        fieldType: "markdown",
        validation: "",
      },
    ],
  },
  {
    collectionRef: "id2",
    dataWidget: "table",
    sidebarIcon: "AddAPhoto",
    sidebarLabel: "Money1",
    routerPath: "test2",
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
    collectionRef: "id3",
    dataWidget: "table",
    sidebarIcon: "AddCircle",
    sidebarLabel: "Image",
    routerPath: "image",
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
    collectionRef: "id4",
    dataWidget: "table",
    sidebarIcon: "AddShoppingCart",
    sidebarLabel: "Security",
    routerPath: "security",
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
    collectionRef: "id5",
    dataWidget: "table",
    sidebarIcon: "AcUnit",
    routerPath: "amostra",
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
