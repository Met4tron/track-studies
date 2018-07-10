const { Livros } = require('../models');

exports.getBooks = (req, res) => {
 Livros.findAll()
 .then((data) => {
  return res.json(data)
 })
 .catch((err) => {
  throw new Error(err);
 })
}

exports.findOne = (req, res) => {
  const { bookId } = req.body.book;
  Livros.findById(bookId)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  })
}

exports.createBook = (req, res) => {
  const body = req.body.book
  Livros.create(body)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.updateBook = (req, res) => {
  const body = req.body.book;
  const { bookId } = req.body;
  const options = {
    where: {
      id: bookId
    },
    returning: true
  };

  Livros.update(body, options)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  })
}

exports.deleteBook = (req, res) => {
  const { bookId } = req.body;
  const query = {
    where: {
      id: bookId
    }
  };

  Livros.destroy(query)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}