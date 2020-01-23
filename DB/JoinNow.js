const db = require("../database")
let Profession = db.Profession

//write your code here 

let readData = (cb) => {
    Profession.find({}, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}
//other solution
let newProfession = (HourlyPrice , yearsOfExperience , ProfessionType , cb) => {
    Profession.create({
        HourlyPrice:HourlyPrice , yearsOfExperience:yearsOfExperience , ProfessionType:ProfessionType
    }, (err, data) => {
        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}

let JoinProfession = (firstName, lastName, phone, Address, email, cb) => {
    Profession.create({
        firstName: firstName, lastName: lastName,
        phone: phone, Address: Address,email: email
    }, (err, data) => {

        if (err) {
            cb(err)
        } else {
            readData(cb)
        }
    })
}

module.exports = {
    readData,
    newProfession,
    JoinProfession
}