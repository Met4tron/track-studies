const router = require('express').Router();
const livrosRoutes = require('./livros');
const artigosRoutes = require('./artigos');

router.use('/livros', livrosRoutes);
router.use('/artigos', artigosRoutes);

module.exports = router;
