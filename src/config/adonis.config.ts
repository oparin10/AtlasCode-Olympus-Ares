export interface AdonisPath {
  rootFolder: string;
  gallery: string;
  galleryThumbnail: string;
  galleryThumbnailBlur: string;
}

export interface AdonisConfig {
  path: AdonisPath;
  createBlur: boolean;
  storageBucketPath: string;
}

export const adonisImagePath: AdonisPath = {
  rootFolder: "adonis",
  gallery: "gallery",
  galleryThumbnail: "gallery_thumbnail",
  galleryThumbnailBlur: "gallery_thumbnail_blur",
};

export const adonisConfig: AdonisConfig = {
  path: adonisImagePath,
  createBlur: true,
  storageBucketPath: "atlas-ares.appspot.com",
};
