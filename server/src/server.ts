import express from "express";
import dotenv from "dotenv";
//import morgan from "morgan"; // idk if we are ever going to use this
import colors from "colors";
import transactionsRoutes from "./routes/transactions";
import config from "../config/config";
import logging from "../config/logging";
import connectDb from "../config/db"

// Connecting to the database (mongodb in this case)
connectDb()

const router = express();
const NAMESPACE = "Server"; // For logging

dotenv.config({ path: "config/config.env" });
const PORT = config.server.port;

router.use(express.json())

router.use(
  "/api/v1/transactions",
  (req, res, next) => {
    logging.info(
      NAMESPACE,
      `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`
    );

    res.on("finish", () => {
      logging.info(
        NAMESPACE,
        `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`
      );
    });
    next();
  },
  transactionsRoutes
);

router.listen(PORT, () =>
  console.log(
    colors.yellow.bold(
      `[server] Server running on ${config.server.env} mode on port ${PORT}`
    )
  )
);
