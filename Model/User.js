// Import MongoDB.
const mongoose = require("mongoose");

// Create User Schema

let ProfessionSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },

  lastName: { type: String, required: true, trim: true },

  email: { type: String, required: true, unique: true, trim: true },

  password: { type: String, required: true, trim: true },

  phone: { type: String, required: true, unique: true, trim: true },

  age: { type: Number, required: true },

  ProfessionType: { type: String, required: true },

  Address: { type: String, required: true },

  yearsOfExperience: { type: String, required: true },

  HourlyPrice: { type: Number, required: true },

  rate: { type: Array, required: false, min: 0, max: 5 },

  views: { type: Number, required: false, min: 0 },
});

let Profession = mongoose.model("Profession", ProfessionSchema);

let AddUser = (newUser, cb) => {
  console.log("new user", newUser);
  Profession.create(newUser, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let getUser = (user, cb) => {
  console.log("USER", user);
  Profession.find(user, (error, data) => {
    if (error) {
      cb(error);
    } else {
      cb(data);
    }
  });
};

let cancel = (id, cb) => {
  Profession.remove({ _id: id }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let updateInfo = (id, newInfo, cb) => {
  console.log("id", id);
  console.log("newInfo", newInfo);
  Profession.updateOne({ _id: id }, newInfo, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let search = (query, cb) => {
  Profession.find({ ProfessionType: query }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let addRate = (id, rate, cb) => {
  Profession.findOneAndUpdate(
    { _id: id },
    { $push: { rate: rate } },
    (error, data) => {
      if (error) {
        cb(error);
      } else {
        cb(data);
      }
    }
  );
};

let getAllProfessions = (cb) => {
  Profession.find({}, (error, data) => {
    if (error) {
      cb(error);
    } else {
      cb(data);
    }
  });
};

let showProfession = (id, cb) => {
  Profession.find({ _id: id }, (error, data) => {
    if (error) {
      cb(error);
    } else {
      cb(data);
    }
  });
};

let filterProfessions = (city, type) => {
  return Profession.find({ Address: city, ProfessionType: type });
};

let filterPro = (type) => {
  return Profession.find({ ProfessionType: type });
};

module.exports = {
  getUser,
  AddUser,
  cancel,
  updateInfo,
  addRate,
  search,
  getAllProfessions,
  showProfession,
  filterProfessions,
  filterPro,
};
