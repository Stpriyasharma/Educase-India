const { checkSchema } = require('express-validator');

exports.schoolSchema = checkSchema({
  name: {
    notEmpty: true,
    errorMessage: 'School name is required'
  },
  address: {
    notEmpty: true,
    errorMessage: 'Address is required'
  },
  latitude: {
    isFloat: { options: { min: -90, max: 90 } },
    errorMessage: 'Invalid latitude value'
  },
  longitude: {
    isFloat: { options: { min: -180, max: 180 } },
    errorMessage: 'Invalid longitude value'
  }
});
