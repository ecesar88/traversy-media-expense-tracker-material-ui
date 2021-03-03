import dotenv from "dotenv";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 5000;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";
const NODE_ENVIRONMENT = "development"

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
  env: NODE_ENVIRONMENT
};

const config = {
  server: SERVER,
};

export default config;
