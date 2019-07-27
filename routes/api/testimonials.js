const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const auth = require("../../middleware/auth");

const Testimonials = require("../../models/Testimonials");

// @route   GET api/testimonials
// @desc    Get all testimonials
// @access  Public
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonials.find().sort({ date: -1 });
    res.json(testimonials);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/testimonials
// @desc    Create a testimonial
// @access  Public
router.post(
  "/",
  [
    [
      check("company", "Company field is required")
        .not()
        .isEmpty(),
      check("comment", "Comment field is required")
        .not()
        .isEmpty(),
      check("email", "Email field is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { client, company, comment, email } = req.body;

    const testimonialFields = {};
    if (client) testimonialFields.client = client;
    if (company) testimonialFields.company = company;
    if (comment) testimonialFields.comment = comment;
    if (email) testimonialFields.email = email;

    try {
      testimonial = new Testimonials(testimonialFields);

      await testimonial.save();
      res.json(testimonial);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/testimonials/:id
// @desc    Update a testimonial
// @access  Private
router.post("/:id", auth, async (req, res) => {
  const { client, company, comment, email, approved } = req.body;

  const testimonialFields = {};
  if (client) testimonialFields.client = client;
  if (company) testimonialFields.company = company;
  if (comment) testimonialFields.comment = comment;
  if (email) testimonialFields.email = email;
  if (approved) testimonialFields.approved = approved;

  try {
    let testimonial = Testimonials.findOne({ _id: req.params.id });

    if (!testimonial) {
      return res
        .status(404)
        .json({ errors: [{ msg: "Testimonial not found" }] });
    }

    testimonial = await Testimonials.findOneAndUpdate(
      { _id: req.params.id },
      { $set: testimonialFields },
      { new: true }
    );

    return res.json(testimonial);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/testimonials/:id
// @desc    DELETE a testimonial
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const testimonial = await Testimonials.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({ msg: "Testimonial not found" });
    }

    await testimonial.remove();

    res.json({ msg: "Testimonial deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
