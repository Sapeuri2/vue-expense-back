const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.listen(5000, '0.0.0.0', () => {
    console.log('Serveur dispo sur le port 5000');
});

//routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });

server()