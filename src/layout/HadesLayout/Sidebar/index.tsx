import { SvgIcon } from "@material-ui/core";
import { AssignmentTurnedIn } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { AdminItem } from "../../../config/collections.config";
import SidebarItemMain from "./SidebarItem";

const SidebarRoot = styled.div`
  height: 100vh;
  background-color: #082742;
  width: calc((100% * 0.18));
  position: fixed;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    width: calc((100% * 0.13));
  }
`;

const SidebarAncientRoot = styled.div`
  height: 100vh;
  background-color: #082742;
  width: calc((100% * 0.18));
  position: relative;

  @media (min-width: 1024px) {
    width: calc((100% * 0.13));
  }
`;

const SidebarLogoContainer = styled.div`
  width: 100%;
  height: calc(100% * 0.1);
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 0px #b4b7da inset;

  @media (min-width: 1024px) {
    height: calc(100% * 0.08);
  }
`;

const SidebarLogo = styled.img`
  height: auto;
  width: 100%;

  padding: 20%;
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

interface Props {
  logoURL?: string;
  collections: Array<AdminItem>;
}

const Sidebar = ({
  logoURL = "https://i.imgur.com/ZolrH6Q.png",
  collections = [],
}: Props) => {
  const sidebarSizePercentage: number = 0.18525;
  const logoContainerHeight: number = 0.17578;
  const sidebarItemContainerHeight: number = 0.07291;

  return (
    <SidebarAncientRoot>
      <SidebarRoot>
        <SidebarLogoContainer>
          <SidebarLogo src={logoURL} />
        </SidebarLogoContainer>

        <SidebarItemRootContainer>
          {collections.map((value: AdminItem, index: number) => {
            return (
              <SidebarItemMain
                key={index}
                icon={value.sidebarIcon}
                label={value.sidebarLabel}
                path={value.routerPath}
              />
            );
          })}
        </SidebarItemRootContainer>
      </SidebarRoot>
    </SidebarAncientRoot>
  );
};

export default Sidebar;
