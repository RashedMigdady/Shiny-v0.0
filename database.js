const mongoose = require('mongoose');
 //mongoose.connect('mongodb+srv://rashed:r0776381049@shiny-bbeqn.mongodb.net/shiny?retryWrites=true&w=majority');
 mongoose.connect("mongodb://localhost/users" , {useNewUrlParser:true})
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('_________________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('_________________________________')
});


let ProfessionSchema = new mongoose.Schema({
  // _id: String,
  firstName:{type:String,
              required:true},
  lastName:{ type:String,
             required:true},
  age:{type:Number,
        required:false},

  phone:{type:String,
           required:true,
          unique:true},

  email:{type:String,
          required:true,
          unique:true},

  ProfessionType:{type:String,
                  required:false},

  Address:{type:String,
           required:false},

  yearsOfExperience:{type:String,
                     required:false},

  HourlyPrice:{type:Number,
               required:false},

  reports:{type:Array,
           required:false},

  password:{type:String,
            required:true},
  rate:{type:Number,
        required:false}
});

let Profession = mongoose.model('Profession', ProfessionSchema);

// let JoinProfession = (Pro, cb) => {
//   Profession.create(Pro, (err, data) => {

//       if (err) {
//           cb(err)
//       } else {
//           readData(cb)
//       }
//   })
// }

// let getWorker = (Pro , cb) =>{
//   Profession.find({}, (err, data) => {
//     if (err) {
//         cb(err)
//     } else {
//       console.log(data)
//         cb(data)
//     }
// })
// }



module.exports = {
  Profession
}
