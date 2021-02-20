import { LinearProgress, makeStyles } from "@material-ui/core";
import React from "react";

interface Props {
  isLoading: boolean;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
  },
}));

const Loading = ({ isLoading = true }: Props) => {
  const classes = useStyles();

  return (
    <div
      style={{ display: isLoading ? "block" : "none" }}
      className={classes.root}
    >
      <LinearProgress
        style={{ color: "#132f70", backgroundColor: "#fff", zIndex: 1000 }}
      />
    </div>
  );
};

export default Loading;
