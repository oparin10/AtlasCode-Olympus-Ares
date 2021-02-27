import {
  Backdrop,
  CircularProgress,
  Fade,
  Modal,
  Slide,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import {
  galleryClose,
  getAllImageLinks,
  setActivePhoto,
  setActivePhotoNull,
} from "../../../redux/adonis/actions";
import styled from "styled-components";
import AdonisGalleryHeader from "./AdonisGalleryHeader";
import {
  AdonisImage,
  AdonisOrderedTriple,
} from "../../../config/adonis.config";
import AdonisPhoto from "./AdonisPhoto";

const AdonisGalleryCircularLoaderContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;

  .adonisGalleryLoading {
    position: relative;
    left: -50%;
    z-index: 5000;
    width: 80px !important;
    height: 80px !important;

    @media (min-width: 1024px) {
      width: 140px !important;
      height: 140px !important;
    }
  }

  .MuiCircularProgress-colorPrimary {
    color: #f15d3c;
  }
`;

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
  overflow-y: scroll;
  scrollbar-width: none;

  @media (min-width: 1024px) {
    width: 80%;
    height: 700px;
  }
`;

const AdonisGalleryBodyInnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const AdonisGalleryPhotoGridContainer = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-auto-flow: row;
  grid-template-rows: 1fr;

  @media (min-width: 1024px) {
    grid-template-columns: 33% 33% 33%;
    grid-auto-flow: row;
    grid-template-rows: none;
  }
`;

// Adonis uploader

interface Props {
  isOpen: boolean;
  gallery: Array<AdonisImage>;
  isLoading: boolean;
  isPhotoSelected: boolean;
  selectedPhoto: AdonisImage;
}

const AdonisGallery = ({
  isOpen = false,
  gallery = [],
  isLoading = true,
  isPhotoSelected = false,
  selectedPhoto,
}: Props) => {
  const dispatch = useDispatch();

  const [imageActive, setImageActive] = React.useState<{
    active: boolean;
    index: number | null;
  }>({ active: false, index: null });

  const bodyRootRef = React.useRef<HTMLDivElement>(null);

  const eventOnParent = (e: any) => {
    if (e.target !== bodyRootRef.current) {
      return;
    }

    dispatch(galleryClose());
  };

  React.useEffect(() => {
    if (gallery.length <= 0) {
      dispatch(getAllImageLinks());
    }
  }, []);

  const handleGalleryClose = () => {
    dispatch(galleryClose());
  };

  return (
    <div>
      <Modal
        style={{ outline: "none" }}
        open={isOpen}
        onClose={handleGalleryClose}
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
                  <AdonisGalleryHeader isPhotoSelected={isPhotoSelected} />

                  <AdonisGalleryCircularLoaderContainer>
                    <Fade
                      in={isLoading}
                      unmountOnExit
                      timeout={{ enter: 750, exit: 750 }}
                    >
                      <div>
                        <CircularProgress className="adonisGalleryLoading" />
                      </div>
                    </Fade>
                  </AdonisGalleryCircularLoaderContainer>

                  <AdonisGalleryPhotoGridContainer>
                    {gallery.map((adonisPhoto, index) => {
                      return (
                        <Fade
                          key={index}
                          in={true}
                          timeout={{ enter: 1000, exit: 500 }}
                        >
                          <div
                            onClick={() =>
                              dispatch(setActivePhoto(adonisPhoto))
                            }
                          >
                            <AdonisPhoto
                              uuid={adonisPhoto.uuid}
                              imageName={adonisPhoto.fileName}
                              active={
                                isPhotoSelected &&
                                selectedPhoto.uuid == adonisPhoto.uuid
                              }
                              photoURL={adonisPhoto.gallery_thumbnail}
                            />
                          </div>
                        </Fade>
                      );
                    })}
                  </AdonisGalleryPhotoGridContainer>
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
