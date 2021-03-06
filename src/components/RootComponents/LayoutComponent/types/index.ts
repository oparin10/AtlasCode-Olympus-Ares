import { ConnectedProps, RootStateOrAny } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { layoutComponentConnector } from "..";
import {
  AdminCollectionField,
  AdminItem,
} from "../../../../config/collections.config";
import {
  ActiveContentActionTypes,
  SetActiveContent,
} from "../../../../redux/activeCollection/types";

import { LayoutTypes } from "../../../../types";

export type LayoutFunctionalComponentProps = {
  collections: never;
  activeCollection: AdminItem | null;
  setActiveCollection: (activeCollection: AdminItem) => SetActiveContent;

  children: React.ReactNode;
  setupActiveCollection: (
    activeCollection: AdminItem
  ) => ThunkAction<
    void,
    RootStateOrAny,
    unknown,
    Action<ActiveContentActionTypes>
  >;
};

export type LayouComponentReduxProps = ConnectedProps<
  typeof layoutComponentConnector
>;

export interface LayoutComponentRootProps extends LayouComponentReduxProps {
  layoutType: LayoutTypes;
  children: React.ReactNode;
}
