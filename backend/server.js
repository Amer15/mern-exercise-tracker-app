const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_CONNECT,
  { useNewUrlParser: true, useCreateIndex: true },
  () => { console.log('connected to DB') })

const exercisesRouter = require('./routes/excercises');
const usersRouter = require('./routes/users');

app.use('/excercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});