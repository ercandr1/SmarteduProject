const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true, //tek bı tane
    required: true, // boş kalamaz
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Course = mongoose.model('Course', CourseSchema);
module.exports. Course;