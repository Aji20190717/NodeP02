var fs = require('fs');

// readFileSync :: 동기 -> a, b, c

/**
    console.log('a');
    var result = fs.readFileSync('Node01/sample.txt', 'utf8');
    console.log(result);
    console.log('c');
 */

// readFile :: 비동기   -> a, c, b

console.log('a');
fs.readFile('Node01/sample.txt', 'utf8', function(err, result) {
    console.log(result);
});
console.log('c');