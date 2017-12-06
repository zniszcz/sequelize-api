'use strict';
module.exports = (sequelize, DataTypes) => {
  var LevelsAssociation = sequelize.define('LevelsAssociation', {
    level: DataTypes.INTEGER
  });

  // LevelsAssociation.associate = (models) => {
  //   LevelsAssociation.hasMany(models.Lesson, {
  //     foreignKey: 'id',
  //     as: 'lessonId'
  //   });
  // };

  return LevelsAssociation;
};
