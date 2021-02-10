import { WarhorseConfig } from "./redux/types";

const schema: WarhorseConfig = {
  branding: {
    companyName: "AtlasCode",
    companyWebsite: "https://atlascode.dev",
    logoUrl: "https://i.imgur.com/9npexxg.png",
  },

  collections: [
    {
      name: "Teste1",
      fields: [
        {
          label: "Field 1 Test",
          name: "field1",
          value: "test",
          widget: "string",
        },
      ],
    },

    {
      name: "Test2",
      fields: [
        {
          label: "Field 2 test",
          name: "Field 2",
          value: "test2",
          widget: "string",
        },
      ],
    },
  ],
  media_location: "",
};

export default schema;
