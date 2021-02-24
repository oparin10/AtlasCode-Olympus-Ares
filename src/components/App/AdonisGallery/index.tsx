import { Backdrop, Fade, Modal } from "@material-ui/core";
import React from "react";

interface Props {}

const AdonisGallery = (props: Props) => {
  return (
    <div>
      <Modal
        open={true}
        onClose={() => null}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div>Adonis Image gallery</div>
        </Fade>
      </Modal>
    </div>
  );
};

export default AdonisGallery;
