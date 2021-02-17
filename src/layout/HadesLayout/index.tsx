import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import { AdminItem } from "../../types";
import Sidebar from "./Sidebar";

interface Props {
  any: any;
  children: React.ReactNode;
}

const HadesLayoutRoot = styled.div`
  display: flex;
`;
const HadesMainContentContainer = styled.main`
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
      <HadesMainContentContainer>{rest.children}</HadesMainContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
