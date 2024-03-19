// const dbConnect = require("../config");

// const insert = async () => {
//   const db = await dbConnect();
//   const result = await db.insertOne({
//     empName: "Hasan Alvi",
//     age: 28,
//     domain: "Developer",
//   });

//   if (result.acknowledged) {
//     console.log("Data Inserted");
//   }
//   //   console.log(result);
// };

// insert();


const dbConnect = require('../config');

const insertData = async()=>{
  let data = await dbConnect();
  let insertedData = await data.create([
    {rollNo:'0041-BSCS-20', stdName:'Aini', cgpa:3.55},
    {rollNo:'0002-BSCS-20', stdName:'Syeda Fatima Bukhari', cgpa:3.54},
    {rollNo:'0122-BSCS-20', stdName:'Nimra Maqbool', cgpa:3.41},
    {rollNo:'0071-BSCS-20', stdName:'Shahzaib Rajpoot', cgpa:3.39},
    {rollNo:'0107-BSCS-20', stdName:'Laiba Khan', cgpa:3.37},
    {rollNo:'0080-BSCS-20', stdName:'Muhammad Huzaifa', cgpa:3.33}
  ])

  console.log(insertedData);
}
insertData();

