import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  country: { type: String, required: true },
  foundation: { type: String, required: true },
  population: { type: Number, required: true },
  photo: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String },
  smalldescription: { type: String },
  featuredLocation: { type: String, required: true },
  itineraries : [ { type: mongoose.Types.ObjectId, ref: 'Itinerary'}]
});

// Create the model
const City = mongoose.model('City', citySchema);

// Export the model
export default City;
