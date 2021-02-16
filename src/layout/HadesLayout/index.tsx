import React from "react";
import styled from "styled-components";

interface Props {
  any: any;
  children: React.ReactNode;
}

const HadesLayoutRoot = styled.div``;
const HadesMainContentContainer = styled.main``;

const HadesLayout = ({ any, ...rest }: Props) => {
  return (
    <HadesLayoutRoot>
      <HadesMainContentContainer>{rest.children}</HadesMainContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
