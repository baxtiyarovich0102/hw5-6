const express = require("express")
let app = express()





app.get("*", (req, res, next) => {
    res.send("Working")
})

module.exports = app