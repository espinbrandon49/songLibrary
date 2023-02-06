const express = require('express');
const controllers = require('./controllers');
require('dotenv').config();
const db = require('./config/connection');
const cors = require('cors')
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.use(controllers)

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});



