// Learned that strict equality (===) is different from equality operator(==) where the strict equality will NOT perform a type conversion.
//Basically if the values are different types (Ex: string, number) then it returns false.
// Setup
function testStrict(val) {
  if (val=== 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
