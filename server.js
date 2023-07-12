const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/pharmaRoutes.js');

const app = express();
const connectDB=require('./db/connect.js')

app.use(bodyParser.json());
app.use(cors());

app.use(routes);


const port = process.env.PORT || 4000;


const start = async () => {
  try {
    await connectDB(process.env.Mongo_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();