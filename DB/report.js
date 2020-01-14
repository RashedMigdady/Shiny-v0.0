/*const db = require("../database");
let Profession = db.Profession



let readData = cb => {
 CancelJoining.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};
let updateDonor = (newReport, cb) => {
  // console.log("Dbbbbbbbbbbbbbbb", newReport);
  Donor.findByIdAndUpdate(newReport._id, newReport, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};

let countDonors = cb => {
  Donor.count({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      // console.log('data:', data);
      cb(data);
    }
  });
};
module.exports = {
  countDonors,
  updateDonor,
  readData
};*/