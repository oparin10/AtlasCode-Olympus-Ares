export interface DionysusPath {
  gallery: string;
  galleryThumbnail: string;
  galleryThumbnailBlur: string;
}

export interface DionysusConfig {
  path: DionysusPath;
  createBlur: boolean;
  storageBucketPath: string;
}

export const imageGalleryPath: DionysusPath = {
  gallery: "gallery",
  galleryThumbnail: "gallery_thumbnail",
  galleryThumbnailBlur: "gallery_thumbnail_blur",
};

export const dionysusConfig: DionysusConfig = {
  path: imageGalleryPath,
  createBlur: true,
  storageBucketPath: "atlas-ares.appspot.com",
};
