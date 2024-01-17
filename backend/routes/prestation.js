const express = require('express');
const router = express.Router();
const prestationCtrl = require('../controllers/prestation');

router.post('/',prestationCtrl.insertPrestation);

module.exports = router ;