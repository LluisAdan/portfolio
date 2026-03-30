require("dotenv").config()

const express = require("express")
const logger = require("morgan")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const path = require("path")

require("./configs/db.config")

const app = express()

// Security & parsers
app.use(helmet())
app.use(express.json({ limit: "10kb" }))
app.use(logger("dev"))

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// Rate limit (solo contacto)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests" },
})

app.use("/api/v1/send", contactLimiter)

// API routes
const router = require("./configs/routes.config")
app.use("/api/v1", router)

// Serve frontend (Vite build)
app.use(express.static(path.join(__dirname, "..", "web", "dist")))

// SPA fallback (solo para rutas NO api)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "web", "dist", "index.html"))
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ message: "Internal Server Error" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})