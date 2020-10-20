const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const HttpError = require('./models/httpError');

const itemRoutes = require('./routes/item-route')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  
    next();
});

app.use('/api', itemRoutes); 

app.use((req, res, next) => {
        
    const error = new HttpError("Could not find this route", 404);
       throw error;
   });


   mongoose
     .connect("mongodb://localhost:27017/Items", { useNewUrlParser: true })
     .then(() => {
       app.listen(5000);
       console.log("Connected to database");
     })
     .catch((err) => {
       console.log(err);
     });