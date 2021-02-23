import { dionysusConfig } from "../../config/adonis.config";

const getBucketImageTriple = (
  fileName: string,
  dionysusID: string,
  baseCloudURL: string = "https://firebasestorage.googleapis.com/v0/b/",
  appStorageBucket: string = dionysusConfig.storageBucketPath
) => {
  let dionysusImagePath = {
    gallery: `${baseCloudURL}${appStorageBucket}/o/dionysus%2F${dionysusConfig.path.gallery}%2F${dionysusID}%2F${fileName}?alt=media`,
    gallery_thumbnail: `${baseCloudURL}${appStorageBucket}/o/dionysus%2F${dionysusConfig.path.galleryThumbnail}%2F${dionysusID}%2F${fileName}?alt=media`,
    gallery_thumbnail_blur: `${baseCloudURL}${appStorageBucket}/o/dionysus%2F${dionysusConfig.path.galleryThumbnailBlur}%2F${dionysusID}%2F${fileName}?alt=media`,
  };

  return dionysusImagePath;
};

export default getBucketImageTriple;
