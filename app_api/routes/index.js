const express = require('express');
const router = express.Router();
const Summary = require('../models/summary');
const ctrlInformation = require('../controllers/information');
const ctrlLogins = require('../controllers/logins');


//router.post('/book/summary',ctrlInformation.summariesCreate);
router.get('/book/summary/:bookid',ctrlInformation.summariesReadOne);
router.put('/book/summary/:bookid',ctrlInformation.summariesUpdateOne)
router.delete('/book/summary/:bookid',ctrlInformation.summariesDeleteOne);
router.get('/book/summary/', ctrlInformation.getBookSummaries);
console.log('Accessed /book/summary/id route');

// User Logins Routes
  router.post('/login',ctrlLogins.loginsCreate);
  router.get('/login',ctrlLogins.loginsCreate);
  console.log('Accessed register route');

 
  router.get('/login/:userid',ctrlLogins.loginsReadOne)
  router.put('/login/:userid',ctrlLogins.loginsUpdateOne)
  router.delete('/login/:userid',ctrlLogins.loginsDeleteOne);
  console.log('Accessed login route');

module.exports = router;