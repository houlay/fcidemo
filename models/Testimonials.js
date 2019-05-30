const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  client: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Testimonials = mongoose.model(
  "testimonial",
  testimonialSchema
);
