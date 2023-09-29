import mongoose from "mongoose";
import color from "colors";

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;

    await mongoose.connect(url);
    console.log("Database connected successfully...".bgGreen);
  } catch (error) {
    console.log("database connection fail".bgRed);
  }
};

export default connectDB;
