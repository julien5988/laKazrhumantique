const express = require('express');
const router = express.Router();
const giteCtrl = require('../controllers/gite');


router.post('/', giteCtrl.insererGite);


module.exports = router;
