const { Livros } = require('../models');

exports.getLivros = async (req, res) => {
 try {
    return res.json(await Livros.findAll());
 } catch(err) {
   throw new Error(err);
 }
}

exports.findOne = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await Livros.findById(id);
    return res.json(data);
  } catch (err) {
    throw new Error(err);
  }
}

exports.create = async (req, res) => {
  try {
    const data = await Livros.create(req.body);
    return res.json({ message: 'Saved' });
  } catch (err) {
    throw new Error(err);
    return res.status(500);
  }
}