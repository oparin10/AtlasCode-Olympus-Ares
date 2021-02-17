import { SvgIcon } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import SidebarItemMain from "./SidebarItem";

interface Props {
  logoURL?: string;
}

const SidebarRoot = styled.div`
  height: 100vh;
  background-color: #363740;
  width: calc((100% * 0.18525));
`;

const SidebarLogoContainer = styled.div`
  width: 100%;
  height: calc(100% * 0.08);
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    height: calc(100% * 0.17578);
  }
`;

const SidebarLogo = styled.img`
  height: max-content;
  width: 100%;

  padding: 7%;
`;

const SidebarDivider = styled.div`
  border: 1px solid #dfe0eb;
`;

const SidebarItemRootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  a,
  u {
    text-decoration: none;
    width: 100%;
    outline: none;
  }

  a:visited,
  a:hover,
  a:active {
    color: transparent;
  }
`;

const Sidebar = ({ logoURL = "https://i.imgur.com/ZolrH6Q.png" }: Props) => {
  const sidebarSizePercentage: number = 0.18525;
  const logoContainerHeight: number = 0.17578;
  const sidebarItemContainerHeight: number = 0.07291;

  return (
    <SidebarRoot>
      <SidebarLogoContainer>
        <SidebarLogo src={logoURL} />
      </SidebarLogoContainer>
      <SidebarDivider />

      <SidebarItemRootContainer>
        <SidebarItemMain />
        <SidebarItemMain />
        <SidebarItemMain />
        <SidebarItemMain />
        <SidebarItemMain />
      </SidebarItemRootContainer>
    </SidebarRoot>
  );
};

export default Sidebar;