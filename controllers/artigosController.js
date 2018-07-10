const { Artigos } = require('../models');

exports.getArticles = (req, res) => {
  Artigos.findAll({ })
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  })
}

exports.getArticle = (req, res) => {
  const { articleId } = req.body;
  Artigos.findOne({ id: id })
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.createArticle = (req, res) => {
  const body = req.body.article;
  Artigos.create(body)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.deleteArticle = (req, res) => {
  const { articleId } = req.body;
  const query = {
    where: {
      id: articleId
    }
  };

  Artigos.destroy(query)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.updateArticle = (req, res) => {
  const body = req.body.article;
  const { articleId } = req.body;
  const query = {
    where: {
      id: articleId
    }
  }

  Artigos.update(body)
  .then((data) => {
    return res.json(data)
  })
  .catch((err) => {

  });
}
