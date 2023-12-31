import express from "express";
import userRouter from "./routes/user.routes";
import loginRouter from "./routes/login.routes";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(3002, () => {
  console.log("deu certo, mané");
});

export default app;
