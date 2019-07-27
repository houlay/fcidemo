const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  client: {
    type: String
  },
  company: {
    type: String,
    required: true
  },
  email: {
    type: String,
    default: "No email address provided"
  },
  comment: {
    type: String,
    required: true
  },
  approved: {
    type: Boolean,
    default: false
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
