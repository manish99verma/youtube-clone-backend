import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
const app = express();

console.log("Starting server...");

dotenv.config({ path: "./env" });

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on  port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
})();
*/

connectDB();
