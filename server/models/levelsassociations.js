'use strict';
module.exports = (sequelize, DataTypes) => {
  var LevelsAssociation = sequelize.define('LevelsAssociation', {
    level: {
        type: DataTypes.INTEGER,
        required: true,
    },
  }, {
    underscored: true,
  });

  LevelsAssociation.associate = (models) => {
    LevelsAssociation.hasMany(models.Lesson, {
      foreignKey: 'id',
      as: 'lesson_id'
    });
  };

  return LevelsAssociation;
};
