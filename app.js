require("dotenv").config();
const multer = require("multer");
const express = require("express");
const app = express();
const uploads = require("./routes/uploads");
const connectDB = require("./db/connect");

const upload = multer({ dest: "uploads" });

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/upload", upload.single("file"), uploads);

const port = 7000 || process.env.DATABASE_URL;

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
