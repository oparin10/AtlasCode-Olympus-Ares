import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ConnectedProps } from "react-redux";
import { dataWidgetConnector } from "../components/RootComponents/DataWidgetComponent";
import { layoutComponentConnector } from "../components/RootComponents/LayoutComponent";
import { AdminCollectionField, AdminItem } from "../config/collections.config";

import { SetActiveContent } from "../redux/activeCollection/types/";
import { adonisGalleryConnector } from "../components/App/AdonisGallery";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../redux";
import { Action } from "redux";

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

export type AdonisGalleryReduxProps = ConnectedProps<
  typeof adonisGalleryConnector
>;

export type FieldWidgetTypes =
  | "image"
  | "select"
  | "text"
  | "string"
  | "markdown"
  | "categorySelect";

export type DataWidgetTypes = "table" | "list";

export type LayoutTypes = "hades" | "zeus";

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
  | "DeleteForever"
  | "Category";
