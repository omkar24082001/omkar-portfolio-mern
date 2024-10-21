const express = require('express');
const { submitForm } = require('../controllers/formController');

const router = express.Router();

// Define POST route for form submission
router.post('/', submitForm);

module.exports = router;
