import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ConnectedProps } from "react-redux";
import { adonisGalleryConnector } from "../components/App/AdonisGallery";

export type RouterItem = {
  path: string;
  component: (props: any) => JSX.Element;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

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
  | "Category"
  | "Palette"
  | "Panorama"
  | "Build";
