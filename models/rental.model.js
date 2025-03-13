const { default: mongoose } = require("mongoose");

const rentalSchema = new mongoose.Schema({
  userId : { type: mongoose.Types.ObjectId, ref: "users" },
  bookId : { type: mongoose.Types.ObjectId, ref: "books" },
});

let rental = mongoose.model("Rental", rentalSchema);

module.exports = rental;
