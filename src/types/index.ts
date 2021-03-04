import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ConnectedProps } from "react-redux";
import { dataWidgetConnector } from "../components/DataWidgets/DataWidgetComponent";
import { AdminCollectionField } from "../config/collections.config";
import { EntryDraftActionTypes } from "../redux/entries/types";

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
  value: any;
}

export interface FieldComponentRootProps extends FieldComponentProps {
  fieldType: FieldWidgetTypes;
}

export type DataWidgetReduxProps = ConnectedProps<typeof dataWidgetConnector>;

export interface DataWidgetComponentRootProps extends DataWidgetReduxProps {
  widgetType: DataWidgetTypes;
  newEntry: (fields: Array<AdminCollectionField>) => EntryDraftActionTypes;
}

export type FieldWidgetTypes =
  | "image"
  | "select"
  | "text"
  | "string"
  | "markdown";

export type DataWidgetTypes = "table";

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
