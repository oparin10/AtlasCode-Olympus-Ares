import { Fade } from "@material-ui/core";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setActiveCollection } from "../../redux/activeCollection/actions";
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
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(setActiveCollection(collectionsState[0]));
  // }, []);

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
