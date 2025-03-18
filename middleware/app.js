const express = require("express");
let app = express();

let bookRouter = require("../routes/book.route");
let userRouter = require("../routes/user.route")

app.use(express.json());
app.use('/uploads', express.static('./uploads'))
app.use(express.urlencoded({ extended: true }))


app.use("/api/books", bookRouter);
app.use("/api", userRouter)

app.get("*", (req, res, next) => {
  res.send("Working");
});

module.exports = app;
