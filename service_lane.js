
/**
 * This is documented in the order of the input itself
 * 
 * N = no of segments on a road
 * T = no of test cases
 * i = entry segment
 * j = exit segment
 * 
 */

'use strict';

function processData(input) {

  var splitInputs = input.split('\n');

  var N = splitInputs[0].split(' ')[0] // no of segments
    , T = splitInputs[0].split(' ')[1] // no of test cases
    , width = splitInputs[1].split(' ').map(function(num) {
        return parseInt(num, 10);
      }) // width of segments
    , testCases = splitInputs.slice(2).map(function(test) {
        return test.split(' ').map(function(x) {
          return parseInt(x, 10);
        });
      });

  // testCases = testCases.slice(0,-1); need it for testing on the console

  var casesLength = testCases.length
    , output = [];

  for (var count = 0; count < casesLength; count++) {
    var testCase = testCases[count]
      , i = testCase[0] // entry
      , j = testCase[1] // exit
      , segmentWidths = width.slice(i, j+1)
      , len = segmentWidths.length; // including j

    var smallestVal = segmentWidths[0];

    if (smallestVal !== 1) {
      for (var k=1; k < len; k++) {
        if (smallestVal > segmentWidths[k]) {
          smallestVal = segmentWidths[k];
        }
      }
    }

    output.push(parseInt(smallestVal, 10));
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
