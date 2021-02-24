import { Fade, LinearProgress, makeStyles } from "@material-ui/core";
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
    zIndex: 9999,
  },
}));

const Loading = ({ isLoading = true }: Props) => {
  const classes = useStyles();

  return (
    <Fade in={isLoading} timeout={{ enter: 250, exit: 250 }}>
      <div
        style={{ display: isLoading ? "block" : "none" }}
        className={classes.root}
      >
        <LinearProgress />
      </div>
    </Fade>
  );
};

export default Loading;
