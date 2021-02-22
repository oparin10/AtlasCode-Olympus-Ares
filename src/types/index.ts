import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type RouterItem = {
  path: string;
  component: (props: any) => JSX.Element;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export type BrandingConfig = {
  companyName: string | null;
  companyWebsite: string | null;
  logoUrl: string | null;
};

export interface DionysusImageURL {
  gallery: string;
  gallery_thumbnail: string;
  gallery_thumbnail_blur: string;
}

export interface AdminItem {
  name: string;
  widget: WidgetsTypes;
  path: string;
  label: string;
  icon: IconTypes;
}

export interface DionysusPath {
  gallery: string;
  galleryThumbnail: string;
  galleryThumbnailBlur?: string;
}

export interface DionysusConfig {
  path: DionysusPath;
  createBlur: boolean;
}

export interface AppConfig {
  dionysus: DionysusConfig;
  branding: BrandingConfig;
  collections: Array<AdminItem>;
}

export type WidgetsTypes = "string" | "image" | "markdown" | "text" | "login";
export type IconTypes =
  | "AttachMoney"
  | "AccountBalance"
  | "AcUnit"
  | "AccessAlarm"
  | "Accessibility"
  | "Accessible"
  | "AccountBox"
  | "Add"
  | "AddAPhoto"
  | "AddAlert"
  | "AddCircle"
  | "AddComment"
  | "AddPhotoAlternate"
  | "AddShoppingCart"
  | "Apps"
  | "PhotoLibrary"
  | "MoreHoriz";
