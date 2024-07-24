import Event from "../models/event.js";

// Get all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new event
export const createEvent = async (req, res) => {
  const { name, date, time, location, description, image } = req.body;

  try {
    const newEvent = new Event({
      name,
      date,
      time,
      location,
      description,
      image,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an event
export const updateEvent = async (req, res) => {
  const { name, date, time, location, description, image } = req.body;

  try {
    const event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (name != null) event.name = name;
    if (date != null) event.date = date;
    if (time != null) event.time = time;
    if (location != null) event.location = location;
    if (description != null) event.description = description;
    if (image != null) event.image = image;

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an event
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndRemove(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted" });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({ message: "Error deleting event" });
  }
};
