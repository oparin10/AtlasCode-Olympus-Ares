import { DataWidgetTypes, FieldWidgetTypes, IconTypes } from "../types";

export interface AdminCollectionField {
  name: string;
  fieldType: FieldWidgetTypes;
  label: string;
  validation?: Array<string> | string | RegExp;
  initialValue?: string | Array<string>;
  selectOptions?: Array<string>;
  private?: boolean;
}

export interface CategoryField {
  superCategory: string;
  subCategory?: string;
}

export interface AdminItem {
  collectionRef: string;
  dataWidget: DataWidgetTypes;
  routerPath: string;
  sidebarLabel: string;
  sidebarIcon: IconTypes;
  fields: Array<AdminCollectionField>;
  categories?: Array<string> | Array<CategoryField>;
  categoryDynamic?: boolean;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    collectionRef: "test",
    dataWidget: "table",
    sidebarIcon: "AttachMoney",
    sidebarLabel: "Teste1",
    routerPath: "test",
    categories: [],

    categoryDynamic: true,
    fields: [
      {
        label: "Tipo de carta",
        fieldType: "select",
        selectOptions: ["CARRO", "CASA", "MOTO"],
        name: "cardType",
      },

      {
        name: "creditValue",
        fieldType: "string",
        label: "Valor do crédito",
      },
      {
        label: "Categorias",
        name: "categoryList",
        fieldType: "categorySelect",
      },
      {
        label: "Post",
        fieldType: "markdown",
        name: "blogPost",
      },
      {
        label: "Cigarette",
        fieldType: "markdown",
        name: "more",
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
      },
    ],
  },
];
