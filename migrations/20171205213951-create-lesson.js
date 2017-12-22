'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lessons', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      from: {
        type: Sequelize.INTEGER
      },
      to: {
        type: Sequelize.INTEGER
      },
      bgColor: {
        type: Sequelize.STRING
      },
      parent: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Lessons',
          key: 'id',
          as: 'lessonId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lessons');
  }
};
