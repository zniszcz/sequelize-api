'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lesson = sequelize.define('Lesson', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNul: false
    },
    title: {
        type: DataTypes.STRING,
        required: true
    }
  });

  return Lesson;
};
