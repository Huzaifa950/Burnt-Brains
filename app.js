
const express = require('express')
const app = express()
const studentsRoute = require('./routes/students')
const PORT = 3500;

app.use('/', studentsRoute)

app.listen(PORT, ()=>{
  console.log(`App Running on http://localhost:${PORT}`)
})
