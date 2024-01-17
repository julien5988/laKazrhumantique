
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDb = require('./config/db');
const giteRoutes = require('./routes/gite');
const guestRoutes = require('./routes/guest');
const prestationRoutes = require('./routes/prestation'); 
const app = express();

app.use(express.json());

// Connecter à la base de données MongoDB
connectDb();


app.use('/gite', giteRoutes);
app.use('/guest',guestRoutes);
app.use('/prestation',prestationRoutes);


module.exports = app;
