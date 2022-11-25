import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import verifyEmailExistenceMiddleware from "../middlewares/verifyEmailExistence.middleware";
import verifyUserExistenceMiddleware from "../middlewares/verifyUserExistence.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyIfUserIsAdm from "../middlewares/verifyIfUserIsAdm.middleware";

import listUsersController from "../controllers/listUsers.controller";
import retrieveProfileController from "../controllers/retrieveProfile.controller";
import updateUserController from "../controllers/updateUser.controller";

import deleteUserController from "../controllers/deleteUser.controller";
import verifyIsOwnerMiddleware from "../middlewares/verifyIsOwner.middleware";
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

userRouter.delete(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyUserExistenceMiddleware,
  verifyIsOwnerMiddleware,
  deleteUserController
);

userRouter.patch(
  "/:id",
  verifyAuthTokenMiddleware,
  verifyUserExistenceMiddleware,
  verifyIsOwnerMiddleware,
  updateUserController
);

/* userRouter.get(":id", retrieveUserController); */

export default userRouter;
