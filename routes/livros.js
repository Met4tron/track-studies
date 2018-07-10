const router = require('express').Router();
const LivrosController = require('../controllers/livrosController');

router.route('/all')
  .get(LivrosController.getBooks)

router.route('/livro/:id')
  .get(LivrosController.findOne)
  .put(LivrosController.updateBook)
  .delete(LivrosController.deleteBook)

router.route('/create')
  .post(LivrosController.createBook)

module.exports = router;