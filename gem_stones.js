
/**
 * This is documented in the order of the input
 * 
 * N = N no of elements
 * gems = the gems
 */

'use strict';

function processData(input) {

  var splitInputs = input.split('\n')
    , N = parseInt(splitInputs[0], 10)
    , gems = splitInputs.slice(1)
    , allGems = gems[0].split('')
    , count = 0
    , output = []; // split the first gem and store all of its elements

  var gemElements = gems.slice(1, N).map(function(gem) {return gem.split('');})
    , len = allGems.length - 1
    , gemElementsLen = gemElements.length - 1;

  for (var i = 0; i <= len; i++) { // loop through allGems

    var gem = allGems[i];

    for (var k = 0; k <= gemElementsLen; k++) { // loop through gemElements

      var gemLen = gemElements[k].length - 1;

      for (var c = 0; c <= gemLen; c++) {
        // console.log(gem);
        if (gemElements[k][c] === gem) {
          output.push(gem);
        }
      }
      console.log(output);
    }
  }
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
