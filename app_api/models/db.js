
const mongoose = require('mongoose');
const dbURI = "mongodb+srv://user1:user1@cluster0.cbvbm0u.mongodb.net/myProject?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./summary');


