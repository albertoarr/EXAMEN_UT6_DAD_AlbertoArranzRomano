const express = require("express");
const postgres = require("postgres"); // Importamos el paquete pg
const cors = require("cors");

const app = express(); // Uso de express
const port = 3002;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const connection = postgres({
  host: "localhost",
  user: "postgres",
  password: "5206",
  database: "whatsapp_clone",
});

// READ de chat
app.get("/api/chat", async (req, res) => {
  try {
    const result = await connection`SELECT * FROM chat`;
    res.json(result);
  } catch (e) {
    console.error("Error en la consulta:", e);
    res.status(500).json({ error: "Error en la base de datos " });
  }
});

// READ de chat 
app.get("/api/usuarios", async (req, res) => {
  try {
    const result = await connection`SELECT * FROM usuarios`;
    res.json(result);
  } catch (e) {
    console.error("Error en la consulta:", e);
    res.status(500).json({ error: "Error en la base de datos " });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
