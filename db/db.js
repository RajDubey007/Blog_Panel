const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Node_Data')
    .then(() => console.log('Connected to database'))
    .catch((err) => console.log(err));


// mongodb+srv://rajd07:<rajd07>@cluster6.daslz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster6

// git config --global user.name "Your Name"
// git config --global user.email "your.email@example.com"

module.exports = { mongoose }; 
