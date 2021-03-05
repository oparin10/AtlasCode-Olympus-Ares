import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ConnectedProps } from "react-redux";
import { dataWidgetConnector } from "../components/DataWidgets/DataWidgetComponent";
import { layoutComponentConnector } from "../components/LayoutComponent";
import { AdminCollectionField, AdminItem } from "../config/collections.config";
import {
  EntryDraftActionTypes,
  EntrySetInitialActionTypes,
} from "../redux/entries/types";
import { SetActiveContent } from "../redux/activeCollection/types/";

export type RouterItem = {
  path: string;
  component: (props: any) => JSX.Element;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export interface FieldComponentProps {
  onChange: (e?: any) => void;
  error?: boolean;
  label: string;
  value?: any;
}

export interface FieldComponentRootProps extends FieldComponentProps {
  fieldType: FieldWidgetTypes;
}

export type DataWidgetFunctionalComponentProps = {
  activeCollection: AdminItem | null;
  addNew: (fields: AdminCollectionField[]) => EntryDraftActionTypes;
};

export type LayoutFunctionalComponentProps = {
  collections: never;
  activeCollection: AdminItem | null;
  setActiveCollection: (activeCollection: AdminItem) => SetActiveContent;
  setEntryInitialFields: (
    fields: AdminCollectionField[]
  ) => EntrySetInitialActionTypes;
  children: React.ReactNode;
};

export type LayouComponentReduxProps = ConnectedProps<
  typeof layoutComponentConnector
>;

export interface LayoutComponentRootProps extends LayouComponentReduxProps {
  layoutType: LayoutTypes;
  children: React.ReactNode;
}

export type DataWidgetReduxProps = ConnectedProps<typeof dataWidgetConnector>;

export interface DataWidgetComponentRootProps extends DataWidgetReduxProps {
  widgetType: DataWidgetTypes;
}

export type FieldWidgetTypes =
  | "image"
  | "select"
  | "text"
  | "string"
  | "markdown";

export type DataWidgetTypes = "table" | "list";

export type LayoutTypes = "hades" | "zeus";

export type WidgetsTypes = "string" | "image" | "markdown" | "text" | "login";
export type IconTypes =
  | "AttachMoney"
  | "AccountBalance"
  | "AcUnit"
  | "AccessAlarm"
  | "Accessibility"
  | "Accessible"
  | "AccountBox"
  | "Add"
  | "AddAPhoto"
  | "AddAlert"
  | "AddCircle"
  | "AddComment"
  | "AddPhotoAlternate"
  | "AddShoppingCart"
  | "Apps"
  | "PhotoLibrary"
  | "MoreHoriz"
  | "Close"
  | "Settings"
  | "FileCopy"
  | "Delete"
  | "DeleteForever";
