import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "events", // The folder in Cloudinary where you want to store images
    format: async (req, file) => "png", // Supports promises as well
    public_id: (req, file) => file.originalname.split(".")[0], // Set the public_id as the original file name without extension
  },
});

const upload = multer({ storage });

export default upload;
