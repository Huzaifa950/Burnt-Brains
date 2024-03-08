
const students = require('../services/students');

class StudentsController {
  async getAllStudents(req, res) {
    res.status(200);
    res.json(students);
  }

  async getAllStudentsTesting(req, res) {
    res.status(200);
    res.send("I am get All Students Testing");
  }
}

module.exports = new StudentsController();
