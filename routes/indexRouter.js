import { Router } from "express";
import citiesRouter from "./cityRouter.js";

const indexRouter = Router();

indexRouter.use("/cities", citiesRouter);

export default indexRouter;
