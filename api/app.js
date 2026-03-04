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

const path = require("path")

// Serve Vite build
app.use(express.static(path.join(__dirname, "..", "web", "dist")))

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "web", "dist", "index.html"))
})

// Error handlers

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
})

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({ message: "Internal Server Error"});
});

const PORT = process.env.PORT || 3000
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
});