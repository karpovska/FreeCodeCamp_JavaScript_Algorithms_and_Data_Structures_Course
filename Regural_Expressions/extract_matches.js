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