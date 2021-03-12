import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { Fade, Grow, Zoom } from "@material-ui/core";
import { AdminItem } from "../../../config/collections.config";
import { RootState } from "../../../redux";
import { connect, ConnectedProps } from "react-redux";

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

interface LayoutNavigationProps extends LayoutNavigationReduxProps {}

const LayoutNavigation = ({ activeCollection }: LayoutNavigationProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
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

          {activeCollection?.hasCategories ? <Tab label="Categorias" /> : null}

          {activeCollection?.hasAttributes ? <Tab label="Atributos" /> : null}
        </Tabs>
      </AppBar>
      <SimpleTabs value={value} index={0}>
        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div>tab 1</div>
        </Fade>
      </SimpleTabs>

      {activeCollection?.hasCategories ? (
        <SimpleTabs value={value} index={1}>
          <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
            <div>tab 2</div>
          </Fade>
        </SimpleTabs>
      ) : null}

      {activeCollection?.hasAttributes ? (
        <SimpleTabs value={value} index={2}>
          <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
            <div>tab 3</div>
          </Fade>
        </SimpleTabs>
      ) : null}
    </div>
  );
};

const mapStateToProps = (rootState: RootState) => ({
  activeCollection: rootState.activeCollection,
});

const mapDispatchToProps = {};

const layoutNavigationConnector = connect(mapStateToProps, mapDispatchToProps);

export type LayoutNavigationReduxProps = ConnectedProps<
  typeof layoutNavigationConnector
>;

export default layoutNavigationConnector(LayoutNavigation);
