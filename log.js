var sourceMapSupport = require('source-map-support')

var source = process.argv[2]
var line = process.argv[3]
var column = process.argv[4]

var p = sourceMapSupport.mapSourcePosition(
  {
    source: source,
    line: Number(line),
    column: Number(column)
  }
)

console.log(p.source);
console.log(p.line);
console.log(p.column);
