const path = require("path");
const express = require("express");
const app = express(); // create express app
const PORT = process.env.PORT || 5000

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(PORT, () => {
  console.log("server started on port 5000");
});