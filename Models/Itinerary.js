import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    itinerary: { type: String, required: true, unique: true },
    foto: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    likes: { type: Number, default: 0 },
    hashtags: [{ type: String, required: true, minlength: 3, maxlength: 15 }], // Allow 3 to 15 characters for hashtags
    activities: { type: String, required: true },
    comments: [{ type: String, default: [] }],
    city : { type: mongoose.Types.ObjectId, ref: 'City' }
})

const Itinerary = mongoose.model( 'Itinerary', itinerarySchema )

export default Itinerary