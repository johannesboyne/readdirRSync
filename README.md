# readdirRSync

Synchronous, recursive readdir. Returns an array of (full) filepaths.

## Example Usage

```(javascript)
var readdirRSync = require('readdirRSync');

var dirStructure = readdirRSync(__dirname + '/testdir'); // return type: Array
/* dirStructure:
[ '/Users/jb/Developing/readdirRSync/test/testdir/file1.txt',
  '/Users/jb/Developing/readdirRSync/test/testdir/file2.txt',
  '/Users/jb/Developing/readdirRSync/test/testdir/file3.txt',
  '/Users/jb/Developing/readdirRSync/test/testdir/subdir/file4.txt' ]
*/
```

## Why Synchronous and Recursive

This module is handy, if you want to walk through the structure on a 'save' path.
If it would be asynchronous the sorting of the structure could vary from time to time.
Example use case: Generating hashes, there you will always want to put fileX before fileY because otherwise the hash would change!

```(javascript)
var readdirRSync = require('readdirRSync');
var crypto       = require('crypto');
var hash         = crypto.createHash('md5');
var files        = readdirRSync(dirname);

for (var i in files) {
  hash.update(fs.readFileSync(files[i]));
}

console.log(hash.digest('hex'));
```

# License

MIT