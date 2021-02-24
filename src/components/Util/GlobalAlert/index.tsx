import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import React from "react";
import { useDispatch } from "react-redux";
import { setGlobalNotificationClosed } from "../../../redux/globalUI/actions";
import { AlertSeverity } from "../../../redux/globalUI/types";

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props}></MuiAlert>;
};

interface Props {
  alertMessage: string;
  alertSeverity: AlertSeverity;
  alertOpen: boolean;
}

const GlobalAlert = ({ alertMessage, alertOpen, alertSeverity }: Props) => {
  const dispatch = useDispatch();

  const closeAlert = () => {
    dispatch(setGlobalNotificationClosed());
  };

  return (
    <div>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={closeAlert}>
        <Alert severity={alertSeverity} onClose={closeAlert}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default GlobalAlert;
