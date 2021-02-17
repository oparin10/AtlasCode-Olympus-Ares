import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { RouterItem } from "./types";
import StringWidget from "./components/Widgets/StringWidget";
import MarkdownWidget from "./components/Widgets/MarkdownWidget";
import HadesLayout from "./layout/HadesLayout";
import { AccountBalance, AttachMoney } from "@material-ui/icons";
import IconComponent from "./components/App/IconComponent";

function App() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);
  const warCollectionsState: Array<any> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  const routerList: Array<RouterItem> = [
    {
      component: StringWidget,
      path: "test",
      label: "Test",
      icon: AccountBalance,
    },
    {
      component: MarkdownWidget,
      path: "dashboard",
      label: "Dashboard",
      icon: AttachMoney,
    },
  ];

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <RouterCore layoutComponent={HadesLayout} routes={routerList} />
    </div>
  );
}

export default App;
