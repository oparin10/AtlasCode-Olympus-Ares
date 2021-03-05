import { Fade } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { LayoutFunctionalComponentProps } from "../../components/RootComponents/LayoutComponent/types";
import { AdminItem } from "../../config/collections.config";
import getCurrentPath from "../../helper/currentPath";
import Sidebar from "./Sidebar";
import Upperbar from "./Upperbar";

const HadesLayoutRoot = styled.div`
  display: flex;
`;
const HadesContentContainer = styled.div`
  width: calc(100% * 0.82);

  @media (min-width: 1024px) {
    width: calc(100% * 0.87);
  }
`;

const HadesLayout = ({
  children,
  activeCollection,
  collections,
  setActiveCollection,
  setEntryInitialFields,
  setupActiveCollection,
}: LayoutFunctionalComponentProps) => {
  let currentPath: string = getCurrentPath();

  React.useEffect(() => {
    let innerCollections: Array<any> = collections as Array<AdminItem>;

    const activeCollectionInner = innerCollections.filter((obj) => {
      return obj.routerPath == currentPath;
    });

    setupActiveCollection(activeCollectionInner[0]);

    // setActiveCollection(activeCollectionInner[0] as AdminItem);
    // setEntryInitialFields(activeCollectionInner[0].fields);
  }, []);

  return (
    <HadesLayoutRoot>
      <Sidebar collections={collections} />
      <HadesContentContainer>
        <Upperbar
          label={activeCollection ? activeCollection.sidebarLabel : ""}
        />
        <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div style={{ position: "relative" }}>{children}</div>
        </Fade>
      </HadesContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
