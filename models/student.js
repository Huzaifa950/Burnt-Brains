const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema(
  {
    name: String,
    rollNo: String,
    cgpa: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentsSchema);