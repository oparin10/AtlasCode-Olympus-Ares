import { Map } from "immutable";
import { AppConfig } from "./redux/types";
import React from "react";
import StringWidget from "./components/Widgets/StringWidget";
import ImageWidget from "./components/Widgets/ImageWidget";
import MarkdownWidget from "./components/Widgets/MarkdownWidget";
import TextWidget from "./components/Widgets/TextWidget";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
import {
  AccountBalance,
  ImageAspectRatio,
  MonetizationOn,
  Security,
} from "@material-ui/icons";

export const WarhorseWidgets: any = {
  string: StringWidget,
  image: ImageWidget,
  markdown: MarkdownWidget,
  text: TextWidget,
};

export type WidgetsTypes = "string" | "image" | "markdown" | "text";

export type Widgets<T> = {
  [widget in WidgetsTypes]: T;
};

export const WidgetDictonary: Record<WidgetsTypes, JSX.Element | React.FC> = {
  image: ImageWidget,
  markdown: MarkdownWidget,
  string: StringWidget,
  text: TextWidget,
};

export const CollectionWidgets: Widgets<React.FC | JSX.Element> = {
  image: ImageWidget,
  markdown: MarkdownWidget,
  string: StringWidget,
  text: TextWidget,
};

interface AdminItem {
  component: (props: any) => JSX.Element;
  path: string;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

export const rootConfig: Array<AdminItem> = [
  {
    component: StringWidget,
    icon: AccountBalance,
    label: "Teste1",
    path: "test",
  },
  {
    component: MarkdownWidget,
    icon: MonetizationOn,
    label: "Money1",
    path: "test2",
  },
  {
    component: ImageWidget,
    icon: ImageAspectRatio,
    label: "Image",
    path: "image",
  },

  {
    component: TextWidget,
    icon: Security,
    label: "Security",
    path: "security",
  },
];

const schema: AppConfig = {
  branding: {
    companyName: "AtlasCode",
    companyWebsite: "https://atlascode.dev",
    logoUrl: "https://i.imgur.com/9npexxg.png",
  },

  media_location: "",
};

export default schema;
