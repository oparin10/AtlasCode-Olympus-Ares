import { DataWidgetTypes, FieldWidgetTypes, IconTypes } from "../types";

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
  categories?: Array<string>;
  categoryDynamic?: boolean;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    collectionRef: "test",
    dataWidget: "table",
    sidebarIcon: "AttachMoney",
    sidebarLabel: "Teste1",
    routerPath: "test",
    categories: ["category1", "category2", "category3"],
    categoryDynamic: true,
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
        fieldType: "string",
        validation: "",
      },
      {
        label: "Cigarette",
        fieldType: "string",
        name: "more",
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
        fieldType: "string",
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
