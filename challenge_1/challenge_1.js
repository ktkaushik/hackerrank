
/**
 * @params [input]
 */

function processData(input) {

  // convert all values of array to integer
  var values = input.split(' ').map(function (x) {
    return parseInt(x, 10);
  });

  var diffValue = values[1] // the difference between values
    , results = [];

  // slice to array to exlcude the size of array and the difference accepted from the user
  values = values.slice(-(values.length - 2));

  // push the results
  for (var i = values.length - 1; i >= 0; i--) {

    for (var j = values.length - 1; j >= 0; j--) {

      var difference = (Math.abs(values[i] - values[j]));

      if (i > j && (difference ===  diffValue) ) {
        results.push([values[i],values[j]]);
      };
    };

  };

  // write the results
  process.stdout.write(results.length + '\n');

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
