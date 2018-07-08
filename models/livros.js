'use strict';
module.exports = (sequelize, DataTypes) => {
  var Livros = sequelize.define('Livros', {
    titulo: DataTypes.STRING,
    ano: DataTypes.DATE,
    descricao: DataTypes.STRING,
    tags: DataTypes.STRING,
    paginas: DataTypes.INTEGER,
    paginasLidas: DataTypes.STRING,
    porcentagemLida: DataTypes.STRING
  }, {});
  Livros.associate = function(models) {
    // associations can be defined here
  };
  return Livros;
};