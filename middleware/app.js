const express = require("express");
let app = express();

let bookRouter = require("../routes/book.route");

app.use(express.json());
app.use("/api/books", bookRouter);

app.get("*", (req, res, next) => {
  res.send("Working");
});

module.exports = app;
