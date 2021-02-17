import { AppConfig, BrandingConfig } from "./redux/types";
import { AdminItem } from "./types";

export const collectionsConfig: Array<AdminItem> = [
  {
    widget: "string",
    icon: "AttachMoney",
    label: "Teste1",
    path: "test",
  },
  {
    widget: "markdown",
    icon: "AddAPhoto",
    label: "Money1",
    path: "test2",
  },
  {
    widget: "image",
    icon: "AddCircle",
    label: "Image",
    path: "image",
  },

  {
    widget: "text",
    icon: "AddShoppingCart",
    label: "Security",
    path: "security",
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
