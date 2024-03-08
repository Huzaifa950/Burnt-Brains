const students = [
    {
      id: 1,
      name: "Hailee",
      email: "hbinney0@netvibes.com",
      gender: "Female",
    },
    {
      id: 2,
      name: "Eustace",
      email: "eharrald1@ow.ly",
      gender: "Male",
    },
    {
      id: 3,
      name: "Marigold",
      email: "mfacer2@phoca.cz",
      gender: "Female",
    },
    {
      id: 4,
      name: "Auberon",
      email: "abrimelow3@soundcloud.com",
      gender: "Male",
    },
    {
      id: 5,
      name: "Dorolice",
      email: "dgirth4@csmonitor.com",
      gender: "Female",
    },
    {
      id: 6,
      name: "Lanni",
      email: "lwaberer5@123-reg.co.uk",
      gender: "Female",
    },
    {
      id: 7,
      name: "Dulci",
      email: "dwidocks6@istockphoto.com",
      gender: "Female",
    },
    {
      id: 8,
      name: "Nanice",
      email: "nlabon7@sakura.ne.jp",
      gender: "Female",
    },
    {
      id: 9,
      name: "Joelly",
      email: "jbearham8@slate.com",
      gender: "Female",
    },
    {
      id: 10,
      name: "Jan",
      email: "jsamme9@toplist.cz",
      gender: "Polygender",
    },
  ];
  
  const getAllStudents = async(req, res) =>{
    res.status(200);
    res.json(students);
  }
  
  const getAllStudentsTesting = async(req, res) =>{
    res.status(200);
    res.send("I am get All Students Testing");
  }
  
  module.exports = { getAllStudents, getAllStudentsTesting}