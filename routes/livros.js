const router = require('express').Router();
const LivrosController = require('../controllers/livrosController');

router.get('/all', LivrosController.getLivros);

module.exports = router