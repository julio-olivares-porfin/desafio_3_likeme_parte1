const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const path = require("path");

app.listen(3000, console.log("Servidor arriba en el puerto 3000!"));

const { getPosts, agregarPost } = require("./consulta");

const index = path.join(__dirname, "../frontend/index.html");

app.get("/", (req, res) => {
  res.sendFile(index);
});

app.get("/posts", async (req, res) => {
  try {
    const result = await getPosts();
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, url, descripcion } = req.body;
    const likes = 0;
    const result = await agregarPost(titulo, url, descripcion, likes);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }

});