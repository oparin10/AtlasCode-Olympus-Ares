import React from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { configurationSetup } from "./redux/configuration/actions";
import Loading from "./components/Util/Loading";
import RouterCore from "./components/App/RouterCore";
import { AdminItem, RouterItem } from "./types";
import HadesLayout from "./layout/HadesLayout";
import { storage } from "./firebase";
import axios from "axios";

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

  const onFileUpload = (event: any) => {
    const file: File = event.target.files[0];

    file
      .arrayBuffer()
      .then((result) => {
        let byteArray: Uint8Array = new Uint8Array(result);

        console.log(byteArray);

        axios
          .post("http://localhost:5001/atlas-ares/us-central1/api/testMe", {
            array: byteArray,
          })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));

    // const reader = new FileReader();

    // reader.onabort = () => console.log("File was aborted");
    // reader.onerror = () => console.log("File reading failed");

    // reader.onload = () => {
    //   const binaryString = reader.readAsArrayBuffer(file);

    //   console.log(binaryString);
    // };
  };

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
