const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/BloodDonate', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let TechnicianSchema = new mongoose.Schema({
  // _id: String,
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  careerType: String,
  city: String,
  reports: Array,
});

let Technician = mongoose.model('Technician',TechnicianSchema );



module.exports = {
    Technician
}