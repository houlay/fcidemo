const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const auth = require("../../middleware/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator/check");

const User = require("../../models/User");

// @route   GET api/users
// @desc    Get all users
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find().sort({ date: -1 });
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   POST api/users
// @desc    Register a user
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Please enter a password with 6 or more characters"
      ).isLength({ min: 6 })
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, level } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        level
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

// @route   POST api/users/:id
// @desc    Update a user
// @access  Private
router.post("/:id", auth, async (req, res) => {
  const { name, email, password, level } = req.body;

  const userField = {};
  if (name) userField.name = name;
  if (email) {
    userField.email = email;
    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm"
    });
    userField.avatar = avatar;
  }
  if (password) {
    const salt = await bcrypt.genSalt(10);
    newPassword = await bcrypt.hash(password, salt);
    userField.password = newPassword;
  }
  if (level) userField.level = level;

  try {
    let user = User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({ msg: [{ msg: "User not found" }] });
    }

    user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: userField },
      { new: true }
    );

    return res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route   DELETE api/users/:id
// @desc    DELETE a user
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    await user.remove();

    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
