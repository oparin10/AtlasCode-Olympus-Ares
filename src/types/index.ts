import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export type RouterItem = {
  path: string;
  component: (props: any) => JSX.Element;
  label: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export type FieldWidgetTypes = "image" | "select" | "text" | "string";
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
