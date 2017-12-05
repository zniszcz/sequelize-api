'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lesson = sequelize.define('Lesson', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,,
      allowNul: false
    },
    title: DataTypes.STRING
  });

  Lesson.associate = (models) => {
    Lesson.belongsTo(models.LevelsAssoctiation, {
      foreignKey: 'id',
      onDelete: 'CASCADE'
    });
  };

  return Lesson;
};
