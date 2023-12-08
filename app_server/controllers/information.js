const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://myproject-kqhl.onrender.com';
}

const renderSummaryPage = function (req, res, data) {
  let message = '';
  let book = [];

  if (Array.isArray(data)) {
    if (data.length === 0) {
      message = 'No books found';
    } else {
      book = data;
    }
  } else {
    message = 'API lookup error';
  }

  res.render('summary', {
    title: 'Book Summaries',
    pageHeader: {
      title: 'Book Summary',
      strapline: 'Find great books to read near you!'
    },
    summary: book,
    message: message
  });
};

const fetchBookSummaries = function (req, res) {
  const requestOptions = {
    url: apiOptions.server + '/book/summary',
    method: 'GET',
    json: {}
  };

  request(requestOptions, function (err, response, body) {
    if (!err && response.statusCode === 200) {
      renderSummaryPage(req, res, body);
    } else {
      renderSummaryPage(req, res, []); 
    }
  });
};

module.exports = {
  fetchBookSummaries 
};
