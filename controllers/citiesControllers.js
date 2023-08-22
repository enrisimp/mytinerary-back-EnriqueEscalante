import City from "../Models/City.js";

export const getCities = async (req, res) => {
  // obtener todos los eventos
  const query = {};
  if (req.query.name) {
    query.name = { $regex: req.query.name, $options: "i" };
  }
  try {
    const events = await City.find(query);
    res.status(200).json({ status: 200, success: true, response: events });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getCity = async (req, res) => {
  // obtener un evento
  try {
    const event = await City.findById(req.params.id);

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createCity = async (req, res) => {
  // crear un evento
  try {
    const newCity = { ...req.body };

    const event = await City.create(newCity);
    res.status(201).json({ newCity: event });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createCities = async (req, res) => {
  try {
    for (const item of req.body) {
      const newCity = { ...item };
      const event = await City.create(newCity);
    }
    res.status(200).json({ success: true });f
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

