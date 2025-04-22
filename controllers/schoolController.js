const { validationResult } = require('express-validator');
const SchoolModel = require('../models/schoolModel');

exports.addSchool = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const schoolId = await SchoolModel.addSchool(req.body);
    res.status(201).json({ success: true, schoolId });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const schools = await SchoolModel.getSchoolsByDistance(
      req.query.latitude, 
      req.query.longitude
    );
    res.json({ success: true, data: schools });
  } catch (error) {
    res.status(500).json({ error: 'Database error' });
  }
};

