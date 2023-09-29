import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is necessary"],
    },

    email: {
      type: String,
      required: [true, "Email is necessary"],
    },

    phone: {
      type: String,
      required: [true, "Email is necessary"],
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export const userModal = mongoose.model("user", userSchema);
