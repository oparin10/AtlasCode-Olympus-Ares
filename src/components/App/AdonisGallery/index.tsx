import { Backdrop, Fade, Modal, Slide } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { galleryClose } from "../../../redux/adonis/actions";
import styled from "styled-components";
import IconComponent from "../IconComponent";
import AdonisGalleryHeader from "./AdonisGalleryHeader";
import { storage } from "../../../firebase";
import {
  adonisConfig,
  AdonisOrderedTriple,
} from "../../../config/adonis.config";
import getAdonisOrderedTriple from "../../../helper/getAdonisOrderedTriple";

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

interface AdonisGalleryImage extends AdonisOrderedTriple {
  storagePathID: string;
  dateCreated: string;
  fileName: string;
}

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

  const getAllFiles = async () => {
    let allThumbNailFolder = await storage
      .ref()
      .child(
        `${adonisConfig.path.rootFolder}/${adonisConfig.path.galleryThumbnail}`
      )
      .listAll();

    let allFilesPaths: Array<string> = [];

    allThumbNailFolder.prefixes.forEach((item) => {
      allFilesPaths.push(item.fullPath);
    });

    let adonisImages: Array<AdonisOrderedTriple> = [];

    for (let i = 0; i < allFilesPaths.length; i++) {
      const element = allFilesPaths[i];

      let fullImagePath: string = (await storage.ref().child(element).listAll())
        .items[0].fullPath;

      let thumbNailMetadata: any = await storage
        .ref()
        .child(fullImagePath)
        .getMetadata();

      // console.log(thumbNailMetadata);

      let orderTripleLocal: AdonisOrderedTriple = getAdonisOrderedTriple(
        thumbNailMetadata.name,
        thumbNailMetadata.customMetadata.uuid
      );

      adonisImages.push(orderTripleLocal);
    }

    console.log(adonisImages);
  };

  React.useEffect(() => {
    getAllFiles();
  }, []);

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
