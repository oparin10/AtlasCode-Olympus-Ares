import { Fade } from "@material-ui/core";
import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import { AdminItem } from "../../types";
import Sidebar from "./Sidebar";
import Upperbar from "./Upperbar";

interface Props {
  any: any;
  children: React.ReactNode;
}

const HadesLayoutRoot = styled.div`
  display: flex;
`;
const HadesContentContainer = styled.div`
  flex-grow: 1;
`;

const HadesLayout = ({ any, ...rest }: Props) => {
  console.log(rest);

  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  return (
    <HadesLayoutRoot>
      <Sidebar collections={collectionsState} />
      <HadesContentContainer>
        <Upperbar />

        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div>{rest.children}</div>
        </Fade>
      </HadesContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
