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
let newProfession = (firstName, lastName, phone, Address, ProfessionType, email, cb) => {
    Profession.create({
        firstName: firstName, lastName: lastName,
        phone: phone, Address: Address, ProfessionType: ProfessionType,
        email: email
    }, (err, data) => {

        if (err) {
            cb(err)
        } else {
            cb(data)
        }
    })
}

let JoinProfession = (Pro, cb) => {
    Profession.create(Pro, (err, data) => {

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