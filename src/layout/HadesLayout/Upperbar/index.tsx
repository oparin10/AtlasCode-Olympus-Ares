import React from "react";
import styled from "styled-components";

const UpperbarRoot = styled.div`
  width: 100%;
  height: calc(100vh * 0.1144);

  background: rgba(130, 130, 130, 0.8);
  mix-blend-mode: normal;
  backdrop-filter: blur(30px);
`;

interface Props {}

const Upperbar = (props: Props) => {
  return <UpperbarRoot></UpperbarRoot>;
};

export default Upperbar;
