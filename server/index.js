const express = require('express');
require('dotenv').config();
const db = require('./config/connection');
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use(require('./controllers/songRoutes'))

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});



