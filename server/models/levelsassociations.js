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
    lessonId: {
      type: DataTypes.INTEGER,
      required: true,
    }
  });

  LevelsAssociation.associate = (models) => {
    LevelsAssociation.belongsTo(models.Lesson);
  };

  return LevelsAssociation;
};
