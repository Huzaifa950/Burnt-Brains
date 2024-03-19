// const express = require("express");
// const dbConnect = require("./config");
// const app = express();
// const PORT = 3000;
// app.use(express.json());

// app.get("/", async (req, res) => {
//   let data = await dbConnect();
//   data = await data.find().toArray();

//   res.send(data);
// });
// app.post("/", async (req, res) => {
//   let data = await dbConnect();
//   let insertData = await data.insertOne(req.body);
//   res.send(insertData);
// });
// app.put("/:stdName", async (req, res) => {

//     let data = await dbConnect();
//     let updatedData = await data.updateOne(
//         {stdName:req.params.stdName},
//         {$set:req.body}
//         )
//     res.send(updatedData);
// });
// app.delete('/', async(req, res)=>{
//     let data = await dbConnect();
//     let deletedData = await data.deleteOne(req.body);
//     console.log(deletedData);
//     res.send('Data Deleted');
// })

// app.listen(PORT, () => {
//   console.log(`App running on http://localhost:${PORT}`);
// });

const express = require("express");
const dbConnect = require("./config");
const app = express();

const PORT = 3000;
app.use(express.json());

app.get("/", async (req, res) => {
  let db = await dbConnect();
  let data = await db.find().toArray();
  res.send(data);
  console.log("Getting Data");
});

app.post("/", async (req, res) => {
  let db = await dbConnect();
  let insertedData = await db.insertMany(req.body);
  res.send(insertedData);
  console.log("Data Inserted Successfully");
});

app.put("/:stdName", async (req, res) => {
  let db = await dbConnect();
  let updatedData = await db.updateOne(
    { stdName: req.params.stdName },
    { $set: req.body }
  );
  res.send(updatedData);
  console.log("Data Updated Successfully");
});

app.delete('/', async (req, res)=>{
  let db = await dbConnect();
  let deletedData = await db.deleteOne(req.body);
  res.send(deletedData);
  console.log('Data Deleted');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
