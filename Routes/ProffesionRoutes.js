const express = require('express');

const router = express.Router();
const ProffesionController = require('../Controllers/ProffesionController');

// @METHOD POST
// Return popular movies .
router.post('/login', ProffesionController.login);
// @METHOD POST
// Return trending movies .
router.post('/register', ProffesionController.register);
// @METHOD POST
// Return movie details .
router.post('/CancelJoining/:id', ProffesionController.cancel);
// @METHOD PUT
// Return movies on search .
router.put('/update/:id', ProffesionController.updateInfo);
// @METHOD PUT
// Return movies on search .
router.put('/get-all', ProffesionController.getAllProfessions);

// Exporting Routes.
module.exports = router;