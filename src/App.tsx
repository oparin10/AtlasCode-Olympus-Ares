import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import HadesLayout from "./layout/HadesLayout";
import { storage } from "./firebase";
import imageGroupFromURL from "./helper/imageGroupFromURL";
import getBucketImageTriple from "./helper/getBucketImageTriple";
import { AdminItem } from "./config/collections.config";
import AdonisGallery from "./components/App/AdonisGallery";
import { AdonisGalleryState } from "./redux/adonis/types";
import GlobalAlert from "./components/Util/GlobalAlert";
import { GlobalUIState } from "./redux/types";

function App() {
  const dispatch = useDispatch();
  const globalUIState: GlobalUIState = useSelector(
    (state: RootStateOrAny) => state.globalUI
  );
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );
  const adonisState: AdonisGalleryState = useSelector(
    (state: RootStateOrAny) => state.adonis
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  // React.useEffect(() => {
  //   console.log(getBucketImageTriple("testing1.webp", "drcrz2qxcB7mNFSq1rolw"));
  // }, []);

  return (
    <div>
      <Loading isLoading={globalUIState.isLoading} />
      <GlobalAlert
        alertMessage={globalUIState.notificationMessage}
        alertOpen={globalUIState.notificationOpen}
        alertSeverity={globalUIState.notificationSeverity}
      />

      <AdonisGallery isOpen={adonisState.isOpen} />

      <RouterCore layoutComponent={HadesLayout} routes={collectionsState} />
    </div>
  );
}

export default App;
