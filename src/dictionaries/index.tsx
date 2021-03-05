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
import DataTable from "../components/DataWidgets/DataTable";
import OrderedList from "../components/DataWidgets/OrderedList";
import ImageFieldWidget from "../components/FieldWidgets/ImageFieldWidget";
import MarkdownFieldWiget from "../components/FieldWidgets/MarkdownFieldWidget";
import SelectFieldWidget from "../components/FieldWidgets/SelectedFieldWidget";
import StringFieldWidget from "../components/FieldWidgets/StringFieldWidget";
import TextFieldWidget from "../components/FieldWidgets/TextFieldWidget";

import HadesLayout from "../layout/HadesLayout";
import {
  DataWidgetFunctionalComponentProps,
  DataWidgetTypes,
  FieldComponentProps,
  FieldWidgetTypes,
  IconTypes,
  LayoutFunctionalComponentProps,
  LayoutTypes,
} from "../types";

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
  React.FC<FieldComponentProps>
> = {
  string: StringFieldWidget,
  image: ImageFieldWidget,
  select: SelectFieldWidget,
  text: TextFieldWidget,
  markdown: MarkdownFieldWiget,
};

export const DataWidgetDictionary: Record<
  DataWidgetTypes,
  React.FC<DataWidgetFunctionalComponentProps>
> = {
  table: DataTable,
  list: OrderedList,
};

export const LayoutDictionary: Record<
  LayoutTypes,
  React.FC<LayoutFunctionalComponentProps>
> = {
  hades: HadesLayout,
  zeus: HadesLayout,
};
