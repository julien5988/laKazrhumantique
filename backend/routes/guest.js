const express = require('express');
const router = express.Router();
const guestCtrl = require('../controllers/guest');

router.post('/',guestCtrl.createGuest);

module.exports = router ; 
