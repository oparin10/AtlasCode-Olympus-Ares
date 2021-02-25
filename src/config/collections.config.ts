import { IconTypes, WidgetsTypes } from "../types";

export interface AdminItem {
  name: string;
  widget: WidgetsTypes;
  path: string;
  label: string;
  icon: IconTypes;
}

export const collectionsConfig: Array<AdminItem> = [
  {
    name: "id1",
    widget: "string",
    icon: "AttachMoney",
    label: "Teste1",
    path: "test",
  },
  {
    name: "id2",
    widget: "markdown",
    icon: "AddAPhoto",
    label: "Money1",
    path: "test2",
  },
  {
    name: "id3",
    widget: "image",
    icon: "AddCircle",
    label: "Image",
    path: "image",
  },

  {
    name: "id4",
    widget: "text",
    icon: "AddShoppingCart",
    label: "Security",
    path: "security",
  },
  {
    name: "id5",
    widget: "string",
    icon: "AcUnit",
    path: "amostra",
    label: "Amostra label",
  },
 
];
