import express from "express";
import multer from "multer";
import {
  getEvents,
  getUserEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { protect, admin } from "../middleware/auth.js";
import upload from "../middleware/multer.js";

const router = express.Router();

// Configure multer for file uploads
// const upload = multer({ dest: "uploads/" });
router.post("/events", upload.single("image"), createEvent);


// Public routes
router.get("/", getEvents);

// Protected routes
router.use(protect);

router.get("/myevents", getUserEvents);
router.post("/", upload.single("image"), createEvent);
router.put("/:id", upload.single("image"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;
