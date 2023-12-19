import express from 'express'
import bp from "body-parser"

const app = express();
const PORT = 8000;
app.use(bp.json());
const users = [
  {
    id: 1,
    name: 'khaankoo'
  },
  {
    id: 2,
    name: 'naki'
  },
  {
    id: 3,
    name: 'darga'
  }
]

app.get('/', (req, res) => {
  res.send({ success: true, users: users }).end();
})

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const filteredData = users.filter((user) => user.id === parseInt(id))

  res.send({ success: true, users: filteredData}).end();
})

app.post('/', (request, response) => {
  const data = request.body;
  users.push(data);
  response.send({ success: true, users: users }).end();
 });
 app.put('/:id', (request, response) => {
  const id = request.params.id;
  users.map((user) => {
  if (user.id === parseInt(id)) {
  console.log(id);
  user.name = request.body.name;
  }
  });
  response.send({ success: true, users: users }).end();
 });
 app.delete('/:id', (request, response) => {
  const id = request.params.id;
  const deletedUserId = users.findIndex((user) => user.id === parseInt(id));
  if (deletedUserId !== -1) {
  users.splice(deletedUserId, 1);
  }
  response.send({ success: true, users: users }).end();
 });
 app.listen(PORT, () => {
  console.log('Server running');
 });