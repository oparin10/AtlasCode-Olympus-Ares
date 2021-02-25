import React from "react";
import styled from "styled-components";

const AdonisImageCardBase = styled.div`
  margin-top: 25px;
  margin-bottom: 15px;
  width: 280px;
  height: 240px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
`;

const AdonisCardImageContainer = styled.div`
  height: 162px;
  background-color: rgb(242, 242, 242);
  background-size: 16px 16px;
  background-position: 0px 0px, 8px 8px;
  box-shadow: rgba(68, 74, 87, 0.3) 0px 0px 4px inset;
  border-bottom: 2px solid rgb(223, 223, 227);
  position: relative;
  background-image: linear-gradient(
      45deg,
      rgb(230, 230, 230) 25%,
      transparent 25%,
      transparent 75%,
      rgb(230, 230, 230) 75%,
      rgb(230, 230, 230)
    ),
    linear-gradient(
      45deg,
      rgb(230, 230, 230) 25%,
      transparent 25%,
      transparent 75%,
      rgb(230, 230, 230) 75%,
      rgb(230, 230, 230)
    );
`;

const AdonisCardImage = styled.img`
  width: 100%;
  height: 160px;
  border-radius: 2px 2px 0px 0px;
  object-fit: contain;
`;

const AdonisCardImageInfo = styled.p`
  color: rgb(121, 130, 145);
  padding: 8px;
  margin-top: 20px;
  overflow-wrap: break-word;
  line-height: 1.3 !important;
  text-align: center;
`;

interface Props {
  photoURL?: string;
  imageInfo?: string;
}

const AdonisPhoto = ({
  photoURL = "https://via.placeholder.com/200",
  imageInfo = "Imageinfo.webp",
}: Props) => {
  return (
    <AdonisImageCardBase>
      <AdonisCardImageContainer>
        <AdonisCardImage src={photoURL}></AdonisCardImage>
      </AdonisCardImageContainer>
      <AdonisCardImageInfo>{imageInfo}</AdonisCardImageInfo>
    </AdonisImageCardBase>
  );
};

export default AdonisPhoto;
