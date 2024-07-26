import Event from "../models/event.js";
import path from "path";
import url from "url";


// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "username");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get events created by the logged-in user
export const getUserEvents = async (req, res) => {
  try {
    const events = await Event.find({ createdBy: req.user._id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  const { name, date, time, location, description } = req.body;

  try {
    const newEvent = new Event({
      name,
      date,
      time,
      location,
      description,
      image: req.file ? req.file.filename : null, // Save the filename
      createdBy: req.user._id,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// Update an event
export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, date, time, location, description } = req.body;

  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // if (
    //   event.createdBy.toString() !== req.user._id ||
    //   req.user.role !== "admin"
    // ) {
    //   return res.status(403).json({ message: "User not authorized" });
    // }

    event.name = name;
    event.date = date;
    event.time = time;
    event.location = location;
    event.description = description;
    // if (req.file) event.image = req.file.path; 
    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // if (
    //   event.createdBy.toString() !== req.user._id &&
    //   req.user.role !== "admin"
    // ) {
    //   return res.status(403).json({ message: "User not authorized" });
    // }

    await Event.findByIdAndDelete(id);
    res.json({ message: "Event removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
