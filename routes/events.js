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

const router = express.Router();

const upload = multer({ dest: "uploads/" });

// Public routes
router.get("/", getEvents);

// Protected routes
router.use(protect);

router.get("/myevents", getUserEvents);
router.post("/", upload.single("image"), createEvent);
router.put("/:id", upload.single("image"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;
