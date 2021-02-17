import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import {
  AccessAlarm,
  Accessibility,
  Accessible,
  AccountBalance,
  AccountBox,
  AcUnit,
  Add,
  AddAlert,
  AddAPhoto,
  AddCircle,
  AddComment,
  AddPhotoAlternate,
  AddShoppingCart,
  Apps,
  AttachMoney,
} from "@material-ui/icons";
import ImageWidget from "../components/Widgets/ImageWidget";
import MarkdownWidget from "../components/Widgets/MarkdownWidget";
import StringWidget from "../components/Widgets/StringWidget";
import TextWidget from "../components/Widgets/TextWidget";
import { IconTypes, WidgetsTypes } from "../types";

export const IconDictonary: Record<
  IconTypes,
  OverridableComponent<SvgIconTypeMap<{}, "svg">>
> = {
  AccountBalance: AccountBalance,
  AttachMoney: AttachMoney,
  AcUnit: AcUnit,
  AccessAlarm: AccessAlarm,
  Accessibility: Accessibility,
  Accessible: Accessible,
  AccountBox: AccountBox,
  Add: Add,
  AddAPhoto: AddAPhoto,
  AddAlert: AddAlert,
  AddCircle: AddCircle,
  AddComment: AddComment,
  AddPhotoAlternate: AddPhotoAlternate,
  AddShoppingCart: AddShoppingCart,
  Apps: Apps,
};

export const WidgetDictonary: Record<WidgetsTypes, JSX.Element | React.FC> = {
  image: ImageWidget,
  markdown: MarkdownWidget,
  string: StringWidget,
  text: TextWidget,
};
