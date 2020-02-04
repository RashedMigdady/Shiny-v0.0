const express = require('express');

const router = express.Router();
const UserController = require('../Controllers/UserController');

// @METHOD POST
// Get Profession On Search .
router.post('/search/:query', UserController.search);
// @METHOD PUT
// Send Rate For Profession .

router.get('/show/:id' , UserController.showProfession);

// Exporting Routes.
module.exports = router;