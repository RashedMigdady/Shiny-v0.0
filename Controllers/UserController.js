const express = require("express");
const app = express();
const mongo = require('../Model/User')
app.use(express.json());



const addRate = (req, res, next) => {
  const { id, rate } = req.params;

  mongo.addRate(id, rate, result => {
    console.log("result", result);
    res.json(result);
  });
};

const search = (req, res, next) => {
  const { query } = req.params;
  mongo.search(query, result => {
    console.log("result", result);
    res.json(result);
  });
};

module.exports = {
  addRate,
  search
};
