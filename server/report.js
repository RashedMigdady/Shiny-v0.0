const express = require("express");
const router = express.Router();
const mongo = require("../DB/report");




router.get("/test", (req, res) => {
  mongo.readData(result => {
    res.json(result);
  });
});
router.put("/", (req, res) => {
  mongo.updatePro(req.body, result => {
    res.json(result);
  });
});

// const test = {major:"CS" , gender:"Male"}
// app.get('/', (req, res) => res.json({name:"Rashed",age:23,test}))

router.get("/count", (req, res) => {
  mongo.countPro(result => {
    res.json(result);
  });
})



module.exports = router;