import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import { WarCollection } from "./redux/types";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { RouterItem } from "./types";
import StringWidget from "./components/Widgets/StringWidget";
import MarkdownWidget from "./components/Widgets/MarkdownWidget";
import HadesLayout from "./layout/HadesLayout";

function App() {
  const [warCollection, setWarCollection] = React.useState<
    Array<WarCollection>
  >([]);

  const dispatch = useDispatch();
  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);
  const warCollectionsState: Array<WarCollection> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());

    setWarCollection(warCollectionsState);
  }, []);

  const routerList: Array<RouterItem> = [
    { component: StringWidget, path: "test" },
    { component: MarkdownWidget, path: "dashboard" },
  ];

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      {/* <WarCollections collections={warCollectionsState} /> */}

      <RouterCore layoutComponent={HadesLayout} routes={routerList} />
    </div>
  );
}

export default App;
