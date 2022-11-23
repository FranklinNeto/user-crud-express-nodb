import express from "express";
import userRouter from "./routes/user.routes";
import users from "./database";

const app = express();

app.use(express.json());
app.use("/users", userRouter);

app.get("/", (req, res) => {
  return res.json({
    users,
  });
});

app.listen(3000, () => {
  console.log("deu certo, mané");
});

export default app;
