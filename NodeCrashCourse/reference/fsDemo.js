const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
    if (err) throw err;
    console.log('Folder created...');
});

// File append
fs.appendFile(path.join(__dirname, '/hello.txt'), 'Hello World', err =>{
    if (err) throw err;
    console.log('File Written to...');
});