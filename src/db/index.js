import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDb connection success DB HOST: :${connectionInstance}`
    );
  } catch (error) {
    console.log("ERROR in connection", error);
    process.exit(1);
  }
};

export default connectDB;
