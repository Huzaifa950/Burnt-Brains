// const dbConnect = require("../config");

// const update = async () => {
//   const data = await dbConnect();
//   let result = await data.updateMany(
//     { empName: "Muhammad Huzaifa" },
//     { $set: { age: 23, domain: "Developer" } }
//   );

//   console.warn(result);
// };

// update();



const dbConnect = require('../config');

const updatedData = async() =>{
  let data = await dbConnect();
  let updatedData = await data.updateOne({stdName:'Muhammad Huzaifa'}, {$set:{stdName:"M.Huzaifa"}})
  console.log(updatedData);
}

updatedData();
