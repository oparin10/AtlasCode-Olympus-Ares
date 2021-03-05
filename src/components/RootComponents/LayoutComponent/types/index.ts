import { ConnectedProps, RootStateOrAny } from "react-redux";
import { Action, CombinedState } from "redux";
import { ThunkAction } from "redux-thunk";
import { layoutComponentConnector } from "..";
import {
  AdminCollectionField,
  AdminItem,
} from "../../../../config/collections.config";
import { RootState } from "../../../../redux";
import {
  ActiveCollectionState,
  ActiveContentActionTypes,
  SetActiveContent,
} from "../../../../redux/activeCollection/types";
import { AdonisGalleryState } from "../../../../redux/adonis/types";
import {
  EntriesState,
  EntrySetInitialActionTypes,
} from "../../../../redux/entries/types";
import { AppConfigState, GlobalUIState } from "../../../../redux/types";
import { LayoutTypes } from "../../../../types";

export type LayoutFunctionalComponentProps = {
  collections: never;
  activeCollection: AdminItem | null;
  setActiveCollection: (activeCollection: AdminItem) => SetActiveContent;
  setEntryInitialFields: (
    fields: AdminCollectionField[]
  ) => EntrySetInitialActionTypes;
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
