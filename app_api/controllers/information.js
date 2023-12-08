const mongoose = require('mongoose');
const Sum = mongoose.model('Summary');

const summariesCreate = function (req, res) {
    Sum.create({ 
    name: req.body.name,
    author: req.body.author,
    pages: req.body.pages, 
    genre: req.body.genre,
    published: req.body.published,
    description: req.body.description
    }).then ((summary, err) => { 
    if (err) {
    res
    .status(400)
    .json(err);
    } else {
    res
    .status(201)
    .json(summary);
    }
    });
    
};


const summariesReadOne = function (req, res) {
if (req.params && req.params.bookid) {  
    Sum
      .findById(req.params.bookid)
      .then((summary,err) => {
        if (!summary) {
          res	
            .status(404) 
            .json({	
              "message": "bookid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(summary);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No bookid in request"
      });		
  }
};    
const summariesUpdateOne = function (req, res) {
    res
    .status(200)
    .json({"status" : "success"});
 };
const summariesDeleteOne = function (req, res) { 
    res
    .status(200)
    .json({"status" : "success"});
};
// Define a function to retrieve book summaries
const getBookSummaries = async (req, res) => {
  try {
    console.log('Entering getBookSummaries'); 
    const summary = await Sum.find({}); 
    console.log('Database query completed'); 

    res.render('summary', { summary });
    //res.status(200).json(summaries); 
    console.log('Response sent'); 
  } catch (error) {
    console.error('Error in getBookSummaries:', error); 
    res.status(500).json({ error: 'An error occurred while fetching book summaries' });
  }
};



module.exports = {
    summariesCreate,
    getBookSummaries,
    summariesReadOne,
    summariesUpdateOne,
    summariesDeleteOne
};
