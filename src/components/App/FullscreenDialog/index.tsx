import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { connect, ConnectedProps } from "react-redux";
import IconComponent from "../IconComponent";
import { Box } from "@material-ui/core";
import { galleryOpen } from "../../../redux/adonis/actions";

import { RootState } from "../../../redux/";
import FieldWidgetComponent from "../../RootComponents/FieldWidgetComponent";
import { draftDiscard } from "../../../redux/draft/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props extends PropsFromRedux {}

function FullScreenDialog({
  openGallery,
  fields,
  isOpen,
  draftDiscard,
}: Props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen!}
        onClose={draftDiscard}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={draftDiscard}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Box onClick={openGallery}>
              <IconComponent clickable iconType="AddAPhoto" />
            </Box>
            <Typography variant="h6" className={classes.title}>
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={draftDiscard}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <div>
          {fields?.map((value, index) => {
            return (
              <FieldWidgetComponent
                key={index}
                label={value.label}
                onChange={(e: any) => console.log("hehe")}
                fieldType={value.fieldType}
              />
            );
          })}
        </div>
      </Dialog>
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    fields: state.activeCollection?.fields,
    isOpen: state.draft.isOpen,
  };
};

const mapDispatch = {
  openGallery: galleryOpen,
  draftDiscard: draftDiscard,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FullScreenDialog);
