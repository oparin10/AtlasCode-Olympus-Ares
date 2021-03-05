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
import { LayoutFunctionalComponentProps } from "../components/RootComponents/LayoutComponent/types";
import DataTable from "../components/Widgets/DataWidgets/DataTable";
import OrderedList from "../components/Widgets/DataWidgets/OrderedList";
import ImageFieldWidget from "../components/Widgets/FieldWidgets/ImageFieldWidget";
import MarkdownFieldWiget from "../components/Widgets/FieldWidgets/MarkdownFieldWidget";
import SelectFieldWidget from "../components/Widgets/FieldWidgets/SelectedFieldWidget";
import StringFieldWidget from "../components/Widgets/FieldWidgets/StringFieldWidget";
import TextFieldWidget from "../components/Widgets/FieldWidgets/TextFieldWidget";

import HadesLayout from "../layout/HadesLayout";
import {
  DataWidgetFunctionalComponentProps,
  DataWidgetTypes,
  FieldComponentProps,
  FieldWidgetTypes,
  IconTypes,
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
