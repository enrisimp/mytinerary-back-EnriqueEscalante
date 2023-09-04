import City from "../Models/City.js";
import Itinerary from "../Models/Itinerary.js";

export const getCities = async (req, res) => {
  const query = {};
  if (req.query.city) {
    console.log("Received city query:", req.query.city);
    query.city = { $regex: `^${req.query.city}`, $options: "i" };
  }
  try {
    //const cities = await City.find(query);
    const cities = await City.find().populate({
      path: 'itineraries',
      select : '-city -id'
    })
    // console.log("Queried cities:", cities);
    res.status(200).json({ status: 200, success: true, response: cities });
  } catch (error) {
    // console.log("Error:", error);
    res.status(500).json({ message: error });
  }
};

export const getCity = async (req, res) => {
  try {
    const city = await City.findById(req.params.id).populate({
      path: "itineraries",
      select: "-city -id",
    });

    res.json(city); // Return the city data directly
  } catch (error) {
    res.status(500).json({ message: error });
  }
};


export const createCity = async (req, res) => {
  try {
    const newCity = { ...req.body };

    const city = await City.create(newCity);
    res.status(201).json({ message: "City created successfully", newCity: city });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createCities = async (req, res) => {
  try {
     const addedCities = [];
    for (const item of req.body) {
      const newCity = { ...item };
      const city = await City.create(newCity);
       addedCities.push(city.city);
    }
    res.status(201).json({ success: true, addedCities });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id);
    if (deletedCity) {
      res
        .status(200)
        .json({ success: true, message: "City deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateCity = async (req, res) => {
  try {
    const updatedCity = await City.findByIdAndUpdate(req.params.id, req.body);
    if (updatedCity) {
      res.status(200).json({ success: true, updatedCity });
    } else {
      res.status(404).json({ success: false, message: "City not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

