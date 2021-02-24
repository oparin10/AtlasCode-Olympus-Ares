import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { galleryClose } from "../../../../redux/adonis/actions";
import IconComponent from "../../IconComponent";

const AdonisGalleryBodyHeader = styled.div`
  width: 100%;
  height: 15%;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
`;

const AdonisGalleryBodyHeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AdonisGalleryHeaderUploadButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;

  font-family: ${(props) => props.theme.typography.fontFamily};
  cursor: pointer;

  width: 115px;
  height: 35px;
  text-transform: uppercase;
  border-radius: 10px;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};

  @media (min-width: 1024px) {
    font-size: 12px;

    height: 50px;
    width: 150px;
  }
`;

const AdonisGalleryUploadButtonContainer = styled.div`
  flex-grow: 1;
  margin-left: 5%;
`;

const AdonisGalleryAltActionsContainer = styled.div`
  margin-right: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-grow: 0.5;
  color: ${(props) => props.theme.palette.primary.main};

  @media (min-width: 1024px) {
    flex-grow: 0.15;
    margin-right: 3%;
  }
`;

const AdonisGalleryCloseButtonBase = styled.div`
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {}

const AdonisGalleryHeader = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <AdonisGalleryBodyHeader>
      <AdonisGalleryBodyHeaderInnerContainer>
        <AdonisGalleryUploadButtonContainer>
          <AdonisGalleryHeaderUploadButton>
            Enviar imagem
          </AdonisGalleryHeaderUploadButton>
        </AdonisGalleryUploadButtonContainer>

        <AdonisGalleryAltActionsContainer>
          <IconComponent clickable iconType="Settings" />

          <AdonisGalleryCloseButtonBase
            onClick={() => dispatch(galleryClose())}
          >
            <IconComponent clickable iconType="Close" />
          </AdonisGalleryCloseButtonBase>
        </AdonisGalleryAltActionsContainer>
      </AdonisGalleryBodyHeaderInnerContainer>
    </AdonisGalleryBodyHeader>
  );
};

export default AdonisGalleryHeader;
