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
import { AdminItem } from "./types";


export const collectionsConfig: Array<AdminItem> = [
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

  collections: collectionsConfig,

  media_location: "",
};

export default schema;
