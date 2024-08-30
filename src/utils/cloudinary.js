import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      throw new Error(
        "File Upload failed: file does not exists: " + localFilePath
      );
    }

    // Upload file
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // file uploaded successfully
    // console.log("file uploaded successfully on cloudinary", response.url);
    // console.log("Response: ", response);

    fs.unlinkSync(localFilePath); // Removes temp file

    return response;
  } catch (error) {
    if (localFilePath) {
      fs.unlinkSync(localFilePath); // Removes temp file
    }
    return null;
  }
};

export { uploadOnCloudinary };
