import { Map } from "immutable";
import { WarhorseConfig } from "./redux/types";
import React from "react";
import StringWidget from "./components/Widgets/StringWidget";
import ImageWidget from "./components/Widgets/ImageWidget";
import MarkdownWidget from "./components/Widgets/MarkdownWidget";
import TextWidget from "./components/Widgets/TextWidget";

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

const schema: WarhorseConfig = {
  branding: {
    companyName: "AtlasCode",
    companyWebsite: "https://atlascode.dev",
    logoUrl: "https://i.imgur.com/9npexxg.png",
  },

  // CMS -> Criar sua primeira coleção -> Posts ----- [ Label: imagem principal, name: field1, widget: 'string'  ]

  // Calça --->

  collections: [
    {
      name: "Posts",
      fields: [
        {
          label: "Field 1 Test",
          name: "field1",
          value: "test",
          widget: "string",
        },

        {
          label: "Altura",
          name: "height",
          widget: "string",
          value: "",
        },
      ],
    },

    {
      name: "Eventos",
      fields: [
        {
          label: "Field 2 test",
          name: "Field 2",
          value: "test2",
          widget: "string",
        },
      ],
    },

    {
      name: "Produtos",
      fields: [
        {
          label: "Nome do produto",
          name: "productName",
          value: "",
          widget: "string",
        },

        {
          label: "Foto do produto",
          name: "productPhoto",
          value: "",
          widget: "image",
        },

        {
          label: "Descrição do produto",
          name: "productDescription",
          value: "",
          widget: "text",
        },
      ],
    },
  ],
  media_location: "",
};

export default schema;
