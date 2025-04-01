function cors(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'content-type,authorization');

  if (req.method === "OPTIONS") {
    return res.sendStatus(200); // Responder manualmente a OPTIONS 
  }

  next();
}

module.exports = cors;