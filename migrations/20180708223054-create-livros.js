'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Livros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      ano: {
        type: Sequelize.DATE
      },
      descricao: {
        type: Sequelize.STRING
      },
      tags: {
        type: Sequelize.STRING
      },
      paginas: {
        type: Sequelize.INTEGER
      },
      paginasLidas: {
        type: Sequelize.STRING
      },
      porcentagemLida: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Livros');
  }
};