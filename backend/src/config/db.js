import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("Error in db.js while connecting to database");
    process.exit(1);
  }
};
