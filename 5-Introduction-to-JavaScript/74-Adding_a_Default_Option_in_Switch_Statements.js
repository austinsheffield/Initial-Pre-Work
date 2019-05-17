//Learned default option in switch statements which basically is like an else in else if statements. If nothing works then it defaults to this.
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
