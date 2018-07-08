'use strict';
module.exports = (sequelize, DataTypes) => {
  var Curso = sequelize.define('Curso', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tags: DataTypes.STRING,
    duracao: DataTypes.INTEGER,
    porcentagemVista: DataTypes.INTEGER
  }, {});
  Curso.associate = function(models) {
    // associations can be defined here
  };
  return Curso;
};