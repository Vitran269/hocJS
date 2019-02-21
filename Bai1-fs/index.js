var fs = require('fs');
var text = fs.readFileSync('./song1.txt', { encoding : 'utf8'});

fs.writeFileSync('./song2.txt', 'day la song 2');
var text1 = fs.readFileSync('./song2.txt' ,{encoding: 'utf8'});
console.log(text1);

