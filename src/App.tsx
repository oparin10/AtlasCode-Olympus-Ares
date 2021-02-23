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

function App() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  React.useEffect(() => {
    console.log(getBucketImageTriple("testing1.webp", "drcrz2qxcB7mNFSq1rolw"));
    // imageGroupFromURL(
    //   "https://firebasestorage.googleapis.com/v0/b/atlas-ares.appspot.com/o/dionysus%2Fgallery_thumbnail_blur%2F98ab15d4-e8d2-4443-b65c-01eb277f0d07%2Fbusinnessman-point.jpg?alt=media&token=710cc9db-8b62-485c-b547-141eba27f0d2"
    // )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <form action="/profile" method="post" encType="multipart/form-data">
        <input type="file" name="avatar" />
      </form>

      <RouterCore layoutComponent={HadesLayout} routes={collectionsState} />
    </div>
  );
}

export default App;
