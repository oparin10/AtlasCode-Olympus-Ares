import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React from "react";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props}></MuiAlert>;
};

interface Props {}

const GlobalAlert = (props: Props) => {
  return (
    <div>
      <Snackbar open={true} autoHideDuration={6000} onClose={() => null}>
        <Alert severity="success" onClose={() => null}>
          This is the message
        </Alert>
      </Snackbar>
    </div>
  );
};

export default GlobalAlert;
