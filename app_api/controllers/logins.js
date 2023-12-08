const mongoose = require('mongoose');
const Sum = mongoose.model('Summary');

const loginsCreate = function  (req, res, next) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            
        });
        req.session.save((err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/');
        });
    };
    
const loginsReadOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});    
 };
const loginsUpdateOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };
const loginsDeleteOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
    };

module.exports = {
  loginsCreate,
  loginsReadOne,
  loginsUpdateOne,
  loginsDeleteOne
};