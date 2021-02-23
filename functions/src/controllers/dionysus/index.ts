import admin, { bucket } from "../../firebase";
import path from "path";
import os from "os";
import { nanoid } from "nanoid";
import sharp from "sharp";
import { Request, Response } from "express";
import fs from "fs";

interface DionysusBucketPath {
  gallery: string;
  gallery_thumbnail: string;
  gallery_thumbnail_blur: string;
}

export const optimizeAndCreateThumbnail = async (
  req: Request,
  res: Response
) => {
  if (!req.body.fileName) {
    return res
      .json({
        error: "A file name must be supplied",
      })
      .status(400);
  }

  if (!req.body.base64URI) {
    return res
      .json({
        error: "A base64 URI must be supplied",
      })
      .status(400);
  }

  // if (!req.body.fileExtension) {
  //   return res.json({
  //     error: "A file extension must be supplied",
  //   });
  // }

  const imageMetadata = {
    cacheControl: "public, max-age=1296000",
    contentType: "image/webp",
  };

  const validURI: string = req.body.base64URI.split(";base64,").pop();
  const imgBuffer: Buffer = Buffer.from(validURI, "base64");
  const fileName: string = req.body.fileName;
  const fileExtension: string = "webp";
  const nanoID: string = nanoid();
  const fileNameWithExtension: string = `${fileName}.${fileExtension}`;
  const baseCloudURL: string = "https://firebasestorage.googleapis.com/v0/b/";

  //   Temp dir file path for each img variation
  const fullResolutionImagePath: string = path.resolve(
    os.tmpdir(),
    fileNameWithExtension
  );

  const thumbnailImagePath: string = path.resolve(
    os.tmpdir(),
    `thumbnail-${fileNameWithExtension}`
  );

  const thumbnailBlurredImagePath: string = path.resolve(
    os.tmpdir(),
    `thumbnailBlur-${fileNameWithExtension}`
  );

  //   Cloud storage bucket path

  const bucketPath: DionysusBucketPath = {
    gallery: `dionysus/gallery/${nanoID}/${fileNameWithExtension}`,
    gallery_thumbnail: `dionysus/gallery_thumbnail/${nanoID}/${fileNameWithExtension}`,
    gallery_thumbnail_blur: `dionysus/gallery_thumbnail_blur/${nanoID}/${fileNameWithExtension}`,
  };

  //   Convert images, transform them and save them to OS temp folder

  const fullImgBuffer = await sharp(imgBuffer)
    .toFormat("webp", { nearLossless: true })
    .toBuffer();

  await sharp(fullImgBuffer).toFile(fullResolutionImagePath);

  await sharp(fullImgBuffer).resize(null, 500).toFile(thumbnailImagePath);

  await sharp(fullImgBuffer)
    .resize(null, 400)
    .blur(10)
    .toFile(thumbnailBlurredImagePath);

  // Upload every file to storage bucket

  await bucket.upload(fullResolutionImagePath, {
    destination: bucketPath.gallery,
    metadata: imageMetadata,
  });

  await bucket.upload(thumbnailImagePath, {
    destination: bucketPath.gallery_thumbnail,
    metadata: imageMetadata,
  });

  await bucket.upload(thumbnailBlurredImagePath, {
    destination: bucketPath.gallery_thumbnail_blur,
    metadata: imageMetadata,
  });

  // Delete files from OS's temporary directory to free up memory

  try {
    fs.unlinkSync(fullResolutionImagePath);
    fs.unlinkSync(thumbnailImagePath);
    fs.unlinkSync(thumbnailBlurredImagePath);
  } catch (error) {
    console.log(error);
  }

  return res
    .json({
      gallery: `${baseCloudURL}${
        admin.storage().app.options.storageBucket
      }/o/dionysus%2Fgallery%2F${nanoID}%2F${fileName}.${fileExtension}?alt=media`,
      gallery_thumbnail: `${baseCloudURL}${
        admin.storage().app.options.storageBucket
      }/o/dionysus%2Fgallery_thumbnail%2F${nanoID}%2F${fileName}.${fileExtension}?alt=media`,
      gallery_thumbnail_blur: `${baseCloudURL}${
        admin.storage().app.options.storageBucket
      }/o/dionysus%2Fgallery_thumbnail_blur%2F${nanoID}%2F${fileName}.${fileExtension}?alt=media`,
    })
    .status(200);
};
