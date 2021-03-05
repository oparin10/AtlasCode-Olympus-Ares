import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
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

function App() {
  const dispatch = useDispatch();

  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootState) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  const getShitFromdb = db
    .collection("collections")
    .doc("testCollection")
    .collection("entries")
    .onSnapshot((snapShot) => {
      let snapShotData: Array<any> = [];

      snapShot.forEach((doc) => {
        console.log(doc.data());
      });
    });

  return (
    <div>
      <Loading />
      <GlobalAlert />
      <AdonisGallery />
      <FullscreenDialog />

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
