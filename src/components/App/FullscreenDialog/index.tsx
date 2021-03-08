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
import IconComponent from "../../Util/IconComponent";
import { Box } from "@material-ui/core";
import { galleryOpen } from "../../../redux/adonis/actions";
import { RootState } from "../../../redux/";
import FieldWidgetComponent from "../../RootComponents/FieldWidgetComponent";
import { draftDiscard } from "../../../redux/draft/actions";

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
  entryNew,
  entryUpdate,
  collectionLabel,
}: Props) {
  return (
    <div>
      <Dialog
        fullScreen
        open={isOpen as boolean}
        onClose={draftDiscard}
        TransitionComponent={Transition}
      >
        <AppBar style={{ position: "relative" }}>
          <Toolbar style={{ display: "flex" }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={draftDiscard}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Box flexGrow={1}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                <Box mx={2} onClick={openGallery}>
                  <IconComponent clickable iconType="AddAPhoto" />
                </Box>

                <Box mx={2} onClick={openGallery}>
                  <IconComponent clickable iconType="Category" />
                </Box>
              </Box>
            </Box>

            <Box flexGrow={{ xs: "0.35", md: "0.1" }}>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" onClick={draftDiscard}>
                  Criar
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              fontSize={{ xs: "20px", md: "30px" }}
              fontWeight={700}
              marginTop={{ xs: "35px" }}
              marginBottom={{ xs: "15px" }}
            >
              {entryNew
                ? `Criando novo item em ${collectionLabel}`
                : entryUpdate
                ? `Atualizando item em ${collectionLabel}`
                : "I dont know"}
            </Box>
            {fields?.map((value, index) => {
              return (
                <Box my={2} key={index}>
                  <FieldWidgetComponent
                    name={value.name}
                    label={value.label}
                    fieldType={value.fieldType}
                  />
                </Box>
              );
            })}
          </Box>
        </div>
      </Dialog>
    </div>
  );
}

const mapState = (state: RootState) => {
  return {
    fields: state.activeCollection?.fields,
    collectionLabel: state.activeCollection.sidebarLabel,
    isOpen: state.draft.isOpen,
    entryNew: state.draft.entry_new,
    entryUpdate: state.draft.entry_update,
  };
};

const mapDispatch = {
  openGallery: galleryOpen,
  draftDiscard: draftDiscard,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(FullScreenDialog);
