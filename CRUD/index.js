// const dbConnect = require("../config");

// const main = async () => {
//   let data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
// };
// main();

//////////////////////////// Using Promise /////////////////////////////////////

// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.warn(data);
//     });
// });


const dbConnect = require('../config');

const mainFunc = async()=>{
  let data = await dbConnect();
  data = await data.find().toArray();

  console.log(data);
} 

mainFunc();
