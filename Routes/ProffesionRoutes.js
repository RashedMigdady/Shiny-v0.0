const express = require('express');

const router = express.Router();
const ProffesionController = require('../Controllers/ProffesionController');

// @METHOD POST
// for login
router.post('/login', ProffesionController.login);
// @METHOD POST
// for register .
router.post('/register', ProffesionController.register);
// @METHOD POST
// for remove profession
router.post('/CancelJoining/:id', ProffesionController.cancel);
// @METHOD PUT
// Return movies on search .
router.put('/update/:id', ProffesionController.updateInfo);
// @METHOD PUT
// Return movies on search .
router.put('/get-all', ProffesionController.getAllProfessions);

// Exporting Routes.
module.exports = router;