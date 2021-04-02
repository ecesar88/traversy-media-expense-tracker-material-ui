import dotenv from "dotenv";
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const NODE_ENVIRONMENT = "development";
const MONGO_URI = "mongodb+srv://root:root@cluster0.6lfp8.mongodb.net/expensetracker?retryWrites=true&w=majority";
const MONGO_HOST = "localhost";

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  env: NODE_ENVIRONMENT,
};

const DATABASE = {
  mongo_uri: MONGO_URI,
  mongo_host: MONGO_HOST,
};

const config = {
  server: SERVER,
  db: DATABASE,
};

export default config;
