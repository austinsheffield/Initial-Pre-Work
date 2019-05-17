//Learned that if you do something within a function but do not return it, you will not get that information and the value will be undefined.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(num) {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
