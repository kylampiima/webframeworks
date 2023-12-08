const express = require('express');
const router = express.Router();

const ctrlLogins = require('../controllers/logins'); 
const ctrlInformation = require('../controllers/information');

/* Login pages */
router.get('/', ctrlLogins.register);
router.get('/login', ctrlLogins.login);
/* Information pages */
router.get('/book/summary',ctrlInformation.fetchBookSummaries);



module.exports = router;


