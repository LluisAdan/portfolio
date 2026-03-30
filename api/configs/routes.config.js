const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects.controller');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/projects', projects.create);
router.get('/projects', projects.list);

router.post("/send", async (req, res) => {
  // Origin allowlist
  const origin = req.get("origin")
  const allowedOrigins = new Set([
    process.env.CORS_ORIGIN,
    "https://lluis-adan-dev.fly.dev",
  ].filter(Boolean))

  if (origin && allowedOrigins.size > 0 && !allowedOrigins.has(origin)) {
    return res.status(403).json({ message: "Forbidden" })
  }

  // Honeypot + min time (anti-bot)
  const { honeypot, ts } = req.body
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    // responde OK para no dar pistas
    return res.status(200).json({ message: "OK" })
  }
  const now = Date.now()
  if (typeof ts === "number" && now - ts < 1200) {
    return res.status(200).json({ message: "OK" })
  }

  // Helpers
  const clampStr = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "")
  const isValidEmail = (v) =>
    typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
  const noCRLF = (v) => typeof v === "string" && !/[\r\n]/.test(v)

  // Validate payload
  const name = clampStr(req.body.name, 60)
  const email = clampStr(req.body.email, 120)
  const message = clampStr(req.body.message, 2000)

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Invalid payload" })
  }
  if (!isValidEmail(email) || !noCRLF(email) || !noCRLF(name)) {
    return res.status(400).json({ message: "Invalid payload" })
  }

  // Build email safely
  const safeName = name.replace(/[^\p{L}\p{N}\s.'-]/gu, "").slice(0, 60)
  const subject = `MENSAJE EN PORTFOLIO de ${safeName || "Contacto"}`

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject,
    text: `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: "Correo enviado con éxito" })
  } catch (error) {
    console.error("SEND ERROR:", error)
    return res.status(500).json({ message: "Error al enviar el correo" })
  }
})

module.exports = router;