const express = require("express");
const app = express();
const mongo = require('../Model/User')
app.use(express.json());

const login = (req, res, next) => {
  console.log('REQ BODY',req.body);
    mongo.getUser(req.body, result => {
      res.status(200).json({
        status: "success",
        user: result
      });
    });
};

const register = (req, res, next) => {
    mongo.AddUser(req.body, result => {
      res.status(200).json({
        status: "success",
        user: result
      });
    });
};


const cancel = (req, res, next) => {
    const { id } = req.params;
    mongo.cancel(id, result => {
      // console.log('result', result)
      res.json(result);
    });
  
  // `/CancelJoining/${this.state._id}`  ===>> For React Request
};

const updateInfo = (req, res, next) => {
    const { id } = req.params;
    mongo.updateInfo(id, req.body, result => {
      res.status(200).json({
        status: "Success",
        newInfo: result
      });
    });
};

let getAllProfessions = (req, res, next) =>{
  mongo.getAllProfessions(result => {
    res.status(200).json({
      status: "Success",
      allProffesions: result
    });
  });

}

module.exports = {
  login,
  register,
  cancel,
  updateInfo,
  getAllProfessions
};
