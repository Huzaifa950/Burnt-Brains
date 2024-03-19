// const dbConnect = require("../config");

// const deleteData = async () => {
//   let data = await dbConnect();
//   let result = await data.deleteMany({ empName: "Hasan Alvi" });
//   console.log(result);
// };

// deleteData();

const dbConnect = require("../config");

const dataToBeDeleted = [
  "Muhammad Huzaifa",
  "Syeda Fatima Bukhari",
  "Shahzaib Rajpoot",
];

const deleteData = async () => {
  const data = await dbConnect();
  let deletedData = await data.deleteMany({ stdName: {$in: dataToBeDeleted}});

  console.log(deletedData);
};

// deleteData();