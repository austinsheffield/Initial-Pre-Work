//Learned to use the class syntax, which is not a full-fledged class based inplementation of object oriented paradigm.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
    this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
