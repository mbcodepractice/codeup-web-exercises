"use strict";
let userInput;
    while(true){
    userInput = parseFloat(prompt("pick an odd number between 1 and 50"));
    if (userInput >= 1 && userInput <= 50 && userInput % 2 !== 0){
      break;
    }
    console.log(userInput);

}






for (let i = 1; i <= 50; i+=2){
    if (i===userInput) {
        console.log ("this number will be skipped");
        continue;
    }

    console.log(`Here is a lovely odd number ${i}`);
}
