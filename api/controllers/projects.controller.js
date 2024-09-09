const mongoose = require('mongoose'); 
const Project = require('../models/project.model');

module.exports.create = (req, res, next) => {
  Project.create(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(err=> {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(400).json(err.errors);
      } else {
        next(err);
      }
    });
};

module.exports.list = (req, res, next) => {
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(next);
};