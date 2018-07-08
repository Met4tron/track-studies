const router = require('express').Router();
const livrosRoutes = require('./livros');

router.use('/livros', livrosRoutes);

module.exports = router;
