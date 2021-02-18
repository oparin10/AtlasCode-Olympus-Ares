import { createMuiTheme, Theme } from "@material-ui/core";

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#289FEB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Barlow",
  },
});

export const styledTheme = {
  palette: {
    primary: {
      main: "#289FEB",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Barlow",
  },
};
