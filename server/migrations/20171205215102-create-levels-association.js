'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LevelsAssociations', {
      level: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        // references: {
        //   model: 'Lessons',
        //   key: 'id',
        //   as: 'lessonId'
        // }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('LevelsAssociations');
  }
};
