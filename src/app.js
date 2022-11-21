import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World Kenzie",
  });
});

app.listen(3001, () => {
  console.log("deu certo, mané");
});

export default app;
