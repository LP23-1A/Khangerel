import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js";
import { nanoid } from "nanoid";


const app = express();
const PORT = 8000;
const MONGODB_URL =  "mongodb+srv://khangerelbeochir:khangerel123api@cluster0.qiroq0k.mongodb.net/?retryWrites=true&w=majority";

app.use(bp.json());

app.get("/", async (_, res) => {
  const ress = await Url.find();

  res.send({ ress }).end();
});

app.get("/:url", async (req, res) => {
  const { url } = req.params;
  const ress = await Url.findOne({
    shortUrl: url,
  });

  if (ress) {
    res.redirect(ress.longUrl);
  } else {
    res.status(404).send("Not Found");
  }
});

app.post("/", async (req, res) => {
  const { url } = req.body;

  const newUrl = await Url.create({
    longUrl: url,
    shortUrl: nanoid(10),
  });

  res.send({ success: true, urls: newUrl }).end();
});

app.delete("/:url", async (req, res) => {
  const { url } = req.params;

  const { acknowledged, deletedCount } = await Url.deleteOne({
    shortUrl: url,
  });
  res.send({ success: acknowledged, removedCount: deletedCount }).end();
});

app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URL);
  } catch (error) {
    console.log(error);
  }
  console.log("Server running");
});

