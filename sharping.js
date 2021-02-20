const sharp = require("sharp");
const base64img = require("./base64img");
const fs = require("fs");
const path = require("path");
const { storage } = require("./src/firebase/");
const os = require("os");
const { nanoid } = require("nanoid");

const imageMetadata = {
  cacheControl: "public, max-age=300",
  contentType: "image/webp",
};

const createCivilizedOptimizedImage = async (
  fileNameParameter = "placeholder",
  extension = "webp"
) => {
  // Remove base64 to prevent invalid format error from Sharp
  let validURI = base64img.split(";base64,").pop();
  // Creates buffer from base64 URI
  let imgBuffer = Buffer.from(validURI, "base64");

  const nanoID = nanoid();

  const fileName = fileNameParameter;
  const selectedExtension = extension;
  const fileNameWithExtension = `${fileName}.${selectedExtension}`;

  //   Temp dir file path for each image
  const fullSizeImagePath = path.resolve(os.tmpdir(), fileNameWithExtension);
  const thumbnailImagePath = path.resolve(
    os.tmpdir(),
    "thumbnail-" + fileNameWithExtension
  );
  const thumbnailBlurredImagePath = path.resolve(
    os.tmpdir(),
    "thumbnailBlur-" + fileNameWithExtension
  );

  // Cloud storage bucket path

  const bucketPath = {
    gallery: path.join("dionysus", "gallery", nanoID, fullSizeImagePath),
    gallery_thumbnail: path.join(
      "dionysus",
      "gallery_thumnail",
      nanoID,
      thumbnailImagePath
    ),
    gallery_thumbnail_blur: path.join(
      "dionysus",
      "gallery_thumbnail_blur",
      nanoID,
      thumbnailBlurredImagePath
    ),
  };

  const fullImageBuffer = await sharp(imgBuffer)
    .toFormat("webp", { nearLossless: true })
    .toBuffer();

  //   Create full sized optimized image
  await sharp(fullImageBuffer).toFile(
    path.resolve(os.tmpdir(), `${fullSizeImagePath}`)
  );

  await sharp(fullImageBuffer)
    .resize(null, 500)
    .toFile(path.resolve(os.tmpdir(), `${thumbnailImagePath}`));

  await sharp(fullImageBuffer)
    .resize(null, 400)
    .blur(8)
    .toFile(path.resolve(os.tmpdir(), `${thumbnailBlurredImagePath}`));

  // Upload every file to storage bucket

  await storage.upload(fullSizeImagePath, {
    destination: bucketPath.gallery,
    metadata: imageMetadata,
  });

  await storage.upload(thumbnailImagePath, {
    destination: bucketPath.gallery_thumbnail,
    metadata: imageMetadata,
  });

  await storage.upload(thumbnailBlurredImagePath, {
    destination: bucketPath.gallery_thumbnail_blur,
    metadata: imageMetadata,
  });
  //   Delete files from tmp folder to free up disk

  //   try {
  //     fs.unlinkSync(path.join(os.tmpdir(), fileNameWithExtension));
  //     fs.unlinkSync(thumbnailImagePath);
  //     fs.unlinkSync(thumbnailBlurredImagePath);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   Congratulate yourself

  console.log("You did it, and it looks beautiful. Good job once again");
};

createCivilizedOptimizedImage();

// fs.unlinkSync(path.join(os.tmpdir(), ));

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
