
/**
 *
 */

'use strict';

function processData(input) {
  var parse_fun = function (s) { return parseInt(s, 10); };

  var lines = input.split('\n')
   , T = parse_fun(lines.shift())
   , data = lines.splice(0, T).map(parse_fun)
   , dataLength = data.length
   , allValues = {0: 1}
   , cycleVal = 1
   , output = [];

  var isOdd = function (num) { return (num%2) === 1 };

   /**
    * T = no of cases
    * data = the cycles in an array
    */
  for (var val = 1; val < 60; val++) {
    if (isOdd(val)) {
      cycleVal = cycleVal * 2;
      allValues[val] = cycleVal;
    } else {
      cycleVal = cycleVal + 1;
      allValues[val] = cycleVal;
    }
  }

  for (var i = 0; i < dataLength; i ++) {
    output.push(allValues[data[i]]);
  }

  process.stdout.write(output.join('\n'));

}

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
