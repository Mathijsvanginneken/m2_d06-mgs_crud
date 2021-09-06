<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(

);

// const Book = model('Book', bookSchema);
// module.exports = Book;

module.exports = model('Book', bookSchema);
=======
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: String,
    description: String,
    author: {type: Schema.Types.ObjectId, ref: "Author"}, //_id,
    rating: Number
  },
  {
    timestamp: true
  }
);

// const Book = model('Book', bookSchema);
// module.exports = Book;

module.exports = model('Book', bookSchema);
>>>>>>> 6f957638fa4c9225e677e32ab06448e8feb19d20
