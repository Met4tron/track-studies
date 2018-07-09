const { Cursos } = require('../models');

exports.getAll = async (req, res) => {
  const result = await Cursos.findAll();
  return res.json(result);
}

exports.findOneCourse = async (req, res) => {
  try {
    const { id } = req.query;
    const result = await Cursos.findOne({ id: id });
    return res.json(result);
  } catch (err) {
    throw new Error(err);
  }
}

exports.createCourse = async (req, res) => {
  try {
    const body = req.body.course;
    const data = await Cursos.create(body);
    return res.json(data)
  } catch (err) {
    throw new Error(err);
  }
}

exports.updateCourse = async (req, res) => {
  try {
    const body = req.body.course;
    const { id } = req.body;
    const options = {
      where: {
        id: id
      },
      returning: true
    }
    const data = await Cursos.update(body, options);
    return res.json(data);
  } catch (err) {
    throw new Error(err);
  }
}

exports.deleteCourse = (req, res) => {
  const { id } = req.body.course;
  const options = {
    where: {
      id: id
    }
  };

  Livros.delete(options)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      throw new Error(err);
    });
}

exports.completedCourses = (req, res) => {
  Livros.find({
    where: {
      porcentagemVista: 100
    }
  })
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      throw new Error(err);
    })
}

// // exports.courseByTag = async (req, res) => {

// // }

// exports.courseByDuration = (req, res) => {
  
// }