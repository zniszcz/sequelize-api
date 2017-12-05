'use strict';
module.exports = (sequelize, DataTypes) => {
  var LevelsAssoctiation = sequelize.define('LevelsAssoctiation', {
    level: DataTypes.INTEGER
  });

  LevelsAssoctiation.associate = (models) => {
    LevelsAssoctiation.hasOne(models.Lesson, {
      foreignKey: 'id',
      as: 'lessonId'
    });
  };

  return LevelsAssoctiation;
};
