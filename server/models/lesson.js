'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
  });

  Lesson.associate = (models) => {
    Lesson.hasMany(models.LevelsAssociation, {
      foreignKey: 'id',
      as: 'lessonId'
    });
  };

  return Lesson;
};
