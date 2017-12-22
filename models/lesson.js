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
    },
    from: DataTypes.INTEGER,
    to: DataTypes.INTEGER,
    bgColor: DataTypes.STRING
  });

  Lesson.associate = (models) => {
    Lesson.hasMany(models.LevelsAssociation, {
      foreignKey: 'lessonId',
    });
  };

  return Lesson;
};
