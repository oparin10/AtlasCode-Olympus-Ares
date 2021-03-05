import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import IconComponent from "../IconComponent";
import { Box } from "@material-ui/core";
import { galleryOpen } from "../../../redux/adonis/actions";
import {
  entryComponentClose,
  entryDraftChangeField,
  entryDraftDiscard,
} from "../../../redux/entries/actions";
import { RootState } from "../../../redux/";
import FieldWidgetComponent from "../../RootComponents/FieldWidgetComponent";

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
  handleClose,
  isOpen,
  openGallery,
  fields,
  changeField,
}: Props) {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
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
            <Button autoFocus color="inherit" onClick={handleClose}>
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
                onChange={(e: any) =>
                  changeField({
                    fieldKey: value.name,
                    fieldValue: e.target.value,
                  })
                }
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
    isOpen: state.entries.isOpen,
    fields: state.activeCollection?.fields,
    draftValue: state.entries.draft,
  };
};

const mapDispatch = {
  handleClose: entryDraftDiscard,
  openGallery: galleryOpen,
  changeField: entryDraftChangeField,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FullScreenDialog);