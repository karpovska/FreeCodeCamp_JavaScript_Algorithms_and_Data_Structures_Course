//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    //console.log(str.slice(-target.length));
    return str.slice(-target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Bastiana", "n"));
  console.log(confirmEnding("Bastiana and nn", "nn"));