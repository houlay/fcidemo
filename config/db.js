const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(
      `An error has occured while trying to connect to mongoDB: ${err.message}`
    );
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
