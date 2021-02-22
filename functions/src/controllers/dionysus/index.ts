import { bucket } from "../../firebase";
import path from "path";
import os from "os";
import { nanoid } from "nanoid";
import sharp from "sharp";
import { Request, Response } from "express";
import fs from "fs";
import { appConfig } from "../..";

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

  if (!req.body.fileExtension) {
    return res.json({
      error: "A file extension must be supplied",
    });
  }

  const imageMetadata = {
    cacheControl: "public, max-age=1000",
    contentType: "image/webp",
  };

  const validURI: string = req.body.base64URI.split(";base64,").pop();
  const imgBuffer: Buffer = Buffer.from(validURI, "base64");
  const fileName: string = req.body.fileName;
  const fileExtension: string = req.body.fileExtension;
  const nanoID: string = nanoid();
  const fileNameWithExtension: string = `${fileName}.${fileExtension}`;

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
    gallery: path.join(
      "dionysus",
      appConfig.dionysus.path.gallery,
      nanoID,
      fullResolutionImagePath
    ),
    gallery_thumbnail: path.join(
      "dionysus",
      appConfig.dionysus.path.galleryThumbnail,
      nanoID,
      thumbnailImagePath
    ),
    gallery_thumbnail_blur: path.join(
      "dionysus",
      appConfig.dionysus.path.galleryThumbnailBlur,
      nanoID,
      thumbnailBlurredImagePath
    ),
  };

  //   Convert images, transform them and save them to OS temp folder

  const fullImgBuffer = await sharp(imgBuffer)
    .toFormat("webp", { nearLossless: true })
    .toBuffer();

  await sharp(fullImgBuffer).toFile(fullResolutionImagePath);

  await sharp(fullImgBuffer).resize(null, 500).toFile(thumbnailImagePath);

  await sharp(fullImgBuffer)
    .resize(null, 400)
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
    .send("Images were optimized and uploaded with success")
    .status(200);
};
