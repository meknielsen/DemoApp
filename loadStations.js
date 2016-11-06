var fs = require('fs');
var readline = require('readline');

var filename = process.argv[2];

var array = [];
var json = '';

readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
}).on('line', function(line) {
    array = line.split(';');
    for (var i = 0; i<array.length; i++) {
        json = '{'
        console.log('Line ' + i + ': ' + array[i]);
    }
    console.log('******************');
});