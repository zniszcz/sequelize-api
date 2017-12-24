const Levels = require('../models').LevelsAssociation;

const data = require('./2017.12.23-Levels.json');
const queries = [];

Object.values(data.levels).forEach((levels) => {
  levels.forEach((level) => {
    queries.push(Levels.create(level));
  });
});

Promise.all(queries)
  .then((data) => {
    console.log("Import was successfull");
    process.exit(0);
  })
  .catch((error) => {
    console.log("Errors appeared: ", error);
    process.exit(1);
  });
