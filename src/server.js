import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import db from './db';

db.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
});

const app = express();
app.use(cors());
 
app.listen(process.env.APP_PORT, () =>
  console.log('Example app listening on port 3000!'),
);