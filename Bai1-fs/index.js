var fs = require('fs');

var text = fs.readFileSync('./song1.txt', { encoding : 'utf8'});

console.log(text);

