/**
 *
 */

function processData(input) {
  var splitInputs = input.split(' ');

  splitInputs[0] = splitInputs[0].split('\n')[1];

  var items = splitInputs.map(function (x) {
    return parseInt(x, 10);
  });

  /*
  9
  9 8 6 7 3 5 4 1 2

  8 9 6 7 3 5 4 1 2 
  6 8 9 7 3 5 4 1 2 
  6 7 8 9 3 5 4 1 2 
  3 6 7 8 9 5 4 1 2 
  3 5 6 7 8 9 4 1 2 
  3 4 5 6 7 8 9 1 2 
  1 3 4 5 6 7 8 9 2 
  1 2 3 4 5 6 7 8 9 
  */
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
    }
    items[j+1] = value;
    if (i !== 0) process.stdout.write(items.join(' ') + '\n');
  };

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