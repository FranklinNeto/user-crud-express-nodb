import express from "express";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/login.routes";
import verifyAuthTokenMiddleware from "./middlewares/verifyAuthToken.middleware";
import verifyUserExistenceMiddleware from "./middlewares/verifyUserExistence.middleware";
import deleteUserController from "./controllers/deleteUser.controller";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.delete(
  "/users/:id",
  verifyAuthTokenMiddleware,
  verifyUserExistenceMiddleware,
  deleteUserController
);

/* app.get("/users", (req, res) => {
  return res.json({
    users,
  });
}); */

app.listen(3002, () => {
  console.log("deu certo, mané");
});

export default app;
