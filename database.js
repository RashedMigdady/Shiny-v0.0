const mongoose = require('mongoose');
 mongoose.connect('mongodb+srv://rashed:r0776381049@shiny-bbeqn.mongodb.net/shiny?retryWrites=true&w=majority');
//mongoose.connect('mongodb+srv://naaman:tBZNfUHaMrj8JWAM@cluster0-xcjyv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let ProfessionSchema = new mongoose.Schema({
  // _id: String,
  firstName: {type:String,
              required:true,
             },
  lastName: String,
  phone: {type:String,
           required:true},
  email: {type:String,
          required:true,
          unique:true},
  ProfessionType: {type:String,
                   required:true},
  Address: {type:String,
            required:true},
  yearsOfExperience:String,
  HourlyPrice:Number,
  reports:Array,
  
});

let Profession = mongoose.model('Profession', ProfessionSchema);



module.exports = {
  Profession
}
