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

  console.log(isLoading);

  return (
    <div
      style={{ display: isLoading ? "block" : "none" }}
      className={classes.root}
    >
      <LinearProgress />
    </div>
  );
};

export default Loading;
