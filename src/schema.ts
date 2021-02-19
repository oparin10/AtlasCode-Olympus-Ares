import { AppConfig, BrandingConfig } from "./redux/types";
import { AdminItem } from "./types";
import _ from "lodash";

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
  {
    name: "blog",
    widget: "markdown",
    icon: "AddShoppingCart",
    label: "Blog posts",
    path: "blog",
  },
];

export const brandingConfig: BrandingConfig = {
  companyName: "AtlasCode",
  companyWebsite: "https://atlascode.dev",
  logoUrl: "https://i.imgur.com/9npexxg.png",
};

const schema: AppConfig = {
  branding: brandingConfig,
  collections: collectionsConfig,
  media_location: "",
};

export default schema;
