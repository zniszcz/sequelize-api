'use strict';
module.exports = (sequelize, DataTypes) => {
  var LevelsAssociation = sequelize.define('LevelsAssociation', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    level: {
        type: DataTypes.INTEGER,
        required: true,
        allowNull: false,
    },
  });

  LevelsAssociation.associate = (models) => {
    LevelsAssociation.hasMany(models.Lesson, {
      foreignKey: 'id',
      as: 'lessonId'
    });
  };

  return LevelsAssociation;
};
