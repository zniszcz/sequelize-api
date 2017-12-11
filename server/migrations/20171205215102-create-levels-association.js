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
        type: Sequelize.UUID,
        // onDelete: 'CASCADE',
        references: {
          model: 'Lessons',
          key: 'id',
          as: 'lesson_id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('LevelsAssociations');
  }
};
