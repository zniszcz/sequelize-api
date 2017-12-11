'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lessons', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lessons');
  }
};
