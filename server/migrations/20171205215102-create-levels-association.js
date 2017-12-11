'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LevelsAssociations', {
      level: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        allowNull: false,
        references: {
          model: 'Lessons',
          key: 'id',
          as: 'lesson_id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('LevelsAssociations');
  }
};
