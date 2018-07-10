const { Cursos } = require('../models');

exports.getAll = async (req, res) => {
  Cursos.findAll({})
  .then((data) => {
    return res.data(data);
  })
  .catch((err) => {
    throw new Error(err);
  })
}

exports.findOneCourse = (req, res) => {
  const { courseId } = req.body;
  Cursos.findById(courseId)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.createCourse = (req, res) => {
  const body = req.body.course
  Cursos.create(body)
  .then((data) => {
    return res.json(data)
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.updateCourse = (req, res) => {
  const { courseId } = req.body;
  const body = req.body.course;
  const options = {
    where: {
      id: courseId
    }
  };

  Cursos.update(body, options)
  .then((data) => {
    return res.json(data);
  })
  .catch((err) => {
    throw new Error(err);
  });
}

exports.deleteCourse = (req, res) => {
  const { courseId } = req.body;
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