const { Cursos } = require('../models');

exports.getAll = async (req, res) => {
  const result = await Cursos.findAll();
  return res.json(result);
}