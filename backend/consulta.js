const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "porfin",
  password: "123456",
  database: "likeme",
  allowExitOnIdle: true,
});

const dataBaseConnection = async () => {
  try {
    const res = await pool.query(`SELECT NOW()`);
    console.log("Conexión exitosa con la Base de Datos:", res.rows[0]);
  } catch (error) {
    console.error("Error de conexión con la Base de Datos", error);
  }
};

dataBaseConnection();

const agregarPost = async (titulo, img, descripcion, likes) => {
  try {
    const consulta =
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)";
    const values = [titulo, img, descripcion, likes];
    const result = await pool.query(consulta, values);
    console.log("Post creado exitosamente", result.rowCount);
  } catch (error) {
    console.error("Error al crear el post:", error);
  }
};

const getPosts = async () => {
  const result = await pool.query("SELECT * FROM posts");
  return result.rows;
};

module.exports = { getPosts, agregarPost };
