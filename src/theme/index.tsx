import { createMuiTheme, Theme } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0e4466",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Iceland",
  },

  overrides: {
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: "#fff",
      },
      barColorPrimary: {
        backgroundColor: "#F15D3C",
      },
    },
  },
});

export const styledTheme = {
  palette: {
    primary: {
      main: "#0e4466",
      contrastText: "#fff",
    },
    secondary: {
      main: "#17396B",
    },
  },

  typography: {
    fontFamily: "Iceland",
  },
};
