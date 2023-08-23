import { Router } from "express";
import {
  getCities,
  getCity,
  createCity,
  createCities,
  deleteCity, 
  updateCity, 
} from "../controllers/citiesControllers.js";
const cityRouter = Router();

cityRouter.get("/", getCities);
cityRouter.post("/", createCity);

cityRouter.get("/:id", getCity);
cityRouter.post("/all", createCities);

cityRouter.delete("/:id", deleteCity);  
cityRouter.put("/:id", updateCity);     

export default cityRouter;
