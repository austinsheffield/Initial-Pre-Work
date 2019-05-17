//Learned that if I dont use break; that the program will execute forever. Learned that I can run multiple casees within the same switch.
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
    return "apple";
    break;
  }
  switch (val) {
    case "b":
    return "bird";
    break;
  }
  switch (val) {
    case "c":
    return "cat";
    break;
    default:
    return "stuff";
    break;

  }

  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
