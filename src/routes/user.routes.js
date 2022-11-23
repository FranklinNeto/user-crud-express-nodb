import { Router } from "express";
import createUserController from "../controllers/createUser.controller";

const userRouter = Router();

userRouter.post("", createUserController);

export default userRouter;
