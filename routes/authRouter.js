import { Router } from "express";
import {
  signIn,
  signUp,
  signInToken,
  getUsers
} from "../controllers/AuthControllers.js";
import passport from "../middlewares/passport.js";
import { signUpValidator } from "../middlewares/signUpValidator.js";

const authRouter = Router();

authRouter.get("/", getUsers);
authRouter.post("/signup", signUpValidator, signUp);
authRouter.post("/signin", signIn);

authRouter.post(
  "/signin/token",
  passport.authenticate("jwt", { session: false }),
  signInToken
);

export default authRouter;
