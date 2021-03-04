import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import HadesLayout from "./layout/HadesLayout";
import { AdminItem } from "./config/collections.config";
import AdonisGallery from "./components/App/AdonisGallery";
import { AdonisGalleryState } from "./redux/adonis/types";
import GlobalAlert from "./components/Util/GlobalAlert";
import "./css/App.css";
import FullscreenDialog from "./components/App/FullscreenDialog";

function App() {
  const dispatch = useDispatch();

  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );
  const adonisState: AdonisGalleryState = useSelector(
    (state: RootStateOrAny) => state.adonis
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  return (
    <div>
      <Loading />
      <GlobalAlert />

      <AdonisGallery
        isPhotoSelected={adonisState.isPhotoSelected}
        selectedPhoto={adonisState.selectedPhoto}
        gallery={adonisState.gallery}
        isOpen={adonisState.isOpen}
        isLoading={adonisState.isLoading}
      />

      <FullscreenDialog />

      {collectionsState.length > 0 ? (
        <RouterCore
          layoutComponent={HadesLayout}
          startingPath={collectionsState[0].routerPath}
          routes={collectionsState}
        />
      ) : null}
    </div>
  );
}

export default App;
