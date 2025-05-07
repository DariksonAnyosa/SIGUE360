const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config(); // .env

const app = express();
app.use(cors());
app.use(express.json()); // ← NECESARIO para leer JSON en POST

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Ruta de login
app.post('/api/login', async (req, res) => {
  const { dni, contraseña } = req.body;

  try {
    const result = await pool.query(
      'SELECT * FROM usuario WHERE dni = $1 AND contraseña = $2',
      [dni, contraseña]
    );

    if (result.rows.length > 0) {
      res.json({ login: true, usuario: result.rows[0] });
    } else {
      res.status(401).json({ login: false, mensaje: 'DNI o contraseña incorrectos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al procesar el login');
  }
});

// Ruta de prueba
app.get('/api/mensajes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar la base de datos');
  }
});

app.listen(3001, () => {
  console.log('Servidor backend corriendo en http://localhost:3001');
});