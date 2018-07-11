const router = require('express').Router();
const ArtigosController = require('../controllers/artigosController');

router.route('/id/:id')
  .get(ArtigosController.getArticle)
  .put(ArtigosController.updateArticle)
  .delete(ArtigosController.deleteArticle)
  
router.route('/create')
  .post(ArtigosController.createArticle);

router.route('/all')
  .get(ArtigosController.getArticles);

module.exports = router;