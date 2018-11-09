console.log("Server running...");

const fs = require('fs'),
    os = require('os'),
    notes = require('./notes.js');
   
console.log('Result: ' + notes.add(9, 5));

var user = os.userInfo();
    
fs.appendFileSync('greetings.txt', `Hello ${user.username}!`);