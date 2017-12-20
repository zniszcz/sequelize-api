'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LevelsAssociations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      level: {
        type: Sequelize.INTEGER,
        required: true,
        allowNull: false,
      },
      lessonId: {
        type: Sequelize.INTEGER,
        // onDelete: 'CASCADE',
        // allowNull: false,
        references: {
          model: 'Lessons',
          key: 'id',
          as: 'lessonId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      x: {
        type: Sequelize.INTEGER
      },
      y: {
        type: Sequelize.INTEGER
      }
    }, {
      uniqueKeys: {
        actions_unique: {
          fields: ['level', 'lessonId']
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('LevelsAssociations');
  }
};
