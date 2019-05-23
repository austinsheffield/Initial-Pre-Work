//Learned the difference between the var and let keywords. let can ony be declared once whereas var can be overwritten with another var.
//Sidenote: if you "use strict", this enables strict mode which catches coding mistakes and unsafe actions.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk(); 
