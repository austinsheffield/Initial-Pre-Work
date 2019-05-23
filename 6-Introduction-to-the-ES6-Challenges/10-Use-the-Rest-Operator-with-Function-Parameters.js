//Learned to use the rest operator with function parameters. Rest operator allows for the creation of functions with a variable number of arguements.
"use strict";
function sum(...args) {
  return args.reduce((a, b) => a +b, 0);
}
console.log(sum(1, 2, 3)); // 6
