import { Fade } from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import CategorySelect from "../../components/App/CategorySelect";
import NestedList from "../../components/App/ListComponent";
import RecursiveTreeView from "../../components/App/TreeView";
import { LayoutFunctionalComponentProps } from "../../components/RootComponents/LayoutComponent/types";
import { AdminItem } from "../../config/collections.config";
import getCurrentPath from "../../helper/currentPath";
import LayoutNavigation from "./Navigation";
import Sidebar from "./Sidebar";
import Upperbar from "./Upperbar";

const HadesLayoutRoot = styled.div`
  display: flex;
  background-color: #eaeff2;
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
  setupActiveCollection,
}: LayoutFunctionalComponentProps) => {
  let currentPath: string = getCurrentPath();

  React.useEffect(() => {
    let innerCollections: Array<any> = collections as Array<AdminItem>;

    const activeCollectionInner = innerCollections.filter((obj) => {
      return obj.routerPath == currentPath;
    });

    setupActiveCollection(activeCollectionInner[0]);
  }, []);

  return (
    <HadesLayoutRoot>
      <Sidebar collections={collections} />
      <HadesContentContainer>
        <Upperbar
          label={activeCollection ? activeCollection.sidebarLabel : ""}
        />

        <LayoutNavigation ></LayoutNavigation>
        {/* <Fade in={true} timeout={{ enter: 500, exit: 500 }}>
          <div style={{ position: "relative" }}>
            {children}

            <RecursiveTreeView />
          </div>
        </Fade> */}
      </HadesContentContainer>
    </HadesLayoutRoot>
  );
};

export default HadesLayout;
