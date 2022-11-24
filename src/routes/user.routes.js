import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import verifyEmailExistenceMiddleware from "../middlewares/verifyEmailExistence.middleware";

const userRouter = Router();

userRouter.post("", verifyEmailExistenceMiddleware, createUserController);
/* userRouter.get(":id", retrieveUserController); */

export default userRouter;
