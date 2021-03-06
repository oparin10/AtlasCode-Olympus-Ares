import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { AdminItem } from "./config/collections.config";
import AdonisGallery from "./components/App/AdonisGallery";
import GlobalAlert from "./components/Util/GlobalAlert";
import "./css/App.css";
import FullscreenDialog from "./components/App/FullscreenDialog";
import { db } from "./firebase";
import { RootState } from "./redux";
import Toolbox from "./components/App/Toolbox";
import ColorPicker from "./components/App/ColorPicker";

function App() {
  const dispatch = useDispatch();

  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootState) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  return (
    <div>
      <Loading />
      <GlobalAlert />
      <AdonisGallery />
      <FullscreenDialog />
      <Toolbox />
      <ColorPicker />

      {/* Should probably be refactored and control application route state through Redux */}
      {collectionsState.length > 0 ? (
        <RouterCore
          layoutComponent={"hades"}
          startingPath={collectionsState[0].routerPath}
          routes={collectionsState}
        />
      ) : null}
    </div>
  );
}

export default App;
