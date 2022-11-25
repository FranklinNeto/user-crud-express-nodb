import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import verifyEmailExistenceMiddleware from "../middlewares/verifyEmailExistence.middleware";
import verifyUserExistenceMiddleware from "../middlewares/verifyUserExistence.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIfUserIsAdm from "../middlewares/verifyIfUserIsAdm.middleware";

import listUsersController from "../controllers/listUsers.controller";
import retrieveProfileController from "../controllers/retrieveProfile.controller";

import deleteUserController from "../controllers/deleteUser.controller";

const userRouter = Router();

userRouter.post("", verifyEmailExistenceMiddleware, createUserController);
userRouter.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIfUserIsAdm,
  listUsersController
);
userRouter.get(
  "/profile",
  verifyAuthTokenMiddleware,
  retrieveProfileController
);

/* userRouter.delete("/:id", verifyUserExistenceMiddleware, deleteUserController); */

/* userRouter.get(":id", retrieveUserController); */

export default userRouter;
