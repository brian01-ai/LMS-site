import mongoose from "mongoose";

// Connect to database

const connectDB = async () => {
  mongoose.connection.on("connected", () => console.log("Database Connected"));
  await mongoose.connect(`${process.env.MONGODB_URI}/Edemy - Brian`);
};

export default connectDB;
