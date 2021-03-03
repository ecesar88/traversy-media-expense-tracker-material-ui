import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import transactionsRoutes from "./routes/transactions"

const app = express();

dotenv.config({ path: "config/config.env" });
const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions', transactionsRoutes)

app.listen(PORT, () =>
  console.log(
    colors.yellow.bold(
      `[server] Server running on ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  )
);
