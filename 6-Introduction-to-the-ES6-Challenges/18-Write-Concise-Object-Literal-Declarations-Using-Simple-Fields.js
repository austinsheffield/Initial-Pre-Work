//Learned to use concise object literal declarations using simple fields. Can simplify code to one line.
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return (name, age, gender) => ({name, age, gender});

  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
