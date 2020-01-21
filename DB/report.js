const db = require("../database");
//let  Donor= db.Donor;
let Profession = db.Profession;



let readData = cb => {
  Donor.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};
let updatePro = (newReport, cb) => {
  // console.log("Dbbbbbbbbbbbbbbb", newReport);
  Profession.findByIdAndUpdate(newReport._id, newReport, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};

let countPro = cb => {
  Profession.count({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};
module.exports = {
  countPro,
  updatePro,
  readData
};