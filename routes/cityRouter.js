import { Router } from "express";
import {
  getCities,
  getCity,
  createCity,
  createCities,
} from "../controllers/citiesControllers.js";
const cityRouter = Router();

cityRouter.get("/", getCities);
cityRouter.post("/", createCity);

cityRouter.get("/:id", getCity);
cityRouter.post("/all", createCities);

export default cityRouter;
