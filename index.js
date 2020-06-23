const express = require("express");
const schoolApp = express();
const bodyParser = require("body-parser");
const studentRoutes = require("./api/routes/student");
const staffRoutes = require("./api/routes/staff");

const path = require("path");
var cors = require("cors");
schoolApp.use(cors.apply());
schoolApp.use(bodyParser.json());
schoolApp.use(bodyParser.urlencoded({ extended: true }));
var multer = require("multer");
var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
//multer is used to upload the file
var upload = multer({ storage: storage });
// Routes which should handle requests
schoolApp.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// Routes which should handle requests
schoolApp.use("/school/student", upload.single("image"), studentRoutes);
schoolApp.use("/school/staff", upload.single("image"), staffRoutes);
// for empty default url
schoolApp.use("/", (req, res, next) => {
  res.status(404);
  res.send("Page not found");
});
module.exports = schoolApp;
