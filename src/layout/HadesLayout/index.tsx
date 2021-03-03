import { Fade } from "@material-ui/core";
import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import FullScreenDialog from "../../components/App/FullscreenDialog";
import { AdminItem } from "../../config/collections.config";
import getCurrentPath from "../../helper/currentPath";
import { setActiveCollection } from "../../redux/activeCollection/actions";
import {
  createItemClose,
  setCreateItemFields,
} from "../../redux/createItem/actions";
import { CreateItemState } from "../../redux/createItem/types";
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
  width: calc(100% * 0.82);

  @media (min-width: 1024px) {
    width: calc(100% * 0.87);
  }
`;

const HadesLayout = ({ any, ...rest }: Props) => {
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  const activeCollection: AdminItem = useSelector(
    (state: RootStateOrAny) => state.activeCollection
  );

  const createItem: CreateItemState = useSelector(
    (state: RootStateOrAny) => state.createItem
  );

  const dispatch = useDispatch();
  const currentPath = getCurrentPath();

  React.useEffect(() => {
    const activeCollection = collectionsState.filter((obj) => {
      return obj.path == currentPath;
    });

    dispatch(setActiveCollection(activeCollection[0] as AdminItem));

    dispatch(setCreateItemFields(activeCollection[0].fields));
  }, []);

  return (
    <HadesLayoutRoot>
      <Sidebar collections={collectionsState} />
      <HadesContentContainer>
        <Upperbar
          label={activeCollection ? activeCollection.sidebarLabel : ""}
        />

        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div style={{ position: "relative" }}>
            {rest.children}
            {activeCollection && activeCollection.fields.length > 0 ? (
              <FullScreenDialog
                open={createItem.isOpen}
                handleClose={() => dispatch(createItemClose())}
              />
            ) : null}
          </div>
        </Fade>
      </HadesContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
