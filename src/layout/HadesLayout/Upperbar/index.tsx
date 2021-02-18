import React from "react";
import styled from "styled-components";
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
  justify-content: end;
  align-items: center;
  height: 100%;
  margin-right: 15px;

  @media (min-width: 1024px) {
    margin-right: 25px;
  }
`;

interface Props {}

const Upperbar = (props: Props) => {
  return (
    <UpperbarRoot>
      <UpperbarInnerContainer>
        <UserProfileButton />
      </UpperbarInnerContainer>
    </UpperbarRoot>
  );
};

export default Upperbar;
