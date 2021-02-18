import { Box, Fade } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import IconComponent from "../../../components/App/IconComponent";
import getCurrentPath from "../../../helper/currentPath";
import { AdminItem } from "../../../types";
import UserProfileButton from "./UserProfileButton";

const UpperbarRoot = styled.div`
  width: 100%;
  height: calc(100vh * 0.1144);

  background: rgba(130, 130, 130, 0.8);
  mix-blend-mode: normal;
  backdrop-filter: blur(30px);
`;

const UpperbarInnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin-right: 15px;

  @media (min-width: 1024px) {
    margin-right: 25px;
  }
`;

const UpperbarTitleContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  color: white;
  font-weight: 800;
  text-transform: capitalize;
  padding-top: 10px;
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 22px;
  }
`;

interface Props {
  any?: string;
  label: string;
}

const Upperbar = ({ label = "Place holder label" }: Props) => {
  let currentPath = getCurrentPath();

  return (
    <UpperbarRoot>
      <UpperbarInnerContainer>
        <UpperbarTitleContainer>
          <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
            <div>{label}</div>
          </Fade>
        </UpperbarTitleContainer>
        <Box
          display="flex"
          flexDirection="row"
          flexGrow={1}
          justifyContent="end"
          mr={5}
          color={"#e4e5ed"}
        >
          <IconComponent
            clickable
            height="2em"
            width="1.2em"
            iconType="PhotoLibrary"
          />
        </Box>
        <UserProfileButton />
      </UpperbarInnerContainer>
    </UpperbarRoot>
  );
};

export default Upperbar;
