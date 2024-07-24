import express from "express";
import {
  getEvents,
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";

const router = express.Router();

// Routes
router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;


// import express from "express";
// import multer from "multer";
// import {
//   getEvents,
//   createEvent,
//   getEventById,
//   updateEvent,
//   deleteEvent,
// } from "../controllers/eventController.js";

// const router = express.Router();

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage: storage });

// // Routes
// router.get("/", getEvents);
// router.get("/:id", getEventById);
// router.post("/", upload.single("image"), createEvent);
// router.put("/:id", upload.single("image"), updateEvent);
// router.delete("/:id", deleteEvent);

// export default router;
