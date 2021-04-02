import mongoose from "mongoose";
import colors from "colors";
import config from "../config/config"

const connectDb = async ():Promise<void> => {
  try {
    const connection = await mongoose.connect(config.db.mongo_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (err) {
    console.log(colors.red.bold(`Error: ${err.message}`));
    process.exit(1);
  }
};

export default connectDb;
