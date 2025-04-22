const pool = require('../config/db');

exports.addSchool = async (schoolData) => {
  const [result] = await pool.query(
    'INSERT INTO schools SET ?', 
    [schoolData]
  );
  return result.insertId;
};

exports.getSchoolsByDistance = async (userLat, userLng) => {
  const [rows] = await pool.query(
    `SELECT *, 
      6371 * 1000 * ACOS(
        COS(RADIANS(?)) * COS(RADIANS(latitude)) * 
        COS(RADIANS(longitude) - RADIANS(?)) + 
        SIN(RADIANS(?)) * SIN(RADIANS(latitude))
      ) AS distance 
     FROM schools 
     ORDER BY distance ASC`,
    [userLat, userLng, userLat]
  );
  return rows;
};
