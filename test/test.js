var fs = require('fs');
var readdirRSync = require('../');

var testDirPath = __dirname + '/testdir';

// writing the test structure onto disc
fs.mkdirSync(testDirPath);
fs.writeFileSync(testDirPath + '/file1.txt', 'hello wolrd 1', 'utf8');
fs.writeFileSync(testDirPath + '/file2.txt', 'hello wolrd 2', 'utf8');
fs.writeFileSync(testDirPath + '/file3.txt', 'hello wolrd 3', 'utf8');
fs.mkdirSync(testDirPath + '/subdir');
fs.writeFileSync(testDirPath + '/subdir/file4.txt', 'hello wolrd 4', 'utf8');

// removing test structure from disk
// if this works, readdirRSync works as well ;)
var dirStructure = readdirRSync(testDirPath);
for (var i in dirStructure) {
  fs.unlinkSync(dirStructure[i]);
}

try {
  fs.rmdirSync(testDirPath + '/subdir');
  fs.rmdirSync(testDirPath);
} catch (e) {
  console.error('readdirRSync::', e);
}

console.log('it workes √');