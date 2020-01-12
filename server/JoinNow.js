const express = require("express");
const router = express.Router();
const mongo = require("../DB/JoinNow")

const mongoJoinNow = require("../DB/JoinNow")

//write your code here 

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

router.post("/add", (req, res) => {
    // console.log("req.body", req.body);
    mongo.JoinProfession(req.body, result => {
        // console.log("result", result);
        res.json(result);
    });
});

//other solution
router.post('/:firstName/:lastName/:phone/:Address/:ProfessionType/:email', (req, res) => {
    // console.log("Rawabi server")
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;
    let phone = req.params.phone;
    let Address = req.params.Address;
    
    let ProfessionType = req.params.ProfessionType;
    let email = req.params.email;
    

    mongoJoinNow.newProfession(firstName, lastName, phone, Address,  ProfessionType, email, (result) => {
        res.json(result);
    })
});

module.exports = router;