import { SvgIcon } from "@material-ui/core";
import { AssignmentTurnedIn, Label } from "@material-ui/icons";
import { Link } from "@reach/router";
import React from "react";
import styled from "styled-components";
import IconComponent from "../../../../components/Util/IconComponent";
import { IconTypes } from "../../../../dictionaries/types";
import getCurrentPath from "../../../../helper/currentPath";

const SidebarItemRootContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
`;

interface SidebarItemContainerProps {
  active?: boolean;
}

const SidebarItemContainer = styled.div<SidebarItemContainerProps>`
  display: flex;
  width: 100%;
  height: calc(100vh * 0.08);
  color: #e4e5ed;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? "rgba(216, 217, 222, 0.2)" : "initial"};

  transition: all 0.5s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: rgba(216, 217, 222, 0.1);
  }

  .menuName {
    font-size: 10px;
    margin-left: 15px;
    margin-right: 15px;
    display: none;
  }

  @media (min-width: 1024px) {
    .menuName {
      font-size: 12px;
      display: block;
    }

    .MuiSvgIcon-root {
      width: 0.8em !important;
      height: 0.8em !important;
    }
  }
`;

interface Props {
  path: string;
  icon: IconTypes;
  label: string;
}

const SidebarItemMain = ({
  path = "",
  icon = "AccountBalance",
  label = "Default label",
}: Props) => {
  let currentLocationFn = getCurrentPath();

  return (
    <React.Fragment>
      <Link to={`/admin/${path}`}>
        <SidebarItemContainer active={currentLocationFn == path ? true : false}>
          <div className="icon">
            <IconComponent clickable iconType={icon} />
          </div>

          <div className="menuName">{label}</div>
        </SidebarItemContainer>
      </Link>
    </React.Fragment>
  );
};

export default SidebarItemMain;
