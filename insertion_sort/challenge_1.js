/**
 *
 */

function processData(input) {
  var splitInputs = input.split(' ');

  splitInputs[0] = splitInputs[0].split('\n')[1];

  var values = splitInputs.map(function (x) {
    return parseInt(x, 10);
  });

  var valueToBeArranged = values[values.length -1];
  var arranged = false;
  for (var i = values.length - 2; i >= 0; i--) {
    if (!arranged) {
      if (values[i] > valueToBeArranged) {
        values[i+1] = values[i];
        process.stdout.write(values.join(' ') + '\n');
      }else {
        values[i+1] = valueToBeArranged;
        arranged = true;
        process.stdout.write(values.join(' ') + '\n');
      };
    };
  };

  if (!arranged) {
    values[0] = valueToBeArranged;
    arranged = true;
    process.stdout.write(values.join(' ') + '\n');
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