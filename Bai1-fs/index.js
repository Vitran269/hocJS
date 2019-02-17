var fs = require('fs');

var text = fs.readFileSync('./song1.txt', { encoding : 'utf8'});

fs.writeFileSync('./song2.txt', 'day la song 2');

console.log(text);

