const { Livros } = require('../models');

exports.getLivros = async (req, res) => {
 try {
  const data = await Livros.findAll();
  return res.json(data);
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

exports.updateLivro = async (req, res) => {
  try {
    const newLivro = {
      titulo: req.body.titulo,
      descricao: req.body.descricao,
      tags: req.body.tags,
      paginas: req.body.paginas,
      paginasLidas: req.body.paginasLidas,
      porcentagemLida: req.body.porcentagemLida
    };

    const options = {
      where: {
        id: req.body.id
      },
      returning: true
    };

    const data = await Livros.update(newLivro, options);
    if (data) {
      return res.json(data);
    } else {
      return res.status(400);
    }
  } catch (err) {
    return res.status(500);
  }
}