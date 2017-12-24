const Lesson = require('../models').Lesson;

const data = require('./2017.12.23-Lessons.json');
const queries = [];

data.lessons.forEach((lesson) => {
  queries.push(Lesson.create(lesson));
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
