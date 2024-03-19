const express = require("express");
const studentsRoutes = require("./routes/students");
const database = require("./config");

const app = express();
const PORT = 3500;

app.use(express.json());

app.use("/", studentsRoutes);
app.listen(PORT, () => {
  database();
  console.log(`App Running on http://localhost:${PORT}`);
});
