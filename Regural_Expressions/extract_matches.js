let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let firstResult = extractStr.match(codingRegex); 
console.log(firstResult);

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let secondResult = twinkleStar.match(starRegex); 
console.log(secondResult);

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let thirdResult = unRegex.test(exampleStr);
console.log(thirdResult);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let fourthResult = quoteSample.match(vowelRegex); // Change this line
console.log(fourthResult);