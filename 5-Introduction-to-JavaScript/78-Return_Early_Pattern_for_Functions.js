//This lesson was confusing b/c it gave me code that I wasnt supposed to use. Thought I was supposed to do it that way but I guess I didnt because I looked up another way.
//Basically learned that once a return statement is reached the function stops.
// Setup
function abTest(a, b) {
  // Only change code below this line
  if(a < 0 || b < 0) {
  return;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
