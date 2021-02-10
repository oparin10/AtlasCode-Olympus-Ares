import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import Markdown from "./components/Widgets/Markdown";
import { configurationSetup } from "./redux/configuration/actions";
import { changeContentField } from "./redux/contentEntry/actions";
import { setLoadingTrue } from "./redux/globalUI/actions";
import { Map, List } from "immutable";
import { WarCollection } from "./redux/types";
import Loading from "./components/App/Loading";
import WarCollections from "./components/Admin/Collections";

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

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <WarCollections collections={warCollectionsState} />
    </div>
  );
}

export default App;
