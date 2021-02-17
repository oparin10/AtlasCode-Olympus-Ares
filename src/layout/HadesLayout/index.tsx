import React from "react";
import styled from "styled-components";
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

  return (
    <HadesLayoutRoot>
      <Sidebar />
      <HadesMainContentContainer>{rest.children}</HadesMainContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
