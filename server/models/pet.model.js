const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pet name required"],
      minlength: [3, "Pet name must be at least 3 characters"],
    },
    type: {
      type: String,
      required: [true, "Pet type required"],
      minlength: [3, "Pet type must be at least 3 characters"],
    },
    description: {
      type: String,
      required: [true, "Pet must have a description"],
      minlength: [3, "Pet description must be at least 3 characters"],
    },
    skills: [
      {
        type: String,
        required: false,
        minlength: [
          3,
          "Pet skills are optional but must be at least 3 characters",
        ],
      },
    ],
    likes: {
      required: false,
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("pet", PetSchema);

module.exports = Pet;
