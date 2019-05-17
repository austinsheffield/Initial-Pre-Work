//Learned that order is important in else if statements. Java reads it top to bottom.
function orderMyLogic(val) {
  if (val >= 10) {
    return "Greater than or equal to 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Less than 10";
  }
}

// Change this value to test
orderMyLogic(7);
