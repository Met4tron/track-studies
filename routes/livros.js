const router = require('express').Router();
const LivrosController = require('../controllers/livrosController');

router.get('/all', LivrosController.getLivros);
router.get('/livro/:id', LivrosController.findOne);
router.post('/create', LivrosController.create);
router.put('/livro/:id', LivrosController.updateLivro);

module.exports = router;