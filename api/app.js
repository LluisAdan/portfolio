require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const cors = require('./middlewares/cors.middleware');

require('./configs/db.config');

const app = express();

// Middlewares

app.use(logger('dev'));
app.use(express.json());
app.use(cors);

// Routes

const router = require('./configs/routes.config');
app.use('/api/v1', router);

// Error handlers

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
})

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: "Internal Server Error"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Application running at port ${port}`));