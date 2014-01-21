/**
 *
 */

function processData(input) {
  var splitInputs = input.split(' ');

  splitInputs[0] = splitInputs[0].split('\n')[1];

  var items = splitInputs.map(function (x) {
    return parseInt(x, 10);
  });

  var count = 0;

  for (var i=0; i < items.length; i++) {
    // store the current value because it may shift later
    var value = items[i];
    
    /*
     * Whenever the value in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one. This creates space in which to insert the value.
     */
    for (var j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
      count += 1;
    }
    items[j+1] = value;
  };

  console.log(count);
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});