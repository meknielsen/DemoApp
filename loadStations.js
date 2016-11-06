var fs = require('fs');
var readline = require('readline');

var filename = process.argv[2];

readline.createInterface({
    input: fs.createReadStream(filename),
    terminal: false
}).on('line', function(line) {
   var lineitems = line.split(';');
   if (lineitems[5] == null) {
       lineitems[5] = '';
   }
   if (lineitems.length==6) {
       console.log('Line: ' + line);
   } 
});