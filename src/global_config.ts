import {
  AdminItem,
  AppConfig,
  BrandingConfig,
  DionysusConfig,
  DionysusPath,
} from "./types";
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
    icon: "MoreHoriz",
    label: "Blog posts",
    path: "blog",
  },
];

export const brandingConfig: BrandingConfig = {
  companyName: "AtlasCode",
  companyWebsite: "https://atlascode.dev",
  logoUrl: "https://i.imgur.com/9npexxg.png",
};

const imageGalleryPath: DionysusPath = {
  gallery: "gallery",
  galleryThumbnail: "gallery_thumbnail",
  galleryThumbnailBlur: "gallery_thumbnail_blur",
};

const dionysusConfig: DionysusConfig = {
  path: imageGalleryPath,
  createBlur: true,
  storageBucketPath: "atlas-ares.appspot.com",
};

export const global_config: AppConfig = {
  branding: brandingConfig,
  collections: collectionsConfig,
  dionysus: dionysusConfig,
};

export default global_config;
