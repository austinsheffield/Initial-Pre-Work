//Learned that I can test objects for properties using .hasOwnProperty(propName) as an example which will return true or false depending on whether the property is found or not.
//Learned to use .hasOwnProperty(propName) in a boolean if statement.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  return "Not Found";
}

// Test your code by modifying these values
checkObj("gift");
