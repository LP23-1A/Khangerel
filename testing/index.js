import express from "express";
import bp from "body-parser";
import mongoose from "mongoose";
import Url from "./schema/Url.js"

const app = express();
const PORT = 8000;
const MONGODB_URI = "mongodb+srv://khangerelbeochir:khangerel123api@cluster0.qiroq0k.mongodb.net/?retryWrites=true&w=majority";

app.use(bp.json());



app.get("/", async (req, res) => {
  const ress = await Url.find();

  res.send({ success: true, ress }).end();
});

// app.get("/:id", (req, res) => {
//   const id = req.params.id;
//   const filteredData = users.filter((user) => user.id === parseInt(id));

//   res.send({ success: true, users: filteredData }).end();
// });

app.post("/", async (req, res) => {
  const newUrl = await Url.create(req.body);

  res.send({ success: true, urls:newUrl }).end();
});
// app.put("/:id", (req, res) => {
//   const id = req.params.id;
//   users.map((user) => {
//     if (user.id === parseInt(id)) {
//       console.log(id);
//       user.name = req.body.name;
//     }
//   });
//   res.send({ success: true, users: users }).end();
// });
// app.delete("/:id", (req, res) => {
//   const id = req.params.id;
//   const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
//   if (deletedUserId !== -1) {
//     users.splice(deletedUserId, 1);
//   }
//   res.send({ success: true, users: users }).end();
// });
app.listen(PORT, async () => {
  try {
    await mongoose.connect(MONGODB_URI)
  } catch (error) {
    console.log(error);
  }
  console.log("Server running");
});
