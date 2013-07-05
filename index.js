var fs = require('fs');

/**
* @method readdirRSync
* @param {String} dir
* @return {Array} recursive file structure (including subdirectories)
*/
module.exports = function (dir) {
  var results = [];

  function recursiveDirWalkSync (dir) {
    var list = fs.readdirSync(dir);
    for (var i in list) {
      var file = dir + '/' + list[i];
      var stat = fs.statSync(file);
      if (!stat) { return new Error(); };
      if (stat.isDirectory()) {
        var t_res = recursiveDirWalkSync(file);
        results.concat(t_res);
      } else {
        results.push(file);
      }
    }
    return results;
  }

  recursiveDirWalkSync(dir);
  return results;
}