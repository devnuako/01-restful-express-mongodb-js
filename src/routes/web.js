const express = require('express');
const router = express.Router();

const { getHomepage, getABC, getXYZ } = require('../controllers/homeController');


// router.Method('/route', handler)
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/xyz', getXYZ);


module.exports = router; //export default
