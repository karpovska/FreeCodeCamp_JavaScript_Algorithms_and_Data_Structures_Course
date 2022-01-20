function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
  }
  
function checkSign(num) {
    return (num === 0) ? "zero"
      : (num > 0) ? "positive"
      : "negative";
}
  
console.log(checkSign(10));
console.log(checkEqual(1, 2));

