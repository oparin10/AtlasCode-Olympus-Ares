import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import { changeContentField } from "./redux/contentEntry/actions";
import { WarCollection } from "./redux/types";
import Loading from "./components/App/Loading";
import WarCollections from "./components/App/Collections";
import RouterCore from "./components/App/RouterCore";
import { RouterItem } from "./types";
import StringWidget from "./components/Widgets/StringWidget";
import MarkdownWidget from "./components/Widgets/MarkdownWidget";

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

  const setContent = (e: any) => {
    dispatch(changeContentField(e.target.value));
  };

  const routerList: Array<RouterItem> = [
    { component: StringWidget, path: "test" },
    { component: MarkdownWidget, path: "dashboard" },
  ];

  const LayoutComponentYo = (props: any) => {
    return (
      <div>
        <div
          style={{ height: "250px", width: "150px", backgroundColor: "violet" }}
        ></div>

        <div>{props.children}</div>
      </div>
    );
  };

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      {/* <WarCollections collections={warCollectionsState} /> */}

      <RouterCore routes={routerList} />
    </div>
  );
}

export default App;
