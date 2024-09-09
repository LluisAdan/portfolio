const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      unique: true
    },
    description: {
      type: String,
      required: 'Description is required'
    },
    image: {
      type: String
    },
    url: {
      type: String
    },
    skills: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);