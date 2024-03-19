// class studentsServices {
//     getAllStudents() {
//         return [
//           {
//             id: 1,
//             name: "Hailee",
//             email: "hbinney0@netvibes.com",
//             gender: "Female",
//           },
//           {
//             id: 2,
//             name: "Eustace",
//             email: "eharrald1@ow.ly",
//             gender: "Male",
//           },
//           {
//             id: 3,
//             name: "Marigold",
//             email: "mfacer2@phoca.cz",
//             gender: "Female",
//           },
//           {
//             id: 4,
//             name: "Auberon",
//             email: "abrimelow3@soundcloud.com",
//             gender: "Male",
//           },
//           {
//             id: 5,
//             name: "Dorolice",
//             email: "dgirth4@csmonitor.com",
//             gender: "Female",
//           },
//         ];
//       }

//     getAllStudentsTesting() {
//       return ('I am All Students Testing');
//     }
//   }

//   module.exports = studentsServices;

const Student = require("../models/student");

class studentsService {
  async getAllStd() {
    // WORKING
    let stdData = await Student.find();
    return stdData;
  }

  async insertStd(data) {
    console.log(data);
    let insertedData = await Student.create(data);
    console.log(insertedData);
    return insertedData;
  }

  async updateStd(filter, update) {
    try {
      let updatedData = await Student.findOneAndUpdate(filter, update);
      console.log(updatedData);
      return updatedData;
    } catch (err) {
      console.log("Error while updating data : ", err);
    }
  }

  async deleteStd(name) {
    //WORKING
    let deletedData = await Student.deleteOne({ name });
    console.log(deletedData);
    return deletedData;
  }

  async getStdByName(name) {
    let stdData = await Student.findOne({ name });
    console.log(stdData);
    return stdData;
  }

  async getStdById(id) {
    let stdData = await Student.findById({ _id: id });
    console.log(stdData);
    return stdData;
  }
}

module.exports = studentsService;
