import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { AdminItem, RouterItem } from "./types";
import HadesLayout from "./layout/HadesLayout";

function App() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  console.log(collectionsState);

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <RouterCore layoutComponent={HadesLayout} routes={collectionsState} />
    </div>
  );
}

export default App;
