const express = require("express");
const cors = require("cors");
// const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, 'React/build')));
app.use(express.json());
app.use(cors());

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname + "/React/build/index.html"));
// });

app.use("/CancelJoining", require("./server/CancelJoining"));
app.use("/JoinNow", require("./server/JoinNow"));
app.use("/search", require("./server/search"));
app.use("/report", require("./server/report"));


app.get("/workers", (req, res) => {
    mongo.getWorkers(result => {
        
      res.json(result);
    });
  });

const test = {major:"CS" , gender:"Male"}


let x = (req, res) =>{ console.log(req.body);res.json({name:"Omar",age:23,test}); }
app.get( '/' , x );

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));