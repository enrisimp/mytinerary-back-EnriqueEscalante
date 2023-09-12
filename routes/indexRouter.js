import { Router } from "express";
import citiesRouter from "./cityRouter.js";
import itinerariesRouter from "./itineraryRouter.js"
import authRouter from "./authRouter.js";

const indexRouter = Router();

indexRouter.use("/cities", citiesRouter);

indexRouter.use("/itineraries", itinerariesRouter);

indexRouter.use("/auth", authRouter);


export default indexRouter;
