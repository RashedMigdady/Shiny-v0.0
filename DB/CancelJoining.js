const db = require("../database");

let Profession = db.Profession




let cancel = (pro, cb) => {
   console.log('donorbefoooooooooooooooooooooooooooooor', donor)
  Profession.findByIdAndDelete(pro._id, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb("done");
    }
  });
};

module.exports = {
  cancel
};