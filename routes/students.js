
const express = require('express')
const router = express.Router()
const {getAllStudents, getAllStudentsTesting} = require('../controller/students')

router.route('/').get(getAllStudents)
router.route('/testing').get(getAllStudentsTesting)

module.exports = router;