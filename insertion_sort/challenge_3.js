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
  100
  406 157 415 318 472 46 252 187 364 481 450 90 390 35 452 74 196 312 142 160 143 220 483 392 443 488 79 234 68 150 356 496 69 88 177 12 288 120 222 270 441 422 103 321 65 316 448 331 117 183 184 128 323 141 467 31 172 48 95 359 239 209 398 99 440 171 86 233 293 162 121 61 317 52 54 273 30 226 421 64 204 444 418 275 263 108 10 149 497 20 97 136 139 200 266 238 493 22 17 39 
  */
  for(i = 1; i < items.length; i++) {
    var value = items[i]
      , j = i - 1;
    while(items[j] > value){
      items[j + 1] = items[j];
      j = j - 1;
    };
    items[j + 1] = value;
  };
  
  items = items.filter(function(n){return n}); //to knockout NaN

  process.stdout.write(items.join(' '));
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