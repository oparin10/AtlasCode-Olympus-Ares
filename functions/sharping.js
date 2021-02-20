const sharp = require("sharp");
const base64img = require("./base64img");
const fs = require("fs");
const path = require("path");
const { storage } = require("./src/firebase/");
const os = require("os");
const { create } = require("lodash");

const imageMetadata = {
  cacheControl: "public, max-age=300",
  contentType: "image/webp",
};

const createCivilizedOptimizedImage = async () => {
  // Remove base64 to prevent invalid format error from Sharp
  let validURI = base64img.split(";base64,").pop();
  // Creates buffer from base64 URI
  let imgBuffer = Buffer.from(validURI, "base64");

  const fileName = "adequateFileName";

  const fullSizeImagePath = path.resolve(os.tmpdir(), fileName);
  const thumbnailImagePath = path.resolve(os.tmpdir(), fileName + "-thumbnail");
  const thumbnailBlurredImagePath = path.resolve(
    os.tmpdir(),
    fileName + "-thumbnailBlur"
  );

  const fullImageBuffer = await sharp(imgBuffer)
    .toFormat("webp", { nearLossless: true })
    .toBuffer();

  //   Create full sized optimized image
  await sharp(fullImageBuffer).toFile(
    path.resolve(os.tmpdir(), `${fullSizeImagePath}.webp`)
  );

  await sharp(fullImageBuffer)
    .resize(null, 500)
    .toFile(path.resolve(os.tmpdir(), `${thumbnailImagePath}.webp`));

  await sharp(fullImageBuffer)
    .resize(null, 400)
    .blur(8)
    .toFile(path.resolve(os.tmpdir(), `${thumbnailBlurredImagePath}.webp`));

  console.log("You did it, and it looks beautiful. Good job once again");
};

const createOptimizedImage = async () => {
  // Remove base64 to prevent invalid format error from Sharp
  let validURI = base64img.split(";base64,").pop();
  // Creates buffer from base64 URI
  let imgBuffer = Buffer.from(validURI, "base64");

  sharp(imgBuffer)
    .toFormat("webp", { nearLossless: true })
    .toBuffer()
    .then((fileBufferFull) => {
      sharp(fileBufferFull)
        .toFile(path.resolve(os.tmpdir(), "optimizedFile.webp"))
        .then(() => {
          console.log(
            "Full sized imaged converted successfully, initating thumbnail generation"
          );
          sharp(fileBufferFull)
            .resize(null, 500)
            .toFile(path.resolve(os.tmpdir(), "optimizedFile_thumbnail.webp"))
            .then(() => {
              console.log(
                "thumbnail created successfully, iniating blured thumbnail gerenation"
              );
              sharp(fileBufferFull)
                .blur(5)
                .toFile(
                  path.resolve(
                    os.tmpdir(),
                    "optimizedFile_thumbnail_blurred.webp"
                  )
                )
                .then(() => {
                  console.log("All files were optimized, good job");
                  return "haha";
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};
