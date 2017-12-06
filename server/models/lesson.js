'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNul: false
    },
    title: DataTypes.STRING
  });

  // Lesson.associate = (models) => {
  //   Lesson.belongsTo(models.LevelsAssociation, {
  //     foreignKey: 'id',
  //     onDelete: 'CASCADE'
  //   });
  // };

  return Lesson;
};
