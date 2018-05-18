// Append "welder-web" to all of the .po file names
// react-intl-gettext expects .po files to be named "<project>-<language>.po",
// but zanata-js outputs "<language>.po". This script fixes that.
//
// This still beats react-intl-po, which requires all of the extracted json
// messages to be present. The problem is that the json files are extracted
// during 'node run build', and 'node run build' also needs the output of
// react-intl-po.

const fs = require('fs');
const glob = require('glob');
const path = require('path');

if (process.argv.length != 4) {
  console.error("Usage: rename-po <po-dir> <prefix>");
  process.exit(1);
}

var podir = process.argv[2];
var prefix = process.argv[3];

glob.sync(podir + "/??.po").forEach(function(filename) {
  fs.rename(
    filename,
    path.join(path.dirname(filename), prefix + "-" + path.basename(filename)),
    (err) => {
      if (err) throw err;
    }
  );
});
