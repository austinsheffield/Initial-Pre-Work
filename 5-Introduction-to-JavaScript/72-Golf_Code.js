//Practiced writing code to let someone know what they scored in golf. Added my own spin.
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return "Hole-in-one!";
  }
  else if (par == strokes) {
    return "Par";
  }
  else if (strokes <= par - 2) {
    return "Eagle";
  }
  else if (strokes == par - 1) {
    return "Birdie";
  }
  else if (strokes == par + 1) {
    return "Bogey";
  }
  else if (strokes == par + 2) {
    return "Double Bogey";
  }
  else if (strokes >= par + 3) {
    return "Go Home!";
  }
  else {
  return "Give me a real score!"; //My spin
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);
