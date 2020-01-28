const mongoose = require("mongoose");


//mongoose.connect('mongodb+srv://rashed:r0776381049@shiny-bbeqn.mongodb.net/shiny?retryWrites=true&w=majority');
mongoose.connect("mongodb://localhost/users", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("_________________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("_________________________________");
});


