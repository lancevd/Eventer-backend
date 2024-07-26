import express from "express";
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

// Public routes
router.get("/", getEvents);

// Protected routes
router.use(protect);

router.get("/myevents", getUserEvents);
router.post("/", upload.single("image"), createEvent);
router.put("/:id", upload.single("image"), updateEvent);
router.delete("/:id", deleteEvent);

export default router;
