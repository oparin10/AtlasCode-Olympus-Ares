import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { AdminItem, RouterItem } from "./types";
import HadesLayout from "./layout/HadesLayout";
import { storage } from "./firebase";

function App() {
  const dispatch = useDispatch();
  const loadingState = useSelector((state: RootStateOrAny) => state.globalUI);
  const collectionsState: Array<AdminItem> = useSelector(
    (state: RootStateOrAny) => state.collections
  );

  React.useEffect(() => {
    dispatch(configurationSetup());
  }, []);

  const firebaseStorage = storage;

  let storageRef = firebaseStorage.ref().child("pictures");

  // storageRef
  //   .listAll()
  //   .then((result) => {
  //     result.prefixes.forEach((item) => {
  //       console.log(
  //         item
  //           .list()
  //           .then((result) => console.log(result.items[0].fullPath))
  //           .catch((error) => console.log(error))
  //       );
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // let getPic = storage
  //   .ref()
  //   .child("pictures/ 0ccdf6a0-0eca-4f61-b59c-ada48f8698ee /Arte-02.png")
  //   .getDownloadURL()
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error));

  let blackClouds = storage.refFromURL(
    "https://firebasestorage.googleapis.com/v0/b/atlas-ares.appspot.com/o/dionysus%2Fgallery%2F98ab15d4-e8d2-4443-b65c-01eb277f0d07%2Fpos-filter-1.png?alt=media&token=8527de95-7e0f-4e51-9abc-8c024414d08d"
  ).parent?.fullPath;

  console.log(blackClouds);

  // const getThumbnailPath = (stringUrl: string) => {
  //   stringUrl.split(" ");

  //   stringUrl.toString();

  //   stringUrl.split("pictures");

  //   stringUrl.toString();

  //   return stringUrl;
  // };

  // const getCloudStorageImageObject = (imageDownloadURL: string) => {
  //   const originalURL: string = imageDownloadURL;

  //   const originalURLToArray: Array<string> = originalURL.split("/");

  //   const toThumbnailURL = originalURLToArray.splice(1, 1, "gallery_thumbnail");
  //   originalURLToArray.pop();

  //   const originalURLArrayRefPath: string = originalURLToArray.join("/");

  //   return originalURLArrayRefPath;
  // };

  // let myResult = getCloudStorageImageObject(blackClouds);

  // console.log(myResult);

  // let getPic = storage
  //   .ref()
  //   .child(myResult)
  //   .list()
  //   .then((result) =>
  //     result.items[0]
  //       .getDownloadURL()
  //       .then((result) => console.log(result))
  //       .catch((error) => console.log(error))
  //   )
  //   .catch((error) => console.log(error));

  return (
    <div>
      <Loading isLoading={loadingState.isLoading} />

      <RouterCore layoutComponent={HadesLayout} routes={collectionsState} />
    </div>
  );
}

export default App;
