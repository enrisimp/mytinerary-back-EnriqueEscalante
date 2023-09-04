import City from "../Models/City.js";
import Itinerary from "../Models/Itinerary.js";

export const getItineraries = async (_, res) => {
    
    try {

        const itineraries = await Itinerary.find().populate({
            path: 'city',
            select: 'city _id'
        })
        res.json(itineraries)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

export const createItinerary = async (req, res) => {
  try {
    const newItinerary = await Itinerary.create(req.body);

    // Find the city by its ObjectId
    const city = await City.findById(newItinerary.city);

    // Push the itinerary object into the city's itineraries array
    city.itineraries.push(newItinerary);

    // Save the city with the updated itineraries array
    await city.save();

    res.status(201).json({ newItinerary: newItinerary });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createItineraries = async (req, res) => {
  try {
    const addedItineraries = [];

    // Loop through the provided itinerary data
    for (const item of req.body) {
      const newItinerary = { ...item };

      // Create the itinerary
      const itinerary = await Itinerary.create(newItinerary);

      // Find the city by its ObjectId
      const city = await City.findById(itinerary.city);

      // Use the $push operator to add the new itinerary to the city's itineraries array
      await City.updateOne(
        { _id: city._id },
        { $push: { itineraries: itinerary } }
      );

      addedItineraries.push(itinerary.itinerary);
    }

    res.status(201).json({ success: true, addedItineraries });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


export const getItinerary = async (req, res) => {

  try {
    const Itinerary = await Itinerary.findById(req.params.id).populate({
            path: 'city',
            select: 'city _id'
    });

    res.json({ Itinerary: Itinerary });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteItinerary = async (req, res) => {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    if (deletedItinerary) {
      res
        .status(200)
        .json({ success: true, message: "Itinerary deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Itinerary not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateItinerary = async (req, res) => {
  try {
    const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body);
    if (updatedItinerary) {
      res.status(200).json({ success: true, updatedItinerary });
    } else {
      res.status(404).json({ success: false, message: "Itinerary not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};