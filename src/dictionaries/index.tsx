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
  Close,
  Delete,
  DeleteForever,
  FileCopy,
  MoreHoriz,
  PhotoLibrary,
  Settings,
} from "@material-ui/icons";
import Login from "../components/App/Login";
import ImageFieldWidget from "../components/FieldWidgets/ImageFieldWidget";
import SelectFieldWidget from "../components/FieldWidgets/SelectedFieldWidget";
import StringFieldWidget from "../components/FieldWidgets/StringFieldWidget";
import TextFieldWidget from "../components/FieldWidgets/TextFieldWidget";
import ImageWidget from "../components/Widgets/ImageWidget";
import MarkdownWidget from "../components/Widgets/MarkdownWidget";
import StringWidget from "../components/Widgets/StringWidget";
import TextWidget from "../components/Widgets/TextWidget";
import { FieldWidgetTypes, IconTypes, WidgetsTypes } from "../types";

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
  PhotoLibrary: PhotoLibrary,
  MoreHoriz: MoreHoriz,
  Close: Close,
  Settings: Settings,
  Delete: Delete,
  DeleteForever: DeleteForever,
  FileCopy: FileCopy,
};

export const FieldWidgetDictionary: Record<
  FieldWidgetTypes,
  JSX.Element | React.FC | React.ElementType
> = {
  string: StringFieldWidget,
  image: ImageFieldWidget,
  select: SelectFieldWidget,
  text: TextFieldWidget,
};

export const WidgetDictonary: Record<WidgetsTypes, JSX.Element | React.FC> = {
  image: ImageWidget,
  markdown: MarkdownWidget,
  string: StringWidget,
  text: TextWidget,
  login: Login,
};
