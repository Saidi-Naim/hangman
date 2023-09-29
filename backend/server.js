const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();

const app = express();
const port = 5200;

connectDB();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', require('./routes/post.routes'));

app.listen(port, () => console.log('serveur ok port: ' + port));
