import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/home", (req, res) => {
  res.status(200).send("hello home ");
});
app.listen(5050, () => {
  console.log("http://localhost:5050");
});
