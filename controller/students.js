// const StudentService = require('../services/students');

// class StudentsController {
//     constructor() {}
  
//     getAllStudents(req, res) {
//       const studentService = new StudentService();
//       const studentsData = studentService.getAllStudents();
//       res.json(studentsData);
//     }
  
//     getAllStudentsTesting(req, res) {
//       const testingResult = this.studentsServices.getAllStudentsTesting();
//       res.send(testingResult);
//     }
//   }
  
//   module.exports = new StudentsController();



// const StudentsService = require('../services/students');

// class StudentsController{
//   constructor(){}

//   async studentsData(req, res){
//     const stdService = new StudentsService();
//     const stdData = await stdService.studentsData();
//     // console.log("Controller -->", stdData);
//     res.json(stdData);
//   }
// }

// module.exports = new StudentsController();




const studentsService = require('../services/students')

class StudentsController{
  constructor(){};

  async GetAllStd(req, res){
    const getStdService = new studentsService();
    const stdData = await getStdService.getAllStd();
    res.json(stdData);
  }

  async InsertStd(req, res){
    let insertStdService = new studentsService();
    let insertData = await insertStdService.insertStd(req.body);
    console.log(req.body);
    res.json(insertData);
    console.log("Data Inserted Successfully");
  }

  async UpdateStd(req, res){
    const updateStdService = new studentsService();
    const updateData = await updateStdService.updateStd(
      {_id: req.params._id},
      {$set: req.body}
    );
    res.json(updateData);
    console.log("Data Updated Successfully");
  }

  async DeleteStd(req, res){
    const deleteStdService = new studentsService();
    const deleteData = await deleteStdService.deleteStd(req.params.name);
    res.json(deleteData);
  }

  async GetStdByName(req, res){
    const getStdByNameStdService = new studentsService();
    const getStdByNameData = await getStdByNameStdService.getStdByName(req.params.name);
    res.json(getStdByNameData);
  }
  
  async GetStdById(req, res){
    const getStdByIdStdService = new studentsService();
    const getStdByIdData = await getStdByIdStdService.getStdById(req.params._id);
    res.json(getStdByIdData);
  }
}

module.exports = new StudentsController();
  