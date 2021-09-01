import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

const app = express();
app.use(cors());
 
app.listen(process.env.APP_PORT, () =>
  console.log('Example app listening on port 3000!'),
);