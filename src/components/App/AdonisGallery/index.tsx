import { Backdrop, Fade, Modal, Slide } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { galleryClose } from "../../../redux/adonis/actions";
import styled from "styled-components";
import IconComponent from "../IconComponent";
import AdonisGalleryHeader from "./AdonisGalleryHeader";

const AdonisGalleryBodyRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: -1;
`;

const AdonisGalleryBody = styled.div`
  background-color: #fff;
  width: 90%;
  height: 600px;
  border-radius: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  position: absolute;

  @media (min-width: 1024px) {
    width: 80%;
    height: 700px;
  }
`;

const AdonisGalleryBodyInnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

// Adonis uploader

interface Props {
  isOpen: boolean;
}

const AdonisGallery = ({ isOpen = false }: Props) => {
  const dispatch = useDispatch();

  const bodyRootRef = React.useRef<HTMLDivElement>(null);

  const eventOnParent = (e: any) => {
    if (e.target !== bodyRootRef.current) {
      return;
    }

    dispatch(galleryClose());
  };

  return (
    <div>
      <Modal
        style={{ outline: "none" }}
        open={isOpen}
        onClose={() => dispatch(galleryClose())}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, style: { outline: "none" } }}
      >
        <Slide
          in={isOpen}
          direction={"left"}
          timeout={{ enter: 300, exit: 300 }}
        >
          <div style={{ width: "100%", height: "100%", outline: "none" }}>
            <AdonisGalleryBodyRoot
              style={{ outline: "transparent" }}
              className="alo"
              ref={bodyRootRef}
              onClick={(e) => eventOnParent(e)}
            >
              <AdonisGalleryBody>
                <AdonisGalleryBodyInnerContainer>
                  <AdonisGalleryHeader />
                </AdonisGalleryBodyInnerContainer>
              </AdonisGalleryBody>
            </AdonisGalleryBodyRoot>
          </div>
        </Slide>
      </Modal>
    </div>
  );
};

export default AdonisGallery;
