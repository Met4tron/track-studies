'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artigo = sequelize.define('Artigo', {
    titulo: DataTypes.STRING,
    data: DataTypes.DATE,
    tags: DataTypes.STRING
  }, {});
  Artigo.associate = function(models) {
    // associations can be defined here
  };
  return Artigo;
};