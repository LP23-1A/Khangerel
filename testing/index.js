import express from "express";
import bp from "body-parser";

const app = express();
const PORT = 8000;
app.use(bp.json());
const users = [
  {
    id: 1,
    name: "khaankoo",
  },
  {
    id: 2,
    name: "naki",
  },
  {
    id: 3,
    name: "darga",
  },
  {
    id: 4,
    name: "darggagaa",
  },
  {
    id: 5,
    name: "daldaga",
  },
  {
    id: 6,
    name: "daravgar",
  },
];

app.get("/", (req, res) => {
  res.send({ success: true, users: users }).end();
});

app.get("/:id", (req, res) => {
  const id = req.params.id;
  const filteredData = users.filter((user) => user.id === parseInt(id));

  res.send({ success: true, users: filteredData }).end();
});

app.post("/", (req, res) => {
  const data = req.body;
  users.push(data);
  res.send({ success: true, users: users }).end();
});
app.put("/:id", (req, res) => {
  const id = req.params.id;
  users.map((user) => {
    if (user.id === parseInt(id)) {
      console.log(id);
      user.name = req.body.name;
    }
  });
  res.send({ success: true, users: users }).end();
});
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
  if (deletedUserId !== -1) {
    users.splice(deletedUserId, 1);
  }
  res.send({ success: true, users: users }).end();
});
app.listen(PORT, () => {
  console.log("Server running");
});
