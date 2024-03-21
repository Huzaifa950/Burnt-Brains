const express = require("express");
const studentsRoutes = require("./routes/students");
const usersRoutes = require("./routes/users");
const database = require("./config");

const app = express();
const PORT = 3500;

app.use(express.json());

app.use("/student", studentsRoutes);
app.use("/user", usersRoutes);
app.listen(PORT, () => {
  database();
  console.log(`App Running on http://localhost:${PORT}`);
});
