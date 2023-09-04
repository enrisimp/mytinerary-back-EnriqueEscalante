import { Router } from "express";
import {
    getItineraries,
    createItinerary,
    getItinerary,
    createItinerary,
    createItineraries,
    deleteItinerary, 
    updateItinerary, 
} from '../controllers/itinerariesControllers.js'
const categoriesRouter = Router()

categoriesRouter.get( "/", getItineraries)
categoriesRouter.post( "/", createItinerary)

categoriesRouter.get("/:id", getItinerary);
categoriesRouter.post("/all", createItineraries);

categoriesRouter.delete("/:id", deleteItinerary);  
categoriesRouter.put("/:id", updateItinerary);

export default categoriesRouter