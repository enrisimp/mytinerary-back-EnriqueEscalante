import { Router } from "express";
import citiesRouter from "./cityRouter.js";
import itinerariesRouter from "./itineraryRouter.js"

const indexRouter = Router();

indexRouter.use("/cities", citiesRouter);

indexRouter.use("/itineraries", itinerariesRouter);



export default indexRouter;
