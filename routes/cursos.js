const router = require('express').Router();
const CursosController = require('../controllers/cursosController');

router.route('/id/:id')
  .get(CursosController.findOneCourse)
  .put(CursosController.updateCourse)
  .delete(CursosController.deleteCourse)

router.route('/all')
  .get(CursosController.getAll)

router.route('/create')
  .get(CursosController.getAll);

module.exports = router