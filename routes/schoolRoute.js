const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const schoolController = require('../controllers/schoolController');

router.post('/addSchool', 
  [
    body('name').notEmpty(),
    body('address').notEmpty(),
    body('latitude').isFloat({ min: -90, max: 90 }),
    body('longitude').isFloat({ min: -180, max: 180 })
  ],
  schoolController.addSchool
);

router.get('/listSchools', schoolController.listSchools);

module.exports = router;

