const express = require('express');
const router = express.Router();
const projects = require('../controllers/projects.controller');

router.post('/projects', projects.create);
router.get('/projects', projects.list);

module.exports = router;