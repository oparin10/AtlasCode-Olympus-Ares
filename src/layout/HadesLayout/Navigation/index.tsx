import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";

interface SimpleTabsProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function SimpleTabs({ index, value, children, dir }: SimpleTabsProps) {
  return (
    <div>
      {value === index && (
        <Box height={"100%"} p={1.5}>
          {children}
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eaeff2",
  },

  appbar: {
    backgroundColor: "#eaeff2",
    boxShadow: "none",
    color: "#333",
    borderBottom: "1px solid #c3cfdd",
  },
}));

export default function LayoutNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Itens" />
          <Tab label="Categorias" />
          <Tab label="Atributos" />
        </Tabs>
      </AppBar>
      <SimpleTabs value={value} index={0}>
        <Box height={"500px"}>hehe</Box>
      </SimpleTabs>
      <SimpleTabs value={value} index={1}>
        tab2
      </SimpleTabs>
      <SimpleTabs value={value} index={2}>
        tab3
      </SimpleTabs>
    </div>
  );
}
