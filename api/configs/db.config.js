const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI)
  .then(() => console.info('Succesfully connected to the database'))
  .catch((error) => console.error('An error ocurred trying to connect to the database', error));