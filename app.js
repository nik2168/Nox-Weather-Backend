const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./constants/config.js");

// routes import
const userRoutes = require("./routes/user.routes.js");

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://noxweatherfrontend.vercel.app/",
      "*",
      process.env.CLIENT_URL,
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

dotenv.config({
  path: "./.env",
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to database successfully!");

    app.listen(process.env.port, () => {
      console.log(`Sever is running at port: ${process.env.port} `);
    });

    app.get("/", (req, res) => {
      res.send("Hello world !");
    });
  })
  .catch((err) => {
    console.log("Error while connecting to db", err);
  });

app.use("/api/v1/user", userRoutes);
