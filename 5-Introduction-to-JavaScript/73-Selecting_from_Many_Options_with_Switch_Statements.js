//Learned about switch statements and case statements which define multiple values (case). Statements are executed from first matched case value until break is encountered.
// EX Code:
//switch(num) {
// case value1:  \Value should be in order 1-onward
//  statement1;  \Whatever you want it to do.
//  break;       \Ends the sequence.
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    return "alpha";
    break;
  }
  switch(val) {
    case 2:
    return "beta";
    break;
  }
  switch(val) {
    case 3:
    return "gamma";
    break;
  }
  switch(val) {
    case 4:
    return "delta";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
