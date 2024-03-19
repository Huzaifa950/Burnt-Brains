// const express = require("express");
// const router = express.Router();
// const StudentsController = require("../controller/students");
// const simpleMiddleware = require("../middlewares/auth");

// router.get("/", simpleMiddleware, StudentsController.getAllStudents);
// router.get("/testing", (req, res) =>
//   studentsControllerInstance.getAllStudentsTesting(req, res)
// );

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const StudentsController = require("../controller/students");

// router.get('/', StudentsController.studentsData);

// module.exports = router;

const express = require("express");
const router = express.Router();
const StudentsController = require("../controller/students");

router.get("/", StudentsController.GetAllStd); // Done
router.post("/", StudentsController.InsertStd);    // Inserting only Ids and timeStamps
router.put("/:_id", StudentsController.UpdateStd); // Acknowledged: true but no updataion
router.delete("/:name", StudentsController.DeleteStd); // Done
router.get("/:name", StudentsController.GetStdByName); // Done
router.get("/byId/:_id", StudentsController.GetStdById); // Done

module.exports = router;
